import {
  AmbientLight,
  AnimationClip,
  Bone,
  BufferGeometry,
  ClampToEdgeWrapping,
  Color,
  ColorManagement,
  Curve,
  DirectionalLight,
  EquirectangularReflectionMapping,
  Euler,
  FileLoader,
  Float32BufferAttribute,
  Group,
  Line,
  LineBasicMaterial,
  Loader,
  LoaderUtils,
  MathUtils,
  Matrix3,
  Matrix4,
  Mesh,
  MeshLambertMaterial,
  MeshPhongMaterial,
  NumberKeyframeTrack,
  Object3D,
  PerspectiveCamera,
  PointLight,
  PropertyBinding,
  Quaternion,
  QuaternionKeyframeTrack,
  RepeatWrapping,
  SRGBColorSpace,
  ShapeUtils,
  Skeleton,
  SkinnedMesh,
  SpotLight,
  Texture,
  TextureLoader,
  Uint16BufferAttribute,
  Vector2,
  Vector3,
  Vector4,
  VectorKeyframeTrack
} from "./chunk-QGM3QIZS.js";
import "./chunk-2GTGKKMZ.js";

// node_modules/three/examples/jsm/libs/fflate.module.js
var ch2 = {};
var wk = function(c, id, msg, transfer, cb) {
  var w = new Worker(ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([
    c + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'
  ], { type: "text/javascript" }))));
  w.onmessage = function(e) {
    var d = e.data, ed = d.$e$;
    if (ed) {
      var err2 = new Error(ed[0]);
      err2["code"] = ed[1];
      err2.stack = ed[2];
      cb(err2, null);
    } else
      cb(null, d);
  };
  w.postMessage(msg, transfer);
  return w;
};
var u8 = Uint8Array;
var u16 = Uint16Array;
var i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i = 0; i < 31; ++i) {
    b[i] = start += 1 << eb[i - 1];
  }
  var r = new i32(b[30]);
  for (var i = 1; i < 30; ++i) {
    for (var j = b[i]; j < b[i + 1]; ++j) {
      r[j] = j - b[i] << 5 | i;
    }
  }
  return { b, r };
};
var _a = freb(fleb, 2);
var fl = _a.b;
var revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var fd = _b.b;
var revfd = _b.r;
var rev = new u16(32768);
for (i = 0; i < 32768; ++i) {
  x = (i & 43690) >> 1 | (i & 21845) << 1;
  x = (x & 52428) >> 2 | (x & 13107) << 2;
  x = (x & 61680) >> 4 | (x & 3855) << 4;
  rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
}
var x;
var i;
var hMap = function(cd, mb, r) {
  var s = cd.length;
  var i = 0;
  var l = new u16(mb);
  for (; i < s; ++i) {
    if (cd[i])
      ++l[cd[i] - 1];
  }
  var le = new u16(mb);
  for (i = 1; i < mb; ++i) {
    le[i] = le[i - 1] + l[i - 1] << 1;
  }
  var co;
  if (r) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        var sv = i << 4 | cd[i];
        var r_1 = mb - cd[i];
        var v = le[cd[i] - 1]++ << r_1;
        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          co[rev[v] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        co[i] = rev[le[cd[i] - 1]++] >> 15 - cd[i];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (i = 0; i < 144; ++i)
  flt[i] = 8;
var i;
for (i = 144; i < 256; ++i)
  flt[i] = 9;
var i;
for (i = 256; i < 280; ++i)
  flt[i] = 7;
var i;
for (i = 280; i < 288; ++i)
  flt[i] = 8;
var i;
var fdt = new u8(32);
for (i = 0; i < 32; ++i)
  fdt[i] = 5;
var i;
var flm = hMap(flt, 9, 0);
var flrm = hMap(flt, 9, 1);
var fdm = hMap(fdt, 5, 0);
var fdrm = hMap(fdt, 5, 1);
var max = function(a) {
  var m = a[0];
  for (var i = 1; i < a.length; ++i) {
    if (a[i] > m)
      m = a[i];
  }
  return m;
};
var bits = function(d, p, m) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
var bits16 = function(d, p) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
var shft = function(p) {
  return (p + 7) / 8 | 0;
};
var slc = function(v, s, e) {
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  return new u8(v.subarray(s, e));
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e = new Error(msg || ec[ind]);
  e.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e, err);
  if (!nt)
    throw e;
  return e;
};
var inflt = function(dat, st, buf, dict) {
  var sl = dat.length, dl = dict ? dict.length : 0;
  if (!sl || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf;
  var resize = noBuf || st.i != 2;
  var noSt = st.i;
  if (noBuf)
    buf = new u8(sl * 3);
  var cbuf = function(l2) {
    var bl = buf.length;
    if (l2 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l2));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
        if (t > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + l);
        buf.set(dat.subarray(s, t), bt);
        st.b = bt += l, st.p = pos = t * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i = 0; i < hcLen; ++i) {
          clt[clim[i]] = bits(dat, pos + i * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i = 0; i < tl; ) {
          var r = clm[bits(dat, pos, clbmsk)];
          pos += r & 15;
          var s = r >> 4;
          if (s < 16) {
            ldt[i++] = s;
          } else {
            var c = 0, n = 0;
            if (s == 16)
              n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
            else if (s == 17)
              n = 3 + bits(dat, pos, 7), pos += 3;
            else if (s == 18)
              n = 11 + bits(dat, pos, 127), pos += 7;
            while (n--)
              ldt[i++] = c;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (resize)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
      pos += c & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i = sym - 257, b = fleb[i];
          add = bits(dat, pos, (1 << b) - 1) + fl[i];
          pos += b;
        }
        var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
        if (!d)
          err(3);
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + 131072);
        var end = bt + add;
        if (bt < dt) {
          var shift = dl - dt, dend = Math.min(dt, end);
          if (shift + bt < 0)
            err(3);
          for (; bt < dend; ++bt)
            buf[bt] = dict[shift + bt];
        }
        for (; bt < end; ++bt)
          buf[bt] = buf[bt - dt];
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
var wbits = function(d, p, v) {
  v <<= p & 7;
  var o = p / 8 | 0;
  d[o] |= v;
  d[o + 1] |= v >> 8;
};
var wbits16 = function(d, p, v) {
  v <<= p & 7;
  var o = p / 8 | 0;
  d[o] |= v;
  d[o + 1] |= v >> 8;
  d[o + 2] |= v >> 16;
};
var hTree = function(d, mb) {
  var t = [];
  for (var i = 0; i < d.length; ++i) {
    if (d[i])
      t.push({ s: i, f: d[i] });
  }
  var s = t.length;
  var t2 = t.slice();
  if (!s)
    return { t: et, l: 0 };
  if (s == 1) {
    var v = new u8(t[0].s + 1);
    v[t[0].s] = 1;
    return { t: v, l: 1 };
  }
  t.sort(function(a, b) {
    return a.f - b.f;
  });
  t.push({ s: -1, f: 25001 });
  var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
  t[0] = { s: -1, f: l.f + r.f, l, r };
  while (i1 != s - 1) {
    l = t[t[i0].f < t[i2].f ? i0++ : i2++];
    r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
    t[i1++] = { s: -1, f: l.f + r.f, l, r };
  }
  var maxSym = t2[0].s;
  for (var i = 1; i < s; ++i) {
    if (t2[i].s > maxSym)
      maxSym = t2[i].s;
  }
  var tr = new u16(maxSym + 1);
  var mbt = ln(t[i1 - 1], tr, 0);
  if (mbt > mb) {
    var i = 0, dt = 0;
    var lft = mbt - mb, cst = 1 << lft;
    t2.sort(function(a, b) {
      return tr[b.s] - tr[a.s] || a.f - b.f;
    });
    for (; i < s; ++i) {
      var i2_1 = t2[i].s;
      if (tr[i2_1] > mb) {
        dt += cst - (1 << mbt - tr[i2_1]);
        tr[i2_1] = mb;
      } else
        break;
    }
    dt >>= lft;
    while (dt > 0) {
      var i2_2 = t2[i].s;
      if (tr[i2_2] < mb)
        dt -= 1 << mb - tr[i2_2]++ - 1;
      else
        ++i;
    }
    for (; i >= 0 && dt; --i) {
      var i2_3 = t2[i].s;
      if (tr[i2_3] == mb) {
        --tr[i2_3];
        ++dt;
      }
    }
    mbt = mb;
  }
  return { t: new u8(tr), l: mbt };
};
var ln = function(n, l, d) {
  return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
};
var lc = function(c) {
  var s = c.length;
  while (s && !c[--s])
    ;
  var cl = new u16(++s);
  var cli = 0, cln = c[0], cls = 1;
  var w = function(v) {
    cl[cli++] = v;
  };
  for (var i = 1; i <= s; ++i) {
    if (c[i] == cln && i != s)
      ++cls;
    else {
      if (!cln && cls > 2) {
        for (; cls > 138; cls -= 138)
          w(32754);
        if (cls > 2) {
          w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
          cls = 0;
        }
      } else if (cls > 3) {
        w(cln), --cls;
        for (; cls > 6; cls -= 6)
          w(8304);
        if (cls > 2)
          w(cls - 3 << 5 | 8208), cls = 0;
      }
      while (cls--)
        w(cln);
      cls = 1;
      cln = c[i];
    }
  }
  return { c: cl.subarray(0, cli), n: s };
};
var clen = function(cf, cl) {
  var l = 0;
  for (var i = 0; i < cl.length; ++i)
    l += cf[i] * cl[i];
  return l;
};
var wfblk = function(out, pos, dat) {
  var s = dat.length;
  var o = shft(pos + 2);
  out[o] = s & 255;
  out[o + 1] = s >> 8;
  out[o + 2] = out[o] ^ 255;
  out[o + 3] = out[o + 1] ^ 255;
  for (var i = 0; i < s; ++i)
    out[o + i + 4] = dat[i];
  return (o + 4 + s) * 8;
};
var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
  wbits(out, p++, final);
  ++lf[256];
  var _a2 = hTree(lf, 15), dlt = _a2.t, mlb = _a2.l;
  var _b2 = hTree(df, 15), ddt = _b2.t, mdb = _b2.l;
  var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
  var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
  var lcfreq = new u16(19);
  for (var i = 0; i < lclt.length; ++i)
    ++lcfreq[lclt[i] & 31];
  for (var i = 0; i < lcdt.length; ++i)
    ++lcfreq[lcdt[i] & 31];
  var _e = hTree(lcfreq, 7), lct = _e.t, mlcb = _e.l;
  var nlcc = 19;
  for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
    ;
  var flen = bl + 5 << 3;
  var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
  var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
  if (bs >= 0 && flen <= ftlen && flen <= dtlen)
    return wfblk(out, p, dat.subarray(bs, bs + bl));
  var lm, ll, dm, dl;
  wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
  if (dtlen < ftlen) {
    lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
    var llm = hMap(lct, mlcb, 0);
    wbits(out, p, nlc - 257);
    wbits(out, p + 5, ndc - 1);
    wbits(out, p + 10, nlcc - 4);
    p += 14;
    for (var i = 0; i < nlcc; ++i)
      wbits(out, p + 3 * i, lct[clim[i]]);
    p += 3 * nlcc;
    var lcts = [lclt, lcdt];
    for (var it = 0; it < 2; ++it) {
      var clct = lcts[it];
      for (var i = 0; i < clct.length; ++i) {
        var len = clct[i] & 31;
        wbits(out, p, llm[len]), p += lct[len];
        if (len > 15)
          wbits(out, p, clct[i] >> 5 & 127), p += clct[i] >> 12;
      }
    }
  } else {
    lm = flm, ll = flt, dm = fdm, dl = fdt;
  }
  for (var i = 0; i < li; ++i) {
    var sym = syms[i];
    if (sym > 255) {
      var len = sym >> 18 & 31;
      wbits16(out, p, lm[len + 257]), p += ll[len + 257];
      if (len > 7)
        wbits(out, p, sym >> 23 & 31), p += fleb[len];
      var dst = sym & 31;
      wbits16(out, p, dm[dst]), p += dl[dst];
      if (dst > 3)
        wbits16(out, p, sym >> 5 & 8191), p += fdeb[dst];
    } else {
      wbits16(out, p, lm[sym]), p += ll[sym];
    }
  }
  wbits16(out, p, lm[256]);
  return p + ll[256];
};
var deo = new i32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
var et = new u8(0);
var dflt = function(dat, lvl, plvl, pre, post, st) {
  var s = st.z || dat.length;
  var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7e3)) + post);
  var w = o.subarray(pre, o.length - post);
  var lst = st.l;
  var pos = (st.r || 0) & 7;
  if (lvl) {
    if (pos)
      w[0] = st.r >> 3;
    var opt = deo[lvl - 1];
    var n = opt >> 13, c = opt & 8191;
    var msk_1 = (1 << plvl) - 1;
    var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
    var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
    var hsh = function(i2) {
      return (dat[i2] ^ dat[i2 + 1] << bs1_1 ^ dat[i2 + 2] << bs2_1) & msk_1;
    };
    var syms = new i32(25e3);
    var lf = new u16(288), df = new u16(32);
    var lc_1 = 0, eb = 0, i = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
    for (; i + 2 < s; ++i) {
      var hv = hsh(i);
      var imod = i & 32767, pimod = head[hv];
      prev[imod] = pimod;
      head[hv] = imod;
      if (wi <= i) {
        var rem = s - i;
        if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
          pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
          li = lc_1 = eb = 0, bs = i;
          for (var j = 0; j < 286; ++j)
            lf[j] = 0;
          for (var j = 0; j < 30; ++j)
            df[j] = 0;
        }
        var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
        if (rem > 2 && hv == hsh(i - dif)) {
          var maxn = Math.min(n, rem) - 1;
          var maxd = Math.min(32767, i);
          var ml = Math.min(258, rem);
          while (dif <= maxd && --ch_1 && imod != pimod) {
            if (dat[i + l] == dat[i + l - dif]) {
              var nl = 0;
              for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                ;
              if (nl > l) {
                l = nl, d = dif;
                if (nl > maxn)
                  break;
                var mmd = Math.min(dif, nl - 2);
                var md = 0;
                for (var j = 0; j < mmd; ++j) {
                  var ti = i - dif + j & 32767;
                  var pti = prev[ti];
                  var cd = ti - pti & 32767;
                  if (cd > md)
                    md = cd, pimod = ti;
                }
              }
            }
            imod = pimod, pimod = prev[imod];
            dif += imod - pimod & 32767;
          }
        }
        if (d) {
          syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
          var lin = revfl[l] & 31, din = revfd[d] & 31;
          eb += fleb[lin] + fdeb[din];
          ++lf[257 + lin];
          ++df[din];
          wi = i + l;
          ++lc_1;
        } else {
          syms[li++] = dat[i];
          ++lf[dat[i]];
        }
      }
    }
    for (i = Math.max(i, wi); i < s; ++i) {
      syms[li++] = dat[i];
      ++lf[dat[i]];
    }
    pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
    if (!lst) {
      st.r = pos & 7 | w[pos / 8 | 0] << 3;
      pos -= 7;
      st.h = head, st.p = prev, st.i = i, st.w = wi;
    }
  } else {
    for (var i = st.w || 0; i < s + lst; i += 65535) {
      var e = i + 65535;
      if (e >= s) {
        w[pos / 8 | 0] = lst;
        e = s;
      }
      pos = wfblk(w, pos + 1, dat.subarray(i, e));
    }
    st.i = s;
  }
  return slc(o, 0, pre + shft(pos) + post);
};
var crct = function() {
  var t = new Int32Array(256);
  for (var i = 0; i < 256; ++i) {
    var c = i, k = 9;
    while (--k)
      c = (c & 1 && -306674912) ^ c >>> 1;
    t[i] = c;
  }
  return t;
}();
var crc = function() {
  var c = -1;
  return {
    p: function(d) {
      var cr = c;
      for (var i = 0; i < d.length; ++i)
        cr = crct[cr & 255 ^ d[i]] ^ cr >>> 8;
      c = cr;
    },
    d: function() {
      return ~c;
    }
  };
};
var adler = function() {
  var a = 1, b = 0;
  return {
    p: function(d) {
      var n = a, m = b;
      var l = d.length | 0;
      for (var i = 0; i != l; ) {
        var e = Math.min(i + 2655, l);
        for (; i < e; ++i)
          m += n += d[i];
        n = (n & 65535) + 15 * (n >> 16), m = (m & 65535) + 15 * (m >> 16);
      }
      a = n, b = m;
    },
    d: function() {
      a %= 65521, b %= 65521;
      return (a & 255) << 24 | (a & 65280) << 8 | (b & 255) << 8 | b >> 8;
    }
  };
};
var dopt = function(dat, opt, pre, post, st) {
  if (!st) {
    st = { l: 1 };
    if (opt.dictionary) {
      var dict = opt.dictionary.subarray(-32768);
      var newDat = new u8(dict.length + dat.length);
      newDat.set(dict);
      newDat.set(dat, dict.length);
      dat = newDat;
      st.w = dict.length;
    }
  }
  return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st);
};
var mrg = function(a, b) {
  var o = {};
  for (var k in a)
    o[k] = a[k];
  for (var k in b)
    o[k] = b[k];
  return o;
};
var wcln = function(fn, fnStr, td2) {
  var dt = fn();
  var st = fn.toString();
  var ks = st.slice(st.indexOf("[") + 1, st.lastIndexOf("]")).replace(/\s+/g, "").split(",");
  for (var i = 0; i < dt.length; ++i) {
    var v = dt[i], k = ks[i];
    if (typeof v == "function") {
      fnStr += ";" + k + "=";
      var st_1 = v.toString();
      if (v.prototype) {
        if (st_1.indexOf("[native code]") != -1) {
          var spInd = st_1.indexOf(" ", 8) + 1;
          fnStr += st_1.slice(spInd, st_1.indexOf("(", spInd));
        } else {
          fnStr += st_1;
          for (var t in v.prototype)
            fnStr += ";" + k + ".prototype." + t + "=" + v.prototype[t].toString();
        }
      } else
        fnStr += st_1;
    } else
      td2[k] = v;
  }
  return fnStr;
};
var ch = [];
var cbfs = function(v) {
  var tl = [];
  for (var k in v) {
    if (v[k].buffer) {
      tl.push((v[k] = new v[k].constructor(v[k])).buffer);
    }
  }
  return tl;
};
var wrkr = function(fns, init, id, cb) {
  if (!ch[id]) {
    var fnStr = "", td_1 = {}, m = fns.length - 1;
    for (var i = 0; i < m; ++i)
      fnStr = wcln(fns[i], fnStr, td_1);
    ch[id] = { c: wcln(fns[m], fnStr, td_1), e: td_1 };
  }
  var td2 = mrg({}, ch[id].e);
  return wk(ch[id].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + init.toString() + "}", id, td2, cbfs(td2), cb);
};
var bInflt = function() {
  return [u8, u16, i32, fleb, fdeb, clim, fl, fd, flrm, fdrm, rev, ec, hMap, max, bits, bits16, shft, slc, err, inflt, inflateSync, pbf, gopt];
};
var bDflt = function() {
  return [u8, u16, i32, fleb, fdeb, clim, revfl, revfd, flm, flt, fdm, fdt, rev, deo, et, hMap, wbits, wbits16, hTree, ln, lc, clen, wfblk, wblk, shft, slc, dflt, dopt, deflateSync, pbf];
};
var gze = function() {
  return [gzh, gzhl, wbytes, crc, crct];
};
var guze = function() {
  return [gzs, gzl];
};
var zle = function() {
  return [zlh, wbytes, adler];
};
var zule = function() {
  return [zls];
};
var pbf = function(msg) {
  return postMessage(msg, [msg.buffer]);
};
var gopt = function(o) {
  return o && {
    out: o.size && new u8(o.size),
    dictionary: o.dictionary
  };
};
var astrm = function(strm) {
  strm.ondata = function(dat, final) {
    return postMessage([dat, final], [dat.buffer]);
  };
  return function(ev) {
    if (ev.data.length) {
      strm.push(ev.data[0], ev.data[1]);
      postMessage([ev.data[0].length]);
    } else
      strm.flush();
  };
};
var astrmify = function(fns, strm, opts, init, id, flush, ext) {
  var t;
  var w = wrkr(fns, init, id, function(err2, dat) {
    if (err2)
      w.terminate(), strm.ondata.call(strm, err2);
    else if (!Array.isArray(dat))
      ext(dat);
    else if (dat.length == 1) {
      strm.queuedSize -= dat[0];
      if (strm.ondrain)
        strm.ondrain(dat[0]);
    } else {
      if (dat[1])
        w.terminate();
      strm.ondata.call(strm, err2, dat[0], dat[1]);
    }
  });
  w.postMessage(opts);
  strm.queuedSize = 0;
  strm.push = function(d, f) {
    if (!strm.ondata)
      err(5);
    if (t)
      strm.ondata(err(4, 0, 1), null, !!f);
    strm.queuedSize += d.length;
    w.postMessage([d, t = f], [d.buffer]);
  };
  strm.terminate = function() {
    w.terminate();
  };
  if (flush) {
    strm.flush = function() {
      w.postMessage([]);
    };
  }
};
var b2 = function(d, b) {
  return d[b] | d[b + 1] << 8;
};
var b4 = function(d, b) {
  return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};
var b8 = function(d, b) {
  return b4(d, b) + b4(d, b + 4) * 4294967296;
};
var wbytes = function(d, b, v) {
  for (; v; ++b)
    d[b] = v, v >>>= 8;
};
var gzh = function(c, o) {
  var fn = o.filename;
  c[0] = 31, c[1] = 139, c[2] = 8, c[8] = o.level < 2 ? 4 : o.level == 9 ? 2 : 0, c[9] = 3;
  if (o.mtime != 0)
    wbytes(c, 4, Math.floor(new Date(o.mtime || Date.now()) / 1e3));
  if (fn) {
    c[3] = 8;
    for (var i = 0; i <= fn.length; ++i)
      c[i + 10] = fn.charCodeAt(i);
  }
};
var gzs = function(d) {
  if (d[0] != 31 || d[1] != 139 || d[2] != 8)
    err(6, "invalid gzip data");
  var flg = d[3];
  var st = 10;
  if (flg & 4)
    st += (d[10] | d[11] << 8) + 2;
  for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++])
    ;
  return st + (flg & 2);
};
var gzl = function(d) {
  var l = d.length;
  return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16 | d[l - 1] << 24) >>> 0;
};
var gzhl = function(o) {
  return 10 + (o.filename ? o.filename.length + 1 : 0);
};
var zlh = function(c, o) {
  var lv = o.level, fl2 = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
  c[0] = 120, c[1] = fl2 << 6 | (o.dictionary && 32);
  c[1] |= 31 - (c[0] << 8 | c[1]) % 31;
  if (o.dictionary) {
    var h = adler();
    h.p(o.dictionary);
    wbytes(c, 2, h.d());
  }
};
var zls = function(d, dict) {
  if ((d[0] & 15) != 8 || d[0] >> 4 > 7 || (d[0] << 8 | d[1]) % 31)
    err(6, "invalid zlib data");
  if ((d[1] >> 5 & 1) == +!dict)
    err(6, "invalid zlib data: " + (d[1] & 32 ? "need" : "unexpected") + " dictionary");
  return (d[1] >> 3 & 4) + 2;
};
function StrmOpt(opts, cb) {
  if (typeof opts == "function")
    cb = opts, opts = {};
  this.ondata = cb;
  return opts;
}
var Deflate = function() {
  function Deflate2(opts, cb) {
    if (typeof opts == "function")
      cb = opts, opts = {};
    this.ondata = cb;
    this.o = opts || {};
    this.s = { l: 0, i: 32768, w: 32768, z: 32768 };
    this.b = new u8(98304);
    if (this.o.dictionary) {
      var dict = this.o.dictionary.subarray(-32768);
      this.b.set(dict, 32768 - dict.length);
      this.s.i = 32768 - dict.length;
    }
  }
  Deflate2.prototype.p = function(c, f) {
    this.ondata(dopt(c, this.o, 0, 0, this.s), f);
  };
  Deflate2.prototype.push = function(chunk, final) {
    if (!this.ondata)
      err(5);
    if (this.s.l)
      err(4);
    var endLen = chunk.length + this.s.z;
    if (endLen > this.b.length) {
      if (endLen > 2 * this.b.length - 32768) {
        var newBuf = new u8(endLen & -32768);
        newBuf.set(this.b.subarray(0, this.s.z));
        this.b = newBuf;
      }
      var split = this.b.length - this.s.z;
      this.b.set(chunk.subarray(0, split), this.s.z);
      this.s.z = this.b.length;
      this.p(this.b, false);
      this.b.set(this.b.subarray(-32768));
      this.b.set(chunk.subarray(split), 32768);
      this.s.z = chunk.length - split + 32768;
      this.s.i = 32766, this.s.w = 32768;
    } else {
      this.b.set(chunk, this.s.z);
      this.s.z += chunk.length;
    }
    this.s.l = final & 1;
    if (this.s.z > this.s.w + 8191 || final) {
      this.p(this.b, final || false);
      this.s.w = this.s.i, this.s.i -= 2;
    }
  };
  Deflate2.prototype.flush = function() {
    if (!this.ondata)
      err(5);
    if (this.s.l)
      err(4);
    this.p(this.b, false);
    this.s.w = this.s.i, this.s.i -= 2;
  };
  return Deflate2;
}();
var AsyncDeflate = function() {
  function AsyncDeflate2(opts, cb) {
    astrmify([
      bDflt,
      function() {
        return [astrm, Deflate];
      }
    ], this, StrmOpt.call(this, opts, cb), function(ev) {
      var strm = new Deflate(ev.data);
      onmessage = astrm(strm);
    }, 6, 1);
  }
  return AsyncDeflate2;
}();
function deflateSync(data, opts) {
  return dopt(data, opts || {}, 0, 0);
}
var Inflate = function() {
  function Inflate2(opts, cb) {
    if (typeof opts == "function")
      cb = opts, opts = {};
    this.ondata = cb;
    var dict = opts && opts.dictionary && opts.dictionary.subarray(-32768);
    this.s = { i: 0, b: dict ? dict.length : 0 };
    this.o = new u8(32768);
    this.p = new u8(0);
    if (dict)
      this.o.set(dict);
  }
  Inflate2.prototype.e = function(c) {
    if (!this.ondata)
      err(5);
    if (this.d)
      err(4);
    if (!this.p.length)
      this.p = c;
    else if (c.length) {
      var n = new u8(this.p.length + c.length);
      n.set(this.p), n.set(c, this.p.length), this.p = n;
    }
  };
  Inflate2.prototype.c = function(final) {
    this.s.i = +(this.d = final || false);
    var bts = this.s.b;
    var dt = inflt(this.p, this.s, this.o);
    this.ondata(slc(dt, bts, this.s.b), this.d);
    this.o = slc(dt, this.s.b - 32768), this.s.b = this.o.length;
    this.p = slc(this.p, this.s.p / 8 | 0), this.s.p &= 7;
  };
  Inflate2.prototype.push = function(chunk, final) {
    this.e(chunk), this.c(final);
  };
  return Inflate2;
}();
var AsyncInflate = function() {
  function AsyncInflate2(opts, cb) {
    astrmify([
      bInflt,
      function() {
        return [astrm, Inflate];
      }
    ], this, StrmOpt.call(this, opts, cb), function(ev) {
      var strm = new Inflate(ev.data);
      onmessage = astrm(strm);
    }, 7, 0);
  }
  return AsyncInflate2;
}();
function inflateSync(data, opts) {
  return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var Gzip = function() {
  function Gzip2(opts, cb) {
    this.c = crc();
    this.l = 0;
    this.v = 1;
    Deflate.call(this, opts, cb);
  }
  Gzip2.prototype.push = function(chunk, final) {
    this.c.p(chunk);
    this.l += chunk.length;
    Deflate.prototype.push.call(this, chunk, final);
  };
  Gzip2.prototype.p = function(c, f) {
    var raw = dopt(c, this.o, this.v && gzhl(this.o), f && 8, this.s);
    if (this.v)
      gzh(raw, this.o), this.v = 0;
    if (f)
      wbytes(raw, raw.length - 8, this.c.d()), wbytes(raw, raw.length - 4, this.l);
    this.ondata(raw, f);
  };
  Gzip2.prototype.flush = function() {
    Deflate.prototype.flush.call(this);
  };
  return Gzip2;
}();
var AsyncGzip = function() {
  function AsyncGzip2(opts, cb) {
    astrmify([
      bDflt,
      gze,
      function() {
        return [astrm, Deflate, Gzip];
      }
    ], this, StrmOpt.call(this, opts, cb), function(ev) {
      var strm = new Gzip(ev.data);
      onmessage = astrm(strm);
    }, 8, 1);
  }
  return AsyncGzip2;
}();
var Gunzip = function() {
  function Gunzip2(opts, cb) {
    this.v = 1;
    this.r = 0;
    Inflate.call(this, opts, cb);
  }
  Gunzip2.prototype.push = function(chunk, final) {
    Inflate.prototype.e.call(this, chunk);
    this.r += chunk.length;
    if (this.v) {
      var p = this.p.subarray(this.v - 1);
      var s = p.length > 3 ? gzs(p) : 4;
      if (s > p.length) {
        if (!final)
          return;
      } else if (this.v > 1 && this.onmember) {
        this.onmember(this.r - p.length);
      }
      this.p = p.subarray(s), this.v = 0;
    }
    Inflate.prototype.c.call(this, final);
    if (this.s.f && !this.s.l && !final) {
      this.v = shft(this.s.p) + 9;
      this.s = { i: 0 };
      this.o = new u8(0);
      this.push(new u8(0), final);
    }
  };
  return Gunzip2;
}();
var AsyncGunzip = function() {
  function AsyncGunzip2(opts, cb) {
    var _this = this;
    astrmify([
      bInflt,
      guze,
      function() {
        return [astrm, Inflate, Gunzip];
      }
    ], this, StrmOpt.call(this, opts, cb), function(ev) {
      var strm = new Gunzip(ev.data);
      strm.onmember = function(offset) {
        return postMessage(offset);
      };
      onmessage = astrm(strm);
    }, 9, 0, function(offset) {
      return _this.onmember && _this.onmember(offset);
    });
  }
  return AsyncGunzip2;
}();
var Zlib = function() {
  function Zlib2(opts, cb) {
    this.c = adler();
    this.v = 1;
    Deflate.call(this, opts, cb);
  }
  Zlib2.prototype.push = function(chunk, final) {
    this.c.p(chunk);
    Deflate.prototype.push.call(this, chunk, final);
  };
  Zlib2.prototype.p = function(c, f) {
    var raw = dopt(c, this.o, this.v && (this.o.dictionary ? 6 : 2), f && 4, this.s);
    if (this.v)
      zlh(raw, this.o), this.v = 0;
    if (f)
      wbytes(raw, raw.length - 4, this.c.d());
    this.ondata(raw, f);
  };
  Zlib2.prototype.flush = function() {
    Deflate.prototype.flush.call(this);
  };
  return Zlib2;
}();
var AsyncZlib = function() {
  function AsyncZlib2(opts, cb) {
    astrmify([
      bDflt,
      zle,
      function() {
        return [astrm, Deflate, Zlib];
      }
    ], this, StrmOpt.call(this, opts, cb), function(ev) {
      var strm = new Zlib(ev.data);
      onmessage = astrm(strm);
    }, 10, 1);
  }
  return AsyncZlib2;
}();
var Unzlib = function() {
  function Unzlib2(opts, cb) {
    Inflate.call(this, opts, cb);
    this.v = opts && opts.dictionary ? 2 : 1;
  }
  Unzlib2.prototype.push = function(chunk, final) {
    Inflate.prototype.e.call(this, chunk);
    if (this.v) {
      if (this.p.length < 6 && !final)
        return;
      this.p = this.p.subarray(zls(this.p, this.v - 1)), this.v = 0;
    }
    if (final) {
      if (this.p.length < 4)
        err(6, "invalid zlib data");
      this.p = this.p.subarray(0, -4);
    }
    Inflate.prototype.c.call(this, final);
  };
  return Unzlib2;
}();
var AsyncUnzlib = function() {
  function AsyncUnzlib2(opts, cb) {
    astrmify([
      bInflt,
      zule,
      function() {
        return [astrm, Inflate, Unzlib];
      }
    ], this, StrmOpt.call(this, opts, cb), function(ev) {
      var strm = new Unzlib(ev.data);
      onmessage = astrm(strm);
    }, 11, 0);
  }
  return AsyncUnzlib2;
}();
function unzlibSync(data, opts) {
  return inflt(data.subarray(zls(data, opts && opts.dictionary), -4), { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var Decompress = function() {
  function Decompress2(opts, cb) {
    this.o = StrmOpt.call(this, opts, cb) || {};
    this.G = Gunzip;
    this.I = Inflate;
    this.Z = Unzlib;
  }
  Decompress2.prototype.i = function() {
    var _this = this;
    this.s.ondata = function(dat, final) {
      _this.ondata(dat, final);
    };
  };
  Decompress2.prototype.push = function(chunk, final) {
    if (!this.ondata)
      err(5);
    if (!this.s) {
      if (this.p && this.p.length) {
        var n = new u8(this.p.length + chunk.length);
        n.set(this.p), n.set(chunk, this.p.length);
      } else
        this.p = chunk;
      if (this.p.length > 2) {
        this.s = this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8 ? new this.G(this.o) : (this.p[0] & 15) != 8 || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(this.o) : new this.Z(this.o);
        this.i();
        this.s.push(this.p, final);
        this.p = null;
      }
    } else
      this.s.push(chunk, final);
  };
  return Decompress2;
}();
var AsyncDecompress = function() {
  function AsyncDecompress2(opts, cb) {
    Decompress.call(this, opts, cb);
    this.queuedSize = 0;
    this.G = AsyncGunzip;
    this.I = AsyncInflate;
    this.Z = AsyncUnzlib;
  }
  AsyncDecompress2.prototype.i = function() {
    var _this = this;
    this.s.ondata = function(err2, dat, final) {
      _this.ondata(err2, dat, final);
    };
    this.s.ondrain = function(size) {
      _this.queuedSize -= size;
      if (_this.ondrain)
        _this.ondrain(size);
    };
  };
  AsyncDecompress2.prototype.push = function(chunk, final) {
    this.queuedSize += chunk.length;
    Decompress.prototype.push.call(this, chunk, final);
  };
  return AsyncDecompress2;
}();
var te = typeof TextEncoder != "undefined" && new TextEncoder();
var td = typeof TextDecoder != "undefined" && new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e) {
}
var dutf8 = function(d) {
  for (var r = "", i = 0; ; ) {
    var c = d[i++];
    var eb = (c > 127) + (c > 223) + (c > 239);
    if (i + eb > d.length)
      return { s: r, r: slc(d, i - 1) };
    if (!eb)
      r += String.fromCharCode(c);
    else if (eb == 3) {
      c = ((c & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | d[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
    } else if (eb & 1)
      r += String.fromCharCode((c & 31) << 6 | d[i++] & 63);
    else
      r += String.fromCharCode((c & 15) << 12 | (d[i++] & 63) << 6 | d[i++] & 63);
  }
};
var DecodeUTF8 = function() {
  function DecodeUTF82(cb) {
    this.ondata = cb;
    if (tds)
      this.t = new TextDecoder();
    else
      this.p = et;
  }
  DecodeUTF82.prototype.push = function(chunk, final) {
    if (!this.ondata)
      err(5);
    final = !!final;
    if (this.t) {
      this.ondata(this.t.decode(chunk, { stream: true }), final);
      if (final) {
        if (this.t.decode().length)
          err(8);
        this.t = null;
      }
      return;
    }
    if (!this.p)
      err(4);
    var dat = new u8(this.p.length + chunk.length);
    dat.set(this.p);
    dat.set(chunk, this.p.length);
    var _a2 = dutf8(dat), s = _a2.s, r = _a2.r;
    if (final) {
      if (r.length)
        err(8);
      this.p = null;
    } else
      this.p = r;
    this.ondata(s, final);
  };
  return DecodeUTF82;
}();
var EncodeUTF8 = function() {
  function EncodeUTF82(cb) {
    this.ondata = cb;
  }
  EncodeUTF82.prototype.push = function(chunk, final) {
    if (!this.ondata)
      err(5);
    if (this.d)
      err(4);
    this.ondata(strToU8(chunk), this.d = final || false);
  };
  return EncodeUTF82;
}();
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i = 0; i < str.length; ++i)
      ar_1[i] = str.charCodeAt(i);
    return ar_1;
  }
  if (te)
    return te.encode(str);
  var l = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w = function(v) {
    ar[ai++] = v;
  };
  for (var i = 0; i < l; ++i) {
    if (ai + 5 > ar.length) {
      var n = new u8(ai + 8 + (l - i << 1));
      n.set(ar);
      ar = n;
    }
    var c = str.charCodeAt(i);
    if (c < 128 || latin1)
      w(c);
    else if (c < 2048)
      w(192 | c >> 6), w(128 | c & 63);
    else if (c > 55295 && c < 57344)
      c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
    else
      w(224 | c >> 12), w(128 | c >> 6 & 63), w(128 | c & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r = "";
    for (var i = 0; i < dat.length; i += 16384)
      r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));
    return r;
  } else if (td) {
    return td.decode(dat);
  } else {
    var _a2 = dutf8(dat), s = _a2.s, r = _a2.r;
    if (r.length)
      err(8);
    return s;
  }
}
var dbf = function(l) {
  return l == 1 ? 3 : l < 6 ? 2 : l == 9 ? 1 : 0;
};
var z64e = function(d, b) {
  for (; b2(d, b) != 1; b += 4 + b2(d, b + 2))
    ;
  return [b8(d, b + 12), b8(d, b + 4), b8(d, b + 20)];
};
var exfl = function(ex) {
  var le = 0;
  if (ex) {
    for (var k in ex) {
      var l = ex[k].length;
      if (l > 65535)
        err(9);
      le += l + 4;
    }
  }
  return le;
};
var wzh = function(d, b, f, fn, u, c, ce, co) {
  var fl2 = fn.length, ex = f.extra, col = co && co.length;
  var exl = exfl(ex);
  wbytes(d, b, ce != null ? 33639248 : 67324752), b += 4;
  if (ce != null)
    d[b++] = 20, d[b++] = f.os;
  d[b] = 20, b += 2;
  d[b++] = f.flag << 1 | (c < 0 && 8), d[b++] = u && 8;
  d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
  var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
  if (y < 0 || y > 119)
    err(10);
  wbytes(d, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >> 1), b += 4;
  if (c != -1) {
    wbytes(d, b, f.crc);
    wbytes(d, b + 4, c < 0 ? -c - 2 : c);
    wbytes(d, b + 8, f.size);
  }
  wbytes(d, b + 12, fl2);
  wbytes(d, b + 14, exl), b += 16;
  if (ce != null) {
    wbytes(d, b, col);
    wbytes(d, b + 6, f.attrs);
    wbytes(d, b + 10, ce), b += 14;
  }
  d.set(fn, b);
  b += fl2;
  if (exl) {
    for (var k in ex) {
      var exf = ex[k], l = exf.length;
      wbytes(d, b, +k);
      wbytes(d, b + 2, l);
      d.set(exf, b + 4), b += 4 + l;
    }
  }
  if (col)
    d.set(co, b), b += col;
  return b;
};
var wzf = function(o, b, c, d, e) {
  wbytes(o, b, 101010256);
  wbytes(o, b + 8, c);
  wbytes(o, b + 10, c);
  wbytes(o, b + 12, d);
  wbytes(o, b + 16, e);
};
var ZipPassThrough = function() {
  function ZipPassThrough2(filename) {
    this.filename = filename;
    this.c = crc();
    this.size = 0;
    this.compression = 0;
  }
  ZipPassThrough2.prototype.process = function(chunk, final) {
    this.ondata(null, chunk, final);
  };
  ZipPassThrough2.prototype.push = function(chunk, final) {
    if (!this.ondata)
      err(5);
    this.c.p(chunk);
    this.size += chunk.length;
    if (final)
      this.crc = this.c.d();
    this.process(chunk, final || false);
  };
  return ZipPassThrough2;
}();
var ZipDeflate = function() {
  function ZipDeflate2(filename, opts) {
    var _this = this;
    if (!opts)
      opts = {};
    ZipPassThrough.call(this, filename);
    this.d = new Deflate(opts, function(dat, final) {
      _this.ondata(null, dat, final);
    });
    this.compression = 8;
    this.flag = dbf(opts.level);
  }
  ZipDeflate2.prototype.process = function(chunk, final) {
    try {
      this.d.push(chunk, final);
    } catch (e) {
      this.ondata(e, null, final);
    }
  };
  ZipDeflate2.prototype.push = function(chunk, final) {
    ZipPassThrough.prototype.push.call(this, chunk, final);
  };
  return ZipDeflate2;
}();
var AsyncZipDeflate = function() {
  function AsyncZipDeflate2(filename, opts) {
    var _this = this;
    if (!opts)
      opts = {};
    ZipPassThrough.call(this, filename);
    this.d = new AsyncDeflate(opts, function(err2, dat, final) {
      _this.ondata(err2, dat, final);
    });
    this.compression = 8;
    this.flag = dbf(opts.level);
    this.terminate = this.d.terminate;
  }
  AsyncZipDeflate2.prototype.process = function(chunk, final) {
    this.d.push(chunk, final);
  };
  AsyncZipDeflate2.prototype.push = function(chunk, final) {
    ZipPassThrough.prototype.push.call(this, chunk, final);
  };
  return AsyncZipDeflate2;
}();
var Zip = function() {
  function Zip2(cb) {
    this.ondata = cb;
    this.u = [];
    this.d = 1;
  }
  Zip2.prototype.add = function(file) {
    var _this = this;
    if (!this.ondata)
      err(5);
    if (this.d & 2)
      this.ondata(err(4 + (this.d & 1) * 8, 0, 1), null, false);
    else {
      var f = strToU8(file.filename), fl_1 = f.length;
      var com = file.comment, o = com && strToU8(com);
      var u = fl_1 != file.filename.length || o && com.length != o.length;
      var hl_1 = fl_1 + exfl(file.extra) + 30;
      if (fl_1 > 65535)
        this.ondata(err(11, 0, 1), null, false);
      var header = new u8(hl_1);
      wzh(header, 0, file, f, u, -1);
      var chks_1 = [header];
      var pAll_1 = function() {
        for (var _i = 0, chks_2 = chks_1; _i < chks_2.length; _i++) {
          var chk = chks_2[_i];
          _this.ondata(null, chk, false);
        }
        chks_1 = [];
      };
      var tr_1 = this.d;
      this.d = 0;
      var ind_1 = this.u.length;
      var uf_1 = mrg(file, {
        f,
        u,
        o,
        t: function() {
          if (file.terminate)
            file.terminate();
        },
        r: function() {
          pAll_1();
          if (tr_1) {
            var nxt = _this.u[ind_1 + 1];
            if (nxt)
              nxt.r();
            else
              _this.d = 1;
          }
          tr_1 = 1;
        }
      });
      var cl_1 = 0;
      file.ondata = function(err2, dat, final) {
        if (err2) {
          _this.ondata(err2, dat, final);
          _this.terminate();
        } else {
          cl_1 += dat.length;
          chks_1.push(dat);
          if (final) {
            var dd = new u8(16);
            wbytes(dd, 0, 134695760);
            wbytes(dd, 4, file.crc);
            wbytes(dd, 8, cl_1);
            wbytes(dd, 12, file.size);
            chks_1.push(dd);
            uf_1.c = cl_1, uf_1.b = hl_1 + cl_1 + 16, uf_1.crc = file.crc, uf_1.size = file.size;
            if (tr_1)
              uf_1.r();
            tr_1 = 1;
          } else if (tr_1)
            pAll_1();
        }
      };
      this.u.push(uf_1);
    }
  };
  Zip2.prototype.end = function() {
    var _this = this;
    if (this.d & 2) {
      this.ondata(err(4 + (this.d & 1) * 8, 0, 1), null, true);
      return;
    }
    if (this.d)
      this.e();
    else
      this.u.push({
        r: function() {
          if (!(_this.d & 1))
            return;
          _this.u.splice(-1, 1);
          _this.e();
        },
        t: function() {
        }
      });
    this.d = 3;
  };
  Zip2.prototype.e = function() {
    var bt = 0, l = 0, tl = 0;
    for (var _i = 0, _a2 = this.u; _i < _a2.length; _i++) {
      var f = _a2[_i];
      tl += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0);
    }
    var out = new u8(tl + 22);
    for (var _b2 = 0, _c = this.u; _b2 < _c.length; _b2++) {
      var f = _c[_b2];
      wzh(out, bt, f, f.f, f.u, -f.c - 2, l, f.o);
      bt += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0), l += f.b;
    }
    wzf(out, bt, this.u.length, tl, l);
    this.ondata(null, out, true);
    this.d = 2;
  };
  Zip2.prototype.terminate = function() {
    for (var _i = 0, _a2 = this.u; _i < _a2.length; _i++) {
      var f = _a2[_i];
      f.t();
    }
    this.d = 2;
  };
  return Zip2;
}();
var UnzipPassThrough = function() {
  function UnzipPassThrough2() {
  }
  UnzipPassThrough2.prototype.push = function(data, final) {
    this.ondata(null, data, final);
  };
  UnzipPassThrough2.compression = 0;
  return UnzipPassThrough2;
}();
var UnzipInflate = function() {
  function UnzipInflate2() {
    var _this = this;
    this.i = new Inflate(function(dat, final) {
      _this.ondata(null, dat, final);
    });
  }
  UnzipInflate2.prototype.push = function(data, final) {
    try {
      this.i.push(data, final);
    } catch (e) {
      this.ondata(e, null, final);
    }
  };
  UnzipInflate2.compression = 8;
  return UnzipInflate2;
}();
var AsyncUnzipInflate = function() {
  function AsyncUnzipInflate2(_, sz) {
    var _this = this;
    if (sz < 32e4) {
      this.i = new Inflate(function(dat, final) {
        _this.ondata(null, dat, final);
      });
    } else {
      this.i = new AsyncInflate(function(err2, dat, final) {
        _this.ondata(err2, dat, final);
      });
      this.terminate = this.i.terminate;
    }
  }
  AsyncUnzipInflate2.prototype.push = function(data, final) {
    if (this.i.terminate)
      data = slc(data, 0);
    this.i.push(data, final);
  };
  AsyncUnzipInflate2.compression = 8;
  return AsyncUnzipInflate2;
}();
var Unzip = function() {
  function Unzip2(cb) {
    this.onfile = cb;
    this.k = [];
    this.o = {
      0: UnzipPassThrough
    };
    this.p = et;
  }
  Unzip2.prototype.push = function(chunk, final) {
    var _this = this;
    if (!this.onfile)
      err(5);
    if (!this.p)
      err(4);
    if (this.c > 0) {
      var len = Math.min(this.c, chunk.length);
      var toAdd = chunk.subarray(0, len);
      this.c -= len;
      if (this.d)
        this.d.push(toAdd, !this.c);
      else
        this.k[0].push(toAdd);
      chunk = chunk.subarray(len);
      if (chunk.length)
        return this.push(chunk, final);
    } else {
      var f = 0, i = 0, is = void 0, buf = void 0;
      if (!this.p.length)
        buf = chunk;
      else if (!chunk.length)
        buf = this.p;
      else {
        buf = new u8(this.p.length + chunk.length);
        buf.set(this.p), buf.set(chunk, this.p.length);
      }
      var l = buf.length, oc = this.c, add = oc && this.d;
      var _loop_2 = function() {
        var _a2;
        var sig = b4(buf, i);
        if (sig == 67324752) {
          f = 1, is = i;
          this_1.d = null;
          this_1.c = 0;
          var bf = b2(buf, i + 6), cmp_1 = b2(buf, i + 8), u = bf & 2048, dd = bf & 8, fnl = b2(buf, i + 26), es = b2(buf, i + 28);
          if (l > i + 30 + fnl + es) {
            var chks_3 = [];
            this_1.k.unshift(chks_3);
            f = 2;
            var sc_1 = b4(buf, i + 18), su_1 = b4(buf, i + 22);
            var fn_1 = strFromU8(buf.subarray(i + 30, i += 30 + fnl), !u);
            if (sc_1 == 4294967295) {
              _a2 = dd ? [-2] : z64e(buf, i), sc_1 = _a2[0], su_1 = _a2[1];
            } else if (dd)
              sc_1 = -1;
            i += es;
            this_1.c = sc_1;
            var d_1;
            var file_1 = {
              name: fn_1,
              compression: cmp_1,
              start: function() {
                if (!file_1.ondata)
                  err(5);
                if (!sc_1)
                  file_1.ondata(null, et, true);
                else {
                  var ctr = _this.o[cmp_1];
                  if (!ctr)
                    file_1.ondata(err(14, "unknown compression type " + cmp_1, 1), null, false);
                  d_1 = sc_1 < 0 ? new ctr(fn_1) : new ctr(fn_1, sc_1, su_1);
                  d_1.ondata = function(err2, dat3, final2) {
                    file_1.ondata(err2, dat3, final2);
                  };
                  for (var _i = 0, chks_4 = chks_3; _i < chks_4.length; _i++) {
                    var dat2 = chks_4[_i];
                    d_1.push(dat2, false);
                  }
                  if (_this.k[0] == chks_3 && _this.c)
                    _this.d = d_1;
                  else
                    d_1.push(et, true);
                }
              },
              terminate: function() {
                if (d_1 && d_1.terminate)
                  d_1.terminate();
              }
            };
            if (sc_1 >= 0)
              file_1.size = sc_1, file_1.originalSize = su_1;
            this_1.onfile(file_1);
          }
          return "break";
        } else if (oc) {
          if (sig == 134695760) {
            is = i += 12 + (oc == -2 && 8), f = 3, this_1.c = 0;
            return "break";
          } else if (sig == 33639248) {
            is = i -= 4, f = 3, this_1.c = 0;
            return "break";
          }
        }
      };
      var this_1 = this;
      for (; i < l - 4; ++i) {
        var state_1 = _loop_2();
        if (state_1 === "break")
          break;
      }
      this.p = et;
      if (oc < 0) {
        var dat = f ? buf.subarray(0, is - 12 - (oc == -2 && 8) - (b4(buf, is - 16) == 134695760 && 4)) : buf.subarray(0, i);
        if (add)
          add.push(dat, !!f);
        else
          this.k[+(f == 2)].push(dat);
      }
      if (f & 2)
        return this.push(buf.subarray(i), final);
      this.p = buf.subarray(i);
    }
    if (final) {
      if (this.c)
        err(13);
      this.p = null;
    }
  };
  Unzip2.prototype.register = function(decoder) {
    this.o[decoder.compression] = decoder;
  };
  return Unzip2;
}();

// node_modules/three/examples/jsm/curves/NURBSUtils.js
function findSpan(p, u, U) {
  const n = U.length - p - 1;
  if (u >= U[n]) {
    return n - 1;
  }
  if (u <= U[p]) {
    return p;
  }
  let low = p;
  let high = n;
  let mid = Math.floor((low + high) / 2);
  while (u < U[mid] || u >= U[mid + 1]) {
    if (u < U[mid]) {
      high = mid;
    } else {
      low = mid;
    }
    mid = Math.floor((low + high) / 2);
  }
  return mid;
}
function calcBasisFunctions(span, u, p, U) {
  const N = [];
  const left = [];
  const right = [];
  N[0] = 1;
  for (let j = 1; j <= p; ++j) {
    left[j] = u - U[span + 1 - j];
    right[j] = U[span + j] - u;
    let saved = 0;
    for (let r = 0; r < j; ++r) {
      const rv = right[r + 1];
      const lv = left[j - r];
      const temp = N[r] / (rv + lv);
      N[r] = saved + rv * temp;
      saved = lv * temp;
    }
    N[j] = saved;
  }
  return N;
}
function calcBSplinePoint(p, U, P, u) {
  const span = findSpan(p, u, U);
  const N = calcBasisFunctions(span, u, p, U);
  const C = new Vector4(0, 0, 0, 0);
  for (let j = 0; j <= p; ++j) {
    const point = P[span - p + j];
    const Nj = N[j];
    const wNj = point.w * Nj;
    C.x += point.x * wNj;
    C.y += point.y * wNj;
    C.z += point.z * wNj;
    C.w += point.w * Nj;
  }
  return C;
}
function calcBasisFunctionDerivatives(span, u, p, n, U) {
  const zeroArr = [];
  for (let i = 0; i <= p; ++i)
    zeroArr[i] = 0;
  const ders = [];
  for (let i = 0; i <= n; ++i)
    ders[i] = zeroArr.slice(0);
  const ndu = [];
  for (let i = 0; i <= p; ++i)
    ndu[i] = zeroArr.slice(0);
  ndu[0][0] = 1;
  const left = zeroArr.slice(0);
  const right = zeroArr.slice(0);
  for (let j = 1; j <= p; ++j) {
    left[j] = u - U[span + 1 - j];
    right[j] = U[span + j] - u;
    let saved = 0;
    for (let r2 = 0; r2 < j; ++r2) {
      const rv = right[r2 + 1];
      const lv = left[j - r2];
      ndu[j][r2] = rv + lv;
      const temp = ndu[r2][j - 1] / ndu[j][r2];
      ndu[r2][j] = saved + rv * temp;
      saved = lv * temp;
    }
    ndu[j][j] = saved;
  }
  for (let j = 0; j <= p; ++j) {
    ders[0][j] = ndu[j][p];
  }
  for (let r2 = 0; r2 <= p; ++r2) {
    let s1 = 0;
    let s2 = 1;
    const a = [];
    for (let i = 0; i <= p; ++i) {
      a[i] = zeroArr.slice(0);
    }
    a[0][0] = 1;
    for (let k = 1; k <= n; ++k) {
      let d = 0;
      const rk = r2 - k;
      const pk = p - k;
      if (r2 >= k) {
        a[s2][0] = a[s1][0] / ndu[pk + 1][rk];
        d = a[s2][0] * ndu[rk][pk];
      }
      const j1 = rk >= -1 ? 1 : -rk;
      const j2 = r2 - 1 <= pk ? k - 1 : p - r2;
      for (let j3 = j1; j3 <= j2; ++j3) {
        a[s2][j3] = (a[s1][j3] - a[s1][j3 - 1]) / ndu[pk + 1][rk + j3];
        d += a[s2][j3] * ndu[rk + j3][pk];
      }
      if (r2 <= pk) {
        a[s2][k] = -a[s1][k - 1] / ndu[pk + 1][r2];
        d += a[s2][k] * ndu[r2][pk];
      }
      ders[k][r2] = d;
      const j = s1;
      s1 = s2;
      s2 = j;
    }
  }
  let r = p;
  for (let k = 1; k <= n; ++k) {
    for (let j = 0; j <= p; ++j) {
      ders[k][j] *= r;
    }
    r *= p - k;
  }
  return ders;
}
function calcBSplineDerivatives(p, U, P, u, nd) {
  const du = nd < p ? nd : p;
  const CK = [];
  const span = findSpan(p, u, U);
  const nders = calcBasisFunctionDerivatives(span, u, p, du, U);
  const Pw = [];
  for (let i = 0; i < P.length; ++i) {
    const point = P[i].clone();
    const w = point.w;
    point.x *= w;
    point.y *= w;
    point.z *= w;
    Pw[i] = point;
  }
  for (let k = 0; k <= du; ++k) {
    const point = Pw[span - p].clone().multiplyScalar(nders[k][0]);
    for (let j = 1; j <= p; ++j) {
      point.add(Pw[span - p + j].clone().multiplyScalar(nders[k][j]));
    }
    CK[k] = point;
  }
  for (let k = du + 1; k <= nd + 1; ++k) {
    CK[k] = new Vector4(0, 0, 0);
  }
  return CK;
}
function calcKoverI(k, i) {
  let nom = 1;
  for (let j = 2; j <= k; ++j) {
    nom *= j;
  }
  let denom = 1;
  for (let j = 2; j <= i; ++j) {
    denom *= j;
  }
  for (let j = 2; j <= k - i; ++j) {
    denom *= j;
  }
  return nom / denom;
}
function calcRationalCurveDerivatives(Pders) {
  const nd = Pders.length;
  const Aders = [];
  const wders = [];
  for (let i = 0; i < nd; ++i) {
    const point = Pders[i];
    Aders[i] = new Vector3(point.x, point.y, point.z);
    wders[i] = point.w;
  }
  const CK = [];
  for (let k = 0; k < nd; ++k) {
    const v = Aders[k].clone();
    for (let i = 1; i <= k; ++i) {
      v.sub(CK[k - i].clone().multiplyScalar(calcKoverI(k, i) * wders[i]));
    }
    CK[k] = v.divideScalar(wders[0]);
  }
  return CK;
}
function calcNURBSDerivatives(p, U, P, u, nd) {
  const Pders = calcBSplineDerivatives(p, U, P, u, nd);
  return calcRationalCurveDerivatives(Pders);
}

// node_modules/three/examples/jsm/curves/NURBSCurve.js
var NURBSCurve = class extends Curve {
  /**
   * Constructs a new NURBS curve.
   *
   * @param {number} degree - The NURBS degree.
   * @param {Array<number>} knots - The knots as a flat array of numbers.
   * @param {Array<Vector2|Vector3|Vector4>} controlPoints - An array holding control points.
   * @param {number} [startKnot] - Index of the start knot into the `knots` array.
   * @param {number} [endKnot] - Index of the end knot into the `knots` array.
   */
  constructor(degree, knots, controlPoints, startKnot, endKnot) {
    super();
    const knotsLength = knots ? knots.length - 1 : 0;
    const pointsLength = controlPoints ? controlPoints.length : 0;
    this.degree = degree;
    this.knots = knots;
    this.controlPoints = [];
    this.startKnot = startKnot || 0;
    this.endKnot = endKnot || knotsLength;
    for (let i = 0; i < pointsLength; ++i) {
      const point = controlPoints[i];
      this.controlPoints[i] = new Vector4(point.x, point.y, point.z, point.w);
    }
  }
  /**
   * This method returns a vector in 3D space for the given interpolation factor.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector3} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector3} The position on the curve.
   */
  getPoint(t, optionalTarget = new Vector3()) {
    const point = optionalTarget;
    const u = this.knots[this.startKnot] + t * (this.knots[this.endKnot] - this.knots[this.startKnot]);
    const hpoint = calcBSplinePoint(this.degree, this.knots, this.controlPoints, u);
    if (hpoint.w !== 1) {
      hpoint.divideScalar(hpoint.w);
    }
    return point.set(hpoint.x, hpoint.y, hpoint.z);
  }
  /**
   * Returns a unit vector tangent for the given interpolation factor.
   *
   * @param {number} t - The interpolation factor.
   * @param {Vector3} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector3} The tangent vector.
   */
  getTangent(t, optionalTarget = new Vector3()) {
    const tangent = optionalTarget;
    const u = this.knots[0] + t * (this.knots[this.knots.length - 1] - this.knots[0]);
    const ders = calcNURBSDerivatives(this.degree, this.knots, this.controlPoints, u, 1);
    tangent.copy(ders[1]).normalize();
    return tangent;
  }
  toJSON() {
    const data = super.toJSON();
    data.degree = this.degree;
    data.knots = [...this.knots];
    data.controlPoints = this.controlPoints.map((p) => p.toArray());
    data.startKnot = this.startKnot;
    data.endKnot = this.endKnot;
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.degree = json.degree;
    this.knots = [...json.knots];
    this.controlPoints = json.controlPoints.map((p) => new Vector4(p[0], p[1], p[2], p[3]));
    this.startKnot = json.startKnot;
    this.endKnot = json.endKnot;
    return this;
  }
};

// node_modules/three/examples/jsm/loaders/FBXLoader.js
var fbxTree;
var connections;
var sceneGraph;
var FBXLoader = class extends Loader {
  /**
   * Constructs a new FBX loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(manager) {
    super(manager);
  }
  /**
   * Starts loading from the given URL and passes the loaded FBX asset
   * to the `onLoad()` callback.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(Group)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
   * @param {onErrorCallback} onError - Executed when errors occur.
   */
  load(url, onLoad, onProgress, onError) {
    const scope = this;
    const path = scope.path === "" ? LoaderUtils.extractUrlBase(url) : scope.path;
    const loader = new FileLoader(this.manager);
    loader.setPath(scope.path);
    loader.setResponseType("arraybuffer");
    loader.setRequestHeader(scope.requestHeader);
    loader.setWithCredentials(scope.withCredentials);
    loader.load(url, function(buffer) {
      try {
        onLoad(scope.parse(buffer, path));
      } catch (e) {
        if (onError) {
          onError(e);
        } else {
          console.error(e);
        }
        scope.manager.itemError(url);
      }
    }, onProgress, onError);
  }
  /**
   * Parses the given FBX data and returns the resulting group.
   *
   * @param {ArrayBuffer} FBXBuffer - The raw FBX data as an array buffer.
   * @param {string} path - The URL base path.
   * @return {Group} An object representing the parsed asset.
   */
  parse(FBXBuffer, path) {
    if (isFbxFormatBinary(FBXBuffer)) {
      fbxTree = new BinaryParser().parse(FBXBuffer);
    } else {
      const FBXText = convertArrayBufferToString(FBXBuffer);
      if (!isFbxFormatASCII(FBXText)) {
        throw new Error("THREE.FBXLoader: Unknown format.");
      }
      if (getFbxVersion(FBXText) < 7e3) {
        throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + getFbxVersion(FBXText));
      }
      fbxTree = new TextParser().parse(FBXText);
    }
    const textureLoader = new TextureLoader(this.manager).setPath(this.resourcePath || path).setCrossOrigin(this.crossOrigin);
    return new FBXTreeParser(textureLoader, this.manager).parse(fbxTree);
  }
};
var FBXTreeParser = class {
  constructor(textureLoader, manager) {
    this.textureLoader = textureLoader;
    this.manager = manager;
  }
  parse() {
    connections = this.parseConnections();
    const images = this.parseImages();
    const textures = this.parseTextures(images);
    const materials = this.parseMaterials(textures);
    const deformers = this.parseDeformers();
    const geometryMap = new GeometryParser().parse(deformers);
    this.parseScene(deformers, geometryMap, materials);
    return sceneGraph;
  }
  // Parses FBXTree.Connections which holds parent-child connections between objects (e.g. material -> texture, model->geometry )
  // and details the connection type
  parseConnections() {
    const connectionMap = /* @__PURE__ */ new Map();
    if ("Connections" in fbxTree) {
      const rawConnections = fbxTree.Connections.connections;
      rawConnections.forEach(function(rawConnection) {
        const fromID = rawConnection[0];
        const toID = rawConnection[1];
        const relationship = rawConnection[2];
        if (!connectionMap.has(fromID)) {
          connectionMap.set(fromID, {
            parents: [],
            children: []
          });
        }
        const parentRelationship = { ID: toID, relationship };
        connectionMap.get(fromID).parents.push(parentRelationship);
        if (!connectionMap.has(toID)) {
          connectionMap.set(toID, {
            parents: [],
            children: []
          });
        }
        const childRelationship = { ID: fromID, relationship };
        connectionMap.get(toID).children.push(childRelationship);
      });
    }
    return connectionMap;
  }
  // Parse FBXTree.Objects.Video for embedded image data
  // These images are connected to textures in FBXTree.Objects.Textures
  // via FBXTree.Connections.
  parseImages() {
    const images = {};
    const blobs = {};
    if ("Video" in fbxTree.Objects) {
      const videoNodes = fbxTree.Objects.Video;
      for (const nodeID in videoNodes) {
        const videoNode = videoNodes[nodeID];
        const id = parseInt(nodeID);
        images[id] = videoNode.RelativeFilename || videoNode.Filename;
        if ("Content" in videoNode) {
          const arrayBufferContent = videoNode.Content instanceof ArrayBuffer && videoNode.Content.byteLength > 0;
          const base64Content = typeof videoNode.Content === "string" && videoNode.Content !== "";
          if (arrayBufferContent || base64Content) {
            const image = this.parseImage(videoNodes[nodeID]);
            blobs[videoNode.RelativeFilename || videoNode.Filename] = image;
          }
        }
      }
    }
    for (const id in images) {
      const filename = images[id];
      if (blobs[filename] !== void 0)
        images[id] = blobs[filename];
      else
        images[id] = images[id].split("\\").pop();
    }
    return images;
  }
  // Parse embedded image data in FBXTree.Video.Content
  parseImage(videoNode) {
    const content = videoNode.Content;
    const fileName = videoNode.RelativeFilename || videoNode.Filename;
    const extension = fileName.slice(fileName.lastIndexOf(".") + 1).toLowerCase();
    let type;
    switch (extension) {
      case "bmp":
        type = "image/bmp";
        break;
      case "jpg":
      case "jpeg":
        type = "image/jpeg";
        break;
      case "png":
        type = "image/png";
        break;
      case "tif":
        type = "image/tiff";
        break;
      case "tga":
        if (this.manager.getHandler(".tga") === null) {
          console.warn("FBXLoader: TGA loader not found, skipping ", fileName);
        }
        type = "image/tga";
        break;
      case "webp":
        type = "image/webp";
        break;
      default:
        console.warn('FBXLoader: Image type "' + extension + '" is not supported.');
        return;
    }
    if (typeof content === "string") {
      return "data:" + type + ";base64," + content;
    } else {
      const array = new Uint8Array(content);
      return window.URL.createObjectURL(new Blob([array], { type }));
    }
  }
  // Parse nodes in FBXTree.Objects.Texture
  // These contain details such as UV scaling, cropping, rotation etc and are connected
  // to images in FBXTree.Objects.Video
  parseTextures(images) {
    const textureMap = /* @__PURE__ */ new Map();
    if ("Texture" in fbxTree.Objects) {
      const textureNodes = fbxTree.Objects.Texture;
      for (const nodeID in textureNodes) {
        const texture = this.parseTexture(textureNodes[nodeID], images);
        textureMap.set(parseInt(nodeID), texture);
      }
    }
    return textureMap;
  }
  // Parse individual node in FBXTree.Objects.Texture
  parseTexture(textureNode, images) {
    const texture = this.loadTexture(textureNode, images);
    texture.ID = textureNode.id;
    texture.name = textureNode.attrName;
    const wrapModeU = textureNode.WrapModeU;
    const wrapModeV = textureNode.WrapModeV;
    const valueU = wrapModeU !== void 0 ? wrapModeU.value : 0;
    const valueV = wrapModeV !== void 0 ? wrapModeV.value : 0;
    texture.wrapS = valueU === 0 ? RepeatWrapping : ClampToEdgeWrapping;
    texture.wrapT = valueV === 0 ? RepeatWrapping : ClampToEdgeWrapping;
    if ("Scaling" in textureNode) {
      const values = textureNode.Scaling.value;
      texture.repeat.x = values[0];
      texture.repeat.y = values[1];
    }
    if ("Translation" in textureNode) {
      const values = textureNode.Translation.value;
      texture.offset.x = values[0];
      texture.offset.y = values[1];
    }
    return texture;
  }
  // load a texture specified as a blob or data URI, or via an external URL using TextureLoader
  loadTexture(textureNode, images) {
    const extension = textureNode.FileName.split(".").pop().toLowerCase();
    let loader = this.manager.getHandler(`.${extension}`);
    if (loader === null)
      loader = this.textureLoader;
    const loaderPath = loader.path;
    if (!loaderPath) {
      loader.setPath(this.textureLoader.path);
    }
    const children = connections.get(textureNode.id).children;
    let fileName;
    if (children !== void 0 && children.length > 0 && images[children[0].ID] !== void 0) {
      fileName = images[children[0].ID];
      if (fileName.indexOf("blob:") === 0 || fileName.indexOf("data:") === 0) {
        loader.setPath(void 0);
      }
    }
    if (fileName === void 0) {
      console.warn("FBXLoader: Undefined filename, creating placeholder texture.");
      return new Texture();
    }
    const texture = loader.load(fileName);
    loader.setPath(loaderPath);
    return texture;
  }
  // Parse nodes in FBXTree.Objects.Material
  parseMaterials(textureMap) {
    const materialMap = /* @__PURE__ */ new Map();
    if ("Material" in fbxTree.Objects) {
      const materialNodes = fbxTree.Objects.Material;
      for (const nodeID in materialNodes) {
        const material = this.parseMaterial(materialNodes[nodeID], textureMap);
        if (material !== null)
          materialMap.set(parseInt(nodeID), material);
      }
    }
    return materialMap;
  }
  // Parse single node in FBXTree.Objects.Material
  // Materials are connected to texture maps in FBXTree.Objects.Textures
  // FBX format currently only supports Lambert and Phong shading models
  parseMaterial(materialNode, textureMap) {
    const ID = materialNode.id;
    const name = materialNode.attrName;
    let type = materialNode.ShadingModel;
    if (typeof type === "object") {
      type = type.value;
    }
    if (!connections.has(ID))
      return null;
    const parameters = this.parseParameters(materialNode, textureMap, ID);
    let material;
    switch (type.toLowerCase()) {
      case "phong":
        material = new MeshPhongMaterial();
        break;
      case "lambert":
        material = new MeshLambertMaterial();
        break;
      default:
        console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', type);
        material = new MeshPhongMaterial();
        break;
    }
    material.setValues(parameters);
    material.name = name;
    return material;
  }
  // Parse FBX material and return parameters suitable for a three.js material
  // Also parse the texture map and return any textures associated with the material
  parseParameters(materialNode, textureMap, ID) {
    const parameters = {};
    if (materialNode.BumpFactor) {
      parameters.bumpScale = materialNode.BumpFactor.value;
    }
    if (materialNode.Diffuse) {
      parameters.color = ColorManagement.colorSpaceToWorking(new Color().fromArray(materialNode.Diffuse.value), SRGBColorSpace);
    } else if (materialNode.DiffuseColor && (materialNode.DiffuseColor.type === "Color" || materialNode.DiffuseColor.type === "ColorRGB")) {
      parameters.color = ColorManagement.colorSpaceToWorking(new Color().fromArray(materialNode.DiffuseColor.value), SRGBColorSpace);
    }
    if (materialNode.DisplacementFactor) {
      parameters.displacementScale = materialNode.DisplacementFactor.value;
    }
    if (materialNode.Emissive) {
      parameters.emissive = ColorManagement.colorSpaceToWorking(new Color().fromArray(materialNode.Emissive.value), SRGBColorSpace);
    } else if (materialNode.EmissiveColor && (materialNode.EmissiveColor.type === "Color" || materialNode.EmissiveColor.type === "ColorRGB")) {
      parameters.emissive = ColorManagement.colorSpaceToWorking(new Color().fromArray(materialNode.EmissiveColor.value), SRGBColorSpace);
    }
    if (materialNode.EmissiveFactor) {
      parameters.emissiveIntensity = parseFloat(materialNode.EmissiveFactor.value);
    }
    parameters.opacity = 1 - (materialNode.TransparencyFactor ? parseFloat(materialNode.TransparencyFactor.value) : 0);
    if (parameters.opacity === 1 || parameters.opacity === 0) {
      parameters.opacity = materialNode.Opacity ? parseFloat(materialNode.Opacity.value) : null;
      if (parameters.opacity === null) {
        parameters.opacity = 1 - (materialNode.TransparentColor ? parseFloat(materialNode.TransparentColor.value[0]) : 0);
      }
    }
    if (parameters.opacity < 1) {
      parameters.transparent = true;
    }
    if (materialNode.ReflectionFactor) {
      parameters.reflectivity = materialNode.ReflectionFactor.value;
    }
    if (materialNode.Shininess) {
      parameters.shininess = materialNode.Shininess.value;
    }
    if (materialNode.Specular) {
      parameters.specular = ColorManagement.colorSpaceToWorking(new Color().fromArray(materialNode.Specular.value), SRGBColorSpace);
    } else if (materialNode.SpecularColor && materialNode.SpecularColor.type === "Color") {
      parameters.specular = ColorManagement.colorSpaceToWorking(new Color().fromArray(materialNode.SpecularColor.value), SRGBColorSpace);
    }
    const scope = this;
    connections.get(ID).children.forEach(function(child) {
      const type = child.relationship;
      switch (type) {
        case "Bump":
          parameters.bumpMap = scope.getTexture(textureMap, child.ID);
          break;
        case "Maya|TEX_ao_map":
          parameters.aoMap = scope.getTexture(textureMap, child.ID);
          break;
        case "DiffuseColor":
        case "Maya|TEX_color_map":
          parameters.map = scope.getTexture(textureMap, child.ID);
          if (parameters.map !== void 0) {
            parameters.map.colorSpace = SRGBColorSpace;
          }
          break;
        case "DisplacementColor":
          parameters.displacementMap = scope.getTexture(textureMap, child.ID);
          break;
        case "EmissiveColor":
          parameters.emissiveMap = scope.getTexture(textureMap, child.ID);
          if (parameters.emissiveMap !== void 0) {
            parameters.emissiveMap.colorSpace = SRGBColorSpace;
          }
          break;
        case "NormalMap":
        case "Maya|TEX_normal_map":
          parameters.normalMap = scope.getTexture(textureMap, child.ID);
          break;
        case "ReflectionColor":
          parameters.envMap = scope.getTexture(textureMap, child.ID);
          if (parameters.envMap !== void 0) {
            parameters.envMap.mapping = EquirectangularReflectionMapping;
            parameters.envMap.colorSpace = SRGBColorSpace;
          }
          break;
        case "SpecularColor":
          parameters.specularMap = scope.getTexture(textureMap, child.ID);
          if (parameters.specularMap !== void 0) {
            parameters.specularMap.colorSpace = SRGBColorSpace;
          }
          break;
        case "TransparentColor":
        case "TransparencyFactor":
          parameters.alphaMap = scope.getTexture(textureMap, child.ID);
          parameters.transparent = true;
          break;
        case "AmbientColor":
        case "ShininessExponent":
        case "SpecularFactor":
        case "VectorDisplacementColor":
        default:
          console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.", type);
          break;
      }
    });
    return parameters;
  }
  // get a texture from the textureMap for use by a material.
  getTexture(textureMap, id) {
    if ("LayeredTexture" in fbxTree.Objects && id in fbxTree.Objects.LayeredTexture) {
      console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer.");
      id = connections.get(id).children[0].ID;
    }
    return textureMap.get(id);
  }
  // Parse nodes in FBXTree.Objects.Deformer
  // Deformer node can contain skinning or Vertex Cache animation data, however only skinning is supported here
  // Generates map of Skeleton-like objects for use later when generating and binding skeletons.
  parseDeformers() {
    const skeletons = {};
    const morphTargets = {};
    if ("Deformer" in fbxTree.Objects) {
      const DeformerNodes = fbxTree.Objects.Deformer;
      for (const nodeID in DeformerNodes) {
        const deformerNode = DeformerNodes[nodeID];
        const relationships = connections.get(parseInt(nodeID));
        if (deformerNode.attrType === "Skin") {
          const skeleton = this.parseSkeleton(relationships, DeformerNodes);
          skeleton.ID = nodeID;
          if (relationships.parents.length > 1)
            console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported.");
          skeleton.geometryID = relationships.parents[0].ID;
          skeletons[nodeID] = skeleton;
        } else if (deformerNode.attrType === "BlendShape") {
          const morphTarget = {
            id: nodeID
          };
          morphTarget.rawTargets = this.parseMorphTargets(relationships, DeformerNodes);
          morphTarget.id = nodeID;
          if (relationships.parents.length > 1)
            console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported.");
          morphTargets[nodeID] = morphTarget;
        }
      }
    }
    return {
      skeletons,
      morphTargets
    };
  }
  // Parse single nodes in FBXTree.Objects.Deformer
  // The top level skeleton node has type 'Skin' and sub nodes have type 'Cluster'
  // Each skin node represents a skeleton and each cluster node represents a bone
  parseSkeleton(relationships, deformerNodes) {
    const rawBones = [];
    relationships.children.forEach(function(child) {
      const boneNode = deformerNodes[child.ID];
      if (boneNode.attrType !== "Cluster")
        return;
      const rawBone = {
        ID: child.ID,
        indices: [],
        weights: [],
        transformLink: new Matrix4().fromArray(boneNode.TransformLink.a)
        // transform: new Matrix4().fromArray( boneNode.Transform.a ),
        // linkMode: boneNode.Mode,
      };
      if ("Indexes" in boneNode) {
        rawBone.indices = boneNode.Indexes.a;
        rawBone.weights = boneNode.Weights.a;
      }
      rawBones.push(rawBone);
    });
    return {
      rawBones,
      bones: []
    };
  }
  // The top level morph deformer node has type "BlendShape" and sub nodes have type "BlendShapeChannel"
  parseMorphTargets(relationships, deformerNodes) {
    const rawMorphTargets = [];
    for (let i = 0; i < relationships.children.length; i++) {
      const child = relationships.children[i];
      const morphTargetNode = deformerNodes[child.ID];
      const rawMorphTarget = {
        name: morphTargetNode.attrName,
        initialWeight: morphTargetNode.DeformPercent,
        id: morphTargetNode.id,
        fullWeights: morphTargetNode.FullWeights.a
      };
      if (morphTargetNode.attrType !== "BlendShapeChannel")
        return;
      rawMorphTarget.geoID = connections.get(parseInt(child.ID)).children.filter(function(child2) {
        return child2.relationship === void 0;
      })[0].ID;
      rawMorphTargets.push(rawMorphTarget);
    }
    return rawMorphTargets;
  }
  // create the main Group() to be returned by the loader
  parseScene(deformers, geometryMap, materialMap) {
    sceneGraph = new Group();
    const modelMap = this.parseModels(deformers.skeletons, geometryMap, materialMap);
    const modelNodes = fbxTree.Objects.Model;
    const scope = this;
    modelMap.forEach(function(model) {
      const modelNode = modelNodes[model.ID];
      scope.setLookAtProperties(model, modelNode);
      const parentConnections = connections.get(model.ID).parents;
      parentConnections.forEach(function(connection) {
        const parent = modelMap.get(connection.ID);
        if (parent !== void 0)
          parent.add(model);
      });
      if (model.parent === null) {
        sceneGraph.add(model);
      }
    });
    this.bindSkeleton(deformers.skeletons, geometryMap, modelMap);
    this.addGlobalSceneSettings();
    sceneGraph.traverse(function(node) {
      if (node.userData.transformData) {
        if (node.parent) {
          node.userData.transformData.parentMatrix = node.parent.matrix;
          node.userData.transformData.parentMatrixWorld = node.parent.matrixWorld;
        }
        const transform = generateTransform(node.userData.transformData);
        node.applyMatrix4(transform);
        node.updateWorldMatrix();
      }
    });
    const animations = new AnimationParser().parse();
    if (sceneGraph.children.length === 1 && sceneGraph.children[0].isGroup) {
      sceneGraph.children[0].animations = animations;
      sceneGraph = sceneGraph.children[0];
    }
    sceneGraph.animations = animations;
  }
  // parse nodes in FBXTree.Objects.Model
  parseModels(skeletons, geometryMap, materialMap) {
    const modelMap = /* @__PURE__ */ new Map();
    const modelNodes = fbxTree.Objects.Model;
    for (const nodeID in modelNodes) {
      const id = parseInt(nodeID);
      const node = modelNodes[nodeID];
      const relationships = connections.get(id);
      let model = this.buildSkeleton(relationships, skeletons, id, node.attrName);
      if (!model) {
        switch (node.attrType) {
          case "Camera":
            model = this.createCamera(relationships);
            break;
          case "Light":
            model = this.createLight(relationships);
            break;
          case "Mesh":
            model = this.createMesh(relationships, geometryMap, materialMap);
            break;
          case "NurbsCurve":
            model = this.createCurve(relationships, geometryMap);
            break;
          case "LimbNode":
          case "Root":
            model = new Bone();
            break;
          case "Null":
          default:
            model = new Group();
            break;
        }
        model.name = node.attrName ? PropertyBinding.sanitizeNodeName(node.attrName) : "";
        model.userData.originalName = node.attrName;
        model.ID = id;
      }
      this.getTransformData(model, node);
      modelMap.set(id, model);
    }
    return modelMap;
  }
  buildSkeleton(relationships, skeletons, id, name) {
    let bone = null;
    relationships.parents.forEach(function(parent) {
      for (const ID in skeletons) {
        const skeleton = skeletons[ID];
        skeleton.rawBones.forEach(function(rawBone, i) {
          if (rawBone.ID === parent.ID) {
            const subBone = bone;
            bone = new Bone();
            bone.matrixWorld.copy(rawBone.transformLink);
            bone.name = name ? PropertyBinding.sanitizeNodeName(name) : "";
            bone.userData.originalName = name;
            bone.ID = id;
            skeleton.bones[i] = bone;
            if (subBone !== null) {
              bone.add(subBone);
            }
          }
        });
      }
    });
    return bone;
  }
  // create a PerspectiveCamera or OrthographicCamera
  createCamera(relationships) {
    let model;
    let cameraAttribute;
    relationships.children.forEach(function(child) {
      const attr = fbxTree.Objects.NodeAttribute[child.ID];
      if (attr !== void 0) {
        cameraAttribute = attr;
      }
    });
    if (cameraAttribute === void 0) {
      model = new Object3D();
    } else {
      let type = 0;
      if (cameraAttribute.CameraProjectionType !== void 0 && cameraAttribute.CameraProjectionType.value === 1) {
        type = 1;
      }
      let nearClippingPlane = 1;
      if (cameraAttribute.NearPlane !== void 0) {
        nearClippingPlane = cameraAttribute.NearPlane.value / 1e3;
      }
      let farClippingPlane = 1e3;
      if (cameraAttribute.FarPlane !== void 0) {
        farClippingPlane = cameraAttribute.FarPlane.value / 1e3;
      }
      let width = window.innerWidth;
      let height = window.innerHeight;
      if (cameraAttribute.AspectWidth !== void 0 && cameraAttribute.AspectHeight !== void 0) {
        width = cameraAttribute.AspectWidth.value;
        height = cameraAttribute.AspectHeight.value;
      }
      const aspect = width / height;
      let fov = 45;
      if (cameraAttribute.FieldOfView !== void 0) {
        fov = cameraAttribute.FieldOfView.value;
      }
      const focalLength = cameraAttribute.FocalLength ? cameraAttribute.FocalLength.value : null;
      switch (type) {
        case 0:
          model = new PerspectiveCamera(fov, aspect, nearClippingPlane, farClippingPlane);
          if (focalLength !== null)
            model.setFocalLength(focalLength);
          break;
        case 1:
          console.warn("THREE.FBXLoader: Orthographic cameras not supported yet.");
          model = new Object3D();
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown camera type " + type + ".");
          model = new Object3D();
          break;
      }
    }
    return model;
  }
  // Create a DirectionalLight, PointLight or SpotLight
  createLight(relationships) {
    let model;
    let lightAttribute;
    relationships.children.forEach(function(child) {
      const attr = fbxTree.Objects.NodeAttribute[child.ID];
      if (attr !== void 0) {
        lightAttribute = attr;
      }
    });
    if (lightAttribute === void 0) {
      model = new Object3D();
    } else {
      let type;
      if (lightAttribute.LightType === void 0) {
        type = 0;
      } else {
        type = lightAttribute.LightType.value;
      }
      let color = 16777215;
      if (lightAttribute.Color !== void 0) {
        color = ColorManagement.colorSpaceToWorking(new Color().fromArray(lightAttribute.Color.value), SRGBColorSpace);
      }
      let intensity = lightAttribute.Intensity === void 0 ? 1 : lightAttribute.Intensity.value / 100;
      if (lightAttribute.CastLightOnObject !== void 0 && lightAttribute.CastLightOnObject.value === 0) {
        intensity = 0;
      }
      let distance = 0;
      if (lightAttribute.FarAttenuationEnd !== void 0) {
        if (lightAttribute.EnableFarAttenuation !== void 0 && lightAttribute.EnableFarAttenuation.value === 0) {
          distance = 0;
        } else {
          distance = lightAttribute.FarAttenuationEnd.value;
        }
      }
      const decay = 1;
      switch (type) {
        case 0:
          model = new PointLight(color, intensity, distance, decay);
          break;
        case 1:
          model = new DirectionalLight(color, intensity);
          break;
        case 2:
          let angle = Math.PI / 3;
          if (lightAttribute.InnerAngle !== void 0) {
            angle = MathUtils.degToRad(lightAttribute.InnerAngle.value);
          }
          let penumbra = 0;
          if (lightAttribute.OuterAngle !== void 0) {
            penumbra = MathUtils.degToRad(lightAttribute.OuterAngle.value);
            penumbra = Math.max(penumbra, 1);
          }
          model = new SpotLight(color, intensity, distance, angle, penumbra, decay);
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown light type " + lightAttribute.LightType.value + ", defaulting to a PointLight.");
          model = new PointLight(color, intensity);
          break;
      }
      if (lightAttribute.CastShadows !== void 0 && lightAttribute.CastShadows.value === 1) {
        model.castShadow = true;
      }
    }
    return model;
  }
  createMesh(relationships, geometryMap, materialMap) {
    let model;
    let geometry = null;
    let material = null;
    const materials = [];
    relationships.children.forEach(function(child) {
      if (geometryMap.has(child.ID)) {
        geometry = geometryMap.get(child.ID);
      }
      if (materialMap.has(child.ID)) {
        materials.push(materialMap.get(child.ID));
      }
    });
    if (materials.length > 1) {
      material = materials;
    } else if (materials.length > 0) {
      material = materials[0];
    } else {
      material = new MeshPhongMaterial({
        name: Loader.DEFAULT_MATERIAL_NAME,
        color: 13421772
      });
      materials.push(material);
    }
    if ("color" in geometry.attributes) {
      materials.forEach(function(material2) {
        material2.vertexColors = true;
      });
    }
    if (geometry.groups.length > 0) {
      let needsDefaultMaterial = false;
      for (let i = 0, il = geometry.groups.length; i < il; i++) {
        const group = geometry.groups[i];
        if (group.materialIndex < 0 || group.materialIndex >= materials.length) {
          group.materialIndex = materials.length;
          needsDefaultMaterial = true;
        }
      }
      if (needsDefaultMaterial) {
        const defaultMaterial = new MeshPhongMaterial();
        materials.push(defaultMaterial);
      }
    }
    if (geometry.FBX_Deformer) {
      model = new SkinnedMesh(geometry, material);
      model.normalizeSkinWeights();
    } else {
      model = new Mesh(geometry, material);
    }
    return model;
  }
  createCurve(relationships, geometryMap) {
    const geometry = relationships.children.reduce(function(geo, child) {
      if (geometryMap.has(child.ID))
        geo = geometryMap.get(child.ID);
      return geo;
    }, null);
    const material = new LineBasicMaterial({
      name: Loader.DEFAULT_MATERIAL_NAME,
      color: 3342591,
      linewidth: 1
    });
    return new Line(geometry, material);
  }
  // parse the model node for transform data
  getTransformData(model, modelNode) {
    const transformData = {};
    if ("InheritType" in modelNode)
      transformData.inheritType = parseInt(modelNode.InheritType.value);
    if ("RotationOrder" in modelNode)
      transformData.eulerOrder = getEulerOrder(modelNode.RotationOrder.value);
    else
      transformData.eulerOrder = getEulerOrder(0);
    if ("Lcl_Translation" in modelNode)
      transformData.translation = modelNode.Lcl_Translation.value;
    if ("PreRotation" in modelNode)
      transformData.preRotation = modelNode.PreRotation.value;
    if ("Lcl_Rotation" in modelNode)
      transformData.rotation = modelNode.Lcl_Rotation.value;
    if ("PostRotation" in modelNode)
      transformData.postRotation = modelNode.PostRotation.value;
    if ("Lcl_Scaling" in modelNode)
      transformData.scale = modelNode.Lcl_Scaling.value;
    if ("ScalingOffset" in modelNode)
      transformData.scalingOffset = modelNode.ScalingOffset.value;
    if ("ScalingPivot" in modelNode)
      transformData.scalingPivot = modelNode.ScalingPivot.value;
    if ("RotationOffset" in modelNode)
      transformData.rotationOffset = modelNode.RotationOffset.value;
    if ("RotationPivot" in modelNode)
      transformData.rotationPivot = modelNode.RotationPivot.value;
    model.userData.transformData = transformData;
  }
  setLookAtProperties(model, modelNode) {
    if ("LookAtProperty" in modelNode) {
      const children = connections.get(model.ID).children;
      children.forEach(function(child) {
        if (child.relationship === "LookAtProperty") {
          const lookAtTarget = fbxTree.Objects.Model[child.ID];
          if ("Lcl_Translation" in lookAtTarget) {
            const pos = lookAtTarget.Lcl_Translation.value;
            if (model.target !== void 0) {
              model.target.position.fromArray(pos);
              sceneGraph.add(model.target);
            } else {
              model.lookAt(new Vector3().fromArray(pos));
            }
          }
        }
      });
    }
  }
  bindSkeleton(skeletons, geometryMap, modelMap) {
    const bindMatrices = this.parsePoseNodes();
    for (const ID in skeletons) {
      const skeleton = skeletons[ID];
      const parents = connections.get(parseInt(skeleton.ID)).parents;
      parents.forEach(function(parent) {
        if (geometryMap.has(parent.ID)) {
          const geoID = parent.ID;
          const geoRelationships = connections.get(geoID);
          geoRelationships.parents.forEach(function(geoConnParent) {
            if (modelMap.has(geoConnParent.ID)) {
              const model = modelMap.get(geoConnParent.ID);
              model.bind(new Skeleton(skeleton.bones), bindMatrices[geoConnParent.ID]);
            }
          });
        }
      });
    }
  }
  parsePoseNodes() {
    const bindMatrices = {};
    if ("Pose" in fbxTree.Objects) {
      const BindPoseNode = fbxTree.Objects.Pose;
      for (const nodeID in BindPoseNode) {
        if (BindPoseNode[nodeID].attrType === "BindPose" && BindPoseNode[nodeID].NbPoseNodes > 0) {
          const poseNodes = BindPoseNode[nodeID].PoseNode;
          if (Array.isArray(poseNodes)) {
            poseNodes.forEach(function(poseNode) {
              bindMatrices[poseNode.Node] = new Matrix4().fromArray(poseNode.Matrix.a);
            });
          } else {
            bindMatrices[poseNodes.Node] = new Matrix4().fromArray(poseNodes.Matrix.a);
          }
        }
      }
    }
    return bindMatrices;
  }
  addGlobalSceneSettings() {
    if ("GlobalSettings" in fbxTree) {
      if ("AmbientColor" in fbxTree.GlobalSettings) {
        const ambientColor = fbxTree.GlobalSettings.AmbientColor.value;
        const r = ambientColor[0];
        const g = ambientColor[1];
        const b = ambientColor[2];
        if (r !== 0 || g !== 0 || b !== 0) {
          const color = new Color().setRGB(r, g, b, SRGBColorSpace);
          sceneGraph.add(new AmbientLight(color, 1));
        }
      }
      if ("UnitScaleFactor" in fbxTree.GlobalSettings) {
        sceneGraph.userData.unitScaleFactor = fbxTree.GlobalSettings.UnitScaleFactor.value;
      }
    }
  }
};
var GeometryParser = class {
  constructor() {
    this.negativeMaterialIndices = false;
  }
  // Parse nodes in FBXTree.Objects.Geometry
  parse(deformers) {
    const geometryMap = /* @__PURE__ */ new Map();
    if ("Geometry" in fbxTree.Objects) {
      const geoNodes = fbxTree.Objects.Geometry;
      for (const nodeID in geoNodes) {
        const relationships = connections.get(parseInt(nodeID));
        const geo = this.parseGeometry(relationships, geoNodes[nodeID], deformers);
        geometryMap.set(parseInt(nodeID), geo);
      }
    }
    if (this.negativeMaterialIndices === true) {
      console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected.");
    }
    return geometryMap;
  }
  // Parse single node in FBXTree.Objects.Geometry
  parseGeometry(relationships, geoNode, deformers) {
    switch (geoNode.attrType) {
      case "Mesh":
        return this.parseMeshGeometry(relationships, geoNode, deformers);
        break;
      case "NurbsCurve":
        return this.parseNurbsGeometry(geoNode);
        break;
    }
  }
  // Parse single node mesh geometry in FBXTree.Objects.Geometry
  parseMeshGeometry(relationships, geoNode, deformers) {
    const skeletons = deformers.skeletons;
    const morphTargets = [];
    const modelNodes = relationships.parents.map(function(parent) {
      return fbxTree.Objects.Model[parent.ID];
    });
    if (modelNodes.length === 0)
      return;
    const skeleton = relationships.children.reduce(function(skeleton2, child) {
      if (skeletons[child.ID] !== void 0)
        skeleton2 = skeletons[child.ID];
      return skeleton2;
    }, null);
    relationships.children.forEach(function(child) {
      if (deformers.morphTargets[child.ID] !== void 0) {
        morphTargets.push(deformers.morphTargets[child.ID]);
      }
    });
    const modelNode = modelNodes[0];
    const transformData = {};
    if ("RotationOrder" in modelNode)
      transformData.eulerOrder = getEulerOrder(modelNode.RotationOrder.value);
    if ("InheritType" in modelNode)
      transformData.inheritType = parseInt(modelNode.InheritType.value);
    if ("GeometricTranslation" in modelNode)
      transformData.translation = modelNode.GeometricTranslation.value;
    if ("GeometricRotation" in modelNode)
      transformData.rotation = modelNode.GeometricRotation.value;
    if ("GeometricScaling" in modelNode)
      transformData.scale = modelNode.GeometricScaling.value;
    const transform = generateTransform(transformData);
    return this.genGeometry(geoNode, skeleton, morphTargets, transform);
  }
  // Generate a BufferGeometry from a node in FBXTree.Objects.Geometry
  genGeometry(geoNode, skeleton, morphTargets, preTransform) {
    const geo = new BufferGeometry();
    if (geoNode.attrName)
      geo.name = geoNode.attrName;
    const geoInfo = this.parseGeoNode(geoNode, skeleton);
    const buffers = this.genBuffers(geoInfo);
    const positionAttribute = new Float32BufferAttribute(buffers.vertex, 3);
    positionAttribute.applyMatrix4(preTransform);
    geo.setAttribute("position", positionAttribute);
    if (buffers.colors.length > 0) {
      geo.setAttribute("color", new Float32BufferAttribute(buffers.colors, 3));
    }
    if (skeleton) {
      geo.setAttribute("skinIndex", new Uint16BufferAttribute(buffers.weightsIndices, 4));
      geo.setAttribute("skinWeight", new Float32BufferAttribute(buffers.vertexWeights, 4));
      geo.FBX_Deformer = skeleton;
    }
    if (buffers.normal.length > 0) {
      const normalMatrix = new Matrix3().getNormalMatrix(preTransform);
      const normalAttribute = new Float32BufferAttribute(buffers.normal, 3);
      normalAttribute.applyNormalMatrix(normalMatrix);
      geo.setAttribute("normal", normalAttribute);
    }
    buffers.uvs.forEach(function(uvBuffer, i) {
      const name = i === 0 ? "uv" : `uv${i}`;
      geo.setAttribute(name, new Float32BufferAttribute(buffers.uvs[i], 2));
    });
    if (geoInfo.material && geoInfo.material.mappingType !== "AllSame") {
      let prevMaterialIndex = buffers.materialIndex[0];
      let startIndex = 0;
      buffers.materialIndex.forEach(function(currentIndex, i) {
        if (currentIndex !== prevMaterialIndex) {
          geo.addGroup(startIndex, i - startIndex, prevMaterialIndex);
          prevMaterialIndex = currentIndex;
          startIndex = i;
        }
      });
      if (geo.groups.length > 0) {
        const lastGroup = geo.groups[geo.groups.length - 1];
        const lastIndex = lastGroup.start + lastGroup.count;
        if (lastIndex !== buffers.materialIndex.length) {
          geo.addGroup(lastIndex, buffers.materialIndex.length - lastIndex, prevMaterialIndex);
        }
      }
      if (geo.groups.length === 0) {
        geo.addGroup(0, buffers.materialIndex.length, buffers.materialIndex[0]);
      }
    }
    this.addMorphTargets(geo, geoNode, morphTargets, preTransform);
    return geo;
  }
  parseGeoNode(geoNode, skeleton) {
    const geoInfo = {};
    geoInfo.vertexPositions = geoNode.Vertices !== void 0 ? geoNode.Vertices.a : [];
    geoInfo.vertexIndices = geoNode.PolygonVertexIndex !== void 0 ? geoNode.PolygonVertexIndex.a : [];
    if (geoNode.LayerElementColor) {
      geoInfo.color = this.parseVertexColors(geoNode.LayerElementColor[0]);
    }
    if (geoNode.LayerElementMaterial) {
      geoInfo.material = this.parseMaterialIndices(geoNode.LayerElementMaterial[0]);
    }
    if (geoNode.LayerElementNormal) {
      geoInfo.normal = this.parseNormals(geoNode.LayerElementNormal[0]);
    }
    if (geoNode.LayerElementUV) {
      geoInfo.uv = [];
      let i = 0;
      while (geoNode.LayerElementUV[i]) {
        if (geoNode.LayerElementUV[i].UV) {
          geoInfo.uv.push(this.parseUVs(geoNode.LayerElementUV[i]));
        }
        i++;
      }
    }
    geoInfo.weightTable = {};
    if (skeleton !== null) {
      geoInfo.skeleton = skeleton;
      skeleton.rawBones.forEach(function(rawBone, i) {
        rawBone.indices.forEach(function(index, j) {
          if (geoInfo.weightTable[index] === void 0)
            geoInfo.weightTable[index] = [];
          geoInfo.weightTable[index].push({
            id: i,
            weight: rawBone.weights[j]
          });
        });
      });
    }
    return geoInfo;
  }
  genBuffers(geoInfo) {
    const buffers = {
      vertex: [],
      normal: [],
      colors: [],
      uvs: [],
      materialIndex: [],
      vertexWeights: [],
      weightsIndices: []
    };
    let polygonIndex = 0;
    let faceLength = 0;
    let displayedWeightsWarning = false;
    let facePositionIndexes = [];
    let faceNormals = [];
    let faceColors = [];
    let faceUVs = [];
    let faceWeights = [];
    let faceWeightIndices = [];
    const scope = this;
    geoInfo.vertexIndices.forEach(function(vertexIndex, polygonVertexIndex) {
      let materialIndex;
      let endOfFace = false;
      if (vertexIndex < 0) {
        vertexIndex = vertexIndex ^ -1;
        endOfFace = true;
      }
      let weightIndices = [];
      let weights = [];
      facePositionIndexes.push(vertexIndex * 3, vertexIndex * 3 + 1, vertexIndex * 3 + 2);
      if (geoInfo.color) {
        const data = getData(polygonVertexIndex, polygonIndex, vertexIndex, geoInfo.color);
        faceColors.push(data[0], data[1], data[2]);
      }
      if (geoInfo.skeleton) {
        if (geoInfo.weightTable[vertexIndex] !== void 0) {
          geoInfo.weightTable[vertexIndex].forEach(function(wt) {
            weights.push(wt.weight);
            weightIndices.push(wt.id);
          });
        }
        if (weights.length > 4) {
          if (!displayedWeightsWarning) {
            console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights.");
            displayedWeightsWarning = true;
          }
          const wIndex = [0, 0, 0, 0];
          const Weight = [0, 0, 0, 0];
          weights.forEach(function(weight, weightIndex) {
            let currentWeight = weight;
            let currentIndex = weightIndices[weightIndex];
            Weight.forEach(function(comparedWeight, comparedWeightIndex, comparedWeightArray) {
              if (currentWeight > comparedWeight) {
                comparedWeightArray[comparedWeightIndex] = currentWeight;
                currentWeight = comparedWeight;
                const tmp = wIndex[comparedWeightIndex];
                wIndex[comparedWeightIndex] = currentIndex;
                currentIndex = tmp;
              }
            });
          });
          weightIndices = wIndex;
          weights = Weight;
        }
        while (weights.length < 4) {
          weights.push(0);
          weightIndices.push(0);
        }
        for (let i = 0; i < 4; ++i) {
          faceWeights.push(weights[i]);
          faceWeightIndices.push(weightIndices[i]);
        }
      }
      if (geoInfo.normal) {
        const data = getData(polygonVertexIndex, polygonIndex, vertexIndex, geoInfo.normal);
        faceNormals.push(data[0], data[1], data[2]);
      }
      if (geoInfo.material && geoInfo.material.mappingType !== "AllSame") {
        materialIndex = getData(polygonVertexIndex, polygonIndex, vertexIndex, geoInfo.material)[0];
        if (materialIndex < 0) {
          scope.negativeMaterialIndices = true;
          materialIndex = 0;
        }
      }
      if (geoInfo.uv) {
        geoInfo.uv.forEach(function(uv, i) {
          const data = getData(polygonVertexIndex, polygonIndex, vertexIndex, uv);
          if (faceUVs[i] === void 0) {
            faceUVs[i] = [];
          }
          faceUVs[i].push(data[0]);
          faceUVs[i].push(data[1]);
        });
      }
      faceLength++;
      if (endOfFace) {
        scope.genFace(buffers, geoInfo, facePositionIndexes, materialIndex, faceNormals, faceColors, faceUVs, faceWeights, faceWeightIndices, faceLength);
        polygonIndex++;
        faceLength = 0;
        facePositionIndexes = [];
        faceNormals = [];
        faceColors = [];
        faceUVs = [];
        faceWeights = [];
        faceWeightIndices = [];
      }
    });
    return buffers;
  }
  // See https://www.khronos.org/opengl/wiki/Calculating_a_Surface_Normal
  getNormalNewell(vertices) {
    const normal = new Vector3(0, 0, 0);
    for (let i = 0; i < vertices.length; i++) {
      const current = vertices[i];
      const next = vertices[(i + 1) % vertices.length];
      normal.x += (current.y - next.y) * (current.z + next.z);
      normal.y += (current.z - next.z) * (current.x + next.x);
      normal.z += (current.x - next.x) * (current.y + next.y);
    }
    normal.normalize();
    return normal;
  }
  getNormalTangentAndBitangent(vertices) {
    const normalVector = this.getNormalNewell(vertices);
    const up = Math.abs(normalVector.z) > 0.5 ? new Vector3(0, 1, 0) : new Vector3(0, 0, 1);
    const tangent = up.cross(normalVector).normalize();
    const bitangent = normalVector.clone().cross(tangent).normalize();
    return {
      normal: normalVector,
      tangent,
      bitangent
    };
  }
  flattenVertex(vertex, normalTangent, normalBitangent) {
    return new Vector2(
      vertex.dot(normalTangent),
      vertex.dot(normalBitangent)
    );
  }
  // Generate data for a single face in a geometry. If the face is a quad then split it into 2 tris
  genFace(buffers, geoInfo, facePositionIndexes, materialIndex, faceNormals, faceColors, faceUVs, faceWeights, faceWeightIndices, faceLength) {
    let triangles;
    if (faceLength > 3) {
      const vertices = [];
      const positions = geoInfo.baseVertexPositions || geoInfo.vertexPositions;
      for (let i = 0; i < facePositionIndexes.length; i += 3) {
        vertices.push(
          new Vector3(
            positions[facePositionIndexes[i]],
            positions[facePositionIndexes[i + 1]],
            positions[facePositionIndexes[i + 2]]
          )
        );
      }
      const { tangent, bitangent } = this.getNormalTangentAndBitangent(vertices);
      const triangulationInput = [];
      for (const vertex of vertices) {
        triangulationInput.push(this.flattenVertex(vertex, tangent, bitangent));
      }
      triangles = ShapeUtils.triangulateShape(triangulationInput, []);
    } else {
      triangles = [[0, 1, 2]];
    }
    for (const [i0, i1, i2] of triangles) {
      buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[i0 * 3]]);
      buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[i0 * 3 + 1]]);
      buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[i0 * 3 + 2]]);
      buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[i1 * 3]]);
      buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[i1 * 3 + 1]]);
      buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[i1 * 3 + 2]]);
      buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[i2 * 3]]);
      buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[i2 * 3 + 1]]);
      buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[i2 * 3 + 2]]);
      if (geoInfo.skeleton) {
        buffers.vertexWeights.push(faceWeights[i0 * 4]);
        buffers.vertexWeights.push(faceWeights[i0 * 4 + 1]);
        buffers.vertexWeights.push(faceWeights[i0 * 4 + 2]);
        buffers.vertexWeights.push(faceWeights[i0 * 4 + 3]);
        buffers.vertexWeights.push(faceWeights[i1 * 4]);
        buffers.vertexWeights.push(faceWeights[i1 * 4 + 1]);
        buffers.vertexWeights.push(faceWeights[i1 * 4 + 2]);
        buffers.vertexWeights.push(faceWeights[i1 * 4 + 3]);
        buffers.vertexWeights.push(faceWeights[i2 * 4]);
        buffers.vertexWeights.push(faceWeights[i2 * 4 + 1]);
        buffers.vertexWeights.push(faceWeights[i2 * 4 + 2]);
        buffers.vertexWeights.push(faceWeights[i2 * 4 + 3]);
        buffers.weightsIndices.push(faceWeightIndices[i0 * 4]);
        buffers.weightsIndices.push(faceWeightIndices[i0 * 4 + 1]);
        buffers.weightsIndices.push(faceWeightIndices[i0 * 4 + 2]);
        buffers.weightsIndices.push(faceWeightIndices[i0 * 4 + 3]);
        buffers.weightsIndices.push(faceWeightIndices[i1 * 4]);
        buffers.weightsIndices.push(faceWeightIndices[i1 * 4 + 1]);
        buffers.weightsIndices.push(faceWeightIndices[i1 * 4 + 2]);
        buffers.weightsIndices.push(faceWeightIndices[i1 * 4 + 3]);
        buffers.weightsIndices.push(faceWeightIndices[i2 * 4]);
        buffers.weightsIndices.push(faceWeightIndices[i2 * 4 + 1]);
        buffers.weightsIndices.push(faceWeightIndices[i2 * 4 + 2]);
        buffers.weightsIndices.push(faceWeightIndices[i2 * 4 + 3]);
      }
      if (geoInfo.color) {
        buffers.colors.push(faceColors[i0 * 3]);
        buffers.colors.push(faceColors[i0 * 3 + 1]);
        buffers.colors.push(faceColors[i0 * 3 + 2]);
        buffers.colors.push(faceColors[i1 * 3]);
        buffers.colors.push(faceColors[i1 * 3 + 1]);
        buffers.colors.push(faceColors[i1 * 3 + 2]);
        buffers.colors.push(faceColors[i2 * 3]);
        buffers.colors.push(faceColors[i2 * 3 + 1]);
        buffers.colors.push(faceColors[i2 * 3 + 2]);
      }
      if (geoInfo.material && geoInfo.material.mappingType !== "AllSame") {
        buffers.materialIndex.push(materialIndex);
        buffers.materialIndex.push(materialIndex);
        buffers.materialIndex.push(materialIndex);
      }
      if (geoInfo.normal) {
        buffers.normal.push(faceNormals[i0 * 3]);
        buffers.normal.push(faceNormals[i0 * 3 + 1]);
        buffers.normal.push(faceNormals[i0 * 3 + 2]);
        buffers.normal.push(faceNormals[i1 * 3]);
        buffers.normal.push(faceNormals[i1 * 3 + 1]);
        buffers.normal.push(faceNormals[i1 * 3 + 2]);
        buffers.normal.push(faceNormals[i2 * 3]);
        buffers.normal.push(faceNormals[i2 * 3 + 1]);
        buffers.normal.push(faceNormals[i2 * 3 + 2]);
      }
      if (geoInfo.uv) {
        geoInfo.uv.forEach(function(uv, j) {
          if (buffers.uvs[j] === void 0)
            buffers.uvs[j] = [];
          buffers.uvs[j].push(faceUVs[j][i0 * 2]);
          buffers.uvs[j].push(faceUVs[j][i0 * 2 + 1]);
          buffers.uvs[j].push(faceUVs[j][i1 * 2]);
          buffers.uvs[j].push(faceUVs[j][i1 * 2 + 1]);
          buffers.uvs[j].push(faceUVs[j][i2 * 2]);
          buffers.uvs[j].push(faceUVs[j][i2 * 2 + 1]);
        });
      }
    }
  }
  addMorphTargets(parentGeo, parentGeoNode, morphTargets, preTransform) {
    if (morphTargets.length === 0)
      return;
    parentGeo.morphTargetsRelative = true;
    parentGeo.morphAttributes.position = [];
    const scope = this;
    morphTargets.forEach(function(morphTarget) {
      morphTarget.rawTargets.forEach(function(rawTarget) {
        const morphGeoNode = fbxTree.Objects.Geometry[rawTarget.geoID];
        if (morphGeoNode !== void 0) {
          scope.genMorphGeometry(parentGeo, parentGeoNode, morphGeoNode, preTransform, rawTarget.name);
        }
      });
    });
  }
  // a morph geometry node is similar to a standard  node, and the node is also contained
  // in FBXTree.Objects.Geometry, however it can only have attributes for position, normal
  // and a special attribute Index defining which vertices of the original geometry are affected
  // Normal and position attributes only have data for the vertices that are affected by the morph
  genMorphGeometry(parentGeo, parentGeoNode, morphGeoNode, preTransform, name) {
    const basePositions = parentGeoNode.Vertices !== void 0 ? parentGeoNode.Vertices.a : [];
    const baseIndices = parentGeoNode.PolygonVertexIndex !== void 0 ? parentGeoNode.PolygonVertexIndex.a : [];
    const morphPositionsSparse = morphGeoNode.Vertices !== void 0 ? morphGeoNode.Vertices.a : [];
    const morphIndices = morphGeoNode.Indexes !== void 0 ? morphGeoNode.Indexes.a : [];
    const length = parentGeo.attributes.position.count * 3;
    const morphPositions = new Float32Array(length);
    for (let i = 0; i < morphIndices.length; i++) {
      const morphIndex = morphIndices[i] * 3;
      morphPositions[morphIndex] = morphPositionsSparse[i * 3];
      morphPositions[morphIndex + 1] = morphPositionsSparse[i * 3 + 1];
      morphPositions[morphIndex + 2] = morphPositionsSparse[i * 3 + 2];
    }
    const morphGeoInfo = {
      vertexIndices: baseIndices,
      vertexPositions: morphPositions,
      baseVertexPositions: basePositions
    };
    const morphBuffers = this.genBuffers(morphGeoInfo);
    const positionAttribute = new Float32BufferAttribute(morphBuffers.vertex, 3);
    positionAttribute.name = name || morphGeoNode.attrName;
    positionAttribute.applyMatrix4(preTransform);
    parentGeo.morphAttributes.position.push(positionAttribute);
  }
  // Parse normal from FBXTree.Objects.Geometry.LayerElementNormal if it exists
  parseNormals(NormalNode) {
    const mappingType = NormalNode.MappingInformationType;
    const referenceType = NormalNode.ReferenceInformationType;
    const buffer = NormalNode.Normals.a;
    let indexBuffer = [];
    if (referenceType === "IndexToDirect") {
      if ("NormalIndex" in NormalNode) {
        indexBuffer = NormalNode.NormalIndex.a;
      } else if ("NormalsIndex" in NormalNode) {
        indexBuffer = NormalNode.NormalsIndex.a;
      }
    }
    return {
      dataSize: 3,
      buffer,
      indices: indexBuffer,
      mappingType,
      referenceType
    };
  }
  // Parse UVs from FBXTree.Objects.Geometry.LayerElementUV if it exists
  parseUVs(UVNode) {
    const mappingType = UVNode.MappingInformationType;
    const referenceType = UVNode.ReferenceInformationType;
    const buffer = UVNode.UV.a;
    let indexBuffer = [];
    if (referenceType === "IndexToDirect") {
      indexBuffer = UVNode.UVIndex.a;
    }
    return {
      dataSize: 2,
      buffer,
      indices: indexBuffer,
      mappingType,
      referenceType
    };
  }
  // Parse Vertex Colors from FBXTree.Objects.Geometry.LayerElementColor if it exists
  parseVertexColors(ColorNode) {
    const mappingType = ColorNode.MappingInformationType;
    const referenceType = ColorNode.ReferenceInformationType;
    const buffer = ColorNode.Colors.a;
    let indexBuffer = [];
    if (referenceType === "IndexToDirect") {
      indexBuffer = ColorNode.ColorIndex.a;
    }
    for (let i = 0, c = new Color(); i < buffer.length; i += 4) {
      c.fromArray(buffer, i);
      ColorManagement.colorSpaceToWorking(c, SRGBColorSpace);
      c.toArray(buffer, i);
    }
    return {
      dataSize: 4,
      buffer,
      indices: indexBuffer,
      mappingType,
      referenceType
    };
  }
  // Parse mapping and material data in FBXTree.Objects.Geometry.LayerElementMaterial if it exists
  parseMaterialIndices(MaterialNode) {
    const mappingType = MaterialNode.MappingInformationType;
    const referenceType = MaterialNode.ReferenceInformationType;
    if (mappingType === "NoMappingInformation") {
      return {
        dataSize: 1,
        buffer: [0],
        indices: [0],
        mappingType: "AllSame",
        referenceType
      };
    }
    const materialIndexBuffer = MaterialNode.Materials.a;
    const materialIndices = [];
    for (let i = 0; i < materialIndexBuffer.length; ++i) {
      materialIndices.push(i);
    }
    return {
      dataSize: 1,
      buffer: materialIndexBuffer,
      indices: materialIndices,
      mappingType,
      referenceType
    };
  }
  // Generate a NurbGeometry from a node in FBXTree.Objects.Geometry
  parseNurbsGeometry(geoNode) {
    const order = parseInt(geoNode.Order);
    if (isNaN(order)) {
      console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s", geoNode.Order, geoNode.id);
      return new BufferGeometry();
    }
    const degree = order - 1;
    const knots = geoNode.KnotVector.a;
    const controlPoints = [];
    const pointsValues = geoNode.Points.a;
    for (let i = 0, l = pointsValues.length; i < l; i += 4) {
      controlPoints.push(new Vector4().fromArray(pointsValues, i));
    }
    let startKnot, endKnot;
    if (geoNode.Form === "Closed") {
      controlPoints.push(controlPoints[0]);
    } else if (geoNode.Form === "Periodic") {
      startKnot = degree;
      endKnot = knots.length - 1 - startKnot;
      for (let i = 0; i < degree; ++i) {
        controlPoints.push(controlPoints[i]);
      }
    }
    const curve = new NURBSCurve(degree, knots, controlPoints, startKnot, endKnot);
    const points = curve.getPoints(controlPoints.length * 12);
    return new BufferGeometry().setFromPoints(points);
  }
};
var AnimationParser = class {
  // take raw animation clips and turn them into three.js animation clips
  parse() {
    const animationClips = [];
    const rawClips = this.parseClips();
    if (rawClips !== void 0) {
      for (const key in rawClips) {
        const rawClip = rawClips[key];
        const clip = this.addClip(rawClip);
        animationClips.push(clip);
      }
    }
    return animationClips;
  }
  parseClips() {
    if (fbxTree.Objects.AnimationCurve === void 0)
      return void 0;
    const curveNodesMap = this.parseAnimationCurveNodes();
    this.parseAnimationCurves(curveNodesMap);
    const layersMap = this.parseAnimationLayers(curveNodesMap);
    const rawClips = this.parseAnimStacks(layersMap);
    return rawClips;
  }
  // parse nodes in FBXTree.Objects.AnimationCurveNode
  // each AnimationCurveNode holds data for an animation transform for a model (e.g. left arm rotation )
  // and is referenced by an AnimationLayer
  parseAnimationCurveNodes() {
    const rawCurveNodes = fbxTree.Objects.AnimationCurveNode;
    const curveNodesMap = /* @__PURE__ */ new Map();
    for (const nodeID in rawCurveNodes) {
      const rawCurveNode = rawCurveNodes[nodeID];
      if (rawCurveNode.attrName.match(/S|R|T|DeformPercent/) !== null) {
        const curveNode = {
          id: rawCurveNode.id,
          attr: rawCurveNode.attrName,
          curves: {}
        };
        curveNodesMap.set(curveNode.id, curveNode);
      }
    }
    return curveNodesMap;
  }
  // parse nodes in FBXTree.Objects.AnimationCurve and connect them up to
  // previously parsed AnimationCurveNodes. Each AnimationCurve holds data for a single animated
  // axis ( e.g. times and values of x rotation)
  parseAnimationCurves(curveNodesMap) {
    const rawCurves = fbxTree.Objects.AnimationCurve;
    for (const nodeID in rawCurves) {
      const animationCurve = {
        id: rawCurves[nodeID].id,
        times: rawCurves[nodeID].KeyTime.a.map(convertFBXTimeToSeconds),
        values: rawCurves[nodeID].KeyValueFloat.a
      };
      const relationships = connections.get(animationCurve.id);
      if (relationships !== void 0) {
        const animationCurveID = relationships.parents[0].ID;
        const animationCurveRelationship = relationships.parents[0].relationship;
        if (animationCurveRelationship.match(/X/)) {
          curveNodesMap.get(animationCurveID).curves["x"] = animationCurve;
        } else if (animationCurveRelationship.match(/Y/)) {
          curveNodesMap.get(animationCurveID).curves["y"] = animationCurve;
        } else if (animationCurveRelationship.match(/Z/)) {
          curveNodesMap.get(animationCurveID).curves["z"] = animationCurve;
        } else if (animationCurveRelationship.match(/DeformPercent/) && curveNodesMap.has(animationCurveID)) {
          curveNodesMap.get(animationCurveID).curves["morph"] = animationCurve;
        }
      }
    }
  }
  // parse nodes in FBXTree.Objects.AnimationLayer. Each layers holds references
  // to various AnimationCurveNodes and is referenced by an AnimationStack node
  // note: theoretically a stack can have multiple layers, however in practice there always seems to be one per stack
  parseAnimationLayers(curveNodesMap) {
    const rawLayers = fbxTree.Objects.AnimationLayer;
    const layersMap = /* @__PURE__ */ new Map();
    for (const nodeID in rawLayers) {
      const layerCurveNodes = [];
      const connection = connections.get(parseInt(nodeID));
      if (connection !== void 0) {
        const children = connection.children;
        children.forEach(function(child, i) {
          if (curveNodesMap.has(child.ID)) {
            const curveNode = curveNodesMap.get(child.ID);
            if (curveNode.curves.x !== void 0 || curveNode.curves.y !== void 0 || curveNode.curves.z !== void 0) {
              if (layerCurveNodes[i] === void 0) {
                const modelID = connections.get(child.ID).parents.filter(function(parent) {
                  return parent.relationship !== void 0;
                })[0].ID;
                if (modelID !== void 0) {
                  const rawModel = fbxTree.Objects.Model[modelID.toString()];
                  if (rawModel === void 0) {
                    console.warn("THREE.FBXLoader: Encountered a unused curve.", child);
                    return;
                  }
                  const node = {
                    modelName: rawModel.attrName ? PropertyBinding.sanitizeNodeName(rawModel.attrName) : "",
                    ID: rawModel.id,
                    initialPosition: [0, 0, 0],
                    initialRotation: [0, 0, 0],
                    initialScale: [1, 1, 1]
                  };
                  sceneGraph.traverse(function(child2) {
                    if (child2.ID === rawModel.id) {
                      node.transform = child2.matrix;
                      if (child2.userData.transformData)
                        node.eulerOrder = child2.userData.transformData.eulerOrder;
                    }
                  });
                  if (!node.transform)
                    node.transform = new Matrix4();
                  if ("PreRotation" in rawModel)
                    node.preRotation = rawModel.PreRotation.value;
                  if ("PostRotation" in rawModel)
                    node.postRotation = rawModel.PostRotation.value;
                  layerCurveNodes[i] = node;
                }
              }
              if (layerCurveNodes[i])
                layerCurveNodes[i][curveNode.attr] = curveNode;
            } else if (curveNode.curves.morph !== void 0) {
              if (layerCurveNodes[i] === void 0) {
                const deformerID = connections.get(child.ID).parents.filter(function(parent) {
                  return parent.relationship !== void 0;
                })[0].ID;
                const morpherID = connections.get(deformerID).parents[0].ID;
                const geoID = connections.get(morpherID).parents[0].ID;
                const modelID = connections.get(geoID).parents[0].ID;
                const rawModel = fbxTree.Objects.Model[modelID];
                const node = {
                  modelName: rawModel.attrName ? PropertyBinding.sanitizeNodeName(rawModel.attrName) : "",
                  morphName: fbxTree.Objects.Deformer[deformerID].attrName
                };
                layerCurveNodes[i] = node;
              }
              layerCurveNodes[i][curveNode.attr] = curveNode;
            }
          }
        });
        layersMap.set(parseInt(nodeID), layerCurveNodes);
      }
    }
    return layersMap;
  }
  // parse nodes in FBXTree.Objects.AnimationStack. These are the top level node in the animation
  // hierarchy. Each Stack node will be used to create an AnimationClip
  parseAnimStacks(layersMap) {
    const rawStacks = fbxTree.Objects.AnimationStack;
    const rawClips = {};
    for (const nodeID in rawStacks) {
      const children = connections.get(parseInt(nodeID)).children;
      if (children.length > 1) {
        console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");
      }
      const layer = layersMap.get(children[0].ID);
      rawClips[nodeID] = {
        name: rawStacks[nodeID].attrName,
        layer
      };
    }
    return rawClips;
  }
  addClip(rawClip) {
    let tracks = [];
    const scope = this;
    rawClip.layer.forEach(function(rawTracks) {
      tracks = tracks.concat(scope.generateTracks(rawTracks));
    });
    return new AnimationClip(rawClip.name, -1, tracks);
  }
  generateTracks(rawTracks) {
    const tracks = [];
    let initialPosition = new Vector3();
    let initialScale = new Vector3();
    if (rawTracks.transform)
      rawTracks.transform.decompose(initialPosition, new Quaternion(), initialScale);
    initialPosition = initialPosition.toArray();
    initialScale = initialScale.toArray();
    if (rawTracks.T !== void 0 && Object.keys(rawTracks.T.curves).length > 0) {
      const positionTrack = this.generateVectorTrack(rawTracks.modelName, rawTracks.T.curves, initialPosition, "position");
      if (positionTrack !== void 0)
        tracks.push(positionTrack);
    }
    if (rawTracks.R !== void 0 && Object.keys(rawTracks.R.curves).length > 0) {
      const rotationTrack = this.generateRotationTrack(rawTracks.modelName, rawTracks.R.curves, rawTracks.preRotation, rawTracks.postRotation, rawTracks.eulerOrder);
      if (rotationTrack !== void 0)
        tracks.push(rotationTrack);
    }
    if (rawTracks.S !== void 0 && Object.keys(rawTracks.S.curves).length > 0) {
      const scaleTrack = this.generateVectorTrack(rawTracks.modelName, rawTracks.S.curves, initialScale, "scale");
      if (scaleTrack !== void 0)
        tracks.push(scaleTrack);
    }
    if (rawTracks.DeformPercent !== void 0) {
      const morphTrack = this.generateMorphTrack(rawTracks);
      if (morphTrack !== void 0)
        tracks.push(morphTrack);
    }
    return tracks;
  }
  generateVectorTrack(modelName, curves, initialValue, type) {
    const times = this.getTimesForAllAxes(curves);
    const values = this.getKeyframeTrackValues(times, curves, initialValue);
    return new VectorKeyframeTrack(modelName + "." + type, times, values);
  }
  generateRotationTrack(modelName, curves, preRotation, postRotation, eulerOrder) {
    let times;
    let values;
    if (curves.x !== void 0 && curves.y !== void 0 && curves.z !== void 0) {
      const result = this.interpolateRotations(curves.x, curves.y, curves.z, eulerOrder);
      times = result[0];
      values = result[1];
    }
    const defaultEulerOrder = getEulerOrder(0);
    if (preRotation !== void 0) {
      preRotation = preRotation.map(MathUtils.degToRad);
      preRotation.push(defaultEulerOrder);
      preRotation = new Euler().fromArray(preRotation);
      preRotation = new Quaternion().setFromEuler(preRotation);
    }
    if (postRotation !== void 0) {
      postRotation = postRotation.map(MathUtils.degToRad);
      postRotation.push(defaultEulerOrder);
      postRotation = new Euler().fromArray(postRotation);
      postRotation = new Quaternion().setFromEuler(postRotation).invert();
    }
    const quaternion = new Quaternion();
    const euler = new Euler();
    const quaternionValues = [];
    if (!values || !times)
      return new QuaternionKeyframeTrack(modelName + ".quaternion", [0], [0]);
    for (let i = 0; i < values.length; i += 3) {
      euler.set(values[i], values[i + 1], values[i + 2], eulerOrder);
      quaternion.setFromEuler(euler);
      if (preRotation !== void 0)
        quaternion.premultiply(preRotation);
      if (postRotation !== void 0)
        quaternion.multiply(postRotation);
      if (i > 2) {
        const prevQuat = new Quaternion().fromArray(
          quaternionValues,
          (i - 3) / 3 * 4
        );
        if (prevQuat.dot(quaternion) < 0) {
          quaternion.set(-quaternion.x, -quaternion.y, -quaternion.z, -quaternion.w);
        }
      }
      quaternion.toArray(quaternionValues, i / 3 * 4);
    }
    return new QuaternionKeyframeTrack(modelName + ".quaternion", times, quaternionValues);
  }
  generateMorphTrack(rawTracks) {
    const curves = rawTracks.DeformPercent.curves.morph;
    const values = curves.values.map(function(val) {
      return val / 100;
    });
    const morphNum = sceneGraph.getObjectByName(rawTracks.modelName).morphTargetDictionary[rawTracks.morphName];
    return new NumberKeyframeTrack(rawTracks.modelName + ".morphTargetInfluences[" + morphNum + "]", curves.times, values);
  }
  // For all animated objects, times are defined separately for each axis
  // Here we'll combine the times into one sorted array without duplicates
  getTimesForAllAxes(curves) {
    let times = [];
    if (curves.x !== void 0)
      times = times.concat(curves.x.times);
    if (curves.y !== void 0)
      times = times.concat(curves.y.times);
    if (curves.z !== void 0)
      times = times.concat(curves.z.times);
    times = times.sort(function(a, b) {
      return a - b;
    });
    if (times.length > 1) {
      let targetIndex = 1;
      let lastValue = times[0];
      for (let i = 1; i < times.length; i++) {
        const currentValue = times[i];
        if (currentValue !== lastValue) {
          times[targetIndex] = currentValue;
          lastValue = currentValue;
          targetIndex++;
        }
      }
      times = times.slice(0, targetIndex);
    }
    return times;
  }
  getKeyframeTrackValues(times, curves, initialValue) {
    const prevValue = initialValue;
    const values = [];
    let xIndex = -1;
    let yIndex = -1;
    let zIndex = -1;
    times.forEach(function(time) {
      if (curves.x)
        xIndex = curves.x.times.indexOf(time);
      if (curves.y)
        yIndex = curves.y.times.indexOf(time);
      if (curves.z)
        zIndex = curves.z.times.indexOf(time);
      if (xIndex !== -1) {
        const xValue = curves.x.values[xIndex];
        values.push(xValue);
        prevValue[0] = xValue;
      } else {
        values.push(prevValue[0]);
      }
      if (yIndex !== -1) {
        const yValue = curves.y.values[yIndex];
        values.push(yValue);
        prevValue[1] = yValue;
      } else {
        values.push(prevValue[1]);
      }
      if (zIndex !== -1) {
        const zValue = curves.z.values[zIndex];
        values.push(zValue);
        prevValue[2] = zValue;
      } else {
        values.push(prevValue[2]);
      }
    });
    return values;
  }
  // Rotations are defined as Euler angles which can have values  of any size
  // These will be converted to quaternions which don't support values greater than
  // PI, so we'll interpolate large rotations
  interpolateRotations(curvex, curvey, curvez, eulerOrder) {
    const times = [];
    const values = [];
    times.push(curvex.times[0]);
    values.push(MathUtils.degToRad(curvex.values[0]));
    values.push(MathUtils.degToRad(curvey.values[0]));
    values.push(MathUtils.degToRad(curvez.values[0]));
    for (let i = 1; i < curvex.values.length; i++) {
      const initialValue = [
        curvex.values[i - 1],
        curvey.values[i - 1],
        curvez.values[i - 1]
      ];
      if (isNaN(initialValue[0]) || isNaN(initialValue[1]) || isNaN(initialValue[2])) {
        continue;
      }
      const initialValueRad = initialValue.map(MathUtils.degToRad);
      const currentValue = [
        curvex.values[i],
        curvey.values[i],
        curvez.values[i]
      ];
      if (isNaN(currentValue[0]) || isNaN(currentValue[1]) || isNaN(currentValue[2])) {
        continue;
      }
      const currentValueRad = currentValue.map(MathUtils.degToRad);
      const valuesSpan = [
        currentValue[0] - initialValue[0],
        currentValue[1] - initialValue[1],
        currentValue[2] - initialValue[2]
      ];
      const absoluteSpan = [
        Math.abs(valuesSpan[0]),
        Math.abs(valuesSpan[1]),
        Math.abs(valuesSpan[2])
      ];
      if (absoluteSpan[0] >= 180 || absoluteSpan[1] >= 180 || absoluteSpan[2] >= 180) {
        const maxAbsSpan = Math.max(...absoluteSpan);
        const numSubIntervals = maxAbsSpan / 180;
        const E1 = new Euler(...initialValueRad, eulerOrder);
        const E2 = new Euler(...currentValueRad, eulerOrder);
        const Q1 = new Quaternion().setFromEuler(E1);
        const Q2 = new Quaternion().setFromEuler(E2);
        if (Q1.dot(Q2)) {
          Q2.set(-Q2.x, -Q2.y, -Q2.z, -Q2.w);
        }
        const initialTime = curvex.times[i - 1];
        const timeSpan = curvex.times[i] - initialTime;
        const Q = new Quaternion();
        const E = new Euler();
        for (let t = 0; t < 1; t += 1 / numSubIntervals) {
          Q.copy(Q1.clone().slerp(Q2.clone(), t));
          times.push(initialTime + t * timeSpan);
          E.setFromQuaternion(Q, eulerOrder);
          values.push(E.x);
          values.push(E.y);
          values.push(E.z);
        }
      } else {
        times.push(curvex.times[i]);
        values.push(MathUtils.degToRad(curvex.values[i]));
        values.push(MathUtils.degToRad(curvey.values[i]));
        values.push(MathUtils.degToRad(curvez.values[i]));
      }
    }
    return [times, values];
  }
};
var TextParser = class {
  getPrevNode() {
    return this.nodeStack[this.currentIndent - 2];
  }
  getCurrentNode() {
    return this.nodeStack[this.currentIndent - 1];
  }
  getCurrentProp() {
    return this.currentProp;
  }
  pushStack(node) {
    this.nodeStack.push(node);
    this.currentIndent += 1;
  }
  popStack() {
    this.nodeStack.pop();
    this.currentIndent -= 1;
  }
  setCurrentProp(val, name) {
    this.currentProp = val;
    this.currentPropName = name;
  }
  parse(text) {
    this.currentIndent = 0;
    this.allNodes = new FBXTree();
    this.nodeStack = [];
    this.currentProp = [];
    this.currentPropName = "";
    const scope = this;
    const split = text.split(/[\r\n]+/);
    split.forEach(function(line, i) {
      const matchComment = line.match(/^[\s\t]*;/);
      const matchEmpty = line.match(/^[\s\t]*$/);
      if (matchComment || matchEmpty)
        return;
      const matchBeginning = line.match("^\\t{" + scope.currentIndent + "}(\\w+):(.*){", "");
      const matchProperty = line.match("^\\t{" + scope.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)");
      const matchEnd = line.match("^\\t{" + (scope.currentIndent - 1) + "}}");
      if (matchBeginning) {
        scope.parseNodeBegin(line, matchBeginning);
      } else if (matchProperty) {
        scope.parseNodeProperty(line, matchProperty, split[++i]);
      } else if (matchEnd) {
        scope.popStack();
      } else if (line.match(/^[^\s\t}]/)) {
        scope.parseNodePropertyContinued(line);
      }
    });
    return this.allNodes;
  }
  parseNodeBegin(line, property) {
    const nodeName = property[1].trim().replace(/^"/, "").replace(/"$/, "");
    const nodeAttrs = property[2].split(",").map(function(attr) {
      return attr.trim().replace(/^"/, "").replace(/"$/, "");
    });
    const node = { name: nodeName };
    const attrs = this.parseNodeAttr(nodeAttrs);
    const currentNode = this.getCurrentNode();
    if (this.currentIndent === 0) {
      this.allNodes.add(nodeName, node);
    } else {
      if (nodeName in currentNode) {
        if (nodeName === "PoseNode") {
          currentNode.PoseNode.push(node);
        } else if (currentNode[nodeName].id !== void 0) {
          currentNode[nodeName] = {};
          currentNode[nodeName][currentNode[nodeName].id] = currentNode[nodeName];
        }
        if (attrs.id !== "")
          currentNode[nodeName][attrs.id] = node;
      } else if (typeof attrs.id === "number") {
        currentNode[nodeName] = {};
        currentNode[nodeName][attrs.id] = node;
      } else if (nodeName !== "Properties70") {
        if (nodeName === "PoseNode")
          currentNode[nodeName] = [node];
        else
          currentNode[nodeName] = node;
      }
    }
    if (typeof attrs.id === "number")
      node.id = attrs.id;
    if (attrs.name !== "")
      node.attrName = attrs.name;
    if (attrs.type !== "")
      node.attrType = attrs.type;
    this.pushStack(node);
  }
  parseNodeAttr(attrs) {
    let id = attrs[0];
    if (attrs[0] !== "") {
      id = parseInt(attrs[0]);
      if (isNaN(id)) {
        id = attrs[0];
      }
    }
    let name = "", type = "";
    if (attrs.length > 1) {
      name = attrs[1].replace(/^(\w+)::/, "");
      type = attrs[2];
    }
    return { id, name, type };
  }
  parseNodeProperty(line, property, contentLine) {
    let propName = property[1].replace(/^"/, "").replace(/"$/, "").trim();
    let propValue = property[2].replace(/^"/, "").replace(/"$/, "").trim();
    if (propName === "Content" && propValue === ",") {
      propValue = contentLine.replace(/"/g, "").replace(/,$/, "").trim();
    }
    const currentNode = this.getCurrentNode();
    const parentName = currentNode.name;
    if (parentName === "Properties70") {
      this.parseNodeSpecialProperty(line, propName, propValue);
      return;
    }
    if (propName === "C") {
      const connProps = propValue.split(",").slice(1);
      const from = parseInt(connProps[0]);
      const to = parseInt(connProps[1]);
      let rest = propValue.split(",").slice(3);
      rest = rest.map(function(elem) {
        return elem.trim().replace(/^"/, "");
      });
      propName = "connections";
      propValue = [from, to];
      append(propValue, rest);
      if (currentNode[propName] === void 0) {
        currentNode[propName] = [];
      }
    }
    if (propName === "Node")
      currentNode.id = propValue;
    if (propName in currentNode && Array.isArray(currentNode[propName])) {
      currentNode[propName].push(propValue);
    } else {
      if (propName !== "a")
        currentNode[propName] = propValue;
      else
        currentNode.a = propValue;
    }
    this.setCurrentProp(currentNode, propName);
    if (propName === "a" && propValue.slice(-1) !== ",") {
      currentNode.a = parseNumberArray(propValue);
    }
  }
  parseNodePropertyContinued(line) {
    const currentNode = this.getCurrentNode();
    currentNode.a += line;
    if (line.slice(-1) !== ",") {
      currentNode.a = parseNumberArray(currentNode.a);
    }
  }
  // parse "Property70"
  parseNodeSpecialProperty(line, propName, propValue) {
    const props = propValue.split('",').map(function(prop) {
      return prop.trim().replace(/^\"/, "").replace(/\s/, "_");
    });
    const innerPropName = props[0];
    const innerPropType1 = props[1];
    const innerPropType2 = props[2];
    const innerPropFlag = props[3];
    let innerPropValue = props[4];
    switch (innerPropType1) {
      case "int":
      case "enum":
      case "bool":
      case "ULongLong":
      case "double":
      case "Number":
      case "FieldOfView":
        innerPropValue = parseFloat(innerPropValue);
        break;
      case "Color":
      case "ColorRGB":
      case "Vector3D":
      case "Lcl_Translation":
      case "Lcl_Rotation":
      case "Lcl_Scaling":
        innerPropValue = parseNumberArray(innerPropValue);
        break;
    }
    this.getPrevNode()[innerPropName] = {
      "type": innerPropType1,
      "type2": innerPropType2,
      "flag": innerPropFlag,
      "value": innerPropValue
    };
    this.setCurrentProp(this.getPrevNode(), innerPropName);
  }
};
var BinaryParser = class {
  parse(buffer) {
    const reader = new BinaryReader(buffer);
    reader.skip(23);
    const version = reader.getUint32();
    if (version < 6400) {
      throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + version);
    }
    const allNodes = new FBXTree();
    while (!this.endOfContent(reader)) {
      const node = this.parseNode(reader, version);
      if (node !== null)
        allNodes.add(node.name, node);
    }
    return allNodes;
  }
  // Check if reader has reached the end of content.
  endOfContent(reader) {
    if (reader.size() % 16 === 0) {
      return (reader.getOffset() + 160 + 16 & ~15) >= reader.size();
    } else {
      return reader.getOffset() + 160 + 16 >= reader.size();
    }
  }
  // recursively parse nodes until the end of the file is reached
  parseNode(reader, version) {
    const node = {};
    const endOffset = version >= 7500 ? reader.getUint64() : reader.getUint32();
    const numProperties = version >= 7500 ? reader.getUint64() : reader.getUint32();
    version >= 7500 ? reader.getUint64() : reader.getUint32();
    const nameLen = reader.getUint8();
    const name = reader.getString(nameLen);
    if (endOffset === 0)
      return null;
    const propertyList = [];
    for (let i = 0; i < numProperties; i++) {
      propertyList.push(this.parseProperty(reader));
    }
    const id = propertyList.length > 0 ? propertyList[0] : "";
    const attrName = propertyList.length > 1 ? propertyList[1] : "";
    const attrType = propertyList.length > 2 ? propertyList[2] : "";
    node.singleProperty = numProperties === 1 && reader.getOffset() === endOffset ? true : false;
    while (endOffset > reader.getOffset()) {
      const subNode = this.parseNode(reader, version);
      if (subNode !== null)
        this.parseSubNode(name, node, subNode);
    }
    node.propertyList = propertyList;
    if (typeof id === "number")
      node.id = id;
    if (attrName !== "")
      node.attrName = attrName;
    if (attrType !== "")
      node.attrType = attrType;
    if (name !== "")
      node.name = name;
    return node;
  }
  parseSubNode(name, node, subNode) {
    if (subNode.singleProperty === true) {
      const value = subNode.propertyList[0];
      if (Array.isArray(value)) {
        node[subNode.name] = subNode;
        subNode.a = value;
      } else {
        node[subNode.name] = value;
      }
    } else if (name === "Connections" && subNode.name === "C") {
      const array = [];
      subNode.propertyList.forEach(function(property, i) {
        if (i !== 0)
          array.push(property);
      });
      if (node.connections === void 0) {
        node.connections = [];
      }
      node.connections.push(array);
    } else if (subNode.name === "Properties70") {
      const keys = Object.keys(subNode);
      keys.forEach(function(key) {
        node[key] = subNode[key];
      });
    } else if (name === "Properties70" && subNode.name === "P") {
      let innerPropName = subNode.propertyList[0];
      let innerPropType1 = subNode.propertyList[1];
      const innerPropType2 = subNode.propertyList[2];
      const innerPropFlag = subNode.propertyList[3];
      let innerPropValue;
      if (innerPropName.indexOf("Lcl ") === 0)
        innerPropName = innerPropName.replace("Lcl ", "Lcl_");
      if (innerPropType1.indexOf("Lcl ") === 0)
        innerPropType1 = innerPropType1.replace("Lcl ", "Lcl_");
      if (innerPropType1 === "Color" || innerPropType1 === "ColorRGB" || innerPropType1 === "Vector" || innerPropType1 === "Vector3D" || innerPropType1.indexOf("Lcl_") === 0) {
        innerPropValue = [
          subNode.propertyList[4],
          subNode.propertyList[5],
          subNode.propertyList[6]
        ];
      } else {
        innerPropValue = subNode.propertyList[4];
      }
      node[innerPropName] = {
        "type": innerPropType1,
        "type2": innerPropType2,
        "flag": innerPropFlag,
        "value": innerPropValue
      };
    } else if (node[subNode.name] === void 0) {
      if (typeof subNode.id === "number") {
        node[subNode.name] = {};
        node[subNode.name][subNode.id] = subNode;
      } else {
        node[subNode.name] = subNode;
      }
    } else {
      if (subNode.name === "PoseNode") {
        if (!Array.isArray(node[subNode.name])) {
          node[subNode.name] = [node[subNode.name]];
        }
        node[subNode.name].push(subNode);
      } else if (node[subNode.name][subNode.id] === void 0) {
        node[subNode.name][subNode.id] = subNode;
      }
    }
  }
  parseProperty(reader) {
    const type = reader.getString(1);
    let length;
    switch (type) {
      case "C":
        return reader.getBoolean();
      case "D":
        return reader.getFloat64();
      case "F":
        return reader.getFloat32();
      case "I":
        return reader.getInt32();
      case "L":
        return reader.getInt64();
      case "R":
        length = reader.getUint32();
        return reader.getArrayBuffer(length);
      case "S":
        length = reader.getUint32();
        return reader.getString(length);
      case "Y":
        return reader.getInt16();
      case "b":
      case "c":
      case "d":
      case "f":
      case "i":
      case "l":
        const arrayLength = reader.getUint32();
        const encoding = reader.getUint32();
        const compressedLength = reader.getUint32();
        if (encoding === 0) {
          switch (type) {
            case "b":
            case "c":
              return reader.getBooleanArray(arrayLength);
            case "d":
              return reader.getFloat64Array(arrayLength);
            case "f":
              return reader.getFloat32Array(arrayLength);
            case "i":
              return reader.getInt32Array(arrayLength);
            case "l":
              return reader.getInt64Array(arrayLength);
          }
        }
        const data = unzlibSync(new Uint8Array(reader.getArrayBuffer(compressedLength)));
        const reader2 = new BinaryReader(data.buffer);
        switch (type) {
          case "b":
          case "c":
            return reader2.getBooleanArray(arrayLength);
          case "d":
            return reader2.getFloat64Array(arrayLength);
          case "f":
            return reader2.getFloat32Array(arrayLength);
          case "i":
            return reader2.getInt32Array(arrayLength);
          case "l":
            return reader2.getInt64Array(arrayLength);
        }
        break;
      default:
        throw new Error("THREE.FBXLoader: Unknown property type " + type);
    }
  }
};
var BinaryReader = class {
  constructor(buffer, littleEndian) {
    this.dv = new DataView(buffer);
    this.offset = 0;
    this.littleEndian = littleEndian !== void 0 ? littleEndian : true;
    this._textDecoder = new TextDecoder();
  }
  getOffset() {
    return this.offset;
  }
  size() {
    return this.dv.buffer.byteLength;
  }
  skip(length) {
    this.offset += length;
  }
  // seems like true/false representation depends on exporter.
  // true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54)
  // then sees LSB.
  getBoolean() {
    return (this.getUint8() & 1) === 1;
  }
  getBooleanArray(size) {
    const a = [];
    for (let i = 0; i < size; i++) {
      a.push(this.getBoolean());
    }
    return a;
  }
  getUint8() {
    const value = this.dv.getUint8(this.offset);
    this.offset += 1;
    return value;
  }
  getInt16() {
    const value = this.dv.getInt16(this.offset, this.littleEndian);
    this.offset += 2;
    return value;
  }
  getInt32() {
    const value = this.dv.getInt32(this.offset, this.littleEndian);
    this.offset += 4;
    return value;
  }
  getInt32Array(size) {
    const a = [];
    for (let i = 0; i < size; i++) {
      a.push(this.getInt32());
    }
    return a;
  }
  getUint32() {
    const value = this.dv.getUint32(this.offset, this.littleEndian);
    this.offset += 4;
    return value;
  }
  // JavaScript doesn't support 64-bit integer so calculate this here
  // 1 << 32 will return 1 so using multiply operation instead here.
  // There's a possibility that this method returns wrong value if the value
  // is out of the range between Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER.
  // TODO: safely handle 64-bit integer
  getInt64() {
    let low, high;
    if (this.littleEndian) {
      low = this.getUint32();
      high = this.getUint32();
    } else {
      high = this.getUint32();
      low = this.getUint32();
    }
    if (high & 2147483648) {
      high = ~high & 4294967295;
      low = ~low & 4294967295;
      if (low === 4294967295)
        high = high + 1 & 4294967295;
      low = low + 1 & 4294967295;
      return -(high * 4294967296 + low);
    }
    return high * 4294967296 + low;
  }
  getInt64Array(size) {
    const a = [];
    for (let i = 0; i < size; i++) {
      a.push(this.getInt64());
    }
    return a;
  }
  // Note: see getInt64() comment
  getUint64() {
    let low, high;
    if (this.littleEndian) {
      low = this.getUint32();
      high = this.getUint32();
    } else {
      high = this.getUint32();
      low = this.getUint32();
    }
    return high * 4294967296 + low;
  }
  getFloat32() {
    const value = this.dv.getFloat32(this.offset, this.littleEndian);
    this.offset += 4;
    return value;
  }
  getFloat32Array(size) {
    const a = [];
    for (let i = 0; i < size; i++) {
      a.push(this.getFloat32());
    }
    return a;
  }
  getFloat64() {
    const value = this.dv.getFloat64(this.offset, this.littleEndian);
    this.offset += 8;
    return value;
  }
  getFloat64Array(size) {
    const a = [];
    for (let i = 0; i < size; i++) {
      a.push(this.getFloat64());
    }
    return a;
  }
  getArrayBuffer(size) {
    const value = this.dv.buffer.slice(this.offset, this.offset + size);
    this.offset += size;
    return value;
  }
  getString(size) {
    const start = this.offset;
    let a = new Uint8Array(this.dv.buffer, start, size);
    this.skip(size);
    const nullByte = a.indexOf(0);
    if (nullByte >= 0)
      a = new Uint8Array(this.dv.buffer, start, nullByte);
    return this._textDecoder.decode(a);
  }
};
var FBXTree = class {
  add(key, val) {
    this[key] = val;
  }
};
function isFbxFormatBinary(buffer) {
  const CORRECT = "Kaydara FBX Binary  \0";
  return buffer.byteLength >= CORRECT.length && CORRECT === convertArrayBufferToString(buffer, 0, CORRECT.length);
}
function isFbxFormatASCII(text) {
  const CORRECT = ["K", "a", "y", "d", "a", "r", "a", "\\", "F", "B", "X", "\\", "B", "i", "n", "a", "r", "y", "\\", "\\"];
  let cursor = 0;
  function read(offset) {
    const result = text[offset - 1];
    text = text.slice(cursor + offset);
    cursor++;
    return result;
  }
  for (let i = 0; i < CORRECT.length; ++i) {
    const num = read(1);
    if (num === CORRECT[i]) {
      return false;
    }
  }
  return true;
}
function getFbxVersion(text) {
  const versionRegExp = /FBXVersion: (\d+)/;
  const match = text.match(versionRegExp);
  if (match) {
    const version = parseInt(match[1]);
    return version;
  }
  throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.");
}
function convertFBXTimeToSeconds(time) {
  return time / 46186158e3;
}
var dataArray = [];
function getData(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {
  let index;
  switch (infoObject.mappingType) {
    case "ByPolygonVertex":
      index = polygonVertexIndex;
      break;
    case "ByPolygon":
      index = polygonIndex;
      break;
    case "ByVertice":
      index = vertexIndex;
      break;
    case "AllSame":
      index = infoObject.indices[0];
      break;
    default:
      console.warn("THREE.FBXLoader: unknown attribute mapping type " + infoObject.mappingType);
  }
  if (infoObject.referenceType === "IndexToDirect")
    index = infoObject.indices[index];
  const from = index * infoObject.dataSize;
  const to = from + infoObject.dataSize;
  return slice(dataArray, infoObject.buffer, from, to);
}
var tempEuler = new Euler();
var tempVec = new Vector3();
function generateTransform(transformData) {
  const lTranslationM = new Matrix4();
  const lPreRotationM = new Matrix4();
  const lRotationM = new Matrix4();
  const lPostRotationM = new Matrix4();
  const lScalingM = new Matrix4();
  const lScalingPivotM = new Matrix4();
  const lScalingOffsetM = new Matrix4();
  const lRotationOffsetM = new Matrix4();
  const lRotationPivotM = new Matrix4();
  const lParentGX = new Matrix4();
  const lParentLX = new Matrix4();
  const lGlobalT = new Matrix4();
  const inheritType = transformData.inheritType ? transformData.inheritType : 0;
  if (transformData.translation)
    lTranslationM.setPosition(tempVec.fromArray(transformData.translation));
  const defaultEulerOrder = getEulerOrder(0);
  if (transformData.preRotation) {
    const array = transformData.preRotation.map(MathUtils.degToRad);
    array.push(defaultEulerOrder);
    lPreRotationM.makeRotationFromEuler(tempEuler.fromArray(array));
  }
  if (transformData.rotation) {
    const array = transformData.rotation.map(MathUtils.degToRad);
    array.push(transformData.eulerOrder || defaultEulerOrder);
    lRotationM.makeRotationFromEuler(tempEuler.fromArray(array));
  }
  if (transformData.postRotation) {
    const array = transformData.postRotation.map(MathUtils.degToRad);
    array.push(defaultEulerOrder);
    lPostRotationM.makeRotationFromEuler(tempEuler.fromArray(array));
    lPostRotationM.invert();
  }
  if (transformData.scale)
    lScalingM.scale(tempVec.fromArray(transformData.scale));
  if (transformData.scalingOffset)
    lScalingOffsetM.setPosition(tempVec.fromArray(transformData.scalingOffset));
  if (transformData.scalingPivot)
    lScalingPivotM.setPosition(tempVec.fromArray(transformData.scalingPivot));
  if (transformData.rotationOffset)
    lRotationOffsetM.setPosition(tempVec.fromArray(transformData.rotationOffset));
  if (transformData.rotationPivot)
    lRotationPivotM.setPosition(tempVec.fromArray(transformData.rotationPivot));
  if (transformData.parentMatrixWorld) {
    lParentLX.copy(transformData.parentMatrix);
    lParentGX.copy(transformData.parentMatrixWorld);
  }
  const lLRM = lPreRotationM.clone().multiply(lRotationM).multiply(lPostRotationM);
  const lParentGRM = new Matrix4();
  lParentGRM.extractRotation(lParentGX);
  const lParentTM = new Matrix4();
  lParentTM.copyPosition(lParentGX);
  const lParentGRSM = lParentTM.clone().invert().multiply(lParentGX);
  const lParentGSM = lParentGRM.clone().invert().multiply(lParentGRSM);
  const lLSM = lScalingM;
  const lGlobalRS = new Matrix4();
  if (inheritType === 0) {
    lGlobalRS.copy(lParentGRM).multiply(lLRM).multiply(lParentGSM).multiply(lLSM);
  } else if (inheritType === 1) {
    lGlobalRS.copy(lParentGRM).multiply(lParentGSM).multiply(lLRM).multiply(lLSM);
  } else {
    const lParentLSM = new Matrix4().scale(new Vector3().setFromMatrixScale(lParentLX));
    const lParentLSM_inv = lParentLSM.clone().invert();
    const lParentGSM_noLocal = lParentGSM.clone().multiply(lParentLSM_inv);
    lGlobalRS.copy(lParentGRM).multiply(lLRM).multiply(lParentGSM_noLocal).multiply(lLSM);
  }
  const lRotationPivotM_inv = lRotationPivotM.clone().invert();
  const lScalingPivotM_inv = lScalingPivotM.clone().invert();
  let lTransform = lTranslationM.clone().multiply(lRotationOffsetM).multiply(lRotationPivotM).multiply(lPreRotationM).multiply(lRotationM).multiply(lPostRotationM).multiply(lRotationPivotM_inv).multiply(lScalingOffsetM).multiply(lScalingPivotM).multiply(lScalingM).multiply(lScalingPivotM_inv);
  const lLocalTWithAllPivotAndOffsetInfo = new Matrix4().copyPosition(lTransform);
  const lGlobalTranslation = lParentGX.clone().multiply(lLocalTWithAllPivotAndOffsetInfo);
  lGlobalT.copyPosition(lGlobalTranslation);
  lTransform = lGlobalT.clone().multiply(lGlobalRS);
  lTransform.premultiply(lParentGX.invert());
  return lTransform;
}
function getEulerOrder(order) {
  order = order || 0;
  const enums = [
    "ZYX",
    // -> XYZ extrinsic
    "YZX",
    // -> XZY extrinsic
    "XZY",
    // -> YZX extrinsic
    "ZXY",
    // -> YXZ extrinsic
    "YXZ",
    // -> ZXY extrinsic
    "XYZ"
    // -> ZYX extrinsic
    //'SphericXYZ', // not possible to support
  ];
  if (order === 6) {
    console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect.");
    return enums[0];
  }
  return enums[order];
}
function parseNumberArray(value) {
  const array = value.split(",").map(function(val) {
    return parseFloat(val);
  });
  return array;
}
function convertArrayBufferToString(buffer, from, to) {
  if (from === void 0)
    from = 0;
  if (to === void 0)
    to = buffer.byteLength;
  return new TextDecoder().decode(new Uint8Array(buffer, from, to));
}
function append(a, b) {
  for (let i = 0, j = a.length, l = b.length; i < l; i++, j++) {
    a[j] = b[i];
  }
}
function slice(a, b, from, to) {
  for (let i = from, j = 0; i < to; i++, j++) {
    a[j] = b[i];
  }
  return a;
}
export {
  FBXLoader
};
/*! Bundled license information:

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.8.2
  *)
*/
//# sourceMappingURL=three_examples_jsm_loaders_FBXLoader.js.map
