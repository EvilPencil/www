(() => {
  var We = !1,
    Ge = !1,
    B = [];
  function $t(e) {
    an(e);
  }
  function an(e) {
    B.includes(e) || B.push(e), cn();
  }
  function he(e) {
    let t = B.indexOf(e);
    t !== -1 && B.splice(t, 1);
  }
  function cn() {
    !Ge && !We && ((We = !0), queueMicrotask(ln));
  }
  function ln() {
    (We = !1), (Ge = !0);
    for (let e = 0; e < B.length; e++) B[e]();
    (B.length = 0), (Ge = !1);
  }
  var A,
    K,
    Y,
    Ye,
    Je = !0;
  function Lt(e) {
    (Je = !1), e(), (Je = !0);
  }
  function jt(e) {
    (A = e.reactive),
      (Y = e.release),
      (K = (t) =>
        e.effect(t, {
          scheduler: (r) => {
            Je ? $t(r) : r();
          },
        })),
      (Ye = e.raw);
  }
  function Ze(e) {
    K = e;
  }
  function Ft(e) {
    let t = () => { };
    return [
      (n) => {
        let i = K(n);
        return (
          e._x_effects ||
          ((e._x_effects = new Set()),
            (e._x_runEffects = () => {
              e._x_effects.forEach((o) => o());
            })),
          e._x_effects.add(i),
          (t = () => {
            i !== void 0 && (e._x_effects.delete(i), Y(i));
          }),
          i
        );
      },
      () => {
        t();
      },
    ];
  }
  var Bt = [],
    Kt = [],
    zt = [];
  function Vt(e) {
    zt.push(e);
  }
  function _e(e, t) {
    typeof t == "function"
      ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t))
      : ((t = e), Kt.push(t));
  }
  function Ht(e) {
    Bt.push(e);
  }
  function qt(e, t, r) {
    e._x_attributeCleanups || (e._x_attributeCleanups = {}),
      e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
      e._x_attributeCleanups[t].push(r);
  }
  function Qe(e, t) {
    !e._x_attributeCleanups ||
      Object.entries(e._x_attributeCleanups).forEach(([r, n]) => {
        (t === void 0 || t.includes(r)) &&
          (n.forEach((i) => i()), delete e._x_attributeCleanups[r]);
      });
  }
  var et = new MutationObserver(Xe),
    tt = !1;
  function rt() {
    et.observe(document, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeOldValue: !0,
    }),
      (tt = !0);
  }
  function fn() {
    un(), et.disconnect(), (tt = !1);
  }
  var te = [],
    nt = !1;
  function un() {
    (te = te.concat(et.takeRecords())),
      te.length &&
      !nt &&
      ((nt = !0),
        queueMicrotask(() => {
          dn(), (nt = !1);
        }));
  }
  function dn() {
    Xe(te), (te.length = 0);
  }
  function m(e) {
    if (!tt) return e();
    fn();
    let t = e();
    return rt(), t;
  }
  var it = !1,
    ge = [];
  function Ut() {
    it = !0;
  }
  function Wt() {
    (it = !1), Xe(ge), (ge = []);
  }
  function Xe(e) {
    if (it) {
      ge = ge.concat(e);
      return;
    }
    let t = [],
      r = [],
      n = new Map(),
      i = new Map();
    for (let o = 0; o < e.length; o++)
      if (
        !e[o].target._x_ignoreMutationObserver &&
        (e[o].type === "childList" &&
          (e[o].addedNodes.forEach((s) => s.nodeType === 1 && t.push(s)),
            e[o].removedNodes.forEach((s) => s.nodeType === 1 && r.push(s))),
          e[o].type === "attributes")
      ) {
        let s = e[o].target,
          a = e[o].attributeName,
          c = e[o].oldValue,
          l = () => {
            n.has(s) || n.set(s, []),
              n.get(s).push({ name: a, value: s.getAttribute(a) });
          },
          u = () => {
            i.has(s) || i.set(s, []), i.get(s).push(a);
          };
        s.hasAttribute(a) && c === null
          ? l()
          : s.hasAttribute(a)
            ? (u(), l())
            : u();
      }
    i.forEach((o, s) => {
      Qe(s, o);
    }),
      n.forEach((o, s) => {
        Bt.forEach((a) => a(s, o));
      });
    for (let o of r)
      if (!t.includes(o) && (Kt.forEach((s) => s(o)), o._x_cleanups))
        for (; o._x_cleanups.length;) o._x_cleanups.pop()();
    t.forEach((o) => {
      (o._x_ignoreSelf = !0), (o._x_ignore = !0);
    });
    for (let o of t)
      r.includes(o) ||
        !o.isConnected ||
        (delete o._x_ignoreSelf,
          delete o._x_ignore,
          zt.forEach((s) => s(o)),
          (o._x_ignore = !0),
          (o._x_ignoreSelf = !0));
    t.forEach((o) => {
      delete o._x_ignoreSelf, delete o._x_ignore;
    }),
      (t = null),
      (r = null),
      (n = null),
      (i = null);
  }
  function xe(e) {
    return D(k(e));
  }
  function C(e, t, r) {
    return (
      (e._x_dataStack = [t, ...k(r || e)]),
      () => {
        e._x_dataStack = e._x_dataStack.filter((n) => n !== t);
      }
    );
  }
  function ot(e, t) {
    let r = e._x_dataStack[0];
    Object.entries(t).forEach(([n, i]) => {
      r[n] = i;
    });
  }
  function k(e) {
    return e._x_dataStack
      ? e._x_dataStack
      : typeof ShadowRoot == "function" && e instanceof ShadowRoot
        ? k(e.host)
        : e.parentNode
          ? k(e.parentNode)
          : [];
  }
  function D(e) {
    let t = new Proxy(
      {},
      {
        ownKeys: () => Array.from(new Set(e.flatMap((r) => Object.keys(r)))),
        has: (r, n) => e.some((i) => i.hasOwnProperty(n)),
        get: (r, n) =>
          (e.find((i) => {
            if (i.hasOwnProperty(n)) {
              let o = Object.getOwnPropertyDescriptor(i, n);
              if (
                (o.get && o.get._x_alreadyBound) ||
                (o.set && o.set._x_alreadyBound)
              )
                return !0;
              if ((o.get || o.set) && o.enumerable) {
                let s = o.get,
                  a = o.set,
                  c = o;
                (s = s && s.bind(t)),
                  (a = a && a.bind(t)),
                  s && (s._x_alreadyBound = !0),
                  a && (a._x_alreadyBound = !0),
                  Object.defineProperty(i, n, { ...c, get: s, set: a });
              }
              return !0;
            }
            return !1;
          }) || {})[n],
        set: (r, n, i) => {
          let o = e.find((s) => s.hasOwnProperty(n));
          return o ? (o[n] = i) : (e[e.length - 1][n] = i), !0;
        },
      }
    );
    return t;
  }
  function ye(e) {
    let t = (n) => typeof n == "object" && !Array.isArray(n) && n !== null,
      r = (n, i = "") => {
        Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(
          ([o, { value: s, enumerable: a }]) => {
            if (a === !1 || s === void 0) return;
            let c = i === "" ? o : `${i}.${o}`;
            typeof s == "object" && s !== null && s._x_interceptor
              ? (n[o] = s.initialize(e, c, o))
              : t(s) && s !== n && !(s instanceof Element) && r(s, c);
          }
        );
      };
    return r(e);
  }
  function be(e, t = () => { }) {
    let r = {
      initialValue: void 0,
      _x_interceptor: !0,
      initialize(n, i, o) {
        return e(
          this.initialValue,
          () => pn(n, i),
          (s) => st(n, i, s),
          i,
          o
        );
      },
    };
    return (
      t(r),
      (n) => {
        if (typeof n == "object" && n !== null && n._x_interceptor) {
          let i = r.initialize.bind(r);
          r.initialize = (o, s, a) => {
            let c = n.initialize(o, s, a);
            return (r.initialValue = c), i(o, s, a);
          };
        } else r.initialValue = n;
        return r;
      }
    );
  }
  function pn(e, t) {
    return t.split(".").reduce((r, n) => r[n], e);
  }
  function st(e, t, r) {
    if ((typeof t == "string" && (t = t.split(".")), t.length === 1))
      e[t[0]] = r;
    else {
      if (t.length === 0) throw error;
      return e[t[0]] || (e[t[0]] = {}), st(e[t[0]], t.slice(1), r);
    }
  }
  var Gt = {};
  function x(e, t) {
    Gt[e] = t;
  }
  function re(e, t) {
    return (
      Object.entries(Gt).forEach(([r, n]) => {
        Object.defineProperty(e, `$${r}`, {
          get() {
            let [i, o] = at(t);
            return (i = { interceptor: be, ...i }), _e(t, o), n(t, i);
          },
          enumerable: !1,
        });
      }),
      e
    );
  }
  function Yt(e, t, r, ...n) {
    try {
      return r(...n);
    } catch (i) {
      J(i, e, t);
    }
  }
  function J(e, t, r = void 0) {
    Object.assign(e, { el: t, expression: r }),
      console.warn(
        `Alpine Expression Error: ${e.message}

${r
          ? 'Expression: "' +
          r +
          `"

`
          : ""
        }`,
        t
      ),
      setTimeout(() => {
        throw e;
      }, 0);
  }
  var ve = !0;
  function Jt(e) {
    let t = ve;
    (ve = !1), e(), (ve = t);
  }
  function P(e, t, r = {}) {
    let n;
    return g(e, t)((i) => (n = i), r), n;
  }
  function g(...e) {
    return Zt(...e);
  }
  var Zt = ct;
  function Qt(e) {
    Zt = e;
  }
  function ct(e, t) {
    let r = {};
    re(r, e);
    let n = [r, ...k(e)];
    if (typeof t == "function") return mn(n, t);
    let i = hn(n, t, e);
    return Yt.bind(null, e, t, i);
  }
  function mn(e, t) {
    return (r = () => { }, { scope: n = {}, params: i = [] } = {}) => {
      let o = t.apply(D([n, ...e]), i);
      we(r, o);
    };
  }
  var lt = {};
  function _n(e, t) {
    if (lt[e]) return lt[e];
    let r = Object.getPrototypeOf(async function () { }).constructor,
      n =
        /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e)
          ? `(() => { ${e} })()`
          : e,
      o = (() => {
        try {
          return new r(
            ["__self", "scope"],
            `with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`
          );
        } catch (s) {
          return J(s, t, e), Promise.resolve();
        }
      })();
    return (lt[e] = o), o;
  }
  function hn(e, t, r) {
    let n = _n(t, r);
    return (i = () => { }, { scope: o = {}, params: s = [] } = {}) => {
      (n.result = void 0), (n.finished = !1);
      let a = D([o, ...e]);
      if (typeof n == "function") {
        let c = n(n, a).catch((l) => J(l, r, t));
        n.finished
          ? (we(i, n.result, a, s, r), (n.result = void 0))
          : c
            .then((l) => {
              we(i, l, a, s, r);
            })
            .catch((l) => J(l, r, t))
            .finally(() => (n.result = void 0));
      }
    };
  }
  function we(e, t, r, n, i) {
    if (ve && typeof t == "function") {
      let o = t.apply(r, n);
      o instanceof Promise
        ? o.then((s) => we(e, s, r, n)).catch((s) => J(s, i, t))
        : e(o);
    } else e(t);
  }
  var ut = "x-";
  function E(e = "") {
    return ut + e;
  }
  function Xt(e) {
    ut = e;
  }
  var er = {};
  function d(e, t) {
    er[e] = t;
  }
  function ne(e, t, r) {
    if (((t = Array.from(t)), e._x_virtualDirectives)) {
      let o = Object.entries(e._x_virtualDirectives).map(([a, c]) => ({
        name: a,
        value: c,
      })),
        s = ft(o);
      (o = o.map((a) =>
        s.find((c) => c.name === a.name)
          ? { name: `x-bind:${a.name}`, value: `"${a.value}"` }
          : a
      )),
        (t = t.concat(o));
    }
    let n = {};
    return t
      .map(tr((o, s) => (n[o] = s)))
      .filter(rr)
      .map(xn(n, r))
      .sort(yn)
      .map((o) => gn(e, o));
  }
  function ft(e) {
    return Array.from(e)
      .map(tr())
      .filter((t) => !rr(t));
  }
  var dt = !1,
    ie = new Map(),
    nr = Symbol();
  function ir(e) {
    dt = !0;
    let t = Symbol();
    (nr = t), ie.set(t, []);
    let r = () => {
      for (; ie.get(t).length;) ie.get(t).shift()();
      ie.delete(t);
    },
      n = () => {
        (dt = !1), r();
      };
    e(r), n();
  }
  function at(e) {
    let t = [],
      r = (a) => t.push(a),
      [n, i] = Ft(e);
    return (
      t.push(i),
      [
        {
          Alpine: I,
          effect: n,
          cleanup: r,
          evaluateLater: g.bind(g, e),
          evaluate: P.bind(P, e),
        },
        () => t.forEach((a) => a()),
      ]
    );
  }
  function gn(e, t) {
    let r = () => { },
      n = er[t.type] || r,
      [i, o] = at(e);
    qt(e, t.original, o);
    let s = () => {
      e._x_ignore ||
        e._x_ignoreSelf ||
        (n.inline && n.inline(e, t, i),
          (n = n.bind(n, e, t, i)),
          dt ? ie.get(nr).push(n) : n());
    };
    return (s.runCleanups = o), s;
  }
  var Ee =
    (e, t) =>
      ({ name: r, value: n }) => (
        r.startsWith(e) && (r = r.replace(e, t)), { name: r, value: n }
      ),
    Se = (e) => e;
  function tr(e = () => { }) {
    return ({ name: t, value: r }) => {
      let { name: n, value: i } = or.reduce((o, s) => s(o), {
        name: t,
        value: r,
      });
      return n !== t && e(n, t), { name: n, value: i };
    };
  }
  var or = [];
  function Z(e) {
    or.push(e);
  }
  function rr({ name: e }) {
    return sr().test(e);
  }
  var sr = () => new RegExp(`^${ut}([^:^.]+)\\b`);
  function xn(e, t) {
    return ({ name: r, value: n }) => {
      let i = r.match(sr()),
        o = r.match(/:([a-zA-Z0-9\-:]+)/),
        s = r.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
        a = t || e[r] || r;
      return {
        type: i ? i[1] : null,
        value: o ? o[1] : null,
        modifiers: s.map((c) => c.replace(".", "")),
        expression: n,
        original: a,
      };
    };
  }
  var pt = "DEFAULT",
    Ae = [
      "ignore",
      "ref",
      "data",
      "id",
      "radio",
      "tabs",
      "switch",
      "disclosure",
      "menu",
      "listbox",
      "list",
      "item",
      "combobox",
      "bind",
      "init",
      "for",
      "mask",
      "model",
      "modelable",
      "transition",
      "show",
      "if",
      pt,
      "teleport",
    ];
  function yn(e, t) {
    let r = Ae.indexOf(e.type) === -1 ? pt : e.type,
      n = Ae.indexOf(t.type) === -1 ? pt : t.type;
    return Ae.indexOf(r) - Ae.indexOf(n);
  }
  function z(e, t, r = {}) {
    e.dispatchEvent(
      new CustomEvent(t, {
        detail: r,
        bubbles: !0,
        composed: !0,
        cancelable: !0,
      })
    );
  }
  var mt = [],
    ht = !1;
  function Te(e = () => { }) {
    return (
      queueMicrotask(() => {
        ht ||
          setTimeout(() => {
            Oe();
          });
      }),
      new Promise((t) => {
        mt.push(() => {
          e(), t();
        });
      })
    );
  }
  function Oe() {
    for (ht = !1; mt.length;) mt.shift()();
  }
  function ar() {
    ht = !0;
  }
  function R(e, t) {
    if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
      Array.from(e.children).forEach((i) => R(i, t));
      return;
    }
    let r = !1;
    if ((t(e, () => (r = !0)), r)) return;
    let n = e.firstElementChild;
    for (; n;) R(n, t, !1), (n = n.nextElementSibling);
  }
  function O(e, ...t) {
    console.warn(`Alpine Warning: ${e}`, ...t);
  }
  function lr() {
    document.body ||
      O(
        "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
      ),
      z(document, "alpine:init"),
      z(document, "alpine:initializing"),
      rt(),
      Vt((t) => w(t, R)),
      _e((t) => bn(t)),
      Ht((t, r) => {
        ne(t, r).forEach((n) => n());
      });
    let e = (t) => !V(t.parentElement, !0);
    Array.from(document.querySelectorAll(cr()))
      .filter(e)
      .forEach((t) => {
        w(t);
      }),
      z(document, "alpine:initialized");
  }
  var _t = [],
    ur = [];
  function fr() {
    return _t.map((e) => e());
  }
  function cr() {
    return _t.concat(ur).map((e) => e());
  }
  function Ce(e) {
    _t.push(e);
  }
  function Re(e) {
    ur.push(e);
  }
  function V(e, t = !1) {
    return Q(e, (r) => {
      if ((t ? cr() : fr()).some((i) => r.matches(i))) return !0;
    });
  }
  function Q(e, t) {
    if (!!e) {
      if (t(e)) return e;
      if ((e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement))
        return Q(e.parentElement, t);
    }
  }
  function dr(e) {
    return fr().some((t) => e.matches(t));
  }
  function w(e, t = R) {
    ir(() => {
      t(e, (r, n) => {
        ne(r, r.attributes).forEach((i) => i()), r._x_ignore && n();
      });
    });
  }
  function bn(e) {
    R(e, (t) => Qe(t));
  }
  function oe(e, t) {
    return Array.isArray(t)
      ? pr(e, t.join(" "))
      : typeof t == "object" && t !== null
        ? vn(e, t)
        : typeof t == "function"
          ? oe(e, t())
          : pr(e, t);
  }
  function pr(e, t) {
    let r = (o) => o.split(" ").filter(Boolean),
      n = (o) =>
        o
          .split(" ")
          .filter((s) => !e.classList.contains(s))
          .filter(Boolean),
      i = (o) => (
        e.classList.add(...o),
        () => {
          e.classList.remove(...o);
        }
      );
    return (t = t === !0 ? (t = "") : t || ""), i(n(t));
  }
  function vn(e, t) {
    let r = (a) => a.split(" ").filter(Boolean),
      n = Object.entries(t)
        .flatMap(([a, c]) => (c ? r(a) : !1))
        .filter(Boolean),
      i = Object.entries(t)
        .flatMap(([a, c]) => (c ? !1 : r(a)))
        .filter(Boolean),
      o = [],
      s = [];
    return (
      i.forEach((a) => {
        e.classList.contains(a) && (e.classList.remove(a), s.push(a));
      }),
      n.forEach((a) => {
        e.classList.contains(a) || (e.classList.add(a), o.push(a));
      }),
      () => {
        s.forEach((a) => e.classList.add(a)),
          o.forEach((a) => e.classList.remove(a));
      }
    );
  }
  function H(e, t) {
    return typeof t == "object" && t !== null ? wn(e, t) : En(e, t);
  }
  function wn(e, t) {
    let r = {};
    return (
      Object.entries(t).forEach(([n, i]) => {
        (r[n] = e.style[n]),
          n.startsWith("--") || (n = Sn(n)),
          e.style.setProperty(n, i);
      }),
      setTimeout(() => {
        e.style.length === 0 && e.removeAttribute("style");
      }),
      () => {
        H(e, r);
      }
    );
  }
  function En(e, t) {
    let r = e.getAttribute("style", t);
    return (
      e.setAttribute("style", t),
      () => {
        e.setAttribute("style", r || "");
      }
    );
  }
  function Sn(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function se(e, t = () => { }) {
    let r = !1;
    return function () {
      r ? t.apply(this, arguments) : ((r = !0), e.apply(this, arguments));
    };
  }
  d(
    "transition",
    (e, { value: t, modifiers: r, expression: n }, { evaluate: i }) => {
      typeof n == "function" && (n = i(n)), n ? An(e, n, t) : On(e, r, t);
    }
  );
  function An(e, t, r) {
    mr(e, oe, ""),
      {
        enter: (i) => {
          e._x_transition.enter.during = i;
        },
        "enter-start": (i) => {
          e._x_transition.enter.start = i;
        },
        "enter-end": (i) => {
          e._x_transition.enter.end = i;
        },
        leave: (i) => {
          e._x_transition.leave.during = i;
        },
        "leave-start": (i) => {
          e._x_transition.leave.start = i;
        },
        "leave-end": (i) => {
          e._x_transition.leave.end = i;
        },
      }[r](t);
  }
  function On(e, t, r) {
    mr(e, H);
    let n = !t.includes("in") && !t.includes("out") && !r,
      i = n || t.includes("in") || ["enter"].includes(r),
      o = n || t.includes("out") || ["leave"].includes(r);
    t.includes("in") && !n && (t = t.filter((h, b) => b < t.indexOf("out"))),
      t.includes("out") && !n && (t = t.filter((h, b) => b > t.indexOf("out")));
    let s = !t.includes("opacity") && !t.includes("scale"),
      a = s || t.includes("opacity"),
      c = s || t.includes("scale"),
      l = a ? 0 : 1,
      u = c ? ae(t, "scale", 95) / 100 : 1,
      p = ae(t, "delay", 0),
      y = ae(t, "origin", "center"),
      N = "opacity, transform",
      W = ae(t, "duration", 150) / 1e3,
      pe = ae(t, "duration", 75) / 1e3,
      f = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    i &&
      ((e._x_transition.enter.during = {
        transformOrigin: y,
        transitionDelay: p,
        transitionProperty: N,
        transitionDuration: `${W}s`,
        transitionTimingFunction: f,
      }),
        (e._x_transition.enter.start = { opacity: l, transform: `scale(${u})` }),
        (e._x_transition.enter.end = { opacity: 1, transform: "scale(1)" })),
      o &&
      ((e._x_transition.leave.during = {
        transformOrigin: y,
        transitionDelay: p,
        transitionProperty: N,
        transitionDuration: `${pe}s`,
        transitionTimingFunction: f,
      }),
        (e._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }),
        (e._x_transition.leave.end = { opacity: l, transform: `scale(${u})` }));
  }
  function mr(e, t, r = {}) {
    e._x_transition ||
      (e._x_transition = {
        enter: { during: r, start: r, end: r },
        leave: { during: r, start: r, end: r },
        in(n = () => { }, i = () => { }) {
          Me(
            e,
            t,
            {
              during: this.enter.during,
              start: this.enter.start,
              end: this.enter.end,
            },
            n,
            i
          );
        },
        out(n = () => { }, i = () => { }) {
          Me(
            e,
            t,
            {
              during: this.leave.during,
              start: this.leave.start,
              end: this.leave.end,
            },
            n,
            i
          );
        },
      });
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function (
    e,
    t,
    r,
    n
  ) {
    let i =
      document.visibilityState === "visible"
        ? requestAnimationFrame
        : setTimeout,
      o = () => i(r);
    if (t) {
      e._x_transition && (e._x_transition.enter || e._x_transition.leave)
        ? e._x_transition.enter &&
          (Object.entries(e._x_transition.enter.during).length ||
            Object.entries(e._x_transition.enter.start).length ||
            Object.entries(e._x_transition.enter.end).length)
          ? e._x_transition.in(r)
          : o()
        : e._x_transition
          ? e._x_transition.in(r)
          : o();
      return;
    }
    (e._x_hidePromise = e._x_transition
      ? new Promise((s, a) => {
        e._x_transition.out(
          () => { },
          () => s(n)
        ),
          e._x_transitioning.beforeCancel(() =>
            a({ isFromCancelledTransition: !0 })
          );
      })
      : Promise.resolve(n)),
      queueMicrotask(() => {
        let s = hr(e);
        s
          ? (s._x_hideChildren || (s._x_hideChildren = []),
            s._x_hideChildren.push(e))
          : i(() => {
            let a = (c) => {
              let l = Promise.all([
                c._x_hidePromise,
                ...(c._x_hideChildren || []).map(a),
              ]).then(([u]) => u());
              return delete c._x_hidePromise, delete c._x_hideChildren, l;
            };
            a(e).catch((c) => {
              if (!c.isFromCancelledTransition) throw c;
            });
          });
      });
  };
  function hr(e) {
    let t = e.parentNode;
    if (!!t) return t._x_hidePromise ? t : hr(t);
  }
  function Me(
    e,
    t,
    { during: r, start: n, end: i } = {},
    o = () => { },
    s = () => { }
  ) {
    if (
      (e._x_transitioning && e._x_transitioning.cancel(),
        Object.keys(r).length === 0 &&
        Object.keys(n).length === 0 &&
        Object.keys(i).length === 0)
    ) {
      o(), s();
      return;
    }
    let a, c, l;
    Tn(e, {
      start() {
        a = t(e, n);
      },
      during() {
        c = t(e, r);
      },
      before: o,
      end() {
        a(), (l = t(e, i));
      },
      after: s,
      cleanup() {
        c(), l();
      },
    });
  }
  function Tn(e, t) {
    let r,
      n,
      i,
      o = se(() => {
        m(() => {
          (r = !0),
            n || t.before(),
            i || (t.end(), Oe()),
            t.after(),
            e.isConnected && t.cleanup(),
            delete e._x_transitioning;
        });
      });
    (e._x_transitioning = {
      beforeCancels: [],
      beforeCancel(s) {
        this.beforeCancels.push(s);
      },
      cancel: se(function () {
        for (; this.beforeCancels.length;) this.beforeCancels.shift()();
        o();
      }),
      finish: o,
    }),
      m(() => {
        t.start(), t.during();
      }),
      ar(),
      requestAnimationFrame(() => {
        if (r) return;
        let s =
          Number(
            getComputedStyle(e)
              .transitionDuration.replace(/,.*/, "")
              .replace("s", "")
          ) * 1e3,
          a =
            Number(
              getComputedStyle(e)
                .transitionDelay.replace(/,.*/, "")
                .replace("s", "")
            ) * 1e3;
        s === 0 &&
          (s =
            Number(getComputedStyle(e).animationDuration.replace("s", "")) *
            1e3),
          m(() => {
            t.before();
          }),
          (n = !0),
          requestAnimationFrame(() => {
            r ||
              (m(() => {
                t.end();
              }),
                Oe(),
                setTimeout(e._x_transitioning.finish, s + a),
                (i = !0));
          });
      });
  }
  function ae(e, t, r) {
    if (e.indexOf(t) === -1) return r;
    let n = e[e.indexOf(t) + 1];
    if (!n || (t === "scale" && isNaN(n))) return r;
    if (t === "duration") {
      let i = n.match(/([0-9]+)ms/);
      if (i) return i[1];
    }
    return t === "origin" &&
      ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2])
      ? [n, e[e.indexOf(t) + 2]].join(" ")
      : n;
  }
  var gt = !1;
  function $(e, t = () => { }) {
    return (...r) => (gt ? t(...r) : e(...r));
  }
  function _r(e, t) {
    t._x_dataStack || (t._x_dataStack = e._x_dataStack),
      (gt = !0),
      Rn(() => {
        Cn(t);
      }),
      (gt = !1);
  }
  function Cn(e) {
    let t = !1;
    w(e, (n, i) => {
      R(n, (o, s) => {
        if (t && dr(o)) return s();
        (t = !0), i(o, s);
      });
    });
  }
  function Rn(e) {
    let t = K;
    Ze((r, n) => {
      let i = t(r);
      return Y(i), () => { };
    }),
      e(),
      Ze(t);
  }
  function ce(e, t, r, n = []) {
    switch (
    (e._x_bindings || (e._x_bindings = A({})),
      (e._x_bindings[t] = r),
      (t = n.includes("camel") ? Dn(t) : t),
      t)
    ) {
      case "value":
        Mn(e, r);
        break;
      case "style":
        Pn(e, r);
        break;
      case "class":
        Nn(e, r);
        break;
      default:
        kn(e, t, r);
        break;
    }
  }
  function Mn(e, t) {
    if (e.type === "radio")
      e.attributes.value === void 0 && (e.value = t),
        window.fromModel && (e.checked = gr(e.value, t));
    else if (e.type === "checkbox")
      Number.isInteger(t)
        ? (e.value = t)
        : !Number.isInteger(t) &&
          !Array.isArray(t) &&
          typeof t != "boolean" &&
          ![null, void 0].includes(t)
          ? (e.value = String(t))
          : Array.isArray(t)
            ? (e.checked = t.some((r) => gr(r, e.value)))
            : (e.checked = !!t);
    else if (e.tagName === "SELECT") In(e, t);
    else {
      if (e.value === t) return;
      e.value = t;
    }
  }
  function Nn(e, t) {
    e._x_undoAddedClasses && e._x_undoAddedClasses(),
      (e._x_undoAddedClasses = oe(e, t));
  }
  function Pn(e, t) {
    e._x_undoAddedStyles && e._x_undoAddedStyles(),
      (e._x_undoAddedStyles = H(e, t));
  }
  function kn(e, t, r) {
    [null, void 0, !1].includes(r) && Ln(t)
      ? e.removeAttribute(t)
      : (xr(t) && (r = t), $n(e, t, r));
  }
  function $n(e, t, r) {
    e.getAttribute(t) != r && e.setAttribute(t, r);
  }
  function In(e, t) {
    let r = [].concat(t).map((n) => n + "");
    Array.from(e.options).forEach((n) => {
      n.selected = r.includes(n.value);
    });
  }
  function Dn(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase());
  }
  function gr(e, t) {
    return e == t;
  }
  function xr(e) {
    return [
      "disabled",
      "checked",
      "required",
      "readonly",
      "hidden",
      "open",
      "selected",
      "autofocus",
      "itemscope",
      "multiple",
      "novalidate",
      "allowfullscreen",
      "allowpaymentrequest",
      "formnovalidate",
      "autoplay",
      "controls",
      "loop",
      "muted",
      "playsinline",
      "default",
      "ismap",
      "reversed",
      "async",
      "defer",
      "nomodule",
    ].includes(e);
  }
  function Ln(e) {
    return ![
      "aria-pressed",
      "aria-checked",
      "aria-expanded",
      "aria-selected",
    ].includes(e);
  }
  function yr(e, t, r) {
    if (e._x_bindings && e._x_bindings[t] !== void 0) return e._x_bindings[t];
    let n = e.getAttribute(t);
    return n === null
      ? typeof r == "function"
        ? r()
        : r
      : n === ""
        ? !0
        : xr(t)
          ? !![t, "true"].includes(n)
          : n;
  }
  function Ne(e, t) {
    var r;
    return function () {
      var n = this,
        i = arguments,
        o = function () {
          (r = null), e.apply(n, i);
        };
      clearTimeout(r), (r = setTimeout(o, t));
    };
  }
  function Pe(e, t) {
    let r;
    return function () {
      let n = this,
        i = arguments;
      r || (e.apply(n, i), (r = !0), setTimeout(() => (r = !1), t));
    };
  }
  function br(e) {
    e(I);
  }
  var q = {},
    vr = !1;
  function wr(e, t) {
    if ((vr || ((q = A(q)), (vr = !0)), t === void 0)) return q[e];
    (q[e] = t),
      typeof t == "object" &&
      t !== null &&
      t.hasOwnProperty("init") &&
      typeof t.init == "function" &&
      q[e].init(),
      ye(q[e]);
  }
  function Er() {
    return q;
  }
  var Sr = {};
  function Ar(e, t) {
    let r = typeof t != "function" ? () => t : t;
    e instanceof Element ? xt(e, r()) : (Sr[e] = r);
  }
  function Or(e) {
    return (
      Object.entries(Sr).forEach(([t, r]) => {
        Object.defineProperty(e, t, {
          get() {
            return (...n) => r(...n);
          },
        });
      }),
      e
    );
  }
  function xt(e, t, r) {
    let n = [];
    for (; n.length;) n.pop()();
    let i = Object.entries(t).map(([s, a]) => ({ name: s, value: a })),
      o = ft(i);
    (i = i.map((s) =>
      o.find((a) => a.name === s.name)
        ? { name: `x-bind:${s.name}`, value: `"${s.value}"` }
        : s
    )),
      ne(e, i, r).map((s) => {
        n.push(s.runCleanups), s();
      });
  }
  var Tr = {};
  function Cr(e, t) {
    Tr[e] = t;
  }
  function Rr(e, t) {
    return (
      Object.entries(Tr).forEach(([r, n]) => {
        Object.defineProperty(e, r, {
          get() {
            return (...i) => n.bind(t)(...i);
          },
          enumerable: !1,
        });
      }),
      e
    );
  }
  var jn = {
    get reactive() {
      return A;
    },
    get release() {
      return Y;
    },
    get effect() {
      return K;
    },
    get raw() {
      return Ye;
    },
    version: "3.10.5",
    flushAndStopDeferringMutations: Wt,
    dontAutoEvaluateFunctions: Jt,
    disableEffectScheduling: Lt,
    setReactivityEngine: jt,
    closestDataStack: k,
    skipDuringClone: $,
    addRootSelector: Ce,
    addInitSelector: Re,
    addScopeToNode: C,
    deferMutations: Ut,
    mapAttributes: Z,
    evaluateLater: g,
    setEvaluator: Qt,
    mergeProxies: D,
    findClosest: Q,
    closestRoot: V,
    interceptor: be,
    transition: Me,
    setStyles: H,
    mutateDom: m,
    directive: d,
    throttle: Pe,
    debounce: Ne,
    evaluate: P,
    initTree: w,
    nextTick: Te,
    prefixed: E,
    prefix: Xt,
    plugin: br,
    magic: x,
    store: wr,
    start: lr,
    clone: _r,
    bound: yr,
    $data: xe,
    data: Cr,
    bind: Ar,
  },
    I = jn;
  function yt(e, t) {
    let r = Object.create(null),
      n = e.split(",");
    for (let i = 0; i < n.length; i++) r[n[i]] = !0;
    return t ? (i) => !!r[i.toLowerCase()] : (i) => !!r[i];
  }
  var ns = {
    [1]: "TEXT",
    [2]: "CLASS",
    [4]: "STYLE",
    [8]: "PROPS",
    [16]: "FULL_PROPS",
    [32]: "HYDRATE_EVENTS",
    [64]: "STABLE_FRAGMENT",
    [128]: "KEYED_FRAGMENT",
    [256]: "UNKEYED_FRAGMENT",
    [512]: "NEED_PATCH",
    [1024]: "DYNAMIC_SLOTS",
    [2048]: "DEV_ROOT_FRAGMENT",
    [-1]: "HOISTED",
    [-2]: "BAIL",
  },
    is = { [1]: "STABLE", [2]: "DYNAMIC", [3]: "FORWARDED" };
  var Fn =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
  var os = yt(
    Fn +
    ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
  );
  var Mr = Object.freeze({}),
    ss = Object.freeze([]);
  var bt = Object.assign;
  var Bn = Object.prototype.hasOwnProperty,
    le = (e, t) => Bn.call(e, t),
    L = Array.isArray,
    X = (e) => Nr(e) === "[object Map]";
  var Kn = (e) => typeof e == "string",
    ke = (e) => typeof e == "symbol",
    ue = (e) => e !== null && typeof e == "object";
  var zn = Object.prototype.toString,
    Nr = (e) => zn.call(e),
    vt = (e) => Nr(e).slice(8, -1);
  var De = (e) =>
    Kn(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
  var Ie = (e) => {
    let t = Object.create(null);
    return (r) => t[r] || (t[r] = e(r));
  },
    Vn = /-(\w)/g,
    as = Ie((e) => e.replace(Vn, (t, r) => (r ? r.toUpperCase() : ""))),
    Hn = /\B([A-Z])/g,
    cs = Ie((e) => e.replace(Hn, "-$1").toLowerCase()),
    wt = Ie((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    ls = Ie((e) => (e ? `on${wt(e)}` : "")),
    Et = (e, t) => e !== t && (e === e || t === t);
  var St = new WeakMap(),
    fe = [],
    M,
    U = Symbol("iterate"),
    At = Symbol("Map key iterate");
  function qn(e) {
    return e && e._isEffect === !0;
  }
  function Pr(e, t = Mr) {
    qn(e) && (e = e.raw);
    let r = Un(e, t);
    return t.lazy || r(), r;
  }
  function Dr(e) {
    e.active &&
      (kr(e), e.options.onStop && e.options.onStop(), (e.active = !1));
  }
  var Wn = 0;
  function Un(e, t) {
    let r = function () {
      if (!r.active) return e();
      if (!fe.includes(r)) {
        kr(r);
        try {
          return Gn(), fe.push(r), (M = r), e();
        } finally {
          fe.pop(), Ir(), (M = fe[fe.length - 1]);
        }
      }
    };
    return (
      (r.id = Wn++),
      (r.allowRecurse = !!t.allowRecurse),
      (r._isEffect = !0),
      (r.active = !0),
      (r.raw = e),
      (r.deps = []),
      (r.options = t),
      r
    );
  }
  function kr(e) {
    let { deps: t } = e;
    if (t.length) {
      for (let r = 0; r < t.length; r++) t[r].delete(e);
      t.length = 0;
    }
  }
  var ee = !0,
    Ot = [];
  function Yn() {
    Ot.push(ee), (ee = !1);
  }
  function Gn() {
    Ot.push(ee), (ee = !0);
  }
  function Ir() {
    let e = Ot.pop();
    ee = e === void 0 ? !0 : e;
  }
  function T(e, t, r) {
    if (!ee || M === void 0) return;
    let n = St.get(e);
    n || St.set(e, (n = new Map()));
    let i = n.get(r);
    i || n.set(r, (i = new Set())),
      i.has(M) ||
      (i.add(M),
        M.deps.push(i),
        M.options.onTrack &&
        M.options.onTrack({ effect: M, target: e, type: t, key: r }));
  }
  function j(e, t, r, n, i, o) {
    let s = St.get(e);
    if (!s) return;
    let a = new Set(),
      c = (u) => {
        u &&
          u.forEach((p) => {
            (p !== M || p.allowRecurse) && a.add(p);
          });
      };
    if (t === "clear") s.forEach(c);
    else if (r === "length" && L(e))
      s.forEach((u, p) => {
        (p === "length" || p >= n) && c(u);
      });
    else
      switch ((r !== void 0 && c(s.get(r)), t)) {
        case "add":
          L(e)
            ? De(r) && c(s.get("length"))
            : (c(s.get(U)), X(e) && c(s.get(At)));
          break;
        case "delete":
          L(e) || (c(s.get(U)), X(e) && c(s.get(At)));
          break;
        case "set":
          X(e) && c(s.get(U));
          break;
      }
    let l = (u) => {
      u.options.onTrigger &&
        u.options.onTrigger({
          effect: u,
          target: e,
          key: r,
          type: t,
          newValue: n,
          oldValue: i,
          oldTarget: o,
        }),
        u.options.scheduler ? u.options.scheduler(u) : u();
    };
    a.forEach(l);
  }
  var Jn = yt("__proto__,__v_isRef,__isVue"),
    $r = new Set(
      Object.getOwnPropertyNames(Symbol)
        .map((e) => Symbol[e])
        .filter(ke)
    ),
    Zn = $e(),
    Qn = $e(!1, !0),
    Xn = $e(!0),
    ei = $e(!0, !0),
    Le = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    let t = Array.prototype[e];
    Le[e] = function (...r) {
      let n = _(this);
      for (let o = 0, s = this.length; o < s; o++) T(n, "get", o + "");
      let i = t.apply(n, r);
      return i === -1 || i === !1 ? t.apply(n, r.map(_)) : i;
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    let t = Array.prototype[e];
    Le[e] = function (...r) {
      Yn();
      let n = t.apply(this, r);
      return Ir(), n;
    };
  });
  function $e(e = !1, t = !1) {
    return function (n, i, o) {
      if (i === "__v_isReactive") return !e;
      if (i === "__v_isReadonly") return e;
      if (i === "__v_raw" && o === (e ? (t ? ri : jr) : t ? ti : Lr).get(n))
        return n;
      let s = L(n);
      if (!e && s && le(Le, i)) return Reflect.get(Le, i, o);
      let a = Reflect.get(n, i, o);
      return (ke(i) ? $r.has(i) : Jn(i)) || (e || T(n, "get", i), t)
        ? a
        : Tt(a)
          ? !s || !De(i)
            ? a.value
            : a
          : ue(a)
            ? e
              ? Fr(a)
              : je(a)
            : a;
    };
  }
  var ni = Br(),
    ii = Br(!0);
  function Br(e = !1) {
    return function (r, n, i, o) {
      let s = r[n];
      if (!e && ((i = _(i)), (s = _(s)), !L(r) && Tt(s) && !Tt(i)))
        return (s.value = i), !0;
      let a = L(r) && De(n) ? Number(n) < r.length : le(r, n),
        c = Reflect.set(r, n, i, o);
      return (
        r === _(o) &&
        (a ? Et(i, s) && j(r, "set", n, i, s) : j(r, "add", n, i)),
        c
      );
    };
  }
  function oi(e, t) {
    let r = le(e, t),
      n = e[t],
      i = Reflect.deleteProperty(e, t);
    return i && r && j(e, "delete", t, void 0, n), i;
  }
  function si(e, t) {
    let r = Reflect.has(e, t);
    return (!ke(t) || !$r.has(t)) && T(e, "has", t), r;
  }
  function ai(e) {
    return T(e, "iterate", L(e) ? "length" : U), Reflect.ownKeys(e);
  }
  var Kr = { get: Zn, set: ni, deleteProperty: oi, has: si, ownKeys: ai },
    zr = {
      get: Xn,
      set(e, t) {
        return (
          console.warn(
            `Set operation on key "${String(t)}" failed: target is readonly.`,
            e
          ),
          !0
        );
      },
      deleteProperty(e, t) {
        return (
          console.warn(
            `Delete operation on key "${String(
              t
            )}" failed: target is readonly.`,
            e
          ),
          !0
        );
      },
    },
    hs = bt({}, Kr, { get: Qn, set: ii }),
    _s = bt({}, zr, { get: ei }),
    Ct = (e) => (ue(e) ? je(e) : e),
    Rt = (e) => (ue(e) ? Fr(e) : e),
    Mt = (e) => e,
    Fe = (e) => Reflect.getPrototypeOf(e);
  function Be(e, t, r = !1, n = !1) {
    e = e.__v_raw;
    let i = _(e),
      o = _(t);
    t !== o && !r && T(i, "get", t), !r && T(i, "get", o);
    let { has: s } = Fe(i),
      a = n ? Mt : r ? Rt : Ct;
    if (s.call(i, t)) return a(e.get(t));
    if (s.call(i, o)) return a(e.get(o));
    e !== i && e.get(t);
  }
  function Ke(e, t = !1) {
    let r = this.__v_raw,
      n = _(r),
      i = _(e);
    return (
      e !== i && !t && T(n, "has", e),
      !t && T(n, "has", i),
      e === i ? r.has(e) : r.has(e) || r.has(i)
    );
  }
  function ze(e, t = !1) {
    return (
      (e = e.__v_raw), !t && T(_(e), "iterate", U), Reflect.get(e, "size", e)
    );
  }
  function Vr(e) {
    e = _(e);
    let t = _(this);
    return Fe(t).has.call(t, e) || (t.add(e), j(t, "add", e, e)), this;
  }
  function qr(e, t) {
    t = _(t);
    let r = _(this),
      { has: n, get: i } = Fe(r),
      o = n.call(r, e);
    o ? Hr(r, n, e) : ((e = _(e)), (o = n.call(r, e)));
    let s = i.call(r, e);
    return (
      r.set(e, t),
      o ? Et(t, s) && j(r, "set", e, t, s) : j(r, "add", e, t),
      this
    );
  }
  function Ur(e) {
    let t = _(this),
      { has: r, get: n } = Fe(t),
      i = r.call(t, e);
    i ? Hr(t, r, e) : ((e = _(e)), (i = r.call(t, e)));
    let o = n ? n.call(t, e) : void 0,
      s = t.delete(e);
    return i && j(t, "delete", e, void 0, o), s;
  }
  function Wr() {
    let e = _(this),
      t = e.size !== 0,
      r = X(e) ? new Map(e) : new Set(e),
      n = e.clear();
    return t && j(e, "clear", void 0, void 0, r), n;
  }
  function Ve(e, t) {
    return function (n, i) {
      let o = this,
        s = o.__v_raw,
        a = _(s),
        c = t ? Mt : e ? Rt : Ct;
      return (
        !e && T(a, "iterate", U), s.forEach((l, u) => n.call(i, c(l), c(u), o))
      );
    };
  }
  function He(e, t, r) {
    return function (...n) {
      let i = this.__v_raw,
        o = _(i),
        s = X(o),
        a = e === "entries" || (e === Symbol.iterator && s),
        c = e === "keys" && s,
        l = i[e](...n),
        u = r ? Mt : t ? Rt : Ct;
      return (
        !t && T(o, "iterate", c ? At : U),
        {
          next() {
            let { value: p, done: y } = l.next();
            return y
              ? { value: p, done: y }
              : { value: a ? [u(p[0]), u(p[1])] : u(p), done: y };
          },
          [Symbol.iterator]() {
            return this;
          },
        }
      );
    };
  }
  function F(e) {
    return function (...t) {
      {
        let r = t[0] ? `on key "${t[0]}" ` : "";
        console.warn(
          `${wt(e)} operation ${r}failed: target is readonly.`,
          _(this)
        );
      }
      return e === "delete" ? !1 : this;
    };
  }
  var Gr = {
    get(e) {
      return Be(this, e);
    },
    get size() {
      return ze(this);
    },
    has: Ke,
    add: Vr,
    set: qr,
    delete: Ur,
    clear: Wr,
    forEach: Ve(!1, !1),
  },
    Yr = {
      get(e) {
        return Be(this, e, !1, !0);
      },
      get size() {
        return ze(this);
      },
      has: Ke,
      add: Vr,
      set: qr,
      delete: Ur,
      clear: Wr,
      forEach: Ve(!1, !0),
    },
    Jr = {
      get(e) {
        return Be(this, e, !0);
      },
      get size() {
        return ze(this, !0);
      },
      has(e) {
        return Ke.call(this, e, !0);
      },
      add: F("add"),
      set: F("set"),
      delete: F("delete"),
      clear: F("clear"),
      forEach: Ve(!0, !1),
    },
    Zr = {
      get(e) {
        return Be(this, e, !0, !0);
      },
      get size() {
        return ze(this, !0);
      },
      has(e) {
        return Ke.call(this, e, !0);
      },
      add: F("add"),
      set: F("set"),
      delete: F("delete"),
      clear: F("clear"),
      forEach: Ve(!0, !0),
    },
    ci = ["keys", "values", "entries", Symbol.iterator];
  ci.forEach((e) => {
    (Gr[e] = He(e, !1, !1)),
      (Jr[e] = He(e, !0, !1)),
      (Yr[e] = He(e, !1, !0)),
      (Zr[e] = He(e, !0, !0));
  });
  function qe(e, t) {
    let r = t ? (e ? Zr : Yr) : e ? Jr : Gr;
    return (n, i, o) =>
      i === "__v_isReactive"
        ? !e
        : i === "__v_isReadonly"
          ? e
          : i === "__v_raw"
            ? n
            : Reflect.get(le(r, i) && i in n ? r : n, i, o);
  }
  var li = { get: qe(!1, !1) },
    gs = { get: qe(!1, !0) },
    ui = { get: qe(!0, !1) },
    xs = { get: qe(!0, !0) };
  function Hr(e, t, r) {
    let n = _(r);
    if (n !== r && t.call(e, n)) {
      let i = vt(e);
      console.warn(
        `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""
        }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
      );
    }
  }
  var Lr = new WeakMap(),
    ti = new WeakMap(),
    jr = new WeakMap(),
    ri = new WeakMap();
  function fi(e) {
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
  function di(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : fi(vt(e));
  }
  function je(e) {
    return e && e.__v_isReadonly ? e : Qr(e, !1, Kr, li, Lr);
  }
  function Fr(e) {
    return Qr(e, !0, zr, ui, jr);
  }
  function Qr(e, t, r, n, i) {
    if (!ue(e))
      return console.warn(`value cannot be made reactive: ${String(e)}`), e;
    if (e.__v_raw && !(t && e.__v_isReactive)) return e;
    let o = i.get(e);
    if (o) return o;
    let s = di(e);
    if (s === 0) return e;
    let a = new Proxy(e, s === 2 ? n : r);
    return i.set(e, a), a;
  }
  function _(e) {
    return (e && _(e.__v_raw)) || e;
  }
  function Tt(e) {
    return Boolean(e && e.__v_isRef === !0);
  }
  x("nextTick", () => Te);
  x("dispatch", (e) => z.bind(z, e));
  x("watch", (e, { evaluateLater: t, effect: r }) => (n, i) => {
    let o = t(n),
      s = !0,
      a,
      c = r(() =>
        o((l) => {
          JSON.stringify(l),
            s
              ? (a = l)
              : queueMicrotask(() => {
                i(l, a), (a = l);
              }),
            (s = !1);
        })
      );
    e._x_effects.delete(c);
  });
  x("store", Er);
  x("data", (e) => xe(e));
  x("root", (e) => V(e));
  x(
    "refs",
    (e) => (e._x_refs_proxy || (e._x_refs_proxy = D(pi(e))), e._x_refs_proxy)
  );
  function pi(e) {
    let t = [],
      r = e;
    for (; r;) r._x_refs && t.push(r._x_refs), (r = r.parentNode);
    return t;
  }
  var Nt = {};
  function Pt(e) {
    return Nt[e] || (Nt[e] = 0), ++Nt[e];
  }
  function Xr(e, t) {
    return Q(e, (r) => {
      if (r._x_ids && r._x_ids[t]) return !0;
    });
  }
  function en(e, t) {
    e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = Pt(t));
  }
  x("id", (e) => (t, r = null) => {
    let n = Xr(e, t),
      i = n ? n._x_ids[t] : Pt(t);
    return r ? `${t}-${i}-${r}` : `${t}-${i}`;
  });
  x("el", (e) => e);
  tn("Focus", "focus", "focus");
  tn("Persist", "persist", "persist");
  function tn(e, t, r) {
    x(t, (n) =>
      O(
        `You can't use [$${directiveName}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,
        n
      )
    );
  }
  d("modelable", (e, { expression: t }, { effect: r, evaluateLater: n }) => {
    let i = n(t),
      o = () => {
        let l;
        return i((u) => (l = u)), l;
      },
      s = n(`${t} = __placeholder`),
      a = (l) => s(() => { }, { scope: { __placeholder: l } }),
      c = o();
    a(c),
      queueMicrotask(() => {
        if (!e._x_model) return;
        e._x_removeModelListeners.default();
        let l = e._x_model.get,
          u = e._x_model.set;
        r(() => a(l())), r(() => u(o()));
      });
  });
  d("teleport", (e, { expression: t }, { cleanup: r }) => {
    e.tagName.toLowerCase() !== "template" &&
      O("x-teleport can only be used on a <template> tag", e);
    let n = document.querySelector(t);
    n || O(`Cannot find x-teleport element for selector: "${t}"`);
    let i = e.content.cloneNode(!0).firstElementChild;
    (e._x_teleport = i),
      (i._x_teleportBack = e),
      e._x_forwardEvents &&
      e._x_forwardEvents.forEach((o) => {
        i.addEventListener(o, (s) => {
          s.stopPropagation(), e.dispatchEvent(new s.constructor(s.type, s));
        });
      }),
      C(i, {}, e),
      m(() => {
        n.appendChild(i), w(i), (i._x_ignore = !0);
      }),
      r(() => i.remove());
  });
  var rn = () => { };
  rn.inline = (e, { modifiers: t }, { cleanup: r }) => {
    t.includes("self") ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
      r(() => {
        t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
      });
  };
  d("ignore", rn);
  d("effect", (e, { expression: t }, { effect: r }) => r(g(e, t)));
  function de(e, t, r, n) {
    let i = e,
      o = (c) => n(c),
      s = {},
      a = (c, l) => (u) => l(c, u);
    if (
      (r.includes("dot") && (t = mi(t)),
        r.includes("camel") && (t = hi(t)),
        r.includes("passive") && (s.passive = !0),
        r.includes("capture") && (s.capture = !0),
        r.includes("window") && (i = window),
        r.includes("document") && (i = document),
        r.includes("prevent") &&
        (o = a(o, (c, l) => {
          l.preventDefault(), c(l);
        })),
        r.includes("stop") &&
        (o = a(o, (c, l) => {
          l.stopPropagation(), c(l);
        })),
        r.includes("self") &&
        (o = a(o, (c, l) => {
          l.target === e && c(l);
        })),
        (r.includes("away") || r.includes("outside")) &&
        ((i = document),
          (o = a(o, (c, l) => {
            e.contains(l.target) ||
              (l.target.isConnected !== !1 &&
                ((e.offsetWidth < 1 && e.offsetHeight < 1) ||
                  (e._x_isShown !== !1 && c(l))));
          }))),
        r.includes("once") &&
        (o = a(o, (c, l) => {
          c(l), i.removeEventListener(t, o, s);
        })),
        (o = a(o, (c, l) => {
          (_i(t) && gi(l, r)) || c(l);
        })),
        r.includes("debounce"))
    ) {
      let c = r[r.indexOf("debounce") + 1] || "invalid-wait",
        l = kt(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
      o = Ne(o, l);
    }
    if (r.includes("throttle")) {
      let c = r[r.indexOf("throttle") + 1] || "invalid-wait",
        l = kt(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
      o = Pe(o, l);
    }
    return (
      i.addEventListener(t, o, s),
      () => {
        i.removeEventListener(t, o, s);
      }
    );
  }
  function mi(e) {
    return e.replace(/-/g, ".");
  }
  function hi(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase());
  }
  function kt(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function xi(e) {
    return e
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[_\s]/, "-")
      .toLowerCase();
  }
  function _i(e) {
    return ["keydown", "keyup"].includes(e);
  }
  function gi(e, t) {
    let r = t.filter(
      (o) => !["window", "document", "prevent", "stop", "once"].includes(o)
    );
    if (r.includes("debounce")) {
      let o = r.indexOf("debounce");
      r.splice(o, kt((r[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (r.length === 0 || (r.length === 1 && nn(e.key).includes(r[0])))
      return !1;
    let i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((o) =>
      r.includes(o)
    );
    return (
      (r = r.filter((o) => !i.includes(o))),
      !(
        i.length > 0 &&
        i.filter(
          (s) => ((s === "cmd" || s === "super") && (s = "meta"), e[`${s}Key`])
        ).length === i.length &&
        nn(e.key).includes(r[0])
      )
    );
  }
  function nn(e) {
    if (!e) return [];
    e = xi(e);
    let t = {
      ctrl: "control",
      slash: "/",
      space: "-",
      spacebar: "-",
      cmd: "meta",
      esc: "escape",
      up: "arrow-up",
      down: "arrow-down",
      left: "arrow-left",
      right: "arrow-right",
      period: ".",
      equal: "=",
    };
    return (
      (t[e] = e),
      Object.keys(t)
        .map((r) => {
          if (t[r] === e) return r;
        })
        .filter((r) => r)
    );
  }
  d(
    "model",
    (e, { modifiers: t, expression: r }, { effect: n, cleanup: i }) => {
      let o = g(e, r),
        s = `${r} = rightSideOfExpression($event, ${r})`,
        a = g(e, s);
      var c =
        e.tagName.toLowerCase() === "select" ||
          ["checkbox", "radio"].includes(e.type) ||
          t.includes("lazy")
          ? "change"
          : "input";
      let l = yi(e, t, r),
        u = de(e, c, t, (y) => {
          a(() => { }, { scope: { $event: y, rightSideOfExpression: l } });
        });
      e._x_removeModelListeners || (e._x_removeModelListeners = {}),
        (e._x_removeModelListeners.default = u),
        i(() => e._x_removeModelListeners.default());
      let p = g(e, `${r} = __placeholder`);
      (e._x_model = {
        get() {
          let y;
          return o((N) => (y = N)), y;
        },
        set(y) {
          p(() => { }, { scope: { __placeholder: y } });
        },
      }),
        (e._x_forceModelUpdate = () => {
          o((y) => {
            y === void 0 && r.match(/\./) && (y = ""),
              (window.fromModel = !0),
              m(() => ce(e, "value", y)),
              delete window.fromModel;
          });
        }),
        n(() => {
          (t.includes("unintrusive") && document.activeElement.isSameNode(e)) ||
            e._x_forceModelUpdate();
        });
    }
  );
  function yi(e, t, r) {
    return (
      e.type === "radio" &&
      m(() => {
        e.hasAttribute("name") || e.setAttribute("name", r);
      }),
      (n, i) =>
        m(() => {
          if (n instanceof CustomEvent && n.detail !== void 0)
            return n.detail || n.target.value;
          if (e.type === "checkbox")
            if (Array.isArray(i)) {
              let o = t.includes("number")
                ? Dt(n.target.value)
                : n.target.value;
              return n.target.checked
                ? i.concat([o])
                : i.filter((s) => !bi(s, o));
            } else return n.target.checked;
          else {
            if (e.tagName.toLowerCase() === "select" && e.multiple)
              return t.includes("number")
                ? Array.from(n.target.selectedOptions).map((o) => {
                  let s = o.value || o.text;
                  return Dt(s);
                })
                : Array.from(n.target.selectedOptions).map(
                  (o) => o.value || o.text
                );
            {
              let o = n.target.value;
              return t.includes("number")
                ? Dt(o)
                : t.includes("trim")
                  ? o.trim()
                  : o;
            }
          }
        })
    );
  }
  function Dt(e) {
    let t = e ? parseFloat(e) : null;
    return vi(t) ? t : e;
  }
  function bi(e, t) {
    return e == t;
  }
  function vi(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  d("cloak", (e) =>
    queueMicrotask(() => m(() => e.removeAttribute(E("cloak"))))
  );
  Re(() => `[${E("init")}]`);
  d(
    "init",
    $((e, { expression: t }, { evaluate: r }) =>
      typeof t == "string" ? !!t.trim() && r(t, {}, !1) : r(t, {}, !1)
    )
  );
  d("text", (e, { expression: t }, { effect: r, evaluateLater: n }) => {
    let i = n(t);
    r(() => {
      i((o) => {
        m(() => {
          e.textContent = o;
        });
      });
    });
  });
  d("html", (e, { expression: t }, { effect: r, evaluateLater: n }) => {
    let i = n(t);
    r(() => {
      i((o) => {
        m(() => {
          (e.innerHTML = o),
            (e._x_ignoreSelf = !0),
            w(e),
            delete e._x_ignoreSelf;
        });
      });
    });
  });
  Z(Ee(":", Se(E("bind:"))));
  d(
    "bind",
    (
      e,
      { value: t, modifiers: r, expression: n, original: i },
      { effect: o }
    ) => {
      if (!t) {
        let a = {};
        Or(a),
          g(e, n)(
            (l) => {
              xt(e, l, i);
            },
            { scope: a }
          );
        return;
      }
      if (t === "key") return wi(e, n);
      let s = g(e, n);
      o(() =>
        s((a) => {
          a === void 0 && typeof n == "string" && n.match(/\./) && (a = ""),
            m(() => ce(e, t, a, r));
        })
      );
    }
  );
  function wi(e, t) {
    e._x_keyExpression = t;
  }
  Ce(() => `[${E("data")}]`);
  d(
    "data",
    $((e, { expression: t }, { cleanup: r }) => {
      t = t === "" ? "{}" : t;
      let n = {};
      re(n, e);
      let i = {};
      Rr(i, n);
      let o = P(e, t, { scope: i });
      o === void 0 && (o = {}), re(o, e);
      let s = A(o);
      ye(s);
      let a = C(e, s);
      s.init && P(e, s.init),
        r(() => {
          s.destroy && P(e, s.destroy), a();
        });
    })
  );
  d("show", (e, { modifiers: t, expression: r }, { effect: n }) => {
    let i = g(e, r);
    e._x_doHide ||
      (e._x_doHide = () => {
        m(() => {
          e.style.setProperty(
            "display",
            "none",
            t.includes("important") ? "important" : void 0
          );
        });
      }),
      e._x_doShow ||
      (e._x_doShow = () => {
        m(() => {
          e.style.length === 1 && e.style.display === "none"
            ? e.removeAttribute("style")
            : e.style.removeProperty("display");
        });
      });
    let o = () => {
      e._x_doHide(), (e._x_isShown = !1);
    },
      s = () => {
        e._x_doShow(), (e._x_isShown = !0);
      },
      a = () => setTimeout(s),
      c = se(
        (p) => (p ? s() : o()),
        (p) => {
          typeof e._x_toggleAndCascadeWithTransitions == "function"
            ? e._x_toggleAndCascadeWithTransitions(e, p, s, o)
            : p
              ? a()
              : o();
        }
      ),
      l,
      u = !0;
    n(() =>
      i((p) => {
        (!u && p === l) ||
          (t.includes("immediate") && (p ? a() : o()), c(p), (l = p), (u = !1));
      })
    );
  });
  d("for", (e, { expression: t }, { effect: r, cleanup: n }) => {
    let i = Si(t),
      o = g(e, i.items),
      s = g(e, e._x_keyExpression || "index");
    (e._x_prevKeys = []),
      (e._x_lookup = {}),
      r(() => Ei(e, i, o, s)),
      n(() => {
        Object.values(e._x_lookup).forEach((a) => a.remove()),
          delete e._x_prevKeys,
          delete e._x_lookup;
      });
  });
  function Ei(e, t, r, n) {
    let i = (s) => typeof s == "object" && !Array.isArray(s),
      o = e;
    r((s) => {
      Ai(s) && s >= 0 && (s = Array.from(Array(s).keys(), (f) => f + 1)),
        s === void 0 && (s = []);
      let a = e._x_lookup,
        c = e._x_prevKeys,
        l = [],
        u = [];
      if (i(s))
        s = Object.entries(s).map(([f, h]) => {
          let b = on(t, h, f, s);
          n((v) => u.push(v), { scope: { index: f, ...b } }), l.push(b);
        });
      else
        for (let f = 0; f < s.length; f++) {
          let h = on(t, s[f], f, s);
          n((b) => u.push(b), { scope: { index: f, ...h } }), l.push(h);
        }
      let p = [],
        y = [],
        N = [],
        W = [];
      for (let f = 0; f < c.length; f++) {
        let h = c[f];
        u.indexOf(h) === -1 && N.push(h);
      }
      c = c.filter((f) => !N.includes(f));
      let pe = "template";
      for (let f = 0; f < u.length; f++) {
        let h = u[f],
          b = c.indexOf(h);
        if (b === -1) c.splice(f, 0, h), p.push([pe, f]);
        else if (b !== f) {
          let v = c.splice(f, 1)[0],
            S = c.splice(b - 1, 1)[0];
          c.splice(f, 0, S), c.splice(b, 0, v), y.push([v, S]);
        } else W.push(h);
        pe = h;
      }
      for (let f = 0; f < N.length; f++) {
        let h = N[f];
        a[h]._x_effects && a[h]._x_effects.forEach(he),
          a[h].remove(),
          (a[h] = null),
          delete a[h];
      }
      for (let f = 0; f < y.length; f++) {
        let [h, b] = y[f],
          v = a[h],
          S = a[b],
          G = document.createElement("div");
        m(() => {
          S.after(G),
            v.after(S),
            S._x_currentIfEl && S.after(S._x_currentIfEl),
            G.before(v),
            v._x_currentIfEl && v.after(v._x_currentIfEl),
            G.remove();
        }),
          ot(S, l[u.indexOf(b)]);
      }
      for (let f = 0; f < p.length; f++) {
        let [h, b] = p[f],
          v = h === "template" ? o : a[h];
        v._x_currentIfEl && (v = v._x_currentIfEl);
        let S = l[b],
          G = u[b],
          me = document.importNode(o.content, !0).firstElementChild;
        C(me, A(S), o),
          m(() => {
            v.after(me), w(me);
          }),
          typeof G == "object" &&
          O(
            "x-for key cannot be an object, it must be a string or an integer",
            o
          ),
          (a[G] = me);
      }
      for (let f = 0; f < W.length; f++) ot(a[W[f]], l[u.indexOf(W[f])]);
      o._x_prevKeys = u;
    });
  }
  function Si(e) {
    let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
      r = /^\s*\(|\)\s*$/g,
      n = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
      i = e.match(n);
    if (!i) return;
    let o = {};
    o.items = i[2].trim();
    let s = i[1].replace(r, "").trim(),
      a = s.match(t);
    return (
      a
        ? ((o.item = s.replace(t, "").trim()),
          (o.index = a[1].trim()),
          a[2] && (o.collection = a[2].trim()))
        : (o.item = s),
      o
    );
  }
  function on(e, t, r, n) {
    let i = {};
    return (
      /^\[.*\]$/.test(e.item) && Array.isArray(t)
        ? e.item
          .replace("[", "")
          .replace("]", "")
          .split(",")
          .map((s) => s.trim())
          .forEach((s, a) => {
            i[s] = t[a];
          })
        : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object"
          ? e.item
            .replace("{", "")
            .replace("}", "")
            .split(",")
            .map((s) => s.trim())
            .forEach((s) => {
              i[s] = t[s];
            })
          : (i[e.item] = t),
      e.index && (i[e.index] = r),
      e.collection && (i[e.collection] = n),
      i
    );
  }
  function Ai(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function sn() { }
  sn.inline = (e, { expression: t }, { cleanup: r }) => {
    let n = V(e);
    n._x_refs || (n._x_refs = {}),
      (n._x_refs[t] = e),
      r(() => delete n._x_refs[t]);
  };
  d("ref", sn);
  d("if", (e, { expression: t }, { effect: r, cleanup: n }) => {
    let i = g(e, t),
      o = () => {
        if (e._x_currentIfEl) return e._x_currentIfEl;
        let a = e.content.cloneNode(!0).firstElementChild;
        return (
          C(a, {}, e),
          m(() => {
            e.after(a), w(a);
          }),
          (e._x_currentIfEl = a),
          (e._x_undoIf = () => {
            R(a, (c) => {
              c._x_effects && c._x_effects.forEach(he);
            }),
              a.remove(),
              delete e._x_currentIfEl;
          }),
          a
        );
      },
      s = () => {
        !e._x_undoIf || (e._x_undoIf(), delete e._x_undoIf);
      };
    r(() =>
      i((a) => {
        a ? o() : s();
      })
    ),
      n(() => e._x_undoIf && e._x_undoIf());
  });
  d("id", (e, { expression: t }, { evaluate: r }) => {
    r(t).forEach((i) => en(e, i));
  });
  Z(Ee("@", Se(E("on:"))));
  d(
    "on",
    $((e, { value: t, modifiers: r, expression: n }, { cleanup: i }) => {
      let o = n ? g(e, n) : () => { };
      e.tagName.toLowerCase() === "template" &&
        (e._x_forwardEvents || (e._x_forwardEvents = []),
          e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
      let s = de(e, t, r, (a) => {
        o(() => { }, { scope: { $event: a }, params: [a] });
      });
      i(() => s());
    })
  );
  Ue("Collapse", "collapse", "collapse");
  Ue("Intersect", "intersect", "intersect");
  Ue("Focus", "trap", "focus");
  Ue("Mask", "mask", "mask");
  function Ue(e, t, r) {
    d(t, (n) =>
      O(
        `You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,
        n
      )
    );
  }
  I.setEvaluator(ct);
  I.setReactivityEngine({ reactive: je, effect: Pr, release: Dr, raw: _ });
  var It = I;
  window.Alpine = It;
  queueMicrotask(() => {
    It.start();
  });
})();
