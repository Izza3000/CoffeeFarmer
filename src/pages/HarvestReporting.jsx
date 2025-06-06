import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { useTheme } from "../lib/ThemeContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HarvestReporting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  const [user, setUser] = useState(null);
  const [farmerDetails, setFarmerDetails] = useState(null); // Will hold the current farmer's details
  const [plantDataList, setPlantDataList] = useState([]); // To populate the plant_id dropdown
  const [harvestDataList, setHarvestDataList] = useState([]);
  const [harvestInputForm, setHarvestInputForm] = useState({
    harvest_id: null, // null for new entry, ID for editing
    farmer_id: null,
    plant_id: "", // Make sure this is initially an empty string for the select input
    harvest_date: "",
    coffee_raw_quantity: "", // NEW NAME (float8)
    coffee_dry_quantity: "", // NEW NAME (float8)
    coffee_premium_grade: "", // NEW GRADE FIELD (float8)
    coffee_fine_grade: "", // NEW GRADE FIELD (float8)
    coffee_commercial_grade: "", // NEW GRADE FIELD (float8)
  });
  const [showHarvestForm, setShowHarvestForm] = useState(false);
  const [isEditingHarvest, setIsEditingHarvest] = useState(false);

  useEffect(() => {
    const fetchUserAndData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/login");
        return;
      }
      setUser(user);

      // Fetch user's role for navigation links
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("first_name, last_name, email, role")
        .eq("email", user.email)
        .single();
      if (!userError) setUser(prevUser => ({ ...prevUser, ...userData }));

      // Fetch farmer details (needed for farmer_id)
      const { data: farmerData, error: farmerError } = await supabase
        .from("farmer_detail")
        .select("id") // Only need the ID for linking
        .eq("id", user.id)
        .single();

      if (farmerError && farmerError.code === 'PGRST116') { // No rows found
        toast.info("Please declare your farm details first in 'Land & Plant Declaration'.");
        setFarmerDetails(null);
        setPlantDataList([]); // Clear plant list if no farmer details
        setHarvestDataList([]); // Clear harvest list if no farmer details
        return;
      } else if (farmerData) {
        setFarmerDetails(farmerData);
        toast.info("Loading harvest data...");

        // Fetch plant data for this farmer (to populate the dropdown)
        const { data: plants, error: plantsError } = await supabase
          .from("plant_data")
          .select("plant_id, coffee_variety, planting_date")
          .eq("farmer_id", farmerData.id);

        if (!plantsError) {
          setPlantDataList(plants || []);
        } else {
          console.error("Error fetching plant data for dropdown:", plantsError);
          toast.error("Error loading plant data for selection.");
        }

        // Fetch harvest data for this farmer
        const { data: harvests, error: harvestsError } = await supabase
          .from("harvest_data")
          .select("*")
          .eq("farmer_id", farmerData.id)
          .order("harvest_date", { ascending: false }); // Order by date

        if (!harvestsError) {
          setHarvestDataList(harvests || []);
          if (harvests.length === 0) {
            toast.info("No harvest data recorded yet.");
          }
        } else {
          console.error("Error fetching harvest data:", harvestsError);
          toast.error(`Error fetching harvest data: ${harvestsError.message}`);
        }
      } else if (farmerError) {
        console.error("Error fetching farmer details:", farmerError);
        toast.error("Error fetching farmer details. Cannot load harvest data.");
      }
    };
    fetchUserAndData();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const handleHarvestInputChange = (e) => {
    const { name, value } = e.target;
    setHarvestInputForm((prev) => ({ ...prev, [name]: value }));
  };

  const saveHarvestData = async (e) => {
    e.preventDefault();

    if (!farmerDetails || !farmerDetails.id) {
      toast.error("Farmer details not loaded. Cannot save harvest data.");
      return;
    }

    if (!harvestInputForm.harvest_date || !harvestInputForm.plant_id ||
        harvestInputForm.coffee_raw_quantity === "" ||
        harvestInputForm.coffee_dry_quantity === "" ||
        harvestInputForm.coffee_premium_grade === "" ||
        harvestInputForm.coffee_fine_grade === "" ||
        harvestInputForm.coffee_commercial_grade === ""
    ) {
      toast.warning("Please fill all harvest data fields.");
      return;
    }

    const parsedRawQuantity = parseFloat(harvestInputForm.coffee_raw_quantity);
    if (isNaN(parsedRawQuantity) || parsedRawQuantity < 0) {
      toast.warning("Raw coffee quantity must be a non-negative number.");
      return;
    }

    const parsedDryQuantity = parseFloat(harvestInputForm.coffee_dry_quantity);
    if (isNaN(parsedDryQuantity) || parsedDryQuantity < 0) {
      toast.warning("Dry coffee quantity must be a non-negative number.");
      return;
    }

    const parsedPremiumGrade = parseFloat(harvestInputForm.coffee_premium_grade);
    if (isNaN(parsedPremiumGrade) || parsedPremiumGrade < 0) {
      toast.warning("Premium grade must be a non-negative number.");
      return;
    }
    const parsedFineGrade = parseFloat(harvestInputForm.coffee_fine_grade);
    if (isNaN(parsedFineGrade) || parsedFineGrade < 0) {
      toast.warning("Fine grade must be a non-negative number.");
      return;
    }
    const parsedCommercialGrade = parseFloat(harvestInputForm.coffee_commercial_grade);
    if (isNaN(parsedCommercialGrade) || parsedCommercialGrade < 0) {
      toast.warning("Commercial grade must be a non-negative number.");
      return;
    }

    try {
      const harvestDataToSave = {
        plant_id: harvestInputForm.plant_id,
        harvest_date: harvestInputForm.harvest_date,
        coffee_raw_quantity: parsedRawQuantity,
        coffee_dry_quantity: parsedDryQuantity,
        coffee_premium_grade: parsedPremiumGrade,
        coffee_fine_grade: parsedFineGrade,
        coffee_commercial_grade: parsedCommercialGrade,
      };

      if (harvestInputForm.harvest_id) {
        // Update existing record
        const { error: updateError } = await supabase
          .from("harvest_data")
          .update(harvestDataToSave)
          .eq("harvest_id", harvestInputForm.harvest_id)
          .eq("farmer_id", farmerDetails.id); // Ensure user can only update their own records

        if (updateError) throw updateError;
        toast.success("Harvest data updated successfully!");

      } else {
        // Insert new record
        const { error: insertError } = await supabase
          .from("harvest_data")
          .insert({
            ...harvestDataToSave,
            farmer_id: farmerDetails.id, // Link to the farmer
          });

        if (insertError) throw insertError;
        toast.success("Harvest data added successfully!");
      }

      // Re-fetch all harvest data to update the list
      const { data: updatedHarvestList, error: fetchError } = await supabase
        .from("harvest_data")
        .select("*")
        .eq("farmer_id", farmerDetails.id)
        .order("harvest_date", { ascending: false });

      if (fetchError) throw fetchError;
      setHarvestDataList(updatedHarvestList || []);

      // Reset form and hide it
      setHarvestInputForm({
        harvest_id: null,
        farmer_id: farmerDetails.id, // Keep farmer_id for consistency
        plant_id: "",
        harvest_date: "",
        coffee_raw_quantity: "",
        coffee_dry_quantity: "",
        coffee_premium_grade: "",
        coffee_fine_grade: "",
        coffee_commercial_grade: "",
      });
      setShowHarvestForm(false);
      setIsEditingHarvest(false);

    } catch (error) {
      console.error("Error saving harvest data:", error);
      toast.error(`Error saving harvest data: ${error.message}`);
    }
  };

  const editHarvest = (harvest) => {
    setHarvestInputForm({
      harvest_id: harvest.harvest_id,
      farmer_id: harvest.farmer_id,
      plant_id: harvest.plant_id,
      harvest_date: harvest.harvest_date.split('T')[0], // Format for date input
      coffee_raw_quantity: harvest.coffee_raw_quantity,
      coffee_dry_quantity: harvest.coffee_dry_quantity,
      coffee_premium_grade: harvest.coffee_premium_grade,
      coffee_fine_grade: harvest.coffee_fine_grade,
      coffee_commercial_grade: harvest.coffee_commercial_grade,
    });
    setShowHarvestForm(true);
    setIsEditingHarvest(true);
  };

  const deleteHarvest = async (harvestId) => {
    if (!window.confirm("Are you sure you want to delete this harvest entry?")) return;

    try {
      const { error } = await supabase
        .from("harvest_data")
        .delete()
        .eq("harvest_id", harvestId)
        .eq("farmer_id", farmerDetails.id); // Ensure user can only delete their own records

      if (error) throw error;

      toast.success("Harvest data deleted successfully!");
      setHarvestDataList(harvestDataList.filter(harvest => harvest.harvest_id !== harvestId));

      // If the deleted harvest was being edited, reset the form
      if (harvestInputForm.harvest_id === harvestId) {
        setHarvestInputForm({
          harvest_id: null,
          farmer_id: farmerDetails.id,
          plant_id: "",
          harvest_date: "",
          coffee_raw_quantity: "",
          coffee_dry_quantity: "",
          coffee_premium_grade: "",
          coffee_fine_grade: "",
          coffee_commercial_grade: "",
        });
        setShowHarvestForm(false);
        setIsEditingHarvest(false);
      }
    } catch (error) {
      console.error("Error deleting harvest data:", error);
      toast.error(`Error deleting harvest data: ${error.message}`);
    }
  };

  const cancelHarvestEdit = () => {
    setHarvestInputForm({
      harvest_id: null,
      farmer_id: farmerDetails?.id,
      plant_id: "",
      harvest_date: "",
      coffee_raw_quantity: "",
      coffee_dry_quantity: "",
      coffee_premium_grade: "",
      coffee_fine_grade: "",
      coffee_commercial_grade: "",
    });
    setShowHarvestForm(false);
    setIsEditingHarvest(false);
  };

  const adminLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "User Management", path: "/user-management" },
    { name: "Predictive Analytics", path: "/predictive-analytics" },
    { name: "Data Entry", path: "/data-entry" },
    { name: "DSS Recommendations", path: "/dss-recommendations" },
    { name: "Coffee Grade Predictor", path: "/coffee-grader" },
    { name: "Land & Plant Declaration", path: "/land-declaration" },
  ];

  const userLinks = [
    { name: "Dashboard", path: "/farmer-dashboard" },
    { name: "User Profile", path: "/user-profile" },
    { name: "Predictive Analytics", path: "/predictive-analytics" },
    { name: "DSS Recommendations", path: "/dss-recommendations" },
    { name: "Coffee Grade Predictor", path: "/coffee-grader" },
    { name: "Land & Plant Declaration", path: "/land-declaration" },
    { name: "Harvest Reporting", path: "/harvest-reporting" },
  ];

  const navLinks = user?.role === "admin" ? adminLinks : userLinks;

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} flex`}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkMode ? "dark" : "light"}
      />
      {/* Sidebar Navigation */}
      <div className={`w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg relative`}>
        <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">☕</div>
              <h1 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Harvest Reporting</h1>
            </div>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-md ${isDarkMode ? 'text-yellow-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <button
                  onClick={() => navigate(link.path)}
                  className={`w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? isDarkMode 
                        ? 'bg-gray-700 text-indigo-400'
                        : 'bg-indigo-50 text-indigo-500'
                      : isDarkMode
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-indigo-400'
                        : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-indigo-400'
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`sticky bottom-0 w-full p-4 border-t ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
          <button
            onClick={handleLogout}
            className={`w-full px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isDarkMode
                ? 'text-indigo-400 bg-gray-700 hover:bg-gray-600 focus:ring-indigo-500'
                : 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100 focus:ring-indigo-500'
            }`}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Harvest Reporting</h1>
            {user && (
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Record and manage your coffee harvest data
              </p>
            )}
          </div>

          {!farmerDetails && (
             <div className="info-card">
                 <p>You need to declare your farm details first in the "Land & Plant Declaration" before you can record harvest data.</p>
                 <button onClick={() => navigate("/land-declaration")} className="add-data-btn">Go to Land & Plant Declaration</button>
             </div>
          )}

          {farmerDetails && plantDataList.length === 0 && !showHarvestForm && (
            <div className="info-card">
              <p>You need to declare at least one plant entry in "Land & Plant Declaration" before adding harvest data.</p>
              <button onClick={() => navigate("/land-declaration")} className="add-data-btn">Add Plant Data</button>
            </div>
          )}

          {/* Display existing harvest data */}
          {farmerDetails && harvestDataList.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {harvestDataList.map((harvest) => (
                <div key={harvest.harvest_id} className={`p-4 rounded-lg shadow-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Harvest #{harvest.harvest_id}
                    </h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => editHarvest(harvest)}
                        className={`p-1.5 rounded-md transition-colors ${
                          isDarkMode
                            ? 'text-indigo-400 hover:text-indigo-300 hover:bg-gray-700'
                            : 'text-indigo-600 hover:text-indigo-500 hover:bg-indigo-50'
                        }`}
                        title="Edit Harvest"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => deleteHarvest(harvest.harvest_id)}
                        className={`p-1.5 rounded-md transition-colors ${
                          isDarkMode
                            ? 'text-red-400 hover:text-red-300 hover:bg-gray-700'
                            : 'text-red-600 hover:text-red-500 hover:bg-red-50'
                        }`}
                        title="Delete Harvest"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <svg className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {new Date(harvest.harvest_date).toLocaleDateString()}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <svg className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {plantDataList.find(p => p.plant_id === harvest.plant_id)?.coffee_variety || 'Unknown Variety'}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Raw Coffee</p>
                        <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {harvest.coffee_raw_quantity} kg
                        </p>
                      </div>
                      <div>
                        <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Dry Coffee</p>
                        <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {harvest.coffee_dry_quantity} kg
                        </p>
                      </div>
                      <div>
                        <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Premium Grade</p>
                        <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {harvest.coffee_premium_grade}
                        </p>
                      </div>
                      <div>
                        <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Fine Grade</p>
                        <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {harvest.coffee_fine_grade}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Commercial Grade</p>
                        <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {harvest.coffee_commercial_grade}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            farmerDetails && plantDataList.length > 0 && !showHarvestForm && (
              <div className={`text-center py-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <svg className="mx-auto h-12 w-12 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-sm">No harvest data recorded for this farm yet.</p>
                <p className="text-sm mt-1">Click "Add New Harvest Data" to get started.</p>
              </div>
            )
          )}

          {/* Button to add new harvest data or show form */}
          {farmerDetails && plantDataList.length > 0 && !showHarvestForm && (
            <button
              onClick={() => {
                setShowHarvestForm(true);
                setIsEditingHarvest(false);
                setHarvestInputForm({ // Reset form for new entry
                  harvest_id: null,
                  farmer_id: farmerDetails.id,
                  plant_id: "", // Ensure this is empty for new selection
                  harvest_date: "",
                  coffee_raw_quantity: "",
                  coffee_dry_quantity: "",
                  coffee_premium_grade: "",
                  coffee_fine_grade: "",
                  coffee_commercial_grade: "",
                });
              }}
              className="add-data-btn"
              style={{ marginTop: '20px' }}
            >
              Add New Harvest Data
            </button>
          )}

          {/* Harvest Data Input Form (for Add/Edit) */}
          {showHarvestForm && farmerDetails && (
            <div className="data-input-section">
              <h3>{isEditingHarvest ? "Edit Harvest Data" : "Add New Harvest Data"}</h3>
              <form onSubmit={saveHarvestData} className="data-form">
                <div className="form-group">
                  <label htmlFor="harvest_date">Harvest Date:</label>
                  <input
                    type="date"
                    id="harvest_date"
                    name="harvest_date"
                    value={harvestInputForm.harvest_date || ""}
                    onChange={handleHarvestInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="plant_id">Associated Plant:</label>
                  <select
                    id="plant_id"
                    name="plant_id"
                    value={harvestInputForm.plant_id || ""}
                    onChange={handleHarvestInputChange}
                    required
                    className="form-input"
                    disabled={plantDataList.length === 0} // Disable if no plants are available
                  >
                    <option value="">-- Select a Plant --</option>
                    {plantDataList.map((plant) => (
                      <option key={plant.plant_id} value={plant.plant_id}>
                        Plant ID: {plant.plant_id} - Variety: {plant.coffee_variety} (Planted: {new Date(plant.planting_date).toLocaleDateString()})
                      </option>
                    ))}
                  </select>
                  {plantDataList.length === 0 && (
                      <p className="form-helper-text">No plants available. Please add plants in "Land & Plant Declaration" first.</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="coffee_raw_quantity">Raw Coffee Quantity (kg):</label>
                  <input
                    type="number"
                    step="0.01" // Allow decimal for quantity
                    id="coffee_raw_quantity"
                    name="coffee_raw_quantity"
                    value={harvestInputForm.coffee_raw_quantity || ""}
                    onChange={handleHarvestInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="coffee_dry_quantity">Dry Coffee Quantity (kg):</label>
                  <input
                    type="number"
                    step="0.01" // Allow decimal for quantity
                    id="coffee_dry_quantity"
                    name="coffee_dry_quantity"
                    value={harvestInputForm.coffee_dry_quantity || ""}
                    onChange={handleHarvestInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="coffee_premium_grade">Premium Grade:</label>
                  <input
                    type="number"
                    step="0.01"
                    id="coffee_premium_grade"
                    name="coffee_premium_grade"
                    value={harvestInputForm.coffee_premium_grade || ""}
                    onChange={handleHarvestInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="coffee_fine_grade">Fine Grade:</label>
                  <input
                    type="number"
                    step="0.01"
                    id="coffee_fine_grade"
                    name="coffee_fine_grade"
                    value={harvestInputForm.coffee_fine_grade || ""}
                    onChange={handleHarvestInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="coffee_commercial_grade">Commercial Grade:</label>
                  <input
                    type="number"
                    step="0.01"
                    id="coffee_commercial_grade"
                    name="coffee_commercial_grade"
                    value={harvestInputForm.coffee_commercial_grade || ""}
                    onChange={handleHarvestInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-actions">
                  <button type="submit" className="submit-btn">
                    {isEditingHarvest ? "Update Harvest" : "Save Harvest"}
                  </button>
                  <button type="button" onClick={cancelHarvestEdit} className="cancel-btn">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HarvestReporting;