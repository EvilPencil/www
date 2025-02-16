(() => {
  var je = Object.defineProperty;
  var re = Object.getOwnPropertySymbols;
  var We = Object.prototype.hasOwnProperty,
    Me = Object.prototype.propertyIsEnumerable;
  var ne = (e, t, r) =>
    t in e
      ? je(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
    X = (e, t) => {
      for (var r in t || (t = {})) We.call(t, r) && ne(e, r, t[r]);
      if (re) for (var r of re(t)) Me.call(t, r) && ne(e, r, t[r]);
      return e;
    };
  var N = (e, t, r) =>
    new Promise((o, a) => {
      var n = (f) => {
        try {
          c(r.next(f));
        } catch (s) {
          a(s);
        }
      },
        i = (f) => {
          try {
            c(r.throw(f));
          } catch (s) {
            a(s);
          }
        },
        c = (f) => (f.done ? o(f.value) : Promise.resolve(f.value).then(n, i));
      c((r = r.apply(e, t)).next());
    });
  var E = function () {
    return (
      (E =
        Object.assign ||
        function (t) {
          for (var r, o = 1, a = arguments.length; o < a; o++) {
            r = arguments[o];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
      E.apply(this, arguments)
    );
  };
  function R(e, t, r, o) {
    function a(n) {
      return n instanceof r
        ? n
        : new r(function (i) {
          i(n);
        });
    }
    return new (r || (r = Promise))(function (n, i) {
      function c(u) {
        try {
          s(o.next(u));
        } catch (l) {
          i(l);
        }
      }
      function f(u) {
        try {
          s(o.throw(u));
        } catch (l) {
          i(l);
        }
      }
      function s(u) {
        u.done ? n(u.value) : a(u.value).then(c, f);
      }
      s((o = o.apply(e, t || [])).next());
    });
  }
  function F(e, t) {
    var r = {
      label: 0,
      sent: function () {
        if (n[0] & 1) throw n[1];
        return n[1];
      },
      trys: [],
      ops: [],
    },
      o,
      a,
      n,
      i;
    return (
      (i = { next: c(0), throw: c(1), return: c(2) }),
      typeof Symbol == "function" &&
      (i[Symbol.iterator] = function () {
        return this;
      }),
      i
    );
    function c(s) {
      return function (u) {
        return f([s, u]);
      };
    }
    function f(s) {
      if (o) throw new TypeError("Generator is already executing.");
      for (; i && ((i = 0), s[0] && (r = 0)), r;)
        try {
          if (
            ((o = 1),
              a &&
              (n =
                s[0] & 2
                  ? a.return
                  : s[0]
                    ? a.throw || ((n = a.return) && n.call(a), 0)
                    : a.next) &&
              !(n = n.call(a, s[1])).done)
          )
            return n;
          switch (((a = 0), n && (s = [s[0] & 2, n.value]), s[0])) {
            case 0:
            case 1:
              n = s;
              break;
            case 4:
              return r.label++, { value: s[1], done: !1 };
            case 5:
              r.label++, (a = s[1]), (s = [0]);
              continue;
            case 7:
              (s = r.ops.pop()), r.trys.pop();
              continue;
            default:
              if (
                ((n = r.trys),
                  !(n = n.length > 0 && n[n.length - 1]) &&
                  (s[0] === 6 || s[0] === 2))
              ) {
                r = 0;
                continue;
              }
              if (s[0] === 3 && (!n || (s[1] > n[0] && s[1] < n[3]))) {
                r.label = s[1];
                break;
              }
              if (s[0] === 6 && r.label < n[1]) {
                (r.label = n[1]), (n = s);
                break;
              }
              if (n && r.label < n[2]) {
                (r.label = n[2]), r.ops.push(s);
                break;
              }
              n[2] && r.ops.pop(), r.trys.pop();
              continue;
          }
          s = t.call(e, r);
        } catch (u) {
          (s = [6, u]), (a = 0);
        } finally {
          o = n = 0;
        }
      if (s[0] & 5) throw s[1];
      return { value: s[0] ? s[1] : void 0, done: !0 };
    }
  }
  function H(e, t, r) {
    if (r || arguments.length === 2)
      for (var o = 0, a = t.length, n; o < a; o++)
        (n || !(o in t)) &&
          (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
    return e.concat(n || Array.prototype.slice.call(t));
  }
  var ve = "3.4.2";
  function O(e, t) {
    return new Promise(function (r) {
      return setTimeout(r, e, t);
    });
  }
  function Ze(e, t) {
    t === void 0 && (t = 1 / 0);
    var r = window.requestIdleCallback;
    return r
      ? new Promise(function (o) {
        return r.call(
          window,
          function () {
            return o();
          },
          { timeout: t }
        );
      })
      : O(Math.min(e, t));
  }
  function pe(e) {
    return !!e && typeof e.then == "function";
  }
  function oe(e, t) {
    try {
      var r = e();
      pe(r)
        ? r.then(
          function (o) {
            return t(!0, o);
          },
          function (o) {
            return t(!1, o);
          }
        )
        : t(!0, r);
    } catch (o) {
      t(!1, o);
    }
  }
  function ae(e, t, r) {
    return (
      r === void 0 && (r = 16),
      R(this, void 0, void 0, function () {
        var o, a, n, i;
        return F(this, function (c) {
          switch (c.label) {
            case 0:
              (o = Array(e.length)), (a = Date.now()), (n = 0), (c.label = 1);
            case 1:
              return n < e.length
                ? ((o[n] = t(e[n], n)),
                  (i = Date.now()),
                  i >= a + r ? ((a = i), [4, O(0)]) : [3, 3])
                : [3, 4];
            case 2:
              c.sent(), (c.label = 3);
            case 3:
              return ++n, [3, 1];
            case 4:
              return [2, o];
          }
        });
      })
    );
  }
  function T(e) {
    e.then(void 0, function () { });
  }
  function j(e, t) {
    (e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535]),
      (t = [t[0] >>> 16, t[0] & 65535, t[1] >>> 16, t[1] & 65535]);
    var r = [0, 0, 0, 0];
    return (
      (r[3] += e[3] + t[3]),
      (r[2] += r[3] >>> 16),
      (r[3] &= 65535),
      (r[2] += e[2] + t[2]),
      (r[1] += r[2] >>> 16),
      (r[2] &= 65535),
      (r[1] += e[1] + t[1]),
      (r[0] += r[1] >>> 16),
      (r[1] &= 65535),
      (r[0] += e[0] + t[0]),
      (r[0] &= 65535),
      [(r[0] << 16) | r[1], (r[2] << 16) | r[3]]
    );
  }
  function C(e, t) {
    (e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535]),
      (t = [t[0] >>> 16, t[0] & 65535, t[1] >>> 16, t[1] & 65535]);
    var r = [0, 0, 0, 0];
    return (
      (r[3] += e[3] * t[3]),
      (r[2] += r[3] >>> 16),
      (r[3] &= 65535),
      (r[2] += e[2] * t[3]),
      (r[1] += r[2] >>> 16),
      (r[2] &= 65535),
      (r[2] += e[3] * t[2]),
      (r[1] += r[2] >>> 16),
      (r[2] &= 65535),
      (r[1] += e[1] * t[3]),
      (r[0] += r[1] >>> 16),
      (r[1] &= 65535),
      (r[1] += e[2] * t[2]),
      (r[0] += r[1] >>> 16),
      (r[1] &= 65535),
      (r[1] += e[3] * t[1]),
      (r[0] += r[1] >>> 16),
      (r[1] &= 65535),
      (r[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0]),
      (r[0] &= 65535),
      [(r[0] << 16) | r[1], (r[2] << 16) | r[3]]
    );
  }
  function Z(e, t) {
    return (
      (t %= 64),
      t === 32
        ? [e[1], e[0]]
        : t < 32
          ? [(e[0] << t) | (e[1] >>> (32 - t)), (e[1] << t) | (e[0] >>> (32 - t))]
          : ((t -= 32),
            [
              (e[1] << t) | (e[0] >>> (32 - t)),
              (e[0] << t) | (e[1] >>> (32 - t)),
            ])
    );
  }
  function x(e, t) {
    return (
      (t %= 64),
      t === 0
        ? e
        : t < 32
          ? [(e[0] << t) | (e[1] >>> (32 - t)), e[1] << t]
          : [e[1] << (t - 32), 0]
    );
  }
  function y(e, t) {
    return [e[0] ^ t[0], e[1] ^ t[1]];
  }
  function ie(e) {
    return (
      (e = y(e, [0, e[0] >>> 1])),
      (e = C(e, [4283543511, 3981806797])),
      (e = y(e, [0, e[0] >>> 1])),
      (e = C(e, [3301882366, 444984403])),
      (e = y(e, [0, e[0] >>> 1])),
      e
    );
  }
  function Pe(e, t) {
    (e = e || ""), (t = t || 0);
    var r = e.length % 16,
      o = e.length - r,
      a = [0, t],
      n = [0, t],
      i = [0, 0],
      c = [0, 0],
      f = [2277735313, 289559509],
      s = [1291169091, 658871167],
      u;
    for (u = 0; u < o; u = u + 16)
      (i = [
        (e.charCodeAt(u + 4) & 255) |
        ((e.charCodeAt(u + 5) & 255) << 8) |
        ((e.charCodeAt(u + 6) & 255) << 16) |
        ((e.charCodeAt(u + 7) & 255) << 24),
        (e.charCodeAt(u) & 255) |
        ((e.charCodeAt(u + 1) & 255) << 8) |
        ((e.charCodeAt(u + 2) & 255) << 16) |
        ((e.charCodeAt(u + 3) & 255) << 24),
      ]),
        (c = [
          (e.charCodeAt(u + 12) & 255) |
          ((e.charCodeAt(u + 13) & 255) << 8) |
          ((e.charCodeAt(u + 14) & 255) << 16) |
          ((e.charCodeAt(u + 15) & 255) << 24),
          (e.charCodeAt(u + 8) & 255) |
          ((e.charCodeAt(u + 9) & 255) << 8) |
          ((e.charCodeAt(u + 10) & 255) << 16) |
          ((e.charCodeAt(u + 11) & 255) << 24),
        ]),
        (i = C(i, f)),
        (i = Z(i, 31)),
        (i = C(i, s)),
        (a = y(a, i)),
        (a = Z(a, 27)),
        (a = j(a, n)),
        (a = j(C(a, [0, 5]), [0, 1390208809])),
        (c = C(c, s)),
        (c = Z(c, 33)),
        (c = C(c, f)),
        (n = y(n, c)),
        (n = Z(n, 31)),
        (n = j(n, a)),
        (n = j(C(n, [0, 5]), [0, 944331445]));
    switch (((i = [0, 0]), (c = [0, 0]), r)) {
      case 15:
        c = y(c, x([0, e.charCodeAt(u + 14)], 48));
      case 14:
        c = y(c, x([0, e.charCodeAt(u + 13)], 40));
      case 13:
        c = y(c, x([0, e.charCodeAt(u + 12)], 32));
      case 12:
        c = y(c, x([0, e.charCodeAt(u + 11)], 24));
      case 11:
        c = y(c, x([0, e.charCodeAt(u + 10)], 16));
      case 10:
        c = y(c, x([0, e.charCodeAt(u + 9)], 8));
      case 9:
        (c = y(c, [0, e.charCodeAt(u + 8)])),
          (c = C(c, s)),
          (c = Z(c, 33)),
          (c = C(c, f)),
          (n = y(n, c));
      case 8:
        i = y(i, x([0, e.charCodeAt(u + 7)], 56));
      case 7:
        i = y(i, x([0, e.charCodeAt(u + 6)], 48));
      case 6:
        i = y(i, x([0, e.charCodeAt(u + 5)], 40));
      case 5:
        i = y(i, x([0, e.charCodeAt(u + 4)], 32));
      case 4:
        i = y(i, x([0, e.charCodeAt(u + 3)], 24));
      case 3:
        i = y(i, x([0, e.charCodeAt(u + 2)], 16));
      case 2:
        i = y(i, x([0, e.charCodeAt(u + 1)], 8));
      case 1:
        (i = y(i, [0, e.charCodeAt(u)])),
          (i = C(i, f)),
          (i = Z(i, 31)),
          (i = C(i, s)),
          (a = y(a, i));
    }
    return (
      (a = y(a, [0, e.length])),
      (n = y(n, [0, e.length])),
      (a = j(a, n)),
      (n = j(n, a)),
      (a = ie(a)),
      (n = ie(n)),
      (a = j(a, n)),
      (n = j(n, a)),
      ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) +
      ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) +
      ("00000000" + (n[0] >>> 0).toString(16)).slice(-8) +
      ("00000000" + (n[1] >>> 0).toString(16)).slice(-8)
    );
  }
  function Ie(e) {
    var t;
    return E(
      {
        name: e.name,
        message: e.message,
        stack:
          (t = e.stack) === null || t === void 0
            ? void 0
            : t.split(`
`),
      },
      e
    );
  }
  function Oe(e, t) {
    for (var r = 0, o = e.length; r < o; ++r) if (e[r] === t) return !0;
    return !1;
  }
  function Te(e, t) {
    return !Oe(e, t);
  }
  function K(e) {
    return parseInt(e);
  }
  function k(e) {
    return parseFloat(e);
  }
  function A(e, t) {
    return typeof e == "number" && isNaN(e) ? t : e;
  }
  function V(e) {
    return e.reduce(function (t, r) {
      return t + (r ? 1 : 0);
    }, 0);
  }
  function ye(e, t) {
    if ((t === void 0 && (t = 1), Math.abs(t) >= 1))
      return Math.round(e / t) * t;
    var r = 1 / t;
    return Math.round(e * r) / r;
  }
  function _e(e) {
    for (
      var t,
      r,
      o = "Unexpected syntax '".concat(e, "'"),
      a = /^\s*([a-z-]*)(.*)$/i.exec(e),
      n = a[1] || void 0,
      i = {},
      c = /([.:#][\w-]+|\[.+?\])/gi,
      f = function (d, v) {
        (i[d] = i[d] || []), i[d].push(v);
      };
      ;

    ) {
      var s = c.exec(a[2]);
      if (!s) break;
      var u = s[0];
      switch (u[0]) {
        case ".":
          f("class", u.slice(1));
          break;
        case "#":
          f("id", u.slice(1));
          break;
        case "[": {
          var l = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(
            u
          );
          if (l)
            f(
              l[1],
              (r = (t = l[4]) !== null && t !== void 0 ? t : l[5]) !== null &&
                r !== void 0
                ? r
                : ""
            );
          else throw new Error(o);
          break;
        }
        default:
          throw new Error(o);
      }
    }
    return [n, i];
  }
  function ce(e) {
    return e && typeof e == "object" && "message" in e ? e : { message: e };
  }
  function Ge(e) {
    return typeof e != "function";
  }
  function Ee(e, t) {
    var r = new Promise(function (o) {
      var a = Date.now();
      oe(e.bind(null, t), function () {
        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
        var c = Date.now() - a;
        if (!n[0])
          return o(function () {
            return { error: ce(n[1]), duration: c };
          });
        var f = n[1];
        if (Ge(f))
          return o(function () {
            return { value: f, duration: c };
          });
        o(function () {
          return new Promise(function (s) {
            var u = Date.now();
            oe(f, function () {
              for (var l = [], d = 0; d < arguments.length; d++)
                l[d] = arguments[d];
              var v = c + Date.now() - u;
              if (!l[0]) return s({ error: ce(l[1]), duration: v });
              s({ value: l[1], duration: v });
            });
          });
        });
      });
    });
    return (
      T(r),
      function () {
        return r.then(function (a) {
          return a();
        });
      }
    );
  }
  function De(e, t, r) {
    var o = Object.keys(e).filter(function (n) {
      return Te(r, n);
    }),
      a = ae(o, function (n) {
        return Ee(e[n], t);
      });
    return (
      T(a),
      function () {
        return R(this, void 0, void 0, function () {
          var i, c, f, s, u;
          return F(this, function (l) {
            switch (l.label) {
              case 0:
                return [4, a];
              case 1:
                return (
                  (i = l.sent()),
                  [
                    4,
                    ae(i, function (d) {
                      var v = d();
                      return T(v), v;
                    }),
                  ]
                );
              case 2:
                return (c = l.sent()), [4, Promise.all(c)];
              case 3:
                for (f = l.sent(), s = {}, u = 0; u < o.length; ++u)
                  s[o[u]] = f[u];
                return [2, s];
            }
          });
        });
      }
    );
  }
  function be() {
    var e = window,
      t = navigator;
    return (
      V([
        "MSCSSMatrix" in e,
        "msSetImmediate" in e,
        "msIndexedDB" in e,
        "msMaxTouchPoints" in t,
        "msPointerEnabled" in t,
      ]) >= 4
    );
  }
  function Ye() {
    var e = window,
      t = navigator;
    return (
      V([
        "msWriteProfilerMark" in e,
        "MSStream" in e,
        "msLaunchUri" in t,
        "msSaveBlob" in t,
      ]) >= 3 && !be()
    );
  }
  function $() {
    var e = window,
      t = navigator;
    return (
      V([
        "webkitPersistentStorage" in t,
        "webkitTemporaryStorage" in t,
        t.vendor.indexOf("Google") === 0,
        "webkitResolveLocalFileSystemURL" in e,
        "BatteryManager" in e,
        "webkitMediaStream" in e,
        "webkitSpeechGrammar" in e,
      ]) >= 5
    );
  }
  function _() {
    var e = window,
      t = navigator;
    return (
      V([
        "ApplePayError" in e,
        "CSSPrimitiveValue" in e,
        "Counter" in e,
        t.vendor.indexOf("Apple") === 0,
        "getStorageUpdates" in t,
        "WebKitMediaKeys" in e,
      ]) >= 4
    );
  }
  function ee() {
    var e = window;
    return (
      V([
        "safari" in e,
        !("DeviceMotionEvent" in e),
        !("ongestureend" in e),
        !("standalone" in navigator),
      ]) >= 3
    );
  }
  function ze() {
    var e,
      t,
      r = window;
    return (
      V([
        "buildID" in navigator,
        "MozAppearance" in
        ((t =
          (e = document.documentElement) === null || e === void 0
            ? void 0
            : e.style) !== null && t !== void 0
          ? t
          : {}),
        "onmozfullscreenchange" in r,
        "mozInnerScreenX" in r,
        "CSSMozDocumentRule" in r,
        "CanvasCaptureMediaStream" in r,
      ]) >= 4
    );
  }
  function Xe() {
    var e = window;
    return (
      V([
        !("MediaSettingsRange" in e),
        "RTCEncodedAudioFrame" in e,
        "" + e.Intl == "[object Intl]",
        "" + e.Reflect == "[object Reflect]",
      ]) >= 3
    );
  }
  function Ne() {
    var e = window;
    return (
      V([
        "DOMRectList" in e,
        "RTCPeerConnectionIceEvent" in e,
        "SVGGeometryElement" in e,
        "ontransitioncancel" in e,
      ]) >= 3
    );
  }
  function He() {
    if (navigator.platform === "iPad") return !0;
    var e = screen,
      t = e.width / e.height;
    return (
      V([
        "MediaSource" in window,
        !!Element.prototype.webkitRequestFullscreen,
        t > 0.65 && t < 1.53,
      ]) >= 2
    );
  }
  function Je() {
    var e = document;
    return (
      e.fullscreenElement ||
      e.msFullscreenElement ||
      e.mozFullScreenElement ||
      e.webkitFullscreenElement ||
      null
    );
  }
  function Be() {
    var e = document;
    return (
      e.exitFullscreen ||
      e.msExitFullscreen ||
      e.mozCancelFullScreen ||
      e.webkitExitFullscreen
    ).call(e);
  }
  function ge() {
    var e = $(),
      t = ze();
    if (!e && !t) return !1;
    var r = window;
    return (
      V([
        "onorientationchange" in r,
        "orientation" in r,
        e && !("SharedWorker" in r),
        t && /android/i.test(navigator.appVersion),
      ]) >= 2
    );
  }
  function Ue() {
    var e = window,
      t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
    if (!t) return -2;
    if (qe()) return -1;
    var r = 4500,
      o = 5e3,
      a = new t(1, o, 44100),
      n = a.createOscillator();
    (n.type = "triangle"), (n.frequency.value = 1e4);
    var i = a.createDynamicsCompressor();
    (i.threshold.value = -50),
      (i.knee.value = 40),
      (i.ratio.value = 12),
      (i.attack.value = 0),
      (i.release.value = 0.25),
      n.connect(i),
      i.connect(a.destination),
      n.start(0);
    var c = Qe(a),
      f = c[0],
      s = c[1],
      u = f.then(
        function (l) {
          return Ke(l.getChannelData(0).subarray(r));
        },
        function (l) {
          if (l.name === "timeout" || l.name === "suspended") return -3;
          throw l;
        }
      );
    return (
      T(u),
      function () {
        return s(), u;
      }
    );
  }
  function qe() {
    return _() && !ee() && !Ne();
  }
  function Qe(e) {
    var t = 3,
      r = 500,
      o = 500,
      a = 5e3,
      n = function () { },
      i = new Promise(function (c, f) {
        var s = !1,
          u = 0,
          l = 0;
        e.oncomplete = function (h) {
          return c(h.renderedBuffer);
        };
        var d = function () {
          setTimeout(function () {
            return f(ue("timeout"));
          }, Math.min(o, l + a - Date.now()));
        },
          v = function () {
            try {
              var h = e.startRendering();
              switch ((pe(h) && T(h), e.state)) {
                case "running":
                  (l = Date.now()), s && d();
                  break;
                case "suspended":
                  document.hidden || u++,
                    s && u >= t ? f(ue("suspended")) : setTimeout(v, r);
                  break;
              }
            } catch (g) {
              f(g);
            }
          };
        v(),
          (n = function () {
            s || ((s = !0), l > 0 && d());
          });
      });
    return [i, n];
  }
  function Ke(e) {
    for (var t = 0, r = 0; r < e.length; ++r) t += Math.abs(e[r]);
    return t;
  }
  function ue(e) {
    var t = new Error(e);
    return (t.name = e), t;
  }
  function we(e, t, r) {
    var o, a, n;
    return (
      r === void 0 && (r = 50),
      R(this, void 0, void 0, function () {
        var i, c;
        return F(this, function (f) {
          switch (f.label) {
            case 0:
              (i = document), (f.label = 1);
            case 1:
              return i.body ? [3, 3] : [4, O(r)];
            case 2:
              return f.sent(), [3, 1];
            case 3:
              (c = i.createElement("iframe")), (f.label = 4);
            case 4:
              return (
                f.trys.push([4, , 10, 11]),
                [
                  4,
                  new Promise(function (s, u) {
                    var l = !1,
                      d = function () {
                        (l = !0), s();
                      },
                      v = function (b) {
                        (l = !0), u(b);
                      };
                    (c.onload = d), (c.onerror = v);
                    var h = c.style;
                    h.setProperty("display", "block", "important"),
                      (h.position = "absolute"),
                      (h.top = "0"),
                      (h.left = "0"),
                      (h.visibility = "hidden"),
                      t && "srcdoc" in c
                        ? (c.srcdoc = t)
                        : (c.src = "about:blank"),
                      i.body.appendChild(c);
                    var g = function () {
                      var b, w;
                      l ||
                        (((w =
                          (b = c.contentWindow) === null || b === void 0
                            ? void 0
                            : b.document) === null || w === void 0
                          ? void 0
                          : w.readyState) === "complete"
                          ? d()
                          : setTimeout(g, 10));
                    };
                    g();
                  }),
                ]
              );
            case 5:
              f.sent(), (f.label = 6);
            case 6:
              return !(
                (a =
                  (o = c.contentWindow) === null || o === void 0
                    ? void 0
                    : o.document) === null || a === void 0
              ) && a.body
                ? [3, 8]
                : [4, O(r)];
            case 7:
              return f.sent(), [3, 6];
            case 8:
              return [4, e(c, c.contentWindow)];
            case 9:
              return [2, f.sent()];
            case 10:
              return (
                (n = c.parentNode) === null || n === void 0 || n.removeChild(c),
                [7]
              );
            case 11:
              return [2];
          }
        });
      })
    );
  }
  function $e(e) {
    for (
      var t = _e(e),
      r = t[0],
      o = t[1],
      a = document.createElement(r != null ? r : "div"),
      n = 0,
      i = Object.keys(o);
      n < i.length;
      n++
    ) {
      var c = i[n],
        f = o[c].join(" ");
      c === "style" ? et(a.style, f) : a.setAttribute(c, f);
    }
    return a;
  }
  function et(e, t) {
    for (var r = 0, o = t.split(";"); r < o.length; r++) {
      var a = o[r],
        n = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(a);
      if (n) {
        var i = n[1],
          c = n[2],
          f = n[4];
        e.setProperty(i, c, f || "");
      }
    }
  }
  var tt = "mmMwWLliI0O&1",
    rt = "48px",
    P = ["monospace", "sans-serif", "serif"],
    se = [
      "sans-serif-thin",
      "ARNO PRO",
      "Agency FB",
      "Arabic Typesetting",
      "Arial Unicode MS",
      "AvantGarde Bk BT",
      "BankGothic Md BT",
      "Batang",
      "Bitstream Vera Sans Mono",
      "Calibri",
      "Century",
      "Century Gothic",
      "Clarendon",
      "EUROSTILE",
      "Franklin Gothic",
      "Futura Bk BT",
      "Futura Md BT",
      "GOTHAM",
      "Gill Sans",
      "HELV",
      "Haettenschweiler",
      "Helvetica Neue",
      "Humanst521 BT",
      "Leelawadee",
      "Letter Gothic",
      "Levenim MT",
      "Lucida Bright",
      "Lucida Sans",
      "Menlo",
      "MS Mincho",
      "MS Outlook",
      "MS Reference Specialty",
      "MS UI Gothic",
      "MT Extra",
      "MYRIAD PRO",
      "Marlett",
      "Meiryo UI",
      "Microsoft Uighur",
      "Minion Pro",
      "Monotype Corsiva",
      "PMingLiU",
      "Pristina",
      "SCRIPTINA",
      "Segoe UI Light",
      "Serifa",
      "SimHei",
      "Small Fonts",
      "Staccato222 BT",
      "TRAJAN PRO",
      "Univers CE 55 Medium",
      "Vrinda",
      "ZWAdobeF",
    ];
  function nt() {
    return we(function (e, t) {
      var r = t.document,
        o = r.body;
      o.style.fontSize = rt;
      var a = r.createElement("div"),
        n = {},
        i = {},
        c = function (g) {
          var b = r.createElement("span"),
            w = b.style;
          return (
            (w.position = "absolute"),
            (w.top = "0"),
            (w.left = "0"),
            (w.fontFamily = g),
            (b.textContent = tt),
            a.appendChild(b),
            b
          );
        },
        f = function (g, b) {
          return c("'".concat(g, "',").concat(b));
        },
        s = function () {
          return P.map(c);
        },
        u = function () {
          for (
            var g = {},
            b = function (G) {
              g[G] = P.map(function (z) {
                return f(G, z);
              });
            },
            w = 0,
            W = se;
            w < W.length;
            w++
          ) {
            var Y = W[w];
            b(Y);
          }
          return g;
        },
        l = function (g) {
          return P.some(function (b, w) {
            return g[w].offsetWidth !== n[b] || g[w].offsetHeight !== i[b];
          });
        },
        d = s(),
        v = u();
      o.appendChild(a);
      for (var h = 0; h < P.length; h++)
        (n[P[h]] = d[h].offsetWidth), (i[P[h]] = d[h].offsetHeight);
      return se.filter(function (g) {
        return l(v[g]);
      });
    });
  }
  function ot() {
    var e = navigator.plugins;
    if (e) {
      for (var t = [], r = 0; r < e.length; ++r) {
        var o = e[r];
        if (o) {
          for (var a = [], n = 0; n < o.length; ++n) {
            var i = o[n];
            a.push({ type: i.type, suffixes: i.suffixes });
          }
          t.push({ name: o.name, description: o.description, mimeTypes: a });
        }
      }
      return t;
    }
  }
  function at() {
    var e = !1,
      t,
      r,
      o = it(),
      a = o[0],
      n = o[1];
    if (!ct(a, n)) t = r = "";
    else {
      (e = ut(n)), st(a, n);
      var i = J(a),
        c = J(a);
      i !== c ? (t = r = "unstable") : ((r = i), ft(a, n), (t = J(a)));
    }
    return { winding: e, geometry: t, text: r };
  }
  function it() {
    var e = document.createElement("canvas");
    return (e.width = 1), (e.height = 1), [e, e.getContext("2d")];
  }
  function ct(e, t) {
    return !!(t && e.toDataURL);
  }
  function ut(e) {
    return (
      e.rect(0, 0, 10, 10),
      e.rect(2, 2, 6, 6),
      !e.isPointInPath(5, 5, "evenodd")
    );
  }
  function st(e, t) {
    (e.width = 240),
      (e.height = 60),
      (t.textBaseline = "alphabetic"),
      (t.fillStyle = "#f60"),
      t.fillRect(100, 1, 62, 20),
      (t.fillStyle = "#069"),
      (t.font = '11pt "Times New Roman"');
    var r = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835));
    t.fillText(r, 2, 15),
      (t.fillStyle = "rgba(102, 204, 0, 0.2)"),
      (t.font = "18pt Arial"),
      t.fillText(r, 4, 45);
  }
  function ft(e, t) {
    (e.width = 122),
      (e.height = 110),
      (t.globalCompositeOperation = "multiply");
    for (
      var r = 0,
      o = [
        ["#f2f", 40, 40],
        ["#2ff", 80, 40],
        ["#ff2", 60, 80],
      ];
      r < o.length;
      r++
    ) {
      var a = o[r],
        n = a[0],
        i = a[1],
        c = a[2];
      (t.fillStyle = n),
        t.beginPath(),
        t.arc(i, c, 40, 0, Math.PI * 2, !0),
        t.closePath(),
        t.fill();
    }
    (t.fillStyle = "#f9c"),
      t.arc(60, 60, 60, 0, Math.PI * 2, !0),
      t.arc(60, 60, 20, 0, Math.PI * 2, !0),
      t.fill("evenodd");
  }
  function J(e) {
    return e.toDataURL();
  }
  function lt() {
    var e = navigator,
      t = 0,
      r;
    e.maxTouchPoints !== void 0
      ? (t = K(e.maxTouchPoints))
      : e.msMaxTouchPoints !== void 0 && (t = e.msMaxTouchPoints);
    try {
      document.createEvent("TouchEvent"), (r = !0);
    } catch (a) {
      r = !1;
    }
    var o = "ontouchstart" in window;
    return { maxTouchPoints: t, touchEvent: r, touchStart: o };
  }
  function dt() {
    return navigator.oscpu;
  }
  function ht() {
    var e = navigator,
      t = [],
      r = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
    if ((r !== void 0 && t.push([r]), Array.isArray(e.languages)))
      ($() && Xe()) || t.push(e.languages);
    else if (typeof e.languages == "string") {
      var o = e.languages;
      o && t.push(o.split(","));
    }
    return t;
  }
  function mt() {
    return window.screen.colorDepth;
  }
  function vt() {
    return A(k(navigator.deviceMemory), void 0);
  }
  function pt() {
    var e = screen,
      t = function (o) {
        return A(K(o), null);
      },
      r = [t(e.width), t(e.height)];
    return r.sort().reverse(), r;
  }
  var yt = 2500,
    bt = 10,
    D,
    B;
  function gt() {
    if (B === void 0) {
      var e = function () {
        var t = q();
        Q(t) ? (B = setTimeout(e, yt)) : ((D = t), (B = void 0));
      };
      e();
    }
  }
  function wt() {
    var e = this;
    return (
      gt(),
      function () {
        return R(e, void 0, void 0, function () {
          var t;
          return F(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (t = q()),
                  Q(t)
                    ? D
                      ? [2, H([], D, !0)]
                      : Je()
                        ? [4, Be()]
                        : [3, 2]
                    : [3, 2]
                );
              case 1:
                r.sent(), (t = q()), (r.label = 2);
              case 2:
                return Q(t) || (D = t), [2, t];
            }
          });
        });
      }
    );
  }
  function St() {
    var e = this,
      t = wt();
    return function () {
      return R(e, void 0, void 0, function () {
        var r, o;
        return F(this, function (a) {
          switch (a.label) {
            case 0:
              return [4, t()];
            case 1:
              return (
                (r = a.sent()),
                (o = function (n) {
                  return n === null ? null : ye(n, bt);
                }),
                [2, [o(r[0]), o(r[1]), o(r[2]), o(r[3])]]
              );
          }
        });
      });
    };
  }
  function q() {
    var e = screen;
    return [
      A(k(e.availTop), null),
      A(k(e.width) - k(e.availWidth) - A(k(e.availLeft), 0), null),
      A(k(e.height) - k(e.availHeight) - A(k(e.availTop), 0), null),
      A(k(e.availLeft), null),
    ];
  }
  function Q(e) {
    for (var t = 0; t < 4; ++t) if (e[t]) return !1;
    return !0;
  }
  function Lt() {
    return A(K(navigator.hardwareConcurrency), void 0);
  }
  function xt() {
    var e,
      t =
        (e = window.Intl) === null || e === void 0 ? void 0 : e.DateTimeFormat;
    if (t) {
      var r = new t().resolvedOptions().timeZone;
      if (r) return r;
    }
    var o = -Ct();
    return "UTC".concat(o >= 0 ? "+" : "").concat(Math.abs(o));
  }
  function Ct() {
    var e = new Date().getFullYear();
    return Math.max(
      k(new Date(e, 0, 1).getTimezoneOffset()),
      k(new Date(e, 6, 1).getTimezoneOffset())
    );
  }
  function kt() {
    try {
      return !!window.sessionStorage;
    } catch (e) {
      return !0;
    }
  }
  function Vt() {
    try {
      return !!window.localStorage;
    } catch (e) {
      return !0;
    }
  }
  function Rt() {
    if (!(be() || Ye()))
      try {
        return !!window.indexedDB;
      } catch (e) {
        return !0;
      }
  }
  function Ft() {
    return !!window.openDatabase;
  }
  function At() {
    return navigator.cpuClass;
  }
  function jt() {
    var e = navigator.platform;
    return e === "MacIntel" && _() && !ee() ? (He() ? "iPad" : "iPhone") : e;
  }
  function Wt() {
    return navigator.vendor || "";
  }
  function Mt() {
    for (
      var e = [],
      t = 0,
      r = [
        "chrome",
        "safari",
        "__crWeb",
        "__gCrWeb",
        "yandex",
        "__yb",
        "__ybro",
        "__firefox__",
        "__edgeTrackingPreventionStatistics",
        "webkit",
        "oprt",
        "samsungAr",
        "ucweb",
        "UCShellJava",
        "puffinDevice",
      ];
      t < r.length;
      t++
    ) {
      var o = r[t],
        a = window[o];
      a && typeof a == "object" && e.push(o);
    }
    return e.sort();
  }
  function Zt() {
    var e = document;
    try {
      e.cookie = "cookietest=1; SameSite=Strict;";
      var t = e.cookie.indexOf("cookietest=") !== -1;
      return (
        (e.cookie =
          "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT"),
        t
      );
    } catch (r) {
      return !1;
    }
  }
  function Pt() {
    var e = atob;
    return {
      abpIndo: [
        "#Iklan-Melayang",
        "#Kolom-Iklan-728",
        "#SidebarIklan-wrapper",
        '[title="ALIENBOLA" i]',
        e("I0JveC1CYW5uZXItYWRz"),
      ],
      abpvn: [
        ".quangcao",
        "#mobileCatfish",
        e("LmNsb3NlLWFkcw=="),
        '[id^="bn_bottom_fixed_"]',
        "#pmadv",
      ],
      adBlockFinland: [
        ".mainostila",
        e("LnNwb25zb3JpdA=="),
        ".ylamainos",
        e("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"),
        e("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd"),
      ],
      adBlockPersian: [
        "#navbar_notice_50",
        ".kadr",
        'TABLE[width="140px"]',
        "#divAgahi",
        e("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd"),
      ],
      adBlockWarningRemoval: [
        "#adblock-honeypot",
        ".adblocker-root",
        ".wp_adblock_detect",
        e("LmhlYWRlci1ibG9ja2VkLWFk"),
        e("I2FkX2Jsb2NrZXI="),
      ],
      adGuardAnnoyances: [
        ".hs-sosyal",
        "#cookieconsentdiv",
        'div[class^="app_gdpr"]',
        ".as-oil",
        '[data-cypress="soft-push-notification-modal"]',
      ],
      adGuardBase: [
        ".BetterJsPopOverlay",
        e("I2FkXzMwMFgyNTA="),
        e("I2Jhbm5lcmZsb2F0MjI="),
        e("I2NhbXBhaWduLWJhbm5lcg=="),
        e("I0FkLUNvbnRlbnQ="),
      ],
      adGuardChinese: [
        e("LlppX2FkX2FfSA=="),
        e("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"),
        "#widget-quan",
        e("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"),
        e("YVtocmVmKj0iLjE5NTZobC5jb20vIl0="),
      ],
      adGuardFrench: [
        "#pavePub",
        e("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"),
        ".mobile_adhesion",
        ".widgetadv",
        e("LmFkc19iYW4="),
      ],
      adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
      adGuardJapanese: [
        "#kauli_yad_1",
        e("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="),
        e("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="),
        e("LmFkZ29vZ2xl"),
        e("Ll9faXNib29zdFJldHVybkFk"),
      ],
      adGuardMobile: [
        e("YW1wLWF1dG8tYWRz"),
        e("LmFtcF9hZA=="),
        'amp-embed[type="24smi"]',
        "#mgid_iframe1",
        e("I2FkX2ludmlld19hcmVh"),
      ],
      adGuardRussian: [
        e("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="),
        e("LnJlY2xhbWE="),
        'div[id^="smi2adblock"]',
        e("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"),
        "#psyduckpockeball",
      ],
      adGuardSocial: [
        e("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="),
        e("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="),
        ".etsy-tweet",
        "#inlineShare",
        ".popup-social",
      ],
      adGuardSpanishPortuguese: [
        "#barraPublicidade",
        "#Publicidade",
        "#publiEspecial",
        "#queTooltip",
        ".cnt-publi",
      ],
      adGuardTrackingProtection: [
        "#qoo-counter",
        e("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="),
        e("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="),
        e("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="),
        "#top100counter",
      ],
      adGuardTurkish: [
        "#backkapat",
        e("I3Jla2xhbWk="),
        e("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="),
        e("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"),
        e("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ=="),
      ],
      bulgarian: [
        e("dGQjZnJlZW5ldF90YWJsZV9hZHM="),
        "#ea_intext_div",
        ".lapni-pop-over",
        "#xenium_hot_offers",
      ],
      easyList: [
        ".yb-floorad",
        e("LndpZGdldF9wb19hZHNfd2lkZ2V0"),
        e("LnRyYWZmaWNqdW5reS1hZA=="),
        ".textad_headline",
        e("LnNwb25zb3JlZC10ZXh0LWxpbmtz"),
      ],
      easyListChina: [
        e("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="),
        e("LmZyb250cGFnZUFkdk0="),
        "#taotaole",
        "#aafoot.top_box",
        ".cfa_popup",
      ],
      easyListCookie: [
        ".ezmob-footer",
        ".cc-CookieWarning",
        "[data-cookie-number]",
        e("LmF3LWNvb2tpZS1iYW5uZXI="),
        ".sygnal24-gdpr-modal-wrap",
      ],
      easyListCzechSlovak: [
        "#onlajny-stickers",
        e("I3Jla2xhbW5pLWJveA=="),
        e("LnJla2xhbWEtbWVnYWJvYXJk"),
        ".sklik",
        e("W2lkXj0ic2tsaWtSZWtsYW1hIl0="),
      ],
      easyListDutch: [
        e("I2FkdmVydGVudGll"),
        e("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="),
        ".adstekst",
        e("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="),
        "#semilo-lrectangle",
      ],
      easyListGermany: [
        "#SSpotIMPopSlider",
        e("LnNwb25zb3JsaW5rZ3J1ZW4="),
        e("I3dlcmJ1bmdza3k="),
        e("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"),
        e("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0="),
      ],
      easyListItaly: [
        e("LmJveF9hZHZfYW5udW5jaQ=="),
        ".sb-box-pubbliredazionale",
        e("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"),
        e("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"),
        e("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ=="),
      ],
      easyListLithuania: [
        e("LnJla2xhbW9zX3RhcnBhcw=="),
        e("LnJla2xhbW9zX251b3JvZG9z"),
        e("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"),
        e("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"),
        e("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd"),
      ],
      estonian: [e("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
      fanboyAnnoyances: [
        "#ac-lre-player",
        ".navigate-to-top",
        "#subscribe_popup",
        ".newsletter_holder",
        "#back-top",
      ],
      fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
      fanboyEnhancedTrackers: [
        ".open.pushModal",
        "#issuem-leaky-paywall-articles-zero-remaining-nag",
        "#sovrn_container",
        'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
        ".BlockNag__Card",
      ],
      fanboySocial: [
        "#FollowUs",
        "#meteored_share",
        "#social_follow",
        ".article-sharer",
        ".community__social-desc",
      ],
      frellwitSwedish: [
        e("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="),
        e("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="),
        "article.category-samarbete",
        e("ZGl2LmhvbGlkQWRz"),
        "ul.adsmodern",
      ],
      greekAdBlock: [
        e("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"),
        e("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="),
        e("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"),
        "DIV.agores300",
        "TABLE.advright",
      ],
      hungarian: [
        "#cemp_doboz",
        ".optimonk-iframe-container",
        e("LmFkX19tYWlu"),
        e("W2NsYXNzKj0iR29vZ2xlQWRzIl0="),
        "#hirdetesek_box",
      ],
      iDontCareAboutCookies: [
        '.alert-info[data-block-track*="CookieNotice"]',
        ".ModuleTemplateCookieIndicator",
        ".o--cookies--container",
        "#cookies-policy-sticky",
        "#stickyCookieBar",
      ],
      icelandicAbp: [
        e("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ=="),
      ],
      latvian: [
        e(
          "YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="
        ),
        e(
          "YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ=="
        ),
      ],
      listKr: [
        e("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="),
        e("I2xpdmVyZUFkV3JhcHBlcg=="),
        e("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="),
        e("aW5zLmZhc3R2aWV3LWFk"),
        ".revenue_unit_item.dable",
      ],
      listeAr: [
        e("LmdlbWluaUxCMUFk"),
        ".right-and-left-sponsers",
        e("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="),
        e("YVtocmVmKj0iYm9vcmFxLm9yZyJd"),
        e("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd"),
      ],
      listeFr: [
        e("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="),
        e("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="),
        e("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="),
        ".site-pub-interstitiel",
        'div[id^="crt-"][data-criteo-id]',
      ],
      officialPolish: [
        "#ceneo-placeholder-ceneo-12",
        e("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"),
        e(
          "YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="
        ),
        e("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="),
        e("ZGl2I3NrYXBpZWNfYWQ="),
      ],
      ro: [
        e("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"),
        e("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"),
        e(
          "YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="
        ),
        e("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"),
        'a[href^="/url/"]',
      ],
      ruAd: [
        e("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"),
        e("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="),
        e("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="),
        "#pgeldiz",
        ".yandex-rtb-block",
      ],
      thaiAds: [
        "a[href*=macau-uta-popup]",
        e("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="),
        e("LmFkczMwMHM="),
        ".bumq",
        ".img-kosana",
      ],
      webAnnoyancesUltralist: [
        "#mod-social-share-2",
        "#social-tools",
        e("LmN0cGwtZnVsbGJhbm5lcg=="),
        ".zergnet-recommend",
        ".yt.btn-link.btn-md.btn",
      ],
    };
  }
  function It(e) {
    var t = e === void 0 ? {} : e,
      r = t.debug;
    return R(this, void 0, void 0, function () {
      var o, a, n, i, c, f;
      return F(this, function (s) {
        switch (s.label) {
          case 0:
            return Ot()
              ? ((o = Pt()),
                (a = Object.keys(o)),
                (n = (f = []).concat.apply(
                  f,
                  a.map(function (u) {
                    return o[u];
                  })
                )),
                [4, Tt(n)])
              : [2, void 0];
          case 1:
            return (
              (i = s.sent()),
              r && _t(o, i),
              (c = a.filter(function (u) {
                var l = o[u],
                  d = V(
                    l.map(function (v) {
                      return i[v];
                    })
                  );
                return d > l.length * 0.6;
              })),
              c.sort(),
              [2, c]
            );
        }
      });
    });
  }
  function Ot() {
    return _() || ge();
  }
  function Tt(e) {
    var t;
    return R(this, void 0, void 0, function () {
      var r, o, a, n, f, i, c, f;
      return F(this, function (s) {
        switch (s.label) {
          case 0:
            for (
              r = document,
              o = r.createElement("div"),
              a = new Array(e.length),
              n = {},
              fe(o),
              f = 0;
              f < e.length;
              ++f
            )
              (i = $e(e[f])),
                i.tagName === "DIALOG" && i.show(),
                (c = r.createElement("div")),
                fe(c),
                c.appendChild(i),
                o.appendChild(c),
                (a[f] = i);
            s.label = 1;
          case 1:
            return r.body ? [3, 3] : [4, O(50)];
          case 2:
            return s.sent(), [3, 1];
          case 3:
            r.body.appendChild(o);
            try {
              for (f = 0; f < e.length; ++f)
                a[f].offsetParent || (n[e[f]] = !0);
            } finally {
              (t = o.parentNode) === null || t === void 0 || t.removeChild(o);
            }
            return [2, n];
        }
      });
    });
  }
  function fe(e) {
    e.style.setProperty("display", "block", "important");
  }
  function _t(e, t) {
    for (
      var r = "DOM blockers debug:\n```", o = 0, a = Object.keys(e);
      o < a.length;
      o++
    ) {
      var n = a[o];
      r += `
`.concat(n, ":");
      for (var i = 0, c = e[n]; i < c.length; i++) {
        var f = c[i];
        r += `
  `
          .concat(t[f] ? "\u{1F6AB}" : "\u27A1\uFE0F", " ")
          .concat(f);
      }
    }
    console.log("".concat(r, "\n```"));
  }
  function Gt() {
    for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
      var r = t[e];
      if (matchMedia("(color-gamut: ".concat(r, ")")).matches) return r;
    }
  }
  function Et() {
    if (le("inverted")) return !0;
    if (le("none")) return !1;
  }
  function le(e) {
    return matchMedia("(inverted-colors: ".concat(e, ")")).matches;
  }
  function Dt() {
    if (de("active")) return !0;
    if (de("none")) return !1;
  }
  function de(e) {
    return matchMedia("(forced-colors: ".concat(e, ")")).matches;
  }
  var Yt = 100;
  function zt() {
    if (matchMedia("(min-monochrome: 0)").matches) {
      for (var e = 0; e <= Yt; ++e)
        if (matchMedia("(max-monochrome: ".concat(e, ")")).matches) return e;
      throw new Error("Too high value");
    }
  }
  function Xt() {
    if (I("no-preference")) return 0;
    if (I("high") || I("more")) return 1;
    if (I("low") || I("less")) return -1;
    if (I("forced")) return 10;
  }
  function I(e) {
    return matchMedia("(prefers-contrast: ".concat(e, ")")).matches;
  }
  function Nt() {
    if (he("reduce")) return !0;
    if (he("no-preference")) return !1;
  }
  function he(e) {
    return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches;
  }
  function Ht() {
    if (me("high")) return !0;
    if (me("standard")) return !1;
  }
  function me(e) {
    return matchMedia("(dynamic-range: ".concat(e, ")")).matches;
  }
  var m = Math,
    L = function () {
      return 0;
    };
  function Jt() {
    var e = m.acos || L,
      t = m.acosh || L,
      r = m.asin || L,
      o = m.asinh || L,
      a = m.atanh || L,
      n = m.atan || L,
      i = m.sin || L,
      c = m.sinh || L,
      f = m.cos || L,
      s = m.cosh || L,
      u = m.tan || L,
      l = m.tanh || L,
      d = m.exp || L,
      v = m.expm1 || L,
      h = m.log1p || L,
      g = function (p) {
        return m.pow(m.PI, p);
      },
      b = function (p) {
        return m.log(p + m.sqrt(p * p - 1));
      },
      w = function (p) {
        return m.log(p + m.sqrt(p * p + 1));
      },
      W = function (p) {
        return m.log((1 + p) / (1 - p)) / 2;
      },
      Y = function (p) {
        return m.exp(p) - 1 / m.exp(p) / 2;
      },
      G = function (p) {
        return (m.exp(p) + 1 / m.exp(p)) / 2;
      },
      z = function (p) {
        return m.exp(p) - 1;
      },
      Fe = function (p) {
        return (m.exp(2 * p) - 1) / (m.exp(2 * p) + 1);
      },
      Ae = function (p) {
        return m.log(1 + p);
      };
    return {
      acos: e(0.12312423423423424),
      acosh: t(1e308),
      acoshPf: b(1e154),
      asin: r(0.12312423423423424),
      asinh: o(1),
      asinhPf: w(1),
      atanh: a(0.5),
      atanhPf: W(0.5),
      atan: n(0.5),
      sin: i(-1e300),
      sinh: c(1),
      sinhPf: Y(1),
      cos: f(10.000000000123),
      cosh: s(1),
      coshPf: G(1),
      tan: u(-1e300),
      tanh: l(1),
      tanhPf: Fe(1),
      exp: d(1),
      expm1: v(1),
      expm1Pf: z(1),
      log1p: h(10),
      log1pPf: Ae(10),
      powPI: g(-100),
    };
  }
  var Bt = "mmMwWLliI0fiflO&1",
    U = {
      default: [],
      apple: [{ font: "-apple-system-body" }],
      serif: [{ fontFamily: "serif" }],
      sans: [{ fontFamily: "sans-serif" }],
      mono: [{ fontFamily: "monospace" }],
      min: [{ fontSize: "1px" }],
      system: [{ fontFamily: "system-ui" }],
    };
  function Ut() {
    return qt(function (e, t) {
      for (var r = {}, o = {}, a = 0, n = Object.keys(U); a < n.length; a++) {
        var i = n[a],
          c = U[i],
          f = c[0],
          s = f === void 0 ? {} : f,
          u = c[1],
          l = u === void 0 ? Bt : u,
          d = e.createElement("span");
        (d.textContent = l), (d.style.whiteSpace = "nowrap");
        for (var v = 0, h = Object.keys(s); v < h.length; v++) {
          var g = h[v],
            b = s[g];
          b !== void 0 && (d.style[g] = b);
        }
        (r[i] = d), t.appendChild(e.createElement("br")), t.appendChild(d);
      }
      for (var w = 0, W = Object.keys(U); w < W.length; w++) {
        var i = W[w];
        o[i] = r[i].getBoundingClientRect().width;
      }
      return o;
    });
  }
  function qt(e, t) {
    return (
      t === void 0 && (t = 4e3),
      we(function (r, o) {
        var a = o.document,
          n = a.body,
          i = n.style;
        (i.width = "".concat(t, "px")),
          (i.webkitTextSizeAdjust = i.textSizeAdjust = "none"),
          $()
            ? (n.style.zoom = "".concat(1 / o.devicePixelRatio))
            : _() && (n.style.zoom = "reset");
        var c = a.createElement("div");
        return (
          (c.textContent = H([], Array((t / 20) << 0), !0)
            .map(function () {
              return "word";
            })
            .join(" ")),
          n.appendChild(c),
          e(a, n)
        );
      }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
    );
  }
  function Qt() {
    var e,
      t = document.createElement("canvas"),
      r =
        (e = t.getContext("webgl")) !== null && e !== void 0
          ? e
          : t.getContext("experimental-webgl");
    if (r && "getExtension" in r) {
      var o = r.getExtension("WEBGL_debug_renderer_info");
      if (o)
        return {
          vendor: (r.getParameter(o.UNMASKED_VENDOR_WEBGL) || "").toString(),
          renderer: (
            r.getParameter(o.UNMASKED_RENDERER_WEBGL) || ""
          ).toString(),
        };
    }
  }
  function Kt() {
    return navigator.pdfViewerEnabled;
  }
  function $t() {
    var e = new Float32Array(1),
      t = new Uint8Array(e.buffer);
    return (e[0] = 1 / 0), (e[0] = e[0] - e[0]), t[3];
  }
  var er = {
    fonts: nt,
    domBlockers: It,
    fontPreferences: Ut,
    audio: Ue,
    screenFrame: St,
    osCpu: dt,
    languages: ht,
    colorDepth: mt,
    deviceMemory: vt,
    screenResolution: pt,
    hardwareConcurrency: Lt,
    timezone: xt,
    sessionStorage: kt,
    localStorage: Vt,
    indexedDB: Rt,
    openDatabase: Ft,
    cpuClass: At,
    platform: jt,
    plugins: ot,
    canvas: at,
    touchSupport: lt,
    vendor: Wt,
    vendorFlavors: Mt,
    cookiesEnabled: Zt,
    colorGamut: Gt,
    invertedColors: Et,
    forcedColors: Dt,
    monochrome: zt,
    contrast: Xt,
    reducedMotion: Nt,
    hdr: Ht,
    math: Jt,
    videoCard: Qt,
    pdfViewerEnabled: Kt,
    architecture: $t,
  };
  function tr(e) {
    return De(er, e, []);
  }
  var rr = "$ if upgrade to Pro: https://fpjs.dev/pro";
  function nr(e) {
    var t = or(e),
      r = ar(t);
    return { score: t, comment: rr.replace(/\$/g, "".concat(r)) };
  }
  function or(e) {
    if (ge()) return 0.4;
    if (_()) return ee() ? 0.5 : 0.3;
    var t = e.platform.value || "";
    return /^Win/.test(t) ? 0.6 : /^Mac/.test(t) ? 0.5 : 0.7;
  }
  function ar(e) {
    return ye(0.99 + 0.01 * e, 1e-4);
  }
  function ir(e) {
    for (var t = "", r = 0, o = Object.keys(e).sort(); r < o.length; r++) {
      var a = o[r],
        n = e[a],
        i = n.error ? "error" : JSON.stringify(n.value);
      t += ""
        .concat(t ? "|" : "")
        .concat(a.replace(/([:|\\])/g, "\\$1"), ":")
        .concat(i);
    }
    return t;
  }
  function Se(e) {
    return JSON.stringify(
      e,
      function (t, r) {
        return r instanceof Error ? Ie(r) : r;
      },
      2
    );
  }
  function Le(e) {
    return Pe(ir(e));
  }
  function cr(e) {
    var t,
      r = nr(e);
    return {
      get visitorId() {
        return t === void 0 && (t = Le(this.components)), t;
      },
      set visitorId(o) {
        t = o;
      },
      confidence: r,
      components: e,
      version: ve,
    };
  }
  function ur(e) {
    return e === void 0 && (e = 50), Ze(e, e * 2);
  }
  function sr(e, t) {
    var r = Date.now();
    return {
      get: function (o) {
        return R(this, void 0, void 0, function () {
          var a, n, i;
          return F(this, function (c) {
            switch (c.label) {
              case 0:
                return (a = Date.now()), [4, e()];
              case 1:
                return (
                  (n = c.sent()),
                  (i = cr(n)),
                  (t || (o != null && o.debug)) &&
                  console.log(
                    "Copy the text below to get the debug data:\n\n```\nversion: "
                      .concat(
                        i.version,
                        `
userAgent: `
                      )
                      .concat(
                        navigator.userAgent,
                        `
timeBetweenLoadAndGet: `
                      )
                      .concat(
                        a - r,
                        `
visitorId: `
                      )
                      .concat(
                        i.visitorId,
                        `
components: `
                      )
                      .concat(Se(n), "\n```")
                  ),
                  [2, i]
                );
            }
          });
        });
      },
    };
  }
  function fr() {
    if (!(window.__fpjs_d_m || Math.random() >= 0.001))
      try {
        var e = new XMLHttpRequest();
        e.open(
          "get",
          "https://m1.openfpcdn.io/fingerprintjs/v".concat(
            ve,
            "/npm-monitoring"
          ),
          !0
        ),
          e.send();
      } catch (t) {
        console.error(t);
      }
  }
  function lr(e) {
    var t = e === void 0 ? {} : e,
      r = t.delayFallback,
      o = t.debug,
      a = t.monitoring,
      n = a === void 0 ? !0 : a;
    return R(this, void 0, void 0, function () {
      var i;
      return F(this, function (c) {
        switch (c.label) {
          case 0:
            return n && fr(), [4, ur(r)];
          case 1:
            return c.sent(), (i = tr({ debug: o })), [2, sr(i, o)];
        }
      });
    });
  }
  var xe = { load: lr, hashComponents: Le, componentsToDebugString: Se };
  var S = window || S,
    ke,
    Ce =
      ((ke = S.lemonSqueezyAffiliateConfig) == null ? void 0 : ke.baseUrl) ||
      "https://app.lemonsqueezy.com",
    Ve,
    dr =
      ((Ve = S.lemonSqueezyAffiliateConfig) == null
        ? void 0
        : Ve.trackOnLoad) !== !1,
    Re,
    M =
      ((Re = S.lemonSqueezyAffiliateConfig) == null ? void 0 : Re.debug) === !0,
    hr = function () {
      function e(c = null) {
        return N(this, null, function* () {
          var d, v;
          M && console.group("Lemon Squeezy affiliate.js");
          let f = r();
          if (
            (M && f && console.info("Retrieved click ID from the cookie:", f),
              M &&
              c &&
              console.info("Retrieved affiliate ID from the `track` param:", c),
              c || (c = t()),
              M && c && console.info("Retrieved affiliate ID from the URL:", c),
              !c && !f)
          ) {
            M && console.warn("No affiliate ID or click ID detected");
            return;
          }
          if (!S.lemonSqueezyAffiliateConfig) {
            console.warn(
              "lemonSqueezyAffiliateConfig not found. Skipping setup..."
            );
            return;
          }
          if (!S.lemonSqueezyAffiliateConfig.store) {
            console.error("lemonSqueezyAffiliateConfig.store is required");
            return;
          }
          let s = {
            store: S.lemonSqueezyAffiliateConfig.store,
            url: window.location.href,
            referrer: document.referrer,
          };
          c ? (s.affiliate_ref = c) : (s.click_ref = f);
          let u = yield xe.load({ monitoring: !1 });
          s.visitor_id = (yield u.get()).visitorId;
          let l = yield o(`${Ce}/affiliates/track`, s);
          if (l.ok) {
            let h = yield l.json();
            a(h.click, h.domains),
              n("ls_aff_ref", h.click, h.expires, h.domain),
              (v =
                (d = S.lemonSqueezyAffiliateConfig) == null
                  ? void 0
                  : d.onTrack) == null || v.call(d, X(X({}, s), h)),
              M && console.info("Successfully tracked the visit:", h.click);
          } else console.error("Failed to track affiliate click", yield l.json());
          M && console.groupEnd();
        });
      }
      function t() {
        return new URLSearchParams(window.location.search).get("aff");
      }
      function r() {
        return i("ls_aff_ref");
      }
      function o(c, f) {
        return N(this, null, function* () {
          return yield fetch(c, {
            method: "POST",
            cache: "no-cache",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(f),
          });
        });
      }
      function a(c, f) {
        let s = [
          new URL(Ce).hostname.replace("app.", ""),
          ...(S.lemonSqueezyAffiliateConfig.domains || []),
          ...f,
        ];
        new te({ hosts: s, clickId: c }).attach();
      }
      function n(c, f, s, u) {
        let l = c + "=" + f + "; expires=" + s + "; path=/";
        u && (l += "; domain=." + u), (document.cookie = l);
      }
      function i(c) {
        for (
          var f = c + "=", s = document.cookie.split(";"), u = 0;
          u < s.length;
          u++
        ) {
          for (var l = s[u]; l.charAt(0) === " ";)
            l = l.substring(1, l.length);
          if (l.indexOf(f) === 0) return l.substring(f.length, l.length);
        }
        return null;
      }
      return { Track: e };
    };
  S.createLemonSqueezyAffiliate = function () {
    var e, t;
    S.LemonSqueezyAffiliate || (S.LemonSqueezyAffiliate = new hr()),
      (t = (e = S.lemonSqueezyAffiliateConfig) == null ? void 0 : e.onReady) ==
      null || t.call(e, S.LemonSqueezyAffiliate),
      dr && S.LemonSqueezyAffiliate.Track();
  };
  S.addEventListener
    ? S.addEventListener("load", S.createLemonSqueezyAffiliate)
    : S.attachEvent &&
    S.attachEvent("onload", window.createLemonSqueezyAffiliate);
  var te = class {
    constructor(t) {
      (this.state = {
        attached: !1,
        hosts: t.hosts || [],
        clickId: t.clickId || null,
      }),
        (this.observer = void 0),
        this.hasMutationObserver() &&
        (this.observer = new window.MutationObserver((r) => {
          r.forEach((o) => {
            if (o.type === "attributes") {
              if (o.attributeName !== "href") return;
              let a = o.target.href,
                n = this.getNodeData(o.target);
              if (n.is && n.is === a) return;
            }
            this.traverse(o.target);
          });
        }));
    }
    traverse(t = document.body) {
      if (typeof t != "object" || typeof t.getElementsByTagName != "function")
        return this;
      if (!this.hasURL())
        return console.error("This browser needs a URL polyfill."), this;
      let r = t.getElementsByTagName("a"),
        o = Object.values(r);
      return (
        t.nodeName.toLowerCase() === "a" && (o = [t]),
        o.forEach((a) => {
          if (!a || !("href" in a)) return;
          let n = new URL(a.href || "", window.location.origin);
          this.state.hosts.forEach((i) => {
            n.host.includes(i) && this.modifyURL(n, a);
          });
        }),
        this
      );
    }
    modifyURL(t, r) {
      let o = this.getNodeData(r);
      if (o.is && o.is === t.href) return;
      let a = t.href,
        n = this.convert(t);
      (r.href = n), this.setNodeData(r, { was: a, is: t.href });
    }
    convert(t) {
      if ((typeof t == "object" && (t = t.href), !this.hasURL()))
        return console.error("This browser needs a URL polyfill."), t;
      let r = new URL(t, window.location.origin);
      return r.searchParams.set("aff_ref", this.state.clickId), r.href;
    }
    attach() {
      if (this.state.attached || typeof document == "undefined") return this;
      let { readyState: t } = document;
      return (
        t === "complete" || t === "interactive"
          ? ((this.state.attached = !0),
            this.traverse(),
            this.hasMutationObserver() && this.observer
              ? this.observer.observe(document.body, {
                childList: !0,
                subtree: !0,
                attributes: !0,
                characterData: !0,
                attributeFilter: ["href"],
              })
              : console.warn("Browser does not support MutationObserver."))
          : window.addEventListener("DOMContentLoaded", this.attach),
        this
      );
    }
    detach() {
      return !this.hasMutationObserver() || !this.observer
        ? this
        : ((this.state.attached = !1), this.observer.disconnect(), this);
    }
    hasMutationObserver() {
      return (
        typeof window == "object" &&
        typeof window.MutationObserver != "undefined"
      );
    }
    hasURL() {
      return typeof URL == "function" && typeof URLSearchParams == "function";
    }
    getNodeData(t) {
      return t._aff || {};
    }
    setNodeData(t, r) {
      Object.assign(t, { _aff: r });
    }
  };
})();
