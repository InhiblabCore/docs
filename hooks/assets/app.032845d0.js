alert(
  "该网站已经不再维护，将跳转到新的 2.0 文档网站以此获得更好的体验 / This website has been shut down. Please jump to the new 2.0 documentation website for better experience."
);
window.location.href = "https://inhiblabcore.github.io/vue-hooks-plus";
console.log("carbon ads");

var rd = Object.defineProperty;
var sd = (e, t, n) =>
  t in e
    ? rd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Xe = (e, t, n) => (sd(e, typeof t != "symbol" ? t + "" : t, n), n);
const od = "modulepreload",
  si = {},
  ad = "/docs/hooks/",
  aa = function (t, n) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((r) => {
            if (((r = `${ad}${r}`), r in si)) return;
            si[r] = !0;
            const s = r.endsWith(".css"),
              o = s ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${r}"]${o}`)) return;
            const a = document.createElement("link");
            if (
              ((a.rel = s ? "stylesheet" : od),
              s || ((a.as = "script"), (a.crossOrigin = "")),
              (a.href = r),
              document.head.appendChild(a),
              s)
            )
              return new Promise((i, l) => {
                a.addEventListener("load", i),
                  a.addEventListener("error", () =>
                    l(new Error(`Unable to preload CSS for ${r}`))
                  );
              });
          })
        ).then(() => t());
  };
function ia(e, t) {
  const n = Object.create(null),
    r = e.split(",");
  for (let s = 0; s < r.length; s++) n[r[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
const $e = {},
  bn = [],
  it = () => {},
  id = () => !1,
  ld = /^on[^a-z]/,
  wr = (e) => ld.test(e),
  la = (e) => e.startsWith("onUpdate:"),
  Te = Object.assign,
  ca = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  cd = Object.prototype.hasOwnProperty,
  de = (e, t) => cd.call(e, t),
  ee = Array.isArray,
  $n = (e) => ws(e) === "[object Map]",
  yc = (e) => ws(e) === "[object Set]",
  le = (e) => typeof e == "function",
  Ae = (e) => typeof e == "string",
  ua = (e) => typeof e == "symbol",
  we = (e) => e !== null && typeof e == "object",
  bc = (e) => we(e) && le(e.then) && le(e.catch),
  $c = Object.prototype.toString,
  ws = (e) => $c.call(e),
  ud = (e) => ws(e).slice(8, -1),
  wc = (e) => ws(e) === "[object Object]",
  fa = (e) =>
    Ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  er = ia(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Ss = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  fd = /-(\w)/g,
  mt = Ss((e) => e.replace(fd, (t, n) => (n ? n.toUpperCase() : ""))),
  dd = /\B([A-Z])/g,
  Fn = Ss((e) => e.replace(dd, "-$1").toLowerCase()),
  xs = Ss((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  eo = Ss((e) => (e ? `on${xs(e)}` : "")),
  hr = (e, t) => !Object.is(e, t),
  Xr = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  rs = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  To = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  pd = (e) => {
    const t = Ae(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let oi;
const Ao = () =>
  oi ||
  (oi =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
      ? self
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : {});
function da(e) {
  if (ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = Ae(r) ? md(r) : da(r);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else {
    if (Ae(e)) return e;
    if (we(e)) return e;
  }
}
const hd = /;(?![^(]*\))/g,
  vd = /:([^]+)/,
  _d = /\/\*[^]*?\*\//g;
function md(e) {
  const t = {};
  return (
    e
      .replace(_d, "")
      .split(hd)
      .forEach((n) => {
        if (n) {
          const r = n.split(vd);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function pe(e) {
  let t = "";
  if (Ae(e)) t = e;
  else if (ee(e))
    for (let n = 0; n < e.length; n++) {
      const r = pe(e[n]);
      r && (t += r + " ");
    }
  else if (we(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const gd =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  yd = ia(gd);
function Sc(e) {
  return !!e || e === "";
}
const ae = (e) =>
    Ae(e)
      ? e
      : e == null
      ? ""
      : ee(e) || (we(e) && (e.toString === $c || !le(e.toString)))
      ? JSON.stringify(e, xc, 2)
      : String(e),
  xc = (e, t) =>
    t && t.__v_isRef
      ? xc(e, t.value)
      : $n(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s]) => ((n[`${r} =>`] = s), n),
            {}
          ),
        }
      : yc(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : we(t) && !ee(t) && !wc(t)
      ? String(t)
      : t;
let Ke;
class Pc {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ke),
      !t && Ke && (this.index = (Ke.scopes || (Ke.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ke;
      try {
        return (Ke = this), t();
      } finally {
        Ke = n;
      }
    }
  }
  on() {
    Ke = this;
  }
  off() {
    Ke = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Ec(e) {
  return new Pc(e);
}
function bd(e, t = Ke) {
  t && t.active && t.effects.push(e);
}
function Ps() {
  return Ke;
}
function Rn(e) {
  Ke && Ke.cleanups.push(e);
}
const pa = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  kc = (e) => (e.w & Vt) > 0,
  Tc = (e) => (e.n & Vt) > 0,
  $d = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Vt;
  },
  wd = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const s = t[r];
        kc(s) && !Tc(s) ? s.delete(e) : (t[n++] = s),
          (s.w &= ~Vt),
          (s.n &= ~Vt);
      }
      t.length = n;
    }
  },
  ss = new WeakMap();
let Qn = 0,
  Vt = 1;
const Co = 30;
let ot;
const nn = Symbol(""),
  Oo = Symbol("");
class ha {
  constructor(t, n = null, r) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      bd(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let t = ot,
      n = Ft;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = ot),
        (ot = this),
        (Ft = !0),
        (Vt = 1 << ++Qn),
        Qn <= Co ? $d(this) : ai(this),
        this.fn()
      );
    } finally {
      Qn <= Co && wd(this),
        (Vt = 1 << --Qn),
        (ot = this.parent),
        (Ft = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    ot === this
      ? (this.deferStop = !0)
      : this.active &&
        (ai(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function ai(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let Ft = !0;
const Ac = [];
function Nn() {
  Ac.push(Ft), (Ft = !1);
}
function Vn() {
  const e = Ac.pop();
  Ft = e === void 0 ? !0 : e;
}
function ze(e, t, n) {
  if (Ft && ot) {
    let r = ss.get(e);
    r || ss.set(e, (r = new Map()));
    let s = r.get(n);
    s || r.set(n, (s = pa())), Cc(s);
  }
}
function Cc(e, t) {
  let n = !1;
  Qn <= Co ? Tc(e) || ((e.n |= Vt), (n = !kc(e))) : (n = !e.has(ot)),
    n && (e.add(ot), ot.deps.push(e));
}
function xt(e, t, n, r, s, o) {
  const a = ss.get(e);
  if (!a) return;
  let i = [];
  if (t === "clear") i = [...a.values()];
  else if (n === "length" && ee(e)) {
    const l = Number(r);
    a.forEach((c, u) => {
      (u === "length" || u >= l) && i.push(c);
    });
  } else
    switch ((n !== void 0 && i.push(a.get(n)), t)) {
      case "add":
        ee(e)
          ? fa(n) && i.push(a.get("length"))
          : (i.push(a.get(nn)), $n(e) && i.push(a.get(Oo)));
        break;
      case "delete":
        ee(e) || (i.push(a.get(nn)), $n(e) && i.push(a.get(Oo)));
        break;
      case "set":
        $n(e) && i.push(a.get(nn));
        break;
    }
  if (i.length === 1) i[0] && Lo(i[0]);
  else {
    const l = [];
    for (const c of i) c && l.push(...c);
    Lo(pa(l));
  }
}
function Lo(e, t) {
  const n = ee(e) ? e : [...e];
  for (const r of n) r.computed && ii(r);
  for (const r of n) r.computed || ii(r);
}
function ii(e, t) {
  (e !== ot || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
function Sd(e, t) {
  var n;
  return (n = ss.get(e)) == null ? void 0 : n.get(t);
}
const xd = ia("__proto__,__v_isRef,__isVue"),
  Oc = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(ua)
  ),
  Pd = Es(),
  Ed = Es(!1, !0),
  kd = Es(!0),
  Td = Es(!0, !0),
  li = Ad();
function Ad() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = fe(this);
        for (let o = 0, a = this.length; o < a; o++) ze(r, "get", o + "");
        const s = r[t](...n);
        return s === -1 || s === !1 ? r[t](...n.map(fe)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Nn();
        const r = fe(this)[t].apply(this, n);
        return Vn(), r;
      };
    }),
    e
  );
}
function Cd(e) {
  const t = fe(this);
  return ze(t, "has", e), t.hasOwnProperty(e);
}
function Es(e = !1, t = !1) {
  return function (r, s, o) {
    if (s === "__v_isReactive") return !e;
    if (s === "__v_isReadonly") return e;
    if (s === "__v_isShallow") return t;
    if (s === "__v_raw" && o === (e ? (t ? Vc : Nc) : t ? Rc : Fc).get(r))
      return r;
    const a = ee(r);
    if (!e) {
      if (a && de(li, s)) return Reflect.get(li, s, o);
      if (s === "hasOwnProperty") return Cd;
    }
    const i = Reflect.get(r, s, o);
    return (ua(s) ? Oc.has(s) : xd(s)) || (e || ze(r, "get", s), t)
      ? i
      : _e(i)
      ? a && fa(s)
        ? i
        : i.value
      : we(i)
      ? e
        ? Le(i)
        : gt(i)
      : i;
  };
}
const Od = Lc(),
  Ld = Lc(!0);
function Lc(e = !1) {
  return function (n, r, s, o) {
    let a = n[r];
    if (En(a) && _e(a) && !_e(s)) return !1;
    if (
      !e &&
      (!os(s) && !En(s) && ((a = fe(a)), (s = fe(s))),
      !ee(n) && _e(a) && !_e(s))
    )
      return (a.value = s), !0;
    const i = ee(n) && fa(r) ? Number(r) < n.length : de(n, r),
      l = Reflect.set(n, r, s, o);
    return (
      n === fe(o) && (i ? hr(s, a) && xt(n, "set", r, s) : xt(n, "add", r, s)),
      l
    );
  };
}
function Id(e, t) {
  const n = de(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && xt(e, "delete", t, void 0), r;
}
function Md(e, t) {
  const n = Reflect.has(e, t);
  return (!ua(t) || !Oc.has(t)) && ze(e, "has", t), n;
}
function Fd(e) {
  return ze(e, "iterate", ee(e) ? "length" : nn), Reflect.ownKeys(e);
}
const Ic = { get: Pd, set: Od, deleteProperty: Id, has: Md, ownKeys: Fd },
  Mc = {
    get: kd,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  Rd = Te({}, Ic, { get: Ed, set: Ld }),
  Nd = Te({}, Mc, { get: Td }),
  va = (e) => e,
  ks = (e) => Reflect.getPrototypeOf(e);
function Rr(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = fe(e),
    o = fe(t);
  n || (t !== o && ze(s, "get", t), ze(s, "get", o));
  const { has: a } = ks(s),
    i = r ? va : n ? _a : vr;
  if (a.call(s, t)) return i(e.get(t));
  if (a.call(s, o)) return i(e.get(o));
  e !== s && e.get(t);
}
function Nr(e, t = !1) {
  const n = this.__v_raw,
    r = fe(n),
    s = fe(e);
  return (
    t || (e !== s && ze(r, "has", e), ze(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  );
}
function Vr(e, t = !1) {
  return (
    (e = e.__v_raw), !t && ze(fe(e), "iterate", nn), Reflect.get(e, "size", e)
  );
}
function ci(e) {
  e = fe(e);
  const t = fe(this);
  return ks(t).has.call(t, e) || (t.add(e), xt(t, "add", e, e)), this;
}
function ui(e, t) {
  t = fe(t);
  const n = fe(this),
    { has: r, get: s } = ks(n);
  let o = r.call(n, e);
  o || ((e = fe(e)), (o = r.call(n, e)));
  const a = s.call(n, e);
  return (
    n.set(e, t), o ? hr(t, a) && xt(n, "set", e, t) : xt(n, "add", e, t), this
  );
}
function fi(e) {
  const t = fe(this),
    { has: n, get: r } = ks(t);
  let s = n.call(t, e);
  s || ((e = fe(e)), (s = n.call(t, e))), r && r.call(t, e);
  const o = t.delete(e);
  return s && xt(t, "delete", e, void 0), o;
}
function di() {
  const e = fe(this),
    t = e.size !== 0,
    n = e.clear();
  return t && xt(e, "clear", void 0, void 0), n;
}
function Dr(e, t) {
  return function (r, s) {
    const o = this,
      a = o.__v_raw,
      i = fe(a),
      l = t ? va : e ? _a : vr;
    return (
      !e && ze(i, "iterate", nn), a.forEach((c, u) => r.call(s, l(c), l(u), o))
    );
  };
}
function Br(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = fe(s),
      a = $n(o),
      i = e === "entries" || (e === Symbol.iterator && a),
      l = e === "keys" && a,
      c = s[e](...r),
      u = n ? va : t ? _a : vr;
    return (
      !t && ze(o, "iterate", l ? Oo : nn),
      {
        next() {
          const { value: f, done: d } = c.next();
          return d
            ? { value: f, done: d }
            : { value: i ? [u(f[0]), u(f[1])] : u(f), done: d };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function kt(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function Vd() {
  const e = {
      get(o) {
        return Rr(this, o);
      },
      get size() {
        return Vr(this);
      },
      has: Nr,
      add: ci,
      set: ui,
      delete: fi,
      clear: di,
      forEach: Dr(!1, !1),
    },
    t = {
      get(o) {
        return Rr(this, o, !1, !0);
      },
      get size() {
        return Vr(this);
      },
      has: Nr,
      add: ci,
      set: ui,
      delete: fi,
      clear: di,
      forEach: Dr(!1, !0),
    },
    n = {
      get(o) {
        return Rr(this, o, !0);
      },
      get size() {
        return Vr(this, !0);
      },
      has(o) {
        return Nr.call(this, o, !0);
      },
      add: kt("add"),
      set: kt("set"),
      delete: kt("delete"),
      clear: kt("clear"),
      forEach: Dr(!0, !1),
    },
    r = {
      get(o) {
        return Rr(this, o, !0, !0);
      },
      get size() {
        return Vr(this, !0);
      },
      has(o) {
        return Nr.call(this, o, !0);
      },
      add: kt("add"),
      set: kt("set"),
      delete: kt("delete"),
      clear: kt("clear"),
      forEach: Dr(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = Br(o, !1, !1)),
        (n[o] = Br(o, !0, !1)),
        (t[o] = Br(o, !1, !0)),
        (r[o] = Br(o, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [Dd, Bd, jd, Hd] = Vd();
function Ts(e, t) {
  const n = t ? (e ? Hd : jd) : e ? Bd : Dd;
  return (r, s, o) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? r
      : Reflect.get(de(n, s) && s in r ? n : r, s, o);
}
const Ud = { get: Ts(!1, !1) },
  zd = { get: Ts(!1, !0) },
  qd = { get: Ts(!0, !1) },
  Wd = { get: Ts(!0, !0) },
  Fc = new WeakMap(),
  Rc = new WeakMap(),
  Nc = new WeakMap(),
  Vc = new WeakMap();
function Gd(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Kd(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Gd(ud(e));
}
function gt(e) {
  return En(e) ? e : As(e, !1, Ic, Ud, Fc);
}
function Yd(e) {
  return As(e, !1, Rd, zd, Rc);
}
function Le(e) {
  return As(e, !0, Mc, qd, Nc);
}
function Dc(e) {
  return As(e, !0, Nd, Wd, Vc);
}
function As(e, t, n, r, s) {
  if (!we(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const a = Kd(e);
  if (a === 0) return e;
  const i = new Proxy(e, a === 2 ? r : n);
  return s.set(e, i), i;
}
function Rt(e) {
  return En(e) ? Rt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function En(e) {
  return !!(e && e.__v_isReadonly);
}
function os(e) {
  return !!(e && e.__v_isShallow);
}
function Bc(e) {
  return Rt(e) || En(e);
}
function fe(e) {
  const t = e && e.__v_raw;
  return t ? fe(t) : e;
}
function St(e) {
  return rs(e, "__v_skip", !0), e;
}
const vr = (e) => (we(e) ? gt(e) : e),
  _a = (e) => (we(e) ? Le(e) : e);
function jc(e) {
  Ft && ot && ((e = fe(e)), Cc(e.dep || (e.dep = pa())));
}
function Hc(e, t) {
  e = fe(e);
  const n = e.dep;
  n && Lo(n);
}
function _e(e) {
  return !!(e && e.__v_isRef === !0);
}
function C(e) {
  return Uc(e, !1);
}
function Jd(e) {
  return Uc(e, !0);
}
function Uc(e, t) {
  return _e(e) ? e : new Xd(e, t);
}
class Xd {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : fe(t)),
      (this._value = n ? t : vr(t));
  }
  get value() {
    return jc(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || os(t) || En(t);
    (t = n ? t : fe(t)),
      hr(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : vr(t)), Hc(this));
  }
}
function w(e) {
  return _e(e) ? e.value : e;
}
const Qd = {
  get: (e, t, n) => w(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return _e(s) && !_e(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function zc(e) {
  return Rt(e) ? e : new Proxy(e, Qd);
}
function Sr(e) {
  const t = ee(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = ep(e, n);
  return t;
}
class Zd {
  constructor(t, n, r) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Sd(fe(this._object), this._key);
  }
}
function ep(e, t, n) {
  const r = e[t];
  return _e(r) ? r : new Zd(e, t, n);
}
class tp {
  constructor(t, n, r, s) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new ha(t, () => {
        this._dirty || ((this._dirty = !0), Hc(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = fe(this);
    return (
      jc(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function np(e, t, n = !1) {
  let r, s;
  const o = le(e);
  return (
    o ? ((r = e), (s = it)) : ((r = e.get), (s = e.set)),
    new tp(r, s, o || !s, n)
  );
}
function Nt(e, t, n, r) {
  let s;
  try {
    s = r ? e(...r) : e();
  } catch (o) {
    xr(o, t, n);
  }
  return s;
}
function et(e, t, n, r) {
  if (le(e)) {
    const o = Nt(e, t, n, r);
    return (
      o &&
        bc(o) &&
        o.catch((a) => {
          xr(a, t, n);
        }),
      o
    );
  }
  const s = [];
  for (let o = 0; o < e.length; o++) s.push(et(e[o], t, n, r));
  return s;
}
function xr(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const a = t.proxy,
      i = n;
    for (; o; ) {
      const c = o.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, a, i) === !1) return;
      }
      o = o.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Nt(l, null, 10, [e, a, i]);
      return;
    }
  }
  rp(e, n, s, r);
}
function rp(e, t, n, r = !0) {
  console.error(e);
}
let _r = !1,
  Io = !1;
const Ve = [];
let _t = 0;
const wn = [];
let $t = null,
  Yt = 0;
const qc = Promise.resolve();
let ma = null;
function an(e) {
  const t = ma || qc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sp(e) {
  let t = _t + 1,
    n = Ve.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1;
    mr(Ve[r]) < e ? (t = r + 1) : (n = r);
  }
  return t;
}
function Cs(e) {
  (!Ve.length || !Ve.includes(e, _r && e.allowRecurse ? _t + 1 : _t)) &&
    (e.id == null ? Ve.push(e) : Ve.splice(sp(e.id), 0, e), Wc());
}
function Wc() {
  !_r && !Io && ((Io = !0), (ma = qc.then(Gc)));
}
function op(e) {
  const t = Ve.indexOf(e);
  t > _t && Ve.splice(t, 1);
}
function ap(e) {
  ee(e)
    ? wn.push(...e)
    : (!$t || !$t.includes(e, e.allowRecurse ? Yt + 1 : Yt)) && wn.push(e),
    Wc();
}
function pi(e, t = _r ? _t + 1 : 0) {
  for (; t < Ve.length; t++) {
    const n = Ve[t];
    n && n.pre && (Ve.splice(t, 1), t--, n());
  }
}
function as(e) {
  if (wn.length) {
    const t = [...new Set(wn)];
    if (((wn.length = 0), $t)) {
      $t.push(...t);
      return;
    }
    for ($t = t, $t.sort((n, r) => mr(n) - mr(r)), Yt = 0; Yt < $t.length; Yt++)
      $t[Yt]();
    ($t = null), (Yt = 0);
  }
}
const mr = (e) => (e.id == null ? 1 / 0 : e.id),
  ip = (e, t) => {
    const n = mr(e) - mr(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Gc(e) {
  (Io = !1), (_r = !0), Ve.sort(ip);
  const t = it;
  try {
    for (_t = 0; _t < Ve.length; _t++) {
      const n = Ve[_t];
      n && n.active !== !1 && Nt(n, null, 14);
    }
  } finally {
    (_t = 0),
      (Ve.length = 0),
      as(),
      (_r = !1),
      (ma = null),
      (Ve.length || wn.length) && Gc();
  }
}
function lp(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || $e;
  let s = n;
  const o = t.startsWith("update:"),
    a = o && t.slice(7);
  if (a && a in r) {
    const u = `${a === "modelValue" ? "model" : a}Modifiers`,
      { number: f, trim: d } = r[u] || $e;
    d && (s = n.map((p) => (Ae(p) ? p.trim() : p))), f && (s = n.map(To));
  }
  let i,
    l = r[(i = eo(t))] || r[(i = eo(mt(t)))];
  !l && o && (l = r[(i = eo(Fn(t)))]), l && et(l, e, 6, s);
  const c = r[i + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[i]) return;
    (e.emitted[i] = !0), et(c, e, 6, s);
  }
}
function Kc(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let a = {},
    i = !1;
  if (!le(e)) {
    const l = (c) => {
      const u = Kc(c, t, !0);
      u && ((i = !0), Te(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !o && !i
    ? (we(e) && r.set(e, null), null)
    : (ee(o) ? o.forEach((l) => (a[l] = null)) : Te(a, o),
      we(e) && r.set(e, a),
      a);
}
function Os(e, t) {
  return !e || !wr(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      de(e, t[0].toLowerCase() + t.slice(1)) || de(e, Fn(t)) || de(e, t));
}
let Re = null,
  Ls = null;
function is(e) {
  const t = Re;
  return (Re = e), (Ls = (e && e.type.__scopeId) || null), t;
}
function tt(e) {
  Ls = e;
}
function nt() {
  Ls = null;
}
function ne(e, t = Re, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && Pi(-1);
    const o = is(t);
    let a;
    try {
      a = e(...s);
    } finally {
      is(o), r._d && Pi(1);
    }
    return a;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function to(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: o,
    propsOptions: [a],
    slots: i,
    attrs: l,
    emit: c,
    render: u,
    renderCache: f,
    data: d,
    setupState: p,
    ctx: g,
    inheritAttrs: y,
  } = e;
  let P, v;
  const $ = is(e);
  try {
    if (n.shapeFlag & 4) {
      const T = s || r;
      (P = st(u.call(T, T, f, o, p, d, g))), (v = l);
    } else {
      const T = t;
      (P = st(
        T.length > 1 ? T(o, { attrs: l, slots: i, emit: c }) : T(o, null)
      )),
        (v = t.props ? l : cp(l));
    }
  } catch (T) {
    (rr.length = 0), xr(T, e, 1), (P = M(Ye));
  }
  let I = P;
  if (v && y !== !1) {
    const T = Object.keys(v),
      { shapeFlag: k } = I;
    T.length && k & 7 && (a && T.some(la) && (v = up(v, a)), (I = Dt(I, v)));
  }
  return (
    n.dirs && ((I = Dt(I)), (I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (I.transition = n.transition),
    (P = I),
    is($),
    P
  );
}
const cp = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || wr(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  up = (e, t) => {
    const n = {};
    for (const r in e) (!la(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function fp(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: a, children: i, patchFlag: l } = t,
    c = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? hi(r, a, c) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (a[d] !== r[d] && !Os(c, d)) return !0;
      }
    }
  } else
    return (s || i) && (!i || !i.$stable)
      ? !0
      : r === a
      ? !1
      : r
      ? a
        ? hi(r, a, c)
        : !0
      : !!a;
  return !1;
}
function hi(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !Os(n, o)) return !0;
  }
  return !1;
}
function dp({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const pp = (e) => e.__isSuspense;
function Yc(e, t) {
  t && t.pendingBranch
    ? ee(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : ap(e);
}
function Se(e, t) {
  return Is(e, null, t);
}
function hp(e, t) {
  return Is(e, null, { flush: "post" });
}
const jr = {};
function Pe(e, t, n) {
  return Is(e, t, n);
}
function Is(
  e,
  t,
  { immediate: n, deep: r, flush: s, onTrack: o, onTrigger: a } = $e
) {
  var i;
  const l = Ps() === ((i = Oe) == null ? void 0 : i.scope) ? Oe : null;
  let c,
    u = !1,
    f = !1;
  if (
    (_e(e)
      ? ((c = () => e.value), (u = os(e)))
      : Rt(e)
      ? ((c = () => e), (r = !0))
      : ee(e)
      ? ((f = !0),
        (u = e.some((T) => Rt(T) || os(T))),
        (c = () =>
          e.map((T) => {
            if (_e(T)) return T.value;
            if (Rt(T)) return tn(T);
            if (le(T)) return Nt(T, l, 2);
          })))
      : le(e)
      ? t
        ? (c = () => Nt(e, l, 2))
        : (c = () => {
            if (!(l && l.isUnmounted)) return d && d(), et(e, l, 3, [p]);
          })
      : (c = it),
    t && r)
  ) {
    const T = c;
    c = () => tn(T());
  }
  let d,
    p = (T) => {
      d = $.onStop = () => {
        Nt(T, l, 4);
      };
    },
    g;
  if (An)
    if (
      ((p = it),
      t ? n && et(t, l, 3, [c(), f ? [] : void 0, p]) : c(),
      s === "sync")
    ) {
      const T = ah();
      g = T.__watcherHandles || (T.__watcherHandles = []);
    } else return it;
  let y = f ? new Array(e.length).fill(jr) : jr;
  const P = () => {
    if (!!$.active)
      if (t) {
        const T = $.run();
        (r || u || (f ? T.some((k, R) => hr(k, y[R])) : hr(T, y))) &&
          (d && d(),
          et(t, l, 3, [T, y === jr ? void 0 : f && y[0] === jr ? [] : y, p]),
          (y = T));
      } else $.run();
  };
  P.allowRecurse = !!t;
  let v;
  s === "sync"
    ? (v = P)
    : s === "post"
    ? (v = () => He(P, l && l.suspense))
    : ((P.pre = !0), l && (P.id = l.uid), (v = () => Cs(P)));
  const $ = new ha(c, v);
  t
    ? n
      ? P()
      : (y = $.run())
    : s === "post"
    ? He($.run.bind($), l && l.suspense)
    : $.run();
  const I = () => {
    $.stop(), l && l.scope && ca(l.scope.effects, $);
  };
  return g && g.push(I), I;
}
function vp(e, t, n) {
  const r = this.proxy,
    s = Ae(e) ? (e.includes(".") ? Jc(r, e) : () => r[e]) : e.bind(r, r);
  let o;
  le(t) ? (o = t) : ((o = t.handler), (n = t));
  const a = Oe;
  Tn(this);
  const i = Is(s, o.bind(r), n);
  return a ? Tn(a) : rn(), i;
}
function Jc(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
function tn(e, t) {
  if (!we(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), _e(e))) tn(e.value, t);
  else if (ee(e)) for (let n = 0; n < e.length; n++) tn(e[n], t);
  else if (yc(e) || $n(e))
    e.forEach((n) => {
      tn(n, t);
    });
  else if (wc(e)) for (const n in e) tn(e[n], t);
  return e;
}
function gn(e, t) {
  const n = Re;
  if (n === null) return e;
  const r = Vs(n) || n.proxy,
    s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, i, l, c = $e] = t[o];
    a &&
      (le(a) && (a = { mounted: a, updated: a }),
      a.deep && tn(i),
      s.push({
        dir: a,
        instance: r,
        value: i,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }));
  }
  return e;
}
function ht(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let a = 0; a < s.length; a++) {
    const i = s[a];
    o && (i.oldValue = o[a].value);
    let l = i.dir[r];
    l && (Nn(), et(l, n, 8, [e.el, i, e, t]), Vn());
  }
}
function _p() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    qe(() => {
      e.isMounted = !0;
    }),
    ga(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Qe = [Function, Array],
  Xc = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Qe,
    onEnter: Qe,
    onAfterEnter: Qe,
    onEnterCancelled: Qe,
    onBeforeLeave: Qe,
    onLeave: Qe,
    onAfterLeave: Qe,
    onLeaveCancelled: Qe,
    onBeforeAppear: Qe,
    onAppear: Qe,
    onAfterAppear: Qe,
    onAppearCancelled: Qe,
  },
  mp = {
    name: "BaseTransition",
    props: Xc,
    setup(e, { slots: t }) {
      const n = gu(),
        r = _p();
      let s;
      return () => {
        const o = t.default && Zc(t.default(), !0);
        if (!o || !o.length) return;
        let a = o[0];
        if (o.length > 1) {
          for (const y of o)
            if (y.type !== Ye) {
              a = y;
              break;
            }
        }
        const i = fe(e),
          { mode: l } = i;
        if (r.isLeaving) return no(a);
        const c = vi(a);
        if (!c) return no(a);
        const u = Mo(c, i, r, n);
        Fo(c, u);
        const f = n.subTree,
          d = f && vi(f);
        let p = !1;
        const { getTransitionKey: g } = c.type;
        if (g) {
          const y = g();
          s === void 0 ? (s = y) : y !== s && ((s = y), (p = !0));
        }
        if (d && d.type !== Ye && (!Jt(c, d) || p)) {
          const y = Mo(d, i, r, n);
          if ((Fo(d, y), l === "out-in"))
            return (
              (r.isLeaving = !0),
              (y.afterLeave = () => {
                (r.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              no(a)
            );
          l === "in-out" &&
            c.type !== Ye &&
            (y.delayLeave = (P, v, $) => {
              const I = Qc(r, d);
              (I[String(d.key)] = d),
                (P._leaveCb = () => {
                  v(), (P._leaveCb = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = $);
            });
        }
        return a;
      };
    },
  },
  gp = mp;
function Qc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function Mo(e, t, n, r) {
  const {
      appear: s,
      mode: o,
      persisted: a = !1,
      onBeforeEnter: i,
      onEnter: l,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: f,
      onLeave: d,
      onAfterLeave: p,
      onLeaveCancelled: g,
      onBeforeAppear: y,
      onAppear: P,
      onAfterAppear: v,
      onAppearCancelled: $,
    } = t,
    I = String(e.key),
    T = Qc(n, e),
    k = (E, N) => {
      E && et(E, r, 9, N);
    },
    R = (E, N) => {
      const B = N[1];
      k(E, N),
        ee(E) ? E.every((K) => K.length <= 1) && B() : E.length <= 1 && B();
    },
    z = {
      mode: o,
      persisted: a,
      beforeEnter(E) {
        let N = i;
        if (!n.isMounted)
          if (s) N = y || i;
          else return;
        E._leaveCb && E._leaveCb(!0);
        const B = T[I];
        B && Jt(e, B) && B.el._leaveCb && B.el._leaveCb(), k(N, [E]);
      },
      enter(E) {
        let N = l,
          B = c,
          K = u;
        if (!n.isMounted)
          if (s) (N = P || l), (B = v || c), (K = $ || u);
          else return;
        let V = !1;
        const Q = (E._enterCb = (W) => {
          V ||
            ((V = !0),
            W ? k(K, [E]) : k(B, [E]),
            z.delayedLeave && z.delayedLeave(),
            (E._enterCb = void 0));
        });
        N ? R(N, [E, Q]) : Q();
      },
      leave(E, N) {
        const B = String(e.key);
        if ((E._enterCb && E._enterCb(!0), n.isUnmounting)) return N();
        k(f, [E]);
        let K = !1;
        const V = (E._leaveCb = (Q) => {
          K ||
            ((K = !0),
            N(),
            Q ? k(g, [E]) : k(p, [E]),
            (E._leaveCb = void 0),
            T[B] === e && delete T[B]);
        });
        (T[B] = e), d ? R(d, [E, V]) : V();
      },
      clone(E) {
        return Mo(E, t, n, r);
      },
    };
  return z;
}
function no(e) {
  if (Pr(e)) return (e = Dt(e)), (e.children = null), e;
}
function vi(e) {
  return Pr(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Fo(e, t) {
  e.shapeFlag & 6 && e.component
    ? Fo(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Zc(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let o = 0; o < e.length; o++) {
    let a = e[o];
    const i = n == null ? a.key : String(n) + String(a.key != null ? a.key : o);
    a.type === oe
      ? (a.patchFlag & 128 && s++, (r = r.concat(Zc(a.children, t, i))))
      : (t || a.type !== Ye) && r.push(i != null ? Dt(a, { key: i }) : a);
  }
  if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
  return r;
}
function q(e, t) {
  return le(e) ? (() => Te({ name: e.name }, t, { setup: e }))() : e;
}
const Sn = (e) => !!e.type.__asyncLoader;
function eu(e) {
  le(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: s = 200,
    timeout: o,
    suspensible: a = !0,
    onError: i,
  } = e;
  let l = null,
    c,
    u = 0;
  const f = () => (u++, (l = null), d()),
    d = () => {
      let p;
      return (
        l ||
        (p = l =
          t()
            .catch((g) => {
              if (((g = g instanceof Error ? g : new Error(String(g))), i))
                return new Promise((y, P) => {
                  i(
                    g,
                    () => y(f()),
                    () => P(g),
                    u + 1
                  );
                });
              throw g;
            })
            .then((g) =>
              p !== l && l
                ? l
                : (g &&
                    (g.__esModule || g[Symbol.toStringTag] === "Module") &&
                    (g = g.default),
                  (c = g),
                  g)
            ))
      );
    };
  return q({
    name: "AsyncComponentWrapper",
    __asyncLoader: d,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const p = Oe;
      if (c) return () => ro(c, p);
      const g = ($) => {
        (l = null), xr($, p, 13, !r);
      };
      if ((a && p.suspense) || An)
        return d()
          .then(($) => () => ro($, p))
          .catch(($) => (g($), () => (r ? M(r, { error: $ }) : null)));
      const y = C(!1),
        P = C(),
        v = C(!!s);
      return (
        s &&
          setTimeout(() => {
            v.value = !1;
          }, s),
        o != null &&
          setTimeout(() => {
            if (!y.value && !P.value) {
              const $ = new Error(`Async component timed out after ${o}ms.`);
              g($), (P.value = $);
            }
          }, o),
        d()
          .then(() => {
            (y.value = !0),
              p.parent && Pr(p.parent.vnode) && Cs(p.parent.update);
          })
          .catch(($) => {
            g($), (P.value = $);
          }),
        () => {
          if (y.value && c) return ro(c, p);
          if (P.value && r) return M(r, { error: P.value });
          if (n && !v.value) return M(n);
        }
      );
    },
  });
}
function ro(e, t) {
  const { ref: n, props: r, children: s, ce: o } = t.vnode,
    a = M(e, r, s);
  return (a.ref = n), (a.ce = o), delete t.vnode.ce, a;
}
const Pr = (e) => e.type.__isKeepAlive;
function yp(e, t) {
  tu(e, "a", t);
}
function bp(e, t) {
  tu(e, "da", t);
}
function tu(e, t, n = Oe) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((Ms(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      Pr(s.parent.vnode) && $p(r, t, n, s), (s = s.parent);
  }
}
function $p(e, t, n, r) {
  const s = Ms(t, e, r, !0);
  Je(() => {
    ca(r[t], s);
  }, n);
}
function Ms(e, t, n = Oe, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...a) => {
          if (n.isUnmounted) return;
          Nn(), Tn(n);
          const i = et(t, n, e, a);
          return rn(), Vn(), i;
        });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const Pt =
    (e) =>
    (t, n = Oe) =>
      (!An || e === "sp") && Ms(e, (...r) => t(...r), n),
  nu = Pt("bm"),
  qe = Pt("m"),
  wp = Pt("bu"),
  ru = Pt("u"),
  ga = Pt("bum"),
  Je = Pt("um"),
  Sp = Pt("sp"),
  xp = Pt("rtg"),
  Pp = Pt("rtc");
function Ep(e, t = Oe) {
  Ms("ec", e, t);
}
const ya = "components";
function Er(e, t) {
  return ou(ya, e, !0, t) || e;
}
const su = Symbol.for("v-ndc");
function Fs(e) {
  return Ae(e) ? ou(ya, e, !1) || e : e || su;
}
function ou(e, t, n = !0, r = !1) {
  const s = Re || Oe;
  if (s) {
    const o = s.type;
    if (e === ya) {
      const i = rh(o, !1);
      if (i && (i === t || i === mt(t) || i === xs(mt(t)))) return o;
    }
    const a = _i(s[e] || o[e], t) || _i(s.appContext[e], t);
    return !a && r ? o : a;
  }
}
function _i(e, t) {
  return e && (e[t] || e[mt(t)] || e[xs(mt(t))]);
}
function Ie(e, t, n, r) {
  let s;
  const o = n && n[r];
  if (ee(e) || Ae(e)) {
    s = new Array(e.length);
    for (let a = 0, i = e.length; a < i; a++)
      s[a] = t(e[a], a, void 0, o && o[a]);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, o && o[a]);
  } else if (we(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (a, i) => t(a, i, void 0, o && o[i]));
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let i = 0, l = a.length; i < l; i++) {
        const c = a[i];
        s[i] = t(e[c], c, i, o && o[i]);
      }
    }
  else s = [];
  return n && (n[r] = s), s;
}
function Z(e, t, n = {}, r, s) {
  if (Re.isCE || (Re.parent && Sn(Re.parent) && Re.parent.isCE))
    return t !== "default" && (n.name = t), M("slot", n, r && r());
  let o = e[t];
  o && o._c && (o._d = !1), _();
  const a = o && au(o(n)),
    i = ie(
      oe,
      { key: n.key || (a && a.key) || `_${t}` },
      a || (r ? r() : []),
      a && e._ === 1 ? 64 : -2
    );
  return (
    !s && i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    i
  );
}
function au(e) {
  return e.some((t) =>
    us(t) ? !(t.type === Ye || (t.type === oe && !au(t.children))) : !0
  )
    ? e
    : null;
}
const Ro = (e) => (e ? (yu(e) ? Vs(e) || e.proxy : Ro(e.parent)) : null),
  tr = Te(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ro(e.parent),
    $root: (e) => Ro(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ba(e),
    $forceUpdate: (e) => e.f || (e.f = () => Cs(e.update)),
    $nextTick: (e) => e.n || (e.n = an.bind(e.proxy)),
    $watch: (e) => vp.bind(e),
  }),
  so = (e, t) => e !== $e && !e.__isScriptSetup && de(e, t),
  kp = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: o,
        accessCache: a,
        type: i,
        appContext: l,
      } = e;
      let c;
      if (t[0] !== "$") {
        const p = a[t];
        if (p !== void 0)
          switch (p) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (so(r, t)) return (a[t] = 1), r[t];
          if (s !== $e && de(s, t)) return (a[t] = 2), s[t];
          if ((c = e.propsOptions[0]) && de(c, t)) return (a[t] = 3), o[t];
          if (n !== $e && de(n, t)) return (a[t] = 4), n[t];
          No && (a[t] = 0);
        }
      }
      const u = tr[t];
      let f, d;
      if (u) return t === "$attrs" && ze(e, "get", t), u(e);
      if ((f = i.__cssModules) && (f = f[t])) return f;
      if (n !== $e && de(n, t)) return (a[t] = 4), n[t];
      if (((d = l.config.globalProperties), de(d, t))) return d[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return so(s, t)
        ? ((s[t] = n), !0)
        : r !== $e && de(r, t)
        ? ((r[t] = n), !0)
        : de(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: o,
        },
      },
      a
    ) {
      let i;
      return (
        !!n[a] ||
        (e !== $e && de(e, a)) ||
        so(t, a) ||
        ((i = o[0]) && de(i, a)) ||
        de(r, a) ||
        de(tr, a) ||
        de(s.config.globalProperties, a)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : de(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function mi(e) {
  return ee(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let No = !0;
function Tp(e) {
  const t = ba(e),
    n = e.proxy,
    r = e.ctx;
  (No = !1), t.beforeCreate && gi(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: o,
    methods: a,
    watch: i,
    provide: l,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: d,
    beforeUpdate: p,
    updated: g,
    activated: y,
    deactivated: P,
    beforeDestroy: v,
    beforeUnmount: $,
    destroyed: I,
    unmounted: T,
    render: k,
    renderTracked: R,
    renderTriggered: z,
    errorCaptured: E,
    serverPrefetch: N,
    expose: B,
    inheritAttrs: K,
    components: V,
    directives: Q,
    filters: W,
  } = t;
  if ((c && Ap(c, r, null), a))
    for (const ke in a) {
      const me = a[ke];
      le(me) && (r[ke] = me.bind(n));
    }
  if (s) {
    const ke = s.call(n, n);
    we(ke) && (e.data = gt(ke));
  }
  if (((No = !0), o))
    for (const ke in o) {
      const me = o[ke],
        Ut = le(me) ? me.bind(n, n) : le(me.get) ? me.get.bind(n, n) : it,
        Mr = !le(me) && le(me.set) ? me.set.bind(n) : it,
        zt = re({ get: Ut, set: Mr });
      Object.defineProperty(r, ke, {
        enumerable: !0,
        configurable: !0,
        get: () => zt.value,
        set: (ft) => (zt.value = ft),
      });
    }
  if (i) for (const ke in i) iu(i[ke], r, n, ke);
  if (l) {
    const ke = le(l) ? l.call(n) : l;
    Reflect.ownKeys(ke).forEach((me) => {
      Rs(me, ke[me]);
    });
  }
  u && gi(u, e, "c");
  function te(ke, me) {
    ee(me) ? me.forEach((Ut) => ke(Ut.bind(n))) : me && ke(me.bind(n));
  }
  if (
    (te(nu, f),
    te(qe, d),
    te(wp, p),
    te(ru, g),
    te(yp, y),
    te(bp, P),
    te(Ep, E),
    te(Pp, R),
    te(xp, z),
    te(ga, $),
    te(Je, T),
    te(Sp, N),
    ee(B))
  )
    if (B.length) {
      const ke = e.exposed || (e.exposed = {});
      B.forEach((me) => {
        Object.defineProperty(ke, me, {
          get: () => n[me],
          set: (Ut) => (n[me] = Ut),
        });
      });
    } else e.exposed || (e.exposed = {});
  k && e.render === it && (e.render = k),
    K != null && (e.inheritAttrs = K),
    V && (e.components = V),
    Q && (e.directives = Q);
}
function Ap(e, t, n = it) {
  ee(e) && (e = Vo(e));
  for (const r in e) {
    const s = e[r];
    let o;
    we(s)
      ? "default" in s
        ? (o = lt(s.from || r, s.default, !0))
        : (o = lt(s.from || r))
      : (o = lt(s)),
      _e(o)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (a) => (o.value = a),
          })
        : (t[r] = o);
  }
}
function gi(e, t, n) {
  et(ee(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function iu(e, t, n, r) {
  const s = r.includes(".") ? Jc(n, r) : () => n[r];
  if (Ae(e)) {
    const o = t[e];
    le(o) && Pe(s, o);
  } else if (le(e)) Pe(s, e.bind(n));
  else if (we(e))
    if (ee(e)) e.forEach((o) => iu(o, t, n, r));
    else {
      const o = le(e.handler) ? e.handler.bind(n) : t[e.handler];
      le(o) && Pe(s, o, e);
    }
}
function ba(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: a },
    } = e.appContext,
    i = o.get(t);
  let l;
  return (
    i
      ? (l = i)
      : !s.length && !n && !r
      ? (l = t)
      : ((l = {}), s.length && s.forEach((c) => ls(l, c, a, !0)), ls(l, t, a)),
    we(t) && o.set(t, l),
    l
  );
}
function ls(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && ls(e, o, n, !0), s && s.forEach((a) => ls(e, a, n, !0));
  for (const a in t)
    if (!(r && a === "expose")) {
      const i = Cp[a] || (n && n[a]);
      e[a] = i ? i(e[a], t[a]) : t[a];
    }
  return e;
}
const Cp = {
  data: yi,
  props: bi,
  emits: bi,
  methods: Zn,
  computed: Zn,
  beforeCreate: Be,
  created: Be,
  beforeMount: Be,
  mounted: Be,
  beforeUpdate: Be,
  updated: Be,
  beforeDestroy: Be,
  beforeUnmount: Be,
  destroyed: Be,
  unmounted: Be,
  activated: Be,
  deactivated: Be,
  errorCaptured: Be,
  serverPrefetch: Be,
  components: Zn,
  directives: Zn,
  watch: Lp,
  provide: yi,
  inject: Op,
};
function yi(e, t) {
  return t
    ? e
      ? function () {
          return Te(
            le(e) ? e.call(this, this) : e,
            le(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Op(e, t) {
  return Zn(Vo(e), Vo(t));
}
function Vo(e) {
  if (ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Be(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Zn(e, t) {
  return e ? Te(Object.create(null), e, t) : t;
}
function bi(e, t) {
  return e
    ? ee(e) && ee(t)
      ? [...new Set([...e, ...t])]
      : Te(Object.create(null), mi(e), mi(t != null ? t : {}))
    : t;
}
function Lp(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Te(Object.create(null), e);
  for (const r in t) n[r] = Be(e[r], t[r]);
  return n;
}
function lu() {
  return {
    app: null,
    config: {
      isNativeTag: id,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Ip = 0;
function Mp(e, t) {
  return function (r, s = null) {
    le(r) || (r = Te({}, r)), s != null && !we(s) && (s = null);
    const o = lu(),
      a = new Set();
    let i = !1;
    const l = (o.app = {
      _uid: Ip++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: ih,
      get config() {
        return o.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          a.has(c) ||
            (c && le(c.install)
              ? (a.add(c), c.install(l, ...u))
              : le(c) && (a.add(c), c(l, ...u))),
          l
        );
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), l;
      },
      component(c, u) {
        return u ? ((o.components[c] = u), l) : o.components[c];
      },
      directive(c, u) {
        return u ? ((o.directives[c] = u), l) : o.directives[c];
      },
      mount(c, u, f) {
        if (!i) {
          const d = M(r, s);
          return (
            (d.appContext = o),
            u && t ? t(d, c) : e(d, c, f),
            (i = !0),
            (l._container = c),
            (c.__vue_app__ = l),
            Vs(d.component) || d.component.proxy
          );
        }
      },
      unmount() {
        i && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return (o.provides[c] = u), l;
      },
      runWithContext(c) {
        gr = l;
        try {
          return c();
        } finally {
          gr = null;
        }
      },
    });
    return l;
  };
}
let gr = null;
function Rs(e, t) {
  if (Oe) {
    let n = Oe.provides;
    const r = Oe.parent && Oe.parent.provides;
    r === n && (n = Oe.provides = Object.create(r)), (n[e] = t);
  }
}
function lt(e, t, n = !1) {
  const r = Oe || Re;
  if (r || gr) {
    const s = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : gr._context.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && le(t) ? t.call(r && r.proxy) : t;
  }
}
function Fp() {
  return !!(Oe || Re || gr);
}
function Rp(e, t, n, r = !1) {
  const s = {},
    o = {};
  rs(o, Ns, 1), (e.propsDefaults = Object.create(null)), cu(e, t, s, o);
  for (const a in e.propsOptions[0]) a in s || (s[a] = void 0);
  n ? (e.props = r ? s : Yd(s)) : e.type.props ? (e.props = s) : (e.props = o),
    (e.attrs = o);
}
function Np(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: a },
    } = e,
    i = fe(s),
    [l] = e.propsOptions;
  let c = !1;
  if ((r || a > 0) && !(a & 16)) {
    if (a & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let d = u[f];
        if (Os(e.emitsOptions, d)) continue;
        const p = t[d];
        if (l)
          if (de(o, d)) p !== o[d] && ((o[d] = p), (c = !0));
          else {
            const g = mt(d);
            s[g] = Do(l, i, g, p, e, !1);
          }
        else p !== o[d] && ((o[d] = p), (c = !0));
      }
    }
  } else {
    cu(e, t, s, o) && (c = !0);
    let u;
    for (const f in i)
      (!t || (!de(t, f) && ((u = Fn(f)) === f || !de(t, u)))) &&
        (l
          ? n &&
            (n[f] !== void 0 || n[u] !== void 0) &&
            (s[f] = Do(l, i, f, void 0, e, !0))
          : delete s[f]);
    if (o !== i)
      for (const f in o) (!t || (!de(t, f) && !0)) && (delete o[f], (c = !0));
  }
  c && xt(e, "set", "$attrs");
}
function cu(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let a = !1,
    i;
  if (t)
    for (let l in t) {
      if (er(l)) continue;
      const c = t[l];
      let u;
      s && de(s, (u = mt(l)))
        ? !o || !o.includes(u)
          ? (n[u] = c)
          : ((i || (i = {}))[u] = c)
        : Os(e.emitsOptions, l) ||
          ((!(l in r) || c !== r[l]) && ((r[l] = c), (a = !0)));
    }
  if (o) {
    const l = fe(n),
      c = i || $e;
    for (let u = 0; u < o.length; u++) {
      const f = o[u];
      n[f] = Do(s, l, f, c[f], e, !de(c, f));
    }
  }
  return a;
}
function Do(e, t, n, r, s, o) {
  const a = e[n];
  if (a != null) {
    const i = de(a, "default");
    if (i && r === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && le(l)) {
        const { propsDefaults: c } = s;
        n in c ? (r = c[n]) : (Tn(s), (r = c[n] = l.call(null, t)), rn());
      } else r = l;
    }
    a[0] &&
      (o && !i ? (r = !1) : a[1] && (r === "" || r === Fn(n)) && (r = !0));
  }
  return r;
}
function uu(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    a = {},
    i = [];
  let l = !1;
  if (!le(e)) {
    const u = (f) => {
      l = !0;
      const [d, p] = uu(f, t, !0);
      Te(a, d), p && i.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l) return we(e) && r.set(e, bn), bn;
  if (ee(o))
    for (let u = 0; u < o.length; u++) {
      const f = mt(o[u]);
      $i(f) && (a[f] = $e);
    }
  else if (o)
    for (const u in o) {
      const f = mt(u);
      if ($i(f)) {
        const d = o[u],
          p = (a[f] = ee(d) || le(d) ? { type: d } : Te({}, d));
        if (p) {
          const g = xi(Boolean, p.type),
            y = xi(String, p.type);
          (p[0] = g > -1),
            (p[1] = y < 0 || g < y),
            (g > -1 || de(p, "default")) && i.push(f);
        }
      }
    }
  const c = [a, i];
  return we(e) && r.set(e, c), c;
}
function $i(e) {
  return e[0] !== "$";
}
function wi(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Si(e, t) {
  return wi(e) === wi(t);
}
function xi(e, t) {
  return ee(t) ? t.findIndex((n) => Si(n, e)) : le(t) && Si(t, e) ? 0 : -1;
}
const fu = (e) => e[0] === "_" || e === "$stable",
  $a = (e) => (ee(e) ? e.map(st) : [st(e)]),
  Vp = (e, t, n) => {
    if (t._n) return t;
    const r = ne((...s) => $a(t(...s)), n);
    return (r._c = !1), r;
  },
  du = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (fu(s)) continue;
      const o = e[s];
      if (le(o)) t[s] = Vp(s, o, r);
      else if (o != null) {
        const a = $a(o);
        t[s] = () => a;
      }
    }
  },
  pu = (e, t) => {
    const n = $a(t);
    e.slots.default = () => n;
  },
  Dp = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = fe(t)), rs(t, "_", n)) : du(t, (e.slots = {}));
    } else (e.slots = {}), t && pu(e, t);
    rs(e.slots, Ns, 1);
  },
  Bp = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = !0,
      a = $e;
    if (r.shapeFlag & 32) {
      const i = t._;
      i
        ? n && i === 1
          ? (o = !1)
          : (Te(s, t), !n && i === 1 && delete s._)
        : ((o = !t.$stable), du(t, s)),
        (a = t);
    } else t && (pu(e, t), (a = { default: 1 }));
    if (o) for (const i in s) !fu(i) && !(i in a) && delete s[i];
  };
function cs(e, t, n, r, s = !1) {
  if (ee(e)) {
    e.forEach((d, p) => cs(d, t && (ee(t) ? t[p] : t), n, r, s));
    return;
  }
  if (Sn(r) && !s) return;
  const o = r.shapeFlag & 4 ? Vs(r.component) || r.component.proxy : r.el,
    a = s ? null : o,
    { i, r: l } = e,
    c = t && t.r,
    u = i.refs === $e ? (i.refs = {}) : i.refs,
    f = i.setupState;
  if (
    (c != null &&
      c !== l &&
      (Ae(c)
        ? ((u[c] = null), de(f, c) && (f[c] = null))
        : _e(c) && (c.value = null)),
    le(l))
  )
    Nt(l, i, 12, [a, u]);
  else {
    const d = Ae(l),
      p = _e(l);
    if (d || p) {
      const g = () => {
        if (e.f) {
          const y = d ? (de(f, l) ? f[l] : u[l]) : l.value;
          s
            ? ee(y) && ca(y, o)
            : ee(y)
            ? y.includes(o) || y.push(o)
            : d
            ? ((u[l] = [o]), de(f, l) && (f[l] = u[l]))
            : ((l.value = [o]), e.k && (u[e.k] = l.value));
        } else
          d
            ? ((u[l] = a), de(f, l) && (f[l] = a))
            : p && ((l.value = a), e.k && (u[e.k] = a));
      };
      a ? ((g.id = -1), He(g, n)) : g();
    }
  }
}
let Tt = !1;
const Hr = (e) => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject",
  Ur = (e) => e.nodeType === 8;
function jp(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: r,
        createText: s,
        nextSibling: o,
        parentNode: a,
        remove: i,
        insert: l,
        createComment: c,
      },
    } = e,
    u = (v, $) => {
      if (!$.hasChildNodes()) {
        n(null, v, $), as(), ($._vnode = v);
        return;
      }
      (Tt = !1),
        f($.firstChild, v, null, null, null),
        as(),
        ($._vnode = v),
        Tt && console.error("Hydration completed but contains mismatches.");
    },
    f = (v, $, I, T, k, R = !1) => {
      const z = Ur(v) && v.data === "[",
        E = () => y(v, $, I, T, k, z),
        { type: N, ref: B, shapeFlag: K, patchFlag: V } = $;
      let Q = v.nodeType;
      ($.el = v), V === -2 && ((R = !1), ($.dynamicChildren = null));
      let W = null;
      switch (N) {
        case kn:
          Q !== 3
            ? $.children === ""
              ? (l(($.el = s("")), a(v), v), (W = v))
              : (W = E())
            : (v.data !== $.children && ((Tt = !0), (v.data = $.children)),
              (W = o(v)));
          break;
        case Ye:
          Q !== 8 || z ? (W = E()) : (W = o(v));
          break;
        case nr:
          if ((z && ((v = o(v)), (Q = v.nodeType)), Q === 1 || Q === 3)) {
            W = v;
            const xe = !$.children.length;
            for (let te = 0; te < $.staticCount; te++)
              xe && ($.children += W.nodeType === 1 ? W.outerHTML : W.data),
                te === $.staticCount - 1 && ($.anchor = W),
                (W = o(W));
            return z ? o(W) : W;
          } else E();
          break;
        case oe:
          z ? (W = g(v, $, I, T, k, R)) : (W = E());
          break;
        default:
          if (K & 1)
            Q !== 1 || $.type.toLowerCase() !== v.tagName.toLowerCase()
              ? (W = E())
              : (W = d(v, $, I, T, k, R));
          else if (K & 6) {
            $.slotScopeIds = k;
            const xe = a(v);
            if (
              (t($, xe, null, I, T, Hr(xe), R),
              (W = z ? P(v) : o(v)),
              W && Ur(W) && W.data === "teleport end" && (W = o(W)),
              Sn($))
            ) {
              let te;
              z
                ? ((te = M(oe)),
                  (te.anchor = W ? W.previousSibling : xe.lastChild))
                : (te = v.nodeType === 3 ? je("") : M("div")),
                (te.el = v),
                ($.component.subTree = te);
            }
          } else
            K & 64
              ? Q !== 8
                ? (W = E())
                : (W = $.type.hydrate(v, $, I, T, k, R, e, p))
              : K & 128 &&
                (W = $.type.hydrate(v, $, I, T, Hr(a(v)), k, R, e, f));
      }
      return B != null && cs(B, null, T, $), W;
    },
    d = (v, $, I, T, k, R) => {
      R = R || !!$.dynamicChildren;
      const { type: z, props: E, patchFlag: N, shapeFlag: B, dirs: K } = $,
        V = (z === "input" && K) || z === "option";
      if (V || N !== -1) {
        if ((K && ht($, null, I, "created"), E))
          if (V || !R || N & 48)
            for (const W in E)
              ((V && W.endsWith("value")) || (wr(W) && !er(W))) &&
                r(v, W, null, E[W], !1, void 0, I);
          else E.onClick && r(v, "onClick", null, E.onClick, !1, void 0, I);
        let Q;
        if (
          ((Q = E && E.onVnodeBeforeMount) && Ze(Q, I, $),
          K && ht($, null, I, "beforeMount"),
          ((Q = E && E.onVnodeMounted) || K) &&
            Yc(() => {
              Q && Ze(Q, I, $), K && ht($, null, I, "mounted");
            }, T),
          B & 16 && !(E && (E.innerHTML || E.textContent)))
        ) {
          let W = p(v.firstChild, $, v, I, T, k, R);
          for (; W; ) {
            Tt = !0;
            const xe = W;
            (W = W.nextSibling), i(xe);
          }
        } else
          B & 8 &&
            v.textContent !== $.children &&
            ((Tt = !0), (v.textContent = $.children));
      }
      return v.nextSibling;
    },
    p = (v, $, I, T, k, R, z) => {
      z = z || !!$.dynamicChildren;
      const E = $.children,
        N = E.length;
      for (let B = 0; B < N; B++) {
        const K = z ? E[B] : (E[B] = st(E[B]));
        if (v) v = f(v, K, T, k, R, z);
        else {
          if (K.type === kn && !K.children) continue;
          (Tt = !0), n(null, K, I, null, T, k, Hr(I), R);
        }
      }
      return v;
    },
    g = (v, $, I, T, k, R) => {
      const { slotScopeIds: z } = $;
      z && (k = k ? k.concat(z) : z);
      const E = a(v),
        N = p(o(v), $, E, I, T, k, R);
      return N && Ur(N) && N.data === "]"
        ? o(($.anchor = N))
        : ((Tt = !0), l(($.anchor = c("]")), E, N), N);
    },
    y = (v, $, I, T, k, R) => {
      if (((Tt = !0), ($.el = null), R)) {
        const N = P(v);
        for (;;) {
          const B = o(v);
          if (B && B !== N) i(B);
          else break;
        }
      }
      const z = o(v),
        E = a(v);
      return i(v), n(null, $, E, z, I, T, Hr(E), k), z;
    },
    P = (v) => {
      let $ = 0;
      for (; v; )
        if (
          ((v = o(v)), v && Ur(v) && (v.data === "[" && $++, v.data === "]"))
        ) {
          if ($ === 0) return o(v);
          $--;
        }
      return v;
    };
  return [u, f];
}
const He = Yc;
function Hp(e) {
  return hu(e);
}
function Up(e) {
  return hu(e, jp);
}
function hu(e, t) {
  const n = Ao();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: a,
      createText: i,
      createComment: l,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: d,
      setScopeId: p = it,
      insertStaticContent: g,
    } = e,
    y = (
      h,
      m,
      x,
      O = null,
      A = null,
      D = null,
      H = !1,
      F = null,
      j = !!m.dynamicChildren
    ) => {
      if (h === m) return;
      h && !Jt(h, m) && ((O = Fr(h)), ft(h, A, D, !0), (h = null)),
        m.patchFlag === -2 && ((j = !1), (m.dynamicChildren = null));
      const { type: L, ref: J, shapeFlag: G } = m;
      switch (L) {
        case kn:
          P(h, m, x, O);
          break;
        case Ye:
          v(h, m, x, O);
          break;
        case nr:
          h == null && $(m, x, O, H);
          break;
        case oe:
          V(h, m, x, O, A, D, H, F, j);
          break;
        default:
          G & 1
            ? k(h, m, x, O, A, D, H, F, j)
            : G & 6
            ? Q(h, m, x, O, A, D, H, F, j)
            : (G & 64 || G & 128) && L.process(h, m, x, O, A, D, H, F, j, fn);
      }
      J != null && A && cs(J, h && h.ref, D, m || h, !m);
    },
    P = (h, m, x, O) => {
      if (h == null) r((m.el = i(m.children)), x, O);
      else {
        const A = (m.el = h.el);
        m.children !== h.children && c(A, m.children);
      }
    },
    v = (h, m, x, O) => {
      h == null ? r((m.el = l(m.children || "")), x, O) : (m.el = h.el);
    },
    $ = (h, m, x, O) => {
      [h.el, h.anchor] = g(h.children, m, x, O, h.el, h.anchor);
    },
    I = ({ el: h, anchor: m }, x, O) => {
      let A;
      for (; h && h !== m; ) (A = d(h)), r(h, x, O), (h = A);
      r(m, x, O);
    },
    T = ({ el: h, anchor: m }) => {
      let x;
      for (; h && h !== m; ) (x = d(h)), s(h), (h = x);
      s(m);
    },
    k = (h, m, x, O, A, D, H, F, j) => {
      (H = H || m.type === "svg"),
        h == null ? R(m, x, O, A, D, H, F, j) : N(h, m, A, D, H, F, j);
    },
    R = (h, m, x, O, A, D, H, F) => {
      let j, L;
      const { type: J, props: G, shapeFlag: X, transition: se, dirs: ce } = h;
      if (
        ((j = h.el = a(h.type, D, G && G.is, G)),
        X & 8
          ? u(j, h.children)
          : X & 16 &&
            E(h.children, j, null, O, A, D && J !== "foreignObject", H, F),
        ce && ht(h, null, O, "created"),
        z(j, h, h.scopeId, H, O),
        G)
      ) {
        for (const ve in G)
          ve !== "value" &&
            !er(ve) &&
            o(j, ve, null, G[ve], D, h.children, O, A, bt);
        "value" in G && o(j, "value", null, G.value),
          (L = G.onVnodeBeforeMount) && Ze(L, O, h);
      }
      ce && ht(h, null, O, "beforeMount");
      const ge = (!A || (A && !A.pendingBranch)) && se && !se.persisted;
      ge && se.beforeEnter(j),
        r(j, m, x),
        ((L = G && G.onVnodeMounted) || ge || ce) &&
          He(() => {
            L && Ze(L, O, h),
              ge && se.enter(j),
              ce && ht(h, null, O, "mounted");
          }, A);
    },
    z = (h, m, x, O, A) => {
      if ((x && p(h, x), O)) for (let D = 0; D < O.length; D++) p(h, O[D]);
      if (A) {
        let D = A.subTree;
        if (m === D) {
          const H = A.vnode;
          z(h, H, H.scopeId, H.slotScopeIds, A.parent);
        }
      }
    },
    E = (h, m, x, O, A, D, H, F, j = 0) => {
      for (let L = j; L < h.length; L++) {
        const J = (h[L] = F ? Lt(h[L]) : st(h[L]));
        y(null, J, m, x, O, A, D, H, F);
      }
    },
    N = (h, m, x, O, A, D, H) => {
      const F = (m.el = h.el);
      let { patchFlag: j, dynamicChildren: L, dirs: J } = m;
      j |= h.patchFlag & 16;
      const G = h.props || $e,
        X = m.props || $e;
      let se;
      x && qt(x, !1),
        (se = X.onVnodeBeforeUpdate) && Ze(se, x, m, h),
        J && ht(m, h, x, "beforeUpdate"),
        x && qt(x, !0);
      const ce = A && m.type !== "foreignObject";
      if (
        (L
          ? B(h.dynamicChildren, L, F, x, O, ce, D)
          : H || me(h, m, F, null, x, O, ce, D, !1),
        j > 0)
      ) {
        if (j & 16) K(F, m, G, X, x, O, A);
        else if (
          (j & 2 && G.class !== X.class && o(F, "class", null, X.class, A),
          j & 4 && o(F, "style", G.style, X.style, A),
          j & 8)
        ) {
          const ge = m.dynamicProps;
          for (let ve = 0; ve < ge.length; ve++) {
            const Ce = ge[ve],
              rt = G[Ce],
              dn = X[Ce];
            (dn !== rt || Ce === "value") &&
              o(F, Ce, rt, dn, A, h.children, x, O, bt);
          }
        }
        j & 1 && h.children !== m.children && u(F, m.children);
      } else !H && L == null && K(F, m, G, X, x, O, A);
      ((se = X.onVnodeUpdated) || J) &&
        He(() => {
          se && Ze(se, x, m, h), J && ht(m, h, x, "updated");
        }, O);
    },
    B = (h, m, x, O, A, D, H) => {
      for (let F = 0; F < m.length; F++) {
        const j = h[F],
          L = m[F],
          J =
            j.el && (j.type === oe || !Jt(j, L) || j.shapeFlag & 70)
              ? f(j.el)
              : x;
        y(j, L, J, null, O, A, D, H, !0);
      }
    },
    K = (h, m, x, O, A, D, H) => {
      if (x !== O) {
        if (x !== $e)
          for (const F in x)
            !er(F) && !(F in O) && o(h, F, x[F], null, H, m.children, A, D, bt);
        for (const F in O) {
          if (er(F)) continue;
          const j = O[F],
            L = x[F];
          j !== L && F !== "value" && o(h, F, L, j, H, m.children, A, D, bt);
        }
        "value" in O && o(h, "value", x.value, O.value);
      }
    },
    V = (h, m, x, O, A, D, H, F, j) => {
      const L = (m.el = h ? h.el : i("")),
        J = (m.anchor = h ? h.anchor : i(""));
      let { patchFlag: G, dynamicChildren: X, slotScopeIds: se } = m;
      se && (F = F ? F.concat(se) : se),
        h == null
          ? (r(L, x, O), r(J, x, O), E(m.children, x, J, A, D, H, F, j))
          : G > 0 && G & 64 && X && h.dynamicChildren
          ? (B(h.dynamicChildren, X, x, A, D, H, F),
            (m.key != null || (A && m === A.subTree)) && vu(h, m, !0))
          : me(h, m, x, J, A, D, H, F, j);
    },
    Q = (h, m, x, O, A, D, H, F, j) => {
      (m.slotScopeIds = F),
        h == null
          ? m.shapeFlag & 512
            ? A.ctx.activate(m, x, O, H, j)
            : W(m, x, O, A, D, H, j)
          : xe(h, m, j);
    },
    W = (h, m, x, O, A, D, H) => {
      const F = (h.component = Qp(h, O, A));
      if ((Pr(h) && (F.ctx.renderer = fn), Zp(F), F.asyncDep)) {
        if ((A && A.registerDep(F, te), !h.el)) {
          const j = (F.subTree = M(Ye));
          v(null, j, m, x);
        }
        return;
      }
      te(F, h, m, x, A, D, H);
    },
    xe = (h, m, x) => {
      const O = (m.component = h.component);
      if (fp(h, m, x))
        if (O.asyncDep && !O.asyncResolved) {
          ke(O, m, x);
          return;
        } else (O.next = m), op(O.update), O.update();
      else (m.el = h.el), (O.vnode = m);
    },
    te = (h, m, x, O, A, D, H) => {
      const F = () => {
          if (h.isMounted) {
            let { next: J, bu: G, u: X, parent: se, vnode: ce } = h,
              ge = J,
              ve;
            qt(h, !1),
              J ? ((J.el = ce.el), ke(h, J, H)) : (J = ce),
              G && Xr(G),
              (ve = J.props && J.props.onVnodeBeforeUpdate) &&
                Ze(ve, se, J, ce),
              qt(h, !0);
            const Ce = to(h),
              rt = h.subTree;
            (h.subTree = Ce),
              y(rt, Ce, f(rt.el), Fr(rt), h, A, D),
              (J.el = Ce.el),
              ge === null && dp(h, Ce.el),
              X && He(X, A),
              (ve = J.props && J.props.onVnodeUpdated) &&
                He(() => Ze(ve, se, J, ce), A);
          } else {
            let J;
            const { el: G, props: X } = m,
              { bm: se, m: ce, parent: ge } = h,
              ve = Sn(m);
            if (
              (qt(h, !1),
              se && Xr(se),
              !ve && (J = X && X.onVnodeBeforeMount) && Ze(J, ge, m),
              qt(h, !0),
              G && Zs)
            ) {
              const Ce = () => {
                (h.subTree = to(h)), Zs(G, h.subTree, h, A, null);
              };
              ve
                ? m.type.__asyncLoader().then(() => !h.isUnmounted && Ce())
                : Ce();
            } else {
              const Ce = (h.subTree = to(h));
              y(null, Ce, x, O, h, A, D), (m.el = Ce.el);
            }
            if ((ce && He(ce, A), !ve && (J = X && X.onVnodeMounted))) {
              const Ce = m;
              He(() => Ze(J, ge, Ce), A);
            }
            (m.shapeFlag & 256 ||
              (ge && Sn(ge.vnode) && ge.vnode.shapeFlag & 256)) &&
              h.a &&
              He(h.a, A),
              (h.isMounted = !0),
              (m = x = O = null);
          }
        },
        j = (h.effect = new ha(F, () => Cs(L), h.scope)),
        L = (h.update = () => j.run());
      (L.id = h.uid), qt(h, !0), L();
    },
    ke = (h, m, x) => {
      m.component = h;
      const O = h.vnode.props;
      (h.vnode = m),
        (h.next = null),
        Np(h, m.props, O, x),
        Bp(h, m.children, x),
        Nn(),
        pi(),
        Vn();
    },
    me = (h, m, x, O, A, D, H, F, j = !1) => {
      const L = h && h.children,
        J = h ? h.shapeFlag : 0,
        G = m.children,
        { patchFlag: X, shapeFlag: se } = m;
      if (X > 0) {
        if (X & 128) {
          Mr(L, G, x, O, A, D, H, F, j);
          return;
        } else if (X & 256) {
          Ut(L, G, x, O, A, D, H, F, j);
          return;
        }
      }
      se & 8
        ? (J & 16 && bt(L, A, D), G !== L && u(x, G))
        : J & 16
        ? se & 16
          ? Mr(L, G, x, O, A, D, H, F, j)
          : bt(L, A, D, !0)
        : (J & 8 && u(x, ""), se & 16 && E(G, x, O, A, D, H, F, j));
    },
    Ut = (h, m, x, O, A, D, H, F, j) => {
      (h = h || bn), (m = m || bn);
      const L = h.length,
        J = m.length,
        G = Math.min(L, J);
      let X;
      for (X = 0; X < G; X++) {
        const se = (m[X] = j ? Lt(m[X]) : st(m[X]));
        y(h[X], se, x, null, A, D, H, F, j);
      }
      L > J ? bt(h, A, D, !0, !1, G) : E(m, x, O, A, D, H, F, j, G);
    },
    Mr = (h, m, x, O, A, D, H, F, j) => {
      let L = 0;
      const J = m.length;
      let G = h.length - 1,
        X = J - 1;
      for (; L <= G && L <= X; ) {
        const se = h[L],
          ce = (m[L] = j ? Lt(m[L]) : st(m[L]));
        if (Jt(se, ce)) y(se, ce, x, null, A, D, H, F, j);
        else break;
        L++;
      }
      for (; L <= G && L <= X; ) {
        const se = h[G],
          ce = (m[X] = j ? Lt(m[X]) : st(m[X]));
        if (Jt(se, ce)) y(se, ce, x, null, A, D, H, F, j);
        else break;
        G--, X--;
      }
      if (L > G) {
        if (L <= X) {
          const se = X + 1,
            ce = se < J ? m[se].el : O;
          for (; L <= X; )
            y(null, (m[L] = j ? Lt(m[L]) : st(m[L])), x, ce, A, D, H, F, j),
              L++;
        }
      } else if (L > X) for (; L <= G; ) ft(h[L], A, D, !0), L++;
      else {
        const se = L,
          ce = L,
          ge = new Map();
        for (L = ce; L <= X; L++) {
          const We = (m[L] = j ? Lt(m[L]) : st(m[L]));
          We.key != null && ge.set(We.key, L);
        }
        let ve,
          Ce = 0;
        const rt = X - ce + 1;
        let dn = !1,
          ti = 0;
        const Wn = new Array(rt);
        for (L = 0; L < rt; L++) Wn[L] = 0;
        for (L = se; L <= G; L++) {
          const We = h[L];
          if (Ce >= rt) {
            ft(We, A, D, !0);
            continue;
          }
          let dt;
          if (We.key != null) dt = ge.get(We.key);
          else
            for (ve = ce; ve <= X; ve++)
              if (Wn[ve - ce] === 0 && Jt(We, m[ve])) {
                dt = ve;
                break;
              }
          dt === void 0
            ? ft(We, A, D, !0)
            : ((Wn[dt - ce] = L + 1),
              dt >= ti ? (ti = dt) : (dn = !0),
              y(We, m[dt], x, null, A, D, H, F, j),
              Ce++);
        }
        const ni = dn ? zp(Wn) : bn;
        for (ve = ni.length - 1, L = rt - 1; L >= 0; L--) {
          const We = ce + L,
            dt = m[We],
            ri = We + 1 < J ? m[We + 1].el : O;
          Wn[L] === 0
            ? y(null, dt, x, ri, A, D, H, F, j)
            : dn && (ve < 0 || L !== ni[ve] ? zt(dt, x, ri, 2) : ve--);
        }
      }
    },
    zt = (h, m, x, O, A = null) => {
      const { el: D, type: H, transition: F, children: j, shapeFlag: L } = h;
      if (L & 6) {
        zt(h.component.subTree, m, x, O);
        return;
      }
      if (L & 128) {
        h.suspense.move(m, x, O);
        return;
      }
      if (L & 64) {
        H.move(h, m, x, fn);
        return;
      }
      if (H === oe) {
        r(D, m, x);
        for (let G = 0; G < j.length; G++) zt(j[G], m, x, O);
        r(h.anchor, m, x);
        return;
      }
      if (H === nr) {
        I(h, m, x);
        return;
      }
      if (O !== 2 && L & 1 && F)
        if (O === 0) F.beforeEnter(D), r(D, m, x), He(() => F.enter(D), A);
        else {
          const { leave: G, delayLeave: X, afterLeave: se } = F,
            ce = () => r(D, m, x),
            ge = () => {
              G(D, () => {
                ce(), se && se();
              });
            };
          X ? X(D, ce, ge) : ge();
        }
      else r(D, m, x);
    },
    ft = (h, m, x, O = !1, A = !1) => {
      const {
        type: D,
        props: H,
        ref: F,
        children: j,
        dynamicChildren: L,
        shapeFlag: J,
        patchFlag: G,
        dirs: X,
      } = h;
      if ((F != null && cs(F, null, x, h, !0), J & 256)) {
        m.ctx.deactivate(h);
        return;
      }
      const se = J & 1 && X,
        ce = !Sn(h);
      let ge;
      if ((ce && (ge = H && H.onVnodeBeforeUnmount) && Ze(ge, m, h), J & 6))
        nd(h.component, x, O);
      else {
        if (J & 128) {
          h.suspense.unmount(x, O);
          return;
        }
        se && ht(h, null, m, "beforeUnmount"),
          J & 64
            ? h.type.remove(h, m, x, A, fn, O)
            : L && (D !== oe || (G > 0 && G & 64))
            ? bt(L, m, x, !1, !0)
            : ((D === oe && G & 384) || (!A && J & 16)) && bt(j, m, x),
          O && Za(h);
      }
      ((ce && (ge = H && H.onVnodeUnmounted)) || se) &&
        He(() => {
          ge && Ze(ge, m, h), se && ht(h, null, m, "unmounted");
        }, x);
    },
    Za = (h) => {
      const { type: m, el: x, anchor: O, transition: A } = h;
      if (m === oe) {
        td(x, O);
        return;
      }
      if (m === nr) {
        T(h);
        return;
      }
      const D = () => {
        s(x), A && !A.persisted && A.afterLeave && A.afterLeave();
      };
      if (h.shapeFlag & 1 && A && !A.persisted) {
        const { leave: H, delayLeave: F } = A,
          j = () => H(x, D);
        F ? F(h.el, D, j) : j();
      } else D();
    },
    td = (h, m) => {
      let x;
      for (; h !== m; ) (x = d(h)), s(h), (h = x);
      s(m);
    },
    nd = (h, m, x) => {
      const { bum: O, scope: A, update: D, subTree: H, um: F } = h;
      O && Xr(O),
        A.stop(),
        D && ((D.active = !1), ft(H, h, m, x)),
        F && He(F, m),
        He(() => {
          h.isUnmounted = !0;
        }, m),
        m &&
          m.pendingBranch &&
          !m.isUnmounted &&
          h.asyncDep &&
          !h.asyncResolved &&
          h.suspenseId === m.pendingId &&
          (m.deps--, m.deps === 0 && m.resolve());
    },
    bt = (h, m, x, O = !1, A = !1, D = 0) => {
      for (let H = D; H < h.length; H++) ft(h[H], m, x, O, A);
    },
    Fr = (h) =>
      h.shapeFlag & 6
        ? Fr(h.component.subTree)
        : h.shapeFlag & 128
        ? h.suspense.next()
        : d(h.anchor || h.el),
    ei = (h, m, x) => {
      h == null
        ? m._vnode && ft(m._vnode, null, null, !0)
        : y(m._vnode || null, h, m, null, null, null, x),
        pi(),
        as(),
        (m._vnode = h);
    },
    fn = {
      p: y,
      um: ft,
      m: zt,
      r: Za,
      mt: W,
      mc: E,
      pc: me,
      pbc: B,
      n: Fr,
      o: e,
    };
  let Qs, Zs;
  return (
    t && ([Qs, Zs] = t(fn)), { render: ei, hydrate: Qs, createApp: Mp(ei, Qs) }
  );
}
function qt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function vu(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (ee(r) && ee(s))
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      let i = s[o];
      i.shapeFlag & 1 &&
        !i.dynamicChildren &&
        ((i.patchFlag <= 0 || i.patchFlag === 32) &&
          ((i = s[o] = Lt(s[o])), (i.el = a.el)),
        n || vu(a, i)),
        i.type === kn && (i.el = a.el);
    }
}
function zp(e) {
  const t = e.slice(),
    n = [0];
  let r, s, o, a, i;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      if (((s = n[n.length - 1]), e[s] < c)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (o = 0, a = n.length - 1; o < a; )
        (i = (o + a) >> 1), e[n[i]] < c ? (o = i + 1) : (a = i);
      c < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r));
    }
  }
  for (o = n.length, a = n[o - 1]; o-- > 0; ) (n[o] = a), (a = t[a]);
  return n;
}
const qp = (e) => e.__isTeleport,
  oe = Symbol.for("v-fgt"),
  kn = Symbol.for("v-txt"),
  Ye = Symbol.for("v-cmt"),
  nr = Symbol.for("v-stc"),
  rr = [];
let at = null;
function _(e = !1) {
  rr.push((at = e ? null : []));
}
function Wp() {
  rr.pop(), (at = rr[rr.length - 1] || null);
}
let yr = 1;
function Pi(e) {
  yr += e;
}
function _u(e) {
  return (
    (e.dynamicChildren = yr > 0 ? at || bn : null),
    Wp(),
    yr > 0 && at && at.push(e),
    e
  );
}
function S(e, t, n, r, s, o) {
  return _u(b(e, t, n, r, s, o, !0));
}
function ie(e, t, n, r, s) {
  return _u(M(e, t, n, r, s, !0));
}
function us(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Jt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ns = "__vInternal",
  mu = ({ key: e }) => (e != null ? e : null),
  Qr = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? Ae(e) || _e(e) || le(e)
        ? { i: Re, r: e, k: t, f: !!n }
        : e
      : null
  );
function b(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  o = e === oe ? 0 : 1,
  a = !1,
  i = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && mu(t),
    ref: t && Qr(t),
    scopeId: Ls,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Re,
  };
  return (
    i
      ? (wa(l, n), o & 128 && e.normalize(l))
      : n && (l.shapeFlag |= Ae(n) ? 8 : 16),
    yr > 0 &&
      !a &&
      at &&
      (l.patchFlag > 0 || o & 6) &&
      l.patchFlag !== 32 &&
      at.push(l),
    l
  );
}
const M = Gp;
function Gp(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === su) && (e = Ye), us(e))) {
    const i = Dt(e, t, !0);
    return (
      n && wa(i, n),
      yr > 0 &&
        !o &&
        at &&
        (i.shapeFlag & 6 ? (at[at.indexOf(e)] = i) : at.push(i)),
      (i.patchFlag |= -2),
      i
    );
  }
  if ((sh(e) && (e = e.__vccOpts), t)) {
    t = Kp(t);
    let { class: i, style: l } = t;
    i && !Ae(i) && (t.class = pe(i)),
      we(l) && (Bc(l) && !ee(l) && (l = Te({}, l)), (t.style = da(l)));
  }
  const a = Ae(e) ? 1 : pp(e) ? 128 : qp(e) ? 64 : we(e) ? 4 : le(e) ? 2 : 0;
  return b(e, t, n, r, s, a, o, !0);
}
function Kp(e) {
  return e ? (Bc(e) || Ns in e ? Te({}, e) : e) : null;
}
function Dt(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: o, children: a } = e,
    i = t ? sr(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: i,
    key: i && mu(i),
    ref:
      t && t.ref
        ? n && s
          ? ee(s)
            ? s.concat(Qr(t))
            : [s, Qr(t)]
          : Qr(t)
        : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== oe ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Dt(e.ssContent),
    ssFallback: e.ssFallback && Dt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function je(e = " ", t = 0) {
  return M(kn, null, e, t);
}
function Yp(e, t) {
  const n = M(nr, null, e);
  return (n.staticCount = t), n;
}
function Y(e = "", t = !1) {
  return t ? (_(), ie(Ye, null, e)) : M(Ye, null, e);
}
function st(e) {
  return e == null || typeof e == "boolean"
    ? M(Ye)
    : ee(e)
    ? M(oe, null, e.slice())
    : typeof e == "object"
    ? Lt(e)
    : M(kn, null, String(e));
}
function Lt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Dt(e);
}
function wa(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (ee(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), wa(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Ns in t)
        ? (t._ctx = Re)
        : s === 3 &&
          Re &&
          (Re.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    le(t)
      ? ((t = { default: t, _ctx: Re }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [je(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function sr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = pe([t.class, r.class]));
      else if (s === "style") t.style = da([t.style, r.style]);
      else if (wr(s)) {
        const o = t[s],
          a = r[s];
        a &&
          o !== a &&
          !(ee(o) && o.includes(a)) &&
          (t[s] = o ? [].concat(o, a) : a);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function Ze(e, t, n, r = null) {
  et(e, t, 7, [n, r]);
}
const Jp = lu();
let Xp = 0;
function Qp(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Jp,
    o = {
      uid: Xp++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Pc(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: uu(r, s),
      emitsOptions: Kc(r, s),
      emit: null,
      emitted: null,
      propsDefaults: $e,
      inheritAttrs: r.inheritAttrs,
      ctx: $e,
      data: $e,
      props: $e,
      attrs: $e,
      slots: $e,
      refs: $e,
      setupState: $e,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = lp.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let Oe = null;
const gu = () => Oe || Re;
let Sa,
  pn,
  Ei = "__VUE_INSTANCE_SETTERS__";
(pn = Ao()[Ei]) || (pn = Ao()[Ei] = []),
  pn.push((e) => (Oe = e)),
  (Sa = (e) => {
    pn.length > 1 ? pn.forEach((t) => t(e)) : pn[0](e);
  });
const Tn = (e) => {
    Sa(e), e.scope.on();
  },
  rn = () => {
    Oe && Oe.scope.off(), Sa(null);
  };
function yu(e) {
  return e.vnode.shapeFlag & 4;
}
let An = !1;
function Zp(e, t = !1) {
  An = t;
  const { props: n, children: r } = e.vnode,
    s = yu(e);
  Rp(e, n, s, t), Dp(e, r);
  const o = s ? eh(e, t) : void 0;
  return (An = !1), o;
}
function eh(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = St(new Proxy(e.ctx, kp)));
  const { setup: r } = n;
  if (r) {
    const s = (e.setupContext = r.length > 1 ? nh(e) : null);
    Tn(e), Nn();
    const o = Nt(r, e, 0, [e.props, s]);
    if ((Vn(), rn(), bc(o))) {
      if ((o.then(rn, rn), t))
        return o
          .then((a) => {
            ki(e, a, t);
          })
          .catch((a) => {
            xr(a, e, 0);
          });
      e.asyncDep = o;
    } else ki(e, o, t);
  } else bu(e, t);
}
function ki(e, t, n) {
  le(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : we(t) && (e.setupState = zc(t)),
    bu(e, n);
}
let Ti;
function bu(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Ti && !r.render) {
      const s = r.template || ba(e).template;
      if (s) {
        const { isCustomElement: o, compilerOptions: a } = e.appContext.config,
          { delimiters: i, compilerOptions: l } = r,
          c = Te(Te({ isCustomElement: o, delimiters: i }, a), l);
        r.render = Ti(s, c);
      }
    }
    e.render = r.render || it;
  }
  Tn(e), Nn(), Tp(e), Vn(), rn();
}
function th(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return ze(e, "get", "$attrs"), t[n];
      },
    }))
  );
}
function nh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return th(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Vs(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(zc(St(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in tr) return tr[n](e);
        },
        has(t, n) {
          return n in t || n in tr;
        },
      }))
    );
}
function rh(e, t = !0) {
  return le(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function sh(e) {
  return le(e) && "__vccOpts" in e;
}
const re = (e, t) => np(e, t, An);
function fs(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? we(t) && !ee(t)
      ? us(t)
        ? M(e, null, [t])
        : M(e, t)
      : M(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && us(n) && (n = [n]),
      M(e, t, n));
}
const oh = Symbol.for("v-scx"),
  ah = () => lt(oh),
  ih = "3.3.4",
  lh = "http://www.w3.org/2000/svg",
  Xt = typeof document != "undefined" ? document : null,
  Ai = Xt && Xt.createElement("template"),
  ch = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s = t
        ? Xt.createElementNS(lh, e)
        : Xt.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      );
    },
    createText: (e) => Xt.createTextNode(e),
    createComment: (e) => Xt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Xt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, s, o) {
      const a = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling));

        );
      else {
        Ai.innerHTML = r ? `<svg>${e}</svg>` : e;
        const i = Ai.content;
        if (r) {
          const l = i.firstChild;
          for (; l.firstChild; ) i.appendChild(l.firstChild);
          i.removeChild(l);
        }
        t.insertBefore(i, n);
      }
      return [
        a ? a.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function uh(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function fh(e, t, n) {
  const r = e.style,
    s = Ae(n);
  if (n && !s) {
    if (t && !Ae(t)) for (const o in t) n[o] == null && Bo(r, o, "");
    for (const o in n) Bo(r, o, n[o]);
  } else {
    const o = r.display;
    s ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (r.display = o);
  }
}
const Ci = /\s*!important$/;
function Bo(e, t, n) {
  if (ee(n)) n.forEach((r) => Bo(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = dh(e, t);
    Ci.test(n)
      ? e.setProperty(Fn(r), n.replace(Ci, ""), "important")
      : (e[r] = n);
  }
}
const Oi = ["Webkit", "Moz", "ms"],
  oo = {};
function dh(e, t) {
  const n = oo[t];
  if (n) return n;
  let r = mt(t);
  if (r !== "filter" && r in e) return (oo[t] = r);
  r = xs(r);
  for (let s = 0; s < Oi.length; s++) {
    const o = Oi[s] + r;
    if (o in e) return (oo[t] = o);
  }
  return t;
}
const Li = "http://www.w3.org/1999/xlink";
function ph(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Li, t.slice(6, t.length))
      : e.setAttributeNS(Li, t, n);
  else {
    const o = yd(t);
    n == null || (o && !Sc(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function hh(e, t, n, r, s, o, a) {
  if (t === "innerHTML" || t === "textContent") {
    r && a(r, s, o), (e[t] = n == null ? "" : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    e._value = n;
    const c = i === "OPTION" ? e.getAttribute("value") : e.value,
      u = n == null ? "" : n;
    c !== u && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean"
      ? (n = Sc(n))
      : n == null && c === "string"
      ? ((n = ""), (l = !0))
      : c === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
function _n(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function vh(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function _h(e, t, n, r, s = null) {
  const o = e._vei || (e._vei = {}),
    a = o[t];
  if (r && a) a.value = r;
  else {
    const [i, l] = mh(t);
    if (r) {
      const c = (o[t] = bh(r, s));
      _n(e, i, c, l);
    } else a && (vh(e, i, a, l), (o[t] = void 0));
  }
}
const Ii = /(?:Once|Passive|Capture)$/;
function mh(e) {
  let t;
  if (Ii.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(Ii)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Fn(e.slice(2)), t];
}
let ao = 0;
const gh = Promise.resolve(),
  yh = () => ao || (gh.then(() => (ao = 0)), (ao = Date.now()));
function bh(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    et($h(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = yh()), n;
}
function $h(e, t) {
  if (ee(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const Mi = /^on[a-z]/,
  wh = (e, t, n, r, s = !1, o, a, i, l) => {
    t === "class"
      ? uh(e, r, s)
      : t === "style"
      ? fh(e, n, r)
      : wr(t)
      ? la(t) || _h(e, t, n, r, a)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Sh(e, t, r, s)
        )
      ? hh(e, t, r, o, a, i, l)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        ph(e, t, r, s));
  };
function Sh(e, t, n, r) {
  return r
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && Mi.test(t) && le(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (Mi.test(t) && Ae(n))
    ? !1
    : t in e;
}
const At = "transition",
  Gn = "animation",
  Ds = (e, { slots: t }) => fs(gp, xh(e), t);
Ds.displayName = "Transition";
const $u = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
Ds.props = Te({}, Xc, $u);
const Wt = (e, t = []) => {
    ee(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Fi = (e) => (e ? (ee(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function xh(e) {
  const t = {};
  for (const V in e) V in $u || (t[V] = e[V]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: s,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: a = `${n}-enter-active`,
      enterToClass: i = `${n}-enter-to`,
      appearFromClass: l = o,
      appearActiveClass: c = a,
      appearToClass: u = i,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: d = `${n}-leave-active`,
      leaveToClass: p = `${n}-leave-to`,
    } = e,
    g = Ph(s),
    y = g && g[0],
    P = g && g[1],
    {
      onBeforeEnter: v,
      onEnter: $,
      onEnterCancelled: I,
      onLeave: T,
      onLeaveCancelled: k,
      onBeforeAppear: R = v,
      onAppear: z = $,
      onAppearCancelled: E = I,
    } = t,
    N = (V, Q, W) => {
      Gt(V, Q ? u : i), Gt(V, Q ? c : a), W && W();
    },
    B = (V, Q) => {
      (V._isLeaving = !1), Gt(V, f), Gt(V, p), Gt(V, d), Q && Q();
    },
    K = (V) => (Q, W) => {
      const xe = V ? z : $,
        te = () => N(Q, V, W);
      Wt(xe, [Q, te]),
        Ri(() => {
          Gt(Q, V ? l : o), Ct(Q, V ? u : i), Fi(xe) || Ni(Q, r, y, te);
        });
    };
  return Te(t, {
    onBeforeEnter(V) {
      Wt(v, [V]), Ct(V, o), Ct(V, a);
    },
    onBeforeAppear(V) {
      Wt(R, [V]), Ct(V, l), Ct(V, c);
    },
    onEnter: K(!1),
    onAppear: K(!0),
    onLeave(V, Q) {
      V._isLeaving = !0;
      const W = () => B(V, Q);
      Ct(V, f),
        Th(),
        Ct(V, d),
        Ri(() => {
          !V._isLeaving || (Gt(V, f), Ct(V, p), Fi(T) || Ni(V, r, P, W));
        }),
        Wt(T, [V, W]);
    },
    onEnterCancelled(V) {
      N(V, !1), Wt(I, [V]);
    },
    onAppearCancelled(V) {
      N(V, !0), Wt(E, [V]);
    },
    onLeaveCancelled(V) {
      B(V), Wt(k, [V]);
    },
  });
}
function Ph(e) {
  if (e == null) return null;
  if (we(e)) return [io(e.enter), io(e.leave)];
  {
    const t = io(e);
    return [t, t];
  }
}
function io(e) {
  return pd(e);
}
function Ct(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function Gt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Ri(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Eh = 0;
function Ni(e, t, n, r) {
  const s = (e._endId = ++Eh),
    o = () => {
      s === e._endId && r();
    };
  if (n) return setTimeout(o, n);
  const { type: a, timeout: i, propCount: l } = kh(e, t);
  if (!a) return r();
  const c = a + "end";
  let u = 0;
  const f = () => {
      e.removeEventListener(c, d), o();
    },
    d = (p) => {
      p.target === e && ++u >= l && f();
    };
  setTimeout(() => {
    u < l && f();
  }, i + 1),
    e.addEventListener(c, d);
}
function kh(e, t) {
  const n = window.getComputedStyle(e),
    r = (g) => (n[g] || "").split(", "),
    s = r(`${At}Delay`),
    o = r(`${At}Duration`),
    a = Vi(s, o),
    i = r(`${Gn}Delay`),
    l = r(`${Gn}Duration`),
    c = Vi(i, l);
  let u = null,
    f = 0,
    d = 0;
  t === At
    ? a > 0 && ((u = At), (f = a), (d = o.length))
    : t === Gn
    ? c > 0 && ((u = Gn), (f = c), (d = l.length))
    : ((f = Math.max(a, c)),
      (u = f > 0 ? (a > c ? At : Gn) : null),
      (d = u ? (u === At ? o.length : l.length) : 0));
  const p =
    u === At && /\b(transform|all)(,|$)/.test(r(`${At}Property`).toString());
  return { type: u, timeout: f, propCount: d, hasTransform: p };
}
function Vi(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => Di(n) + Di(e[r])));
}
function Di(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Th() {
  return document.body.offsetHeight;
}
const Bi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ee(t) ? (n) => Xr(t, n) : t;
};
function Ah(e) {
  e.target.composing = !0;
}
function ji(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const TC = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e._assign = Bi(s);
      const o = r || (s.props && s.props.type === "number");
      _n(e, t ? "change" : "input", (a) => {
        if (a.target.composing) return;
        let i = e.value;
        n && (i = i.trim()), o && (i = To(i)), e._assign(i);
      }),
        n &&
          _n(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (_n(e, "compositionstart", Ah),
          _n(e, "compositionend", ji),
          _n(e, "change", ji));
    },
    mounted(e, { value: t }) {
      e.value = t == null ? "" : t;
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: r, number: s } },
      o
    ) {
      if (
        ((e._assign = Bi(o)),
        e.composing ||
          (document.activeElement === e &&
            e.type !== "range" &&
            (n ||
              (r && e.value.trim() === t) ||
              ((s || e.type === "number") && To(e.value) === t))))
      )
        return;
      const a = t == null ? "" : t;
      e.value !== a && (e.value = a);
    },
  },
  Ch = ["ctrl", "shift", "alt", "meta"],
  Oh = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => Ch.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Lh =
    (e, t) =>
    (n, ...r) => {
      for (let s = 0; s < t.length; s++) {
        const o = Oh[t[s]];
        if (o && o(n, t)) return;
      }
      return e(n, ...r);
    },
  yn = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e._vod = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : Kn(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), Kn(e, !0), r.enter(e))
            : r.leave(e, () => {
                Kn(e, !1);
              })
          : Kn(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Kn(e, t);
    },
  };
function Kn(e, t) {
  e.style.display = t ? e._vod : "none";
}
const wu = Te({ patchProp: wh }, ch);
let or,
  Hi = !1;
function Ih() {
  return or || (or = Hp(wu));
}
function Mh() {
  return (or = Hi ? or : Up(wu)), (Hi = !0), or;
}
const Fh = (...e) => {
    const t = Ih().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const s = Su(r);
        if (!s) return;
        const o = t._component;
        !le(o) && !o.render && !o.template && (o.template = s.innerHTML),
          (s.innerHTML = "");
        const a = n(s, !1, s instanceof SVGElement);
        return (
          s instanceof Element &&
            (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
          a
        );
      }),
      t
    );
  },
  Rh = (...e) => {
    const t = Mh().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const s = Su(r);
        if (s) return n(s, !0, s instanceof SVGElement);
      }),
      t
    );
  };
function Su(e) {
  return Ae(e) ? document.querySelector(e) : e;
}
var Nh = JSON.parse(
  '{"lang":"en-US","title":"VitePress","description":"High-quality & Reliable \u{1F9F2} Vue3 Hooks library","base":"/docs/hooks/","head":[],"appearance":true,"themeConfig":{"logo":"/logo.svg","algolia":{"appId":"F75E9UQXRX","apiKey":"268129e44d6b58950b4626bf86e8bd1e","indexName":"vue-hooks-plus-search"},"localeLinks":{"text":"","items":[{"link":"/","text":"\u7B80\u4F53\u4E2D\u6587"},{"link":"/en/","text":"English"}]},"locales":{"/":{"nav":[{"text":"\u{1F973} Hooks","link":"/useRequest/"},{"text":"\u{1F93A} Playground","link":"https://inhiblabcore.github.io/vue-hooks-plus-playground/play"},{"text":"\u{1F380} Releases","link":"https://github.com/InhiblabCore/vue-hooks-plus/releases"}],"sidebar":[{"text":"\u4ECB\u7ECD","items":[{"text":"\u{1FAA7} \u5165\u624B\u6307\u5357","link":"/guide/"},{"text":"\u{1F4D0} UseRequest\u89C4\u8303","link":"/useRequest/guide/"},{"text":"\u{1FAF6} \u8FC1\u79FB\u5230 v2 \u7248\u672C","link":"/migrate/"}]},{"text":"useRequest","items":[{"text":"\u5FEB\u901F\u5F00\u59CB","link":"/useRequest/"},{"text":"\u57FA\u7840\u7528\u6CD5","link":"/useRequest/basic/"},{"text":"\u9632\u6296","link":"/useRequest/debounce/"},{"text":"\u8282\u6D41","link":"/useRequest/throttle/"},{"text":"\u8F6E\u8BE2","link":"/useRequest/polling/"},{"text":"Ready","link":"/useRequest/ready/"},{"text":"\u4F9D\u8D56\u5237\u65B0","link":"/useRequest/refreshDeps/"},{"text":"\u5E76\u884C\u8BF7\u6C42","link":"/useRequest/fetchs/"},{"text":"\u9519\u8BEF\u91CD\u8BD5","link":"/useRequest/retry/"},{"text":"\u683C\u5F0F\u5316\u6570\u636E","link":"/useRequest/formatResult/"},{"text":"\u7F13\u5B58 & SWR","link":"/useRequest/cache/"},{"text":"loadingDelay","link":"/useRequest/loadingDelay/"},{"text":"\u5C4F\u5E55\u805A\u7126\u91CD\u65B0\u8BF7\u6C42","link":"/useRequest/refreshOnWindowFocus/"},{"text":"\u6EDA\u52A8\u52A0\u8F7D & \u5206\u9875\u52A0\u8F7D","link":"/useRequest/scroll/"},{"text":"\u4E2D\u95F4\u4EF6","link":"/useRequest/middleware/"},{"text":"\u63D2\u4EF6\u8BBE\u8BA1","link":"/useRequest/plugin/"},{"text":"\u5168\u5C40\u914D\u7F6E","link":"/useRequest/global/"},{"text":"\u5F00\u53D1\u8005\u5DE5\u5177","link":"/useRequest/devtools/"}]},{"text":"useRequest \u5916\u7F6E\u63D2\u4EF6","items":[{"text":"\u5168\u5C40\u8BF7\u6C42\u72B6\u6001\u7BA1\u7406","link":"/useRequest/plugins/fetchsing/"},{"text":"\u540C\u6E90\u8DE8\u7A97\u53E3\u5E7F\u64AD","link":"/useRequest/plugins/broadcastChannel/"}]},{"text":"State","items":[{"text":"useBoolean","link":"/useBoolean/"},{"text":"useImmer","link":"/useImmer/"},{"text":"useUrlState","link":"/useUrlState/"},{"text":"useFormatResult","link":"/useFormatResult/"},{"text":"useDebounce","link":"/useDebounce/"},{"text":"useThrottle","link":"/useThrottle/"},{"text":"useToggle","link":"/useToggle/"},{"text":"useCookieState","link":"/useCookieState/"},{"text":"useLocalStorageState","link":"/useLocalStorageState/"},{"text":"useSessionStorageState","link":"/useSessionStorageState/"},{"text":"useMap","link":"/useMap/"},{"text":"useSet","link":"/useSet/"},{"text":"usePrevious","link":"/usePrevious/"},{"text":"useSetState","link":"/useSetState/"}]},{"text":"Effect","items":[{"text":"useDebounceFn","link":"/useDebounceFn/"},{"text":"useThrottleFn","link":"/useThrottleFn/"},{"text":"useFetchs","link":"/useFetchs/"},{"text":"useLockFn","link":"/useLockFn/"},{"text":"useUpdate","link":"/useUpdate/"},{"text":"useInterval","link":"/useInterval/"},{"text":"useTimeout","link":"/useTimeout/"},{"text":"useWorker","link":"/useWorker/"}]},{"text":"Scene","items":[{"text":"useCounter","link":"/useCounter/"},{"text":"useInfiniteScroll","link":"/useInfiniteScroll/"},{"text":"useNetwork","link":"/useNetwork/"},{"text":"useVirtualList","link":"/useVirtualList/"},{"text":"useWebSocket","link":"/useWebSocket/"}]},{"text":"Dom","items":[{"text":"useEventListener","link":"/useEventListener/"},{"text":"useExternal","link":"/useExternal/"},{"text":"useDrop & useDrag","link":"/useDrop/"},{"text":"useDarkMode","link":"/useDarkMode/"},{"text":"useFavicon","link":"/useFavicon/"},{"text":"useFocusWithin","link":"/useFocusWithin/"},{"text":"useFullscreen","link":"/useFull/"},{"text":"useHover","link":"/useHover/"},{"text":"useInViewport","link":"/useInViewport/"},{"text":"useKeyPress","link":"/useKeyPress/"},{"text":"useMedia","link":"/useMedia/"},{"text":"useMutationObserver","link":"/useMutationObserver/"},{"text":"useMouse","link":"/useMouse/"},{"text":"useSize","link":"/useSize/"},{"text":"useElementBounding","link":"/useElementBounding/"},{"text":"useResizeObserver","link":"/useResizeObserver/"},{"text":"useScroll","link":"/useScroll/"},{"text":"useTitle","link":"/useTitle/"},{"text":"useWinResize","link":"/useWinResize/"},{"text":"useLongPress","link":"/useLongPress/"}]},{"text":"Advanced","items":[{"text":"useEventEmitter","link":"/useEventEmitter/"},{"text":"useAsyncOrder","link":"/useAsyncOrder/"},{"text":"usePreview \u26A0\uFE0F","link":"/usePreview/"}]},{"text":"Dev","items":[{"text":"useTrackedEffect","link":"/useTrackedEffect/"},{"text":"useWhyDidYouUpdate","link":"/useWhyDidYouUpdate/"}]}]},"/en/":{"nav":[{"text":"\u{1F973} Hooks","link":"/en/useRequest/"},{"text":"\u{1F93A} Playground","link":"https://inhiblabcore.github.io/vue-hooks-plus-playground/play"},{"text":"\u{1F380} Releases","link":"https://github.com/InhiblabCore/vue-hooks-plus/releases/"}],"sidebar":[{"text":"Getting started","items":[{"text":"\u{1FAA7} Guide","link":"/en/guide/"},{"text":"\u{1F4D0} UseRequest specification","link":"/en/useRequest/guide/"},{"text":"\u{1FAF6} Migrate to v2 version","link":"/en/migrate/"}]},{"text":"useRequest","items":[{"text":"Quick Start","link":"/en/useRequest/"},{"text":"Basic","link":"/en/useRequest/basic/"},{"text":"Debounce","link":"/en/useRequest/debounce/"},{"text":"Throttle","link":"/en/useRequest/throttle/"},{"text":"Polling","link":"/en/useRequest/polling/"},{"text":"Ready","link":"/en/useRequest/ready/"},{"text":"RefreshDeps","link":"/en/useRequest/refreshDeps/"},{"text":"Fetchs","link":"/en/useRequest/fetchs/"},{"text":"Retry","link":"/en/useRequest/retry/"},{"text":"Format Result","link":"/en/useRequest/formatResult/"},{"text":"Cache & SWR","link":"/en/useRequest/cache/"},{"text":"LoadingDelay","link":"/en/useRequest/loadingDelay/"},{"text":"RefreshOnWindowFocus","link":"/en/useRequest/refreshOnWindowFocus/"},{"text":"Scroll","link":"/en/useRequest/scroll/"},{"text":"Middleware","link":"/en/useRequest/middleware/"},{"text":"Plugins Design","link":"/en/useRequest/plugin/"},{"text":"Global Option","link":"/en/useRequest/global/"},{"text":"DevTools","link":"/en/useRequest/devtools/"}]},{"text":"UseRequest External Plugins","items":[{"text":"global Fetching","link":"/en/useRequest/plugins/fetchsing/"},{"text":"broadcastChannel","link":"/en/useRequest/plugins/broadcastChannel/"}]},{"text":"State","items":[{"text":"useBoolean","link":"/en/useBoolean/"},{"text":"useImmer","link":"/en/useImmer/"},{"text":"useUrlState","link":"/en/useUrlState/"},{"text":"useFormatResult","link":"/en/useFormatResult/"},{"text":"useDebounce","link":"/en/useDebounce/"},{"text":"useThrottle","link":"/en/useThrottle/"},{"text":"useToggle","link":"/en/useToggle/"},{"text":"useCookieState","link":"/en/useCookieState/"},{"text":"useLocalStorageState","link":"/en/useLocalStorageState/"},{"text":"useSessionStorageState","link":"/en/useSessionStorageState/"},{"text":"useMap","link":"/en/useMap/"},{"text":"useSet","link":"/en/useSet/"},{"text":"usePrevious","link":"/en/usePrevious/"},{"text":"useSetState","link":"/en/useSetState/"}]},{"text":"Effect","items":[{"text":"useDebounceFn","link":"/en/useDebounceFn/"},{"text":"useThrottleFn","link":"/en/useThrottleFn/"},{"text":"useFetchs","link":"/en/useFetchs/"},{"text":"useLockFn","link":"/en/useLockFn/"},{"text":"useUpdate","link":"/en/useUpdate/"},{"text":"useInterval","link":"/en/useInterval/"},{"text":"useTimeout","link":"/en/useTimeout/"},{"text":"useWorker","link":"/en/useWorker/"}]},{"text":"Scene","items":[{"text":"useCounter","link":"/en/useCounter/"},{"text":"useInfiniteScroll","link":"/en/useInfiniteScroll/"},{"text":"useNetwork","link":"/en/useNetwork/"},{"text":"useVirtualList","link":"/en/useVirtualList/"},{"text":"useWebSocket","link":"/en/useWebSocket/"}]},{"text":"Dom","items":[{"text":"useEventListener","link":"/en/useEventListener/"},{"text":"useExternal","link":"/en/useExternal/"},{"text":"useDrop & useDrag","link":"/en/useDrop/"},{"text":"useDarkMode","link":"/en/useDarkMode/"},{"text":"useFavicon","link":"/en/useFavicon/"},{"text":"useFocusWithin","link":"/en/useFocusWithin/"},{"text":"useFullscreen","link":"/en/useFull/"},{"text":"useHover","link":"/en/useHover/"},{"text":"useInViewport","link":"/en/useInViewport/"},{"text":"useKeyPress","link":"/en/useKeyPress/"},{"text":"useMedia","link":"/en/useMedia/"},{"text":"useMutationObserver","link":"/en/useMutationObserver/"},{"text":"useMouse","link":"/en/useMouse/"},{"text":"useSize","link":"/en/useSize/"},{"text":"useElementBounding","link":"/en/useElementBounding/"},{"text":"useResizeObserver","link":"/en/useResizeObserver/"},{"text":"useScroll","link":"/en/useScroll/"},{"text":"useTitle","link":"/en/useTitle/"},{"text":"useWinResize","link":"/en/useWinResize/"},{"text":"useLongPress","link":"/en/useLongPress/"}]},{"text":"Advanced","items":[{"text":"useEventEmitter","link":"/en/useEventEmitter/"},{"text":"useAsyncOrder","link":"/en/useAsyncOrder/"},{"text":"usePreview \u26A0\uFE0F","link":"/en/usePreview/"}]},{"text":"Dev","items":[{"text":"useTrackedEffect","link":"/en/useTrackedEffect/"},{"text":"useWhyDidYouUpdate","link":"/en/useWhyDidYouUpdate/"}]}]}},"repo":"/InhiblabCore/vue-hooks-plus","repoLabel":"Github","lastUpdated":"\u6700\u8FD1\u66F4\u65B0","prevLink":true,"nextLink":true,"socialLinks":[{"icon":"github","link":"https://github.com//InhiblabCore/vue-hooks-plus"},{"icon":"discord","link":"https://discord.gg/z5Ve5r9Kwp"},{"icon":"twitter","link":"https://twitter.com/Yong_Git"}]},"locales":{"/":{"label":"\u4E2D\u6587","lang":"zh-CN","title":"VueHook Plus","description":"vue hooks"},"/en/":{"label":"English","lang":"en-US","title":"VueHook Plus","description":"vue hooks"}},"langs":{"/":{"lang":"zh-CN"},"/en/":{"lang":"en-US"}},"scrollOffset":90}'
);
const Vh = /^https?:/i,
  Ui = "vitepress-theme-appearance",
  Ue = typeof window != "undefined",
  xu = {
    relativePath: "",
    title: "404",
    description: "Not Found",
    headers: [],
    frontmatter: {},
    lastUpdated: 0,
  };
function Dh(e, t) {
  t.sort((n, r) => {
    const s = r.split("/").length - n.split("/").length;
    return s !== 0 ? s : r.length - n.length;
  });
  for (const n of t) if (e.startsWith(n)) return n;
}
function zi(e, t) {
  const n = Dh(t, Object.keys(e));
  return n ? e[n] : void 0;
}
function Bh(e) {
  const { locales: t } = e.themeConfig || {},
    n = e.locales;
  return t && n
    ? Object.keys(t).reduce(
        (r, s) => ((r[s] = { label: t[s].label, lang: n[s].lang }), r),
        {}
      )
    : {};
}
function jh(e, t) {
  t = Uh(e, t);
  const n = zi(e.locales || {}, t),
    r = zi(e.themeConfig.locales || {}, t);
  return Object.assign({}, e, n, {
    themeConfig: Object.assign({}, e.themeConfig, r, { locales: {} }),
    lang: (n || e).lang,
    locales: {},
    langs: Bh(e),
  });
}
function Pu(e, t) {
  var o;
  const n = t.title || e.title,
    r = (o = t.titleTemplate) != null ? o : e.titleTemplate,
    s = Hh(e.title, r);
  return `${n}${s}`;
}
function Hh(e, t) {
  return t === !1
    ? ""
    : t === !0 || t === void 0
    ? ` | ${e}`
    : e === t
    ? ""
    : ` | ${t}`;
}
function Uh(e, t) {
  if (!Ue) return t;
  const n = e.base,
    r = n.endsWith("/") ? n.slice(0, -1) : n;
  return t.slice(r.length);
}
function zh(e, t) {
  return `${e}${t}`.replace(/\/+/g, "/");
}
function Cn(e) {
  return Vh.test(e) ? e : zh(kr.value.base, e);
}
function Eu(e) {
  let t = e.replace(/\.html$/, "");
  if (((t = decodeURIComponent(t)), t.endsWith("/") && (t += "index"), Ue)) {
    const n = "/docs/hooks/";
    t = t.slice(n.length).replace(/\//g, "_") + ".md";
    const r = __VP_HASH_MAP__[t.toLowerCase()];
    t = `${n}assets/${t}.${r}.js`;
  } else t = `./${t.slice(1).replace(/\//g, "_")}.md.js`;
  return t;
}
const ku = Symbol(),
  kr = Jd(Nh);
function qh(e) {
  const t = re(() => jh(kr.value, e.path));
  return {
    site: t,
    theme: re(() => t.value.themeConfig),
    page: re(() => e.data),
    frontmatter: re(() => e.data.frontmatter),
    lang: re(() => t.value.lang),
    localePath: re(() => {
      const { langs: n, lang: r } = t.value,
        s = Object.keys(n).find((o) => n[o].lang === r);
      return Cn(s || "/");
    }),
    title: re(() => Pu(t.value, e.data)),
    description: re(() => e.data.description || t.value.description),
  };
}
function he() {
  const e = lt(ku);
  if (!e) throw new Error("vitepress data not properly injected in app");
  return e;
}
const Tu = Symbol(),
  qi = "http://a.com",
  Wh = () => ({ path: "/", component: null, data: xu });
function Gh(e, t) {
  const n = gt(Wh());
  function r(a = Ue ? location.href : "/") {
    const i = new URL(a, qi);
    return (
      !i.pathname.endsWith("/") &&
        !i.pathname.endsWith(".html") &&
        ((i.pathname += ".html"), (a = i.pathname + i.search + i.hash)),
      Ue &&
        (history.replaceState(
          { scrollPosition: window.scrollY },
          document.title
        ),
        history.pushState(null, "", a)),
      o(a)
    );
  }
  let s = null;
  async function o(a, i = 0, l = !1) {
    const c = new URL(a, qi),
      u = (s = c.pathname);
    try {
      let f = e(u);
      if (
        ("then" in f && typeof f.then == "function" && (f = await f), s === u)
      ) {
        s = null;
        const { default: d, __pageData: p } = f;
        if (!d) throw new Error(`Invalid route component: ${d}`);
        (n.path = Ue ? u : Cn(u)),
          (n.component = St(d)),
          (n.data = St(p)),
          Ue &&
            an(() => {
              if (c.hash && !i) {
                let g = null;
                try {
                  g = document.querySelector(decodeURIComponent(c.hash));
                } catch (y) {
                  console.warn(y);
                }
                if (g) {
                  Wi(g, c.hash);
                  return;
                }
              }
              window.scrollTo(0, i);
            });
      }
    } catch (f) {
      if (
        (!f.message.match(/fetch/) &&
          !a.match(/^[\\/]404\.html$/) &&
          console.error(f),
        !l)
      )
        try {
          const d = await fetch(kr.value.base + "hashmap.json");
          (window.__VP_HASH_MAP__ = await d.json()), await o(a, i, !0);
          return;
        } catch {}
      s === u &&
        ((s = null),
        (n.path = Ue ? u : Cn(u)),
        (n.component = t ? St(t) : null),
        (n.data = xu));
    }
  }
  return (
    Ue &&
      (window.addEventListener(
        "click",
        (a) => {
          const i = a.target.closest("a");
          if (i) {
            const {
                href: l,
                protocol: c,
                hostname: u,
                pathname: f,
                hash: d,
                target: p,
              } = i,
              g = window.location,
              y = f.match(/\.\w+$/);
            !a.ctrlKey &&
              !a.shiftKey &&
              !a.altKey &&
              !a.metaKey &&
              p !== "_blank" &&
              c === g.protocol &&
              u === g.hostname &&
              !(y && y[0] !== ".html") &&
              (a.preventDefault(),
              f === g.pathname
                ? d &&
                  d !== g.hash &&
                  (history.pushState(null, "", d),
                  window.dispatchEvent(new Event("hashchange")),
                  Wi(i, d, i.classList.contains("header-anchor")))
                : r(l));
          }
        },
        { capture: !0 }
      ),
      window.addEventListener("popstate", (a) => {
        o(location.href, (a.state && a.state.scrollPosition) || 0);
      }),
      window.addEventListener("hashchange", (a) => {
        a.preventDefault();
      })),
    { route: n, go: r }
  );
}
function Kh() {
  const e = lt(Tu);
  if (!e) throw new Error("useRouter() is called without provider.");
  return e;
}
function ln() {
  return Kh().route;
}
function Wi(e, t, n = !1) {
  let r = null;
  try {
    r = e.classList.contains("header-anchor")
      ? e
      : document.querySelector(decodeURIComponent(t));
  } catch (s) {
    console.warn(s);
  }
  if (r) {
    let s = kr.value.scrollOffset;
    typeof s == "string" &&
      (s = document.querySelector(s).getBoundingClientRect().bottom + 24);
    const o = parseInt(window.getComputedStyle(r).paddingTop, 10),
      a = window.scrollY + r.getBoundingClientRect().top - s + o;
    !n || Math.abs(a - window.scrollY) > window.innerHeight
      ? window.scrollTo(0, a)
      : window.scrollTo({ left: 0, top: a, behavior: "smooth" });
  }
}
const Yh = q({
    name: "VitePressContent",
    setup() {
      const e = ln();
      return () =>
        fs("div", { style: { position: "relative" } }, [
          e.component ? fs(e.component) : null,
        ]);
    },
  }),
  Au = /#.*$/,
  Jh = /(index)?\.(md|html)$/,
  Xh = /^[a-z]+:/i,
  Qh = typeof window != "undefined",
  Zh = C(Qh ? location.hash : "");
function ev(e) {
  return Xh.test(e);
}
function Cu(e, t) {
  let n,
    r = !1;
  return () => {
    n && clearTimeout(n),
      r
        ? (n = setTimeout(e, t))
        : (e(),
          (r = !0),
          setTimeout(() => {
            r = !1;
          }, t));
  };
}
function Bs(e, t, n = !1) {
  if (t === void 0) return !1;
  if (((e = Ki(`/${e}`)), n)) return new RegExp(t).test(e);
  if (Ki(t) !== e) return !1;
  const r = t.match(Au);
  return r ? Zh.value === r[0] : !0;
}
function Gi(e) {
  return /^\//.test(e) ? e : `/${e}`;
}
function Ki(e) {
  return decodeURI(e).replace(Au, "").replace(Jh, "");
}
function jo(e) {
  if (ev(e)) return e;
  const { pathname: t, search: n, hash: r } = new URL(e, "http://example.com"),
    s =
      t.endsWith("/") || t.endsWith(".html")
        ? e
        : `${t.replace(/(\.md)?$/, ".html")}${n}${r}`;
  return Cn(s);
}
function Ou(e, t) {
  if (Array.isArray(e)) return e;
  t = Gi(t);
  for (const n in e) if (t.startsWith(Gi(n))) return e[n];
  return [];
}
function tv(e) {
  const t = [];
  for (const n of e) for (const r of n.items) t.push(r);
  return t;
}
function yt() {
  const e = ln(),
    { theme: t, frontmatter: n } = he(),
    r = C(!1),
    s = re(() => {
      const c = t.value.sidebar,
        u = e.data.relativePath;
      return c ? Ou(c, u) : [];
    }),
    o = re(
      () =>
        n.value.sidebar !== !1 &&
        s.value.length > 0 &&
        n.value.layout !== "home"
    );
  function a() {
    r.value = !0;
  }
  function i() {
    r.value = !1;
  }
  function l() {
    r.value ? i() : a();
  }
  return { isOpen: r, sidebar: s, hasSidebar: o, open: a, close: i, toggle: l };
}
function nv(e, t) {
  let n;
  Se(() => {
    n = e.value ? document.activeElement : void 0;
  }),
    qe(() => {
      window.addEventListener("keyup", r);
    }),
    Je(() => {
      window.removeEventListener("keyup", r);
    });
  function r(s) {
    s.key === "Escape" && e.value && (t(), n == null || n.focus());
  }
}
var U = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t) n[r] = s;
  return n;
};
const rv = q({
  __name: "VPSkipLink",
  setup(e) {
    const t = ln(),
      n = C();
    Pe(
      () => t.path,
      () => n.value.focus()
    );
    function r({ target: s }) {
      const o = document.querySelector(s.hash);
      if (o) {
        const a = () => {
          o.removeAttribute("tabindex"), o.removeEventListener("blur", a);
        };
        o.setAttribute("tabindex", "-1"),
          o.addEventListener("blur", a),
          o.focus(),
          window.scrollTo(0, 0);
      }
    }
    return (s, o) => (
      _(),
      S(
        oe,
        null,
        [
          b(
            "span",
            { ref_key: "backToTop", ref: n, tabindex: "-1" },
            null,
            512
          ),
          b(
            "a",
            {
              href: "#VPContent",
              class: "VPSkipLink visually-hidden",
              onClick: r,
            },
            " Skip to content "
          ),
        ],
        64
      )
    );
  },
});
var sv = U(rv, [["__scopeId", "data-v-9b282d04"]]);
const ov = { key: 0, class: "VPBackdrop" },
  av = q({
    __name: "VPBackdrop",
    props: { show: { type: Boolean } },
    setup(e) {
      return (t, n) => (
        _(),
        ie(
          Ds,
          { name: "fade" },
          {
            default: ne(() => [t.show ? (_(), S("div", ov)) : Y("", !0)]),
            _: 1,
          }
        )
      );
    },
  });
var iv = U(av, [["__scopeId", "data-v-fa1356a4"]]);
function lv() {
  const e = C(!1);
  function t() {
    (e.value = !0), window.addEventListener("resize", s);
  }
  function n() {
    (e.value = !1), window.removeEventListener("resize", s);
  }
  function r() {
    e.value ? n() : t();
  }
  function s() {
    window.outerWidth >= 768 && n();
  }
  return { isScreenOpen: e, openScreen: t, closeScreen: n, toggleScreen: r };
}
const cv = ["src"],
  uv = { inheritAttrs: !1 },
  fv = q({
    ...uv,
    __name: "VPImage",
    props: { image: {} },
    setup(e) {
      return (t, n) => {
        const r = Er("VPImage", !0);
        return t.image
          ? (_(),
            S(
              oe,
              { key: 0 },
              [
                typeof t.image == "string" || "src" in t.image
                  ? (_(),
                    S(
                      "img",
                      sr(
                        { key: 0, class: "VPImage" },
                        typeof t.image == "string"
                          ? t.$attrs
                          : { ...t.image, ...t.$attrs },
                        {
                          src: w(Cn)(
                            typeof t.image == "string" ? t.image : t.image.src
                          ),
                        }
                      ),
                      null,
                      16,
                      cv
                    ))
                  : (_(),
                    S(
                      oe,
                      { key: 1 },
                      [
                        M(
                          r,
                          sr({ class: "dark", image: t.image.dark }, t.$attrs),
                          null,
                          16,
                          ["image"]
                        ),
                        M(
                          r,
                          sr(
                            { class: "light", image: t.image.light },
                            t.$attrs
                          ),
                          null,
                          16,
                          ["image"]
                        ),
                      ],
                      64
                    )),
              ],
              64
            ))
          : Y("", !0);
      };
    },
  });
var Lu = U(fv, [["__scopeId", "data-v-272398cc"]]);
const dv = ["href"],
  pv = q({
    __name: "VPNavBarTitle",
    setup(e) {
      const { site: t, theme: n } = he(),
        { hasSidebar: r } = yt();
      return (s, o) => (
        _(),
        S(
          "div",
          { class: pe(["VPNavBarTitle", { "has-sidebar": w(r) }]) },
          [
            b(
              "a",
              { class: "title", href: w(t).base },
              [
                M(Lu, { class: "logo", image: w(n).logo }, null, 8, ["image"]),
                w(n).siteTitle
                  ? (_(), S(oe, { key: 0 }, [je(ae(w(n).siteTitle), 1)], 64))
                  : w(n).siteTitle === void 0
                  ? (_(), S(oe, { key: 1 }, [je(ae(w(t).title), 1)], 64))
                  : Y("", !0),
              ],
              8,
              dv
            ),
          ],
          2
        )
      );
    },
  });
var hv = U(pv, [["__scopeId", "data-v-16b01397"]]);
const vv = { key: 0, class: "VPNavBarSearch" },
  _v = {
    type: "button",
    class: "DocSearch DocSearch-Button",
    "aria-label": "Search",
  },
  mv = b(
    "span",
    { class: "DocSearch-Button-Container" },
    [
      b(
        "svg",
        {
          class: "DocSearch-Search-Icon",
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
        },
        [
          b("path", {
            d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
            stroke: "currentColor",
            fill: "none",
            "fill-rule": "evenodd",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          }),
        ]
      ),
      b("span", { class: "DocSearch-Button-Placeholder" }, "Search"),
    ],
    -1
  ),
  gv = { class: "DocSearch-Button-Keys" },
  yv = b("kbd", { class: "DocSearch-Button-Key" }, "K", -1),
  bv = q({
    __name: "VPNavBarSearch",
    setup(e) {
      const t = eu(() =>
          aa(() => import("./chunks/VPAlgoliaSearchBox.7001ff79.js"), [])
        ),
        { theme: n } = he(),
        r = C(!1),
        s = C();
      qe(() => {
        if (!n.value.algolia) return;
        s.value.textContent = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
          ? "\u2318"
          : "Ctrl";
        const a = (l) => {
            l.key === "k" &&
              (l.ctrlKey || l.metaKey) &&
              (l.preventDefault(), o(), i());
          },
          i = () => {
            window.removeEventListener("keydown", a);
          };
        window.addEventListener("keydown", a), Je(i);
      });
      function o() {
        r.value || (r.value = !0);
      }
      return (a, i) =>
        w(n).algolia
          ? (_(),
            S("div", vv, [
              r.value
                ? (_(), ie(w(t), { key: 0 }))
                : (_(),
                  S("div", { key: 1, id: "docsearch", onClick: o }, [
                    b("button", _v, [
                      mv,
                      b("span", gv, [
                        b(
                          "kbd",
                          {
                            class: "DocSearch-Button-Key",
                            ref_key: "metaKey",
                            ref: s,
                          },
                          "Meta",
                          512
                        ),
                        yv,
                      ]),
                    ]),
                  ])),
            ]))
          : Y("", !0);
    },
  }),
  $v = {},
  wv = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
  },
  Sv = b("path", { d: "M0 0h24v24H0V0z", fill: "none" }, null, -1),
  xv = b(
    "path",
    { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" },
    null,
    -1
  ),
  Pv = [Sv, xv];
function Ev(e, t) {
  return _(), S("svg", wv, Pv);
}
var kv = U($v, [["render", Ev]]);
const Tv = q({
  __name: "VPLink",
  props: { href: {}, noIcon: { type: Boolean } },
  setup(e) {
    const t = e,
      n = re(() => t.href && /^[a-z]+:/i.test(t.href));
    return (r, s) => (
      _(),
      ie(
        Fs(r.href ? "a" : "span"),
        {
          class: pe(["VPLink", { link: r.href }]),
          href: r.href ? w(jo)(r.href) : void 0,
          target: n.value ? "_blank" : void 0,
          rel: n.value ? "noopener noreferrer" : void 0,
        },
        {
          default: ne(() => [
            Z(r.$slots, "default", {}, void 0, !0),
            n.value && !r.noIcon
              ? (_(), ie(kv, { key: 0, class: "icon" }))
              : Y("", !0),
          ]),
          _: 3,
        },
        8,
        ["class", "href", "target", "rel"]
      )
    );
  },
});
var Bt = U(Tv, [["__scopeId", "data-v-3ce12125"]]);
const Av = q({
  __name: "VPNavBarMenuLink",
  props: { item: {} },
  setup(e) {
    const { page: t } = he();
    return (n, r) => (
      _(),
      ie(
        Bt,
        {
          class: pe({
            VPNavBarMenuLink: !0,
            active: w(Bs)(
              w(t).relativePath,
              n.item.activeMatch || n.item.link,
              !!n.item.activeMatch
            ),
          }),
          href: n.item.link,
          noIcon: !0,
        },
        { default: ne(() => [je(ae(n.item.text), 1)]), _: 1 },
        8,
        ["class", "href"]
      )
    );
  },
});
var Cv = U(Av, [["__scopeId", "data-v-c8f9e84c"]]);
const xa = C();
let Iu = !1,
  lo = 0;
function Ov(e) {
  const t = C(!1);
  if (typeof window != "undefined") {
    !Iu && Lv(), lo++;
    const n = Pe(xa, (r) => {
      var s, o, a;
      r === e.el.value || ((s = e.el.value) == null ? void 0 : s.contains(r))
        ? ((t.value = !0), (o = e.onFocus) == null || o.call(e))
        : ((t.value = !1), (a = e.onBlur) == null || a.call(e));
    });
    Je(() => {
      n(), lo--, lo || Iv();
    });
  }
  return Le(t);
}
function Lv() {
  document.addEventListener("focusin", Mu),
    (Iu = !0),
    (xa.value = document.activeElement);
}
function Iv() {
  document.removeEventListener("focusin", Mu);
}
function Mu() {
  xa.value = document.activeElement;
}
const Mv = {},
  Fv = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  Rv = b(
    "path",
    {
      d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z",
    },
    null,
    -1
  ),
  Nv = [Rv];
function Vv(e, t) {
  return _(), S("svg", Fv, Nv);
}
var Fu = U(Mv, [["render", Vv]]);
const Dv = {},
  Bv = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  jv = b("circle", { cx: "12", cy: "12", r: "2" }, null, -1),
  Hv = b("circle", { cx: "19", cy: "12", r: "2" }, null, -1),
  Uv = b("circle", { cx: "5", cy: "12", r: "2" }, null, -1),
  zv = [jv, Hv, Uv];
function qv(e, t) {
  return _(), S("svg", Bv, zv);
}
var Wv = U(Dv, [["render", qv]]);
const Gv = { class: "VPMenuLink" },
  Kv = q({
    __name: "VPMenuLink",
    props: { item: {} },
    setup(e) {
      const t = ln(),
        n = () => {
          var a;
          let s = t.path;
          return s.includes("/docs/hooks/")
            ? ((s = s.replace("/docs/hooks/", "")),
              s == null ? void 0 : s.replace("en/", ""))
            : (a = s == null ? void 0 : s.replace("/", "")) == null
            ? void 0
            : a.replace("en/", "");
        },
        r = (s, o) =>
          o === "/en/"
            ? s.includes("/en/")
            : o === "/"
            ? !s.includes("/en/")
            : !0;
      return (s, o) => (
        _(),
        S("div", Gv, [
          M(
            Bt,
            {
              class: pe({ active: r(w(t).path, s.item.link) }),
              href: `${s.item.link}${n()}`,
            },
            { default: ne(() => [je(ae(s.item.text), 1)]), _: 1 },
            8,
            ["class", "href"]
          ),
        ])
      );
    },
  });
var js = U(Kv, [["__scopeId", "data-v-c043d4a4"]]);
const Yv = { class: "VPMenuGroup" },
  Jv = { key: 0, class: "title" },
  Xv = q({
    __name: "VPMenuGroup",
    props: { text: {}, items: {} },
    setup(e) {
      return (t, n) => (
        _(),
        S("div", Yv, [
          t.text ? (_(), S("p", Jv, ae(t.text), 1)) : Y("", !0),
          (_(!0),
          S(
            oe,
            null,
            Ie(
              t.items,
              (r) => (
                _(),
                S(
                  oe,
                  null,
                  [
                    "link" in r
                      ? (_(), ie(js, { key: 0, item: r }, null, 8, ["item"]))
                      : Y("", !0),
                  ],
                  64
                )
              )
            ),
            256
          )),
        ])
      );
    },
  });
var Qv = U(Xv, [["__scopeId", "data-v-3e0ddc3b"]]);
const Zv = { class: "VPMenu" },
  e_ = { key: 0, class: "items" },
  t_ = q({
    __name: "VPMenu",
    props: { items: {} },
    setup(e) {
      return (t, n) => (
        _(),
        S("div", Zv, [
          t.items
            ? (_(),
              S("div", e_, [
                (_(!0),
                S(
                  oe,
                  null,
                  Ie(
                    t.items,
                    (r) => (
                      _(),
                      S(
                        oe,
                        { key: r.text },
                        [
                          "link" in r
                            ? (_(),
                              ie(js, { key: 0, item: r }, null, 8, ["item"]))
                            : (_(),
                              ie(
                                Qv,
                                { key: 1, text: r.text, items: r.items },
                                null,
                                8,
                                ["text", "items"]
                              )),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ]))
            : Y("", !0),
          Z(t.$slots, "default", {}, void 0, !0),
        ])
      );
    },
  });
var n_ = U(t_, [["__scopeId", "data-v-737584dd"]]);
const r_ = ["aria-expanded", "aria-label"],
  s_ = { key: 0, class: "text" },
  o_ = { class: "menu" },
  a_ = q({
    __name: "VPFlyout",
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(e) {
      const t = C(!1),
        n = C();
      Ov({ el: n, onBlur: r });
      function r() {
        t.value = !1;
      }
      return (s, o) => (
        _(),
        S(
          "div",
          {
            class: "VPFlyout",
            ref_key: "el",
            ref: n,
            onMouseenter: o[1] || (o[1] = (a) => (t.value = !0)),
            onMouseleave: o[2] || (o[2] = (a) => (t.value = !1)),
          },
          [
            b(
              "button",
              {
                type: "button",
                class: "button",
                "aria-haspopup": "true",
                "aria-expanded": t.value,
                "aria-label": s.label,
                onClick: o[0] || (o[0] = (a) => (t.value = !t.value)),
              },
              [
                s.button || s.icon
                  ? (_(),
                    S("span", s_, [
                      s.icon
                        ? (_(),
                          ie(Fs(s.icon), { key: 0, class: "option-icon" }))
                        : Y("", !0),
                      je(" " + ae(s.button) + " ", 1),
                      M(Fu, { class: "text-icon" }),
                    ]))
                  : (_(), ie(Wv, { key: 1, class: "icon" })),
              ],
              8,
              r_
            ),
            b("div", o_, [
              M(
                n_,
                { items: s.items },
                {
                  default: ne(() => [Z(s.$slots, "default", {}, void 0, !0)]),
                  _: 3,
                },
                8,
                ["items"]
              ),
            ]),
          ],
          544
        )
      );
    },
  });
var Pa = U(a_, [["__scopeId", "data-v-2955bc4e"]]);
const i_ = q({
  __name: "VPNavBarMenuGroup",
  props: { item: {} },
  setup(e) {
    const { page: t } = he();
    return (n, r) => (
      _(),
      ie(
        Pa,
        {
          class: pe({
            VPNavBarMenuGroup: !0,
            active: w(Bs)(
              w(t).relativePath,
              n.item.activeMatch,
              !!n.item.activeMatch
            ),
          }),
          button: n.item.text,
          items: n.item.items,
        },
        null,
        8,
        ["class", "button", "items"]
      )
    );
  },
});
const l_ = (e) => (tt("data-v-ac6dbdca"), (e = e()), nt(), e),
  c_ = {
    key: 0,
    "aria-labelledby": "main-nav-aria-label",
    class: "VPNavBarMenu",
  },
  u_ = l_(() =>
    b(
      "span",
      { id: "main-nav-aria-label", class: "visually-hidden" },
      "Main Navigation",
      -1
    )
  ),
  f_ = q({
    __name: "VPNavBarMenu",
    setup(e) {
      const { theme: t } = he();
      return (n, r) =>
        w(t).nav
          ? (_(),
            S("nav", c_, [
              u_,
              (_(!0),
              S(
                oe,
                null,
                Ie(
                  w(t).nav,
                  (s) => (
                    _(),
                    S(
                      oe,
                      { key: s.text },
                      [
                        "link" in s
                          ? (_(),
                            ie(Cv, { key: 0, item: s }, null, 8, ["item"]))
                          : (_(),
                            ie(i_, { key: 1, item: s }, null, 8, ["item"])),
                      ],
                      64
                    )
                  )
                ),
                128
              )),
            ]))
          : Y("", !0);
    },
  });
var d_ = U(f_, [["__scopeId", "data-v-ac6dbdca"]]);
const p_ = {},
  h_ = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  v_ = b("path", { d: "M0 0h24v24H0z", fill: "none" }, null, -1),
  __ = b(
    "path",
    {
      d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",
      class: "css-c4d79v",
    },
    null,
    -1
  ),
  m_ = [v_, __];
function g_(e, t) {
  return _(), S("svg", h_, m_);
}
var Ru = U(p_, [["render", g_]]);
const y_ = { class: "items" },
  b_ = { class: "title" },
  $_ = q({
    __name: "VPNavBarTranslations",
    setup(e) {
      const { theme: t } = he();
      return (n, r) =>
        w(t).localeLinks
          ? (_(),
            ie(
              Pa,
              { key: 0, class: "VPNavBarTranslations", icon: Ru },
              {
                default: ne(() => [
                  b("div", y_, [
                    b("p", b_, ae(w(t).localeLinks.text), 1),
                    (_(!0),
                    S(
                      oe,
                      null,
                      Ie(
                        w(t).localeLinks.items,
                        (s) => (
                          _(),
                          ie(js, { key: s.link, item: s }, null, 8, ["item"])
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                _: 1,
              }
            ))
          : Y("", !0);
    },
  });
var w_ = U($_, [["__scopeId", "data-v-2048abb0"]]);
const S_ = {},
  x_ = { class: "VPSwitch", type: "button", role: "switch" },
  P_ = { class: "check" },
  E_ = { key: 0, class: "icon" };
function k_(e, t) {
  return (
    _(),
    S("button", x_, [
      b("span", P_, [
        e.$slots.default
          ? (_(), S("span", E_, [Z(e.$slots, "default", {}, void 0, !0)]))
          : Y("", !0),
      ]),
    ])
  );
}
var T_ = U(S_, [
  ["render", k_],
  ["__scopeId", "data-v-fba448a4"],
]);
const A_ = {},
  C_ = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  O_ = Yp(
    '<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',
    9
  ),
  L_ = [O_];
function I_(e, t) {
  return _(), S("svg", C_, L_);
}
var M_ = U(A_, [["render", I_]]);
const F_ = {},
  R_ = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  N_ = b(
    "path",
    {
      d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z",
    },
    null,
    -1
  ),
  V_ = [N_];
function D_(e, t) {
  return _(), S("svg", R_, V_);
}
var B_ = U(F_, [["render", D_]]);
const j_ = q({
  __name: "VPSwitchAppearance",
  setup(e) {
    const t = typeof localStorage != "undefined" ? n() : () => {};
    function n() {
      const r = window.matchMedia("(prefers-color-scheme: dark)"),
        s = document.documentElement.classList;
      let o = localStorage.getItem(Ui) || "auto",
        a = o === "auto" ? r.matches : o === "dark";
      r.onchange = (c) => {
        o === "auto" && l((a = c.matches));
      };
      function i() {
        l((a = !a)),
          (o = a
            ? r.matches
              ? "auto"
              : "dark"
            : r.matches
            ? "light"
            : "auto"),
          localStorage.setItem(Ui, o);
      }
      function l(c) {
        s[c ? "add" : "remove"]("dark");
      }
      return i;
    }
    return (r, s) => (
      _(),
      ie(
        T_,
        {
          class: "VPSwitchAppearance",
          "aria-label": "toggle dark mode",
          onClick: w(t),
        },
        {
          default: ne(() => [
            M(M_, { class: "sun" }),
            M(B_, { class: "moon" }),
          ]),
          _: 1,
        },
        8,
        ["onClick"]
      )
    );
  },
});
var Ea = U(j_, [["__scopeId", "data-v-25f4ea49"]]);
const H_ = { key: 0, class: "VPNavBarAppearance" },
  U_ = q({
    __name: "VPNavBarAppearance",
    setup(e) {
      const { site: t } = he();
      return (n, r) =>
        w(t).appearance ? (_(), S("div", H_, [M(Ea)])) : Y("", !0);
    },
  });
var z_ = U(U_, [["__scopeId", "data-v-11ef8319"]]);
const q_ = {},
  W_ = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  G_ = b(
    "path",
    {
      d: "M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z",
    },
    null,
    -1
  ),
  K_ = [G_];
function Y_(e, t) {
  return _(), S("svg", W_, K_);
}
var J_ = U(q_, [["render", Y_]]);
const X_ = {},
  Q_ = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  Z_ = b(
    "path",
    {
      d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    },
    null,
    -1
  ),
  e1 = [Z_];
function t1(e, t) {
  return _(), S("svg", Q_, e1);
}
var n1 = U(X_, [["render", t1]]);
const r1 = {},
  s1 = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  o1 = b(
    "path",
    {
      d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    },
    null,
    -1
  ),
  a1 = [o1];
function i1(e, t) {
  return _(), S("svg", s1, a1);
}
var l1 = U(r1, [["render", i1]]);
const c1 = {},
  u1 = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  f1 = b(
    "path",
    {
      d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    null,
    -1
  ),
  d1 = [f1];
function p1(e, t) {
  return _(), S("svg", u1, d1);
}
var h1 = U(c1, [["render", p1]]);
const v1 = {},
  _1 = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  m1 = b(
    "path",
    {
      d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
    },
    null,
    -1
  ),
  g1 = [m1];
function y1(e, t) {
  return _(), S("svg", _1, g1);
}
var b1 = U(v1, [["render", y1]]);
const $1 = {},
  w1 = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  S1 = b(
    "path",
    {
      d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z",
    },
    null,
    -1
  ),
  x1 = [S1];
function P1(e, t) {
  return _(), S("svg", w1, x1);
}
var E1 = U($1, [["render", P1]]);
const k1 = {},
  T1 = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  A1 = b(
    "path",
    {
      d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
    },
    null,
    -1
  ),
  C1 = [A1];
function O1(e, t) {
  return _(), S("svg", T1, C1);
}
var L1 = U(k1, [["render", O1]]);
const I1 = {},
  M1 = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  F1 = b(
    "path",
    {
      d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    },
    null,
    -1
  ),
  R1 = [F1];
function N1(e, t) {
  return _(), S("svg", M1, R1);
}
var V1 = U(I1, [["render", N1]]);
const D1 = ["href", "title"],
  B1 = { class: "visually-hidden" },
  j1 = q({
    __name: "VPSocialLink",
    props: { icon: {}, link: {} },
    setup(e) {
      const t = {
        discord: J_,
        facebook: n1,
        github: l1,
        instagram: b1,
        linkedin: h1,
        slack: E1,
        twitter: L1,
        youtube: V1,
      };
      return (n, r) => (
        _(),
        S(
          "a",
          {
            class: "VPSocialLink",
            href: n.link,
            title: n.icon,
            target: "_blank",
            rel: "noopener noreferrer",
          },
          [
            (_(), ie(Fs(t[n.icon]), { class: "icon" })),
            b("span", B1, ae(n.icon), 1),
          ],
          8,
          D1
        )
      );
    },
  });
var H1 = U(j1, [["__scopeId", "data-v-584316a4"]]);
const U1 = { class: "VPSocialLinks" },
  z1 = q({
    __name: "VPSocialLinks",
    props: { links: {} },
    setup(e) {
      return (t, n) => (
        _(),
        S("div", U1, [
          (_(!0),
          S(
            oe,
            null,
            Ie(
              t.links,
              ({ link: r, icon: s }) => (
                _(),
                ie(H1, { key: r, icon: s, link: r }, null, 8, ["icon", "link"])
              )
            ),
            128
          )),
        ])
      );
    },
  });
var Hs = U(z1, [["__scopeId", "data-v-440f81de"]]);
const q1 = q({
  __name: "VPNavBarSocialLinks",
  setup(e) {
    const { theme: t } = he();
    return (n, r) =>
      w(t).socialLinks
        ? (_(),
          ie(
            Hs,
            { key: 0, class: "VPNavBarSocialLinks", links: w(t).socialLinks },
            null,
            8,
            ["links"]
          ))
        : Y("", !0);
  },
});
var W1 = U(q1, [["__scopeId", "data-v-e67590ee"]]);
const G1 = (e) => (tt("data-v-372c5f6e"), (e = e()), nt(), e),
  K1 = { key: 0, class: "group" },
  Y1 = { class: "trans-title" },
  J1 = { key: 1, class: "group" },
  X1 = { class: "item appearance" },
  Q1 = G1(() => b("p", { class: "label" }, "Appearance", -1)),
  Z1 = { class: "appearance-action" },
  em = { key: 2, class: "group" },
  tm = { class: "item social-links" },
  nm = q({
    __name: "VPNavBarExtra",
    setup(e) {
      const { site: t, theme: n } = he();
      return (r, s) => (
        _(),
        ie(
          Pa,
          { class: "VPNavBarExtra", label: "extra navigation" },
          {
            default: ne(() => [
              w(n).localeLinks
                ? (_(),
                  S("div", K1, [
                    b("p", Y1, ae(w(n).localeLinks.text), 1),
                    (_(!0),
                    S(
                      oe,
                      null,
                      Ie(
                        w(n).localeLinks.items,
                        (o) => (
                          _(),
                          ie(js, { key: o.link, item: o }, null, 8, ["item"])
                        )
                      ),
                      128
                    )),
                  ]))
                : Y("", !0),
              w(t).appearance
                ? (_(),
                  S("div", J1, [b("div", X1, [Q1, b("div", Z1, [M(Ea)])])]))
                : Y("", !0),
              w(n).socialLinks
                ? (_(),
                  S("div", em, [
                    b("div", tm, [
                      M(
                        Hs,
                        { class: "social-links-list", links: w(n).socialLinks },
                        null,
                        8,
                        ["links"]
                      ),
                    ]),
                  ]))
                : Y("", !0),
            ]),
            _: 1,
          }
        )
      );
    },
  });
var rm = U(nm, [["__scopeId", "data-v-372c5f6e"]]);
const sm = (e) => (tt("data-v-5b9ddfe7"), (e = e()), nt(), e),
  om = ["aria-expanded"],
  am = sm(() =>
    b(
      "span",
      { class: "container" },
      [
        b("span", { class: "top" }),
        b("span", { class: "middle" }),
        b("span", { class: "bottom" }),
      ],
      -1
    )
  ),
  im = [am],
  lm = q({
    __name: "VPNavBarHamburger",
    props: { active: { type: Boolean } },
    emits: ["click"],
    setup(e) {
      return (t, n) => (
        _(),
        S(
          "button",
          {
            type: "button",
            class: pe(["VPNavBarHamburger", { active: t.active }]),
            "aria-label": "mobile navigation",
            "aria-expanded": t.active,
            "aria-controls": "VPNavScreen",
            onClick: n[0] || (n[0] = (r) => t.$emit("click")),
          },
          im,
          10,
          om
        )
      );
    },
  });
var cm = U(lm, [["__scopeId", "data-v-5b9ddfe7"]]);
const um = { class: "container" },
  fm = { class: "content" },
  dm = q({
    __name: "VPNavBar",
    props: { isScreenOpen: { type: Boolean } },
    emits: ["toggle-screen"],
    setup(e) {
      const { hasSidebar: t } = yt();
      return (n, r) => (
        _(),
        S(
          "div",
          { class: pe(["VPNavBar", { "has-sidebar": w(t) }]) },
          [
            b("div", um, [
              M(hv),
              b("div", fm, [
                M(bv, { class: "search" }),
                M(d_, { class: "menu" }),
                M(w_, { class: "translations" }),
                M(z_, { class: "appearance" }),
                M(W1, { class: "social-links" }),
                M(rm, { class: "extra" }),
                M(
                  cm,
                  {
                    class: "hamburger",
                    active: n.isScreenOpen,
                    onClick: r[0] || (r[0] = (s) => n.$emit("toggle-screen")),
                  },
                  null,
                  8,
                  ["active"]
                ),
              ]),
            ]),
          ],
          2
        )
      );
    },
  });
var pm = U(dm, [["__scopeId", "data-v-ad22f236"]]);
function hm(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
    return n;
  } else return Array.from(e);
}
var ka = !1;
if (typeof window != "undefined") {
  var Yi = {
    get passive() {
      ka = !0;
    },
  };
  window.addEventListener("testPassive", null, Yi),
    window.removeEventListener("testPassive", null, Yi);
}
var ds =
    typeof window != "undefined" &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === "MacIntel" &&
        window.navigator.maxTouchPoints > 1)),
  xn = [],
  ps = !1,
  Ta = -1,
  ar = void 0,
  Qt = void 0,
  ir = void 0,
  Nu = function (t) {
    return xn.some(function (n) {
      return !!(n.options.allowTouchMove && n.options.allowTouchMove(t));
    });
  },
  hs = function (t) {
    var n = t || window.event;
    return Nu(n.target) || n.touches.length > 1
      ? !0
      : (n.preventDefault && n.preventDefault(), !1);
  },
  vm = function (t) {
    if (ir === void 0) {
      var n = !!t && t.reserveScrollBarGap === !0,
        r = window.innerWidth - document.documentElement.clientWidth;
      if (n && r > 0) {
        var s = parseInt(
          window
            .getComputedStyle(document.body)
            .getPropertyValue("padding-right"),
          10
        );
        (ir = document.body.style.paddingRight),
          (document.body.style.paddingRight = s + r + "px");
      }
    }
    ar === void 0 &&
      ((ar = document.body.style.overflow),
      (document.body.style.overflow = "hidden"));
  },
  _m = function () {
    ir !== void 0 && ((document.body.style.paddingRight = ir), (ir = void 0)),
      ar !== void 0 && ((document.body.style.overflow = ar), (ar = void 0));
  },
  mm = function () {
    return window.requestAnimationFrame(function () {
      if (Qt === void 0) {
        Qt = {
          position: document.body.style.position,
          top: document.body.style.top,
          left: document.body.style.left,
        };
        var t = window,
          n = t.scrollY,
          r = t.scrollX,
          s = t.innerHeight;
        (document.body.style.position = "fixed"),
          (document.body.style.top = -n),
          (document.body.style.left = -r),
          setTimeout(function () {
            return window.requestAnimationFrame(function () {
              var o = s - window.innerHeight;
              o && n >= s && (document.body.style.top = -(n + o));
            });
          }, 300);
      }
    });
  },
  gm = function () {
    if (Qt !== void 0) {
      var t = -parseInt(document.body.style.top, 10),
        n = -parseInt(document.body.style.left, 10);
      (document.body.style.position = Qt.position),
        (document.body.style.top = Qt.top),
        (document.body.style.left = Qt.left),
        window.scrollTo(n, t),
        (Qt = void 0);
    }
  },
  ym = function (t) {
    return t ? t.scrollHeight - t.scrollTop <= t.clientHeight : !1;
  },
  bm = function (t, n) {
    var r = t.targetTouches[0].clientY - Ta;
    return Nu(t.target)
      ? !1
      : (n && n.scrollTop === 0 && r > 0) || (ym(n) && r < 0)
      ? hs(t)
      : (t.stopPropagation(), !0);
  },
  $m = function (t, n) {
    if (!t) {
      console.error(
        "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
      );
      return;
    }
    if (
      !xn.some(function (s) {
        return s.targetElement === t;
      })
    ) {
      var r = { targetElement: t, options: n || {} };
      (xn = [].concat(hm(xn), [r])),
        ds ? mm() : vm(n),
        ds &&
          ((t.ontouchstart = function (s) {
            s.targetTouches.length === 1 && (Ta = s.targetTouches[0].clientY);
          }),
          (t.ontouchmove = function (s) {
            s.targetTouches.length === 1 && bm(s, t);
          }),
          ps ||
            (document.addEventListener(
              "touchmove",
              hs,
              ka ? { passive: !1 } : void 0
            ),
            (ps = !0)));
    }
  },
  wm = function () {
    ds &&
      (xn.forEach(function (t) {
        (t.targetElement.ontouchstart = null),
          (t.targetElement.ontouchmove = null);
      }),
      ps &&
        (document.removeEventListener(
          "touchmove",
          hs,
          ka ? { passive: !1 } : void 0
        ),
        (ps = !1)),
      (Ta = -1)),
      ds ? gm() : _m(),
      (xn = []);
  };
const Sm = q({
  __name: "VPNavScreenMenuLink",
  props: { text: {}, link: {} },
  setup(e) {
    const t = lt("close-screen");
    return (n, r) => (
      _(),
      ie(
        Bt,
        { class: "VPNavScreenMenuLink", href: n.link, onClick: w(t) },
        { default: ne(() => [je(ae(n.text), 1)]), _: 1 },
        8,
        ["href", "onClick"]
      )
    );
  },
});
var xm = U(Sm, [["__scopeId", "data-v-04e2d02e"]]);
const Pm = {},
  Em = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  km = b(
    "path",
    {
      d: "M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z",
    },
    null,
    -1
  ),
  Tm = [km];
function Am(e, t) {
  return _(), S("svg", Em, Tm);
}
var Cm = U(Pm, [["render", Am]]);
const Om = q({
  __name: "VPNavScreenMenuGroupLink",
  props: { text: {}, link: {} },
  setup(e) {
    const t = lt("close-screen");
    return (n, r) => (
      _(),
      ie(
        Bt,
        { class: "VPNavScreenMenuGroupLink", href: n.link, onClick: w(t) },
        { default: ne(() => [je(ae(n.text), 1)]), _: 1 },
        8,
        ["href", "onClick"]
      )
    );
  },
});
var Vu = U(Om, [["__scopeId", "data-v-4cb3995a"]]);
const Lm = { class: "VPNavScreenMenuGroupSection" },
  Im = { key: 0, class: "title" },
  Mm = q({
    __name: "VPNavScreenMenuGroupSection",
    props: { text: {}, items: {} },
    setup(e) {
      return (t, n) => (
        _(),
        S("div", Lm, [
          t.text ? (_(), S("p", Im, ae(t.text), 1)) : Y("", !0),
          (_(!0),
          S(
            oe,
            null,
            Ie(
              t.items,
              (r) => (
                _(),
                ie(Vu, { key: r.text, text: r.text, link: r.link }, null, 8, [
                  "text",
                  "link",
                ])
              )
            ),
            128
          )),
        ])
      );
    },
  });
var Fm = U(Mm, [["__scopeId", "data-v-f1878fce"]]);
const Rm = ["aria-controls", "aria-expanded"],
  Nm = { class: "button-text" },
  Vm = ["id"],
  Dm = { key: 1, class: "group" },
  Bm = q({
    __name: "VPNavScreenMenuGroup",
    props: { text: {}, items: {} },
    setup(e) {
      const t = e,
        n = C(!1),
        r = re(
          () => `NavScreenGroup-${t.text.replace(" ", "-").toLowerCase()}`
        );
      function s() {
        n.value = !n.value;
      }
      return (o, a) => (
        _(),
        S(
          "div",
          { class: pe(["VPNavScreenMenuGroup", { open: n.value }]) },
          [
            b(
              "button",
              {
                class: "button",
                "aria-controls": r.value,
                "aria-expanded": n.value,
                onClick: s,
              },
              [b("span", Nm, ae(o.text), 1), M(Cm, { class: "button-icon" })],
              8,
              Rm
            ),
            b(
              "div",
              { id: r.value, class: "items" },
              [
                (_(!0),
                S(
                  oe,
                  null,
                  Ie(
                    o.items,
                    (i) => (
                      _(),
                      S(
                        oe,
                        { key: i.text },
                        [
                          "link" in i
                            ? (_(),
                              S("div", { key: i.text, class: "item" }, [
                                M(Vu, { text: i.text, link: i.link }, null, 8, [
                                  "text",
                                  "link",
                                ]),
                              ]))
                            : (_(),
                              S("div", Dm, [
                                M(
                                  Fm,
                                  { text: i.text, items: i.items },
                                  null,
                                  8,
                                  ["text", "items"]
                                ),
                              ])),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ],
              8,
              Vm
            ),
          ],
          2
        )
      );
    },
  });
var jm = U(Bm, [["__scopeId", "data-v-85281676"]]);
const Hm = { key: 0, class: "VPNavScreenMenu" },
  Um = q({
    __name: "VPNavScreenMenu",
    setup(e) {
      const { theme: t } = he();
      return (n, r) =>
        w(t).nav
          ? (_(),
            S("nav", Hm, [
              (_(!0),
              S(
                oe,
                null,
                Ie(
                  w(t).nav,
                  (s) => (
                    _(),
                    S(
                      oe,
                      { key: s.text },
                      [
                        "link" in s
                          ? (_(),
                            ie(
                              xm,
                              { key: 0, text: s.text, link: s.link },
                              null,
                              8,
                              ["text", "link"]
                            ))
                          : (_(),
                            ie(
                              jm,
                              { key: 1, text: s.text || "", items: s.items },
                              null,
                              8,
                              ["text", "items"]
                            )),
                      ],
                      64
                    )
                  )
                ),
                128
              )),
            ]))
          : Y("", !0);
    },
  });
const zm = (e) => (tt("data-v-1e55636e"), (e = e()), nt(), e),
  qm = { key: 0, class: "VPNavScreenAppearance" },
  Wm = zm(() => b("p", { class: "text" }, "Appearance", -1)),
  Gm = q({
    __name: "VPNavScreenAppearance",
    setup(e) {
      const { site: t } = he();
      return (n, r) =>
        w(t).appearance ? (_(), S("div", qm, [Wm, M(Ea)])) : Y("", !0);
    },
  });
var Km = U(Gm, [["__scopeId", "data-v-1e55636e"]]);
const Ym = { class: "list" },
  Jm = ["href"],
  Xm = q({
    __name: "VPNavScreenTranslations",
    setup(e) {
      const { theme: t } = he(),
        n = C(!1);
      function r() {
        n.value = !n.value;
      }
      const s = (a) => {
          var u;
          const i = window.location.origin,
            l = window.location.pathname.replace("/", "");
          let c = "";
          return (
            a === "/" &&
              (c = `${i}/docs/hooks/${
                (u = l.replace("docs/hooks/", "")) == null
                  ? void 0
                  : u.replace("en/", "")
              }`),
            a === "/en/" &&
              (c = `${i}/docs/hooks/en/${l.replace("docs/hooks/", "")}`),
            c
          );
        },
        o = (a) =>
          a === "/en/"
            ? window.location.pathname.includes("/en/")
            : a === "/"
            ? !window.location.pathname.includes("/en/")
            : !0;
      return (a, i) =>
        w(t).localeLinks
          ? (_(),
            S(
              "div",
              {
                key: 0,
                class: pe(["VPNavScreenTranslations", { open: n.value }]),
              },
              [
                b("button", { class: "title", onClick: r }, [
                  M(Ru, { class: "icon lang" }),
                  je(" " + ae(w(t).localeLinks.text) + " ", 1),
                  M(Fu, { class: "icon chevron" }),
                ]),
                b("ul", Ym, [
                  (_(!0),
                  S(
                    oe,
                    null,
                    Ie(
                      w(t).localeLinks.items,
                      (l) => (
                        _(),
                        S("li", { key: l.link, class: "item" }, [
                          b(
                            "a",
                            {
                              class: pe({ link: !0, active: o(l.link) }),
                              href: o(l.link) ? "javascript:" : s(l.link),
                            },
                            ae(l.text),
                            11,
                            Jm
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ],
              2
            ))
          : Y("", !0);
    },
  });
var Qm = U(Xm, [["__scopeId", "data-v-32e65acf"]]);
const Zm = q({
  __name: "VPNavScreenSocialLinks",
  setup(e) {
    const { theme: t } = he();
    return (n, r) =>
      w(t).socialLinks
        ? (_(),
          ie(
            Hs,
            {
              key: 0,
              class: "VPNavScreenSocialLinks",
              links: w(t).socialLinks,
            },
            null,
            8,
            ["links"]
          ))
        : Y("", !0);
  },
});
const eg = { class: "container" },
  tg = q({
    __name: "VPNavScreen",
    props: { open: { type: Boolean } },
    setup(e) {
      const t = C(null);
      function n() {
        $m(t.value, { reserveScrollBarGap: !0 });
      }
      function r() {
        wm();
      }
      return (s, o) => (
        _(),
        ie(
          Ds,
          { name: "fade", onEnter: n, onAfterLeave: r },
          {
            default: ne(() => [
              s.open
                ? (_(),
                  S(
                    "div",
                    { key: 0, class: "VPNavScreen", ref_key: "screen", ref: t },
                    [
                      b("div", eg, [
                        M(Um, { class: "menu" }),
                        M(Qm, { class: "translations" }),
                        M(Km, { class: "appearance" }),
                        M(Zm, { class: "social-links" }),
                      ]),
                    ],
                    512
                  ))
                : Y("", !0),
            ]),
            _: 1,
          }
        )
      );
    },
  });
var ng = U(tg, [["__scopeId", "data-v-0885b30d"]]);
const rg = q({
  __name: "VPNav",
  setup(e) {
    const { isScreenOpen: t, closeScreen: n, toggleScreen: r } = lv(),
      { hasSidebar: s } = yt();
    return (
      Rs("close-screen", n),
      (o, a) => (
        _(),
        S(
          "header",
          { class: pe(["VPNav", { "no-sidebar": !w(s) }]) },
          [
            M(pm, { "is-screen-open": w(t), onToggleScreen: w(r) }, null, 8, [
              "is-screen-open",
              "onToggleScreen",
            ]),
            M(ng, { open: w(t) }, null, 8, ["open"]),
          ],
          2
        )
      )
    );
  },
});
var sg = U(rg, [["__scopeId", "data-v-3b53327a"]]);
const og = {},
  ag = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24",
  },
  ig = b(
    "path",
    {
      d: "M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z",
    },
    null,
    -1
  ),
  lg = b(
    "path",
    { d: "M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z" },
    null,
    -1
  ),
  cg = b(
    "path",
    {
      d: "M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z",
    },
    null,
    -1
  ),
  ug = b(
    "path",
    {
      d: "M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z",
    },
    null,
    -1
  ),
  fg = [ig, lg, cg, ug];
function dg(e, t) {
  return _(), S("svg", ag, fg);
}
var pg = U(og, [["render", dg]]);
const hg = (e) => (tt("data-v-35938b89"), (e = e()), nt(), e),
  vg = { key: 0, class: "VPLocalNav" },
  _g = ["aria-expanded"],
  mg = hg(() => b("span", { class: "menu-text" }, "Menu", -1)),
  gg = q({
    __name: "VPLocalNav",
    props: { open: { type: Boolean } },
    emits: ["open-menu"],
    setup(e) {
      const { hasSidebar: t } = yt();
      function n() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
      return (r, s) =>
        w(t)
          ? (_(),
            S("div", vg, [
              b(
                "button",
                {
                  class: "menu",
                  "aria-expanded": r.open,
                  "aria-controls": "VPSidebarNav",
                  onClick: s[0] || (s[0] = (o) => r.$emit("open-menu")),
                },
                [M(pg, { class: "menu-icon" }), mg],
                8,
                _g
              ),
              b(
                "a",
                { class: "top-link", href: "#", onClick: n },
                " Return to top "
              ),
            ]))
          : Y("", !0);
    },
  });
var yg = U(gg, [["__scopeId", "data-v-35938b89"]]);
const bg = {},
  $g = {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
  },
  wg = b(
    "path",
    {
      d: "M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z",
    },
    null,
    -1
  ),
  Sg = b(
    "path",
    {
      d: "M16,11h-3V8c0-0.6-0.4-1-1-1s-1,0.4-1,1v3H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3h3c0.6,0,1-0.4,1-1S16.6,11,16,11z",
    },
    null,
    -1
  ),
  xg = [wg, Sg];
function Pg(e, t) {
  return _(), S("svg", $g, xg);
}
var Eg = U(bg, [["render", Pg]]);
const kg = {},
  Tg = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24",
  },
  Ag = b(
    "path",
    {
      d: "M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2zM20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z",
    },
    null,
    -1
  ),
  Cg = b(
    "path",
    {
      d: "M16,11H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S16.6,11,16,11z",
    },
    null,
    -1
  ),
  Og = [Ag, Cg];
function Lg(e, t) {
  return _(), S("svg", Tg, Og);
}
var Ig = U(kg, [["render", Lg]]);
const Mg = { class: "link-text" },
  Fg = q({
    __name: "VPSidebarLink",
    props: { item: {} },
    setup(e) {
      const { page: t } = he(),
        n = lt("close-sidebar");
      return (r, s) => (
        _(),
        ie(
          Bt,
          {
            class: pe({ active: w(Bs)(w(t).relativePath, r.item.link) }),
            href: r.item.link,
            onClick: w(n),
          },
          { default: ne(() => [b("span", Mg, ae(r.item.text), 1)]), _: 1 },
          8,
          ["class", "href", "onClick"]
        )
      );
    },
  });
var Rg = U(Fg, [["__scopeId", "data-v-400df434"]]);
const Ng = ["role"],
  Vg = { class: "title-text" },
  Dg = { class: "action" },
  Bg = { class: "items" },
  jg = q({
    __name: "VPSidebarGroup",
    props: {
      text: {},
      items: {},
      collapsible: { type: Boolean },
      collapsed: { type: Boolean },
    },
    setup(e) {
      const t = e,
        n = C(!1);
      Se(() => {
        n.value = !!(t.collapsible && t.collapsed);
      });
      function r() {
        t.collapsible && (n.value = !n.value);
      }
      return (s, o) => (
        _(),
        S(
          "section",
          {
            class: pe([
              "VPSidebarGroup",
              { collapsible: s.collapsible, collapsed: n.value },
            ]),
          },
          [
            s.text
              ? (_(),
                S(
                  "div",
                  {
                    key: 0,
                    class: "title",
                    role: s.collapsible ? "button" : void 0,
                    onClick: r,
                  },
                  [
                    b("h2", Vg, ae(s.text), 1),
                    b("div", Dg, [
                      M(Ig, { class: "icon minus" }),
                      M(Eg, { class: "icon plus" }),
                    ]),
                  ],
                  8,
                  Ng
                ))
              : Y("", !0),
            b("div", Bg, [
              (_(!0),
              S(
                oe,
                null,
                Ie(
                  s.items,
                  (a) => (
                    _(), ie(Rg, { key: a.link, item: a }, null, 8, ["item"])
                  )
                ),
                128
              )),
            ]),
          ],
          2
        )
      );
    },
  });
var Hg = U(jg, [["__scopeId", "data-v-482902ca"]]);
const Ug = (e) => (tt("data-v-7da2f4ee"), (e = e()), nt(), e),
  zg = {
    class: "nav",
    id: "VPSidebarNav",
    "aria-labelledby": "sidebar-aria-label",
    tabindex: "-1",
  },
  qg = Ug(() =>
    b(
      "span",
      { class: "visually-hidden", id: "sidebar-aria-label" },
      " Sidebar Navigation ",
      -1
    )
  ),
  Wg = q({
    __name: "VPSidebar",
    props: { open: { type: Boolean } },
    setup(e) {
      const t = e,
        { sidebar: n, hasSidebar: r } = yt();
      let s = C(null);
      return (
        hp(async () => {
          var o;
          t.open && (await an(), (o = s.value) == null || o.focus());
        }),
        (o, a) =>
          w(r)
            ? (_(),
              S(
                "aside",
                {
                  key: 0,
                  class: pe(["VPSidebar", { open: o.open }]),
                  ref_key: "navEl",
                  ref: s,
                  onClick: a[0] || (a[0] = Lh(() => {}, ["stop"])),
                },
                [
                  b("nav", zg, [
                    qg,
                    (_(!0),
                    S(
                      oe,
                      null,
                      Ie(
                        w(n),
                        (i) => (
                          _(),
                          S("div", { key: i.text, class: "group" }, [
                            M(
                              Hg,
                              {
                                text: i.text,
                                items: i.items,
                                collapsible: i.collapsible,
                                collapsed: i.collapsed,
                              },
                              null,
                              8,
                              ["text", "items", "collapsible", "collapsed"]
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                ],
                2
              ))
            : Y("", !0)
      );
    },
  });
var Gg = U(Wg, [["__scopeId", "data-v-7da2f4ee"]]);
function Kg() {
  const { page: e } = he();
  Ue &&
    Pe(
      () => e.value.relativePath,
      () => {
        an(() => {
          document
            .querySelectorAll('.vp-doc div[class*="language-"]>span.copy')
            .forEach(Jg);
        });
      },
      { immediate: !0, flush: "post" }
    );
}
async function Yg(e) {
  try {
    return navigator.clipboard.writeText(e);
  } catch {
    const t = document.createElement("textarea"),
      n = document.activeElement;
    (t.value = e),
      t.setAttribute("readonly", ""),
      (t.style.contain = "strict"),
      (t.style.position = "absolute"),
      (t.style.left = "-9999px"),
      (t.style.fontSize = "12pt");
    const r = document.getSelection(),
      s = r ? r.rangeCount > 0 && r.getRangeAt(0) : null;
    document.body.appendChild(t),
      t.select(),
      (t.selectionStart = 0),
      (t.selectionEnd = e.length),
      document.execCommand("copy"),
      document.body.removeChild(t),
      s && (r.removeAllRanges(), r.addRange(s)),
      n && n.focus();
  }
}
function Jg(e) {
  e.onclick = () => {
    const t = e.parentElement;
    if (!t) return;
    const n =
      t.classList.contains("language-sh") ||
      t.classList.contains("language-bash");
    let { innerText: r = "" } = t;
    n && (r = r.replace(/^ *\$ /gm, "")),
      Yg(r).then(() => {
        e.classList.add("copied"),
          setTimeout(() => {
            e.classList.remove("copied");
          }, 3e3);
      });
  };
}
const Us = (e) => (tt("data-v-2be02df1"), (e = e()), nt(), e),
  Xg = { class: "NotFound" },
  Qg = Us(() => b("p", { class: "code" }, "404", -1)),
  Zg = Us(() => b("h1", { class: "title" }, "PAGE NOT FOUND", -1)),
  ey = Us(() => b("div", { class: "divider" }, null, -1)),
  ty = Us(() =>
    b(
      "blockquote",
      { class: "quote" },
      " But if you don't change your direction, and if you keep looking, you may end up where you are heading. ",
      -1
    )
  ),
  ny = { class: "action" },
  ry = ["href"],
  sy = q({
    __name: "NotFound",
    setup(e) {
      const { site: t } = he();
      return (n, r) => (
        _(),
        S("div", Xg, [
          Qg,
          Zg,
          ey,
          ty,
          b("div", ny, [
            b(
              "a",
              { class: "link", href: w(t).base, "aria-label": "go to home" },
              " Take me home ",
              8,
              ry
            ),
          ]),
        ])
      );
    },
  });
var Ho = U(sy, [["__scopeId", "data-v-2be02df1"]]);
const oy = {},
  ay = { class: "VPPage" };
function iy(e, t) {
  const n = Er("Content");
  return _(), S("div", ay, [M(n)]);
}
var ly = U(oy, [["render", iy]]);
const cy = q({
  __name: "VPButton",
  props: { tag: {}, size: {}, theme: {}, text: {}, href: {} },
  setup(e) {
    const t = e,
      n = re(() => {
        var o, a;
        return [
          (o = t.size) != null ? o : "medium",
          (a = t.theme) != null ? a : "brand",
        ];
      }),
      r = re(() => t.href && /^[a-z]+:/i.test(t.href)),
      s = re(() => (t.tag ? t.tag : t.href ? "a" : "button"));
    return (o, a) => (
      _(),
      ie(
        Fs(s.value),
        {
          class: pe(["VPButton", n.value]),
          href: o.href ? w(Cn)(o.href) : void 0,
          target: r.value ? "_blank" : void 0,
          rel: r.value ? "noopener noreferrer" : void 0,
        },
        { default: ne(() => [je(ae(o.text), 1)]), _: 1 },
        8,
        ["class", "href", "target", "rel"]
      )
    );
  },
});
var Du = U(cy, [["__scopeId", "data-v-4c78d6ce"]]);
const uy = (e) => (tt("data-v-cada2c46"), (e = e()), nt(), e),
  fy = { class: "container" },
  dy = { class: "main" },
  py = { key: 0, class: "name" },
  hy = { class: "clip" },
  vy = { key: 1, class: "text" },
  _y = { key: 2, class: "tagline" },
  my = { key: 3, class: "actions" },
  gy = { key: 0, class: "image" },
  yy = { class: "image-container" },
  by = uy(() => b("div", { class: "image-bg" }, null, -1)),
  $y = q({
    __name: "VPHero",
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(e) {
      return (t, n) => (
        _(),
        S(
          "div",
          { class: pe(["VPHero", { "has-image": t.image }]) },
          [
            b("div", fy, [
              b("div", dy, [
                t.name
                  ? (_(), S("h1", py, [b("span", hy, ae(t.name), 1)]))
                  : Y("", !0),
                t.text ? (_(), S("p", vy, ae(t.text), 1)) : Y("", !0),
                t.tagline ? (_(), S("p", _y, ae(t.tagline), 1)) : Y("", !0),
                t.actions
                  ? (_(),
                    S("div", my, [
                      (_(!0),
                      S(
                        oe,
                        null,
                        Ie(
                          t.actions,
                          (r) => (
                            _(),
                            S("div", { key: r.link, class: "action" }, [
                              M(
                                Du,
                                {
                                  tag: "a",
                                  size: "medium",
                                  theme: r.theme,
                                  text: r.text,
                                  href: r.link,
                                },
                                null,
                                8,
                                ["theme", "text", "href"]
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ]))
                  : Y("", !0),
              ]),
              t.image
                ? (_(),
                  S("div", gy, [
                    b("div", yy, [
                      by,
                      M(Lu, { class: "image-src", image: t.image }, null, 8, [
                        "image",
                      ]),
                    ]),
                  ]))
                : Y("", !0),
            ]),
          ],
          2
        )
      );
    },
  });
var wy = U($y, [["__scopeId", "data-v-cada2c46"]]);
const Sy = q({
  __name: "VPHomeHero",
  setup(e) {
    const { frontmatter: t } = he();
    return (n, r) =>
      w(t).hero
        ? (_(),
          ie(
            wy,
            {
              key: 0,
              class: "VPHomeHero",
              name: w(t).hero.name,
              text: w(t).hero.text,
              tagline: w(t).hero.tagline,
              image: w(t).hero.image,
              actions: w(t).hero.actions,
            },
            null,
            8,
            ["name", "text", "tagline", "image", "actions"]
          ))
        : Y("", !0);
  },
});
const xy = { class: "VPFeature" },
  Py = { key: 0, class: "icon" },
  Ey = { class: "title" },
  ky = { class: "details" },
  Ty = q({
    __name: "VPFeature",
    props: { icon: {}, title: {}, details: {} },
    setup(e) {
      return (t, n) => (
        _(),
        S("article", xy, [
          t.icon ? (_(), S("div", Py, ae(t.icon), 1)) : Y("", !0),
          b("h2", Ey, ae(t.title), 1),
          b("p", ky, ae(t.details), 1),
        ])
      );
    },
  });
var Ay = U(Ty, [["__scopeId", "data-v-448d9f9c"]]);
const Cy = { key: 0, class: "VPFeatures" },
  Oy = { class: "container" },
  Ly = { class: "items" },
  Iy = q({
    __name: "VPFeatures",
    props: { features: {} },
    setup(e) {
      const t = e,
        n = re(() => {
          const r = t.features.length;
          if (r) {
            if (r === 2) return "grid-2";
            if (r === 3) return "grid-3";
            if (r % 3 === 0) return "grid-6";
            if (r % 2 === 0) return "grid-4";
          } else return;
        });
      return (r, s) =>
        r.features
          ? (_(),
            S("div", Cy, [
              b("div", Oy, [
                b("div", Ly, [
                  (_(!0),
                  S(
                    oe,
                    null,
                    Ie(
                      r.features,
                      (o) => (
                        _(),
                        S(
                          "div",
                          { key: o.title, class: pe(["item", [n.value]]) },
                          [
                            M(
                              Ay,
                              {
                                icon: o.icon,
                                title: o.title,
                                details: o.details,
                              },
                              null,
                              8,
                              ["icon", "title", "details"]
                            ),
                          ],
                          2
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ]))
          : Y("", !0);
    },
  });
var My = U(Iy, [["__scopeId", "data-v-204f2f23"]]);
const Fy = q({
  __name: "VPHomeFeatures",
  setup(e) {
    const { frontmatter: t } = he();
    return (n, r) =>
      w(t).features
        ? (_(),
          ie(
            My,
            { key: 0, class: "VPHomeFeatures", features: w(t).features },
            null,
            8,
            ["features"]
          ))
        : Y("", !0);
  },
});
const Ry = { class: "VPHome" },
  Ny = q({
    __name: "VPHome",
    setup(e) {
      return (t, n) => {
        const r = Er("Content");
        return (
          _(),
          S("div", Ry, [
            Z(t.$slots, "home-hero-before", {}, void 0, !0),
            M(Sy),
            Z(t.$slots, "home-hero-after", {}, void 0, !0),
            Z(t.$slots, "home-features-before", {}, void 0, !0),
            M(Fy),
            Z(t.$slots, "home-features-after", {}, void 0, !0),
            M(r),
          ])
        );
      };
    },
  });
var Vy = U(Ny, [["__scopeId", "data-v-04dc4a3c"]]),
  Dy = !1,
  Ji;
const Tr = typeof window != "undefined";
Tr &&
  ((Ji = window == null ? void 0 : window.navigator) == null
    ? void 0
    : Ji.userAgent) &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function By(e) {
  return Ps() ? (Rn(e), !0) : !1;
}
function jy(e, t = !0) {
  gu() ? nu(e) : t ? e() : an(e);
}
const Hy = Tr ? window : void 0;
Tr && window.document;
Tr && window.navigator;
Tr && window.location;
function Xi(e, t = {}) {
  const { window: n = Hy } = t,
    r = Boolean(n && "matchMedia" in n && typeof n.matchMedia == "function");
  let s;
  const o = C(!1),
    a = () => {
      !r || (s || (s = n.matchMedia(e)), (o.value = s.matches));
    };
  return (
    jy(() => {
      a(),
        s &&
          ("addEventListener" in s
            ? s.addEventListener("change", a)
            : s.addListener(a),
          By(() => {
            "removeEventListener" in s
              ? s.removeEventListener("change", a)
              : s.removeListener(a);
          }));
    }),
    o
  );
}
const Uo =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {},
  zo = "__vueuse_ssr_handlers__";
Uo[zo] = Uo[zo] || {};
Uo[zo];
var Qi;
(function (e) {
  (e.UP = "UP"),
    (e.RIGHT = "RIGHT"),
    (e.DOWN = "DOWN"),
    (e.LEFT = "LEFT"),
    (e.NONE = "NONE");
})(Qi || (Qi = {}));
function Uy() {
  const { hasSidebar: e } = yt(),
    t = Xi("(min-width: 960px)"),
    n = Xi("(min-width: 1280px)");
  return {
    isAsideEnabled: re(() =>
      !n.value && !t.value ? !1 : e.value ? n.value : t.value
    ),
  };
}
const zy = 56;
function qy() {
  const { page: e } = he();
  return { hasOutline: re(() => e.value.headers.length > 0) };
}
function Wy(e) {
  return Bu(Gy(e));
}
function Gy(e) {
  e = e.map((n) => Object.assign({}, n));
  let t;
  for (const n of e)
    n.level === 2
      ? (t = n)
      : t && n.level <= 3 && (t.children || (t.children = [])).push(n);
  return e.filter((n) => n.level === 2);
}
function Bu(e) {
  return e.map((t) => ({
    text: t.title,
    link: `#${t.slug}`,
    children: t.children ? Bu(t.children) : void 0,
    hidden: t.hidden,
  }));
}
function Ky(e, t) {
  const { isAsideEnabled: n } = Uy(),
    r = Cu(o, 100);
  let s = null;
  qe(() => {
    requestAnimationFrame(o), window.addEventListener("scroll", r);
  }),
    ru(() => {
      a(location.hash);
    }),
    Je(() => {
      window.removeEventListener("scroll", r);
    });
  function o() {
    if (!n.value) return;
    const i = [].slice.call(e.value.querySelectorAll(".outline-link")),
      l = [].slice
        .call(document.querySelectorAll(".content .header-anchor"))
        .filter((p) =>
          i.some((g) => g.hash === p.hash && p.offsetParent !== null)
        ),
      c = window.scrollY,
      u = window.innerHeight,
      f = document.body.offsetHeight,
      d = c + u === f;
    if (l.length && d) {
      a(l[l.length - 1].hash);
      return;
    }
    for (let p = 0; p < l.length; p++) {
      const g = l[p],
        y = l[p + 1],
        [P, v] = Yy(p, g, y);
      if (P) {
        history.replaceState(null, document.title, v || " "), a(v);
        return;
      }
    }
  }
  function a(i) {
    s && s.classList.remove("active"),
      i !== null &&
        (s = e.value.querySelector(`a[href="${decodeURIComponent(i)}"]`));
    const l = s;
    l
      ? (l.classList.add("active"),
        (t.value.style.top = l.offsetTop + 33 + "px"),
        (t.value.style.opacity = "1"))
      : ((t.value.style.top = "33px"), (t.value.style.opacity = "0"));
  }
}
function Zi(e) {
  return e.parentElement.offsetTop - zy - 15;
}
function Yy(e, t, n) {
  const r = window.scrollY;
  return e === 0 && r === 0
    ? [!0, null]
    : r < Zi(t)
    ? [!1, null]
    : !n || r < Zi(n)
    ? [!0, t.hash]
    : [!1, null];
}
const Jy = (e) => (tt("data-v-2a6eab60"), (e = e()), nt(), e),
  Xy = { class: "content" },
  Qy = { class: "outline-title" },
  Zy = { "aria-labelledby": "doc-outline-aria-label" },
  e0 = Jy(() =>
    b(
      "span",
      { class: "visually-hidden", id: "doc-outline-aria-label" },
      " Table of Contents for current page ",
      -1
    )
  ),
  t0 = { class: "root" },
  n0 = ["href"],
  r0 = { key: 0 },
  s0 = ["href"],
  o0 = q({
    __name: "VPDocAsideOutline",
    setup(e) {
      const { page: t, frontmatter: n, theme: r } = he(),
        { hasOutline: s } = qy(),
        o = C(),
        a = C();
      Ky(o, a);
      const i = re(() => Wy(t.value.headers));
      function l({ target: c }) {
        const u = "#" + c.href.split("#")[1],
          f = document.querySelector(u);
        f == null || f.focus();
      }
      return (c, u) => (
        _(),
        S(
          "div",
          {
            class: pe(["VPDocAsideOutline", { "has-outline": w(s) }]),
            ref_key: "container",
            ref: o,
          },
          [
            b("div", Xy, [
              b(
                "div",
                { class: "outline-marker", ref_key: "marker", ref: a },
                null,
                512
              ),
              b("div", Qy, ae(w(r).outlineTitle || "On this page"), 1),
              b("nav", Zy, [
                e0,
                b("ul", t0, [
                  (_(!0),
                  S(
                    oe,
                    null,
                    Ie(
                      i.value,
                      ({ text: f, link: d, children: p, hidden: g }) =>
                        gn(
                          (_(),
                          S(
                            "li",
                            null,
                            [
                              b(
                                "a",
                                { class: "outline-link", href: d, onClick: l },
                                ae(f),
                                9,
                                n0
                              ),
                              p && w(n).outline === "deep"
                                ? (_(),
                                  S("ul", r0, [
                                    (_(!0),
                                    S(
                                      oe,
                                      null,
                                      Ie(p, ({ text: y, link: P, hidden: v }) =>
                                        gn(
                                          (_(),
                                          S(
                                            "li",
                                            null,
                                            [
                                              b(
                                                "a",
                                                {
                                                  class: "outline-link nested",
                                                  href: P,
                                                  onClick: l,
                                                },
                                                ae(y),
                                                9,
                                                s0
                                              ),
                                            ],
                                            512
                                          )),
                                          [[yn, !v]]
                                        )
                                      ),
                                      256
                                    )),
                                  ]))
                                : Y("", !0),
                            ],
                            512
                          )),
                          [[yn, !g]]
                        )
                    ),
                    256
                  )),
                ]),
              ]),
            ]),
          ],
          2
        )
      );
    },
  });
var a0 = U(o0, [["__scopeId", "data-v-2a6eab60"]]);
const i0 = { class: "VPDocAsideCarbonAds" },
  l0 = q({
    __name: "VPDocAsideCarbonAds",
    setup(e) {
      const t = eu(() =>
        aa(() => import("./chunks/ui-custom.35321937.js"), [])
      );
      return (n, r) => (_(), S("div", i0, [M(w(t))]));
    },
  });
const c0 = (e) => (tt("data-v-22887a42"), (e = e()), nt(), e),
  u0 = { class: "VPDocAside" },
  f0 = c0(() => b("div", { class: "spacer" }, null, -1)),
  d0 = q({
    __name: "VPDocAside",
    setup(e) {
      const { page: t, theme: n } = he();
      return (r, s) => (
        _(),
        S("div", u0, [
          Z(r.$slots, "aside-top", {}, void 0, !0),
          Z(r.$slots, "aside-outline-before", {}, void 0, !0),
          w(t).headers.length ? (_(), ie(a0, { key: 0 })) : Y("", !0),
          Z(r.$slots, "aside-outline-after", {}, void 0, !0),
          f0,
          Z(r.$slots, "aside-ads-before", {}, void 0, !0),
          w(n).carbonAds ? (_(), ie(l0, { key: 1 })) : Y("", !0),
          Z(r.$slots, "aside-ads-after", {}, void 0, !0),
          Z(r.$slots, "aside-bottom", {}, void 0, !0),
        ])
      );
    },
  });
var p0 = U(d0, [["__scopeId", "data-v-22887a42"]]);
function h0() {
  const { theme: e, page: t } = he();
  return re(() => {
    const { text: n = "Edit this page", pattern: r } = e.value.editLink || {},
      { relativePath: s } = t.value;
    return { url: r.replace(/:path/g, s), text: n };
  });
}
function v0() {
  const { page: e, theme: t } = he();
  return re(() => {
    const n = Ou(t.value.sidebar, e.value.relativePath),
      r = tv(n),
      s = r.findIndex((o) => Bs(e.value.relativePath, o.link));
    return { prev: r[s - 1], next: r[s + 1] };
  });
}
const _0 = {},
  m0 = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  g0 = b(
    "path",
    {
      d: "M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z",
    },
    null,
    -1
  ),
  y0 = b(
    "path",
    {
      d: "M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z",
    },
    null,
    -1
  ),
  b0 = [g0, y0];
function $0(e, t) {
  return _(), S("svg", m0, b0);
}
var w0 = U(_0, [["render", $0]]);
const S0 = { class: "VPLastUpdated" },
  x0 = ["datatime"],
  P0 = q({
    __name: "VPDocFooterLastUpdated",
    setup(e) {
      const { theme: t, page: n } = he(),
        r = new Date(n.value.lastUpdated),
        s = r.toISOString(),
        o = C("");
      return (
        qe(() => {
          Se(() => {
            o.value = r.toLocaleString(window.navigator.language);
          });
        }),
        (a, i) => {
          var l;
          return (
            _(),
            S("p", S0, [
              je(
                ae((l = w(t).lastUpdatedText) != null ? l : "Last updated") +
                  ": ",
                1
              ),
              b("time", { datatime: w(s) }, ae(o.value), 9, x0),
            ])
          );
        }
      );
    },
  });
var E0 = U(P0, [["__scopeId", "data-v-0c5a3df2"]]);
const ju = (e) => (tt("data-v-87fb46e8"), (e = e()), nt(), e),
  k0 = { class: "VPDocFooter" },
  T0 = { class: "edit-info" },
  A0 = { key: 0, class: "edit-link" },
  C0 = { key: 1, class: "last-updated" },
  O0 = { key: 0, class: "prev-next" },
  L0 = { class: "pager" },
  I0 = ["href"],
  M0 = ju(() => b("span", { class: "desc" }, "Previous page", -1)),
  F0 = { class: "title" },
  R0 = ["href"],
  N0 = ju(() => b("span", { class: "desc" }, "Next page", -1)),
  V0 = { class: "title" },
  D0 = q({
    __name: "VPDocFooter",
    setup(e) {
      const { theme: t, page: n, frontmatter: r } = he(),
        s = h0(),
        o = v0(),
        a = re(() => n.value.lastUpdated && r.value.lastUpdated !== !1);
      return (i, l) => (
        _(),
        S("footer", k0, [
          b("div", T0, [
            w(t).editLink && w(r).editLink !== !1
              ? (_(),
                S("div", A0, [
                  M(
                    Bt,
                    {
                      class: "edit-link-button",
                      href: w(s).url,
                      "no-icon": !0,
                    },
                    {
                      default: ne(() => [
                        M(w0, { class: "edit-link-icon" }),
                        je(" " + ae(w(s).text), 1),
                      ]),
                      _: 1,
                    },
                    8,
                    ["href"]
                  ),
                ]))
              : Y("", !0),
            a.value ? (_(), S("div", C0, [M(E0)])) : Y("", !0),
          ]),
          w(o).prev || w(o).next
            ? (_(),
              S("div", O0, [
                b("div", L0, [
                  w(o).prev
                    ? (_(),
                      S(
                        "a",
                        {
                          key: 0,
                          class: "pager-link prev",
                          href: w(jo)(w(o).prev.link),
                        },
                        [M0, b("span", F0, ae(w(o).prev.text), 1)],
                        8,
                        I0
                      ))
                    : Y("", !0),
                ]),
                b(
                  "div",
                  { class: pe(["pager", { "has-prev": w(o).prev }]) },
                  [
                    w(o).next
                      ? (_(),
                        S(
                          "a",
                          {
                            key: 0,
                            class: "pager-link next",
                            href: w(jo)(w(o).next.link),
                          },
                          [N0, b("span", V0, ae(w(o).next.text), 1)],
                          8,
                          R0
                        ))
                      : Y("", !0),
                  ],
                  2
                ),
              ]))
            : Y("", !0),
        ])
      );
    },
  });
var B0 = U(D0, [["__scopeId", "data-v-87fb46e8"]]);
const j0 = (e) => (tt("data-v-407838f2"), (e = e()), nt(), e),
  H0 = { class: "container" },
  U0 = { class: "aside" },
  z0 = j0(() => b("div", { class: "aside-curtain" }, null, -1)),
  q0 = { class: "aside-container" },
  W0 = { class: "aside-content" },
  G0 = { class: "content" },
  K0 = { class: "content-container" },
  Y0 = { class: "main" },
  J0 = q({
    __name: "VPDoc",
    setup(e) {
      const { path: t } = ln(),
        { hasSidebar: n } = yt(),
        r = t.replace(/[./]+/g, "_").replace(/_html$/, "");
      return (s, o) => {
        const a = Er("Content");
        return (
          _(),
          S(
            "div",
            { class: pe(["VPDoc", { "has-sidebar": w(n) }]) },
            [
              b("div", H0, [
                b("div", U0, [
                  z0,
                  b("div", q0, [
                    b("div", W0, [
                      M(p0, null, {
                        "aside-top": ne(() => [
                          Z(s.$slots, "aside-top", {}, void 0, !0),
                        ]),
                        "aside-bottom": ne(() => [
                          Z(s.$slots, "aside-bottom", {}, void 0, !0),
                        ]),
                        "aside-outline-before": ne(() => [
                          Z(s.$slots, "aside-outline-before", {}, void 0, !0),
                        ]),
                        "aside-outline-after": ne(() => [
                          Z(s.$slots, "aside-outline-after", {}, void 0, !0),
                        ]),
                        "aside-ads-before": ne(() => [
                          Z(s.$slots, "aside-ads-before", {}, void 0, !0),
                        ]),
                        "aside-ads-after": ne(() => [
                          Z(s.$slots, "aside-ads-after", {}, void 0, !0),
                        ]),
                        _: 3,
                      }),
                    ]),
                  ]),
                ]),
                b("div", G0, [
                  b("div", K0, [
                    Z(s.$slots, "doc-before", {}, void 0, !0),
                    b("main", Y0, [
                      M(a, { class: pe(["vp-doc", w(r)]) }, null, 8, ["class"]),
                    ]),
                    M(B0),
                    Z(s.$slots, "doc-after", {}, void 0, !0),
                  ]),
                ]),
              ]),
            ],
            2
          )
        );
      };
    },
  });
var X0 = U(J0, [["__scopeId", "data-v-407838f2"]]);
const Q0 = q({
  __name: "VPContent",
  setup(e) {
    const t = ln(),
      { frontmatter: n } = he(),
      { hasSidebar: r } = yt();
    return (
      Kg(),
      (s, o) => (
        _(),
        S(
          "div",
          {
            class: pe([
              "VPContent",
              { "has-sidebar": w(r), "is-home": w(n).layout === "home" },
            ]),
            id: "VPContent",
          },
          [
            w(t).component === Ho
              ? (_(), ie(Ho, { key: 0 }))
              : w(n).layout === "page"
              ? (_(), ie(ly, { key: 1 }))
              : w(n).layout === "home"
              ? (_(),
                ie(
                  Vy,
                  { key: 2 },
                  {
                    "home-hero-before": ne(() => [
                      Z(s.$slots, "home-hero-before", {}, void 0, !0),
                    ]),
                    "home-hero-after": ne(() => [
                      Z(s.$slots, "home-hero-after", {}, void 0, !0),
                    ]),
                    "home-features-before": ne(() => [
                      Z(s.$slots, "home-features-before", {}, void 0, !0),
                    ]),
                    "home-features-after": ne(() => [
                      Z(s.$slots, "home-features-after", {}, void 0, !0),
                    ]),
                    _: 3,
                  }
                ))
              : (_(),
                ie(
                  X0,
                  { key: 3 },
                  {
                    "doc-before": ne(() => [
                      Z(s.$slots, "doc-before", {}, void 0, !0),
                    ]),
                    "doc-after": ne(() => [
                      Z(s.$slots, "doc-after", {}, void 0, !0),
                    ]),
                    "aside-top": ne(() => [
                      Z(s.$slots, "aside-top", {}, void 0, !0),
                    ]),
                    "aside-outline-before": ne(() => [
                      Z(s.$slots, "aside-outline-before", {}, void 0, !0),
                    ]),
                    "aside-outline-after": ne(() => [
                      Z(s.$slots, "aside-outline-after", {}, void 0, !0),
                    ]),
                    "aside-ads-before": ne(() => [
                      Z(s.$slots, "aside-ads-before", {}, void 0, !0),
                    ]),
                    "aside-ads-after": ne(() => [
                      Z(s.$slots, "aside-ads-after", {}, void 0, !0),
                    ]),
                    "aside-bottom": ne(() => [
                      Z(s.$slots, "aside-bottom", {}, void 0, !0),
                    ]),
                    _: 3,
                  }
                )),
          ],
          2
        )
      )
    );
  },
});
var Z0 = U(Q0, [["__scopeId", "data-v-2f0b66aa"]]);
const e2 = { class: "container" },
  t2 = { class: "message" },
  n2 = { class: "copyright" },
  r2 = q({
    __name: "VPFooter",
    setup(e) {
      const { theme: t } = he(),
        { hasSidebar: n } = yt();
      return (r, s) =>
        w(t).footer
          ? (_(),
            S(
              "footer",
              { key: 0, class: pe(["VPFooter", { "has-sidebar": w(n) }]) },
              [
                b("div", e2, [
                  b("p", t2, ae(w(t).footer.message), 1),
                  b("p", n2, ae(w(t).footer.copyright), 1),
                ]),
              ],
              2
            ))
          : Y("", !0);
    },
  });
var s2 = U(r2, [["__scopeId", "data-v-3119c160"]]);
const o2 = { class: "Layout" },
  a2 = q({
    __name: "Layout",
    setup(e) {
      const { isOpen: t, open: n, close: r } = yt();
      return (
        nv(t, r),
        Rs("close-sidebar", r),
        (s, o) => (
          _(),
          S("div", o2, [
            Z(s.$slots, "layout-top", {}, void 0, !0),
            M(sv),
            M(iv, { class: "backdrop", show: w(t), onClick: w(r) }, null, 8, [
              "show",
              "onClick",
            ]),
            M(sg),
            M(yg, { open: w(t), onOpenMenu: w(n) }, null, 8, [
              "open",
              "onOpenMenu",
            ]),
            M(Gg, { open: w(t) }, null, 8, ["open"]),
            M(Z0, null, {
              "home-hero-before": ne(() => [
                Z(s.$slots, "home-hero-before", {}, void 0, !0),
              ]),
              "home-hero-after": ne(() => [
                Z(s.$slots, "home-hero-after", {}, void 0, !0),
              ]),
              "home-features-before": ne(() => [
                Z(s.$slots, "home-features-before", {}, void 0, !0),
              ]),
              "home-features-after": ne(() => [
                Z(s.$slots, "home-features-after", {}, void 0, !0),
              ]),
              "doc-before": ne(() => [
                Z(s.$slots, "doc-before", {}, void 0, !0),
              ]),
              "doc-after": ne(() => [Z(s.$slots, "doc-after", {}, void 0, !0)]),
              "aside-top": ne(() => [Z(s.$slots, "aside-top", {}, void 0, !0)]),
              "aside-bottom": ne(() => [
                Z(s.$slots, "aside-bottom", {}, void 0, !0),
              ]),
              "aside-outline-before": ne(() => [
                Z(s.$slots, "aside-outline-before", {}, void 0, !0),
              ]),
              "aside-outline-after": ne(() => [
                Z(s.$slots, "aside-outline-after", {}, void 0, !0),
              ]),
              "aside-ads-before": ne(() => [
                Z(s.$slots, "aside-ads-before", {}, void 0, !0),
              ]),
              "aside-ads-after": ne(() => [
                Z(s.$slots, "aside-ads-after", {}, void 0, !0),
              ]),
              _: 3,
            }),
            M(s2),
            Z(s.$slots, "layout-bottom", {}, void 0, !0),
          ])
        )
      );
    },
  });
var i2 = U(a2, [["__scopeId", "data-v-e645dc52"]]);
const l2 = {},
  c2 = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  u2 = b(
    "path",
    {
      d: "M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z",
    },
    null,
    -1
  ),
  f2 = [u2];
function d2(e, t) {
  return _(), S("svg", c2, f2);
}
var Hu = U(l2, [["render", d2]]);
const p2 = {
  xmini: [[0, 2]],
  mini: [],
  small: [
    [920, 6],
    [768, 5],
    [640, 4],
    [480, 3],
    [0, 2],
  ],
  medium: [
    [960, 5],
    [832, 4],
    [640, 3],
    [480, 2],
  ],
  big: [
    [832, 3],
    [640, 2],
  ],
};
function h2({ el: e, size: t = "medium" }) {
  const n = Cu(r, 100);
  qe(() => {
    r(), window.addEventListener("resize", n);
  }),
    Je(() => {
      window.removeEventListener("resize", n);
    });
  function r() {
    v2(e.value, t);
  }
}
function v2(e, t) {
  const n = e.children.length,
    r = e.querySelectorAll(".vp-sponsor-grid-item:not(.empty)").length,
    s = _2(e, t, r);
  g2(e, s, n, r);
}
function _2(e, t, n) {
  const r = p2[t],
    s = window.innerWidth;
  let o = 1;
  return (
    r.some(([a, i]) => {
      if (s >= a) return (o = n < i ? n : i), !0;
    }),
    m2(e, o),
    o
  );
}
function m2(e, t) {
  e.dataset.vpGrid = String(t);
}
function g2(e, t, n, r) {
  const s = n - r,
    o = r % t,
    a = o === 0 ? o : t - o;
  y2(e, a - s);
}
function y2(e, t) {
  t !== 0 && (t > 0 ? b2(e, t) : $2(e, t * -1));
}
function b2(e, t) {
  for (let n = 0; n < t; n++) {
    const r = document.createElement("div");
    r.classList.add("vp-sponsor-grid-item", "empty"), e.append(r);
  }
}
function $2(e, t) {
  for (let n = 0; n < t; n++) e.removeChild(e.lastElementChild);
}
const w2 = ["href"],
  S2 = { class: "vp-sponsor-grid-box" },
  x2 = { class: "visually-hidden" },
  P2 = ["src", "alt"],
  E2 = q({
    __name: "VPSponsorsGrid",
    props: { size: {}, data: {} },
    setup(e) {
      const t = e,
        n = C(null);
      return (
        h2({ el: n, size: t.size }),
        (r, s) => {
          var o;
          return (
            _(),
            S(
              "div",
              {
                class: pe([
                  "VPSponsorsGrid vp-sponsor-grid",
                  [(o = t.size) != null ? o : "medium"],
                ]),
                ref_key: "el",
                ref: n,
              },
              [
                (_(!0),
                S(
                  oe,
                  null,
                  Ie(
                    r.data,
                    (a) => (
                      _(),
                      S("div", { key: a.tier, class: "vp-sponsor-grid-item" }, [
                        b(
                          "a",
                          {
                            class: "vp-sponsor-grid-link",
                            href: a.url,
                            target: "_blank",
                            rel: "sponsored noopener",
                          },
                          [
                            b("article", S2, [
                              b("h4", x2, ae(a.name), 1),
                              b(
                                "img",
                                {
                                  class: "vp-sponsor-grid-image",
                                  src: a.img,
                                  alt: a.name,
                                },
                                null,
                                8,
                                P2
                              ),
                            ]),
                          ],
                          8,
                          w2
                        ),
                      ])
                    )
                  ),
                  128
                )),
              ],
              2
            )
          );
        }
      );
    },
  }),
  k2 = { key: 0, class: "vp-sponsor-tier" },
  Uu = q({
    __name: "VPSponsors",
    props: { mode: {}, tier: {}, size: {}, data: {} },
    setup(e) {
      const t = e,
        n = re(() =>
          t.data.some((s) => !!s.items)
            ? t.data
            : [{ tier: t.tier, size: t.size, items: t.data }]
        );
      return (r, s) => {
        var o;
        return (
          _(),
          S(
            "div",
            {
              class: pe([
                "VPSponsors vp-sponsor",
                [(o = r.mode) != null ? o : "normal"],
              ]),
            },
            [
              (_(!0),
              S(
                oe,
                null,
                Ie(
                  n.value,
                  (a, i) => (
                    _(),
                    S("section", { key: i, class: "vp-sponsor-section" }, [
                      a.tier ? (_(), S("h3", k2, ae(a.tier), 1)) : Y("", !0),
                      M(E2, { size: a.size, data: a.items }, null, 8, [
                        "size",
                        "data",
                      ]),
                    ])
                  )
                ),
                128
              )),
            ],
            2
          )
        );
      };
    },
  });
const T2 = { class: "VPHomeSponsors" },
  A2 = { class: "container" },
  C2 = { class: "header" },
  O2 = { class: "love" },
  L2 = { key: 0, class: "message" },
  I2 = { class: "sponsors" },
  M2 = { key: 0, class: "action" };
q({
  __name: "VPHomeSponsors",
  props: { message: {}, actionText: {}, actionLink: {}, data: {} },
  setup(e) {
    return (t, n) => {
      var r;
      return (
        _(),
        S("section", T2, [
          b("div", A2, [
            b("div", C2, [
              b("div", O2, [M(Hu, { class: "icon" })]),
              t.message ? (_(), S("h2", L2, ae(t.message), 1)) : Y("", !0),
            ]),
            b("div", I2, [M(Uu, { data: t.data }, null, 8, ["data"])]),
            t.actionLink
              ? (_(),
                S("div", M2, [
                  M(
                    Du,
                    {
                      theme: "sponsor",
                      text: (r = t.actionText) != null ? r : "Become a sponsor",
                      href: t.actionLink,
                    },
                    null,
                    8,
                    ["text", "href"]
                  ),
                ]))
              : Y("", !0),
          ]),
        ])
      );
    };
  },
});
const F2 = { class: "VPDocAsideSponsors" };
q({
  __name: "VPDocAsideSponsors",
  props: { tier: {}, size: {}, data: {} },
  setup(e) {
    return (t, n) => (
      _(),
      S("div", F2, [
        M(
          Uu,
          { mode: "aside", tier: t.tier, size: t.size, data: t.data },
          null,
          8,
          ["tier", "size", "data"]
        ),
      ])
    );
  },
});
const R2 = { class: "profile" },
  N2 = { class: "avatar" },
  V2 = ["src", "alt"],
  D2 = { class: "data" },
  B2 = { class: "name" },
  j2 = { key: 0, class: "affiliation" },
  H2 = { key: 0, class: "title" },
  U2 = { key: 1, class: "at" },
  z2 = { key: 1, class: "desc" },
  q2 = { key: 2, class: "links" },
  W2 = { key: 0, class: "sponsor" },
  G2 = q({
    __name: "VPTeamMembersItem",
    props: { size: {}, member: {} },
    setup(e) {
      return (t, n) => {
        var r;
        return (
          _(),
          S(
            "article",
            {
              class: pe([
                "VPTeamMembersItem",
                [(r = t.size) != null ? r : "medium"],
              ]),
            },
            [
              b("div", R2, [
                b("figure", N2, [
                  b(
                    "img",
                    {
                      class: "avatar-img",
                      src: t.member.avatar,
                      alt: t.member.name,
                    },
                    null,
                    8,
                    V2
                  ),
                ]),
                b("div", D2, [
                  b("h1", B2, ae(t.member.name), 1),
                  t.member.title || t.member.org
                    ? (_(),
                      S("p", j2, [
                        t.member.title
                          ? (_(), S("span", H2, ae(t.member.title), 1))
                          : Y("", !0),
                        t.member.title && t.member.org
                          ? (_(), S("span", U2, " @ "))
                          : Y("", !0),
                        t.member.org
                          ? (_(),
                            ie(
                              Bt,
                              {
                                key: 2,
                                class: pe(["org", { link: t.member.orgLink }]),
                                href: t.member.orgLink,
                                "no-icon": "",
                              },
                              {
                                default: ne(() => [je(ae(t.member.org), 1)]),
                                _: 1,
                              },
                              8,
                              ["class", "href"]
                            ))
                          : Y("", !0),
                      ]))
                    : Y("", !0),
                  t.member.desc
                    ? (_(), S("p", z2, ae(t.member.desc), 1))
                    : Y("", !0),
                  t.member.links
                    ? (_(),
                      S("div", q2, [
                        M(Hs, { links: t.member.links }, null, 8, ["links"]),
                      ]))
                    : Y("", !0),
                ]),
              ]),
              t.member.sponsor
                ? (_(),
                  S("div", W2, [
                    M(
                      Bt,
                      {
                        class: "sponsor-link",
                        href: t.member.sponsor,
                        "no-icon": "",
                      },
                      {
                        default: ne(() => [
                          M(Hu, { class: "sponsor-icon" }),
                          je(" Sponsor "),
                        ]),
                        _: 1,
                      },
                      8,
                      ["href"]
                    ),
                  ]))
                : Y("", !0),
            ],
            2
          )
        );
      };
    },
  });
var K2 = U(G2, [["__scopeId", "data-v-cb56d8fe"]]);
const Y2 = { class: "container" };
q({
  __name: "VPTeamMembers",
  props: { size: {}, members: {} },
  setup(e) {
    const t = e,
      n = re(() => {
        var r;
        return [
          (r = t.size) != null ? r : "medium",
          `count-${t.members.length}`,
        ];
      });
    return (r, s) => (
      _(),
      S(
        "div",
        { class: pe(["VPTeamMembers", n.value]) },
        [
          b("div", Y2, [
            (_(!0),
            S(
              oe,
              null,
              Ie(
                r.members,
                (o) => (
                  _(),
                  S("div", { key: o.name, class: "item" }, [
                    M(K2, { size: r.size, member: o }, null, 8, [
                      "size",
                      "member",
                    ]),
                  ])
                )
              ),
              128
            )),
          ]),
        ],
        2
      )
    );
  },
});
const J2 = { Layout: i2, NotFound: Ho },
  zu = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n;
  },
  X2 = {},
  Q2 = {
    t: "1596458734865",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "4898",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: "14",
    height: "14",
  };
function Z2(e, t) {
  return (
    _(),
    S(
      "svg",
      Q2,
      t[0] ||
        (t[0] = [
          b(
            "path",
            {
              d: "M68.608 962.56V206.848h740.864V962.56H68.608zM746.496 271.36H131.584v629.248h614.912V271.36zM131.584 262.144",
              "p-id": "4899",
              fill: "#666",
            },
            null,
            -1
          ),
          b(
            "path",
            {
              d: "M219.136 65.024v116.224h62.976V129.536h614.912v629.248h-60.416v61.952h123.392V65.024z",
              "p-id": "4900",
              fill: "#666",
            },
            null,
            -1
          ),
        ])
    )
  );
}
const eb = zu(X2, [["render", Z2]]),
  tb = {},
  nb = {
    t: "1596458647160",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "2840",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: "18",
    height: "18",
  };
function rb(e, t) {
  return (
    _(),
    S(
      "svg",
      nb,
      t[0] ||
        (t[0] = [
          b(
            "path",
            {
              d: "M311.1 739c-6.1 0-12.2-2.3-16.8-7L69.7 507.4l224.6-224.6c9.3-9.3 24.3-9.3 33.6 0s9.3 24.3 0 33.6l-191 191 191 191c9.3 9.3 9.3 24.3 0 33.6-4.6 4.7-10.7 7-16.8 7zM711.5 739c-6.1 0-12.2-2.3-16.8-7-9.3-9.3-9.3-24.3 0-33.6l191-191-191-191c-9.3-9.3-9.3-24.3 0-33.6s24.3-9.3 33.6 0L953 507.4 728.3 732c-4.6 4.7-10.7 7-16.8 7zM418.5 814.7c-2.4 0-4.8-0.4-7.2-1.1-12.5-4-19.4-17.3-15.5-29.8l179.6-567.1c4-12.5 17.3-19.4 29.8-15.5 12.5 4 19.4 17.3 15.5 29.8L441.1 798.1a23.73 23.73 0 0 1-22.6 16.6z",
              fill: "#666",
              "p-id": "2841",
            },
            null,
            -1
          ),
        ])
    )
  );
}
const sb = zu(tb, [["render", rb]]),
  ob = ["href"],
  ab = "https://sfc.vuejs.org/",
  ib = `
<style>
body{
    padding: 12px;
    border-radius: 12px;
    overflow: hidden;
    margin-top: 8px;
    box-shadow: 1px 3px 4px rgba(188, 189, 190, 0.3);
    border: 1px solid rgba(235, 235, 235, 0.38);
    background-color: #010e19;
    color: white;
}  
button{
    border: 1px solid #42d392;
    color:rgba(255, 255, 255, .87);
    background-color: #33a06f;
    padding-left: 6px;
    padding-right: 6px;
    border-radius: 5px;
    min-width: 60px;
    height: 36px;
    font-weight: 500;
    white-space: nowrap;
    transition: color 0.25s, border-color 0.25s, background-color 0.25s, box-shadow 0.4s,
      opacity 0.4s;
    cursor: pointer;
    transform: scale(1);
}
button:hover {
    border-color: #35eb9a;
    background-color: #42b883;
  }

button::after {
    position: absolute;
    content: '';
    inset: 0;
    border-radius: inherit;
    opacity: 0;
    box-shadow: 0 0 0 6px #42b883;
    transition: 0.4s;
  }
button:active::after {
    box-shadow: none;
    opacity: 1;
    transition: 0s;
  }
input {
    opacity: 1;
    color: white;
    background-color: rgba(255, 255, 255, 0.08);
    padding-left: 8px;
    height: 36px;
    font-weight: 500;
    border-radius: 5px;
    font-size: 15px;
    transition: all 0.3s;
}
</style>`,
  lb = q({
    __name: "SfcPlayground",
    props: { content: {}, importMap: {} },
    setup(e) {
      const t = e,
        n = re(() => {
          var r;
          const s = {
            "App.vue":
              ((r = t.content) == null ? void 0 : r.replace(/vhp-/g, "")) + ib,
          };
          if (t.importMap)
            try {
              s["import-map.json"] = JSON.stringify({
                imports: {
                  "vue-hooks-plus":
                    "https://cdn.jsdelivr.net/npm/vue-hooks-plus/dist/js/index.es.js",
                  ...t.importMap,
                },
              });
            } catch {}
          return `${ab}#${btoa(
            unescape(encodeURIComponent(JSON.stringify(s)))
          )}`;
        });
      return (r, s) => (
        _(),
        S(
          "a",
          {
            href: n.value,
            style: { display: "flex", "align-items": "center" },
            target: "_blank",
          },
          s[0] ||
            (s[0] = [
              b(
                "div",
                { style: { width: "16px", "margin-left": "6px" } },
                [
                  b(
                    "svg",
                    {
                      version: "1.1",
                      id: "Layer_1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 1024 1024",
                      "xml:space": "preserve",
                    },
                    [
                      b("g", null, [
                        b("path", {
                          d: "M1004.57 319.408l-468-312c-15.974-9.83-33.022-9.92-49.142 0l-468 312C7.428 327.406 0 341.694 0 355.978v311.998c0 14.286 7.428 28.572 19.43 36.572l468 312.044c15.974 9.83 33.022 9.92 49.142 0l468-312.044c12-7.998 19.43-22.286 19.43-36.572V355.978c-0.002-14.284-7.43-28.572-19.432-36.57zM556 126.262l344.572 229.716-153.714 102.858L556 331.406V126.262z m-88 0v205.144l-190.858 127.43-153.714-102.858L468 126.262zM88 438.264l110.286 73.714L88 585.692v-147.428z m380 459.43L123.428 667.978l153.714-102.858L468 692.55v205.144z m44-281.716l-155.43-104 155.43-104 155.43 104-155.43 104z m44 281.716V692.55l190.858-127.43 153.714 102.858L556 897.694z m380-312.002l-110.286-73.714L936 438.264v147.428z",
                          "p-id": "2793",
                          fill: "#555",
                        }),
                      ]),
                    ]
                  ),
                ],
                -1
              ),
            ]),
          8,
          ob
        )
      );
    },
  });
function cb(e) {
  const t = gt({ showTip: !1 });
  function n() {
    navigator.clipboard.writeText(e),
      (t.showTip = !0),
      setTimeout(() => {
        t.showTip = !1;
      }, 5 * 1e3);
  }
  return { ...Sr(t), copyCode: n };
}
const ub = { class: "demo-slot vp-raw" },
  fb = { class: "demo-title-desc" },
  db = { class: "demo-title" },
  pb = { class: "demo-desc" },
  hb = { class: "demo-actions" },
  vb = { class: "demo-platforms" },
  _b = { class: "demo-buttons" },
  mb = { class: "demo-actions-copy" },
  gb = { class: "demo-actions-tip" },
  yb = ["innerHTML"],
  bb = q({
    __name: "Demo",
    props: {
      code: {},
      highlightedCode: {},
      title: {},
      desc: {},
      lang: { default: "vue" },
      defaultExpand: { type: Boolean, default: !1 },
      importMap: {
        default: () => ({
          "vue-hooks-plus":
            "https://cdn.jsdelivr.net/npm/vue-hooks-plus/dist/js/index.es.js",
        }),
      },
    },
    setup(e) {
      const t = e,
        n = re(() => decodeURIComponent(t.code)),
        { showTip: r, copyCode: s } = cb(n.value),
        o = re(() => decodeURIComponent(t.highlightedCode)),
        a = C(t.defaultExpand),
        i = () => (a.value = !a.value);
      return (l, c) => {
        const u = Er("ClientOnly");
        return (
          _(),
          ie(u, null, {
            default: ne(() => [
              b(
                "article",
                sr(l.$attrs, { class: "vitepress-demo" }),
                [
                  b("div", ub, [Z(l.$slots, "default")]),
                  gn(
                    b(
                      "div",
                      fb,
                      [
                        b("span", db, ae(l.title), 1),
                        b("span", pb, ae(l.desc), 1),
                      ],
                      512
                    ),
                    [[yn, l.title || l.desc]]
                  ),
                  b("div", hb, [
                    b("div", vb, [
                      M(
                        lb,
                        { content: n.value, importMap: l.importMap },
                        null,
                        8,
                        ["content", "importMap"]
                      ),
                    ]),
                    b("div", _b, [
                      b("div", mb, [
                        gn(b("span", gb, "\u590D\u5236\u6210\u529F!", 512), [
                          [yn, w(r)],
                        ]),
                        gn(
                          M(
                            eb,
                            { onClick: w(s), title: "\u590D\u5236" },
                            null,
                            8,
                            ["onClick"]
                          ),
                          [[yn, !w(r)]]
                        ),
                      ]),
                      M(sb, {
                        class: "demo-actions-expand",
                        onClick: c[0] || (c[0] = (f) => i()),
                        title: "\u5C55\u5F00",
                      }),
                    ]),
                  ]),
                  gn(
                    b(
                      "div",
                      {
                        innerHTML: o.value,
                        class: pe(`language-${l.lang} extra-class`),
                      },
                      null,
                      10,
                      yb
                    ),
                    [[yn, a.value]]
                  ),
                ],
                16
              ),
            ]),
            _: 3,
          })
        );
      };
    },
  }),
  $b = (e, t) => {
    if (
      ((e.install = (n) => {
        for (const r of [e, ...Object.values(t != null ? t : {})])
          n.component(r.name, r);
      }),
      t)
    )
      for (const [n, r] of Object.entries(t)) e[n] = r;
    return e;
  };
const wb = {},
  Sb = { class: "vhp-button" };
function xb(e, t) {
  return _(), S("button", Sb, [Z(e.$slots, "default", {}, void 0, !0)]);
}
var Pb = U(wb, [
  ["render", xb],
  ["__scopeId", "data-v-437c773e"],
]);
const Eb = $b(Pb);
const qu = (
  e,
  { manual: t, ready: n = !0, refreshDeps: r = [], refreshDepsAction: s }
) => {
  const o = C(!1);
  return (
    Se(() => {
      !t && e.options.refreshDeps !== !0 && (o.value = w(n));
    }),
    r instanceof Array
      ? Pe(
          [o, ...r],
          ([a]) => {
            !a || (!t && a && (s ? s() : e.refresh()));
          },
          { deep: !0, immediate: !1 }
        )
      : Pe(o, (a) => {
          !t && a && (s ? s() : e.refresh());
        }),
    {
      name: "autoRunPlugin",
      onBefore: () => {
        if (!w(n)) return { stopNow: !0 };
      },
    }
  );
};
qu.onInit = ({ ready: e = !0, manual: t }) => ({ loading: !t && w(e) });
const Zr = new Map(),
  kb = (e, t, n) => {
    const r = Zr.get(e);
    r != null && r.timer && clearTimeout(r.timer);
    let s;
    t > -1 &&
      (s = setTimeout(() => {
        Zr.delete(e);
      }, t)),
      Zr.set(e, { ...n, timer: s });
  },
  Tb = (e) => Zr.get(e),
  es = new Map(),
  Ab = (e) => es.get(e),
  Cb = (e, t) => {
    es.set(e, t),
      t
        .then((n) => (es.delete(e), n))
        .catch((n) => {
          throw (es.delete(e), n);
        });
  },
  Zt = {},
  Ob = [],
  Lb = (e, t) => {
    Zt[e] &&
      (Zt[e].forEach((n) => n(t)), Ob.forEach((n) => n({ type: e, data: t })));
  },
  co = (e, t) => (
    Zt[e] || (Zt[e] = []),
    Zt[e].push(t),
    function () {
      const r = Zt[e].indexOf(t);
      Zt[e].splice(r, 1);
    }
  ),
  Ib = (
    e,
    {
      cacheKey: t,
      cacheTime: n = 5 * 60 * 1e3,
      staleTime: r = 0,
      setCache: s,
      getCache: o,
    }
  ) => {
    const a = C(),
      i = C(),
      l = (u, f) => {
        s ? s(f) : kb(u, n, f), Lb(u, f.data);
      },
      c = (u, f = []) => (o ? o(f) : Tb(u));
    return (
      Se(() => {
        if (!t) return;
        const u = c(t);
        u &&
          Object.hasOwnProperty.call(u, "data") &&
          ((e.state.data = u.data),
          (e.state.params = u.params),
          (r === -1 || new Date().getTime() - u.time <= r) &&
            (e.state.loading = !1)),
          (a.value = co(t, (f) => {
            e.setState({ data: f });
          }));
      }),
      Rn(() => {
        var u;
        (u = a.value) == null || u.call(a);
      }),
      t
        ? {
            name: "cachePlugin",
            onBefore: (u) => {
              const f = c(t, u);
              return !f || !Object.hasOwnProperty.call(f, "data")
                ? {}
                : r === -1 || new Date().getTime() - f.time <= r
                ? {
                    loading: !1,
                    data: f == null ? void 0 : f.data,
                    returnNow: !0,
                  }
                : { data: f == null ? void 0 : f.data };
            },
            onRequest: (u, f) => {
              let d = Ab(t);
              return d && d !== i.value
                ? { servicePromise: d }
                : ((d = u(...f)),
                  (i.value = d),
                  Cb(t, d),
                  { servicePromise: d });
            },
            onSuccess: (u, f) => {
              var d;
              t &&
                ((d = a.value) == null || d.call(a),
                l(t, { data: u, params: f, time: new Date().getTime() }),
                (a.value = co(t, (p) => {
                  e.setState({ data: p });
                })));
            },
            onMutate: (u) => {
              var f;
              t &&
                ((f = a.value) == null || f.call(a),
                l(t, {
                  data: u,
                  params: e.state.params,
                  time: new Date().getTime(),
                }),
                (a.value = co(t, (d) => {
                  e.setState({ data: d });
                })));
            },
          }
        : {}
    );
  };
var zr =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
    ? window
    : typeof global != "undefined"
    ? global
    : typeof self != "undefined"
    ? self
    : {};
function Mb(e) {
  if (e.__esModule) return e;
  var t = Object.defineProperty({}, "__esModule", { value: !0 });
  return (
    Object.keys(e).forEach(function (n) {
      var r = Object.getOwnPropertyDescriptor(e, n);
      Object.defineProperty(
        t,
        n,
        r.get
          ? r
          : {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }
      );
    }),
    t
  );
}
function Fb(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ct = Fb,
  Rb = typeof zr == "object" && zr && zr.Object === Object && zr,
  Wu = Rb,
  Nb = Wu,
  Vb = typeof self == "object" && self && self.Object === Object && self,
  Db = Nb || Vb || Function("return this")(),
  ut = Db,
  Bb = ut,
  jb = function () {
    return Bb.Date.now();
  },
  Hb = jb,
  Ub = /\s/;
function zb(e) {
  for (var t = e.length; t-- && Ub.test(e.charAt(t)); );
  return t;
}
var qb = zb,
  Wb = qb,
  Gb = /^\s+/;
function Kb(e) {
  return e && e.slice(0, Wb(e) + 1).replace(Gb, "");
}
var Yb = Kb,
  Jb = ut,
  Xb = Jb.Symbol,
  zs = Xb,
  el = zs,
  Gu = Object.prototype,
  Qb = Gu.hasOwnProperty,
  Zb = Gu.toString,
  Yn = el ? el.toStringTag : void 0;
function e$(e) {
  var t = Qb.call(e, Yn),
    n = e[Yn];
  try {
    e[Yn] = void 0;
    var r = !0;
  } catch {}
  var s = Zb.call(e);
  return r && (t ? (e[Yn] = n) : delete e[Yn]), s;
}
var t$ = e$,
  n$ = Object.prototype,
  r$ = n$.toString;
function s$(e) {
  return r$.call(e);
}
var o$ = s$,
  tl = zs,
  a$ = t$,
  i$ = o$,
  l$ = "[object Null]",
  c$ = "[object Undefined]",
  nl = tl ? tl.toStringTag : void 0;
function u$(e) {
  return e == null
    ? e === void 0
      ? c$
      : l$
    : nl && nl in Object(e)
    ? a$(e)
    : i$(e);
}
var Dn = u$;
function f$(e) {
  return e != null && typeof e == "object";
}
var Et = f$,
  d$ = Dn,
  p$ = Et,
  h$ = "[object Symbol]";
function v$(e) {
  return typeof e == "symbol" || (p$(e) && d$(e) == h$);
}
var _$ = v$,
  m$ = Yb,
  rl = ct,
  g$ = _$,
  sl = 0 / 0,
  y$ = /^[-+]0x[0-9a-f]+$/i,
  b$ = /^0b[01]+$/i,
  $$ = /^0o[0-7]+$/i,
  w$ = parseInt;
function S$(e) {
  if (typeof e == "number") return e;
  if (g$(e)) return sl;
  if (rl(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = rl(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = m$(e);
  var n = b$.test(e);
  return n || $$.test(e) ? w$(e.slice(2), n ? 2 : 8) : y$.test(e) ? sl : +e;
}
var x$ = S$,
  P$ = ct,
  uo = Hb,
  ol = x$,
  E$ = "Expected a function",
  k$ = Math.max,
  T$ = Math.min;
function A$(e, t, n) {
  var r,
    s,
    o,
    a,
    i,
    l,
    c = 0,
    u = !1,
    f = !1,
    d = !0;
  if (typeof e != "function") throw new TypeError(E$);
  (t = ol(t) || 0),
    P$(n) &&
      ((u = !!n.leading),
      (f = "maxWait" in n),
      (o = f ? k$(ol(n.maxWait) || 0, t) : o),
      (d = "trailing" in n ? !!n.trailing : d));
  function p(R) {
    var z = r,
      E = s;
    return (r = s = void 0), (c = R), (a = e.apply(E, z)), a;
  }
  function g(R) {
    return (c = R), (i = setTimeout(v, t)), u ? p(R) : a;
  }
  function y(R) {
    var z = R - l,
      E = R - c,
      N = t - z;
    return f ? T$(N, o - E) : N;
  }
  function P(R) {
    var z = R - l,
      E = R - c;
    return l === void 0 || z >= t || z < 0 || (f && E >= o);
  }
  function v() {
    var R = uo();
    if (P(R)) return $(R);
    i = setTimeout(v, y(R));
  }
  function $(R) {
    return (i = void 0), d && r ? p(R) : ((r = s = void 0), a);
  }
  function I() {
    i !== void 0 && clearTimeout(i), (c = 0), (r = l = s = i = void 0);
  }
  function T() {
    return i === void 0 ? a : $(uo());
  }
  function k() {
    var R = uo(),
      z = P(R);
    if (((r = arguments), (s = this), (l = R), z)) {
      if (i === void 0) return g(l);
      if (f) return clearTimeout(i), (i = setTimeout(v, t)), p(l);
    }
    return i === void 0 && (i = setTimeout(v, t)), a;
  }
  return (k.cancel = I), (k.flush = T), k;
}
var Aa = A$;
const C$ = (
    e,
    {
      debounceWait: t,
      debounceLeading: n,
      debounceTrailing: r,
      debounceMaxWait: s,
    }
  ) => {
    const o = C(),
      a = re(() => {
        const i = {},
          l = w(n),
          c = w(r),
          u = w(s);
        return (
          l !== void 0 && (i.leading = l),
          c !== void 0 && (i.trailing = c),
          u !== void 0 && (i.maxWait = u),
          i
        );
      });
    return (
      Se((i) => {
        if (w(t)) {
          const l = e.runAsync.bind(e);
          (o.value = Aa(
            (c) => {
              c();
            },
            w(t),
            a.value
          )),
            (e.runAsync = (...c) =>
              new Promise((u, f) => {
                var d;
                (d = o.value) == null ||
                  d.call(o, () => {
                    l(...c)
                      .then(u)
                      .catch(f);
                  });
              })),
            i(() => {
              var c;
              (c = o.value) == null || c.cancel(), (e.runAsync = l);
            });
        }
      }),
      w(t)
        ? {
            name: "debouncePlugin",
            onCancel: () => {
              var i;
              (i = o.value) == null || i.cancel();
            },
          }
        : {}
    );
  },
  O$ = (e, { loadingDelay: t }) => {
    const n = C(),
      r = () => {
        n.value && (clearTimeout(w(n.value)), (n.value = void 0));
      };
    return {
      name: "loadingDelayPlugin",
      onFinally: () => {
        r();
        const s = w(t);
        s &&
          (e.setState({ loading: !0 }),
          (n.value = setTimeout(() => {
            e.setState({ loading: !1 });
          }, s)));
      },
      onError: () => {
        r();
      },
    };
  };
function Ca() {
  return !!(
    typeof window != "undefined" &&
    window.document &&
    window.document.createElement
  );
}
const L$ = !!(
  typeof window != "undefined" &&
  window.document &&
  window.document.createElement
);
function Oa() {
  return Ca() ? document.visibilityState !== "hidden" : !0;
}
const lr = [];
function I$(e) {
  return (
    lr.push(e),
    function () {
      const n = lr.indexOf(e);
      lr.splice(n, 1);
    }
  );
}
if (Ca()) {
  const e = () => {
    if (!!Oa())
      for (let t = 0; t < lr.length; t++) {
        const n = lr[t];
        n();
      }
  };
  window.addEventListener("visibilitychange", e, !1);
}
const M$ = (
  e,
  {
    pollingInterval: t,
    pollingWhenHidden: n = !0,
    pollingErrorRetryCount: r = -1,
  }
) => {
  let s;
  const o = C(),
    a = C(0),
    i = () => {
      var l;
      s && clearTimeout(s), (l = o.value) == null || l.call(o);
    };
  return (
    Se(() => {
      w(t) || i();
    }),
    w(t)
      ? {
          name: "pollingPlugin",
          onBefore: () => {
            i();
          },
          onError: () => {
            a.value += 1;
          },
          onSuccess: () => {
            a.value = 0;
          },
          onFinally: () => {
            r === -1 || (r !== -1 && a.value <= r)
              ? (s = setTimeout(() => {
                  !n && !Oa()
                    ? (o.value = I$(() => {
                        e.refresh();
                      }))
                    : e.refresh();
                }, w(t)))
              : (a.value = 0);
          },
          onCancel: () => {
            i();
          },
        }
      : {}
  );
};
function F$(e, t) {
  let n = !1;
  return (...r) => {
    n ||
      ((n = !0),
      e(...r),
      setTimeout(() => {
        n = !1;
      }, t));
  };
}
function R$() {
  return Ca() && typeof navigator.onLine != "undefined" ? navigator.onLine : !0;
}
const cr = [];
function N$(e) {
  return (
    cr.push(e),
    function () {
      const n = cr.indexOf(e);
      n > -1 && cr.splice(n, 1);
    }
  );
}
if (L$) {
  const e = () => {
    if (!(!Oa() || !R$()))
      for (let t = 0; t < cr.length; t++) {
        const n = cr[t];
        n();
      }
  };
  window.addEventListener("visibilitychange", e, !1),
    window.addEventListener("focus", e, !1);
}
const V$ = (e, { refreshOnWindowFocus: t, focusTimespan: n = 5e3 }) => {
    const r = C(),
      s = () => {
        var o;
        (o = r.value) == null || o.call(r);
      };
    return (
      Se((o) => {
        if (w(t)) {
          const a = F$(e.refresh.bind(e), w(n));
          r.value = N$(() => {
            a();
          });
        }
        o(() => {
          s();
        });
      }),
      Rn(() => {
        s();
      }),
      { name: "refreshOnWindowFocusPlugin" }
    );
  },
  D$ = (e, { retryInterval: t, retryCount: n }) => {
    const r = C(),
      s = C(0),
      o = C(!1);
    return n
      ? {
          name: "retryPlugin",
          onBefore: () => {
            o.value || (s.value = 0),
              (o.value = !1),
              r.value && clearTimeout(r.value);
          },
          onSuccess: () => {
            s.value = 0;
          },
          onError: () => {
            if (((s.value += 1), n === -1 || s.value <= n)) {
              const a = t != null ? t : Math.min(1e3 * 2 ** s.value, 3e4);
              r.value = setTimeout(() => {
                (o.value = !0), e.refresh();
              }, a);
            } else s.value = 0;
          },
          onCancel: () => {
            (s.value = 0), r.value && clearTimeout(r.value);
          },
        }
      : {};
  };
var B$ = Aa,
  j$ = ct,
  H$ = "Expected a function";
function U$(e, t, n) {
  var r = !0,
    s = !0;
  if (typeof e != "function") throw new TypeError(H$);
  return (
    j$(n) &&
      ((r = "leading" in n ? !!n.leading : r),
      (s = "trailing" in n ? !!n.trailing : s)),
    B$(e, t, { leading: r, maxWait: t, trailing: s })
  );
}
var Ku = U$;
const z$ = (
    e,
    { throttleWait: t, throttleLeading: n, throttleTrailing: r }
  ) => {
    const s = re(() => {
        const a = {};
        return (
          w(n) !== void 0 && (a.leading = w(n)),
          w(r) !== void 0 && (a.trailing = w(r)),
          a
        );
      }),
      o = re(() =>
        Ku(
          (a) => {
            a();
          },
          w(t),
          s.value
        )
      );
    return (
      Se((a) => {
        if (w(t)) {
          const i = e.runAsync.bind(e);
          (e.runAsync = (...l) =>
            new Promise((c, u) => {
              var f;
              (f = o.value) == null ||
                f.call(o, () => {
                  i(...l)
                    .then(c)
                    .catch(u);
                });
            })),
            a(() => {
              var l;
              (e.runAsync = i), (l = o.value) == null || l.cancel();
            });
        }
      }),
      w(t)
        ? {
            name: "throttlePlugin",
            onCancel: () => {
              var a;
              (a = o.value) == null || a.cancel();
            },
          }
        : {}
    );
  },
  al = (e) => typeof e == "function",
  q$ = (e) => typeof e == "boolean";
class W$ {
  constructor(t, n, r, s = {}) {
    Xe(this, "pluginImpls");
    Xe(this, "count", 0);
    Xe(this, "state", {
      loading: !1,
      params: void 0,
      data: void 0,
      error: void 0,
    });
    Xe(this, "previousValidData");
    (this.serviceRef = t),
      (this.options = n),
      (this.setUpdateData = r),
      (this.initState = s),
      (this.state = { ...this.state, loading: !n.manual, ...s });
  }
  setState(t = {}) {
    (this.state = { ...this.state, ...t }), this.setUpdateData(this.state);
  }
  setData(t, n) {
    console.warn("Please use 'setFetchState' instead of 'setData'"),
      n instanceof Array
        ? n.forEach((r) => {
            (this.state[r] = t), this.setUpdateData(t, r);
          })
        : ((this.state[n] = t), this.setUpdateData(t, n));
  }
  setFetchState(t, n) {
    n instanceof Array
      ? n.forEach((r) => {
          (this.state[r] = t), this.setUpdateData(t, r);
        })
      : ((this.state[n] = t), this.setUpdateData(t, n));
  }
  runPluginHandler(t, ...n) {
    var s, o, a;
    const r =
      (a =
        (o =
          (s = this.pluginImpls) == null
            ? void 0
            : s.map((i) => {
                var l;
                return (l = i[t]) == null ? void 0 : l.call(i, ...n);
              })) != null
          ? o
          : []) == null
        ? void 0
        : a.filter(Boolean);
    return Object.assign({}, ...r);
  }
  async runAsync(...t) {
    var a, i, l, c, u, f, d, p, g, y, P;
    this.count += 1;
    const n = this.count,
      {
        stopNow: r = !1,
        returnNow: s = !1,
        ...o
      } = this.runPluginHandler("onBefore", t);
    if (r) return new Promise(() => {});
    if ((this.setState({ loading: !0, params: t, ...o }), s))
      return Promise.resolve(o.data);
    try {
      (i = (a = this.options).onBefore) == null || i.call(a, t);
    } catch (v) {
      return (
        this.setState({ error: v, loading: !1 }),
        (c = (l = this.options).onError) == null || c.call(l, v, t),
        this.runPluginHandler("onError", v, t),
        new Promise(() => {})
      );
    }
    try {
      let { servicePromise: v } = this.runPluginHandler(
        "onRequest",
        this.serviceRef.value,
        t
      );
      const $ = (T) => {
        var R, z, E, N;
        if (n !== this.count) return new Promise(() => {});
        const k = this.options.formatResult ? this.options.formatResult(T) : T;
        return (
          this.setState({ data: k, error: void 0, loading: !1 }),
          (z = (R = this.options).onSuccess) == null || z.call(R, k, t),
          this.runPluginHandler("onSuccess", k, t),
          (this.previousValidData = k),
          (N = (E = this.options).onFinally) == null || N.call(E, t, k, void 0),
          n === this.count && this.runPluginHandler("onFinally", t, k, void 0),
          k
        );
      };
      v || (v = this.serviceRef.value(...t));
      const I = await v;
      return $(I);
    } catch (v) {
      if (n !== this.count) return new Promise(() => {});
      throw (
        (this.setState({ error: v, loading: !1 }),
        (f = (u = this.options).onError) == null || f.call(u, v, t),
        this.runPluginHandler("onError", v, t),
        ((al((d = this.options) == null ? void 0 : d.rollbackOnError) &&
          ((p = this.options) == null ? void 0 : p.rollbackOnError(t))) ||
          (q$((g = this.options) == null ? void 0 : g.rollbackOnError) &&
            this.options.rollbackOnError)) &&
          this.setState({ data: this.previousValidData }),
        (P = (y = this.options).onFinally) == null || P.call(y, t, void 0, v),
        n === this.count && this.runPluginHandler("onFinally", t, void 0, v),
        v)
      );
    }
  }
  run(...t) {
    this.runAsync(...t).catch((n) => {
      this.options.onError || console.error(n);
    });
  }
  cancel() {
    (this.count += 1),
      this.setState({ loading: !1 }),
      this.runPluginHandler("onCancel");
  }
  refresh() {
    this.run(...(this.state.params || []));
  }
  refreshAsync() {
    return this.runAsync(...(this.state.params || []));
  }
  mutate(t) {
    const n = al(t) ? t(this.state.data) : t;
    this.runPluginHandler("onMutate", n), this.setState({ data: n });
  }
}
const Yu = Symbol("USEREQUEST_GLOBAL_OPTIONS_PROVIDE_KEY");
function G$(e) {
  return (
    Object.keys(e).filter((n) =>
      ["data", "loading", "params", "error"].includes(n)
    ).length === 4
  );
}
function K$(e, t = {}, n = []) {
  const r = lt(Yu, {}),
    {
      initialData: s = void 0,
      manual: o = !1,
      ready: a = !0,
      ...i
    } = { ...(r != null ? r : {}), ...(t != null ? t : {}) },
    l = { manual: o, ready: a, initialData: s, ...i },
    c = C(e),
    u = gt({ data: s, loading: !1, params: void 0, error: void 0 }),
    f = (y, P) => {
      P
        ? (u[P] = y)
        : G$(y) &&
          ((u.data = y.data),
          (u.loading = y.loading),
          (u.error = y.error),
          (u.params = y.params));
    },
    d = n
      .map((y) => {
        var P;
        return (P = y == null ? void 0 : y.onInit) == null
          ? void 0
          : P.call(y, l);
      })
      .filter(Boolean),
    p = new W$(c, l, f, Object.assign({}, ...d, u));
  (p.options = l), (p.pluginImpls = n.map((y) => y(p, l)));
  const g = re(() => (_e(a) ? a.value : a));
  if (
    (Se(() => {
      if (!o) {
        const y = p.state.params || t.defaultParams || [];
        g.value && p.options.refreshDeps === !0 && !!c.value && p.run(...y);
      }
    }),
    !o && p.options.refreshDeps !== !0)
  ) {
    const y = p.state.params || t.defaultParams || [];
    w(a) && p.run(...y);
  }
  return (
    Rn(() => {
      p.cancel();
    }),
    {
      ...Sr(u),
      cancel: p.cancel.bind(p),
      refresh: p.refresh.bind(p),
      refreshAsync: p.refreshAsync.bind(p),
      run: p.run.bind(p),
      runAsync: p.runAsync.bind(p),
      mutate: p.mutate.bind(p),
    }
  );
}
const Y$ = (e, t) =>
  function (r, s = {}, o = []) {
    let a = e;
    const i = t || [];
    for (let l = i.length; l--; ) a = i[l](a);
    return a(r, s, o);
  };
function Ju(e, t, n) {
  const r = [null, C$, O$, M$, V$, z$, qu, Ib, D$].filter(Boolean);
  return Y$(K$, t == null ? void 0 : t.use)(e, t, [...(n || []), ...r]);
}
function AC(e) {
  Rs(Yu, e);
}
var J$ = { install(e) {} };
function X$(e, t, n) {
  (n == null ? void 0 : n.immediate) && e(),
    Se((s) => {
      if (w(t) === void 0 || typeof w(t) != "number" || w(t) < 0) return;
      const o = w(t),
        a = setTimeout(() => {
          e();
        }, o);
      s(() => {
        clearInterval(a);
      });
    });
}
function CC({ task: e, option: t }) {
  const {
    delay: n = 0,
    onError: r,
    onReady: s,
    onSuccess: o,
  } = t != null ? t : {};
  if (!(e instanceof Array)) throw new Error("task must be Array");
  const a = (c) => {
      r == null || r(c);
    },
    i = (c) => (u) => {
      a(u), c == null || c({ error: u });
    },
    l = () => {
      var c;
      (c = Array(...e.keys())) == null ||
        c.reduce(
          (u, f) =>
            u.then(
              (p) => (
                (p != null && p.error) || o == null || o(p),
                new Promise((g) => {
                  var y;
                  (y = e == null ? void 0 : e[f]) == null ||
                    y.call(e, g, i(g), f);
                })
              )
            ),
          Promise.resolve()
        );
    };
  X$(() => {
    s == null || s(), l();
  }, n);
}
function Q$(e = !1, t) {
  const n = C(e),
    r = re(() => {
      const s = t === void 0 ? !e : t;
      return {
        toggle: () => {
          n.value = n.value === e ? s : e;
        },
        set: (c) => (n.value = c),
        setLeft: () => (n.value = e),
        setRight: () => (n.value = s),
      };
    });
  return [Dc(n), { ...r.value }];
}
function La(e = !1) {
  const [t, { set: n, toggle: r }] = Q$(e);
  return [
    t,
    {
      set: (o) => n(!!o),
      setTrue: () => n(!0),
      setFalse: () => n(!1),
      toggle: r,
    },
  ];
}
/*! js-cookie v3.0.5 | MIT */ function qr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) e[r] = n[r];
  }
  return e;
}
var Z$ = {
  read: function (e) {
    return (
      e[0] === '"' && (e = e.slice(1, -1)),
      e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    );
  },
  write: function (e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  },
};
function qo(e, t) {
  function n(s, o, a) {
    if (typeof document != "undefined") {
      (a = qr({}, t, a)),
        typeof a.expires == "number" &&
          (a.expires = new Date(Date.now() + a.expires * 864e5)),
        a.expires && (a.expires = a.expires.toUTCString()),
        (s = encodeURIComponent(s)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape));
      var i = "";
      for (var l in a)
        !a[l] ||
          ((i += "; " + l), a[l] !== !0 && (i += "=" + a[l].split(";")[0]));
      return (document.cookie = s + "=" + e.write(o, s) + i);
    }
  }
  function r(s) {
    if (!(typeof document == "undefined" || (arguments.length && !s))) {
      for (
        var o = document.cookie ? document.cookie.split("; ") : [],
          a = {},
          i = 0;
        i < o.length;
        i++
      ) {
        var l = o[i].split("="),
          c = l.slice(1).join("=");
        try {
          var u = decodeURIComponent(l[0]);
          if (((a[u] = e.read(c, u)), s === u)) break;
        } catch {}
      }
      return s ? a[s] : a;
    }
  }
  return Object.create(
    {
      set: n,
      get: r,
      remove: function (s, o) {
        n(s, "", qr({}, o, { expires: -1 }));
      },
      withAttributes: function (s) {
        return qo(this.converter, qr({}, this.attributes, s));
      },
      withConverter: function (s) {
        return qo(qr({}, this.converter, s), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) },
    }
  );
}
var fo = qo(Z$, { path: "/" });
function il(e) {
  return typeof e == "function";
}
function OC(e, t = {}) {
  const r = C(
      (() => {
        const o = fo.get(e);
        return typeof o == "string"
          ? o
          : il(t.defaultValue)
          ? t.defaultValue()
          : t.defaultValue;
      })()
    ),
    s = (o, a = {}) => {
      const { defaultValue: i, ...l } = { ...t, ...a },
        c = () => {
          const u = il(o) ? o(r.value) : o;
          return u === void 0 ? fo.remove(e) : fo.set(e, u, l), u;
        };
      r.value = c();
    };
  return [Le(r), s];
}
const Xu = (e) => typeof e == "function",
  ew = (e) => typeof e == "string",
  br = (e) => typeof e == "number";
function ll(e, t = {}) {
  const { min: n, max: r } = t;
  let s = e;
  return br(r) && (s = Math.min(r, s)), br(n) && (s = Math.max(n, s)), s;
}
function LC(e = 0, t = {}) {
  const { min: n, max: r } = t,
    s = C(ll(e, { min: n, max: r })),
    o = (u) => {
      const f = br(u) ? u : u(s.value);
      return (s.value = ll(f, { max: r, min: n })), s.value;
    },
    a = (u = 1) => {
      o((f) => f + u);
    },
    i = (u = 1) => {
      o((f) => f - u);
    },
    l = (u) => {
      o(u);
    },
    c = () => {
      o(e);
    };
  return [Le(s), { inc: a, dec: i, set: l, reset: c }];
}
function tw(e, t) {
  var s;
  const n = (s = t == null ? void 0 : t.wait) != null ? s : 1e3,
    r = Aa(e, n, t);
  return { run: r, cancel: r.cancel, flush: r.flush };
}
function IC(e, t) {
  const n = C(e.value),
    { run: r } = tw(() => (n.value = e.value), t);
  return Pe(e, () => r(), { deep: !0 }), n;
}
const Ia = !!(
  typeof window != "undefined" &&
  window.document &&
  window.document.createElement
);
function Ee(e, t) {
  var r, s;
  if (!Ia) return;
  if (!e) return t;
  let n;
  return (
    typeof e == "function"
      ? (n = e())
      : _e(e)
      ? (n = (s = (r = e.value) == null ? void 0 : r.$el) != null ? s : e.value)
      : (n = e),
    n
  );
}
function cl(e, t) {
  if (e === t) return !0;
  for (let n = 0; n < e.length; n++) if (!Object.is(e[n], t[n])) return !1;
  return !0;
}
const nw = (e) => (n, r, s) => {
    const o = C(!1),
      a = C([]),
      i = C([]),
      l = C();
    e(() => {
      var f;
      const u = (Array.isArray(s) ? s : [s]).map((d) => Ee(d));
      if (!o.value) {
        (o.value = !0), (a.value = u), (i.value = r), (l.value = n());
        return;
      }
      (u.length !== a.value.length || !cl(u, a.value) || !cl(r, i.value)) &&
        ((f = l.value) == null || f.call(l),
        (a.value = u),
        (i.value = r),
        (l.value = n()));
    }),
      Je(() => {
        var c;
        (c = l.value) == null || c.call(l), (o.value = !1);
      });
  },
  cn = nw(Se),
  MC = (e, t, n = {}) => {
    const r = C(n);
    cn(
      () => {
        const s = Ee(t);
        if (!(s != null && s.addEventListener)) return;
        const o = (i) => {
            var l, c, u;
            (c = (l = r.value).onDragStart) == null || c.call(l, i),
              (u = i.dataTransfer) == null ||
                u.setData("custom", JSON.stringify(e));
          },
          a = (i) => {
            var l, c;
            (c = (l = r.value).onDragEnd) == null || c.call(l, i);
          };
        return (
          s.setAttribute(
            "draggable",
            `${
              (n == null ? void 0 : n.draggable) !== void 0
                ? n == null
                  ? void 0
                  : n.draggable
                : !0
            }`
          ),
          s.addEventListener("dragstart", o),
          s.addEventListener("dragend", a),
          () => {
            s.removeEventListener("dragstart", o),
              s.removeEventListener("dragend", a);
          }
        );
      },
      [],
      t
    );
  },
  FC = (e, t = {}) => {
    const n = C(t),
      r = C();
    cn(
      () => {
        const s = Ee(e);
        if (!(s != null && s.addEventListener)) return;
        const o = (f, d) => {
            const p = f.getData("text/uri-list"),
              g = f.getData("custom");
            if (g && n.value.onDom) {
              let y = g;
              try {
                y = JSON.parse(g);
              } catch {
                y = g;
              }
              n.value.onDom(y, d);
              return;
            }
            if (p && n.value.onUri) {
              n.value.onUri(p, d);
              return;
            }
            if (f.files && f.files.length && n.value.onFiles) {
              n.value.onFiles(Array.from(f.files), d);
              return;
            }
            f.items &&
              f.items.length &&
              n.value.onText &&
              f.items[0].getAsString((y) => {
                n.value.onText(y, d);
              });
          },
          a = (f) => {
            var d, p;
            f.preventDefault(),
              f.stopPropagation(),
              (r.value = f.target),
              (p = (d = n.value).onDragEnter) == null || p.call(d, f);
          },
          i = (f) => {
            var d, p;
            f.preventDefault(),
              (p = (d = n.value).onDragOver) == null || p.call(d, f);
          },
          l = (f) => {
            var d, p;
            f.target === r.value &&
              ((p = (d = n.value).onDragLeave) == null || p.call(d, f));
          },
          c = (f) => {
            var d, p;
            f.preventDefault(),
              o(f.dataTransfer, f),
              (p = (d = n.value).onDrop) == null || p.call(d, f);
          },
          u = (f) => {
            var d, p;
            o(f.clipboardData, f),
              (p = (d = n.value).onPaste) == null || p.call(d, f);
          };
        return (
          s.addEventListener("dragenter", a),
          s.addEventListener("dragover", i),
          s.addEventListener("dragleave", l),
          s.addEventListener("drop", c),
          s.addEventListener("paste", u),
          () => {
            s.removeEventListener("dragenter", a),
              s.removeEventListener("dragover", i),
              s.removeEventListener("dragleave", l),
              s.removeEventListener("drop", c),
              s.removeEventListener("paste", u);
          }
        );
      },
      [],
      e
    );
  };
function ul(e) {
  return typeof e == "function";
}
function rw(e) {
  function t(n, r) {
    let s;
    try {
      s = e();
    } catch (u) {
      console.error(u);
    }
    const o = (u) =>
        r != null && r.serializer
          ? r == null
            ? void 0
            : r.serializer(u)
          : JSON.stringify(u),
      a = (u) =>
        r != null && r.deserializer
          ? r == null
            ? void 0
            : r.deserializer(u)
          : JSON.parse(u);
    function i() {
      try {
        const u = s == null ? void 0 : s.getItem(w(n));
        if (u) return a(u);
      } catch (u) {
        console.error(u);
      }
      return ul(r == null ? void 0 : r.defaultValue)
        ? r == null
          ? void 0
          : r.defaultValue()
        : r == null
        ? void 0
        : r.defaultValue;
    }
    const l = C(i());
    Se(() => {
      n && (l.value = i());
    });
    const c = (u) => {
      if (typeof u == "undefined")
        (l.value = void 0), s == null || s.removeItem(w(n));
      else if (ul(u)) {
        const f = u(l.value);
        try {
          (l.value = f), s == null || s.setItem(w(n), o(f));
        } catch (d) {
          console.error(d);
        }
      } else
        try {
          (l.value = u), s == null || s.setItem(w(n), o(u));
        } catch (f) {
          console.error(f);
        }
    };
    return [Le(l), c];
  }
  return t;
}
const Qu = rw(() => (Ia ? localStorage : void 0));
function sw(e, t, n) {
  const r = e.map((i) => window.matchMedia(i)),
    s = () => {
      const i = r.findIndex((l) => l.matches);
      return typeof t[i] != "undefined" ? t[i] : n;
    },
    o = C(s()),
    a = () => {
      o.value = s();
    };
  return (
    Se((i) => {
      r.forEach((l) => {
        l.addListener(a);
      }),
        i(() => {
          r.forEach((l) => l.removeListener(a));
        });
    }),
    o
  );
}
function RC() {
  const [e, t] = Qu("dark-mode-enabled"),
    n = ow(),
    r = re(() => (typeof e.value != "undefined" ? e.value : n.value));
  return (
    Se(() => {
      const s = "[vue-hooks-plus]-dark-mode",
        o = window.document.body;
      r.value ? o.classList.add(s) : o.classList.remove(s);
    }),
    [r, t]
  );
}
function ow() {
  return sw(["(prefers-color-scheme: dark)"], [!0], !1);
}
const Jn = {},
  aw = (e, t = {}) => {
    const n = document.querySelector(`script[src="${e}"]`);
    if (!n) {
      const r = document.createElement("script");
      return (
        (r.src = e),
        Object.keys(t).forEach((s) => {
          r[s] = t[s];
        }),
        r.setAttribute("data-status", "loading"),
        document.body.appendChild(r),
        { ref: r, status: "loading" }
      );
    }
    return { ref: n, status: n.getAttribute("data-status") || "ready" };
  },
  iw = (e, t = {}) => {
    const n = document.querySelector(`link[href="${e}"]`);
    if (!n) {
      const r = document.createElement("link");
      return (
        (r.rel = "stylesheet"),
        (r.href = e),
        Object.keys(t).forEach((o) => {
          r[o] = t[o];
        }),
        "hideFocus" in r &&
          r.relList &&
          ((r.rel = "preload"), (r.as = "style")),
        r.setAttribute("data-status", "loading"),
        document.head.appendChild(r),
        { ref: r, status: "loading" }
      );
    }
    return { ref: n, status: n.getAttribute("data-status") || "ready" };
  };
function NC(e, t) {
  const n = C(e ? "loading" : "unset"),
    r = C(),
    s = re(() => w(e));
  return (
    Se((o) => {
      var l, c, u, f;
      if (!s.value) {
        n.value = "unset";
        return;
      }
      const a =
        (c = (l = s.value) == null ? void 0 : l.replace(/[|#].*$/, "")) != null
          ? c
          : "";
      if (
        (t == null ? void 0 : t.type) === "css" ||
        (!(t != null && t.type) && /(^css!|\.css$)/.test(a))
      ) {
        const d = iw(
          (u = s.value) != null ? u : "",
          t == null ? void 0 : t.css
        );
        (r.value = d.ref), (n.value = d.status);
      } else if (
        (t == null ? void 0 : t.type) === "js" ||
        (!(t != null && t.type) && /(^js!|\.js$)/.test(a))
      ) {
        const d = aw((f = s.value) != null ? f : "", t == null ? void 0 : t.js);
        (r.value = d.ref), (n.value = d.status);
      } else
        console.error(
          "Cannot infer the type of external resource, and please provide a type ('js' | 'css'). Refer to the https://ahooks.js.org/hooks/dom/use-external/#options"
        );
      if (!r.value) return;
      s.value && Jn[s.value] === void 0
        ? (Jn[s.value] = 1)
        : s.value && (Jn[s.value] += 1);
      const i = (d) => {
        var g;
        const p = d.type === "load" ? "ready" : "error";
        (g = r.value) == null || g.setAttribute("data-status", p),
          (n.value = p);
      };
      r.value.addEventListener("load", i),
        r.value.addEventListener("error", i),
        o(() => {
          var d, p, g;
          (d = r.value) == null || d.removeEventListener("load", i),
            (p = r.value) == null || p.removeEventListener("error", i),
            s.value && (Jn[s.value] -= 1),
            s.value &&
              Jn[s.value] === 0 &&
              ((g = r.value) == null || g.remove()),
            (r.value = void 0);
        });
    }),
    Le(n)
  );
}
function jt(e, t, n = {}) {
  const r = C(t);
  cn(
    () => {
      const s = Ee(n.target, window);
      if (!(s != null && s.addEventListener)) return;
      const o = (a) => r.value(a);
      return (
        s.addEventListener(e, o, {
          capture: n.capture,
          once: n.once,
          passive: n.passive,
        }),
        () => {
          s.removeEventListener(e, o, { capture: n.capture });
        }
      );
    },
    [e, n.capture, n.once, n.passive],
    n.target
  );
}
function lw() {
  (this.__data__ = []), (this.size = 0);
}
var cw = lw;
function uw(e, t) {
  return e === t || (e !== e && t !== t);
}
var Ar = uw,
  fw = Ar;
function dw(e, t) {
  for (var n = e.length; n--; ) if (fw(e[n][0], t)) return n;
  return -1;
}
var qs = dw,
  pw = qs,
  hw = Array.prototype,
  vw = hw.splice;
function _w(e) {
  var t = this.__data__,
    n = pw(t, e);
  if (n < 0) return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : vw.call(t, n, 1), --this.size, !0;
}
var mw = _w,
  gw = qs;
function yw(e) {
  var t = this.__data__,
    n = gw(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var bw = yw,
  $w = qs;
function ww(e) {
  return $w(this.__data__, e) > -1;
}
var Sw = ww,
  xw = qs;
function Pw(e, t) {
  var n = this.__data__,
    r = xw(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
}
var Ew = Pw,
  kw = cw,
  Tw = mw,
  Aw = bw,
  Cw = Sw,
  Ow = Ew;
function Bn(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Bn.prototype.clear = kw;
Bn.prototype.delete = Tw;
Bn.prototype.get = Aw;
Bn.prototype.has = Cw;
Bn.prototype.set = Ow;
var Ws = Bn,
  Lw = Ws;
function Iw() {
  (this.__data__ = new Lw()), (this.size = 0);
}
var Mw = Iw;
function Fw(e) {
  var t = this.__data__,
    n = t.delete(e);
  return (this.size = t.size), n;
}
var Rw = Fw;
function Nw(e) {
  return this.__data__.get(e);
}
var Vw = Nw;
function Dw(e) {
  return this.__data__.has(e);
}
var Bw = Dw,
  jw = Dn,
  Hw = ct,
  Uw = "[object AsyncFunction]",
  zw = "[object Function]",
  qw = "[object GeneratorFunction]",
  Ww = "[object Proxy]";
function Gw(e) {
  if (!Hw(e)) return !1;
  var t = jw(e);
  return t == zw || t == qw || t == Uw || t == Ww;
}
var Ma = Gw,
  Kw = ut,
  Yw = Kw["__core-js_shared__"],
  Jw = Yw,
  po = Jw,
  fl = (function () {
    var e = /[^.]+$/.exec((po && po.keys && po.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function Xw(e) {
  return !!fl && fl in e;
}
var Qw = Xw,
  Zw = Function.prototype,
  e3 = Zw.toString;
function t3(e) {
  if (e != null) {
    try {
      return e3.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var Zu = t3,
  n3 = Ma,
  r3 = Qw,
  s3 = ct,
  o3 = Zu,
  a3 = /[\\^$.*+?()[\]{}|]/g,
  i3 = /^\[object .+?Constructor\]$/,
  l3 = Function.prototype,
  c3 = Object.prototype,
  u3 = l3.toString,
  f3 = c3.hasOwnProperty,
  d3 = RegExp(
    "^" +
      u3
        .call(f3)
        .replace(a3, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function p3(e) {
  if (!s3(e) || r3(e)) return !1;
  var t = n3(e) ? d3 : i3;
  return t.test(o3(e));
}
var h3 = p3;
function v3(e, t) {
  return e == null ? void 0 : e[t];
}
var _3 = v3,
  m3 = h3,
  g3 = _3;
function y3(e, t) {
  var n = g3(e, t);
  return m3(n) ? n : void 0;
}
var un = y3,
  b3 = un,
  $3 = ut,
  w3 = b3($3, "Map"),
  Fa = w3,
  S3 = un,
  x3 = S3(Object, "create"),
  Gs = x3,
  dl = Gs;
function P3() {
  (this.__data__ = dl ? dl(null) : {}), (this.size = 0);
}
var E3 = P3;
function k3(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var T3 = k3,
  A3 = Gs,
  C3 = "__lodash_hash_undefined__",
  O3 = Object.prototype,
  L3 = O3.hasOwnProperty;
function I3(e) {
  var t = this.__data__;
  if (A3) {
    var n = t[e];
    return n === C3 ? void 0 : n;
  }
  return L3.call(t, e) ? t[e] : void 0;
}
var M3 = I3,
  F3 = Gs,
  R3 = Object.prototype,
  N3 = R3.hasOwnProperty;
function V3(e) {
  var t = this.__data__;
  return F3 ? t[e] !== void 0 : N3.call(t, e);
}
var D3 = V3,
  B3 = Gs,
  j3 = "__lodash_hash_undefined__";
function H3(e, t) {
  var n = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (n[e] = B3 && t === void 0 ? j3 : t),
    this
  );
}
var U3 = H3,
  z3 = E3,
  q3 = T3,
  W3 = M3,
  G3 = D3,
  K3 = U3;
function jn(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
jn.prototype.clear = z3;
jn.prototype.delete = q3;
jn.prototype.get = W3;
jn.prototype.has = G3;
jn.prototype.set = K3;
var Y3 = jn,
  pl = Y3,
  J3 = Ws,
  X3 = Fa;
function Q3() {
  (this.size = 0),
    (this.__data__ = {
      hash: new pl(),
      map: new (X3 || J3)(),
      string: new pl(),
    });
}
var Z3 = Q3;
function e4(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
var t4 = e4,
  n4 = t4;
function r4(e, t) {
  var n = e.__data__;
  return n4(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var Ks = r4,
  s4 = Ks;
function o4(e) {
  var t = s4(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var a4 = o4,
  i4 = Ks;
function l4(e) {
  return i4(this, e).get(e);
}
var c4 = l4,
  u4 = Ks;
function f4(e) {
  return u4(this, e).has(e);
}
var d4 = f4,
  p4 = Ks;
function h4(e, t) {
  var n = p4(this, e),
    r = n.size;
  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
}
var v4 = h4,
  _4 = Z3,
  m4 = a4,
  g4 = c4,
  y4 = d4,
  b4 = v4;
function Hn(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Hn.prototype.clear = _4;
Hn.prototype.delete = m4;
Hn.prototype.get = g4;
Hn.prototype.has = y4;
Hn.prototype.set = b4;
var ef = Hn,
  $4 = Ws,
  w4 = Fa,
  S4 = ef,
  x4 = 200;
function P4(e, t) {
  var n = this.__data__;
  if (n instanceof $4) {
    var r = n.__data__;
    if (!w4 || r.length < x4 - 1)
      return r.push([e, t]), (this.size = ++n.size), this;
    n = this.__data__ = new S4(r);
  }
  return n.set(e, t), (this.size = n.size), this;
}
var E4 = P4,
  k4 = Ws,
  T4 = Mw,
  A4 = Rw,
  C4 = Vw,
  O4 = Bw,
  L4 = E4;
function Un(e) {
  var t = (this.__data__ = new k4(e));
  this.size = t.size;
}
Un.prototype.clear = T4;
Un.prototype.delete = A4;
Un.prototype.get = C4;
Un.prototype.has = O4;
Un.prototype.set = L4;
var Ra = Un;
function I4(e, t) {
  for (
    var n = -1, r = e == null ? 0 : e.length;
    ++n < r && t(e[n], n, e) !== !1;

  );
  return e;
}
var M4 = I4,
  F4 = un,
  R4 = (function () {
    try {
      var e = F4(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })(),
  tf = R4,
  hl = tf;
function N4(e, t, n) {
  t == "__proto__" && hl
    ? hl(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
    : (e[t] = n);
}
var Na = N4,
  V4 = Na,
  D4 = Ar,
  B4 = Object.prototype,
  j4 = B4.hasOwnProperty;
function H4(e, t, n) {
  var r = e[t];
  (!(j4.call(e, t) && D4(r, n)) || (n === void 0 && !(t in e))) && V4(e, t, n);
}
var nf = H4,
  U4 = nf,
  z4 = Na;
function q4(e, t, n, r) {
  var s = !n;
  n || (n = {});
  for (var o = -1, a = t.length; ++o < a; ) {
    var i = t[o],
      l = r ? r(n[i], e[i], i, n, e) : void 0;
    l === void 0 && (l = e[i]), s ? z4(n, i, l) : U4(n, i, l);
  }
  return n;
}
var Cr = q4;
function W4(e, t) {
  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
  return r;
}
var G4 = W4,
  K4 = Dn,
  Y4 = Et,
  J4 = "[object Arguments]";
function X4(e) {
  return Y4(e) && K4(e) == J4;
}
var Q4 = X4,
  vl = Q4,
  Z4 = Et,
  rf = Object.prototype,
  eS = rf.hasOwnProperty,
  tS = rf.propertyIsEnumerable,
  nS = vl(
    (function () {
      return arguments;
    })()
  )
    ? vl
    : function (e) {
        return Z4(e) && eS.call(e, "callee") && !tS.call(e, "callee");
      },
  sf = nS,
  rS = Array.isArray,
  Or = rS,
  On = { exports: {} };
function sS() {
  return !1;
}
var oS = sS;
(function (e, t) {
  var n = ut,
    r = oS,
    s = t && !t.nodeType && t,
    o = s && !0 && e && !e.nodeType && e,
    a = o && o.exports === s,
    i = a ? n.Buffer : void 0,
    l = i ? i.isBuffer : void 0,
    c = l || r;
  e.exports = c;
})(On, On.exports);
var aS = 9007199254740991,
  iS = /^(?:0|[1-9]\d*)$/;
function lS(e, t) {
  var n = typeof e;
  return (
    (t = t == null ? aS : t),
    !!t &&
      (n == "number" || (n != "symbol" && iS.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var of = lS,
  cS = 9007199254740991;
function uS(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= cS;
}
var af = uS,
  fS = Dn,
  dS = af,
  pS = Et,
  hS = "[object Arguments]",
  vS = "[object Array]",
  _S = "[object Boolean]",
  mS = "[object Date]",
  gS = "[object Error]",
  yS = "[object Function]",
  bS = "[object Map]",
  $S = "[object Number]",
  wS = "[object Object]",
  SS = "[object RegExp]",
  xS = "[object Set]",
  PS = "[object String]",
  ES = "[object WeakMap]",
  kS = "[object ArrayBuffer]",
  TS = "[object DataView]",
  AS = "[object Float32Array]",
  CS = "[object Float64Array]",
  OS = "[object Int8Array]",
  LS = "[object Int16Array]",
  IS = "[object Int32Array]",
  MS = "[object Uint8Array]",
  FS = "[object Uint8ClampedArray]",
  RS = "[object Uint16Array]",
  NS = "[object Uint32Array]",
  be = {};
be[AS] =
  be[CS] =
  be[OS] =
  be[LS] =
  be[IS] =
  be[MS] =
  be[FS] =
  be[RS] =
  be[NS] =
    !0;
be[hS] =
  be[vS] =
  be[kS] =
  be[_S] =
  be[TS] =
  be[mS] =
  be[gS] =
  be[yS] =
  be[bS] =
  be[$S] =
  be[wS] =
  be[SS] =
  be[xS] =
  be[PS] =
  be[ES] =
    !1;
function VS(e) {
  return pS(e) && dS(e.length) && !!be[fS(e)];
}
var DS = VS;
function BS(e) {
  return function (t) {
    return e(t);
  };
}
var Va = BS,
  $r = { exports: {} };
(function (e, t) {
  var n = Wu,
    r = t && !t.nodeType && t,
    s = r && !0 && e && !e.nodeType && e,
    o = s && s.exports === r,
    a = o && n.process,
    i = (function () {
      try {
        var l = s && s.require && s.require("util").types;
        return l || (a && a.binding && a.binding("util"));
      } catch {}
    })();
  e.exports = i;
})($r, $r.exports);
var jS = DS,
  HS = Va,
  _l = $r.exports,
  ml = _l && _l.isTypedArray,
  US = ml ? HS(ml) : jS,
  Da = US,
  zS = G4,
  qS = sf,
  WS = Or,
  GS = On.exports,
  KS = of,
  YS = Da,
  JS = Object.prototype,
  XS = JS.hasOwnProperty;
function QS(e, t) {
  var n = WS(e),
    r = !n && qS(e),
    s = !n && !r && GS(e),
    o = !n && !r && !s && YS(e),
    a = n || r || s || o,
    i = a ? zS(e.length, String) : [],
    l = i.length;
  for (var c in e)
    (t || XS.call(e, c)) &&
      !(
        a &&
        (c == "length" ||
          (s && (c == "offset" || c == "parent")) ||
          (o && (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
          KS(c, l))
      ) &&
      i.push(c);
  return i;
}
var lf = QS,
  ZS = Object.prototype;
function e6(e) {
  var t = e && e.constructor,
    n = (typeof t == "function" && t.prototype) || ZS;
  return e === n;
}
var Ba = e6;
function t6(e, t) {
  return function (n) {
    return e(t(n));
  };
}
var cf = t6,
  n6 = cf,
  r6 = n6(Object.keys, Object),
  s6 = r6,
  o6 = Ba,
  a6 = s6,
  i6 = Object.prototype,
  l6 = i6.hasOwnProperty;
function c6(e) {
  if (!o6(e)) return a6(e);
  var t = [];
  for (var n in Object(e)) l6.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var u6 = c6,
  f6 = Ma,
  d6 = af;
function p6(e) {
  return e != null && d6(e.length) && !f6(e);
}
var Ys = p6,
  h6 = lf,
  v6 = u6,
  _6 = Ys;
function m6(e) {
  return _6(e) ? h6(e) : v6(e);
}
var ja = m6,
  g6 = Cr,
  y6 = ja;
function b6(e, t) {
  return e && g6(t, y6(t), e);
}
var $6 = b6;
function w6(e) {
  var t = [];
  if (e != null) for (var n in Object(e)) t.push(n);
  return t;
}
var S6 = w6,
  x6 = ct,
  P6 = Ba,
  E6 = S6,
  k6 = Object.prototype,
  T6 = k6.hasOwnProperty;
function A6(e) {
  if (!x6(e)) return E6(e);
  var t = P6(e),
    n = [];
  for (var r in e) (r == "constructor" && (t || !T6.call(e, r))) || n.push(r);
  return n;
}
var C6 = A6,
  O6 = lf,
  L6 = C6,
  I6 = Ys;
function M6(e) {
  return I6(e) ? O6(e, !0) : L6(e);
}
var Lr = M6,
  F6 = Cr,
  R6 = Lr;
function N6(e, t) {
  return e && F6(t, R6(t), e);
}
var V6 = N6,
  vs = { exports: {} };
(function (e, t) {
  var n = ut,
    r = t && !t.nodeType && t,
    s = r && !0 && e && !e.nodeType && e,
    o = s && s.exports === r,
    a = o ? n.Buffer : void 0,
    i = a ? a.allocUnsafe : void 0;
  function l(c, u) {
    if (u) return c.slice();
    var f = c.length,
      d = i ? i(f) : new c.constructor(f);
    return c.copy(d), d;
  }
  e.exports = l;
})(vs, vs.exports);
function D6(e, t) {
  var n = -1,
    r = e.length;
  for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
  return t;
}
var uf = D6;
function B6(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = 0, o = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (o[s++] = a);
  }
  return o;
}
var j6 = B6;
function H6() {
  return [];
}
var ff = H6,
  U6 = j6,
  z6 = ff,
  q6 = Object.prototype,
  W6 = q6.propertyIsEnumerable,
  gl = Object.getOwnPropertySymbols,
  G6 = gl
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            U6(gl(e), function (t) {
              return W6.call(e, t);
            }));
      }
    : z6,
  Ha = G6,
  K6 = Cr,
  Y6 = Ha;
function J6(e, t) {
  return K6(e, Y6(e), t);
}
var X6 = J6;
function Q6(e, t) {
  for (var n = -1, r = t.length, s = e.length; ++n < r; ) e[s + n] = t[n];
  return e;
}
var df = Q6,
  Z6 = cf,
  ex = Z6(Object.getPrototypeOf, Object),
  Ua = ex,
  tx = df,
  nx = Ua,
  rx = Ha,
  sx = ff,
  ox = Object.getOwnPropertySymbols,
  ax = ox
    ? function (e) {
        for (var t = []; e; ) tx(t, rx(e)), (e = nx(e));
        return t;
      }
    : sx,
  pf = ax,
  ix = Cr,
  lx = pf;
function cx(e, t) {
  return ix(e, lx(e), t);
}
var ux = cx,
  fx = df,
  dx = Or;
function px(e, t, n) {
  var r = t(e);
  return dx(e) ? r : fx(r, n(e));
}
var hf = px,
  hx = hf,
  vx = Ha,
  _x = ja;
function mx(e) {
  return hx(e, _x, vx);
}
var vf = mx,
  gx = hf,
  yx = pf,
  bx = Lr;
function $x(e) {
  return gx(e, bx, yx);
}
var wx = $x,
  Sx = un,
  xx = ut,
  Px = Sx(xx, "DataView"),
  Ex = Px,
  kx = un,
  Tx = ut,
  Ax = kx(Tx, "Promise"),
  Cx = Ax,
  Ox = un,
  Lx = ut,
  Ix = Ox(Lx, "Set"),
  Mx = Ix,
  Fx = un,
  Rx = ut,
  Nx = Fx(Rx, "WeakMap"),
  Vx = Nx,
  Wo = Ex,
  Go = Fa,
  Ko = Cx,
  Yo = Mx,
  Jo = Vx,
  _f = Dn,
  zn = Zu,
  yl = "[object Map]",
  Dx = "[object Object]",
  bl = "[object Promise]",
  $l = "[object Set]",
  wl = "[object WeakMap]",
  Sl = "[object DataView]",
  Bx = zn(Wo),
  jx = zn(Go),
  Hx = zn(Ko),
  Ux = zn(Yo),
  zx = zn(Jo),
  Kt = _f;
((Wo && Kt(new Wo(new ArrayBuffer(1))) != Sl) ||
  (Go && Kt(new Go()) != yl) ||
  (Ko && Kt(Ko.resolve()) != bl) ||
  (Yo && Kt(new Yo()) != $l) ||
  (Jo && Kt(new Jo()) != wl)) &&
  (Kt = function (e) {
    var t = _f(e),
      n = t == Dx ? e.constructor : void 0,
      r = n ? zn(n) : "";
    if (r)
      switch (r) {
        case Bx:
          return Sl;
        case jx:
          return yl;
        case Hx:
          return bl;
        case Ux:
          return $l;
        case zx:
          return wl;
      }
    return t;
  });
var Js = Kt,
  qx = Object.prototype,
  Wx = qx.hasOwnProperty;
function Gx(e) {
  var t = e.length,
    n = new e.constructor(t);
  return (
    t &&
      typeof e[0] == "string" &&
      Wx.call(e, "index") &&
      ((n.index = e.index), (n.input = e.input)),
    n
  );
}
var Kx = Gx,
  Yx = ut,
  Jx = Yx.Uint8Array,
  mf = Jx,
  xl = mf;
function Xx(e) {
  var t = new e.constructor(e.byteLength);
  return new xl(t).set(new xl(e)), t;
}
var za = Xx,
  Qx = za;
function Zx(e, t) {
  var n = t ? Qx(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var e5 = Zx,
  t5 = /\w*$/;
function n5(e) {
  var t = new e.constructor(e.source, t5.exec(e));
  return (t.lastIndex = e.lastIndex), t;
}
var r5 = n5,
  Pl = zs,
  El = Pl ? Pl.prototype : void 0,
  kl = El ? El.valueOf : void 0;
function s5(e) {
  return kl ? Object(kl.call(e)) : {};
}
var o5 = s5,
  a5 = za;
function i5(e, t) {
  var n = t ? a5(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var gf = i5,
  l5 = za,
  c5 = e5,
  u5 = r5,
  f5 = o5,
  d5 = gf,
  p5 = "[object Boolean]",
  h5 = "[object Date]",
  v5 = "[object Map]",
  _5 = "[object Number]",
  m5 = "[object RegExp]",
  g5 = "[object Set]",
  y5 = "[object String]",
  b5 = "[object Symbol]",
  $5 = "[object ArrayBuffer]",
  w5 = "[object DataView]",
  S5 = "[object Float32Array]",
  x5 = "[object Float64Array]",
  P5 = "[object Int8Array]",
  E5 = "[object Int16Array]",
  k5 = "[object Int32Array]",
  T5 = "[object Uint8Array]",
  A5 = "[object Uint8ClampedArray]",
  C5 = "[object Uint16Array]",
  O5 = "[object Uint32Array]";
function L5(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case $5:
      return l5(e);
    case p5:
    case h5:
      return new r(+e);
    case w5:
      return c5(e, n);
    case S5:
    case x5:
    case P5:
    case E5:
    case k5:
    case T5:
    case A5:
    case C5:
    case O5:
      return d5(e, n);
    case v5:
      return new r();
    case _5:
    case y5:
      return new r(e);
    case m5:
      return u5(e);
    case g5:
      return new r();
    case b5:
      return f5(e);
  }
}
var I5 = L5,
  M5 = ct,
  Tl = Object.create,
  F5 = (function () {
    function e() {}
    return function (t) {
      if (!M5(t)) return {};
      if (Tl) return Tl(t);
      e.prototype = t;
      var n = new e();
      return (e.prototype = void 0), n;
    };
  })(),
  R5 = F5,
  N5 = R5,
  V5 = Ua,
  D5 = Ba;
function B5(e) {
  return typeof e.constructor == "function" && !D5(e) ? N5(V5(e)) : {};
}
var yf = B5,
  j5 = Js,
  H5 = Et,
  U5 = "[object Map]";
function z5(e) {
  return H5(e) && j5(e) == U5;
}
var q5 = z5,
  W5 = q5,
  G5 = Va,
  Al = $r.exports,
  Cl = Al && Al.isMap,
  K5 = Cl ? G5(Cl) : W5,
  Y5 = K5,
  J5 = Js,
  X5 = Et,
  Q5 = "[object Set]";
function Z5(e) {
  return X5(e) && J5(e) == Q5;
}
var eP = Z5,
  tP = eP,
  nP = Va,
  Ol = $r.exports,
  Ll = Ol && Ol.isSet,
  rP = Ll ? nP(Ll) : tP,
  sP = rP,
  oP = Ra,
  aP = M4,
  iP = nf,
  lP = $6,
  cP = V6,
  uP = vs.exports,
  fP = uf,
  dP = X6,
  pP = ux,
  hP = vf,
  vP = wx,
  _P = Js,
  mP = Kx,
  gP = I5,
  yP = yf,
  bP = Or,
  $P = On.exports,
  wP = Y5,
  SP = ct,
  xP = sP,
  PP = ja,
  EP = Lr,
  kP = 1,
  TP = 2,
  AP = 4,
  bf = "[object Arguments]",
  CP = "[object Array]",
  OP = "[object Boolean]",
  LP = "[object Date]",
  IP = "[object Error]",
  $f = "[object Function]",
  MP = "[object GeneratorFunction]",
  FP = "[object Map]",
  RP = "[object Number]",
  wf = "[object Object]",
  NP = "[object RegExp]",
  VP = "[object Set]",
  DP = "[object String]",
  BP = "[object Symbol]",
  jP = "[object WeakMap]",
  HP = "[object ArrayBuffer]",
  UP = "[object DataView]",
  zP = "[object Float32Array]",
  qP = "[object Float64Array]",
  WP = "[object Int8Array]",
  GP = "[object Int16Array]",
  KP = "[object Int32Array]",
  YP = "[object Uint8Array]",
  JP = "[object Uint8ClampedArray]",
  XP = "[object Uint16Array]",
  QP = "[object Uint32Array]",
  ye = {};
ye[bf] =
  ye[CP] =
  ye[HP] =
  ye[UP] =
  ye[OP] =
  ye[LP] =
  ye[zP] =
  ye[qP] =
  ye[WP] =
  ye[GP] =
  ye[KP] =
  ye[FP] =
  ye[RP] =
  ye[wf] =
  ye[NP] =
  ye[VP] =
  ye[DP] =
  ye[BP] =
  ye[YP] =
  ye[JP] =
  ye[XP] =
  ye[QP] =
    !0;
ye[IP] = ye[$f] = ye[jP] = !1;
function ts(e, t, n, r, s, o) {
  var a,
    i = t & kP,
    l = t & TP,
    c = t & AP;
  if ((n && (a = s ? n(e, r, s, o) : n(e)), a !== void 0)) return a;
  if (!SP(e)) return e;
  var u = bP(e);
  if (u) {
    if (((a = mP(e)), !i)) return fP(e, a);
  } else {
    var f = _P(e),
      d = f == $f || f == MP;
    if ($P(e)) return uP(e, i);
    if (f == wf || f == bf || (d && !s)) {
      if (((a = l || d ? {} : yP(e)), !i))
        return l ? pP(e, cP(a, e)) : dP(e, lP(a, e));
    } else {
      if (!ye[f]) return s ? e : {};
      a = gP(e, f, i);
    }
  }
  o || (o = new oP());
  var p = o.get(e);
  if (p) return p;
  o.set(e, a),
    xP(e)
      ? e.forEach(function (P) {
          a.add(ts(P, t, n, P, e, o));
        })
      : wP(e) &&
        e.forEach(function (P, v) {
          a.set(v, ts(P, t, n, v, e, o));
        });
  var g = c ? (l ? vP : hP) : l ? EP : PP,
    y = u ? void 0 : g(e);
  return (
    aP(y || e, function (P, v) {
      y && ((v = P), (P = e[v])), iP(a, v, ts(P, t, n, v, e, o));
    }),
    a
  );
}
var ZP = ts,
  e8 = ZP,
  t8 = 1,
  n8 = 4;
function r8(e) {
  return e8(e, t8 | n8);
}
var Il = r8;
class Sf {
  constructor() {
    Xe(this, "subscriptions", new Map());
    Xe(this, "emitEffectCache", new Map());
    Xe(this, "useSubscription", (t, n) => {
      const r = C();
      Se((s) => {
        var i, l;
        r.value = n;
        function o(c) {
          r.value && r.value(c);
        }
        const a =
          (l = (i = this.subscriptions) == null ? void 0 : i.get(t)) != null
            ? l
            : [];
        a.push(o),
          this.subscriptions.set(t, a),
          this.emitEffect(t),
          s(() => {
            this.subscriptions.delete(t);
          });
      });
    });
    Xe(this, "emit", (t, ...n) => {
      if (typeof t == "string" || typeof t == "number") {
        const r = this.subscriptions.get(t);
        r == null ||
          r.forEach((s) => {
            s == null || s({ params: Il(n), event: t });
          }),
          this.emitEffectCache.set(t, { params: Il(n), event: t });
      } else throw new TypeError("event must be string or number !");
    });
    Xe(this, "emitEffect", (t) => {
      const n = this.emitEffectCache.get(t),
        r = this.subscriptions.get(t);
      n &&
        (r == null ||
          r.forEach((s) => {
            s == null || s({ ...n });
          }));
    });
    Xe(this, "removeListener", (t) => {
      this.subscriptions.delete(t);
    });
    Xe(this, "clear", () => {
      this.subscriptions.clear();
    });
    this.clear();
  }
}
const s8 = new Sf();
function VC(e) {
  const t = C(),
    n = re(() => (e != null ? e : { global: !1 }));
  return (
    t.value ||
      (t.value = n.value.global ? (t.value = s8) : (t.value = new Sf())),
    Se((r) => {
      r(() => {
        var s;
        return (s = t.value) == null ? void 0 : s.clear();
      });
    }),
    t.value
  );
}
const o8 = {
  SVG: "image/svg+xml",
  ICO: "image/x-icon",
  GIF: "image/gif",
  PNG: "image/png",
};
function DC(e) {
  const t = re(() => w(e));
  Se(() => {
    var o;
    if (!t.value) return;
    const n = (o = t.value) == null ? void 0 : o.split("."),
      r = n[n.length - 1].toLocaleUpperCase(),
      s =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
    (s.type = o8[r]),
      (s.href = t.value),
      (s.rel = "shortcut icon"),
      document.getElementsByTagName("head")[0].appendChild(s);
  });
}
function BC(e, t) {
  const [n, { set: r }] = La(!1),
    { onFocus: s, onBlur: o, onChange: a } = t || {};
  return (
    jt(
      "focusin",
      (i) => {
        n.value || (s == null || s(i), a == null || a(!0), r(!0));
      },
      { target: e }
    ),
    jt(
      "focusout",
      (i) => {
        var l, c;
        n.value &&
          !(
            (c = (l = i.currentTarget) == null ? void 0 : l.contains) != null &&
            c.call(l, i.relatedTarget)
          ) &&
          (o == null || o(i), a == null || a(!1), r(!1));
      },
      { target: e }
    ),
    n
  );
}
function jC(e, t) {
  return re(() => t(w(e)));
}
function a8(e) {
  Fh(
    q({
      setup() {
        return e(), () => {};
      },
    })
  ).mount(document.createElement("div"));
}
const ho = "VUE_HOOKS_PLUS_USE_REQUEST_DEFAULT_KEY";
function i8(e) {
  return typeof e == "string" || typeof e == "number";
}
function HC(e, t, n) {
  const r = C(n == null ? void 0 : n.fetchKey),
    s = C({}),
    o = C({}),
    a = (l) => {
      o.value = l;
    };
  return {
    fetchs: o,
    fetchRun: (...l) => {
      var f, d;
      const c = C(),
        u =
          (d = (f = r.value) == null ? void 0 : f.call(r, ...l)) != null
            ? d
            : ho;
      (c.value = u),
        a8(() => {
          const {
            data: p,
            run: g,
            params: y,
            loading: P,
          } = Ju(e, { ...t, cacheKey: u, manual: !0 });
          Se(() => {
            (s.value[u] = {
              key: u,
              data: p == null ? void 0 : p.value,
              params: y.value,
              loading: P.value,
            }),
              a(s.value);
          }),
            g(...l),
            Pe([p, y, P, c], (v) => {
              const [$ = void 0, I = void 0, T = !1, k = ho] = v,
                R = i8(k) ? k : ho;
              (s.value[R] = { key: R, data: $, params: I, loading: T }),
                a(s.value);
            });
        });
    },
  };
}
var xf = { exports: {} };
/*!
 * screenfull
 * v5.2.0 - 2021-11-03
 * (c) Sindre Sorhus; MIT License
 */ (function (e) {
  (function () {
    var t =
        typeof window != "undefined" && typeof window.document != "undefined"
          ? window.document
          : {},
      n = e.exports,
      r = (function () {
        for (
          var a,
            i = [
              [
                "requestFullscreen",
                "exitFullscreen",
                "fullscreenElement",
                "fullscreenEnabled",
                "fullscreenchange",
                "fullscreenerror",
              ],
              [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror",
              ],
              [
                "msRequestFullscreen",
                "msExitFullscreen",
                "msFullscreenElement",
                "msFullscreenEnabled",
                "MSFullscreenChange",
                "MSFullscreenError",
              ],
            ],
            l = 0,
            c = i.length,
            u = {};
          l < c;
          l++
        )
          if (((a = i[l]), a && a[1] in t)) {
            for (l = 0; l < a.length; l++) u[i[0][l]] = a[l];
            return u;
          }
        return !1;
      })(),
      s = { change: r.fullscreenchange, error: r.fullscreenerror },
      o = {
        request: function (a, i) {
          return new Promise(
            function (l, c) {
              var u = function () {
                this.off("change", u), l();
              }.bind(this);
              this.on("change", u), (a = a || t.documentElement);
              var f = a[r.requestFullscreen](i);
              f instanceof Promise && f.then(u).catch(c);
            }.bind(this)
          );
        },
        exit: function () {
          return new Promise(
            function (a, i) {
              if (!this.isFullscreen) {
                a();
                return;
              }
              var l = function () {
                this.off("change", l), a();
              }.bind(this);
              this.on("change", l);
              var c = t[r.exitFullscreen]();
              c instanceof Promise && c.then(l).catch(i);
            }.bind(this)
          );
        },
        toggle: function (a, i) {
          return this.isFullscreen ? this.exit() : this.request(a, i);
        },
        onchange: function (a) {
          this.on("change", a);
        },
        onerror: function (a) {
          this.on("error", a);
        },
        on: function (a, i) {
          var l = s[a];
          l && t.addEventListener(l, i, !1);
        },
        off: function (a, i) {
          var l = s[a];
          l && t.removeEventListener(l, i, !1);
        },
        raw: r,
      };
    if (!r) {
      n
        ? (e.exports = { isEnabled: !1 })
        : (window.screenfull = { isEnabled: !1 });
      return;
    }
    Object.defineProperties(o, {
      isFullscreen: {
        get: function () {
          return Boolean(t[r.fullscreenElement]);
        },
      },
      element: {
        enumerable: !0,
        get: function () {
          return t[r.fullscreenElement];
        },
      },
      isEnabled: {
        enumerable: !0,
        get: function () {
          return Boolean(t[r.fullscreenEnabled]);
        },
      },
    }),
      n ? (e.exports = o) : (window.screenfull = o);
  })();
})(xf);
var Ge = xf.exports;
const UC = (e, t) => {
  const {
      onExit: n,
      onEnter: r,
      defaultElement: s = document.documentElement,
    } = t || {},
    o = C(n),
    a = C(r),
    i = C(!1),
    l = (p) => {
      i.value = p;
    },
    c = () => {
      var p, g, y;
      if (Ge.isEnabled) {
        const P = Ee(e, s);
        if (!Ge.element)
          (p = o.value) == null || p.call(o), l(!1), Ge.off("change", c);
        else {
          const v = Ge.element === P;
          v
            ? (g = a.value) == null || g.call(a)
            : (y = o.value) == null || y.call(o),
            l(v);
        }
      }
    },
    u = () => {
      const p = Ee(e, s);
      if (!!p && Ge.isEnabled)
        try {
          Ge.request(p), Ge.on("change", c);
        } catch (g) {
          console.error(g);
        }
    },
    f = () => {
      const p = Ee(e, s);
      Ge.isEnabled && Ge.element === p && Ge.exit();
    },
    d = () => {
      i.value ? f() : u();
    };
  return (
    Je(() => {
      Ge.isEnabled && Ge.off("change", c);
    }),
    [
      Le(i),
      {
        enterFullscreen: u,
        exitFullscreen: f,
        toggleFullscreen: d,
        isEnabled: Ge.isEnabled,
      },
    ]
  );
};
function zC(e, t) {
  const { onEnter: n, onLeave: r, onChange: s } = t || {},
    [o, { setTrue: a, setFalse: i }] = La(!1);
  return (
    jt(
      "mouseenter",
      () => {
        n == null || n(), a(), s == null || s(!0);
      },
      { target: e }
    ),
    jt(
      "mouseleave",
      () => {
        r == null || r(), i(), s == null || s(!1);
      },
      { target: e }
    ),
    o
  );
}
const l8 = (e, t) => !Object.is(e, t);
function qC(e, t = l8) {
  const n = C(),
    r = C();
  return (
    Se(() => {
      t(r.value, e.value) && ((n.value = r.value), (r.value = e.value));
    }),
    Le(n)
  );
}
function WC(e, t, n) {
  const r = n == null ? void 0 : n.immediate,
    s = C(e),
    o = C(null),
    a = () => {
      if (_e(t)) {
        if (typeof t.value != "number" || t.value < 0) return;
      } else if (typeof t != "number" || t < 0) return;
      r && s.value();
      const c = w(t);
      o.value = setInterval(() => {
        s.value();
      }, c);
    },
    i = () => {
      o.value && clearInterval(o.value);
    },
    l = () => {
      i(), a();
    };
  return (
    Se((c) => {
      a(), c(i);
    }),
    { clear: i, restart: l }
  );
}
const c8 = (e) =>
    e === document || e === document.body
      ? Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        )
      : e.scrollTop,
  u8 = (e) =>
    e.scrollHeight ||
    Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
  f8 = (e) =>
    e.clientHeight ||
    Math.max(document.documentElement.clientHeight, document.body.clientHeight),
  GC = (e, t = {}) => {
    const {
        target: n,
        isNoMore: r,
        threshold: s = 100,
        reloadDeps: o = [],
        manual: a,
        onBefore: i,
        onSuccess: l,
        onError: c,
        onFinally: u,
      } = t,
      f = C(),
      [d, { set: p }] = La(),
      g = (B) => {
        f.value = B;
      },
      y = re(() => (r ? r(f.value) : !1)),
      {
        loading: P,
        run: v,
        runAsync: $,
        cancel: I,
      } = Ju(
        async (B) => {
          const K = await e(B);
          return (
            B
              ? (f.value = { ...K, list: [...B.list, ...K.list] })
              : (f.value = K),
            K
          );
        },
        {
          manual: a,
          onFinally: (B, K, V) => {
            p(!1), u == null || u(K, V);
          },
          onBefore: () => (i == null ? void 0 : i()),
          onSuccess: (B) => {
            setTimeout(() => {
              E();
            }),
              l == null || l(B);
          },
          onError: (B) => (c == null ? void 0 : c(B)),
        }
      ),
      T = () => {
        y.value || (p(!0), v(f.value));
      },
      k = () => {
        if (!y.value) return p(!0), $(f.value);
      },
      R = () => v(),
      z = () => $(),
      E = () => {
        const B = Ee(n);
        if (!B) return;
        const K = c8(B),
          V = u8(B),
          Q = f8(B);
        V - K <= Q + s && T();
      };
    jt(
      "scroll",
      () => {
        P.value || d.value || E();
      },
      { target: n }
    ),
      Pe(o, () => {
        v();
      });
    const N = re(() => !d.value && P.value);
    return {
      data: Dc(f),
      loading: Le(N),
      loadingMore: d,
      noMore: y,
      loadMore: T,
      loadMoreAsync: k,
      reload: R,
      reloadAsync: z,
      mutate: g,
      scrollMethod: E,
      cancel: I,
    };
  };
function KC(e, t) {
  const n = C(),
    r = C();
  return (
    cn(
      () => {
        const s = Ee(e);
        if (!s) return;
        const o = new IntersectionObserver(
          (a) => {
            for (const i of a)
              (n.value = i.isIntersecting), (r.value = i.intersectionRatio);
          },
          { ...t, root: Ee(t == null ? void 0 : t.root) }
        );
        return (
          o.observe(s),
          () => {
            o.disconnect();
          }
        );
      },
      [],
      e
    ),
    [Le(n), Le(r)]
  );
}
var d8 = "__lodash_hash_undefined__";
function p8(e) {
  return this.__data__.set(e, d8), this;
}
var h8 = p8;
function v8(e) {
  return this.__data__.has(e);
}
var _8 = v8,
  m8 = ef,
  g8 = h8,
  y8 = _8;
function _s(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.__data__ = new m8(); ++t < n; ) this.add(e[t]);
}
_s.prototype.add = _s.prototype.push = g8;
_s.prototype.has = y8;
var b8 = _s;
function $8(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e)) return !0;
  return !1;
}
var w8 = $8;
function S8(e, t) {
  return e.has(t);
}
var x8 = S8,
  P8 = b8,
  E8 = w8,
  k8 = x8,
  T8 = 1,
  A8 = 2;
function C8(e, t, n, r, s, o) {
  var a = n & T8,
    i = e.length,
    l = t.length;
  if (i != l && !(a && l > i)) return !1;
  var c = o.get(e),
    u = o.get(t);
  if (c && u) return c == t && u == e;
  var f = -1,
    d = !0,
    p = n & A8 ? new P8() : void 0;
  for (o.set(e, t), o.set(t, e); ++f < i; ) {
    var g = e[f],
      y = t[f];
    if (r) var P = a ? r(y, g, f, t, e, o) : r(g, y, f, e, t, o);
    if (P !== void 0) {
      if (P) continue;
      d = !1;
      break;
    }
    if (p) {
      if (
        !E8(t, function (v, $) {
          if (!k8(p, $) && (g === v || s(g, v, n, r, o))) return p.push($);
        })
      ) {
        d = !1;
        break;
      }
    } else if (!(g === y || s(g, y, n, r, o))) {
      d = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), d;
}
var Pf = C8;
function O8(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r, s) {
      n[++t] = [s, r];
    }),
    n
  );
}
var L8 = O8;
function I8(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r) {
      n[++t] = r;
    }),
    n
  );
}
var M8 = I8,
  Ml = zs,
  Fl = mf,
  F8 = Ar,
  R8 = Pf,
  N8 = L8,
  V8 = M8,
  D8 = 1,
  B8 = 2,
  j8 = "[object Boolean]",
  H8 = "[object Date]",
  U8 = "[object Error]",
  z8 = "[object Map]",
  q8 = "[object Number]",
  W8 = "[object RegExp]",
  G8 = "[object Set]",
  K8 = "[object String]",
  Y8 = "[object Symbol]",
  J8 = "[object ArrayBuffer]",
  X8 = "[object DataView]",
  Rl = Ml ? Ml.prototype : void 0,
  vo = Rl ? Rl.valueOf : void 0;
function Q8(e, t, n, r, s, o, a) {
  switch (n) {
    case X8:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      (e = e.buffer), (t = t.buffer);
    case J8:
      return !(e.byteLength != t.byteLength || !o(new Fl(e), new Fl(t)));
    case j8:
    case H8:
    case q8:
      return F8(+e, +t);
    case U8:
      return e.name == t.name && e.message == t.message;
    case W8:
    case K8:
      return e == t + "";
    case z8:
      var i = N8;
    case G8:
      var l = r & D8;
      if ((i || (i = V8), e.size != t.size && !l)) return !1;
      var c = a.get(e);
      if (c) return c == t;
      (r |= B8), a.set(e, t);
      var u = R8(i(e), i(t), r, s, o, a);
      return a.delete(e), u;
    case Y8:
      if (vo) return vo.call(e) == vo.call(t);
  }
  return !1;
}
var Z8 = Q8,
  Nl = vf,
  eE = 1,
  tE = Object.prototype,
  nE = tE.hasOwnProperty;
function rE(e, t, n, r, s, o) {
  var a = n & eE,
    i = Nl(e),
    l = i.length,
    c = Nl(t),
    u = c.length;
  if (l != u && !a) return !1;
  for (var f = l; f--; ) {
    var d = i[f];
    if (!(a ? d in t : nE.call(t, d))) return !1;
  }
  var p = o.get(e),
    g = o.get(t);
  if (p && g) return p == t && g == e;
  var y = !0;
  o.set(e, t), o.set(t, e);
  for (var P = a; ++f < l; ) {
    d = i[f];
    var v = e[d],
      $ = t[d];
    if (r) var I = a ? r($, v, d, t, e, o) : r(v, $, d, e, t, o);
    if (!(I === void 0 ? v === $ || s(v, $, n, r, o) : I)) {
      y = !1;
      break;
    }
    P || (P = d == "constructor");
  }
  if (y && !P) {
    var T = e.constructor,
      k = t.constructor;
    T != k &&
      "constructor" in e &&
      "constructor" in t &&
      !(
        typeof T == "function" &&
        T instanceof T &&
        typeof k == "function" &&
        k instanceof k
      ) &&
      (y = !1);
  }
  return o.delete(e), o.delete(t), y;
}
var sE = rE,
  _o = Ra,
  oE = Pf,
  aE = Z8,
  iE = sE,
  Vl = Js,
  Dl = Or,
  Bl = On.exports,
  lE = Da,
  cE = 1,
  jl = "[object Arguments]",
  Hl = "[object Array]",
  Wr = "[object Object]",
  uE = Object.prototype,
  Ul = uE.hasOwnProperty;
function fE(e, t, n, r, s, o) {
  var a = Dl(e),
    i = Dl(t),
    l = a ? Hl : Vl(e),
    c = i ? Hl : Vl(t);
  (l = l == jl ? Wr : l), (c = c == jl ? Wr : c);
  var u = l == Wr,
    f = c == Wr,
    d = l == c;
  if (d && Bl(e)) {
    if (!Bl(t)) return !1;
    (a = !0), (u = !1);
  }
  if (d && !u)
    return (
      o || (o = new _o()),
      a || lE(e) ? oE(e, t, n, r, s, o) : aE(e, t, l, n, r, s, o)
    );
  if (!(n & cE)) {
    var p = u && Ul.call(e, "__wrapped__"),
      g = f && Ul.call(t, "__wrapped__");
    if (p || g) {
      var y = p ? e.value() : e,
        P = g ? t.value() : t;
      return o || (o = new _o()), s(y, P, n, r, o);
    }
  }
  return d ? (o || (o = new _o()), iE(e, t, n, r, s, o)) : !1;
}
var dE = fE,
  pE = dE,
  zl = Et;
function Ef(e, t, n, r, s) {
  return e === t
    ? !0
    : e == null || t == null || (!zl(e) && !zl(t))
    ? e !== e && t !== t
    : pE(e, t, n, r, Ef, s);
}
var hE = Ef,
  vE = hE;
function _E(e, t) {
  return vE(e, t);
}
var mE = _E;
const gE = (e, t = []) => mE(e, t),
  kf = (e, t, n) => {
    const r = C(),
      s = C(0);
    gE(t, r.value) || ((r.value = t), (s.value += 1)), cn(e, [s], n);
  },
  yE = {
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pausebreak: 19,
    capslock: 20,
    esc: 27,
    space: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    leftarrow: 37,
    uparrow: 38,
    rightarrow: 39,
    downarrow: 40,
    insert: 45,
    delete: 46,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftwindowkey: 91,
    rightwindowkey: 92,
    selectkey: 93,
    numpad0: 96,
    numpad1: 97,
    numpad2: 98,
    numpad3: 99,
    numpad4: 100,
    numpad5: 101,
    numpad6: 102,
    numpad7: 103,
    numpad8: 104,
    numpad9: 105,
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalpoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrolllock: 145,
    semicolon: 186,
    equalsign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardslash: 191,
    graveaccent: 192,
    openbracket: 219,
    backslash: 220,
    closebracket: 221,
    singlequote: 222,
  },
  Xo = {
    ctrl: (e) => e.ctrlKey,
    shift: (e) => e.shiftKey,
    alt: (e) => e.altKey,
    meta: (e) => e.metaKey,
  };
function bE(e) {
  const t = Object.keys(Xo).reduce((n, r) => (Xo[r](e) ? n + 1 : n), 0);
  return [16, 17, 18, 91, 92].includes(e.keyCode) ? t : t + 1;
}
function ql(e, t, n) {
  if (!e.key) return !1;
  if (br(t)) return e.keyCode === t;
  const r = t.split(".");
  let s = 0;
  for (const o of r) {
    const a = Xo[o],
      i = yE[o.toLowerCase()];
    ((a && a(e)) || (i && i === e.keyCode)) && s++;
  }
  return n ? s === r.length && bE(e) === r.length : s === r.length;
}
function $E(e, t) {
  return Xu(e)
    ? e
    : ew(e) || br(e)
    ? (n) => ql(n, e, t)
    : Array.isArray(e)
    ? (n) => e.some((r) => ql(n, r, t))
    : e
    ? () => !0
    : () => !1;
}
const wE = ["keydown"];
function YC(e, t, n) {
  const { events: r = wE, target: s, exactMatch: o = !1 } = n || {},
    a = C(t),
    i = C(e);
  kf(
    () => {
      var u;
      const l = Ee(s, window);
      if (!l) return;
      const c = (f) => {
        var p;
        if ($E(i.value, o)(f))
          return (p = a.value) == null ? void 0 : p.call(a, f);
      };
      for (const f of r)
        (u = l == null ? void 0 : l.addEventListener) == null ||
          u.call(l, f, c);
      return () => {
        var f;
        for (const d of r)
          (f = l == null ? void 0 : l.removeEventListener) == null ||
            f.call(l, d, c);
      };
    },
    [r],
    s
  );
}
function JC(e) {
  let t = !1;
  return async (...n) => {
    if (!t) {
      t = !0;
      try {
        const r = await e(...n);
        return (t = !1), r;
      } catch (r) {
        throw ((t = !1), r);
      }
    }
  };
}
const SE = () =>
    "PointerEvent" in window
      ? {
          mouseDown: "pointerdown",
          mouseUp: "pointerup",
          mouseMove: "pointermove",
        }
      : "ontouchstart" in window || navigator.maxTouchPoints > 0
      ? { mouseDown: "touchstart", mouseUp: "touchend", mouseMove: "touchmove" }
      : { mouseDown: "mousedown", mouseUp: "mouseup", mouseMove: "mousemove" },
  XC = (e, t = {}) => {
    var c, u;
    const s = C(!1),
      o = C(0);
    let a, i;
    const l = {
      capture:
        (c = t == null ? void 0 : t.modifiers) == null ? void 0 : c.capture,
      once: (u = t == null ? void 0 : t.modifiers) == null ? void 0 : u.once,
    };
    return (
      cn(
        () => {
          var v;
          const f = Ee(e);
          if (!f) return;
          const { mouseDown: d, mouseUp: p, mouseMove: g } = SE();
          function y() {
            i && (clearTimeout(i), (i = void 0)),
              a && (clearInterval(a), (a = void 0)),
              (o.value = 0),
              (s.value = !1);
          }
          function P($) {
            var I, T, k;
            (((I = t.modifiers) == null ? void 0 : I.self) && $.target !== f) ||
              (y(),
              (T = t.modifiers) != null && T.prevent && $.preventDefault(),
              (k = t.modifiers) != null && k.stop && $.stopPropagation(),
              (i = setTimeout(() => {
                (s.value = !0),
                  (a = setInterval(() => {
                    o.value += t.minUpdateTime || 100;
                  }, t.minUpdateTime || 100));
              }, t.delay || 500)));
          }
          return (
            f.addEventListener(d, P, l),
            f.addEventListener(p, y, l),
            ((v = t.cancelOnMove) == null || v) && f.addEventListener(g, y, l),
            () => {
              var $;
              f.removeEventListener(d, P),
                f.removeEventListener(p, y),
                (($ = t.cancelOnMove) == null || $) &&
                  f.removeEventListener(g, y);
            }
          );
        },
        [],
        e
      ),
      { isPressing: Le(s), pressingTime: Le(o) }
    );
  },
  xE = {
    screenX: NaN,
    screenY: NaN,
    clientX: NaN,
    clientY: NaN,
    pageX: NaN,
    pageY: NaN,
    elementX: NaN,
    elementY: NaN,
    elementH: NaN,
    elementW: NaN,
    elementPosX: NaN,
    elementPosY: NaN,
  };
function QC(e) {
  const t = C(xE);
  return (
    jt(
      "mousemove",
      (n) => {
        const {
            screenX: r,
            screenY: s,
            clientX: o,
            clientY: a,
            pageX: i,
            pageY: l,
          } = n,
          c = {
            screenX: r,
            screenY: s,
            clientX: o,
            clientY: a,
            pageX: i,
            pageY: l,
            elementX: NaN,
            elementY: NaN,
            elementH: NaN,
            elementW: NaN,
            elementPosX: NaN,
            elementPosY: NaN,
          },
          u = Ee(e);
        if (u) {
          const {
            left: f,
            top: d,
            width: p,
            height: g,
          } = u.getBoundingClientRect();
          (c.elementPosX = f + window.pageXOffset),
            (c.elementPosY = d + window.pageYOffset),
            (c.elementX = i - c.elementPosX),
            (c.elementY = l - c.elementPosY),
            (c.elementW = p),
            (c.elementH = g);
        }
        t.value = c;
      },
      { target: document }
    ),
    Le(t)
  );
}
function ZC(e) {
  const t = () => (e ? new Map(e) : new Map()),
    n = C(t());
  return [
    n,
    St({
      set: (s, o) => {
        n.value.set(s, o);
      },
      get: (s) => n.value.get(s),
      remove: (s) => {
        n.value.delete(s);
      },
      has: (s) => n.value.has(s),
      clear: () => n.value.clear(),
      setAll: (s) => {
        n.value = new Map(s);
      },
      reset: () => (n.value = t()),
    }),
  ];
}
function Tf() {
  const e = navigator;
  return typeof e != "object"
    ? null
    : e.connection || e.mozConnection || e.webkitConnection;
}
function Wl() {
  const e = Tf();
  return e
    ? {
        rtt: e.rtt,
        type: e.type,
        saveData: e.saveData,
        downlink: e.downlink,
        downlinkMax: e.downlinkMax,
        effectiveType: e.effectiveType,
      }
    : {};
}
function eO() {
  const e = C({
    since: void 0,
    online: navigator == null ? void 0 : navigator.onLine,
    ...Wl(),
  });
  return (
    Se((t) => {
      const n = () => {
          e.value = { ...e.value, online: !0, since: new Date() };
        },
        r = () => {
          e.value = { ...e.value, online: !1, since: new Date() };
        },
        s = () => {
          e.value = { ...e.value, ...Wl() };
        };
      window.addEventListener("online", n),
        window.addEventListener("offline", r);
      const o = Tf();
      o == null || o.addEventListener("change", s),
        t(() => {
          window.removeEventListener("online", n),
            window.removeEventListener("offline", r),
            o == null || o.removeEventListener("change", s);
        });
    }),
    Le(e)
  );
}
function tO(e) {
  const t = () => (e === void 0 ? new Set() : new Set(e)),
    n = C(t()),
    r = {
      add: (s) => {
        n.value.add(s);
      },
      remove: (s) => {
        n.value.delete(s);
      },
      has: (s) => n.value.has(s),
      clear: () => n.value.clear(),
      reset: () => {
        n.value = t();
      },
    };
  return [Le(n), St(r)];
}
var PE = Na,
  EE = Ar;
function kE(e, t, n) {
  ((n !== void 0 && !EE(e[t], n)) || (n === void 0 && !(t in e))) &&
    PE(e, t, n);
}
var Af = kE;
function TE(e) {
  return function (t, n, r) {
    for (var s = -1, o = Object(t), a = r(t), i = a.length; i--; ) {
      var l = a[e ? i : ++s];
      if (n(o[l], l, o) === !1) break;
    }
    return t;
  };
}
var AE = TE,
  CE = AE,
  OE = CE(),
  LE = OE,
  IE = Ys,
  ME = Et;
function FE(e) {
  return ME(e) && IE(e);
}
var RE = FE,
  NE = Dn,
  VE = Ua,
  DE = Et,
  BE = "[object Object]",
  jE = Function.prototype,
  HE = Object.prototype,
  Cf = jE.toString,
  UE = HE.hasOwnProperty,
  zE = Cf.call(Object);
function qE(e) {
  if (!DE(e) || NE(e) != BE) return !1;
  var t = VE(e);
  if (t === null) return !0;
  var n = UE.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Cf.call(n) == zE;
}
var WE = qE;
function GE(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Of = GE,
  KE = Cr,
  YE = Lr;
function JE(e) {
  return KE(e, YE(e));
}
var XE = JE,
  Gl = Af,
  QE = vs.exports,
  ZE = gf,
  ek = uf,
  tk = yf,
  Kl = sf,
  Yl = Or,
  nk = RE,
  rk = On.exports,
  sk = Ma,
  ok = ct,
  ak = WE,
  ik = Da,
  Jl = Of,
  lk = XE;
function ck(e, t, n, r, s, o, a) {
  var i = Jl(e, n),
    l = Jl(t, n),
    c = a.get(l);
  if (c) {
    Gl(e, n, c);
    return;
  }
  var u = o ? o(i, l, n + "", e, t, a) : void 0,
    f = u === void 0;
  if (f) {
    var d = Yl(l),
      p = !d && rk(l),
      g = !d && !p && ik(l);
    (u = l),
      d || p || g
        ? Yl(i)
          ? (u = i)
          : nk(i)
          ? (u = ek(i))
          : p
          ? ((f = !1), (u = QE(l, !0)))
          : g
          ? ((f = !1), (u = ZE(l, !0)))
          : (u = [])
        : ak(l) || Kl(l)
        ? ((u = i), Kl(i) ? (u = lk(i)) : (!ok(i) || sk(i)) && (u = tk(l)))
        : (f = !1);
  }
  f && (a.set(l, u), s(u, l, r, o, a), a.delete(l)), Gl(e, n, u);
}
var uk = ck,
  fk = Ra,
  dk = Af,
  pk = LE,
  hk = uk,
  vk = ct,
  _k = Lr,
  mk = Of;
function Lf(e, t, n, r, s) {
  e !== t &&
    pk(
      t,
      function (o, a) {
        if ((s || (s = new fk()), vk(o))) hk(e, t, a, n, Lf, r, s);
        else {
          var i = r ? r(mk(e, a), o, a + "", e, t, s) : void 0;
          i === void 0 && (i = o), dk(e, a, i);
        }
      },
      _k
    );
}
var gk = Lf;
function yk(e) {
  return e;
}
var If = yk;
function bk(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var $k = bk,
  wk = $k,
  Xl = Math.max;
function Sk(e, t, n) {
  return (
    (t = Xl(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var r = arguments, s = -1, o = Xl(r.length - t, 0), a = Array(o);
        ++s < o;

      )
        a[s] = r[t + s];
      s = -1;
      for (var i = Array(t + 1); ++s < t; ) i[s] = r[s];
      return (i[t] = n(a)), wk(e, this, i);
    }
  );
}
var xk = Sk;
function Pk(e) {
  return function () {
    return e;
  };
}
var Ek = Pk,
  kk = Ek,
  Ql = tf,
  Tk = If,
  Ak = Ql
    ? function (e, t) {
        return Ql(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: kk(t),
          writable: !0,
        });
      }
    : Tk,
  Ck = Ak,
  Ok = 800,
  Lk = 16,
  Ik = Date.now;
function Mk(e) {
  var t = 0,
    n = 0;
  return function () {
    var r = Ik(),
      s = Lk - (r - n);
    if (((n = r), s > 0)) {
      if (++t >= Ok) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var Fk = Mk,
  Rk = Ck,
  Nk = Fk,
  Vk = Nk(Rk),
  Dk = Vk,
  Bk = If,
  jk = xk,
  Hk = Dk;
function Uk(e, t) {
  return Hk(jk(e, t, Bk), e + "");
}
var zk = Uk,
  qk = Ar,
  Wk = Ys,
  Gk = of,
  Kk = ct;
function Yk(e, t, n) {
  if (!Kk(n)) return !1;
  var r = typeof t;
  return (r == "number" ? Wk(n) && Gk(t, n.length) : r == "string" && t in n)
    ? qk(n[t], e)
    : !1;
}
var Jk = Yk,
  Xk = zk,
  Qk = Jk;
function Zk(e) {
  return Xk(function (t, n) {
    var r = -1,
      s = n.length,
      o = s > 1 ? n[s - 1] : void 0,
      a = s > 2 ? n[2] : void 0;
    for (
      o = e.length > 3 && typeof o == "function" ? (s--, o) : void 0,
        a && Qk(n[0], n[1], a) && ((o = s < 3 ? void 0 : o), (s = 1)),
        t = Object(t);
      ++r < s;

    ) {
      var i = n[r];
      i && e(t, i, r, o);
    }
    return t;
  });
}
var eT = Zk,
  tT = gk,
  nT = eT,
  rT = nT(function (e, t, n) {
    tT(e, t, n);
  }),
  sT = rT;
function nO(e) {
  const n = C((() => w(e))()),
    r = (s, o = !1) => {
      const a = w(s);
      o ? (n.value = a) : (n.value = a ? sT(n.value, a) : n.value);
    };
  return [Le(n), r];
}
function oT(e = () => {}) {
  const t = () => {
    an(() => {
      e();
    });
  };
  return (
    qe(() => {
      window.addEventListener("resize", t, !1);
    }),
    ga(() => {
      window.removeEventListener("resize", t);
    }),
    null
  );
}
function aT(e) {
  const t = gt({ width: 0, height: 0 }),
    n = () => {
      var s, o;
      const r = Ee(e);
      (t.width = (s = r == null ? void 0 : r.clientWidth) != null ? s : 0),
        (t.height = (o = r == null ? void 0 : r.clientHeight) != null ? o : 0);
    };
  return (
    oT(n),
    qe(() => {
      setTimeout(() => {
        n();
      }, 120);
    }),
    { ...Sr(t) }
  );
}
function rO(e, t = () => !0) {
  const n = C(),
    r = C(t);
  return (
    cn(
      () => {
        const s = Ee(e, document);
        if (!s) return;
        const o = () => {
          let a;
          s === document
            ? document.scrollingElement
              ? (a = {
                  left: document.scrollingElement.scrollLeft,
                  top: document.scrollingElement.scrollTop,
                })
              : (a = {
                  left: Math.max(
                    window.pageYOffset,
                    document.documentElement.scrollTop,
                    document.body.scrollTop
                  ),
                  top: Math.max(
                    window.pageXOffset,
                    document.documentElement.scrollLeft,
                    document.body.scrollLeft
                  ),
                })
            : (a = { left: s.scrollLeft, top: s.scrollTop }),
            r.value(a) && (n.value = a);
        };
        return (
          o(),
          s.addEventListener("scroll", o),
          () => {
            s.removeEventListener("scroll", o);
          }
        );
      },
      [],
      e
    ),
    Le(n)
  );
}
function iT(e, t) {
  var o;
  const n = C(e),
    r = (o = t == null ? void 0 : t.wait) != null ? o : 1e3,
    s = re(() => Ku((...a) => n.value([...a]), r, t));
  return (
    Je(() => {
      s.value.cancel();
    }),
    { run: s, cancel: s.value.cancel, flush: s.value.flush }
  );
}
function sO(e, t) {
  const n = C();
  n.value = e.value;
  const { run: r } = iT(() => {
    n.value = e.value;
  }, t);
  return (
    Pe(
      e,
      () => {
        r.value();
      },
      { immediate: !0 }
    ),
    n
  );
}
const lT = { restoreOnUnmount: !1 };
function oO(e, t = lT) {
  const n = C(Ia ? document.title : "");
  _e(e)
    ? Pe(e, () => {
        document.title = e.value;
      })
    : (document.title = e),
    qe(() => {
      document.title = w(e);
    }),
    Je(() => {
      t.restoreOnUnmount && (document.title = w(n));
    });
}
const cT = (e, t) =>
    e
      ? e
          .map((n, r) => (e[r] !== (t == null ? void 0 : t[r]) ? r : -1))
          .filter((n) => n >= 0)
      : t
      ? t.map((n, r) => r)
      : [],
  aO = (e, t) => {
    Pe(t != null ? t : [], (n, r) => {
      const s = cT(r, n);
      e(s);
    });
  };
function iO() {
  const e = C({}),
    t = () => {
      e.value = Object.assign({}, { ...e.value });
    };
  return { update: Le(e), setUpdate: t };
}
var uT = function () {
    if (
      typeof Symbol != "function" ||
      typeof Object.getOwnPropertySymbols != "function"
    )
      return !1;
    if (typeof Symbol.iterator == "symbol") return !0;
    var t = {},
      n = Symbol("test"),
      r = Object(n);
    if (
      typeof n == "string" ||
      Object.prototype.toString.call(n) !== "[object Symbol]" ||
      Object.prototype.toString.call(r) !== "[object Symbol]"
    )
      return !1;
    var s = 42;
    t[n] = s;
    for (n in t) return !1;
    if (
      (typeof Object.keys == "function" && Object.keys(t).length !== 0) ||
      (typeof Object.getOwnPropertyNames == "function" &&
        Object.getOwnPropertyNames(t).length !== 0)
    )
      return !1;
    var o = Object.getOwnPropertySymbols(t);
    if (
      o.length !== 1 ||
      o[0] !== n ||
      !Object.prototype.propertyIsEnumerable.call(t, n)
    )
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var a = Object.getOwnPropertyDescriptor(t, n);
      if (a.value !== s || a.enumerable !== !0) return !1;
    }
    return !0;
  },
  Zl = typeof Symbol != "undefined" && Symbol,
  fT = uT,
  dT = function () {
    return typeof Zl != "function" ||
      typeof Symbol != "function" ||
      typeof Zl("foo") != "symbol" ||
      typeof Symbol("bar") != "symbol"
      ? !1
      : fT();
  },
  ec = { foo: {} },
  pT = Object,
  hT = function () {
    return (
      { __proto__: ec }.foo === ec.foo && !({ __proto__: null } instanceof pT)
    );
  },
  vT = "Function.prototype.bind called on incompatible ",
  mo = Array.prototype.slice,
  _T = Object.prototype.toString,
  mT = "[object Function]",
  gT = function (t) {
    var n = this;
    if (typeof n != "function" || _T.call(n) !== mT)
      throw new TypeError(vT + n);
    for (
      var r = mo.call(arguments, 1),
        s,
        o = function () {
          if (this instanceof s) {
            var u = n.apply(this, r.concat(mo.call(arguments)));
            return Object(u) === u ? u : this;
          } else return n.apply(t, r.concat(mo.call(arguments)));
        },
        a = Math.max(0, n.length - r.length),
        i = [],
        l = 0;
      l < a;
      l++
    )
      i.push("$" + l);
    if (
      ((s = Function(
        "binder",
        "return function (" +
          i.join(",") +
          "){ return binder.apply(this,arguments); }"
      )(o)),
      n.prototype)
    ) {
      var c = function () {};
      (c.prototype = n.prototype),
        (s.prototype = new c()),
        (c.prototype = null);
    }
    return s;
  },
  yT = gT,
  qa = Function.prototype.bind || yT,
  bT = qa,
  $T = bT.call(Function.call, Object.prototype.hasOwnProperty),
  ue,
  Ln = SyntaxError,
  Mf = Function,
  Pn = TypeError,
  go = function (e) {
    try {
      return Mf('"use strict"; return (' + e + ").constructor;")();
    } catch {}
  },
  sn = Object.getOwnPropertyDescriptor;
if (sn)
  try {
    sn({}, "");
  } catch {
    sn = null;
  }
var yo = function () {
    throw new Pn();
  },
  wT = sn
    ? (function () {
        try {
          return arguments.callee, yo;
        } catch {
          try {
            return sn(arguments, "callee").get;
          } catch {
            return yo;
          }
        }
      })()
    : yo,
  hn = dT(),
  ST = hT(),
  Fe =
    Object.getPrototypeOf ||
    (ST
      ? function (e) {
          return e.__proto__;
        }
      : null),
  mn = {},
  xT = typeof Uint8Array == "undefined" || !Fe ? ue : Fe(Uint8Array),
  on = {
    "%AggregateError%":
      typeof AggregateError == "undefined" ? ue : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer == "undefined" ? ue : ArrayBuffer,
    "%ArrayIteratorPrototype%": hn && Fe ? Fe([][Symbol.iterator]()) : ue,
    "%AsyncFromSyncIteratorPrototype%": ue,
    "%AsyncFunction%": mn,
    "%AsyncGenerator%": mn,
    "%AsyncGeneratorFunction%": mn,
    "%AsyncIteratorPrototype%": mn,
    "%Atomics%": typeof Atomics == "undefined" ? ue : Atomics,
    "%BigInt%": typeof BigInt == "undefined" ? ue : BigInt,
    "%BigInt64Array%": typeof BigInt64Array == "undefined" ? ue : BigInt64Array,
    "%BigUint64Array%":
      typeof BigUint64Array == "undefined" ? ue : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView == "undefined" ? ue : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array == "undefined" ? ue : Float32Array,
    "%Float64Array%": typeof Float64Array == "undefined" ? ue : Float64Array,
    "%FinalizationRegistry%":
      typeof FinalizationRegistry == "undefined" ? ue : FinalizationRegistry,
    "%Function%": Mf,
    "%GeneratorFunction%": mn,
    "%Int8Array%": typeof Int8Array == "undefined" ? ue : Int8Array,
    "%Int16Array%": typeof Int16Array == "undefined" ? ue : Int16Array,
    "%Int32Array%": typeof Int32Array == "undefined" ? ue : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hn && Fe ? Fe(Fe([][Symbol.iterator]())) : ue,
    "%JSON%": typeof JSON == "object" ? JSON : ue,
    "%Map%": typeof Map == "undefined" ? ue : Map,
    "%MapIteratorPrototype%":
      typeof Map == "undefined" || !hn || !Fe
        ? ue
        : Fe(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise == "undefined" ? ue : Promise,
    "%Proxy%": typeof Proxy == "undefined" ? ue : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect == "undefined" ? ue : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set == "undefined" ? ue : Set,
    "%SetIteratorPrototype%":
      typeof Set == "undefined" || !hn || !Fe
        ? ue
        : Fe(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%":
      typeof SharedArrayBuffer == "undefined" ? ue : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hn && Fe ? Fe(""[Symbol.iterator]()) : ue,
    "%Symbol%": hn ? Symbol : ue,
    "%SyntaxError%": Ln,
    "%ThrowTypeError%": wT,
    "%TypedArray%": xT,
    "%TypeError%": Pn,
    "%Uint8Array%": typeof Uint8Array == "undefined" ? ue : Uint8Array,
    "%Uint8ClampedArray%":
      typeof Uint8ClampedArray == "undefined" ? ue : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array == "undefined" ? ue : Uint16Array,
    "%Uint32Array%": typeof Uint32Array == "undefined" ? ue : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap == "undefined" ? ue : WeakMap,
    "%WeakRef%": typeof WeakRef == "undefined" ? ue : WeakRef,
    "%WeakSet%": typeof WeakSet == "undefined" ? ue : WeakSet,
  };
if (Fe)
  try {
    null.error;
  } catch (e) {
    var PT = Fe(Fe(e));
    on["%Error.prototype%"] = PT;
  }
var ET = function e(t) {
    var n;
    if (t === "%AsyncFunction%") n = go("async function () {}");
    else if (t === "%GeneratorFunction%") n = go("function* () {}");
    else if (t === "%AsyncGeneratorFunction%") n = go("async function* () {}");
    else if (t === "%AsyncGenerator%") {
      var r = e("%AsyncGeneratorFunction%");
      r && (n = r.prototype);
    } else if (t === "%AsyncIteratorPrototype%") {
      var s = e("%AsyncGenerator%");
      s && Fe && (n = Fe(s.prototype));
    }
    return (on[t] = n), n;
  },
  tc = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": [
      "AsyncGeneratorFunction",
      "prototype",
      "prototype",
    ],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"],
  },
  Ir = qa,
  ms = $T,
  kT = Ir.call(Function.call, Array.prototype.concat),
  TT = Ir.call(Function.apply, Array.prototype.splice),
  nc = Ir.call(Function.call, String.prototype.replace),
  gs = Ir.call(Function.call, String.prototype.slice),
  AT = Ir.call(Function.call, RegExp.prototype.exec),
  CT =
    /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  OT = /\\(\\)?/g,
  LT = function (t) {
    var n = gs(t, 0, 1),
      r = gs(t, -1);
    if (n === "%" && r !== "%")
      throw new Ln("invalid intrinsic syntax, expected closing `%`");
    if (r === "%" && n !== "%")
      throw new Ln("invalid intrinsic syntax, expected opening `%`");
    var s = [];
    return (
      nc(t, CT, function (o, a, i, l) {
        s[s.length] = i ? nc(l, OT, "$1") : a || o;
      }),
      s
    );
  },
  IT = function (t, n) {
    var r = t,
      s;
    if ((ms(tc, r) && ((s = tc[r]), (r = "%" + s[0] + "%")), ms(on, r))) {
      var o = on[r];
      if ((o === mn && (o = ET(r)), typeof o == "undefined" && !n))
        throw new Pn(
          "intrinsic " +
            t +
            " exists, but is not available. Please file an issue!"
        );
      return { alias: s, name: r, value: o };
    }
    throw new Ln("intrinsic " + t + " does not exist!");
  },
  Wa = function (t, n) {
    if (typeof t != "string" || t.length === 0)
      throw new Pn("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof n != "boolean")
      throw new Pn('"allowMissing" argument must be a boolean');
    if (AT(/^%?[^%]*%?$/, t) === null)
      throw new Ln(
        "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
      );
    var r = LT(t),
      s = r.length > 0 ? r[0] : "",
      o = IT("%" + s + "%", n),
      a = o.name,
      i = o.value,
      l = !1,
      c = o.alias;
    c && ((s = c[0]), TT(r, kT([0, 1], c)));
    for (var u = 1, f = !0; u < r.length; u += 1) {
      var d = r[u],
        p = gs(d, 0, 1),
        g = gs(d, -1);
      if (
        (p === '"' ||
          p === "'" ||
          p === "`" ||
          g === '"' ||
          g === "'" ||
          g === "`") &&
        p !== g
      )
        throw new Ln("property names with quotes must have matching quotes");
      if (
        ((d === "constructor" || !f) && (l = !0),
        (s += "." + d),
        (a = "%" + s + "%"),
        ms(on, a))
      )
        i = on[a];
      else if (i != null) {
        if (!(d in i)) {
          if (!n)
            throw new Pn(
              "base intrinsic for " +
                t +
                " exists, but the property is not available."
            );
          return;
        }
        if (sn && u + 1 >= r.length) {
          var y = sn(i, d);
          (f = !!y),
            f && "get" in y && !("originalValue" in y.get)
              ? (i = y.get)
              : (i = i[d]);
        } else (f = ms(i, d)), (i = i[d]);
        f && !l && (on[a] = i);
      }
    }
    return i;
  },
  Ff = { exports: {} };
(function (e) {
  var t = qa,
    n = Wa,
    r = n("%Function.prototype.apply%"),
    s = n("%Function.prototype.call%"),
    o = n("%Reflect.apply%", !0) || t.call(s, r),
    a = n("%Object.getOwnPropertyDescriptor%", !0),
    i = n("%Object.defineProperty%", !0),
    l = n("%Math.max%");
  if (i)
    try {
      i({}, "a", { value: 1 });
    } catch {
      i = null;
    }
  e.exports = function (f) {
    var d = o(t, s, arguments);
    if (a && i) {
      var p = a(d, "length");
      p.configurable &&
        i(d, "length", { value: 1 + l(0, f.length - (arguments.length - 1)) });
    }
    return d;
  };
  var c = function () {
    return o(t, r, arguments);
  };
  i ? i(e.exports, "apply", { value: c }) : (e.exports.apply = c);
})(Ff);
var Rf = Wa,
  Nf = Ff.exports,
  MT = Nf(Rf("String.prototype.indexOf")),
  FT = function (t, n) {
    var r = Rf(t, !!n);
    return typeof r == "function" && MT(t, ".prototype.") > -1 ? Nf(r) : r;
  },
  RT = {},
  NT = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: RT },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  VT = Mb(NT),
  Ga = typeof Map == "function" && Map.prototype,
  bo =
    Object.getOwnPropertyDescriptor && Ga
      ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
      : null,
  ys = Ga && bo && typeof bo.get == "function" ? bo.get : null,
  rc = Ga && Map.prototype.forEach,
  Ka = typeof Set == "function" && Set.prototype,
  $o =
    Object.getOwnPropertyDescriptor && Ka
      ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
      : null,
  bs = Ka && $o && typeof $o.get == "function" ? $o.get : null,
  sc = Ka && Set.prototype.forEach,
  DT = typeof WeakMap == "function" && WeakMap.prototype,
  ur = DT ? WeakMap.prototype.has : null,
  BT = typeof WeakSet == "function" && WeakSet.prototype,
  fr = BT ? WeakSet.prototype.has : null,
  jT = typeof WeakRef == "function" && WeakRef.prototype,
  oc = jT ? WeakRef.prototype.deref : null,
  HT = Boolean.prototype.valueOf,
  UT = Object.prototype.toString,
  zT = Function.prototype.toString,
  qT = String.prototype.match,
  Ya = String.prototype.slice,
  Mt = String.prototype.replace,
  WT = String.prototype.toUpperCase,
  ac = String.prototype.toLowerCase,
  Vf = RegExp.prototype.test,
  ic = Array.prototype.concat,
  vt = Array.prototype.join,
  GT = Array.prototype.slice,
  lc = Math.floor,
  Qo = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
  wo = Object.getOwnPropertySymbols,
  Zo =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? Symbol.prototype.toString
      : null,
  In = typeof Symbol == "function" && typeof Symbol.iterator == "object",
  De =
    typeof Symbol == "function" &&
    Symbol.toStringTag &&
    (typeof Symbol.toStringTag === In ? "object" : "symbol")
      ? Symbol.toStringTag
      : null,
  Df = Object.prototype.propertyIsEnumerable,
  cc =
    (typeof Reflect == "function"
      ? Reflect.getPrototypeOf
      : Object.getPrototypeOf) ||
    ([].__proto__ === Array.prototype
      ? function (e) {
          return e.__proto__;
        }
      : null);
function uc(e, t) {
  if (
    e === 1 / 0 ||
    e === -1 / 0 ||
    e !== e ||
    (e && e > -1e3 && e < 1e3) ||
    Vf.call(/e/, t)
  )
    return t;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var r = e < 0 ? -lc(-e) : lc(e);
    if (r !== e) {
      var s = String(r),
        o = Ya.call(t, s.length + 1);
      return (
        Mt.call(s, n, "$&_") +
        "." +
        Mt.call(Mt.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
      );
    }
  }
  return Mt.call(t, n, "$&_");
}
var ea = VT,
  fc = ea.custom,
  dc = jf(fc) ? fc : null,
  KT = function e(t, n, r, s) {
    var o = n || {};
    if (
      It(o, "quoteStyle") &&
      o.quoteStyle !== "single" &&
      o.quoteStyle !== "double"
    )
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (
      It(o, "maxStringLength") &&
      (typeof o.maxStringLength == "number"
        ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0
        : o.maxStringLength !== null)
    )
      throw new TypeError(
        'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
      );
    var a = It(o, "customInspect") ? o.customInspect : !0;
    if (typeof a != "boolean" && a !== "symbol")
      throw new TypeError(
        "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
      );
    if (
      It(o, "indent") &&
      o.indent !== null &&
      o.indent !== "	" &&
      !(parseInt(o.indent, 10) === o.indent && o.indent > 0)
    )
      throw new TypeError(
        'option "indent" must be "\\t", an integer > 0, or `null`'
      );
    if (It(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
      throw new TypeError(
        'option "numericSeparator", if provided, must be `true` or `false`'
      );
    var i = o.numericSeparator;
    if (typeof t == "undefined") return "undefined";
    if (t === null) return "null";
    if (typeof t == "boolean") return t ? "true" : "false";
    if (typeof t == "string") return Uf(t, o);
    if (typeof t == "number") {
      if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
      var l = String(t);
      return i ? uc(t, l) : l;
    }
    if (typeof t == "bigint") {
      var c = String(t) + "n";
      return i ? uc(t, c) : c;
    }
    var u = typeof o.depth == "undefined" ? 5 : o.depth;
    if (
      (typeof r == "undefined" && (r = 0),
      r >= u && u > 0 && typeof t == "object")
    )
      return ta(t) ? "[Array]" : "[Object]";
    var f = dA(o, r);
    if (typeof s == "undefined") s = [];
    else if (Hf(s, t) >= 0) return "[Circular]";
    function d(Q, W, xe) {
      if ((W && ((s = GT.call(s)), s.push(W)), xe)) {
        var te = { depth: o.depth };
        return (
          It(o, "quoteStyle") && (te.quoteStyle = o.quoteStyle),
          e(Q, te, r + 1, s)
        );
      }
      return e(Q, o, r + 1, s);
    }
    if (typeof t == "function" && !pc(t)) {
      var p = rA(t),
        g = Gr(t, d);
      return (
        "[Function" +
        (p ? ": " + p : " (anonymous)") +
        "]" +
        (g.length > 0 ? " { " + vt.call(g, ", ") + " }" : "")
      );
    }
    if (jf(t)) {
      var y = In
        ? Mt.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1")
        : Zo.call(t);
      return typeof t == "object" && !In ? Xn(y) : y;
    }
    if (cA(t)) {
      for (
        var P = "<" + ac.call(String(t.nodeName)),
          v = t.attributes || [],
          $ = 0;
        $ < v.length;
        $++
      )
        P += " " + v[$].name + "=" + Bf(YT(v[$].value), "double", o);
      return (
        (P += ">"),
        t.childNodes && t.childNodes.length && (P += "..."),
        (P += "</" + ac.call(String(t.nodeName)) + ">"),
        P
      );
    }
    if (ta(t)) {
      if (t.length === 0) return "[]";
      var I = Gr(t, d);
      return f && !fA(I)
        ? "[" + na(I, f) + "]"
        : "[ " + vt.call(I, ", ") + " ]";
    }
    if (XT(t)) {
      var T = Gr(t, d);
      return !("cause" in Error.prototype) &&
        "cause" in t &&
        !Df.call(t, "cause")
        ? "{ [" +
            String(t) +
            "] " +
            vt.call(ic.call("[cause]: " + d(t.cause), T), ", ") +
            " }"
        : T.length === 0
        ? "[" + String(t) + "]"
        : "{ [" + String(t) + "] " + vt.call(T, ", ") + " }";
    }
    if (typeof t == "object" && a) {
      if (dc && typeof t[dc] == "function" && ea)
        return ea(t, { depth: u - r });
      if (a !== "symbol" && typeof t.inspect == "function") return t.inspect();
    }
    if (sA(t)) {
      var k = [];
      return (
        rc &&
          rc.call(t, function (Q, W) {
            k.push(d(W, t, !0) + " => " + d(Q, t));
          }),
        hc("Map", ys.call(t), k, f)
      );
    }
    if (iA(t)) {
      var R = [];
      return (
        sc &&
          sc.call(t, function (Q) {
            R.push(d(Q, t));
          }),
        hc("Set", bs.call(t), R, f)
      );
    }
    if (oA(t)) return So("WeakMap");
    if (lA(t)) return So("WeakSet");
    if (aA(t)) return So("WeakRef");
    if (ZT(t)) return Xn(d(Number(t)));
    if (tA(t)) return Xn(d(Qo.call(t)));
    if (eA(t)) return Xn(HT.call(t));
    if (QT(t)) return Xn(d(String(t)));
    if (!JT(t) && !pc(t)) {
      var z = Gr(t, d),
        E = cc
          ? cc(t) === Object.prototype
          : t instanceof Object || t.constructor === Object,
        N = t instanceof Object ? "" : "null prototype",
        B =
          !E && De && Object(t) === t && De in t
            ? Ya.call(Ht(t), 8, -1)
            : N
            ? "Object"
            : "",
        K =
          E || typeof t.constructor != "function"
            ? ""
            : t.constructor.name
            ? t.constructor.name + " "
            : "",
        V =
          K +
          (B || N
            ? "[" + vt.call(ic.call([], B || [], N || []), ": ") + "] "
            : "");
      return z.length === 0
        ? V + "{}"
        : f
        ? V + "{" + na(z, f) + "}"
        : V + "{ " + vt.call(z, ", ") + " }";
    }
    return String(t);
  };
function Bf(e, t, n) {
  var r = (n.quoteStyle || t) === "double" ? '"' : "'";
  return r + e + r;
}
function YT(e) {
  return Mt.call(String(e), /"/g, "&quot;");
}
function ta(e) {
  return (
    Ht(e) === "[object Array]" && (!De || !(typeof e == "object" && De in e))
  );
}
function JT(e) {
  return (
    Ht(e) === "[object Date]" && (!De || !(typeof e == "object" && De in e))
  );
}
function pc(e) {
  return (
    Ht(e) === "[object RegExp]" && (!De || !(typeof e == "object" && De in e))
  );
}
function XT(e) {
  return (
    Ht(e) === "[object Error]" && (!De || !(typeof e == "object" && De in e))
  );
}
function QT(e) {
  return (
    Ht(e) === "[object String]" && (!De || !(typeof e == "object" && De in e))
  );
}
function ZT(e) {
  return (
    Ht(e) === "[object Number]" && (!De || !(typeof e == "object" && De in e))
  );
}
function eA(e) {
  return (
    Ht(e) === "[object Boolean]" && (!De || !(typeof e == "object" && De in e))
  );
}
function jf(e) {
  if (In) return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol") return !0;
  if (!e || typeof e != "object" || !Zo) return !1;
  try {
    return Zo.call(e), !0;
  } catch {}
  return !1;
}
function tA(e) {
  if (!e || typeof e != "object" || !Qo) return !1;
  try {
    return Qo.call(e), !0;
  } catch {}
  return !1;
}
var nA =
  Object.prototype.hasOwnProperty ||
  function (e) {
    return e in this;
  };
function It(e, t) {
  return nA.call(e, t);
}
function Ht(e) {
  return UT.call(e);
}
function rA(e) {
  if (e.name) return e.name;
  var t = qT.call(zT.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function Hf(e, t) {
  if (e.indexOf) return e.indexOf(t);
  for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
  return -1;
}
function sA(e) {
  if (!ys || !e || typeof e != "object") return !1;
  try {
    ys.call(e);
    try {
      bs.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {}
  return !1;
}
function oA(e) {
  if (!ur || !e || typeof e != "object") return !1;
  try {
    ur.call(e, ur);
    try {
      fr.call(e, fr);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {}
  return !1;
}
function aA(e) {
  if (!oc || !e || typeof e != "object") return !1;
  try {
    return oc.call(e), !0;
  } catch {}
  return !1;
}
function iA(e) {
  if (!bs || !e || typeof e != "object") return !1;
  try {
    bs.call(e);
    try {
      ys.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {}
  return !1;
}
function lA(e) {
  if (!fr || !e || typeof e != "object") return !1;
  try {
    fr.call(e, fr);
    try {
      ur.call(e, ur);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {}
  return !1;
}
function cA(e) {
  return !e || typeof e != "object"
    ? !1
    : typeof HTMLElement != "undefined" && e instanceof HTMLElement
    ? !0
    : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function Uf(e, t) {
  if (e.length > t.maxStringLength) {
    var n = e.length - t.maxStringLength,
      r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return Uf(Ya.call(e, 0, t.maxStringLength), t) + r;
  }
  var s = Mt.call(Mt.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, uA);
  return Bf(s, "single", t);
}
function uA(e) {
  var t = e.charCodeAt(0),
    n = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
  return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + WT.call(t.toString(16));
}
function Xn(e) {
  return "Object(" + e + ")";
}
function So(e) {
  return e + " { ? }";
}
function hc(e, t, n, r) {
  var s = r ? na(n, r) : vt.call(n, ", ");
  return e + " (" + t + ") {" + s + "}";
}
function fA(e) {
  for (var t = 0; t < e.length; t++)
    if (
      Hf(
        e[t],
        `
`
      ) >= 0
    )
      return !1;
  return !0;
}
function dA(e, t) {
  var n;
  if (e.indent === "	") n = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    n = vt.call(Array(e.indent + 1), " ");
  else return null;
  return { base: n, prev: vt.call(Array(t + 1), n) };
}
function na(e, t) {
  if (e.length === 0) return "";
  var n =
    `
` +
    t.prev +
    t.base;
  return (
    n +
    vt.call(e, "," + n) +
    `
` +
    t.prev
  );
}
function Gr(e, t) {
  var n = ta(e),
    r = [];
  if (n) {
    r.length = e.length;
    for (var s = 0; s < e.length; s++) r[s] = It(e, s) ? t(e[s], e) : "";
  }
  var o = typeof wo == "function" ? wo(e) : [],
    a;
  if (In) {
    a = {};
    for (var i = 0; i < o.length; i++) a["$" + o[i]] = o[i];
  }
  for (var l in e)
    !It(e, l) ||
      (n && String(Number(l)) === l && l < e.length) ||
      (In && a["$" + l] instanceof Symbol) ||
      (Vf.call(/[^\w$]/, l)
        ? r.push(t(l, e) + ": " + t(e[l], e))
        : r.push(l + ": " + t(e[l], e)));
  if (typeof wo == "function")
    for (var c = 0; c < o.length; c++)
      Df.call(e, o[c]) && r.push("[" + t(o[c]) + "]: " + t(e[o[c]], e));
  return r;
}
var Ja = Wa,
  qn = FT,
  pA = KT,
  hA = Ja("%TypeError%"),
  Kr = Ja("%WeakMap%", !0),
  Yr = Ja("%Map%", !0),
  vA = qn("WeakMap.prototype.get", !0),
  _A = qn("WeakMap.prototype.set", !0),
  mA = qn("WeakMap.prototype.has", !0),
  gA = qn("Map.prototype.get", !0),
  yA = qn("Map.prototype.set", !0),
  bA = qn("Map.prototype.has", !0),
  Xa = function (e, t) {
    for (var n = e, r; (r = n.next) !== null; n = r)
      if (r.key === t)
        return (n.next = r.next), (r.next = e.next), (e.next = r), r;
  },
  $A = function (e, t) {
    var n = Xa(e, t);
    return n && n.value;
  },
  wA = function (e, t, n) {
    var r = Xa(e, t);
    r ? (r.value = n) : (e.next = { key: t, next: e.next, value: n });
  },
  SA = function (e, t) {
    return !!Xa(e, t);
  },
  xA = function () {
    var t,
      n,
      r,
      s = {
        assert: function (o) {
          if (!s.has(o)) throw new hA("Side channel does not contain " + pA(o));
        },
        get: function (o) {
          if (Kr && o && (typeof o == "object" || typeof o == "function")) {
            if (t) return vA(t, o);
          } else if (Yr) {
            if (n) return gA(n, o);
          } else if (r) return $A(r, o);
        },
        has: function (o) {
          if (Kr && o && (typeof o == "object" || typeof o == "function")) {
            if (t) return mA(t, o);
          } else if (Yr) {
            if (n) return bA(n, o);
          } else if (r) return SA(r, o);
          return !1;
        },
        set: function (o, a) {
          Kr && o && (typeof o == "object" || typeof o == "function")
            ? (t || (t = new Kr()), _A(t, o, a))
            : Yr
            ? (n || (n = new Yr()), yA(n, o, a))
            : (r || (r = { key: {}, next: null }), wA(r, o, a));
        },
      };
    return s;
  },
  PA = String.prototype.replace,
  EA = /%20/g,
  xo = { RFC1738: "RFC1738", RFC3986: "RFC3986" },
  Qa = {
    default: xo.RFC3986,
    formatters: {
      RFC1738: function (e) {
        return PA.call(e, EA, "+");
      },
      RFC3986: function (e) {
        return String(e);
      },
    },
    RFC1738: xo.RFC1738,
    RFC3986: xo.RFC3986,
  },
  kA = Qa,
  Po = Object.prototype.hasOwnProperty,
  en = Array.isArray,
  pt = (function () {
    for (var e = [], t = 0; t < 256; ++t)
      e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    return e;
  })(),
  TA = function (t) {
    for (; t.length > 1; ) {
      var n = t.pop(),
        r = n.obj[n.prop];
      if (en(r)) {
        for (var s = [], o = 0; o < r.length; ++o)
          typeof r[o] != "undefined" && s.push(r[o]);
        n.obj[n.prop] = s;
      }
    }
  },
  zf = function (t, n) {
    for (
      var r = n && n.plainObjects ? Object.create(null) : {}, s = 0;
      s < t.length;
      ++s
    )
      typeof t[s] != "undefined" && (r[s] = t[s]);
    return r;
  },
  AA = function e(t, n, r) {
    if (!n) return t;
    if (typeof n != "object") {
      if (en(t)) t.push(n);
      else if (t && typeof t == "object")
        ((r && (r.plainObjects || r.allowPrototypes)) ||
          !Po.call(Object.prototype, n)) &&
          (t[n] = !0);
      else return [t, n];
      return t;
    }
    if (!t || typeof t != "object") return [t].concat(n);
    var s = t;
    return (
      en(t) && !en(n) && (s = zf(t, r)),
      en(t) && en(n)
        ? (n.forEach(function (o, a) {
            if (Po.call(t, a)) {
              var i = t[a];
              i && typeof i == "object" && o && typeof o == "object"
                ? (t[a] = e(i, o, r))
                : t.push(o);
            } else t[a] = o;
          }),
          t)
        : Object.keys(n).reduce(function (o, a) {
            var i = n[a];
            return Po.call(o, a) ? (o[a] = e(o[a], i, r)) : (o[a] = i), o;
          }, s)
    );
  },
  CA = function (t, n) {
    return Object.keys(n).reduce(function (r, s) {
      return (r[s] = n[s]), r;
    }, t);
  },
  OA = function (e, t, n) {
    var r = e.replace(/\+/g, " ");
    if (n === "iso-8859-1") return r.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(r);
    } catch {
      return r;
    }
  },
  LA = function (t, n, r, s, o) {
    if (t.length === 0) return t;
    var a = t;
    if (
      (typeof t == "symbol"
        ? (a = Symbol.prototype.toString.call(t))
        : typeof t != "string" && (a = String(t)),
      r === "iso-8859-1")
    )
      return escape(a).replace(/%u[0-9a-f]{4}/gi, function (u) {
        return "%26%23" + parseInt(u.slice(2), 16) + "%3B";
      });
    for (var i = "", l = 0; l < a.length; ++l) {
      var c = a.charCodeAt(l);
      if (
        c === 45 ||
        c === 46 ||
        c === 95 ||
        c === 126 ||
        (c >= 48 && c <= 57) ||
        (c >= 65 && c <= 90) ||
        (c >= 97 && c <= 122) ||
        (o === kA.RFC1738 && (c === 40 || c === 41))
      ) {
        i += a.charAt(l);
        continue;
      }
      if (c < 128) {
        i = i + pt[c];
        continue;
      }
      if (c < 2048) {
        i = i + (pt[192 | (c >> 6)] + pt[128 | (c & 63)]);
        continue;
      }
      if (c < 55296 || c >= 57344) {
        i =
          i +
          (pt[224 | (c >> 12)] +
            pt[128 | ((c >> 6) & 63)] +
            pt[128 | (c & 63)]);
        continue;
      }
      (l += 1),
        (c = 65536 + (((c & 1023) << 10) | (a.charCodeAt(l) & 1023))),
        (i +=
          pt[240 | (c >> 18)] +
          pt[128 | ((c >> 12) & 63)] +
          pt[128 | ((c >> 6) & 63)] +
          pt[128 | (c & 63)]);
    }
    return i;
  },
  IA = function (t) {
    for (
      var n = [{ obj: { o: t }, prop: "o" }], r = [], s = 0;
      s < n.length;
      ++s
    )
      for (
        var o = n[s], a = o.obj[o.prop], i = Object.keys(a), l = 0;
        l < i.length;
        ++l
      ) {
        var c = i[l],
          u = a[c];
        typeof u == "object" &&
          u !== null &&
          r.indexOf(u) === -1 &&
          (n.push({ obj: a, prop: c }), r.push(u));
      }
    return TA(n), t;
  },
  MA = function (t) {
    return Object.prototype.toString.call(t) === "[object RegExp]";
  },
  FA = function (t) {
    return !t || typeof t != "object"
      ? !1
      : !!(
          t.constructor &&
          t.constructor.isBuffer &&
          t.constructor.isBuffer(t)
        );
  },
  RA = function (t, n) {
    return [].concat(t, n);
  },
  NA = function (t, n) {
    if (en(t)) {
      for (var r = [], s = 0; s < t.length; s += 1) r.push(n(t[s]));
      return r;
    }
    return n(t);
  },
  qf = {
    arrayToObject: zf,
    assign: CA,
    combine: RA,
    compact: IA,
    decode: OA,
    encode: LA,
    isBuffer: FA,
    isRegExp: MA,
    maybeMap: NA,
    merge: AA,
  },
  Wf = xA,
  ns = qf,
  dr = Qa,
  VA = Object.prototype.hasOwnProperty,
  vc = {
    brackets: function (t) {
      return t + "[]";
    },
    comma: "comma",
    indices: function (t, n) {
      return t + "[" + n + "]";
    },
    repeat: function (t) {
      return t;
    },
  },
  wt = Array.isArray,
  DA = Array.prototype.push,
  Gf = function (e, t) {
    DA.apply(e, wt(t) ? t : [t]);
  },
  BA = Date.prototype.toISOString,
  _c = dr.default,
  Ne = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: ns.encode,
    encodeValuesOnly: !1,
    format: _c,
    formatter: dr.formatters[_c],
    indices: !1,
    serializeDate: function (t) {
      return BA.call(t);
    },
    skipNulls: !1,
    strictNullHandling: !1,
  },
  jA = function (t) {
    return (
      typeof t == "string" ||
      typeof t == "number" ||
      typeof t == "boolean" ||
      typeof t == "symbol" ||
      typeof t == "bigint"
    );
  },
  Eo = {},
  HA = function e(t, n, r, s, o, a, i, l, c, u, f, d, p, g, y, P) {
    for (var v = t, $ = P, I = 0, T = !1; ($ = $.get(Eo)) !== void 0 && !T; ) {
      var k = $.get(t);
      if (((I += 1), typeof k != "undefined")) {
        if (k === I) throw new RangeError("Cyclic object value");
        T = !0;
      }
      typeof $.get(Eo) == "undefined" && (I = 0);
    }
    if (
      (typeof l == "function"
        ? (v = l(n, v))
        : v instanceof Date
        ? (v = f(v))
        : r === "comma" &&
          wt(v) &&
          (v = ns.maybeMap(v, function (te) {
            return te instanceof Date ? f(te) : te;
          })),
      v === null)
    ) {
      if (o) return i && !g ? i(n, Ne.encoder, y, "key", d) : n;
      v = "";
    }
    if (jA(v) || ns.isBuffer(v)) {
      if (i) {
        var R = g ? n : i(n, Ne.encoder, y, "key", d);
        return [p(R) + "=" + p(i(v, Ne.encoder, y, "value", d))];
      }
      return [p(n) + "=" + p(String(v))];
    }
    var z = [];
    if (typeof v == "undefined") return z;
    var E;
    if (r === "comma" && wt(v))
      g && i && (v = ns.maybeMap(v, i)),
        (E = [{ value: v.length > 0 ? v.join(",") || null : void 0 }]);
    else if (wt(l)) E = l;
    else {
      var N = Object.keys(v);
      E = c ? N.sort(c) : N;
    }
    for (
      var B = s && wt(v) && v.length === 1 ? n + "[]" : n, K = 0;
      K < E.length;
      ++K
    ) {
      var V = E[K],
        Q =
          typeof V == "object" && typeof V.value != "undefined"
            ? V.value
            : v[V];
      if (!(a && Q === null)) {
        var W = wt(v)
          ? typeof r == "function"
            ? r(B, V)
            : B
          : B + (u ? "." + V : "[" + V + "]");
        P.set(t, I);
        var xe = Wf();
        xe.set(Eo, P),
          Gf(
            z,
            e(
              Q,
              W,
              r,
              s,
              o,
              a,
              r === "comma" && g && wt(v) ? null : i,
              l,
              c,
              u,
              f,
              d,
              p,
              g,
              y,
              xe
            )
          );
      }
    }
    return z;
  },
  UA = function (t) {
    if (!t) return Ne;
    if (
      t.encoder !== null &&
      typeof t.encoder != "undefined" &&
      typeof t.encoder != "function"
    )
      throw new TypeError("Encoder has to be a function.");
    var n = t.charset || Ne.charset;
    if (
      typeof t.charset != "undefined" &&
      t.charset !== "utf-8" &&
      t.charset !== "iso-8859-1"
    )
      throw new TypeError(
        "The charset option must be either utf-8, iso-8859-1, or undefined"
      );
    var r = dr.default;
    if (typeof t.format != "undefined") {
      if (!VA.call(dr.formatters, t.format))
        throw new TypeError("Unknown format option provided.");
      r = t.format;
    }
    var s = dr.formatters[r],
      o = Ne.filter;
    return (
      (typeof t.filter == "function" || wt(t.filter)) && (o = t.filter),
      {
        addQueryPrefix:
          typeof t.addQueryPrefix == "boolean"
            ? t.addQueryPrefix
            : Ne.addQueryPrefix,
        allowDots:
          typeof t.allowDots == "undefined" ? Ne.allowDots : !!t.allowDots,
        charset: n,
        charsetSentinel:
          typeof t.charsetSentinel == "boolean"
            ? t.charsetSentinel
            : Ne.charsetSentinel,
        delimiter:
          typeof t.delimiter == "undefined" ? Ne.delimiter : t.delimiter,
        encode: typeof t.encode == "boolean" ? t.encode : Ne.encode,
        encoder: typeof t.encoder == "function" ? t.encoder : Ne.encoder,
        encodeValuesOnly:
          typeof t.encodeValuesOnly == "boolean"
            ? t.encodeValuesOnly
            : Ne.encodeValuesOnly,
        filter: o,
        format: r,
        formatter: s,
        serializeDate:
          typeof t.serializeDate == "function"
            ? t.serializeDate
            : Ne.serializeDate,
        skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : Ne.skipNulls,
        sort: typeof t.sort == "function" ? t.sort : null,
        strictNullHandling:
          typeof t.strictNullHandling == "boolean"
            ? t.strictNullHandling
            : Ne.strictNullHandling,
      }
    );
  },
  zA = function (e, t) {
    var n = e,
      r = UA(t),
      s,
      o;
    typeof r.filter == "function"
      ? ((o = r.filter), (n = o("", n)))
      : wt(r.filter) && ((o = r.filter), (s = o));
    var a = [];
    if (typeof n != "object" || n === null) return "";
    var i;
    t && t.arrayFormat in vc
      ? (i = t.arrayFormat)
      : t && "indices" in t
      ? (i = t.indices ? "indices" : "repeat")
      : (i = "indices");
    var l = vc[i];
    if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var c = l === "comma" && t && t.commaRoundTrip;
    s || (s = Object.keys(n)), r.sort && s.sort(r.sort);
    for (var u = Wf(), f = 0; f < s.length; ++f) {
      var d = s[f];
      (r.skipNulls && n[d] === null) ||
        Gf(
          a,
          HA(
            n[d],
            d,
            l,
            c,
            r.strictNullHandling,
            r.skipNulls,
            r.encode ? r.encoder : null,
            r.filter,
            r.sort,
            r.allowDots,
            r.serializeDate,
            r.format,
            r.formatter,
            r.encodeValuesOnly,
            r.charset,
            u
          )
        );
    }
    var p = a.join(r.delimiter),
      g = r.addQueryPrefix === !0 ? "?" : "";
    return (
      r.charsetSentinel &&
        (r.charset === "iso-8859-1"
          ? (g += "utf8=%26%2310003%3B&")
          : (g += "utf8=%E2%9C%93&")),
      p.length > 0 ? g + p : ""
    );
  },
  Mn = qf,
  ra = Object.prototype.hasOwnProperty,
  qA = Array.isArray,
  Me = {
    allowDots: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decoder: Mn.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1,
  },
  WA = function (e) {
    return e.replace(/&#(\d+);/g, function (t, n) {
      return String.fromCharCode(parseInt(n, 10));
    });
  },
  Kf = function (e, t) {
    return e && typeof e == "string" && t.comma && e.indexOf(",") > -1
      ? e.split(",")
      : e;
  },
  GA = "utf8=%26%2310003%3B",
  KA = "utf8=%E2%9C%93",
  YA = function (t, n) {
    var r = { __proto__: null },
      s = n.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
      o = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
      a = s.split(n.delimiter, o),
      i = -1,
      l,
      c = n.charset;
    if (n.charsetSentinel)
      for (l = 0; l < a.length; ++l)
        a[l].indexOf("utf8=") === 0 &&
          (a[l] === KA ? (c = "utf-8") : a[l] === GA && (c = "iso-8859-1"),
          (i = l),
          (l = a.length));
    for (l = 0; l < a.length; ++l)
      if (l !== i) {
        var u = a[l],
          f = u.indexOf("]="),
          d = f === -1 ? u.indexOf("=") : f + 1,
          p,
          g;
        d === -1
          ? ((p = n.decoder(u, Me.decoder, c, "key")),
            (g = n.strictNullHandling ? null : ""))
          : ((p = n.decoder(u.slice(0, d), Me.decoder, c, "key")),
            (g = Mn.maybeMap(Kf(u.slice(d + 1), n), function (y) {
              return n.decoder(y, Me.decoder, c, "value");
            }))),
          g && n.interpretNumericEntities && c === "iso-8859-1" && (g = WA(g)),
          u.indexOf("[]=") > -1 && (g = qA(g) ? [g] : g),
          ra.call(r, p) ? (r[p] = Mn.combine(r[p], g)) : (r[p] = g);
      }
    return r;
  },
  JA = function (e, t, n, r) {
    for (var s = r ? t : Kf(t, n), o = e.length - 1; o >= 0; --o) {
      var a,
        i = e[o];
      if (i === "[]" && n.parseArrays) a = [].concat(s);
      else {
        a = n.plainObjects ? Object.create(null) : {};
        var l =
            i.charAt(0) === "[" && i.charAt(i.length - 1) === "]"
              ? i.slice(1, -1)
              : i,
          c = parseInt(l, 10);
        !n.parseArrays && l === ""
          ? (a = { 0: s })
          : !isNaN(c) &&
            i !== l &&
            String(c) === l &&
            c >= 0 &&
            n.parseArrays &&
            c <= n.arrayLimit
          ? ((a = []), (a[c] = s))
          : l !== "__proto__" && (a[l] = s);
      }
      s = a;
    }
    return s;
  },
  XA = function (t, n, r, s) {
    if (!!t) {
      var o = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
        a = /(\[[^[\]]*])/,
        i = /(\[[^[\]]*])/g,
        l = r.depth > 0 && a.exec(o),
        c = l ? o.slice(0, l.index) : o,
        u = [];
      if (c) {
        if (
          !r.plainObjects &&
          ra.call(Object.prototype, c) &&
          !r.allowPrototypes
        )
          return;
        u.push(c);
      }
      for (
        var f = 0;
        r.depth > 0 && (l = i.exec(o)) !== null && f < r.depth;

      ) {
        if (
          ((f += 1),
          !r.plainObjects &&
            ra.call(Object.prototype, l[1].slice(1, -1)) &&
            !r.allowPrototypes)
        )
          return;
        u.push(l[1]);
      }
      return l && u.push("[" + o.slice(l.index) + "]"), JA(u, n, r, s);
    }
  },
  QA = function (t) {
    if (!t) return Me;
    if (
      t.decoder !== null &&
      t.decoder !== void 0 &&
      typeof t.decoder != "function"
    )
      throw new TypeError("Decoder has to be a function.");
    if (
      typeof t.charset != "undefined" &&
      t.charset !== "utf-8" &&
      t.charset !== "iso-8859-1"
    )
      throw new TypeError(
        "The charset option must be either utf-8, iso-8859-1, or undefined"
      );
    var n = typeof t.charset == "undefined" ? Me.charset : t.charset;
    return {
      allowDots:
        typeof t.allowDots == "undefined" ? Me.allowDots : !!t.allowDots,
      allowPrototypes:
        typeof t.allowPrototypes == "boolean"
          ? t.allowPrototypes
          : Me.allowPrototypes,
      allowSparse:
        typeof t.allowSparse == "boolean" ? t.allowSparse : Me.allowSparse,
      arrayLimit:
        typeof t.arrayLimit == "number" ? t.arrayLimit : Me.arrayLimit,
      charset: n,
      charsetSentinel:
        typeof t.charsetSentinel == "boolean"
          ? t.charsetSentinel
          : Me.charsetSentinel,
      comma: typeof t.comma == "boolean" ? t.comma : Me.comma,
      decoder: typeof t.decoder == "function" ? t.decoder : Me.decoder,
      delimiter:
        typeof t.delimiter == "string" || Mn.isRegExp(t.delimiter)
          ? t.delimiter
          : Me.delimiter,
      depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : Me.depth,
      ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
      interpretNumericEntities:
        typeof t.interpretNumericEntities == "boolean"
          ? t.interpretNumericEntities
          : Me.interpretNumericEntities,
      parameterLimit:
        typeof t.parameterLimit == "number"
          ? t.parameterLimit
          : Me.parameterLimit,
      parseArrays: t.parseArrays !== !1,
      plainObjects:
        typeof t.plainObjects == "boolean" ? t.plainObjects : Me.plainObjects,
      strictNullHandling:
        typeof t.strictNullHandling == "boolean"
          ? t.strictNullHandling
          : Me.strictNullHandling,
    };
  },
  ZA = function (e, t) {
    var n = QA(t);
    if (e === "" || e === null || typeof e == "undefined")
      return n.plainObjects ? Object.create(null) : {};
    for (
      var r = typeof e == "string" ? YA(e, n) : e,
        s = n.plainObjects ? Object.create(null) : {},
        o = Object.keys(r),
        a = 0;
      a < o.length;
      ++a
    ) {
      var i = o[a],
        l = XA(i, r[i], n, typeof e == "string");
      s = Mn.merge(s, l, n);
    }
    return n.allowSparse === !0 ? s : Mn.compact(s);
  },
  eC = zA,
  tC = ZA,
  nC = Qa,
  Yf = { formats: nC, parse: tC, stringify: eC };
function rC(e) {
  return Yf.stringify(e);
}
function sC(e, t) {
  return Yf.parse(e, {
    arrayLimit: 1e4,
    decoder(n, r, s) {
      const o = n.replace(/\+/g, " ");
      if (s === "iso-8859-1") return o.replace(/%[0-9a-f]{2}/gi, unescape);
      if (t && /^[+-]?\d+(\.\d+)?$/.test(n)) return parseFloat(n);
      const a = { true: !0, false: !1, null: null, undefined: void 0 };
      if (n in a) return a[n];
      try {
        return decodeURIComponent(o);
      } catch {
        return o;
      }
    },
  });
}
function lO(e, t) {
  var u;
  const n =
      t != null && t.routerPush ? t.routerPush : (f) => (location.hash = f),
    { localStorageKey: r, detectNumber: s = !0 } = t != null ? t : {},
    [o, a] = location.hash.slice(1).split("?"),
    i = (u = Xu(e) ? e() : e) != null ? u : {},
    l = r ? Qu(r, { defaultValue: i })[0] : C(i),
    c = C();
  if (
    (Se(() => {
      c.value = l.value;
    }),
    a)
  )
    try {
      const f = sC(a, s);
      c.value = { ...i, ...c.value, ...f };
    } catch {
      c.value = i;
    }
  if (e && Object.keys(e).length) {
    const f = { ...e };
    if (c.value) for (const d in f) d in c.value && (f[d] = c.value[d]);
    c.value = f;
  }
  return (
    Pe(
      c,
      () => {
        if (c.value) {
          const f = rC(c.value);
          n(`${o}?${f}`);
        }
      },
      { deep: !0, immediate: !0 }
    ),
    c
  );
}
const cO = (e, t) => {
  const n = C(),
    { wrapperTarget: r, itemHeight: s, overscan: o = 5 } = t,
    a = aT(n),
    i = C([]),
    l = C(!1),
    c = (P, v) => {
      if (typeof s == "number") return Math.ceil(P / s);
      let $ = 0,
        I = 0;
      for (
        let T = v;
        T < e.value.length && (($ += s(T, e.value[T])), (I = T), !($ >= P));
        T++
      );
      return I - v;
    },
    u = (P) => {
      if (typeof s == "number") return Math.floor(P / s) + 1;
      let v = 0,
        $ = 0;
      for (let I = 0; I < e.value.length; I++)
        if (((v += s(I, e.value[I])), v >= P)) {
          $ = I;
          break;
        }
      return $ + 1;
    },
    f = (P) => {
      var $, I;
      return typeof s == "number"
        ? P * s
        : (I = ($ = e.value) == null ? void 0 : $.slice(0, P)) == null
        ? void 0
        : I.reduce(
            (T, k, R) =>
              T + (s == null ? void 0 : s(R, e == null ? void 0 : e.value[P])),
            0
          );
    },
    d = re(() =>
      typeof s == "number"
        ? e.value.length * s
        : e.value.reduce(
            (P, v, $) =>
              P + (s == null ? void 0 : s($, e == null ? void 0 : e.value[$])),
            0
          )
    ),
    p = () => {
      const P = Ee(n),
        v = Ee(r);
      if (P && v) {
        const { scrollTop: $, clientHeight: I } = P,
          T = u($),
          k = c(I, T),
          R = Math.max(0, T - o),
          z = Math.min(e.value.length, T + k + o),
          E = f(R);
        (v.style.height = d.value - E + "px"),
          (v.style.marginTop = E + "px"),
          (i.value = e.value
            .slice(R, z)
            .map((N, B) => ({ data: N, index: B + R })));
      }
    };
  Pe([a == null ? void 0 : a.width, a == null ? void 0 : a.height, e], () => {
    p();
  });
  const g = (P) => {
      const v = Ee(n);
      v && ((l.value = !0), (v.scrollTop = f(P)), p());
    },
    y = gt({
      ref: (P) => {
        n.value = P;
      },
      onScroll: (P) => {
        if (l.value) {
          l.value = !1;
          return;
        }
        P.preventDefault(), p();
      },
    });
  return [i, y, g];
};
function uO(e, t) {
  const n = re(() => Object.keys(t).map((r) => r));
  Pe(
    Object.keys(t).map((r) => t[r]),
    (r, s) => {
      const o = {};
      n.value.forEach((a, i) => {
        s[i] !== r[i] && (o[a] = { from: s[i], to: r[i] });
      }),
        Object.keys(o).length && console.log("[why-did-you-update]", e, o);
    },
    { deep: !0 }
  );
}
function fO(e, t = {}) {
  const {
      reconnectLimit: n = 3,
      reconnectInterval: r = 3 * 1e3,
      manual: s = C(!1),
      onOpen: o,
      onClose: a,
      onMessage: i,
      onError: l,
      protocols: c,
    } = t,
    u = C(0),
    f = C(),
    d = C(),
    p = C(!1),
    g = C(),
    y = C(3),
    P = () => {
      var k;
      u.value < n &&
        ((k = d.value) == null ? void 0 : k.readyState) !== 1 &&
        (f.value && clearTimeout(f.value),
        (f.value = setTimeout(() => {
          v(), u.value++;
        }, r)));
    },
    v = () => {
      f.value && clearTimeout(f.value), d.value && d.value.close();
      const k = new WebSocket(w(e), c);
      (y.value = 0),
        (k.onerror = (R) => {
          p.value || (P(), l == null || l(R, k), (y.value = k.readyState || 3));
        }),
        (k.onopen = (R) => {
          p.value ||
            (o == null || o(R, k),
            (u.value = 0),
            (y.value = k.readyState || 1));
        }),
        (k.onmessage = (R) => {
          p.value || (i == null || i(R, k), (g.value = R));
        }),
        (k.onclose = (R) => {
          p.value || (P(), a == null || a(R, k), (y.value = k.readyState || 3));
        }),
        (d.value = k);
    },
    $ = (k) => {
      var R;
      if (y.value === 1) (R = d.value) == null || R.send(k);
      else throw new Error("WebSocket disconnected");
    },
    I = () => {
      (u.value = 0), v();
    },
    T = () => {
      var k;
      f.value && clearTimeout(f.value),
        (u.value = n),
        (k = d.value) == null || k.close();
    };
  return (
    _e(e) && _e(s)
      ? Pe(
          [e, s],
          (k) => {
            const [R, z] = k;
            z || I();
          },
          { immediate: !0 }
        )
      : _e(s)
      ? Pe(
          s,
          (k) => {
            k || I();
          },
          { immediate: !0 }
        )
      : s || I(),
    Je(() => {
      (p.value = !0), T();
    }),
    {
      latestMessage: g,
      sendMessage: $,
      connect: I,
      disconnect: T,
      readyState: y,
      webSocketIns: d.value,
    }
  );
}
function oC(e, t, n) {
  const { box: r = "content-box", ...s } = n != null ? n : {},
    o = C(window && "ResizeObserver" in window);
  let a;
  const i = re(() => (Array.isArray(e) ? e.map((f) => Ee(f)) : [Ee(e)])),
    l = () => {
      a && (a.disconnect(), (a = null));
    },
    c = Pe(
      i,
      (f) => {
        l(),
          o.value &&
            window &&
            ((a = new ResizeObserver(t)),
            f.forEach((d) => {
              d && a.observe(d, { box: r, ...s });
            }));
      },
      { flush: "post", immediate: !0 }
    ),
    u = () => {
      l(), c();
    };
  return Ps() && Rn(u), { isSupported: o, stop: u };
}
function aC(e) {
  return ["width", "height", "top", "left", "bottom", "right"].includes(e);
}
function dO(e, t) {
  const {
      reset: n = !0,
      windowResize: r = !0,
      windowScroll: s = !0,
      immediate: o = !0,
    } = t != null ? t : {},
    a = gt({ width: 0, height: 0, top: 0, left: 0, bottom: 0, right: 0 }),
    i = () => {
      const l = Ee(e);
      if (!l) {
        n &&
          Object.keys(a).forEach((c) => {
            aC(c) && (a[c] = 0);
          });
        return;
      }
      if (l) {
        const {
          width: c,
          height: u,
          top: f,
          left: d,
          bottom: p,
          right: g,
        } = l.getBoundingClientRect();
        (a.width = c),
          (a.height = u),
          (a.top = f),
          (a.left = d),
          (a.bottom = p),
          (a.right = g);
      }
    };
  return (
    r && jt("resize", i, { passive: !0 }),
    s && jt("scroll", i, { capture: !0, passive: !0 }),
    oC(e, i),
    Pe(() => Ee(e), i),
    qe(() => {
      o && i();
    }),
    { ...Sr(a) }
  );
}
const pO = (e, t, n = {}) => {
  kf(
    () => {
      const r = Ee(t);
      if (!r) return;
      const s = new MutationObserver(e);
      return (
        s.observe(r, n),
        () => {
          s == null || s.disconnect();
        }
      );
    },
    [n],
    t
  );
};
/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let Jf;
const Xs = (e) => (Jf = e),
  Xf = Symbol();
function sa(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var pr;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(pr || (pr = {}));
function iC() {
  const e = Ec(!0),
    t = e.run(() => C({}));
  let n = [],
    r = [];
  const s = St({
    install(o) {
      Xs(s),
        (s._a = o),
        o.provide(Xf, s),
        (o.config.globalProperties.$pinia = s),
        r.forEach((a) => n.push(a)),
        (r = []);
    },
    use(o) {
      return !this._a && !Dy ? r.push(o) : n.push(o), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return s;
}
const Qf = () => {};
function mc(e, t, n, r = Qf) {
  e.push(t);
  const s = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), r());
  };
  return !n && Ps() && Rn(s), s;
}
function vn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const lC = (e) => e();
function oa(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      s = e[n];
    sa(s) && sa(r) && e.hasOwnProperty(n) && !_e(r) && !Rt(r)
      ? (e[n] = oa(s, r))
      : (e[n] = r);
  }
  return e;
}
const cC = Symbol();
function uC(e) {
  return !sa(e) || !e.hasOwnProperty(cC);
}
const { assign: Ot } = Object;
function fC(e) {
  return !!(_e(e) && e.effect);
}
function dC(e, t, n, r) {
  const { state: s, actions: o, getters: a } = t,
    i = n.state.value[e];
  let l;
  function c() {
    i || (n.state.value[e] = s ? s() : {});
    const u = Sr(n.state.value[e]);
    return Ot(
      u,
      o,
      Object.keys(a || {}).reduce(
        (f, d) => (
          (f[d] = St(
            re(() => {
              Xs(n);
              const p = n._s.get(e);
              return a[d].call(p, p);
            })
          )),
          f
        ),
        {}
      )
    );
  }
  return (l = Zf(e, c, t, n, r, !0)), l;
}
function Zf(e, t, n = {}, r, s, o) {
  let a;
  const i = Ot({ actions: {} }, n),
    l = { deep: !0 };
  let c,
    u,
    f = [],
    d = [],
    p;
  const g = r.state.value[e];
  !o && !g && (r.state.value[e] = {}), C({});
  let y;
  function P(E) {
    let N;
    (c = u = !1),
      typeof E == "function"
        ? (E(r.state.value[e]),
          (N = { type: pr.patchFunction, storeId: e, events: p }))
        : (oa(r.state.value[e], E),
          (N = { type: pr.patchObject, payload: E, storeId: e, events: p }));
    const B = (y = Symbol());
    an().then(() => {
      y === B && (c = !0);
    }),
      (u = !0),
      vn(f, N, r.state.value[e]);
  }
  const v = o
    ? function () {
        const { state: N } = n,
          B = N ? N() : {};
        this.$patch((K) => {
          Ot(K, B);
        });
      }
    : Qf;
  function $() {
    a.stop(), (f = []), (d = []), r._s.delete(e);
  }
  function I(E, N) {
    return function () {
      Xs(r);
      const B = Array.from(arguments),
        K = [],
        V = [];
      function Q(te) {
        K.push(te);
      }
      function W(te) {
        V.push(te);
      }
      vn(d, { args: B, name: E, store: k, after: Q, onError: W });
      let xe;
      try {
        xe = N.apply(this && this.$id === e ? this : k, B);
      } catch (te) {
        throw (vn(V, te), te);
      }
      return xe instanceof Promise
        ? xe
            .then((te) => (vn(K, te), te))
            .catch((te) => (vn(V, te), Promise.reject(te)))
        : (vn(K, xe), xe);
    };
  }
  const T = {
      _p: r,
      $id: e,
      $onAction: mc.bind(null, d),
      $patch: P,
      $reset: v,
      $subscribe(E, N = {}) {
        const B = mc(f, E, N.detached, () => K()),
          K = a.run(() =>
            Pe(
              () => r.state.value[e],
              (V) => {
                (N.flush === "sync" ? u : c) &&
                  E({ storeId: e, type: pr.direct, events: p }, V);
              },
              Ot({}, l, N)
            )
          );
        return B;
      },
      $dispose: $,
    },
    k = gt(T);
  r._s.set(e, k);
  const R = (r._a && r._a.runWithContext) || lC,
    z = r._e.run(() => ((a = Ec()), R(() => a.run(t))));
  for (const E in z) {
    const N = z[E];
    if ((_e(N) && !fC(N)) || Rt(N))
      o ||
        (g && uC(N) && (_e(N) ? (N.value = g[E]) : oa(N, g[E])),
        (r.state.value[e][E] = N));
    else if (typeof N == "function") {
      const B = I(E, N);
      (z[E] = B), (i.actions[E] = N);
    }
  }
  return (
    Ot(k, z),
    Ot(fe(k), z),
    Object.defineProperty(k, "$state", {
      get: () => r.state.value[e],
      set: (E) => {
        P((N) => {
          Ot(N, E);
        });
      },
    }),
    r._p.forEach((E) => {
      Ot(
        k,
        a.run(() => E({ store: k, app: r._a, pinia: r, options: i }))
      );
    }),
    g && o && n.hydrate && n.hydrate(k.$state, g),
    (c = !0),
    (u = !0),
    k
  );
}
function hO(e, t, n) {
  let r, s;
  const o = typeof t == "function";
  typeof e == "string" ? ((r = e), (s = o ? n : t)) : ((s = e), (r = e.id));
  function a(i, l) {
    const c = Fp();
    return (
      (i = i || (c ? lt(Xf, null) : null)),
      i && Xs(i),
      (i = Jf),
      i._s.has(r) || (o ? Zf(r, t, s, i) : dC(r, s, i)),
      i._s.get(r)
    );
  }
  return (a.$id = r), a;
}
const pC = iC();
var $s = {
  ...J2,
  enhanceApp({ app: e }) {
    e.use(pC),
      e.use(J$),
      e.component("demo", bb),
      e.component("vhp-button", Eb);
  },
};
function hC(e, t) {
  let n = [],
    r = !0;
  const s = (o) => {
    if (r) {
      r = !1;
      return;
    }
    const a = [],
      i = Math.min(n.length, o.length);
    for (let l = 0; l < i; l++) {
      let c = n[l];
      const [u, f, d = ""] = o[l];
      if (c.tagName.toLocaleLowerCase() === u) {
        for (const p in f)
          c.getAttribute(p) !== f[p] && c.setAttribute(p, f[p]);
        for (let p = 0; p < c.attributes.length; p++) {
          const g = c.attributes[p].name;
          g in f || c.removeAttribute(g);
        }
        c.innerHTML !== d && (c.innerHTML = d);
      } else
        document.head.removeChild(c), (c = gc(o[l])), document.head.append(c);
      a.push(c);
    }
    n.slice(i).forEach((l) => document.head.removeChild(l)),
      o.slice(i).forEach((l) => {
        const c = gc(l);
        document.head.appendChild(c), a.push(c);
      }),
      (n = a);
  };
  Se(() => {
    const o = e.data,
      a = t.value,
      i = o && o.description,
      l = o && o.frontmatter.head;
    (document.title = Pu(a, o)),
      document
        .querySelector("meta[name=description]")
        .setAttribute("content", i || a.description),
      s([...(l ? _C(l) : [])]);
  });
}
function gc([e, t, n]) {
  const r = document.createElement(e);
  for (const s in t) r.setAttribute(s, t[s]);
  return n && (r.innerHTML = n), r;
}
function vC(e) {
  return e[0] === "meta" && e[1] && e[1].name === "description";
}
function _C(e) {
  return e.filter((t) => !vC(t));
}
const ko = new Set(),
  ed = () => document.createElement("link"),
  mC = (e) => {
    const t = ed();
    (t.rel = "prefetch"), (t.href = e), document.head.appendChild(t);
  },
  gC = (e) => {
    const t = new XMLHttpRequest();
    t.open("GET", e, (t.withCredentials = !0)), t.send();
  };
let Jr;
const yC =
  Ue &&
  (Jr = ed()) &&
  Jr.relList &&
  Jr.relList.supports &&
  Jr.relList.supports("prefetch")
    ? mC
    : gC;
function bC() {
  if (!Ue || !window.IntersectionObserver) return;
  let e;
  if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
    return;
  const t = window.requestIdleCallback || setTimeout;
  let n = null;
  const r = () => {
    n && n.disconnect(),
      (n = new IntersectionObserver((o) => {
        o.forEach((a) => {
          if (a.isIntersecting) {
            const i = a.target;
            n.unobserve(i);
            const { pathname: l } = i;
            if (!ko.has(l)) {
              ko.add(l);
              const c = Eu(l);
              yC(c);
            }
          }
        });
      })),
      t(() => {
        document.querySelectorAll("#app a").forEach((o) => {
          const { target: a, hostname: i, pathname: l } = o,
            c = l.match(/\.\w+$/);
          (c && c[0] !== ".html") ||
            (a !== "_blank" &&
              i === location.hostname &&
              (l !== location.pathname ? n.observe(o) : ko.add(l)));
        });
      });
  };
  qe(r);
  const s = ln();
  Pe(() => s.path, r),
    Je(() => {
      n && n.disconnect();
    });
}
const $C = q({
    setup(e, { slots: t }) {
      const n = C(!1);
      return (
        qe(() => {
          n.value = !0;
        }),
        () => (n.value && t.default ? t.default() : null)
      );
    },
  }),
  wC = $s.NotFound || (() => "404 Not Found"),
  SC = {
    name: "VitePressApp",
    setup() {
      const { site: e } = he();
      return (
        qe(() => {
          Pe(
            () => e.value.lang,
            (t) => {
              document.documentElement.lang = t;
            },
            { immediate: !0 }
          );
        }),
        bC(),
        () => fs($s.Layout)
      );
    },
  };
function xC() {
  const e = EC(),
    t = PC();
  t.provide(Tu, e);
  const n = qh(e.route);
  return (
    t.provide(ku, n),
    t.component("Content", Yh),
    t.component("ClientOnly", $C),
    Object.defineProperty(t.config.globalProperties, "$frontmatter", {
      get() {
        return n.frontmatter.value;
      },
    }),
    $s.enhanceApp && $s.enhanceApp({ app: t, router: e, siteData: kr }),
    { app: t, router: e, data: n }
  );
}
function PC() {
  return Rh(SC);
}
function EC() {
  let e = Ue,
    t;
  return Gh((n) => {
    let r = Eu(n);
    return (
      e && (t = r),
      (e || t === r) && (r = r.replace(/\.js$/, ".lean.js")),
      Ue && (e = !1),
      aa(() => import(r), [])
    );
  }, wC);
}
if (Ue) {
  const { app: e, router: t, data: n } = xC();
  t.go().then(() => {
    hC(t.route, n.site), e.mount("#app");
  });
}
export {
  YC as $,
  da as A,
  IC as B,
  gn as C,
  TC as D,
  tw as E,
  oe as F,
  MC as G,
  FC as H,
  dO as I,
  VC as J,
  jt as K,
  NC as L,
  Se as M,
  DC as N,
  HC as O,
  re as P,
  BC as Q,
  jC as R,
  WC as S,
  UC as T,
  zC as U,
  Jd as V,
  Dc as W,
  pe as X,
  GC as Y,
  Ju as Z,
  U as _,
  M as a,
  Qu as a0,
  JC as a1,
  XC as a2,
  ZC as a3,
  sw as a4,
  QC as a5,
  pO as a6,
  eO as a7,
  qC as a8,
  Q$ as a9,
  fs as aa,
  AC as ab,
  hO as ac,
  gt as ad,
  X$ as ae,
  Sr as af,
  oC as ag,
  rO as ah,
  tO as ai,
  nO as aj,
  aT as ak,
  sO as al,
  iT as am,
  oO as an,
  aO as ao,
  iO as ap,
  lO as aq,
  cO as ar,
  fO as as,
  uO as at,
  oT as au,
  Kh as av,
  ln as aw,
  he as ax,
  Uy as ay,
  Yp as b,
  S as c,
  xC as createApp,
  b as d,
  q as e,
  je as f,
  nt as g,
  KC as h,
  Pe as i,
  qe as j,
  Z as k,
  Y as l,
  Ie as m,
  ie as n,
  _ as o,
  tt as p,
  Er as q,
  C as r,
  CC as s,
  ae as t,
  w as u,
  La as v,
  ne as w,
  OC as x,
  LC as y,
  RC as z,
};
