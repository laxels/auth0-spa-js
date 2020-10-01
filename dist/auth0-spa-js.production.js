!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e =
        'undefined' != typeof globalThis
          ? globalThis
          : e || self).createAuth0Client = t());
})(this, function () {
  'use strict';
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ var e = function (
    t,
    n
  ) {
    return (e =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      })(t, n);
  };
  function t(t, n) {
    function i() {
      this.constructor = t;
    }
    e(t, n),
      (t.prototype =
        null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
  }
  var n = function () {
    return (n =
      Object.assign ||
      function (e) {
        for (var t, n = 1, i = arguments.length; n < i; n++)
          for (var r in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e;
      }).apply(this, arguments);
  };
  function i(e, t) {
    var n = {};
    for (var i in e)
      Object.prototype.hasOwnProperty.call(e, i) &&
        t.indexOf(i) < 0 &&
        (n[i] = e[i]);
    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
      var r = 0;
      for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
        t.indexOf(i[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
          (n[i[r]] = e[i[r]]);
    }
    return n;
  }
  function r(e, t, n, i) {
    return new (n || (n = Promise))(function (r, o) {
      function c(e) {
        try {
          a(i.next(e));
        } catch (e) {
          o(e);
        }
      }
      function s(e) {
        try {
          a(i.throw(e));
        } catch (e) {
          o(e);
        }
      }
      function a(e) {
        var t;
        e.done
          ? r(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(c, s);
      }
      a((i = i.apply(e, t || [])).next());
    });
  }
  function o(e, t) {
    var n,
      i,
      r,
      o,
      c = {
        label: 0,
        sent: function () {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: []
      };
    return (
      (o = { next: s(0), throw: s(1), return: s(2) }),
      'function' == typeof Symbol &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );
    function s(o) {
      return function (s) {
        return (function (o) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; c; )
            try {
              if (
                ((n = 1),
                i &&
                  (r =
                    2 & o[0]
                      ? i.return
                      : o[0]
                      ? i.throw || ((r = i.return) && r.call(i), 0)
                      : i.next) &&
                  !(r = r.call(i, o[1])).done)
              )
                return r;
              switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                case 0:
                case 1:
                  r = o;
                  break;
                case 4:
                  return c.label++, { value: o[1], done: !1 };
                case 5:
                  c.label++, (i = o[1]), (o = [0]);
                  continue;
                case 7:
                  (o = c.ops.pop()), c.trys.pop();
                  continue;
                default:
                  if (
                    !((r = c.trys),
                    (r = r.length > 0 && r[r.length - 1]) ||
                      (6 !== o[0] && 2 !== o[0]))
                  ) {
                    c = 0;
                    continue;
                  }
                  if (3 === o[0] && (!r || (o[1] > r[0] && o[1] < r[3]))) {
                    c.label = o[1];
                    break;
                  }
                  if (6 === o[0] && c.label < r[1]) {
                    (c.label = r[1]), (r = o);
                    break;
                  }
                  if (r && c.label < r[2]) {
                    (c.label = r[2]), c.ops.push(o);
                    break;
                  }
                  r[2] && c.ops.pop(), c.trys.pop();
                  continue;
              }
              o = t.call(e, c);
            } catch (e) {
              (o = [6, e]), (i = 0);
            } finally {
              n = r = 0;
            }
          if (5 & o[0]) throw o[1];
          return { value: o[0] ? o[1] : void 0, done: !0 };
        })([o, s]);
      };
    }
  }
  var c =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};
  function s(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, 'default')
      ? e.default
      : e;
  }
  function a(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  var u = function (e) {
      return e && e.Math == Math && e;
    },
    l =
      u('object' == typeof globalThis && globalThis) ||
      u('object' == typeof window && window) ||
      u('object' == typeof self && self) ||
      u('object' == typeof c && c) ||
      Function('return this')(),
    d = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    },
    g = !d(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          }
        })[1]
      );
    }),
    I = {}.propertyIsEnumerable,
    f = Object.getOwnPropertyDescriptor,
    y = {
      f:
        f && !I.call({ 1: 2 }, 1)
          ? function (e) {
              var t = f(this, e);
              return !!t && t.enumerable;
            }
          : I
    },
    p = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      };
    },
    h = {}.toString,
    b = function (e) {
      return h.call(e).slice(8, -1);
    },
    m = ''.split,
    B = d(function () {
      return !Object('z').propertyIsEnumerable(0);
    })
      ? function (e) {
          return 'String' == b(e) ? m.call(e, '') : Object(e);
        }
      : Object,
    F = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e);
      return e;
    },
    U = function (e) {
      return B(F(e));
    },
    V = function (e) {
      return 'object' == typeof e ? null !== e : 'function' == typeof e;
    },
    v = function (e, t) {
      if (!V(e)) return e;
      var n, i;
      if (t && 'function' == typeof (n = e.toString) && !V((i = n.call(e))))
        return i;
      if ('function' == typeof (n = e.valueOf) && !V((i = n.call(e)))) return i;
      if (!t && 'function' == typeof (n = e.toString) && !V((i = n.call(e))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    },
    C = {}.hasOwnProperty,
    S = function (e, t) {
      return C.call(e, t);
    },
    Z = l.document,
    X = V(Z) && V(Z.createElement),
    w = function (e) {
      return X ? Z.createElement(e) : {};
    },
    G =
      !g &&
      !d(function () {
        return (
          7 !=
          Object.defineProperty(w('div'), 'a', {
            get: function () {
              return 7;
            }
          }).a
        );
      }),
    R = Object.getOwnPropertyDescriptor,
    A = {
      f: g
        ? R
        : function (e, t) {
            if (((e = U(e)), (t = v(t, !0)), G))
              try {
                return R(e, t);
              } catch (e) {}
            if (S(e, t)) return p(!y.f.call(e, t), e[t]);
          }
    },
    Q = function (e) {
      if (!V(e)) throw TypeError(String(e) + ' is not an object');
      return e;
    },
    x = Object.defineProperty,
    L = {
      f: g
        ? x
        : function (e, t, n) {
            if ((Q(e), (t = v(t, !0)), Q(n), G))
              try {
                return x(e, t, n);
              } catch (e) {}
            if ('get' in n || 'set' in n)
              throw TypeError('Accessors not supported');
            return 'value' in n && (e[t] = n.value), e;
          }
    },
    W = g
      ? function (e, t, n) {
          return L.f(e, t, p(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        },
    J = function (e, t) {
      try {
        W(l, e, t);
      } catch (n) {
        l[e] = t;
      }
      return t;
    },
    H = l['__core-js_shared__'] || J('__core-js_shared__', {}),
    k = Function.toString;
  'function' != typeof H.inspectSource &&
    (H.inspectSource = function (e) {
      return k.call(e);
    });
  var E,
    T,
    Y,
    N = H.inspectSource,
    K = l.WeakMap,
    O = 'function' == typeof K && /native code/.test(N(K)),
    D = a(function (e) {
      (e.exports = function (e, t) {
        return H[e] || (H[e] = void 0 !== t ? t : {});
      })('versions', []).push({
        version: '3.6.5',
        mode: 'global',
        copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
      });
    }),
    z = 0,
    _ = Math.random(),
    j = function (e) {
      return (
        'Symbol(' +
        String(void 0 === e ? '' : e) +
        ')_' +
        (++z + _).toString(36)
      );
    },
    P = D('keys'),
    M = function (e) {
      return P[e] || (P[e] = j(e));
    },
    q = {},
    $ = l.WeakMap;
  if (O) {
    var ee = new $(),
      te = ee.get,
      ne = ee.has,
      ie = ee.set;
    (E = function (e, t) {
      return ie.call(ee, e, t), t;
    }),
      (T = function (e) {
        return te.call(ee, e) || {};
      }),
      (Y = function (e) {
        return ne.call(ee, e);
      });
  } else {
    var re = M('state');
    (q[re] = !0),
      (E = function (e, t) {
        return W(e, re, t), t;
      }),
      (T = function (e) {
        return S(e, re) ? e[re] : {};
      }),
      (Y = function (e) {
        return S(e, re);
      });
  }
  var oe,
    ce = {
      set: E,
      get: T,
      has: Y,
      enforce: function (e) {
        return Y(e) ? T(e) : E(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var n;
          if (!V(t) || (n = T(t)).type !== e)
            throw TypeError('Incompatible receiver, ' + e + ' required');
          return n;
        };
      }
    },
    se = a(function (e) {
      var t = ce.get,
        n = ce.enforce,
        i = String(String).split('String');
      (e.exports = function (e, t, r, o) {
        var c = !!o && !!o.unsafe,
          s = !!o && !!o.enumerable,
          a = !!o && !!o.noTargetGet;
        'function' == typeof r &&
          ('string' != typeof t || S(r, 'name') || W(r, 'name', t),
          (n(r).source = i.join('string' == typeof t ? t : ''))),
          e !== l
            ? (c ? !a && e[t] && (s = !0) : delete e[t],
              s ? (e[t] = r) : W(e, t, r))
            : s
            ? (e[t] = r)
            : J(t, r);
      })(Function.prototype, 'toString', function () {
        return ('function' == typeof this && t(this).source) || N(this);
      });
    }),
    ae = l,
    ue = function (e) {
      return 'function' == typeof e ? e : void 0;
    },
    le = function (e, t) {
      return arguments.length < 2
        ? ue(ae[e]) || ue(l[e])
        : (ae[e] && ae[e][t]) || (l[e] && l[e][t]);
    },
    de = Math.ceil,
    ge = Math.floor,
    Ie = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? ge : de)(e);
    },
    fe = Math.min,
    ye = function (e) {
      return e > 0 ? fe(Ie(e), 9007199254740991) : 0;
    },
    pe = Math.max,
    he = Math.min,
    be = function (e) {
      return function (t, n, i) {
        var r,
          o = U(t),
          c = ye(o.length),
          s = (function (e, t) {
            var n = Ie(e);
            return n < 0 ? pe(n + t, 0) : he(n, t);
          })(i, c);
        if (e && n != n) {
          for (; c > s; ) if ((r = o[s++]) != r) return !0;
        } else
          for (; c > s; s++)
            if ((e || s in o) && o[s] === n) return e || s || 0;
        return !e && -1;
      };
    },
    me = { includes: be(!0), indexOf: be(!1) },
    Be = me.indexOf,
    Fe = function (e, t) {
      var n,
        i = U(e),
        r = 0,
        o = [];
      for (n in i) !S(q, n) && S(i, n) && o.push(n);
      for (; t.length > r; ) S(i, (n = t[r++])) && (~Be(o, n) || o.push(n));
      return o;
    },
    Ue = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf'
    ],
    Ve = Ue.concat('length', 'prototype'),
    ve = {
      f:
        Object.getOwnPropertyNames ||
        function (e) {
          return Fe(e, Ve);
        }
    },
    Ce = { f: Object.getOwnPropertySymbols },
    Se =
      le('Reflect', 'ownKeys') ||
      function (e) {
        var t = ve.f(Q(e)),
          n = Ce.f;
        return n ? t.concat(n(e)) : t;
      },
    Ze = function (e, t) {
      for (var n = Se(t), i = L.f, r = A.f, o = 0; o < n.length; o++) {
        var c = n[o];
        S(e, c) || i(e, c, r(t, c));
      }
    },
    Xe = /#|\.prototype\./,
    we = function (e, t) {
      var n = Re[Ge(e)];
      return n == Qe || (n != Ae && ('function' == typeof t ? d(t) : !!t));
    },
    Ge = (we.normalize = function (e) {
      return String(e).replace(Xe, '.').toLowerCase();
    }),
    Re = (we.data = {}),
    Ae = (we.NATIVE = 'N'),
    Qe = (we.POLYFILL = 'P'),
    xe = we,
    Le = A.f,
    We = function (e, t) {
      var n,
        i,
        r,
        o,
        c,
        s = e.target,
        a = e.global,
        u = e.stat;
      if ((n = a ? l : u ? l[s] || J(s, {}) : (l[s] || {}).prototype))
        for (i in t) {
          if (
            ((o = t[i]),
            (r = e.noTargetGet ? (c = Le(n, i)) && c.value : n[i]),
            !xe(a ? i : s + (u ? '.' : '#') + i, e.forced) && void 0 !== r)
          ) {
            if (typeof o == typeof r) continue;
            Ze(o, r);
          }
          (e.sham || (r && r.sham)) && W(o, 'sham', !0), se(n, i, o, e);
        }
    },
    Je =
      !!Object.getOwnPropertySymbols &&
      !d(function () {
        return !String(Symbol());
      }),
    He = Je && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
    ke = D('wks'),
    Ee = l.Symbol,
    Te = He ? Ee : (Ee && Ee.withoutSetter) || j,
    Ye = function (e) {
      return (
        S(ke, e) ||
          (Je && S(Ee, e) ? (ke[e] = Ee[e]) : (ke[e] = Te('Symbol.' + e))),
        ke[e]
      );
    },
    Ne = Ye('match'),
    Ke = function (e) {
      if (
        (function (e) {
          var t;
          return V(e) && (void 0 !== (t = e[Ne]) ? !!t : 'RegExp' == b(e));
        })(e)
      )
        throw TypeError("The method doesn't accept regular expressions");
      return e;
    },
    Oe = Ye('match'),
    De = function (e) {
      var t = /./;
      try {
        '/./'[e](t);
      } catch (n) {
        try {
          return (t[Oe] = !1), '/./'[e](t);
        } catch (e) {}
      }
      return !1;
    },
    ze = A.f,
    _e = ''.startsWith,
    je = Math.min,
    Pe = De('startsWith'),
    Me = !(
      Pe || ((oe = ze(String.prototype, 'startsWith')), !oe || oe.writable)
    );
  We(
    { target: 'String', proto: !0, forced: !Me && !Pe },
    {
      startsWith: function (e) {
        var t = String(F(this));
        Ke(e);
        var n = ye(je(arguments.length > 1 ? arguments[1] : void 0, t.length)),
          i = String(e);
        return _e ? _e.call(t, i, n) : t.slice(n, n + i.length) === i;
      }
    }
  );
  var qe,
    $e,
    et,
    tt = function (e) {
      if ('function' != typeof e)
        throw TypeError(String(e) + ' is not a function');
      return e;
    },
    nt = function (e, t, n) {
      if ((tt(e), void 0 === t)) return e;
      switch (n) {
        case 0:
          return function () {
            return e.call(t);
          };
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, i) {
            return e.call(t, n, i);
          };
        case 3:
          return function (n, i, r) {
            return e.call(t, n, i, r);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    },
    it = Function.call,
    rt = function (e, t, n) {
      return nt(it, l[e].prototype[t], n);
    },
    ot =
      (rt('String', 'startsWith'),
      function (e) {
        return function (t, n) {
          var i,
            r,
            o = String(F(t)),
            c = Ie(n),
            s = o.length;
          return c < 0 || c >= s
            ? e
              ? ''
              : void 0
            : (i = o.charCodeAt(c)) < 55296 ||
              i > 56319 ||
              c + 1 === s ||
              (r = o.charCodeAt(c + 1)) < 56320 ||
              r > 57343
            ? e
              ? o.charAt(c)
              : i
            : e
            ? o.slice(c, c + 2)
            : r - 56320 + ((i - 55296) << 10) + 65536;
        };
      }),
    ct = { codeAt: ot(!1), charAt: ot(!0) },
    st = function (e) {
      return Object(F(e));
    },
    at = !d(function () {
      function e() {}
      return (
        (e.prototype.constructor = null),
        Object.getPrototypeOf(new e()) !== e.prototype
      );
    }),
    ut = M('IE_PROTO'),
    lt = Object.prototype,
    dt = at
      ? Object.getPrototypeOf
      : function (e) {
          return (
            (e = st(e)),
            S(e, ut)
              ? e[ut]
              : 'function' == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? lt
              : null
          );
        },
    gt = Ye('iterator'),
    It = !1;
  [].keys &&
    ('next' in (et = [].keys())
      ? ($e = dt(dt(et))) !== Object.prototype && (qe = $e)
      : (It = !0)),
    null == qe && (qe = {}),
    S(qe, gt) ||
      W(qe, gt, function () {
        return this;
      });
  var ft,
    yt = { IteratorPrototype: qe, BUGGY_SAFARI_ITERATORS: It },
    pt =
      Object.keys ||
      function (e) {
        return Fe(e, Ue);
      },
    ht = g
      ? Object.defineProperties
      : function (e, t) {
          Q(e);
          for (var n, i = pt(t), r = i.length, o = 0; r > o; )
            L.f(e, (n = i[o++]), t[n]);
          return e;
        },
    bt = le('document', 'documentElement'),
    mt = M('IE_PROTO'),
    Bt = function () {},
    Ft = function (e) {
      return '<script>' + e + '</script>';
    },
    Ut = function () {
      try {
        ft = document.domain && new ActiveXObject('htmlfile');
      } catch (e) {}
      var e, t;
      Ut = ft
        ? (function (e) {
            e.write(Ft('')), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          })(ft)
        : (((t = w('iframe')).style.display = 'none'),
          bt.appendChild(t),
          (t.src = String('javascript:')),
          (e = t.contentWindow.document).open(),
          e.write(Ft('document.F=Object')),
          e.close(),
          e.F);
      for (var n = Ue.length; n--; ) delete Ut.prototype[Ue[n]];
      return Ut();
    };
  q[mt] = !0;
  var Vt =
      Object.create ||
      function (e, t) {
        var n;
        return (
          null !== e
            ? ((Bt.prototype = Q(e)),
              (n = new Bt()),
              (Bt.prototype = null),
              (n[mt] = e))
            : (n = Ut()),
          void 0 === t ? n : ht(n, t)
        );
      },
    vt = L.f,
    Ct = Ye('toStringTag'),
    St = function (e, t, n) {
      e &&
        !S((e = n ? e : e.prototype), Ct) &&
        vt(e, Ct, { configurable: !0, value: t });
    },
    Zt = {},
    Xt = yt.IteratorPrototype,
    wt = function () {
      return this;
    },
    Gt =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function () {
            var e,
              t = !1,
              n = {};
            try {
              (e = Object.getOwnPropertyDescriptor(
                Object.prototype,
                '__proto__'
              ).set).call(n, []),
                (t = n instanceof Array);
            } catch (e) {}
            return function (n, i) {
              return (
                Q(n),
                (function (e) {
                  if (!V(e) && null !== e)
                    throw TypeError(
                      "Can't set " + String(e) + ' as a prototype'
                    );
                })(i),
                t ? e.call(n, i) : (n.__proto__ = i),
                n
              );
            };
          })()
        : void 0),
    Rt = yt.IteratorPrototype,
    At = yt.BUGGY_SAFARI_ITERATORS,
    Qt = Ye('iterator'),
    xt = function () {
      return this;
    },
    Lt = function (e, t, n, i, r, o, c) {
      !(function (e, t, n) {
        var i = t + ' Iterator';
        (e.prototype = Vt(Xt, { next: p(1, n) })), St(e, i, !1), (Zt[i] = wt);
      })(n, t, i);
      var s,
        a,
        u,
        l = function (e) {
          if (e === r && y) return y;
          if (!At && e in I) return I[e];
          switch (e) {
            case 'keys':
            case 'values':
            case 'entries':
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this);
          };
        },
        d = t + ' Iterator',
        g = !1,
        I = e.prototype,
        f = I[Qt] || I['@@iterator'] || (r && I[r]),
        y = (!At && f) || l(r),
        h = ('Array' == t && I.entries) || f;
      if (
        (h &&
          ((s = dt(h.call(new e()))),
          Rt !== Object.prototype &&
            s.next &&
            (dt(s) !== Rt &&
              (Gt ? Gt(s, Rt) : 'function' != typeof s[Qt] && W(s, Qt, xt)),
            St(s, d, !0))),
        'values' == r &&
          f &&
          'values' !== f.name &&
          ((g = !0),
          (y = function () {
            return f.call(this);
          })),
        I[Qt] !== y && W(I, Qt, y),
        (Zt[t] = y),
        r)
      )
        if (
          ((a = {
            values: l('values'),
            keys: o ? y : l('keys'),
            entries: l('entries')
          }),
          c)
        )
          for (u in a) (At || g || !(u in I)) && se(I, u, a[u]);
        else We({ target: t, proto: !0, forced: At || g }, a);
      return a;
    },
    Wt = ct.charAt,
    Jt = ce.set,
    Ht = ce.getterFor('String Iterator');
  Lt(
    String,
    'String',
    function (e) {
      Jt(this, { type: 'String Iterator', string: String(e), index: 0 });
    },
    function () {
      var e,
        t = Ht(this),
        n = t.string,
        i = t.index;
      return i >= n.length
        ? { value: void 0, done: !0 }
        : ((e = Wt(n, i)), (t.index += e.length), { value: e, done: !1 });
    }
  );
  var kt = function (e, t, n, i) {
      try {
        return i ? t(Q(n)[0], n[1]) : t(n);
      } catch (t) {
        var r = e.return;
        throw (void 0 !== r && Q(r.call(e)), t);
      }
    },
    Et = Ye('iterator'),
    Tt = Array.prototype,
    Yt = function (e) {
      return void 0 !== e && (Zt.Array === e || Tt[Et] === e);
    },
    Nt = function (e, t, n) {
      var i = v(t);
      i in e ? L.f(e, i, p(0, n)) : (e[i] = n);
    },
    Kt = {};
  Kt[Ye('toStringTag')] = 'z';
  var Ot = '[object z]' === String(Kt),
    Dt = Ye('toStringTag'),
    zt =
      'Arguments' ==
      b(
        (function () {
          return arguments;
        })()
      ),
    _t = Ot
      ? b
      : function (e) {
          var t, n, i;
          return void 0 === e
            ? 'Undefined'
            : null === e
            ? 'Null'
            : 'string' ==
              typeof (n = (function (e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = Object(e)), Dt))
            ? n
            : zt
            ? b(t)
            : 'Object' == (i = b(t)) && 'function' == typeof t.callee
            ? 'Arguments'
            : i;
        },
    jt = Ye('iterator'),
    Pt = function (e) {
      if (null != e) return e[jt] || e['@@iterator'] || Zt[_t(e)];
    },
    Mt = Ye('iterator'),
    qt = !1;
  try {
    var $t = 0,
      en = {
        next: function () {
          return { done: !!$t++ };
        },
        return: function () {
          qt = !0;
        }
      };
    (en[Mt] = function () {
      return this;
    }),
      Array.from(en, function () {
        throw 2;
      });
  } catch (e) {}
  var tn = function (e, t) {
      if (!t && !qt) return !1;
      var n = !1;
      try {
        var i = {};
        (i[Mt] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            }
          };
        }),
          e(i);
      } catch (e) {}
      return n;
    },
    nn = !tn(function (e) {
      Array.from(e);
    });
  We(
    { target: 'Array', stat: !0, forced: nn },
    {
      from: function (e) {
        var t,
          n,
          i,
          r,
          o,
          c,
          s = st(e),
          a = 'function' == typeof this ? this : Array,
          u = arguments.length,
          l = u > 1 ? arguments[1] : void 0,
          d = void 0 !== l,
          g = Pt(s),
          I = 0;
        if (
          (d && (l = nt(l, u > 2 ? arguments[2] : void 0, 2)),
          null == g || (a == Array && Yt(g)))
        )
          for (n = new a((t = ye(s.length))); t > I; I++)
            (c = d ? l(s[I], I) : s[I]), Nt(n, I, c);
        else
          for (
            o = (r = g.call(s)).next, n = new a();
            !(i = o.call(r)).done;
            I++
          )
            (c = d ? kt(r, l, [i.value, I], !0) : i.value), Nt(n, I, c);
        return (n.length = I), n;
      }
    }
  );
  ae.Array.from;
  var rn,
    on = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView,
    cn = L.f,
    sn = l.Int8Array,
    an = sn && sn.prototype,
    un = l.Uint8ClampedArray,
    ln = un && un.prototype,
    dn = sn && dt(sn),
    gn = an && dt(an),
    In = Object.prototype,
    fn = In.isPrototypeOf,
    yn = Ye('toStringTag'),
    pn = j('TYPED_ARRAY_TAG'),
    hn = on && !!Gt && 'Opera' !== _t(l.opera),
    bn = {
      Int8Array: 1,
      Uint8Array: 1,
      Uint8ClampedArray: 1,
      Int16Array: 2,
      Uint16Array: 2,
      Int32Array: 4,
      Uint32Array: 4,
      Float32Array: 4,
      Float64Array: 8
    },
    mn = function (e) {
      return V(e) && S(bn, _t(e));
    };
  for (rn in bn) l[rn] || (hn = !1);
  if (
    (!hn || 'function' != typeof dn || dn === Function.prototype) &&
    ((dn = function () {
      throw TypeError('Incorrect invocation');
    }),
    hn)
  )
    for (rn in bn) l[rn] && Gt(l[rn], dn);
  if ((!hn || !gn || gn === In) && ((gn = dn.prototype), hn))
    for (rn in bn) l[rn] && Gt(l[rn].prototype, gn);
  if ((hn && dt(ln) !== gn && Gt(ln, gn), g && !S(gn, yn)))
    for (rn in (!0,
    cn(gn, yn, {
      get: function () {
        return V(this) ? this[pn] : void 0;
      }
    }),
    bn))
      l[rn] && W(l[rn], pn, rn);
  var Bn = function (e) {
      if (mn(e)) return e;
      throw TypeError('Target is not a typed array');
    },
    Fn = function (e) {
      if (Gt) {
        if (fn.call(dn, e)) return e;
      } else
        for (var t in bn)
          if (S(bn, rn)) {
            var n = l[t];
            if (n && (e === n || fn.call(n, e))) return e;
          }
      throw TypeError('Target is not a typed array constructor');
    },
    Un = function (e, t, n) {
      if (g) {
        if (n)
          for (var i in bn) {
            var r = l[i];
            r && S(r.prototype, e) && delete r.prototype[e];
          }
        (gn[e] && !n) || se(gn, e, n ? t : (hn && an[e]) || t);
      }
    },
    Vn = Ye('species'),
    vn = Bn,
    Cn = Fn,
    Sn = [].slice;
  Un(
    'slice',
    function (e, t) {
      for (
        var n = Sn.call(vn(this), e, t),
          i = (function (e, t) {
            var n,
              i = Q(e).constructor;
            return void 0 === i || null == (n = Q(i)[Vn]) ? t : tt(n);
          })(this, this.constructor),
          r = 0,
          o = n.length,
          c = new (Cn(i))(o);
        o > r;

      )
        c[r] = n[r++];
      return c;
    },
    d(function () {
      new Int8Array(1).slice();
    })
  );
  var Zn = Ye('unscopables'),
    Xn = Array.prototype;
  null == Xn[Zn] && L.f(Xn, Zn, { configurable: !0, value: Vt(null) });
  var wn = function (e) {
      Xn[Zn][e] = !0;
    },
    Gn = Object.defineProperty,
    Rn = {},
    An = function (e) {
      throw e;
    },
    Qn = me.includes,
    xn = (function (e, t) {
      if (S(Rn, e)) return Rn[e];
      t || (t = {});
      var n = [][e],
        i = !!S(t, 'ACCESSORS') && t.ACCESSORS,
        r = S(t, 0) ? t[0] : An,
        o = S(t, 1) ? t[1] : void 0;
      return (Rn[e] =
        !!n &&
        !d(function () {
          if (i && !g) return !0;
          var e = { length: -1 };
          i ? Gn(e, 1, { enumerable: !0, get: An }) : (e[1] = 1),
            n.call(e, r, o);
        }));
    })('indexOf', { ACCESSORS: !0, 1: 0 });
  We(
    { target: 'Array', proto: !0, forced: !xn },
    {
      includes: function (e) {
        return Qn(this, e, arguments.length > 1 ? arguments[1] : void 0);
      }
    }
  ),
    wn('includes');
  rt('Array', 'includes');
  We(
    { target: 'String', proto: !0, forced: !De('includes') },
    {
      includes: function (e) {
        return !!~String(F(this)).indexOf(
          Ke(e),
          arguments.length > 1 ? arguments[1] : void 0
        );
      }
    }
  );
  rt('String', 'includes');
  var Ln = !d(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
    Wn = a(function (e) {
      var t = L.f,
        n = j('meta'),
        i = 0,
        r =
          Object.isExtensible ||
          function () {
            return !0;
          },
        o = function (e) {
          t(e, n, { value: { objectID: 'O' + ++i, weakData: {} } });
        },
        c = (e.exports = {
          REQUIRED: !1,
          fastKey: function (e, t) {
            if (!V(e))
              return 'symbol' == typeof e
                ? e
                : ('string' == typeof e ? 'S' : 'P') + e;
            if (!S(e, n)) {
              if (!r(e)) return 'F';
              if (!t) return 'E';
              o(e);
            }
            return e[n].objectID;
          },
          getWeakData: function (e, t) {
            if (!S(e, n)) {
              if (!r(e)) return !0;
              if (!t) return !1;
              o(e);
            }
            return e[n].weakData;
          },
          onFreeze: function (e) {
            return Ln && c.REQUIRED && r(e) && !S(e, n) && o(e), e;
          }
        });
      q[n] = !0;
    }),
    Jn =
      (Wn.REQUIRED,
      Wn.fastKey,
      Wn.getWeakData,
      Wn.onFreeze,
      a(function (e) {
        var t = function (e, t) {
          (this.stopped = e), (this.result = t);
        };
        (e.exports = function (e, n, i, r, o) {
          var c,
            s,
            a,
            u,
            l,
            d,
            g,
            I = nt(n, i, r ? 2 : 1);
          if (o) c = e;
          else {
            if ('function' != typeof (s = Pt(e)))
              throw TypeError('Target is not iterable');
            if (Yt(s)) {
              for (a = 0, u = ye(e.length); u > a; a++)
                if (
                  (l = r ? I(Q((g = e[a]))[0], g[1]) : I(e[a])) &&
                  l instanceof t
                )
                  return l;
              return new t(!1);
            }
            c = s.call(e);
          }
          for (d = c.next; !(g = d.call(c)).done; )
            if (
              'object' == typeof (l = kt(c, I, g.value, r)) &&
              l &&
              l instanceof t
            )
              return l;
          return new t(!1);
        }).stop = function (e) {
          return new t(!0, e);
        };
      })),
    Hn = function (e, t, n) {
      if (!(e instanceof t))
        throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
      return e;
    },
    kn = function (e, t, n) {
      for (var i in t) se(e, i, t[i], n);
      return e;
    },
    En = Ye('species'),
    Tn = L.f,
    Yn = Wn.fastKey,
    Nn = ce.set,
    Kn = ce.getterFor,
    On =
      ((function (e, t, n) {
        var i = -1 !== e.indexOf('Map'),
          r = -1 !== e.indexOf('Weak'),
          o = i ? 'set' : 'add',
          c = l[e],
          s = c && c.prototype,
          a = c,
          u = {},
          g = function (e) {
            var t = s[e];
            se(
              s,
              e,
              'add' == e
                ? function (e) {
                    return t.call(this, 0 === e ? 0 : e), this;
                  }
                : 'delete' == e
                ? function (e) {
                    return !(r && !V(e)) && t.call(this, 0 === e ? 0 : e);
                  }
                : 'get' == e
                ? function (e) {
                    return r && !V(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                  }
                : 'has' == e
                ? function (e) {
                    return !(r && !V(e)) && t.call(this, 0 === e ? 0 : e);
                  }
                : function (e, n) {
                    return t.call(this, 0 === e ? 0 : e, n), this;
                  }
            );
          };
        if (
          xe(
            e,
            'function' != typeof c ||
              !(
                r ||
                (s.forEach &&
                  !d(function () {
                    new c().entries().next();
                  }))
              )
          )
        )
          (a = n.getConstructor(t, e, i, o)), (Wn.REQUIRED = !0);
        else if (xe(e, !0)) {
          var I = new a(),
            f = I[o](r ? {} : -0, 1) != I,
            y = d(function () {
              I.has(1);
            }),
            p = tn(function (e) {
              new c(e);
            }),
            h =
              !r &&
              d(function () {
                for (var e = new c(), t = 5; t--; ) e[o](t, t);
                return !e.has(-0);
              });
          p ||
            (((a = t(function (t, n) {
              Hn(t, a, e);
              var r = (function (e, t, n) {
                var i, r;
                return (
                  Gt &&
                    'function' == typeof (i = t.constructor) &&
                    i !== n &&
                    V((r = i.prototype)) &&
                    r !== n.prototype &&
                    Gt(e, r),
                  e
                );
              })(new c(), t, a);
              return null != n && Jn(n, r[o], r, i), r;
            })).prototype = s),
            (s.constructor = a)),
            (y || h) && (g('delete'), g('has'), i && g('get')),
            (h || f) && g(o),
            r && s.clear && delete s.clear;
        }
        (u[e] = a),
          We({ global: !0, forced: a != c }, u),
          St(a, e),
          r || n.setStrong(a, e, i);
      })(
        'Set',
        function (e) {
          return function () {
            return e(this, arguments.length ? arguments[0] : void 0);
          };
        },
        {
          getConstructor: function (e, t, n, i) {
            var r = e(function (e, o) {
                Hn(e, r, t),
                  Nn(e, {
                    type: t,
                    index: Vt(null),
                    first: void 0,
                    last: void 0,
                    size: 0
                  }),
                  g || (e.size = 0),
                  null != o && Jn(o, e[i], e, n);
              }),
              o = Kn(t),
              c = function (e, t, n) {
                var i,
                  r,
                  c = o(e),
                  a = s(e, t);
                return (
                  a
                    ? (a.value = n)
                    : ((c.last = a = {
                        index: (r = Yn(t, !0)),
                        key: t,
                        value: n,
                        previous: (i = c.last),
                        next: void 0,
                        removed: !1
                      }),
                      c.first || (c.first = a),
                      i && (i.next = a),
                      g ? c.size++ : e.size++,
                      'F' !== r && (c.index[r] = a)),
                  e
                );
              },
              s = function (e, t) {
                var n,
                  i = o(e),
                  r = Yn(t);
                if ('F' !== r) return i.index[r];
                for (n = i.first; n; n = n.next) if (n.key == t) return n;
              };
            return (
              kn(r.prototype, {
                clear: function () {
                  for (var e = o(this), t = e.index, n = e.first; n; )
                    (n.removed = !0),
                      n.previous && (n.previous = n.previous.next = void 0),
                      delete t[n.index],
                      (n = n.next);
                  (e.first = e.last = void 0),
                    g ? (e.size = 0) : (this.size = 0);
                },
                delete: function (e) {
                  var t = o(this),
                    n = s(this, e);
                  if (n) {
                    var i = n.next,
                      r = n.previous;
                    delete t.index[n.index],
                      (n.removed = !0),
                      r && (r.next = i),
                      i && (i.previous = r),
                      t.first == n && (t.first = i),
                      t.last == n && (t.last = r),
                      g ? t.size-- : this.size--;
                  }
                  return !!n;
                },
                forEach: function (e) {
                  for (
                    var t,
                      n = o(this),
                      i = nt(
                        e,
                        arguments.length > 1 ? arguments[1] : void 0,
                        3
                      );
                    (t = t ? t.next : n.first);

                  )
                    for (i(t.value, t.key, this); t && t.removed; )
                      t = t.previous;
                },
                has: function (e) {
                  return !!s(this, e);
                }
              }),
              kn(
                r.prototype,
                n
                  ? {
                      get: function (e) {
                        var t = s(this, e);
                        return t && t.value;
                      },
                      set: function (e, t) {
                        return c(this, 0 === e ? 0 : e, t);
                      }
                    }
                  : {
                      add: function (e) {
                        return c(this, (e = 0 === e ? 0 : e), e);
                      }
                    }
              ),
              g &&
                Tn(r.prototype, 'size', {
                  get: function () {
                    return o(this).size;
                  }
                }),
              r
            );
          },
          setStrong: function (e, t, n) {
            var i = t + ' Iterator',
              r = Kn(t),
              o = Kn(i);
            Lt(
              e,
              t,
              function (e, t) {
                Nn(this, {
                  type: i,
                  target: e,
                  state: r(e),
                  kind: t,
                  last: void 0
                });
              },
              function () {
                for (var e = o(this), t = e.kind, n = e.last; n && n.removed; )
                  n = n.previous;
                return e.target && (e.last = n = n ? n.next : e.state.first)
                  ? 'keys' == t
                    ? { value: n.key, done: !1 }
                    : 'values' == t
                    ? { value: n.value, done: !1 }
                    : { value: [n.key, n.value], done: !1 }
                  : ((e.target = void 0), { value: void 0, done: !0 });
              },
              n ? 'entries' : 'values',
              !n,
              !0
            ),
              (function (e) {
                var t = le(e),
                  n = L.f;
                g &&
                  t &&
                  !t[En] &&
                  n(t, En, {
                    configurable: !0,
                    get: function () {
                      return this;
                    }
                  });
              })(t);
          }
        }
      ),
      Ot
        ? {}.toString
        : function () {
            return '[object ' + _t(this) + ']';
          });
  Ot || se(Object.prototype, 'toString', On, { unsafe: !0 });
  var Dn = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    },
    zn = ce.set,
    _n = ce.getterFor('Array Iterator'),
    jn = Lt(
      Array,
      'Array',
      function (e, t) {
        zn(this, { type: 'Array Iterator', target: U(e), index: 0, kind: t });
      },
      function () {
        var e = _n(this),
          t = e.target,
          n = e.kind,
          i = e.index++;
        return !t || i >= t.length
          ? ((e.target = void 0), { value: void 0, done: !0 })
          : 'keys' == n
          ? { value: i, done: !1 }
          : 'values' == n
          ? { value: t[i], done: !1 }
          : { value: [i, t[i]], done: !1 };
      },
      'values'
    );
  (Zt.Arguments = Zt.Array), wn('keys'), wn('values'), wn('entries');
  var Pn = Ye('iterator'),
    Mn = Ye('toStringTag'),
    qn = jn.values;
  for (var $n in Dn) {
    var ei = l[$n],
      ti = ei && ei.prototype;
    if (ti) {
      if (ti[Pn] !== qn)
        try {
          W(ti, Pn, qn);
        } catch (e) {
          ti[Pn] = qn;
        }
      if ((ti[Mn] || W(ti, Mn, $n), Dn[$n]))
        for (var ni in jn)
          if (ti[ni] !== jn[ni])
            try {
              W(ti, ni, jn[ni]);
            } catch (e) {
              ti[ni] = jn[ni];
            }
    }
  }
  ae.Set;
  function ii(e) {
    var t = this.constructor;
    return this.then(
      function (n) {
        return t.resolve(e()).then(function () {
          return n;
        });
      },
      function (n) {
        return t.resolve(e()).then(function () {
          return t.reject(n);
        });
      }
    );
  }
  var ri = setTimeout;
  function oi(e) {
    return Boolean(e && void 0 !== e.length);
  }
  function ci() {}
  function si(e) {
    if (!(this instanceof si))
      throw new TypeError('Promises must be constructed via new');
    if ('function' != typeof e) throw new TypeError('not a function');
    (this._state = 0),
      (this._handled = !1),
      (this._value = void 0),
      (this._deferreds = []),
      Ii(e, this);
  }
  function ai(e, t) {
    for (; 3 === e._state; ) e = e._value;
    0 !== e._state
      ? ((e._handled = !0),
        si._immediateFn(function () {
          var n = 1 === e._state ? t.onFulfilled : t.onRejected;
          if (null !== n) {
            var i;
            try {
              i = n(e._value);
            } catch (e) {
              return void li(t.promise, e);
            }
            ui(t.promise, i);
          } else (1 === e._state ? ui : li)(t.promise, e._value);
        }))
      : e._deferreds.push(t);
  }
  function ui(e, t) {
    try {
      if (t === e)
        throw new TypeError('A promise cannot be resolved with itself.');
      if (t && ('object' == typeof t || 'function' == typeof t)) {
        var n = t.then;
        if (t instanceof si) return (e._state = 3), (e._value = t), void di(e);
        if ('function' == typeof n)
          return void Ii(
            ((i = n),
            (r = t),
            function () {
              i.apply(r, arguments);
            }),
            e
          );
      }
      (e._state = 1), (e._value = t), di(e);
    } catch (t) {
      li(e, t);
    }
    var i, r;
  }
  function li(e, t) {
    (e._state = 2), (e._value = t), di(e);
  }
  function di(e) {
    2 === e._state &&
      0 === e._deferreds.length &&
      si._immediateFn(function () {
        e._handled || si._unhandledRejectionFn(e._value);
      });
    for (var t = 0, n = e._deferreds.length; t < n; t++) ai(e, e._deferreds[t]);
    e._deferreds = null;
  }
  function gi(e, t, n) {
    (this.onFulfilled = 'function' == typeof e ? e : null),
      (this.onRejected = 'function' == typeof t ? t : null),
      (this.promise = n);
  }
  function Ii(e, t) {
    var n = !1;
    try {
      e(
        function (e) {
          n || ((n = !0), ui(t, e));
        },
        function (e) {
          n || ((n = !0), li(t, e));
        }
      );
    } catch (e) {
      if (n) return;
      (n = !0), li(t, e);
    }
  }
  (si.prototype.catch = function (e) {
    return this.then(null, e);
  }),
    (si.prototype.then = function (e, t) {
      var n = new this.constructor(ci);
      return ai(this, new gi(e, t, n)), n;
    }),
    (si.prototype.finally = ii),
    (si.all = function (e) {
      return new si(function (t, n) {
        if (!oi(e)) return n(new TypeError('Promise.all accepts an array'));
        var i = Array.prototype.slice.call(e);
        if (0 === i.length) return t([]);
        var r = i.length;
        function o(e, c) {
          try {
            if (c && ('object' == typeof c || 'function' == typeof c)) {
              var s = c.then;
              if ('function' == typeof s)
                return void s.call(
                  c,
                  function (t) {
                    o(e, t);
                  },
                  n
                );
            }
            (i[e] = c), 0 == --r && t(i);
          } catch (e) {
            n(e);
          }
        }
        for (var c = 0; c < i.length; c++) o(c, i[c]);
      });
    }),
    (si.resolve = function (e) {
      return e && 'object' == typeof e && e.constructor === si
        ? e
        : new si(function (t) {
            t(e);
          });
    }),
    (si.reject = function (e) {
      return new si(function (t, n) {
        n(e);
      });
    }),
    (si.race = function (e) {
      return new si(function (t, n) {
        if (!oi(e)) return n(new TypeError('Promise.race accepts an array'));
        for (var i = 0, r = e.length; i < r; i++) si.resolve(e[i]).then(t, n);
      });
    }),
    (si._immediateFn =
      ('function' == typeof setImmediate &&
        function (e) {
          setImmediate(e);
        }) ||
      function (e) {
        ri(e, 0);
      }),
    (si._unhandledRejectionFn = function (e) {
      'undefined' != typeof console &&
        console &&
        console.warn('Possible Unhandled Promise Rejection:', e);
    });
  var fi = (function () {
    if ('undefined' != typeof self) return self;
    if ('undefined' != typeof window) return window;
    if ('undefined' != typeof global) return global;
    throw new Error('unable to locate global object');
  })();
  'Promise' in fi
    ? fi.Promise.prototype.finally || (fi.Promise.prototype.finally = ii)
    : (fi.Promise = si),
    (function (e) {
      function t() {}
      function n(e, t) {
        if (
          ((e = void 0 === e ? 'utf-8' : e),
          (t = void 0 === t ? { fatal: !1 } : t),
          -1 === r.indexOf(e.toLowerCase()))
        )
          throw new RangeError(
            "Failed to construct 'TextDecoder': The encoding label provided ('" +
              e +
              "') is invalid."
          );
        if (t.fatal)
          throw Error(
            "Failed to construct 'TextDecoder': the 'fatal' option is unsupported."
          );
      }
      function i(e) {
        for (
          var t = 0,
            n = Math.min(65536, e.length + 1),
            i = new Uint16Array(n),
            r = [],
            o = 0;
          ;

        ) {
          var c = t < e.length;
          if (!c || o >= n - 1) {
            if ((r.push(String.fromCharCode.apply(null, i.subarray(0, o))), !c))
              return r.join('');
            (e = e.subarray(t)), (o = t = 0);
          }
          if (0 == (128 & (c = e[t++]))) i[o++] = c;
          else if (192 == (224 & c)) {
            var s = 63 & e[t++];
            i[o++] = ((31 & c) << 6) | s;
          } else if (224 == (240 & c)) {
            s = 63 & e[t++];
            var a = 63 & e[t++];
            i[o++] = ((31 & c) << 12) | (s << 6) | a;
          } else if (240 == (248 & c)) {
            65535 <
              (c =
                ((7 & c) << 18) |
                ((s = 63 & e[t++]) << 12) |
                ((a = 63 & e[t++]) << 6) |
                (63 & e[t++])) &&
              ((c -= 65536),
              (i[o++] = ((c >>> 10) & 1023) | 55296),
              (c = 56320 | (1023 & c))),
              (i[o++] = c);
          }
        }
      }
      if (e.TextEncoder && e.TextDecoder) return !1;
      var r = ['utf-8', 'utf8', 'unicode-1-1-utf-8'];
      Object.defineProperty(t.prototype, 'encoding', { value: 'utf-8' }),
        (t.prototype.encode = function (e, t) {
          if ((t = void 0 === t ? { stream: !1 } : t).stream)
            throw Error(
              "Failed to encode: the 'stream' option is unsupported."
            );
          t = 0;
          for (
            var n = e.length,
              i = 0,
              r = Math.max(32, n + (n >>> 1) + 7),
              o = new Uint8Array((r >>> 3) << 3);
            t < n;

          ) {
            var c = e.charCodeAt(t++);
            if (55296 <= c && 56319 >= c) {
              if (t < n) {
                var s = e.charCodeAt(t);
                56320 == (64512 & s) &&
                  (++t, (c = ((1023 & c) << 10) + (1023 & s) + 65536));
              }
              if (55296 <= c && 56319 >= c) continue;
            }
            if (
              (i + 4 > o.length &&
                ((r += 8),
                (r = ((r *= 1 + (t / e.length) * 2) >>> 3) << 3),
                (s = new Uint8Array(r)).set(o),
                (o = s)),
              0 == (4294967168 & c))
            )
              o[i++] = c;
            else {
              if (0 == (4294965248 & c)) o[i++] = ((c >>> 6) & 31) | 192;
              else if (0 == (4294901760 & c))
                (o[i++] = ((c >>> 12) & 15) | 224),
                  (o[i++] = ((c >>> 6) & 63) | 128);
              else {
                if (0 != (4292870144 & c)) continue;
                (o[i++] = ((c >>> 18) & 7) | 240),
                  (o[i++] = ((c >>> 12) & 63) | 128),
                  (o[i++] = ((c >>> 6) & 63) | 128);
              }
              o[i++] = (63 & c) | 128;
            }
          }
          return o.slice ? o.slice(0, i) : o.subarray(0, i);
        }),
        Object.defineProperty(n.prototype, 'encoding', { value: 'utf-8' }),
        Object.defineProperty(n.prototype, 'fatal', { value: !1 }),
        Object.defineProperty(n.prototype, 'ignoreBOM', { value: !1 });
      var o = i;
      'function' == typeof Buffer && Buffer.from
        ? (o = function (e) {
            return Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString(
              'utf-8'
            );
          })
        : 'function' == typeof Blob &&
          'function' == typeof URL &&
          'function' == typeof URL.createObjectURL &&
          (o = function (e) {
            var t = URL.createObjectURL(
              new Blob([e], { type: 'text/plain;charset=UTF-8' })
            );
            try {
              var n = new XMLHttpRequest();
              return n.open('GET', t, !1), n.send(), n.responseText;
            } catch (t) {
              return i(e);
            } finally {
              URL.revokeObjectURL(t);
            }
          }),
        (n.prototype.decode = function (e, t) {
          if ((t = void 0 === t ? { stream: !1 } : t).stream)
            throw Error(
              "Failed to decode: the 'stream' option is unsupported."
            );
          return (
            (e =
              e instanceof Uint8Array
                ? e
                : e.buffer instanceof ArrayBuffer
                ? new Uint8Array(e.buffer)
                : new Uint8Array(e)),
            o(e)
          );
        }),
        (e.TextEncoder = t),
        (e.TextDecoder = n);
    })('undefined' != typeof window ? window : c),
    (function () {
      function e(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function t(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function n(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      }
      function i(e) {
        return (i = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function r(e, t) {
        return (r =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function o(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function s(e, t) {
        return !t || ('object' != typeof t && 'function' != typeof t)
          ? o(e)
          : t;
      }
      function a(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = i(e);
          if (t) {
            var o = i(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return s(this, n);
        };
      }
      function u(e, t, n) {
        return (u =
          'undefined' != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, n) {
                var r = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = i(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      var l = (function () {
          function t() {
            e(this, t),
              Object.defineProperty(this, 'listeners', {
                value: {},
                writable: !0,
                configurable: !0
              });
          }
          return (
            n(t, [
              {
                key: 'addEventListener',
                value: function (e, t) {
                  e in this.listeners || (this.listeners[e] = []),
                    this.listeners[e].push(t);
                }
              },
              {
                key: 'removeEventListener',
                value: function (e, t) {
                  if (e in this.listeners)
                    for (
                      var n = this.listeners[e], i = 0, r = n.length;
                      i < r;
                      i++
                    )
                      if (n[i] === t) return void n.splice(i, 1);
                }
              },
              {
                key: 'dispatchEvent',
                value: function (e) {
                  var t = this;
                  if (e.type in this.listeners) {
                    for (
                      var n = function (n) {
                          setTimeout(function () {
                            return n.call(t, e);
                          });
                        },
                        i = this.listeners[e.type],
                        r = 0,
                        o = i.length;
                      r < o;
                      r++
                    )
                      n(i[r]);
                    return !e.defaultPrevented;
                  }
                }
              }
            ]),
            t
          );
        })(),
        d = (function (t) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && r(e, t);
          })(s, t);
          var c = a(s);
          function s() {
            var t;
            return (
              e(this, s),
              (t = c.call(this)).listeners || l.call(o(t)),
              Object.defineProperty(o(t), 'aborted', {
                value: !1,
                writable: !0,
                configurable: !0
              }),
              Object.defineProperty(o(t), 'onabort', {
                value: null,
                writable: !0,
                configurable: !0
              }),
              t
            );
          }
          return (
            n(s, [
              {
                key: 'toString',
                value: function () {
                  return '[object AbortSignal]';
                }
              },
              {
                key: 'dispatchEvent',
                value: function (e) {
                  'abort' === e.type &&
                    ((this.aborted = !0),
                    'function' == typeof this.onabort &&
                      this.onabort.call(this, e)),
                    u(i(s.prototype), 'dispatchEvent', this).call(this, e);
                }
              }
            ]),
            s
          );
        })(l),
        g = (function () {
          function t() {
            e(this, t),
              Object.defineProperty(this, 'signal', {
                value: new d(),
                writable: !0,
                configurable: !0
              });
          }
          return (
            n(t, [
              {
                key: 'abort',
                value: function () {
                  var e;
                  try {
                    e = new Event('abort');
                  } catch (t) {
                    'undefined' != typeof document
                      ? document.createEvent
                        ? (e = document.createEvent('Event')).initEvent(
                            'abort',
                            !1,
                            !1
                          )
                        : ((e = document.createEventObject()).type = 'abort')
                      : (e = { type: 'abort', bubbles: !1, cancelable: !1 });
                  }
                  this.signal.dispatchEvent(e);
                }
              },
              {
                key: 'toString',
                value: function () {
                  return '[object AbortController]';
                }
              }
            ]),
            t
          );
        })();
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        ((g.prototype[Symbol.toStringTag] = 'AbortController'),
        (d.prototype[Symbol.toStringTag] = 'AbortSignal')),
        (function (e) {
          (function (e) {
            return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
              ? (console.log(
                  '__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill'
                ),
                !0)
              : ('function' == typeof e.Request &&
                  !e.Request.prototype.hasOwnProperty('signal')) ||
                  !e.AbortController;
          })(e) && ((e.AbortController = g), (e.AbortSignal = d));
        })('undefined' != typeof self ? self : c);
    })();
  var yi = a(function (e, t) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = (function () {
      function e() {
        var e = this;
        (this.locked = new Map()),
          (this.addToLocked = function (t, n) {
            var i = e.locked.get(t);
            void 0 === i
              ? void 0 === n
                ? e.locked.set(t, [])
                : e.locked.set(t, [n])
              : void 0 !== n && (i.unshift(n), e.locked.set(t, i));
          }),
          (this.isLocked = function (t) {
            return e.locked.has(t);
          }),
          (this.lock = function (t) {
            return new Promise(function (n, i) {
              e.isLocked(t) ? e.addToLocked(t, n) : (e.addToLocked(t), n());
            });
          }),
          (this.unlock = function (t) {
            var n = e.locked.get(t);
            if (void 0 !== n && 0 !== n.length) {
              var i = n.pop();
              e.locked.set(t, n), void 0 !== i && setTimeout(i, 0);
            } else e.locked.delete(t);
          });
      }
      return (
        (e.getInstance = function () {
          return void 0 === e.instance && (e.instance = new e()), e.instance;
        }),
        e
      );
    })();
    t.default = function () {
      return n.getInstance();
    };
  });
  s(yi);
  var pi = s(
    a(function (e, t) {
      var n =
          (c && c.__awaiter) ||
          function (e, t, n, i) {
            return new (n || (n = Promise))(function (r, o) {
              function c(e) {
                try {
                  a(i.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                try {
                  a(i.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function a(e) {
                e.done
                  ? r(e.value)
                  : new n(function (t) {
                      t(e.value);
                    }).then(c, s);
              }
              a((i = i.apply(e, t || [])).next());
            });
          },
        i =
          (c && c.__generator) ||
          function (e, t) {
            var n,
              i,
              r,
              o,
              c = {
                label: 0,
                sent: function () {
                  if (1 & r[0]) throw r[1];
                  return r[1];
                },
                trys: [],
                ops: []
              };
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              'function' == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function s(o) {
              return function (s) {
                return (function (o) {
                  if (n) throw new TypeError('Generator is already executing.');
                  for (; c; )
                    try {
                      if (
                        ((n = 1),
                        i &&
                          (r =
                            2 & o[0]
                              ? i.return
                              : o[0]
                              ? i.throw || ((r = i.return) && r.call(i), 0)
                              : i.next) &&
                          !(r = r.call(i, o[1])).done)
                      )
                        return r;
                      switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                        case 0:
                        case 1:
                          r = o;
                          break;
                        case 4:
                          return c.label++, { value: o[1], done: !1 };
                        case 5:
                          c.label++, (i = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = c.ops.pop()), c.trys.pop();
                          continue;
                        default:
                          if (
                            !((r = c.trys),
                            (r = r.length > 0 && r[r.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0]))
                          ) {
                            c = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!r || (o[1] > r[0] && o[1] < r[3]))
                          ) {
                            c.label = o[1];
                            break;
                          }
                          if (6 === o[0] && c.label < r[1]) {
                            (c.label = r[1]), (r = o);
                            break;
                          }
                          if (r && c.label < r[2]) {
                            (c.label = r[2]), c.ops.push(o);
                            break;
                          }
                          r[2] && c.ops.pop(), c.trys.pop();
                          continue;
                      }
                      o = t.call(e, c);
                    } catch (e) {
                      (o = [6, e]), (i = 0);
                    } finally {
                      n = r = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, s]);
              };
            }
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      function r(e) {
        return new Promise(function (t) {
          return setTimeout(t, e);
        });
      }
      function o(e) {
        for (
          var t =
              '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
            n = '',
            i = 0;
          i < e;
          i++
        ) {
          n += t[Math.floor(Math.random() * t.length)];
        }
        return n;
      }
      var s = (function () {
        function e() {
          (this.acquiredIatSet = new Set()),
            (this.id = Date.now().toString() + o(15)),
            (this.acquireLock = this.acquireLock.bind(this)),
            (this.releaseLock = this.releaseLock.bind(this)),
            (this.releaseLock__private__ = this.releaseLock__private__.bind(
              this
            )),
            (this.waitForSomethingToChange = this.waitForSomethingToChange.bind(
              this
            )),
            (this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(
              this
            )),
            void 0 === e.waiters && (e.waiters = []);
        }
        return (
          (e.prototype.acquireLock = function (t, c) {
            return (
              void 0 === c && (c = 5e3),
              n(this, void 0, void 0, function () {
                var n, s, a, u, l, d;
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (n = Date.now() + o(4)),
                        (s = Date.now() + c),
                        (a = 'browser-tabs-lock-key-' + t),
                        (u = window.localStorage),
                        (i.label = 1);
                    case 1:
                      return Date.now() < s ? [4, r(30)] : [3, 8];
                    case 2:
                      return (
                        i.sent(),
                        null !== u.getItem(a)
                          ? [3, 5]
                          : ((l = this.id + '-' + t + '-' + n),
                            [4, r(Math.floor(25 * Math.random()))])
                      );
                    case 3:
                      return (
                        i.sent(),
                        u.setItem(
                          a,
                          JSON.stringify({
                            id: this.id,
                            iat: n,
                            timeoutKey: l,
                            timeAcquired: Date.now(),
                            timeRefreshed: Date.now()
                          })
                        ),
                        [4, r(30)]
                      );
                    case 4:
                      return (
                        i.sent(),
                        null !== (d = u.getItem(a)) &&
                        (d = JSON.parse(d)).id === this.id &&
                        d.iat === n
                          ? (this.acquiredIatSet.add(n),
                            this.refreshLockWhileAcquired(a, n),
                            [2, !0])
                          : [3, 7]
                      );
                    case 5:
                      return (
                        e.lockCorrector(), [4, this.waitForSomethingToChange(s)]
                      );
                    case 6:
                      i.sent(), (i.label = 7);
                    case 7:
                      return (n = Date.now() + o(4)), [3, 1];
                    case 8:
                      return [2, !1];
                  }
                });
              })
            );
          }),
          (e.prototype.refreshLockWhileAcquired = function (e, t) {
            return n(this, void 0, void 0, function () {
              var r = this;
              return i(this, function (o) {
                return (
                  setTimeout(function () {
                    return n(r, void 0, void 0, function () {
                      var n, r;
                      return i(this, function (i) {
                        switch (i.label) {
                          case 0:
                            return [4, yi.default().lock(t)];
                          case 1:
                            return (
                              i.sent(),
                              this.acquiredIatSet.has(t)
                                ? ((n = window.localStorage),
                                  null === (r = n.getItem(e))
                                    ? (yi.default().unlock(t), [2])
                                    : (((r = JSON.parse(
                                        r
                                      )).timeRefreshed = Date.now()),
                                      n.setItem(e, JSON.stringify(r)),
                                      yi.default().unlock(t),
                                      this.refreshLockWhileAcquired(e, t),
                                      [2]))
                                : (yi.default().unlock(t), [2])
                            );
                        }
                      });
                    });
                  }, 1e3),
                  [2]
                );
              });
            });
          }),
          (e.prototype.waitForSomethingToChange = function (t) {
            return n(this, void 0, void 0, function () {
              return i(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [
                      4,
                      new Promise(function (n) {
                        var i = !1,
                          r = Date.now(),
                          o = !1;
                        function c() {
                          if (
                            (o ||
                              (window.removeEventListener('storage', c),
                              e.removeFromWaiting(c),
                              clearTimeout(s),
                              (o = !0)),
                            !i)
                          ) {
                            i = !0;
                            var t = 50 - (Date.now() - r);
                            t > 0 ? setTimeout(n, t) : n();
                          }
                        }
                        window.addEventListener('storage', c),
                          e.addToWaiting(c);
                        var s = setTimeout(c, Math.max(0, t - Date.now()));
                      })
                    ];
                  case 1:
                    return n.sent(), [2];
                }
              });
            });
          }),
          (e.addToWaiting = function (t) {
            this.removeFromWaiting(t),
              void 0 !== e.waiters && e.waiters.push(t);
          }),
          (e.removeFromWaiting = function (t) {
            void 0 !== e.waiters &&
              (e.waiters = e.waiters.filter(function (e) {
                return e !== t;
              }));
          }),
          (e.notifyWaiters = function () {
            void 0 !== e.waiters &&
              e.waiters.slice().forEach(function (e) {
                return e();
              });
          }),
          (e.prototype.releaseLock = function (e) {
            return n(this, void 0, void 0, function () {
              return i(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.releaseLock__private__(e)];
                  case 1:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (e.prototype.releaseLock__private__ = function (t) {
            return n(this, void 0, void 0, function () {
              var n, r, o;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (n = window.localStorage),
                      (r = 'browser-tabs-lock-key-' + t),
                      null === (o = n.getItem(r))
                        ? [2]
                        : (o = JSON.parse(o)).id !== this.id
                        ? [3, 2]
                        : [4, yi.default().lock(o.iat)]
                    );
                  case 1:
                    i.sent(),
                      this.acquiredIatSet.delete(o.iat),
                      n.removeItem(r),
                      yi.default().unlock(o.iat),
                      e.notifyWaiters(),
                      (i.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (e.lockCorrector = function () {
            for (
              var t = Date.now() - 5e3,
                n = window.localStorage,
                i = Object.keys(n),
                r = !1,
                o = 0;
              o < i.length;
              o++
            ) {
              var c = i[o];
              if (c.includes('browser-tabs-lock-key')) {
                var s = n.getItem(c);
                null !== s &&
                  ((void 0 === (s = JSON.parse(s)).timeRefreshed &&
                    s.timeAcquired < t) ||
                    (void 0 !== s.timeRefreshed && s.timeRefreshed < t)) &&
                  (n.removeItem(c), (r = !0));
              }
            }
            r && e.notifyWaiters();
          }),
          (e.waiters = void 0),
          e
        );
      })();
      t.default = s;
    })
  );
  var hi = { timeoutInSeconds: 60 },
    bi = [
      'login_required',
      'consent_required',
      'interaction_required',
      'account_selection_required',
      'access_denied'
    ],
    mi = (function (e) {
      function n(t, i) {
        var r = e.call(this, i) || this;
        return (
          (r.error = t),
          (r.error_description = i),
          Object.setPrototypeOf(r, n.prototype),
          r
        );
      }
      return (
        t(n, e),
        (n.fromPayload = function (e) {
          return new n(e.error, e.error_description);
        }),
        n
      );
    })(Error),
    Bi = (function (e) {
      function n(t, i, r, o) {
        void 0 === o && (o = null);
        var c = e.call(this, t, i) || this;
        return (
          (c.state = r),
          (c.appState = o),
          Object.setPrototypeOf(c, n.prototype),
          c
        );
      }
      return t(n, e), n;
    })(mi),
    Fi = (function (e) {
      function n() {
        var t = e.call(this, 'timeout', 'Timeout') || this;
        return Object.setPrototypeOf(t, n.prototype), t;
      }
      return t(n, e), n;
    })(mi),
    Ui = (function (e) {
      function n(t) {
        var i = e.call(this) || this;
        return (i.popup = t), Object.setPrototypeOf(i, n.prototype), i;
      }
      return t(n, e), n;
    })(Fi),
    Vi = function (e, t, n) {
      return (
        void 0 === n && (n = 60),
        new Promise(function (i, r) {
          var o = window.document.createElement('iframe');
          o.setAttribute('width', '0'),
            o.setAttribute('height', '0'),
            (o.style.display = 'none');
          var c = function () {
              window.document.body.contains(o) &&
                window.document.body.removeChild(o);
            },
            s = setTimeout(function () {
              r(new Fi()), c();
            }, 1e3 * n),
            a = function (e) {
              if (
                e.origin == t &&
                e.data &&
                'authorization_response' === e.data.type
              ) {
                var n = e.source;
                n && n.close(),
                  e.data.response.error
                    ? r(mi.fromPayload(e.data.response))
                    : i(e.data.response),
                  clearTimeout(s),
                  window.removeEventListener('message', a, !1),
                  setTimeout(c, 2e3);
              }
            };
          window.addEventListener('message', a, !1),
            window.document.body.appendChild(o),
            o.setAttribute('src', e);
        })
      );
    },
    vi = function (e, t) {
      var n,
        i,
        r,
        o = t.popup;
      if (
        (o
          ? (o.location.href = e)
          : ((n = e),
            (i = window.screenX + (window.innerWidth - 400) / 2),
            (r = window.screenY + (window.innerHeight - 600) / 2),
            (o = window.open(
              n,
              'auth0:authorize:popup',
              'left=' +
                i +
                ',top=' +
                r +
                ',width=400,height=600,resizable,scrollbars=yes,status=1'
            ))),
        !o)
      )
        throw new Error('Could not open popup');
      return new Promise(function (e, n) {
        var i = setTimeout(function () {
          n(new Ui(o));
        }, 1e3 * (t.timeoutInSeconds || 60));
        window.addEventListener('message', function (t) {
          if (t.data && 'authorization_response' === t.data.type) {
            if ((clearTimeout(i), o.close(), t.data.response.error))
              return n(mi.fromPayload(t.data.response));
            e(t.data.response);
          }
        });
      });
    },
    Ci = function () {
      return window.crypto || window.msCrypto;
    },
    Si = function () {
      var e = Ci();
      return e.subtle || e.webkitSubtle;
    },
    Zi = function () {
      var e =
          '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.',
        t = '';
      return (
        Array.from(Ci().getRandomValues(new Uint8Array(43))).forEach(function (
          n
        ) {
          return (t += e[n % e.length]);
        }),
        t
      );
    },
    Xi = function (e) {
      return btoa(e);
    },
    wi = function (e) {
      return Object.keys(e)
        .filter(function (t) {
          return void 0 !== e[t];
        })
        .map(function (t) {
          return encodeURIComponent(t) + '=' + encodeURIComponent(e[t]);
        })
        .join('&');
    },
    Gi = function (e) {
      return r(void 0, void 0, void 0, function () {
        var t;
        return o(this, function (n) {
          switch (n.label) {
            case 0:
              return (
                (t = Si().digest(
                  { name: 'SHA-256' },
                  new TextEncoder().encode(e)
                )),
                window.msCrypto
                  ? [
                      2,
                      new Promise(function (e, n) {
                        (t.oncomplete = function (t) {
                          e(t.target.result);
                        }),
                          (t.onerror = function (e) {
                            n(e.error);
                          }),
                          (t.onabort = function () {
                            n('The digest operation was aborted');
                          });
                      })
                    ]
                  : [4, t]
              );
            case 1:
              return [2, n.sent()];
          }
        });
      });
    },
    Ri = function (e) {
      return (function (e) {
        return decodeURIComponent(
          atob(e)
            .split('')
            .map(function (e) {
              return '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
        );
      })(e.replace(/_/g, '/').replace(/-/g, '+'));
    },
    Ai = function (e) {
      var t = new Uint8Array(e);
      return (function (e) {
        var t = { '+': '-', '/': '_', '=': '' };
        return e.replace(/[+/=]/g, function (e) {
          return t[e];
        });
      })(window.btoa(String.fromCharCode.apply(String, Array.from(t))));
    },
    Qi = function (e, t, i, c, s, a) {
      return r(void 0, void 0, void 0, function () {
        var r, u;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return a
                ? (delete c.signal,
                  [
                    2,
                    ((g = n({ url: e, audience: t, scope: i, timeout: s }, c)),
                    (I = a),
                    new Promise(function (e, t) {
                      var n = new MessageChannel();
                      (n.port1.onmessage = function (n) {
                        n.data.error ? t(new Error(n.data.error)) : e(n.data);
                      }),
                        I.postMessage(g, [n.port2]);
                    }))
                  ])
                : [3, 1];
            case 1:
              return [
                4,
                ((l = e),
                (d = c),
                (d = d || {}),
                new Promise(function (e, t) {
                  var n = new XMLHttpRequest(),
                    i = [],
                    r = [],
                    o = {},
                    c = function () {
                      return {
                        ok: 2 == ((n.status / 100) | 0),
                        statusText: n.statusText,
                        status: n.status,
                        url: n.responseURL,
                        text: function () {
                          return Promise.resolve(n.responseText);
                        },
                        json: function () {
                          return Promise.resolve(JSON.parse(n.responseText));
                        },
                        blob: function () {
                          return Promise.resolve(new Blob([n.response]));
                        },
                        clone: c,
                        headers: {
                          keys: function () {
                            return i;
                          },
                          entries: function () {
                            return r;
                          },
                          get: function (e) {
                            return o[e.toLowerCase()];
                          },
                          has: function (e) {
                            return e.toLowerCase() in o;
                          }
                        }
                      };
                    };
                  for (var s in (n.open(d.method || 'get', l, !0),
                  (n.onload = function () {
                    n
                      .getAllResponseHeaders()
                      .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (
                        e,
                        t,
                        n
                      ) {
                        i.push((t = t.toLowerCase())),
                          r.push([t, n]),
                          (o[t] = o[t] ? o[t] + ',' + n : n);
                      }),
                      e(c());
                  }),
                  (n.onerror = t),
                  (n.withCredentials = 'include' == d.credentials),
                  d.headers))
                    n.setRequestHeader(s, d.headers[s]);
                  n.send(d.body || null);
                }))
              ];
            case 2:
              return (r = o.sent()), (u = { ok: r.ok }), [4, r.json()];
            case 3:
              return [2, ((u.json = o.sent()), u)];
          }
          var l, d, g, I;
        });
      });
    },
    xi = function (e, t, i, r, o, c) {
      void 0 === c && (c = 1e4);
      var s,
        a = new AbortController(),
        u = a.signal,
        l = n(n({}, r), { signal: u });
      return Promise.race([
        Qi(e, t, i, l, c, o),
        new Promise(function (e, t) {
          s = setTimeout(function () {
            a.abort(), t(new Error("Timeout when executing 'fetch'"));
          }, c);
        })
      ]).finally(function () {
        clearTimeout(s);
      });
    },
    Li = function (e, t, n, c, s, a) {
      return r(void 0, void 0, void 0, function () {
        var r, u, l, d, g, I, f, y, p, h;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              (r = null), (l = 0), (o.label = 1);
            case 1:
              if (!(l < 3)) return [3, 6];
              o.label = 2;
            case 2:
              return o.trys.push([2, 4, , 5]), [4, xi(e, n, c, s, a, t)];
            case 3:
              return (u = o.sent()), (r = null), [3, 6];
            case 4:
              return (d = o.sent()), (r = d), [3, 5];
            case 5:
              return l++, [3, 1];
            case 6:
              if (r) throw ((r.message = r.message || 'Failed to fetch'), r);
              if (
                ((g = u.json),
                (I = g.error),
                (f = g.error_description),
                (y = i(g, ['error', 'error_description'])),
                !u.ok)
              )
                throw (
                  ((p = f || 'HTTP error. Unable to fetch ' + e),
                  ((h = new Error(p)).error = I || 'request_error'),
                  (h.error_description = p),
                  h)
                );
              return [2, y];
          }
        });
      });
    },
    Wi = function (e, t) {
      return r(void 0, void 0, void 0, function () {
        var r = e.baseUrl,
          c = e.timeout,
          s = e.audience,
          a = e.scope,
          u = i(e, ['baseUrl', 'timeout', 'audience', 'scope']);
        return o(this, function (e) {
          switch (e.label) {
            case 0:
              return [
                4,
                Li(
                  r + '/oauth/token',
                  c,
                  s || 'default',
                  a,
                  {
                    method: 'POST',
                    body: JSON.stringify(
                      n({ redirect_uri: window.location.origin }, u)
                    ),
                    headers: { 'Content-type': 'application/json' }
                  },
                  t
                )
              ];
            case 1:
              return [2, e.sent()];
          }
        });
      });
    },
    Ji = function (e) {
      return Array.from(new Set(e));
    },
    Hi = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return Ji(e.join(' ').trim().split(/\s+/)).join(' ');
    },
    ki = function (e) {
      return (
        '@@auth0spajs@@::' + e.client_id + '::' + e.audience + '::' + e.scope
      );
    },
    Ei = function (e) {
      var t = Math.floor(Date.now() / 1e3) + e.expires_in;
      return { body: e, expiresAt: Math.min(t, e.decodedToken.claims.exp) };
    },
    Ti = (function () {
      function e() {}
      return (
        (e.prototype.save = function (e) {
          var t = ki(e),
            n = Ei(e);
          window.localStorage.setItem(t, JSON.stringify(n));
        }),
        (e.prototype.get = function (e, t) {
          void 0 === t && (t = 0);
          var n = ki(e),
            i = this.readJson(n),
            r = Math.floor(Date.now() / 1e3);
          if (i) {
            if (!(i.expiresAt - t < r)) return i.body;
            if (i.body.refresh_token) {
              var o = this.stripData(i);
              return this.writeJson(n, o), o.body;
            }
            localStorage.removeItem(n);
          }
        }),
        (e.prototype.clear = function () {
          for (var e = localStorage.length - 1; e >= 0; e--)
            localStorage.key(e).startsWith('@@auth0spajs@@') &&
              localStorage.removeItem(localStorage.key(e));
        }),
        (e.prototype.readJson = function (e) {
          var t,
            n = window.localStorage.getItem(e);
          if (n && (t = JSON.parse(n))) return t;
        }),
        (e.prototype.writeJson = function (e, t) {
          localStorage.setItem(e, JSON.stringify(t));
        }),
        (e.prototype.stripData = function (e) {
          return {
            body: { refresh_token: e.body.refresh_token },
            expiresAt: e.expiresAt
          };
        }),
        e
      );
    })(),
    Yi = function () {
      this.enclosedCache = (function () {
        var e = { body: {}, expiresAt: 0 };
        return {
          save: function (t) {
            var n = ki(t),
              i = Ei(t);
            e[n] = i;
          },
          get: function (t, n) {
            void 0 === n && (n = 0);
            var i = ki(t),
              r = e[i],
              o = Math.floor(Date.now() / 1e3);
            if (r)
              return r.expiresAt - n < o
                ? r.body.refresh_token
                  ? ((r.body = { refresh_token: r.body.refresh_token }), r.body)
                  : void delete e[i]
                : r.body;
          },
          clear: function () {
            e = { body: {}, expiresAt: 0 };
          }
        };
      })();
    },
    Ni = a(function (e, t) {
      var n =
        (c && c.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (e) {
              for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        };
      function i(e, t) {
        if (!t) return '';
        var n = '; ' + e;
        return !0 === t ? n : n + '=' + t;
      }
      function r(e, t, n) {
        return (
          encodeURIComponent(e)
            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
            .replace(/\(/g, '%28')
            .replace(/\)/g, '%29') +
          '=' +
          encodeURIComponent(t).replace(
            /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
            decodeURIComponent
          ) +
          (function (e) {
            if ('number' == typeof e.expires) {
              var t = new Date();
              t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires),
                (e.expires = t);
            }
            return (
              i('Expires', e.expires ? e.expires.toUTCString() : '') +
              i('Domain', e.domain) +
              i('Path', e.path) +
              i('Secure', e.secure) +
              i('SameSite', e.sameSite)
            );
          })(n)
        );
      }
      function o(e) {
        for (
          var t = {}, n = e ? e.split('; ') : [], i = /(%[\dA-F]{2})+/gi, r = 0;
          r < n.length;
          r++
        ) {
          var o = n[r].split('='),
            c = o.slice(1).join('=');
          '"' === c.charAt(0) && (c = c.slice(1, -1));
          try {
            t[o[0].replace(i, decodeURIComponent)] = c.replace(
              i,
              decodeURIComponent
            );
          } catch (e) {}
        }
        return t;
      }
      function s() {
        return o(document.cookie);
      }
      function a(e, t, i) {
        document.cookie = r(e, t, n({ path: '/' }, i));
      }
      (t.__esModule = !0),
        (t.encode = r),
        (t.parse = o),
        (t.getAll = s),
        (t.get = function (e) {
          return s()[e];
        }),
        (t.set = a),
        (t.remove = function (e, t) {
          a(e, '', n(n({}, t), { expires: -1 }));
        });
    });
  s(Ni);
  Ni.encode, Ni.parse;
  var Ki = Ni.getAll,
    Oi = Ni.get,
    Di = Ni.set,
    zi = Ni.remove,
    _i = (function () {
      function e(e) {
        (this.storage = e),
          (this.transaction = this.storage.get('a0.spajs.txs'));
      }
      return (
        (e.prototype.create = function (e) {
          (this.transaction = e),
            this.storage.save('a0.spajs.txs', e, { daysUntilExpire: 1 });
        }),
        (e.prototype.get = function () {
          return this.transaction;
        }),
        (e.prototype.remove = function () {
          delete this.transaction, this.storage.remove('a0.spajs.txs');
        }),
        e
      );
    })(),
    ji = function (e) {
      return 'a0.spajs.txs.' + e;
    },
    Pi = (function () {
      function e() {
        var e = this;
        (this.transactions = {}),
          'undefined' != typeof window &&
            Object.keys(Ki() || {})
              .filter(function (e) {
                return e.startsWith('a0.spajs.txs.');
              })
              .forEach(function (t) {
                var n = t.replace('a0.spajs.txs.', '');
                e.transactions[n] = (function (e) {
                  var t = Oi(e);
                  if (void 0 !== t) return JSON.parse(t);
                })(t);
              });
      }
      return (
        (e.prototype.create = function (e, t) {
          var n, i, r, o;
          (this.transactions[e] = t),
            (n = ji(e)),
            (i = t),
            (r = { daysUntilExpire: 1 }),
            (o = {}),
            'https:' === window.location.protocol &&
              (o = { secure: !0, sameSite: 'none' }),
            (o.expires = r.daysUntilExpire),
            Di(n, JSON.stringify(i), o);
        }),
        (e.prototype.get = function (e) {
          return this.transactions[e];
        }),
        (e.prototype.remove = function (e) {
          var t;
          delete this.transactions[e], (t = ji(e)), zi(t);
        }),
        e
      );
    })(),
    Mi = (function () {
      function e(e) {
        (this.sessionManager = new _i(e)), (this.cookieManager = new Pi());
      }
      return (
        (e.prototype.create = function (e, t) {
          this.sessionManager.create(t), this.cookieManager.create(e, t);
        }),
        (e.prototype.get = function (e) {
          var t;
          return null !== (t = this.sessionManager.get()) && void 0 !== t
            ? t
            : this.cookieManager.get(e);
        }),
        (e.prototype.remove = function (e) {
          this.sessionManager.remove(), this.cookieManager.remove(e);
        }),
        e
      );
    })(),
    qi = function (e) {
      return 'number' == typeof e;
    },
    $i = [
      'iss',
      'aud',
      'exp',
      'nbf',
      'iat',
      'jti',
      'azp',
      'nonce',
      'auth_time',
      'at_hash',
      'c_hash',
      'acr',
      'amr',
      'sub_jwk',
      'cnf',
      'sip_from_tag',
      'sip_date',
      'sip_callid',
      'sip_cseq_num',
      'sip_via_branch',
      'orig',
      'dest',
      'mky',
      'events',
      'toe',
      'txn',
      'rph',
      'sid',
      'vot',
      'vtm'
    ],
    er = function (e) {
      if (!e.id_token) throw new Error('ID token is required but missing');
      var t = (function (e) {
        var t = e.split('.'),
          n = t[0],
          i = t[1],
          r = t[2];
        if (3 !== t.length || !n || !i || !r)
          throw new Error('ID token could not be decoded');
        var o = JSON.parse(Ri(i)),
          c = { __raw: e },
          s = {};
        return (
          Object.keys(o).forEach(function (e) {
            (c[e] = o[e]), $i.includes(e) || (s[e] = o[e]);
          }),
          {
            encoded: { header: n, payload: i, signature: r },
            header: JSON.parse(Ri(n)),
            claims: c,
            user: s
          }
        );
      })(e.id_token);
      if (!t.claims.iss)
        throw new Error(
          'Issuer (iss) claim must be a string present in the ID token'
        );
      if (t.claims.iss !== e.iss)
        throw new Error(
          'Issuer (iss) claim mismatch in the ID token; expected "' +
            e.iss +
            '", found "' +
            t.claims.iss +
            '"'
        );
      if (!t.user.sub)
        throw new Error(
          'Subject (sub) claim must be a string present in the ID token'
        );
      if ('RS256' !== t.header.alg)
        throw new Error(
          'Signature algorithm of "' +
            t.header.alg +
            '" is not supported. Expected the ID token to be signed with "RS256".'
        );
      if (
        !t.claims.aud ||
        ('string' != typeof t.claims.aud && !Array.isArray(t.claims.aud))
      )
        throw new Error(
          'Audience (aud) claim must be a string or array of strings present in the ID token'
        );
      if (Array.isArray(t.claims.aud)) {
        if (!t.claims.aud.includes(e.aud))
          throw new Error(
            'Audience (aud) claim mismatch in the ID token; expected "' +
              e.aud +
              '" but was not one of "' +
              t.claims.aud.join(', ') +
              '"'
          );
        if (t.claims.aud.length > 1) {
          if (!t.claims.azp)
            throw new Error(
              'Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values'
            );
          if (t.claims.azp !== e.aud)
            throw new Error(
              'Authorized Party (azp) claim mismatch in the ID token; expected "' +
                e.aud +
                '", found "' +
                t.claims.azp +
                '"'
            );
        }
      } else if (t.claims.aud !== e.aud)
        throw new Error(
          'Audience (aud) claim mismatch in the ID token; expected "' +
            e.aud +
            '" but found "' +
            t.claims.aud +
            '"'
        );
      if (e.nonce) {
        if (!t.claims.nonce)
          throw new Error(
            'Nonce (nonce) claim must be a string present in the ID token'
          );
        if (t.claims.nonce !== e.nonce)
          throw new Error(
            'Nonce (nonce) claim mismatch in the ID token; expected "' +
              e.nonce +
              '", found "' +
              t.claims.nonce +
              '"'
          );
      }
      if (e.max_age && !qi(t.claims.auth_time))
        throw new Error(
          'Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified'
        );
      if (!qi(t.claims.exp))
        throw new Error(
          'Expiration Time (exp) claim must be a number present in the ID token'
        );
      if (!qi(t.claims.iat))
        throw new Error(
          'Issued At (iat) claim must be a number present in the ID token'
        );
      var n = e.leeway || 60,
        i = new Date(Date.now()),
        r = new Date(0),
        o = new Date(0),
        c = new Date(0);
      if (
        (c.setUTCSeconds(parseInt(t.claims.auth_time) + e.max_age + n),
        r.setUTCSeconds(t.claims.exp + n),
        o.setUTCSeconds(t.claims.nbf - n),
        i > r)
      )
        throw new Error(
          'Expiration Time (exp) claim error in the ID token; current time (' +
            i +
            ') is after expiration time (' +
            r +
            ')'
        );
      if (qi(t.claims.nbf) && i < o)
        throw new Error(
          "Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time (" +
            i +
            ') is before ' +
            o
        );
      if (qi(t.claims.auth_time) && i > c)
        throw new Error(
          'Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time (' +
            i +
            ') is after last auth at ' +
            c
        );
      return t;
    },
    tr = {
      get: function (e) {
        var t = Oi(e);
        if (void 0 !== t) return JSON.parse(t);
      },
      save: function (e, t, n) {
        var i = {};
        'https:' === window.location.protocol &&
          (i = { secure: !0, sameSite: 'none' }),
          (i.expires = n.daysUntilExpire),
          Di(e, JSON.stringify(t), i);
      },
      remove: function (e) {
        zi(e);
      }
    },
    nr = {
      get: function (e) {
        var t = tr.get(e);
        return t || tr.get('_legacy_' + e);
      },
      save: function (e, t, n) {
        var i = {};
        'https:' === window.location.protocol && (i = { secure: !0 }),
          (i.expires = n.daysUntilExpire),
          Di('_legacy_' + e, JSON.stringify(t), i),
          tr.save(e, t, n);
      },
      remove: function (e) {
        tr.remove(e), tr.remove('_legacy_' + e);
      }
    },
    ir = {
      get: function (e) {
        var t = sessionStorage.getItem(e);
        if (void 0 !== t) return JSON.parse(t);
      },
      save: function (e, t) {
        sessionStorage.setItem(e, JSON.stringify(t));
      },
      remove: function (e) {
        sessionStorage.removeItem(e);
      }
    };
  function rr(e, t, n) {
    var i = void 0 === t ? null : t,
      r = (function (e, t) {
        var n = atob(e);
        if (t) {
          for (
            var i = new Uint8Array(n.length), r = 0, o = n.length;
            r < o;
            ++r
          )
            i[r] = n.charCodeAt(r);
          return String.fromCharCode.apply(null, new Uint16Array(i.buffer));
        }
        return n;
      })(e, void 0 !== n && n),
      o = r.indexOf('\n', 10) + 1,
      c = r.substring(o) + (i ? '//# sourceMappingURL=' + i : ''),
      s = new Blob([c], { type: 'application/javascript' });
    return URL.createObjectURL(s);
  }
  var or,
    cr,
    sr,
    ar,
    ur =
      ((or =
        'Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwovKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioKQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uCgpQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkKcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLgoKVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgKUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZCkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCwKSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NCkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SCk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IKUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi8KdmFyIGU9ZnVuY3Rpb24oKXtyZXR1cm4oZT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHIsdD0xLG49YXJndW1lbnRzLmxlbmd0aDt0PG47dCsrKWZvcih2YXIgbyBpbiByPWFyZ3VtZW50c1t0XSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixvKSYmKGVbb109cltvXSk7cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Z1bmN0aW9uIHIoZSxyLHQsbil7cmV0dXJuIG5ldyh0fHwodD1Qcm9taXNlKSkoKGZ1bmN0aW9uKG8scyl7ZnVuY3Rpb24gYShlKXt0cnl7dShuLm5leHQoZSkpfWNhdGNoKGUpe3MoZSl9fWZ1bmN0aW9uIGkoZSl7dHJ5e3Uobi50aHJvdyhlKSl9Y2F0Y2goZSl7cyhlKX19ZnVuY3Rpb24gdShlKXt2YXIgcjtlLmRvbmU/byhlLnZhbHVlKToocj1lLnZhbHVlLHIgaW5zdGFuY2VvZiB0P3I6bmV3IHQoKGZ1bmN0aW9uKGUpe2Uocil9KSkpLnRoZW4oYSxpKX11KChuPW4uYXBwbHkoZSxyfHxbXSkpLm5leHQoKSl9KSl9ZnVuY3Rpb24gdChlLHIpe3ZhciB0LG4sbyxzLGE9e2xhYmVsOjAsc2VudDpmdW5jdGlvbigpe2lmKDEmb1swXSl0aHJvdyBvWzFdO3JldHVybiBvWzFdfSx0cnlzOltdLG9wczpbXX07cmV0dXJuIHM9e25leHQ6aSgwKSx0aHJvdzppKDEpLHJldHVybjppKDIpfSwiZnVuY3Rpb24iPT10eXBlb2YgU3ltYm9sJiYoc1tTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSxzO2Z1bmN0aW9uIGkocyl7cmV0dXJuIGZ1bmN0aW9uKGkpe3JldHVybiBmdW5jdGlvbihzKXtpZih0KXRocm93IG5ldyBUeXBlRXJyb3IoIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy4iKTtmb3IoO2E7KXRyeXtpZih0PTEsbiYmKG89MiZzWzBdP24ucmV0dXJuOnNbMF0/bi50aHJvd3x8KChvPW4ucmV0dXJuKSYmby5jYWxsKG4pLDApOm4ubmV4dCkmJiEobz1vLmNhbGwobixzWzFdKSkuZG9uZSlyZXR1cm4gbztzd2l0Y2gobj0wLG8mJihzPVsyJnNbMF0sby52YWx1ZV0pLHNbMF0pe2Nhc2UgMDpjYXNlIDE6bz1zO2JyZWFrO2Nhc2UgNDpyZXR1cm4gYS5sYWJlbCsrLHt2YWx1ZTpzWzFdLGRvbmU6ITF9O2Nhc2UgNTphLmxhYmVsKyssbj1zWzFdLHM9WzBdO2NvbnRpbnVlO2Nhc2UgNzpzPWEub3BzLnBvcCgpLGEudHJ5cy5wb3AoKTtjb250aW51ZTtkZWZhdWx0OmlmKCEobz1hLnRyeXMsKG89by5sZW5ndGg+MCYmb1tvLmxlbmd0aC0xXSl8fDYhPT1zWzBdJiYyIT09c1swXSkpe2E9MDtjb250aW51ZX1pZigzPT09c1swXSYmKCFvfHxzWzFdPm9bMF0mJnNbMV08b1szXSkpe2EubGFiZWw9c1sxXTticmVha31pZig2PT09c1swXSYmYS5sYWJlbDxvWzFdKXthLmxhYmVsPW9bMV0sbz1zO2JyZWFrfWlmKG8mJmEubGFiZWw8b1syXSl7YS5sYWJlbD1vWzJdLGEub3BzLnB1c2gocyk7YnJlYWt9b1syXSYmYS5vcHMucG9wKCksYS50cnlzLnBvcCgpO2NvbnRpbnVlfXM9ci5jYWxsKGUsYSl9Y2F0Y2goZSl7cz1bNixlXSxuPTB9ZmluYWxseXt0PW89MH1pZig1JnNbMF0pdGhyb3cgc1sxXTtyZXR1cm57dmFsdWU6c1swXT9zWzFdOnZvaWQgMCxkb25lOiEwfX0oW3MsaV0pfX19dmFyIG49e30sbz1mdW5jdGlvbihlLHIpe3JldHVybiBlKyJ8IityfTthZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwoZnVuY3Rpb24ocyl7dmFyIGEsaSx1LGMsbCxmLHA7cmV0dXJuIHIodm9pZCAwLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIHIsaCx5LGIsZCx2LHcsZztyZXR1cm4gdCh0aGlzLChmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOmE9cy5kYXRhLGk9YS51cmwsdT1hLnRpbWVvdXQsYz1hLmF1ZGllbmNlLGw9YS5zY29wZSxmPWZ1bmN0aW9uKGUscil7dmFyIHQ9e307Zm9yKHZhciBuIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbikmJnIuaW5kZXhPZihuKTwwJiYodFtuXT1lW25dKTtpZihudWxsIT1lJiYiZnVuY3Rpb24iPT10eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG89MDtmb3Iobj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO288bi5sZW5ndGg7bysrKXIuaW5kZXhPZihuW29dKTwwJiZPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoZSxuW29dKSYmKHRbbltvXV09ZVtuW29dXSl9cmV0dXJuIHR9KGEsWyJ1cmwiLCJ0aW1lb3V0IiwiYXVkaWVuY2UiLCJzY29wZSJdKSxwPXMucG9ydHNbMF0sdC5sYWJlbD0xO2Nhc2UgMTppZih0LnRyeXMucHVzaChbMSw3LCw4XSksIShoPUpTT04ucGFyc2UoZi5ib2R5KSkucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09aC5ncmFudF90eXBlKXtpZighKHk9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gbltvKGUscildfShjLGwpKSl0aHJvdyBuZXcgRXJyb3IoIlRoZSB3ZWIgd29ya2VyIGlzIG1pc3NpbmcgdGhlIHJlZnJlc2ggdG9rZW4iKTtmLmJvZHk9SlNPTi5zdHJpbmdpZnkoZShlKHt9LGgpLHtyZWZyZXNoX3Rva2VuOnl9KSl9Yj1uZXcgQWJvcnRDb250cm9sbGVyLGQ9Yi5zaWduYWwsdj12b2lkIDAsdC5sYWJlbD0yO2Nhc2UgMjpyZXR1cm4gdC50cnlzLnB1c2goWzIsNCwsNV0pLFs0LFByb21pc2UucmFjZShbKGs9dSxuZXcgUHJvbWlzZSgoZnVuY3Rpb24oZSl7cmV0dXJuIHNldFRpbWVvdXQoZSxrKX0pKSksZmV0Y2goaSxlKGUoe30sZikse3NpZ25hbDpkfSkpXSldO2Nhc2UgMzpyZXR1cm4gdj10LnNlbnQoKSxbMyw1XTtjYXNlIDQ6cmV0dXJuIHc9dC5zZW50KCkscC5wb3N0TWVzc2FnZSh7ZXJyb3I6dy5tZXNzYWdlfSksWzJdO2Nhc2UgNTpyZXR1cm4gdj9bNCx2Lmpzb24oKV06KGIuYWJvcnQoKSxbMl0pO2Nhc2UgNjpyZXR1cm4ocj10LnNlbnQoKSkucmVmcmVzaF90b2tlbj8oIWZ1bmN0aW9uKGUscix0KXtuW28ocix0KV09ZX0oci5yZWZyZXNoX3Rva2VuLGMsbCksZGVsZXRlIHIucmVmcmVzaF90b2tlbik6ZnVuY3Rpb24oZSxyKXtkZWxldGUgbltvKGUscildfShjLGwpLHAucG9zdE1lc3NhZ2Uoe29rOnYub2ssanNvbjpyfSksWzMsOF07Y2FzZSA3OnJldHVybiBnPXQuc2VudCgpLHAucG9zdE1lc3NhZ2Uoe29rOiExLGpzb246e2Vycm9yX2Rlc2NyaXB0aW9uOmcubWVzc2FnZX19KSxbMyw4XTtjYXNlIDg6cmV0dXJuWzJdfXZhciBrfSkpfSkpfSkpOwoK'),
      (cr =
        'data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4ud29ya2VyLmpzIiwic291cmNlcyI6WyJ3b3JrZXI6Ly93ZWItd29ya2VyL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3b3JrZXI6Ly93ZWItd29ya2VyL3NyYy9jb25zdGFudHMudHMiLCJ3b3JrZXI6Ly93ZWItd29ya2VyL3NyYy90b2tlbi53b3JrZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY3JlYXRlQmluZGluZyhvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgUG9wdXBDb25maWdPcHRpb25zIH0gZnJvbSAnLi9nbG9iYWwnO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQVVUSE9SSVpFX1RJTUVPVVRfSU5fU0VDT05EUyA9IDYwO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUE9QVVBfQ09ORklHX09QVElPTlM6IFBvcHVwQ29uZmlnT3B0aW9ucyA9IHtcbiAgdGltZW91dEluU2Vjb25kczogREVGQVVMVF9BVVRIT1JJWkVfVElNRU9VVF9JTl9TRUNPTkRTXG59O1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0lMRU5UX1RPS0VOX1JFVFJZX0NPVU5UID0gMztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBDTEVBTlVQX0lGUkFNRV9USU1FT1VUX0lOX1NFQ09ORFMgPSAyO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRkVUQ0hfVElNRU9VVF9NUyA9IDEwMDAwO1xuXG5leHBvcnQgY29uc3QgQ0FDSEVfTE9DQVRJT05fTUVNT1JZID0gJ21lbW9yeSc7XG5leHBvcnQgY29uc3QgQ0FDSEVfTE9DQVRJT05fTE9DQUxfU1RPUkFHRSA9ICdsb2NhbHN0b3JhZ2UnO1xuZXhwb3J0IGNvbnN0IE1JU1NJTkdfUkVGUkVTSF9UT0tFTl9FUlJPUl9NRVNTQUdFID1cbiAgJ1RoZSB3ZWIgd29ya2VyIGlzIG1pc3NpbmcgdGhlIHJlZnJlc2ggdG9rZW4nO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0NPUEUgPSAnb3BlbmlkIHByb2ZpbGUgZW1haWwnO1xuXG4vKipcbiAqIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBjYW4gYmUgaXNzdWVkIGJ5IHRoZSBhdXRob3JpemF0aW9uIHNlcnZlciB3aGljaCB0aGVcbiAqIHVzZXIgY2FuIHJlY292ZXIgZnJvbSBieSBzaWduaW5nIGluIGludGVyYWN0aXZlbHkuXG4gKiBodHRwczovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtY29yZS0xXzAuaHRtbCNBdXRoRXJyb3JcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IFJFQ09WRVJBQkxFX0VSUk9SUyA9IFtcbiAgJ2xvZ2luX3JlcXVpcmVkJyxcbiAgJ2NvbnNlbnRfcmVxdWlyZWQnLFxuICAnaW50ZXJhY3Rpb25fcmVxdWlyZWQnLFxuICAnYWNjb3VudF9zZWxlY3Rpb25fcmVxdWlyZWQnLFxuICAvLyBTdHJpY3RseSBzcGVha2luZyB0aGUgdXNlciBjYW4ndCByZWNvdmVyIGZyb20gYGFjY2Vzc19kZW5pZWRgIC0gYnV0IHRoZXlcbiAgLy8gY2FuIGdldCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZWlyIGFjY2VzcyBiZWluZyBkZW5pZWQgYnkgbG9nZ2luZyBpblxuICAvLyBpbnRlcmFjdGl2ZWx5LlxuICAnYWNjZXNzX2RlbmllZCdcbl07XG4iLCJpbXBvcnQgeyBNSVNTSU5HX1JFRlJFU0hfVE9LRU5fRVJST1JfTUVTU0FHRSB9IGZyb20gJy4vY29uc3RhbnRzJztcblxubGV0IHJlZnJlc2hUb2tlbnMgPSB7fTtcblxuY29uc3QgY2FjaGVLZXkgPSAoYXVkaWVuY2UsIHNjb3BlKSA9PiBgJHthdWRpZW5jZX18JHtzY29wZX1gO1xuXG5jb25zdCBnZXRSZWZyZXNoVG9rZW4gPSAoYXVkaWVuY2UsIHNjb3BlKSA9PlxuICByZWZyZXNoVG9rZW5zW2NhY2hlS2V5KGF1ZGllbmNlLCBzY29wZSldO1xuXG5jb25zdCBzZXRSZWZyZXNoVG9rZW4gPSAocmVmcmVzaFRva2VuLCBhdWRpZW5jZSwgc2NvcGUpID0+XG4gIChyZWZyZXNoVG9rZW5zW2NhY2hlS2V5KGF1ZGllbmNlLCBzY29wZSldID0gcmVmcmVzaFRva2VuKTtcblxuY29uc3QgZGVsZXRlUmVmcmVzaFRva2VuID0gKGF1ZGllbmNlLCBzY29wZSkgPT5cbiAgZGVsZXRlIHJlZnJlc2hUb2tlbnNbY2FjaGVLZXkoYXVkaWVuY2UsIHNjb3BlKV07XG5cbmNvbnN0IHdhaXQ6IGFueSA9IHRpbWUgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcblxuY29uc3QgbWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoe1xuICBkYXRhOiB7IHVybCwgdGltZW91dCwgYXVkaWVuY2UsIHNjb3BlLCAuLi5vcHRzIH0sXG4gIHBvcnRzOiBbcG9ydF1cbn0pID0+IHtcbiAgbGV0IGpzb247XG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IEpTT04ucGFyc2Uob3B0cy5ib2R5KTtcbiAgICBpZiAoIWJvZHkucmVmcmVzaF90b2tlbiAmJiBib2R5LmdyYW50X3R5cGUgPT09ICdyZWZyZXNoX3Rva2VuJykge1xuICAgICAgY29uc3QgcmVmcmVzaFRva2VuID0gZ2V0UmVmcmVzaFRva2VuKGF1ZGllbmNlLCBzY29wZSk7XG4gICAgICBpZiAoIXJlZnJlc2hUb2tlbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTUlTU0lOR19SRUZSRVNIX1RPS0VOX0VSUk9SX01FU1NBR0UpO1xuICAgICAgfVxuICAgICAgb3B0cy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyAuLi5ib2R5LCByZWZyZXNoX3Rva2VuOiByZWZyZXNoVG9rZW4gfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGNvbnN0IHsgc2lnbmFsIH0gPSBhYm9ydENvbnRyb2xsZXI7XG5cbiAgICBsZXQgcmVzcG9uc2U7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgd2FpdCh0aW1lb3V0KSxcbiAgICAgICAgZmV0Y2godXJsLCB7IC4uLm9wdHMsIHNpZ25hbCB9KVxuICAgICAgXSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGZldGNoIGVycm9yLCByZWplY3QgYHNlbmRNZXNzYWdlYCB1c2luZyBgZXJyb3JgIGtleSBzbyB0aGF0IHdlIHJldHJ5LlxuICAgICAgcG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAvLyBJZiB0aGUgcmVxdWVzdCB0aW1lcyBvdXQsIGFib3J0IGl0IGFuZCBsZXQgYGZldGNoV2l0aFRpbWVvdXRgIHJhaXNlIHRoZSBlcnJvci5cbiAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAoanNvbi5yZWZyZXNoX3Rva2VuKSB7XG4gICAgICBzZXRSZWZyZXNoVG9rZW4oanNvbi5yZWZyZXNoX3Rva2VuLCBhdWRpZW5jZSwgc2NvcGUpO1xuICAgICAgZGVsZXRlIGpzb24ucmVmcmVzaF90b2tlbjtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlUmVmcmVzaFRva2VuKGF1ZGllbmNlLCBzY29wZSk7XG4gICAgfVxuXG4gICAgcG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICBvazogcmVzcG9uc2Uub2ssXG4gICAgICBqc29uXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBqc29uOiB7XG4gICAgICAgIGVycm9yX2Rlc2NyaXB0aW9uOiBlcnJvci5tZXNzYWdlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIERvbid0IHJ1biBgYWRkRXZlbnRMaXN0ZW5lcmAgaW4gb3VyIHRlc3RzICh0aGlzIGlzIHJlcGxhY2VkIGluIHJvbGx1cClcbi8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IG1lc3NhZ2VIYW5kbGVyIH07XG59IGVsc2Uge1xuICAvLyBAdHMtaWdub3JlXG4gIGFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBtZXNzYWdlSGFuZGxlcik7XG59XG4iXSwibmFtZXMiOlsiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwidGhpcyIsIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwidmFsdWUiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiX19nZW5lcmF0b3IiLCJib2R5IiwiZiIsInkiLCJnIiwiXyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJ2ZXJiIiwidGhyb3ciLCJyZXR1cm4iLCJTeW1ib2wiLCJpdGVyYXRvciIsInYiLCJvcCIsIlR5cGVFcnJvciIsInBvcCIsInB1c2giLCJyZWZyZXNoVG9rZW5zIiwiY2FjaGVLZXkiLCJhdWRpZW5jZSIsInNjb3BlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9hIiwiX2IiLCJ1cmwiLCJ0aW1lb3V0Iiwib3B0cyIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInBvcnQiLCJKU09OIiwicGFyc2UiLCJyZWZyZXNoX3Rva2VuIiwiZ3JhbnRfdHlwZSIsInJlZnJlc2hUb2tlbiIsImdldFJlZnJlc2hUb2tlbiIsIkVycm9yIiwic3RyaW5naWZ5IiwiYWJvcnRDb250cm9sbGVyIiwiQWJvcnRDb250cm9sbGVyIiwic2lnbmFsIiwicmVzcG9uc2UiLCJyYWNlIiwidGltZSIsInNldFRpbWVvdXQiLCJmZXRjaCIsIl9jIiwicG9zdE1lc3NhZ2UiLCJlcnJvciIsImVycm9yXzEiLCJtZXNzYWdlIiwianNvbiIsImFib3J0Iiwic2V0UmVmcmVzaFRva2VuIiwiZGVsZXRlUmVmcmVzaFRva2VuIiwib2siLCJlcnJvcl9kZXNjcmlwdGlvbiIsImVycm9yXzIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBNkJPLElBQUlBLEVBQVcsV0FRbEIsT0FQQUEsRUFBV0MsT0FBT0MsUUFBVSxTQUFrQkMsR0FDMUMsSUFBSyxJQUFJQyxFQUFHQyxFQUFJLEVBQUdDLEVBQUlDLFVBQVVDLE9BQVFILEVBQUlDLEVBQUdELElBRTVDLElBQUssSUFBSUksS0FEVEwsRUFBSUcsVUFBVUYsR0FDT0osT0FBT1MsVUFBVUMsZUFBZUMsS0FBS1IsRUFBR0ssS0FBSU4sRUFBRU0sR0FBS0wsRUFBRUssSUFFOUUsT0FBT04sSUFFS1UsTUFBTUMsS0FBTVAsWUE4QnpCLFNBQVNRLEVBQVVDLEVBQVNDLEVBQVlDLEVBQUdDLEdBRTlDLE9BQU8sSUFBS0QsSUFBTUEsRUFBSUUsV0FBVSxTQUFVQyxFQUFTQyxHQUMvQyxTQUFTQyxFQUFVQyxHQUFTLElBQU1DLEVBQUtOLEVBQVVPLEtBQUtGLElBQVcsTUFBT0csR0FBS0wsRUFBT0ssSUFDcEYsU0FBU0MsRUFBU0osR0FBUyxJQUFNQyxFQUFLTixFQUFpQixNQUFFSyxJQUFXLE1BQU9HLEdBQUtMLEVBQU9LLElBQ3ZGLFNBQVNGLEVBQUtJLEdBSmxCLElBQWVMLEVBSWFLLEVBQU9DLEtBQU9ULEVBQVFRLEVBQU9MLFFBSjFDQSxFQUl5REssRUFBT0wsTUFKaERBLGFBQWlCTixFQUFJTSxFQUFRLElBQUlOLEdBQUUsU0FBVUcsR0FBV0EsRUFBUUcsT0FJVE8sS0FBS1IsRUFBV0ssR0FDbEdILEdBQU1OLEVBQVlBLEVBQVVOLE1BQU1HLEVBQVNDLEdBQWMsS0FBS1MsV0FJL0QsU0FBU00sRUFBWWhCLEVBQVNpQixHQUNqQyxJQUFzR0MsRUFBR0MsRUFBR2hDLEVBQUdpQyxFQUEzR0MsRUFBSSxDQUFFQyxNQUFPLEVBQUdDLEtBQU0sV0FBYSxHQUFXLEVBQVBwQyxFQUFFLEdBQVEsTUFBTUEsRUFBRSxHQUFJLE9BQU9BLEVBQUUsSUFBT3FDLEtBQU0sR0FBSUMsSUFBSyxJQUNoRyxPQUFPTCxFQUFJLENBQUVWLEtBQU1nQixFQUFLLEdBQUlDLE1BQVNELEVBQUssR0FBSUUsT0FBVUYsRUFBSyxJQUF3QixtQkFBWEcsU0FBMEJULEVBQUVTLE9BQU9DLFVBQVksV0FBYSxPQUFPaEMsT0FBVXNCLEVBQ3ZKLFNBQVNNLEVBQUtwQyxHQUFLLE9BQU8sU0FBVXlDLEdBQUssT0FDekMsU0FBY0MsR0FDVixHQUFJZCxFQUFHLE1BQU0sSUFBSWUsVUFBVSxtQ0FDM0IsS0FBT1osR0FBRyxJQUNOLEdBQUlILEVBQUksRUFBR0MsSUFBTWhDLEVBQVksRUFBUjZDLEVBQUcsR0FBU2IsRUFBVSxPQUFJYSxFQUFHLEdBQUtiLEVBQVMsU0FBT2hDLEVBQUlnQyxFQUFVLFNBQU1oQyxFQUFFUyxLQUFLdUIsR0FBSSxHQUFLQSxFQUFFVCxTQUFXdkIsRUFBSUEsRUFBRVMsS0FBS3VCLEVBQUdhLEVBQUcsS0FBS2xCLEtBQU0sT0FBTzNCLEVBRTNKLE9BRElnQyxFQUFJLEVBQUdoQyxJQUFHNkMsRUFBSyxDQUFTLEVBQVJBLEVBQUcsR0FBUTdDLEVBQUVxQixRQUN6QndCLEVBQUcsSUFDUCxLQUFLLEVBQUcsS0FBSyxFQUFHN0MsRUFBSTZDLEVBQUksTUFDeEIsS0FBSyxFQUFjLE9BQVhYLEVBQUVDLFFBQWdCLENBQUVkLE1BQU93QixFQUFHLEdBQUlsQixNQUFNLEdBQ2hELEtBQUssRUFBR08sRUFBRUMsUUFBU0gsRUFBSWEsRUFBRyxHQUFJQSxFQUFLLENBQUMsR0FBSSxTQUN4QyxLQUFLLEVBQUdBLEVBQUtYLEVBQUVJLElBQUlTLE1BQU9iLEVBQUVHLEtBQUtVLE1BQU8sU0FDeEMsUUFDSSxLQUFNL0MsRUFBSWtDLEVBQUVHLE1BQU1yQyxFQUFJQSxFQUFFSyxPQUFTLEdBQUtMLEVBQUVBLEVBQUVLLE9BQVMsS0FBa0IsSUFBVndDLEVBQUcsSUFBc0IsSUFBVkEsRUFBRyxJQUFXLENBQUVYLEVBQUksRUFBRyxTQUNqRyxHQUFjLElBQVZXLEVBQUcsTUFBYzdDLEdBQU02QyxFQUFHLEdBQUs3QyxFQUFFLElBQU02QyxFQUFHLEdBQUs3QyxFQUFFLElBQU0sQ0FBRWtDLEVBQUVDLE1BQVFVLEVBQUcsR0FBSSxNQUM5RSxHQUFjLElBQVZBLEVBQUcsSUFBWVgsRUFBRUMsTUFBUW5DLEVBQUUsR0FBSSxDQUFFa0MsRUFBRUMsTUFBUW5DLEVBQUUsR0FBSUEsRUFBSTZDLEVBQUksTUFDN0QsR0FBSTdDLEdBQUtrQyxFQUFFQyxNQUFRbkMsRUFBRSxHQUFJLENBQUVrQyxFQUFFQyxNQUFRbkMsRUFBRSxHQUFJa0MsRUFBRUksSUFBSVUsS0FBS0gsR0FBSyxNQUN2RDdDLEVBQUUsSUFBSWtDLEVBQUVJLElBQUlTLE1BQ2hCYixFQUFFRyxLQUFLVSxNQUFPLFNBRXRCRixFQUFLZixFQUFLckIsS0FBS0ksRUFBU3FCLEdBQzFCLE1BQU9WLEdBQUtxQixFQUFLLENBQUMsRUFBR3JCLEdBQUlRLEVBQUksVUFBZUQsRUFBSS9CLEVBQUksRUFDdEQsR0FBWSxFQUFSNkMsRUFBRyxHQUFRLE1BQU1BLEVBQUcsR0FBSSxNQUFPLENBQUV4QixNQUFPd0IsRUFBRyxHQUFLQSxFQUFHLFFBQUssRUFBUWxCLE1BQU0sR0FyQjlCTCxDQUFLLENBQUNuQixFQUFHeUMsTUNqRHRELElDN0JISyxFQUFnQixHQUVkQyxFQUFXLFNBQUNDLEVBQVVDLEdBQVUsT0FBR0QsTUFBWUMsR0FnRm5EQyxpQkFBaUIsV0FuRUksU0FBT0MscUlBQzVCQyxTQUFRQyxRQUFLQyxZQUFTTixhQUFVQyxVQUFVTSxFRnNCckMsU0FBZ0J6RCxFQUFHdUIsR0FDdEIsSUFBSXhCLEVBQUksR0FDUixJQUFLLElBQUlNLEtBQUtMLEVBQU9ILE9BQU9TLFVBQVVDLGVBQWVDLEtBQUtSLEVBQUdLLElBQU1rQixFQUFFbUMsUUFBUXJELEdBQUssSUFDOUVOLEVBQUVNLEdBQUtMLEVBQUVLLElBQ2IsR0FBUyxNQUFMTCxHQUFxRCxtQkFBakNILE9BQU84RCxzQkFDdEIsQ0FBQSxJQUFJMUQsRUFBSSxFQUFiLElBQWdCSSxFQUFJUixPQUFPOEQsc0JBQXNCM0QsR0FBSUMsRUFBSUksRUFBRUQsT0FBUUgsSUFDM0RzQixFQUFFbUMsUUFBUXJELEVBQUVKLElBQU0sR0FBS0osT0FBT1MsVUFBVXNELHFCQUFxQnBELEtBQUtSLEVBQUdLLEVBQUVKLE1BQ3ZFRixFQUFFTSxFQUFFSixJQUFNRCxFQUFFSyxFQUFFSixLQUUxQixPQUFPRixLRS9CSCxzQ0FDRThELDhCQUtOLDJCQURNaEMsRUFBT2lDLEtBQUtDLE1BQU1OLEVBQUs1QixPQUNuQm1DLGVBQXFDLGtCQUFwQm5DLEVBQUtvQyxXQUFnQyxDQUU5RCxLQURNQyxFQW5CWSxTQUFDaEIsRUFBVUMsR0FDakMsT0FBQUgsRUFBY0MsRUFBU0MsRUFBVUMsSUFrQlJnQixDQUFnQmpCLEVBQVVDLElBRTdDLE1BQU0sSUFBSWlCLE1ES2hCLCtDQ0hJWCxFQUFLNUIsS0FBT2lDLEtBQUtPLGlCQUFleEMsSUFBTW1DLGNBQWVFLEtBR2pESSxFQUFrQixJQUFJQyxnQkFDcEJDLEVBQVdGLFNBRWZHLDBCQUVTLGdDQUFNekQsUUFBUTBELEtBQUssRUF0QmxCQyxFQXVCTG5CLEVBdkJhLElBQUl4QyxTQUFRLFNBQUFDLEdBQVcsT0FBQTJELFdBQVczRCxFQUFTMEQsT0F3QjdERSxNQUFNdEIsU0FBVUUsSUFBTWUsNkJBRnhCQyxFQUFXSyxzQkFTWCxrQkFIQWpCLEVBQUtrQixZQUFZLENBQ2ZDLE1BQU9DLEVBQU1DLHFCQUtqQixPQUFLVCxLQU1RQSxFQUFTVSxTQUpwQmIsRUFBZ0JjLDJCQUlsQkQsRUFBT0wsVUFFRWQsZ0JBaERXLFNBQUNFLEVBQWNoQixFQUFVQyxHQUM5Q0gsRUFBY0MsRUFBU0MsRUFBVUMsSUFBVWUsRUFnRHhDbUIsQ0FBZ0JGLEVBQUtuQixjQUFlZCxFQUFVQyxVQUN2Q2dDLEVBQUtuQixlQS9DUyxTQUFDZCxFQUFVQyxVQUM3QkgsRUFBY0MsRUFBU0MsRUFBVUMsSUFnRHBDbUMsQ0FBbUJwQyxFQUFVQyxHQUcvQlUsRUFBS2tCLFlBQVksQ0FDZlEsR0FBSWQsRUFBU2MsR0FDYkosd0NBR0Z0QixFQUFLa0IsWUFBWSxDQUNmUSxJQUFJLEVBQ0pKLEtBQU0sQ0FDSkssa0JBQW1CQyxFQUFNUCxrQ0F6RGYsSUFBQVAifQ=='),
      (sr = !1),
      function (e) {
        return (ar = ar || rr(or, cr, sr)), new Worker(ar, e);
      }),
    lr = new pi(),
    dr = {
      memory: function () {
        return new Yi().enclosedCache;
      },
      localstorage: function () {
        return new Ti();
      }
    },
    gr = function (e) {
      return dr[e];
    },
    Ir = (function () {
      function e(e) {
        var t, n, r, o;
        if (
          ((this.options = e),
          console.log('Using patched Auth0Client'),
          'undefined' != typeof window &&
            (function () {
              if (!Ci())
                throw new Error(
                  'For security reasons, `window.crypto` is required to run `auth0-spa-js`.'
                );
              if (void 0 === Si())
                throw new Error(
                  '\n      auth0-spa-js must run on a secure origin.\n      See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin \n      for more information.\n    '
                );
            })(),
          (this.cacheLocation = e.cacheLocation || 'memory'),
          (this.cookieStorage = !1 === e.legacySameSiteCookie ? tr : nr),
          !gr(this.cacheLocation))
        )
          throw new Error(
            'Invalid cache location "' + this.cacheLocation + '"'
          );
        (this.cache = gr(this.cacheLocation)()),
          (this.scope = this.options.scope),
          (this.transactionManager = new Mi(ir)),
          (this.domainUrl = 'https://' + this.options.domain),
          (this.tokenIssuer =
            ((r = this.options.issuer),
            (o = this.domainUrl),
            r
              ? r.startsWith('https://')
                ? r
                : 'https://' + r + '/'
              : o + '/')),
          (this.defaultScope = Hi(
            'openid',
            void 0 !==
              (null ===
                (n =
                  null === (t = this.options) || void 0 === t
                    ? void 0
                    : t.advancedOptions) || void 0 === n
                ? void 0
                : n.defaultScope)
              ? this.options.advancedOptions.defaultScope
              : 'openid profile email'
          )),
          this.options.useRefreshTokens &&
            (this.scope = Hi(this.scope, 'offline_access')),
          'undefined' != typeof window &&
            window.Worker &&
            this.options.useRefreshTokens &&
            'memory' === this.cacheLocation &&
            !/Trident.*rv:11\.0/.test(navigator.userAgent) &&
            (this.worker = new ur()),
          (this.customOptions = (function (e) {
            e.advancedOptions,
              e.audience,
              e.auth0Client,
              e.authorizeTimeoutInSeconds,
              e.cacheLocation,
              e.client_id,
              e.domain,
              e.issuer,
              e.leeway,
              e.max_age,
              e.redirect_uri,
              e.scope,
              e.useRefreshTokens;
            return i(e, [
              'advancedOptions',
              'audience',
              'auth0Client',
              'authorizeTimeoutInSeconds',
              'cacheLocation',
              'client_id',
              'domain',
              'issuer',
              'leeway',
              'max_age',
              'redirect_uri',
              'scope',
              'useRefreshTokens'
            ]);
          })(e));
      }
      return (
        (e.prototype._url = function (e) {
          var t = encodeURIComponent(
            btoa(
              JSON.stringify(
                this.options.auth0Client || {
                  name: 'auth0-spa-js',
                  version: '1.12.0'
                }
              )
            )
          );
          return '' + this.domainUrl + e + '&auth0Client=' + t;
        }),
        (e.prototype._getParams = function (e, t, r, o, c) {
          var s = this.options,
            a =
              (s.domain,
              s.leeway,
              s.useRefreshTokens,
              s.auth0Client,
              s.cacheLocation,
              s.advancedOptions,
              i(s, [
                'domain',
                'leeway',
                'useRefreshTokens',
                'auth0Client',
                'cacheLocation',
                'advancedOptions'
              ]));
          return n(n(n({}, a), e), {
            scope: Hi(this.defaultScope, this.scope, e.scope),
            response_type: 'code',
            response_mode: 'query',
            state: t,
            nonce: r,
            redirect_uri: c || this.options.redirect_uri,
            code_challenge: o,
            code_challenge_method: 'S256'
          });
        }),
        (e.prototype._authorizeUrl = function (e) {
          return this._url('/authorize?' + wi(e));
        }),
        (e.prototype._verifyIdToken = function (e, t) {
          return er({
            iss: this.tokenIssuer,
            aud: this.options.client_id,
            id_token: e,
            nonce: t,
            leeway: this.options.leeway,
            max_age: this._parseNumber(this.options.max_age)
          });
        }),
        (e.prototype._parseNumber = function (e) {
          return 'string' != typeof e ? e : parseInt(e, 10) || void 0;
        }),
        (e.prototype.buildAuthorizeUrl = function (e) {
          return (
            void 0 === e && (e = {}),
            r(this, void 0, void 0, function () {
              var t, n, r, c, s, a, u, l, d, g, I;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (t = e.redirect_uri),
                      (n = e.appState),
                      (r = i(e, ['redirect_uri', 'appState'])),
                      (c = Xi(Zi())),
                      (s = Xi(Zi())),
                      (a = Zi()),
                      [4, Gi(a)]
                    );
                  case 1:
                    return (
                      (u = o.sent()),
                      (l = Ai(u)),
                      (d = e.fragment ? '#' + e.fragment : ''),
                      (g = this._getParams(r, c, s, l, t)),
                      (I = this._authorizeUrl(g)),
                      this.transactionManager.create(c, {
                        nonce: s,
                        code_verifier: a,
                        appState: n,
                        scope: g.scope,
                        audience: g.audience || 'default',
                        redirect_uri: g.redirect_uri
                      }),
                      [2, I + d]
                    );
                }
              });
            })
          );
        }),
        (e.prototype.loginWithPopup = function (e, t) {
          return (
            void 0 === e && (e = {}),
            void 0 === t && (t = {}),
            r(this, void 0, void 0, function () {
              var r, c, s, a, u, l, d, g, I, f, y, p;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (r = i(e, [])),
                      (c = Xi(Zi())),
                      (s = Xi(Zi())),
                      (a = Zi()),
                      [4, Gi(a)]
                    );
                  case 1:
                    return (
                      (u = o.sent()),
                      (l = Ai(u)),
                      (d = this._getParams(
                        r,
                        c,
                        s,
                        l,
                        this.options.redirect_uri || window.location.origin
                      )),
                      (g = this._authorizeUrl(
                        n(n({}, d), { response_mode: 'web_message' })
                      )),
                      [
                        4,
                        vi(
                          g,
                          n(n({}, t), {
                            timeoutInSeconds:
                              t.timeoutInSeconds ||
                              this.options.authorizeTimeoutInSeconds ||
                              60
                          })
                        )
                      ]
                    );
                  case 2:
                    if (((I = o.sent()), c !== I.state))
                      throw new Error('Invalid state');
                    return [
                      4,
                      Wi(
                        {
                          audience: d.audience,
                          scope: d.scope,
                          baseUrl: this.domainUrl,
                          client_id: this.options.client_id,
                          code_verifier: a,
                          code: I.code,
                          grant_type: 'authorization_code',
                          redirect_uri: d.redirect_uri
                        },
                        this.worker
                      )
                    ];
                  case 3:
                    return (
                      (f = o.sent()),
                      (y = this._verifyIdToken(f.id_token, s)),
                      (p = n(n({}, f), {
                        decodedToken: y,
                        scope: d.scope,
                        audience: d.audience || 'default',
                        client_id: this.options.client_id
                      })),
                      this.cache.save(p),
                      this.cookieStorage.save('auth0.is.authenticated', !0, {
                        daysUntilExpire: 1
                      }),
                      [2]
                    );
                }
              });
            })
          );
        }),
        (e.prototype.getUser = function (e) {
          return (
            void 0 === e && (e = {}),
            r(this, void 0, void 0, function () {
              var t, n, i;
              return o(this, function (r) {
                return (
                  (t = e.audience || this.options.audience || 'default'),
                  (n = Hi(this.defaultScope, this.scope, e.scope)),
                  [
                    2,
                    (i = this.cache.get({
                      client_id: this.options.client_id,
                      audience: t,
                      scope: n
                    })) &&
                      i.decodedToken &&
                      i.decodedToken.user
                  ]
                );
              });
            })
          );
        }),
        (e.prototype.getIdTokenClaims = function (e) {
          return (
            void 0 === e && (e = {}),
            r(this, void 0, void 0, function () {
              var t, n, i;
              return o(this, function (r) {
                return (
                  (t = e.audience || this.options.audience || 'default'),
                  (n = Hi(this.defaultScope, this.scope, e.scope)),
                  [
                    2,
                    (i = this.cache.get({
                      client_id: this.options.client_id,
                      audience: t,
                      scope: n
                    })) &&
                      i.decodedToken &&
                      i.decodedToken.claims
                  ]
                );
              });
            })
          );
        }),
        (e.prototype.loginWithRedirect = function (e) {
          return (
            void 0 === e && (e = {}),
            r(this, void 0, void 0, function () {
              var t;
              return o(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.buildAuthorizeUrl(e)];
                  case 1:
                    return (t = n.sent()), window.location.assign(t), [2];
                }
              });
            })
          );
        }),
        (e.prototype.handleRedirectCallback = function (e) {
          return (
            void 0 === e && (e = window.location.href),
            r(this, void 0, void 0, function () {
              var t, i, r, c, s, a, u, l, d, g, I;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (0 === (t = e.split('?').slice(1)).length)
                      throw new Error(
                        'There are no query params available for parsing.'
                      );
                    if (
                      ((i = (function (e) {
                        e.indexOf('#') > -1 &&
                          (e = e.substr(0, e.indexOf('#')));
                        var t = e.split('&'),
                          i = {};
                        return (
                          t.forEach(function (e) {
                            var t = e.split('='),
                              n = t[0],
                              r = t[1];
                            i[n] = decodeURIComponent(r);
                          }),
                          n(n({}, i), { expires_in: parseInt(i.expires_in) })
                        );
                      })(t.join(''))),
                      (r = i.state),
                      (c = i.code),
                      (s = i.error),
                      (a = i.error_description),
                      !(u = this.transactionManager.get(r)) ||
                        !u.code_verifier ||
                        !u.nonce)
                    )
                      throw new Error('Invalid state');
                    if (s)
                      throw (
                        (this.transactionManager.remove(r),
                        new Bi(s, a, r, u.appState))
                      );
                    return (
                      this.transactionManager.remove(r),
                      (l = {
                        audience: u.audience,
                        scope: u.scope,
                        baseUrl: this.domainUrl,
                        client_id: this.options.client_id,
                        code_verifier: u.code_verifier,
                        grant_type: 'authorization_code',
                        code: c
                      }),
                      void 0 !== u.redirect_uri &&
                        (l.redirect_uri = u.redirect_uri),
                      [4, Wi(l, this.worker)]
                    );
                  case 1:
                    return (
                      (d = o.sent()),
                      (g = this._verifyIdToken(d.id_token, u.nonce)),
                      (I = n(n({}, d), {
                        decodedToken: g,
                        audience: u.audience,
                        scope: u.scope,
                        client_id: this.options.client_id
                      })),
                      this.cache.save(I),
                      this.cookieStorage.save('auth0.is.authenticated', !0, {
                        daysUntilExpire: 1
                      }),
                      [2, { appState: u.appState }]
                    );
                }
              });
            })
          );
        }),
        (e.prototype.checkSession = function (e) {
          return r(this, void 0, void 0, function () {
            var t;
            return o(this, function (n) {
              switch (n.label) {
                case 0:
                  if (
                    'memory' === this.cacheLocation &&
                    !this.cookieStorage.get('auth0.is.authenticated')
                  )
                    return [2];
                  n.label = 1;
                case 1:
                  return (
                    n.trys.push([1, 3, , 4]), [4, this.getTokenSilently(e)]
                  );
                case 2:
                  return n.sent(), [3, 4];
                case 3:
                  if (((t = n.sent()), !bi.includes(t.error))) throw t;
                  return [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }),
        (e.prototype.getTokenSilently = function (e) {
          return (
            void 0 === e && (e = {}),
            r(this, void 0, void 0, function () {
              var t,
                r,
                c,
                s,
                a,
                u,
                l,
                d = this;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (
                      ((t = n(
                        n(
                          { audience: this.options.audience, ignoreCache: !1 },
                          e
                        ),
                        { scope: Hi(this.defaultScope, this.scope, e.scope) }
                      )),
                      (r = t.ignoreCache),
                      (c = i(t, ['ignoreCache'])),
                      (s = function () {
                        var e = d.cache.get(
                          {
                            scope: c.scope,
                            audience: c.audience || 'default',
                            client_id: d.options.client_id
                          },
                          60
                        );
                        return e && e.access_token;
                      }),
                      !r && (a = s()))
                    )
                      return [2, a];
                    o.label = 1;
                  case 1:
                    return (
                      o.trys.push([1, 7, 8, 10]),
                      [4, lr.acquireLock('auth0.lock.getTokenSilently', 5e3)]
                    );
                  case 2:
                    return (
                      o.sent(),
                      !r && (a = s())
                        ? [2, a]
                        : this.options.useRefreshTokens
                        ? [4, this._getTokenUsingRefreshToken(c)]
                        : [3, 4]
                    );
                  case 3:
                    return (l = o.sent()), [3, 6];
                  case 4:
                    return [4, this._getTokenFromIFrame(c)];
                  case 5:
                    (l = o.sent()), (o.label = 6);
                  case 6:
                    return (
                      (u = l),
                      this.cache.save(
                        n({ client_id: this.options.client_id }, u)
                      ),
                      this.cookieStorage.save('auth0.is.authenticated', !0, {
                        daysUntilExpire: 1
                      }),
                      [2, u.access_token]
                    );
                  case 7:
                    throw o.sent();
                  case 8:
                    return [4, lr.releaseLock('auth0.lock.getTokenSilently')];
                  case 9:
                    return o.sent(), [7];
                  case 10:
                    return [2];
                }
              });
            })
          );
        }),
        (e.prototype.getTokenWithPopup = function (e, t) {
          return (
            void 0 === e && (e = {}),
            void 0 === t && (t = {}),
            r(this, void 0, void 0, function () {
              return o(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (e.audience = e.audience || this.options.audience),
                      (e.scope = Hi(this.defaultScope, this.scope, e.scope)),
                      (t = n(n({}, hi), t)),
                      [4, this.loginWithPopup(e, t)]
                    );
                  case 1:
                    return (
                      i.sent(),
                      [
                        2,
                        this.cache.get({
                          scope: e.scope,
                          audience: e.audience || 'default',
                          client_id: this.options.client_id
                        }).access_token
                      ]
                    );
                }
              });
            })
          );
        }),
        (e.prototype.isAuthenticated = function () {
          return r(this, void 0, void 0, function () {
            return o(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.getUser()];
                case 1:
                  return [2, !!e.sent()];
              }
            });
          });
        }),
        (e.prototype.logout = function (e) {
          void 0 === e && (e = {}),
            null !== e.client_id
              ? (e.client_id = e.client_id || this.options.client_id)
              : delete e.client_id;
          var t = e.federated,
            n = e.localOnly,
            r = i(e, ['federated', 'localOnly']);
          if (n && t)
            throw new Error(
              'It is invalid to set both the `federated` and `localOnly` options to `true`'
            );
          if (
            (this.cache.clear(),
            this.cookieStorage.remove('auth0.is.authenticated'),
            !n)
          ) {
            var o = t ? '&federated' : '',
              c = this._url('/v2/logout?' + wi(r));
            window.location.assign('' + c + o);
          }
        }),
        (e.prototype._getTokenFromIFrame = function (e) {
          return r(this, void 0, void 0, function () {
            var t, r, c, s, a, u, l, d, g, I, f, y, p, h;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return (t = Xi(Zi())), (r = Xi(Zi())), (c = Zi()), [4, Gi(c)];
                case 1:
                  return (
                    (s = o.sent()),
                    (a = Ai(s)),
                    (u = this._getParams(
                      e,
                      t,
                      r,
                      a,
                      e.redirect_uri ||
                        this.options.redirect_uri ||
                        window.location.origin
                    )),
                    (l = this._authorizeUrl(
                      n(n({}, u), {
                        prompt: 'none',
                        response_mode: 'web_message'
                      })
                    )),
                    (d =
                      e.timeoutInSeconds ||
                      this.options.authorizeTimeoutInSeconds),
                    [4, Vi(l, this.domainUrl, d)]
                  );
                case 2:
                  if (((g = o.sent()), t !== g.state))
                    throw new Error('Invalid state');
                  return (
                    (I = e.scope),
                    (f = e.audience),
                    e.redirect_uri,
                    e.ignoreCache,
                    e.timeoutInSeconds,
                    (y = i(e, [
                      'scope',
                      'audience',
                      'redirect_uri',
                      'ignoreCache',
                      'timeoutInSeconds'
                    ])),
                    [
                      4,
                      Wi(
                        n(n(n({}, this.customOptions), y), {
                          scope: I,
                          audience: f,
                          baseUrl: this.domainUrl,
                          client_id: this.options.client_id,
                          code_verifier: c,
                          code: g.code,
                          grant_type: 'authorization_code',
                          redirect_uri: u.redirect_uri
                        }),
                        this.worker
                      )
                    ]
                  );
                case 3:
                  return (
                    (p = o.sent()),
                    (h = this._verifyIdToken(p.id_token, r)),
                    [
                      2,
                      n(n({}, p), {
                        decodedToken: h,
                        scope: u.scope,
                        audience: u.audience || 'default'
                      })
                    ]
                  );
              }
            });
          });
        }),
        (e.prototype._getTokenUsingRefreshToken = function (e) {
          return r(this, void 0, void 0, function () {
            var t, r, c, s, a, u, l, d;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (e.scope = Hi(
                      this.defaultScope,
                      this.options.scope,
                      e.scope
                    )),
                    ((t = this.cache.get({
                      scope: e.scope,
                      audience: e.audience || 'default',
                      client_id: this.options.client_id
                    })) &&
                      t.refresh_token) ||
                    this.worker
                      ? [3, 2]
                      : [4, this._getTokenFromIFrame(e)]
                  );
                case 1:
                  return [2, o.sent()];
                case 2:
                  (r =
                    e.redirect_uri ||
                    this.options.redirect_uri ||
                    window.location.origin),
                    (s = e.scope),
                    (a = e.audience),
                    e.ignoreCache,
                    e.timeoutInSeconds,
                    (u = i(e, [
                      'scope',
                      'audience',
                      'ignoreCache',
                      'timeoutInSeconds'
                    ])),
                    (o.label = 3);
                case 3:
                  return (
                    o.trys.push([3, 5, , 8]),
                    [
                      4,
                      Wi(
                        n(n(n({}, this.customOptions), u), {
                          audience: a,
                          scope: s,
                          baseUrl: this.domainUrl,
                          client_id: this.options.client_id,
                          grant_type: 'refresh_token',
                          refresh_token: t && t.refresh_token,
                          redirect_uri: r
                        }),
                        this.worker
                      )
                    ]
                  );
                case 4:
                  return (c = o.sent()), [3, 8];
                case 5:
                  return 'The web worker is missing the refresh token' !==
                    (l = o.sent()).message
                    ? [3, 7]
                    : [4, this._getTokenFromIFrame(e)];
                case 6:
                  return [2, o.sent()];
                case 7:
                  throw l;
                case 8:
                  return (
                    (d = this._verifyIdToken(c.id_token)),
                    [
                      2,
                      n(n({}, c), {
                        decodedToken: d,
                        scope: e.scope,
                        audience: e.audience || 'default'
                      })
                    ]
                  );
              }
            });
          });
        }),
        e
      );
    })();
  function fr(e) {
    return r(this, void 0, void 0, function () {
      var t;
      return o(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, (t = new Ir(e)).checkSession()];
          case 1:
            return n.sent(), [2, t];
        }
      });
    });
  }
  var yr = fr;
  return (yr.Auth0Client = Ir), (yr.createAuth0Client = fr), yr;
}),
  'Auth0Client' in this &&
    this.console &&
    this.console.warn &&
    this.console.warn('Auth0Client already declared on the global namespace'),
  this &&
    this.createAuth0Client &&
    (this.Auth0Client = this.Auth0Client || this.createAuth0Client.Auth0Client);
//# sourceMappingURL=auth0-spa-js.production.js.map
