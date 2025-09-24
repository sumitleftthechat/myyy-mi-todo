(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
      return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      r(i);
  new MutationObserver(i => {
      for (const s of i)
          if (s.type === "childList")
              for (const o of s.addedNodes)
                  o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
  }
  ).observe(document, {
      childList: !0,
      subtree: !0
  });
  function n(i) {
      const s = {};
      return i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
      s
  }
  function r(i) {
      if (i.ep)
          return;
      i.ep = !0;
      const s = n(i);
      fetch(i.href, s)
  }
}
)();
var Fp = {
  exports: {}
}
, ma = {}
, zp = {
  exports: {}
}
, $ = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ds = Symbol.for("react.element")
, Mv = Symbol.for("react.portal")
, Nv = Symbol.for("react.fragment")
, Av = Symbol.for("react.strict_mode")
, Rv = Symbol.for("react.profiler")
, Dv = Symbol.for("react.provider")
, jv = Symbol.for("react.context")
, Lv = Symbol.for("react.forward_ref")
, Ov = Symbol.for("react.suspense")
, bv = Symbol.for("react.memo")
, Vv = Symbol.for("react.lazy")
, Zf = Symbol.iterator;
function Iv(t) {
  return t === null || typeof t != "object" ? null : (t = Zf && t[Zf] || t["@@iterator"],
  typeof t == "function" ? t : null)
}
var Bp = {
  isMounted: function() {
      return !1
  },
  enqueueForceUpdate: function() {},
  enqueueReplaceState: function() {},
  enqueueSetState: function() {}
}
, Up = Object.assign
, $p = {};
function pi(t, e, n) {
  this.props = t,
  this.context = e,
  this.refs = $p,
  this.updater = n || Bp
}
pi.prototype.isReactComponent = {};
pi.prototype.setState = function(t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, t, e, "setState")
}
;
pi.prototype.forceUpdate = function(t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate")
}
;
function Wp() {}
Wp.prototype = pi.prototype;
function nc(t, e, n) {
  this.props = t,
  this.context = e,
  this.refs = $p,
  this.updater = n || Bp
}
var rc = nc.prototype = new Wp;
rc.constructor = nc;
Up(rc, pi.prototype);
rc.isPureReactComponent = !0;
var qf = Array.isArray
, Hp = Object.prototype.hasOwnProperty
, ic = {
  current: null
}
, Kp = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Yp(t, e, n) {
  var r, i = {}, s = null, o = null;
  if (e != null)
      for (r in e.ref !== void 0 && (o = e.ref),
      e.key !== void 0 && (s = "" + e.key),
      e)
          Hp.call(e, r) && !Kp.hasOwnProperty(r) && (i[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1)
      i.children = n;
  else if (1 < a) {
      for (var l = Array(a), u = 0; u < a; u++)
          l[u] = arguments[u + 2];
      i.children = l
  }
  if (t && t.defaultProps)
      for (r in a = t.defaultProps,
      a)
          i[r] === void 0 && (i[r] = a[r]);
  return {
      $$typeof: Ds,
      type: t,
      key: s,
      ref: o,
      props: i,
      _owner: ic.current
  }
}
function Fv(t, e) {
  return {
      $$typeof: Ds,
      type: t.type,
      key: e,
      ref: t.ref,
      props: t.props,
      _owner: t._owner
  }
}
function sc(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Ds
}
function zv(t) {
  var e = {
      "=": "=0",
      ":": "=2"
  };
  return "$" + t.replace(/[=:]/g, function(n) {
      return e[n]
  })
}
var Jf = /\/+/g;
function Fa(t, e) {
  return typeof t == "object" && t !== null && t.key != null ? zv("" + t.key) : e.toString(36)
}
function fo(t, e, n, r, i) {
  var s = typeof t;
  (s === "undefined" || s === "boolean") && (t = null);
  var o = !1;
  if (t === null)
      o = !0;
  else
      switch (s) {
      case "string":
      case "number":
          o = !0;
          break;
      case "object":
          switch (t.$$typeof) {
          case Ds:
          case Mv:
              o = !0
          }
      }
  if (o)
      return o = t,
      i = i(o),
      t = r === "" ? "." + Fa(o, 0) : r,
      qf(i) ? (n = "",
      t != null && (n = t.replace(Jf, "$&/") + "/"),
      fo(i, e, n, "", function(u) {
          return u
      })) : i != null && (sc(i) && (i = Fv(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Jf, "$&/") + "/") + t)),
      e.push(i)),
      1;
  if (o = 0,
  r = r === "" ? "." : r + ":",
  qf(t))
      for (var a = 0; a < t.length; a++) {
          s = t[a];
          var l = r + Fa(s, a);
          o += fo(s, e, n, l, i)
      }
  else if (l = Iv(t),
  typeof l == "function")
      for (t = l.call(t),
      a = 0; !(s = t.next()).done; )
          s = s.value,
          l = r + Fa(s, a++),
          o += fo(s, e, n, l, i);
  else if (s === "object")
      throw e = String(t),
      Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return o
}
function $s(t, e, n) {
  if (t == null)
      return t;
  var r = []
    , i = 0;
  return fo(t, r, "", "", function(s) {
      return e.call(n, s, i++)
  }),
  r
}
function Bv(t) {
  if (t._status === -1) {
      var e = t._result;
      e = e(),
      e.then(function(n) {
          (t._status === 0 || t._status === -1) && (t._status = 1,
          t._result = n)
      }, function(n) {
          (t._status === 0 || t._status === -1) && (t._status = 2,
          t._result = n)
      }),
      t._status === -1 && (t._status = 0,
      t._result = e)
  }
  if (t._status === 1)
      return t._result.default;
  throw t._result
}
var We = {
  current: null
}
, ho = {
  transition: null
}
, Uv = {
  ReactCurrentDispatcher: We,
  ReactCurrentBatchConfig: ho,
  ReactCurrentOwner: ic
};
function Gp() {
  throw Error("act(...) is not supported in production builds of React.")
}
$.Children = {
  map: $s,
  forEach: function(t, e, n) {
      $s(t, function() {
          e.apply(this, arguments)
      }, n)
  },
  count: function(t) {
      var e = 0;
      return $s(t, function() {
          e++
      }),
      e
  },
  toArray: function(t) {
      return $s(t, function(e) {
          return e
      }) || []
  },
  only: function(t) {
      if (!sc(t))
          throw Error("React.Children.only expected to receive a single React element child.");
      return t
  }
};
$.Component = pi;
$.Fragment = Nv;
$.Profiler = Rv;
$.PureComponent = nc;
$.StrictMode = Av;
$.Suspense = Ov;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uv;
$.act = Gp;
$.cloneElement = function(t, e, n) {
  if (t == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
  var r = Up({}, t.props)
    , i = t.key
    , s = t.ref
    , o = t._owner;
  if (e != null) {
      if (e.ref !== void 0 && (s = e.ref,
      o = ic.current),
      e.key !== void 0 && (i = "" + e.key),
      t.type && t.type.defaultProps)
          var a = t.type.defaultProps;
      for (l in e)
          Hp.call(e, l) && !Kp.hasOwnProperty(l) && (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l])
  }
  var l = arguments.length - 2;
  if (l === 1)
      r.children = n;
  else if (1 < l) {
      a = Array(l);
      for (var u = 0; u < l; u++)
          a[u] = arguments[u + 2];
      r.children = a
  }
  return {
      $$typeof: Ds,
      type: t.type,
      key: i,
      ref: s,
      props: r,
      _owner: o
  }
}
;
$.createContext = function(t) {
  return t = {
      $$typeof: jv,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
  },
  t.Provider = {
      $$typeof: Dv,
      _context: t
  },
  t.Consumer = t
}
;
$.createElement = Yp;
$.createFactory = function(t) {
  var e = Yp.bind(null, t);
  return e.type = t,
  e
}
;
$.createRef = function() {
  return {
      current: null
  }
}
;
$.forwardRef = function(t) {
  return {
      $$typeof: Lv,
      render: t
  }
}
;
$.isValidElement = sc;
$.lazy = function(t) {
  return {
      $$typeof: Vv,
      _payload: {
          _status: -1,
          _result: t
      },
      _init: Bv
  }
}
;
$.memo = function(t, e) {
  return {
      $$typeof: bv,
      type: t,
      compare: e === void 0 ? null : e
  }
}
;
$.startTransition = function(t) {
  var e = ho.transition;
  ho.transition = {};
  try {
      t()
  } finally {
      ho.transition = e
  }
}
;
$.unstable_act = Gp;
$.useCallback = function(t, e) {
  return We.current.useCallback(t, e)
}
;
$.useContext = function(t) {
  return We.current.useContext(t)
}
;
$.useDebugValue = function() {}
;
$.useDeferredValue = function(t) {
  return We.current.useDeferredValue(t)
}
;
$.useEffect = function(t, e) {
  return We.current.useEffect(t, e)
}
;
$.useId = function() {
  return We.current.useId()
}
;
$.useImperativeHandle = function(t, e, n) {
  return We.current.useImperativeHandle(t, e, n)
}
;
$.useInsertionEffect = function(t, e) {
  return We.current.useInsertionEffect(t, e)
}
;
$.useLayoutEffect = function(t, e) {
  return We.current.useLayoutEffect(t, e)
}
;
$.useMemo = function(t, e) {
  return We.current.useMemo(t, e)
}
;
$.useReducer = function(t, e, n) {
  return We.current.useReducer(t, e, n)
}
;
$.useRef = function(t) {
  return We.current.useRef(t)
}
;
$.useState = function(t) {
  return We.current.useState(t)
}
;
$.useSyncExternalStore = function(t, e, n) {
  return We.current.useSyncExternalStore(t, e, n)
}
;
$.useTransition = function() {
  return We.current.useTransition()
}
;
$.version = "18.3.1";
zp.exports = $;
var M = zp.exports;
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var $v = M
, Wv = Symbol.for("react.element")
, Hv = Symbol.for("react.fragment")
, Kv = Object.prototype.hasOwnProperty
, Yv = $v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
, Gv = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Xp(t, e, n) {
  var r, i = {}, s = null, o = null;
  n !== void 0 && (s = "" + n),
  e.key !== void 0 && (s = "" + e.key),
  e.ref !== void 0 && (o = e.ref);
  for (r in e)
      Kv.call(e, r) && !Gv.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
      for (r in e = t.defaultProps,
      e)
          i[r] === void 0 && (i[r] = e[r]);
  return {
      $$typeof: Wv,
      type: t,
      key: s,
      ref: o,
      props: i,
      _owner: Yv.current
  }
}
ma.Fragment = Hv;
ma.jsx = Xp;
ma.jsxs = Xp;
Fp.exports = ma;
var _ = Fp.exports
, Qp = {
  exports: {}
}
, ht = {}
, Zp = {
  exports: {}
}
, qp = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function(t) {
  function e(D, R) {
      var N = D.length;
      D.push(R);
      e: for (; 0 < N; ) {
          var b = N - 1 >>> 1
            , U = D[b];
          if (0 < i(U, R))
              D[b] = R,
              D[N] = U,
              N = b;
          else
              break e
      }
  }
  function n(D) {
      return D.length === 0 ? null : D[0]
  }
  function r(D) {
      if (D.length === 0)
          return null;
      var R = D[0]
        , N = D.pop();
      if (N !== R) {
          D[0] = N;
          e: for (var b = 0, U = D.length, Yt = U >>> 1; b < Yt; ) {
              var _e = 2 * (b + 1) - 1
                , me = D[_e]
                , Ot = _e + 1
                , xr = D[Ot];
              if (0 > i(me, N))
                  Ot < U && 0 > i(xr, me) ? (D[b] = xr,
                  D[Ot] = N,
                  b = Ot) : (D[b] = me,
                  D[_e] = N,
                  b = _e);
              else if (Ot < U && 0 > i(xr, N))
                  D[b] = xr,
                  D[Ot] = N,
                  b = Ot;
              else
                  break e
          }
      }
      return R
  }
  function i(D, R) {
      var N = D.sortIndex - R.sortIndex;
      return N !== 0 ? N : D.id - R.id
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
      var s = performance;
      t.unstable_now = function() {
          return s.now()
      }
  } else {
      var o = Date
        , a = o.now();
      t.unstable_now = function() {
          return o.now() - a
      }
  }
  var l = []
    , u = []
    , c = 1
    , f = null
    , d = 3
    , p = !1
    , v = !1
    , h = !1
    , x = typeof setTimeout == "function" ? setTimeout : null
    , g = typeof clearTimeout == "function" ? clearTimeout : null
    , m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(D) {
      for (var R = n(u); R !== null; ) {
          if (R.callback === null)
              r(u);
          else if (R.startTime <= D)
              r(u),
              R.sortIndex = R.expirationTime,
              e(l, R);
          else
              break;
          R = n(u)
      }
  }
  function S(D) {
      if (h = !1,
      y(D),
      !v)
          if (n(l) !== null)
              v = !0,
              K(w);
          else {
              var R = n(u);
              R !== null && B(S, R.startTime - D)
          }
  }
  function w(D, R) {
      v = !1,
      h && (h = !1,
      g(k),
      k = -1),
      p = !0;
      var N = d;
      try {
          for (y(R),
          f = n(l); f !== null && (!(f.expirationTime > R) || D && !O()); ) {
              var b = f.callback;
              if (typeof b == "function") {
                  f.callback = null,
                  d = f.priorityLevel;
                  var U = b(f.expirationTime <= R);
                  R = t.unstable_now(),
                  typeof U == "function" ? f.callback = U : f === n(l) && r(l),
                  y(R)
              } else
                  r(l);
              f = n(l)
          }
          if (f !== null)
              var Yt = !0;
          else {
              var _e = n(u);
              _e !== null && B(S, _e.startTime - R),
              Yt = !1
          }
          return Yt
      } finally {
          f = null,
          d = N,
          p = !1
      }
  }
  var T = !1
    , C = null
    , k = -1
    , P = 5
    , E = -1;
  function O() {
      return !(t.unstable_now() - E < P)
  }
  function V() {
      if (C !== null) {
          var D = t.unstable_now();
          E = D;
          var R = !0;
          try {
              R = C(!0, D)
          } finally {
              R ? I() : (T = !1,
              C = null)
          }
      } else
          T = !1
  }
  var I;
  if (typeof m == "function")
      I = function() {
          m(V)
      }
      ;
  else if (typeof MessageChannel < "u") {
      var z = new MessageChannel
        , G = z.port2;
      z.port1.onmessage = V,
      I = function() {
          G.postMessage(null)
      }
  } else
      I = function() {
          x(V, 0)
      }
      ;
  function K(D) {
      C = D,
      T || (T = !0,
      I())
  }
  function B(D, R) {
      k = x(function() {
          D(t.unstable_now())
      }, R)
  }
  t.unstable_IdlePriority = 5,
  t.unstable_ImmediatePriority = 1,
  t.unstable_LowPriority = 4,
  t.unstable_NormalPriority = 3,
  t.unstable_Profiling = null,
  t.unstable_UserBlockingPriority = 2,
  t.unstable_cancelCallback = function(D) {
      D.callback = null
  }
  ,
  t.unstable_continueExecution = function() {
      v || p || (v = !0,
      K(w))
  }
  ,
  t.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < D ? Math.floor(1e3 / D) : 5
  }
  ,
  t.unstable_getCurrentPriorityLevel = function() {
      return d
  }
  ,
  t.unstable_getFirstCallbackNode = function() {
      return n(l)
  }
  ,
  t.unstable_next = function(D) {
      switch (d) {
      case 1:
      case 2:
      case 3:
          var R = 3;
          break;
      default:
          R = d
      }
      var N = d;
      d = R;
      try {
          return D()
      } finally {
          d = N
      }
  }
  ,
  t.unstable_pauseExecution = function() {}
  ,
  t.unstable_requestPaint = function() {}
  ,
  t.unstable_runWithPriority = function(D, R) {
      switch (D) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
          break;
      default:
          D = 3
      }
      var N = d;
      d = D;
      try {
          return R()
      } finally {
          d = N
      }
  }
  ,
  t.unstable_scheduleCallback = function(D, R, N) {
      var b = t.unstable_now();
      switch (typeof N == "object" && N !== null ? (N = N.delay,
      N = typeof N == "number" && 0 < N ? b + N : b) : N = b,
      D) {
      case 1:
          var U = -1;
          break;
      case 2:
          U = 250;
          break;
      case 5:
          U = 1073741823;
          break;
      case 4:
          U = 1e4;
          break;
      default:
          U = 5e3
      }
      return U = N + U,
      D = {
          id: c++,
          callback: R,
          priorityLevel: D,
          startTime: N,
          expirationTime: U,
          sortIndex: -1
      },
      N > b ? (D.sortIndex = N,
      e(u, D),
      n(l) === null && D === n(u) && (h ? (g(k),
      k = -1) : h = !0,
      B(S, N - b))) : (D.sortIndex = U,
      e(l, D),
      v || p || (v = !0,
      K(w))),
      D
  }
  ,
  t.unstable_shouldYield = O,
  t.unstable_wrapCallback = function(D) {
      var R = d;
      return function() {
          var N = d;
          d = R;
          try {
              return D.apply(this, arguments)
          } finally {
              d = N
          }
      }
  }
}
)(qp);
Zp.exports = qp;
var Xv = Zp.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Qv = M
, ct = Xv;
function A(t) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)
      e += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Jp = new Set
, ts = {};
function mr(t, e) {
  qr(t, e),
  qr(t + "Capture", e)
}
function qr(t, e) {
  for (ts[t] = e,
  t = 0; t < e.length; t++)
      Jp.add(e[t])
}
var rn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
, jl = Object.prototype.hasOwnProperty
, Zv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
, ed = {}
, td = {};
function qv(t) {
  return jl.call(td, t) ? !0 : jl.call(ed, t) ? !1 : Zv.test(t) ? td[t] = !0 : (ed[t] = !0,
  !1)
}
function Jv(t, e, n, r) {
  if (n !== null && n.type === 0)
      return !1;
  switch (typeof e) {
  case "function":
  case "symbol":
      return !0;
  case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5),
      t !== "data-" && t !== "aria-");
  default:
      return !1
  }
}
function e1(t, e, n, r) {
  if (e === null || typeof e > "u" || Jv(t, e, n, r))
      return !0;
  if (r)
      return !1;
  if (n !== null)
      switch (n.type) {
      case 3:
          return !e;
      case 4:
          return e === !1;
      case 5:
          return isNaN(e);
      case 6:
          return isNaN(e) || 1 > e
      }
  return !1
}
function He(t, e, n, r, i, s, o) {
  this.acceptsBooleans = e === 2 || e === 3 || e === 4,
  this.attributeName = r,
  this.attributeNamespace = i,
  this.mustUseProperty = n,
  this.propertyName = t,
  this.type = e,
  this.sanitizeURL = s,
  this.removeEmptyString = o
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
  Ae[t] = new He(t,0,!1,t,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
  var e = t[0];
  Ae[e] = new He(e,1,!1,t[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
  Ae[t] = new He(t,2,!1,t.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
  Ae[t] = new He(t,2,!1,t,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
  Ae[t] = new He(t,3,!1,t.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
  Ae[t] = new He(t,3,!0,t,null,!1,!1)
});
["capture", "download"].forEach(function(t) {
  Ae[t] = new He(t,4,!1,t,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(t) {
  Ae[t] = new He(t,6,!1,t,null,!1,!1)
});
["rowSpan", "start"].forEach(function(t) {
  Ae[t] = new He(t,5,!1,t.toLowerCase(),null,!1,!1)
});
var oc = /[\-:]([a-z])/g;
function ac(t) {
  return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
  var e = t.replace(oc, ac);
  Ae[e] = new He(e,1,!1,t,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
  var e = t.replace(oc, ac);
  Ae[e] = new He(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
  var e = t.replace(oc, ac);
  Ae[e] = new He(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(t) {
  Ae[t] = new He(t,1,!1,t.toLowerCase(),null,!1,!1)
});
Ae.xlinkHref = new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(t) {
  Ae[t] = new He(t,1,!1,t.toLowerCase(),null,!0,!0)
});
function lc(t, e, n, r) {
  var i = Ae.hasOwnProperty(e) ? Ae[e] : null;
  (i !== null ? i.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e1(e, n, i, r) && (n = null),
  r || i === null ? qv(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : i.mustUseProperty ? t[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (e = i.attributeName,
  r = i.attributeNamespace,
  n === null ? t.removeAttribute(e) : (i = i.type,
  n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
  r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
}
var fn = Qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
, Ws = Symbol.for("react.element")
, Tr = Symbol.for("react.portal")
, kr = Symbol.for("react.fragment")
, uc = Symbol.for("react.strict_mode")
, Ll = Symbol.for("react.profiler")
, em = Symbol.for("react.provider")
, tm = Symbol.for("react.context")
, cc = Symbol.for("react.forward_ref")
, Ol = Symbol.for("react.suspense")
, bl = Symbol.for("react.suspense_list")
, fc = Symbol.for("react.memo")
, pn = Symbol.for("react.lazy")
, nm = Symbol.for("react.offscreen")
, nd = Symbol.iterator;
function _i(t) {
  return t === null || typeof t != "object" ? null : (t = nd && t[nd] || t["@@iterator"],
  typeof t == "function" ? t : null)
}
var le = Object.assign, za;
function Ai(t) {
  if (za === void 0)
      try {
          throw Error()
      } catch (n) {
          var e = n.stack.trim().match(/\n( *(at )?)/);
          za = e && e[1] || ""
      }
  return `
` + za + t
}
var Ba = !1;
function Ua(t, e) {
  if (!t || Ba)
      return "";
  Ba = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
      if (e)
          if (e = function() {
              throw Error()
          }
          ,
          Object.defineProperty(e.prototype, "props", {
              set: function() {
                  throw Error()
              }
          }),
          typeof Reflect == "object" && Reflect.construct) {
              try {
                  Reflect.construct(e, [])
              } catch (u) {
                  var r = u
              }
              Reflect.construct(t, [], e)
          } else {
              try {
                  e.call()
              } catch (u) {
                  r = u
              }
              t.call(e.prototype)
          }
      else {
          try {
              throw Error()
          } catch (u) {
              r = u
          }
          t()
      }
  } catch (u) {
      if (u && r && typeof u.stack == "string") {
          for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a]; )
              a--;
          for (; 1 <= o && 0 <= a; o--,
          a--)
              if (i[o] !== s[a]) {
                  if (o !== 1 || a !== 1)
                      do
                          if (o--,
                          a--,
                          0 > a || i[o] !== s[a]) {
                              var l = `
` + i[o].replace(" at new ", " at ");
                              return t.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", t.displayName)),
                              l
                          }
                      while (1 <= o && 0 <= a);
                  break
              }
      }
  } finally {
      Ba = !1,
      Error.prepareStackTrace = n
  }
  return (t = t ? t.displayName || t.name : "") ? Ai(t) : ""
}
function t1(t) {
  switch (t.tag) {
  case 5:
      return Ai(t.type);
  case 16:
      return Ai("Lazy");
  case 13:
      return Ai("Suspense");
  case 19:
      return Ai("SuspenseList");
  case 0:
  case 2:
  case 15:
      return t = Ua(t.type, !1),
      t;
  case 11:
      return t = Ua(t.type.render, !1),
      t;
  case 1:
      return t = Ua(t.type, !0),
      t;
  default:
      return ""
  }
}
function Vl(t) {
  if (t == null)
      return null;
  if (typeof t == "function")
      return t.displayName || t.name || null;
  if (typeof t == "string")
      return t;
  switch (t) {
  case kr:
      return "Fragment";
  case Tr:
      return "Portal";
  case Ll:
      return "Profiler";
  case uc:
      return "StrictMode";
  case Ol:
      return "Suspense";
  case bl:
      return "SuspenseList"
  }
  if (typeof t == "object")
      switch (t.$$typeof) {
      case tm:
          return (t.displayName || "Context") + ".Consumer";
      case em:
          return (t._context.displayName || "Context") + ".Provider";
      case cc:
          var e = t.render;
          return t = t.displayName,
          t || (t = e.displayName || e.name || "",
          t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
          t;
      case fc:
          return e = t.displayName || null,
          e !== null ? e : Vl(t.type) || "Memo";
      case pn:
          e = t._payload,
          t = t._init;
          try {
              return Vl(t(e))
          } catch {}
      }
  return null
}
function n1(t) {
  var e = t.type;
  switch (t.tag) {
  case 24:
      return "Cache";
  case 9:
      return (e.displayName || "Context") + ".Consumer";
  case 10:
      return (e._context.displayName || "Context") + ".Provider";
  case 18:
      return "DehydratedFragment";
  case 11:
      return t = e.render,
      t = t.displayName || t.name || "",
      e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
  case 7:
      return "Fragment";
  case 5:
      return e;
  case 4:
      return "Portal";
  case 3:
      return "Root";
  case 6:
      return "Text";
  case 16:
      return Vl(e);
  case 8:
      return e === uc ? "StrictMode" : "Mode";
  case 22:
      return "Offscreen";
  case 12:
      return "Profiler";
  case 21:
      return "Scope";
  case 13:
      return "Suspense";
  case 19:
      return "SuspenseList";
  case 25:
      return "TracingMarker";
  case 1:
  case 0:
  case 17:
  case 2:
  case 14:
  case 15:
      if (typeof e == "function")
          return e.displayName || e.name || null;
      if (typeof e == "string")
          return e
  }
  return null
}
function jn(t) {
  switch (typeof t) {
  case "boolean":
  case "number":
  case "string":
  case "undefined":
      return t;
  case "object":
      return t;
  default:
      return ""
  }
}
function rm(t) {
  var e = t.type;
  return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}
function r1(t) {
  var e = rm(t) ? "checked" : "value"
    , n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
    , r = "" + t[e];
  if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get
        , s = n.set;
      return Object.defineProperty(t, e, {
          configurable: !0,
          get: function() {
              return i.call(this)
          },
          set: function(o) {
              r = "" + o,
              s.call(this, o)
          }
      }),
      Object.defineProperty(t, e, {
          enumerable: n.enumerable
      }),
      {
          getValue: function() {
              return r
          },
          setValue: function(o) {
              r = "" + o
          },
          stopTracking: function() {
              t._valueTracker = null,
              delete t[e]
          }
      }
  }
}
function Hs(t) {
  t._valueTracker || (t._valueTracker = r1(t))
}
function im(t) {
  if (!t)
      return !1;
  var e = t._valueTracker;
  if (!e)
      return !0;
  var n = e.getValue()
    , r = "";
  return t && (r = rm(t) ? t.checked ? "true" : "false" : t.value),
  t = r,
  t !== n ? (e.setValue(t),
  !0) : !1
}
function Ao(t) {
  if (t = t || (typeof document < "u" ? document : void 0),
  typeof t > "u")
      return null;
  try {
      return t.activeElement || t.body
  } catch {
      return t.body
  }
}
function Il(t, e) {
  var n = e.checked;
  return le({}, e, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? t._wrapperState.initialChecked
  })
}
function rd(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue
    , r = e.checked != null ? e.checked : e.defaultChecked;
  n = jn(e.value != null ? e.value : n),
  t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
  }
}
function sm(t, e) {
  e = e.checked,
  e != null && lc(t, "checked", e, !1)
}
function Fl(t, e) {
  sm(t, e);
  var n = jn(e.value)
    , r = e.type;
  if (n != null)
      r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
      t.removeAttribute("value");
      return
  }
  e.hasOwnProperty("value") ? zl(t, e.type, n) : e.hasOwnProperty("defaultValue") && zl(t, e.type, jn(e.defaultValue)),
  e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}
function id(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
      var r = e.type;
      if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null))
          return;
      e = "" + t._wrapperState.initialValue,
      n || e === t.value || (t.value = e),
      t.defaultValue = e
  }
  n = t.name,
  n !== "" && (t.name = ""),
  t.defaultChecked = !!t._wrapperState.initialChecked,
  n !== "" && (t.name = n)
}
function zl(t, e, n) {
  (e !== "number" || Ao(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
}
var Ri = Array.isArray;
function $r(t, e, n, r) {
  if (t = t.options,
  e) {
      e = {};
      for (var i = 0; i < n.length; i++)
          e["$" + n[i]] = !0;
      for (n = 0; n < t.length; n++)
          i = e.hasOwnProperty("$" + t[n].value),
          t[n].selected !== i && (t[n].selected = i),
          i && r && (t[n].defaultSelected = !0)
  } else {
      for (n = "" + jn(n),
      e = null,
      i = 0; i < t.length; i++) {
          if (t[i].value === n) {
              t[i].selected = !0,
              r && (t[i].defaultSelected = !0);
              return
          }
          e !== null || t[i].disabled || (e = t[i])
      }
      e !== null && (e.selected = !0)
  }
}
function Bl(t, e) {
  if (e.dangerouslySetInnerHTML != null)
      throw Error(A(91));
  return le({}, e, {
      value: void 0,
      defaultValue: void 0,
      children: "" + t._wrapperState.initialValue
  })
}
function sd(t, e) {
  var n = e.value;
  if (n == null) {
      if (n = e.children,
      e = e.defaultValue,
      n != null) {
          if (e != null)
              throw Error(A(92));
          if (Ri(n)) {
              if (1 < n.length)
                  throw Error(A(93));
              n = n[0]
          }
          e = n
      }
      e == null && (e = ""),
      n = e
  }
  t._wrapperState = {
      initialValue: jn(n)
  }
}
function om(t, e) {
  var n = jn(e.value)
    , r = jn(e.defaultValue);
  n != null && (n = "" + n,
  n !== t.value && (t.value = n),
  e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
  r != null && (t.defaultValue = "" + r)
}
function od(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}
function am(t) {
  switch (t) {
  case "svg":
      return "http://www.w3.org/2000/svg";
  case "math":
      return "http://www.w3.org/1998/Math/MathML";
  default:
      return "http://www.w3.org/1999/xhtml"
  }
}
function Ul(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml" ? am(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var Ks, lm = function(t) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
          return t(e, n, r, i)
      })
  }
  : t
}(function(t, e) {
  if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in t)
      t.innerHTML = e;
  else {
      for (Ks = Ks || document.createElement("div"),
      Ks.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
      e = Ks.firstChild; t.firstChild; )
          t.removeChild(t.firstChild);
      for (; e.firstChild; )
          t.appendChild(e.firstChild)
  }
});
function ns(t, e) {
  if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
          n.nodeValue = e;
          return
      }
  }
  t.textContent = e
}
var Fi = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}
, i1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fi).forEach(function(t) {
  i1.forEach(function(e) {
      e = e + t.charAt(0).toUpperCase() + t.substring(1),
      Fi[e] = Fi[t]
  })
});
function um(t, e, n) {
  return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || Fi.hasOwnProperty(t) && Fi[t] ? ("" + e).trim() : e + "px"
}
function cm(t, e) {
  t = t.style;
  for (var n in e)
      if (e.hasOwnProperty(n)) {
          var r = n.indexOf("--") === 0
            , i = um(n, e[n], r);
          n === "float" && (n = "cssFloat"),
          r ? t.setProperty(n, i) : t[n] = i
      }
}
var s1 = le({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});
function $l(t, e) {
  if (e) {
      if (s1[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
          throw Error(A(137, t));
      if (e.dangerouslySetInnerHTML != null) {
          if (e.children != null)
              throw Error(A(60));
          if (typeof e.dangerouslySetInnerHTML != "object" || !("__html"in e.dangerouslySetInnerHTML))
              throw Error(A(61))
      }
      if (e.style != null && typeof e.style != "object")
          throw Error(A(62))
  }
}
function Wl(t, e) {
  if (t.indexOf("-") === -1)
      return typeof e.is == "string";
  switch (t) {
  case "annotation-xml":
  case "color-profile":
  case "font-face":
  case "font-face-src":
  case "font-face-uri":
  case "font-face-format":
  case "font-face-name":
  case "missing-glyph":
      return !1;
  default:
      return !0
  }
}
var Hl = null;
function dc(t) {
  return t = t.target || t.srcElement || window,
  t.correspondingUseElement && (t = t.correspondingUseElement),
  t.nodeType === 3 ? t.parentNode : t
}
var Kl = null
, Wr = null
, Hr = null;
function ad(t) {
  if (t = Os(t)) {
      if (typeof Kl != "function")
          throw Error(A(280));
      var e = t.stateNode;
      e && (e = _a(e),
      Kl(t.stateNode, t.type, e))
  }
}
function fm(t) {
  Wr ? Hr ? Hr.push(t) : Hr = [t] : Wr = t
}
function dm() {
  if (Wr) {
      var t = Wr
        , e = Hr;
      if (Hr = Wr = null,
      ad(t),
      e)
          for (t = 0; t < e.length; t++)
              ad(e[t])
  }
}
function hm(t, e) {
  return t(e)
}
function pm() {}
var $a = !1;
function mm(t, e, n) {
  if ($a)
      return t(e, n);
  $a = !0;
  try {
      return hm(t, e, n)
  } finally {
      $a = !1,
      (Wr !== null || Hr !== null) && (pm(),
      dm())
  }
}
function rs(t, e) {
  var n = t.stateNode;
  if (n === null)
      return null;
  var r = _a(n);
  if (r === null)
      return null;
  n = r[e];
  e: switch (e) {
  case "onClick":
  case "onClickCapture":
  case "onDoubleClick":
  case "onDoubleClickCapture":
  case "onMouseDown":
  case "onMouseDownCapture":
  case "onMouseMove":
  case "onMouseMoveCapture":
  case "onMouseUp":
  case "onMouseUpCapture":
  case "onMouseEnter":
      (r = !r.disabled) || (t = t.type,
      r = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
      t = !r;
      break e;
  default:
      t = !1
  }
  if (t)
      return null;
  if (n && typeof n != "function")
      throw Error(A(231, e, typeof n));
  return n
}
var Yl = !1;
if (rn)
  try {
      var wi = {};
      Object.defineProperty(wi, "passive", {
          get: function() {
              Yl = !0
          }
      }),
      window.addEventListener("test", wi, wi),
      window.removeEventListener("test", wi, wi)
  } catch {
      Yl = !1
  }
function o1(t, e, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
      e.apply(n, u)
  } catch (c) {
      this.onError(c)
  }
}
var zi = !1
, Ro = null
, Do = !1
, Gl = null
, a1 = {
  onError: function(t) {
      zi = !0,
      Ro = t
  }
};
function l1(t, e, n, r, i, s, o, a, l) {
  zi = !1,
  Ro = null,
  o1.apply(a1, arguments)
}
function u1(t, e, n, r, i, s, o, a, l) {
  if (l1.apply(this, arguments),
  zi) {
      if (zi) {
          var u = Ro;
          zi = !1,
          Ro = null
      } else
          throw Error(A(198));
      Do || (Do = !0,
      Gl = u)
  }
}
function gr(t) {
  var e = t
    , n = t;
  if (t.alternate)
      for (; e.return; )
          e = e.return;
  else {
      t = e;
      do
          e = t,
          e.flags & 4098 && (n = e.return),
          t = e.return;
      while (t)
  }
  return e.tag === 3 ? n : null
}
function gm(t) {
  if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate,
      t !== null && (e = t.memoizedState)),
      e !== null)
          return e.dehydrated
  }
  return null
}
function ld(t) {
  if (gr(t) !== t)
      throw Error(A(188))
}
function c1(t) {
  var e = t.alternate;
  if (!e) {
      if (e = gr(t),
      e === null)
          throw Error(A(188));
      return e !== t ? null : t
  }
  for (var n = t, r = e; ; ) {
      var i = n.return;
      if (i === null)
          break;
      var s = i.alternate;
      if (s === null) {
          if (r = i.return,
          r !== null) {
              n = r;
              continue
          }
          break
      }
      if (i.child === s.child) {
          for (s = i.child; s; ) {
              if (s === n)
                  return ld(i),
                  t;
              if (s === r)
                  return ld(i),
                  e;
              s = s.sibling
          }
          throw Error(A(188))
      }
      if (n.return !== r.return)
          n = i,
          r = s;
      else {
          for (var o = !1, a = i.child; a; ) {
              if (a === n) {
                  o = !0,
                  n = i,
                  r = s;
                  break
              }
              if (a === r) {
                  o = !0,
                  r = i,
                  n = s;
                  break
              }
              a = a.sibling
          }
          if (!o) {
              for (a = s.child; a; ) {
                  if (a === n) {
                      o = !0,
                      n = s,
                      r = i;
                      break
                  }
                  if (a === r) {
                      o = !0,
                      r = s,
                      n = i;
                      break
                  }
                  a = a.sibling
              }
              if (!o)
                  throw Error(A(189))
          }
      }
      if (n.alternate !== r)
          throw Error(A(190))
  }
  if (n.tag !== 3)
      throw Error(A(188));
  return n.stateNode.current === n ? t : e
}
function ym(t) {
  return t = c1(t),
  t !== null ? vm(t) : null
}
function vm(t) {
  if (t.tag === 5 || t.tag === 6)
      return t;
  for (t = t.child; t !== null; ) {
      var e = vm(t);
      if (e !== null)
          return e;
      t = t.sibling
  }
  return null
}
var xm = ct.unstable_scheduleCallback
, ud = ct.unstable_cancelCallback
, f1 = ct.unstable_shouldYield
, d1 = ct.unstable_requestPaint
, pe = ct.unstable_now
, h1 = ct.unstable_getCurrentPriorityLevel
, hc = ct.unstable_ImmediatePriority
, _m = ct.unstable_UserBlockingPriority
, jo = ct.unstable_NormalPriority
, p1 = ct.unstable_LowPriority
, wm = ct.unstable_IdlePriority
, ga = null
, Ut = null;
function m1(t) {
  if (Ut && typeof Ut.onCommitFiberRoot == "function")
      try {
          Ut.onCommitFiberRoot(ga, t, void 0, (t.current.flags & 128) === 128)
      } catch {}
}
var Dt = Math.clz32 ? Math.clz32 : v1
, g1 = Math.log
, y1 = Math.LN2;
function v1(t) {
  return t >>>= 0,
  t === 0 ? 32 : 31 - (g1(t) / y1 | 0) | 0
}
var Ys = 64
, Gs = 4194304;
function Di(t) {
  switch (t & -t) {
  case 1:
      return 1;
  case 2:
      return 2;
  case 4:
      return 4;
  case 8:
      return 8;
  case 16:
      return 16;
  case 32:
      return 32;
  case 64:
  case 128:
  case 256:
  case 512:
  case 1024:
  case 2048:
  case 4096:
  case 8192:
  case 16384:
  case 32768:
  case 65536:
  case 131072:
  case 262144:
  case 524288:
  case 1048576:
  case 2097152:
      return t & 4194240;
  case 4194304:
  case 8388608:
  case 16777216:
  case 33554432:
  case 67108864:
      return t & 130023424;
  case 134217728:
      return 134217728;
  case 268435456:
      return 268435456;
  case 536870912:
      return 536870912;
  case 1073741824:
      return 1073741824;
  default:
      return t
  }
}
function Lo(t, e) {
  var n = t.pendingLanes;
  if (n === 0)
      return 0;
  var r = 0
    , i = t.suspendedLanes
    , s = t.pingedLanes
    , o = n & 268435455;
  if (o !== 0) {
      var a = o & ~i;
      a !== 0 ? r = Di(a) : (s &= o,
      s !== 0 && (r = Di(s)))
  } else
      o = n & ~i,
      o !== 0 ? r = Di(o) : s !== 0 && (r = Di(s));
  if (r === 0)
      return 0;
  if (e !== 0 && e !== r && !(e & i) && (i = r & -r,
  s = e & -e,
  i >= s || i === 16 && (s & 4194240) !== 0))
      return e;
  if (r & 4 && (r |= n & 16),
  e = t.entangledLanes,
  e !== 0)
      for (t = t.entanglements,
      e &= r; 0 < e; )
          n = 31 - Dt(e),
          i = 1 << n,
          r |= t[n],
          e &= ~i;
  return r
}
function x1(t, e) {
  switch (t) {
  case 1:
  case 2:
  case 4:
      return e + 250;
  case 8:
  case 16:
  case 32:
  case 64:
  case 128:
  case 256:
  case 512:
  case 1024:
  case 2048:
  case 4096:
  case 8192:
  case 16384:
  case 32768:
  case 65536:
  case 131072:
  case 262144:
  case 524288:
  case 1048576:
  case 2097152:
      return e + 5e3;
  case 4194304:
  case 8388608:
  case 16777216:
  case 33554432:
  case 67108864:
      return -1;
  case 134217728:
  case 268435456:
  case 536870912:
  case 1073741824:
      return -1;
  default:
      return -1
  }
}
function _1(t, e) {
  for (var n = t.suspendedLanes, r = t.pingedLanes, i = t.expirationTimes, s = t.pendingLanes; 0 < s; ) {
      var o = 31 - Dt(s)
        , a = 1 << o
        , l = i[o];
      l === -1 ? (!(a & n) || a & r) && (i[o] = x1(a, e)) : l <= e && (t.expiredLanes |= a),
      s &= ~a
  }
}
function Xl(t) {
  return t = t.pendingLanes & -1073741825,
  t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}
function Sm() {
  var t = Ys;
  return Ys <<= 1,
  !(Ys & 4194240) && (Ys = 64),
  t
}
function Wa(t) {
  for (var e = [], n = 0; 31 > n; n++)
      e.push(t);
  return e
}
function js(t, e, n) {
  t.pendingLanes |= e,
  e !== 536870912 && (t.suspendedLanes = 0,
  t.pingedLanes = 0),
  t = t.eventTimes,
  e = 31 - Dt(e),
  t[e] = n
}
function w1(t, e) {
  var n = t.pendingLanes & ~e;
  t.pendingLanes = e,
  t.suspendedLanes = 0,
  t.pingedLanes = 0,
  t.expiredLanes &= e,
  t.mutableReadLanes &= e,
  t.entangledLanes &= e,
  e = t.entanglements;
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
      var i = 31 - Dt(n)
        , s = 1 << i;
      e[i] = 0,
      r[i] = -1,
      t[i] = -1,
      n &= ~s
  }
}
function pc(t, e) {
  var n = t.entangledLanes |= e;
  for (t = t.entanglements; n; ) {
      var r = 31 - Dt(n)
        , i = 1 << r;
      i & e | t[r] & e && (t[r] |= e),
      n &= ~i
  }
}
var Y = 0;
function Tm(t) {
  return t &= -t,
  1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var km, mc, Pm, Cm, Em, Ql = !1, Xs = [], Tn = null, kn = null, Pn = null, is = new Map, ss = new Map, gn = [], S1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function cd(t, e) {
  switch (t) {
  case "focusin":
  case "focusout":
      Tn = null;
      break;
  case "dragenter":
  case "dragleave":
      kn = null;
      break;
  case "mouseover":
  case "mouseout":
      Pn = null;
      break;
  case "pointerover":
  case "pointerout":
      is.delete(e.pointerId);
      break;
  case "gotpointercapture":
  case "lostpointercapture":
      ss.delete(e.pointerId)
  }
}
function Si(t, e, n, r, i, s) {
  return t === null || t.nativeEvent !== s ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: s,
      targetContainers: [i]
  },
  e !== null && (e = Os(e),
  e !== null && mc(e)),
  t) : (t.eventSystemFlags |= r,
  e = t.targetContainers,
  i !== null && e.indexOf(i) === -1 && e.push(i),
  t)
}
function T1(t, e, n, r, i) {
  switch (e) {
  case "focusin":
      return Tn = Si(Tn, t, e, n, r, i),
      !0;
  case "dragenter":
      return kn = Si(kn, t, e, n, r, i),
      !0;
  case "mouseover":
      return Pn = Si(Pn, t, e, n, r, i),
      !0;
  case "pointerover":
      var s = i.pointerId;
      return is.set(s, Si(is.get(s) || null, t, e, n, r, i)),
      !0;
  case "gotpointercapture":
      return s = i.pointerId,
      ss.set(s, Si(ss.get(s) || null, t, e, n, r, i)),
      !0
  }
  return !1
}
function Mm(t) {
  var e = Zn(t.target);
  if (e !== null) {
      var n = gr(e);
      if (n !== null) {
          if (e = n.tag,
          e === 13) {
              if (e = gm(n),
              e !== null) {
                  t.blockedOn = e,
                  Em(t.priority, function() {
                      Pm(n)
                  });
                  return
              }
          } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
              t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
              return
          }
      }
  }
  t.blockedOn = null
}
function po(t) {
  if (t.blockedOn !== null)
      return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Zl(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
      if (n === null) {
          n = t.nativeEvent;
          var r = new n.constructor(n.type,n);
          Hl = r,
          n.target.dispatchEvent(r),
          Hl = null
      } else
          return e = Os(n),
          e !== null && mc(e),
          t.blockedOn = n,
          !1;
      e.shift()
  }
  return !0
}
function fd(t, e, n) {
  po(t) && n.delete(e)
}
function k1() {
  Ql = !1,
  Tn !== null && po(Tn) && (Tn = null),
  kn !== null && po(kn) && (kn = null),
  Pn !== null && po(Pn) && (Pn = null),
  is.forEach(fd),
  ss.forEach(fd)
}
function Ti(t, e) {
  t.blockedOn === e && (t.blockedOn = null,
  Ql || (Ql = !0,
  ct.unstable_scheduleCallback(ct.unstable_NormalPriority, k1)))
}
function os(t) {
  function e(i) {
      return Ti(i, t)
  }
  if (0 < Xs.length) {
      Ti(Xs[0], t);
      for (var n = 1; n < Xs.length; n++) {
          var r = Xs[n];
          r.blockedOn === t && (r.blockedOn = null)
      }
  }
  for (Tn !== null && Ti(Tn, t),
  kn !== null && Ti(kn, t),
  Pn !== null && Ti(Pn, t),
  is.forEach(e),
  ss.forEach(e),
  n = 0; n < gn.length; n++)
      r = gn[n],
      r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < gn.length && (n = gn[0],
  n.blockedOn === null); )
      Mm(n),
      n.blockedOn === null && gn.shift()
}
var Kr = fn.ReactCurrentBatchConfig
, Oo = !0;
function P1(t, e, n, r) {
  var i = Y
    , s = Kr.transition;
  Kr.transition = null;
  try {
      Y = 1,
      gc(t, e, n, r)
  } finally {
      Y = i,
      Kr.transition = s
  }
}
function C1(t, e, n, r) {
  var i = Y
    , s = Kr.transition;
  Kr.transition = null;
  try {
      Y = 4,
      gc(t, e, n, r)
  } finally {
      Y = i,
      Kr.transition = s
  }
}
function gc(t, e, n, r) {
  if (Oo) {
      var i = Zl(t, e, n, r);
      if (i === null)
          el(t, e, r, bo, n),
          cd(t, r);
      else if (T1(i, t, e, n, r))
          r.stopPropagation();
      else if (cd(t, r),
      e & 4 && -1 < S1.indexOf(t)) {
          for (; i !== null; ) {
              var s = Os(i);
              if (s !== null && km(s),
              s = Zl(t, e, n, r),
              s === null && el(t, e, r, bo, n),
              s === i)
                  break;
              i = s
          }
          i !== null && r.stopPropagation()
      } else
          el(t, e, r, null, n)
  }
}
var bo = null;
function Zl(t, e, n, r) {
  if (bo = null,
  t = dc(r),
  t = Zn(t),
  t !== null)
      if (e = gr(t),
      e === null)
          t = null;
      else if (n = e.tag,
      n === 13) {
          if (t = gm(e),
          t !== null)
              return t;
          t = null
      } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
              return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null
      } else
          e !== t && (t = null);
  return bo = t,
  null
}
function Nm(t) {
  switch (t) {
  case "cancel":
  case "click":
  case "close":
  case "contextmenu":
  case "copy":
  case "cut":
  case "auxclick":
  case "dblclick":
  case "dragend":
  case "dragstart":
  case "drop":
  case "focusin":
  case "focusout":
  case "input":
  case "invalid":
  case "keydown":
  case "keypress":
  case "keyup":
  case "mousedown":
  case "mouseup":
  case "paste":
  case "pause":
  case "play":
  case "pointercancel":
  case "pointerdown":
  case "pointerup":
  case "ratechange":
  case "reset":
  case "resize":
  case "seeked":
  case "submit":
  case "touchcancel":
  case "touchend":
  case "touchstart":
  case "volumechange":
  case "change":
  case "selectionchange":
  case "textInput":
  case "compositionstart":
  case "compositionend":
  case "compositionupdate":
  case "beforeblur":
  case "afterblur":
  case "beforeinput":
  case "blur":
  case "fullscreenchange":
  case "focus":
  case "hashchange":
  case "popstate":
  case "select":
  case "selectstart":
      return 1;
  case "drag":
  case "dragenter":
  case "dragexit":
  case "dragleave":
  case "dragover":
  case "mousemove":
  case "mouseout":
  case "mouseover":
  case "pointermove":
  case "pointerout":
  case "pointerover":
  case "scroll":
  case "toggle":
  case "touchmove":
  case "wheel":
  case "mouseenter":
  case "mouseleave":
  case "pointerenter":
  case "pointerleave":
      return 4;
  case "message":
      switch (h1()) {
      case hc:
          return 1;
      case _m:
          return 4;
      case jo:
      case p1:
          return 16;
      case wm:
          return 536870912;
      default:
          return 16
      }
  default:
      return 16
  }
}
var vn = null
, yc = null
, mo = null;
function Am() {
  if (mo)
      return mo;
  var t, e = yc, n = e.length, r, i = "value"in vn ? vn.value : vn.textContent, s = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++)
      ;
  var o = n - t;
  for (r = 1; r <= o && e[n - r] === i[s - r]; r++)
      ;
  return mo = i.slice(t, 1 < r ? 1 - r : void 0)
}
function go(t) {
  var e = t.keyCode;
  return "charCode"in t ? (t = t.charCode,
  t === 0 && e === 13 && (t = 13)) : t = e,
  t === 10 && (t = 13),
  32 <= t || t === 13 ? t : 0
}
function Qs() {
  return !0
}
function dd() {
  return !1
}
function pt(t) {
  function e(n, r, i, s, o) {
      this._reactName = n,
      this._targetInst = i,
      this.type = r,
      this.nativeEvent = s,
      this.target = o,
      this.currentTarget = null;
      for (var a in t)
          t.hasOwnProperty(a) && (n = t[a],
          this[a] = n ? n(s) : s[a]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Qs : dd,
      this.isPropagationStopped = dd,
      this
  }
  return le(e.prototype, {
      preventDefault: function() {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          this.isDefaultPrevented = Qs)
      },
      stopPropagation: function() {
          var n = this.nativeEvent;
          n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          this.isPropagationStopped = Qs)
      },
      persist: function() {},
      isPersistent: Qs
  }),
  e
}
var mi = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function(t) {
      return t.timeStamp || Date.now()
  },
  defaultPrevented: 0,
  isTrusted: 0
}, vc = pt(mi), Ls = le({}, mi, {
  view: 0,
  detail: 0
}), E1 = pt(Ls), Ha, Ka, ki, ya = le({}, Ls, {
  screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: xc,
  button: 0,
  buttons: 0,
  relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
  },
  movementX: function(t) {
      return "movementX"in t ? t.movementX : (t !== ki && (ki && t.type === "mousemove" ? (Ha = t.screenX - ki.screenX,
      Ka = t.screenY - ki.screenY) : Ka = Ha = 0,
      ki = t),
      Ha)
  },
  movementY: function(t) {
      return "movementY"in t ? t.movementY : Ka
  }
}), hd = pt(ya), M1 = le({}, ya, {
  dataTransfer: 0
}), N1 = pt(M1), A1 = le({}, Ls, {
  relatedTarget: 0
}), Ya = pt(A1), R1 = le({}, mi, {
  animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}), D1 = pt(R1), j1 = le({}, mi, {
  clipboardData: function(t) {
      return "clipboardData"in t ? t.clipboardData : window.clipboardData
  }
}), L1 = pt(j1), O1 = le({}, mi, {
  data: 0
}), pd = pt(O1), b1 = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, V1 = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, I1 = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};
function F1(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = I1[t]) ? !!e[t] : !1
}
function xc() {
  return F1
}
var z1 = le({}, Ls, {
  key: function(t) {
      if (t.key) {
          var e = b1[t.key] || t.key;
          if (e !== "Unidentified")
              return e
      }
      return t.type === "keypress" ? (t = go(t),
      t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? V1[t.keyCode] || "Unidentified" : ""
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: xc,
  charCode: function(t) {
      return t.type === "keypress" ? go(t) : 0
  },
  keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
  },
  which: function(t) {
      return t.type === "keypress" ? go(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
  }
})
, B1 = pt(z1)
, U1 = le({}, ya, {
  pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0
})
, md = pt(U1)
, $1 = le({}, Ls, {
  touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: xc
})
, W1 = pt($1)
, H1 = le({}, mi, {
  propertyName: 0,
  elapsedTime: 0,
  pseudoElement: 0
})
, K1 = pt(H1)
, Y1 = le({}, ya, {
  deltaX: function(t) {
      return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
  },
  deltaY: function(t) {
      return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
  },
  deltaZ: 0,
  deltaMode: 0
})
, G1 = pt(Y1)
, X1 = [9, 13, 27, 32]
, _c = rn && "CompositionEvent"in window
, Bi = null;
rn && "documentMode"in document && (Bi = document.documentMode);
var Q1 = rn && "TextEvent"in window && !Bi
, Rm = rn && (!_c || Bi && 8 < Bi && 11 >= Bi)
, gd = " "
, yd = !1;
function Dm(t, e) {
  switch (t) {
  case "keyup":
      return X1.indexOf(e.keyCode) !== -1;
  case "keydown":
      return e.keyCode !== 229;
  case "keypress":
  case "mousedown":
  case "focusout":
      return !0;
  default:
      return !1
  }
}
function jm(t) {
  return t = t.detail,
  typeof t == "object" && "data"in t ? t.data : null
}
var Pr = !1;
function Z1(t, e) {
  switch (t) {
  case "compositionend":
      return jm(e);
  case "keypress":
      return e.which !== 32 ? null : (yd = !0,
      gd);
  case "textInput":
      return t = e.data,
      t === gd && yd ? null : t;
  default:
      return null
  }
}
function q1(t, e) {
  if (Pr)
      return t === "compositionend" || !_c && Dm(t, e) ? (t = Am(),
      mo = yc = vn = null,
      Pr = !1,
      t) : null;
  switch (t) {
  case "paste":
      return null;
  case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
              return e.char;
          if (e.which)
              return String.fromCharCode(e.which)
      }
      return null;
  case "compositionend":
      return Rm && e.locale !== "ko" ? null : e.data;
  default:
      return null
  }
}
var J1 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function vd(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!J1[t.type] : e === "textarea"
}
function Lm(t, e, n, r) {
  fm(r),
  e = Vo(e, "onChange"),
  0 < e.length && (n = new vc("onChange","change",null,n,r),
  t.push({
      event: n,
      listeners: e
  }))
}
var Ui = null
, as = null;
function ex(t) {
  Hm(t, 0)
}
function va(t) {
  var e = Mr(t);
  if (im(e))
      return t
}
function tx(t, e) {
  if (t === "change")
      return e
}
var Om = !1;
if (rn) {
  var Ga;
  if (rn) {
      var Xa = "oninput"in document;
      if (!Xa) {
          var xd = document.createElement("div");
          xd.setAttribute("oninput", "return;"),
          Xa = typeof xd.oninput == "function"
      }
      Ga = Xa
  } else
      Ga = !1;
  Om = Ga && (!document.documentMode || 9 < document.documentMode)
}
function _d() {
  Ui && (Ui.detachEvent("onpropertychange", bm),
  as = Ui = null)
}
function bm(t) {
  if (t.propertyName === "value" && va(as)) {
      var e = [];
      Lm(e, as, t, dc(t)),
      mm(ex, e)
  }
}
function nx(t, e, n) {
  t === "focusin" ? (_d(),
  Ui = e,
  as = n,
  Ui.attachEvent("onpropertychange", bm)) : t === "focusout" && _d()
}
function rx(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return va(as)
}
function ix(t, e) {
  if (t === "click")
      return va(e)
}
function sx(t, e) {
  if (t === "input" || t === "change")
      return va(e)
}
function ox(t, e) {
  return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var Lt = typeof Object.is == "function" ? Object.is : ox;
function ls(t, e) {
  if (Lt(t, e))
      return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
  var n = Object.keys(t)
    , r = Object.keys(e);
  if (n.length !== r.length)
      return !1;
  for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!jl.call(e, i) || !Lt(t[i], e[i]))
          return !1
  }
  return !0
}
function wd(t) {
  for (; t && t.firstChild; )
      t = t.firstChild;
  return t
}
function Sd(t, e) {
  var n = wd(t);
  t = 0;
  for (var r; n; ) {
      if (n.nodeType === 3) {
          if (r = t + n.textContent.length,
          t <= e && r >= e)
              return {
                  node: n,
                  offset: e - t
              };
          t = r
      }
      e: {
          for (; n; ) {
              if (n.nextSibling) {
                  n = n.nextSibling;
                  break e
              }
              n = n.parentNode
          }
          n = void 0
      }
      n = wd(n)
  }
}
function Vm(t, e) {
  return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Vm(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}
function Im() {
  for (var t = window, e = Ao(); e instanceof t.HTMLIFrameElement; ) {
      try {
          var n = typeof e.contentWindow.location.href == "string"
      } catch {
          n = !1
      }
      if (n)
          t = e.contentWindow;
      else
          break;
      e = Ao(t.document)
  }
  return e
}
function wc(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}
function ax(t) {
  var e = Im()
    , n = t.focusedElem
    , r = t.selectionRange;
  if (e !== n && n && n.ownerDocument && Vm(n.ownerDocument.documentElement, n)) {
      if (r !== null && wc(n)) {
          if (e = r.start,
          t = r.end,
          t === void 0 && (t = e),
          "selectionStart"in n)
              n.selectionStart = e,
              n.selectionEnd = Math.min(t, n.value.length);
          else if (t = (e = n.ownerDocument || document) && e.defaultView || window,
          t.getSelection) {
              t = t.getSelection();
              var i = n.textContent.length
                , s = Math.min(r.start, i);
              r = r.end === void 0 ? s : Math.min(r.end, i),
              !t.extend && s > r && (i = r,
              r = s,
              s = i),
              i = Sd(n, s);
              var o = Sd(n, r);
              i && o && (t.rangeCount !== 1 || t.anchorNode !== i.node || t.anchorOffset !== i.offset || t.focusNode !== o.node || t.focusOffset !== o.offset) && (e = e.createRange(),
              e.setStart(i.node, i.offset),
              t.removeAllRanges(),
              s > r ? (t.addRange(e),
              t.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset),
              t.addRange(e)))
          }
      }
      for (e = [],
      t = n; t = t.parentNode; )
          t.nodeType === 1 && e.push({
              element: t,
              left: t.scrollLeft,
              top: t.scrollTop
          });
      for (typeof n.focus == "function" && n.focus(),
      n = 0; n < e.length; n++)
          t = e[n],
          t.element.scrollLeft = t.left,
          t.element.scrollTop = t.top
  }
}
var lx = rn && "documentMode"in document && 11 >= document.documentMode
, Cr = null
, ql = null
, $i = null
, Jl = !1;
function Td(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Jl || Cr == null || Cr !== Ao(r) || (r = Cr,
  "selectionStart"in r && wc(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
  } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
  r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
  }),
  $i && ls($i, r) || ($i = r,
  r = Vo(ql, "onSelect"),
  0 < r.length && (e = new vc("onSelect","select",null,e,n),
  t.push({
      event: e,
      listeners: r
  }),
  e.target = Cr)))
}
function Zs(t, e) {
  var n = {};
  return n[t.toLowerCase()] = e.toLowerCase(),
  n["Webkit" + t] = "webkit" + e,
  n["Moz" + t] = "moz" + e,
  n
}
var Er = {
  animationend: Zs("Animation", "AnimationEnd"),
  animationiteration: Zs("Animation", "AnimationIteration"),
  animationstart: Zs("Animation", "AnimationStart"),
  transitionend: Zs("Transition", "TransitionEnd")
}
, Qa = {}
, Fm = {};
rn && (Fm = document.createElement("div").style,
"AnimationEvent"in window || (delete Er.animationend.animation,
delete Er.animationiteration.animation,
delete Er.animationstart.animation),
"TransitionEvent"in window || delete Er.transitionend.transition);
function xa(t) {
  if (Qa[t])
      return Qa[t];
  if (!Er[t])
      return t;
  var e = Er[t], n;
  for (n in e)
      if (e.hasOwnProperty(n) && n in Fm)
          return Qa[t] = e[n];
  return t
}
var zm = xa("animationend")
, Bm = xa("animationiteration")
, Um = xa("animationstart")
, $m = xa("transitionend")
, Wm = new Map
, kd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Fn(t, e) {
  Wm.set(t, e),
  mr(e, [t])
}
for (var Za = 0; Za < kd.length; Za++) {
  var qa = kd[Za]
    , ux = qa.toLowerCase()
    , cx = qa[0].toUpperCase() + qa.slice(1);
  Fn(ux, "on" + cx)
}
Fn(zm, "onAnimationEnd");
Fn(Bm, "onAnimationIteration");
Fn(Um, "onAnimationStart");
Fn("dblclick", "onDoubleClick");
Fn("focusin", "onFocus");
Fn("focusout", "onBlur");
Fn($m, "onTransitionEnd");
qr("onMouseEnter", ["mouseout", "mouseover"]);
qr("onMouseLeave", ["mouseout", "mouseover"]);
qr("onPointerEnter", ["pointerout", "pointerover"]);
qr("onPointerLeave", ["pointerout", "pointerover"]);
mr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
mr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
mr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
mr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
mr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ji = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
, fx = new Set("cancel close invalid load scroll toggle".split(" ").concat(ji));
function Pd(t, e, n) {
  var r = t.type || "unknown-event";
  t.currentTarget = n,
  u1(r, e, void 0, t),
  t.currentTarget = null
}
function Hm(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
      var r = t[n]
        , i = r.event;
      r = r.listeners;
      e: {
          var s = void 0;
          if (e)
              for (var o = r.length - 1; 0 <= o; o--) {
                  var a = r[o]
                    , l = a.instance
                    , u = a.currentTarget;
                  if (a = a.listener,
                  l !== s && i.isPropagationStopped())
                      break e;
                  Pd(i, a, u),
                  s = l
              }
          else
              for (o = 0; o < r.length; o++) {
                  if (a = r[o],
                  l = a.instance,
                  u = a.currentTarget,
                  a = a.listener,
                  l !== s && i.isPropagationStopped())
                      break e;
                  Pd(i, a, u),
                  s = l
              }
      }
  }
  if (Do)
      throw t = Gl,
      Do = !1,
      Gl = null,
      t
}
function J(t, e) {
  var n = e[iu];
  n === void 0 && (n = e[iu] = new Set);
  var r = t + "__bubble";
  n.has(r) || (Km(e, t, 2, !1),
  n.add(r))
}
function Ja(t, e, n) {
  var r = 0;
  e && (r |= 4),
  Km(n, t, r, e)
}
var qs = "_reactListening" + Math.random().toString(36).slice(2);
function us(t) {
  if (!t[qs]) {
      t[qs] = !0,
      Jp.forEach(function(n) {
          n !== "selectionchange" && (fx.has(n) || Ja(n, !1, t),
          Ja(n, !0, t))
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[qs] || (e[qs] = !0,
      Ja("selectionchange", !1, e))
  }
}
function Km(t, e, n, r) {
  switch (Nm(e)) {
  case 1:
      var i = P1;
      break;
  case 4:
      i = C1;
      break;
  default:
      i = gc
  }
  n = i.bind(null, e, n, t),
  i = void 0,
  !Yl || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0),
  r ? i !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: i
  }) : t.addEventListener(e, n, !0) : i !== void 0 ? t.addEventListener(e, n, {
      passive: i
  }) : t.addEventListener(e, n, !1)
}
function el(t, e, n, r, i) {
  var s = r;
  if (!(e & 1) && !(e & 2) && r !== null)
      e: for (; ; ) {
          if (r === null)
              return;
          var o = r.tag;
          if (o === 3 || o === 4) {
              var a = r.stateNode.containerInfo;
              if (a === i || a.nodeType === 8 && a.parentNode === i)
                  break;
              if (o === 4)
                  for (o = r.return; o !== null; ) {
                      var l = o.tag;
                      if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo,
                      l === i || l.nodeType === 8 && l.parentNode === i))
                          return;
                      o = o.return
                  }
              for (; a !== null; ) {
                  if (o = Zn(a),
                  o === null)
                      return;
                  if (l = o.tag,
                  l === 5 || l === 6) {
                      r = s = o;
                      continue e
                  }
                  a = a.parentNode
              }
          }
          r = r.return
      }
  mm(function() {
      var u = s
        , c = dc(n)
        , f = [];
      e: {
          var d = Wm.get(t);
          if (d !== void 0) {
              var p = vc
                , v = t;
              switch (t) {
              case "keypress":
                  if (go(n) === 0)
                      break e;
              case "keydown":
              case "keyup":
                  p = B1;
                  break;
              case "focusin":
                  v = "focus",
                  p = Ya;
                  break;
              case "focusout":
                  v = "blur",
                  p = Ya;
                  break;
              case "beforeblur":
              case "afterblur":
                  p = Ya;
                  break;
              case "click":
                  if (n.button === 2)
                      break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                  p = hd;
                  break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                  p = N1;
                  break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                  p = W1;
                  break;
              case zm:
              case Bm:
              case Um:
                  p = D1;
                  break;
              case $m:
                  p = K1;
                  break;
              case "scroll":
                  p = E1;
                  break;
              case "wheel":
                  p = G1;
                  break;
              case "copy":
              case "cut":
              case "paste":
                  p = L1;
                  break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                  p = md
              }
              var h = (e & 4) !== 0
                , x = !h && t === "scroll"
                , g = h ? d !== null ? d + "Capture" : null : d;
              h = [];
              for (var m = u, y; m !== null; ) {
                  y = m;
                  var S = y.stateNode;
                  if (y.tag === 5 && S !== null && (y = S,
                  g !== null && (S = rs(m, g),
                  S != null && h.push(cs(m, S, y)))),
                  x)
                      break;
                  m = m.return
              }
              0 < h.length && (d = new p(d,v,null,n,c),
              f.push({
                  event: d,
                  listeners: h
              }))
          }
      }
      if (!(e & 7)) {
          e: {
              if (d = t === "mouseover" || t === "pointerover",
              p = t === "mouseout" || t === "pointerout",
              d && n !== Hl && (v = n.relatedTarget || n.fromElement) && (Zn(v) || v[sn]))
                  break e;
              if ((p || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window,
              p ? (v = n.relatedTarget || n.toElement,
              p = u,
              v = v ? Zn(v) : null,
              v !== null && (x = gr(v),
              v !== x || v.tag !== 5 && v.tag !== 6) && (v = null)) : (p = null,
              v = u),
              p !== v)) {
                  if (h = hd,
                  S = "onMouseLeave",
                  g = "onMouseEnter",
                  m = "mouse",
                  (t === "pointerout" || t === "pointerover") && (h = md,
                  S = "onPointerLeave",
                  g = "onPointerEnter",
                  m = "pointer"),
                  x = p == null ? d : Mr(p),
                  y = v == null ? d : Mr(v),
                  d = new h(S,m + "leave",p,n,c),
                  d.target = x,
                  d.relatedTarget = y,
                  S = null,
                  Zn(c) === u && (h = new h(g,m + "enter",v,n,c),
                  h.target = y,
                  h.relatedTarget = x,
                  S = h),
                  x = S,
                  p && v)
                      t: {
                          for (h = p,
                          g = v,
                          m = 0,
                          y = h; y; y = _r(y))
                              m++;
                          for (y = 0,
                          S = g; S; S = _r(S))
                              y++;
                          for (; 0 < m - y; )
                              h = _r(h),
                              m--;
                          for (; 0 < y - m; )
                              g = _r(g),
                              y--;
                          for (; m--; ) {
                              if (h === g || g !== null && h === g.alternate)
                                  break t;
                              h = _r(h),
                              g = _r(g)
                          }
                          h = null
                      }
                  else
                      h = null;
                  p !== null && Cd(f, d, p, h, !1),
                  v !== null && x !== null && Cd(f, x, v, h, !0)
              }
          }
          e: {
              if (d = u ? Mr(u) : window,
              p = d.nodeName && d.nodeName.toLowerCase(),
              p === "select" || p === "input" && d.type === "file")
                  var w = tx;
              else if (vd(d))
                  if (Om)
                      w = sx;
                  else {
                      w = rx;
                      var T = nx
                  }
              else
                  (p = d.nodeName) && p.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (w = ix);
              if (w && (w = w(t, u))) {
                  Lm(f, w, n, c);
                  break e
              }
              T && T(t, d, u),
              t === "focusout" && (T = d._wrapperState) && T.controlled && d.type === "number" && zl(d, "number", d.value)
          }
          switch (T = u ? Mr(u) : window,
          t) {
          case "focusin":
              (vd(T) || T.contentEditable === "true") && (Cr = T,
              ql = u,
              $i = null);
              break;
          case "focusout":
              $i = ql = Cr = null;
              break;
          case "mousedown":
              Jl = !0;
              break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
              Jl = !1,
              Td(f, n, c);
              break;
          case "selectionchange":
              if (lx)
                  break;
          case "keydown":
          case "keyup":
              Td(f, n, c)
          }
          var C;
          if (_c)
              e: {
                  switch (t) {
                  case "compositionstart":
                      var k = "onCompositionStart";
                      break e;
                  case "compositionend":
                      k = "onCompositionEnd";
                      break e;
                  case "compositionupdate":
                      k = "onCompositionUpdate";
                      break e
                  }
                  k = void 0
              }
          else
              Pr ? Dm(t, n) && (k = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
          k && (Rm && n.locale !== "ko" && (Pr || k !== "onCompositionStart" ? k === "onCompositionEnd" && Pr && (C = Am()) : (vn = c,
          yc = "value"in vn ? vn.value : vn.textContent,
          Pr = !0)),
          T = Vo(u, k),
          0 < T.length && (k = new pd(k,t,null,n,c),
          f.push({
              event: k,
              listeners: T
          }),
          C ? k.data = C : (C = jm(n),
          C !== null && (k.data = C)))),
          (C = Q1 ? Z1(t, n) : q1(t, n)) && (u = Vo(u, "onBeforeInput"),
          0 < u.length && (c = new pd("onBeforeInput","beforeinput",null,n,c),
          f.push({
              event: c,
              listeners: u
          }),
          c.data = C))
      }
      Hm(f, e)
  })
}
function cs(t, e, n) {
  return {
      instance: t,
      listener: e,
      currentTarget: n
  }
}
function Vo(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
      var i = t
        , s = i.stateNode;
      i.tag === 5 && s !== null && (i = s,
      s = rs(t, n),
      s != null && r.unshift(cs(t, s, i)),
      s = rs(t, e),
      s != null && r.push(cs(t, s, i))),
      t = t.return
  }
  return r
}
function _r(t) {
  if (t === null)
      return null;
  do
      t = t.return;
  while (t && t.tag !== 5);
  return t || null
}
function Cd(t, e, n, r, i) {
  for (var s = e._reactName, o = []; n !== null && n !== r; ) {
      var a = n
        , l = a.alternate
        , u = a.stateNode;
      if (l !== null && l === r)
          break;
      a.tag === 5 && u !== null && (a = u,
      i ? (l = rs(n, s),
      l != null && o.unshift(cs(n, l, a))) : i || (l = rs(n, s),
      l != null && o.push(cs(n, l, a)))),
      n = n.return
  }
  o.length !== 0 && t.push({
      event: e,
      listeners: o
  })
}
var dx = /\r\n?/g
, hx = /\u0000|\uFFFD/g;
function Ed(t) {
  return (typeof t == "string" ? t : "" + t).replace(dx, `
`).replace(hx, "")
}
function Js(t, e, n) {
  if (e = Ed(e),
  Ed(t) !== e && n)
      throw Error(A(425))
}
function Io() {}
var eu = null
, tu = null;
function nu(t, e) {
  return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var ru = typeof setTimeout == "function" ? setTimeout : void 0
, px = typeof clearTimeout == "function" ? clearTimeout : void 0
, Md = typeof Promise == "function" ? Promise : void 0
, mx = typeof queueMicrotask == "function" ? queueMicrotask : typeof Md < "u" ? function(t) {
  return Md.resolve(null).then(t).catch(gx)
}
: ru;
function gx(t) {
  setTimeout(function() {
      throw t
  })
}
function tl(t, e) {
  var n = e
    , r = 0;
  do {
      var i = n.nextSibling;
      if (t.removeChild(n),
      i && i.nodeType === 8)
          if (n = i.data,
          n === "/$") {
              if (r === 0) {
                  t.removeChild(i),
                  os(e);
                  return
              }
              r--
          } else
              n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i
  } while (n);
  os(e)
}
function Cn(t) {
  for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3)
          break;
      if (e === 8) {
          if (e = t.data,
          e === "$" || e === "$!" || e === "$?")
              break;
          if (e === "/$")
              return null
      }
  }
  return t
}
function Nd(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
      if (t.nodeType === 8) {
          var n = t.data;
          if (n === "$" || n === "$!" || n === "$?") {
              if (e === 0)
                  return t;
              e--
          } else
              n === "/$" && e++
      }
      t = t.previousSibling
  }
  return null
}
var gi = Math.random().toString(36).slice(2)
, Ft = "__reactFiber$" + gi
, fs = "__reactProps$" + gi
, sn = "__reactContainer$" + gi
, iu = "__reactEvents$" + gi
, yx = "__reactListeners$" + gi
, vx = "__reactHandles$" + gi;
function Zn(t) {
  var e = t[Ft];
  if (e)
      return e;
  for (var n = t.parentNode; n; ) {
      if (e = n[sn] || n[Ft]) {
          if (n = e.alternate,
          e.child !== null || n !== null && n.child !== null)
              for (t = Nd(t); t !== null; ) {
                  if (n = t[Ft])
                      return n;
                  t = Nd(t)
              }
          return e
      }
      t = n,
      n = t.parentNode
  }
  return null
}
function Os(t) {
  return t = t[Ft] || t[sn],
  !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}
function Mr(t) {
  if (t.tag === 5 || t.tag === 6)
      return t.stateNode;
  throw Error(A(33))
}
function _a(t) {
  return t[fs] || null
}
var su = []
, Nr = -1;
function zn(t) {
  return {
      current: t
  }
}
function ee(t) {
  0 > Nr || (t.current = su[Nr],
  su[Nr] = null,
  Nr--)
}
function Z(t, e) {
  Nr++,
  su[Nr] = t.current,
  t.current = e
}
var Ln = {}
, Fe = zn(Ln)
, Ge = zn(!1)
, ur = Ln;
function Jr(t, e) {
  var n = t.type.contextTypes;
  if (!n)
      return Ln;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
      return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, s;
  for (s in n)
      i[s] = e[s];
  return r && (t = t.stateNode,
  t.__reactInternalMemoizedUnmaskedChildContext = e,
  t.__reactInternalMemoizedMaskedChildContext = i),
  i
}
function Xe(t) {
  return t = t.childContextTypes,
  t != null
}
function Fo() {
  ee(Ge),
  ee(Fe)
}
function Ad(t, e, n) {
  if (Fe.current !== Ln)
      throw Error(A(168));
  Z(Fe, e),
  Z(Ge, n)
}
function Ym(t, e, n) {
  var r = t.stateNode;
  if (e = e.childContextTypes,
  typeof r.getChildContext != "function")
      return n;
  r = r.getChildContext();
  for (var i in r)
      if (!(i in e))
          throw Error(A(108, n1(t) || "Unknown", i));
  return le({}, n, r)
}
function zo(t) {
  return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Ln,
  ur = Fe.current,
  Z(Fe, t),
  Z(Ge, Ge.current),
  !0
}
function Rd(t, e, n) {
  var r = t.stateNode;
  if (!r)
      throw Error(A(169));
  n ? (t = Ym(t, e, ur),
  r.__reactInternalMemoizedMergedChildContext = t,
  ee(Ge),
  ee(Fe),
  Z(Fe, t)) : ee(Ge),
  Z(Ge, n)
}
var Qt = null
, wa = !1
, nl = !1;
function Gm(t) {
  Qt === null ? Qt = [t] : Qt.push(t)
}
function xx(t) {
  wa = !0,
  Gm(t)
}
function Bn() {
  if (!nl && Qt !== null) {
      nl = !0;
      var t = 0
        , e = Y;
      try {
          var n = Qt;
          for (Y = 1; t < n.length; t++) {
              var r = n[t];
              do
                  r = r(!0);
              while (r !== null)
          }
          Qt = null,
          wa = !1
      } catch (i) {
          throw Qt !== null && (Qt = Qt.slice(t + 1)),
          xm(hc, Bn),
          i
      } finally {
          Y = e,
          nl = !1
      }
  }
  return null
}
var Ar = []
, Rr = 0
, Bo = null
, Uo = 0
, vt = []
, xt = 0
, cr = null
, qt = 1
, Jt = "";
function Yn(t, e) {
  Ar[Rr++] = Uo,
  Ar[Rr++] = Bo,
  Bo = t,
  Uo = e
}
function Xm(t, e, n) {
  vt[xt++] = qt,
  vt[xt++] = Jt,
  vt[xt++] = cr,
  cr = t;
  var r = qt;
  t = Jt;
  var i = 32 - Dt(r) - 1;
  r &= ~(1 << i),
  n += 1;
  var s = 32 - Dt(e) + i;
  if (30 < s) {
      var o = i - i % 5;
      s = (r & (1 << o) - 1).toString(32),
      r >>= o,
      i -= o,
      qt = 1 << 32 - Dt(e) + i | n << i | r,
      Jt = s + t
  } else
      qt = 1 << s | n << i | r,
      Jt = t
}
function Sc(t) {
  t.return !== null && (Yn(t, 1),
  Xm(t, 1, 0))
}
function Tc(t) {
  for (; t === Bo; )
      Bo = Ar[--Rr],
      Ar[Rr] = null,
      Uo = Ar[--Rr],
      Ar[Rr] = null;
  for (; t === cr; )
      cr = vt[--xt],
      vt[xt] = null,
      Jt = vt[--xt],
      vt[xt] = null,
      qt = vt[--xt],
      vt[xt] = null
}
var at = null
, st = null
, te = !1
, Rt = null;
function Qm(t, e) {
  var n = _t(5, null, null, 0);
  n.elementType = "DELETED",
  n.stateNode = e,
  n.return = t,
  e = t.deletions,
  e === null ? (t.deletions = [n],
  t.flags |= 16) : e.push(n)
}
function Dd(t, e) {
  switch (t.tag) {
  case 5:
      var n = t.type;
      return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e,
      e !== null ? (t.stateNode = e,
      at = t,
      st = Cn(e.firstChild),
      !0) : !1;
  case 6:
      return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e,
      e !== null ? (t.stateNode = e,
      at = t,
      st = null,
      !0) : !1;
  case 13:
      return e = e.nodeType !== 8 ? null : e,
      e !== null ? (n = cr !== null ? {
          id: qt,
          overflow: Jt
      } : null,
      t.memoizedState = {
          dehydrated: e,
          treeContext: n,
          retryLane: 1073741824
      },
      n = _t(18, null, null, 0),
      n.stateNode = e,
      n.return = t,
      t.child = n,
      at = t,
      st = null,
      !0) : !1;
  default:
      return !1
  }
}
function ou(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function au(t) {
  if (te) {
      var e = st;
      if (e) {
          var n = e;
          if (!Dd(t, e)) {
              if (ou(t))
                  throw Error(A(418));
              e = Cn(n.nextSibling);
              var r = at;
              e && Dd(t, e) ? Qm(r, n) : (t.flags = t.flags & -4097 | 2,
              te = !1,
              at = t)
          }
      } else {
          if (ou(t))
              throw Error(A(418));
          t.flags = t.flags & -4097 | 2,
          te = !1,
          at = t
      }
  }
}
function jd(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
      t = t.return;
  at = t
}
function eo(t) {
  if (t !== at)
      return !1;
  if (!te)
      return jd(t),
      te = !0,
      !1;
  var e;
  if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type,
  e = e !== "head" && e !== "body" && !nu(t.type, t.memoizedProps)),
  e && (e = st)) {
      if (ou(t))
          throw Zm(),
          Error(A(418));
      for (; e; )
          Qm(t, e),
          e = Cn(e.nextSibling)
  }
  if (jd(t),
  t.tag === 13) {
      if (t = t.memoizedState,
      t = t !== null ? t.dehydrated : null,
      !t)
          throw Error(A(317));
      e: {
          for (t = t.nextSibling,
          e = 0; t; ) {
              if (t.nodeType === 8) {
                  var n = t.data;
                  if (n === "/$") {
                      if (e === 0) {
                          st = Cn(t.nextSibling);
                          break e
                      }
                      e--
                  } else
                      n !== "$" && n !== "$!" && n !== "$?" || e++
              }
              t = t.nextSibling
          }
          st = null
      }
  } else
      st = at ? Cn(t.stateNode.nextSibling) : null;
  return !0
}
function Zm() {
  for (var t = st; t; )
      t = Cn(t.nextSibling)
}
function ei() {
  st = at = null,
  te = !1
}
function kc(t) {
  Rt === null ? Rt = [t] : Rt.push(t)
}
var _x = fn.ReactCurrentBatchConfig;
function Pi(t, e, n) {
  if (t = n.ref,
  t !== null && typeof t != "function" && typeof t != "object") {
      if (n._owner) {
          if (n = n._owner,
          n) {
              if (n.tag !== 1)
                  throw Error(A(309));
              var r = n.stateNode
          }
          if (!r)
              throw Error(A(147, t));
          var i = r
            , s = "" + t;
          return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === s ? e.ref : (e = function(o) {
              var a = i.refs;
              o === null ? delete a[s] : a[s] = o
          }
          ,
          e._stringRef = s,
          e)
      }
      if (typeof t != "string")
          throw Error(A(284));
      if (!n._owner)
          throw Error(A(290, t))
  }
  return t
}
function to(t, e) {
  throw t = Object.prototype.toString.call(e),
  Error(A(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}
function Ld(t) {
  var e = t._init;
  return e(t._payload)
}
function qm(t) {
  function e(g, m) {
      if (t) {
          var y = g.deletions;
          y === null ? (g.deletions = [m],
          g.flags |= 16) : y.push(m)
      }
  }
  function n(g, m) {
      if (!t)
          return null;
      for (; m !== null; )
          e(g, m),
          m = m.sibling;
      return null
  }
  function r(g, m) {
      for (g = new Map; m !== null; )
          m.key !== null ? g.set(m.key, m) : g.set(m.index, m),
          m = m.sibling;
      return g
  }
  function i(g, m) {
      return g = An(g, m),
      g.index = 0,
      g.sibling = null,
      g
  }
  function s(g, m, y) {
      return g.index = y,
      t ? (y = g.alternate,
      y !== null ? (y = y.index,
      y < m ? (g.flags |= 2,
      m) : y) : (g.flags |= 2,
      m)) : (g.flags |= 1048576,
      m)
  }
  function o(g) {
      return t && g.alternate === null && (g.flags |= 2),
      g
  }
  function a(g, m, y, S) {
      return m === null || m.tag !== 6 ? (m = ul(y, g.mode, S),
      m.return = g,
      m) : (m = i(m, y),
      m.return = g,
      m)
  }
  function l(g, m, y, S) {
      var w = y.type;
      return w === kr ? c(g, m, y.props.children, S, y.key) : m !== null && (m.elementType === w || typeof w == "object" && w !== null && w.$$typeof === pn && Ld(w) === m.type) ? (S = i(m, y.props),
      S.ref = Pi(g, m, y),
      S.return = g,
      S) : (S = To(y.type, y.key, y.props, null, g.mode, S),
      S.ref = Pi(g, m, y),
      S.return = g,
      S)
  }
  function u(g, m, y, S) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = cl(y, g.mode, S),
      m.return = g,
      m) : (m = i(m, y.children || []),
      m.return = g,
      m)
  }
  function c(g, m, y, S, w) {
      return m === null || m.tag !== 7 ? (m = rr(y, g.mode, S, w),
      m.return = g,
      m) : (m = i(m, y),
      m.return = g,
      m)
  }
  function f(g, m, y) {
      if (typeof m == "string" && m !== "" || typeof m == "number")
          return m = ul("" + m, g.mode, y),
          m.return = g,
          m;
      if (typeof m == "object" && m !== null) {
          switch (m.$$typeof) {
          case Ws:
              return y = To(m.type, m.key, m.props, null, g.mode, y),
              y.ref = Pi(g, null, m),
              y.return = g,
              y;
          case Tr:
              return m = cl(m, g.mode, y),
              m.return = g,
              m;
          case pn:
              var S = m._init;
              return f(g, S(m._payload), y)
          }
          if (Ri(m) || _i(m))
              return m = rr(m, g.mode, y, null),
              m.return = g,
              m;
          to(g, m)
      }
      return null
  }
  function d(g, m, y, S) {
      var w = m !== null ? m.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number")
          return w !== null ? null : a(g, m, "" + y, S);
      if (typeof y == "object" && y !== null) {
          switch (y.$$typeof) {
          case Ws:
              return y.key === w ? l(g, m, y, S) : null;
          case Tr:
              return y.key === w ? u(g, m, y, S) : null;
          case pn:
              return w = y._init,
              d(g, m, w(y._payload), S)
          }
          if (Ri(y) || _i(y))
              return w !== null ? null : c(g, m, y, S, null);
          to(g, y)
      }
      return null
  }
  function p(g, m, y, S, w) {
      if (typeof S == "string" && S !== "" || typeof S == "number")
          return g = g.get(y) || null,
          a(m, g, "" + S, w);
      if (typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
          case Ws:
              return g = g.get(S.key === null ? y : S.key) || null,
              l(m, g, S, w);
          case Tr:
              return g = g.get(S.key === null ? y : S.key) || null,
              u(m, g, S, w);
          case pn:
              var T = S._init;
              return p(g, m, y, T(S._payload), w)
          }
          if (Ri(S) || _i(S))
              return g = g.get(y) || null,
              c(m, g, S, w, null);
          to(m, S)
      }
      return null
  }
  function v(g, m, y, S) {
      for (var w = null, T = null, C = m, k = m = 0, P = null; C !== null && k < y.length; k++) {
          C.index > k ? (P = C,
          C = null) : P = C.sibling;
          var E = d(g, C, y[k], S);
          if (E === null) {
              C === null && (C = P);
              break
          }
          t && C && E.alternate === null && e(g, C),
          m = s(E, m, k),
          T === null ? w = E : T.sibling = E,
          T = E,
          C = P
      }
      if (k === y.length)
          return n(g, C),
          te && Yn(g, k),
          w;
      if (C === null) {
          for (; k < y.length; k++)
              C = f(g, y[k], S),
              C !== null && (m = s(C, m, k),
              T === null ? w = C : T.sibling = C,
              T = C);
          return te && Yn(g, k),
          w
      }
      for (C = r(g, C); k < y.length; k++)
          P = p(C, g, k, y[k], S),
          P !== null && (t && P.alternate !== null && C.delete(P.key === null ? k : P.key),
          m = s(P, m, k),
          T === null ? w = P : T.sibling = P,
          T = P);
      return t && C.forEach(function(O) {
          return e(g, O)
      }),
      te && Yn(g, k),
      w
  }
  function h(g, m, y, S) {
      var w = _i(y);
      if (typeof w != "function")
          throw Error(A(150));
      if (y = w.call(y),
      y == null)
          throw Error(A(151));
      for (var T = w = null, C = m, k = m = 0, P = null, E = y.next(); C !== null && !E.done; k++,
      E = y.next()) {
          C.index > k ? (P = C,
          C = null) : P = C.sibling;
          var O = d(g, C, E.value, S);
          if (O === null) {
              C === null && (C = P);
              break
          }
          t && C && O.alternate === null && e(g, C),
          m = s(O, m, k),
          T === null ? w = O : T.sibling = O,
          T = O,
          C = P
      }
      if (E.done)
          return n(g, C),
          te && Yn(g, k),
          w;
      if (C === null) {
          for (; !E.done; k++,
          E = y.next())
              E = f(g, E.value, S),
              E !== null && (m = s(E, m, k),
              T === null ? w = E : T.sibling = E,
              T = E);
          return te && Yn(g, k),
          w
      }
      for (C = r(g, C); !E.done; k++,
      E = y.next())
          E = p(C, g, k, E.value, S),
          E !== null && (t && E.alternate !== null && C.delete(E.key === null ? k : E.key),
          m = s(E, m, k),
          T === null ? w = E : T.sibling = E,
          T = E);
      return t && C.forEach(function(V) {
          return e(g, V)
      }),
      te && Yn(g, k),
      w
  }
  function x(g, m, y, S) {
      if (typeof y == "object" && y !== null && y.type === kr && y.key === null && (y = y.props.children),
      typeof y == "object" && y !== null) {
          switch (y.$$typeof) {
          case Ws:
              e: {
                  for (var w = y.key, T = m; T !== null; ) {
                      if (T.key === w) {
                          if (w = y.type,
                          w === kr) {
                              if (T.tag === 7) {
                                  n(g, T.sibling),
                                  m = i(T, y.props.children),
                                  m.return = g,
                                  g = m;
                                  break e
                              }
                          } else if (T.elementType === w || typeof w == "object" && w !== null && w.$$typeof === pn && Ld(w) === T.type) {
                              n(g, T.sibling),
                              m = i(T, y.props),
                              m.ref = Pi(g, T, y),
                              m.return = g,
                              g = m;
                              break e
                          }
                          n(g, T);
                          break
                      } else
                          e(g, T);
                      T = T.sibling
                  }
                  y.type === kr ? (m = rr(y.props.children, g.mode, S, y.key),
                  m.return = g,
                  g = m) : (S = To(y.type, y.key, y.props, null, g.mode, S),
                  S.ref = Pi(g, m, y),
                  S.return = g,
                  g = S)
              }
              return o(g);
          case Tr:
              e: {
                  for (T = y.key; m !== null; ) {
                      if (m.key === T)
                          if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                              n(g, m.sibling),
                              m = i(m, y.children || []),
                              m.return = g,
                              g = m;
                              break e
                          } else {
                              n(g, m);
                              break
                          }
                      else
                          e(g, m);
                      m = m.sibling
                  }
                  m = cl(y, g.mode, S),
                  m.return = g,
                  g = m
              }
              return o(g);
          case pn:
              return T = y._init,
              x(g, m, T(y._payload), S)
          }
          if (Ri(y))
              return v(g, m, y, S);
          if (_i(y))
              return h(g, m, y, S);
          to(g, y)
      }
      return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
      m !== null && m.tag === 6 ? (n(g, m.sibling),
      m = i(m, y),
      m.return = g,
      g = m) : (n(g, m),
      m = ul(y, g.mode, S),
      m.return = g,
      g = m),
      o(g)) : n(g, m)
  }
  return x
}
var ti = qm(!0)
, Jm = qm(!1)
, $o = zn(null)
, Wo = null
, Dr = null
, Pc = null;
function Cc() {
  Pc = Dr = Wo = null
}
function Ec(t) {
  var e = $o.current;
  ee($o),
  t._currentValue = e
}
function lu(t, e, n) {
  for (; t !== null; ) {
      var r = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e,
      r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
          break;
      t = t.return
  }
}
function Yr(t, e) {
  Wo = t,
  Pc = Dr = null,
  t = t.dependencies,
  t !== null && t.firstContext !== null && (t.lanes & e && (Ye = !0),
  t.firstContext = null)
}
function Pt(t) {
  var e = t._currentValue;
  if (Pc !== t)
      if (t = {
          context: t,
          memoizedValue: e,
          next: null
      },
      Dr === null) {
          if (Wo === null)
              throw Error(A(308));
          Dr = t,
          Wo.dependencies = {
              lanes: 0,
              firstContext: t
          }
      } else
          Dr = Dr.next = t;
  return e
}
var qn = null;
function Mc(t) {
  qn === null ? qn = [t] : qn.push(t)
}
function e0(t, e, n, r) {
  var i = e.interleaved;
  return i === null ? (n.next = n,
  Mc(e)) : (n.next = i.next,
  i.next = n),
  e.interleaved = n,
  on(t, r)
}
function on(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e),
  n = t,
  t = t.return; t !== null; )
      t.childLanes |= e,
      n = t.alternate,
      n !== null && (n.childLanes |= e),
      n = t,
      t = t.return;
  return n.tag === 3 ? n.stateNode : null
}
var mn = !1;
function Nc(t) {
  t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
          pending: null,
          interleaved: null,
          lanes: 0
      },
      effects: null
  }
}
function t0(t, e) {
  t = t.updateQueue,
  e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      effects: t.effects
  })
}
function en(t, e) {
  return {
      eventTime: t,
      lane: e,
      tag: 0,
      payload: null,
      callback: null,
      next: null
  }
}
function En(t, e, n) {
  var r = t.updateQueue;
  if (r === null)
      return null;
  if (r = r.shared,
  H & 2) {
      var i = r.pending;
      return i === null ? e.next = e : (e.next = i.next,
      i.next = e),
      r.pending = e,
      on(t, n)
  }
  return i = r.interleaved,
  i === null ? (e.next = e,
  Mc(r)) : (e.next = i.next,
  i.next = e),
  r.interleaved = e,
  on(t, n)
}
function yo(t, e, n) {
  if (e = e.updateQueue,
  e !== null && (e = e.shared,
  (n & 4194240) !== 0)) {
      var r = e.lanes;
      r &= t.pendingLanes,
      n |= r,
      e.lanes = n,
      pc(t, n)
  }
}
function Od(t, e) {
  var n = t.updateQueue
    , r = t.alternate;
  if (r !== null && (r = r.updateQueue,
  n === r)) {
      var i = null
        , s = null;
      if (n = n.firstBaseUpdate,
      n !== null) {
          do {
              var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null
              };
              s === null ? i = s = o : s = s.next = o,
              n = n.next
          } while (n !== null);
          s === null ? i = s = e : s = s.next = e
      } else
          i = s = e;
      n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: s,
          shared: r.shared,
          effects: r.effects
      },
      t.updateQueue = n;
      return
  }
  t = n.lastBaseUpdate,
  t === null ? n.firstBaseUpdate = e : t.next = e,
  n.lastBaseUpdate = e
}
function Ho(t, e, n, r) {
  var i = t.updateQueue;
  mn = !1;
  var s = i.firstBaseUpdate
    , o = i.lastBaseUpdate
    , a = i.shared.pending;
  if (a !== null) {
      i.shared.pending = null;
      var l = a
        , u = l.next;
      l.next = null,
      o === null ? s = u : o.next = u,
      o = l;
      var c = t.alternate;
      c !== null && (c = c.updateQueue,
      a = c.lastBaseUpdate,
      a !== o && (a === null ? c.firstBaseUpdate = u : a.next = u,
      c.lastBaseUpdate = l))
  }
  if (s !== null) {
      var f = i.baseState;
      o = 0,
      c = u = l = null,
      a = s;
      do {
          var d = a.lane
            , p = a.eventTime;
          if ((r & d) === d) {
              c !== null && (c = c.next = {
                  eventTime: p,
                  lane: 0,
                  tag: a.tag,
                  payload: a.payload,
                  callback: a.callback,
                  next: null
              });
              e: {
                  var v = t
                    , h = a;
                  switch (d = e,
                  p = n,
                  h.tag) {
                  case 1:
                      if (v = h.payload,
                      typeof v == "function") {
                          f = v.call(p, f, d);
                          break e
                      }
                      f = v;
                      break e;
                  case 3:
                      v.flags = v.flags & -65537 | 128;
                  case 0:
                      if (v = h.payload,
                      d = typeof v == "function" ? v.call(p, f, d) : v,
                      d == null)
                          break e;
                      f = le({}, f, d);
                      break e;
                  case 2:
                      mn = !0
                  }
              }
              a.callback !== null && a.lane !== 0 && (t.flags |= 64,
              d = i.effects,
              d === null ? i.effects = [a] : d.push(a))
          } else
              p = {
                  eventTime: p,
                  lane: d,
                  tag: a.tag,
                  payload: a.payload,
                  callback: a.callback,
                  next: null
              },
              c === null ? (u = c = p,
              l = f) : c = c.next = p,
              o |= d;
          if (a = a.next,
          a === null) {
              if (a = i.shared.pending,
              a === null)
                  break;
              d = a,
              a = d.next,
              d.next = null,
              i.lastBaseUpdate = d,
              i.shared.pending = null
          }
      } while (!0);
      if (c === null && (l = f),
      i.baseState = l,
      i.firstBaseUpdate = u,
      i.lastBaseUpdate = c,
      e = i.shared.interleaved,
      e !== null) {
          i = e;
          do
              o |= i.lane,
              i = i.next;
          while (i !== e)
      } else
          s === null && (i.shared.lanes = 0);
      dr |= o,
      t.lanes = o,
      t.memoizedState = f
  }
}
function bd(t, e, n) {
  if (t = e.effects,
  e.effects = null,
  t !== null)
      for (e = 0; e < t.length; e++) {
          var r = t[e]
            , i = r.callback;
          if (i !== null) {
              if (r.callback = null,
              r = n,
              typeof i != "function")
                  throw Error(A(191, i));
              i.call(r)
          }
      }
}
var bs = {}
, $t = zn(bs)
, ds = zn(bs)
, hs = zn(bs);
function Jn(t) {
  if (t === bs)
      throw Error(A(174));
  return t
}
function Ac(t, e) {
  switch (Z(hs, e),
  Z(ds, t),
  Z($t, bs),
  t = e.nodeType,
  t) {
  case 9:
  case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Ul(null, "");
      break;
  default:
      t = t === 8 ? e.parentNode : e,
      e = t.namespaceURI || null,
      t = t.tagName,
      e = Ul(e, t)
  }
  ee($t),
  Z($t, e)
}
function ni() {
  ee($t),
  ee(ds),
  ee(hs)
}
function n0(t) {
  Jn(hs.current);
  var e = Jn($t.current)
    , n = Ul(e, t.type);
  e !== n && (Z(ds, t),
  Z($t, n))
}
function Rc(t) {
  ds.current === t && (ee($t),
  ee(ds))
}
var re = zn(0);
function Ko(t) {
  for (var e = t; e !== null; ) {
      if (e.tag === 13) {
          var n = e.memoizedState;
          if (n !== null && (n = n.dehydrated,
          n === null || n.data === "$?" || n.data === "$!"))
              return e
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
          if (e.flags & 128)
              return e
      } else if (e.child !== null) {
          e.child.return = e,
          e = e.child;
          continue
      }
      if (e === t)
          break;
      for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
              return null;
          e = e.return
      }
      e.sibling.return = e.return,
      e = e.sibling
  }
  return null
}
var rl = [];
function Dc() {
  for (var t = 0; t < rl.length; t++)
      rl[t]._workInProgressVersionPrimary = null;
  rl.length = 0
}
var vo = fn.ReactCurrentDispatcher
, il = fn.ReactCurrentBatchConfig
, fr = 0
, ae = null
, we = null
, Te = null
, Yo = !1
, Wi = !1
, ps = 0
, wx = 0;
function Re() {
  throw Error(A(321))
}
function jc(t, e) {
  if (e === null)
      return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
      if (!Lt(t[n], e[n]))
          return !1;
  return !0
}
function Lc(t, e, n, r, i, s) {
  if (fr = s,
  ae = e,
  e.memoizedState = null,
  e.updateQueue = null,
  e.lanes = 0,
  vo.current = t === null || t.memoizedState === null ? Px : Cx,
  t = n(r, i),
  Wi) {
      s = 0;
      do {
          if (Wi = !1,
          ps = 0,
          25 <= s)
              throw Error(A(301));
          s += 1,
          Te = we = null,
          e.updateQueue = null,
          vo.current = Ex,
          t = n(r, i)
      } while (Wi)
  }
  if (vo.current = Go,
  e = we !== null && we.next !== null,
  fr = 0,
  Te = we = ae = null,
  Yo = !1,
  e)
      throw Error(A(300));
  return t
}
function Oc() {
  var t = ps !== 0;
  return ps = 0,
  t
}
function Vt() {
  var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
  };
  return Te === null ? ae.memoizedState = Te = t : Te = Te.next = t,
  Te
}
function Ct() {
  if (we === null) {
      var t = ae.alternate;
      t = t !== null ? t.memoizedState : null
  } else
      t = we.next;
  var e = Te === null ? ae.memoizedState : Te.next;
  if (e !== null)
      Te = e,
      we = t;
  else {
      if (t === null)
          throw Error(A(310));
      we = t,
      t = {
          memoizedState: we.memoizedState,
          baseState: we.baseState,
          baseQueue: we.baseQueue,
          queue: we.queue,
          next: null
      },
      Te === null ? ae.memoizedState = Te = t : Te = Te.next = t
  }
  return Te
}
function ms(t, e) {
  return typeof e == "function" ? e(t) : e
}
function sl(t) {
  var e = Ct()
    , n = e.queue;
  if (n === null)
      throw Error(A(311));
  n.lastRenderedReducer = t;
  var r = we
    , i = r.baseQueue
    , s = n.pending;
  if (s !== null) {
      if (i !== null) {
          var o = i.next;
          i.next = s.next,
          s.next = o
      }
      r.baseQueue = i = s,
      n.pending = null
  }
  if (i !== null) {
      s = i.next,
      r = r.baseState;
      var a = o = null
        , l = null
        , u = s;
      do {
          var c = u.lane;
          if ((fr & c) === c)
              l !== null && (l = l.next = {
                  lane: 0,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null
              }),
              r = u.hasEagerState ? u.eagerState : t(r, u.action);
          else {
              var f = {
                  lane: c,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null
              };
              l === null ? (a = l = f,
              o = r) : l = l.next = f,
              ae.lanes |= c,
              dr |= c
          }
          u = u.next
      } while (u !== null && u !== s);
      l === null ? o = r : l.next = a,
      Lt(r, e.memoizedState) || (Ye = !0),
      e.memoizedState = r,
      e.baseState = o,
      e.baseQueue = l,
      n.lastRenderedState = r
  }
  if (t = n.interleaved,
  t !== null) {
      i = t;
      do
          s = i.lane,
          ae.lanes |= s,
          dr |= s,
          i = i.next;
      while (i !== t)
  } else
      i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch]
}
function ol(t) {
  var e = Ct()
    , n = e.queue;
  if (n === null)
      throw Error(A(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch
    , i = n.pending
    , s = e.memoizedState;
  if (i !== null) {
      n.pending = null;
      var o = i = i.next;
      do
          s = t(s, o.action),
          o = o.next;
      while (o !== i);
      Lt(s, e.memoizedState) || (Ye = !0),
      e.memoizedState = s,
      e.baseQueue === null && (e.baseState = s),
      n.lastRenderedState = s
  }
  return [s, r]
}
function r0() {}
function i0(t, e) {
  var n = ae
    , r = Ct()
    , i = e()
    , s = !Lt(r.memoizedState, i);
  if (s && (r.memoizedState = i,
  Ye = !0),
  r = r.queue,
  bc(a0.bind(null, n, r, t), [t]),
  r.getSnapshot !== e || s || Te !== null && Te.memoizedState.tag & 1) {
      if (n.flags |= 2048,
      gs(9, o0.bind(null, n, r, i, e), void 0, null),
      ke === null)
          throw Error(A(349));
      fr & 30 || s0(n, e, i)
  }
  return i
}
function s0(t, e, n) {
  t.flags |= 16384,
  t = {
      getSnapshot: e,
      value: n
  },
  e = ae.updateQueue,
  e === null ? (e = {
      lastEffect: null,
      stores: null
  },
  ae.updateQueue = e,
  e.stores = [t]) : (n = e.stores,
  n === null ? e.stores = [t] : n.push(t))
}
function o0(t, e, n, r) {
  e.value = n,
  e.getSnapshot = r,
  l0(e) && u0(t)
}
function a0(t, e, n) {
  return n(function() {
      l0(e) && u0(t)
  })
}
function l0(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
      var n = e();
      return !Lt(t, n)
  } catch {
      return !0
  }
}
function u0(t) {
  var e = on(t, 1);
  e !== null && jt(e, t, 1, -1)
}
function Vd(t) {
  var e = Vt();
  return typeof t == "function" && (t = t()),
  e.memoizedState = e.baseState = t,
  t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ms,
      lastRenderedState: t
  },
  e.queue = t,
  t = t.dispatch = kx.bind(null, ae, t),
  [e.memoizedState, t]
}
function gs(t, e, n, r) {
  return t = {
      tag: t,
      create: e,
      destroy: n,
      deps: r,
      next: null
  },
  e = ae.updateQueue,
  e === null ? (e = {
      lastEffect: null,
      stores: null
  },
  ae.updateQueue = e,
  e.lastEffect = t.next = t) : (n = e.lastEffect,
  n === null ? e.lastEffect = t.next = t : (r = n.next,
  n.next = t,
  t.next = r,
  e.lastEffect = t)),
  t
}
function c0() {
  return Ct().memoizedState
}
function xo(t, e, n, r) {
  var i = Vt();
  ae.flags |= t,
  i.memoizedState = gs(1 | e, n, void 0, r === void 0 ? null : r)
}
function Sa(t, e, n, r) {
  var i = Ct();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (we !== null) {
      var o = we.memoizedState;
      if (s = o.destroy,
      r !== null && jc(r, o.deps)) {
          i.memoizedState = gs(e, n, s, r);
          return
      }
  }
  ae.flags |= t,
  i.memoizedState = gs(1 | e, n, s, r)
}
function Id(t, e) {
  return xo(8390656, 8, t, e)
}
function bc(t, e) {
  return Sa(2048, 8, t, e)
}
function f0(t, e) {
  return Sa(4, 2, t, e)
}
function d0(t, e) {
  return Sa(4, 4, t, e)
}
function h0(t, e) {
  if (typeof e == "function")
      return t = t(),
      e(t),
      function() {
          e(null)
      }
      ;
  if (e != null)
      return t = t(),
      e.current = t,
      function() {
          e.current = null
      }
}
function p0(t, e, n) {
  return n = n != null ? n.concat([t]) : null,
  Sa(4, 4, h0.bind(null, e, t), n)
}
function Vc() {}
function m0(t, e) {
  var n = Ct();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && jc(e, r[1]) ? r[0] : (n.memoizedState = [t, e],
  t)
}
function g0(t, e) {
  var n = Ct();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && jc(e, r[1]) ? r[0] : (t = t(),
  n.memoizedState = [t, e],
  t)
}
function y0(t, e, n) {
  return fr & 21 ? (Lt(n, e) || (n = Sm(),
  ae.lanes |= n,
  dr |= n,
  t.baseState = !0),
  e) : (t.baseState && (t.baseState = !1,
  Ye = !0),
  t.memoizedState = n)
}
function Sx(t, e) {
  var n = Y;
  Y = n !== 0 && 4 > n ? n : 4,
  t(!0);
  var r = il.transition;
  il.transition = {};
  try {
      t(!1),
      e()
  } finally {
      Y = n,
      il.transition = r
  }
}
function v0() {
  return Ct().memoizedState
}
function Tx(t, e, n) {
  var r = Nn(t);
  if (n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
  },
  x0(t))
      _0(e, n);
  else if (n = e0(t, e, n, r),
  n !== null) {
      var i = $e();
      jt(n, t, r, i),
      w0(n, e, r)
  }
}
function kx(t, e, n) {
  var r = Nn(t)
    , i = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
  };
  if (x0(t))
      _0(e, i);
  else {
      var s = t.alternate;
      if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer,
      s !== null))
          try {
              var o = e.lastRenderedState
                , a = s(o, n);
              if (i.hasEagerState = !0,
              i.eagerState = a,
              Lt(a, o)) {
                  var l = e.interleaved;
                  l === null ? (i.next = i,
                  Mc(e)) : (i.next = l.next,
                  l.next = i),
                  e.interleaved = i;
                  return
              }
          } catch {} finally {}
      n = e0(t, e, i, r),
      n !== null && (i = $e(),
      jt(n, t, r, i),
      w0(n, e, r))
  }
}
function x0(t) {
  var e = t.alternate;
  return t === ae || e !== null && e === ae
}
function _0(t, e) {
  Wi = Yo = !0;
  var n = t.pending;
  n === null ? e.next = e : (e.next = n.next,
  n.next = e),
  t.pending = e
}
function w0(t, e, n) {
  if (n & 4194240) {
      var r = e.lanes;
      r &= t.pendingLanes,
      n |= r,
      e.lanes = n,
      pc(t, n)
  }
}
var Go = {
  readContext: Pt,
  useCallback: Re,
  useContext: Re,
  useEffect: Re,
  useImperativeHandle: Re,
  useInsertionEffect: Re,
  useLayoutEffect: Re,
  useMemo: Re,
  useReducer: Re,
  useRef: Re,
  useState: Re,
  useDebugValue: Re,
  useDeferredValue: Re,
  useTransition: Re,
  useMutableSource: Re,
  useSyncExternalStore: Re,
  useId: Re,
  unstable_isNewReconciler: !1
}
, Px = {
  readContext: Pt,
  useCallback: function(t, e) {
      return Vt().memoizedState = [t, e === void 0 ? null : e],
      t
  },
  useContext: Pt,
  useEffect: Id,
  useImperativeHandle: function(t, e, n) {
      return n = n != null ? n.concat([t]) : null,
      xo(4194308, 4, h0.bind(null, e, t), n)
  },
  useLayoutEffect: function(t, e) {
      return xo(4194308, 4, t, e)
  },
  useInsertionEffect: function(t, e) {
      return xo(4, 2, t, e)
  },
  useMemo: function(t, e) {
      var n = Vt();
      return e = e === void 0 ? null : e,
      t = t(),
      n.memoizedState = [t, e],
      t
  },
  useReducer: function(t, e, n) {
      var r = Vt();
      return e = n !== void 0 ? n(e) : e,
      r.memoizedState = r.baseState = e,
      t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e
      },
      r.queue = t,
      t = t.dispatch = Tx.bind(null, ae, t),
      [r.memoizedState, t]
  },
  useRef: function(t) {
      var e = Vt();
      return t = {
          current: t
      },
      e.memoizedState = t
  },
  useState: Vd,
  useDebugValue: Vc,
  useDeferredValue: function(t) {
      return Vt().memoizedState = t
  },
  useTransition: function() {
      var t = Vd(!1)
        , e = t[0];
      return t = Sx.bind(null, t[1]),
      Vt().memoizedState = t,
      [e, t]
  },
  useMutableSource: function() {},
  useSyncExternalStore: function(t, e, n) {
      var r = ae
        , i = Vt();
      if (te) {
          if (n === void 0)
              throw Error(A(407));
          n = n()
      } else {
          if (n = e(),
          ke === null)
              throw Error(A(349));
          fr & 30 || s0(r, e, n)
      }
      i.memoizedState = n;
      var s = {
          value: n,
          getSnapshot: e
      };
      return i.queue = s,
      Id(a0.bind(null, r, s, t), [t]),
      r.flags |= 2048,
      gs(9, o0.bind(null, r, s, n, e), void 0, null),
      n
  },
  useId: function() {
      var t = Vt()
        , e = ke.identifierPrefix;
      if (te) {
          var n = Jt
            , r = qt;
          n = (r & ~(1 << 32 - Dt(r) - 1)).toString(32) + n,
          e = ":" + e + "R" + n,
          n = ps++,
          0 < n && (e += "H" + n.toString(32)),
          e += ":"
      } else
          n = wx++,
          e = ":" + e + "r" + n.toString(32) + ":";
      return t.memoizedState = e
  },
  unstable_isNewReconciler: !1
}
, Cx = {
  readContext: Pt,
  useCallback: m0,
  useContext: Pt,
  useEffect: bc,
  useImperativeHandle: p0,
  useInsertionEffect: f0,
  useLayoutEffect: d0,
  useMemo: g0,
  useReducer: sl,
  useRef: c0,
  useState: function() {
      return sl(ms)
  },
  useDebugValue: Vc,
  useDeferredValue: function(t) {
      var e = Ct();
      return y0(e, we.memoizedState, t)
  },
  useTransition: function() {
      var t = sl(ms)[0]
        , e = Ct().memoizedState;
      return [t, e]
  },
  useMutableSource: r0,
  useSyncExternalStore: i0,
  useId: v0,
  unstable_isNewReconciler: !1
}
, Ex = {
  readContext: Pt,
  useCallback: m0,
  useContext: Pt,
  useEffect: bc,
  useImperativeHandle: p0,
  useInsertionEffect: f0,
  useLayoutEffect: d0,
  useMemo: g0,
  useReducer: ol,
  useRef: c0,
  useState: function() {
      return ol(ms)
  },
  useDebugValue: Vc,
  useDeferredValue: function(t) {
      var e = Ct();
      return we === null ? e.memoizedState = t : y0(e, we.memoizedState, t)
  },
  useTransition: function() {
      var t = ol(ms)[0]
        , e = Ct().memoizedState;
      return [t, e]
  },
  useMutableSource: r0,
  useSyncExternalStore: i0,
  useId: v0,
  unstable_isNewReconciler: !1
};
function Nt(t, e) {
  if (t && t.defaultProps) {
      e = le({}, e),
      t = t.defaultProps;
      for (var n in t)
          e[n] === void 0 && (e[n] = t[n]);
      return e
  }
  return e
}
function uu(t, e, n, r) {
  e = t.memoizedState,
  n = n(r, e),
  n = n == null ? e : le({}, e, n),
  t.memoizedState = n,
  t.lanes === 0 && (t.updateQueue.baseState = n)
}
var Ta = {
  isMounted: function(t) {
      return (t = t._reactInternals) ? gr(t) === t : !1
  },
  enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var r = $e()
        , i = Nn(t)
        , s = en(r, i);
      s.payload = e,
      n != null && (s.callback = n),
      e = En(t, s, i),
      e !== null && (jt(e, t, i, r),
      yo(e, t, i))
  },
  enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var r = $e()
        , i = Nn(t)
        , s = en(r, i);
      s.tag = 1,
      s.payload = e,
      n != null && (s.callback = n),
      e = En(t, s, i),
      e !== null && (jt(e, t, i, r),
      yo(e, t, i))
  },
  enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = $e()
        , r = Nn(t)
        , i = en(n, r);
      i.tag = 2,
      e != null && (i.callback = e),
      e = En(t, i, r),
      e !== null && (jt(e, t, r, n),
      yo(e, t, r))
  }
};
function Fd(t, e, n, r, i, s, o) {
  return t = t.stateNode,
  typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, s, o) : e.prototype && e.prototype.isPureReactComponent ? !ls(n, r) || !ls(i, s) : !0
}
function S0(t, e, n) {
  var r = !1
    , i = Ln
    , s = e.contextType;
  return typeof s == "object" && s !== null ? s = Pt(s) : (i = Xe(e) ? ur : Fe.current,
  r = e.contextTypes,
  s = (r = r != null) ? Jr(t, i) : Ln),
  e = new e(n,s),
  t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null,
  e.updater = Ta,
  t.stateNode = e,
  e._reactInternals = t,
  r && (t = t.stateNode,
  t.__reactInternalMemoizedUnmaskedChildContext = i,
  t.__reactInternalMemoizedMaskedChildContext = s),
  e
}
function zd(t, e, n, r) {
  t = e.state,
  typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r),
  typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r),
  e.state !== t && Ta.enqueueReplaceState(e, e.state, null)
}
function cu(t, e, n, r) {
  var i = t.stateNode;
  i.props = n,
  i.state = t.memoizedState,
  i.refs = {},
  Nc(t);
  var s = e.contextType;
  typeof s == "object" && s !== null ? i.context = Pt(s) : (s = Xe(e) ? ur : Fe.current,
  i.context = Jr(t, s)),
  i.state = t.memoizedState,
  s = e.getDerivedStateFromProps,
  typeof s == "function" && (uu(t, e, s, n),
  i.state = t.memoizedState),
  typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (e = i.state,
  typeof i.componentWillMount == "function" && i.componentWillMount(),
  typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
  e !== i.state && Ta.enqueueReplaceState(i, i.state, null),
  Ho(t, n, i, r),
  i.state = t.memoizedState),
  typeof i.componentDidMount == "function" && (t.flags |= 4194308)
}
function ri(t, e) {
  try {
      var n = ""
        , r = e;
      do
          n += t1(r),
          r = r.return;
      while (r);
      var i = n
  } catch (s) {
      i = `
Error generating stack: ` + s.message + `
` + s.stack
  }
  return {
      value: t,
      source: e,
      stack: i,
      digest: null
  }
}
function al(t, e, n) {
  return {
      value: t,
      source: null,
      stack: n ?? null,
      digest: e ?? null
  }
}
function fu(t, e) {
  try {
      console.error(e.value)
  } catch (n) {
      setTimeout(function() {
          throw n
      })
  }
}
var Mx = typeof WeakMap == "function" ? WeakMap : Map;
function T0(t, e, n) {
  n = en(-1, n),
  n.tag = 3,
  n.payload = {
      element: null
  };
  var r = e.value;
  return n.callback = function() {
      Qo || (Qo = !0,
      wu = r),
      fu(t, e)
  }
  ,
  n
}
function k0(t, e, n) {
  n = en(-1, n),
  n.tag = 3;
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
      var i = e.value;
      n.payload = function() {
          return r(i)
      }
      ,
      n.callback = function() {
          fu(t, e)
      }
  }
  var s = t.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
      fu(t, e),
      typeof r != "function" && (Mn === null ? Mn = new Set([this]) : Mn.add(this));
      var o = e.stack;
      this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : ""
      })
  }
  ),
  n
}
function Bd(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
      r = t.pingCache = new Mx;
      var i = new Set;
      r.set(e, i)
  } else
      i = r.get(e),
      i === void 0 && (i = new Set,
      r.set(e, i));
  i.has(n) || (i.add(n),
  t = Ux.bind(null, t, e, n),
  e.then(t, t))
}
function Ud(t) {
  do {
      var e;
      if ((e = t.tag === 13) && (e = t.memoizedState,
      e = e !== null ? e.dehydrated !== null : !0),
      e)
          return t;
      t = t.return
  } while (t !== null);
  return null
}
function $d(t, e, n, r, i) {
  return t.mode & 1 ? (t.flags |= 65536,
  t.lanes = i,
  t) : (t === e ? t.flags |= 65536 : (t.flags |= 128,
  n.flags |= 131072,
  n.flags &= -52805,
  n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = en(-1, 1),
  e.tag = 2,
  En(n, e, 1))),
  n.lanes |= 1),
  t)
}
var Nx = fn.ReactCurrentOwner
, Ye = !1;
function ze(t, e, n, r) {
  e.child = t === null ? Jm(e, null, n, r) : ti(e, t.child, n, r)
}
function Wd(t, e, n, r, i) {
  n = n.render;
  var s = e.ref;
  return Yr(e, i),
  r = Lc(t, e, n, r, s, i),
  n = Oc(),
  t !== null && !Ye ? (e.updateQueue = t.updateQueue,
  e.flags &= -2053,
  t.lanes &= ~i,
  an(t, e, i)) : (te && n && Sc(e),
  e.flags |= 1,
  ze(t, e, r, i),
  e.child)
}
function Hd(t, e, n, r, i) {
  if (t === null) {
      var s = n.type;
      return typeof s == "function" && !Hc(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15,
      e.type = s,
      P0(t, e, s, r, i)) : (t = To(n.type, null, r, e, e.mode, i),
      t.ref = e.ref,
      t.return = e,
      e.child = t)
  }
  if (s = t.child,
  !(t.lanes & i)) {
      var o = s.memoizedProps;
      if (n = n.compare,
      n = n !== null ? n : ls,
      n(o, r) && t.ref === e.ref)
          return an(t, e, i)
  }
  return e.flags |= 1,
  t = An(s, r),
  t.ref = e.ref,
  t.return = e,
  e.child = t
}
function P0(t, e, n, r, i) {
  if (t !== null) {
      var s = t.memoizedProps;
      if (ls(s, r) && t.ref === e.ref)
          if (Ye = !1,
          e.pendingProps = r = s,
          (t.lanes & i) !== 0)
              t.flags & 131072 && (Ye = !0);
          else
              return e.lanes = t.lanes,
              an(t, e, i)
  }
  return du(t, e, n, r, i)
}
function C0(t, e, n) {
  var r = e.pendingProps
    , i = r.children
    , s = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
      if (!(e.mode & 1))
          e.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
          },
          Z(Lr, nt),
          nt |= n;
      else {
          if (!(n & 1073741824))
              return t = s !== null ? s.baseLanes | n : n,
              e.lanes = e.childLanes = 1073741824,
              e.memoizedState = {
                  baseLanes: t,
                  cachePool: null,
                  transitions: null
              },
              e.updateQueue = null,
              Z(Lr, nt),
              nt |= t,
              null;
          e.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
          },
          r = s !== null ? s.baseLanes : n,
          Z(Lr, nt),
          nt |= r
      }
  else
      s !== null ? (r = s.baseLanes | n,
      e.memoizedState = null) : r = n,
      Z(Lr, nt),
      nt |= r;
  return ze(t, e, i, n),
  e.child
}
function E0(t, e) {
  var n = e.ref;
  (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512,
  e.flags |= 2097152)
}
function du(t, e, n, r, i) {
  var s = Xe(n) ? ur : Fe.current;
  return s = Jr(e, s),
  Yr(e, i),
  n = Lc(t, e, n, r, s, i),
  r = Oc(),
  t !== null && !Ye ? (e.updateQueue = t.updateQueue,
  e.flags &= -2053,
  t.lanes &= ~i,
  an(t, e, i)) : (te && r && Sc(e),
  e.flags |= 1,
  ze(t, e, n, i),
  e.child)
}
function Kd(t, e, n, r, i) {
  if (Xe(n)) {
      var s = !0;
      zo(e)
  } else
      s = !1;
  if (Yr(e, i),
  e.stateNode === null)
      _o(t, e),
      S0(e, n, r),
      cu(e, n, r, i),
      r = !0;
  else if (t === null) {
      var o = e.stateNode
        , a = e.memoizedProps;
      o.props = a;
      var l = o.context
        , u = n.contextType;
      typeof u == "object" && u !== null ? u = Pt(u) : (u = Xe(n) ? ur : Fe.current,
      u = Jr(e, u));
      var c = n.getDerivedStateFromProps
        , f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== u) && zd(e, o, r, u),
      mn = !1;
      var d = e.memoizedState;
      o.state = d,
      Ho(e, r, o, i),
      l = e.memoizedState,
      a !== r || d !== l || Ge.current || mn ? (typeof c == "function" && (uu(e, n, c, r),
      l = e.memoizedState),
      (a = mn || Fd(e, n, a, r, d, l, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
      typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
      e.memoizedProps = r,
      e.memoizedState = l),
      o.props = r,
      o.state = l,
      o.context = u,
      r = a) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
      r = !1)
  } else {
      o = e.stateNode,
      t0(t, e),
      a = e.memoizedProps,
      u = e.type === e.elementType ? a : Nt(e.type, a),
      o.props = u,
      f = e.pendingProps,
      d = o.context,
      l = n.contextType,
      typeof l == "object" && l !== null ? l = Pt(l) : (l = Xe(n) ? ur : Fe.current,
      l = Jr(e, l));
      var p = n.getDerivedStateFromProps;
      (c = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== f || d !== l) && zd(e, o, r, l),
      mn = !1,
      d = e.memoizedState,
      o.state = d,
      Ho(e, r, o, i);
      var v = e.memoizedState;
      a !== f || d !== v || Ge.current || mn ? (typeof p == "function" && (uu(e, n, p, r),
      v = e.memoizedState),
      (u = mn || Fd(e, n, u, r, d, v, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, l),
      typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, l)),
      typeof o.componentDidUpdate == "function" && (e.flags |= 4),
      typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === t.memoizedProps && d === t.memoizedState || (e.flags |= 4),
      typeof o.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024),
      e.memoizedProps = r,
      e.memoizedState = v),
      o.props = r,
      o.state = v,
      o.context = l,
      r = u) : (typeof o.componentDidUpdate != "function" || a === t.memoizedProps && d === t.memoizedState || (e.flags |= 4),
      typeof o.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024),
      r = !1)
  }
  return hu(t, e, n, r, s, i)
}
function hu(t, e, n, r, i, s) {
  E0(t, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o)
      return i && Rd(e, n, !1),
      an(t, e, s);
  r = e.stateNode,
  Nx.current = e;
  var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return e.flags |= 1,
  t !== null && o ? (e.child = ti(e, t.child, null, s),
  e.child = ti(e, null, a, s)) : ze(t, e, a, s),
  e.memoizedState = r.state,
  i && Rd(e, n, !0),
  e.child
}
function M0(t) {
  var e = t.stateNode;
  e.pendingContext ? Ad(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Ad(t, e.context, !1),
  Ac(t, e.containerInfo)
}
function Yd(t, e, n, r, i) {
  return ei(),
  kc(i),
  e.flags |= 256,
  ze(t, e, n, r),
  e.child
}
var pu = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};
function mu(t) {
  return {
      baseLanes: t,
      cachePool: null,
      transitions: null
  }
}
function N0(t, e, n) {
  var r = e.pendingProps, i = re.current, s = !1, o = (e.flags & 128) !== 0, a;
  if ((a = o) || (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
  a ? (s = !0,
  e.flags &= -129) : (t === null || t.memoizedState !== null) && (i |= 1),
  Z(re, i & 1),
  t === null)
      return au(e),
      t = e.memoizedState,
      t !== null && (t = t.dehydrated,
      t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1,
      null) : (o = r.children,
      t = r.fallback,
      s ? (r = e.mode,
      s = e.child,
      o = {
          mode: "hidden",
          children: o
      },
      !(r & 1) && s !== null ? (s.childLanes = 0,
      s.pendingProps = o) : s = Ca(o, r, 0, null),
      t = rr(t, r, n, null),
      s.return = e,
      t.return = e,
      s.sibling = t,
      e.child = s,
      e.child.memoizedState = mu(n),
      e.memoizedState = pu,
      t) : Ic(e, o));
  if (i = t.memoizedState,
  i !== null && (a = i.dehydrated,
  a !== null))
      return Ax(t, e, o, r, a, i, n);
  if (s) {
      s = r.fallback,
      o = e.mode,
      i = t.child,
      a = i.sibling;
      var l = {
          mode: "hidden",
          children: r.children
      };
      return !(o & 1) && e.child !== i ? (r = e.child,
      r.childLanes = 0,
      r.pendingProps = l,
      e.deletions = null) : (r = An(i, l),
      r.subtreeFlags = i.subtreeFlags & 14680064),
      a !== null ? s = An(a, s) : (s = rr(s, o, n, null),
      s.flags |= 2),
      s.return = e,
      r.return = e,
      r.sibling = s,
      e.child = r,
      r = s,
      s = e.child,
      o = t.child.memoizedState,
      o = o === null ? mu(n) : {
          baseLanes: o.baseLanes | n,
          cachePool: null,
          transitions: o.transitions
      },
      s.memoizedState = o,
      s.childLanes = t.childLanes & ~n,
      e.memoizedState = pu,
      r
  }
  return s = t.child,
  t = s.sibling,
  r = An(s, {
      mode: "visible",
      children: r.children
  }),
  !(e.mode & 1) && (r.lanes = n),
  r.return = e,
  r.sibling = null,
  t !== null && (n = e.deletions,
  n === null ? (e.deletions = [t],
  e.flags |= 16) : n.push(t)),
  e.child = r,
  e.memoizedState = null,
  r
}
function Ic(t, e) {
  return e = Ca({
      mode: "visible",
      children: e
  }, t.mode, 0, null),
  e.return = t,
  t.child = e
}
function no(t, e, n, r) {
  return r !== null && kc(r),
  ti(e, t.child, null, n),
  t = Ic(e, e.pendingProps.children),
  t.flags |= 2,
  e.memoizedState = null,
  t
}
function Ax(t, e, n, r, i, s, o) {
  if (n)
      return e.flags & 256 ? (e.flags &= -257,
      r = al(Error(A(422))),
      no(t, e, o, r)) : e.memoizedState !== null ? (e.child = t.child,
      e.flags |= 128,
      null) : (s = r.fallback,
      i = e.mode,
      r = Ca({
          mode: "visible",
          children: r.children
      }, i, 0, null),
      s = rr(s, i, o, null),
      s.flags |= 2,
      r.return = e,
      s.return = e,
      r.sibling = s,
      e.child = r,
      e.mode & 1 && ti(e, t.child, null, o),
      e.child.memoizedState = mu(o),
      e.memoizedState = pu,
      s);
  if (!(e.mode & 1))
      return no(t, e, o, null);
  if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset,
      r)
          var a = r.dgst;
      return r = a,
      s = Error(A(419)),
      r = al(s, r, void 0),
      no(t, e, o, r)
  }
  if (a = (o & t.childLanes) !== 0,
  Ye || a) {
      if (r = ke,
      r !== null) {
          switch (o & -o) {
          case 4:
              i = 2;
              break;
          case 16:
              i = 8;
              break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
              i = 32;
              break;
          case 536870912:
              i = 268435456;
              break;
          default:
              i = 0
          }
          i = i & (r.suspendedLanes | o) ? 0 : i,
          i !== 0 && i !== s.retryLane && (s.retryLane = i,
          on(t, i),
          jt(r, t, i, -1))
      }
      return Wc(),
      r = al(Error(A(421))),
      no(t, e, o, r)
  }
  return i.data === "$?" ? (e.flags |= 128,
  e.child = t.child,
  e = $x.bind(null, t),
  i._reactRetry = e,
  null) : (t = s.treeContext,
  st = Cn(i.nextSibling),
  at = e,
  te = !0,
  Rt = null,
  t !== null && (vt[xt++] = qt,
  vt[xt++] = Jt,
  vt[xt++] = cr,
  qt = t.id,
  Jt = t.overflow,
  cr = e),
  e = Ic(e, r.children),
  e.flags |= 4096,
  e)
}
function Gd(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e),
  lu(t.return, e, n)
}
function ll(t, e, n, r, i) {
  var s = t.memoizedState;
  s === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: i
  } : (s.isBackwards = e,
  s.rendering = null,
  s.renderingStartTime = 0,
  s.last = r,
  s.tail = n,
  s.tailMode = i)
}
function A0(t, e, n) {
  var r = e.pendingProps
    , i = r.revealOrder
    , s = r.tail;
  if (ze(t, e, r.children, n),
  r = re.current,
  r & 2)
      r = r & 1 | 2,
      e.flags |= 128;
  else {
      if (t !== null && t.flags & 128)
          e: for (t = e.child; t !== null; ) {
              if (t.tag === 13)
                  t.memoizedState !== null && Gd(t, n, e);
              else if (t.tag === 19)
                  Gd(t, n, e);
              else if (t.child !== null) {
                  t.child.return = t,
                  t = t.child;
                  continue
              }
              if (t === e)
                  break e;
              for (; t.sibling === null; ) {
                  if (t.return === null || t.return === e)
                      break e;
                  t = t.return
              }
              t.sibling.return = t.return,
              t = t.sibling
          }
      r &= 1
  }
  if (Z(re, r),
  !(e.mode & 1))
      e.memoizedState = null;
  else
      switch (i) {
      case "forwards":
          for (n = e.child,
          i = null; n !== null; )
              t = n.alternate,
              t !== null && Ko(t) === null && (i = n),
              n = n.sibling;
          n = i,
          n === null ? (i = e.child,
          e.child = null) : (i = n.sibling,
          n.sibling = null),
          ll(e, !1, i, n, s);
          break;
      case "backwards":
          for (n = null,
          i = e.child,
          e.child = null; i !== null; ) {
              if (t = i.alternate,
              t !== null && Ko(t) === null) {
                  e.child = i;
                  break
              }
              t = i.sibling,
              i.sibling = n,
              n = i,
              i = t
          }
          ll(e, !0, n, null, s);
          break;
      case "together":
          ll(e, !1, null, null, void 0);
          break;
      default:
          e.memoizedState = null
      }
  return e.child
}
function _o(t, e) {
  !(e.mode & 1) && t !== null && (t.alternate = null,
  e.alternate = null,
  e.flags |= 2)
}
function an(t, e, n) {
  if (t !== null && (e.dependencies = t.dependencies),
  dr |= e.lanes,
  !(n & e.childLanes))
      return null;
  if (t !== null && e.child !== t.child)
      throw Error(A(153));
  if (e.child !== null) {
      for (t = e.child,
      n = An(t, t.pendingProps),
      e.child = n,
      n.return = e; t.sibling !== null; )
          t = t.sibling,
          n = n.sibling = An(t, t.pendingProps),
          n.return = e;
      n.sibling = null
  }
  return e.child
}
function Rx(t, e, n) {
  switch (e.tag) {
  case 3:
      M0(e),
      ei();
      break;
  case 5:
      n0(e);
      break;
  case 1:
      Xe(e.type) && zo(e);
      break;
  case 4:
      Ac(e, e.stateNode.containerInfo);
      break;
  case 10:
      var r = e.type._context
        , i = e.memoizedProps.value;
      Z($o, r._currentValue),
      r._currentValue = i;
      break;
  case 13:
      if (r = e.memoizedState,
      r !== null)
          return r.dehydrated !== null ? (Z(re, re.current & 1),
          e.flags |= 128,
          null) : n & e.child.childLanes ? N0(t, e, n) : (Z(re, re.current & 1),
          t = an(t, e, n),
          t !== null ? t.sibling : null);
      Z(re, re.current & 1);
      break;
  case 19:
      if (r = (n & e.childLanes) !== 0,
      t.flags & 128) {
          if (r)
              return A0(t, e, n);
          e.flags |= 128
      }
      if (i = e.memoizedState,
      i !== null && (i.rendering = null,
      i.tail = null,
      i.lastEffect = null),
      Z(re, re.current),
      r)
          break;
      return null;
  case 22:
  case 23:
      return e.lanes = 0,
      C0(t, e, n)
  }
  return an(t, e, n)
}
var R0, gu, D0, j0;
R0 = function(t, e) {
  for (var n = e.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6)
          t.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
          n.child.return = n,
          n = n.child;
          continue
      }
      if (n === e)
          break;
      for (; n.sibling === null; ) {
          if (n.return === null || n.return === e)
              return;
          n = n.return
      }
      n.sibling.return = n.return,
      n = n.sibling
  }
}
;
gu = function() {}
;
D0 = function(t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
      t = e.stateNode,
      Jn($t.current);
      var s = null;
      switch (n) {
      case "input":
          i = Il(t, i),
          r = Il(t, r),
          s = [];
          break;
      case "select":
          i = le({}, i, {
              value: void 0
          }),
          r = le({}, r, {
              value: void 0
          }),
          s = [];
          break;
      case "textarea":
          i = Bl(t, i),
          r = Bl(t, r),
          s = [];
          break;
      default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (t.onclick = Io)
      }
      $l(n, r);
      var o;
      n = null;
      for (u in i)
          if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
              if (u === "style") {
                  var a = i[u];
                  for (o in a)
                      a.hasOwnProperty(o) && (n || (n = {}),
                      n[o] = "")
              } else
                  u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ts.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
      for (u in r) {
          var l = r[u];
          if (a = i != null ? i[u] : void 0,
          r.hasOwnProperty(u) && l !== a && (l != null || a != null))
              if (u === "style")
                  if (a) {
                      for (o in a)
                          !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}),
                          n[o] = "");
                      for (o in l)
                          l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}),
                          n[o] = l[o])
                  } else
                      n || (s || (s = []),
                      s.push(u, n)),
                      n = l;
              else
                  u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                  a = a ? a.__html : void 0,
                  l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ts.hasOwnProperty(u) ? (l != null && u === "onScroll" && J("scroll", t),
                  s || a === l || (s = [])) : (s = s || []).push(u, l))
      }
      n && (s = s || []).push("style", n);
      var u = s;
      (e.updateQueue = u) && (e.flags |= 4)
  }
}
;
j0 = function(t, e, n, r) {
  n !== r && (e.flags |= 4)
}
;
function Ci(t, e) {
  if (!te)
      switch (t.tailMode) {
      case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
              e.alternate !== null && (n = e),
              e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
          break;
      case "collapsed":
          n = t.tail;
          for (var r = null; n !== null; )
              n.alternate !== null && (r = n),
              n = n.sibling;
          r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null
      }
}
function De(t) {
  var e = t.alternate !== null && t.alternate.child === t.child
    , n = 0
    , r = 0;
  if (e)
      for (var i = t.child; i !== null; )
          n |= i.lanes | i.childLanes,
          r |= i.subtreeFlags & 14680064,
          r |= i.flags & 14680064,
          i.return = t,
          i = i.sibling;
  else
      for (i = t.child; i !== null; )
          n |= i.lanes | i.childLanes,
          r |= i.subtreeFlags,
          r |= i.flags,
          i.return = t,
          i = i.sibling;
  return t.subtreeFlags |= r,
  t.childLanes = n,
  e
}
function Dx(t, e, n) {
  var r = e.pendingProps;
  switch (Tc(e),
  e.tag) {
  case 2:
  case 16:
  case 15:
  case 0:
  case 11:
  case 7:
  case 8:
  case 12:
  case 9:
  case 14:
      return De(e),
      null;
  case 1:
      return Xe(e.type) && Fo(),
      De(e),
      null;
  case 3:
      return r = e.stateNode,
      ni(),
      ee(Ge),
      ee(Fe),
      Dc(),
      r.pendingContext && (r.context = r.pendingContext,
      r.pendingContext = null),
      (t === null || t.child === null) && (eo(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024,
      Rt !== null && (ku(Rt),
      Rt = null))),
      gu(t, e),
      De(e),
      null;
  case 5:
      Rc(e);
      var i = Jn(hs.current);
      if (n = e.type,
      t !== null && e.stateNode != null)
          D0(t, e, n, r, i),
          t.ref !== e.ref && (e.flags |= 512,
          e.flags |= 2097152);
      else {
          if (!r) {
              if (e.stateNode === null)
                  throw Error(A(166));
              return De(e),
              null
          }
          if (t = Jn($t.current),
          eo(e)) {
              r = e.stateNode,
              n = e.type;
              var s = e.memoizedProps;
              switch (r[Ft] = e,
              r[fs] = s,
              t = (e.mode & 1) !== 0,
              n) {
              case "dialog":
                  J("cancel", r),
                  J("close", r);
                  break;
              case "iframe":
              case "object":
              case "embed":
                  J("load", r);
                  break;
              case "video":
              case "audio":
                  for (i = 0; i < ji.length; i++)
                      J(ji[i], r);
                  break;
              case "source":
                  J("error", r);
                  break;
              case "img":
              case "image":
              case "link":
                  J("error", r),
                  J("load", r);
                  break;
              case "details":
                  J("toggle", r);
                  break;
              case "input":
                  rd(r, s),
                  J("invalid", r);
                  break;
              case "select":
                  r._wrapperState = {
                      wasMultiple: !!s.multiple
                  },
                  J("invalid", r);
                  break;
              case "textarea":
                  sd(r, s),
                  J("invalid", r)
              }
              $l(n, s),
              i = null;
              for (var o in s)
                  if (s.hasOwnProperty(o)) {
                      var a = s[o];
                      o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Js(r.textContent, a, t),
                      i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Js(r.textContent, a, t),
                      i = ["children", "" + a]) : ts.hasOwnProperty(o) && a != null && o === "onScroll" && J("scroll", r)
                  }
              switch (n) {
              case "input":
                  Hs(r),
                  id(r, s, !0);
                  break;
              case "textarea":
                  Hs(r),
                  od(r);
                  break;
              case "select":
              case "option":
                  break;
              default:
                  typeof s.onClick == "function" && (r.onclick = Io)
              }
              r = i,
              e.updateQueue = r,
              r !== null && (e.flags |= 4)
          } else {
              o = i.nodeType === 9 ? i : i.ownerDocument,
              t === "http://www.w3.org/1999/xhtml" && (t = am(n)),
              t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = o.createElement("div"),
              t.innerHTML = "<script><\/script>",
              t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = o.createElement(n, {
                  is: r.is
              }) : (t = o.createElement(n),
              n === "select" && (o = t,
              r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : t = o.createElementNS(t, n),
              t[Ft] = e,
              t[fs] = r,
              R0(t, e, !1, !1),
              e.stateNode = t;
              e: {
                  switch (o = Wl(n, r),
                  n) {
                  case "dialog":
                      J("cancel", t),
                      J("close", t),
                      i = r;
                      break;
                  case "iframe":
                  case "object":
                  case "embed":
                      J("load", t),
                      i = r;
                      break;
                  case "video":
                  case "audio":
                      for (i = 0; i < ji.length; i++)
                          J(ji[i], t);
                      i = r;
                      break;
                  case "source":
                      J("error", t),
                      i = r;
                      break;
                  case "img":
                  case "image":
                  case "link":
                      J("error", t),
                      J("load", t),
                      i = r;
                      break;
                  case "details":
                      J("toggle", t),
                      i = r;
                      break;
                  case "input":
                      rd(t, r),
                      i = Il(t, r),
                      J("invalid", t);
                      break;
                  case "option":
                      i = r;
                      break;
                  case "select":
                      t._wrapperState = {
                          wasMultiple: !!r.multiple
                      },
                      i = le({}, r, {
                          value: void 0
                      }),
                      J("invalid", t);
                      break;
                  case "textarea":
                      sd(t, r),
                      i = Bl(t, r),
                      J("invalid", t);
                      break;
                  default:
                      i = r
                  }
                  $l(n, i),
                  a = i;
                  for (s in a)
                      if (a.hasOwnProperty(s)) {
                          var l = a[s];
                          s === "style" ? cm(t, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                          l != null && lm(t, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ns(t, l) : typeof l == "number" && ns(t, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ts.hasOwnProperty(s) ? l != null && s === "onScroll" && J("scroll", t) : l != null && lc(t, s, l, o))
                      }
                  switch (n) {
                  case "input":
                      Hs(t),
                      id(t, r, !1);
                      break;
                  case "textarea":
                      Hs(t),
                      od(t);
                      break;
                  case "option":
                      r.value != null && t.setAttribute("value", "" + jn(r.value));
                      break;
                  case "select":
                      t.multiple = !!r.multiple,
                      s = r.value,
                      s != null ? $r(t, !!r.multiple, s, !1) : r.defaultValue != null && $r(t, !!r.multiple, r.defaultValue, !0);
                      break;
                  default:
                      typeof i.onClick == "function" && (t.onclick = Io)
                  }
                  switch (n) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                      r = !!r.autoFocus;
                      break e;
                  case "img":
                      r = !0;
                      break e;
                  default:
                      r = !1
                  }
              }
              r && (e.flags |= 4)
          }
          e.ref !== null && (e.flags |= 512,
          e.flags |= 2097152)
      }
      return De(e),
      null;
  case 6:
      if (t && e.stateNode != null)
          j0(t, e, t.memoizedProps, r);
      else {
          if (typeof r != "string" && e.stateNode === null)
              throw Error(A(166));
          if (n = Jn(hs.current),
          Jn($t.current),
          eo(e)) {
              if (r = e.stateNode,
              n = e.memoizedProps,
              r[Ft] = e,
              (s = r.nodeValue !== n) && (t = at,
              t !== null))
                  switch (t.tag) {
                  case 3:
                      Js(r.nodeValue, n, (t.mode & 1) !== 0);
                      break;
                  case 5:
                      t.memoizedProps.suppressHydrationWarning !== !0 && Js(r.nodeValue, n, (t.mode & 1) !== 0)
                  }
              s && (e.flags |= 4)
          } else
              r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
              r[Ft] = e,
              e.stateNode = r
      }
      return De(e),
      null;
  case 13:
      if (ee(re),
      r = e.memoizedState,
      t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (te && st !== null && e.mode & 1 && !(e.flags & 128))
              Zm(),
              ei(),
              e.flags |= 98560,
              s = !1;
          else if (s = eo(e),
          r !== null && r.dehydrated !== null) {
              if (t === null) {
                  if (!s)
                      throw Error(A(318));
                  if (s = e.memoizedState,
                  s = s !== null ? s.dehydrated : null,
                  !s)
                      throw Error(A(317));
                  s[Ft] = e
              } else
                  ei(),
                  !(e.flags & 128) && (e.memoizedState = null),
                  e.flags |= 4;
              De(e),
              s = !1
          } else
              Rt !== null && (ku(Rt),
              Rt = null),
              s = !0;
          if (!s)
              return e.flags & 65536 ? e : null
      }
      return e.flags & 128 ? (e.lanes = n,
      e) : (r = r !== null,
      r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192,
      e.mode & 1 && (t === null || re.current & 1 ? Se === 0 && (Se = 3) : Wc())),
      e.updateQueue !== null && (e.flags |= 4),
      De(e),
      null);
  case 4:
      return ni(),
      gu(t, e),
      t === null && us(e.stateNode.containerInfo),
      De(e),
      null;
  case 10:
      return Ec(e.type._context),
      De(e),
      null;
  case 17:
      return Xe(e.type) && Fo(),
      De(e),
      null;
  case 19:
      if (ee(re),
      s = e.memoizedState,
      s === null)
          return De(e),
          null;
      if (r = (e.flags & 128) !== 0,
      o = s.rendering,
      o === null)
          if (r)
              Ci(s, !1);
          else {
              if (Se !== 0 || t !== null && t.flags & 128)
                  for (t = e.child; t !== null; ) {
                      if (o = Ko(t),
                      o !== null) {
                          for (e.flags |= 128,
                          Ci(s, !1),
                          r = o.updateQueue,
                          r !== null && (e.updateQueue = r,
                          e.flags |= 4),
                          e.subtreeFlags = 0,
                          r = n,
                          n = e.child; n !== null; )
                              s = n,
                              t = r,
                              s.flags &= 14680066,
                              o = s.alternate,
                              o === null ? (s.childLanes = 0,
                              s.lanes = t,
                              s.child = null,
                              s.subtreeFlags = 0,
                              s.memoizedProps = null,
                              s.memoizedState = null,
                              s.updateQueue = null,
                              s.dependencies = null,
                              s.stateNode = null) : (s.childLanes = o.childLanes,
                              s.lanes = o.lanes,
                              s.child = o.child,
                              s.subtreeFlags = 0,
                              s.deletions = null,
                              s.memoizedProps = o.memoizedProps,
                              s.memoizedState = o.memoizedState,
                              s.updateQueue = o.updateQueue,
                              s.type = o.type,
                              t = o.dependencies,
                              s.dependencies = t === null ? null : {
                                  lanes: t.lanes,
                                  firstContext: t.firstContext
                              }),
                              n = n.sibling;
                          return Z(re, re.current & 1 | 2),
                          e.child
                      }
                      t = t.sibling
                  }
              s.tail !== null && pe() > ii && (e.flags |= 128,
              r = !0,
              Ci(s, !1),
              e.lanes = 4194304)
          }
      else {
          if (!r)
              if (t = Ko(o),
              t !== null) {
                  if (e.flags |= 128,
                  r = !0,
                  n = t.updateQueue,
                  n !== null && (e.updateQueue = n,
                  e.flags |= 4),
                  Ci(s, !0),
                  s.tail === null && s.tailMode === "hidden" && !o.alternate && !te)
                      return De(e),
                      null
              } else
                  2 * pe() - s.renderingStartTime > ii && n !== 1073741824 && (e.flags |= 128,
                  r = !0,
                  Ci(s, !1),
                  e.lanes = 4194304);
          s.isBackwards ? (o.sibling = e.child,
          e.child = o) : (n = s.last,
          n !== null ? n.sibling = o : e.child = o,
          s.last = o)
      }
      return s.tail !== null ? (e = s.tail,
      s.rendering = e,
      s.tail = e.sibling,
      s.renderingStartTime = pe(),
      e.sibling = null,
      n = re.current,
      Z(re, r ? n & 1 | 2 : n & 1),
      e) : (De(e),
      null);
  case 22:
  case 23:
      return $c(),
      r = e.memoizedState !== null,
      t !== null && t.memoizedState !== null !== r && (e.flags |= 8192),
      r && e.mode & 1 ? nt & 1073741824 && (De(e),
      e.subtreeFlags & 6 && (e.flags |= 8192)) : De(e),
      null;
  case 24:
      return null;
  case 25:
      return null
  }
  throw Error(A(156, e.tag))
}
function jx(t, e) {
  switch (Tc(e),
  e.tag) {
  case 1:
      return Xe(e.type) && Fo(),
      t = e.flags,
      t & 65536 ? (e.flags = t & -65537 | 128,
      e) : null;
  case 3:
      return ni(),
      ee(Ge),
      ee(Fe),
      Dc(),
      t = e.flags,
      t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128,
      e) : null;
  case 5:
      return Rc(e),
      null;
  case 13:
      if (ee(re),
      t = e.memoizedState,
      t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
              throw Error(A(340));
          ei()
      }
      return t = e.flags,
      t & 65536 ? (e.flags = t & -65537 | 128,
      e) : null;
  case 19:
      return ee(re),
      null;
  case 4:
      return ni(),
      null;
  case 10:
      return Ec(e.type._context),
      null;
  case 22:
  case 23:
      return $c(),
      null;
  case 24:
      return null;
  default:
      return null
  }
}
var ro = !1
, Oe = !1
, Lx = typeof WeakSet == "function" ? WeakSet : Set
, j = null;
function jr(t, e) {
  var n = t.ref;
  if (n !== null)
      if (typeof n == "function")
          try {
              n(null)
          } catch (r) {
              ce(t, e, r)
          }
      else
          n.current = null
}
function yu(t, e, n) {
  try {
      n()
  } catch (r) {
      ce(t, e, r)
  }
}
var Xd = !1;
function Ox(t, e) {
  if (eu = Oo,
  t = Im(),
  wc(t)) {
      if ("selectionStart"in t)
          var n = {
              start: t.selectionStart,
              end: t.selectionEnd
          };
      else
          e: {
              n = (n = t.ownerDocument) && n.defaultView || window;
              var r = n.getSelection && n.getSelection();
              if (r && r.rangeCount !== 0) {
                  n = r.anchorNode;
                  var i = r.anchorOffset
                    , s = r.focusNode;
                  r = r.focusOffset;
                  try {
                      n.nodeType,
                      s.nodeType
                  } catch {
                      n = null;
                      break e
                  }
                  var o = 0
                    , a = -1
                    , l = -1
                    , u = 0
                    , c = 0
                    , f = t
                    , d = null;
                  t: for (; ; ) {
                      for (var p; f !== n || i !== 0 && f.nodeType !== 3 || (a = o + i),
                      f !== s || r !== 0 && f.nodeType !== 3 || (l = o + r),
                      f.nodeType === 3 && (o += f.nodeValue.length),
                      (p = f.firstChild) !== null; )
                          d = f,
                          f = p;
                      for (; ; ) {
                          if (f === t)
                              break t;
                          if (d === n && ++u === i && (a = o),
                          d === s && ++c === r && (l = o),
                          (p = f.nextSibling) !== null)
                              break;
                          f = d,
                          d = f.parentNode
                      }
                      f = p
                  }
                  n = a === -1 || l === -1 ? null : {
                      start: a,
                      end: l
                  }
              } else
                  n = null
          }
      n = n || {
          start: 0,
          end: 0
      }
  } else
      n = null;
  for (tu = {
      focusedElem: t,
      selectionRange: n
  },
  Oo = !1,
  j = e; j !== null; )
      if (e = j,
      t = e.child,
      (e.subtreeFlags & 1028) !== 0 && t !== null)
          t.return = e,
          j = t;
      else
          for (; j !== null; ) {
              e = j;
              try {
                  var v = e.alternate;
                  if (e.flags & 1024)
                      switch (e.tag) {
                      case 0:
                      case 11:
                      case 15:
                          break;
                      case 1:
                          if (v !== null) {
                              var h = v.memoizedProps
                                , x = v.memoizedState
                                , g = e.stateNode
                                , m = g.getSnapshotBeforeUpdate(e.elementType === e.type ? h : Nt(e.type, h), x);
                              g.__reactInternalSnapshotBeforeUpdate = m
                          }
                          break;
                      case 3:
                          var y = e.stateNode.containerInfo;
                          y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                          break;
                      case 5:
                      case 6:
                      case 4:
                      case 17:
                          break;
                      default:
                          throw Error(A(163))
                      }
              } catch (S) {
                  ce(e, e.return, S)
              }
              if (t = e.sibling,
              t !== null) {
                  t.return = e.return,
                  j = t;
                  break
              }
              j = e.return
          }
  return v = Xd,
  Xd = !1,
  v
}
function Hi(t, e, n) {
  var r = e.updateQueue;
  if (r = r !== null ? r.lastEffect : null,
  r !== null) {
      var i = r = r.next;
      do {
          if ((i.tag & t) === t) {
              var s = i.destroy;
              i.destroy = void 0,
              s !== void 0 && yu(e, n, s)
          }
          i = i.next
      } while (i !== r)
  }
}
function ka(t, e) {
  if (e = e.updateQueue,
  e = e !== null ? e.lastEffect : null,
  e !== null) {
      var n = e = e.next;
      do {
          if ((n.tag & t) === t) {
              var r = n.create;
              n.destroy = r()
          }
          n = n.next
      } while (n !== e)
  }
}
function vu(t) {
  var e = t.ref;
  if (e !== null) {
      var n = t.stateNode;
      switch (t.tag) {
      case 5:
          t = n;
          break;
      default:
          t = n
      }
      typeof e == "function" ? e(t) : e.current = t
  }
}
function L0(t) {
  var e = t.alternate;
  e !== null && (t.alternate = null,
  L0(e)),
  t.child = null,
  t.deletions = null,
  t.sibling = null,
  t.tag === 5 && (e = t.stateNode,
  e !== null && (delete e[Ft],
  delete e[fs],
  delete e[iu],
  delete e[yx],
  delete e[vx])),
  t.stateNode = null,
  t.return = null,
  t.dependencies = null,
  t.memoizedProps = null,
  t.memoizedState = null,
  t.pendingProps = null,
  t.stateNode = null,
  t.updateQueue = null
}
function O0(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function Qd(t) {
  e: for (; ; ) {
      for (; t.sibling === null; ) {
          if (t.return === null || O0(t.return))
              return null;
          t = t.return
      }
      for (t.sibling.return = t.return,
      t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.flags & 2 || t.child === null || t.tag === 4)
              continue e;
          t.child.return = t,
          t = t.child
      }
      if (!(t.flags & 2))
          return t.stateNode
  }
}
function xu(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
      t = t.stateNode,
      e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode,
      e.insertBefore(t, n)) : (e = n,
      e.appendChild(t)),
      n = n._reactRootContainer,
      n != null || e.onclick !== null || (e.onclick = Io));
  else if (r !== 4 && (t = t.child,
  t !== null))
      for (xu(t, e, n),
      t = t.sibling; t !== null; )
          xu(t, e, n),
          t = t.sibling
}
function _u(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
      t = t.stateNode,
      e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && (t = t.child,
  t !== null))
      for (_u(t, e, n),
      t = t.sibling; t !== null; )
          _u(t, e, n),
          t = t.sibling
}
var Ce = null
, At = !1;
function dn(t, e, n) {
  for (n = n.child; n !== null; )
      b0(t, e, n),
      n = n.sibling
}
function b0(t, e, n) {
  if (Ut && typeof Ut.onCommitFiberUnmount == "function")
      try {
          Ut.onCommitFiberUnmount(ga, n)
      } catch {}
  switch (n.tag) {
  case 5:
      Oe || jr(n, e);
  case 6:
      var r = Ce
        , i = At;
      Ce = null,
      dn(t, e, n),
      Ce = r,
      At = i,
      Ce !== null && (At ? (t = Ce,
      n = n.stateNode,
      t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : Ce.removeChild(n.stateNode));
      break;
  case 18:
      Ce !== null && (At ? (t = Ce,
      n = n.stateNode,
      t.nodeType === 8 ? tl(t.parentNode, n) : t.nodeType === 1 && tl(t, n),
      os(t)) : tl(Ce, n.stateNode));
      break;
  case 4:
      r = Ce,
      i = At,
      Ce = n.stateNode.containerInfo,
      At = !0,
      dn(t, e, n),
      Ce = r,
      At = i;
      break;
  case 0:
  case 11:
  case 14:
  case 15:
      if (!Oe && (r = n.updateQueue,
      r !== null && (r = r.lastEffect,
      r !== null))) {
          i = r = r.next;
          do {
              var s = i
                , o = s.destroy;
              s = s.tag,
              o !== void 0 && (s & 2 || s & 4) && yu(n, e, o),
              i = i.next
          } while (i !== r)
      }
      dn(t, e, n);
      break;
  case 1:
      if (!Oe && (jr(n, e),
      r = n.stateNode,
      typeof r.componentWillUnmount == "function"))
          try {
              r.props = n.memoizedProps,
              r.state = n.memoizedState,
              r.componentWillUnmount()
          } catch (a) {
              ce(n, e, a)
          }
      dn(t, e, n);
      break;
  case 21:
      dn(t, e, n);
      break;
  case 22:
      n.mode & 1 ? (Oe = (r = Oe) || n.memoizedState !== null,
      dn(t, e, n),
      Oe = r) : dn(t, e, n);
      break;
  default:
      dn(t, e, n)
  }
}
function Zd(t) {
  var e = t.updateQueue;
  if (e !== null) {
      t.updateQueue = null;
      var n = t.stateNode;
      n === null && (n = t.stateNode = new Lx),
      e.forEach(function(r) {
          var i = Wx.bind(null, t, r);
          n.has(r) || (n.add(r),
          r.then(i, i))
      })
  }
}
function Et(t, e) {
  var n = e.deletions;
  if (n !== null)
      for (var r = 0; r < n.length; r++) {
          var i = n[r];
          try {
              var s = t
                , o = e
                , a = o;
              e: for (; a !== null; ) {
                  switch (a.tag) {
                  case 5:
                      Ce = a.stateNode,
                      At = !1;
                      break e;
                  case 3:
                      Ce = a.stateNode.containerInfo,
                      At = !0;
                      break e;
                  case 4:
                      Ce = a.stateNode.containerInfo,
                      At = !0;
                      break e
                  }
                  a = a.return
              }
              if (Ce === null)
                  throw Error(A(160));
              b0(s, o, i),
              Ce = null,
              At = !1;
              var l = i.alternate;
              l !== null && (l.return = null),
              i.return = null
          } catch (u) {
              ce(i, e, u)
          }
      }
  if (e.subtreeFlags & 12854)
      for (e = e.child; e !== null; )
          V0(e, t),
          e = e.sibling
}
function V0(t, e) {
  var n = t.alternate
    , r = t.flags;
  switch (t.tag) {
  case 0:
  case 11:
  case 14:
  case 15:
      if (Et(e, t),
      bt(t),
      r & 4) {
          try {
              Hi(3, t, t.return),
              ka(3, t)
          } catch (h) {
              ce(t, t.return, h)
          }
          try {
              Hi(5, t, t.return)
          } catch (h) {
              ce(t, t.return, h)
          }
      }
      break;
  case 1:
      Et(e, t),
      bt(t),
      r & 512 && n !== null && jr(n, n.return);
      break;
  case 5:
      if (Et(e, t),
      bt(t),
      r & 512 && n !== null && jr(n, n.return),
      t.flags & 32) {
          var i = t.stateNode;
          try {
              ns(i, "")
          } catch (h) {
              ce(t, t.return, h)
          }
      }
      if (r & 4 && (i = t.stateNode,
      i != null)) {
          var s = t.memoizedProps
            , o = n !== null ? n.memoizedProps : s
            , a = t.type
            , l = t.updateQueue;
          if (t.updateQueue = null,
          l !== null)
              try {
                  a === "input" && s.type === "radio" && s.name != null && sm(i, s),
                  Wl(a, o);
                  var u = Wl(a, s);
                  for (o = 0; o < l.length; o += 2) {
                      var c = l[o]
                        , f = l[o + 1];
                      c === "style" ? cm(i, f) : c === "dangerouslySetInnerHTML" ? lm(i, f) : c === "children" ? ns(i, f) : lc(i, c, f, u)
                  }
                  switch (a) {
                  case "input":
                      Fl(i, s);
                      break;
                  case "textarea":
                      om(i, s);
                      break;
                  case "select":
                      var d = i._wrapperState.wasMultiple;
                      i._wrapperState.wasMultiple = !!s.multiple;
                      var p = s.value;
                      p != null ? $r(i, !!s.multiple, p, !1) : d !== !!s.multiple && (s.defaultValue != null ? $r(i, !!s.multiple, s.defaultValue, !0) : $r(i, !!s.multiple, s.multiple ? [] : "", !1))
                  }
                  i[fs] = s
              } catch (h) {
                  ce(t, t.return, h)
              }
      }
      break;
  case 6:
      if (Et(e, t),
      bt(t),
      r & 4) {
          if (t.stateNode === null)
              throw Error(A(162));
          i = t.stateNode,
          s = t.memoizedProps;
          try {
              i.nodeValue = s
          } catch (h) {
              ce(t, t.return, h)
          }
      }
      break;
  case 3:
      if (Et(e, t),
      bt(t),
      r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
              os(e.containerInfo)
          } catch (h) {
              ce(t, t.return, h)
          }
      break;
  case 4:
      Et(e, t),
      bt(t);
      break;
  case 13:
      Et(e, t),
      bt(t),
      i = t.child,
      i.flags & 8192 && (s = i.memoizedState !== null,
      i.stateNode.isHidden = s,
      !s || i.alternate !== null && i.alternate.memoizedState !== null || (Bc = pe())),
      r & 4 && Zd(t);
      break;
  case 22:
      if (c = n !== null && n.memoizedState !== null,
      t.mode & 1 ? (Oe = (u = Oe) || c,
      Et(e, t),
      Oe = u) : Et(e, t),
      bt(t),
      r & 8192) {
          if (u = t.memoizedState !== null,
          (t.stateNode.isHidden = u) && !c && t.mode & 1)
              for (j = t,
              c = t.child; c !== null; ) {
                  for (f = j = c; j !== null; ) {
                      switch (d = j,
                      p = d.child,
                      d.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                          Hi(4, d, d.return);
                          break;
                      case 1:
                          jr(d, d.return);
                          var v = d.stateNode;
                          if (typeof v.componentWillUnmount == "function") {
                              r = d,
                              n = d.return;
                              try {
                                  e = r,
                                  v.props = e.memoizedProps,
                                  v.state = e.memoizedState,
                                  v.componentWillUnmount()
                              } catch (h) {
                                  ce(r, n, h)
                              }
                          }
                          break;
                      case 5:
                          jr(d, d.return);
                          break;
                      case 22:
                          if (d.memoizedState !== null) {
                              Jd(f);
                              continue
                          }
                      }
                      p !== null ? (p.return = d,
                      j = p) : Jd(f)
                  }
                  c = c.sibling
              }
          e: for (c = null,
          f = t; ; ) {
              if (f.tag === 5) {
                  if (c === null) {
                      c = f;
                      try {
                          i = f.stateNode,
                          u ? (s = i.style,
                          typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = f.stateNode,
                          l = f.memoizedProps.style,
                          o = l != null && l.hasOwnProperty("display") ? l.display : null,
                          a.style.display = um("display", o))
                      } catch (h) {
                          ce(t, t.return, h)
                      }
                  }
              } else if (f.tag === 6) {
                  if (c === null)
                      try {
                          f.stateNode.nodeValue = u ? "" : f.memoizedProps
                      } catch (h) {
                          ce(t, t.return, h)
                      }
              } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === t) && f.child !== null) {
                  f.child.return = f,
                  f = f.child;
                  continue
              }
              if (f === t)
                  break e;
              for (; f.sibling === null; ) {
                  if (f.return === null || f.return === t)
                      break e;
                  c === f && (c = null),
                  f = f.return
              }
              c === f && (c = null),
              f.sibling.return = f.return,
              f = f.sibling
          }
      }
      break;
  case 19:
      Et(e, t),
      bt(t),
      r & 4 && Zd(t);
      break;
  case 21:
      break;
  default:
      Et(e, t),
      bt(t)
  }
}
function bt(t) {
  var e = t.flags;
  if (e & 2) {
      try {
          e: {
              for (var n = t.return; n !== null; ) {
                  if (O0(n)) {
                      var r = n;
                      break e
                  }
                  n = n.return
              }
              throw Error(A(160))
          }
          switch (r.tag) {
          case 5:
              var i = r.stateNode;
              r.flags & 32 && (ns(i, ""),
              r.flags &= -33);
              var s = Qd(t);
              _u(t, s, i);
              break;
          case 3:
          case 4:
              var o = r.stateNode.containerInfo
                , a = Qd(t);
              xu(t, a, o);
              break;
          default:
              throw Error(A(161))
          }
      } catch (l) {
          ce(t, t.return, l)
      }
      t.flags &= -3
  }
  e & 4096 && (t.flags &= -4097)
}
function bx(t, e, n) {
  j = t,
  I0(t)
}
function I0(t, e, n) {
  for (var r = (t.mode & 1) !== 0; j !== null; ) {
      var i = j
        , s = i.child;
      if (i.tag === 22 && r) {
          var o = i.memoizedState !== null || ro;
          if (!o) {
              var a = i.alternate
                , l = a !== null && a.memoizedState !== null || Oe;
              a = ro;
              var u = Oe;
              if (ro = o,
              (Oe = l) && !u)
                  for (j = i; j !== null; )
                      o = j,
                      l = o.child,
                      o.tag === 22 && o.memoizedState !== null ? eh(i) : l !== null ? (l.return = o,
                      j = l) : eh(i);
              for (; s !== null; )
                  j = s,
                  I0(s),
                  s = s.sibling;
              j = i,
              ro = a,
              Oe = u
          }
          qd(t)
      } else
          i.subtreeFlags & 8772 && s !== null ? (s.return = i,
          j = s) : qd(t)
  }
}
function qd(t) {
  for (; j !== null; ) {
      var e = j;
      if (e.flags & 8772) {
          var n = e.alternate;
          try {
              if (e.flags & 8772)
                  switch (e.tag) {
                  case 0:
                  case 11:
                  case 15:
                      Oe || ka(5, e);
                      break;
                  case 1:
                      var r = e.stateNode;
                      if (e.flags & 4 && !Oe)
                          if (n === null)
                              r.componentDidMount();
                          else {
                              var i = e.elementType === e.type ? n.memoizedProps : Nt(e.type, n.memoizedProps);
                              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                          }
                      var s = e.updateQueue;
                      s !== null && bd(e, s, r);
                      break;
                  case 3:
                      var o = e.updateQueue;
                      if (o !== null) {
                          if (n = null,
                          e.child !== null)
                              switch (e.child.tag) {
                              case 5:
                                  n = e.child.stateNode;
                                  break;
                              case 1:
                                  n = e.child.stateNode
                              }
                          bd(e, o, n)
                      }
                      break;
                  case 5:
                      var a = e.stateNode;
                      if (n === null && e.flags & 4) {
                          n = a;
                          var l = e.memoizedProps;
                          switch (e.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                              l.autoFocus && n.focus();
                              break;
                          case "img":
                              l.src && (n.src = l.src)
                          }
                      }
                      break;
                  case 6:
                      break;
                  case 4:
                      break;
                  case 12:
                      break;
                  case 13:
                      if (e.memoizedState === null) {
                          var u = e.alternate;
                          if (u !== null) {
                              var c = u.memoizedState;
                              if (c !== null) {
                                  var f = c.dehydrated;
                                  f !== null && os(f)
                              }
                          }
                      }
                      break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                      break;
                  default:
                      throw Error(A(163))
                  }
              Oe || e.flags & 512 && vu(e)
          } catch (d) {
              ce(e, e.return, d)
          }
      }
      if (e === t) {
          j = null;
          break
      }
      if (n = e.sibling,
      n !== null) {
          n.return = e.return,
          j = n;
          break
      }
      j = e.return
  }
}
function Jd(t) {
  for (; j !== null; ) {
      var e = j;
      if (e === t) {
          j = null;
          break
      }
      var n = e.sibling;
      if (n !== null) {
          n.return = e.return,
          j = n;
          break
      }
      j = e.return
  }
}
function eh(t) {
  for (; j !== null; ) {
      var e = j;
      try {
          switch (e.tag) {
          case 0:
          case 11:
          case 15:
              var n = e.return;
              try {
                  ka(4, e)
              } catch (l) {
                  ce(e, n, l)
              }
              break;
          case 1:
              var r = e.stateNode;
              if (typeof r.componentDidMount == "function") {
                  var i = e.return;
                  try {
                      r.componentDidMount()
                  } catch (l) {
                      ce(e, i, l)
                  }
              }
              var s = e.return;
              try {
                  vu(e)
              } catch (l) {
                  ce(e, s, l)
              }
              break;
          case 5:
              var o = e.return;
              try {
                  vu(e)
              } catch (l) {
                  ce(e, o, l)
              }
          }
      } catch (l) {
          ce(e, e.return, l)
      }
      if (e === t) {
          j = null;
          break
      }
      var a = e.sibling;
      if (a !== null) {
          a.return = e.return,
          j = a;
          break
      }
      j = e.return
  }
}
var Vx = Math.ceil
, Xo = fn.ReactCurrentDispatcher
, Fc = fn.ReactCurrentOwner
, kt = fn.ReactCurrentBatchConfig
, H = 0
, ke = null
, xe = null
, Me = 0
, nt = 0
, Lr = zn(0)
, Se = 0
, ys = null
, dr = 0
, Pa = 0
, zc = 0
, Ki = null
, Ke = null
, Bc = 0
, ii = 1 / 0
, Gt = null
, Qo = !1
, wu = null
, Mn = null
, io = !1
, xn = null
, Zo = 0
, Yi = 0
, Su = null
, wo = -1
, So = 0;
function $e() {
  return H & 6 ? pe() : wo !== -1 ? wo : wo = pe()
}
function Nn(t) {
  return t.mode & 1 ? H & 2 && Me !== 0 ? Me & -Me : _x.transition !== null ? (So === 0 && (So = Sm()),
  So) : (t = Y,
  t !== 0 || (t = window.event,
  t = t === void 0 ? 16 : Nm(t.type)),
  t) : 1
}
function jt(t, e, n, r) {
  if (50 < Yi)
      throw Yi = 0,
      Su = null,
      Error(A(185));
  js(t, n, r),
  (!(H & 2) || t !== ke) && (t === ke && (!(H & 2) && (Pa |= n),
  Se === 4 && yn(t, Me)),
  Qe(t, r),
  n === 1 && H === 0 && !(e.mode & 1) && (ii = pe() + 500,
  wa && Bn()))
}
function Qe(t, e) {
  var n = t.callbackNode;
  _1(t, e);
  var r = Lo(t, t === ke ? Me : 0);
  if (r === 0)
      n !== null && ud(n),
      t.callbackNode = null,
      t.callbackPriority = 0;
  else if (e = r & -r,
  t.callbackPriority !== e) {
      if (n != null && ud(n),
      e === 1)
          t.tag === 0 ? xx(th.bind(null, t)) : Gm(th.bind(null, t)),
          mx(function() {
              !(H & 6) && Bn()
          }),
          n = null;
      else {
          switch (Tm(r)) {
          case 1:
              n = hc;
              break;
          case 4:
              n = _m;
              break;
          case 16:
              n = jo;
              break;
          case 536870912:
              n = wm;
              break;
          default:
              n = jo
          }
          n = K0(n, F0.bind(null, t))
      }
      t.callbackPriority = e,
      t.callbackNode = n
  }
}
function F0(t, e) {
  if (wo = -1,
  So = 0,
  H & 6)
      throw Error(A(327));
  var n = t.callbackNode;
  if (Gr() && t.callbackNode !== n)
      return null;
  var r = Lo(t, t === ke ? Me : 0);
  if (r === 0)
      return null;
  if (r & 30 || r & t.expiredLanes || e)
      e = qo(t, r);
  else {
      e = r;
      var i = H;
      H |= 2;
      var s = B0();
      (ke !== t || Me !== e) && (Gt = null,
      ii = pe() + 500,
      nr(t, e));
      do
          try {
              zx();
              break
          } catch (a) {
              z0(t, a)
          }
      while (!0);
      Cc(),
      Xo.current = s,
      H = i,
      xe !== null ? e = 0 : (ke = null,
      Me = 0,
      e = Se)
  }
  if (e !== 0) {
      if (e === 2 && (i = Xl(t),
      i !== 0 && (r = i,
      e = Tu(t, i))),
      e === 1)
          throw n = ys,
          nr(t, 0),
          yn(t, r),
          Qe(t, pe()),
          n;
      if (e === 6)
          yn(t, r);
      else {
          if (i = t.current.alternate,
          !(r & 30) && !Ix(i) && (e = qo(t, r),
          e === 2 && (s = Xl(t),
          s !== 0 && (r = s,
          e = Tu(t, s))),
          e === 1))
              throw n = ys,
              nr(t, 0),
              yn(t, r),
              Qe(t, pe()),
              n;
          switch (t.finishedWork = i,
          t.finishedLanes = r,
          e) {
          case 0:
          case 1:
              throw Error(A(345));
          case 2:
              Gn(t, Ke, Gt);
              break;
          case 3:
              if (yn(t, r),
              (r & 130023424) === r && (e = Bc + 500 - pe(),
              10 < e)) {
                  if (Lo(t, 0) !== 0)
                      break;
                  if (i = t.suspendedLanes,
                  (i & r) !== r) {
                      $e(),
                      t.pingedLanes |= t.suspendedLanes & i;
                      break
                  }
                  t.timeoutHandle = ru(Gn.bind(null, t, Ke, Gt), e);
                  break
              }
              Gn(t, Ke, Gt);
              break;
          case 4:
              if (yn(t, r),
              (r & 4194240) === r)
                  break;
              for (e = t.eventTimes,
              i = -1; 0 < r; ) {
                  var o = 31 - Dt(r);
                  s = 1 << o,
                  o = e[o],
                  o > i && (i = o),
                  r &= ~s
              }
              if (r = i,
              r = pe() - r,
              r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Vx(r / 1960)) - r,
              10 < r) {
                  t.timeoutHandle = ru(Gn.bind(null, t, Ke, Gt), r);
                  break
              }
              Gn(t, Ke, Gt);
              break;
          case 5:
              Gn(t, Ke, Gt);
              break;
          default:
              throw Error(A(329))
          }
      }
  }
  return Qe(t, pe()),
  t.callbackNode === n ? F0.bind(null, t) : null
}
function Tu(t, e) {
  var n = Ki;
  return t.current.memoizedState.isDehydrated && (nr(t, e).flags |= 256),
  t = qo(t, e),
  t !== 2 && (e = Ke,
  Ke = n,
  e !== null && ku(e)),
  t
}
function ku(t) {
  Ke === null ? Ke = t : Ke.push.apply(Ke, t)
}
function Ix(t) {
  for (var e = t; ; ) {
      if (e.flags & 16384) {
          var n = e.updateQueue;
          if (n !== null && (n = n.stores,
          n !== null))
              for (var r = 0; r < n.length; r++) {
                  var i = n[r]
                    , s = i.getSnapshot;
                  i = i.value;
                  try {
                      if (!Lt(s(), i))
                          return !1
                  } catch {
                      return !1
                  }
              }
      }
      if (n = e.child,
      e.subtreeFlags & 16384 && n !== null)
          n.return = e,
          e = n;
      else {
          if (e === t)
              break;
          for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                  return !0;
              e = e.return
          }
          e.sibling.return = e.return,
          e = e.sibling
      }
  }
  return !0
}
function yn(t, e) {
  for (e &= ~zc,
  e &= ~Pa,
  t.suspendedLanes |= e,
  t.pingedLanes &= ~e,
  t = t.expirationTimes; 0 < e; ) {
      var n = 31 - Dt(e)
        , r = 1 << n;
      t[n] = -1,
      e &= ~r
  }
}
function th(t) {
  if (H & 6)
      throw Error(A(327));
  Gr();
  var e = Lo(t, 0);
  if (!(e & 1))
      return Qe(t, pe()),
      null;
  var n = qo(t, e);
  if (t.tag !== 0 && n === 2) {
      var r = Xl(t);
      r !== 0 && (e = r,
      n = Tu(t, r))
  }
  if (n === 1)
      throw n = ys,
      nr(t, 0),
      yn(t, e),
      Qe(t, pe()),
      n;
  if (n === 6)
      throw Error(A(345));
  return t.finishedWork = t.current.alternate,
  t.finishedLanes = e,
  Gn(t, Ke, Gt),
  Qe(t, pe()),
  null
}
function Uc(t, e) {
  var n = H;
  H |= 1;
  try {
      return t(e)
  } finally {
      H = n,
      H === 0 && (ii = pe() + 500,
      wa && Bn())
  }
}
function hr(t) {
  xn !== null && xn.tag === 0 && !(H & 6) && Gr();
  var e = H;
  H |= 1;
  var n = kt.transition
    , r = Y;
  try {
      if (kt.transition = null,
      Y = 1,
      t)
          return t()
  } finally {
      Y = r,
      kt.transition = n,
      H = e,
      !(H & 6) && Bn()
  }
}
function $c() {
  nt = Lr.current,
  ee(Lr)
}
function nr(t, e) {
  t.finishedWork = null,
  t.finishedLanes = 0;
  var n = t.timeoutHandle;
  if (n !== -1 && (t.timeoutHandle = -1,
  px(n)),
  xe !== null)
      for (n = xe.return; n !== null; ) {
          var r = n;
          switch (Tc(r),
          r.tag) {
          case 1:
              r = r.type.childContextTypes,
              r != null && Fo();
              break;
          case 3:
              ni(),
              ee(Ge),
              ee(Fe),
              Dc();
              break;
          case 5:
              Rc(r);
              break;
          case 4:
              ni();
              break;
          case 13:
              ee(re);
              break;
          case 19:
              ee(re);
              break;
          case 10:
              Ec(r.type._context);
              break;
          case 22:
          case 23:
              $c()
          }
          n = n.return
      }
  if (ke = t,
  xe = t = An(t.current, null),
  Me = nt = e,
  Se = 0,
  ys = null,
  zc = Pa = dr = 0,
  Ke = Ki = null,
  qn !== null) {
      for (e = 0; e < qn.length; e++)
          if (n = qn[e],
          r = n.interleaved,
          r !== null) {
              n.interleaved = null;
              var i = r.next
                , s = n.pending;
              if (s !== null) {
                  var o = s.next;
                  s.next = i,
                  r.next = o
              }
              n.pending = r
          }
      qn = null
  }
  return t
}
function z0(t, e) {
  do {
      var n = xe;
      try {
          if (Cc(),
          vo.current = Go,
          Yo) {
              for (var r = ae.memoizedState; r !== null; ) {
                  var i = r.queue;
                  i !== null && (i.pending = null),
                  r = r.next
              }
              Yo = !1
          }
          if (fr = 0,
          Te = we = ae = null,
          Wi = !1,
          ps = 0,
          Fc.current = null,
          n === null || n.return === null) {
              Se = 1,
              ys = e,
              xe = null;
              break
          }
          e: {
              var s = t
                , o = n.return
                , a = n
                , l = e;
              if (e = Me,
              a.flags |= 32768,
              l !== null && typeof l == "object" && typeof l.then == "function") {
                  var u = l
                    , c = a
                    , f = c.tag;
                  if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                      var d = c.alternate;
                      d ? (c.updateQueue = d.updateQueue,
                      c.memoizedState = d.memoizedState,
                      c.lanes = d.lanes) : (c.updateQueue = null,
                      c.memoizedState = null)
                  }
                  var p = Ud(o);
                  if (p !== null) {
                      p.flags &= -257,
                      $d(p, o, a, s, e),
                      p.mode & 1 && Bd(s, u, e),
                      e = p,
                      l = u;
                      var v = e.updateQueue;
                      if (v === null) {
                          var h = new Set;
                          h.add(l),
                          e.updateQueue = h
                      } else
                          v.add(l);
                      break e
                  } else {
                      if (!(e & 1)) {
                          Bd(s, u, e),
                          Wc();
                          break e
                      }
                      l = Error(A(426))
                  }
              } else if (te && a.mode & 1) {
                  var x = Ud(o);
                  if (x !== null) {
                      !(x.flags & 65536) && (x.flags |= 256),
                      $d(x, o, a, s, e),
                      kc(ri(l, a));
                      break e
                  }
              }
              s = l = ri(l, a),
              Se !== 4 && (Se = 2),
              Ki === null ? Ki = [s] : Ki.push(s),
              s = o;
              do {
                  switch (s.tag) {
                  case 3:
                      s.flags |= 65536,
                      e &= -e,
                      s.lanes |= e;
                      var g = T0(s, l, e);
                      Od(s, g);
                      break e;
                  case 1:
                      a = l;
                      var m = s.type
                        , y = s.stateNode;
                      if (!(s.flags & 128) && (typeof m.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Mn === null || !Mn.has(y)))) {
                          s.flags |= 65536,
                          e &= -e,
                          s.lanes |= e;
                          var S = k0(s, a, e);
                          Od(s, S);
                          break e
                      }
                  }
                  s = s.return
              } while (s !== null)
          }
          $0(n)
      } catch (w) {
          e = w,
          xe === n && n !== null && (xe = n = n.return);
          continue
      }
      break
  } while (!0)
}
function B0() {
  var t = Xo.current;
  return Xo.current = Go,
  t === null ? Go : t
}
function Wc() {
  (Se === 0 || Se === 3 || Se === 2) && (Se = 4),
  ke === null || !(dr & 268435455) && !(Pa & 268435455) || yn(ke, Me)
}
function qo(t, e) {
  var n = H;
  H |= 2;
  var r = B0();
  (ke !== t || Me !== e) && (Gt = null,
  nr(t, e));
  do
      try {
          Fx();
          break
      } catch (i) {
          z0(t, i)
      }
  while (!0);
  if (Cc(),
  H = n,
  Xo.current = r,
  xe !== null)
      throw Error(A(261));
  return ke = null,
  Me = 0,
  Se
}
function Fx() {
  for (; xe !== null; )
      U0(xe)
}
function zx() {
  for (; xe !== null && !f1(); )
      U0(xe)
}
function U0(t) {
  var e = H0(t.alternate, t, nt);
  t.memoizedProps = t.pendingProps,
  e === null ? $0(t) : xe = e,
  Fc.current = null
}
function $0(t) {
  var e = t;
  do {
      var n = e.alternate;
      if (t = e.return,
      e.flags & 32768) {
          if (n = jx(n, e),
          n !== null) {
              n.flags &= 32767,
              xe = n;
              return
          }
          if (t !== null)
              t.flags |= 32768,
              t.subtreeFlags = 0,
              t.deletions = null;
          else {
              Se = 6,
              xe = null;
              return
          }
      } else if (n = Dx(n, e, nt),
      n !== null) {
          xe = n;
          return
      }
      if (e = e.sibling,
      e !== null) {
          xe = e;
          return
      }
      xe = e = t
  } while (e !== null);
  Se === 0 && (Se = 5)
}
function Gn(t, e, n) {
  var r = Y
    , i = kt.transition;
  try {
      kt.transition = null,
      Y = 1,
      Bx(t, e, n, r)
  } finally {
      kt.transition = i,
      Y = r
  }
  return null
}
function Bx(t, e, n, r) {
  do
      Gr();
  while (xn !== null);
  if (H & 6)
      throw Error(A(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null)
      return null;
  if (t.finishedWork = null,
  t.finishedLanes = 0,
  n === t.current)
      throw Error(A(177));
  t.callbackNode = null,
  t.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (w1(t, s),
  t === ke && (xe = ke = null,
  Me = 0),
  !(n.subtreeFlags & 2064) && !(n.flags & 2064) || io || (io = !0,
  K0(jo, function() {
      return Gr(),
      null
  })),
  s = (n.flags & 15990) !== 0,
  n.subtreeFlags & 15990 || s) {
      s = kt.transition,
      kt.transition = null;
      var o = Y;
      Y = 1;
      var a = H;
      H |= 4,
      Fc.current = null,
      Ox(t, n),
      V0(n, t),
      ax(tu),
      Oo = !!eu,
      tu = eu = null,
      t.current = n,
      bx(n),
      d1(),
      H = a,
      Y = o,
      kt.transition = s
  } else
      t.current = n;
  if (io && (io = !1,
  xn = t,
  Zo = i),
  s = t.pendingLanes,
  s === 0 && (Mn = null),
  m1(n.stateNode),
  Qe(t, pe()),
  e !== null)
      for (r = t.onRecoverableError,
      n = 0; n < e.length; n++)
          i = e[n],
          r(i.value, {
              componentStack: i.stack,
              digest: i.digest
          });
  if (Qo)
      throw Qo = !1,
      t = wu,
      wu = null,
      t;
  return Zo & 1 && t.tag !== 0 && Gr(),
  s = t.pendingLanes,
  s & 1 ? t === Su ? Yi++ : (Yi = 0,
  Su = t) : Yi = 0,
  Bn(),
  null
}
function Gr() {
  if (xn !== null) {
      var t = Tm(Zo)
        , e = kt.transition
        , n = Y;
      try {
          if (kt.transition = null,
          Y = 16 > t ? 16 : t,
          xn === null)
              var r = !1;
          else {
              if (t = xn,
              xn = null,
              Zo = 0,
              H & 6)
                  throw Error(A(331));
              var i = H;
              for (H |= 4,
              j = t.current; j !== null; ) {
                  var s = j
                    , o = s.child;
                  if (j.flags & 16) {
                      var a = s.deletions;
                      if (a !== null) {
                          for (var l = 0; l < a.length; l++) {
                              var u = a[l];
                              for (j = u; j !== null; ) {
                                  var c = j;
                                  switch (c.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                      Hi(8, c, s)
                                  }
                                  var f = c.child;
                                  if (f !== null)
                                      f.return = c,
                                      j = f;
                                  else
                                      for (; j !== null; ) {
                                          c = j;
                                          var d = c.sibling
                                            , p = c.return;
                                          if (L0(c),
                                          c === u) {
                                              j = null;
                                              break
                                          }
                                          if (d !== null) {
                                              d.return = p,
                                              j = d;
                                              break
                                          }
                                          j = p
                                      }
                              }
                          }
                          var v = s.alternate;
                          if (v !== null) {
                              var h = v.child;
                              if (h !== null) {
                                  v.child = null;
                                  do {
                                      var x = h.sibling;
                                      h.sibling = null,
                                      h = x
                                  } while (h !== null)
                              }
                          }
                          j = s
                      }
                  }
                  if (s.subtreeFlags & 2064 && o !== null)
                      o.return = s,
                      j = o;
                  else
                      e: for (; j !== null; ) {
                          if (s = j,
                          s.flags & 2048)
                              switch (s.tag) {
                              case 0:
                              case 11:
                              case 15:
                                  Hi(9, s, s.return)
                              }
                          var g = s.sibling;
                          if (g !== null) {
                              g.return = s.return,
                              j = g;
                              break e
                          }
                          j = s.return
                      }
              }
              var m = t.current;
              for (j = m; j !== null; ) {
                  o = j;
                  var y = o.child;
                  if (o.subtreeFlags & 2064 && y !== null)
                      y.return = o,
                      j = y;
                  else
                      e: for (o = m; j !== null; ) {
                          if (a = j,
                          a.flags & 2048)
                              try {
                                  switch (a.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                      ka(9, a)
                                  }
                              } catch (w) {
                                  ce(a, a.return, w)
                              }
                          if (a === o) {
                              j = null;
                              break e
                          }
                          var S = a.sibling;
                          if (S !== null) {
                              S.return = a.return,
                              j = S;
                              break e
                          }
                          j = a.return
                      }
              }
              if (H = i,
              Bn(),
              Ut && typeof Ut.onPostCommitFiberRoot == "function")
                  try {
                      Ut.onPostCommitFiberRoot(ga, t)
                  } catch {}
              r = !0
          }
          return r
      } finally {
          Y = n,
          kt.transition = e
      }
  }
  return !1
}
function nh(t, e, n) {
  e = ri(n, e),
  e = T0(t, e, 1),
  t = En(t, e, 1),
  e = $e(),
  t !== null && (js(t, 1, e),
  Qe(t, e))
}
function ce(t, e, n) {
  if (t.tag === 3)
      nh(t, t, n);
  else
      for (; e !== null; ) {
          if (e.tag === 3) {
              nh(e, t, n);
              break
          } else if (e.tag === 1) {
              var r = e.stateNode;
              if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Mn === null || !Mn.has(r))) {
                  t = ri(n, t),
                  t = k0(e, t, 1),
                  e = En(e, t, 1),
                  t = $e(),
                  e !== null && (js(e, 1, t),
                  Qe(e, t));
                  break
              }
          }
          e = e.return
      }
}
function Ux(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e),
  e = $e(),
  t.pingedLanes |= t.suspendedLanes & n,
  ke === t && (Me & n) === n && (Se === 4 || Se === 3 && (Me & 130023424) === Me && 500 > pe() - Bc ? nr(t, 0) : zc |= n),
  Qe(t, e)
}
function W0(t, e) {
  e === 0 && (t.mode & 1 ? (e = Gs,
  Gs <<= 1,
  !(Gs & 130023424) && (Gs = 4194304)) : e = 1);
  var n = $e();
  t = on(t, e),
  t !== null && (js(t, e, n),
  Qe(t, n))
}
function $x(t) {
  var e = t.memoizedState
    , n = 0;
  e !== null && (n = e.retryLane),
  W0(t, n)
}
function Wx(t, e) {
  var n = 0;
  switch (t.tag) {
  case 13:
      var r = t.stateNode
        , i = t.memoizedState;
      i !== null && (n = i.retryLane);
      break;
  case 19:
      r = t.stateNode;
      break;
  default:
      throw Error(A(314))
  }
  r !== null && r.delete(e),
  W0(t, n)
}
var H0;
H0 = function(t, e, n) {
  if (t !== null)
      if (t.memoizedProps !== e.pendingProps || Ge.current)
          Ye = !0;
      else {
          if (!(t.lanes & n) && !(e.flags & 128))
              return Ye = !1,
              Rx(t, e, n);
          Ye = !!(t.flags & 131072)
      }
  else
      Ye = !1,
      te && e.flags & 1048576 && Xm(e, Uo, e.index);
  switch (e.lanes = 0,
  e.tag) {
  case 2:
      var r = e.type;
      _o(t, e),
      t = e.pendingProps;
      var i = Jr(e, Fe.current);
      Yr(e, n),
      i = Lc(null, e, r, t, i, n);
      var s = Oc();
      return e.flags |= 1,
      typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (e.tag = 1,
      e.memoizedState = null,
      e.updateQueue = null,
      Xe(r) ? (s = !0,
      zo(e)) : s = !1,
      e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
      Nc(e),
      i.updater = Ta,
      e.stateNode = i,
      i._reactInternals = e,
      cu(e, r, t, n),
      e = hu(null, e, r, !0, s, n)) : (e.tag = 0,
      te && s && Sc(e),
      ze(null, e, i, n),
      e = e.child),
      e;
  case 16:
      r = e.elementType;
      e: {
          switch (_o(t, e),
          t = e.pendingProps,
          i = r._init,
          r = i(r._payload),
          e.type = r,
          i = e.tag = Kx(r),
          t = Nt(r, t),
          i) {
          case 0:
              e = du(null, e, r, t, n);
              break e;
          case 1:
              e = Kd(null, e, r, t, n);
              break e;
          case 11:
              e = Wd(null, e, r, t, n);
              break e;
          case 14:
              e = Hd(null, e, r, Nt(r.type, t), n);
              break e
          }
          throw Error(A(306, r, ""))
      }
      return e;
  case 0:
      return r = e.type,
      i = e.pendingProps,
      i = e.elementType === r ? i : Nt(r, i),
      du(t, e, r, i, n);
  case 1:
      return r = e.type,
      i = e.pendingProps,
      i = e.elementType === r ? i : Nt(r, i),
      Kd(t, e, r, i, n);
  case 3:
      e: {
          if (M0(e),
          t === null)
              throw Error(A(387));
          r = e.pendingProps,
          s = e.memoizedState,
          i = s.element,
          t0(t, e),
          Ho(e, r, null, n);
          var o = e.memoizedState;
          if (r = o.element,
          s.isDehydrated)
              if (s = {
                  element: r,
                  isDehydrated: !1,
                  cache: o.cache,
                  pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                  transitions: o.transitions
              },
              e.updateQueue.baseState = s,
              e.memoizedState = s,
              e.flags & 256) {
                  i = ri(Error(A(423)), e),
                  e = Yd(t, e, r, n, i);
                  break e
              } else if (r !== i) {
                  i = ri(Error(A(424)), e),
                  e = Yd(t, e, r, n, i);
                  break e
              } else
                  for (st = Cn(e.stateNode.containerInfo.firstChild),
                  at = e,
                  te = !0,
                  Rt = null,
                  n = Jm(e, null, r, n),
                  e.child = n; n; )
                      n.flags = n.flags & -3 | 4096,
                      n = n.sibling;
          else {
              if (ei(),
              r === i) {
                  e = an(t, e, n);
                  break e
              }
              ze(t, e, r, n)
          }
          e = e.child
      }
      return e;
  case 5:
      return n0(e),
      t === null && au(e),
      r = e.type,
      i = e.pendingProps,
      s = t !== null ? t.memoizedProps : null,
      o = i.children,
      nu(r, i) ? o = null : s !== null && nu(r, s) && (e.flags |= 32),
      E0(t, e),
      ze(t, e, o, n),
      e.child;
  case 6:
      return t === null && au(e),
      null;
  case 13:
      return N0(t, e, n);
  case 4:
      return Ac(e, e.stateNode.containerInfo),
      r = e.pendingProps,
      t === null ? e.child = ti(e, null, r, n) : ze(t, e, r, n),
      e.child;
  case 11:
      return r = e.type,
      i = e.pendingProps,
      i = e.elementType === r ? i : Nt(r, i),
      Wd(t, e, r, i, n);
  case 7:
      return ze(t, e, e.pendingProps, n),
      e.child;
  case 8:
      return ze(t, e, e.pendingProps.children, n),
      e.child;
  case 12:
      return ze(t, e, e.pendingProps.children, n),
      e.child;
  case 10:
      e: {
          if (r = e.type._context,
          i = e.pendingProps,
          s = e.memoizedProps,
          o = i.value,
          Z($o, r._currentValue),
          r._currentValue = o,
          s !== null)
              if (Lt(s.value, o)) {
                  if (s.children === i.children && !Ge.current) {
                      e = an(t, e, n);
                      break e
                  }
              } else
                  for (s = e.child,
                  s !== null && (s.return = e); s !== null; ) {
                      var a = s.dependencies;
                      if (a !== null) {
                          o = s.child;
                          for (var l = a.firstContext; l !== null; ) {
                              if (l.context === r) {
                                  if (s.tag === 1) {
                                      l = en(-1, n & -n),
                                      l.tag = 2;
                                      var u = s.updateQueue;
                                      if (u !== null) {
                                          u = u.shared;
                                          var c = u.pending;
                                          c === null ? l.next = l : (l.next = c.next,
                                          c.next = l),
                                          u.pending = l
                                      }
                                  }
                                  s.lanes |= n,
                                  l = s.alternate,
                                  l !== null && (l.lanes |= n),
                                  lu(s.return, n, e),
                                  a.lanes |= n;
                                  break
                              }
                              l = l.next
                          }
                      } else if (s.tag === 10)
                          o = s.type === e.type ? null : s.child;
                      else if (s.tag === 18) {
                          if (o = s.return,
                          o === null)
                              throw Error(A(341));
                          o.lanes |= n,
                          a = o.alternate,
                          a !== null && (a.lanes |= n),
                          lu(o, n, e),
                          o = s.sibling
                      } else
                          o = s.child;
                      if (o !== null)
                          o.return = s;
                      else
                          for (o = s; o !== null; ) {
                              if (o === e) {
                                  o = null;
                                  break
                              }
                              if (s = o.sibling,
                              s !== null) {
                                  s.return = o.return,
                                  o = s;
                                  break
                              }
                              o = o.return
                          }
                      s = o
                  }
          ze(t, e, i.children, n),
          e = e.child
      }
      return e;
  case 9:
      return i = e.type,
      r = e.pendingProps.children,
      Yr(e, n),
      i = Pt(i),
      r = r(i),
      e.flags |= 1,
      ze(t, e, r, n),
      e.child;
  case 14:
      return r = e.type,
      i = Nt(r, e.pendingProps),
      i = Nt(r.type, i),
      Hd(t, e, r, i, n);
  case 15:
      return P0(t, e, e.type, e.pendingProps, n);
  case 17:
      return r = e.type,
      i = e.pendingProps,
      i = e.elementType === r ? i : Nt(r, i),
      _o(t, e),
      e.tag = 1,
      Xe(r) ? (t = !0,
      zo(e)) : t = !1,
      Yr(e, n),
      S0(e, r, i),
      cu(e, r, i, n),
      hu(null, e, r, !0, t, n);
  case 19:
      return A0(t, e, n);
  case 22:
      return C0(t, e, n)
  }
  throw Error(A(156, e.tag))
}
;
function K0(t, e) {
  return xm(t, e)
}
function Hx(t, e, n, r) {
  this.tag = t,
  this.key = n,
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
  this.index = 0,
  this.ref = null,
  this.pendingProps = e,
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
  this.mode = r,
  this.subtreeFlags = this.flags = 0,
  this.deletions = null,
  this.childLanes = this.lanes = 0,
  this.alternate = null
}
function _t(t, e, n, r) {
  return new Hx(t,e,n,r)
}
function Hc(t) {
  return t = t.prototype,
  !(!t || !t.isReactComponent)
}
function Kx(t) {
  if (typeof t == "function")
      return Hc(t) ? 1 : 0;
  if (t != null) {
      if (t = t.$$typeof,
      t === cc)
          return 11;
      if (t === fc)
          return 14
  }
  return 2
}
function An(t, e) {
  var n = t.alternate;
  return n === null ? (n = _t(t.tag, e, t.key, t.mode),
  n.elementType = t.elementType,
  n.type = t.type,
  n.stateNode = t.stateNode,
  n.alternate = t,
  t.alternate = n) : (n.pendingProps = e,
  n.type = t.type,
  n.flags = 0,
  n.subtreeFlags = 0,
  n.deletions = null),
  n.flags = t.flags & 14680064,
  n.childLanes = t.childLanes,
  n.lanes = t.lanes,
  n.child = t.child,
  n.memoizedProps = t.memoizedProps,
  n.memoizedState = t.memoizedState,
  n.updateQueue = t.updateQueue,
  e = t.dependencies,
  n.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
  },
  n.sibling = t.sibling,
  n.index = t.index,
  n.ref = t.ref,
  n
}
function To(t, e, n, r, i, s) {
  var o = 2;
  if (r = t,
  typeof t == "function")
      Hc(t) && (o = 1);
  else if (typeof t == "string")
      o = 5;
  else
      e: switch (t) {
      case kr:
          return rr(n.children, i, s, e);
      case uc:
          o = 8,
          i |= 8;
          break;
      case Ll:
          return t = _t(12, n, e, i | 2),
          t.elementType = Ll,
          t.lanes = s,
          t;
      case Ol:
          return t = _t(13, n, e, i),
          t.elementType = Ol,
          t.lanes = s,
          t;
      case bl:
          return t = _t(19, n, e, i),
          t.elementType = bl,
          t.lanes = s,
          t;
      case nm:
          return Ca(n, i, s, e);
      default:
          if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
              case em:
                  o = 10;
                  break e;
              case tm:
                  o = 9;
                  break e;
              case cc:
                  o = 11;
                  break e;
              case fc:
                  o = 14;
                  break e;
              case pn:
                  o = 16,
                  r = null;
                  break e
              }
          throw Error(A(130, t == null ? t : typeof t, ""))
      }
  return e = _t(o, n, e, i),
  e.elementType = t,
  e.type = r,
  e.lanes = s,
  e
}
function rr(t, e, n, r) {
  return t = _t(7, t, r, e),
  t.lanes = n,
  t
}
function Ca(t, e, n, r) {
  return t = _t(22, t, r, e),
  t.elementType = nm,
  t.lanes = n,
  t.stateNode = {
      isHidden: !1
  },
  t
}
function ul(t, e, n) {
  return t = _t(6, t, null, e),
  t.lanes = n,
  t
}
function cl(t, e, n) {
  return e = _t(4, t.children !== null ? t.children : [], t.key, e),
  e.lanes = n,
  e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
  },
  e
}
function Yx(t, e, n, r, i) {
  this.tag = e,
  this.containerInfo = t,
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
  this.timeoutHandle = -1,
  this.callbackNode = this.pendingContext = this.context = null,
  this.callbackPriority = 0,
  this.eventTimes = Wa(0),
  this.expirationTimes = Wa(-1),
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
  this.entanglements = Wa(0),
  this.identifierPrefix = r,
  this.onRecoverableError = i,
  this.mutableSourceEagerHydrationData = null
}
function Kc(t, e, n, r, i, s, o, a, l) {
  return t = new Yx(t,e,n,a,l),
  e === 1 ? (e = 1,
  s === !0 && (e |= 8)) : e = 0,
  s = _t(3, null, null, e),
  t.current = s,
  s.stateNode = t,
  s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
  },
  Nc(s),
  t
}
function Gx(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
      $$typeof: Tr,
      key: r == null ? null : "" + r,
      children: t,
      containerInfo: e,
      implementation: n
  }
}
function Y0(t) {
  if (!t)
      return Ln;
  t = t._reactInternals;
  e: {
      if (gr(t) !== t || t.tag !== 1)
          throw Error(A(170));
      var e = t;
      do {
          switch (e.tag) {
          case 3:
              e = e.stateNode.context;
              break e;
          case 1:
              if (Xe(e.type)) {
                  e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e
              }
          }
          e = e.return
      } while (e !== null);
      throw Error(A(171))
  }
  if (t.tag === 1) {
      var n = t.type;
      if (Xe(n))
          return Ym(t, n, e)
  }
  return e
}
function G0(t, e, n, r, i, s, o, a, l) {
  return t = Kc(n, r, !0, t, i, s, o, a, l),
  t.context = Y0(null),
  n = t.current,
  r = $e(),
  i = Nn(n),
  s = en(r, i),
  s.callback = e ?? null,
  En(n, s, i),
  t.current.lanes = i,
  js(t, i, r),
  Qe(t, r),
  t
}
function Ea(t, e, n, r) {
  var i = e.current
    , s = $e()
    , o = Nn(i);
  return n = Y0(n),
  e.context === null ? e.context = n : e.pendingContext = n,
  e = en(s, o),
  e.payload = {
      element: t
  },
  r = r === void 0 ? null : r,
  r !== null && (e.callback = r),
  t = En(i, e, o),
  t !== null && (jt(t, i, o, s),
  yo(t, i, o)),
  o
}
function Jo(t) {
  if (t = t.current,
  !t.child)
      return null;
  switch (t.child.tag) {
  case 5:
      return t.child.stateNode;
  default:
      return t.child.stateNode
  }
}
function rh(t, e) {
  if (t = t.memoizedState,
  t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e
  }
}
function Yc(t, e) {
  rh(t, e),
  (t = t.alternate) && rh(t, e)
}
function Xx() {
  return null
}
var X0 = typeof reportError == "function" ? reportError : function(t) {
  console.error(t)
}
;
function Gc(t) {
  this._internalRoot = t
}
Ma.prototype.render = Gc.prototype.render = function(t) {
  var e = this._internalRoot;
  if (e === null)
      throw Error(A(409));
  Ea(t, e, null, null)
}
;
Ma.prototype.unmount = Gc.prototype.unmount = function() {
  var t = this._internalRoot;
  if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      hr(function() {
          Ea(null, t, null, null)
      }),
      e[sn] = null
  }
}
;
function Ma(t) {
  this._internalRoot = t
}
Ma.prototype.unstable_scheduleHydration = function(t) {
  if (t) {
      var e = Cm();
      t = {
          blockedOn: null,
          target: t,
          priority: e
      };
      for (var n = 0; n < gn.length && e !== 0 && e < gn[n].priority; n++)
          ;
      gn.splice(n, 0, t),
      n === 0 && Mm(t)
  }
}
;
function Xc(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}
function Na(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}
function ih() {}
function Qx(t, e, n, r, i) {
  if (i) {
      if (typeof r == "function") {
          var s = r;
          r = function() {
              var u = Jo(o);
              s.call(u)
          }
      }
      var o = G0(e, r, t, 0, null, !1, !1, "", ih);
      return t._reactRootContainer = o,
      t[sn] = o.current,
      us(t.nodeType === 8 ? t.parentNode : t),
      hr(),
      o
  }
  for (; i = t.lastChild; )
      t.removeChild(i);
  if (typeof r == "function") {
      var a = r;
      r = function() {
          var u = Jo(l);
          a.call(u)
      }
  }
  var l = Kc(t, 0, !1, null, null, !1, !1, "", ih);
  return t._reactRootContainer = l,
  t[sn] = l.current,
  us(t.nodeType === 8 ? t.parentNode : t),
  hr(function() {
      Ea(e, l, n, r)
  }),
  l
}
function Aa(t, e, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
      var o = s;
      if (typeof i == "function") {
          var a = i;
          i = function() {
              var l = Jo(o);
              a.call(l)
          }
      }
      Ea(e, o, t, i)
  } else
      o = Qx(n, e, t, i, r);
  return Jo(o)
}
km = function(t) {
  switch (t.tag) {
  case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
          var n = Di(e.pendingLanes);
          n !== 0 && (pc(e, n | 1),
          Qe(e, pe()),
          !(H & 6) && (ii = pe() + 500,
          Bn()))
      }
      break;
  case 13:
      hr(function() {
          var r = on(t, 1);
          if (r !== null) {
              var i = $e();
              jt(r, t, 1, i)
          }
      }),
      Yc(t, 1)
  }
}
;
mc = function(t) {
  if (t.tag === 13) {
      var e = on(t, 134217728);
      if (e !== null) {
          var n = $e();
          jt(e, t, 134217728, n)
      }
      Yc(t, 134217728)
  }
}
;
Pm = function(t) {
  if (t.tag === 13) {
      var e = Nn(t)
        , n = on(t, e);
      if (n !== null) {
          var r = $e();
          jt(n, t, e, r)
      }
      Yc(t, e)
  }
}
;
Cm = function() {
  return Y
}
;
Em = function(t, e) {
  var n = Y;
  try {
      return Y = t,
      e()
  } finally {
      Y = n
  }
}
;
Kl = function(t, e, n) {
  switch (e) {
  case "input":
      if (Fl(t, n),
      e = n.name,
      n.type === "radio" && e != null) {
          for (n = t; n.parentNode; )
              n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'),
          e = 0; e < n.length; e++) {
              var r = n[e];
              if (r !== t && r.form === t.form) {
                  var i = _a(r);
                  if (!i)
                      throw Error(A(90));
                  im(r),
                  Fl(r, i)
              }
          }
      }
      break;
  case "textarea":
      om(t, n);
      break;
  case "select":
      e = n.value,
      e != null && $r(t, !!n.multiple, e, !1)
  }
}
;
hm = Uc;
pm = hr;
var Zx = {
  usingClientEntryPoint: !1,
  Events: [Os, Mr, _a, fm, dm, Uc]
}
, Ei = {
  findFiberByHostInstance: Zn,
  bundleType: 0,
  version: "18.3.1",
  rendererPackageName: "react-dom"
}
, qx = {
  bundleType: Ei.bundleType,
  version: Ei.version,
  rendererPackageName: Ei.rendererPackageName,
  rendererConfig: Ei.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setErrorHandler: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: fn.ReactCurrentDispatcher,
  findHostInstanceByFiber: function(t) {
      return t = ym(t),
      t === null ? null : t.stateNode
  },
  findFiberByHostInstance: Ei.findFiberByHostInstance || Xx,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null,
  reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var so = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!so.isDisabled && so.supportsFiber)
      try {
          ga = so.inject(qx),
          Ut = so
      } catch {}
}
ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zx;
ht.createPortal = function(t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xc(e))
      throw Error(A(200));
  return Gx(t, e, null, n)
}
;
ht.createRoot = function(t, e) {
  if (!Xc(t))
      throw Error(A(299));
  var n = !1
    , r = ""
    , i = X0;
  return e != null && (e.unstable_strictMode === !0 && (n = !0),
  e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
  e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
  e = Kc(t, 1, !1, null, null, n, !1, r, i),
  t[sn] = e.current,
  us(t.nodeType === 8 ? t.parentNode : t),
  new Gc(e)
}
;
ht.findDOMNode = function(t) {
  if (t == null)
      return null;
  if (t.nodeType === 1)
      return t;
  var e = t._reactInternals;
  if (e === void 0)
      throw typeof t.render == "function" ? Error(A(188)) : (t = Object.keys(t).join(","),
      Error(A(268, t)));
  return t = ym(e),
  t = t === null ? null : t.stateNode,
  t
}
;
ht.flushSync = function(t) {
  return hr(t)
}
;
ht.hydrate = function(t, e, n) {
  if (!Na(e))
      throw Error(A(200));
  return Aa(null, t, e, !0, n)
}
;
ht.hydrateRoot = function(t, e, n) {
  if (!Xc(t))
      throw Error(A(405));
  var r = n != null && n.hydratedSources || null
    , i = !1
    , s = ""
    , o = X0;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0),
  n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
  n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
  e = G0(e, null, t, 1, n ?? null, i, !1, s, o),
  t[sn] = e.current,
  us(t),
  r)
      for (t = 0; t < r.length; t++)
          n = r[t],
          i = n._getVersion,
          i = i(n._source),
          e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, i] : e.mutableSourceEagerHydrationData.push(n, i);
  return new Ma(e)
}
;
ht.render = function(t, e, n) {
  if (!Na(e))
      throw Error(A(200));
  return Aa(null, t, e, !1, n)
}
;
ht.unmountComponentAtNode = function(t) {
  if (!Na(t))
      throw Error(A(40));
  return t._reactRootContainer ? (hr(function() {
      Aa(null, null, t, !1, function() {
          t._reactRootContainer = null,
          t[sn] = null
      })
  }),
  !0) : !1
}
;
ht.unstable_batchedUpdates = Uc;
ht.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
  if (!Na(n))
      throw Error(A(200));
  if (t == null || t._reactInternals === void 0)
      throw Error(A(38));
  return Aa(t, e, n, !1, r)
}
;
ht.version = "18.3.1-next-f1338f8080-20240426";
function Q0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q0)
      } catch (t) {
          console.error(t)
      }
}
Q0(),
Qp.exports = ht;
var Jx = Qp.exports, Z0, sh = Jx;
Z0 = sh.createRoot,
sh.hydrateRoot;
const Qc = M.createContext({});
function Zc(t) {
  const e = M.useRef(null);
  return e.current === null && (e.current = t()),
  e.current
}
const Ra = M.createContext(null)
, qc = M.createContext({
  transformPagePoint: t => t,
  isStatic: !1,
  reducedMotion: "never"
});
class e_ extends M.Component {
  getSnapshotBeforeUpdate(e) {
      const n = this.props.childRef.current;
      if (n && e.isPresent && !this.props.isPresent) {
          const r = n.offsetParent
            , i = r instanceof HTMLElement && r.offsetWidth || 0
            , s = this.props.sizeRef.current;
          s.height = n.offsetHeight || 0,
          s.width = n.offsetWidth || 0,
          s.top = n.offsetTop,
          s.left = n.offsetLeft,
          s.right = i - s.width - s.left
      }
      return null
  }
  componentDidUpdate() {}
  render() {
      return this.props.children
  }
}
function t_({children: t, isPresent: e, anchorX: n}) {
  const r = M.useId()
    , i = M.useRef(null)
    , s = M.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0
  })
    , {nonce: o} = M.useContext(qc);
  return M.useInsertionEffect( () => {
      const {width: a, height: l, top: u, left: c, right: f} = s.current;
      if (e || !i.current || !a || !l)
          return;
      const d = n === "left" ? `left: ${c}` : `right: ${f}`;
      i.current.dataset.motionPopId = r;
      const p = document.createElement("style");
      return o && (p.nonce = o),
      document.head.appendChild(p),
      p.sheet && p.sheet.insertRule(`
        [data-motion-pop-id="${r}"] {
          position: absolute !important;
          width: ${a}px !important;
          height: ${l}px !important;
          ${d}px !important;
          top: ${u}px !important;
        }
      `),
      () => {
          document.head.removeChild(p)
      }
  }
  , [e]),
  _.jsx(e_, {
      isPresent: e,
      childRef: i,
      sizeRef: s,
      children: M.cloneElement(t, {
          ref: i
      })
  })
}
const n_ = ({children: t, initial: e, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o, anchorX: a}) => {
  const l = Zc(r_)
    , u = M.useId()
    , c = M.useCallback(d => {
      l.set(d, !0);
      for (const p of l.values())
          if (!p)
              return;
      r && r()
  }
  , [l, r])
    , f = M.useMemo( () => ({
      id: u,
      initial: e,
      isPresent: n,
      custom: i,
      onExitComplete: c,
      register: d => (l.set(d, !1),
      () => l.delete(d))
  }), s ? [Math.random(), c] : [n, c]);
  return M.useMemo( () => {
      l.forEach( (d, p) => l.set(p, !1))
  }
  , [n]),
  M.useEffect( () => {
      !n && !l.size && r && r()
  }
  , [n]),
  o === "popLayout" && (t = _.jsx(t_, {
      isPresent: n,
      anchorX: a,
      children: t
  })),
  _.jsx(Ra.Provider, {
      value: f,
      children: t
  })
}
;
function r_() {
  return new Map
}
function q0(t=!0) {
  const e = M.useContext(Ra);
  if (e === null)
      return [!0, null];
  const {isPresent: n, onExitComplete: r, register: i} = e
    , s = M.useId();
  M.useEffect( () => {
      if (t)
          return i(s)
  }
  , [t]);
  const o = M.useCallback( () => t && r && r(s), [s, r, t]);
  return !n && r ? [!1, o] : [!0]
}
const oo = t => t.key || "";
function oh(t) {
  const e = [];
  return M.Children.forEach(t, n => {
      M.isValidElement(n) && e.push(n)
  }
  ),
  e
}
const Jc = typeof window < "u"
, J0 = Jc ? M.useLayoutEffect : M.useEffect
, Gi = ({children: t, custom: e, initial: n=!0, onExitComplete: r, presenceAffectsLayout: i=!0, mode: s="sync", propagate: o=!1, anchorX: a="left"}) => {
  const [l,u] = q0(o)
    , c = M.useMemo( () => oh(t), [t])
    , f = o && !l ? [] : c.map(oo)
    , d = M.useRef(!0)
    , p = M.useRef(c)
    , v = Zc( () => new Map)
    , [h,x] = M.useState(c)
    , [g,m] = M.useState(c);
  J0( () => {
      d.current = !1,
      p.current = c;
      for (let w = 0; w < g.length; w++) {
          const T = oo(g[w]);
          f.includes(T) ? v.delete(T) : v.get(T) !== !0 && v.set(T, !1)
      }
  }
  , [g, f.length, f.join("-")]);
  const y = [];
  if (c !== h) {
      let w = [...c];
      for (let T = 0; T < g.length; T++) {
          const C = g[T]
            , k = oo(C);
          f.includes(k) || (w.splice(T, 0, C),
          y.push(C))
      }
      return s === "wait" && y.length && (w = y),
      m(oh(w)),
      x(c),
      null
  }
  const {forceRender: S} = M.useContext(Qc);
  return _.jsx(_.Fragment, {
      children: g.map(w => {
          const T = oo(w)
            , C = o && !l ? !1 : c === g || f.includes(T)
            , k = () => {
              if (v.has(T))
                  v.set(T, !0);
              else
                  return;
              let P = !0;
              v.forEach(E => {
                  E || (P = !1)
              }
              ),
              P && (S == null || S(),
              m(p.current),
              o && (u == null || u()),
              r && r())
          }
          ;
          return _.jsx(n_, {
              isPresent: C,
              initial: !d.current || n ? void 0 : !1,
              custom: e,
              presenceAffectsLayout: i,
              mode: s,
              onExitComplete: C ? void 0 : k,
              anchorX: a,
              children: w
          }, T)
      }
      )
  })
}
, lt = t => t;
let Pu = lt;
function ef(t) {
  let e;
  return () => (e === void 0 && (e = t()),
  e)
}
const si = (t, e, n) => {
  const r = e - t;
  return r === 0 ? 1 : (n - t) / r
}
, tn = t => t * 1e3
, nn = t => t / 1e3
, i_ = {
  skipAnimations: !1,
  useManualTiming: !1
}
, ao = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
, ah = {
  value: null,
  addProjectionMetrics: null
};
function s_(t, e) {
  let n = new Set
    , r = new Set
    , i = !1
    , s = !1;
  const o = new WeakSet;
  let a = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
  }
    , l = 0;
  function u(f) {
      o.has(f) && (c.schedule(f),
      t()),
      l++,
      f(a)
  }
  const c = {
      schedule: (f, d=!1, p=!1) => {
          const h = p && i ? n : r;
          return d && o.add(f),
          h.has(f) || h.add(f),
          f
      }
      ,
      cancel: f => {
          r.delete(f),
          o.delete(f)
      }
      ,
      process: f => {
          if (a = f,
          i) {
              s = !0;
              return
          }
          i = !0,
          [n,r] = [r, n],
          n.forEach(u),
          e && ah.value && ah.value.frameloop[e].push(l),
          l = 0,
          n.clear(),
          i = !1,
          s && (s = !1,
          c.process(f))
      }
  };
  return c
}
const o_ = 40;
function eg(t, e) {
  let n = !1
    , r = !0;
  const i = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
  }
    , s = () => n = !0
    , o = ao.reduce( (g, m) => (g[m] = s_(s, e ? m : void 0),
  g), {})
    , {read: a, resolveKeyframes: l, update: u, preRender: c, render: f, postRender: d} = o
    , p = () => {
      const g = performance.now();
      n = !1,
      i.delta = r ? 1e3 / 60 : Math.max(Math.min(g - i.timestamp, o_), 1),
      i.timestamp = g,
      i.isProcessing = !0,
      a.process(i),
      l.process(i),
      u.process(i),
      c.process(i),
      f.process(i),
      d.process(i),
      i.isProcessing = !1,
      n && e && (r = !1,
      t(p))
  }
    , v = () => {
      n = !0,
      r = !0,
      i.isProcessing || t(p)
  }
  ;
  return {
      schedule: ao.reduce( (g, m) => {
          const y = o[m];
          return g[m] = (S, w=!1, T=!1) => (n || v(),
          y.schedule(S, w, T)),
          g
      }
      , {}),
      cancel: g => {
          for (let m = 0; m < ao.length; m++)
              o[ao[m]].cancel(g)
      }
      ,
      state: i,
      steps: o
  }
}
const {schedule: q, cancel: On, state: Ee, steps: fl} = eg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : lt, !0)
, tg = M.createContext({
  strict: !1
})
, lh = {
  animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}
, oi = {};
for (const t in lh)
  oi[t] = {
      isEnabled: e => lh[t].some(n => !!e[n])
  };
function a_(t) {
  for (const e in t)
      oi[e] = {
          ...oi[e],
          ...t[e]
      }
}
const l_ = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function ea(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || l_.has(t)
}
let ng = t => !ea(t);
function u_(t) {
  t && (ng = e => e.startsWith("on") ? !ea(e) : t(e))
}
try {
  u_(require("@emotion/is-prop-valid").default)
} catch {}
function c_(t, e, n) {
  const r = {};
  for (const i in t)
      i === "values" && typeof t.values == "object" || (ng(i) || n === !0 && ea(i) || !e && !ea(i) || t.draggable && i.startsWith("onDrag")) && (r[i] = t[i]);
  return r
}
function f_(t) {
  if (typeof Proxy > "u")
      return t;
  const e = new Map
    , n = (...r) => t(...r);
  return new Proxy(n,{
      get: (r, i) => i === "create" ? t : (e.has(i) || e.set(i, t(i)),
      e.get(i))
  })
}
const Da = M.createContext({});
function ja(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function"
}
function vs(t) {
  return typeof t == "string" || Array.isArray(t)
}
const tf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
, nf = ["initial", ...tf];
function La(t) {
  return ja(t.animate) || nf.some(e => vs(t[e]))
}
function rg(t) {
  return !!(La(t) || t.variants)
}
function d_(t, e) {
  if (La(t)) {
      const {initial: n, animate: r} = t;
      return {
          initial: n === !1 || vs(n) ? n : void 0,
          animate: vs(r) ? r : void 0
      }
  }
  return t.inherit !== !1 ? e : {}
}
function h_(t) {
  const {initial: e, animate: n} = d_(t, M.useContext(Da));
  return M.useMemo( () => ({
      initial: e,
      animate: n
  }), [uh(e), uh(n)])
}
function uh(t) {
  return Array.isArray(t) ? t.join(" ") : t
}
const p_ = Symbol.for("motionComponentSymbol");
function Or(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
function m_(t, e, n) {
  return M.useCallback(r => {
      r && t.onMount && t.onMount(r),
      e && (r ? e.mount(r) : e.unmount()),
      n && (typeof n == "function" ? n(r) : Or(n) && (n.current = r))
  }
  , [e])
}
const rf = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
, g_ = "framerAppearId"
, ig = "data-" + rf(g_)
, {schedule: sf, cancel: lP} = eg(queueMicrotask, !1)
, sg = M.createContext({});
function y_(t, e, n, r, i) {
  var s, o;
  const {visualElement: a} = M.useContext(Da)
    , l = M.useContext(tg)
    , u = M.useContext(Ra)
    , c = M.useContext(qc).reducedMotion
    , f = M.useRef(null);
  r = r || l.renderer,
  !f.current && r && (f.current = r(t, {
      visualState: e,
      parent: a,
      props: n,
      presenceContext: u,
      blockInitialAnimation: u ? u.initial === !1 : !1,
      reducedMotionConfig: c
  }));
  const d = f.current
    , p = M.useContext(sg);
  d && !d.projection && i && (d.type === "html" || d.type === "svg") && v_(f.current, n, i, p);
  const v = M.useRef(!1);
  M.useInsertionEffect( () => {
      d && v.current && d.update(n, u)
  }
  );
  const h = n[ig]
    , x = M.useRef(!!h && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, h)) && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, h)));
  return J0( () => {
      d && (v.current = !0,
      window.MotionIsMounted = !0,
      d.updateFeatures(),
      sf.render(d.render),
      x.current && d.animationState && d.animationState.animateChanges())
  }
  ),
  M.useEffect( () => {
      d && (!x.current && d.animationState && d.animationState.animateChanges(),
      x.current && (queueMicrotask( () => {
          var g;
          (g = window.MotionHandoffMarkAsComplete) === null || g === void 0 || g.call(window, h)
      }
      ),
      x.current = !1))
  }
  ),
  d
}
function v_(t, e, n, r) {
  const {layoutId: i, layout: s, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u} = e;
  t.projection = new n(t.latestValues,e["data-framer-portal-id"] ? void 0 : og(t.parent)),
  t.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || a && Or(a),
      visualElement: t,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u
  })
}
function og(t) {
  if (t)
      return t.options.allowProjection !== !1 ? t.projection : og(t.parent)
}
function x_({preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: r, Component: i}) {
  var s, o;
  t && a_(t);
  function a(u, c) {
      let f;
      const d = {
          ...M.useContext(qc),
          ...u,
          layoutId: __(u)
      }
        , {isStatic: p} = d
        , v = h_(u)
        , h = r(u, p);
      if (!p && Jc) {
          w_();
          const x = S_(d);
          f = x.MeasureLayout,
          v.visualElement = y_(i, h, d, e, x.ProjectionNode)
      }
      return _.jsxs(Da.Provider, {
          value: v,
          children: [f && v.visualElement ? _.jsx(f, {
              visualElement: v.visualElement,
              ...d
          }) : null, n(i, u, m_(h, v.visualElement, c), h, p, v.visualElement)]
      })
  }
  a.displayName = `motion.${typeof i == "string" ? i : `create(${(o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !== null && o !== void 0 ? o : ""})`}`;
  const l = M.forwardRef(a);
  return l[p_] = i,
  l
}
function __({layoutId: t}) {
  const e = M.useContext(Qc).id;
  return e && t !== void 0 ? e + "-" + t : t
}
function w_(t, e) {
  M.useContext(tg).strict
}
function S_(t) {
  const {drag: e, layout: n} = oi;
  if (!e && !n)
      return {};
  const r = {
      ...e,
      ...n
  };
  return {
      MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? r.MeasureLayout : void 0,
      ProjectionNode: r.ProjectionNode
  }
}
const ag = t => e => typeof e == "string" && e.startsWith(t)
, of = ag("--")
, T_ = ag("var(--")
, af = t => T_(t) ? k_.test(t.split("/*")[0].trim()) : !1
, k_ = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
, xs = {};
function P_(t) {
  for (const e in t)
      xs[e] = t[e],
      of(e) && (xs[e].isCSSVariable = !0)
}
const yi = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
, yr = new Set(yi);
function lg(t, {layout: e, layoutId: n}) {
  return yr.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!xs[t] || t === "opacity")
}
const Ve = t => !!(t && t.getVelocity)
, ug = (t, e) => e && typeof t == "number" ? e.transform(t) : t
, ln = (t, e, n) => n > e ? e : n < t ? t : n
, vi = {
  test: t => typeof t == "number",
  parse: parseFloat,
  transform: t => t
}
, _s = {
  ...vi,
  transform: t => ln(0, 1, t)
}
, lo = {
  ...vi,
  default: 1
}
, Vs = t => ({
  test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: e => `${e}${t}`
})
, hn = Vs("deg")
, Wt = Vs("%")
, F = Vs("px")
, C_ = Vs("vh")
, E_ = Vs("vw")
, ch = {
  ...Wt,
  parse: t => Wt.parse(t) / 100,
  transform: t => Wt.transform(t * 100)
}
, M_ = {
  borderWidth: F,
  borderTopWidth: F,
  borderRightWidth: F,
  borderBottomWidth: F,
  borderLeftWidth: F,
  borderRadius: F,
  radius: F,
  borderTopLeftRadius: F,
  borderTopRightRadius: F,
  borderBottomRightRadius: F,
  borderBottomLeftRadius: F,
  width: F,
  maxWidth: F,
  height: F,
  maxHeight: F,
  top: F,
  right: F,
  bottom: F,
  left: F,
  padding: F,
  paddingTop: F,
  paddingRight: F,
  paddingBottom: F,
  paddingLeft: F,
  margin: F,
  marginTop: F,
  marginRight: F,
  marginBottom: F,
  marginLeft: F,
  backgroundPositionX: F,
  backgroundPositionY: F
}
, N_ = {
  rotate: hn,
  rotateX: hn,
  rotateY: hn,
  rotateZ: hn,
  scale: lo,
  scaleX: lo,
  scaleY: lo,
  scaleZ: lo,
  skew: hn,
  skewX: hn,
  skewY: hn,
  distance: F,
  translateX: F,
  translateY: F,
  translateZ: F,
  x: F,
  y: F,
  z: F,
  perspective: F,
  transformPerspective: F,
  opacity: _s,
  originX: ch,
  originY: ch,
  originZ: F
}
, fh = {
  ...vi,
  transform: Math.round
}
, lf = {
  ...M_,
  ...N_,
  zIndex: fh,
  size: F,
  fillOpacity: _s,
  strokeOpacity: _s,
  numOctaves: fh
}
, A_ = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}
, R_ = yi.length;
function D_(t, e, n) {
  let r = ""
    , i = !0;
  for (let s = 0; s < R_; s++) {
      const o = yi[s]
        , a = t[o];
      if (a === void 0)
          continue;
      let l = !0;
      if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0,
      !l || n) {
          const u = ug(a, lf[o]);
          if (!l) {
              i = !1;
              const c = A_[o] || o;
              r += `${c}(${u}) `
          }
          n && (e[o] = u)
      }
  }
  return r = r.trim(),
  n ? r = n(e, i ? "" : r) : i && (r = "none"),
  r
}
function uf(t, e, n) {
  const {style: r, vars: i, transformOrigin: s} = t;
  let o = !1
    , a = !1;
  for (const l in e) {
      const u = e[l];
      if (yr.has(l)) {
          o = !0;
          continue
      } else if (of(l)) {
          i[l] = u;
          continue
      } else {
          const c = ug(u, lf[l]);
          l.startsWith("origin") ? (a = !0,
          s[l] = c) : r[l] = c
      }
  }
  if (e.transform || (o || n ? r.transform = D_(e, t.transform, n) : r.transform && (r.transform = "none")),
  a) {
      const {originX: l="50%", originY: u="50%", originZ: c=0} = s;
      r.transformOrigin = `${l} ${u} ${c}`
  }
}
const cf = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function cg(t, e, n) {
  for (const r in e)
      !Ve(e[r]) && !lg(r, n) && (t[r] = e[r])
}
function j_({transformTemplate: t}, e) {
  return M.useMemo( () => {
      const n = cf();
      return uf(n, e, t),
      Object.assign({}, n.vars, n.style)
  }
  , [e])
}
function L_(t, e) {
  const n = t.style || {}
    , r = {};
  return cg(r, n, t),
  Object.assign(r, j_(t, e)),
  r
}
function O_(t, e) {
  const n = {}
    , r = L_(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1,
  r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
  r.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`),
  t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
  n.style = r,
  n
}
const b_ = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function ff(t) {
  return typeof t != "string" || t.includes("-") ? !1 : !!(b_.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
const V_ = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}
, I_ = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function F_(t, e, n=1, r=0, i=!0) {
  t.pathLength = 1;
  const s = i ? V_ : I_;
  t[s.offset] = F.transform(-r);
  const o = F.transform(e)
    , a = F.transform(n);
  t[s.array] = `${o} ${a}`
}
function dh(t, e, n) {
  return typeof t == "string" ? t : F.transform(e + n * t)
}
function z_(t, e, n) {
  const r = dh(e, t.x, t.width)
    , i = dh(n, t.y, t.height);
  return `${r} ${i}`
}
function df(t, {attrX: e, attrY: n, attrScale: r, originX: i, originY: s, pathLength: o, pathSpacing: a=1, pathOffset: l=0, ...u}, c, f) {
  if (uf(t, u, f),
  c) {
      t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
      return
  }
  t.attrs = t.style,
  t.style = {};
  const {attrs: d, style: p, dimensions: v} = t;
  d.transform && (v && (p.transform = d.transform),
  delete d.transform),
  v && (i !== void 0 || s !== void 0 || p.transform) && (p.transformOrigin = z_(v, i !== void 0 ? i : .5, s !== void 0 ? s : .5)),
  e !== void 0 && (d.x = e),
  n !== void 0 && (d.y = n),
  r !== void 0 && (d.scale = r),
  o !== void 0 && F_(d, o, a, l, !1)
}
const fg = () => ({
  ...cf(),
  attrs: {}
})
, hf = t => typeof t == "string" && t.toLowerCase() === "svg";
function B_(t, e, n, r) {
  const i = M.useMemo( () => {
      const s = fg();
      return df(s, e, hf(r), t.transformTemplate),
      {
          ...s.attrs,
          style: {
              ...s.style
          }
      }
  }
  , [e]);
  if (t.style) {
      const s = {};
      cg(s, t.style, t),
      i.style = {
          ...s,
          ...i.style
      }
  }
  return i
}
function U_(t=!1) {
  return (n, r, i, {latestValues: s}, o) => {
      const l = (ff(n) ? B_ : O_)(r, s, o, n)
        , u = c_(r, typeof n == "string", t)
        , c = n !== M.Fragment ? {
          ...u,
          ...l,
          ref: i
      } : {}
        , {children: f} = r
        , d = M.useMemo( () => Ve(f) ? f.get() : f, [f]);
      return M.createElement(n, {
          ...c,
          children: d
      })
  }
}
function hh(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach( (n, r) => {
      e[0][r] = n.get(),
      e[1][r] = n.getVelocity()
  }
  ),
  e
}
function pf(t, e, n, r) {
  if (typeof e == "function") {
      const [i,s] = hh(r);
      e = e(n !== void 0 ? n : t.custom, i, s)
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]),
  typeof e == "function") {
      const [i,s] = hh(r);
      e = e(n !== void 0 ? n : t.custom, i, s)
  }
  return e
}
const Cu = t => Array.isArray(t)
, $_ = t => !!(t && typeof t == "object" && t.mix && t.toValue)
, W_ = t => Cu(t) ? t[t.length - 1] || 0 : t;
function ko(t) {
  const e = Ve(t) ? t.get() : t;
  return $_(e) ? e.toValue() : e
}
function H_({scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: n}, r, i, s) {
  const o = {
      latestValues: K_(r, i, s, t),
      renderState: e()
  };
  return n && (o.onMount = a => n({
      props: r,
      current: a,
      ...o
  }),
  o.onUpdate = a => n(a)),
  o
}
const dg = t => (e, n) => {
  const r = M.useContext(Da)
    , i = M.useContext(Ra)
    , s = () => H_(t, e, r, i);
  return n ? s() : Zc(s)
}
;
function K_(t, e, n, r) {
  const i = {}
    , s = r(t, {});
  for (const d in s)
      i[d] = ko(s[d]);
  let {initial: o, animate: a} = t;
  const l = La(t)
    , u = rg(t);
  e && u && !l && t.inherit !== !1 && (o === void 0 && (o = e.initial),
  a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const f = c ? a : o;
  if (f && typeof f != "boolean" && !ja(f)) {
      const d = Array.isArray(f) ? f : [f];
      for (let p = 0; p < d.length; p++) {
          const v = pf(t, d[p]);
          if (v) {
              const {transitionEnd: h, transition: x, ...g} = v;
              for (const m in g) {
                  let y = g[m];
                  if (Array.isArray(y)) {
                      const S = c ? y.length - 1 : 0;
                      y = y[S]
                  }
                  y !== null && (i[m] = y)
              }
              for (const m in h)
                  i[m] = h[m]
          }
      }
  }
  return i
}
function mf(t, e, n) {
  var r;
  const {style: i} = t
    , s = {};
  for (const o in i)
      (Ve(i[o]) || e.style && Ve(e.style[o]) || lg(o, t) || ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[o] = i[o]);
  return s
}
const Y_ = {
  useVisualState: dg({
      scrapeMotionValuesFromProps: mf,
      createRenderState: cf
  })
};
function hg(t, e) {
  try {
      e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
  } catch {
      e.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
      }
  }
}
function pg(t, {style: e, vars: n}, r, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(r));
  for (const s in n)
      t.style.setProperty(s, n[s])
}
const mg = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function gg(t, e, n, r) {
  pg(t, e, void 0, r);
  for (const i in e.attrs)
      t.setAttribute(mg.has(i) ? i : rf(i), e.attrs[i])
}
function yg(t, e, n) {
  const r = mf(t, e, n);
  for (const i in t)
      if (Ve(t[i]) || Ve(e[i])) {
          const s = yi.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
          r[s] = t[i]
      }
  return r
}
const ph = ["x", "y", "width", "height", "cx", "cy", "r"]
, G_ = {
  useVisualState: dg({
      scrapeMotionValuesFromProps: yg,
      createRenderState: fg,
      onUpdate: ({props: t, prevProps: e, current: n, renderState: r, latestValues: i}) => {
          if (!n)
              return;
          let s = !!t.drag;
          if (!s) {
              for (const a in i)
                  if (yr.has(a)) {
                      s = !0;
                      break
                  }
          }
          if (!s)
              return;
          let o = !e;
          if (e)
              for (let a = 0; a < ph.length; a++) {
                  const l = ph[a];
                  t[l] !== e[l] && (o = !0)
              }
          o && q.read( () => {
              hg(n, r),
              q.render( () => {
                  df(r, i, hf(n.tagName), t.transformTemplate),
                  gg(n, r)
              }
              )
          }
          )
      }
  })
};
function X_(t, e) {
  return function(r, {forwardMotionProps: i}={
      forwardMotionProps: !1
  }) {
      const o = {
          ...ff(r) ? G_ : Y_,
          preloadedFeatures: t,
          useRender: U_(i),
          createVisualElement: e,
          Component: r
      };
      return x_(o)
  }
}
function ws(t, e, n) {
  const r = t.getProps();
  return pf(r, e, n !== void 0 ? n : r.custom, t)
}
const Q_ = ef( () => window.ScrollTimeline !== void 0);
class Z_ {
  constructor(e) {
      this.stop = () => this.runAll("stop"),
      this.animations = e.filter(Boolean)
  }
  get finished() {
      return Promise.all(this.animations.map(e => "finished"in e ? e.finished : e))
  }
  getAll(e) {
      return this.animations[0][e]
  }
  setAll(e, n) {
      for (let r = 0; r < this.animations.length; r++)
          this.animations[r][e] = n
  }
  attachTimeline(e, n) {
      const r = this.animations.map(i => {
          if (Q_() && i.attachTimeline)
              return i.attachTimeline(e);
          if (typeof n == "function")
              return n(i)
      }
      );
      return () => {
          r.forEach( (i, s) => {
              i && i(),
              this.animations[s].stop()
          }
          )
      }
  }
  get time() {
      return this.getAll("time")
  }
  set time(e) {
      this.setAll("time", e)
  }
  get speed() {
      return this.getAll("speed")
  }
  set speed(e) {
      this.setAll("speed", e)
  }
  get startTime() {
      return this.getAll("startTime")
  }
  get duration() {
      let e = 0;
      for (let n = 0; n < this.animations.length; n++)
          e = Math.max(e, this.animations[n].duration);
      return e
  }
  runAll(e) {
      this.animations.forEach(n => n[e]())
  }
  flatten() {
      this.runAll("flatten")
  }
  play() {
      this.runAll("play")
  }
  pause() {
      this.runAll("pause")
  }
  cancel() {
      this.runAll("cancel")
  }
  complete() {
      this.runAll("complete")
  }
}
class q_ extends Z_ {
  then(e, n) {
      return Promise.all(this.animations).then(e).catch(n)
  }
}
function gf(t, e) {
  return t ? t[e] || t.default || t : void 0
}
const Eu = 2e4;
function vg(t) {
  let e = 0;
  const n = 50;
  let r = t.next(e);
  for (; !r.done && e < Eu; )
      e += n,
      r = t.next(e);
  return e >= Eu ? 1 / 0 : e
}
function yf(t) {
  return typeof t == "function"
}
function mh(t, e) {
  t.timeline = e,
  t.onfinish = null
}
const vf = t => Array.isArray(t) && typeof t[0] == "number"
, J_ = {
  linearEasing: void 0
};
function ew(t, e) {
  const n = ef(t);
  return () => {
      var r;
      return (r = J_[e]) !== null && r !== void 0 ? r : n()
  }
}
const ta = ew( () => {
  try {
      document.createElement("div").animate({
          opacity: 0
      }, {
          easing: "linear(0, 1)"
      })
  } catch {
      return !1
  }
  return !0
}
, "linearEasing")
, xg = (t, e, n=10) => {
  let r = "";
  const i = Math.max(Math.round(e / n), 2);
  for (let s = 0; s < i; s++)
      r += t(si(0, i - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`
}
;
function _g(t) {
  return !!(typeof t == "function" && ta() || !t || typeof t == "string" && (t in Mu || ta()) || vf(t) || Array.isArray(t) && t.every(_g))
}
const Li = ([t,e,n,r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`
, Mu = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Li([0, .65, .55, 1]),
  circOut: Li([.55, 0, 1, .45]),
  backIn: Li([.31, .01, .66, -.59]),
  backOut: Li([.33, 1.53, .69, .99])
};
function wg(t, e) {
  if (t)
      return typeof t == "function" && ta() ? xg(t, e) : vf(t) ? Li(t) : Array.isArray(t) ? t.map(n => wg(n, e) || Mu.easeOut) : Mu[t]
}
const Mt = {
  x: !1,
  y: !1
};
function Sg() {
  return Mt.x || Mt.y
}
function Tg(t, e, n) {
  var r;
  if (t instanceof EventTarget)
      return [t];
  if (typeof t == "string") {
      let i = document;
      const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(t);
      return s ? Array.from(s) : []
  }
  return Array.from(t)
}
function kg(t, e) {
  const n = Tg(t)
    , r = new AbortController
    , i = {
      passive: !0,
      ...e,
      signal: r.signal
  };
  return [n, i, () => r.abort()]
}
function gh(t) {
  return !(t.pointerType === "touch" || Sg())
}
function tw(t, e, n={}) {
  const [r,i,s] = kg(t, n)
    , o = a => {
      if (!gh(a))
          return;
      const {target: l} = a
        , u = e(l, a);
      if (typeof u != "function" || !l)
          return;
      const c = f => {
          gh(f) && (u(f),
          l.removeEventListener("pointerleave", c))
      }
      ;
      l.addEventListener("pointerleave", c, i)
  }
  ;
  return r.forEach(a => {
      a.addEventListener("pointerenter", o, i)
  }
  ),
  s
}
function na(t, e) {
  const n = `${e}PointerCapture`;
  if (t.target instanceof Element && n in t.target && t.pointerId !== void 0)
      try {
          t.target[n](t.pointerId)
      } catch {}
}
const Pg = (t, e) => e ? t === e ? !0 : Pg(t, e.parentElement) : !1
, xf = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1
, nw = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function rw(t) {
  return nw.has(t.tagName) || t.tabIndex !== -1
}
const Oi = new WeakSet;
function yh(t) {
  return e => {
      e.key === "Enter" && t(e)
  }
}
function dl(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e,{
      isPrimary: !0,
      bubbles: !0
  }))
}
const iw = (t, e) => {
  const n = t.currentTarget;
  if (!n)
      return;
  const r = yh( () => {
      if (Oi.has(n))
          return;
      dl(n, "down");
      const i = yh( () => {
          dl(n, "up")
      }
      )
        , s = () => dl(n, "cancel");
      n.addEventListener("keyup", i, e),
      n.addEventListener("blur", s, e)
  }
  );
  n.addEventListener("keydown", r, e),
  n.addEventListener("blur", () => n.removeEventListener("keydown", r), e)
}
;
function vh(t) {
  return xf(t) && !Sg()
}
function sw(t, e, n={}) {
  const [r,i,s] = kg(t, n)
    , o = a => {
      const l = a.currentTarget;
      if (!l || !vh(a) || Oi.has(l))
          return;
      Oi.add(l),
      na(a, "set");
      const u = e(l, a)
        , c = (p, v) => {
          l.removeEventListener("pointerup", f),
          l.removeEventListener("pointercancel", d),
          na(p, "release"),
          !(!vh(p) || !Oi.has(l)) && (Oi.delete(l),
          typeof u == "function" && u(p, {
              success: v
          }))
      }
        , f = p => {
          (p.isTrusted ? ow(p, l instanceof Element ? l.getBoundingClientRect() : {
              left: 0,
              top: 0,
              right: window.innerWidth,
              bottom: window.innerHeight
          }) : !1) ? c(p, !1) : c(p, !(l instanceof Element) || Pg(l, p.target))
      }
        , d = p => {
          c(p, !1)
      }
      ;
      l.addEventListener("pointerup", f, i),
      l.addEventListener("pointercancel", d, i),
      l.addEventListener("lostpointercapture", d, i)
  }
  ;
  return r.forEach(a => {
      a = n.useGlobalTarget ? window : a;
      let l = !1;
      a instanceof HTMLElement && (l = !0,
      !rw(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0)),
      a.addEventListener("pointerdown", o, i),
      l && a.addEventListener("focus", u => iw(u, i), i)
  }
  ),
  s
}
function ow(t, e) {
  return t.clientX < e.left || t.clientX > e.right || t.clientY < e.top || t.clientY > e.bottom
}
function aw(t) {
  return t === "x" || t === "y" ? Mt[t] ? null : (Mt[t] = !0,
  () => {
      Mt[t] = !1
  }
  ) : Mt.x || Mt.y ? null : (Mt.x = Mt.y = !0,
  () => {
      Mt.x = Mt.y = !1
  }
  )
}
const Cg = new Set(["width", "height", "top", "left", "right", "bottom", ...yi]);
let Po;
function lw() {
  Po = void 0
}
const Ht = {
  now: () => (Po === void 0 && Ht.set(Ee.isProcessing || i_.useManualTiming ? Ee.timestamp : performance.now()),
  Po),
  set: t => {
      Po = t,
      queueMicrotask(lw)
  }
};
function _f(t, e) {
  t.indexOf(e) === -1 && t.push(e)
}
function wf(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1)
}
class Sf {
  constructor() {
      this.subscriptions = []
  }
  add(e) {
      return _f(this.subscriptions, e),
      () => wf(this.subscriptions, e)
  }
  notify(e, n, r) {
      const i = this.subscriptions.length;
      if (i)
          if (i === 1)
              this.subscriptions[0](e, n, r);
          else
              for (let s = 0; s < i; s++) {
                  const o = this.subscriptions[s];
                  o && o(e, n, r)
              }
  }
  getSize() {
      return this.subscriptions.length
  }
  clear() {
      this.subscriptions.length = 0
  }
}
function Eg(t, e) {
  return e ? t * (1e3 / e) : 0
}
const xh = 30
, uw = t => !isNaN(parseFloat(t));
class cw {
  constructor(e, n={}) {
      this.version = "12.4.7",
      this.canTrackVelocity = null,
      this.events = {},
      this.updateAndNotify = (r, i=!0) => {
          const s = Ht.now();
          this.updatedAt !== s && this.setPrevFrameValue(),
          this.prev = this.current,
          this.setCurrent(r),
          this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
          i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
      }
      ,
      this.hasAnimated = !1,
      this.setCurrent(e),
      this.owner = n.owner
  }
  setCurrent(e) {
      this.current = e,
      this.updatedAt = Ht.now(),
      this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = uw(this.current))
  }
  setPrevFrameValue(e=this.current) {
      this.prevFrameValue = e,
      this.prevUpdatedAt = this.updatedAt
  }
  onChange(e) {
      return this.on("change", e)
  }
  on(e, n) {
      this.events[e] || (this.events[e] = new Sf);
      const r = this.events[e].add(n);
      return e === "change" ? () => {
          r(),
          q.read( () => {
              this.events.change.getSize() || this.stop()
          }
          )
      }
      : r
  }
  clearListeners() {
      for (const e in this.events)
          this.events[e].clear()
  }
  attach(e, n) {
      this.passiveEffect = e,
      this.stopPassiveEffect = n
  }
  set(e, n=!0) {
      !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify)
  }
  setWithVelocity(e, n, r) {
      this.set(n),
      this.prev = void 0,
      this.prevFrameValue = e,
      this.prevUpdatedAt = this.updatedAt - r
  }
  jump(e, n=!0) {
      this.updateAndNotify(e),
      this.prev = e,
      this.prevUpdatedAt = this.prevFrameValue = void 0,
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
  get() {
      return this.current
  }
  getPrevious() {
      return this.prev
  }
  getVelocity() {
      const e = Ht.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > xh)
          return 0;
      const n = Math.min(this.updatedAt - this.prevUpdatedAt, xh);
      return Eg(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
  }
  start(e) {
      return this.stop(),
      new Promise(n => {
          this.hasAnimated = !0,
          this.animation = e(n),
          this.events.animationStart && this.events.animationStart.notify()
      }
      ).then( () => {
          this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation()
      }
      )
  }
  stop() {
      this.animation && (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation()
  }
  isAnimating() {
      return !!this.animation
  }
  clearAnimation() {
      delete this.animation
  }
  destroy() {
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
}
function Ss(t, e) {
  return new cw(t,e)
}
function fw(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Ss(n))
}
function dw(t, e) {
  const n = ws(t, e);
  let {transitionEnd: r={}, transition: i={}, ...s} = n || {};
  s = {
      ...s,
      ...r
  };
  for (const o in s) {
      const a = W_(s[o]);
      fw(t, o, a)
  }
}
function hw(t) {
  return !!(Ve(t) && t.add)
}
function Nu(t, e) {
  const n = t.getValue("willChange");
  if (hw(n))
      return n.add(e)
}
function Mg(t) {
  return t.props[ig]
}
const Ng = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t
, pw = 1e-7
, mw = 12;
function gw(t, e, n, r, i) {
  let s, o, a = 0;
  do
      o = e + (n - e) / 2,
      s = Ng(o, r, i) - t,
      s > 0 ? n = o : e = o;
  while (Math.abs(s) > pw && ++a < mw);
  return o
}
function Is(t, e, n, r) {
  if (t === e && n === r)
      return lt;
  const i = s => gw(s, 0, 1, t, n);
  return s => s === 0 || s === 1 ? s : Ng(i(s), e, r)
}
const Ag = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
, Rg = t => e => 1 - t(1 - e)
, Dg = Is(.33, 1.53, .69, .99)
, Tf = Rg(Dg)
, jg = Ag(Tf)
, Lg = t => (t *= 2) < 1 ? .5 * Tf(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
, kf = t => 1 - Math.sin(Math.acos(t))
, Og = Rg(kf)
, bg = Ag(kf)
, Vg = t => /^0[^.\s]+$/u.test(t);
function yw(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Vg(t) : !0
}
const Xi = t => Math.round(t * 1e5) / 1e5
, Pf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function vw(t) {
  return t == null
}
const xw = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
, Cf = (t, e) => n => !!(typeof n == "string" && xw.test(n) && n.startsWith(t) || e && !vw(n) && Object.prototype.hasOwnProperty.call(n, e))
, Ig = (t, e, n) => r => {
  if (typeof r != "string")
      return r;
  const [i,s,o,a] = r.match(Pf);
  return {
      [t]: parseFloat(i),
      [e]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1
  }
}
, _w = t => ln(0, 255, t)
, hl = {
  ...vi,
  transform: t => Math.round(_w(t))
}
, er = {
  test: Cf("rgb", "red"),
  parse: Ig("red", "green", "blue"),
  transform: ({red: t, green: e, blue: n, alpha: r=1}) => "rgba(" + hl.transform(t) + ", " + hl.transform(e) + ", " + hl.transform(n) + ", " + Xi(_s.transform(r)) + ")"
};
function ww(t) {
  let e = ""
    , n = ""
    , r = ""
    , i = "";
  return t.length > 5 ? (e = t.substring(1, 3),
  n = t.substring(3, 5),
  r = t.substring(5, 7),
  i = t.substring(7, 9)) : (e = t.substring(1, 2),
  n = t.substring(2, 3),
  r = t.substring(3, 4),
  i = t.substring(4, 5),
  e += e,
  n += n,
  r += r,
  i += i),
  {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1
  }
}
const Au = {
  test: Cf("#"),
  parse: ww,
  transform: er.transform
}
, br = {
  test: Cf("hsl", "hue"),
  parse: Ig("hue", "saturation", "lightness"),
  transform: ({hue: t, saturation: e, lightness: n, alpha: r=1}) => "hsla(" + Math.round(t) + ", " + Wt.transform(Xi(e)) + ", " + Wt.transform(Xi(n)) + ", " + Xi(_s.transform(r)) + ")"
}
, je = {
  test: t => er.test(t) || Au.test(t) || br.test(t),
  parse: t => er.test(t) ? er.parse(t) : br.test(t) ? br.parse(t) : Au.parse(t),
  transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? er.transform(t) : br.transform(t)
}
, Sw = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Tw(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(Pf)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Sw)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Fg = "number"
, zg = "color"
, kw = "var"
, Pw = "var("
, _h = "${}"
, Cw = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ts(t) {
  const e = t.toString()
    , n = []
    , r = {
      color: [],
      number: [],
      var: []
  }
    , i = [];
  let s = 0;
  const a = e.replace(Cw, l => (je.test(l) ? (r.color.push(s),
  i.push(zg),
  n.push(je.parse(l))) : l.startsWith(Pw) ? (r.var.push(s),
  i.push(kw),
  n.push(l)) : (r.number.push(s),
  i.push(Fg),
  n.push(parseFloat(l))),
  ++s,
  _h)).split(_h);
  return {
      values: n,
      split: a,
      indexes: r,
      types: i
  }
}
function Bg(t) {
  return Ts(t).values
}
function Ug(t) {
  const {split: e, types: n} = Ts(t)
    , r = e.length;
  return i => {
      let s = "";
      for (let o = 0; o < r; o++)
          if (s += e[o],
          i[o] !== void 0) {
              const a = n[o];
              a === Fg ? s += Xi(i[o]) : a === zg ? s += je.transform(i[o]) : s += i[o]
          }
      return s
  }
}
const Ew = t => typeof t == "number" ? 0 : t;
function Mw(t) {
  const e = Bg(t);
  return Ug(t)(e.map(Ew))
}
const bn = {
  test: Tw,
  parse: Bg,
  createTransformer: Ug,
  getAnimatableNone: Mw
}
, Nw = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Aw(t) {
  const [e,n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
      return t;
  const [r] = n.match(Pf) || [];
  if (!r)
      return t;
  const i = n.replace(r, "");
  let s = Nw.has(e) ? 1 : 0;
  return r !== n && (s *= 100),
  e + "(" + s + i + ")"
}
const Rw = /\b([a-z-]*)\(.*?\)/gu
, Ru = {
  ...bn,
  getAnimatableNone: t => {
      const e = t.match(Rw);
      return e ? e.map(Aw).join(" ") : t
  }
}
, Dw = {
  ...lf,
  color: je,
  backgroundColor: je,
  outlineColor: je,
  fill: je,
  stroke: je,
  borderColor: je,
  borderTopColor: je,
  borderRightColor: je,
  borderBottomColor: je,
  borderLeftColor: je,
  filter: Ru,
  WebkitFilter: Ru
}
, Ef = t => Dw[t];
function $g(t, e) {
  let n = Ef(t);
  return n !== Ru && (n = bn),
  n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const jw = new Set(["auto", "none", "0"]);
function Lw(t, e, n) {
  let r = 0, i;
  for (; r < t.length && !i; ) {
      const s = t[r];
      typeof s == "string" && !jw.has(s) && Ts(s).values.length && (i = t[r]),
      r++
  }
  if (i && n)
      for (const s of e)
          t[s] = $g(n, i)
}
const wh = t => t === vi || t === F
, Sh = (t, e) => parseFloat(t.split(", ")[e])
, Th = (t, e) => (n, {transform: r}) => {
  if (r === "none" || !r)
      return 0;
  const i = r.match(/^matrix3d\((.+)\)$/u);
  if (i)
      return Sh(i[1], e);
  {
      const s = r.match(/^matrix\((.+)\)$/u);
      return s ? Sh(s[1], t) : 0
  }
}
, Ow = new Set(["x", "y", "z"])
, bw = yi.filter(t => !Ow.has(t));
function Vw(t) {
  const e = [];
  return bw.forEach(n => {
      const r = t.getValue(n);
      r !== void 0 && (e.push([n, r.get()]),
      r.set(n.startsWith("scale") ? 1 : 0))
  }
  ),
  e
}
const ai = {
  width: ({x: t}, {paddingLeft: e="0", paddingRight: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({y: t}, {paddingTop: e="0", paddingBottom: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, {top: e}) => parseFloat(e),
  left: (t, {left: e}) => parseFloat(e),
  bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
  right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
  x: Th(4, 13),
  y: Th(5, 14)
};
ai.translateX = ai.x;
ai.translateY = ai.y;
const ir = new Set;
let Du = !1
, ju = !1;
function Wg() {
  if (ju) {
      const t = Array.from(ir).filter(r => r.needsMeasurement)
        , e = new Set(t.map(r => r.element))
        , n = new Map;
      e.forEach(r => {
          const i = Vw(r);
          i.length && (n.set(r, i),
          r.render())
      }
      ),
      t.forEach(r => r.measureInitialState()),
      e.forEach(r => {
          r.render();
          const i = n.get(r);
          i && i.forEach( ([s,o]) => {
              var a;
              (a = r.getValue(s)) === null || a === void 0 || a.set(o)
          }
          )
      }
      ),
      t.forEach(r => r.measureEndState()),
      t.forEach(r => {
          r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
      }
      )
  }
  ju = !1,
  Du = !1,
  ir.forEach(t => t.complete()),
  ir.clear()
}
function Hg() {
  ir.forEach(t => {
      t.readKeyframes(),
      t.needsMeasurement && (ju = !0)
  }
  )
}
function Iw() {
  Hg(),
  Wg()
}
class Mf {
  constructor(e, n, r, i, s, o=!1) {
      this.isComplete = !1,
      this.isAsync = !1,
      this.needsMeasurement = !1,
      this.isScheduled = !1,
      this.unresolvedKeyframes = [...e],
      this.onComplete = n,
      this.name = r,
      this.motionValue = i,
      this.element = s,
      this.isAsync = o
  }
  scheduleResolve() {
      this.isScheduled = !0,
      this.isAsync ? (ir.add(this),
      Du || (Du = !0,
      q.read(Hg),
      q.resolveKeyframes(Wg))) : (this.readKeyframes(),
      this.complete())
  }
  readKeyframes() {
      const {unresolvedKeyframes: e, name: n, element: r, motionValue: i} = this;
      for (let s = 0; s < e.length; s++)
          if (e[s] === null)
              if (s === 0) {
                  const o = i == null ? void 0 : i.get()
                    , a = e[e.length - 1];
                  if (o !== void 0)
                      e[0] = o;
                  else if (r && n) {
                      const l = r.readValue(n, a);
                      l != null && (e[0] = l)
                  }
                  e[0] === void 0 && (e[0] = a),
                  i && o === void 0 && i.set(e[0])
              } else
                  e[s] = e[s - 1]
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
      this.isComplete = !0,
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      ir.delete(this)
  }
  cancel() {
      this.isComplete || (this.isScheduled = !1,
      ir.delete(this))
  }
  resume() {
      this.isComplete || this.scheduleResolve()
  }
}
const Kg = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
, Fw = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function zw(t) {
  const e = Fw.exec(t);
  if (!e)
      return [, ];
  const [,n,r,i] = e;
  return [`--${n ?? r}`, i]
}
function Yg(t, e, n=1) {
  const [r,i] = zw(t);
  if (!r)
      return;
  const s = window.getComputedStyle(e).getPropertyValue(r);
  if (s) {
      const o = s.trim();
      return Kg(o) ? parseFloat(o) : o
  }
  return af(i) ? Yg(i, e, n + 1) : i
}
const Gg = t => e => e.test(t)
, Bw = {
  test: t => t === "auto",
  parse: t => t
}
, Xg = [vi, F, Wt, hn, E_, C_, Bw]
, kh = t => Xg.find(Gg(t));
class Qg extends Mf {
  constructor(e, n, r, i, s) {
      super(e, n, r, i, s, !0)
  }
  readKeyframes() {
      const {unresolvedKeyframes: e, element: n, name: r} = this;
      if (!n || !n.current)
          return;
      super.readKeyframes();
      for (let l = 0; l < e.length; l++) {
          let u = e[l];
          if (typeof u == "string" && (u = u.trim(),
          af(u))) {
              const c = Yg(u, n.current);
              c !== void 0 && (e[l] = c),
              l === e.length - 1 && (this.finalKeyframe = u)
          }
      }
      if (this.resolveNoneKeyframes(),
      !Cg.has(r) || e.length !== 2)
          return;
      const [i,s] = e
        , o = kh(i)
        , a = kh(s);
      if (o !== a)
          if (wh(o) && wh(a))
              for (let l = 0; l < e.length; l++) {
                  const u = e[l];
                  typeof u == "string" && (e[l] = parseFloat(u))
              }
          else
              this.needsMeasurement = !0
  }
  resolveNoneKeyframes() {
      const {unresolvedKeyframes: e, name: n} = this
        , r = [];
      for (let i = 0; i < e.length; i++)
          yw(e[i]) && r.push(i);
      r.length && Lw(e, r, n)
  }
  measureInitialState() {
      const {element: e, unresolvedKeyframes: n, name: r} = this;
      if (!e || !e.current)
          return;
      r === "height" && (this.suspendedScrollY = window.pageYOffset),
      this.measuredOrigin = ai[r](e.measureViewportBox(), window.getComputedStyle(e.current)),
      n[0] = this.measuredOrigin;
      const i = n[n.length - 1];
      i !== void 0 && e.getValue(r, i).jump(i, !1)
  }
  measureEndState() {
      var e;
      const {element: n, name: r, unresolvedKeyframes: i} = this;
      if (!n || !n.current)
          return;
      const s = n.getValue(r);
      s && s.jump(this.measuredOrigin, !1);
      const o = i.length - 1
        , a = i[o];
      i[o] = ai[r](n.measureViewportBox(), window.getComputedStyle(n.current)),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach( ([l,u]) => {
          n.getValue(l).set(u)
      }
      ),
      this.resolveNoneKeyframes()
  }
}
const Ph = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (bn.test(t) || t === "0") && !t.startsWith("url("));
function Uw(t) {
  const e = t[0];
  if (t.length === 1)
      return !0;
  for (let n = 0; n < t.length; n++)
      if (t[n] !== e)
          return !0
}
function $w(t, e, n, r) {
  const i = t[0];
  if (i === null)
      return !1;
  if (e === "display" || e === "visibility")
      return !0;
  const s = t[t.length - 1]
    , o = Ph(i, e)
    , a = Ph(s, e);
  return !o || !a ? !1 : Uw(t) || (n === "spring" || yf(n)) && r
}
const Ww = t => t !== null;
function Oa(t, {repeat: e, repeatType: n="loop"}, r) {
  const i = t.filter(Ww)
    , s = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r
}
const Hw = 40;
class Zg {
  constructor({autoplay: e=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: s=0, repeatType: o="loop", ...a}) {
      this.isStopped = !1,
      this.hasAttemptedResolve = !1,
      this.createdAt = Ht.now(),
      this.options = {
          autoplay: e,
          delay: n,
          type: r,
          repeat: i,
          repeatDelay: s,
          repeatType: o,
          ...a
      },
      this.updateFinishedPromise()
  }
  calcStartTime() {
      return this.resolvedAt ? this.resolvedAt - this.createdAt > Hw ? this.resolvedAt : this.createdAt : this.createdAt
  }
  get resolved() {
      return !this._resolved && !this.hasAttemptedResolve && Iw(),
      this._resolved
  }
  onKeyframesResolved(e, n) {
      this.resolvedAt = Ht.now(),
      this.hasAttemptedResolve = !0;
      const {name: r, type: i, velocity: s, delay: o, onComplete: a, onUpdate: l, isGenerator: u} = this.options;
      if (!u && !$w(e, r, i, s))
          if (o)
              this.options.duration = 0;
          else {
              l && l(Oa(e, this.options, n)),
              a && a(),
              this.resolveFinishedPromise();
              return
          }
      const c = this.initPlayback(e, n);
      c !== !1 && (this._resolved = {
          keyframes: e,
          finalKeyframe: n,
          ...c
      },
      this.onPostResolved())
  }
  onPostResolved() {}
  then(e, n) {
      return this.currentFinishedPromise.then(e, n)
  }
  flatten() {
      this.options.type = "keyframes",
      this.options.ease = "linear"
  }
  updateFinishedPromise() {
      this.currentFinishedPromise = new Promise(e => {
          this.resolveFinishedPromise = e
      }
      )
  }
}
const se = (t, e, n) => t + (e - t) * n;
function pl(t, e, n) {
  return n < 0 && (n += 1),
  n > 1 && (n -= 1),
  n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}
function Kw({hue: t, saturation: e, lightness: n, alpha: r}) {
  t /= 360,
  e /= 100,
  n /= 100;
  let i = 0
    , s = 0
    , o = 0;
  if (!e)
      i = s = o = n;
  else {
      const a = n < .5 ? n * (1 + e) : n + e - n * e
        , l = 2 * n - a;
      i = pl(l, a, t + 1 / 3),
      s = pl(l, a, t),
      o = pl(l, a, t - 1 / 3)
  }
  return {
      red: Math.round(i * 255),
      green: Math.round(s * 255),
      blue: Math.round(o * 255),
      alpha: r
  }
}
function ra(t, e) {
  return n => n > 0 ? e : t
}
const ml = (t, e, n) => {
  const r = t * t
    , i = n * (e * e - r) + r;
  return i < 0 ? 0 : Math.sqrt(i)
}
, Yw = [Au, er, br]
, Gw = t => Yw.find(e => e.test(t));
function Ch(t) {
  const e = Gw(t);
  if (!e)
      return !1;
  let n = e.parse(t);
  return e === br && (n = Kw(n)),
  n
}
const Eh = (t, e) => {
  const n = Ch(t)
    , r = Ch(e);
  if (!n || !r)
      return ra(t, e);
  const i = {
      ...n
  };
  return s => (i.red = ml(n.red, r.red, s),
  i.green = ml(n.green, r.green, s),
  i.blue = ml(n.blue, r.blue, s),
  i.alpha = se(n.alpha, r.alpha, s),
  er.transform(i))
}
, Xw = (t, e) => n => e(t(n))
, Fs = (...t) => t.reduce(Xw)
, Lu = new Set(["none", "hidden"]);
function Qw(t, e) {
  return Lu.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
}
function Zw(t, e) {
  return n => se(t, e, n)
}
function Nf(t) {
  return typeof t == "number" ? Zw : typeof t == "string" ? af(t) ? ra : je.test(t) ? Eh : eS : Array.isArray(t) ? qg : typeof t == "object" ? je.test(t) ? Eh : qw : ra
}
function qg(t, e) {
  const n = [...t]
    , r = n.length
    , i = t.map( (s, o) => Nf(s)(s, e[o]));
  return s => {
      for (let o = 0; o < r; o++)
          n[o] = i[o](s);
      return n
  }
}
function qw(t, e) {
  const n = {
      ...t,
      ...e
  }
    , r = {};
  for (const i in n)
      t[i] !== void 0 && e[i] !== void 0 && (r[i] = Nf(t[i])(t[i], e[i]));
  return i => {
      for (const s in r)
          n[s] = r[s](i);
      return n
  }
}
function Jw(t, e) {
  var n;
  const r = []
    , i = {
      color: 0,
      var: 0,
      number: 0
  };
  for (let s = 0; s < e.values.length; s++) {
      const o = e.types[s]
        , a = t.indexes[o][i[o]]
        , l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
      r[s] = l,
      i[o]++
  }
  return r
}
const eS = (t, e) => {
  const n = bn.createTransformer(e)
    , r = Ts(t)
    , i = Ts(e);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Lu.has(t) && !i.values.length || Lu.has(e) && !r.values.length ? Qw(t, e) : Fs(qg(Jw(r, i), i.values), n) : ra(t, e)
}
;
function Jg(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? se(t, e, n) : Nf(t)(t, e)
}
const tS = 5;
function ey(t, e, n) {
  const r = Math.max(e - tS, 0);
  return Eg(n - t(r), e - r)
}
const ue = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: .3,
  visualDuration: .3,
  restSpeed: {
      granular: .01,
      default: 2
  },
  restDelta: {
      granular: .005,
      default: .5
  },
  minDuration: .01,
  maxDuration: 10,
  minDamping: .05,
  maxDamping: 1
}
, gl = .001;
function nS({duration: t=ue.duration, bounce: e=ue.bounce, velocity: n=ue.velocity, mass: r=ue.mass}) {
  let i, s, o = 1 - e;
  o = ln(ue.minDamping, ue.maxDamping, o),
  t = ln(ue.minDuration, ue.maxDuration, nn(t)),
  o < 1 ? (i = u => {
      const c = u * o
        , f = c * t
        , d = c - n
        , p = Ou(u, o)
        , v = Math.exp(-f);
      return gl - d / p * v
  }
  ,
  s = u => {
      const f = u * o * t
        , d = f * n + n
        , p = Math.pow(o, 2) * Math.pow(u, 2) * t
        , v = Math.exp(-f)
        , h = Ou(Math.pow(u, 2), o);
      return (-i(u) + gl > 0 ? -1 : 1) * ((d - p) * v) / h
  }
  ) : (i = u => {
      const c = Math.exp(-u * t)
        , f = (u - n) * t + 1;
      return -gl + c * f
  }
  ,
  s = u => {
      const c = Math.exp(-u * t)
        , f = (n - u) * (t * t);
      return c * f
  }
  );
  const a = 5 / t
    , l = iS(i, s, a);
  if (t = tn(t),
  isNaN(l))
      return {
          stiffness: ue.stiffness,
          damping: ue.damping,
          duration: t
      };
  {
      const u = Math.pow(l, 2) * r;
      return {
          stiffness: u,
          damping: o * 2 * Math.sqrt(r * u),
          duration: t
      }
  }
}
const rS = 12;
function iS(t, e, n) {
  let r = n;
  for (let i = 1; i < rS; i++)
      r = r - t(r) / e(r);
  return r
}
function Ou(t, e) {
  return t * Math.sqrt(1 - e * e)
}
const sS = ["duration", "bounce"]
, oS = ["stiffness", "damping", "mass"];
function Mh(t, e) {
  return e.some(n => t[n] !== void 0)
}
function aS(t) {
  let e = {
      velocity: ue.velocity,
      stiffness: ue.stiffness,
      damping: ue.damping,
      mass: ue.mass,
      isResolvedFromDuration: !1,
      ...t
  };
  if (!Mh(t, oS) && Mh(t, sS))
      if (t.visualDuration) {
          const n = t.visualDuration
            , r = 2 * Math.PI / (n * 1.2)
            , i = r * r
            , s = 2 * ln(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
          e = {
              ...e,
              mass: ue.mass,
              stiffness: i,
              damping: s
          }
      } else {
          const n = nS(t);
          e = {
              ...e,
              ...n,
              mass: ue.mass
          },
          e.isResolvedFromDuration = !0
      }
  return e
}
function ty(t=ue.visualDuration, e=ue.bounce) {
  const n = typeof t != "object" ? {
      visualDuration: t,
      keyframes: [0, 1],
      bounce: e
  } : t;
  let {restSpeed: r, restDelta: i} = n;
  const s = n.keyframes[0]
    , o = n.keyframes[n.keyframes.length - 1]
    , a = {
      done: !1,
      value: s
  }
    , {stiffness: l, damping: u, mass: c, duration: f, velocity: d, isResolvedFromDuration: p} = aS({
      ...n,
      velocity: -nn(n.velocity || 0)
  })
    , v = d || 0
    , h = u / (2 * Math.sqrt(l * c))
    , x = o - s
    , g = nn(Math.sqrt(l / c))
    , m = Math.abs(x) < 5;
  r || (r = m ? ue.restSpeed.granular : ue.restSpeed.default),
  i || (i = m ? ue.restDelta.granular : ue.restDelta.default);
  let y;
  if (h < 1) {
      const w = Ou(g, h);
      y = T => {
          const C = Math.exp(-h * g * T);
          return o - C * ((v + h * g * x) / w * Math.sin(w * T) + x * Math.cos(w * T))
      }
  } else if (h === 1)
      y = w => o - Math.exp(-g * w) * (x + (v + g * x) * w);
  else {
      const w = g * Math.sqrt(h * h - 1);
      y = T => {
          const C = Math.exp(-h * g * T)
            , k = Math.min(w * T, 300);
          return o - C * ((v + h * g * x) * Math.sinh(k) + w * x * Math.cosh(k)) / w
      }
  }
  const S = {
      calculatedDuration: p && f || null,
      next: w => {
          const T = y(w);
          if (p)
              a.done = w >= f;
          else {
              let C = 0;
              h < 1 && (C = w === 0 ? tn(v) : ey(y, w, T));
              const k = Math.abs(C) <= r
                , P = Math.abs(o - T) <= i;
              a.done = k && P
          }
          return a.value = a.done ? o : T,
          a
      }
      ,
      toString: () => {
          const w = Math.min(vg(S), Eu)
            , T = xg(C => S.next(w * C).value, w, 30);
          return w + "ms " + T
      }
  };
  return S
}
function Nh({keyframes: t, velocity: e=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: c}) {
  const f = t[0]
    , d = {
      done: !1,
      value: f
  }
    , p = k => a !== void 0 && k < a || l !== void 0 && k > l
    , v = k => a === void 0 ? l : l === void 0 || Math.abs(a - k) < Math.abs(l - k) ? a : l;
  let h = n * e;
  const x = f + h
    , g = o === void 0 ? x : o(x);
  g !== x && (h = g - f);
  const m = k => -h * Math.exp(-k / r)
    , y = k => g + m(k)
    , S = k => {
      const P = m(k)
        , E = y(k);
      d.done = Math.abs(P) <= u,
      d.value = d.done ? g : E
  }
  ;
  let w, T;
  const C = k => {
      p(d.value) && (w = k,
      T = ty({
          keyframes: [d.value, v(d.value)],
          velocity: ey(y, k, d.value),
          damping: i,
          stiffness: s,
          restDelta: u,
          restSpeed: c
      }))
  }
  ;
  return C(0),
  {
      calculatedDuration: null,
      next: k => {
          let P = !1;
          return !T && w === void 0 && (P = !0,
          S(k),
          C(k)),
          w !== void 0 && k >= w ? T.next(k - w) : (!P && S(k),
          d)
      }
  }
}
const lS = Is(.42, 0, 1, 1)
, uS = Is(0, 0, .58, 1)
, ny = Is(.42, 0, .58, 1)
, cS = t => Array.isArray(t) && typeof t[0] != "number"
, Ah = {
  linear: lt,
  easeIn: lS,
  easeInOut: ny,
  easeOut: uS,
  circIn: kf,
  circInOut: bg,
  circOut: Og,
  backIn: Tf,
  backInOut: jg,
  backOut: Dg,
  anticipate: Lg
}
, Rh = t => {
  if (vf(t)) {
      Pu(t.length === 4);
      const [e,n,r,i] = t;
      return Is(e, n, r, i)
  } else if (typeof t == "string")
      return Pu(Ah[t] !== void 0),
      Ah[t];
  return t
}
;
function fS(t, e, n) {
  const r = []
    , i = n || Jg
    , s = t.length - 1;
  for (let o = 0; o < s; o++) {
      let a = i(t[o], t[o + 1]);
      if (e) {
          const l = Array.isArray(e) ? e[o] || lt : e;
          a = Fs(l, a)
      }
      r.push(a)
  }
  return r
}
function dS(t, e, {clamp: n=!0, ease: r, mixer: i}={}) {
  const s = t.length;
  if (Pu(s === e.length),
  s === 1)
      return () => e[0];
  if (s === 2 && e[0] === e[1])
      return () => e[1];
  const o = t[0] === t[1];
  t[0] > t[s - 1] && (t = [...t].reverse(),
  e = [...e].reverse());
  const a = fS(e, r, i)
    , l = a.length
    , u = c => {
      if (o && c < t[0])
          return e[0];
      let f = 0;
      if (l > 1)
          for (; f < t.length - 2 && !(c < t[f + 1]); f++)
              ;
      const d = si(t[f], t[f + 1], c);
      return a[f](d)
  }
  ;
  return n ? c => u(ln(t[0], t[s - 1], c)) : u
}
function hS(t, e) {
  const n = t[t.length - 1];
  for (let r = 1; r <= e; r++) {
      const i = si(0, e, r);
      t.push(se(n, 1, i))
  }
}
function pS(t) {
  const e = [0];
  return hS(e, t.length - 1),
  e
}
function mS(t, e) {
  return t.map(n => n * e)
}
function gS(t, e) {
  return t.map( () => e || ny).splice(0, t.length - 1)
}
function ia({duration: t=300, keyframes: e, times: n, ease: r="easeInOut"}) {
  const i = cS(r) ? r.map(Rh) : Rh(r)
    , s = {
      done: !1,
      value: e[0]
  }
    , o = mS(n && n.length === e.length ? n : pS(e), t)
    , a = dS(o, e, {
      ease: Array.isArray(i) ? i : gS(e, i)
  });
  return {
      calculatedDuration: t,
      next: l => (s.value = a(l),
      s.done = l >= t,
      s)
  }
}
const yS = t => {
  const e = ({timestamp: n}) => t(n);
  return {
      start: () => q.update(e, !0),
      stop: () => On(e),
      now: () => Ee.isProcessing ? Ee.timestamp : Ht.now()
  }
}
, vS = {
  decay: Nh,
  inertia: Nh,
  tween: ia,
  keyframes: ia,
  spring: ty
}
, xS = t => t / 100;
class Af extends Zg {
  constructor(e) {
      super(e),
      this.holdTime = null,
      this.cancelTime = null,
      this.currentTime = 0,
      this.playbackSpeed = 1,
      this.pendingPlayState = "running",
      this.startTime = null,
      this.state = "idle",
      this.stop = () => {
          if (this.resolver.cancel(),
          this.isStopped = !0,
          this.state === "idle")
              return;
          this.teardown();
          const {onStop: l} = this.options;
          l && l()
      }
      ;
      const {name: n, motionValue: r, element: i, keyframes: s} = this.options
        , o = (i == null ? void 0 : i.KeyframeResolver) || Mf
        , a = (l, u) => this.onKeyframesResolved(l, u);
      this.resolver = new o(s,a,n,r,i),
      this.resolver.scheduleResolve()
  }
  flatten() {
      super.flatten(),
      this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
  }
  initPlayback(e) {
      const {type: n="keyframes", repeat: r=0, repeatDelay: i=0, repeatType: s, velocity: o=0} = this.options
        , a = yf(n) ? n : vS[n] || ia;
      let l, u;
      a !== ia && typeof e[0] != "number" && (l = Fs(xS, Jg(e[0], e[1])),
      e = [0, 100]);
      const c = a({
          ...this.options,
          keyframes: e
      });
      s === "mirror" && (u = a({
          ...this.options,
          keyframes: [...e].reverse(),
          velocity: -o
      })),
      c.calculatedDuration === null && (c.calculatedDuration = vg(c));
      const {calculatedDuration: f} = c
        , d = f + i
        , p = d * (r + 1) - i;
      return {
          generator: c,
          mirroredGenerator: u,
          mapPercentToKeyframes: l,
          calculatedDuration: f,
          resolvedDuration: d,
          totalDuration: p
      }
  }
  onPostResolved() {
      const {autoplay: e=!0} = this.options;
      this.play(),
      this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
  }
  tick(e, n=!1) {
      const {resolved: r} = this;
      if (!r) {
          const {keyframes: k} = this.options;
          return {
              done: !0,
              value: k[k.length - 1]
          }
      }
      const {finalKeyframe: i, generator: s, mirroredGenerator: o, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: u, totalDuration: c, resolvedDuration: f} = r;
      if (this.startTime === null)
          return s.next(0);
      const {delay: d, repeat: p, repeatType: v, repeatDelay: h, onUpdate: x} = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)),
      n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
      const g = this.currentTime - d * (this.speed >= 0 ? 1 : -1)
        , m = this.speed >= 0 ? g < 0 : g > c;
      this.currentTime = Math.max(g, 0),
      this.state === "finished" && this.holdTime === null && (this.currentTime = c);
      let y = this.currentTime
        , S = s;
      if (p) {
          const k = Math.min(this.currentTime, c) / f;
          let P = Math.floor(k)
            , E = k % 1;
          !E && k >= 1 && (E = 1),
          E === 1 && P--,
          P = Math.min(P, p + 1),
          !!(P % 2) && (v === "reverse" ? (E = 1 - E,
          h && (E -= h / f)) : v === "mirror" && (S = o)),
          y = ln(0, 1, E) * f
      }
      const w = m ? {
          done: !1,
          value: l[0]
      } : S.next(y);
      a && (w.value = a(w.value));
      let {done: T} = w;
      !m && u !== null && (T = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
      const C = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
      return C && i !== void 0 && (w.value = Oa(l, this.options, i)),
      x && x(w.value),
      C && this.finish(),
      w
  }
  get duration() {
      const {resolved: e} = this;
      return e ? nn(e.calculatedDuration) : 0
  }
  get time() {
      return nn(this.currentTime)
  }
  set time(e) {
      e = tn(e),
      this.currentTime = e,
      this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
  }
  get speed() {
      return this.playbackSpeed
  }
  set speed(e) {
      const n = this.playbackSpeed !== e;
      this.playbackSpeed = e,
      n && (this.time = nn(this.currentTime))
  }
  play() {
      if (this.resolver.isScheduled || this.resolver.resume(),
      !this._resolved) {
          this.pendingPlayState = "running";
          return
      }
      if (this.isStopped)
          return;
      const {driver: e=yS, onPlay: n, startTime: r} = this.options;
      this.driver || (this.driver = e(s => this.tick(s))),
      n && n();
      const i = this.driver.now();
      this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(),
      this.state === "finished" && this.updateFinishedPromise(),
      this.cancelTime = this.startTime,
      this.holdTime = null,
      this.state = "running",
      this.driver.start()
  }
  pause() {
      var e;
      if (!this._resolved) {
          this.pendingPlayState = "paused";
          return
      }
      this.state = "paused",
      this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
  }
  complete() {
      this.state !== "running" && this.play(),
      this.pendingPlayState = this.state = "finished",
      this.holdTime = null
  }
  finish() {
      this.teardown(),
      this.state = "finished";
      const {onComplete: e} = this.options;
      e && e()
  }
  cancel() {
      this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise()
  }
  teardown() {
      this.state = "idle",
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      this.startTime = this.cancelTime = null,
      this.resolver.cancel()
  }
  stopDriver() {
      this.driver && (this.driver.stop(),
      this.driver = void 0)
  }
  sample(e) {
      return this.startTime = 0,
      this.tick(e, !0)
  }
}
const _S = new Set(["opacity", "clipPath", "filter", "transform"]);
function wS(t, e, n, {delay: r=0, duration: i=300, repeat: s=0, repeatType: o="loop", ease: a="easeInOut", times: l}={}) {
  const u = {
      [e]: n
  };
  l && (u.offset = l);
  const c = wg(a, i);
  return Array.isArray(c) && (u.easing = c),
  t.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal"
  })
}
const SS = ef( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
, sa = 10
, TS = 2e4;
function kS(t) {
  return yf(t.type) || t.type === "spring" || !_g(t.ease)
}
function PS(t, e) {
  const n = new Af({
      ...e,
      keyframes: t,
      repeat: 0,
      delay: 0,
      isGenerator: !0
  });
  let r = {
      done: !1,
      value: t[0]
  };
  const i = [];
  let s = 0;
  for (; !r.done && s < TS; )
      r = n.sample(s),
      i.push(r.value),
      s += sa;
  return {
      times: void 0,
      keyframes: i,
      duration: s - sa,
      ease: "linear"
  }
}
const ry = {
  anticipate: Lg,
  backInOut: jg,
  circInOut: bg
};
function CS(t) {
  return t in ry
}
class Dh extends Zg {
  constructor(e) {
      super(e);
      const {name: n, motionValue: r, element: i, keyframes: s} = this.options;
      this.resolver = new Qg(s, (o, a) => this.onKeyframesResolved(o, a),n,r,i),
      this.resolver.scheduleResolve()
  }
  initPlayback(e, n) {
      let {duration: r=300, times: i, ease: s, type: o, motionValue: a, name: l, startTime: u} = this.options;
      if (!a.owner || !a.owner.current)
          return !1;
      if (typeof s == "string" && ta() && CS(s) && (s = ry[s]),
      kS(this.options)) {
          const {onComplete: f, onUpdate: d, motionValue: p, element: v, ...h} = this.options
            , x = PS(e, h);
          e = x.keyframes,
          e.length === 1 && (e[1] = e[0]),
          r = x.duration,
          i = x.times,
          s = x.ease,
          o = "keyframes"
      }
      const c = wS(a.owner.current, l, e, {
          ...this.options,
          duration: r,
          times: i,
          ease: s
      });
      return c.startTime = u ?? this.calcStartTime(),
      this.pendingTimeline ? (mh(c, this.pendingTimeline),
      this.pendingTimeline = void 0) : c.onfinish = () => {
          const {onComplete: f} = this.options;
          a.set(Oa(e, this.options, n)),
          f && f(),
          this.cancel(),
          this.resolveFinishedPromise()
      }
      ,
      {
          animation: c,
          duration: r,
          times: i,
          type: o,
          ease: s,
          keyframes: e
      }
  }
  get duration() {
      const {resolved: e} = this;
      if (!e)
          return 0;
      const {duration: n} = e;
      return nn(n)
  }
  get time() {
      const {resolved: e} = this;
      if (!e)
          return 0;
      const {animation: n} = e;
      return nn(n.currentTime || 0)
  }
  set time(e) {
      const {resolved: n} = this;
      if (!n)
          return;
      const {animation: r} = n;
      r.currentTime = tn(e)
  }
  get speed() {
      const {resolved: e} = this;
      if (!e)
          return 1;
      const {animation: n} = e;
      return n.playbackRate
  }
  set speed(e) {
      const {resolved: n} = this;
      if (!n)
          return;
      const {animation: r} = n;
      r.playbackRate = e
  }
  get state() {
      const {resolved: e} = this;
      if (!e)
          return "idle";
      const {animation: n} = e;
      return n.playState
  }
  get startTime() {
      const {resolved: e} = this;
      if (!e)
          return null;
      const {animation: n} = e;
      return n.startTime
  }
  attachTimeline(e) {
      if (!this._resolved)
          this.pendingTimeline = e;
      else {
          const {resolved: n} = this;
          if (!n)
              return lt;
          const {animation: r} = n;
          mh(r, e)
      }
      return lt
  }
  play() {
      if (this.isStopped)
          return;
      const {resolved: e} = this;
      if (!e)
          return;
      const {animation: n} = e;
      n.playState === "finished" && this.updateFinishedPromise(),
      n.play()
  }
  pause() {
      const {resolved: e} = this;
      if (!e)
          return;
      const {animation: n} = e;
      n.pause()
  }
  stop() {
      if (this.resolver.cancel(),
      this.isStopped = !0,
      this.state === "idle")
          return;
      this.resolveFinishedPromise(),
      this.updateFinishedPromise();
      const {resolved: e} = this;
      if (!e)
          return;
      const {animation: n, keyframes: r, duration: i, type: s, ease: o, times: a} = e;
      if (n.playState === "idle" || n.playState === "finished")
          return;
      if (this.time) {
          const {motionValue: u, onUpdate: c, onComplete: f, element: d, ...p} = this.options
            , v = new Af({
              ...p,
              keyframes: r,
              duration: i,
              type: s,
              ease: o,
              times: a,
              isGenerator: !0
          })
            , h = tn(this.time);
          u.setWithVelocity(v.sample(h - sa).value, v.sample(h).value, sa)
      }
      const {onStop: l} = this.options;
      l && l(),
      this.cancel()
  }
  complete() {
      const {resolved: e} = this;
      e && e.animation.finish()
  }
  cancel() {
      const {resolved: e} = this;
      e && e.animation.cancel()
  }
  static supports(e) {
      const {motionValue: n, name: r, repeatDelay: i, repeatType: s, damping: o, type: a} = e;
      if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
          return !1;
      const {onUpdate: l, transformTemplate: u} = n.owner.getProps();
      return SS() && r && _S.has(r) && !l && !u && !i && s !== "mirror" && o !== 0 && a !== "inertia"
  }
}
const ES = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}
, MS = t => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
})
, NS = {
  type: "keyframes",
  duration: .8
}
, AS = {
  type: "keyframes",
  ease: [.25, .1, .35, 1],
  duration: .3
}
, RS = (t, {keyframes: e}) => e.length > 2 ? NS : yr.has(t) ? t.startsWith("scale") ? MS(e[1]) : ES : AS;
function DS({when: t, delay: e, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...c}) {
  return !!Object.keys(c).length
}
const Rf = (t, e, n, r={}, i, s) => o => {
  const a = gf(r, t) || {}
    , l = a.delay || r.delay || 0;
  let {elapsed: u=0} = r;
  u = u - tn(l);
  let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: e.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: d => {
          e.set(d),
          a.onUpdate && a.onUpdate(d)
      }
      ,
      onComplete: () => {
          o(),
          a.onComplete && a.onComplete()
      }
      ,
      name: t,
      motionValue: e,
      element: s ? void 0 : i
  };
  DS(a) || (c = {
      ...c,
      ...RS(t, c)
  }),
  c.duration && (c.duration = tn(c.duration)),
  c.repeatDelay && (c.repeatDelay = tn(c.repeatDelay)),
  c.from !== void 0 && (c.keyframes[0] = c.from);
  let f = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0,
  c.delay === 0 && (f = !0)),
  f && !s && e.get() !== void 0) {
      const d = Oa(c.keyframes, a);
      if (d !== void 0)
          return q.update( () => {
              c.onUpdate(d),
              c.onComplete()
          }
          ),
          new q_([])
  }
  return !s && Dh.supports(c) ? new Dh(c) : new Af(c)
}
;
function jS({protectedKeys: t, needsAnimating: e}, n) {
  const r = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1,
  r
}
function iy(t, e, {delay: n=0, transitionOverride: r, type: i}={}) {
  var s;
  let {transition: o=t.getDefaultTransition(), transitionEnd: a, ...l} = e;
  r && (o = r);
  const u = []
    , c = i && t.animationState && t.animationState.getState()[i];
  for (const f in l) {
      const d = t.getValue(f, (s = t.latestValues[f]) !== null && s !== void 0 ? s : null)
        , p = l[f];
      if (p === void 0 || c && jS(c, f))
          continue;
      const v = {
          delay: n,
          ...gf(o || {}, f)
      };
      let h = !1;
      if (window.MotionHandoffAnimation) {
          const g = Mg(t);
          if (g) {
              const m = window.MotionHandoffAnimation(g, f, q);
              m !== null && (v.startTime = m,
              h = !0)
          }
      }
      Nu(t, f),
      d.start(Rf(f, d, p, t.shouldReduceMotion && Cg.has(f) ? {
          type: !1
      } : v, t, h));
      const x = d.animation;
      x && u.push(x)
  }
  return a && Promise.all(u).then( () => {
      q.update( () => {
          a && dw(t, a)
      }
      )
  }
  ),
  u
}
function bu(t, e, n={}) {
  var r;
  const i = ws(t, e, n.type === "exit" ? (r = t.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let {transition: s=t.getDefaultTransition() || {}} = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(iy(t, i, n)) : () => Promise.resolve()
    , a = t.variantChildren && t.variantChildren.size ? (u=0) => {
      const {delayChildren: c=0, staggerChildren: f, staggerDirection: d} = s;
      return LS(t, e, c + u, f, d, n)
  }
  : () => Promise.resolve()
    , {when: l} = s;
  if (l) {
      const [u,c] = l === "beforeChildren" ? [o, a] : [a, o];
      return u().then( () => c())
  } else
      return Promise.all([o(), a(n.delay)])
}
function LS(t, e, n=0, r=0, i=1, s) {
  const o = []
    , a = (t.variantChildren.size - 1) * r
    , l = i === 1 ? (u=0) => u * r : (u=0) => a - u * r;
  return Array.from(t.variantChildren).sort(OS).forEach( (u, c) => {
      u.notify("AnimationStart", e),
      o.push(bu(u, e, {
          ...s,
          delay: n + l(c)
      }).then( () => u.notify("AnimationComplete", e)))
  }
  ),
  Promise.all(o)
}
function OS(t, e) {
  return t.sortNodePosition(e)
}
function bS(t, e, n={}) {
  t.notify("AnimationStart", e);
  let r;
  if (Array.isArray(e)) {
      const i = e.map(s => bu(t, s, n));
      r = Promise.all(i)
  } else if (typeof e == "string")
      r = bu(t, e, n);
  else {
      const i = typeof e == "function" ? ws(t, e, n.custom) : e;
      r = Promise.all(iy(t, i, n))
  }
  return r.then( () => {
      t.notify("AnimationComplete", e)
  }
  )
}
function sy(t, e) {
  if (!Array.isArray(e))
      return !1;
  const n = e.length;
  if (n !== t.length)
      return !1;
  for (let r = 0; r < n; r++)
      if (e[r] !== t[r])
          return !1;
  return !0
}
const VS = nf.length;
function oy(t) {
  if (!t)
      return;
  if (!t.isControllingVariants) {
      const n = t.parent ? oy(t.parent) || {} : {};
      return t.props.initial !== void 0 && (n.initial = t.props.initial),
      n
  }
  const e = {};
  for (let n = 0; n < VS; n++) {
      const r = nf[n]
        , i = t.props[r];
      (vs(i) || i === !1) && (e[r] = i)
  }
  return e
}
const IS = [...tf].reverse()
, FS = tf.length;
function zS(t) {
  return e => Promise.all(e.map( ({animation: n, options: r}) => bS(t, n, r)))
}
function BS(t) {
  let e = zS(t)
    , n = jh()
    , r = !0;
  const i = l => (u, c) => {
      var f;
      const d = ws(t, c, l === "exit" ? (f = t.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
      if (d) {
          const {transition: p, transitionEnd: v, ...h} = d;
          u = {
              ...u,
              ...h,
              ...v
          }
      }
      return u
  }
  ;
  function s(l) {
      e = l(t)
  }
  function o(l) {
      const {props: u} = t
        , c = oy(t.parent) || {}
        , f = []
        , d = new Set;
      let p = {}
        , v = 1 / 0;
      for (let x = 0; x < FS; x++) {
          const g = IS[x]
            , m = n[g]
            , y = u[g] !== void 0 ? u[g] : c[g]
            , S = vs(y)
            , w = g === l ? m.isActive : null;
          w === !1 && (v = x);
          let T = y === c[g] && y !== u[g] && S;
          if (T && r && t.manuallyAnimateOnMount && (T = !1),
          m.protectedKeys = {
              ...p
          },
          !m.isActive && w === null || !y && !m.prevProp || ja(y) || typeof y == "boolean")
              continue;
          const C = US(m.prevProp, y);
          let k = C || g === l && m.isActive && !T && S || x > v && S
            , P = !1;
          const E = Array.isArray(y) ? y : [y];
          let O = E.reduce(i(g), {});
          w === !1 && (O = {});
          const {prevResolvedValues: V={}} = m
            , I = {
              ...V,
              ...O
          }
            , z = B => {
              k = !0,
              d.has(B) && (P = !0,
              d.delete(B)),
              m.needsAnimating[B] = !0;
              const D = t.getValue(B);
              D && (D.liveStyle = !1)
          }
          ;
          for (const B in I) {
              const D = O[B]
                , R = V[B];
              if (p.hasOwnProperty(B))
                  continue;
              let N = !1;
              Cu(D) && Cu(R) ? N = !sy(D, R) : N = D !== R,
              N ? D != null ? z(B) : d.add(B) : D !== void 0 && d.has(B) ? z(B) : m.protectedKeys[B] = !0
          }
          m.prevProp = y,
          m.prevResolvedValues = O,
          m.isActive && (p = {
              ...p,
              ...O
          }),
          r && t.blockInitialAnimation && (k = !1),
          k && (!(T && C) || P) && f.push(...E.map(B => ({
              animation: B,
              options: {
                  type: g
              }
          })))
      }
      if (d.size) {
          const x = {};
          if (typeof u.initial != "boolean") {
              const g = ws(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
              g && g.transition && (x.transition = g.transition)
          }
          d.forEach(g => {
              const m = t.getBaseTarget(g)
                , y = t.getValue(g);
              y && (y.liveStyle = !0),
              x[g] = m ?? null
          }
          ),
          f.push({
              animation: x
          })
      }
      let h = !!f.length;
      return r && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (h = !1),
      r = !1,
      h ? e(f) : Promise.resolve()
  }
  function a(l, u) {
      var c;
      if (n[l].isActive === u)
          return Promise.resolve();
      (c = t.variantChildren) === null || c === void 0 || c.forEach(d => {
          var p;
          return (p = d.animationState) === null || p === void 0 ? void 0 : p.setActive(l, u)
      }
      ),
      n[l].isActive = u;
      const f = o(l);
      for (const d in n)
          n[d].protectedKeys = {};
      return f
  }
  return {
      animateChanges: o,
      setActive: a,
      setAnimateFunction: s,
      getState: () => n,
      reset: () => {
          n = jh(),
          r = !0
      }
  }
}
function US(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !sy(e, t) : !1
}
function Wn(t=!1) {
  return {
      isActive: t,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
  }
}
function jh() {
  return {
      animate: Wn(!0),
      whileInView: Wn(),
      whileHover: Wn(),
      whileTap: Wn(),
      whileDrag: Wn(),
      whileFocus: Wn(),
      exit: Wn()
  }
}
class Un {
  constructor(e) {
      this.isMounted = !1,
      this.node = e
  }
  update() {}
}
class $S extends Un {
  constructor(e) {
      super(e),
      e.animationState || (e.animationState = BS(e))
  }
  updateAnimationControlsSubscription() {
      const {animate: e} = this.node.getProps();
      ja(e) && (this.unmountControls = e.subscribe(this.node))
  }
  mount() {
      this.updateAnimationControlsSubscription()
  }
  update() {
      const {animate: e} = this.node.getProps()
        , {animate: n} = this.node.prevProps || {};
      e !== n && this.updateAnimationControlsSubscription()
  }
  unmount() {
      var e;
      this.node.animationState.reset(),
      (e = this.unmountControls) === null || e === void 0 || e.call(this)
  }
}
let WS = 0;
class HS extends Un {
  constructor() {
      super(...arguments),
      this.id = WS++
  }
  update() {
      if (!this.node.presenceContext)
          return;
      const {isPresent: e, onExitComplete: n} = this.node.presenceContext
        , {isPresent: r} = this.node.prevPresenceContext || {};
      if (!this.node.animationState || e === r)
          return;
      const i = this.node.animationState.setActive("exit", !e);
      n && !e && i.then( () => {
          n(this.id)
      }
      )
  }
  mount() {
      const {register: e, onExitComplete: n} = this.node.presenceContext || {};
      n && n(this.id),
      e && (this.unmount = e(this.id))
  }
  unmount() {}
}
const KS = {
  animation: {
      Feature: $S
  },
  exit: {
      Feature: HS
  }
};
function ks(t, e, n, r={
  passive: !0
}) {
  return t.addEventListener(e, n, r),
  () => t.removeEventListener(e, n)
}
function zs(t) {
  return {
      point: {
          x: t.pageX,
          y: t.pageY
      }
  }
}
const YS = t => e => xf(e) && t(e, zs(e));
function Vr(t, e, n, r) {
  return ks(t, e, YS(n), r)
}
function ay({top: t, left: e, right: n, bottom: r}) {
  return {
      x: {
          min: e,
          max: n
      },
      y: {
          min: t,
          max: r
      }
  }
}
function GS({x: t, y: e}) {
  return {
      top: e.min,
      right: t.max,
      bottom: e.max,
      left: t.min
  }
}
function XS(t, e) {
  if (!e)
      return t;
  const n = e({
      x: t.left,
      y: t.top
  })
    , r = e({
      x: t.right,
      y: t.bottom
  });
  return {
      top: n.y,
      left: n.x,
      bottom: r.y,
      right: r.x
  }
}
const ly = 1e-4
, QS = 1 - ly
, ZS = 1 + ly
, uy = .01
, qS = 0 - uy
, JS = 0 + uy;
function Ue(t) {
  return t.max - t.min
}
function e2(t, e, n) {
  return Math.abs(t - e) <= n
}
function Lh(t, e, n, r=.5) {
  t.origin = r,
  t.originPoint = se(e.min, e.max, t.origin),
  t.scale = Ue(n) / Ue(e),
  t.translate = se(n.min, n.max, t.origin) - t.originPoint,
  (t.scale >= QS && t.scale <= ZS || isNaN(t.scale)) && (t.scale = 1),
  (t.translate >= qS && t.translate <= JS || isNaN(t.translate)) && (t.translate = 0)
}
function Qi(t, e, n, r) {
  Lh(t.x, e.x, n.x, r ? r.originX : void 0),
  Lh(t.y, e.y, n.y, r ? r.originY : void 0)
}
function Oh(t, e, n) {
  t.min = n.min + e.min,
  t.max = t.min + Ue(e)
}
function t2(t, e, n) {
  Oh(t.x, e.x, n.x),
  Oh(t.y, e.y, n.y)
}
function bh(t, e, n) {
  t.min = e.min - n.min,
  t.max = t.min + Ue(e)
}
function Zi(t, e, n) {
  bh(t.x, e.x, n.x),
  bh(t.y, e.y, n.y)
}
const Vh = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
})
, Ir = () => ({
  x: Vh(),
  y: Vh()
})
, Ih = () => ({
  min: 0,
  max: 0
})
, de = () => ({
  x: Ih(),
  y: Ih()
});
function gt(t) {
  return [t("x"), t("y")]
}
function yl(t) {
  return t === void 0 || t === 1
}
function Vu({scale: t, scaleX: e, scaleY: n}) {
  return !yl(t) || !yl(e) || !yl(n)
}
function Xn(t) {
  return Vu(t) || cy(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}
function cy(t) {
  return Fh(t.x) || Fh(t.y)
}
function Fh(t) {
  return t && t !== "0%"
}
function oa(t, e, n) {
  const r = t - n
    , i = e * r;
  return n + i
}
function zh(t, e, n, r, i) {
  return i !== void 0 && (t = oa(t, i, r)),
  oa(t, n, r) + e
}
function Iu(t, e=0, n=1, r, i) {
  t.min = zh(t.min, e, n, r, i),
  t.max = zh(t.max, e, n, r, i)
}
function fy(t, {x: e, y: n}) {
  Iu(t.x, e.translate, e.scale, e.originPoint),
  Iu(t.y, n.translate, n.scale, n.originPoint)
}
const Bh = .999999999999
, Uh = 1.0000000000001;
function n2(t, e, n, r=!1) {
  const i = n.length;
  if (!i)
      return;
  e.x = e.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
      s = n[a],
      o = s.projectionDelta;
      const {visualElement: l} = s.options;
      l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && zr(t, {
          x: -s.scroll.offset.x,
          y: -s.scroll.offset.y
      }),
      o && (e.x *= o.x.scale,
      e.y *= o.y.scale,
      fy(t, o)),
      r && Xn(s.latestValues) && zr(t, s.latestValues))
  }
  e.x < Uh && e.x > Bh && (e.x = 1),
  e.y < Uh && e.y > Bh && (e.y = 1)
}
function Fr(t, e) {
  t.min = t.min + e,
  t.max = t.max + e
}
function $h(t, e, n, r, i=.5) {
  const s = se(t.min, t.max, i);
  Iu(t, e, n, s, r)
}
function zr(t, e) {
  $h(t.x, e.x, e.scaleX, e.scale, e.originX),
  $h(t.y, e.y, e.scaleY, e.scale, e.originY)
}
function dy(t, e) {
  return ay(XS(t.getBoundingClientRect(), e))
}
function r2(t, e, n) {
  const r = dy(t, n)
    , {scroll: i} = e;
  return i && (Fr(r.x, i.offset.x),
  Fr(r.y, i.offset.y)),
  r
}
const Wh = (t, e) => Math.abs(t - e);
function i2(t, e) {
  const n = Wh(t.x, e.x)
    , r = Wh(t.y, e.y);
  return Math.sqrt(n ** 2 + r ** 2)
}
class hy {
  constructor(e, n, {transformPagePoint: r, dragSnapToOrigin: i=!1}={}) {
      if (this.startEvent = null,
      this.lastMoveEvent = null,
      this.lastMoveEventInfo = null,
      this.handlers = {},
      this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo))
              return;
          const c = xl(this.lastMoveEventInfo, this.history)
            , f = this.startEvent !== null
            , d = i2(c.offset, {
              x: 0,
              y: 0
          }) >= 3;
          if (!f && !d)
              return;
          const {point: p} = c
            , {timestamp: v} = Ee;
          this.history.push({
              ...p,
              timestamp: v
          });
          const {onStart: h, onMove: x} = this.handlers;
          f || (h && h(this.lastMoveEvent, c),
          this.startEvent = this.lastMoveEvent),
          x && x(this.lastMoveEvent, c)
      }
      ,
      this.handlePointerMove = (c, f) => {
          if (c.target instanceof Element && c.target.hasPointerCapture && c.pointerId !== void 0)
              try {
                  if (!c.target.hasPointerCapture(c.pointerId))
                      return
              } catch {}
          this.lastMoveEvent = c,
          this.lastMoveEventInfo = vl(f, this.transformPagePoint),
          q.update(this.updatePoint, !0)
      }
      ,
      this.handlePointerUp = (c, f) => {
          na(c, "release"),
          this.end();
          const {onEnd: d, onSessionEnd: p, resumeAnimation: v} = this.handlers;
          if (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
              return;
          const h = xl(c.type === "pointercancel" || c.type === "lostpointercapture" ? this.lastMoveEventInfo : vl(f, this.transformPagePoint), this.history);
          this.startEvent && d && d(c, h),
          p && p(c, h)
      }
      ,
      !xf(e))
          return;
      this.dragSnapToOrigin = i,
      this.handlers = n,
      this.transformPagePoint = r;
      const s = zs(e)
        , o = vl(s, this.transformPagePoint)
        , {point: a} = o
        , {timestamp: l} = Ee;
      this.history = [{
          ...a,
          timestamp: l
      }];
      const {onSessionStart: u} = n;
      u && u(e, xl(o, this.history)),
      na(e, "set"),
      this.removeListeners = Fs(Vr(e.currentTarget, "pointermove", this.handlePointerMove), Vr(e.currentTarget, "pointerup", this.handlePointerUp), Vr(e.currentTarget, "pointercancel", this.handlePointerUp), Vr(e.currentTarget, "lostpointercapture", this.handlePointerUp))
  }
  updateHandlers(e) {
      this.handlers = e
  }
  end() {
      this.removeListeners && this.removeListeners(),
      On(this.updatePoint)
  }
}
function vl(t, e) {
  return e ? {
      point: e(t.point)
  } : t
}
function Hh(t, e) {
  return {
      x: t.x - e.x,
      y: t.y - e.y
  }
}
function xl({point: t}, e) {
  return {
      point: t,
      delta: Hh(t, py(e)),
      offset: Hh(t, s2(e)),
      velocity: o2(e, .1)
  }
}
function s2(t) {
  return t[0]
}
function py(t) {
  return t[t.length - 1]
}
function o2(t, e) {
  if (t.length < 2)
      return {
          x: 0,
          y: 0
      };
  let n = t.length - 1
    , r = null;
  const i = py(t);
  for (; n >= 0 && (r = t[n],
  !(i.timestamp - r.timestamp > tn(e))); )
      n--;
  if (!r)
      return {
          x: 0,
          y: 0
      };
  const s = nn(i.timestamp - r.timestamp);
  if (s === 0)
      return {
          x: 0,
          y: 0
      };
  const o = {
      x: (i.x - r.x) / s,
      y: (i.y - r.y) / s
  };
  return o.x === 1 / 0 && (o.x = 0),
  o.y === 1 / 0 && (o.y = 0),
  o
}
function a2(t, {min: e, max: n}, r) {
  return e !== void 0 && t < e ? t = r ? se(e, t, r.min) : Math.max(t, e) : n !== void 0 && t > n && (t = r ? se(n, t, r.max) : Math.min(t, n)),
  t
}
function Kh(t, e, n) {
  return {
      min: e !== void 0 ? t.min + e : void 0,
      max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  }
}
function l2(t, {top: e, left: n, bottom: r, right: i}) {
  return {
      x: Kh(t.x, n, i),
      y: Kh(t.y, e, r)
  }
}
function Yh(t, e) {
  let n = e.min - t.min
    , r = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n,r] = [r, n]),
  {
      min: n,
      max: r
  }
}
function u2(t, e) {
  return {
      x: Yh(t.x, e.x),
      y: Yh(t.y, e.y)
  }
}
function c2(t, e) {
  let n = .5;
  const r = Ue(t)
    , i = Ue(e);
  return i > r ? n = si(e.min, e.max - r, t.min) : r > i && (n = si(t.min, t.max - i, e.min)),
  ln(0, 1, n)
}
function f2(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min),
  e.max !== void 0 && (n.max = e.max - t.min),
  n
}
const Fu = .35;
function d2(t=Fu) {
  return t === !1 ? t = 0 : t === !0 && (t = Fu),
  {
      x: Gh(t, "left", "right"),
      y: Gh(t, "top", "bottom")
  }
}
function Gh(t, e, n) {
  return {
      min: Xh(t, e),
      max: Xh(t, n)
  }
}
function Xh(t, e) {
  return typeof t == "number" ? t : t[e] || 0
}
const h2 = new WeakMap;
class p2 {
  constructor(e) {
      this.openDragLock = null,
      this.isDragging = !1,
      this.currentDirection = null,
      this.originPoint = {
          x: 0,
          y: 0
      },
      this.constraints = !1,
      this.hasMutatedConstraints = !1,
      this.elastic = de(),
      this.visualElement = e
  }
  start(e, {snapToCursor: n=!1}={}) {
      const {presenceContext: r} = this.visualElement;
      if (r && r.isPresent === !1)
          return;
      const i = c => {
          const {dragSnapToOrigin: f} = this.getProps();
          f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(zs(c).point)
      }
        , s = (c, f) => {
          const {drag: d, dragPropagation: p, onDragStart: v} = this.getProps();
          if (d && !p && (this.openDragLock && this.openDragLock(),
          this.openDragLock = aw(d),
          !this.openDragLock))
              return;
          this.isDragging = !0,
          this.currentDirection = null,
          this.resolveConstraints(),
          this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
          this.visualElement.projection.target = void 0),
          gt(x => {
              let g = this.getAxisMotionValue(x).get() || 0;
              if (Wt.test(g)) {
                  const {projection: m} = this.visualElement;
                  if (m && m.layout) {
                      const y = m.layout.layoutBox[x];
                      y && (g = Ue(y) * (parseFloat(g) / 100))
                  }
              }
              this.originPoint[x] = g
          }
          ),
          v && q.postRender( () => v(c, f)),
          Nu(this.visualElement, "transform");
          const {animationState: h} = this.visualElement;
          h && h.setActive("whileDrag", !0)
      }
        , o = (c, f) => {
          const {dragPropagation: d, dragDirectionLock: p, onDirectionLock: v, onDrag: h} = this.getProps();
          if (!d && !this.openDragLock)
              return;
          const {offset: x} = f;
          if (p && this.currentDirection === null) {
              this.currentDirection = m2(x),
              this.currentDirection !== null && v && v(this.currentDirection);
              return
          }
          this.updateAxis("x", f.point, x),
          this.updateAxis("y", f.point, x),
          this.visualElement.render(),
          h && h(c, f)
      }
        , a = (c, f) => this.stop(c, f)
        , l = () => gt(c => {
          var f;
          return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play())
      }
      )
        , {dragSnapToOrigin: u} = this.getProps();
      this.panSession = new hy(e,{
          onSessionStart: i,
          onStart: s,
          onMove: o,
          onSessionEnd: a,
          resumeAnimation: l
      },{
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: u
      })
  }
  stop(e, n) {
      const r = this.isDragging;
      if (this.cancel(),
      !r)
          return;
      const {velocity: i} = n;
      this.startAnimation(i);
      const {onDragEnd: s} = this.getProps();
      s && q.postRender( () => s(e, n))
  }
  cancel() {
      this.isDragging = !1;
      const {projection: e, animationState: n} = this.visualElement;
      e && (e.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      this.panSession = void 0;
      const {dragPropagation: r} = this.getProps();
      !r && this.openDragLock && (this.openDragLock(),
      this.openDragLock = null),
      n && n.setActive("whileDrag", !1)
  }
  updateAxis(e, n, r) {
      const {drag: i} = this.getProps();
      if (!r || !uo(e, i, this.currentDirection))
          return;
      const s = this.getAxisMotionValue(e);
      let o = this.originPoint[e] + r[e];
      this.constraints && this.constraints[e] && (o = a2(o, this.constraints[e], this.elastic[e])),
      s.set(o)
  }
  resolveConstraints() {
      var e;
      const {dragConstraints: n, dragElastic: r} = this.getProps()
        , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout
        , s = this.constraints;
      n && Or(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = l2(i.layoutBox, n) : this.constraints = !1,
      this.elastic = d2(r),
      s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && gt(o => {
          this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = f2(i.layoutBox[o], this.constraints[o]))
      }
      )
  }
  resolveRefConstraints() {
      const {dragConstraints: e, onMeasureDragConstraints: n} = this.getProps();
      if (!e || !Or(e))
          return !1;
      const r = e.current
        , {projection: i} = this.visualElement;
      if (!i || !i.layout)
          return !1;
      const s = r2(r, i.root, this.visualElement.getTransformPagePoint());
      let o = u2(i.layout.layoutBox, s);
      if (n) {
          const a = n(GS(o));
          this.hasMutatedConstraints = !!a,
          a && (o = ay(a))
      }
      return o
  }
  startAnimation(e) {
      const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: a} = this.getProps()
        , l = this.constraints || {}
        , u = gt(c => {
          if (!uo(c, n, this.currentDirection))
              return;
          let f = l && l[c] || {};
          o && (f = {
              min: 0,
              max: 0
          });
          const d = i ? 200 : 1e6
            , p = i ? 40 : 1e7
            , v = {
              type: "inertia",
              velocity: r ? e[c] : 0,
              bounceStiffness: d,
              bounceDamping: p,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...s,
              ...f
          };
          return this.startAxisValueAnimation(c, v)
      }
      );
      return Promise.all(u).then(a)
  }
  startAxisValueAnimation(e, n) {
      const r = this.getAxisMotionValue(e);
      return Nu(this.visualElement, e),
      r.start(Rf(e, r, 0, n, this.visualElement, !1))
  }
  stopAnimation() {
      gt(e => this.getAxisMotionValue(e).stop())
  }
  pauseAnimation() {
      gt(e => {
          var n;
          return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause()
      }
      )
  }
  getAnimationState(e) {
      var n;
      return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state
  }
  getAxisMotionValue(e) {
      const n = `_drag${e.toUpperCase()}`
        , r = this.visualElement.getProps()
        , i = r[n];
      return i || this.visualElement.getValue(e, (r.initial ? r.initial[e] : void 0) || 0)
  }
  snapToCursor(e) {
      gt(n => {
          const {drag: r} = this.getProps();
          if (!uo(n, r, this.currentDirection))
              return;
          const {projection: i} = this.visualElement
            , s = this.getAxisMotionValue(n);
          if (i && i.layout) {
              const {min: o, max: a} = i.layout.layoutBox[n];
              s.set(e[n] - se(o, a, .5))
          }
      }
      )
  }
  scalePositionWithinConstraints() {
      if (!this.visualElement.current)
          return;
      const {drag: e, dragConstraints: n} = this.getProps()
        , {projection: r} = this.visualElement;
      if (!Or(n) || !r || !this.constraints)
          return;
      this.stopAnimation();
      const i = {
          x: 0,
          y: 0
      };
      gt(o => {
          const a = this.getAxisMotionValue(o);
          if (a && this.constraints !== !1) {
              const l = a.get();
              i[o] = c2({
                  min: l,
                  max: l
              }, this.constraints[o])
          }
      }
      );
      const {transformTemplate: s} = this.visualElement.getProps();
      this.visualElement.current.style.transform = s ? s({}, "") : "none",
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      gt(o => {
          if (!uo(o, e, null))
              return;
          const a = this.getAxisMotionValue(o)
            , {min: l, max: u} = this.constraints[o];
          a.set(se(l, u, i[o]))
      }
      )
  }
  addListeners() {
      if (!this.visualElement.current)
          return;
      h2.set(this.visualElement, this);
      const e = this.visualElement.current
        , n = Vr(e, "pointerdown", l => {
          const {drag: u, dragListener: c=!0} = this.getProps();
          u && c && this.start(l)
      }
      )
        , r = () => {
          const {dragConstraints: l} = this.getProps();
          Or(l) && l.current && (this.constraints = this.resolveRefConstraints())
      }
        , {projection: i} = this.visualElement
        , s = i.addEventListener("measure", r);
      i && !i.layout && (i.root && i.root.updateScroll(),
      i.updateLayout()),
      q.read(r);
      const o = ks(window, "resize", () => this.scalePositionWithinConstraints())
        , a = i.addEventListener("didUpdate", ({delta: l, hasLayoutChanged: u}) => {
          this.isDragging && u && (gt(c => {
              const f = this.getAxisMotionValue(c);
              f && (this.originPoint[c] += l[c].translate,
              f.set(f.get() + l[c].translate))
          }
          ),
          this.visualElement.render())
      }
      );
      return () => {
          o(),
          n(),
          s(),
          a && a()
      }
  }
  getProps() {
      const e = this.visualElement.getProps()
        , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: s=!1, dragElastic: o=Fu, dragMomentum: a=!0} = e;
      return {
          ...e,
          drag: n,
          dragDirectionLock: r,
          dragPropagation: i,
          dragConstraints: s,
          dragElastic: o,
          dragMomentum: a
      }
  }
}
function uo(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t)
}
function m2(t, e=10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"),
  n
}
class g2 extends Un {
  constructor(e) {
      super(e),
      this.removeGroupControls = lt,
      this.removeListeners = lt,
      this.controls = new p2(e)
  }
  mount() {
      const {dragControls: e} = this.node.getProps();
      e && (this.removeGroupControls = e.subscribe(this.controls)),
      this.removeListeners = this.controls.addListeners() || lt
  }
  unmount() {
      this.removeGroupControls(),
      this.removeListeners()
  }
}
const Qh = t => (e, n) => {
  t && q.postRender( () => t(e, n))
}
;
class y2 extends Un {
  constructor() {
      super(...arguments),
      this.removePointerDownListener = lt
  }
  onPointerDown(e) {
      this.session = new hy(e,this.createPanHandlers(),{
          transformPagePoint: this.node.getTransformPagePoint()
      })
  }
  createPanHandlers() {
      const {onPanSessionStart: e, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
      return {
          onSessionStart: Qh(e),
          onStart: Qh(n),
          onMove: r,
          onEnd: (s, o) => {
              delete this.session,
              i && q.postRender( () => i(s, o))
          }
      }
  }
  mount() {
      this.removePointerDownListener = Vr(this.node.current, "pointerdown", e => this.onPointerDown(e))
  }
  update() {
      this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
      this.removePointerDownListener(),
      this.session && this.session.end()
  }
}
const Co = {
  hasAnimatedSinceResize: !0,
  hasEverUpdated: !1
};
function Zh(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const Mi = {
  correct: (t, e) => {
      if (!e.target)
          return t;
      if (typeof t == "string")
          if (F.test(t))
              t = parseFloat(t);
          else
              return t;
      const n = Zh(t, e.target.x)
        , r = Zh(t, e.target.y);
      return `${n}% ${r}%`
  }
}
, v2 = {
  correct: (t, {treeScale: e, projectionDelta: n}) => {
      const r = t
        , i = bn.parse(t);
      if (i.length > 5)
          return r;
      const s = bn.createTransformer(t)
        , o = typeof i[0] != "number" ? 1 : 0
        , a = n.x.scale * e.x
        , l = n.y.scale * e.y;
      i[0 + o] /= a,
      i[1 + o] /= l;
      const u = se(a, l, .5);
      return typeof i[2 + o] == "number" && (i[2 + o] /= u),
      typeof i[3 + o] == "number" && (i[3 + o] /= u),
      s(i)
  }
};
class x2 extends M.Component {
  componentDidMount() {
      const {visualElement: e, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
        , {projection: s} = e;
      P_(_2),
      s && (n.group && n.group.add(s),
      r && r.register && i && r.register(s),
      s.root.didUpdate(),
      s.addEventListener("animationComplete", () => {
          this.safeToRemove()
      }
      ),
      s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove()
      })),
      Co.hasEverUpdated = !0
  }
  getSnapshotBeforeUpdate(e) {
      const {layoutDependency: n, visualElement: r, drag: i, isPresent: s} = this.props
        , o = r.projection;
      return o && (o.isPresent = s,
      i || e.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(),
      e.isPresent !== s && (s ? o.promote() : o.relegate() || q.postRender( () => {
          const a = o.getStack();
          (!a || !a.members.length) && this.safeToRemove()
      }
      ))),
      null
  }
  componentDidUpdate() {
      const {projection: e} = this.props.visualElement;
      e && (e.root.didUpdate(),
      sf.postRender( () => {
          !e.currentAnimation && e.isLead() && this.safeToRemove()
      }
      ))
  }
  componentWillUnmount() {
      const {visualElement: e, layoutGroup: n, switchLayoutGroup: r} = this.props
        , {projection: i} = e;
      i && (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i))
  }
  safeToRemove() {
      const {safeToRemove: e} = this.props;
      e && e()
  }
  render() {
      return null
  }
}
function my(t) {
  const [e,n] = q0()
    , r = M.useContext(Qc);
  return _.jsx(x2, {
      ...t,
      layoutGroup: r,
      switchLayoutGroup: M.useContext(sg),
      isPresent: e,
      safeToRemove: n
  })
}
const _2 = {
  borderRadius: {
      ...Mi,
      applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  },
  borderTopLeftRadius: Mi,
  borderTopRightRadius: Mi,
  borderBottomLeftRadius: Mi,
  borderBottomRightRadius: Mi,
  boxShadow: v2
};
function w2(t, e, n) {
  const r = Ve(t) ? t : Ss(t);
  return r.start(Rf("", r, e, n)),
  r.animation
}
function S2(t) {
  return t instanceof SVGElement && t.tagName !== "svg"
}
const T2 = (t, e) => t.depth - e.depth;
class k2 {
  constructor() {
      this.children = [],
      this.isDirty = !1
  }
  add(e) {
      _f(this.children, e),
      this.isDirty = !0
  }
  remove(e) {
      wf(this.children, e),
      this.isDirty = !0
  }
  forEach(e) {
      this.isDirty && this.children.sort(T2),
      this.isDirty = !1,
      this.children.forEach(e)
  }
}
function P2(t, e) {
  const n = Ht.now()
    , r = ({timestamp: i}) => {
      const s = i - n;
      s >= e && (On(r),
      t(s - e))
  }
  ;
  return q.read(r, !0),
  () => On(r)
}
const gy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
, C2 = gy.length
, qh = t => typeof t == "string" ? parseFloat(t) : t
, Jh = t => typeof t == "number" || F.test(t);
function E2(t, e, n, r, i, s) {
  i ? (t.opacity = se(0, n.opacity !== void 0 ? n.opacity : 1, M2(r)),
  t.opacityExit = se(e.opacity !== void 0 ? e.opacity : 1, 0, N2(r))) : s && (t.opacity = se(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let o = 0; o < C2; o++) {
      const a = `border${gy[o]}Radius`;
      let l = ep(e, a)
        , u = ep(n, a);
      if (l === void 0 && u === void 0)
          continue;
      l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Jh(l) === Jh(u) ? (t[a] = Math.max(se(qh(l), qh(u), r), 0),
      (Wt.test(u) || Wt.test(l)) && (t[a] += "%")) : t[a] = u
  }
  (e.rotate || n.rotate) && (t.rotate = se(e.rotate || 0, n.rotate || 0, r))
}
function ep(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius
}
const M2 = yy(0, .5, Og)
, N2 = yy(.5, .95, lt);
function yy(t, e, n) {
  return r => r < t ? 0 : r > e ? 1 : n(si(t, e, r))
}
function tp(t, e) {
  t.min = e.min,
  t.max = e.max
}
function mt(t, e) {
  tp(t.x, e.x),
  tp(t.y, e.y)
}
function np(t, e) {
  t.translate = e.translate,
  t.scale = e.scale,
  t.originPoint = e.originPoint,
  t.origin = e.origin
}
function rp(t, e, n, r, i) {
  return t -= e,
  t = oa(t, 1 / n, r),
  i !== void 0 && (t = oa(t, 1 / i, r)),
  t
}
function A2(t, e=0, n=1, r=.5, i, s=t, o=t) {
  if (Wt.test(e) && (e = parseFloat(e),
  e = se(o.min, o.max, e / 100) - o.min),
  typeof e != "number")
      return;
  let a = se(s.min, s.max, r);
  t === s && (a -= e),
  t.min = rp(t.min, e, n, a, i),
  t.max = rp(t.max, e, n, a, i)
}
function ip(t, e, [n,r,i], s, o) {
  A2(t, e[n], e[r], e[i], e.scale, s, o)
}
const R2 = ["x", "scaleX", "originX"]
, D2 = ["y", "scaleY", "originY"];
function sp(t, e, n, r) {
  ip(t.x, e, R2, n ? n.x : void 0, r ? r.x : void 0),
  ip(t.y, e, D2, n ? n.y : void 0, r ? r.y : void 0)
}
function op(t) {
  return t.translate === 0 && t.scale === 1
}
function vy(t) {
  return op(t.x) && op(t.y)
}
function ap(t, e) {
  return t.min === e.min && t.max === e.max
}
function j2(t, e) {
  return ap(t.x, e.x) && ap(t.y, e.y)
}
function lp(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}
function xy(t, e) {
  return lp(t.x, e.x) && lp(t.y, e.y)
}
function up(t) {
  return Ue(t.x) / Ue(t.y)
}
function cp(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class L2 {
  constructor() {
      this.members = []
  }
  add(e) {
      _f(this.members, e),
      e.scheduleRender()
  }
  remove(e) {
      if (wf(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead) {
          const n = this.members[this.members.length - 1];
          n && this.promote(n)
      }
  }
  relegate(e) {
      const n = this.members.findIndex(i => e === i);
      if (n === 0)
          return !1;
      let r;
      for (let i = n; i >= 0; i--) {
          const s = this.members[i];
          if (s.isPresent !== !1) {
              r = s;
              break
          }
      }
      return r ? (this.promote(r),
      !0) : !1
  }
  promote(e, n) {
      const r = this.lead;
      if (e !== r && (this.prevLead = r,
      this.lead = e,
      e.show(),
      r)) {
          r.instance && r.scheduleRender(),
          e.scheduleRender(),
          e.resumeFrom = r,
          n && (e.resumeFrom.preserveOpacity = !0),
          r.snapshot && (e.snapshot = r.snapshot,
          e.snapshot.latestValues = r.animationValues || r.latestValues),
          e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
          const {crossfade: i} = e.options;
          i === !1 && r.hide()
      }
  }
  exitAnimationComplete() {
      this.members.forEach(e => {
          const {options: n, resumingFrom: r} = e;
          n.onExitComplete && n.onExitComplete(),
          r && r.options.onExitComplete && r.options.onExitComplete()
      }
      )
  }
  scheduleRender() {
      this.members.forEach(e => {
          e.instance && e.scheduleRender(!1)
      }
      )
  }
  removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
  }
}
function O2(t, e, n) {
  let r = "";
  const i = t.x.translate / e.x
    , s = t.y.translate / e.y
    , o = (n == null ? void 0 : n.z) || 0;
  if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
  (e.x !== 1 || e.y !== 1) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
  n) {
      const {transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: p, skewY: v} = n;
      u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      p && (r += `skewX(${p}deg) `),
      v && (r += `skewY(${v}deg) `)
  }
  const a = t.x.scale * e.x
    , l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`),
  r || "none"
}
const _l = ["", "X", "Y", "Z"]
, b2 = {
  visibility: "hidden"
}
, fp = 1e3;
let V2 = 0;
function wl(t, e, n, r) {
  const {latestValues: i} = e;
  i[t] && (n[t] = i[t],
  e.setStaticValue(t, 0),
  r && (r[t] = 0))
}
function _y(t) {
  if (t.hasCheckedOptimisedAppear = !0,
  t.root === t)
      return;
  const {visualElement: e} = t.options;
  if (!e)
      return;
  const n = Mg(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
      const {layout: i, layoutId: s} = t.options;
      window.MotionCancelOptimisedAnimation(n, "transform", q, !(i || s))
  }
  const {parent: r} = t;
  r && !r.hasCheckedOptimisedAppear && _y(r)
}
function wy({attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
  return class {
      constructor(o={}, a=e == null ? void 0 : e()) {
          this.id = V2++,
          this.animationId = 0,
          this.children = new Set,
          this.options = {},
          this.isTreeAnimating = !1,
          this.isAnimationBlocked = !1,
          this.isLayoutDirty = !1,
          this.isProjectionDirty = !1,
          this.isSharedProjectionDirty = !1,
          this.isTransformDirty = !1,
          this.updateManuallyBlocked = !1,
          this.updateBlockedByResize = !1,
          this.isUpdating = !1,
          this.isSVG = !1,
          this.needsReset = !1,
          this.shouldResetTransform = !1,
          this.hasCheckedOptimisedAppear = !1,
          this.treeScale = {
              x: 1,
              y: 1
          },
          this.eventHandlers = new Map,
          this.hasTreeAnimated = !1,
          this.updateScheduled = !1,
          this.scheduleUpdate = () => this.update(),
          this.projectionUpdateScheduled = !1,
          this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1,
              this.clearAllSnapshots())
          }
          ,
          this.updateProjection = () => {
              this.projectionUpdateScheduled = !1,
              this.nodes.forEach(z2),
              this.nodes.forEach(H2),
              this.nodes.forEach(K2),
              this.nodes.forEach(B2)
          }
          ,
          this.resolvedRelativeTargetAt = 0,
          this.hasProjected = !1,
          this.isVisible = !0,
          this.animationProgress = 0,
          this.sharedNodes = new Map,
          this.latestValues = o,
          this.root = a ? a.root || a : this,
          this.path = a ? [...a.path, a] : [],
          this.parent = a,
          this.depth = a ? a.depth + 1 : 0;
          for (let l = 0; l < this.path.length; l++)
              this.path[l].shouldResetTransform = !0;
          this.root === this && (this.nodes = new k2)
      }
      addEventListener(o, a) {
          return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Sf),
          this.eventHandlers.get(o).add(a)
      }
      notifyListeners(o, ...a) {
          const l = this.eventHandlers.get(o);
          l && l.notify(...a)
      }
      hasListeners(o) {
          return this.eventHandlers.has(o)
      }
      mount(o, a=this.root.hasTreeAnimated) {
          if (this.instance)
              return;
          this.isSVG = S2(o),
          this.instance = o;
          const {layoutId: l, layout: u, visualElement: c} = this.options;
          if (c && !c.current && c.mount(o),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          a && (u || l) && (this.isLayoutDirty = !0),
          t) {
              let f;
              const d = () => this.root.updateBlockedByResize = !1;
              t(o, () => {
                  this.root.updateBlockedByResize = !0,
                  f && f(),
                  f = P2(d, 250),
                  Co.hasAnimatedSinceResize && (Co.hasAnimatedSinceResize = !1,
                  this.nodes.forEach(hp))
              }
              )
          }
          l && this.root.registerSharedNode(l, this),
          this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({delta: f, hasLayoutChanged: d, hasRelativeLayoutChanged: p, layout: v}) => {
              if (this.isTreeAnimationBlocked()) {
                  this.target = void 0,
                  this.relativeTarget = void 0;
                  return
              }
              const h = this.options.transition || c.getDefaultTransition() || Z2
                , {onLayoutAnimationStart: x, onLayoutAnimationComplete: g} = c.getProps()
                , m = !this.targetLayout || !xy(this.targetLayout, v)
                , y = !d && p;
              if (this.options.layoutRoot || this.resumeFrom || y || d && (m || !this.currentAnimation)) {
                  this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                  this.resumingFrom.resumingFrom = void 0),
                  this.setAnimationOrigin(f, y);
                  const S = {
                      ...gf(h, "layout"),
                      onPlay: x,
                      onComplete: g
                  };
                  (c.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0,
                  S.type = !1),
                  this.startAnimation(S)
              } else
                  d || hp(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
              this.targetLayout = v
          }
          )
      }
      unmount() {
          this.options.layoutId && this.willUpdate(),
          this.root.nodes.remove(this);
          const o = this.getStack();
          o && o.remove(this),
          this.parent && this.parent.children.delete(this),
          this.instance = void 0,
          On(this.updateProjection)
      }
      blockUpdate() {
          this.updateManuallyBlocked = !0
      }
      unblockUpdate() {
          this.updateManuallyBlocked = !1
      }
      isUpdateBlocked() {
          return this.updateManuallyBlocked || this.updateBlockedByResize
      }
      isTreeAnimationBlocked() {
          return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
      }
      startUpdate() {
          this.isUpdateBlocked() || (this.isUpdating = !0,
          this.nodes && this.nodes.forEach(Y2),
          this.animationId++)
      }
      getTransformTemplate() {
          const {visualElement: o} = this.options;
          return o && o.getProps().transformTemplate
      }
      willUpdate(o=!0) {
          if (this.root.hasTreeAnimated = !0,
          this.root.isUpdateBlocked()) {
              this.options.onExitComplete && this.options.onExitComplete();
              return
          }
          if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && _y(this),
          !this.root.isUpdating && this.root.startUpdate(),
          this.isLayoutDirty)
              return;
          this.isLayoutDirty = !0;
          for (let c = 0; c < this.path.length; c++) {
              const f = this.path[c];
              f.shouldResetTransform = !0,
              f.updateScroll("snapshot"),
              f.options.layoutRoot && f.willUpdate(!1)
          }
          const {layoutId: a, layout: l} = this.options;
          if (a === void 0 && !l)
              return;
          const u = this.getTransformTemplate();
          this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
          this.updateSnapshot(),
          o && this.notifyListeners("willUpdate")
      }
      update() {
          if (this.updateScheduled = !1,
          this.isUpdateBlocked()) {
              this.unblockUpdate(),
              this.clearAllSnapshots(),
              this.nodes.forEach(dp);
              return
          }
          this.isUpdating || this.nodes.forEach($2),
          this.isUpdating = !1,
          this.nodes.forEach(W2),
          this.nodes.forEach(I2),
          this.nodes.forEach(F2),
          this.clearAllSnapshots();
          const a = Ht.now();
          Ee.delta = ln(0, 1e3 / 60, a - Ee.timestamp),
          Ee.timestamp = a,
          Ee.isProcessing = !0,
          fl.update.process(Ee),
          fl.preRender.process(Ee),
          fl.render.process(Ee),
          Ee.isProcessing = !1
      }
      didUpdate() {
          this.updateScheduled || (this.updateScheduled = !0,
          sf.read(this.scheduleUpdate))
      }
      clearAllSnapshots() {
          this.nodes.forEach(U2),
          this.sharedNodes.forEach(G2)
      }
      scheduleUpdateProjection() {
          this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
          q.preRender(this.updateProjection, !1, !0))
      }
      scheduleCheckAfterUnmount() {
          q.postRender( () => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
          }
          )
      }
      updateSnapshot() {
          this.snapshot || !this.instance || (this.snapshot = this.measure(),
          this.snapshot && !Ue(this.snapshot.measuredBox.x) && !Ue(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
      }
      updateLayout() {
          if (!this.instance || (this.updateScroll(),
          !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
              return;
          if (this.resumeFrom && !this.resumeFrom.instance)
              for (let l = 0; l < this.path.length; l++)
                  this.path[l].updateScroll();
          const o = this.layout;
          this.layout = this.measure(!1),
          this.layoutCorrected = de(),
          this.isLayoutDirty = !1,
          this.projectionDelta = void 0,
          this.notifyListeners("measure", this.layout.layoutBox);
          const {visualElement: a} = this.options;
          a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
      }
      updateScroll(o="measure") {
          let a = !!(this.options.layoutScroll && this.instance);
          if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1),
          a) {
              const l = r(this.instance);
              this.scroll = {
                  animationId: this.root.animationId,
                  phase: o,
                  isRoot: l,
                  offset: n(this.instance),
                  wasRoot: this.scroll ? this.scroll.isRoot : l
              }
          }
      }
      resetTransform() {
          if (!i)
              return;
          const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
            , a = this.projectionDelta && !vy(this.projectionDelta)
            , l = this.getTransformTemplate()
            , u = l ? l(this.latestValues, "") : void 0
            , c = u !== this.prevTransformTemplateValue;
          o && (a || Xn(this.latestValues) || c) && (i(this.instance, u),
          this.shouldResetTransform = !1,
          this.scheduleRender())
      }
      measure(o=!0) {
          const a = this.measurePageBox();
          let l = this.removeElementScroll(a);
          return o && (l = this.removeTransform(l)),
          q2(l),
          {
              animationId: this.root.animationId,
              measuredBox: a,
              layoutBox: l,
              latestValues: {},
              source: this.id
          }
      }
      measurePageBox() {
          var o;
          const {visualElement: a} = this.options;
          if (!a)
              return de();
          const l = a.measureViewportBox();
          if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(J2))) {
              const {scroll: c} = this.root;
              c && (Fr(l.x, c.offset.x),
              Fr(l.y, c.offset.y))
          }
          return l
      }
      removeElementScroll(o) {
          var a;
          const l = de();
          if (mt(l, o),
          !((a = this.scroll) === null || a === void 0) && a.wasRoot)
              return l;
          for (let u = 0; u < this.path.length; u++) {
              const c = this.path[u]
                , {scroll: f, options: d} = c;
              c !== this.root && f && d.layoutScroll && (f.wasRoot && mt(l, o),
              Fr(l.x, f.offset.x),
              Fr(l.y, f.offset.y))
          }
          return l
      }
      applyTransform(o, a=!1) {
          const l = de();
          mt(l, o);
          for (let u = 0; u < this.path.length; u++) {
              const c = this.path[u];
              !a && c.options.layoutScroll && c.scroll && c !== c.root && zr(l, {
                  x: -c.scroll.offset.x,
                  y: -c.scroll.offset.y
              }),
              Xn(c.latestValues) && zr(l, c.latestValues)
          }
          return Xn(this.latestValues) && zr(l, this.latestValues),
          l
      }
      removeTransform(o) {
          const a = de();
          mt(a, o);
          for (let l = 0; l < this.path.length; l++) {
              const u = this.path[l];
              if (!u.instance || !Xn(u.latestValues))
                  continue;
              Vu(u.latestValues) && u.updateSnapshot();
              const c = de()
                , f = u.measurePageBox();
              mt(c, f),
              sp(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
          }
          return Xn(this.latestValues) && sp(a, this.latestValues),
          a
      }
      setTargetDelta(o) {
          this.targetDelta = o,
          this.root.scheduleUpdateProjection(),
          this.isProjectionDirty = !0
      }
      setOptions(o) {
          this.options = {
              ...this.options,
              ...o,
              crossfade: o.crossfade !== void 0 ? o.crossfade : !0
          }
      }
      clearMeasurements() {
          this.scroll = void 0,
          this.layout = void 0,
          this.snapshot = void 0,
          this.prevTransformTemplateValue = void 0,
          this.targetDelta = void 0,
          this.target = void 0,
          this.isLayoutDirty = !1
      }
      forceRelativeParentToResolveTarget() {
          this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ee.timestamp && this.relativeParent.resolveTargetDelta(!0)
      }
      resolveTargetDelta(o=!1) {
          var a;
          const l = this.getLead();
          this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
          this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
          this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
          const u = !!this.resumingFrom || this !== l;
          if (!(o || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
              return;
          const {layout: f, layoutId: d} = this.options;
          if (!(!this.layout || !(f || d))) {
              if (this.resolvedRelativeTargetAt = Ee.timestamp,
              !this.targetDelta && !this.relativeTarget) {
                  const p = this.getClosestProjectingParent();
                  p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p,
                  this.forceRelativeParentToResolveTarget(),
                  this.relativeTarget = de(),
                  this.relativeTargetOrigin = de(),
                  Zi(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox),
                  mt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = de(),
              this.targetWithTransforms = de()),
              this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
              t2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : mt(this.target, this.layout.layoutBox),
              fy(this.target, this.targetDelta)) : mt(this.target, this.layout.layoutBox),
              this.attemptToResolveRelativeTarget)) {
                  this.attemptToResolveRelativeTarget = !1;
                  const p = this.getClosestProjectingParent();
                  p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p,
                  this.forceRelativeParentToResolveTarget(),
                  this.relativeTarget = de(),
                  this.relativeTargetOrigin = de(),
                  Zi(this.relativeTargetOrigin, this.target, p.target),
                  mt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
          }
      }
      getClosestProjectingParent() {
          if (!(!this.parent || Vu(this.parent.latestValues) || cy(this.parent.latestValues)))
              return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
      }
      isProjecting() {
          return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
      }
      calcProjection() {
          var o;
          const a = this.getLead()
            , l = !!this.resumingFrom || this !== a;
          let u = !0;
          if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (u = !1),
          l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
          this.resolvedRelativeTargetAt === Ee.timestamp && (u = !1),
          u)
              return;
          const {layout: c, layoutId: f} = this.options;
          if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
          this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || !(c || f))
              return;
          mt(this.layoutCorrected, this.layout.layoutBox);
          const d = this.treeScale.x
            , p = this.treeScale.y;
          n2(this.layoutCorrected, this.treeScale, this.path, l),
          a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox,
          a.targetWithTransforms = de());
          const {target: v} = a;
          if (!v) {
              this.prevProjectionDelta && (this.createProjectionDeltas(),
              this.scheduleRender());
              return
          }
          !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (np(this.prevProjectionDelta.x, this.projectionDelta.x),
          np(this.prevProjectionDelta.y, this.projectionDelta.y)),
          Qi(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
          (this.treeScale.x !== d || this.treeScale.y !== p || !cp(this.projectionDelta.x, this.prevProjectionDelta.x) || !cp(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v))
      }
      hide() {
          this.isVisible = !1
      }
      show() {
          this.isVisible = !0
      }
      scheduleRender(o=!0) {
          var a;
          if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(),
          o) {
              const l = this.getStack();
              l && l.scheduleRender()
          }
          this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
      }
      createProjectionDeltas() {
          this.prevProjectionDelta = Ir(),
          this.projectionDelta = Ir(),
          this.projectionDeltaWithTransform = Ir()
      }
      setAnimationOrigin(o, a=!1) {
          const l = this.snapshot
            , u = l ? l.latestValues : {}
            , c = {
              ...this.latestValues
          }
            , f = Ir();
          (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
          this.attemptToResolveRelativeTarget = !a;
          const d = de()
            , p = l ? l.source : void 0
            , v = this.layout ? this.layout.source : void 0
            , h = p !== v
            , x = this.getStack()
            , g = !x || x.members.length <= 1
            , m = !!(h && !g && this.options.crossfade === !0 && !this.path.some(Q2));
          this.animationProgress = 0;
          let y;
          this.mixTargetDelta = S => {
              const w = S / 1e3;
              pp(f.x, o.x, w),
              pp(f.y, o.y, w),
              this.setTargetDelta(f),
              this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Zi(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
              X2(this.relativeTarget, this.relativeTargetOrigin, d, w),
              y && j2(this.relativeTarget, y) && (this.isProjectionDirty = !1),
              y || (y = de()),
              mt(y, this.relativeTarget)),
              h && (this.animationValues = c,
              E2(c, u, this.latestValues, w, m, g)),
              this.root.scheduleUpdateProjection(),
              this.scheduleRender(),
              this.animationProgress = w
          }
          ,
          this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
      }
      startAnimation(o) {
          this.notifyListeners("animationStart"),
          this.currentAnimation && this.currentAnimation.stop(),
          this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
          this.pendingAnimation && (On(this.pendingAnimation),
          this.pendingAnimation = void 0),
          this.pendingAnimation = q.update( () => {
              Co.hasAnimatedSinceResize = !0,
              this.currentAnimation = w2(0, fp, {
                  ...o,
                  onUpdate: a => {
                      this.mixTargetDelta(a),
                      o.onUpdate && o.onUpdate(a)
                  }
                  ,
                  onStop: () => {}
                  ,
                  onComplete: () => {
                      o.onComplete && o.onComplete(),
                      this.completeAnimation()
                  }
              }),
              this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
              this.pendingAnimation = void 0
          }
          )
      }
      completeAnimation() {
          this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
          this.resumingFrom.preserveOpacity = void 0);
          const o = this.getStack();
          o && o.exitAnimationComplete(),
          this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
          this.notifyListeners("animationComplete")
      }
      finishAnimation() {
          this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(fp),
          this.currentAnimation.stop()),
          this.completeAnimation()
      }
      applyTransformsToTarget() {
          const o = this.getLead();
          let {targetWithTransforms: a, target: l, layout: u, latestValues: c} = o;
          if (!(!a || !l || !u)) {
              if (this !== o && this.layout && u && Sy(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                  l = this.target || de();
                  const f = Ue(this.layout.layoutBox.x);
                  l.x.min = o.target.x.min,
                  l.x.max = l.x.min + f;
                  const d = Ue(this.layout.layoutBox.y);
                  l.y.min = o.target.y.min,
                  l.y.max = l.y.min + d
              }
              mt(a, l),
              zr(a, c),
              Qi(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
          }
      }
      registerSharedNode(o, a) {
          this.sharedNodes.has(o) || this.sharedNodes.set(o, new L2),
          this.sharedNodes.get(o).add(a);
          const u = a.options.initialPromotionConfig;
          a.promote({
              transition: u ? u.transition : void 0,
              preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
          })
      }
      isLead() {
          const o = this.getStack();
          return o ? o.lead === this : !0
      }
      getLead() {
          var o;
          const {layoutId: a} = this.options;
          return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
      }
      getPrevLead() {
          var o;
          const {layoutId: a} = this.options;
          return a ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
      }
      getStack() {
          const {layoutId: o} = this.options;
          if (o)
              return this.root.sharedNodes.get(o)
      }
      promote({needsReset: o, transition: a, preserveFollowOpacity: l}={}) {
          const u = this.getStack();
          u && u.promote(this, l),
          o && (this.projectionDelta = void 0,
          this.needsReset = !0),
          a && this.setOptions({
              transition: a
          })
      }
      relegate() {
          const o = this.getStack();
          return o ? o.relegate(this) : !1
      }
      resetSkewAndRotation() {
          const {visualElement: o} = this.options;
          if (!o)
              return;
          let a = !1;
          const {latestValues: l} = o;
          if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
          !a)
              return;
          const u = {};
          l.z && wl("z", o, u, this.animationValues);
          for (let c = 0; c < _l.length; c++)
              wl(`rotate${_l[c]}`, o, u, this.animationValues),
              wl(`skew${_l[c]}`, o, u, this.animationValues);
          o.render();
          for (const c in u)
              o.setStaticValue(c, u[c]),
              this.animationValues && (this.animationValues[c] = u[c]);
          o.scheduleRender()
      }
      getProjectionStyles(o) {
          var a, l;
          if (!this.instance || this.isSVG)
              return;
          if (!this.isVisible)
              return b2;
          const u = {
              visibility: ""
          }
            , c = this.getTransformTemplate();
          if (this.needsReset)
              return this.needsReset = !1,
              u.opacity = "",
              u.pointerEvents = ko(o == null ? void 0 : o.pointerEvents) || "",
              u.transform = c ? c(this.latestValues, "") : "none",
              u;
          const f = this.getLead();
          if (!this.projectionDelta || !this.layout || !f.target) {
              const h = {};
              return this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
              h.pointerEvents = ko(o == null ? void 0 : o.pointerEvents) || ""),
              this.hasProjected && !Xn(this.latestValues) && (h.transform = c ? c({}, "") : "none",
              this.hasProjected = !1),
              h
          }
          const d = f.animationValues || f.latestValues;
          this.applyTransformsToTarget(),
          u.transform = O2(this.projectionDeltaWithTransform, this.treeScale, d),
          c && (u.transform = c(d, u.transform));
          const {x: p, y: v} = this.projectionDelta;
          u.transformOrigin = `${p.origin * 100}% ${v.origin * 100}% 0`,
          f.animationValues ? u.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
          for (const h in xs) {
              if (d[h] === void 0)
                  continue;
              const {correct: x, applyTo: g, isCSSVariable: m} = xs[h]
                , y = u.transform === "none" ? d[h] : x(d[h], f);
              if (g) {
                  const S = g.length;
                  for (let w = 0; w < S; w++)
                      u[g[w]] = y
              } else
                  m ? this.options.visualElement.renderState.vars[h] = y : u[h] = y
          }
          return this.options.layoutId && (u.pointerEvents = f === this ? ko(o == null ? void 0 : o.pointerEvents) || "" : "none"),
          u
      }
      clearSnapshot() {
          this.resumeFrom = this.snapshot = void 0
      }
      resetTree() {
          this.root.nodes.forEach(o => {
              var a;
              return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
          }
          ),
          this.root.nodes.forEach(dp),
          this.root.sharedNodes.clear()
      }
  }
}
function I2(t) {
  t.updateLayout()
}
function F2(t) {
  var e;
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
      const {layoutBox: r, measuredBox: i} = t.layout
        , {animationType: s} = t.options
        , o = n.source !== t.layout.source;
      s === "size" ? gt(f => {
          const d = o ? n.measuredBox[f] : n.layoutBox[f]
            , p = Ue(d);
          d.min = r[f].min,
          d.max = d.min + p
      }
      ) : Sy(s, n.layoutBox, r) && gt(f => {
          const d = o ? n.measuredBox[f] : n.layoutBox[f]
            , p = Ue(r[f]);
          d.max = d.min + p,
          t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
          t.relativeTarget[f].max = t.relativeTarget[f].min + p)
      }
      );
      const a = Ir();
      Qi(a, r, n.layoutBox);
      const l = Ir();
      o ? Qi(l, t.applyTransform(i, !0), n.measuredBox) : Qi(l, r, n.layoutBox);
      const u = !vy(a);
      let c = !1;
      if (!t.resumeFrom) {
          const f = t.getClosestProjectingParent();
          if (f && !f.resumeFrom) {
              const {snapshot: d, layout: p} = f;
              if (d && p) {
                  const v = de();
                  Zi(v, n.layoutBox, d.layoutBox);
                  const h = de();
                  Zi(h, r, p.layoutBox),
                  xy(v, h) || (c = !0),
                  f.options.layoutRoot && (t.relativeTarget = h,
                  t.relativeTargetOrigin = v,
                  t.relativeParent = f)
              }
          }
      }
      t.notifyListeners("didUpdate", {
          layout: r,
          snapshot: n,
          delta: l,
          layoutDelta: a,
          hasLayoutChanged: u,
          hasRelativeLayoutChanged: c
      })
  } else if (t.isLead()) {
      const {onExitComplete: r} = t.options;
      r && r()
  }
  t.options.transition = void 0
}
function z2(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
  t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
  t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function B2(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function U2(t) {
  t.clearSnapshot()
}
function dp(t) {
  t.clearMeasurements()
}
function $2(t) {
  t.isLayoutDirty = !1
}
function W2(t) {
  const {visualElement: e} = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
  t.resetTransform()
}
function hp(t) {
  t.finishAnimation(),
  t.targetDelta = t.relativeTarget = t.target = void 0,
  t.isProjectionDirty = !0
}
function H2(t) {
  t.resolveTargetDelta()
}
function K2(t) {
  t.calcProjection()
}
function Y2(t) {
  t.resetSkewAndRotation()
}
function G2(t) {
  t.removeLeadSnapshot()
}
function pp(t, e, n) {
  t.translate = se(e.translate, 0, n),
  t.scale = se(e.scale, 1, n),
  t.origin = e.origin,
  t.originPoint = e.originPoint
}
function mp(t, e, n, r) {
  t.min = se(e.min, n.min, r),
  t.max = se(e.max, n.max, r)
}
function X2(t, e, n, r) {
  mp(t.x, e.x, n.x, r),
  mp(t.y, e.y, n.y, r)
}
function Q2(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0
}
const Z2 = {
  duration: .45,
  ease: [.4, 0, .1, 1]
}
, gp = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
, yp = gp("applewebkit/") && !gp("chrome/") ? Math.round : lt;
function vp(t) {
  t.min = yp(t.min),
  t.max = yp(t.max)
}
function q2(t) {
  vp(t.x),
  vp(t.y)
}
function Sy(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !e2(up(e), up(n), .2)
}
function J2(t) {
  var e;
  return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const eT = wy({
  attachResizeListener: (t, e) => ks(t, "resize", e),
  measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
})
, Sl = {
  current: void 0
}
, Ty = wy({
  measureScroll: t => ({
      x: t.scrollLeft,
      y: t.scrollTop
  }),
  defaultParent: () => {
      if (!Sl.current) {
          const t = new eT({});
          t.mount(window),
          t.setOptions({
              layoutScroll: !0
          }),
          Sl.current = t
      }
      return Sl.current
  }
  ,
  resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none"
  }
  ,
  checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
})
, tT = {
  pan: {
      Feature: y2
  },
  drag: {
      Feature: g2,
      ProjectionNode: Ty,
      MeasureLayout: my
  }
};
function xp(t, e, n) {
  const {props: r} = t;
  t.animationState && r.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n
    , s = r[i];
  s && q.postRender( () => s(e, zs(e)))
}
class nT extends Un {
  mount() {
      const {current: e} = this.node;
      e && (this.unmount = tw(e, (n, r) => (xp(this.node, r, "Start"),
      i => xp(this.node, i, "End"))))
  }
  unmount() {}
}
class rT extends Un {
  constructor() {
      super(...arguments),
      this.isActive = !1
  }
  onFocus() {
      let e = !1;
      try {
          e = this.node.current.matches(":focus-visible")
      } catch {
          e = !0
      }
      !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
      this.isActive = !0)
  }
  onBlur() {
      !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
      this.isActive = !1)
  }
  mount() {
      this.unmount = Fs(ks(this.node.current, "focus", () => this.onFocus()), ks(this.node.current, "blur", () => this.onBlur()))
  }
  unmount() {}
}
function _p(t, e, n) {
  const {props: r} = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
      return;
  t.animationState && r.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n)
    , s = r[i];
  s && q.postRender( () => s(e, zs(e)))
}
class iT extends Un {
  mount() {
      const {current: e} = this.node;
      e && (this.unmount = sw(e, (n, r) => (_p(this.node, r, "Start"),
      (i, {success: s}) => _p(this.node, i, s ? "End" : "Cancel")), {
          useGlobalTarget: this.node.props.globalTapTarget
      }))
  }
  unmount() {}
}
const zu = new WeakMap
, Tl = new WeakMap
, sT = t => {
  const e = zu.get(t.target);
  e && e(t)
}
, oT = t => {
  t.forEach(sT)
}
;
function aT({root: t, ...e}) {
  const n = t || document;
  Tl.has(n) || Tl.set(n, {});
  const r = Tl.get(n)
    , i = JSON.stringify(e);
  return r[i] || (r[i] = new IntersectionObserver(oT,{
      root: t,
      ...e
  })),
  r[i]
}
function lT(t, e, n) {
  const r = aT(e);
  return zu.set(t, n),
  r.observe(t),
  () => {
      zu.delete(t),
      r.unobserve(t)
  }
}
const uT = {
  some: 0,
  all: 1
};
class cT extends Un {
  constructor() {
      super(...arguments),
      this.hasEnteredView = !1,
      this.isInView = !1
  }
  startObserver() {
      this.unmount();
      const {viewport: e={}} = this.node.getProps()
        , {root: n, margin: r, amount: i="some", once: s} = e
        , o = {
          root: n ? n.current : void 0,
          rootMargin: r,
          threshold: typeof i == "number" ? i : uT[i]
      }
        , a = l => {
          const {isIntersecting: u} = l;
          if (this.isInView === u || (this.isInView = u,
          s && !u && this.hasEnteredView))
              return;
          u && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", u);
          const {onViewportEnter: c, onViewportLeave: f} = this.node.getProps()
            , d = u ? c : f;
          d && d(l)
      }
      ;
      return lT(this.node.current, o, a)
  }
  mount() {
      this.startObserver()
  }
  update() {
      if (typeof IntersectionObserver > "u")
          return;
      const {props: e, prevProps: n} = this.node;
      ["amount", "margin", "root"].some(fT(e, n)) && this.startObserver()
  }
  unmount() {}
}
function fT({viewport: t={}}, {viewport: e={}}={}) {
  return n => t[n] !== e[n]
}
const dT = {
  inView: {
      Feature: cT
  },
  tap: {
      Feature: iT
  },
  focus: {
      Feature: rT
  },
  hover: {
      Feature: nT
  }
}
, hT = {
  layout: {
      ProjectionNode: Ty,
      MeasureLayout: my
  }
}
, aa = {
  current: null
}
, Df = {
  current: !1
};
function ky() {
  if (Df.current = !0,
  !!Jc)
      if (window.matchMedia) {
          const t = window.matchMedia("(prefers-reduced-motion)")
            , e = () => aa.current = t.matches;
          t.addListener(e),
          e()
      } else
          aa.current = !1
}
const pT = [...Xg, je, bn]
, mT = t => pT.find(Gg(t))
, gT = new WeakMap;
function yT(t, e, n) {
  for (const r in e) {
      const i = e[r]
        , s = n[r];
      if (Ve(i))
          t.addValue(r, i);
      else if (Ve(s))
          t.addValue(r, Ss(i, {
              owner: t
          }));
      else if (s !== i)
          if (t.hasValue(r)) {
              const o = t.getValue(r);
              o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
          } else {
              const o = t.getStaticValue(r);
              t.addValue(r, Ss(o !== void 0 ? o : i, {
                  owner: t
              }))
          }
  }
  for (const r in n)
      e[r] === void 0 && t.removeValue(r);
  return e
}
const wp = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class vT {
  scrapeMotionValuesFromProps(e, n, r) {
      return {}
  }
  constructor({parent: e, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: s, visualState: o}, a={}) {
      this.current = null,
      this.children = new Set,
      this.isVariantNode = !1,
      this.isControllingVariants = !1,
      this.shouldReduceMotion = null,
      this.values = new Map,
      this.KeyframeResolver = Mf,
      this.features = {},
      this.valueSubscriptions = new Map,
      this.prevMotionValues = {},
      this.events = {},
      this.propEventSubscriptions = {},
      this.notifyUpdate = () => this.notify("Update", this.latestValues),
      this.render = () => {
          this.current && (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
      }
      ,
      this.renderScheduledAt = 0,
      this.scheduleRender = () => {
          const p = Ht.now();
          this.renderScheduledAt < p && (this.renderScheduledAt = p,
          q.render(this.render, !1, !0))
      }
      ;
      const {latestValues: l, renderState: u, onUpdate: c} = o;
      this.onUpdate = c,
      this.latestValues = l,
      this.baseTarget = {
          ...l
      },
      this.initialValues = n.initial ? {
          ...l
      } : {},
      this.renderState = u,
      this.parent = e,
      this.props = n,
      this.presenceContext = r,
      this.depth = e ? e.depth + 1 : 0,
      this.reducedMotionConfig = i,
      this.options = a,
      this.blockInitialAnimation = !!s,
      this.isControllingVariants = La(n),
      this.isVariantNode = rg(n),
      this.isVariantNode && (this.variantChildren = new Set),
      this.manuallyAnimateOnMount = !!(e && e.current);
      const {willChange: f, ...d} = this.scrapeMotionValuesFromProps(n, {}, this);
      for (const p in d) {
          const v = d[p];
          l[p] !== void 0 && Ve(v) && v.set(l[p], !1)
      }
  }
  mount(e) {
      this.current = e,
      gT.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach( (n, r) => this.bindToMotionValue(r, n)),
      Df.current || ky(),
      this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : aa.current,
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext)
  }
  unmount() {
      this.projection && this.projection.unmount(),
      On(this.notifyUpdate),
      On(this.render),
      this.valueSubscriptions.forEach(e => e()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
      for (const e in this.events)
          this.events[e].clear();
      for (const e in this.features) {
          const n = this.features[e];
          n && (n.unmount(),
          n.isMounted = !1)
      }
      this.current = null
  }
  bindToMotionValue(e, n) {
      this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
      const r = yr.has(e);
      r && this.onBindTransform && this.onBindTransform();
      const i = n.on("change", a => {
          this.latestValues[e] = a,
          this.props.onUpdate && q.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0)
      }
      )
        , s = n.on("renderRequest", this.scheduleRender);
      let o;
      window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, e, n)),
      this.valueSubscriptions.set(e, () => {
          i(),
          s(),
          o && o(),
          n.owner && n.stop()
      }
      )
  }
  sortNodePosition(e) {
      return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
  }
  updateFeatures() {
      let e = "animation";
      for (e in oi) {
          const n = oi[e];
          if (!n)
              continue;
          const {isEnabled: r, Feature: i} = n;
          if (!this.features[e] && i && r(this.props) && (this.features[e] = new i(this)),
          this.features[e]) {
              const s = this.features[e];
              s.isMounted ? s.update() : (s.mount(),
              s.isMounted = !0)
          }
      }
  }
  triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props)
  }
  measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : de()
  }
  getStaticValue(e) {
      return this.latestValues[e]
  }
  setStaticValue(e, n) {
      this.latestValues[e] = n
  }
  update(e, n) {
      (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      this.prevProps = this.props,
      this.props = e,
      this.prevPresenceContext = this.presenceContext,
      this.presenceContext = n;
      for (let r = 0; r < wp.length; r++) {
          const i = wp[r];
          this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
          delete this.propEventSubscriptions[i]);
          const s = "on" + i
            , o = e[s];
          o && (this.propEventSubscriptions[i] = this.on(i, o))
      }
      this.prevMotionValues = yT(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this)
  }
  getProps() {
      return this.props
  }
  getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0
  }
  getDefaultTransition() {
      return this.props.transition
  }
  getTransformPagePoint() {
      return this.props.transformPagePoint
  }
  getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
  }
  addVariantChild(e) {
      const n = this.getClosestVariantNode();
      if (n)
          return n.variantChildren && n.variantChildren.add(e),
          () => n.variantChildren.delete(e)
  }
  addValue(e, n) {
      const r = this.values.get(e);
      n !== r && (r && this.removeValue(e),
      this.bindToMotionValue(e, n),
      this.values.set(e, n),
      this.latestValues[e] = n.get())
  }
  removeValue(e) {
      this.values.delete(e);
      const n = this.valueSubscriptions.get(e);
      n && (n(),
      this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState)
  }
  hasValue(e) {
      return this.values.has(e)
  }
  getValue(e, n) {
      if (this.props.values && this.props.values[e])
          return this.props.values[e];
      let r = this.values.get(e);
      return r === void 0 && n !== void 0 && (r = Ss(n === null ? void 0 : n, {
          owner: this
      }),
      this.addValue(e, r)),
      r
  }
  readValue(e, n) {
      var r;
      let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (r = this.getBaseTargetFromProps(this.props, e)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, e, this.options);
      return i != null && (typeof i == "string" && (Kg(i) || Vg(i)) ? i = parseFloat(i) : !mT(i) && bn.test(n) && (i = $g(e, n)),
      this.setBaseTarget(e, Ve(i) ? i.get() : i)),
      Ve(i) ? i.get() : i
  }
  setBaseTarget(e, n) {
      this.baseTarget[e] = n
  }
  getBaseTarget(e) {
      var n;
      const {initial: r} = this.props;
      let i;
      if (typeof r == "string" || typeof r == "object") {
          const o = pf(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
          o && (i = o[e])
      }
      if (r && i !== void 0)
          return i;
      const s = this.getBaseTargetFromProps(this.props, e);
      return s !== void 0 && !Ve(s) ? s : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e]
  }
  on(e, n) {
      return this.events[e] || (this.events[e] = new Sf),
      this.events[e].add(n)
  }
  notify(e, ...n) {
      this.events[e] && this.events[e].notify(...n)
  }
}
class Py extends vT {
  constructor() {
      super(...arguments),
      this.KeyframeResolver = Qg
  }
  sortInstanceNodePosition(e, n) {
      return e.compareDocumentPosition(n) & 2 ? 1 : -1
  }
  getBaseTargetFromProps(e, n) {
      return e.style ? e.style[n] : void 0
  }
  removeValueFromRenderState(e, {vars: n, style: r}) {
      delete n[e],
      delete r[e]
  }
  handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(),
      delete this.childSubscription);
      const {children: e} = this.props;
      Ve(e) && (this.childSubscription = e.on("change", n => {
          this.current && (this.current.textContent = `${n}`)
      }
      ))
  }
}
function xT(t) {
  return window.getComputedStyle(t)
}
class _T extends Py {
  constructor() {
      super(...arguments),
      this.type = "html",
      this.renderInstance = pg
  }
  readValueFromInstance(e, n) {
      if (yr.has(n)) {
          const r = Ef(n);
          return r && r.default || 0
      } else {
          const r = xT(e)
            , i = (of(n) ? r.getPropertyValue(n) : r[n]) || 0;
          return typeof i == "string" ? i.trim() : i
      }
  }
  measureInstanceViewportBox(e, {transformPagePoint: n}) {
      return dy(e, n)
  }
  build(e, n, r) {
      uf(e, n, r.transformTemplate)
  }
  scrapeMotionValuesFromProps(e, n, r) {
      return mf(e, n, r)
  }
}
class wT extends Py {
  constructor() {
      super(...arguments),
      this.type = "svg",
      this.isSVGTag = !1,
      this.measureInstanceViewportBox = de,
      this.updateDimensions = () => {
          this.current && !this.renderState.dimensions && hg(this.current, this.renderState)
      }
  }
  getBaseTargetFromProps(e, n) {
      return e[n]
  }
  readValueFromInstance(e, n) {
      if (yr.has(n)) {
          const r = Ef(n);
          return r && r.default || 0
      }
      return n = mg.has(n) ? n : rf(n),
      e.getAttribute(n)
  }
  scrapeMotionValuesFromProps(e, n, r) {
      return yg(e, n, r)
  }
  onBindTransform() {
      this.current && !this.renderState.dimensions && q.postRender(this.updateDimensions)
  }
  build(e, n, r) {
      df(e, n, this.isSVGTag, r.transformTemplate)
  }
  renderInstance(e, n, r, i) {
      gg(e, n, r, i)
  }
  mount(e) {
      this.isSVGTag = hf(e.tagName),
      super.mount(e)
  }
}
const ST = (t, e) => ff(t) ? new wT(e) : new _T(e,{
  allowProjection: t !== M.Fragment
})
, TT = X_({
  ...KS,
  ...dT,
  ...tT,
  ...hT
}, ST)
, L = f_(TT);
function Bs() {
  !Df.current && ky();
  const [t] = M.useState(aa.current);
  return t
}
const kT = {
  some: 0,
  all: 1
};
function PT(t, e, {root: n, margin: r, amount: i="some"}={}) {
  const s = Tg(t)
    , o = new WeakMap
    , a = u => {
      u.forEach(c => {
          const f = o.get(c.target);
          if (c.isIntersecting !== !!f)
              if (c.isIntersecting) {
                  const d = e(c.target, c);
                  typeof d == "function" ? o.set(c.target, d) : l.unobserve(c.target)
              } else
                  typeof f == "function" && (f(c),
                  o.delete(c.target))
      }
      )
  }
    , l = new IntersectionObserver(a,{
      root: n,
      rootMargin: r,
      threshold: typeof i == "number" ? i : kT[i]
  });
  return s.forEach(u => l.observe(u)),
  () => l.disconnect()
}
function CT(t, {root: e, margin: n, amount: r, once: i=!1, initial: s=!1}={}) {
  const [o,a] = M.useState(s);
  return M.useEffect( () => {
      if (!t.current || i && o)
          return;
      const l = () => (a(!0),
      i ? void 0 : () => a(!1))
        , u = {
          root: e && e.current || void 0,
          margin: n,
          amount: r
      };
      return PT(t.current, l, u)
  }
  , [e, t, n, i, r]),
  o
}
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ET = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const MT = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
, xi = (t, e) => {
  const n = M.forwardRef( ({color: r="currentColor", size: i=24, strokeWidth: s=2, absoluteStrokeWidth: o, className: a="", children: l, ...u}, c) => M.createElement("svg", {
      ref: c,
      ...ET,
      width: i,
      height: i,
      stroke: r,
      strokeWidth: o ? Number(s) * 24 / Number(i) : s,
      className: ["lucide", `lucide-${MT(t)}`, a].join(" "),
      ...u
  }, [...e.map( ([f,d]) => M.createElement(f, d)), ...Array.isArray(l) ? l : [l]]));
  return n.displayName = `${t}`,
  n
}
;
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const NT = xi("Award", [["circle", {
  cx: "12",
  cy: "8",
  r: "6",
  key: "1vp47v"
}], ["path", {
  d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
  key: "em7aur"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Le = xi("Heart", [["path", {
  d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
  key: "c3ymky"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const AT = xi("Mail", [["rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2",
  key: "18n3k1"
}], ["path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
  key: "1ocrg3"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const RT = xi("Music", [["path", {
  d: "M9 18V5l12-2v13",
  key: "1jmyc2"
}], ["circle", {
  cx: "6",
  cy: "18",
  r: "3",
  key: "fqmcym"
}], ["circle", {
  cx: "18",
  cy: "16",
  r: "3",
  key: "1hluhg"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const kl = xi("Sparkles", [["path", {
  d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
  key: "17u4zn"
}], ["path", {
  d: "M5 3v4",
  key: "bklmnn"
}], ["path", {
  d: "M19 17v4",
  key: "iiml17"
}], ["path", {
  d: "M3 5h4",
  key: "nem4j1"
}], ["path", {
  d: "M17 19h4",
  key: "lbex7p"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const DT = xi("X", [["path", {
  d: "M18 6 6 18",
  key: "1bl5f8"
}], ["path", {
  d: "m6 6 12 12",
  key: "d8bk6v"
}]])
, jT = "audio/my_song_1.mp3"
, LT = "audio/my_song_2.mp3"
, OT = "audio/my_songs_4.mp3"
, bT = "images/IMG_1107.jpg"
, VT = "images/IMG_1109.jpg"
, IT = "images/IMG_5376.jpg"
, wr = ({children: t, animation: e="fade", delay: n=0, duration: r=.5, threshold: i=.1, once: s=!0}) => {
  const o = M.useRef(null)
    , a = CT(o, {
      once: s,
      amount: i
  })
    , l = {
      hidden: {
          opacity: 0,
          y: e === "slide" ? 50 : 0,
          scale: e === "zoom" ? .8 : 1,
          rotateX: e === "flip" ? 90 : 0
      },
      visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          transition: {
              duration: r,
              delay: n,
              ease: "easeOut"
          }
      }
  };
  return _.jsx(L.div, {
      ref: o,
      initial: "hidden",
      animate: a ? "visible" : "hidden",
      variants: l,
      children: t
  })
}
// ✅ Fixed image path
const FT = "./images/hellokitty-M_AUT0nT.gif";

const zT = ({ onComplete: t, onClose: e }) => {
  const [n, r] = M.useState([]);   // hearts
  const [i, s] = M.useState([]);   // kitty
  const [o, a] = M.useState(0);    // score
  const [l, u] = M.useState(30);   // time
  const [c, f] = M.useState(!1);   // started
  const [d, p] = M.useState(!1);   // finished
  const [v, h] = M.useState("");   // bonus text
  const [x, g] = M.useState(!1);   // show bonus
  const m = M.useRef(null);
  const y = 15; // goal hearts
  const S = M.useRef(null);
  const w = M.useRef(null);

  const T = () => {
    f(!0);
    a(0);
    u(30);
    p(!1);
    r([]);
    s([]);
    h("");
    g(!1);
  };

  // countdown timer
  M.useEffect(() => {
    if (!c || d) return;
    const P = setInterval(() => {
      u(E => E <= 1 ? (clearInterval(P), p(!0), 0) : E - 1);
    }, 1000);
    return () => clearInterval(P);
  }, [c, d]);

  // spawn hearts
  M.useEffect(() => {
    if (!c || d) return;
    const P = () => {
      if (!m.current) return;
      const E = m.current.offsetWidth;
      const O = {
        id: Date.now(),
        x: 20 + Math.random() * (E - 70),
        y: -50,
        speed: 1 + Math.random() * 1.5
      };
      r(V => [...V, O]);
    };
    return S.current = setInterval(P, 1000),
           () => { S.current && clearInterval(S.current); };
  }, [c, d]);

  // spawn kitty
  M.useEffect(() => {
    if (!c || d) return;
    const P = () => {
      if (!m.current) return;
      const E = m.current.offsetWidth;
      const O = {
        id: Date.now(),
        x: 20 + Math.random() * (E - 100),
        y: -60,
        speed: 1.2 + Math.random()
      };
      s(V => [...V, O]);
    };
    return w.current = setInterval(P, 3500),
           () => { w.current && clearInterval(w.current); };
  }, [c, d]);

  // move hearts & kitty
  M.useEffect(() => {
    if (!c || d) return;
    const O = setInterval(() => {
      if (!m.current) return;
      const V = m.current.offsetHeight;
      r(I => I.map(z => ({ ...z, y: z.y + z.speed }))
              .filter(z => z.y < V + 50));
      s(I => I.map(z => ({ ...z, y: z.y + z.speed }))
              .filter(z => z.y < V + 60));
    }, 1000 / 60);
    return () => clearInterval(O);
  }, [c, d]);

  // check win
  M.useEffect(() => {
    o >= y && !d && (p(!0), t());
  }, [o, d, t]);

  // bonus disappear after 1.5s
  M.useEffect(() => {
    if (x) {
      const P = setTimeout(() => g(!1), 1500);
      return () => clearTimeout(P);
    }
  }, [x]);

  // catch heart
  const C = (P, E) => {
    E.stopPropagation();
    const O = E.currentTarget;
    if (O) {
      O.classList.add("scale-150", "opacity-0");
      setTimeout(() => {
        r(V => V.filter(I => I.id !== P));
        a(V => V + 1);
      }, 150);
    } else {
      r(V => V.filter(I => I.id !== P));
      a(V => V + 1);
    }
  };

  // catch kitty
  const k = (P, E) => {
    E.stopPropagation();
    const O = [
      { text: "Bonus +3 points!", action: () => a(z => z + 3) },
      { text: "Bonus +5 seconds!", action: () => u(z => z + 5) },
      { text: "Double points for next 3 hearts!", action: () => {} }
    ];
    const V = O[Math.floor(Math.random() * O.length)];
    h(V.text);
    g(!0);
    V.action();
    const I = E.currentTarget;
    if (I) {
      I.classList.add("scale-150", "opacity-0");
      setTimeout(() => { s(z => z.filter(G => G.id !== P)); }, 150);
    } else {
      s(z => z.filter(G => G.id !== P));
    }
  };

  return _.jsx("div", {
    className: "fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50 p-4",
    onClick: P => P.stopPropagation(),
    children: _.jsxs(L.div, {
      className: "bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl shadow-2xl p-6 max-w-md w-full relative",
      initial: { scale: .8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: .8, opacity: 0 },
      transition: { duration: .4 },
      onClick: P => P.stopPropagation(),
      children: [
        _.jsx("button", {
          onClick: P => { P.stopPropagation(); e(); },
          className: "absolute top-4 right-4 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 z-10",
          children: _.jsx("svg", {
            className: "w-5 h-5 text-gray-600",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: _.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M6 18L18 6M6 6l12 12"
            })
          })
        }),
        _.jsx("h2", {
          className: "text-2xl font-bold text-center text-pink-600 mb-3 font-comic",
          children: d ? "Game Complete!" : "Catch Hearts & Hello Kitty!"
        }),
        !c && !d ? _.jsxs("div", {
          className: "text-center space-y-4",
          children: [
            _.jsxs("p", {
              className: "text-gray-700 font-comic",
              children: ["Catch ", y, " hearts before time runs out! Look out for Hello Kitty for special bonuses!"]
            }),
            _.jsx(L.button, {
              whileHover: { scale: 1.05 },
              whileTap: { scale: .95 },
              className: "bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-full font-comic shadow-md",
              onClick: P => { P.stopPropagation(); T(); },
              children: "Start Game"
            })
          ]
        }) : d ? _.jsx("div", {
          className: "text-center space-y-4",
          children: o >= y ? _.jsxs("div", {
            className: "space-y-4",
            children: [
              _.jsx("div", { className: "flex justify-center", children: _.jsx(NT, { className: "w-16 h-16 text-yellow-500" }) }),
              _.jsxs("p", { className: "text-lg font-comic text-pink-600 font-bold", children: ["You did it! You caught ", o, " hearts!"] }),
              _.jsx("div", {
                className: "bg-white p-4 rounded-lg border-2 border-dashed border-pink-300",
                children: _.jsx("p", { className: "font-comic text-gray-700", children: '"Thank you for playing! I hope this little game shows how much I care. My heart is yours to catch, always. I promise to do better every day."' })
              })
            ]
          }) : _.jsxs("div", {
            className: "space-y-4",
            children: [
              _.jsxs("p", { className: "font-comic text-gray-700", children: ["You caught ", o, " hearts! Try again to reach ", y, " hearts!"] }),
              _.jsx(L.button, {
                whileHover: { scale: 1.05 },
                whileTap: { scale: .95 },
                className: "bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-5 rounded-full font-comic shadow-md",
                onClick: P => { P.stopPropagation(); T(); },
                children: "Try Again"
              })
            ]
          })
        }) : _.jsxs("div", {
          className: "space-y-4",
          children: [
            _.jsxs("div", {
              className: "flex justify-between items-center mb-4",
              children: [
                _.jsx("div", {
                  className: "bg-white px-4 py-2 rounded-full shadow",
                  children: _.jsxs("span", { className: "font-comic font-bold text-pink-600", children: ["Score: ", o, "/", y] })
                }),
                _.jsx("div", {
                  className: "bg-white px-4 py-2 rounded-full shadow",
                  children: _.jsxs("span", { className: "font-comic font-bold text-blue-600", children: ["Time: ", l, "s"] })
                })
              ]
            }),
            // ✅ Fixed container height
            _.jsxs("div", {
              ref: m,
              style: { height: "300px", width: "100%", position: "relative", overflow: "hidden", background: "linear-gradient(to bottom, #dbeafe80, #fce7f380)", border: "2px solid white", borderRadius: "10px" },
              onClick: P => P.stopPropagation(),
              children: [
                x && _.jsx(L.div, {
                  className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-100 px-5 py-2 rounded-full shadow-lg z-20",
                  initial: { scale: .5, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  exit: { scale: 1.5, opacity: 0 },
                  children: _.jsx("p", { className: "text-pink-600 font-comic font-bold", children: v })
                }),
                n.map(P => _.jsx(L.div, {
                  className: "absolute cursor-pointer transition-all duration-150",
                  style: { left: P.x, top: P.y, padding: "10px" },
                  animate: { rotate: [0, 10, -10, 0] },
                  transition: { repeat: Infinity, duration: 2 },
                  onClick: E => C(P.id, E),
                  children: _.jsx(Le, { className: "w-10 h-10 text-pink-500 filter drop-shadow-md", fill: "currentColor" })
                }, P.id)),
                i.map(P => _.jsx(L.div, {
                  className: "absolute cursor-pointer transition-all duration-150",
                  style: { left: P.x, top: P.y, padding: "10px", width: "100px", height: "100px" },
                  animate: { rotate: [0, 10, -10, 0] },
                  transition: { repeat: Infinity, duration: 2 },
                  onClick: E => k(P.id, E),
                  children: _.jsx("img", { src: FT, alt: "Hello Kitty", className: "w-full h-full object-contain" })
                }, P.id))
              ]
            })
          ]
        })
      ]
    })
  });
};

 BT = "./images/intro2-DCZptF1f.gif"
, ge = {
  greeting: {
      name: "Heyy, Babyyyy!",
      message: "aapke liye kuch naya prastuth karte hue hum...."
  },
  letter: {
      title: "Read My Letter",
      subtitle: "thodi mann ki baat jaanne k liye click kare",
      recipient: "Dear future wife ",
      paragraphs: ["Three months down, and a lifetime to go 💕", "Thank you for being my everything since the day you said yes."],
      signature: `Yours sincerely,
Pandey Ji`
  },
  gallery: {
      title: "Kuch haseen pal aapke sath",
      subtitle: "Aur pyaare moments dekhne ke liye swipe karo ✨",
      photos: [{
          src: "./images/IMG_1103.jpg",
          caption: "Our sweet moment together 💕"
      }, {
          src: "./images/IMG_4088.png",
          caption: "Always making me smile 😊"
      }, {
          src: "./images/IMG_3460.png",
          caption: "Perfect day with you ✨"
      },{
          src: "./images/IMG_4909.png",
          caption: "My sunshine on cloudy days ☀️☁️"
      },{
          src: "./images/IMG_4641.png",
          caption: "The best part of me is you 💕"
      },{
          src: "./images/IMG_4990.png",
          caption: "My heart chose you and it’s never wrong 💌"
      },{
          src: "./images/IMG_5386.png",
          caption: "Falling for you again and again 🍂💞"
}],
      scrollIndicators: 8,
      dividerIcon: "📷"
  },
  game: {
      title: "Play a Game!",
      subtitle: "Catch some hearts to unlock a special message",
      completionMessage: "You've completed the game! ✨ But you can play again if you want!",
      winMessage: "You caught my heart! Just like how you've captured my real heart forever..."
  },
  ui: {
      envelopeHint: "Click to open",
      envelopePreview: "💌 A letter for you..."
  }
};
function Xt(t) {
  if (t === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t
}
function Cy(t, e) {
  t.prototype = Object.create(e.prototype),
  t.prototype.constructor = t,
  t.__proto__ = e
}
/*!
* GSAP 3.13.0
* https://gsap.com
*
* @license Copyright 2008-2025, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license
* @author: Jack Doyle, jack@greensock.com
*/
var ut = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
      lineHeight: ""
  }
}, li = {
  duration: .5,
  overwrite: !1,
  delay: 0
}, jf, Ne, ne, wt = 1e8, Q = 1 / wt, Bu = Math.PI * 2, UT = Bu / 4, $T = 0, Ey = Math.sqrt, WT = Math.cos, HT = Math.sin, Pe = function(e) {
  return typeof e == "string"
}, fe = function(e) {
  return typeof e == "function"
}, un = function(e) {
  return typeof e == "number"
}, Lf = function(e) {
  return typeof e > "u"
}, Kt = function(e) {
  return typeof e == "object"
}, Ze = function(e) {
  return e !== !1
}, Of = function() {
  return typeof window < "u"
}, co = function(e) {
  return fe(e) || Pe(e)
}, My = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, Ie = Array.isArray, Uu = /(?:-?\.?\d|\.)+/gi, Ny = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Br = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Pl = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Ay = /[+-]=-?[.\d]+/, Ry = /[^,'"\[\]\s]+/gi, KT = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ie, It, $u, bf, ft = {}, la = {}, Dy, jy = function(e) {
  return (la = ui(e, ft)) && tt
}, Vf = function(e, n) {
  return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()")
}, Ps = function(e, n) {
  return !n && console.warn(e)
}, Ly = function(e, n) {
  return e && (ft[e] = n) && la && (la[e] = n) || ft
}, Cs = function() {
  return 0
}, YT = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Eo = {
  suppressEvents: !0,
  kill: !1
}, GT = {
  suppressEvents: !0
}, If = {}, Rn = [], Wu = {}, Oy, rt = {}, Cl = {}, Sp = 30, Mo = [], Ff = "", zf = function(e) {
  var n = e[0], r, i;
  if (Kt(n) || fe(n) || (e = [e]),
  !(r = (n._gsap || {}).harness)) {
      for (i = Mo.length; i-- && !Mo[i].targetTest(n); )
          ;
      r = Mo[i]
  }
  for (i = e.length; i--; )
      e[i] && (e[i]._gsap || (e[i]._gsap = new sv(e[i],r))) || e.splice(i, 1);
  return e
}, sr = function(e) {
  return e._gsap || zf(St(e))[0]._gsap
}, by = function(e, n, r) {
  return (r = e[n]) && fe(r) ? e[n]() : Lf(r) && e.getAttribute && e.getAttribute(n) || r
}, qe = function(e, n) {
  return (e = e.split(",")).forEach(n) || e
}, he = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0
}, ve = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0
}, Xr = function(e, n) {
  var r = n.charAt(0)
    , i = parseFloat(n.substr(2));
  return e = parseFloat(e),
  r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
}, XT = function(e, n) {
  for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; )
      ;
  return i < r
}, ua = function() {
  var e = Rn.length, n = Rn.slice(0), r, i;
  for (Wu = {},
  Rn.length = 0,
  r = 0; r < e; r++)
      i = n[r],
      i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
}, Bf = function(e) {
  return !!(e._initted || e._startAt || e.add)
}, Vy = function(e, n, r, i) {
  Rn.length && !Ne && ua(),
  e.render(n, r, !!(Ne && n < 0 && Bf(e))),
  Rn.length && !Ne && ua()
}, Iy = function(e) {
  var n = parseFloat(e);
  return (n || n === 0) && (e + "").match(Ry).length < 2 ? n : Pe(e) ? e.trim() : e
}, Fy = function(e) {
  return e
}, dt = function(e, n) {
  for (var r in n)
      r in e || (e[r] = n[r]);
  return e
}, QT = function(e) {
  return function(n, r) {
      for (var i in r)
          i in n || i === "duration" && e || i === "ease" || (n[i] = r[i])
  }
}, ui = function(e, n) {
  for (var r in n)
      e[r] = n[r];
  return e
}, Tp = function t(e, n) {
  for (var r in n)
      r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Kt(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
  return e
}, ca = function(e, n) {
  var r = {}, i;
  for (i in e)
      i in n || (r[i] = e[i]);
  return r
}, qi = function(e) {
  var n = e.parent || ie
    , r = e.keyframes ? QT(Ie(e.keyframes)) : dt;
  if (Ze(e.inherit))
      for (; n; )
          r(e, n.vars.defaults),
          n = n.parent || n._dp;
  return e
}, ZT = function(e, n) {
  for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; )
      ;
  return r < 0
}, zy = function(e, n, r, i, s) {
  var o = e[i], a;
  if (s)
      for (a = n[s]; o && o[s] > a; )
          o = o._prev;
  return o ? (n._next = o._next,
  o._next = n) : (n._next = e[r],
  e[r] = n),
  n._next ? n._next._prev = n : e[i] = n,
  n._prev = o,
  n.parent = n._dp = e,
  n
}, ba = function(e, n, r, i) {
  r === void 0 && (r = "_first"),
  i === void 0 && (i = "_last");
  var s = n._prev
    , o = n._next;
  s ? s._next = o : e[r] === n && (e[r] = o),
  o ? o._prev = s : e[i] === n && (e[i] = s),
  n._next = n._prev = n.parent = null
}, Vn = function(e, n) {
  e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
  e._act = 0
}, or = function(e, n) {
  if (e && (!n || n._end > e._dur || n._start < 0))
      for (var r = e; r; )
          r._dirty = 1,
          r = r.parent;
  return e
}, qT = function(e) {
  for (var n = e.parent; n && n.parent; )
      n._dirty = 1,
      n.totalDuration(),
      n = n.parent;
  return e
}, Hu = function(e, n, r, i) {
  return e._startAt && (Ne ? e._startAt.revert(Eo) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, !0, i))
}, JT = function t(e) {
  return !e || e._ts && t(e.parent)
}, kp = function(e) {
  return e._repeat ? ci(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, ci = function(e, n) {
  var r = Math.floor(e = ve(e / n));
  return e && r === e ? r - 1 : r
}, fa = function(e, n) {
  return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
}, Va = function(e) {
  return e._end = ve(e._start + (e._tDur / Math.abs(e._ts || e._rts || Q) || 0))
}, Ia = function(e, n) {
  var r = e._dp;
  return r && r.smoothChildTiming && e._ts && (e._start = ve(r._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)),
  Va(e),
  r._dirty || or(r, e)),
  e
}, By = function(e, n) {
  var r;
  if ((n._time || !n._dur && n._initted || n._start < e._time && (n._dur || !n.add)) && (r = fa(e.rawTime(), n),
  (!n._dur || Us(0, n.totalDuration(), r) - n._tTime > Q) && n.render(r, !0)),
  or(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
      if (e._dur < e.duration())
          for (r = e; r._dp; )
              r.rawTime() >= 0 && r.totalTime(r._tTime),
              r = r._dp;
      e._zTime = -Q
  }
}, zt = function(e, n, r, i) {
  return n.parent && Vn(n),
  n._start = ve((un(r) ? r : r || e !== ie ? yt(e, r, n) : e._time) + n._delay),
  n._end = ve(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)),
  zy(e, n, "_first", "_last", e._sort ? "_start" : 0),
  Ku(n) || (e._recent = n),
  i || By(e, n),
  e._ts < 0 && Ia(e, e._tTime),
  e
}, Uy = function(e, n) {
  return (ft.ScrollTrigger || Vf("scrollTrigger", n)) && ft.ScrollTrigger.create(n, e)
}, $y = function(e, n, r, i, s) {
  if ($f(e, n, s),
  !e._initted)
      return 1;
  if (!r && e._pt && !Ne && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Oy !== it.frame)
      return Rn.push(e),
      e._lazy = [s, i],
      1
}, ek = function t(e) {
  var n = e.parent;
  return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
}, Ku = function(e) {
  var n = e.data;
  return n === "isFromStart" || n === "isStart"
}, tk = function(e, n, r, i) {
  var s = e.ratio, o = n < 0 || !n && (!e._start && ek(e) && !(!e._initted && Ku(e)) || (e._ts < 0 || e._dp._ts < 0) && !Ku(e)) ? 0 : 1, a = e._rDelay, l = 0, u, c, f;
  if (a && e._repeat && (l = Us(0, e._tDur, n),
  c = ci(l, a),
  e._yoyo && c & 1 && (o = 1 - o),
  c !== ci(e._tTime, a) && (s = 1 - o,
  e.vars.repeatRefresh && e._initted && e.invalidate())),
  o !== s || Ne || i || e._zTime === Q || !n && e._zTime) {
      if (!e._initted && $y(e, n, i, r, l))
          return;
      for (f = e._zTime,
      e._zTime = n || (r ? Q : 0),
      r || (r = n && !f),
      e.ratio = o,
      e._from && (o = 1 - o),
      e._time = 0,
      e._tTime = l,
      u = e._pt; u; )
          u.r(o, u.d),
          u = u._next;
      n < 0 && Hu(e, n, r, !0),
      e._onUpdate && !r && ot(e, "onUpdate"),
      l && e._repeat && !r && e.parent && ot(e, "onRepeat"),
      (n >= e._tDur || n < 0) && e.ratio === o && (o && Vn(e, 1),
      !r && !Ne && (ot(e, o ? "onComplete" : "onReverseComplete", !0),
      e._prom && e._prom()))
  } else
      e._zTime || (e._zTime = n)
}, nk = function(e, n, r) {
  var i;
  if (r > n)
      for (i = e._first; i && i._start <= r; ) {
          if (i.data === "isPause" && i._start > n)
              return i;
          i = i._next
      }
  else
      for (i = e._last; i && i._start >= r; ) {
          if (i.data === "isPause" && i._start < n)
              return i;
          i = i._prev
      }
}, fi = function(e, n, r, i) {
  var s = e._repeat
    , o = ve(n) || 0
    , a = e._tTime / e._tDur;
  return a && !i && (e._time *= o / e._dur),
  e._dur = o,
  e._tDur = s ? s < 0 ? 1e10 : ve(o * (s + 1) + e._rDelay * s) : o,
  a > 0 && !i && Ia(e, e._tTime = e._tDur * a),
  e.parent && Va(e),
  r || or(e.parent, e),
  e
}, Pp = function(e) {
  return e instanceof Be ? or(e) : fi(e, e._dur)
}, rk = {
  _start: 0,
  endTime: Cs,
  totalDuration: Cs
}, yt = function t(e, n, r) {
  var i = e.labels, s = e._recent || rk, o = e.duration() >= wt ? s.endTime(!1) : e._dur, a, l, u;
  return Pe(n) && (isNaN(n) || n in i) ? (l = n.charAt(0),
  u = n.substr(-1) === "%",
  a = n.indexOf("="),
  l === "<" || l === ">" ? (a >= 0 && (n = n.replace(/=/, "")),
  (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (u ? (a < 0 ? s : r).totalDuration() / 100 : 1)) : a < 0 ? (n in i || (i[n] = o),
  i[n]) : (l = parseFloat(n.charAt(a - 1) + n.substr(a + 1)),
  u && r && (l = l / 100 * (Ie(r) ? r[0] : r).totalDuration()),
  a > 1 ? t(e, n.substr(0, a - 1), r) + l : o + l)) : n == null ? o : +n
}, Ji = function(e, n, r) {
  var i = un(n[1]), s = (i ? 2 : 1) + (e < 2 ? 0 : 1), o = n[s], a, l;
  if (i && (o.duration = n[1]),
  o.parent = r,
  e) {
      for (a = o,
      l = r; l && !("immediateRender"in a); )
          a = l.vars.defaults || {},
          l = Ze(l.vars.inherit) && l.parent;
      o.immediateRender = Ze(a.immediateRender),
      e < 2 ? o.runBackwards = 1 : o.startAt = n[s - 1]
  }
  return new ye(n[0],o,n[s + 1])
}, $n = function(e, n) {
  return e || e === 0 ? n(e) : n
}, Us = function(e, n, r) {
  return r < e ? e : r > n ? n : r
}, be = function(e, n) {
  return !Pe(e) || !(n = KT.exec(e)) ? "" : n[1]
}, ik = function(e, n, r) {
  return $n(r, function(i) {
      return Us(e, n, i)
  })
}, Yu = [].slice, Wy = function(e, n) {
  return e && Kt(e) && "length"in e && (!n && !e.length || e.length - 1 in e && Kt(e[0])) && !e.nodeType && e !== It
}, sk = function(e, n, r) {
  return r === void 0 && (r = []),
  e.forEach(function(i) {
      var s;
      return Pe(i) && !n || Wy(i, 1) ? (s = r).push.apply(s, St(i)) : r.push(i)
  }) || r
}, St = function(e, n, r) {
  return ne && !n && ne.selector ? ne.selector(e) : Pe(e) && !r && ($u || !di()) ? Yu.call((n || bf).querySelectorAll(e), 0) : Ie(e) ? sk(e, r) : Wy(e) ? Yu.call(e, 0) : e ? [e] : []
}, Gu = function(e) {
  return e = St(e)[0] || Ps("Invalid scope") || {},
  function(n) {
      var r = e.current || e.nativeElement || e;
      return St(n, r.querySelectorAll ? r : r === e ? Ps("Invalid scope") || bf.createElement("div") : e)
  }
}, Hy = function(e) {
  return e.sort(function() {
      return .5 - Math.random()
  })
}, Ky = function(e) {
  if (fe(e))
      return e;
  var n = Kt(e) ? e : {
      each: e
  }
    , r = ar(n.ease)
    , i = n.from || 0
    , s = parseFloat(n.base) || 0
    , o = {}
    , a = i > 0 && i < 1
    , l = isNaN(i) || a
    , u = n.axis
    , c = i
    , f = i;
  return Pe(i) ? c = f = {
      center: .5,
      edges: .5,
      end: 1
  }[i] || 0 : !a && l && (c = i[0],
  f = i[1]),
  function(d, p, v) {
      var h = (v || n).length, x = o[h], g, m, y, S, w, T, C, k, P;
      if (!x) {
          if (P = n.grid === "auto" ? 0 : (n.grid || [1, wt])[1],
          !P) {
              for (C = -wt; C < (C = v[P++].getBoundingClientRect().left) && P < h; )
                  ;
              P < h && P--
          }
          for (x = o[h] = [],
          g = l ? Math.min(P, h) * c - .5 : i % P,
          m = P === wt ? 0 : l ? h * f / P - .5 : i / P | 0,
          C = 0,
          k = wt,
          T = 0; T < h; T++)
              y = T % P - g,
              S = m - (T / P | 0),
              x[T] = w = u ? Math.abs(u === "y" ? S : y) : Ey(y * y + S * S),
              w > C && (C = w),
              w < k && (k = w);
          i === "random" && Hy(x),
          x.max = C - k,
          x.min = k,
          x.v = h = (parseFloat(n.amount) || parseFloat(n.each) * (P > h ? h - 1 : u ? u === "y" ? h / P : P : Math.max(P, h / P)) || 0) * (i === "edges" ? -1 : 1),
          x.b = h < 0 ? s - h : s,
          x.u = be(n.amount || n.each) || 0,
          r = r && h < 0 ? nv(r) : r
      }
      return h = (x[d] - x.min) / x.max || 0,
      ve(x.b + (r ? r(h) : h) * x.v) + x.u
  }
}, Xu = function(e) {
  var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
      var i = ve(Math.round(parseFloat(r) / e) * e * n);
      return (i - i % 1) / n + (un(r) ? 0 : be(r))
  }
}, Yy = function(e, n) {
  var r = Ie(e), i, s;
  return !r && Kt(e) && (i = r = e.radius || wt,
  e.values ? (e = St(e.values),
  (s = !un(e[0])) && (i *= i)) : e = Xu(e.increment)),
  $n(n, r ? fe(e) ? function(o) {
      return s = e(o),
      Math.abs(s - o) <= i ? s : o
  }
  : function(o) {
      for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), u = wt, c = 0, f = e.length, d, p; f--; )
          s ? (d = e[f].x - a,
          p = e[f].y - l,
          d = d * d + p * p) : d = Math.abs(e[f] - a),
          d < u && (u = d,
          c = f);
      return c = !i || u <= i ? e[c] : o,
      s || c === o || un(o) ? c : c + be(o)
  }
  : Xu(e))
}, Gy = function(e, n, r, i) {
  return $n(Ie(e) ? !n : r === !0 ? !!(r = 0) : !i, function() {
      return Ie(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (n - e + r * .99)) / r) * r * i) / i
  })
}, ok = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
  return function(i) {
      return n.reduce(function(s, o) {
          return o(s)
      }, i)
  }
}, ak = function(e, n) {
  return function(r) {
      return e(parseFloat(r)) + (n || be(r))
  }
}, lk = function(e, n, r) {
  return Qy(e, n, 0, 1, r)
}, Xy = function(e, n, r) {
  return $n(r, function(i) {
      return e[~~n(i)]
  })
}, uk = function t(e, n, r) {
  var i = n - e;
  return Ie(e) ? Xy(e, t(0, e.length), n) : $n(r, function(s) {
      return (i + (s - e) % i) % i + e
  })
}, ck = function t(e, n, r) {
  var i = n - e
    , s = i * 2;
  return Ie(e) ? Xy(e, t(0, e.length - 1), n) : $n(r, function(o) {
      return o = (s + (o - e) % s) % s || 0,
      e + (o > i ? s - o : o)
  })
}, Es = function(e) {
  for (var n = 0, r = "", i, s, o, a; ~(i = e.indexOf("random(", n)); )
      o = e.indexOf(")", i),
      a = e.charAt(i + 7) === "[",
      s = e.substr(i + 7, o - i - 7).match(a ? Ry : Uu),
      r += e.substr(n, i - n) + Gy(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5),
      n = o + 1;
  return r + e.substr(n, e.length - n)
}, Qy = function(e, n, r, i, s) {
  var o = n - e
    , a = i - r;
  return $n(s, function(l) {
      return r + ((l - e) / o * a || 0)
  })
}, fk = function t(e, n, r, i) {
  var s = isNaN(e + n) ? 0 : function(p) {
      return (1 - p) * e + p * n
  }
  ;
  if (!s) {
      var o = Pe(e), a = {}, l, u, c, f, d;
      if (r === !0 && (i = 1) && (r = null),
      o)
          e = {
              p: e
          },
          n = {
              p: n
          };
      else if (Ie(e) && !Ie(n)) {
          for (c = [],
          f = e.length,
          d = f - 2,
          u = 1; u < f; u++)
              c.push(t(e[u - 1], e[u]));
          f--,
          s = function(v) {
              v *= f;
              var h = Math.min(d, ~~v);
              return c[h](v - h)
          }
          ,
          r = n
      } else
          i || (e = ui(Ie(e) ? [] : {}, e));
      if (!c) {
          for (l in n)
              Uf.call(a, e, l, "get", n[l]);
          s = function(v) {
              return Kf(v, a) || (o ? e.p : e)
          }
      }
  }
  return $n(r, s)
}, Cp = function(e, n, r) {
  var i = e.labels, s = wt, o, a, l;
  for (o in i)
      a = i[o] - n,
      a < 0 == !!r && a && s > (a = Math.abs(a)) && (l = o,
      s = a);
  return l
}, ot = function(e, n, r) {
  var i = e.vars, s = i[n], o = ne, a = e._ctx, l, u, c;
  if (s)
      return l = i[n + "Params"],
      u = i.callbackScope || e,
      r && Rn.length && ua(),
      a && (ne = a),
      c = l ? s.apply(u, l) : s.call(u),
      ne = o,
      c
}, bi = function(e) {
  return Vn(e),
  e.scrollTrigger && e.scrollTrigger.kill(!!Ne),
  e.progress() < 1 && ot(e, "onInterrupt"),
  e
}, Ur, Zy = [], qy = function(e) {
  if (e)
      if (e = !e.name && e.default || e,
      Of() || e.headless) {
          var n = e.name
            , r = fe(e)
            , i = n && !r && e.init ? function() {
              this._props = []
          }
          : e
            , s = {
              init: Cs,
              render: Kf,
              add: Uf,
              kill: Ek,
              modifier: Ck,
              rawVars: 0
          }
            , o = {
              targetTest: 0,
              get: 0,
              getSetter: Hf,
              aliases: {},
              register: 0
          };
          if (di(),
          e !== i) {
              if (rt[n])
                  return;
              dt(i, dt(ca(e, s), o)),
              ui(i.prototype, ui(s, ca(e, o))),
              rt[i.prop = n] = i,
              e.targetTest && (Mo.push(i),
              If[n] = 1),
              n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin"
          }
          Ly(n, i),
          e.register && e.register(tt, i, Je)
      } else
          Zy.push(e)
}, X = 255, Vi = {
  aqua: [0, X, X],
  lime: [0, X, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, X],
  navy: [0, 0, 128],
  white: [X, X, X],
  olive: [128, 128, 0],
  yellow: [X, X, 0],
  orange: [X, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [X, 0, 0],
  pink: [X, 192, 203],
  cyan: [0, X, X],
  transparent: [X, X, X, 0]
}, El = function(e, n, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0,
  (e * 6 < 1 ? n + (r - n) * e * 6 : e < .5 ? r : e * 3 < 2 ? n + (r - n) * (2 / 3 - e) * 6 : n) * X + .5 | 0
}, Jy = function(e, n, r) {
  var i = e ? un(e) ? [e >> 16, e >> 8 & X, e & X] : 0 : Vi.black, s, o, a, l, u, c, f, d, p, v;
  if (!i) {
      if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
      Vi[e])
          i = Vi[e];
      else if (e.charAt(0) === "#") {
          if (e.length < 6 && (s = e.charAt(1),
          o = e.charAt(2),
          a = e.charAt(3),
          e = "#" + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
          e.length === 9)
              return i = parseInt(e.substr(1, 6), 16),
              [i >> 16, i >> 8 & X, i & X, parseInt(e.substr(7), 16) / 255];
          e = parseInt(e.substr(1), 16),
          i = [e >> 16, e >> 8 & X, e & X]
      } else if (e.substr(0, 3) === "hsl") {
          if (i = v = e.match(Uu),
          !n)
              l = +i[0] % 360 / 360,
              u = +i[1] / 100,
              c = +i[2] / 100,
              o = c <= .5 ? c * (u + 1) : c + u - c * u,
              s = c * 2 - o,
              i.length > 3 && (i[3] *= 1),
              i[0] = El(l + 1 / 3, s, o),
              i[1] = El(l, s, o),
              i[2] = El(l - 1 / 3, s, o);
          else if (~e.indexOf("="))
              return i = e.match(Ny),
              r && i.length < 4 && (i[3] = 1),
              i
      } else
          i = e.match(Uu) || Vi.transparent;
      i = i.map(Number)
  }
  return n && !v && (s = i[0] / X,
  o = i[1] / X,
  a = i[2] / X,
  f = Math.max(s, o, a),
  d = Math.min(s, o, a),
  c = (f + d) / 2,
  f === d ? l = u = 0 : (p = f - d,
  u = c > .5 ? p / (2 - f - d) : p / (f + d),
  l = f === s ? (o - a) / p + (o < a ? 6 : 0) : f === o ? (a - s) / p + 2 : (s - o) / p + 4,
  l *= 60),
  i[0] = ~~(l + .5),
  i[1] = ~~(u * 100 + .5),
  i[2] = ~~(c * 100 + .5)),
  r && i.length < 4 && (i[3] = 1),
  i
}, ev = function(e) {
  var n = []
    , r = []
    , i = -1;
  return e.split(Dn).forEach(function(s) {
      var o = s.match(Br) || [];
      n.push.apply(n, o),
      r.push(i += o.length + 1)
  }),
  n.c = r,
  n
}, Ep = function(e, n, r) {
  var i = "", s = (e + i).match(Dn), o = n ? "hsla(" : "rgba(", a = 0, l, u, c, f;
  if (!s)
      return e;
  if (s = s.map(function(d) {
      return (d = Jy(d, n, 1)) && o + (n ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")"
  }),
  r && (c = ev(e),
  l = r.c,
  l.join(i) !== c.c.join(i)))
      for (u = e.replace(Dn, "1").split(Br),
      f = u.length - 1; a < f; a++)
          i += u[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (c.length ? c : s.length ? s : r).shift());
  if (!u)
      for (u = e.split(Dn),
      f = u.length - 1; a < f; a++)
          i += u[a] + s[a];
  return i + u[f]
}, Dn = function() {
  var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Vi)
      t += "|" + e + "\\b";
  return new RegExp(t + ")","gi")
}(), dk = /hsl[a]?\(/, tv = function(e) {
  var n = e.join(" "), r;
  if (Dn.lastIndex = 0,
  Dn.test(n))
      return r = dk.test(n),
      e[1] = Ep(e[1], r),
      e[0] = Ep(e[0], r, ev(e[1])),
      !0
}, Ms, it = function() {
  var t = Date.now, e = 500, n = 33, r = t(), i = r, s = 1e3 / 240, o = s, a = [], l, u, c, f, d, p, v = function h(x) {
      var g = t() - i, m = x === !0, y, S, w, T;
      if ((g > e || g < 0) && (r += g - n),
      i += g,
      w = i - r,
      y = w - o,
      (y > 0 || m) && (T = ++f.frame,
      d = w - f.time * 1e3,
      f.time = w = w / 1e3,
      o += y + (y >= s ? 4 : s - y),
      S = 1),
      m || (l = u(h)),
      S)
          for (p = 0; p < a.length; p++)
              a[p](w, d, T, x)
  };
  return f = {
      time: 0,
      frame: 0,
      tick: function() {
          v(!0)
      },
      deltaRatio: function(x) {
          return d / (1e3 / (x || 60))
      },
      wake: function() {
          Dy && (!$u && Of() && (It = $u = window,
          bf = It.document || {},
          ft.gsap = tt,
          (It.gsapVersions || (It.gsapVersions = [])).push(tt.version),
          jy(la || It.GreenSockGlobals || !It.gsap && It || {}),
          Zy.forEach(qy)),
          c = typeof requestAnimationFrame < "u" && requestAnimationFrame,
          l && f.sleep(),
          u = c || function(x) {
              return setTimeout(x, o - f.time * 1e3 + 1 | 0)
          }
          ,
          Ms = 1,
          v(2))
      },
      sleep: function() {
          (c ? cancelAnimationFrame : clearTimeout)(l),
          Ms = 0,
          u = Cs
      },
      lagSmoothing: function(x, g) {
          e = x || 1 / 0,
          n = Math.min(g || 33, e)
      },
      fps: function(x) {
          s = 1e3 / (x || 240),
          o = f.time * 1e3 + s
      },
      add: function(x, g, m) {
          var y = g ? function(S, w, T, C) {
              x(S, w, T, C),
              f.remove(y)
          }
          : x;
          return f.remove(x),
          a[m ? "unshift" : "push"](y),
          di(),
          y
      },
      remove: function(x, g) {
          ~(g = a.indexOf(x)) && a.splice(g, 1) && p >= g && p--
      },
      _listeners: a
  },
  f
}(), di = function() {
  return !Ms && it.wake()
}, W = {}, hk = /^[\d.\-M][\d.\-,\s]/, pk = /["']/g, mk = function(e) {
  for (var n = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], s = 1, o = r.length, a, l, u; s < o; s++)
      l = r[s],
      a = s !== o - 1 ? l.lastIndexOf(",") : l.length,
      u = l.substr(0, a),
      n[i] = isNaN(u) ? u.replace(pk, "").trim() : +u,
      i = l.substr(a + 1).trim();
  return n
}, gk = function(e) {
  var n = e.indexOf("(") + 1
    , r = e.indexOf(")")
    , i = e.indexOf("(", n);
  return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)
}, yk = function(e) {
  var n = (e + "").split("(")
    , r = W[n[0]];
  return r && n.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [mk(n[1])] : gk(e).split(",").map(Iy)) : W._CE && hk.test(e) ? W._CE("", e) : r
}, nv = function(e) {
  return function(n) {
      return 1 - e(1 - n)
  }
}, rv = function t(e, n) {
  for (var r = e._first, i; r; )
      r instanceof Be ? t(r, n) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== n && (r.timeline ? t(r.timeline, n) : (i = r._ease,
      r._ease = r._yEase,
      r._yEase = i,
      r._yoyo = n)),
      r = r._next
}, ar = function(e, n) {
  return e && (fe(e) ? e : W[e] || yk(e)) || n
}, vr = function(e, n, r, i) {
  r === void 0 && (r = function(l) {
      return 1 - n(1 - l)
  }
  ),
  i === void 0 && (i = function(l) {
      return l < .5 ? n(l * 2) / 2 : 1 - n((1 - l) * 2) / 2
  }
  );
  var s = {
      easeIn: n,
      easeOut: r,
      easeInOut: i
  }, o;
  return qe(e, function(a) {
      W[a] = ft[a] = s,
      W[o = a.toLowerCase()] = r;
      for (var l in s)
          W[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = W[a + "." + l] = s[l]
  }),
  s
}, iv = function(e) {
  return function(n) {
      return n < .5 ? (1 - e(1 - n * 2)) / 2 : .5 + e((n - .5) * 2) / 2
  }
}, Ml = function t(e, n, r) {
  var i = n >= 1 ? n : 1
    , s = (r || (e ? .3 : .45)) / (n < 1 ? n : 1)
    , o = s / Bu * (Math.asin(1 / i) || 0)
    , a = function(c) {
      return c === 1 ? 1 : i * Math.pow(2, -10 * c) * HT((c - o) * s) + 1
  }
    , l = e === "out" ? a : e === "in" ? function(u) {
      return 1 - a(1 - u)
  }
  : iv(a);
  return s = Bu / s,
  l.config = function(u, c) {
      return t(e, u, c)
  }
  ,
  l
}, Nl = function t(e, n) {
  n === void 0 && (n = 1.70158);
  var r = function(o) {
      return o ? --o * o * ((n + 1) * o + n) + 1 : 0
  }
    , i = e === "out" ? r : e === "in" ? function(s) {
      return 1 - r(1 - s)
  }
  : iv(r);
  return i.config = function(s) {
      return t(e, s)
  }
  ,
  i
};
qe("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
  var n = e < 5 ? e + 1 : e;
  vr(t + ",Power" + (n - 1), e ? function(r) {
      return Math.pow(r, n)
  }
  : function(r) {
      return r
  }
  , function(r) {
      return 1 - Math.pow(1 - r, n)
  }, function(r) {
      return r < .5 ? Math.pow(r * 2, n) / 2 : 1 - Math.pow((1 - r) * 2, n) / 2
  })
});
W.Linear.easeNone = W.none = W.Linear.easeIn;
vr("Elastic", Ml("in"), Ml("out"), Ml());
(function(t, e) {
  var n = 1 / e
    , r = 2 * n
    , i = 2.5 * n
    , s = function(a) {
      return a < n ? t * a * a : a < r ? t * Math.pow(a - 1.5 / e, 2) + .75 : a < i ? t * (a -= 2.25 / e) * a + .9375 : t * Math.pow(a - 2.625 / e, 2) + .984375
  };
  vr("Bounce", function(o) {
      return 1 - s(1 - o)
  }, s)
}
)(7.5625, 2.75);
vr("Expo", function(t) {
  return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
});
vr("Circ", function(t) {
  return -(Ey(1 - t * t) - 1)
});
vr("Sine", function(t) {
  return t === 1 ? 1 : -WT(t * UT) + 1
});
vr("Back", Nl("in"), Nl("out"), Nl());
W.SteppedEase = W.steps = ft.SteppedEase = {
  config: function(e, n) {
      e === void 0 && (e = 1);
      var r = 1 / e
        , i = e + (n ? 0 : 1)
        , s = n ? 1 : 0
        , o = 1 - Q;
      return function(a) {
          return ((i * Us(0, o, a) | 0) + s) * r
      }
  }
};
li.ease = W["quad.out"];
qe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
  return Ff += t + "," + t + "Params,"
});
var sv = function(e, n) {
  this.id = $T++,
  e._gsap = this,
  this.target = e,
  this.harness = n,
  this.get = n ? n.get : by,
  this.set = n ? n.getSetter : Hf
}
, Ns = function() {
  function t(n) {
      this.vars = n,
      this._delay = +n.delay || 0,
      (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0,
      this._yoyo = !!n.yoyo || !!n.yoyoEase),
      this._ts = 1,
      fi(this, +n.duration, 1, 1),
      this.data = n.data,
      ne && (this._ctx = ne,
      ne.data.push(this)),
      Ms || it.wake()
  }
  var e = t.prototype;
  return e.delay = function(r) {
      return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay),
      this._delay = r,
      this) : this._delay
  }
  ,
  e.duration = function(r) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
  }
  ,
  e.totalDuration = function(r) {
      return arguments.length ? (this._dirty = 0,
      fi(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
  }
  ,
  e.totalTime = function(r, i) {
      if (di(),
      !arguments.length)
          return this._tTime;
      var s = this._dp;
      if (s && s.smoothChildTiming && this._ts) {
          for (Ia(this, r),
          !s._dp || s.parent || By(s, this); s && s.parent; )
              s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0),
              s = s.parent;
          !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && zt(this._dp, this, this._start - this._delay)
      }
      return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === Q || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r),
      Vy(this, r, i)),
      this
  }
  ,
  e.time = function(r, i) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + kp(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
  }
  ,
  e.totalProgress = function(r, i) {
      return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
  }
  ,
  e.progress = function(r, i) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + kp(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
  }
  ,
  e.iteration = function(r, i) {
      var s = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (r - 1) * s, i) : this._repeat ? ci(this._tTime, s) + 1 : 1
  }
  ,
  e.timeScale = function(r, i) {
      if (!arguments.length)
          return this._rts === -Q ? 0 : this._rts;
      if (this._rts === r)
          return this;
      var s = this.parent && this._ts ? fa(this.parent._time, this) : this._tTime;
      return this._rts = +r || 0,
      this._ts = this._ps || r === -Q ? 0 : this._rts,
      this.totalTime(Us(-Math.abs(this._delay), this.totalDuration(), s), i !== !1),
      Va(this),
      qT(this)
  }
  ,
  e.paused = function(r) {
      return arguments.length ? (this._ps !== r && (this._ps = r,
      r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
      this._ts = this._act = 0) : (di(),
      this._ts = this._rts,
      this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Q && (this._tTime -= Q)))),
      this) : this._ps
  }
  ,
  e.startTime = function(r) {
      if (arguments.length) {
          this._start = r;
          var i = this.parent || this._dp;
          return i && (i._sort || !this.parent) && zt(i, this, r - this._delay),
          this
      }
      return this._start
  }
  ,
  e.endTime = function(r) {
      return this._start + (Ze(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
  }
  ,
  e.rawTime = function(r) {
      var i = this.parent || this._dp;
      return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? fa(i.rawTime(r), this) : this._tTime : this._tTime
  }
  ,
  e.revert = function(r) {
      r === void 0 && (r = GT);
      var i = Ne;
      return Ne = r,
      Bf(this) && (this.timeline && this.timeline.revert(r),
      this.totalTime(-.01, r.suppressEvents)),
      this.data !== "nested" && r.kill !== !1 && this.kill(),
      Ne = i,
      this
  }
  ,
  e.globalTime = function(r) {
      for (var i = this, s = arguments.length ? r : i.rawTime(); i; )
          s = i._start + s / (Math.abs(i._ts) || 1),
          i = i._dp;
      return !this.parent && this._sat ? this._sat.globalTime(r) : s
  }
  ,
  e.repeat = function(r) {
      return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r,
      Pp(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
  }
  ,
  e.repeatDelay = function(r) {
      if (arguments.length) {
          var i = this._time;
          return this._rDelay = r,
          Pp(this),
          i ? this.time(i) : this
      }
      return this._rDelay
  }
  ,
  e.yoyo = function(r) {
      return arguments.length ? (this._yoyo = r,
      this) : this._yoyo
  }
  ,
  e.seek = function(r, i) {
      return this.totalTime(yt(this, r), Ze(i))
  }
  ,
  e.restart = function(r, i) {
      return this.play().totalTime(r ? -this._delay : 0, Ze(i)),
      this._dur || (this._zTime = -Q),
      this
  }
  ,
  e.play = function(r, i) {
      return r != null && this.seek(r, i),
      this.reversed(!1).paused(!1)
  }
  ,
  e.reverse = function(r, i) {
      return r != null && this.seek(r || this.totalDuration(), i),
      this.reversed(!0).paused(!1)
  }
  ,
  e.pause = function(r, i) {
      return r != null && this.seek(r, i),
      this.paused(!0)
  }
  ,
  e.resume = function() {
      return this.paused(!1)
  }
  ,
  e.reversed = function(r) {
      return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -Q : 0)),
      this) : this._rts < 0
  }
  ,
  e.invalidate = function() {
      return this._initted = this._act = 0,
      this._zTime = -Q,
      this
  }
  ,
  e.isActive = function() {
      var r = this.parent || this._dp, i = this._start, s;
      return !!(!r || this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= i && s < this.endTime(!0) - Q)
  }
  ,
  e.eventCallback = function(r, i, s) {
      var o = this.vars;
      return arguments.length > 1 ? (i ? (o[r] = i,
      s && (o[r + "Params"] = s),
      r === "onUpdate" && (this._onUpdate = i)) : delete o[r],
      this) : o[r]
  }
  ,
  e.then = function(r) {
      var i = this;
      return new Promise(function(s) {
          var o = fe(r) ? r : Fy
            , a = function() {
              var u = i.then;
              i.then = null,
              fe(o) && (o = o(i)) && (o.then || o === i) && (i.then = u),
              s(o),
              i.then = u
          };
          i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a
      }
      )
  }
  ,
  e.kill = function() {
      bi(this)
  }
  ,
  t
}();
dt(Ns.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -Q,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Be = function(t) {
  Cy(e, t);
  function e(r, i) {
      var s;
      return r === void 0 && (r = {}),
      s = t.call(this, r) || this,
      s.labels = {},
      s.smoothChildTiming = !!r.smoothChildTiming,
      s.autoRemoveChildren = !!r.autoRemoveChildren,
      s._sort = Ze(r.sortChildren),
      ie && zt(r.parent || ie, Xt(s), i),
      r.reversed && s.reverse(),
      r.paused && s.paused(!0),
      r.scrollTrigger && Uy(Xt(s), r.scrollTrigger),
      s
  }
  var n = e.prototype;
  return n.to = function(i, s, o) {
      return Ji(0, arguments, this),
      this
  }
  ,
  n.from = function(i, s, o) {
      return Ji(1, arguments, this),
      this
  }
  ,
  n.fromTo = function(i, s, o, a) {
      return Ji(2, arguments, this),
      this
  }
  ,
  n.set = function(i, s, o) {
      return s.duration = 0,
      s.parent = this,
      qi(s).repeatDelay || (s.repeat = 0),
      s.immediateRender = !!s.immediateRender,
      new ye(i,s,yt(this, o),1),
      this
  }
  ,
  n.call = function(i, s, o) {
      return zt(this, ye.delayedCall(0, i, s), o)
  }
  ,
  n.staggerTo = function(i, s, o, a, l, u, c) {
      return o.duration = s,
      o.stagger = o.stagger || a,
      o.onComplete = u,
      o.onCompleteParams = c,
      o.parent = this,
      new ye(i,o,yt(this, l)),
      this
  }
  ,
  n.staggerFrom = function(i, s, o, a, l, u, c) {
      return o.runBackwards = 1,
      qi(o).immediateRender = Ze(o.immediateRender),
      this.staggerTo(i, s, o, a, l, u, c)
  }
  ,
  n.staggerFromTo = function(i, s, o, a, l, u, c, f) {
      return a.startAt = o,
      qi(a).immediateRender = Ze(a.immediateRender),
      this.staggerTo(i, s, a, l, u, c, f)
  }
  ,
  n.render = function(i, s, o) {
      var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = i <= 0 ? 0 : ve(i), f = this._zTime < 0 != i < 0 && (this._initted || !u), d, p, v, h, x, g, m, y, S, w, T, C;
      if (this !== ie && c > l && i >= 0 && (c = l),
      c !== this._tTime || o || f) {
          if (a !== this._time && u && (c += this._time - a,
          i += this._time - a),
          d = c,
          S = this._start,
          y = this._ts,
          g = !y,
          f && (u || (a = this._zTime),
          (i || !s) && (this._zTime = i)),
          this._repeat) {
              if (T = this._yoyo,
              x = u + this._rDelay,
              this._repeat < -1 && i < 0)
                  return this.totalTime(x * 100 + i, s, o);
              if (d = ve(c % x),
              c === l ? (h = this._repeat,
              d = u) : (w = ve(c / x),
              h = ~~w,
              h && h === w && (d = u,
              h--),
              d > u && (d = u)),
              w = ci(this._tTime, x),
              !a && this._tTime && w !== h && this._tTime - w * x - this._dur <= 0 && (w = h),
              T && h & 1 && (d = u - d,
              C = 1),
              h !== w && !this._lock) {
                  var k = T && w & 1
                    , P = k === (T && h & 1);
                  if (h < w && (k = !k),
                  a = k ? 0 : c % u ? u : c,
                  this._lock = 1,
                  this.render(a || (C ? 0 : ve(h * x)), s, !u)._lock = 0,
                  this._tTime = c,
                  !s && this.parent && ot(this, "onRepeat"),
                  this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1),
                  a && a !== this._time || g !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                      return this;
                  if (u = this._dur,
                  l = this._tDur,
                  P && (this._lock = 2,
                  a = k ? u : -1e-4,
                  this.render(a, !0),
                  this.vars.repeatRefresh && !C && this.invalidate()),
                  this._lock = 0,
                  !this._ts && !g)
                      return this;
                  rv(this, C)
              }
          }
          if (this._hasPause && !this._forcing && this._lock < 2 && (m = nk(this, ve(a), ve(d)),
          m && (c -= d - (d = m._start))),
          this._tTime = c,
          this._time = d,
          this._act = !y,
          this._initted || (this._onUpdate = this.vars.onUpdate,
          this._initted = 1,
          this._zTime = i,
          a = 0),
          !a && c && !s && !w && (ot(this, "onStart"),
          this._tTime !== c))
              return this;
          if (d >= a && i >= 0)
              for (p = this._first; p; ) {
                  if (v = p._next,
                  (p._act || d >= p._start) && p._ts && m !== p) {
                      if (p.parent !== this)
                          return this.render(i, s, o);
                      if (p.render(p._ts > 0 ? (d - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (d - p._start) * p._ts, s, o),
                      d !== this._time || !this._ts && !g) {
                          m = 0,
                          v && (c += this._zTime = -Q);
                          break
                      }
                  }
                  p = v
              }
          else {
              p = this._last;
              for (var E = i < 0 ? i : d; p; ) {
                  if (v = p._prev,
                  (p._act || E <= p._end) && p._ts && m !== p) {
                      if (p.parent !== this)
                          return this.render(i, s, o);
                      if (p.render(p._ts > 0 ? (E - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (E - p._start) * p._ts, s, o || Ne && Bf(p)),
                      d !== this._time || !this._ts && !g) {
                          m = 0,
                          v && (c += this._zTime = E ? -Q : Q);
                          break
                      }
                  }
                  p = v
              }
          }
          if (m && !s && (this.pause(),
          m.render(d >= a ? 0 : -Q)._zTime = d >= a ? 1 : -1,
          this._ts))
              return this._start = S,
              Va(this),
              this.render(i, s, o);
          this._onUpdate && !s && ot(this, "onUpdate", !0),
          (c === l && this._tTime >= this.totalDuration() || !c && a) && (S === this._start || Math.abs(y) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && Vn(this, 1),
          !s && !(i < 0 && !a) && (c || a || !l) && (ot(this, c === l && i >= 0 ? "onComplete" : "onReverseComplete", !0),
          this._prom && !(c < l && this.timeScale() > 0) && this._prom())))
      }
      return this
  }
  ,
  n.add = function(i, s) {
      var o = this;
      if (un(s) || (s = yt(this, s, i)),
      !(i instanceof Ns)) {
          if (Ie(i))
              return i.forEach(function(a) {
                  return o.add(a, s)
              }),
              this;
          if (Pe(i))
              return this.addLabel(i, s);
          if (fe(i))
              i = ye.delayedCall(0, i);
          else
              return this
      }
      return this !== i ? zt(this, i, s) : this
  }
  ,
  n.getChildren = function(i, s, o, a) {
      i === void 0 && (i = !0),
      s === void 0 && (s = !0),
      o === void 0 && (o = !0),
      a === void 0 && (a = -wt);
      for (var l = [], u = this._first; u; )
          u._start >= a && (u instanceof ye ? s && l.push(u) : (o && l.push(u),
          i && l.push.apply(l, u.getChildren(!0, s, o)))),
          u = u._next;
      return l
  }
  ,
  n.getById = function(i) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
          if (s[o].vars.id === i)
              return s[o]
  }
  ,
  n.remove = function(i) {
      return Pe(i) ? this.removeLabel(i) : fe(i) ? this.killTweensOf(i) : (i.parent === this && ba(this, i),
      i === this._recent && (this._recent = this._last),
      or(this))
  }
  ,
  n.totalTime = function(i, s) {
      return arguments.length ? (this._forcing = 1,
      !this._dp && this._ts && (this._start = ve(it.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))),
      t.prototype.totalTime.call(this, i, s),
      this._forcing = 0,
      this) : this._tTime
  }
  ,
  n.addLabel = function(i, s) {
      return this.labels[i] = yt(this, s),
      this
  }
  ,
  n.removeLabel = function(i) {
      return delete this.labels[i],
      this
  }
  ,
  n.addPause = function(i, s, o) {
      var a = ye.delayedCall(0, s || Cs, o);
      return a.data = "isPause",
      this._hasPause = 1,
      zt(this, a, yt(this, i))
  }
  ,
  n.removePause = function(i) {
      var s = this._first;
      for (i = yt(this, i); s; )
          s._start === i && s.data === "isPause" && Vn(s),
          s = s._next
  }
  ,
  n.killTweensOf = function(i, s, o) {
      for (var a = this.getTweensOf(i, o), l = a.length; l--; )
          _n !== a[l] && a[l].kill(i, s);
      return this
  }
  ,
  n.getTweensOf = function(i, s) {
      for (var o = [], a = St(i), l = this._first, u = un(s), c; l; )
          l instanceof ye ? XT(l._targets, a) && (u ? (!_n || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c),
          l = l._next;
      return o
  }
  ,
  n.tweenTo = function(i, s) {
      s = s || {};
      var o = this, a = yt(o, i), l = s, u = l.startAt, c = l.onStart, f = l.onStartParams, d = l.immediateRender, p, v = ye.to(o, dt({
          ease: s.ease || "none",
          lazy: !1,
          immediateRender: !1,
          time: a,
          overwrite: "auto",
          duration: s.duration || Math.abs((a - (u && "time"in u ? u.time : o._time)) / o.timeScale()) || Q,
          onStart: function() {
              if (o.pause(),
              !p) {
                  var x = s.duration || Math.abs((a - (u && "time"in u ? u.time : o._time)) / o.timeScale());
                  v._dur !== x && fi(v, x, 0, 1).render(v._time, !0, !0),
                  p = 1
              }
              c && c.apply(v, f || [])
          }
      }, s));
      return d ? v.render(0) : v
  }
  ,
  n.tweenFromTo = function(i, s, o) {
      return this.tweenTo(s, dt({
          startAt: {
              time: yt(this, i)
          }
      }, o))
  }
  ,
  n.recent = function() {
      return this._recent
  }
  ,
  n.nextLabel = function(i) {
      return i === void 0 && (i = this._time),
      Cp(this, yt(this, i))
  }
  ,
  n.previousLabel = function(i) {
      return i === void 0 && (i = this._time),
      Cp(this, yt(this, i), 1)
  }
  ,
  n.currentLabel = function(i) {
      return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + Q)
  }
  ,
  n.shiftChildren = function(i, s, o) {
      o === void 0 && (o = 0);
      for (var a = this._first, l = this.labels, u; a; )
          a._start >= o && (a._start += i,
          a._end += i),
          a = a._next;
      if (s)
          for (u in l)
              l[u] >= o && (l[u] += i);
      return or(this)
  }
  ,
  n.invalidate = function(i) {
      var s = this._first;
      for (this._lock = 0; s; )
          s.invalidate(i),
          s = s._next;
      return t.prototype.invalidate.call(this, i)
  }
  ,
  n.clear = function(i) {
      i === void 0 && (i = !0);
      for (var s = this._first, o; s; )
          o = s._next,
          this.remove(s),
          s = o;
      return this._dp && (this._time = this._tTime = this._pTime = 0),
      i && (this.labels = {}),
      or(this)
  }
  ,
  n.totalDuration = function(i) {
      var s = 0, o = this, a = o._last, l = wt, u, c, f;
      if (arguments.length)
          return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
      if (o._dirty) {
          for (f = o.parent; a; )
              u = a._prev,
              a._dirty && a.totalDuration(),
              c = a._start,
              c > l && o._sort && a._ts && !o._lock ? (o._lock = 1,
              zt(o, a, c - a._delay, 1)._lock = 0) : l = c,
              c < 0 && a._ts && (s -= c,
              (!f && !o._dp || f && f.smoothChildTiming) && (o._start += c / o._ts,
              o._time -= c,
              o._tTime -= c),
              o.shiftChildren(-c, !1, -1 / 0),
              l = 0),
              a._end > s && a._ts && (s = a._end),
              a = u;
          fi(o, o === ie && o._time > s ? o._time : s, 1, 1),
          o._dirty = 0
      }
      return o._tDur
  }
  ,
  e.updateRoot = function(i) {
      if (ie._ts && (Vy(ie, fa(i, ie)),
      Oy = it.frame),
      it.frame >= Sp) {
          Sp += ut.autoSleep || 120;
          var s = ie._first;
          if ((!s || !s._ts) && ut.autoSleep && it._listeners.length < 2) {
              for (; s && !s._ts; )
                  s = s._next;
              s || it.sleep()
          }
      }
  }
  ,
  e
}(Ns);
dt(Be.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var vk = function(e, n, r, i, s, o, a) {
  var l = new Je(this._pt,e,n,0,1,fv,null,s), u = 0, c = 0, f, d, p, v, h, x, g, m;
  for (l.b = r,
  l.e = i,
  r += "",
  i += "",
  (g = ~i.indexOf("random(")) && (i = Es(i)),
  o && (m = [r, i],
  o(m, e, n),
  r = m[0],
  i = m[1]),
  d = r.match(Pl) || []; f = Pl.exec(i); )
      v = f[0],
      h = i.substring(u, f.index),
      p ? p = (p + 1) % 5 : h.substr(-5) === "rgba(" && (p = 1),
      v !== d[c++] && (x = parseFloat(d[c - 1]) || 0,
      l._pt = {
          _next: l._pt,
          p: h || c === 1 ? h : ",",
          s: x,
          c: v.charAt(1) === "=" ? Xr(x, v) - x : parseFloat(v) - x,
          m: p && p < 4 ? Math.round : 0
      },
      u = Pl.lastIndex);
  return l.c = u < i.length ? i.substring(u, i.length) : "",
  l.fp = a,
  (Ay.test(i) || g) && (l.e = 0),
  this._pt = l,
  l
}, Uf = function(e, n, r, i, s, o, a, l, u, c) {
  fe(i) && (i = i(s || 0, e, o));
  var f = e[n], d = r !== "get" ? r : fe(f) ? u ? e[n.indexOf("set") || !fe(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](u) : e[n]() : f, p = fe(f) ? u ? Tk : uv : Wf, v;
  if (Pe(i) && (~i.indexOf("random(") && (i = Es(i)),
  i.charAt(1) === "=" && (v = Xr(d, i) + (be(d) || 0),
  (v || v === 0) && (i = v))),
  !c || d !== i || Qu)
      return !isNaN(d * i) && i !== "" ? (v = new Je(this._pt,e,n,+d || 0,i - (d || 0),typeof f == "boolean" ? Pk : cv,0,p),
      u && (v.fp = u),
      a && v.modifier(a, this, e),
      this._pt = v) : (!f && !(n in e) && Vf(n, i),
      vk.call(this, e, n, d, i, p, l || ut.stringFilter, u))
}, xk = function(e, n, r, i, s) {
  if (fe(e) && (e = es(e, s, n, r, i)),
  !Kt(e) || e.style && e.nodeType || Ie(e) || My(e))
      return Pe(e) ? es(e, s, n, r, i) : e;
  var o = {}, a;
  for (a in e)
      o[a] = es(e[a], s, n, r, i);
  return o
}, ov = function(e, n, r, i, s, o) {
  var a, l, u, c;
  if (rt[e] && (a = new rt[e]).init(s, a.rawVars ? n[e] : xk(n[e], i, s, o, r), r, i, o) !== !1 && (r._pt = l = new Je(r._pt,s,e,0,1,a.render,a,0,a.priority),
  r !== Ur))
      for (u = r._ptLookup[r._targets.indexOf(s)],
      c = a._props.length; c--; )
          u[a._props[c]] = l;
  return a
}, _n, Qu, $f = function t(e, n, r) {
  var i = e.vars, s = i.ease, o = i.startAt, a = i.immediateRender, l = i.lazy, u = i.onUpdate, c = i.runBackwards, f = i.yoyoEase, d = i.keyframes, p = i.autoRevert, v = e._dur, h = e._startAt, x = e._targets, g = e.parent, m = g && g.data === "nested" ? g.vars.targets : x, y = e._overwrite === "auto" && !jf, S = e.timeline, w, T, C, k, P, E, O, V, I, z, G, K, B;
  if (S && (!d || !s) && (s = "none"),
  e._ease = ar(s, li.ease),
  e._yEase = f ? nv(ar(f === !0 ? s : f, li.ease)) : 0,
  f && e._yoyo && !e._repeat && (f = e._yEase,
  e._yEase = e._ease,
  e._ease = f),
  e._from = !S && !!i.runBackwards,
  !S || d && !i.stagger) {
      if (V = x[0] ? sr(x[0]).harness : 0,
      K = V && i[V.prop],
      w = ca(i, If),
      h && (h._zTime < 0 && h.progress(1),
      n < 0 && c && a && !p ? h.render(-1, !0) : h.revert(c && v ? Eo : YT),
      h._lazy = 0),
      o) {
          if (Vn(e._startAt = ye.set(x, dt({
              data: "isStart",
              overwrite: !1,
              parent: g,
              immediateRender: !0,
              lazy: !h && Ze(l),
              startAt: null,
              delay: 0,
              onUpdate: u && function() {
                  return ot(e, "onUpdate")
              }
              ,
              stagger: 0
          }, o))),
          e._startAt._dp = 0,
          e._startAt._sat = e,
          n < 0 && (Ne || !a && !p) && e._startAt.revert(Eo),
          a && v && n <= 0 && r <= 0) {
              n && (e._zTime = n);
              return
          }
      } else if (c && v && !h) {
          if (n && (a = !1),
          C = dt({
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !h && Ze(l),
              immediateRender: a,
              stagger: 0,
              parent: g
          }, w),
          K && (C[V.prop] = K),
          Vn(e._startAt = ye.set(x, C)),
          e._startAt._dp = 0,
          e._startAt._sat = e,
          n < 0 && (Ne ? e._startAt.revert(Eo) : e._startAt.render(-1, !0)),
          e._zTime = n,
          !a)
              t(e._startAt, Q, Q);
          else if (!n)
              return
      }
      for (e._pt = e._ptCache = 0,
      l = v && Ze(l) || l && !v,
      T = 0; T < x.length; T++) {
          if (P = x[T],
          O = P._gsap || zf(x)[T]._gsap,
          e._ptLookup[T] = z = {},
          Wu[O.id] && Rn.length && ua(),
          G = m === x ? T : m.indexOf(P),
          V && (I = new V).init(P, K || w, e, G, m) !== !1 && (e._pt = k = new Je(e._pt,P,I.name,0,1,I.render,I,0,I.priority),
          I._props.forEach(function(D) {
              z[D] = k
          }),
          I.priority && (E = 1)),
          !V || K)
              for (C in w)
                  rt[C] && (I = ov(C, w, e, G, P, m)) ? I.priority && (E = 1) : z[C] = k = Uf.call(e, P, C, "get", w[C], G, m, 0, i.stringFilter);
          e._op && e._op[T] && e.kill(P, e._op[T]),
          y && e._pt && (_n = e,
          ie.killTweensOf(P, z, e.globalTime(n)),
          B = !e.parent,
          _n = 0),
          e._pt && l && (Wu[O.id] = 1)
      }
      E && dv(e),
      e._onInit && e._onInit(e)
  }
  e._onUpdate = u,
  e._initted = (!e._op || e._pt) && !B,
  d && n <= 0 && S.render(wt, !0, !0)
}, _k = function(e, n, r, i, s, o, a, l) {
  var u = (e._pt && e._ptCache || (e._ptCache = {}))[n], c, f, d, p;
  if (!u)
      for (u = e._ptCache[n] = [],
      d = e._ptLookup,
      p = e._targets.length; p--; ) {
          if (c = d[p][n],
          c && c.d && c.d._pt)
              for (c = c.d._pt; c && c.p !== n && c.fp !== n; )
                  c = c._next;
          if (!c)
              return Qu = 1,
              e.vars[n] = "+=0",
              $f(e, a),
              Qu = 0,
              l ? Ps(n + " not eligible for reset") : 1;
          u.push(c)
      }
  for (p = u.length; p--; )
      f = u[p],
      c = f._pt || f,
      c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + o * c.c,
      c.c = r - c.s,
      f.e && (f.e = he(r) + be(f.e)),
      f.b && (f.b = c.s + be(f.b))
}, wk = function(e, n) {
  var r = e[0] ? sr(e[0]).harness : 0, i = r && r.aliases, s, o, a, l;
  if (!i)
      return n;
  s = ui({}, n);
  for (o in i)
      if (o in s)
          for (l = i[o].split(","),
          a = l.length; a--; )
              s[l[a]] = s[o];
  return s
}, Sk = function(e, n, r, i) {
  var s = n.ease || i || "power1.inOut", o, a;
  if (Ie(n))
      a = r[e] || (r[e] = []),
      n.forEach(function(l, u) {
          return a.push({
              t: u / (n.length - 1) * 100,
              v: l,
              e: s
          })
      });
  else
      for (o in n)
          a = r[o] || (r[o] = []),
          o === "ease" || a.push({
              t: parseFloat(e),
              v: n[o],
              e: s
          })
}, es = function(e, n, r, i, s) {
  return fe(e) ? e.call(n, r, i, s) : Pe(e) && ~e.indexOf("random(") ? Es(e) : e
}, av = Ff + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", lv = {};
qe(av + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
  return lv[t] = 1
});
var ye = function(t) {
  Cy(e, t);
  function e(r, i, s, o) {
      var a;
      typeof i == "number" && (s.duration = i,
      i = s,
      s = null),
      a = t.call(this, o ? i : qi(i)) || this;
      var l = a.vars, u = l.duration, c = l.delay, f = l.immediateRender, d = l.stagger, p = l.overwrite, v = l.keyframes, h = l.defaults, x = l.scrollTrigger, g = l.yoyoEase, m = i.parent || ie, y = (Ie(r) || My(r) ? un(r[0]) : "length"in i) ? [r] : St(r), S, w, T, C, k, P, E, O;
      if (a._targets = y.length ? zf(y) : Ps("GSAP target " + r + " not found. https://gsap.com", !ut.nullTargetWarn) || [],
      a._ptLookup = [],
      a._overwrite = p,
      v || d || co(u) || co(c)) {
          if (i = a.vars,
          S = a.timeline = new Be({
              data: "nested",
              defaults: h || {},
              targets: m && m.data === "nested" ? m.vars.targets : y
          }),
          S.kill(),
          S.parent = S._dp = Xt(a),
          S._start = 0,
          d || co(u) || co(c)) {
              if (C = y.length,
              E = d && Ky(d),
              Kt(d))
                  for (k in d)
                      ~av.indexOf(k) && (O || (O = {}),
                      O[k] = d[k]);
              for (w = 0; w < C; w++)
                  T = ca(i, lv),
                  T.stagger = 0,
                  g && (T.yoyoEase = g),
                  O && ui(T, O),
                  P = y[w],
                  T.duration = +es(u, Xt(a), w, P, y),
                  T.delay = (+es(c, Xt(a), w, P, y) || 0) - a._delay,
                  !d && C === 1 && T.delay && (a._delay = c = T.delay,
                  a._start += c,
                  T.delay = 0),
                  S.to(P, T, E ? E(w, P, y) : 0),
                  S._ease = W.none;
              S.duration() ? u = c = 0 : a.timeline = 0
          } else if (v) {
              qi(dt(S.vars.defaults, {
                  ease: "none"
              })),
              S._ease = ar(v.ease || i.ease || "none");
              var V = 0, I, z, G;
              if (Ie(v))
                  v.forEach(function(K) {
                      return S.to(y, K, ">")
                  }),
                  S.duration();
              else {
                  T = {};
                  for (k in v)
                      k === "ease" || k === "easeEach" || Sk(k, v[k], T, v.easeEach);
                  for (k in T)
                      for (I = T[k].sort(function(K, B) {
                          return K.t - B.t
                      }),
                      V = 0,
                      w = 0; w < I.length; w++)
                          z = I[w],
                          G = {
                              ease: z.e,
                              duration: (z.t - (w ? I[w - 1].t : 0)) / 100 * u
                          },
                          G[k] = z.v,
                          S.to(y, G, V),
                          V += G.duration;
                  S.duration() < u && S.to({}, {
                      duration: u - S.duration()
                  })
              }
          }
          u || a.duration(u = S.duration())
      } else
          a.timeline = 0;
      return p === !0 && !jf && (_n = Xt(a),
      ie.killTweensOf(y),
      _n = 0),
      zt(m, Xt(a), s),
      i.reversed && a.reverse(),
      i.paused && a.paused(!0),
      (f || !u && !v && a._start === ve(m._time) && Ze(f) && JT(Xt(a)) && m.data !== "nested") && (a._tTime = -Q,
      a.render(Math.max(0, -c) || 0)),
      x && Uy(Xt(a), x),
      a
  }
  var n = e.prototype;
  return n.render = function(i, s, o) {
      var a = this._time, l = this._tDur, u = this._dur, c = i < 0, f = i > l - Q && !c ? l : i < Q ? 0 : i, d, p, v, h, x, g, m, y, S;
      if (!u)
          tk(this, i, s, o);
      else if (f !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
          if (d = f,
          y = this.timeline,
          this._repeat) {
              if (h = u + this._rDelay,
              this._repeat < -1 && c)
                  return this.totalTime(h * 100 + i, s, o);
              if (d = ve(f % h),
              f === l ? (v = this._repeat,
              d = u) : (x = ve(f / h),
              v = ~~x,
              v && v === x ? (d = u,
              v--) : d > u && (d = u)),
              g = this._yoyo && v & 1,
              g && (S = this._yEase,
              d = u - d),
              x = ci(this._tTime, h),
              d === a && !o && this._initted && v === x)
                  return this._tTime = f,
                  this;
              v !== x && (y && this._yEase && rv(y, g),
              this.vars.repeatRefresh && !g && !this._lock && d !== h && this._initted && (this._lock = o = 1,
              this.render(ve(h * v), !0).invalidate()._lock = 0))
          }
          if (!this._initted) {
              if ($y(this, c ? i : d, o, s, f))
                  return this._tTime = 0,
                  this;
              if (a !== this._time && !(o && this.vars.repeatRefresh && v !== x))
                  return this;
              if (u !== this._dur)
                  return this.render(i, s, o)
          }
          if (this._tTime = f,
          this._time = d,
          !this._act && this._ts && (this._act = 1,
          this._lazy = 0),
          this.ratio = m = (S || this._ease)(d / u),
          this._from && (this.ratio = m = 1 - m),
          !a && f && !s && !x && (ot(this, "onStart"),
          this._tTime !== f))
              return this;
          for (p = this._pt; p; )
              p.r(m, p.d),
              p = p._next;
          y && y.render(i < 0 ? i : y._dur * y._ease(d / this._dur), s, o) || this._startAt && (this._zTime = i),
          this._onUpdate && !s && (c && Hu(this, i, s, o),
          ot(this, "onUpdate")),
          this._repeat && v !== x && this.vars.onRepeat && !s && this.parent && ot(this, "onRepeat"),
          (f === this._tDur || !f) && this._tTime === f && (c && !this._onUpdate && Hu(this, i, !0, !0),
          (i || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Vn(this, 1),
          !s && !(c && !a) && (f || a || g) && (ot(this, f === l ? "onComplete" : "onReverseComplete", !0),
          this._prom && !(f < l && this.timeScale() > 0) && this._prom()))
      }
      return this
  }
  ,
  n.targets = function() {
      return this._targets
  }
  ,
  n.invalidate = function(i) {
      return (!i || !this.vars.runBackwards) && (this._startAt = 0),
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
      this._ptLookup = [],
      this.timeline && this.timeline.invalidate(i),
      t.prototype.invalidate.call(this, i)
  }
  ,
  n.resetTo = function(i, s, o, a, l) {
      Ms || it.wake(),
      this._ts || this.play();
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
      return this._initted || $f(this, u),
      c = this._ease(u / this._dur),
      _k(this, i, s, o, a, c, u, l) ? this.resetTo(i, s, o, a, 1) : (Ia(this, 0),
      this.parent || zy(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
      this.render(0))
  }
  ,
  n.kill = function(i, s) {
      if (s === void 0 && (s = "all"),
      !i && (!s || s === "all"))
          return this._lazy = this._pt = 0,
          this.parent ? bi(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Ne),
          this;
      if (this.timeline) {
          var o = this.timeline.totalDuration();
          return this.timeline.killTweensOf(i, s, _n && _n.vars.overwrite !== !0)._first || bi(this),
          this.parent && o !== this.timeline.totalDuration() && fi(this, this._dur * this.timeline._tDur / o, 0, 1),
          this
      }
      var a = this._targets, l = i ? St(i) : a, u = this._ptLookup, c = this._pt, f, d, p, v, h, x, g;
      if ((!s || s === "all") && ZT(a, l))
          return s === "all" && (this._pt = 0),
          bi(this);
      for (f = this._op = this._op || [],
      s !== "all" && (Pe(s) && (h = {},
      qe(s, function(m) {
          return h[m] = 1
      }),
      s = h),
      s = wk(a, s)),
      g = a.length; g--; )
          if (~l.indexOf(a[g])) {
              d = u[g],
              s === "all" ? (f[g] = s,
              v = d,
              p = {}) : (p = f[g] = f[g] || {},
              v = s);
              for (h in v)
                  x = d && d[h],
                  x && ((!("kill"in x.d) || x.d.kill(h) === !0) && ba(this, x, "_pt"),
                  delete d[h]),
                  p !== "all" && (p[h] = 1)
          }
      return this._initted && !this._pt && c && bi(this),
      this
  }
  ,
  e.to = function(i, s) {
      return new e(i,s,arguments[2])
  }
  ,
  e.from = function(i, s) {
      return Ji(1, arguments)
  }
  ,
  e.delayedCall = function(i, s, o, a) {
      return new e(s,0,{
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: i,
          onComplete: s,
          onReverseComplete: s,
          onCompleteParams: o,
          onReverseCompleteParams: o,
          callbackScope: a
      })
  }
  ,
  e.fromTo = function(i, s, o) {
      return Ji(2, arguments)
  }
  ,
  e.set = function(i, s) {
      return s.duration = 0,
      s.repeatDelay || (s.repeat = 0),
      new e(i,s)
  }
  ,
  e.killTweensOf = function(i, s, o) {
      return ie.killTweensOf(i, s, o)
  }
  ,
  e
}(Ns);
dt(ye.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
qe("staggerTo,staggerFrom,staggerFromTo", function(t) {
  ye[t] = function() {
      var e = new Be
        , n = Yu.call(arguments, 0);
      return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0),
      e[t].apply(e, n)
  }
});
var Wf = function(e, n, r) {
  return e[n] = r
}
, uv = function(e, n, r) {
  return e[n](r)
}
, Tk = function(e, n, r, i) {
  return e[n](i.fp, r)
}
, kk = function(e, n, r) {
  return e.setAttribute(n, r)
}
, Hf = function(e, n) {
  return fe(e[n]) ? uv : Lf(e[n]) && e.setAttribute ? kk : Wf
}
, cv = function(e, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n)
}
, Pk = function(e, n) {
  return n.set(n.t, n.p, !!(n.s + n.c * e), n)
}
, fv = function(e, n) {
  var r = n._pt
    , i = "";
  if (!e && n.b)
      i = n.b;
  else if (e === 1 && n.e)
      i = n.e;
  else {
      for (; r; )
          i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i,
          r = r._next;
      i += n.c
  }
  n.set(n.t, n.p, i, n)
}
, Kf = function(e, n) {
  for (var r = n._pt; r; )
      r.r(e, r.d),
      r = r._next
}
, Ck = function(e, n, r, i) {
  for (var s = this._pt, o; s; )
      o = s._next,
      s.p === i && s.modifier(e, n, r),
      s = o
}
, Ek = function(e) {
  for (var n = this._pt, r, i; n; )
      i = n._next,
      n.p === e && !n.op || n.op === e ? ba(this, n, "_pt") : n.dep || (r = 1),
      n = i;
  return !r
}
, Mk = function(e, n, r, i) {
  i.mSet(e, n, i.m.call(i.tween, r, i.mt), i)
}
, dv = function(e) {
  for (var n = e._pt, r, i, s, o; n; ) {
      for (r = n._next,
      i = s; i && i.pr > n.pr; )
          i = i._next;
      (n._prev = i ? i._prev : o) ? n._prev._next = n : s = n,
      (n._next = i) ? i._prev = n : o = n,
      n = r
  }
  e._pt = s
}
, Je = function() {
  function t(n, r, i, s, o, a, l, u, c) {
      this.t = r,
      this.s = s,
      this.c = o,
      this.p = i,
      this.r = a || cv,
      this.d = l || this,
      this.set = u || Wf,
      this.pr = c || 0,
      this._next = n,
      n && (n._prev = this)
  }
  var e = t.prototype;
  return e.modifier = function(r, i, s) {
      this.mSet = this.mSet || this.set,
      this.set = Mk,
      this.m = r,
      this.mt = s,
      this.tween = i
  }
  ,
  t
}();
qe(Ff + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
  return If[t] = 1
});
ft.TweenMax = ft.TweenLite = ye;
ft.TimelineLite = ft.TimelineMax = Be;
ie = new Be({
  sortChildren: !1,
  defaults: li,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
ut.stringFilter = tv;
var lr = []
, No = {}
, Nk = []
, Mp = 0
, Ak = 0
, Al = function(e) {
  return (No[e] || Nk).map(function(n) {
      return n()
  })
}
, Zu = function() {
  var e = Date.now()
    , n = [];
  e - Mp > 2 && (Al("matchMediaInit"),
  lr.forEach(function(r) {
      var i = r.queries, s = r.conditions, o, a, l, u;
      for (a in i)
          o = It.matchMedia(i[a]).matches,
          o && (l = 1),
          o !== s[a] && (s[a] = o,
          u = 1);
      u && (r.revert(),
      l && n.push(r))
  }),
  Al("matchMediaRevert"),
  n.forEach(function(r) {
      return r.onMatch(r, function(i) {
          return r.add(null, i)
      })
  }),
  Mp = e,
  Al("matchMedia"))
}
, hv = function() {
  function t(n, r) {
      this.selector = r && Gu(r),
      this.data = [],
      this._r = [],
      this.isReverted = !1,
      this.id = Ak++,
      n && this.add(n)
  }
  var e = t.prototype;
  return e.add = function(r, i, s) {
      fe(r) && (s = i,
      i = r,
      r = fe);
      var o = this
        , a = function() {
          var u = ne, c = o.selector, f;
          return u && u !== o && u.data.push(o),
          s && (o.selector = Gu(s)),
          ne = o,
          f = i.apply(o, arguments),
          fe(f) && o._r.push(f),
          ne = u,
          o.selector = c,
          o.isReverted = !1,
          f
      };
      return o.last = a,
      r === fe ? a(o, function(l) {
          return o.add(null, l)
      }) : r ? o[r] = a : a
  }
  ,
  e.ignore = function(r) {
      var i = ne;
      ne = null,
      r(this),
      ne = i
  }
  ,
  e.getTweens = function() {
      var r = [];
      return this.data.forEach(function(i) {
          return i instanceof t ? r.push.apply(r, i.getTweens()) : i instanceof ye && !(i.parent && i.parent.data === "nested") && r.push(i)
      }),
      r
  }
  ,
  e.clear = function() {
      this._r.length = this.data.length = 0
  }
  ,
  e.kill = function(r, i) {
      var s = this;
      if (r ? function() {
          for (var a = s.getTweens(), l = s.data.length, u; l--; )
              u = s.data[l],
              u.data === "isFlip" && (u.revert(),
              u.getChildren(!0, !0, !1).forEach(function(c) {
                  return a.splice(a.indexOf(c), 1)
              }));
          for (a.map(function(c) {
              return {
                  g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
                  t: c
              }
          }).sort(function(c, f) {
              return f.g - c.g || -1 / 0
          }).forEach(function(c) {
              return c.t.revert(r)
          }),
          l = s.data.length; l--; )
              u = s.data[l],
              u instanceof Be ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(),
              u.kill()) : !(u instanceof ye) && u.revert && u.revert(r);
          s._r.forEach(function(c) {
              return c(r, s)
          }),
          s.isReverted = !0
      }() : this.data.forEach(function(a) {
          return a.kill && a.kill()
      }),
      this.clear(),
      i)
          for (var o = lr.length; o--; )
              lr[o].id === this.id && lr.splice(o, 1)
  }
  ,
  e.revert = function(r) {
      this.kill(r || {})
  }
  ,
  t
}()
, Rk = function() {
  function t(n) {
      this.contexts = [],
      this.scope = n,
      ne && ne.data.push(this)
  }
  var e = t.prototype;
  return e.add = function(r, i, s) {
      Kt(r) || (r = {
          matches: r
      });
      var o = new hv(0,s || this.scope), a = o.conditions = {}, l, u, c;
      ne && !o.selector && (o.selector = ne.selector),
      this.contexts.push(o),
      i = o.add("onMatch", i),
      o.queries = r;
      for (u in r)
          u === "all" ? c = 1 : (l = It.matchMedia(r[u]),
          l && (lr.indexOf(o) < 0 && lr.push(o),
          (a[u] = l.matches) && (c = 1),
          l.addListener ? l.addListener(Zu) : l.addEventListener("change", Zu)));
      return c && i(o, function(f) {
          return o.add(null, f)
      }),
      this
  }
  ,
  e.revert = function(r) {
      this.kill(r || {})
  }
  ,
  e.kill = function(r) {
      this.contexts.forEach(function(i) {
          return i.kill(r, !0)
      })
  }
  ,
  t
}()
, da = {
  registerPlugin: function() {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
      n.forEach(function(i) {
          return qy(i)
      })
  },
  timeline: function(e) {
      return new Be(e)
  },
  getTweensOf: function(e, n) {
      return ie.getTweensOf(e, n)
  },
  getProperty: function(e, n, r, i) {
      Pe(e) && (e = St(e)[0]);
      var s = sr(e || {}).get
        , o = r ? Fy : Iy;
      return r === "native" && (r = ""),
      e && (n ? o((rt[n] && rt[n].get || s)(e, n, r, i)) : function(a, l, u) {
          return o((rt[a] && rt[a].get || s)(e, a, l, u))
      }
      )
  },
  quickSetter: function(e, n, r) {
      if (e = St(e),
      e.length > 1) {
          var i = e.map(function(c) {
              return tt.quickSetter(c, n, r)
          })
            , s = i.length;
          return function(c) {
              for (var f = s; f--; )
                  i[f](c)
          }
      }
      e = e[0] || {};
      var o = rt[n]
        , a = sr(e)
        , l = a.harness && (a.harness.aliases || {})[n] || n
        , u = o ? function(c) {
          var f = new o;
          Ur._pt = 0,
          f.init(e, r ? c + r : c, Ur, 0, [e]),
          f.render(1, f),
          Ur._pt && Kf(1, Ur)
      }
      : a.set(e, l);
      return o ? u : function(c) {
          return u(e, l, r ? c + r : c, a, 1)
      }
  },
  quickTo: function(e, n, r) {
      var i, s = tt.to(e, dt((i = {},
      i[n] = "+=0.1",
      i.paused = !0,
      i.stagger = 0,
      i), r || {})), o = function(l, u, c) {
          return s.resetTo(n, l, u, c)
      };
      return o.tween = s,
      o
  },
  isTweening: function(e) {
      return ie.getTweensOf(e, !0).length > 0
  },
  defaults: function(e) {
      return e && e.ease && (e.ease = ar(e.ease, li.ease)),
      Tp(li, e || {})
  },
  config: function(e) {
      return Tp(ut, e || {})
  },
  registerEffect: function(e) {
      var n = e.name
        , r = e.effect
        , i = e.plugins
        , s = e.defaults
        , o = e.extendTimeline;
      (i || "").split(",").forEach(function(a) {
          return a && !rt[a] && !ft[a] && Ps(n + " effect requires " + a + " plugin.")
      }),
      Cl[n] = function(a, l, u) {
          return r(St(a), dt(l || {}, s), u)
      }
      ,
      o && (Be.prototype[n] = function(a, l, u) {
          return this.add(Cl[n](a, Kt(l) ? l : (u = l) && {}, this), u)
      }
      )
  },
  registerEase: function(e, n) {
      W[e] = ar(n)
  },
  parseEase: function(e, n) {
      return arguments.length ? ar(e, n) : W
  },
  getById: function(e) {
      return ie.getById(e)
  },
  exportRoot: function(e, n) {
      e === void 0 && (e = {});
      var r = new Be(e), i, s;
      for (r.smoothChildTiming = Ze(e.smoothChildTiming),
      ie.remove(r),
      r._dp = 0,
      r._time = r._tTime = ie._time,
      i = ie._first; i; )
          s = i._next,
          (n || !(!i._dur && i instanceof ye && i.vars.onComplete === i._targets[0])) && zt(r, i, i._start - i._delay),
          i = s;
      return zt(ie, r, 0),
      r
  },
  context: function(e, n) {
      return e ? new hv(e,n) : ne
  },
  matchMedia: function(e) {
      return new Rk(e)
  },
  matchMediaRefresh: function() {
      return lr.forEach(function(e) {
          var n = e.conditions, r, i;
          for (i in n)
              n[i] && (n[i] = !1,
              r = 1);
          r && e.revert()
      }) || Zu()
  },
  addEventListener: function(e, n) {
      var r = No[e] || (No[e] = []);
      ~r.indexOf(n) || r.push(n)
  },
  removeEventListener: function(e, n) {
      var r = No[e]
        , i = r && r.indexOf(n);
      i >= 0 && r.splice(i, 1)
  },
  utils: {
      wrap: uk,
      wrapYoyo: ck,
      distribute: Ky,
      random: Gy,
      snap: Yy,
      normalize: lk,
      getUnit: be,
      clamp: ik,
      splitColor: Jy,
      toArray: St,
      selector: Gu,
      mapRange: Qy,
      pipe: ok,
      unitize: ak,
      interpolate: fk,
      shuffle: Hy
  },
  install: jy,
  effects: Cl,
  ticker: it,
  updateRoot: Be.updateRoot,
  plugins: rt,
  globalTimeline: ie,
  core: {
      PropTween: Je,
      globals: Ly,
      Tween: ye,
      Timeline: Be,
      Animation: Ns,
      getCache: sr,
      _removeLinkedListItem: ba,
      reverting: function() {
          return Ne
      },
      context: function(e) {
          return e && ne && (ne.data.push(e),
          e._ctx = ne),
          ne
      },
      suppressOverwrites: function(e) {
          return jf = e
      }
  }
};
qe("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
  return da[t] = ye[t]
});
it.add(Be.updateRoot);
Ur = da.to({}, {
  duration: 0
});
var Dk = function(e, n) {
  for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
      r = r._next;
  return r
}
, jk = function(e, n) {
  var r = e._targets, i, s, o;
  for (i in n)
      for (s = r.length; s--; )
          o = e._ptLookup[s][i],
          o && (o = o.d) && (o._pt && (o = Dk(o, i)),
          o && o.modifier && o.modifier(n[i], e, r[s], i))
}
, Rl = function(e, n) {
  return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: function(i, s, o) {
          o._onInit = function(a) {
              var l, u;
              if (Pe(s) && (l = {},
              qe(s, function(c) {
                  return l[c] = 1
              }),
              s = l),
              n) {
                  l = {};
                  for (u in s)
                      l[u] = n(s[u]);
                  s = l
              }
              jk(a, s)
          }
      }
  }
}
, tt = da.registerPlugin({
  name: "attr",
  init: function(e, n, r, i, s) {
      var o, a, l;
      this.tween = r;
      for (o in n)
          l = e.getAttribute(o) || "",
          a = this.add(e, "setAttribute", (l || 0) + "", n[o], i, s, 0, 0, o),
          a.op = o,
          a.b = l,
          this._props.push(o)
  },
  render: function(e, n) {
      for (var r = n._pt; r; )
          Ne ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d),
          r = r._next
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(e, n) {
      for (var r = n.length; r--; )
          this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1)
  }
}, Rl("roundProps", Xu), Rl("modifiers"), Rl("snap", Yy)) || da;
ye.version = Be.version = tt.version = "3.13.0";
Dy = 1;
Of() && di();
W.Power0;
W.Power1;
W.Power2;
W.Power3;
W.Power4;
W.Linear;
W.Quad;
W.Cubic;
W.Quart;
W.Quint;
W.Strong;
W.Elastic;
W.Back;
W.SteppedEase;
W.Bounce;
W.Sine;
W.Expo;
W.Circ;
/*!
* CSSPlugin 3.13.0
* https://gsap.com
*
* Copyright 2008-2025, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license
* @author: Jack Doyle, jack@greensock.com
*/
var Np, wn, Qr, Yf, tr, Ap, Gf, Lk = function() {
  return typeof window < "u"
}, cn = {}, Qn = 180 / Math.PI, Zr = Math.PI / 180, Sr = Math.atan2, Rp = 1e8, Xf = /([A-Z])/g, Ok = /(left|right|width|margin|padding|x)/i, bk = /[\s,\(]\S/, Bt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, qu = function(e, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
}, Vk = function(e, n) {
  return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
}, Ik = function(e, n) {
  return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n)
}, Fk = function(e, n) {
  var r = n.s + n.c * e;
  n.set(n.t, n.p, ~~(r + (r < 0 ? -.5 : .5)) + n.u, n)
}, pv = function(e, n) {
  return n.set(n.t, n.p, e ? n.e : n.b, n)
}, mv = function(e, n) {
  return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n)
}, zk = function(e, n, r) {
  return e.style[n] = r
}, Bk = function(e, n, r) {
  return e.style.setProperty(n, r)
}, Uk = function(e, n, r) {
  return e._gsap[n] = r
}, $k = function(e, n, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r
}, Wk = function(e, n, r, i, s) {
  var o = e._gsap;
  o.scaleX = o.scaleY = r,
  o.renderTransform(s, o)
}, Hk = function(e, n, r, i, s) {
  var o = e._gsap;
  o[n] = r,
  o.renderTransform(s, o)
}, oe = "transform", et = oe + "Origin", Kk = function t(e, n) {
  var r = this
    , i = this.target
    , s = i.style
    , o = i._gsap;
  if (e in cn && s) {
      if (this.tfm = this.tfm || {},
      e !== "transform")
          e = Bt[e] || e,
          ~e.indexOf(",") ? e.split(",").forEach(function(a) {
              return r.tfm[a] = Zt(i, a)
          }) : this.tfm[e] = o.x ? o[e] : Zt(i, e),
          e === et && (this.tfm.zOrigin = o.zOrigin);
      else
          return Bt.transform.split(",").forEach(function(a) {
              return t.call(r, a, n)
          });
      if (this.props.indexOf(oe) >= 0)
          return;
      o.svg && (this.svgo = i.getAttribute("data-svg-origin"),
      this.props.push(et, n, "")),
      e = oe
  }
  (s || n) && this.props.push(e, n, s[e])
}, gv = function(e) {
  e.translate && (e.removeProperty("translate"),
  e.removeProperty("scale"),
  e.removeProperty("rotate"))
}, Yk = function() {
  var e = this.props, n = this.target, r = n.style, i = n._gsap, s, o;
  for (s = 0; s < e.length; s += 3)
      e[s + 1] ? e[s + 1] === 2 ? n[e[s]](e[s + 2]) : n[e[s]] = e[s + 2] : e[s + 2] ? r[e[s]] = e[s + 2] : r.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(Xf, "-$1").toLowerCase());
  if (this.tfm) {
      for (o in this.tfm)
          i[o] = this.tfm[o];
      i.svg && (i.renderTransform(),
      n.setAttribute("data-svg-origin", this.svgo || "")),
      s = Gf(),
      (!s || !s.isStart) && !r[oe] && (gv(r),
      i.zOrigin && r[et] && (r[et] += " " + i.zOrigin + "px",
      i.zOrigin = 0,
      i.renderTransform()),
      i.uncache = 1)
  }
}, yv = function(e, n) {
  var r = {
      target: e,
      props: [],
      revert: Yk,
      save: Kk
  };
  return e._gsap || tt.core.getCache(e),
  n && e.style && e.nodeType && n.split(",").forEach(function(i) {
      return r.save(i)
  }),
  r
}, vv, Ju = function(e, n) {
  var r = wn.createElementNS ? wn.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : wn.createElement(e);
  return r && r.style ? r : wn.createElement(e)
}, Tt = function t(e, n, r) {
  var i = getComputedStyle(e);
  return i[n] || i.getPropertyValue(n.replace(Xf, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, hi(n) || n, 1) || ""
}, Dp = "O,Moz,ms,Ms,Webkit".split(","), hi = function(e, n, r) {
  var i = n || tr
    , s = i.style
    , o = 5;
  if (e in s && !r)
      return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Dp[o] + e in s); )
      ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Dp[o] : "") + e
}, ec = function() {
  Lk() && window.document && (Np = window,
  wn = Np.document,
  Qr = wn.documentElement,
  tr = Ju("div") || {
      style: {}
  },
  Ju("div"),
  oe = hi(oe),
  et = oe + "Origin",
  tr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
  vv = !!hi("perspective"),
  Gf = tt.core.reverting,
  Yf = 1)
}, jp = function(e) {
  var n = e.ownerSVGElement, r = Ju("svg", n && n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = e.cloneNode(!0), s;
  i.style.display = "block",
  r.appendChild(i),
  Qr.appendChild(r);
  try {
      s = i.getBBox()
  } catch {}
  return r.removeChild(i),
  Qr.removeChild(r),
  s
}, Lp = function(e, n) {
  for (var r = n.length; r--; )
      if (e.hasAttribute(n[r]))
          return e.getAttribute(n[r])
}, xv = function(e) {
  var n, r;
  try {
      n = e.getBBox()
  } catch {
      n = jp(e),
      r = 1
  }
  return n && (n.width || n.height) || r || (n = jp(e)),
  n && !n.width && !n.x && !n.y ? {
      x: +Lp(e, ["x", "cx", "x1"]) || 0,
      y: +Lp(e, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
  } : n
}, _v = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && xv(e))
}, pr = function(e, n) {
  if (n) {
      var r = e.style, i;
      n in cn && n !== et && (n = oe),
      r.removeProperty ? (i = n.substr(0, 2),
      (i === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
      r.removeProperty(i === "--" ? n : n.replace(Xf, "-$1").toLowerCase())) : r.removeAttribute(n)
  }
}, Sn = function(e, n, r, i, s, o) {
  var a = new Je(e._pt,n,r,0,1,o ? mv : pv);
  return e._pt = a,
  a.b = i,
  a.e = s,
  e._props.push(r),
  a
}, Op = {
  deg: 1,
  rad: 1,
  turn: 1
}, Gk = {
  grid: 1,
  flex: 1
}, In = function t(e, n, r, i) {
  var s = parseFloat(r) || 0, o = (r + "").trim().substr((s + "").length) || "px", a = tr.style, l = Ok.test(n), u = e.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), f = 100, d = i === "px", p = i === "%", v, h, x, g;
  if (i === o || !s || Op[i] || Op[o])
      return s;
  if (o !== "px" && !d && (s = t(e, n, r, "px")),
  g = e.getCTM && _v(e),
  (p || o === "%") && (cn[n] || ~n.indexOf("adius")))
      return v = g ? e.getBBox()[l ? "width" : "height"] : e[c],
      he(p ? s / v * f : s / 100 * v);
  if (a[l ? "width" : "height"] = f + (d ? o : i),
  h = i !== "rem" && ~n.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode,
  g && (h = (e.ownerSVGElement || {}).parentNode),
  (!h || h === wn || !h.appendChild) && (h = wn.body),
  x = h._gsap,
  x && p && x.width && l && x.time === it.time && !x.uncache)
      return he(s / x.width * f);
  if (p && (n === "height" || n === "width")) {
      var m = e.style[n];
      e.style[n] = f + i,
      v = e[c],
      m ? e.style[n] = m : pr(e, n)
  } else
      (p || o === "%") && !Gk[Tt(h, "display")] && (a.position = Tt(e, "position")),
      h === e && (a.position = "static"),
      h.appendChild(tr),
      v = tr[c],
      h.removeChild(tr),
      a.position = "absolute";
  return l && p && (x = sr(h),
  x.time = it.time,
  x.width = h[c]),
  he(d ? v * s / f : v && s ? f / v * s : 0)
}, Zt = function(e, n, r, i) {
  var s;
  return Yf || ec(),
  n in Bt && n !== "transform" && (n = Bt[n],
  ~n.indexOf(",") && (n = n.split(",")[0])),
  cn[n] && n !== "transform" ? (s = Rs(e, i),
  s = n !== "transformOrigin" ? s[n] : s.svg ? s.origin : pa(Tt(e, et)) + " " + s.zOrigin + "px") : (s = e.style[n],
  (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = ha[n] && ha[n](e, n, r) || Tt(e, n) || by(e, n) || (n === "opacity" ? 1 : 0))),
  r && !~(s + "").trim().indexOf(" ") ? In(e, n, s, r) + r : s
}, Xk = function(e, n, r, i) {
  if (!r || r === "none") {
      var s = hi(n, e, 1)
        , o = s && Tt(e, s, 1);
      o && o !== r ? (n = s,
      r = o) : n === "borderColor" && (r = Tt(e, "borderTopColor"))
  }
  var a = new Je(this._pt,e.style,n,0,1,fv), l = 0, u = 0, c, f, d, p, v, h, x, g, m, y, S, w;
  if (a.b = r,
  a.e = i,
  r += "",
  i += "",
  i.substring(0, 6) === "var(--" && (i = Tt(e, i.substring(4, i.indexOf(")")))),
  i === "auto" && (h = e.style[n],
  e.style[n] = i,
  i = Tt(e, n) || i,
  h ? e.style[n] = h : pr(e, n)),
  c = [r, i],
  tv(c),
  r = c[0],
  i = c[1],
  d = r.match(Br) || [],
  w = i.match(Br) || [],
  w.length) {
      for (; f = Br.exec(i); )
          x = f[0],
          m = i.substring(l, f.index),
          v ? v = (v + 1) % 5 : (m.substr(-5) === "rgba(" || m.substr(-5) === "hsla(") && (v = 1),
          x !== (h = d[u++] || "") && (p = parseFloat(h) || 0,
          S = h.substr((p + "").length),
          x.charAt(1) === "=" && (x = Xr(p, x) + S),
          g = parseFloat(x),
          y = x.substr((g + "").length),
          l = Br.lastIndex - y.length,
          y || (y = y || ut.units[n] || S,
          l === i.length && (i += y,
          a.e += y)),
          S !== y && (p = In(e, n, h, y) || 0),
          a._pt = {
              _next: a._pt,
              p: m || u === 1 ? m : ",",
              s: p,
              c: g - p,
              m: v && v < 4 || n === "zIndex" ? Math.round : 0
          });
      a.c = l < i.length ? i.substring(l, i.length) : ""
  } else
      a.r = n === "display" && i === "none" ? mv : pv;
  return Ay.test(i) && (a.e = 0),
  this._pt = a,
  a
}, bp = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Qk = function(e) {
  var n = e.split(" ")
    , r = n[0]
    , i = n[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r,
  r = i,
  i = e),
  n[0] = bp[r] || r,
  n[1] = bp[i] || i,
  n.join(" ")
}, Zk = function(e, n) {
  if (n.tween && n.tween._time === n.tween._dur) {
      var r = n.t, i = r.style, s = n.u, o = r._gsap, a, l, u;
      if (s === "all" || s === !0)
          i.cssText = "",
          l = 1;
      else
          for (s = s.split(","),
          u = s.length; --u > -1; )
              a = s[u],
              cn[a] && (l = 1,
              a = a === "transformOrigin" ? et : oe),
              pr(r, a);
      l && (pr(r, oe),
      o && (o.svg && r.removeAttribute("transform"),
      i.scale = i.rotate = i.translate = "none",
      Rs(r, 1),
      o.uncache = 1,
      gv(i)))
  }
}, ha = {
  clearProps: function(e, n, r, i, s) {
      if (s.data !== "isFromStart") {
          var o = e._pt = new Je(e._pt,n,r,0,0,Zk);
          return o.u = i,
          o.pr = -10,
          o.tween = s,
          e._props.push(r),
          1
      }
  }
}, As = [1, 0, 0, 1, 0, 0], wv = {}, Sv = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, Vp = function(e) {
  var n = Tt(e, oe);
  return Sv(n) ? As : n.substr(7).match(Ny).map(he)
}, Qf = function(e, n) {
  var r = e._gsap || sr(e), i = e.style, s = Vp(e), o, a, l, u;
  return r.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix,
  s = [l.a, l.b, l.c, l.d, l.e, l.f],
  s.join(",") === "1,0,0,1,0,0" ? As : s) : (s === As && !e.offsetParent && e !== Qr && !r.svg && (l = i.display,
  i.display = "block",
  o = e.parentNode,
  (!o || !e.offsetParent && !e.getBoundingClientRect().width) && (u = 1,
  a = e.nextElementSibling,
  Qr.appendChild(e)),
  s = Vp(e),
  l ? i.display = l : pr(e, "display"),
  u && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : Qr.removeChild(e))),
  n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s)
}, tc = function(e, n, r, i, s, o) {
  var a = e._gsap, l = s || Qf(e, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, f = a.xOffset || 0, d = a.yOffset || 0, p = l[0], v = l[1], h = l[2], x = l[3], g = l[4], m = l[5], y = n.split(" "), S = parseFloat(y[0]) || 0, w = parseFloat(y[1]) || 0, T, C, k, P;
  r ? l !== As && (C = p * x - v * h) && (k = S * (x / C) + w * (-h / C) + (h * m - x * g) / C,
  P = S * (-v / C) + w * (p / C) - (p * m - v * g) / C,
  S = k,
  w = P) : (T = xv(e),
  S = T.x + (~y[0].indexOf("%") ? S / 100 * T.width : S),
  w = T.y + (~(y[1] || y[0]).indexOf("%") ? w / 100 * T.height : w)),
  i || i !== !1 && a.smooth ? (g = S - u,
  m = w - c,
  a.xOffset = f + (g * p + m * h) - g,
  a.yOffset = d + (g * v + m * x) - m) : a.xOffset = a.yOffset = 0,
  a.xOrigin = S,
  a.yOrigin = w,
  a.smooth = !!i,
  a.origin = n,
  a.originIsAbsolute = !!r,
  e.style[et] = "0px 0px",
  o && (Sn(o, a, "xOrigin", u, S),
  Sn(o, a, "yOrigin", c, w),
  Sn(o, a, "xOffset", f, a.xOffset),
  Sn(o, a, "yOffset", d, a.yOffset)),
  e.setAttribute("data-svg-origin", S + " " + w)
}, Rs = function(e, n) {
  var r = e._gsap || new sv(e);
  if ("x"in r && !n && !r.uncache)
      return r;
  var i = e.style, s = r.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(e), u = Tt(e, et) || "0", c, f, d, p, v, h, x, g, m, y, S, w, T, C, k, P, E, O, V, I, z, G, K, B, D, R, N, b, U, Yt, _e, me;
  return c = f = d = h = x = g = m = y = S = 0,
  p = v = 1,
  r.svg = !!(e.getCTM && _v(e)),
  l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[oe] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[oe] !== "none" ? l[oe] : "")),
  i.scale = i.rotate = i.translate = "none"),
  C = Qf(e, r.svg),
  r.svg && (r.uncache ? (D = e.getBBox(),
  u = r.xOrigin - D.x + "px " + (r.yOrigin - D.y) + "px",
  B = "") : B = !n && e.getAttribute("data-svg-origin"),
  tc(e, B || u, !!B || r.originIsAbsolute, r.smooth !== !1, C)),
  w = r.xOrigin || 0,
  T = r.yOrigin || 0,
  C !== As && (O = C[0],
  V = C[1],
  I = C[2],
  z = C[3],
  c = G = C[4],
  f = K = C[5],
  C.length === 6 ? (p = Math.sqrt(O * O + V * V),
  v = Math.sqrt(z * z + I * I),
  h = O || V ? Sr(V, O) * Qn : 0,
  m = I || z ? Sr(I, z) * Qn + h : 0,
  m && (v *= Math.abs(Math.cos(m * Zr))),
  r.svg && (c -= w - (w * O + T * I),
  f -= T - (w * V + T * z))) : (me = C[6],
  Yt = C[7],
  N = C[8],
  b = C[9],
  U = C[10],
  _e = C[11],
  c = C[12],
  f = C[13],
  d = C[14],
  k = Sr(me, U),
  x = k * Qn,
  k && (P = Math.cos(-k),
  E = Math.sin(-k),
  B = G * P + N * E,
  D = K * P + b * E,
  R = me * P + U * E,
  N = G * -E + N * P,
  b = K * -E + b * P,
  U = me * -E + U * P,
  _e = Yt * -E + _e * P,
  G = B,
  K = D,
  me = R),
  k = Sr(-I, U),
  g = k * Qn,
  k && (P = Math.cos(-k),
  E = Math.sin(-k),
  B = O * P - N * E,
  D = V * P - b * E,
  R = I * P - U * E,
  _e = z * E + _e * P,
  O = B,
  V = D,
  I = R),
  k = Sr(V, O),
  h = k * Qn,
  k && (P = Math.cos(k),
  E = Math.sin(k),
  B = O * P + V * E,
  D = G * P + K * E,
  V = V * P - O * E,
  K = K * P - G * E,
  O = B,
  G = D),
  x && Math.abs(x) + Math.abs(h) > 359.9 && (x = h = 0,
  g = 180 - g),
  p = he(Math.sqrt(O * O + V * V + I * I)),
  v = he(Math.sqrt(K * K + me * me)),
  k = Sr(G, K),
  m = Math.abs(k) > 2e-4 ? k * Qn : 0,
  S = _e ? 1 / (_e < 0 ? -_e : _e) : 0),
  r.svg && (B = e.getAttribute("transform"),
  r.forceCSS = e.setAttribute("transform", "") || !Sv(Tt(e, oe)),
  B && e.setAttribute("transform", B))),
  Math.abs(m) > 90 && Math.abs(m) < 270 && (s ? (p *= -1,
  m += h <= 0 ? 180 : -180,
  h += h <= 0 ? 180 : -180) : (v *= -1,
  m += m <= 0 ? 180 : -180)),
  n = n || r.uncache,
  r.x = c - ((r.xPercent = c && (!n && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + o,
  r.y = f - ((r.yPercent = f && (!n && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + o,
  r.z = d + o,
  r.scaleX = he(p),
  r.scaleY = he(v),
  r.rotation = he(h) + a,
  r.rotationX = he(x) + a,
  r.rotationY = he(g) + a,
  r.skewX = m + a,
  r.skewY = y + a,
  r.transformPerspective = S + o,
  (r.zOrigin = parseFloat(u.split(" ")[2]) || !n && r.zOrigin || 0) && (i[et] = pa(u)),
  r.xOffset = r.yOffset = 0,
  r.force3D = ut.force3D,
  r.renderTransform = r.svg ? Jk : vv ? Tv : qk,
  r.uncache = 0,
  r
}, pa = function(e) {
  return (e = e.split(" "))[0] + " " + e[1]
}, Dl = function(e, n, r) {
  var i = be(n);
  return he(parseFloat(n) + parseFloat(In(e, "x", r + "px", i))) + i
}, qk = function(e, n) {
  n.z = "0px",
  n.rotationY = n.rotationX = "0deg",
  n.force3D = 0,
  Tv(e, n)
}, Hn = "0deg", Ni = "0px", Kn = ") ", Tv = function(e, n) {
  var r = n || this
    , i = r.xPercent
    , s = r.yPercent
    , o = r.x
    , a = r.y
    , l = r.z
    , u = r.rotation
    , c = r.rotationY
    , f = r.rotationX
    , d = r.skewX
    , p = r.skewY
    , v = r.scaleX
    , h = r.scaleY
    , x = r.transformPerspective
    , g = r.force3D
    , m = r.target
    , y = r.zOrigin
    , S = ""
    , w = g === "auto" && e && e !== 1 || g === !0;
  if (y && (f !== Hn || c !== Hn)) {
      var T = parseFloat(c) * Zr, C = Math.sin(T), k = Math.cos(T), P;
      T = parseFloat(f) * Zr,
      P = Math.cos(T),
      o = Dl(m, o, C * P * -y),
      a = Dl(m, a, -Math.sin(T) * -y),
      l = Dl(m, l, k * P * -y + y)
  }
  x !== Ni && (S += "perspective(" + x + Kn),
  (i || s) && (S += "translate(" + i + "%, " + s + "%) "),
  (w || o !== Ni || a !== Ni || l !== Ni) && (S += l !== Ni || w ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Kn),
  u !== Hn && (S += "rotate(" + u + Kn),
  c !== Hn && (S += "rotateY(" + c + Kn),
  f !== Hn && (S += "rotateX(" + f + Kn),
  (d !== Hn || p !== Hn) && (S += "skew(" + d + ", " + p + Kn),
  (v !== 1 || h !== 1) && (S += "scale(" + v + ", " + h + Kn),
  m.style[oe] = S || "translate(0, 0)"
}, Jk = function(e, n) {
  var r = n || this, i = r.xPercent, s = r.yPercent, o = r.x, a = r.y, l = r.rotation, u = r.skewX, c = r.skewY, f = r.scaleX, d = r.scaleY, p = r.target, v = r.xOrigin, h = r.yOrigin, x = r.xOffset, g = r.yOffset, m = r.forceCSS, y = parseFloat(o), S = parseFloat(a), w, T, C, k, P;
  l = parseFloat(l),
  u = parseFloat(u),
  c = parseFloat(c),
  c && (c = parseFloat(c),
  u += c,
  l += c),
  l || u ? (l *= Zr,
  u *= Zr,
  w = Math.cos(l) * f,
  T = Math.sin(l) * f,
  C = Math.sin(l - u) * -d,
  k = Math.cos(l - u) * d,
  u && (c *= Zr,
  P = Math.tan(u - c),
  P = Math.sqrt(1 + P * P),
  C *= P,
  k *= P,
  c && (P = Math.tan(c),
  P = Math.sqrt(1 + P * P),
  w *= P,
  T *= P)),
  w = he(w),
  T = he(T),
  C = he(C),
  k = he(k)) : (w = f,
  k = d,
  T = C = 0),
  (y && !~(o + "").indexOf("px") || S && !~(a + "").indexOf("px")) && (y = In(p, "x", o, "px"),
  S = In(p, "y", a, "px")),
  (v || h || x || g) && (y = he(y + v - (v * w + h * C) + x),
  S = he(S + h - (v * T + h * k) + g)),
  (i || s) && (P = p.getBBox(),
  y = he(y + i / 100 * P.width),
  S = he(S + s / 100 * P.height)),
  P = "matrix(" + w + "," + T + "," + C + "," + k + "," + y + "," + S + ")",
  p.setAttribute("transform", P),
  m && (p.style[oe] = P)
}, eP = function(e, n, r, i, s) {
  var o = 360, a = Pe(s), l = parseFloat(s) * (a && ~s.indexOf("rad") ? Qn : 1), u = l - i, c = i + u + "deg", f, d;
  return a && (f = s.split("_")[1],
  f === "short" && (u %= o,
  u !== u % (o / 2) && (u += u < 0 ? o : -o)),
  f === "cw" && u < 0 ? u = (u + o * Rp) % o - ~~(u / o) * o : f === "ccw" && u > 0 && (u = (u - o * Rp) % o - ~~(u / o) * o)),
  e._pt = d = new Je(e._pt,n,r,i,u,Vk),
  d.e = c,
  d.u = "deg",
  e._props.push(r),
  d
}, Ip = function(e, n) {
  for (var r in n)
      e[r] = n[r];
  return e
}, tP = function(e, n, r) {
  var i = Ip({}, r._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, l, u, c, f, d, p, v;
  i.svg ? (u = r.getAttribute("transform"),
  r.setAttribute("transform", ""),
  o[oe] = n,
  a = Rs(r, 1),
  pr(r, oe),
  r.setAttribute("transform", u)) : (u = getComputedStyle(r)[oe],
  o[oe] = n,
  a = Rs(r, 1),
  o[oe] = u);
  for (l in cn)
      u = i[l],
      c = a[l],
      u !== c && s.indexOf(l) < 0 && (p = be(u),
      v = be(c),
      f = p !== v ? In(r, l, u, v) : parseFloat(u),
      d = parseFloat(c),
      e._pt = new Je(e._pt,a,l,f,d - f,qu),
      e._pt.u = v || 0,
      e._props.push(l));
  Ip(a, i)
};
qe("padding,margin,Width,Radius", function(t, e) {
  var n = "Top"
    , r = "Right"
    , i = "Bottom"
    , s = "Left"
    , o = (e < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function(a) {
      return e < 2 ? t + a : "border" + a + t
  });
  ha[e > 1 ? "border" + t : t] = function(a, l, u, c, f) {
      var d, p;
      if (arguments.length < 4)
          return d = o.map(function(v) {
              return Zt(a, v, u)
          }),
          p = d.join(" "),
          p.split(d[0]).length === 5 ? d[0] : p;
      d = (c + "").split(" "),
      p = {},
      o.forEach(function(v, h) {
          return p[v] = d[h] = d[h] || d[(h - 1) / 2 | 0]
      }),
      a.init(l, p, f)
  }
});
var kv = {
  name: "css",
  register: ec,
  targetTest: function(e) {
      return e.style && e.nodeType
  },
  init: function(e, n, r, i, s) {
      var o = this._props, a = e.style, l = r.vars.startAt, u, c, f, d, p, v, h, x, g, m, y, S, w, T, C, k;
      Yf || ec(),
      this.styles = this.styles || yv(e),
      k = this.styles.props,
      this.tween = r;
      for (h in n)
          if (h !== "autoRound" && (c = n[h],
          !(rt[h] && ov(h, n, r, i, e, s)))) {
              if (p = typeof c,
              v = ha[h],
              p === "function" && (c = c.call(r, i, e, s),
              p = typeof c),
              p === "string" && ~c.indexOf("random(") && (c = Es(c)),
              v)
                  v(this, e, h, c, r) && (C = 1);
              else if (h.substr(0, 2) === "--")
                  u = (getComputedStyle(e).getPropertyValue(h) + "").trim(),
                  c += "",
                  Dn.lastIndex = 0,
                  Dn.test(u) || (x = be(u),
                  g = be(c)),
                  g ? x !== g && (u = In(e, h, u, g) + g) : x && (c += x),
                  this.add(a, "setProperty", u, c, i, s, 0, 0, h),
                  o.push(h),
                  k.push(h, 0, a[h]);
              else if (p !== "undefined") {
                  if (l && h in l ? (u = typeof l[h] == "function" ? l[h].call(r, i, e, s) : l[h],
                  Pe(u) && ~u.indexOf("random(") && (u = Es(u)),
                  be(u + "") || u === "auto" || (u += ut.units[h] || be(Zt(e, h)) || ""),
                  (u + "").charAt(1) === "=" && (u = Zt(e, h))) : u = Zt(e, h),
                  d = parseFloat(u),
                  m = p === "string" && c.charAt(1) === "=" && c.substr(0, 2),
                  m && (c = c.substr(2)),
                  f = parseFloat(c),
                  h in Bt && (h === "autoAlpha" && (d === 1 && Zt(e, "visibility") === "hidden" && f && (d = 0),
                  k.push("visibility", 0, a.visibility),
                  Sn(this, a, "visibility", d ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)),
                  h !== "scale" && h !== "transform" && (h = Bt[h],
                  ~h.indexOf(",") && (h = h.split(",")[0]))),
                  y = h in cn,
                  y) {
                      if (this.styles.save(h),
                      p === "string" && c.substring(0, 6) === "var(--" && (c = Tt(e, c.substring(4, c.indexOf(")"))),
                      f = parseFloat(c)),
                      S || (w = e._gsap,
                      w.renderTransform && !n.parseTransform || Rs(e, n.parseTransform),
                      T = n.smoothOrigin !== !1 && w.smooth,
                      S = this._pt = new Je(this._pt,a,oe,0,1,w.renderTransform,w,0,-1),
                      S.dep = 1),
                      h === "scale")
                          this._pt = new Je(this._pt,w,"scaleY",w.scaleY,(m ? Xr(w.scaleY, m + f) : f) - w.scaleY || 0,qu),
                          this._pt.u = 0,
                          o.push("scaleY", h),
                          h += "X";
                      else if (h === "transformOrigin") {
                          k.push(et, 0, a[et]),
                          c = Qk(c),
                          w.svg ? tc(e, c, 0, T, 0, this) : (g = parseFloat(c.split(" ")[2]) || 0,
                          g !== w.zOrigin && Sn(this, w, "zOrigin", w.zOrigin, g),
                          Sn(this, a, h, pa(u), pa(c)));
                          continue
                      } else if (h === "svgOrigin") {
                          tc(e, c, 1, T, 0, this);
                          continue
                      } else if (h in wv) {
                          eP(this, w, h, d, m ? Xr(d, m + c) : c);
                          continue
                      } else if (h === "smoothOrigin") {
                          Sn(this, w, "smooth", w.smooth, c);
                          continue
                      } else if (h === "force3D") {
                          w[h] = c;
                          continue
                      } else if (h === "transform") {
                          tP(this, c, e);
                          continue
                      }
                  } else
                      h in a || (h = hi(h) || h);
                  if (y || (f || f === 0) && (d || d === 0) && !bk.test(c) && h in a)
                      x = (u + "").substr((d + "").length),
                      f || (f = 0),
                      g = be(c) || (h in ut.units ? ut.units[h] : x),
                      x !== g && (d = In(e, h, u, g)),
                      this._pt = new Je(this._pt,y ? w : a,h,d,(m ? Xr(d, m + f) : f) - d,!y && (g === "px" || h === "zIndex") && n.autoRound !== !1 ? Fk : qu),
                      this._pt.u = g || 0,
                      x !== g && g !== "%" && (this._pt.b = u,
                      this._pt.r = Ik);
                  else if (h in a)
                      Xk.call(this, e, h, u, m ? m + c : c);
                  else if (h in e)
                      this.add(e, h, u || e[h], m ? m + c : c, i, s);
                  else if (h !== "parseTransform") {
                      Vf(h, c);
                      continue
                  }
                  y || (h in a ? k.push(h, 0, a[h]) : typeof e[h] == "function" ? k.push(h, 2, e[h]()) : k.push(h, 1, u || e[h])),
                  o.push(h)
              }
          }
      C && dv(this)
  },
  render: function(e, n) {
      if (n.tween._time || !Gf())
          for (var r = n._pt; r; )
              r.r(e, r.d),
              r = r._next;
      else
          n.styles.revert()
  },
  get: Zt,
  aliases: Bt,
  getSetter: function(e, n, r) {
      var i = Bt[n];
      return i && i.indexOf(",") < 0 && (n = i),
      n in cn && n !== et && (e._gsap.x || Zt(e, "x")) ? r && Ap === r ? n === "scale" ? $k : Uk : (Ap = r || {}) && (n === "scale" ? Wk : Hk) : e.style && !Lf(e.style[n]) ? zk : ~n.indexOf("-") ? Bk : Hf(e, n)
  },
  core: {
      _removeProperty: pr,
      _getMatrix: Qf
  }
};
tt.utils.checkPrefix = hi;
tt.core.getStyleSaver = yv;
(function(t, e, n, r) {
  var i = qe(t + "," + e + "," + n, function(s) {
      cn[s] = 1
  });
  qe(e, function(s) {
      ut.units[s] = "deg",
      wv[s] = 1
  }),
  Bt[i[13]] = t + "," + e,
  qe(r, function(s) {
      var o = s.split(":");
      Bt[o[1]] = i[o[0]]
  })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
qe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
  ut.units[t] = "px"
});
tt.registerPlugin(kv);
var Ii = tt.registerPlugin(kv) || tt;
Ii.core.Tween;
const Pv = () => {
  const t = M.useRef(null)
    , e = Bs();
  return M.useEffect( () => {
      if (e || !t.current)
          return;
      const n = () => {
          if (!t.current)
              return;
          t.current.innerHTML = "";
          const r = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
          [{
              x: window.innerWidth * .25,
              y: window.innerHeight * .3,
              color: "rgba(251, 113, 133, 0.1)",
              maxSize: r * 1.2
          }, {
              x: window.innerWidth * .75,
              y: window.innerHeight * .7,
              color: "rgba(236, 72, 153, 0.1)",
              maxSize: r * 1.3
          }, {
              x: window.innerWidth * .5,
              y: window.innerHeight * .15,
              color: "rgba(232, 121, 222, 0.1)",
              maxSize: r * 1.1
          }].forEach( (s, o) => {
              var u;
              const a = document.createElement("div");
              a.className = "absolute pointer-events-none",
              Object.assign(a.style, {
                  width: "50px",
                  height: "50px",
                  backgroundColor: s.color,
                  borderRadius: "50%",
                  left: `${s.x - 25}px`,
                  top: `${s.y - 25}px`,
                  filter: "blur(2px)"
              }),
              (u = t.current) == null || u.appendChild(a),
              Ii.set(a, {
                  opacity: 0,
                  scale: 0
              }),
              Ii.timeline({
                  repeat: -1,
                  delay: o * 1.5
              }).to(a, {
                  opacity: 1,
                  scale: 1,
                  duration: .3,
                  ease: "power2.out"
              }).to(a, {
                  scale: s.maxSize / 50,
                  opacity: 0,
                  duration: 3,
                  ease: "power1.out"
              }).to(a, {
                  scale: 0,
                  duration: .05
              }),
              Ii.to(a, {
                  x: `+=${Math.random() * 100 - 50}`,
                  y: `+=${Math.random() * 100 - 50}`,
                  duration: 2.5 + o * .3,
                  repeat: -1,
                  yoyo: !0,
                  ease: "sine.inOut",
                  delay: o * 1.5
              })
          }
          )
      }
      ;
      return n(),
      window.addEventListener("resize", n),
      () => {
          window.removeEventListener("resize", n),
          t.current && (Ii.killTweensOf(t.current.children),
          t.current.innerHTML = "")
      }
  }
  , [e]),
  e ? null : _.jsx("div", {
      ref: t,
      className: "fixed inset-0 pointer-events-none z-0"
  })
}
, nP = ({note: t, index: e}) => {
  const [n,r] = M.useState(!1);
  return _.jsx(L.div, {
      className: "relative cursor-pointer select-none",
      style: {
          perspective: "1000px",
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))"
      },
      initial: {
          opacity: 0,
          y: 20
      },
      whileInView: {
          opacity: 1,
          y: 0
      },
      transition: {
          delay: e * .1,
          duration: .5
      },
      onClick: () => r(!n),
      children: _.jsxs(L.div, {
          className: `relative w-full h-full min-h-[140px] rounded-2xl shadow-xl border-2 ${t.borderColor}`,
          animate: {
              rotateY: n ? 180 : 0
          },
          transition: {
              duration: .6,
              ease: "easeInOut"
          },
          style: {
              transformStyle: "preserve-3d"
          },
          children: [_.jsxs("div", {
              className: `absolute inset-0 bg-gradient-to-br ${t.color} p-6 rounded-2xl flex flex-col items-center justify-center`,
              style: {
                  backfaceVisibility: "hidden"
              },
              children: [_.jsx("p", {
                  className: "font-comic text-gray-800 text-center font-semibold leading-relaxed text-lg",
                  children: t.text
              }), _.jsx("div", {
                  className: "absolute -top-1 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-yellow-200/70 rounded-sm shadow-sm border border-yellow-300/50",
                  style: {
                      clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)"
                  }
              }), _.jsx("div", {
                  className: "absolute bottom-2 right-2 text-xs text-gray-500 opacity-60",
                  children: "Click me!"
              })]
          }), _.jsxs("div", {
              className: "absolute inset-0 bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-2xl flex flex-col items-center justify-center",
              style: {
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden"
              },
              children: [_.jsx(Le, {
                  className: "w-8 h-8 text-red-500 mx-auto mb-2",
                  fill: "currentColor"
              }), _.jsx("p", {
                  className: "font-comic text-gray-700 font-medium",
                  children: t.hidden
              })]
          })]
      })
  })
}
, rP = M.memo( () => Bs() ? null : _.jsx(L.div, {
  className: "absolute inset-0",
  initial: {
      opacity: 0
  },
  animate: {
      opacity: 1
  },
  transition: {
      duration: 1
  },
  children: [...Array(10)].map( (e, n) => _.jsx(L.div, {
      className: "absolute w-2 h-2 bg-pink-300 rounded-full opacity-20",
      style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
      },
      initial: {
          opacity: 0,
          scale: 0
      },
      animate: {
          scale: [0, 1, 0],
          opacity: [0, .4, 0]
      },
      transition: {
          duration: 6 + Math.random() * 2,
          repeat: 1 / 0,
          delay: Math.random() * 5 + 1
      }
  }, n))
}))
, iP = M.memo( ({onOpenComplete: t}) => {
  const [e,n] = M.useState(!1)
    , [r,i] = M.useState(!1)
    , [s,o] = M.useState(!0)
    , [a,l] = M.useState(!0)
    , u = Bs();
  M.useEffect( () => {
      const f = setTimeout( () => {
          l(!1)
      }
      , 3e3);
      return () => clearTimeout(f)
  }
  , []);
  const c = M.useCallback( () => {
      e || (n(!0),
      setTimeout( () => i(!0), 600),
      setTimeout( () => t(), 2e3))
  }
  , [e, t]);
  return _.jsxs(L.div, {
      className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-rose-50 to-pink-100 relative overflow-hidden px-4",
      initial: {
          opacity: 0
      },
      animate: {
          opacity: 1
      },
      exit: {
          opacity: 0
      },
      transition: {
          duration: .6
      },
      children: [_.jsx(Pv, {}), _.jsx(rP, {}), _.jsx(Gi, {
          mode: "wait",
          children: s && _.jsxs(L.div, {
              className: "cursor-pointer relative z-20",
              onClick: c,
              initial: {
                  opacity: 0,
                  scale: .8,
                  y: 50
              },
              animate: {
                  opacity: 1,
                  scale: 1,
                  y: 0
              },
              exit: {
                  opacity: 0,
                  scale: .8,
                  y: -50
              },
              transition: {
                  duration: .6,
                  type: "spring",
                  bounce: .2
              },
              whileHover: {
                  scale: u ? 1 : 1.05
              },
              children: [!u && _.jsx(L.div, {
                  className: "absolute -top-32 sm:-top-36 md:-top-40 left-1/2 transform -translate-x-1/2 w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 z-30",
                  initial: {
                      y: -20,
                      opacity: 0
                  },
                  animate: {
                      y: [-15, 5, -15],
                      opacity: 1
                  },
                  transition: {
                      duration: 2.5,
                      repeat: 1 / 0,
                      repeatType: "reverse"
                  },
                  children: _.jsx("img", {
                      src: BT,
                      alt: "Animated hearts",
                      className: "w-full h-full object-contain",
                      style: {
                          pointerEvents: "none"
                      }
                  })
              }), _.jsxs(L.div, {
                  className: "relative w-80 h-56 sm:w-[360px] sm:h-[260px] md:w-[420px] md:h-[280px] bg-gradient-to-br from-white via-rose-50 to-pink-100 border-3 border-rose-300 rounded-2xl shadow-2xl overflow-hidden",
                  animate: e ? {
                      scale: .95,
                      opacity: .7
                  } : {
                      scale: 1,
                      opacity: 1
                  },
                  transition: {
                      duration: .8
                  },
                  style: {
                      background: "linear-gradient(135deg, #ffffff 0%, #fdf2f8 50%, #fce7f3 100%)",
                      boxShadow: "0 25px 50px rgba(236, 72, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.6)"
                  },
                  children: [_.jsx(L.div, {
                      className: "absolute top-0 left-0 right-0 w-0 h-0 border-l-[160px] border-r-[160px] border-t-[112px] sm:border-l-[180px] sm:border-r-[180px] sm:border-t-[130px] md:border-l-[210px] md:border-r-[210px] md:border-t-[140px] border-l-transparent border-r-transparent",
                      initial: {
                          rotateX: 0
                      },
                      animate: e ? {
                          rotateX: -180
                      } : {
                          rotateX: 0
                      },
                      transition: {
                          duration: .8,
                          ease: "easeInOut"
                      },
                      style: {
                          transformOrigin: "top",
                          borderTopColor: "#f43f5e",
                          filter: "drop-shadow(0 4px 6px rgba(244, 63, 94, 0.3))"
                      }
                  }), _.jsx(L.div, {
                      className: "absolute top-[45%] left-1/2 -translate-x-1/2 bg-gradient-to-br from-rose-400 via-pink-500 to-rose-600 rounded-full p-3 md:p-4 shadow-xl border-2 border-white",
                      whileHover: {
                          scale: u ? 1 : 1.15,
                          rotate: 5
                      },
                      style: {
                          background: "radial-gradient(circle at 30% 30%, #fb7185, #ec4899, #e11d48)",
                          boxShadow: "0 8px 16px rgba(236, 72, 153, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.3)"
                      },
                      children: _.jsx(Le, {
                          className: "w-6 h-6 md:w-7 md:h-7 text-white",
                          fill: "currentColor"
                      })
                  }), _.jsxs("div", {
                      className: "absolute inset-4 pointer-events-none",
                      children: [_.jsx("div", {
                          className: "absolute top-6 left-4 right-4 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent opacity-60"
                      }), _.jsx("div", {
                          className: "absolute top-12 left-8 right-8 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent opacity-40"
                      }), _.jsx("div", {
                          className: "absolute bottom-8 left-6 right-6 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent opacity-50"
                      })]
                  }), r && _.jsxs(L.div, {
                      className: "absolute inset-x-3 md:inset-x-5 top-3 h-[200px] md:h-[220px] bg-gradient-to-br from-white via-rose-25 to-pink-50 rounded-xl shadow-2xl p-4 md:p-5 text-center border-2 border-rose-100",
                      initial: {
                          y: 250,
                          opacity: 0,
                          scale: .8,
                          rotateX: 45
                      },
                      animate: {
                          y: -25,
                          opacity: 1,
                          scale: 1,
                          rotateX: 0
                      },
                      transition: {
                          duration: 1.2,
                          ease: "easeOut",
                          type: "spring",
                          bounce: .3
                      },
                      style: {
                          background: "linear-gradient(135deg, #ffffff 0%, #fef7f7 50%, #fdf2f8 100%)",
                          boxShadow: "0 20px 40px rgba(236, 72, 153, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)"
                      },
                      children: [_.jsxs("div", {
                          className: "flex items-center justify-center mb-3",
                          children: [_.jsx(Le, {
                              className: "w-4 h-4 md:w-5 md:h-5 text-rose-500 mr-2",
                              fill: "currentColor"
                          }), _.jsx("p", {
                              className: "text-sm md:text-base text-gray-700 font-comic font-semibold",
                              children: ge.ui.envelopePreview
                          }), _.jsx(Le, {
                              className: "w-4 h-4 md:w-5 md:h-5 text-rose-500 ml-2",
                              fill: "currentColor"
                          })]
                      }), _.jsx("div", {
                          className: "absolute bottom-2 left-2 right-2 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent"
                      })]
                  })]
              }), !e && _.jsxs(L.div, {
                  className: "text-rose-700 text-sm md:text-lg font-medium text-center mt-6 md:mt-8 bg-white/90 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg border-2 border-rose-200 max-w-xs md:max-w-none",
                  initial: {
                      opacity: 0,
                      y: 10
                  },
                  animate: u ? {
                      opacity: 1,
                      y: 0
                  } : {
                      opacity: [0, 1, .8, 1],
                      y: [10, 0, -2, 0],
                      scale: [1, 1.05, 1]
                  },
                  transition: u ? {
                      duration: .5
                  } : {
                      duration: 3,
                      repeat: 1 / 0,
                      delay: .5
                  },
                  style: {
                      background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(254,242,242,0.95) 100%)",
                      boxShadow: "0 8px 16px rgba(236, 72, 153, 0.2)"
                  },
                  children: ["✨ ", ge.ui.envelopeHint, " ✨"]
              })]
          })
      })]
  })
}
)
, sP = M.memo( ({hearts: t, onRemove: e}) => {
  const n = Bs();
  return _.jsx(Gi, {
      children: t.slice(-10).map(r => _.jsx(L.div, {
          className: "absolute pointer-events-none z-40",
          initial: {
              scale: 0,
              opacity: 1,
              rotate: 0
          },
          animate: n ? {
              scale: [1, 0],
              y: -50,
              opacity: [1, 0]
          } : {
              scale: [1, 1.5, 0],
              y: -100,
              opacity: [1, .8, 0],
              rotate: [0, 180, 360]
          },
          exit: {
              opacity: 0,
              scale: 0
          },
          transition: {
              duration: n ? 1 : 2,
              ease: "easeOut"
          },
          style: {
              left: r.x - 10,
              top: r.y - 10
          },
          onAnimationComplete: () => e(r.id),
          children: _.jsx(Le, {
              className: `${r.color} w-6 h-6`,
              fill: "currentColor"
          })
      }, r.id))
  })
}
);
function oP() {
  const [t,e] = M.useState(!1)
    , [n,r] = M.useState(!1)
    , [i,s] = M.useState(!1)
    , [o,a] = M.useState(!1)
    , [l,u] = M.useState(!1)
    , [c,f] = M.useState([])
    , [d,p] = M.useState(!1)
    , [v,h] = M.useState(!1)
    , [x,g] = M.useState(null)
    , [m,y] = M.useState(!1)
    , [S,w] = M.useState(0)
    , [T,C] = M.useState(0)
    , [k,P] = M.useState(0)
    , E = Bs()
    , O = M.useRef(null)
    , V = M.useRef([])
    , I = M.useMemo( () => [{
      title: "O Mere Dil Ke Chain",
      info: "🤌",
      src: jT
  }, {
      title: "Likhe Jo Khat Tujhe",
      info: "📮",
      src: LT
  }, {
      title: "Jiya Dhadak Dhadak",
      info: "💕",
      src: OT
  }], []);
  M.useEffect( () => {
      if (o && !i) {
          const R = setTimeout( () => s(!0), 800);
          return () => clearTimeout(R)
      }
  }
  , [o, i]),
  M.useCallback( () => {
      const R = document.getElementById("bgMusic");
      t ? R.pause() : R.play(),
      e(!t)
  }
  , [t]);
  const z = M.useCallback(R => {
      const N = {
          id: Date.now(),
          x: R.clientX,
          y: R.clientY,
          color: ["text-pink-500", "text-red-400", "text-purple-500"][Math.floor(Math.random() * 3)]
      };
      f(b => [...b.slice(-8), N])
  }
  , [])
    , G = M.useCallback(R => {
      f(N => N.filter(b => b.id !== R))
  }
  , [])
    , K = M.useCallback( (R, N) => {
      if (x && x.audio && (x.audio.pause(),
      x.audio.removeEventListener("timeupdate", () => {}
      ),
      x.audio.removeEventListener("loadedmetadata", () => {}
      ),
      x.audio.removeEventListener("ended", () => {}
      )),
      g({
          ...R,
          audio: null,
          index: N,
          loading: !0
      }),
      w(0),
      C(0),
      P(0),
      V.current[N] && O.current) {
          const me = V.current[N]
            , Ot = O.current
            , xr = Ot.offsetWidth
            , Cv = me.offsetWidth
            , Ev = me.offsetLeft - xr / 2 + Cv / 2;
          Ot.scrollTo({
              left: Ev,
              behavior: "smooth"
          })
      }
      const b = new Audio(R.src);
      b.loop = !1;
      const U = () => {
          if (b.duration) {
              const me = b.currentTime / b.duration * 100;
              w(me),
              C(b.currentTime)
          }
      }
        , Yt = () => {
          P(b.duration),
          g(me => ({
              ...me,
              duration: b.duration
          }))
      }
        , _e = () => {
          y(!1),
          g(null),
          w(0),
          C(0),
          P(0)
      }
      ;
      b.addEventListener("timeupdate", U),
      b.addEventListener("loadedmetadata", Yt),
      b.addEventListener("ended", _e),
      b.play().then( () => {
          g({
              ...R,
              audio: b,
              index: N,
              loading: !1,
              duration: b.duration
          }),
          y(!0)
      }
      ).catch(me => {
          console.error("Error playing song:", me),
          g(null)
      }
      )
  }
  , [x, I])
    , B = M.useCallback( () => {
      x && x.audio && (x.audio.pause(),
      x.audio.removeEventListener("timeupdate", () => {}
      ),
      x.audio.removeEventListener("loadedmetadata", () => {}
      ),
      x.audio.removeEventListener("ended", () => {}
      )),
      g(null),
      y(!1),
      w(0),
      C(0),
      P(0)
  }
  , [x])
    , D = R => {
      if (isNaN(R) || R === 0)
          return "0:00";
      const N = Math.floor(R / 60)
        , b = Math.floor(R % 60);
      return `${N}:${b.toString().padStart(2, "0")}`
  }
  ;
  return _.jsxs(Gi, {
      mode: "wait",
      children: [!o && _.jsx(iP, {
          onOpenComplete: () => {
              a(!0),
              r(!0)
          }
      }, "envelope"), o && _.jsxs(L.div, {
          className: "min-h-screen bg-gradient-to-br from-white via-rose-50 to-pink-100 p-4 md:p-8 cursor-pointer relative overflow-hidden",
          onClick: z,
          initial: {
              opacity: 0
          },
          animate: {
              opacity: 1
          },
          transition: {
              duration: .8
          },
          style: {
              background: "linear-gradient(135deg, #ffffff 0%, #fdf2f8 25%, #fce7f3 50%, #fbcfe8 75%, #f9a8d4 100%)"
          },
          children: [_.jsx(Pv, {}), !E && _.jsx(L.div, {
              className: "fixed inset-0 pointer-events-none",
              initial: {
                  opacity: 0
              },
              animate: {
                  opacity: 1
              },
              transition: {
                  duration: 1,
                  delay: .3
              },
              children: [...Array(10)].map( (R, N) => _.jsx(L.div, {
                  className: "absolute w-1 h-1 bg-pink-100 rounded-full",
                  style: {
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                  },
                  initial: {
                      opacity: 0,
                      scale: 0
                  },
                  animate: {
                      scale: [0, 1, 0],
                      opacity: [0, .4, 0]
                  },
                  transition: {
                      duration: 6 + Math.random() * 2,
                      repeat: 1 / 0,
                      delay: Math.random() * 5 + 1
                  }
              }, N))
          }), _.jsx(sP, {
              hearts: c,
              onRemove: G
          }), _.jsxs(L.div, {
              className: "max-w-6xl mx-auto space-y-20 relative z-20",
              initial: {
                  opacity: 0,
                  y: 20
              },
              animate: {
                  opacity: l ? 1 : 0,
                  y: l ? 0 : 20
              },
              transition: {
                  duration: .8,
                  delay: l ? .3 : 0
              },
              children: [_.jsx(wr, {
                  animation: "fade",
                  duration: .8,
                  delay: .5,
                  children: _.jsxs(L.div, {
                      className: "text-center pt-12",
                      whileInView: E ? {} : {
                          scale: [.95, 1]
                      },
                      transition: {
                          duration: .4
                      },
                      children: [_.jsxs(L.h1, {
                          className: "text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4 font-comic",
                          children: [ge.greeting.name, ","]
                      }), _.jsx(L.p, {
                          className: "text-xl text-gray-700 font-comic max-w-2xl mx-auto leading-relaxed",
                          initial: {
                              opacity: 0,
                              y: 20
                          },
                          animate: {
                              opacity: 1,
                              y: 0
                          },
                          transition: {
                              delay: .6,
                              duration: .6
                          },
                          children: ge.greeting.message
                      })]
                  })
              }), _.jsx(wr, {
                  animation: "zoom",
                  duration: .6,
                  delay: .1,
                  children: _.jsxs(L.div, {
                      className: "relative bg-gradient-to-br from-white via-pink-50 to-purple-50 p-4 md:p-10 text-center rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer border-2 border-pink-200 overflow-hidden",
                      whileHover: E ? {} : {
                          scale: 1.02,
                          boxShadow: "0 25px 50px rgba(236, 72, 153, 0.2)"
                      },
                      onClick: R => {
                          R.stopPropagation(),
                          r(!0)
                      }
                      ,
                      children: [_.jsx("div", {
                          className: "absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-pink-200 to-transparent rounded-full -translate-x-10 -translate-y-10 opacity-50"
                      }), _.jsx("div", {
                          className: "absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-purple-200 to-transparent rounded-full translate-x-8 translate-y-8 opacity-50"
                      }), !E && _.jsxs(_.Fragment, {
                          children: [_.jsx(L.div, {
                              className: "absolute top-4 right-4",
                              animate: {
                                  y: [-2, 2, -2]
                              },
                              transition: {
                                  duration: 2,
                                  repeat: 1 / 0
                              },
                              children: _.jsx(Le, {
                                  className: "w-4 h-4 text-pink-300",
                                  fill: "currentColor"
                              })
                          }), _.jsx(L.div, {
                              className: "absolute bottom-4 left-4",
                              animate: {
                                  y: [2, -2, 2]
                              },
                              transition: {
                                  duration: 2.5,
                                  repeat: 1 / 0
                              },
                              children: _.jsx(Le, {
                                  className: "w-3 h-3 text-purple-300",
                                  fill: "currentColor"
                              })
                          })]
                      }), _.jsx("div", {
                          className: "bg-gradient-to-br from-pink-100 to-purple-100 w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg border-4 border-white",
                          children: _.jsx(AT, {
                              className: "w-8 h-8 md:w-10 md:h-10 text-pink-600"
                          })
                      }), _.jsxs("div", {
                          className: "relative z-10",
                          children: [_.jsx("h2", {
                              className: "text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-2 md:mb-3",
                              children: ge.letter.title
                          }), _.jsx("p", {
                              className: "text-gray-600 font-comic text-lg md:text-xl leading-relaxed",
                              children: ge.letter.subtitle
                          }), _.jsxs("div", {
                              className: "flex justify-center items-center mt-3 md:mt-4 space-x-2",
                              children: [_.jsx("div", {
                                  className: "w-8 h-0.5 bg-gradient-to-r from-transparent to-pink-300"
                              }), _.jsx(kl, {
                                  className: "w-4 h-4 md:w-5 md:h-5 text-yellow-400"
                              }), _.jsx("div", {
                                  className: "w-8 h-0.5 bg-gradient-to-l from-transparent to-purple-300"
                              })]
                          })]
                      })]
                  })
              }), _.jsx(wr, {
                  animation: "slide",
                  duration: .6,
                  delay: .15,
                  children: _.jsxs(L.div, {
                      className: "relative bg-gradient-to-br from-white via-amber-50 to-orange-50 p-8 md:p-10 text-center rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-amber-200 overflow-hidden",
                      whileHover: E ? {} : {
                          scale: 1.02,
                          boxShadow: "0 25px 50px rgba(245, 158, 11, 0.2)"
                      },
                      children: [_.jsx("div", {
                          className: "absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-amber-200 to-transparent rounded-full -translate-x-10 -translate-y-10 opacity-40"
                      }), _.jsx("div", {
                          className: "absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-orange-200 to-transparent rounded-full translate-x-8 translate-y-8 opacity-40"
                      }), !E && _.jsx(L.div, {
                          className: "absolute top-6 right-6",
                          animate: {
                              rotate: [0, 15, -15, 0]
                          },
                          transition: {
                              duration: 4,
                              repeat: 1 / 0
                          },
                          children: _.jsx("span", {
                              className: "text-2xl",
                              children: "📸"
                          })
                      }), _.jsx("div", {
                          className: "bg-gradient-to-br from-amber-100 to-orange-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white",
                          children: _.jsx("span", {
                              className: "text-2xl",
                              children: "🖼️"
                          })
                      }), _.jsxs("div", {
                          className: "relative z-10",
                          children: [_.jsx("h2", {
                              className: "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 font-comic mb-3",
                              children: ge.gallery.title
                          }), _.jsx("p", {
                              className: "text-gray-600 font-comic text-xl leading-relaxed mb-6",
                              children: ge.gallery.subtitle
                          }), _.jsxs("div", {
                              className: "relative overflow-hidden rounded-2xl",
                              children: [_.jsx("div", {
                                  className: "flex gap-6 overflow-x-auto scroll-smooth pb-4",
                                  style: {
                                      scrollbarWidth: "none",
                                      msOverflowStyle: "none"
                                  },
                                  children: ge.gallery.photos.map( (R, N) => _.jsxs(L.div, {
                                      className: "flex-none w-72 sm:w-80 bg-white p-4 rounded-xl transform",
                                      style: {
                                          transform: `rotate(${(N % 2 === 0 ? 1 : -1) * (Math.random() * 3 + 1)}deg)`
                                      },
                                      whileHover: E ? {} : {
                                          scale: 1.05,
                                          rotate: 0,
                                          transition: {
                                              duration: .3
                                          }
                                      },
                                      initial: {
                                          opacity: 0,
                                          y: 20
                                      },
                                      whileInView: {
                                          opacity: 1,
                                          y: 0
                                      },
                                      transition: {
                                          delay: N * .1,
                                          duration: .5
                                      },
                                      children: [_.jsxs("div", {
                                          className: "relative bg-gray-100 rounded-lg flex items-center justify-center",
                                          children: [_.jsx("img", {
                                              src: R.src,
                                              alt: `Memory ${N + 1}`,
                                              className: "w-full aspect-[4/5] object-contain rounded-lg"
                                          }), _.jsx("div", {
                                              className: "absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md",
                                              children: _.jsx(Le, {
                                                  className: "w-4 h-4 text-red-500",
                                                  fill: "currentColor"
                                              })
                                          })]
                                      }), _.jsx("div", {
                                          className: "mt-4 text-center",
                                          children: _.jsx("p", {
                                              className: "font-comic text-gray-700 text-lg font-medium leading-relaxed",
                                              children: R.caption
                                          })
                                      })]
                                  }, N))
                              }), _.jsx("div", {
                                  className: "flex justify-center mt-4 space-x-2",
                                  children: Array.from({
                                      length: ge.scrollIndicators
                                  }).map( (R, N) => _.jsx("div", {
                                      className: "w-2 h-2 rounded-full bg-amber-300 opacity-60"
                                  }, N))
                              })]
                          }), _.jsxs("div", {
                              className: "flex justify-center items-center mt-6 space-x-2",
                              children: [_.jsx("div", {
                                  className: "w-8 h-[2px] bg-amber-300 rounded-full"
                              }), _.jsx("span", {
                                  className: "text-xl",
                                  children: ge.dividerIcon
                              }), _.jsx("div", {
                                  className: "w-8 h-[2px] bg-amber-300 rounded-full"
                              })]
                          })]
                      })]
                  })
              }), _.jsx(wr, {
                  animation: "fade",
                  threshold: .3,
                  duration: .8,
                  children: _.jsxs(L.div, {
                      className: "relative bg-gradient-to-br from-white via-yellow-50 to-pink-50 p-8 md:p-10 rounded-3xl shadow-2xl border border-yellow-200 overflow-hidden",
                      transition: {
                          duration: .6
                      },
                      children: [_.jsx("div", {
                          className: "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"
                      }), _.jsx("h2", {
                          className: "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-pink-600 mb-8 font-comic text-center",
                          children: "Pyaar Bhare Chhote Chhote Note 💌"
                      }), _.jsx("div", {
                          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
                          children: [{
                              text: "Tujhse milna baat karna hi mohabbat hai 💗",
                              hidden: "Prem kiya hai to Vishwas rakhiye Praan tyaag denge lekin aapko nahi 💕",
                              color: "from-yellow-100 to-yellow-200",
                              borderColor: "border-yellow-300"
                          }, {
                              text: "Teri muskaan meri rooh ka sukoon hai 🤍",
                              hidden:"I don't love you with my heart and mind.I love you with my soul,incase my mind forgets and my hearts stops 💟",
                              color: "from-purple-100 to-purple-200",
                              borderColor: "border-purple-300"
                          }, {
                              text: "Meri duaon ka sabse khoobsurat jawab tu hai 🥹",
                              hidden:"Suno Mohtarma, Tum mujhme, mujhse zayada ho I Love You Mi Todo ❤️",
                              color: "from-blue-100 to-blue-200",
                              borderColor: "border-blue-300"
                          }].map( (R, N) => _.jsx(nP, {
                              note: R,
                              index: N
                          }, N))
                      }), _.jsx("div", {
                          className: "text-center mt-8",
                          children: _.jsx("p", {
                              className: "text-gray-600 font-comic text-lg",
                              children: "Kisi bhi note pe click karo aur dekho uske peeche chhupi mohabbat ✨"
                          })
                      })]
                  })
              }), _.jsx(wr, {
                  animation: "slide",
                  duration: .6,
                  delay: .2,
                  children: _.jsxs(L.div, {
                      className: "relative bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-6 md:p-8 text-center rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-blue-200 overflow-hidden",
                      whileHover: E ? {} : {
                          scale: 1.02,
                          boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)"
                      },
                      children: [!E && _.jsxs("div", {
                          className: "absolute top-0 left-0 w-full h-full pointer-events-none",
                          children: [_.jsx(L.div, {
                              className: "absolute top-4 left-6 text-blue-200 text-xl",
                              animate: {
                                  rotate: [0, 15, -15, 0]
                              },
                              transition: {
                                  duration: 4,
                                  repeat: 1 / 0
                              },
                              children: "♪"
                          }), _.jsx(L.div, {
                              className: "absolute bottom-4 right-6 text-blue-300 text-lg",
                              animate: {
                                  rotate: [0, -15, 15, 0]
                              },
                              transition: {
                                  duration: 4,
                                  repeat: 1 / 0,
                                  delay: 2
                              },
                              children: "♬"
                          })]
                      }), _.jsxs("div", {
                          className: "flex items-center justify-center mb-8",
                          children: [_.jsx("div", {
                              className: "bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white mr-4",
                              children: _.jsx(RT, {
                                  className: "w-8 h-8 text-blue-600"
                              })
                          }), _.jsxs("div", {
                              className: "text-left",
                              children: [_.jsx("h2", {
                                  className: "text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-comic",
                                  children: "Playlist For You"
                              }), _.jsx("p", {
                                  className: "text-gray-600 font-comic text-lg",
                                  children: "Songs dedicated to u"
                              })]
                          })]
                      }), _.jsxs("div", {
                          className: "relative",
                          children: [_.jsx("div", {
                              ref: O,
                              className: "flex gap-6 overflow-x-auto scroll-smooth pb-4 px-2",
                              style: {
                                  scrollbarWidth: "none",
                                  msOverflowStyle: "none"
                              },
                              children: I.map( (R, N) => _.jsxs(L.div, {
                                  ref: b => V.current[N] = b,
                                  className: `flex-none w-72 bg-white/90 backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden ${x && x.index === N ? "border-blue-400 bg-blue-50/90 scale-105" : "border-gray-200 hover:border-blue-300 hover:scale-105"}`,
                                  whileHover: E ? {} : {
                                      y: -8
                                  },
                                  initial: {
                                      opacity: 0,
                                      x: 20
                                  },
                                  whileInView: {
                                      opacity: 1,
                                      x: 0
                                  },
                                  transition: {
                                      delay: N * .1,
                                      duration: .5
                                  },
                                  children: [_.jsxs("div", {
                                      className: "relative bg-gray-100 flex items-center justify-center p-3",
                                      children: [_.jsx("img", {
                                          src: [bT, VT, IT][N],
                                          alt: `${R.title} cover`,
                                          className: "w-full aspect-square object-contain rounded-xl"
                                      }), x && x.index === N && !x.loading && _.jsx(L.div, {
                                          className: "absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold",
                                          initial: {
                                              scale: 0
                                          },
                                          animate: {
                                              scale: 1
                                          },
                                          transition: {
                                              duration: .3
                                          },
                                          children: _.jsxs("div", {
                                              className: "flex items-center space-x-1",
                                              children: [_.jsx(L.div, {
                                                  className: "w-2 h-2 bg-white rounded-full",
                                                  animate: {
                                                      scale: [1, 1.5, 1]
                                                  },
                                                  transition: {
                                                      duration: 1,
                                                      repeat: 1 / 0
                                                  }
                                              }), _.jsx("span", {
                                                  children: "Now Playing"
                                              })]
                                          })
                                      }), x && x.index === N && !x.loading && !E && _.jsx(L.div, {
                                          className: "absolute bottom-4 left-4 flex items-end space-x-1",
                                          initial: {
                                              opacity: 0
                                          },
                                          animate: {
                                              opacity: 1
                                          },
                                          transition: {
                                              duration: .3
                                          },
                                          children: [...Array(4)].map( (b, U) => _.jsx(L.div, {
                                              className: "w-1 bg-white rounded-full",
                                              animate: {
                                                  height: [8, 16, 12, 20, 8]
                                              },
                                              transition: {
                                                  duration: .8,
                                                  repeat: 1 / 0,
                                                  delay: U * .1
                                              }
                                          }, U))
                                      })]
                                  }), _.jsxs("div", {
                                      className: "p-4 text-center",
                                      children: [_.jsx("h3", {
                                          className: "font-comic text-gray-900 font-bold text-lg mb-1 truncate",
                                          children: R.title
                                      }), _.jsx("p", {
                                          className: "font-comic text-gray-600 text-sm mb-4",
                                          children: R.info
                                      }), x && x.index === N ? _.jsxs(L.div, {
                                          className: "mb-4",
                                          initial: {
                                              opacity: 0,
                                              y: 10
                                          },
                                          animate: {
                                              opacity: 1,
                                              y: 0
                                          },
                                          transition: {
                                              duration: .3
                                          },
                                          children: [_.jsx("div", {
                                              className: "w-full bg-gray-200 rounded-full h-1 overflow-hidden mb-2",
                                              children: _.jsx(L.div, {
                                                  className: "bg-blue-500 h-1 rounded-full",
                                                  style: {
                                                      width: `${S}%`
                                                  },
                                                  transition: {
                                                      duration: .1
                                                  }
                                              })
                                          }), _.jsxs("div", {
                                              className: "flex justify-between text-xs text-gray-400",
                                              children: [_.jsx("span", {
                                                  children: D(T)
                                              }), _.jsx("span", {
                                                  children: D(k)
                                              })]
                                          })]
                                      }) : _.jsx("div", {
                                          className: "mb-4 h-[30px]"
                                      }), _.jsxs("div", {
                                          className: "flex items-center justify-center space-x-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-3 border border-gray-200",
                                          children: [_.jsx(L.button, {
                                              onClick: b => {
                                                  b.stopPropagation();
                                                  const U = (x ? x.index : N) > 0 ? (x ? x.index : N) - 1 : I.length - 1;
                                                  K(I[U], U)
                                              }
                                              ,
                                              className: "w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-blue-600 hover:bg-white transition-all shadow-sm",
                                              whileHover: E ? {} : {
                                                  scale: 1.1
                                              },
                                              whileTap: E ? {} : {
                                                  scale: .9
                                              },
                                              children: _.jsx("svg", {
                                                  className: "w-4 h-4",
                                                  fill: "currentColor",
                                                  viewBox: "0 0 24 24",
                                                  children: _.jsx("path", {
                                                      d: "M6 6h2v12H6zm3.5 6l8.5 6V6z"
                                                  })
                                              })
                                          }), _.jsx(L.button, {
                                              onClick: b => {
                                                  b.stopPropagation(),
                                                  x && x.index === N && !x.loading ? B() : K(R, N)
                                              }
                                              ,
                                              className: `w-12 h-12 rounded-full flex items-center justify-center text-white transition-all shadow-lg ${x && x.index === N && !x.loading ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-400 hover:bg-blue-500"}`,
                                              whileHover: E ? {} : {
                                                  scale: 1.1
                                              },
                                              whileTap: E ? {} : {
                                                  scale: .95
                                              },
                                              children: x && x.index === N && !x.loading ? _.jsx(L.svg, {
                                                  className: "w-5 h-5",
                                                  fill: "currentColor",
                                                  viewBox: "0 0 24 24",
                                                  initial: {
                                                      scale: 0
                                                  },
                                                  animate: {
                                                      scale: 1
                                                  },
                                                  transition: {
                                                      duration: .2
                                                  },
                                                  children: _.jsx("path", {
                                                      d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
                                                  })
                                              }) : _.jsx(L.svg, {
                                                  className: "w-5 h-5 ml-0.5",
                                                  fill: "currentColor",
                                                  viewBox: "0 0 24 24",
                                                  initial: {
                                                      scale: 0
                                                  },
                                                  animate: {
                                                      scale: 1
                                                  },
                                                  transition: {
                                                      duration: .2
                                                  },
                                                  children: _.jsx("path", {
                                                      d: "M8 5v14l11-7z"
                                                  })
                                              })
                                          }), _.jsx(L.button, {
                                              onClick: b => {
                                                  b.stopPropagation();
                                                  const U = (x ? x.index : N) < I.length - 1 ? (x ? x.index : N) + 1 : 0;
                                                  K(I[U], U)
                                              }
                                              ,
                                              className: "w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-blue-600 hover:bg-white transition-all shadow-sm",
                                              whileHover: E ? {} : {
                                                  scale: 1.1
                                              },
                                              whileTap: E ? {} : {
                                                  scale: .9
                                              },
                                              children: _.jsx("svg", {
                                                  className: "w-4 h-4",
                                                  fill: "currentColor",
                                                  viewBox: "0 0 24 24",
                                                  children: _.jsx("path", {
                                                      d: "M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"
                                                  })
                                              })
                                          })]
                                      })]
                                  })]
                              }, N))
                          }), _.jsx("div", {
                              className: "flex justify-center mt-6 space-x-2",
                              children: I.map( (R, N) => _.jsx(L.div, {
                                  className: `h-2 rounded-full transition-all cursor-pointer ${x && x.index === N ? "bg-blue-500 w-8" : "bg-blue-300 w-2 hover:bg-blue-400"}`,
                                  whileHover: E ? {} : {
                                      scale: 1.2
                                  },
                                  onClick: b => {
                                      b.stopPropagation(),
                                      K(I[N], N)
                                  }
                              }, N))
                          })]
                      }), _.jsxs("div", {
                          className: "flex justify-center items-center mt-8 space-x-2",
                          children: [_.jsx("div", {
                              className: "w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-300"
                          }), _.jsx(Le, {
                              className: "w-5 h-5 text-pink-400",
                              fill: "currentColor"
                          }), _.jsx("div", {
                              className: "w-12 h-0.5 bg-gradient-to-l from-transparent to-indigo-300"
                          })]
                      })]
                  })
              }), _.jsx(wr, {
                  animation: "slide",
                  duration: .6,
                  delay: .3,
                  children: _.jsxs(L.div, {
                      className: "relative bg-gradient-to-br from-white via-purple-50 to-pink-50 p-8 md:p-10 text-center rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer border-2 border-purple-200 overflow-hidden",
                      whileHover: E ? {} : {
                          scale: 1.02,
                          boxShadow: "0 25px 50px rgba(147, 51, 234, 0.2)"
                      },
                      onClick: R => {
                          R.stopPropagation(),
                          p(!0)
                      }
                      ,
                      children: [_.jsx("div", {
                          className: "absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-200 to-transparent rounded-full -translate-x-12 -translate-y-12 opacity-40"
                      }), _.jsx("div", {
                          className: "absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-pink-200 to-transparent rounded-full translate-x-10 translate-y-10 opacity-40"
                      }), !E && _.jsx(L.div, {
                          className: "absolute top-6 right-6",
                          animate: {
                              rotate: [0, 360]
                          },
                          transition: {
                              duration: 8,
                              repeat: 1 / 0
                          },
                          children: _.jsx(kl, {
                              className: "w-5 h-5 text-yellow-400"
                          })
                      }), _.jsx("div", {
                          className: "relative z-10 bg-gradient-to-br from-pink-100 to-purple-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white",
                          children: _.jsx(Le, {
                              className: "w-10 h-10 text-pink-600",
                              fill: "currentColor"
                          })
                      }), _.jsxs("div", {
                          className: "relative z-10",
                          children: [_.jsx("h2", {
                              className: "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-comic mb-3",
                              children: ge.game.title
                          }), _.jsx("p", {
                              className: "text-gray-600 font-comic text-xl leading-relaxed",
                              children: ge.game.subtitle
                          }), v && _.jsx(L.div, {
                              className: "mt-6 bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-2xl border-2 border-pink-200 shadow-inner",
                              initial: {
                                  scale: 0,
                                  rotate: -10
                              },
                              animate: {
                                  scale: 1,
                                  rotate: 0
                              },
                              transition: {
                                  type: "spring",
                                  duration: .4,
                                  bounce: .3
                              },
                              children: _.jsxs("p", {
                                  className: "text-pink-600 font-comic font-semibold text-lg",
                                  children: ["✨ ", ge.game.completionMessage]
                              })
                          }), _.jsxs("div", {
                              className: "flex justify-center items-center mt-4 space-x-2",
                              children: [_.jsx("div", {
                                  className: "w-8 h-0.5 bg-gradient-to-r from-transparent to-purple-300"
                              }), _.jsx(Le, {
                                  className: "w-4 h-4 text-pink-400",
                                  fill: "currentColor"
                              }), _.jsx("div", {
                                  className: "w-8 h-0.5 bg-gradient-to-l from-transparent to-pink-300"
                              })]
                          })]
                      })]
                  })
              })]
          }), _.jsx(Gi, {
              children: n && _.jsx(L.div, {
                  className: "fixed inset-0 bg-pink-100/30 backdrop-blur-sm flex items-center justify-center p-4 z-50",
                  onClick: () => {
                      r(!1),
                      l || u(!0)
                  }
                  ,
                  initial: {
                      opacity: 0
                  },
                  animate: {
                      opacity: 1
                  },
                  exit: {
                      opacity: 0
                  },
                  transition: {
                      duration: .4
                  },
                  children: _.jsxs(L.div, {
                      className: "relative bg-white/95 backdrop-blur-md p-8 md:p-12 max-w-3xl w-full rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh] border border-pink-200",
                      initial: {
                          scale: .9,
                          opacity: 0,
                          y: 30
                      },
                      animate: {
                          scale: 1,
                          opacity: 1,
                          y: 0
                      },
                      exit: {
                          scale: .9,
                          opacity: 0,
                          y: 30
                      },
                      transition: {
                          duration: .5,
                          type: "spring",
                          bounce: .1
                      },
                      onClick: R => R.stopPropagation(),
                      style: {
                          background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(254,242,242,0.98) 50%, rgba(252,231,243,0.98) 100%)",
                          backdropFilter: "blur(20px)",
                          boxShadow: "0 25px 50px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.6)"
                      },
                      children: [_.jsxs("div", {
                          className: "absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl opacity-30",
                          children: [_.jsx("div", {
                              className: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-200/50 to-transparent rounded-full -translate-x-16 -translate-y-16"
                          }), _.jsx("div", {
                              className: "absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-purple-200/50 to-transparent rounded-full translate-x-14 translate-y-14"
                          })]
                      }), _.jsx(L.button, {
                          onClick: () => {
                              r(!1),
                              l || u(!0)
                          }
                          ,
                          className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-pink-200 z-20 transition-all duration-200",
                          whileHover: E ? {} : {
                              scale: 1.1,
                              rotate: 90
                          },
                          whileTap: E ? {} : {
                              scale: .9
                          },
                          transition: {
                              duration: .2
                          },
                          children: _.jsx(DT, {
                              className: "w-6 h-6"
                          })
                      }), _.jsxs("div", {
                          className: "relative z-10",
                          children: [_.jsx(L.div, {
                              className: "flex items-center justify-center mb-8",
                              initial: {
                                  y: -20,
                                  opacity: 0
                              },
                              animate: {
                                  y: 0,
                                  opacity: 1
                              },
                              transition: {
                                  delay: .2,
                                  duration: .6
                              },
                              children: _.jsx("div", {
                                  className: "bg-gradient-to-r from-pink-100/80 to-purple-100/80 backdrop-blur-sm p-4 rounded-2xl border border-pink-200",
                                  children: _.jsxs("div", {
                                      className: "flex items-center justify-center space-x-3",
                                      children: [_.jsx(Le, {
                                          className: "w-8 h-8 text-pink-500",
                                          fill: "currentColor"
                                      }), _.jsx("h3", {
                                          className: "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-comic m-0",
                                          children: ge.letter.recipient
                                      }), _.jsx(Le, {
                                          className: "w-8 h-8 text-purple-500",
                                          fill: "currentColor"
                                      })]
                                  })
                              })
                          }), _.jsxs(L.div, {
                              className: "bg-white/70 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-inner border border-pink-100 relative",
                              initial: {
                                  y: 30,
                                  opacity: 0
                              },
                              animate: {
                                  y: 0,
                                  opacity: 1
                              },
                              transition: {
                                  delay: .3,
                                  duration: .7,
                                  ease: "easeOut"
                              },
                              style: {
                                  background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(254,240,245,0.85) 100%)",
                                  backdropFilter: "blur(10px)"
                              },
                              children: [_.jsx("div", {
                                  className: "absolute left-8 top-0 bottom-0 w-px bg-pink-200/50"
                              }), _.jsx("div", {
                                  className: "absolute left-12 top-0 bottom-0 w-px bg-pink-200/30"
                              }), _.jsxs("div", {
                                  className: "space-y-6 font-comic text-gray-700 leading-relaxed text-lg relative z-10",
                                  children: [ge.letter.paragraphs.map( (R, N) => _.jsxs(L.p, {
                                      className: "relative",
                                      initial: {
                                          x: -30,
                                          opacity: 0
                                      },
                                      animate: {
                                          x: 0,
                                          opacity: 1
                                      },
                                      transition: {
                                          delay: .5 + N * .2,
                                          duration: .8,
                                          ease: "easeOut"
                                      },
                                      children: [N === 0 && _.jsx("span", {
                                          className: "text-6xl font-bold text-pink-300/60 absolute -left-4 -top-2 leading-none select-none",
                                          children: '"'
                                      }), _.jsx("span", {
                                          className: "relative z-10",
                                          children: R
                                      })]
                                  }, N)), _.jsxs(L.div, {
                                      className: "text-right mt-8 pt-6 border-t border-pink-200/50 border-dashed",
                                      initial: {
                                          opacity: 0,
                                          y: 20
                                      },
                                      animate: {
                                          opacity: 1,
                                          y: 0
                                      },
                                      transition: {
                                          delay: .5 + ge.letter.paragraphs.length * .2,
                                          duration: .8
                                      },
                                      children: [_.jsx("p", {
                                          className: "font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-2",
                                          children: "With all my love,"
                                      }), _.jsx("p", {
                                          className: "text-xl text-pink-600 font-comic",
                                          style: {
                                              whiteSpace: "pre-line"
                                          },
                                          children: ge.letter.signature
                                      }), _.jsxs(L.div, {
                                          className: "flex justify-end items-center mt-4 space-x-2",
                                          initial: {
                                              scale: 0
                                          },
                                          animate: {
                                              scale: 1
                                          },
                                          transition: {
                                              delay: .7 + ge.letter.paragraphs.length * .2,
                                              duration: .5
                                          },
                                          children: [_.jsx(Le, {
                                              className: "w-5 h-5 text-pink-400",
                                              fill: "currentColor"
                                          }), _.jsx(kl, {
                                              className: "w-5 h-5 text-yellow-400"
                                          }), _.jsx(Le, {
                                              className: "w-5 h-5 text-purple-400",
                                              fill: "currentColor"
                                          })]
                                      })]
                                  })]
                              })]
                          })]
                      })]
                  })
              })
          }), _.jsx(Gi, {
              children: d && _.jsx(zT, {
                  onComplete: () => h(!0),
                  onClose: () => p(!1),
                  winMessage: ge.game.winMessage
              })
          })]
      }, "main-app")]
  })
}
Z0(document.getElementById("root")).render(_.jsx(M.StrictMode, {
  children: _.jsx(oP, {})
}));
