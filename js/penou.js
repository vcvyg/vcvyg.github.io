/*!
 * Penou: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Penou = Penou || [];
 *   Penou.push(readyFunction);
 */

( () => {
  var ME = Object.create;
  var xr = Object.defineProperty;
  var DE = Object.getOwnPropertyDescriptor;
  var FE = Object.getOwnPropertyNames;
  var qE = Object.getPrototypeOf
    , GE = Object.prototype.hasOwnProperty;
  var de = (e, t) => () => (e && (t = e(e = 0)),
  t);
  var f = (e, t) => () => (t || e((t = {
      exports: {}
  }).exports, t),
  t.exports)
    , xe = (e, t) => {
      for (var r in t)
          xr(e, r, {
              get: t[r],
              enumerable: !0
          })
  }
    , sa = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
          for (let i of FE(t))
              !GE.call(e, i) && i !== r && xr(e, i, {
                  get: () => t[i],
                  enumerable: !(n = DE(t, i)) || n.enumerable
              });
      return e
  }
  ;
  var ae = (e, t, r) => (r = e != null ? ME(qE(e)) : {},
  sa(t || !e || !e.__esModule ? xr(r, "default", {
      value: e,
      enumerable: !0
  }) : r, e))
    , He = e => sa(xr({}, "__esModule", {
      value: !0
  }), e);
  var Bn = f( () => {
      "use strict";
      window.tram = function(e) {
          function t(c, m) {
              var T = new E.Bare;
              return T.init(c, m)
          }
          function r(c) {
              return c.replace(/[A-Z]/g, function(m) {
                  return "-" + m.toLowerCase()
              })
          }
          function n(c) {
              var m = parseInt(c.slice(1), 16)
                , T = m >> 16 & 255
                , w = m >> 8 & 255
                , _ = 255 & m;
              return [T, w, _]
          }
          function i(c, m, T) {
              return "#" + (1 << 24 | c << 16 | m << 8 | T).toString(16).slice(1)
          }
          function o() {}
          function a(c, m) {
              l("Type warning: Expected: [" + c + "] Got: [" + typeof m + "] " + m)
          }
          function s(c, m, T) {
              l("Units do not match [" + c + "]: " + m + ", " + T)
          }
          function u(c, m, T) {
              if (m !== void 0 && (T = m),
              c === void 0)
                  return T;
              var w = T;
              return tt.test(c) || !Tt.test(c) ? w = parseInt(c, 10) : Tt.test(c) && (w = 1e3 * parseFloat(c)),
              0 > w && (w = 0),
              w === w ? w : T
          }
          function l(c) {
              ie.debug && window && window.console.warn(c)
          }
          function v(c) {
              for (var m = -1, T = c ? c.length : 0, w = []; ++m < T; ) {
                  var _ = c[m];
                  _ && w.push(_)
              }
              return w
          }
          var g = function(c, m, T) {
              function w(ee) {
                  return typeof ee == "object"
              }
              function _(ee) {
                  return typeof ee == "function"
              }
              function x() {}
              function z(ee, le) {
                  function G() {
                      var Te = new re;
                      return _(Te.init) && Te.init.apply(Te, arguments),
                      Te
                  }
                  function re() {}
                  le === T && (le = ee,
                  ee = Object),
                  G.Bare = re;
                  var ne, Ee = x[c] = ee[c], We = re[c] = G[c] = new x;
                  return We.constructor = G,
                  G.mixin = function(Te) {
                      return re[c] = G[c] = z(G, Te)[c],
                      G
                  }
                  ,
                  G.open = function(Te) {
                      if (ne = {},
                      _(Te) ? ne = Te.call(G, We, Ee, G, ee) : w(Te) && (ne = Te),
                      w(ne))
                          for (var Zt in ne)
                              m.call(ne, Zt) && (We[Zt] = ne[Zt]);
                      return _(We.init) || (We.init = ee),
                      G
                  }
                  ,
                  G.open(le)
              }
              return z
          }("prototype", {}.hasOwnProperty)
            , p = {
              ease: ["ease", function(c, m, T, w) {
                  var _ = (c /= w) * c
                    , x = _ * c;
                  return m + T * (-2.75 * x * _ + 11 * _ * _ + -15.5 * x + 8 * _ + .25 * c)
              }
              ],
              "ease-in": ["ease-in", function(c, m, T, w) {
                  var _ = (c /= w) * c
                    , x = _ * c;
                  return m + T * (-1 * x * _ + 3 * _ * _ + -3 * x + 2 * _)
              }
              ],
              "ease-out": ["ease-out", function(c, m, T, w) {
                  var _ = (c /= w) * c
                    , x = _ * c;
                  return m + T * (.3 * x * _ + -1.6 * _ * _ + 2.2 * x + -1.8 * _ + 1.9 * c)
              }
              ],
              "ease-in-out": ["ease-in-out", function(c, m, T, w) {
                  var _ = (c /= w) * c
                    , x = _ * c;
                  return m + T * (2 * x * _ + -5 * _ * _ + 2 * x + 2 * _)
              }
              ],
              linear: ["linear", function(c, m, T, w) {
                  return T * c / w + m
              }
              ],
              "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(c, m, T, w) {
                  return T * (c /= w) * c + m
              }
              ],
              "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(c, m, T, w) {
                  return -T * (c /= w) * (c - 2) + m
              }
              ],
              "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(c, m, T, w) {
                  return (c /= w / 2) < 1 ? T / 2 * c * c + m : -T / 2 * (--c * (c - 2) - 1) + m
              }
              ],
              "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(c, m, T, w) {
                  return T * (c /= w) * c * c + m
              }
              ],
              "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(c, m, T, w) {
                  return T * ((c = c / w - 1) * c * c + 1) + m
              }
              ],
              "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(c, m, T, w) {
                  return (c /= w / 2) < 1 ? T / 2 * c * c * c + m : T / 2 * ((c -= 2) * c * c + 2) + m
              }
              ],
              "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(c, m, T, w) {
                  return T * (c /= w) * c * c * c + m
              }
              ],
              "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(c, m, T, w) {
                  return -T * ((c = c / w - 1) * c * c * c - 1) + m
              }
              ],
              "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(c, m, T, w) {
                  return (c /= w / 2) < 1 ? T / 2 * c * c * c * c + m : -T / 2 * ((c -= 2) * c * c * c - 2) + m
              }
              ],
              "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(c, m, T, w) {
                  return T * (c /= w) * c * c * c * c + m
              }
              ],
              "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(c, m, T, w) {
                  return T * ((c = c / w - 1) * c * c * c * c + 1) + m
              }
              ],
              "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(c, m, T, w) {
                  return (c /= w / 2) < 1 ? T / 2 * c * c * c * c * c + m : T / 2 * ((c -= 2) * c * c * c * c + 2) + m
              }
              ],
              "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(c, m, T, w) {
                  return -T * Math.cos(c / w * (Math.PI / 2)) + T + m
              }
              ],
              "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(c, m, T, w) {
                  return T * Math.sin(c / w * (Math.PI / 2)) + m
              }
              ],
              "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(c, m, T, w) {
                  return -T / 2 * (Math.cos(Math.PI * c / w) - 1) + m
              }
              ],
              "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(c, m, T, w) {
                  return c === 0 ? m : T * Math.pow(2, 10 * (c / w - 1)) + m
              }
              ],
              "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(c, m, T, w) {
                  return c === w ? m + T : T * (-Math.pow(2, -10 * c / w) + 1) + m
              }
              ],
              "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(c, m, T, w) {
                  return c === 0 ? m : c === w ? m + T : (c /= w / 2) < 1 ? T / 2 * Math.pow(2, 10 * (c - 1)) + m : T / 2 * (-Math.pow(2, -10 * --c) + 2) + m
              }
              ],
              "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(c, m, T, w) {
                  return -T * (Math.sqrt(1 - (c /= w) * c) - 1) + m
              }
              ],
              "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(c, m, T, w) {
                  return T * Math.sqrt(1 - (c = c / w - 1) * c) + m
              }
              ],
              "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(c, m, T, w) {
                  return (c /= w / 2) < 1 ? -T / 2 * (Math.sqrt(1 - c * c) - 1) + m : T / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + m
              }
              ],
              "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(c, m, T, w, _) {
                  return _ === void 0 && (_ = 1.70158),
                  T * (c /= w) * c * ((_ + 1) * c - _) + m
              }
              ],
              "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(c, m, T, w, _) {
                  return _ === void 0 && (_ = 1.70158),
                  T * ((c = c / w - 1) * c * ((_ + 1) * c + _) + 1) + m
              }
              ],
              "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(c, m, T, w, _) {
                  return _ === void 0 && (_ = 1.70158),
                  (c /= w / 2) < 1 ? T / 2 * c * c * (((_ *= 1.525) + 1) * c - _) + m : T / 2 * ((c -= 2) * c * (((_ *= 1.525) + 1) * c + _) + 2) + m
              }
              ]
          }
            , I = {
              "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
              "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
              "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
          }
            , b = document
            , A = window
            , R = "bkwld-tram"
            , S = /[\-\.0-9]/g
            , L = /[A-Z]/
            , C = "number"
            , q = /^(rgb|#)/
            , D = /(em|cm|mm|in|pt|pc|px)$/
            , P = /(em|cm|mm|in|pt|pc|px|%)$/
            , U = /(deg|rad|turn)$/
            , B = "unitless"
            , H = /(all|none) 0s ease 0s/
            , j = /^(width|height)$/
            , Q = " "
            , M = b.createElement("a")
            , O = ["Webkit", "Moz", "O", "ms"]
            , N = ["-webkit-", "-moz-", "-o-", "-ms-"]
            , V = function(c) {
              if (c in M.style)
                  return {
                      dom: c,
                      css: c
                  };
              var m, T, w = "", _ = c.split("-");
              for (m = 0; m < _.length; m++)
                  w += _[m].charAt(0).toUpperCase() + _[m].slice(1);
              for (m = 0; m < O.length; m++)
                  if (T = O[m] + w,
                  T in M.style)
                      return {
                          dom: T,
                          css: N[m] + c
                      }
          }
            , X = t.support = {
              bind: Function.prototype.bind,
              transform: V("transform"),
              transition: V("transition"),
              backface: V("backface-visibility"),
              timing: V("transition-timing-function")
          };
          if (X.transition) {
              var Z = X.timing.dom;
              if (M.style[Z] = p["ease-in-back"][0],
              !M.style[Z])
                  for (var J in I)
                      p[J][0] = I[J]
          }
          var F = t.frame = function() {
              var c = A.requestAnimationFrame || A.webkitRequestAnimationFrame || A.mozRequestAnimationFrame || A.oRequestAnimationFrame || A.msRequestAnimationFrame;
              return c && X.bind ? c.bind(A) : function(m) {
                  A.setTimeout(m, 16)
              }
          }()
            , W = t.now = function() {
              var c = A.performance
                , m = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
              return m && X.bind ? m.bind(c) : Date.now || function() {
                  return +new Date
              }
          }()
            , d = g(function(c) {
              function m($, oe) {
                  var ge = v(("" + $).split(Q))
                    , ue = ge[0];
                  oe = oe || {};
                  var be = Be[ue];
                  if (!be)
                      return l("Unsupported property: " + ue);
                  if (!oe.weak || !this.props[ue]) {
                      var Fe = be[0]
                        , we = this.props[ue];
                      return we || (we = this.props[ue] = new Fe.Bare),
                      we.init(this.$el, ge, be, oe),
                      we
                  }
              }
              function T($, oe, ge) {
                  if ($) {
                      var ue = typeof $;
                      if (oe || (this.timer && this.timer.destroy(),
                      this.queue = [],
                      this.active = !1),
                      ue == "number" && oe)
                          return this.timer = new te({
                              duration: $,
                              context: this,
                              complete: x
                          }),
                          void (this.active = !0);
                      if (ue == "string" && oe) {
                          switch ($) {
                          case "hide":
                              G.call(this);
                              break;
                          case "stop":
                              z.call(this);
                              break;
                          case "redraw":
                              re.call(this);
                              break;
                          default:
                              m.call(this, $, ge && ge[1])
                          }
                          return x.call(this)
                      }
                      if (ue == "function")
                          return void $.call(this, this);
                      if (ue == "object") {
                          var be = 0;
                          We.call(this, $, function(ye, NE) {
                              ye.span > be && (be = ye.span),
                              ye.stop(),
                              ye.animate(NE)
                          }, function(ye) {
                              "wait"in ye && (be = u(ye.wait, 0))
                          }),
                          Ee.call(this),
                          be > 0 && (this.timer = new te({
                              duration: be,
                              context: this
                          }),
                          this.active = !0,
                          oe && (this.timer.complete = x));
                          var Fe = this
                            , we = !1
                            , wr = {};
                          F(function() {
                              We.call(Fe, $, function(ye) {
                                  ye.active && (we = !0,
                                  wr[ye.name] = ye.nextStyle)
                              }),
                              we && Fe.$el.css(wr)
                          })
                      }
                  }
              }
              function w($) {
                  $ = u($, 0),
                  this.active ? this.queue.push({
                      options: $
                  }) : (this.timer = new te({
                      duration: $,
                      context: this,
                      complete: x
                  }),
                  this.active = !0)
              }
              function _($) {
                  return this.active ? (this.queue.push({
                      options: $,
                      args: arguments
                  }),
                  void (this.timer.complete = x)) : l("No active transition timer. Use start() or wait() before then().")
              }
              function x() {
                  if (this.timer && this.timer.destroy(),
                  this.active = !1,
                  this.queue.length) {
                      var $ = this.queue.shift();
                      T.call(this, $.options, !0, $.args)
                  }
              }
              function z($) {
                  this.timer && this.timer.destroy(),
                  this.queue = [],
                  this.active = !1;
                  var oe;
                  typeof $ == "string" ? (oe = {},
                  oe[$] = 1) : oe = typeof $ == "object" && $ != null ? $ : this.props,
                  We.call(this, oe, Te),
                  Ee.call(this)
              }
              function ee($) {
                  z.call(this, $),
                  We.call(this, $, Zt, LE)
              }
              function le($) {
                  typeof $ != "string" && ($ = "block"),
                  this.el.style.display = $
              }
              function G() {
                  z.call(this),
                  this.el.style.display = "none"
              }
              function re() {
                  this.el.offsetHeight
              }
              function ne() {
                  z.call(this),
                  e.removeData(this.el, R),
                  this.$el = this.el = null
              }
              function Ee() {
                  var $, oe, ge = [];
                  this.upstream && ge.push(this.upstream);
                  for ($ in this.props)
                      oe = this.props[$],
                      oe.active && ge.push(oe.string);
                  ge = ge.join(","),
                  this.style !== ge && (this.style = ge,
                  this.el.style[X.transition.dom] = ge)
              }
              function We($, oe, ge) {
                  var ue, be, Fe, we, wr = oe !== Te, ye = {};
                  for (ue in $)
                      Fe = $[ue],
                      ue in Ie ? (ye.transform || (ye.transform = {}),
                      ye.transform[ue] = Fe) : (L.test(ue) && (ue = r(ue)),
                      ue in Be ? ye[ue] = Fe : (we || (we = {}),
                      we[ue] = Fe));
                  for (ue in ye) {
                      if (Fe = ye[ue],
                      be = this.props[ue],
                      !be) {
                          if (!wr)
                              continue;
                          be = m.call(this, ue)
                      }
                      oe.call(this, be, Fe)
                  }
                  ge && we && ge.call(this, we)
              }
              function Te($) {
                  $.stop()
              }
              function Zt($, oe) {
                  $.set(oe)
              }
              function LE($) {
                  this.$el.css($)
              }
              function De($, oe) {
                  c[$] = function() {
                      return this.children ? PE.call(this, oe, arguments) : (this.el && oe.apply(this, arguments),
                      this)
                  }
              }
              function PE($, oe) {
                  var ge, ue = this.children.length;
                  for (ge = 0; ue > ge; ge++)
                      $.apply(this.children[ge], oe);
                  return this
              }
              c.init = function($) {
                  if (this.$el = e($),
                  this.el = this.$el[0],
                  this.props = {},
                  this.queue = [],
                  this.style = "",
                  this.active = !1,
                  ie.keepInherited && !ie.fallback) {
                      var oe = Pe(this.el, "transition");
                      oe && !H.test(oe) && (this.upstream = oe)
                  }
                  X.backface && ie.hideBackface && pe(this.el, X.backface.css, "hidden")
              }
              ,
              De("add", m),
              De("start", T),
              De("wait", w),
              De("then", _),
              De("next", x),
              De("stop", z),
              De("set", ee),
              De("show", le),
              De("hide", G),
              De("redraw", re),
              De("destroy", ne)
          })
            , E = g(d, function(c) {
              function m(T, w) {
                  var _ = e.data(T, R) || e.data(T, R, new d.Bare);
                  return _.el || _.init(T),
                  w ? _.start(w) : _
              }
              c.init = function(T, w) {
                  var _ = e(T);
                  if (!_.length)
                      return this;
                  if (_.length === 1)
                      return m(_[0], w);
                  var x = [];
                  return _.each(function(z, ee) {
                      x.push(m(ee, w))
                  }),
                  this.children = x,
                  this
              }
          })
            , y = g(function(c) {
              function m() {
                  var x = this.get();
                  this.update("auto");
                  var z = this.get();
                  return this.update(x),
                  z
              }
              function T(x, z, ee) {
                  return z !== void 0 && (ee = z),
                  x in p ? x : ee
              }
              function w(x) {
                  var z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(x);
                  return (z ? i(z[1], z[2], z[3]) : x).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
              }
              var _ = {
                  duration: 500,
                  ease: "ease",
                  delay: 0
              };
              c.init = function(x, z, ee, le) {
                  this.$el = x,
                  this.el = x[0];
                  var G = z[0];
                  ee[2] && (G = ee[2]),
                  Ne[G] && (G = Ne[G]),
                  this.name = G,
                  this.type = ee[1],
                  this.duration = u(z[1], this.duration, _.duration),
                  this.ease = T(z[2], this.ease, _.ease),
                  this.delay = u(z[3], this.delay, _.delay),
                  this.span = this.duration + this.delay,
                  this.active = !1,
                  this.nextStyle = null,
                  this.auto = j.test(this.name),
                  this.unit = le.unit || this.unit || ie.defaultUnit,
                  this.angle = le.angle || this.angle || ie.defaultAngle,
                  ie.fallback || le.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                  this.string = this.name + Q + this.duration + "ms" + (this.ease != "ease" ? Q + p[this.ease][0] : "") + (this.delay ? Q + this.delay + "ms" : ""))
              }
              ,
              c.set = function(x) {
                  x = this.convert(x, this.type),
                  this.update(x),
                  this.redraw()
              }
              ,
              c.transition = function(x) {
                  this.active = !0,
                  x = this.convert(x, this.type),
                  this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                  this.redraw()),
                  x == "auto" && (x = m.call(this))),
                  this.nextStyle = x
              }
              ,
              c.fallback = function(x) {
                  var z = this.el.style[this.name] || this.convert(this.get(), this.type);
                  x = this.convert(x, this.type),
                  this.auto && (z == "auto" && (z = this.convert(this.get(), this.type)),
                  x == "auto" && (x = m.call(this))),
                  this.tween = new K({
                      from: z,
                      to: x,
                      duration: this.duration,
                      delay: this.delay,
                      ease: this.ease,
                      update: this.update,
                      context: this
                  })
              }
              ,
              c.get = function() {
                  return Pe(this.el, this.name)
              }
              ,
              c.update = function(x) {
                  pe(this.el, this.name, x)
              }
              ,
              c.stop = function() {
                  (this.active || this.nextStyle) && (this.active = !1,
                  this.nextStyle = null,
                  pe(this.el, this.name, this.get()));
                  var x = this.tween;
                  x && x.context && x.destroy()
              }
              ,
              c.convert = function(x, z) {
                  if (x == "auto" && this.auto)
                      return x;
                  var ee, le = typeof x == "number", G = typeof x == "string";
                  switch (z) {
                  case C:
                      if (le)
                          return x;
                      if (G && x.replace(S, "") === "")
                          return +x;
                      ee = "number(unitless)";
                      break;
                  case q:
                      if (G) {
                          if (x === "" && this.original)
                              return this.original;
                          if (z.test(x))
                              return x.charAt(0) == "#" && x.length == 7 ? x : w(x)
                      }
                      ee = "hex or rgb string";
                      break;
                  case D:
                      if (le)
                          return x + this.unit;
                      if (G && z.test(x))
                          return x;
                      ee = "number(px) or string(unit)";
                      break;
                  case P:
                      if (le)
                          return x + this.unit;
                      if (G && z.test(x))
                          return x;
                      ee = "number(px) or string(unit or %)";
                      break;
                  case U:
                      if (le)
                          return x + this.angle;
                      if (G && z.test(x))
                          return x;
                      ee = "number(deg) or string(angle)";
                      break;
                  case B:
                      if (le || G && P.test(x))
                          return x;
                      ee = "number(unitless) or string(unit or %)"
                  }
                  return a(ee, x),
                  x
              }
              ,
              c.redraw = function() {
                  this.el.offsetHeight
              }
          })
            , h = g(y, function(c, m) {
              c.init = function() {
                  m.init.apply(this, arguments),
                  this.original || (this.original = this.convert(this.get(), q))
              }
          })
            , k = g(y, function(c, m) {
              c.init = function() {
                  m.init.apply(this, arguments),
                  this.animate = this.fallback
              }
              ,
              c.get = function() {
                  return this.$el[this.name]()
              }
              ,
              c.update = function(T) {
                  this.$el[this.name](T)
              }
          })
            , Y = g(y, function(c, m) {
              function T(w, _) {
                  var x, z, ee, le, G;
                  for (x in w)
                      le = Ie[x],
                      ee = le[0],
                      z = le[1] || x,
                      G = this.convert(w[x], ee),
                      _.call(this, z, G, ee)
              }
              c.init = function() {
                  m.init.apply(this, arguments),
                  this.current || (this.current = {},
                  Ie.perspective && ie.perspective && (this.current.perspective = ie.perspective,
                  pe(this.el, this.name, this.style(this.current)),
                  this.redraw()))
              }
              ,
              c.set = function(w) {
                  T.call(this, w, function(_, x) {
                      this.current[_] = x
                  }),
                  pe(this.el, this.name, this.style(this.current)),
                  this.redraw()
              }
              ,
              c.transition = function(w) {
                  var _ = this.values(w);
                  this.tween = new se({
                      current: this.current,
                      values: _,
                      duration: this.duration,
                      delay: this.delay,
                      ease: this.ease
                  });
                  var x, z = {};
                  for (x in this.current)
                      z[x] = x in _ ? _[x] : this.current[x];
                  this.active = !0,
                  this.nextStyle = this.style(z)
              }
              ,
              c.fallback = function(w) {
                  var _ = this.values(w);
                  this.tween = new se({
                      current: this.current,
                      values: _,
                      duration: this.duration,
                      delay: this.delay,
                      ease: this.ease,
                      update: this.update,
                      context: this
                  })
              }
              ,
              c.update = function() {
                  pe(this.el, this.name, this.style(this.current))
              }
              ,
              c.style = function(w) {
                  var _, x = "";
                  for (_ in w)
                      x += _ + "(" + w[_] + ") ";
                  return x
              }
              ,
              c.values = function(w) {
                  var _, x = {};
                  return T.call(this, w, function(z, ee, le) {
                      x[z] = ee,
                      this.current[z] === void 0 && (_ = 0,
                      ~z.indexOf("scale") && (_ = 1),
                      this.current[z] = this.convert(_, le))
                  }),
                  x
              }
          })
            , K = g(function(c) {
              function m(G) {
                  ee.push(G) === 1 && F(T)
              }
              function T() {
                  var G, re, ne, Ee = ee.length;
                  if (Ee)
                      for (F(T),
                      re = W(),
                      G = Ee; G--; )
                          ne = ee[G],
                          ne && ne.render(re)
              }
              function w(G) {
                  var re, ne = e.inArray(G, ee);
                  ne >= 0 && (re = ee.slice(ne + 1),
                  ee.length = ne,
                  re.length && (ee = ee.concat(re)))
              }
              function _(G) {
                  return Math.round(G * le) / le
              }
              function x(G, re, ne) {
                  return i(G[0] + ne * (re[0] - G[0]), G[1] + ne * (re[1] - G[1]), G[2] + ne * (re[2] - G[2]))
              }
              var z = {
                  ease: p.ease[1],
                  from: 0,
                  to: 1
              };
              c.init = function(G) {
                  this.duration = G.duration || 0,
                  this.delay = G.delay || 0;
                  var re = G.ease || z.ease;
                  p[re] && (re = p[re][1]),
                  typeof re != "function" && (re = z.ease),
                  this.ease = re,
                  this.update = G.update || o,
                  this.complete = G.complete || o,
                  this.context = G.context || this,
                  this.name = G.name;
                  var ne = G.from
                    , Ee = G.to;
                  ne === void 0 && (ne = z.from),
                  Ee === void 0 && (Ee = z.to),
                  this.unit = G.unit || "",
                  typeof ne == "number" && typeof Ee == "number" ? (this.begin = ne,
                  this.change = Ee - ne) : this.format(Ee, ne),
                  this.value = this.begin + this.unit,
                  this.start = W(),
                  G.autoplay !== !1 && this.play()
              }
              ,
              c.play = function() {
                  this.active || (this.start || (this.start = W()),
                  this.active = !0,
                  m(this))
              }
              ,
              c.stop = function() {
                  this.active && (this.active = !1,
                  w(this))
              }
              ,
              c.render = function(G) {
                  var re, ne = G - this.start;
                  if (this.delay) {
                      if (ne <= this.delay)
                          return;
                      ne -= this.delay
                  }
                  if (ne < this.duration) {
                      var Ee = this.ease(ne, 0, 1, this.duration);
                      return re = this.startRGB ? x(this.startRGB, this.endRGB, Ee) : _(this.begin + Ee * this.change),
                      this.value = re + this.unit,
                      void this.update.call(this.context, this.value)
                  }
                  re = this.endHex || this.begin + this.change,
                  this.value = re + this.unit,
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy()
              }
              ,
              c.format = function(G, re) {
                  if (re += "",
                  G += "",
                  G.charAt(0) == "#")
                      return this.startRGB = n(re),
                      this.endRGB = n(G),
                      this.endHex = G,
                      this.begin = 0,
                      void (this.change = 1);
                  if (!this.unit) {
                      var ne = re.replace(S, "")
                        , Ee = G.replace(S, "");
                      ne !== Ee && s("tween", re, G),
                      this.unit = ne
                  }
                  re = parseFloat(re),
                  G = parseFloat(G),
                  this.begin = this.value = re,
                  this.change = G - re
              }
              ,
              c.destroy = function() {
                  this.stop(),
                  this.context = null,
                  this.ease = this.update = this.complete = o
              }
              ;
              var ee = []
                , le = 1e3
          })
            , te = g(K, function(c) {
              c.init = function(m) {
                  this.duration = m.duration || 0,
                  this.complete = m.complete || o,
                  this.context = m.context,
                  this.play()
              }
              ,
              c.render = function(m) {
                  var T = m - this.start;
                  T < this.duration || (this.complete.call(this.context),
                  this.destroy())
              }
          })
            , se = g(K, function(c, m) {
              c.init = function(T) {
                  this.context = T.context,
                  this.update = T.update,
                  this.tweens = [],
                  this.current = T.current;
                  var w, _;
                  for (w in T.values)
                      _ = T.values[w],
                      this.current[w] !== _ && this.tweens.push(new K({
                          name: w,
                          from: this.current[w],
                          to: _,
                          duration: T.duration,
                          delay: T.delay,
                          ease: T.ease,
                          autoplay: !1
                      }));
                  this.play()
              }
              ,
              c.render = function(T) {
                  var w, _, x = this.tweens.length, z = !1;
                  for (w = x; w--; )
                      _ = this.tweens[w],
                      _.context && (_.render(T),
                      this.current[_.name] = _.value,
                      z = !0);
                  return z ? void (this.update && this.update.call(this.context)) : this.destroy()
              }
              ,
              c.destroy = function() {
                  if (m.destroy.call(this),
                  this.tweens) {
                      var T, w = this.tweens.length;
                      for (T = w; T--; )
                          this.tweens[T].destroy();
                      this.tweens = null,
                      this.current = null
                  }
              }
          })
            , ie = t.config = {
              debug: !1,
              defaultUnit: "px",
              defaultAngle: "deg",
              keepInherited: !1,
              hideBackface: !1,
              perspective: "",
              fallback: !X.transition,
              agentTests: []
          };
          t.fallback = function(c) {
              if (!X.transition)
                  return ie.fallback = !0;
              ie.agentTests.push("(" + c + ")");
              var m = new RegExp(ie.agentTests.join("|"),"i");
              ie.fallback = m.test(navigator.userAgent)
          }
          ,
          t.fallback("6.0.[2-5] Safari"),
          t.tween = function(c) {
              return new K(c)
          }
          ,
          t.delay = function(c, m, T) {
              return new te({
                  complete: m,
                  duration: c,
                  context: T
              })
          }
          ,
          e.fn.tram = function(c) {
              return t.call(null, this, c)
          }
          ;
          var pe = e.style
            , Pe = e.css
            , Ne = {
              transform: X.transform && X.transform.css
          }
            , Be = {
              color: [h, q],
              background: [h, q, "background-color"],
              "outline-color": [h, q],
              "border-color": [h, q],
              "border-top-color": [h, q],
              "border-right-color": [h, q],
              "border-bottom-color": [h, q],
              "border-left-color": [h, q],
              "border-width": [y, D],
              "border-top-width": [y, D],
              "border-right-width": [y, D],
              "border-bottom-width": [y, D],
              "border-left-width": [y, D],
              "border-spacing": [y, D],
              "letter-spacing": [y, D],
              margin: [y, D],
              "margin-top": [y, D],
              "margin-right": [y, D],
              "margin-bottom": [y, D],
              "margin-left": [y, D],
              padding: [y, D],
              "padding-top": [y, D],
              "padding-right": [y, D],
              "padding-bottom": [y, D],
              "padding-left": [y, D],
              "outline-width": [y, D],
              opacity: [y, C],
              top: [y, P],
              right: [y, P],
              bottom: [y, P],
              left: [y, P],
              "font-size": [y, P],
              "text-indent": [y, P],
              "word-spacing": [y, P],
              width: [y, P],
              "min-width": [y, P],
              "max-width": [y, P],
              height: [y, P],
              "min-height": [y, P],
              "max-height": [y, P],
              "line-height": [y, B],
              "scroll-top": [k, C, "scrollTop"],
              "scroll-left": [k, C, "scrollLeft"]
          }
            , Ie = {};
          X.transform && (Be.transform = [Y],
          Ie = {
              x: [P, "translateX"],
              y: [P, "translateY"],
              rotate: [U],
              rotateX: [U],
              rotateY: [U],
              scale: [C],
              scaleX: [C],
              scaleY: [C],
              skew: [U],
              skewX: [U],
              skewY: [U]
          }),
          X.transform && X.backface && (Ie.z = [P, "translateZ"],
          Ie.rotateZ = [U],
          Ie.scaleZ = [C],
          Ie.perspective = [D]);
          var tt = /ms/
            , Tt = /s|\./;
          return e.tram = t
      }(window.jQuery)
  }
  );
  var ca = f( (EF, ua) => {
      "use strict";
      var XE = window.$
        , VE = Bn() && XE.tram;
      ua.exports = function() {
          var e = {};
          e.VERSION = "1.6.0-Penou";
          var t = {}
            , r = Array.prototype
            , n = Object.prototype
            , i = Function.prototype
            , o = r.push
            , a = r.slice
            , s = r.concat
            , u = n.toString
            , l = n.hasOwnProperty
            , v = r.forEach
            , g = r.map
            , p = r.reduce
            , I = r.reduceRight
            , b = r.filter
            , A = r.every
            , R = r.some
            , S = r.indexOf
            , L = r.lastIndexOf
            , C = Array.isArray
            , q = Object.keys
            , D = i.bind
            , P = e.each = e.forEach = function(O, N, V) {
              if (O == null)
                  return O;
              if (v && O.forEach === v)
                  O.forEach(N, V);
              else if (O.length === +O.length) {
                  for (var X = 0, Z = O.length; X < Z; X++)
                      if (N.call(V, O[X], X, O) === t)
                          return
              } else
                  for (var J = e.keys(O), X = 0, Z = J.length; X < Z; X++)
                      if (N.call(V, O[J[X]], J[X], O) === t)
                          return;
              return O
          }
          ;
          e.map = e.collect = function(O, N, V) {
              var X = [];
              return O == null ? X : g && O.map === g ? O.map(N, V) : (P(O, function(Z, J, F) {
                  X.push(N.call(V, Z, J, F))
              }),
              X)
          }
          ,
          e.find = e.detect = function(O, N, V) {
              var X;
              return U(O, function(Z, J, F) {
                  if (N.call(V, Z, J, F))
                      return X = Z,
                      !0
              }),
              X
          }
          ,
          e.filter = e.select = function(O, N, V) {
              var X = [];
              return O == null ? X : b && O.filter === b ? O.filter(N, V) : (P(O, function(Z, J, F) {
                  N.call(V, Z, J, F) && X.push(Z)
              }),
              X)
          }
          ;
          var U = e.some = e.any = function(O, N, V) {
              N || (N = e.identity);
              var X = !1;
              return O == null ? X : R && O.some === R ? O.some(N, V) : (P(O, function(Z, J, F) {
                  if (X || (X = N.call(V, Z, J, F)))
                      return t
              }),
              !!X)
          }
          ;
          e.contains = e.include = function(O, N) {
              return O == null ? !1 : S && O.indexOf === S ? O.indexOf(N) != -1 : U(O, function(V) {
                  return V === N
              })
          }
          ,
          e.delay = function(O, N) {
              var V = a.call(arguments, 2);
              return setTimeout(function() {
                  return O.apply(null, V)
              }, N)
          }
          ,
          e.defer = function(O) {
              return e.delay.apply(e, [O, 1].concat(a.call(arguments, 1)))
          }
          ,
          e.throttle = function(O) {
              var N, V, X;
              return function() {
                  N || (N = !0,
                  V = arguments,
                  X = this,
                  VE.frame(function() {
                      N = !1,
                      O.apply(X, V)
                  }))
              }
          }
          ,
          e.debounce = function(O, N, V) {
              var X, Z, J, F, W, d = function() {
                  var E = e.now() - F;
                  E < N ? X = setTimeout(d, N - E) : (X = null,
                  V || (W = O.apply(J, Z),
                  J = Z = null))
              };
              return function() {
                  J = this,
                  Z = arguments,
                  F = e.now();
                  var E = V && !X;
                  return X || (X = setTimeout(d, N)),
                  E && (W = O.apply(J, Z),
                  J = Z = null),
                  W
              }
          }
          ,
          e.defaults = function(O) {
              if (!e.isObject(O))
                  return O;
              for (var N = 1, V = arguments.length; N < V; N++) {
                  var X = arguments[N];
                  for (var Z in X)
                      O[Z] === void 0 && (O[Z] = X[Z])
              }
              return O
          }
          ,
          e.keys = function(O) {
              if (!e.isObject(O))
                  return [];
              if (q)
                  return q(O);
              var N = [];
              for (var V in O)
                  e.has(O, V) && N.push(V);
              return N
          }
          ,
          e.has = function(O, N) {
              return l.call(O, N)
          }
          ,
          e.isObject = function(O) {
              return O === Object(O)
          }
          ,
          e.now = Date.now || function() {
              return new Date().getTime()
          }
          ,
          e.templateSettings = {
              evaluate: /<%([\s\S]+?)%>/g,
              interpolate: /<%=([\s\S]+?)%>/g,
              escape: /<%-([\s\S]+?)%>/g
          };
          var B = /(.)^/
            , H = {
              "'": "'",
              "\\": "\\",
              "\r": "r",
              "\n": "n",
              "\u2028": "u2028",
              "\u2029": "u2029"
          }
            , j = /\\|'|\r|\n|\u2028|\u2029/g
            , Q = function(O) {
              return "\\" + H[O]
          }
            , M = /^\s*(\w|\$)+\s*$/;
          return e.template = function(O, N, V) {
              !N && V && (N = V),
              N = e.defaults({}, N, e.templateSettings);
              var X = RegExp([(N.escape || B).source, (N.interpolate || B).source, (N.evaluate || B).source].join("|") + "|$", "g")
                , Z = 0
                , J = "__p+='";
              O.replace(X, function(E, y, h, k, Y) {
                  return J += O.slice(Z, Y).replace(j, Q),
                  Z = Y + E.length,
                  y ? J += `'+
((__t=(` + y + `))==null?'':_.escape(__t))+
'` : h ? J += `'+
((__t=(` + h + `))==null?'':__t)+
'` : k && (J += `';
` + k + `
__p+='`),
                  E
              }),
              J += `';
`;
              var F = N.variable;
              if (F) {
                  if (!M.test(F))
                      throw new Error("variable is not a bare identifier: " + F)
              } else
                  J = `with(obj||{}){
` + J + `}
`,
                  F = "obj";
              J = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + J + `return __p;
`;
              var W;
              try {
                  W = new Function(N.variable || "obj","_",J)
              } catch (E) {
                  throw E.source = J,
                  E
              }
              var d = function(E) {
                  return W.call(this, E, e)
              };
              return d.source = "function(" + F + `){
` + J + "}",
              d
          }
          ,
          e
      }()
  }
  );
  var Ke = f( (yF, ya) => {
      "use strict";
      var ce = {}
        , bt = {}
        , At = []
        , Hn = window.Penou || []
        , st = window.jQuery
        , Ge = st(window)
        , kE = st(document)
        , ze = st.isFunction
        , qe = ce._ = ca()
        , fa = ce.tram = Bn() && st.tram
        , Cr = !1
        , zn = !1;
      fa.config.hideBackface = !1;
      fa.config.keepInherited = !0;
      ce.define = function(e, t, r) {
          bt[e] && pa(bt[e]);
          var n = bt[e] = t(st, qe, r) || {};
          return da(n),
          n
      }
      ;
      ce.require = function(e) {
          return bt[e]
      }
      ;
      function da(e) {
          ce.env() && (ze(e.design) && Ge.on("__wf_design", e.design),
          ze(e.preview) && Ge.on("__wf_preview", e.preview)),
          ze(e.destroy) && Ge.on("__wf_destroy", e.destroy),
          e.ready && ze(e.ready) && UE(e)
      }
      function UE(e) {
          if (Cr) {
              e.ready();
              return
          }
          qe.contains(At, e.ready) || At.push(e.ready)
      }
      function pa(e) {
          ze(e.design) && Ge.off("__wf_design", e.design),
          ze(e.preview) && Ge.off("__wf_preview", e.preview),
          ze(e.destroy) && Ge.off("__wf_destroy", e.destroy),
          e.ready && ze(e.ready) && BE(e)
      }
      function BE(e) {
          At = qe.filter(At, function(t) {
              return t !== e.ready
          })
      }
      ce.push = function(e) {
          if (Cr) {
              ze(e) && e();
              return
          }
          Hn.push(e)
      }
      ;
      ce.env = function(e) {
          var t = window.__wf_design
            , r = typeof t < "u";
          if (!e)
              return r;
          if (e === "design")
              return r && t;
          if (e === "preview")
              return r && !t;
          if (e === "slug")
              return r && window.__wf_slug;
          if (e === "editor")
              return window.PenouEditor;
          if (e === "test")
              return window.__wf_test;
          if (e === "frame")
              return window !== window.top
      }
      ;
      var Rr = navigator.userAgent.toLowerCase()
        , ga = ce.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
        , WE = ce.env.chrome = /chrome/.test(Rr) && /Google/.test(navigator.vendor) && parseInt(Rr.match(/chrome\/(\d+)\./)[1], 10)
        , HE = ce.env.ios = /(ipod|iphone|ipad)/.test(Rr);
      ce.env.safari = /safari/.test(Rr) && !WE && !HE;
      var Wn;
      ga && kE.on("touchstart mousedown", function(e) {
          Wn = e.target
      });
      ce.validClick = ga ? function(e) {
          return e === Wn || st.contains(e, Wn)
      }
      : function() {
          return !0
      }
      ;
      var ha = "resize.penou orientationchange.penou load.penou"
        , zE = "scroll.penou " + ha;
      ce.resize = Kn(Ge, ha);
      ce.scroll = Kn(Ge, zE);
      ce.redraw = Kn();
      function Kn(e, t) {
          var r = []
            , n = {};
          return n.up = qe.throttle(function(i) {
              qe.each(r, function(o) {
                  o(i)
              })
          }),
          e && t && e.on(t, n.up),
          n.on = function(i) {
              typeof i == "function" && (qe.contains(r, i) || r.push(i))
          }
          ,
          n.off = function(i) {
              if (!arguments.length) {
                  r = [];
                  return
              }
              r = qe.filter(r, function(o) {
                  return o !== i
              })
          }
          ,
          n
      }
      ce.location = function(e) {
          window.location = e
      }
      ;
      ce.env() && (ce.location = function() {}
      );
      ce.ready = function() {
          Cr = !0,
          zn ? KE() : qe.each(At, la),
          qe.each(Hn, la),
          ce.resize.up()
      }
      ;
      function la(e) {
          ze(e) && e()
      }
      function KE() {
          zn = !1,
          qe.each(bt, da)
      }
      var gt;
      ce.load = function(e) {
          gt.then(e)
      }
      ;
      function Ea() {
          gt && (gt.reject(),
          Ge.off("load", gt.resolve)),
          gt = new st.Deferred,
          Ge.on("load", gt.resolve)
      }
      ce.destroy = function(e) {
          e = e || {},
          zn = !0,
          Ge.triggerHandler("__wf_destroy"),
          e.domready != null && (Cr = e.domready),
          qe.each(bt, pa),
          ce.resize.off(),
          ce.scroll.off(),
          ce.redraw.off(),
          At = [],
          Hn = [],
          gt.state() === "pending" && Ea()
      }
      ;
      st(ce.ready);
      Ea();
      ya.exports = window.Penou = ce
  }
  );
  var _a = f( (vF, ma) => {
      "use strict";
      var va = Ke();
      va.define("brand", ma.exports = function(e) {
          var t = {}, r = document, n = e("html"), i = e("body"), o = ".w-penou-badge", a = window.location, s = /PhantomJS/i.test(navigator.userAgent), u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", l;
          t.ready = function() {
              var I = n.attr("data-wf-status")
                , b = n.attr("data-wf-domain") || "";
              /\.penou\.io$/i.test(b) && a.hostname !== b && (I = !0),
              I && !s && (l = l || g(),
              p(),
              setTimeout(p, 500),
              e(r).off(u, v).on(u, v))
          }
          ;
          function v() {
              var I = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
              e(l).attr("style", I ? "display: none !important;" : "")
          }
          function g() {
              var I = e('<a class="w-penou-badge"></a>').attr("href", "https://penou.com?utm_campaign=brandjs")
                , b = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/penou-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                  marginRight: "4px",
                  width: "26px"
              })
                , A = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/penou-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Penou");
              return I.append(b, A),
              I[0]
          }
          function p() {
              var I = i.children(o)
                , b = I.length && I.get(0) === l
                , A = va.env("editor");
              if (b) {
                  A && I.remove();
                  return
              }
              I.length && I.remove(),
              A || i.append(l)
          }
          return t
      }
      )
  }
  );
  var Ta = f( (mF, Ia) => {
      "use strict";
      var jE = Ke();
      jE.define("focus-visible", Ia.exports = function() {
          function e(r) {
              var n = !0
                , i = !1
                , o = null
                , a = {
                  text: !0,
                  search: !0,
                  url: !0,
                  tel: !0,
                  email: !0,
                  password: !0,
                  number: !0,
                  date: !0,
                  month: !0,
                  week: !0,
                  time: !0,
                  datetime: !0,
                  "datetime-local": !0
              };
              function s(C) {
                  return !!(C && C !== document && C.nodeName !== "HTML" && C.nodeName !== "BODY" && "classList"in C && "contains"in C.classList)
              }
              function u(C) {
                  var q = C.type
                    , D = C.tagName;
                  return !!(D === "INPUT" && a[q] && !C.readOnly || D === "TEXTAREA" && !C.readOnly || C.isContentEditable)
              }
              function l(C) {
                  C.getAttribute("data-wf-focus-visible") || C.setAttribute("data-wf-focus-visible", "true")
              }
              function v(C) {
                  C.getAttribute("data-wf-focus-visible") && C.removeAttribute("data-wf-focus-visible")
              }
              function g(C) {
                  C.metaKey || C.altKey || C.ctrlKey || (s(r.activeElement) && l(r.activeElement),
                  n = !0)
              }
              function p() {
                  n = !1
              }
              function I(C) {
                  s(C.target) && (n || u(C.target)) && l(C.target)
              }
              function b(C) {
                  s(C.target) && C.target.hasAttribute("data-wf-focus-visible") && (i = !0,
                  window.clearTimeout(o),
                  o = window.setTimeout(function() {
                      i = !1
                  }, 100),
                  v(C.target))
              }
              function A() {
                  document.visibilityState === "hidden" && (i && (n = !0),
                  R())
              }
              function R() {
                  document.addEventListener("mousemove", L),
                  document.addEventListener("mousedown", L),
                  document.addEventListener("mouseup", L),
                  document.addEventListener("pointermove", L),
                  document.addEventListener("pointerdown", L),
                  document.addEventListener("pointerup", L),
                  document.addEventListener("touchmove", L),
                  document.addEventListener("touchstart", L),
                  document.addEventListener("touchend", L)
              }
              function S() {
                  document.removeEventListener("mousemove", L),
                  document.removeEventListener("mousedown", L),
                  document.removeEventListener("mouseup", L),
                  document.removeEventListener("pointermove", L),
                  document.removeEventListener("pointerdown", L),
                  document.removeEventListener("pointerup", L),
                  document.removeEventListener("touchmove", L),
                  document.removeEventListener("touchstart", L),
                  document.removeEventListener("touchend", L)
              }
              function L(C) {
                  C.target.nodeName && C.target.nodeName.toLowerCase() === "html" || (n = !1,
                  S())
              }
              document.addEventListener("keydown", g, !0),
              document.addEventListener("mousedown", p, !0),
              document.addEventListener("pointerdown", p, !0),
              document.addEventListener("touchstart", p, !0),
              document.addEventListener("visibilitychange", A, !0),
              R(),
              r.addEventListener("focus", I, !0),
              r.addEventListener("blur", b, !0)
          }
          function t() {
              if (typeof document < "u")
                  try {
                      document.querySelector(":focus-visible")
                  } catch {
                      e(document)
                  }
          }
          return {
              ready: t
          }
      }
      )
  }
  );
  var Sa = f( (_F, Aa) => {
      "use strict";
      var ba = Ke();
      ba.define("focus", Aa.exports = function() {
          var e = []
            , t = !1;
          function r(a) {
              t && (a.preventDefault(),
              a.stopPropagation(),
              a.stopImmediatePropagation(),
              e.unshift(a))
          }
          function n(a) {
              var s = a.target
                , u = s.tagName;
              return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
          }
          function i(a) {
              n(a) && (t = !0,
              setTimeout( () => {
                  for (t = !1,
                  a.target.focus(); e.length > 0; ) {
                      var s = e.pop();
                      s.target.dispatchEvent(new MouseEvent(s.type,s))
                  }
              }
              , 0))
          }
          function o() {
              typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && ba.env.safari && (document.addEventListener("mousedown", i, !0),
              document.addEventListener("mouseup", r, !0),
              document.addEventListener("click", r, !0))
          }
          return {
              ready: o
          }
      }
      )
  }
  );
  var xa = f( (IF, wa) => {
      "use strict";
      var jn = window.jQuery
        , je = {}
        , Lr = []
        , Oa = ".w-ix"
        , Pr = {
          reset: function(e, t) {
              t.__wf_intro = null
          },
          intro: function(e, t) {
              t.__wf_intro || (t.__wf_intro = !0,
              jn(t).triggerHandler(je.types.INTRO))
          },
          outro: function(e, t) {
              t.__wf_intro && (t.__wf_intro = null,
              jn(t).triggerHandler(je.types.OUTRO))
          }
      };
      je.triggers = {};
      je.types = {
          INTRO: "w-ix-intro" + Oa,
          OUTRO: "w-ix-outro" + Oa
      };
      je.init = function() {
          for (var e = Lr.length, t = 0; t < e; t++) {
              var r = Lr[t];
              r[0](0, r[1])
          }
          Lr = [],
          jn.extend(je.triggers, Pr)
      }
      ;
      je.async = function() {
          for (var e in Pr) {
              var t = Pr[e];
              Pr.hasOwnProperty(e) && (je.triggers[e] = function(r, n) {
                  Lr.push([t, n])
              }
              )
          }
      }
      ;
      je.async();
      wa.exports = je
  }
  );
  var $n = f( (TF, La) => {
      "use strict";
      var Yn = xa();
      function Ra(e, t) {
          var r = document.createEvent("CustomEvent");
          r.initCustomEvent(t, !0, !0, null),
          e.dispatchEvent(r)
      }
      var YE = window.jQuery
        , Nr = {}
        , Ca = ".w-ix"
        , $E = {
          reset: function(e, t) {
              Yn.triggers.reset(e, t)
          },
          intro: function(e, t) {
              Yn.triggers.intro(e, t),
              Ra(t, "COMPONENT_ACTIVE")
          },
          outro: function(e, t) {
              Yn.triggers.outro(e, t),
              Ra(t, "COMPONENT_INACTIVE")
          }
      };
      Nr.triggers = {};
      Nr.types = {
          INTRO: "w-ix-intro" + Ca,
          OUTRO: "w-ix-outro" + Ca
      };
      YE.extend(Nr.triggers, $E);
      La.exports = Nr
  }
  );
  var Qn = f( (bF, Pa) => {
      var QE = typeof global == "object" && global && global.Object === Object && global;
      Pa.exports = QE
  }
  );
  var Xe = f( (AF, Na) => {
      var ZE = Qn()
        , JE = typeof self == "object" && self && self.Object === Object && self
        , ey = ZE || JE || Function("return this")();
      Na.exports = ey
  }
  );
  var St = f( (SF, Ma) => {
      var ty = Xe()
        , ry = ty.Symbol;
      Ma.exports = ry
  }
  );
  var Ga = f( (OF, qa) => {
      var Da = St()
        , Fa = Object.prototype
        , ny = Fa.hasOwnProperty
        , iy = Fa.toString
        , Jt = Da ? Da.toStringTag : void 0;
      function oy(e) {
          var t = ny.call(e, Jt)
            , r = e[Jt];
          try {
              e[Jt] = void 0;
              var n = !0
          } catch {}
          var i = iy.call(e);
          return n && (t ? e[Jt] = r : delete e[Jt]),
          i
      }
      qa.exports = oy
  }
  );
  var Va = f( (wF, Xa) => {
      var ay = Object.prototype
        , sy = ay.toString;
      function uy(e) {
          return sy.call(e)
      }
      Xa.exports = uy
  }
  );
  var ut = f( (xF, Ba) => {
      var ka = St()
        , cy = Ga()
        , ly = Va()
        , fy = "[object Null]"
        , dy = "[object Undefined]"
        , Ua = ka ? ka.toStringTag : void 0;
      function py(e) {
          return e == null ? e === void 0 ? dy : fy : Ua && Ua in Object(e) ? cy(e) : ly(e)
      }
      Ba.exports = py
  }
  );
  var Zn = f( (RF, Wa) => {
      function gy(e, t) {
          return function(r) {
              return e(t(r))
          }
      }
      Wa.exports = gy
  }
  );
  var Jn = f( (CF, Ha) => {
      var hy = Zn()
        , Ey = hy(Object.getPrototypeOf, Object);
      Ha.exports = Ey
  }
  );
  var rt = f( (LF, za) => {
      function yy(e) {
          return e != null && typeof e == "object"
      }
      za.exports = yy
  }
  );
  var ei = f( (PF, ja) => {
      var vy = ut()
        , my = Jn()
        , _y = rt()
        , Iy = "[object Object]"
        , Ty = Function.prototype
        , by = Object.prototype
        , Ka = Ty.toString
        , Ay = by.hasOwnProperty
        , Sy = Ka.call(Object);
      function Oy(e) {
          if (!_y(e) || vy(e) != Iy)
              return !1;
          var t = my(e);
          if (t === null)
              return !0;
          var r = Ay.call(t, "constructor") && t.constructor;
          return typeof r == "function" && r instanceof r && Ka.call(r) == Sy
      }
      ja.exports = Oy
  }
  );
  var Ya = f(ti => {
      "use strict";
      Object.defineProperty(ti, "__esModule", {
          value: !0
      });
      ti.default = wy;
      function wy(e) {
          var t, r = e.Symbol;
          return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"),
          r.observable = t) : t = "@@observable",
          t
      }
  }
  );
  var $a = f( (ni, ri) => {
      "use strict";
      Object.defineProperty(ni, "__esModule", {
          value: !0
      });
      var xy = Ya()
        , Ry = Cy(xy);
      function Cy(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var Ot;
      typeof self < "u" ? Ot = self : typeof window < "u" ? Ot = window : typeof global < "u" ? Ot = global : typeof ri < "u" ? Ot = ri : Ot = Function("return this")();
      var Ly = (0,
      Ry.default)(Ot);
      ni.default = Ly
  }
  );
  var ii = f(er => {
      "use strict";
      er.__esModule = !0;
      er.ActionTypes = void 0;
      er.default = es;
      var Py = ei()
        , Ny = Ja(Py)
        , My = $a()
        , Qa = Ja(My);
      function Ja(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var Za = er.ActionTypes = {
          INIT: "@@redux/INIT"
      };
      function es(e, t, r) {
          var n;
          if (typeof t == "function" && typeof r > "u" && (r = t,
          t = void 0),
          typeof r < "u") {
              if (typeof r != "function")
                  throw new Error("Expected the enhancer to be a function.");
              return r(es)(e, t)
          }
          if (typeof e != "function")
              throw new Error("Expected the reducer to be a function.");
          var i = e
            , o = t
            , a = []
            , s = a
            , u = !1;
          function l() {
              s === a && (s = a.slice())
          }
          function v() {
              return o
          }
          function g(A) {
              if (typeof A != "function")
                  throw new Error("Expected listener to be a function.");
              var R = !0;
              return l(),
              s.push(A),
              function() {
                  if (R) {
                      R = !1,
                      l();
                      var L = s.indexOf(A);
                      s.splice(L, 1)
                  }
              }
          }
          function p(A) {
              if (!(0,
              Ny.default)(A))
                  throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
              if (typeof A.type > "u")
                  throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
              if (u)
                  throw new Error("Reducers may not dispatch actions.");
              try {
                  u = !0,
                  o = i(o, A)
              } finally {
                  u = !1
              }
              for (var R = a = s, S = 0; S < R.length; S++)
                  R[S]();
              return A
          }
          function I(A) {
              if (typeof A != "function")
                  throw new Error("Expected the nextReducer to be a function.");
              i = A,
              p({
                  type: Za.INIT
              })
          }
          function b() {
              var A, R = g;
              return A = {
                  subscribe: function(L) {
                      if (typeof L != "object")
                          throw new TypeError("Expected the observer to be an object.");
                      function C() {
                          L.next && L.next(v())
                      }
                      C();
                      var q = R(C);
                      return {
                          unsubscribe: q
                      }
                  }
              },
              A[Qa.default] = function() {
                  return this
              }
              ,
              A
          }
          return p({
              type: Za.INIT
          }),
          n = {
              dispatch: p,
              subscribe: g,
              getState: v,
              replaceReducer: I
          },
          n[Qa.default] = b,
          n
      }
  }
  );
  var ai = f(oi => {
      "use strict";
      oi.__esModule = !0;
      oi.default = Dy;
      function Dy(e) {
          typeof console < "u" && typeof console.error == "function" && console.error(e);
          try {
              throw new Error(e)
          } catch {}
      }
  }
  );
  var ns = f(si => {
      "use strict";
      si.__esModule = !0;
      si.default = Vy;
      var ts = ii()
        , Fy = ei()
        , FF = rs(Fy)
        , qy = ai()
        , qF = rs(qy);
      function rs(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      function Gy(e, t) {
          var r = t && t.type
            , n = r && '"' + r.toString() + '"' || "an action";
          return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      }
      function Xy(e) {
          Object.keys(e).forEach(function(t) {
              var r = e[t]
                , n = r(void 0, {
                  type: ts.ActionTypes.INIT
              });
              if (typeof n > "u")
                  throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
              var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
              if (typeof r(void 0, {
                  type: i
              }) > "u")
                  throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + ts.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
          })
      }
      function Vy(e) {
          for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
              var i = t[n];
              typeof e[i] == "function" && (r[i] = e[i])
          }
          var o = Object.keys(r);
          if (!1)
              var a;
          var s;
          try {
              Xy(r)
          } catch (u) {
              s = u
          }
          return function() {
              var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                , v = arguments[1];
              if (s)
                  throw s;
              if (!1)
                  var g;
              for (var p = !1, I = {}, b = 0; b < o.length; b++) {
                  var A = o[b]
                    , R = r[A]
                    , S = l[A]
                    , L = R(S, v);
                  if (typeof L > "u") {
                      var C = Gy(A, v);
                      throw new Error(C)
                  }
                  I[A] = L,
                  p = p || L !== S
              }
              return p ? I : l
          }
      }
  }
  );
  var os = f(ui => {
      "use strict";
      ui.__esModule = !0;
      ui.default = ky;
      function is(e, t) {
          return function() {
              return t(e.apply(void 0, arguments))
          }
      }
      function ky(e, t) {
          if (typeof e == "function")
              return is(e, t);
          if (typeof e != "object" || e === null)
              throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
          for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
              var o = r[i]
                , a = e[o];
              typeof a == "function" && (n[o] = is(a, t))
          }
          return n
      }
  }
  );
  var li = f(ci => {
      "use strict";
      ci.__esModule = !0;
      ci.default = Uy;
      function Uy() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
          if (t.length === 0)
              return function(o) {
                  return o
              }
              ;
          if (t.length === 1)
              return t[0];
          var n = t[t.length - 1]
            , i = t.slice(0, -1);
          return function() {
              return i.reduceRight(function(o, a) {
                  return a(o)
              }, n.apply(void 0, arguments))
          }
      }
  }
  );
  var as = f(fi => {
      "use strict";
      fi.__esModule = !0;
      var By = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
      }
      ;
      fi.default = Ky;
      var Wy = li()
        , Hy = zy(Wy);
      function zy(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      function Ky() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
          return function(n) {
              return function(i, o, a) {
                  var s = n(i, o, a)
                    , u = s.dispatch
                    , l = []
                    , v = {
                      getState: s.getState,
                      dispatch: function(p) {
                          return u(p)
                      }
                  };
                  return l = t.map(function(g) {
                      return g(v)
                  }),
                  u = Hy.default.apply(void 0, l)(s.dispatch),
                  By({}, s, {
                      dispatch: u
                  })
              }
          }
      }
  }
  );
  var di = f(Me => {
      "use strict";
      Me.__esModule = !0;
      Me.compose = Me.applyMiddleware = Me.bindActionCreators = Me.combineReducers = Me.createStore = void 0;
      var jy = ii()
        , Yy = wt(jy)
        , $y = ns()
        , Qy = wt($y)
        , Zy = os()
        , Jy = wt(Zy)
        , ev = as()
        , tv = wt(ev)
        , rv = li()
        , nv = wt(rv)
        , iv = ai()
        , UF = wt(iv);
      function wt(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      Me.createStore = Yy.default;
      Me.combineReducers = Qy.default;
      Me.bindActionCreators = Jy.default;
      Me.applyMiddleware = tv.default;
      Me.compose = nv.default
  }
  );
  var Ve, pi, Ye, ov, av, Mr, sv, gi = de( () => {
      "use strict";
      Ve = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL"
      },
      pi = {
          ELEMENT: "ELEMENT",
          CLASS: "CLASS",
          PAGE: "PAGE"
      },
      Ye = {
          ELEMENT: "ELEMENT",
          VIEWPORT: "VIEWPORT"
      },
      ov = {
          X_AXIS: "X_AXIS",
          Y_AXIS: "Y_AXIS"
      },
      av = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
      },
      Mr = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
      },
      sv = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
      }
  }
  );
  var Ae, uv, Dr = de( () => {
      "use strict";
      Ae = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
      },
      uv = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
      }
  }
  );
  var cv, ss = de( () => {
      "use strict";
      cv = {
          MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
          MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
          MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
          SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
          SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
          MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
          PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
          PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
          PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
          NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
          DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
          ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
          TAB_INTERACTION: "TAB_INTERACTION",
          SLIDER_INTERACTION: "SLIDER_INTERACTION"
      }
  }
  );
  var lv, fv, dv, pv, gv, hv, Ev, hi, us = de( () => {
      "use strict";
      Dr();
      ({TRANSFORM_MOVE: lv, TRANSFORM_SCALE: fv, TRANSFORM_ROTATE: dv, TRANSFORM_SKEW: pv, STYLE_SIZE: gv, STYLE_FILTER: hv, STYLE_FONT_VARIATION: Ev} = Ae),
      hi = {
          [lv]: !0,
          [fv]: !0,
          [dv]: !0,
          [pv]: !0,
          [gv]: !0,
          [hv]: !0,
          [Ev]: !0
      }
  }
  );
  var ve = {};
  xe(ve, {
      IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Nv,
      IX2_ANIMATION_FRAME_CHANGED: () => wv,
      IX2_CLEAR_REQUESTED: () => Av,
      IX2_ELEMENT_STATE_CHANGED: () => Pv,
      IX2_EVENT_LISTENER_ADDED: () => Sv,
      IX2_EVENT_STATE_CHANGED: () => Ov,
      IX2_INSTANCE_ADDED: () => Rv,
      IX2_INSTANCE_REMOVED: () => Lv,
      IX2_INSTANCE_STARTED: () => Cv,
      IX2_MEDIA_QUERIES_DEFINED: () => Dv,
      IX2_PARAMETER_CHANGED: () => xv,
      IX2_PLAYBACK_REQUESTED: () => Tv,
      IX2_PREVIEW_REQUESTED: () => Iv,
      IX2_RAW_DATA_IMPORTED: () => yv,
      IX2_SESSION_INITIALIZED: () => vv,
      IX2_SESSION_STARTED: () => mv,
      IX2_SESSION_STOPPED: () => _v,
      IX2_STOP_REQUESTED: () => bv,
      IX2_TEST_FRAME_RENDERED: () => Fv,
      IX2_VIEWPORT_WIDTH_CHANGED: () => Mv
  });
  var yv, vv, mv, _v, Iv, Tv, bv, Av, Sv, Ov, wv, xv, Rv, Cv, Lv, Pv, Nv, Mv, Dv, Fv, cs = de( () => {
      "use strict";
      yv = "IX2_RAW_DATA_IMPORTED",
      vv = "IX2_SESSION_INITIALIZED",
      mv = "IX2_SESSION_STARTED",
      _v = "IX2_SESSION_STOPPED",
      Iv = "IX2_PREVIEW_REQUESTED",
      Tv = "IX2_PLAYBACK_REQUESTED",
      bv = "IX2_STOP_REQUESTED",
      Av = "IX2_CLEAR_REQUESTED",
      Sv = "IX2_EVENT_LISTENER_ADDED",
      Ov = "IX2_EVENT_STATE_CHANGED",
      wv = "IX2_ANIMATION_FRAME_CHANGED",
      xv = "IX2_PARAMETER_CHANGED",
      Rv = "IX2_INSTANCE_ADDED",
      Cv = "IX2_INSTANCE_STARTED",
      Lv = "IX2_INSTANCE_REMOVED",
      Pv = "IX2_ELEMENT_STATE_CHANGED",
      Nv = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
      Mv = "IX2_VIEWPORT_WIDTH_CHANGED",
      Dv = "IX2_MEDIA_QUERIES_DEFINED",
      Fv = "IX2_TEST_FRAME_RENDERED"
  }
  );
  var _e = {};
  xe(_e, {
      ABSTRACT_NODE: () => Mm,
      AUTO: () => bm,
      BACKGROUND: () => ym,
      BACKGROUND_COLOR: () => Em,
      BAR_DELIMITER: () => Om,
      BORDER_COLOR: () => vm,
      BOUNDARY_SELECTOR: () => kv,
      CHILDREN: () => wm,
      COLON_DELIMITER: () => Sm,
      COLOR: () => mm,
      COMMA_DELIMITER: () => Am,
      CONFIG_UNIT: () => Yv,
      CONFIG_VALUE: () => Hv,
      CONFIG_X_UNIT: () => zv,
      CONFIG_X_VALUE: () => Uv,
      CONFIG_Y_UNIT: () => Kv,
      CONFIG_Y_VALUE: () => Bv,
      CONFIG_Z_UNIT: () => jv,
      CONFIG_Z_VALUE: () => Wv,
      DISPLAY: () => _m,
      FILTER: () => dm,
      FLEX: () => Im,
      FONT_VARIATION_SETTINGS: () => pm,
      HEIGHT: () => hm,
      HTML_ELEMENT: () => Pm,
      IMMEDIATE_CHILDREN: () => xm,
      IX2_ID_DELIMITER: () => qv,
      OPACITY: () => fm,
      PARENT: () => Cm,
      PLAIN_OBJECT: () => Nm,
      PRESERVE_3D: () => Lm,
      RENDER_GENERAL: () => Fm,
      RENDER_PLUGIN: () => Gm,
      RENDER_STYLE: () => qm,
      RENDER_TRANSFORM: () => Dm,
      ROTATE_X: () => om,
      ROTATE_Y: () => am,
      ROTATE_Z: () => sm,
      SCALE_3D: () => im,
      SCALE_X: () => tm,
      SCALE_Y: () => rm,
      SCALE_Z: () => nm,
      SIBLINGS: () => Rm,
      SKEW: () => um,
      SKEW_X: () => cm,
      SKEW_Y: () => lm,
      TRANSFORM: () => $v,
      TRANSLATE_3D: () => em,
      TRANSLATE_X: () => Qv,
      TRANSLATE_Y: () => Zv,
      TRANSLATE_Z: () => Jv,
      WF_PAGE: () => Gv,
      WIDTH: () => gm,
      WILL_CHANGE: () => Tm,
      W_MOD_IX: () => Vv,
      W_MOD_JS: () => Xv
  });
  var qv, Gv, Xv, Vv, kv, Uv, Bv, Wv, Hv, zv, Kv, jv, Yv, $v, Qv, Zv, Jv, em, tm, rm, nm, im, om, am, sm, um, cm, lm, fm, dm, pm, gm, hm, Em, ym, vm, mm, _m, Im, Tm, bm, Am, Sm, Om, wm, xm, Rm, Cm, Lm, Pm, Nm, Mm, Dm, Fm, qm, Gm, ls = de( () => {
      "use strict";
      qv = "|",
      Gv = "data-wf-page",
      Xv = "w-mod-js",
      Vv = "w-mod-ix",
      kv = ".w-dyn-item",
      Uv = "xValue",
      Bv = "yValue",
      Wv = "zValue",
      Hv = "value",
      zv = "xUnit",
      Kv = "yUnit",
      jv = "zUnit",
      Yv = "unit",
      $v = "transform",
      Qv = "translateX",
      Zv = "translateY",
      Jv = "translateZ",
      em = "translate3d",
      tm = "scaleX",
      rm = "scaleY",
      nm = "scaleZ",
      im = "scale3d",
      om = "rotateX",
      am = "rotateY",
      sm = "rotateZ",
      um = "skew",
      cm = "skewX",
      lm = "skewY",
      fm = "opacity",
      dm = "filter",
      pm = "font-variation-settings",
      gm = "width",
      hm = "height",
      Em = "backgroundColor",
      ym = "background",
      vm = "borderColor",
      mm = "color",
      _m = "display",
      Im = "flex",
      Tm = "willChange",
      bm = "AUTO",
      Am = ",",
      Sm = ":",
      Om = "|",
      wm = "CHILDREN",
      xm = "IMMEDIATE_CHILDREN",
      Rm = "SIBLINGS",
      Cm = "PARENT",
      Lm = "preserve-3d",
      Pm = "HTML_ELEMENT",
      Nm = "PLAIN_OBJECT",
      Mm = "ABSTRACT_NODE",
      Dm = "RENDER_TRANSFORM",
      Fm = "RENDER_GENERAL",
      qm = "RENDER_STYLE",
      Gm = "RENDER_PLUGIN"
  }
  );
  var fs = {};
  xe(fs, {
      ActionAppliesTo: () => uv,
      ActionTypeConsts: () => Ae,
      EventAppliesTo: () => pi,
      EventBasedOn: () => Ye,
      EventContinuousMouseAxes: () => ov,
      EventLimitAffectedElements: () => av,
      EventTypeConsts: () => Ve,
      IX2EngineActionTypes: () => ve,
      IX2EngineConstants: () => _e,
      InteractionTypeConsts: () => cv,
      QuickEffectDirectionConsts: () => sv,
      QuickEffectIds: () => Mr,
      ReducedMotionTypes: () => hi
  });
  var Re = de( () => {
      "use strict";
      gi();
      Dr();
      ss();
      us();
      cs();
      ls();
      Dr();
      gi()
  }
  );
  var Xm, ds, ps = de( () => {
      "use strict";
      Re();
      ({IX2_RAW_DATA_IMPORTED: Xm} = ve),
      ds = (e=Object.freeze({}), t) => {
          switch (t.type) {
          case Xm:
              return t.payload.ixData || Object.freeze({});
          default:
              return e
          }
      }
  }
  );
  var xt = f(he => {
      "use strict";
      Object.defineProperty(he, "__esModule", {
          value: !0
      });
      var Vm = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e
      }
      : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      ;
      he.clone = qr;
      he.addLast = Es;
      he.addFirst = ys;
      he.removeLast = vs;
      he.removeFirst = ms;
      he.insert = _s;
      he.removeAt = Is;
      he.replaceAt = Ts;
      he.getIn = Gr;
      he.set = Xr;
      he.setIn = Vr;
      he.update = As;
      he.updateIn = Ss;
      he.merge = Os;
      he.mergeDeep = ws;
      he.mergeIn = xs;
      he.omit = Rs;
      he.addDefaults = Cs;
      var gs = "INVALID_ARGS";
      function hs(e) {
          throw new Error(e)
      }
      function Ei(e) {
          var t = Object.keys(e);
          return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
      }
      var km = {}.hasOwnProperty;
      function qr(e) {
          if (Array.isArray(e))
              return e.slice();
          for (var t = Ei(e), r = {}, n = 0; n < t.length; n++) {
              var i = t[n];
              r[i] = e[i]
          }
          return r
      }
      function Ce(e, t, r) {
          var n = r;
          n == null && hs(gs);
          for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++)
              a[s - 3] = arguments[s];
          for (var u = 0; u < a.length; u++) {
              var l = a[u];
              if (l != null) {
                  var v = Ei(l);
                  if (v.length)
                      for (var g = 0; g <= v.length; g++) {
                          var p = v[g];
                          if (!(e && n[p] !== void 0)) {
                              var I = l[p];
                              t && Fr(n[p]) && Fr(I) && (I = Ce(e, t, n[p], I)),
                              !(I === void 0 || I === n[p]) && (i || (i = !0,
                              n = qr(n)),
                              n[p] = I)
                          }
                      }
              }
          }
          return n
      }
      function Fr(e) {
          var t = typeof e > "u" ? "undefined" : Vm(e);
          return e != null && (t === "object" || t === "function")
      }
      function Es(e, t) {
          return Array.isArray(t) ? e.concat(t) : e.concat([t])
      }
      function ys(e, t) {
          return Array.isArray(t) ? t.concat(e) : [t].concat(e)
      }
      function vs(e) {
          return e.length ? e.slice(0, e.length - 1) : e
      }
      function ms(e) {
          return e.length ? e.slice(1) : e
      }
      function _s(e, t, r) {
          return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
      }
      function Is(e, t) {
          return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
      }
      function Ts(e, t, r) {
          if (e[t] === r)
              return e;
          for (var n = e.length, i = Array(n), o = 0; o < n; o++)
              i[o] = e[o];
          return i[t] = r,
          i
      }
      function Gr(e, t) {
          if (!Array.isArray(t) && hs(gs),
          e != null) {
              for (var r = e, n = 0; n < t.length; n++) {
                  var i = t[n];
                  if (r = r?.[i],
                  r === void 0)
                      return r
              }
              return r
          }
      }
      function Xr(e, t, r) {
          var n = typeof t == "number" ? [] : {}
            , i = e ?? n;
          if (i[t] === r)
              return i;
          var o = qr(i);
          return o[t] = r,
          o
      }
      function bs(e, t, r, n) {
          var i = void 0
            , o = t[n];
          if (n === t.length - 1)
              i = r;
          else {
              var a = Fr(e) && Fr(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
              i = bs(a, t, r, n + 1)
          }
          return Xr(e, o, i)
      }
      function Vr(e, t, r) {
          return t.length ? bs(e, t, r, 0) : r
      }
      function As(e, t, r) {
          var n = e?.[t]
            , i = r(n);
          return Xr(e, t, i)
      }
      function Ss(e, t, r) {
          var n = Gr(e, t)
            , i = r(n);
          return Vr(e, t, i)
      }
      function Os(e, t, r, n, i, o) {
          for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
              s[u - 6] = arguments[u];
          return s.length ? Ce.call.apply(Ce, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Ce(!1, !1, e, t, r, n, i, o)
      }
      function ws(e, t, r, n, i, o) {
          for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
              s[u - 6] = arguments[u];
          return s.length ? Ce.call.apply(Ce, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Ce(!1, !0, e, t, r, n, i, o)
      }
      function xs(e, t, r, n, i, o, a) {
          var s = Gr(e, t);
          s == null && (s = {});
          for (var u = void 0, l = arguments.length, v = Array(l > 7 ? l - 7 : 0), g = 7; g < l; g++)
              v[g - 7] = arguments[g];
          return v.length ? u = Ce.call.apply(Ce, [null, !1, !1, s, r, n, i, o, a].concat(v)) : u = Ce(!1, !1, s, r, n, i, o, a),
          Vr(e, t, u)
      }
      function Rs(e, t) {
          for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
              if (km.call(e, r[i])) {
                  n = !0;
                  break
              }
          if (!n)
              return e;
          for (var o = {}, a = Ei(e), s = 0; s < a.length; s++) {
              var u = a[s];
              r.indexOf(u) >= 0 || (o[u] = e[u])
          }
          return o
      }
      function Cs(e, t, r, n, i, o) {
          for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
              s[u - 6] = arguments[u];
          return s.length ? Ce.call.apply(Ce, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Ce(!0, !1, e, t, r, n, i, o)
      }
      var Um = {
          clone: qr,
          addLast: Es,
          addFirst: ys,
          removeLast: vs,
          removeFirst: ms,
          insert: _s,
          removeAt: Is,
          replaceAt: Ts,
          getIn: Gr,
          set: Xr,
          setIn: Vr,
          update: As,
          updateIn: Ss,
          merge: Os,
          mergeDeep: ws,
          mergeIn: xs,
          omit: Rs,
          addDefaults: Cs
      };
      he.default = Um
  }
  );
  var Ps, Bm, Wm, Hm, zm, Km, Ls, Ns, Ms = de( () => {
      "use strict";
      Re();
      Ps = ae(xt()),
      {IX2_PREVIEW_REQUESTED: Bm, IX2_PLAYBACK_REQUESTED: Wm, IX2_STOP_REQUESTED: Hm, IX2_CLEAR_REQUESTED: zm} = ve,
      Km = {
          preview: {},
          playback: {},
          stop: {},
          clear: {}
      },
      Ls = Object.create(null, {
          [Bm]: {
              value: "preview"
          },
          [Wm]: {
              value: "playback"
          },
          [Hm]: {
              value: "stop"
          },
          [zm]: {
              value: "clear"
          }
      }),
      Ns = (e=Km, t) => {
          if (t.type in Ls) {
              let r = [Ls[t.type]];
              return (0,
              Ps.setIn)(e, [r], {
                  ...t.payload
              })
          }
          return e
      }
  }
  );
  var Se, jm, Ym, $m, Qm, Zm, Jm, e_, t_, r_, n_, Ds, i_, Fs, qs = de( () => {
      "use strict";
      Re();
      Se = ae(xt()),
      {IX2_SESSION_INITIALIZED: jm, IX2_SESSION_STARTED: Ym, IX2_TEST_FRAME_RENDERED: $m, IX2_SESSION_STOPPED: Qm, IX2_EVENT_LISTENER_ADDED: Zm, IX2_EVENT_STATE_CHANGED: Jm, IX2_ANIMATION_FRAME_CHANGED: e_, IX2_ACTION_LIST_PLAYBACK_CHANGED: t_, IX2_VIEWPORT_WIDTH_CHANGED: r_, IX2_MEDIA_QUERIES_DEFINED: n_} = ve,
      Ds = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1
      },
      i_ = 20,
      Fs = (e=Ds, t) => {
          switch (t.type) {
          case jm:
              {
                  let {hasBoundaryNodes: r, reducedMotion: n} = t.payload;
                  return (0,
                  Se.merge)(e, {
                      hasBoundaryNodes: r,
                      reducedMotion: n
                  })
              }
          case Ym:
              return (0,
              Se.set)(e, "active", !0);
          case $m:
              {
                  let {payload: {step: r=i_}} = t;
                  return (0,
                  Se.set)(e, "tick", e.tick + r)
              }
          case Qm:
              return Ds;
          case e_:
              {
                  let {payload: {now: r}} = t;
                  return (0,
                  Se.set)(e, "tick", r)
              }
          case Zm:
              {
                  let r = (0,
                  Se.addLast)(e.eventListeners, t.payload);
                  return (0,
                  Se.set)(e, "eventListeners", r)
              }
          case Jm:
              {
                  let {stateKey: r, newState: n} = t.payload;
                  return (0,
                  Se.setIn)(e, ["eventState", r], n)
              }
          case t_:
              {
                  let {actionListId: r, isPlaying: n} = t.payload;
                  return (0,
                  Se.setIn)(e, ["playbackState", r], n)
              }
          case r_:
              {
                  let {width: r, mediaQueries: n} = t.payload
                    , i = n.length
                    , o = null;
                  for (let a = 0; a < i; a++) {
                      let {key: s, min: u, max: l} = n[a];
                      if (r >= u && r <= l) {
                          o = s;
                          break
                      }
                  }
                  return (0,
                  Se.merge)(e, {
                      viewportWidth: r,
                      mediaQueryKey: o
                  })
              }
          case n_:
              return (0,
              Se.set)(e, "hasDefinedMediaQueries", !0);
          default:
              return e
          }
      }
  }
  );
  var Xs = f( (u2, Gs) => {
      function o_() {
          this.__data__ = [],
          this.size = 0
      }
      Gs.exports = o_
  }
  );
  var kr = f( (c2, Vs) => {
      function a_(e, t) {
          return e === t || e !== e && t !== t
      }
      Vs.exports = a_
  }
  );
  var tr = f( (l2, ks) => {
      var s_ = kr();
      function u_(e, t) {
          for (var r = e.length; r--; )
              if (s_(e[r][0], t))
                  return r;
          return -1
      }
      ks.exports = u_
  }
  );
  var Bs = f( (f2, Us) => {
      var c_ = tr()
        , l_ = Array.prototype
        , f_ = l_.splice;
      function d_(e) {
          var t = this.__data__
            , r = c_(t, e);
          if (r < 0)
              return !1;
          var n = t.length - 1;
          return r == n ? t.pop() : f_.call(t, r, 1),
          --this.size,
          !0
      }
      Us.exports = d_
  }
  );
  var Hs = f( (d2, Ws) => {
      var p_ = tr();
      function g_(e) {
          var t = this.__data__
            , r = p_(t, e);
          return r < 0 ? void 0 : t[r][1]
      }
      Ws.exports = g_
  }
  );
  var Ks = f( (p2, zs) => {
      var h_ = tr();
      function E_(e) {
          return h_(this.__data__, e) > -1
      }
      zs.exports = E_
  }
  );
  var Ys = f( (g2, js) => {
      var y_ = tr();
      function v_(e, t) {
          var r = this.__data__
            , n = y_(r, e);
          return n < 0 ? (++this.size,
          r.push([e, t])) : r[n][1] = t,
          this
      }
      js.exports = v_
  }
  );
  var rr = f( (h2, $s) => {
      var m_ = Xs()
        , __ = Bs()
        , I_ = Hs()
        , T_ = Ks()
        , b_ = Ys();
      function Rt(e) {
          var t = -1
            , r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
              var n = e[t];
              this.set(n[0], n[1])
          }
      }
      Rt.prototype.clear = m_;
      Rt.prototype.delete = __;
      Rt.prototype.get = I_;
      Rt.prototype.has = T_;
      Rt.prototype.set = b_;
      $s.exports = Rt
  }
  );
  var Zs = f( (E2, Qs) => {
      var A_ = rr();
      function S_() {
          this.__data__ = new A_,
          this.size = 0
      }
      Qs.exports = S_
  }
  );
  var eu = f( (y2, Js) => {
      function O_(e) {
          var t = this.__data__
            , r = t.delete(e);
          return this.size = t.size,
          r
      }
      Js.exports = O_
  }
  );
  var ru = f( (v2, tu) => {
      function w_(e) {
          return this.__data__.get(e)
      }
      tu.exports = w_
  }
  );
  var iu = f( (m2, nu) => {
      function x_(e) {
          return this.__data__.has(e)
      }
      nu.exports = x_
  }
  );
  var $e = f( (_2, ou) => {
      function R_(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function")
      }
      ou.exports = R_
  }
  );
  var yi = f( (I2, au) => {
      var C_ = ut()
        , L_ = $e()
        , P_ = "[object AsyncFunction]"
        , N_ = "[object Function]"
        , M_ = "[object GeneratorFunction]"
        , D_ = "[object Proxy]";
      function F_(e) {
          if (!L_(e))
              return !1;
          var t = C_(e);
          return t == N_ || t == M_ || t == P_ || t == D_
      }
      au.exports = F_
  }
  );
  var uu = f( (T2, su) => {
      var q_ = Xe()
        , G_ = q_["__core-js_shared__"];
      su.exports = G_
  }
  );
  var fu = f( (b2, lu) => {
      var vi = uu()
        , cu = function() {
          var e = /[^.]+$/.exec(vi && vi.keys && vi.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : ""
      }();
      function X_(e) {
          return !!cu && cu in e
      }
      lu.exports = X_
  }
  );
  var mi = f( (A2, du) => {
      var V_ = Function.prototype
        , k_ = V_.toString;
      function U_(e) {
          if (e != null) {
              try {
                  return k_.call(e)
              } catch {}
              try {
                  return e + ""
              } catch {}
          }
          return ""
      }
      du.exports = U_
  }
  );
  var gu = f( (S2, pu) => {
      var B_ = yi()
        , W_ = fu()
        , H_ = $e()
        , z_ = mi()
        , K_ = /[\\^$.*+?()[\]{}|]/g
        , j_ = /^\[object .+?Constructor\]$/
        , Y_ = Function.prototype
        , $_ = Object.prototype
        , Q_ = Y_.toString
        , Z_ = $_.hasOwnProperty
        , J_ = RegExp("^" + Q_.call(Z_).replace(K_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      function eI(e) {
          if (!H_(e) || W_(e))
              return !1;
          var t = B_(e) ? J_ : j_;
          return t.test(z_(e))
      }
      pu.exports = eI
  }
  );
  var Eu = f( (O2, hu) => {
      function tI(e, t) {
          return e?.[t]
      }
      hu.exports = tI
  }
  );
  var ct = f( (w2, yu) => {
      var rI = gu()
        , nI = Eu();
      function iI(e, t) {
          var r = nI(e, t);
          return rI(r) ? r : void 0
      }
      yu.exports = iI
  }
  );
  var Ur = f( (x2, vu) => {
      var oI = ct()
        , aI = Xe()
        , sI = oI(aI, "Map");
      vu.exports = sI
  }
  );
  var nr = f( (R2, mu) => {
      var uI = ct()
        , cI = uI(Object, "create");
      mu.exports = cI
  }
  );
  var Tu = f( (C2, Iu) => {
      var _u = nr();
      function lI() {
          this.__data__ = _u ? _u(null) : {},
          this.size = 0
      }
      Iu.exports = lI
  }
  );
  var Au = f( (L2, bu) => {
      function fI(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0,
          t
      }
      bu.exports = fI
  }
  );
  var Ou = f( (P2, Su) => {
      var dI = nr()
        , pI = "__lodash_hash_undefined__"
        , gI = Object.prototype
        , hI = gI.hasOwnProperty;
      function EI(e) {
          var t = this.__data__;
          if (dI) {
              var r = t[e];
              return r === pI ? void 0 : r
          }
          return hI.call(t, e) ? t[e] : void 0
      }
      Su.exports = EI
  }
  );
  var xu = f( (N2, wu) => {
      var yI = nr()
        , vI = Object.prototype
        , mI = vI.hasOwnProperty;
      function _I(e) {
          var t = this.__data__;
          return yI ? t[e] !== void 0 : mI.call(t, e)
      }
      wu.exports = _I
  }
  );
  var Cu = f( (M2, Ru) => {
      var II = nr()
        , TI = "__lodash_hash_undefined__";
      function bI(e, t) {
          var r = this.__data__;
          return this.size += this.has(e) ? 0 : 1,
          r[e] = II && t === void 0 ? TI : t,
          this
      }
      Ru.exports = bI
  }
  );
  var Pu = f( (D2, Lu) => {
      var AI = Tu()
        , SI = Au()
        , OI = Ou()
        , wI = xu()
        , xI = Cu();
      function Ct(e) {
          var t = -1
            , r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
              var n = e[t];
              this.set(n[0], n[1])
          }
      }
      Ct.prototype.clear = AI;
      Ct.prototype.delete = SI;
      Ct.prototype.get = OI;
      Ct.prototype.has = wI;
      Ct.prototype.set = xI;
      Lu.exports = Ct
  }
  );
  var Du = f( (F2, Mu) => {
      var Nu = Pu()
        , RI = rr()
        , CI = Ur();
      function LI() {
          this.size = 0,
          this.__data__ = {
              hash: new Nu,
              map: new (CI || RI),
              string: new Nu
          }
      }
      Mu.exports = LI
  }
  );
  var qu = f( (q2, Fu) => {
      function PI(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
      }
      Fu.exports = PI
  }
  );
  var ir = f( (G2, Gu) => {
      var NI = qu();
      function MI(e, t) {
          var r = e.__data__;
          return NI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
      }
      Gu.exports = MI
  }
  );
  var Vu = f( (X2, Xu) => {
      var DI = ir();
      function FI(e) {
          var t = DI(this, e).delete(e);
          return this.size -= t ? 1 : 0,
          t
      }
      Xu.exports = FI
  }
  );
  var Uu = f( (V2, ku) => {
      var qI = ir();
      function GI(e) {
          return qI(this, e).get(e)
      }
      ku.exports = GI
  }
  );
  var Wu = f( (k2, Bu) => {
      var XI = ir();
      function VI(e) {
          return XI(this, e).has(e)
      }
      Bu.exports = VI
  }
  );
  var zu = f( (U2, Hu) => {
      var kI = ir();
      function UI(e, t) {
          var r = kI(this, e)
            , n = r.size;
          return r.set(e, t),
          this.size += r.size == n ? 0 : 1,
          this
      }
      Hu.exports = UI
  }
  );
  var Br = f( (B2, Ku) => {
      var BI = Du()
        , WI = Vu()
        , HI = Uu()
        , zI = Wu()
        , KI = zu();
      function Lt(e) {
          var t = -1
            , r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
              var n = e[t];
              this.set(n[0], n[1])
          }
      }
      Lt.prototype.clear = BI;
      Lt.prototype.delete = WI;
      Lt.prototype.get = HI;
      Lt.prototype.has = zI;
      Lt.prototype.set = KI;
      Ku.exports = Lt
  }
  );
  var Yu = f( (W2, ju) => {
      var jI = rr()
        , YI = Ur()
        , $I = Br()
        , QI = 200;
      function ZI(e, t) {
          var r = this.__data__;
          if (r instanceof jI) {
              var n = r.__data__;
              if (!YI || n.length < QI - 1)
                  return n.push([e, t]),
                  this.size = ++r.size,
                  this;
              r = this.__data__ = new $I(n)
          }
          return r.set(e, t),
          this.size = r.size,
          this
      }
      ju.exports = ZI
  }
  );
  var _i = f( (H2, $u) => {
      var JI = rr()
        , eT = Zs()
        , tT = eu()
        , rT = ru()
        , nT = iu()
        , iT = Yu();
      function Pt(e) {
          var t = this.__data__ = new JI(e);
          this.size = t.size
      }
      Pt.prototype.clear = eT;
      Pt.prototype.delete = tT;
      Pt.prototype.get = rT;
      Pt.prototype.has = nT;
      Pt.prototype.set = iT;
      $u.exports = Pt
  }
  );
  var Zu = f( (z2, Qu) => {
      var oT = "__lodash_hash_undefined__";
      function aT(e) {
          return this.__data__.set(e, oT),
          this
      }
      Qu.exports = aT
  }
  );
  var ec = f( (K2, Ju) => {
      function sT(e) {
          return this.__data__.has(e)
      }
      Ju.exports = sT
  }
  );
  var rc = f( (j2, tc) => {
      var uT = Br()
        , cT = Zu()
        , lT = ec();
      function Wr(e) {
          var t = -1
            , r = e == null ? 0 : e.length;
          for (this.__data__ = new uT; ++t < r; )
              this.add(e[t])
      }
      Wr.prototype.add = Wr.prototype.push = cT;
      Wr.prototype.has = lT;
      tc.exports = Wr
  }
  );
  var ic = f( (Y2, nc) => {
      function fT(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
              if (t(e[r], r, e))
                  return !0;
          return !1
      }
      nc.exports = fT
  }
  );
  var ac = f( ($2, oc) => {
      function dT(e, t) {
          return e.has(t)
      }
      oc.exports = dT
  }
  );
  var Ii = f( (Q2, sc) => {
      var pT = rc()
        , gT = ic()
        , hT = ac()
        , ET = 1
        , yT = 2;
      function vT(e, t, r, n, i, o) {
          var a = r & ET
            , s = e.length
            , u = t.length;
          if (s != u && !(a && u > s))
              return !1;
          var l = o.get(e)
            , v = o.get(t);
          if (l && v)
              return l == t && v == e;
          var g = -1
            , p = !0
            , I = r & yT ? new pT : void 0;
          for (o.set(e, t),
          o.set(t, e); ++g < s; ) {
              var b = e[g]
                , A = t[g];
              if (n)
                  var R = a ? n(A, b, g, t, e, o) : n(b, A, g, e, t, o);
              if (R !== void 0) {
                  if (R)
                      continue;
                  p = !1;
                  break
              }
              if (I) {
                  if (!gT(t, function(S, L) {
                      if (!hT(I, L) && (b === S || i(b, S, r, n, o)))
                          return I.push(L)
                  })) {
                      p = !1;
                      break
                  }
              } else if (!(b === A || i(b, A, r, n, o))) {
                  p = !1;
                  break
              }
          }
          return o.delete(e),
          o.delete(t),
          p
      }
      sc.exports = vT
  }
  );
  var cc = f( (Z2, uc) => {
      var mT = Xe()
        , _T = mT.Uint8Array;
      uc.exports = _T
  }
  );
  var fc = f( (J2, lc) => {
      function IT(e) {
          var t = -1
            , r = Array(e.size);
          return e.forEach(function(n, i) {
              r[++t] = [i, n]
          }),
          r
      }
      lc.exports = IT
  }
  );
  var pc = f( (e1, dc) => {
      function TT(e) {
          var t = -1
            , r = Array(e.size);
          return e.forEach(function(n) {
              r[++t] = n
          }),
          r
      }
      dc.exports = TT
  }
  );
  var vc = f( (t1, yc) => {
      var gc = St()
        , hc = cc()
        , bT = kr()
        , AT = Ii()
        , ST = fc()
        , OT = pc()
        , wT = 1
        , xT = 2
        , RT = "[object Boolean]"
        , CT = "[object Date]"
        , LT = "[object Error]"
        , PT = "[object Map]"
        , NT = "[object Number]"
        , MT = "[object RegExp]"
        , DT = "[object Set]"
        , FT = "[object String]"
        , qT = "[object Symbol]"
        , GT = "[object ArrayBuffer]"
        , XT = "[object DataView]"
        , Ec = gc ? gc.prototype : void 0
        , Ti = Ec ? Ec.valueOf : void 0;
      function VT(e, t, r, n, i, o, a) {
          switch (r) {
          case XT:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                  return !1;
              e = e.buffer,
              t = t.buffer;
          case GT:
              return !(e.byteLength != t.byteLength || !o(new hc(e), new hc(t)));
          case RT:
          case CT:
          case NT:
              return bT(+e, +t);
          case LT:
              return e.name == t.name && e.message == t.message;
          case MT:
          case FT:
              return e == t + "";
          case PT:
              var s = ST;
          case DT:
              var u = n & wT;
              if (s || (s = OT),
              e.size != t.size && !u)
                  return !1;
              var l = a.get(e);
              if (l)
                  return l == t;
              n |= xT,
              a.set(e, t);
              var v = AT(s(e), s(t), n, i, o, a);
              return a.delete(e),
              v;
          case qT:
              if (Ti)
                  return Ti.call(e) == Ti.call(t)
          }
          return !1
      }
      yc.exports = VT
  }
  );
  var Hr = f( (r1, mc) => {
      function kT(e, t) {
          for (var r = -1, n = t.length, i = e.length; ++r < n; )
              e[i + r] = t[r];
          return e
      }
      mc.exports = kT
  }
  );
  var me = f( (n1, _c) => {
      var UT = Array.isArray;
      _c.exports = UT
  }
  );
  var bi = f( (i1, Ic) => {
      var BT = Hr()
        , WT = me();
      function HT(e, t, r) {
          var n = t(e);
          return WT(e) ? n : BT(n, r(e))
      }
      Ic.exports = HT
  }
  );
  var bc = f( (o1, Tc) => {
      function zT(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
              var a = e[r];
              t(a, r, e) && (o[i++] = a)
          }
          return o
      }
      Tc.exports = zT
  }
  );
  var Ai = f( (a1, Ac) => {
      function KT() {
          return []
      }
      Ac.exports = KT
  }
  );
  var Si = f( (s1, Oc) => {
      var jT = bc()
        , YT = Ai()
        , $T = Object.prototype
        , QT = $T.propertyIsEnumerable
        , Sc = Object.getOwnPropertySymbols
        , ZT = Sc ? function(e) {
          return e == null ? [] : (e = Object(e),
          jT(Sc(e), function(t) {
              return QT.call(e, t)
          }))
      }
      : YT;
      Oc.exports = ZT
  }
  );
  var xc = f( (u1, wc) => {
      function JT(e, t) {
          for (var r = -1, n = Array(e); ++r < e; )
              n[r] = t(r);
          return n
      }
      wc.exports = JT
  }
  );
  var Cc = f( (c1, Rc) => {
      var eb = ut()
        , tb = rt()
        , rb = "[object Arguments]";
      function nb(e) {
          return tb(e) && eb(e) == rb
      }
      Rc.exports = nb
  }
  );
  var or = f( (l1, Nc) => {
      var Lc = Cc()
        , ib = rt()
        , Pc = Object.prototype
        , ob = Pc.hasOwnProperty
        , ab = Pc.propertyIsEnumerable
        , sb = Lc(function() {
          return arguments
      }()) ? Lc : function(e) {
          return ib(e) && ob.call(e, "callee") && !ab.call(e, "callee")
      }
      ;
      Nc.exports = sb
  }
  );
  var Dc = f( (f1, Mc) => {
      function ub() {
          return !1
      }
      Mc.exports = ub
  }
  );
  var zr = f( (ar, Nt) => {
      var cb = Xe()
        , lb = Dc()
        , Gc = typeof ar == "object" && ar && !ar.nodeType && ar
        , Fc = Gc && typeof Nt == "object" && Nt && !Nt.nodeType && Nt
        , fb = Fc && Fc.exports === Gc
        , qc = fb ? cb.Buffer : void 0
        , db = qc ? qc.isBuffer : void 0
        , pb = db || lb;
      Nt.exports = pb
  }
  );
  var Kr = f( (d1, Xc) => {
      var gb = 9007199254740991
        , hb = /^(?:0|[1-9]\d*)$/;
      function Eb(e, t) {
          var r = typeof e;
          return t = t ?? gb,
          !!t && (r == "number" || r != "symbol" && hb.test(e)) && e > -1 && e % 1 == 0 && e < t
      }
      Xc.exports = Eb
  }
  );
  var jr = f( (p1, Vc) => {
      var yb = 9007199254740991;
      function vb(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= yb
      }
      Vc.exports = vb
  }
  );
  var Uc = f( (g1, kc) => {
      var mb = ut()
        , _b = jr()
        , Ib = rt()
        , Tb = "[object Arguments]"
        , bb = "[object Array]"
        , Ab = "[object Boolean]"
        , Sb = "[object Date]"
        , Ob = "[object Error]"
        , wb = "[object Function]"
        , xb = "[object Map]"
        , Rb = "[object Number]"
        , Cb = "[object Object]"
        , Lb = "[object RegExp]"
        , Pb = "[object Set]"
        , Nb = "[object String]"
        , Mb = "[object WeakMap]"
        , Db = "[object ArrayBuffer]"
        , Fb = "[object DataView]"
        , qb = "[object Float32Array]"
        , Gb = "[object Float64Array]"
        , Xb = "[object Int8Array]"
        , Vb = "[object Int16Array]"
        , kb = "[object Int32Array]"
        , Ub = "[object Uint8Array]"
        , Bb = "[object Uint8ClampedArray]"
        , Wb = "[object Uint16Array]"
        , Hb = "[object Uint32Array]"
        , fe = {};
      fe[qb] = fe[Gb] = fe[Xb] = fe[Vb] = fe[kb] = fe[Ub] = fe[Bb] = fe[Wb] = fe[Hb] = !0;
      fe[Tb] = fe[bb] = fe[Db] = fe[Ab] = fe[Fb] = fe[Sb] = fe[Ob] = fe[wb] = fe[xb] = fe[Rb] = fe[Cb] = fe[Lb] = fe[Pb] = fe[Nb] = fe[Mb] = !1;
      function zb(e) {
          return Ib(e) && _b(e.length) && !!fe[mb(e)]
      }
      kc.exports = zb
  }
  );
  var Wc = f( (h1, Bc) => {
      function Kb(e) {
          return function(t) {
              return e(t)
          }
      }
      Bc.exports = Kb
  }
  );
  var zc = f( (sr, Mt) => {
      var jb = Qn()
        , Hc = typeof sr == "object" && sr && !sr.nodeType && sr
        , ur = Hc && typeof Mt == "object" && Mt && !Mt.nodeType && Mt
        , Yb = ur && ur.exports === Hc
        , Oi = Yb && jb.process
        , $b = function() {
          try {
              var e = ur && ur.require && ur.require("util").types;
              return e || Oi && Oi.binding && Oi.binding("util")
          } catch {}
      }();
      Mt.exports = $b
  }
  );
  var Yr = f( (E1, Yc) => {
      var Qb = Uc()
        , Zb = Wc()
        , Kc = zc()
        , jc = Kc && Kc.isTypedArray
        , Jb = jc ? Zb(jc) : Qb;
      Yc.exports = Jb
  }
  );
  var wi = f( (y1, $c) => {
      var eA = xc()
        , tA = or()
        , rA = me()
        , nA = zr()
        , iA = Kr()
        , oA = Yr()
        , aA = Object.prototype
        , sA = aA.hasOwnProperty;
      function uA(e, t) {
          var r = rA(e)
            , n = !r && tA(e)
            , i = !r && !n && nA(e)
            , o = !r && !n && !i && oA(e)
            , a = r || n || i || o
            , s = a ? eA(e.length, String) : []
            , u = s.length;
          for (var l in e)
              (t || sA.call(e, l)) && !(a && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || iA(l, u))) && s.push(l);
          return s
      }
      $c.exports = uA
  }
  );
  var $r = f( (v1, Qc) => {
      var cA = Object.prototype;
      function lA(e) {
          var t = e && e.constructor
            , r = typeof t == "function" && t.prototype || cA;
          return e === r
      }
      Qc.exports = lA
  }
  );
  var Jc = f( (m1, Zc) => {
      var fA = Zn()
        , dA = fA(Object.keys, Object);
      Zc.exports = dA
  }
  );
  var Qr = f( (_1, el) => {
      var pA = $r()
        , gA = Jc()
        , hA = Object.prototype
        , EA = hA.hasOwnProperty;
      function yA(e) {
          if (!pA(e))
              return gA(e);
          var t = [];
          for (var r in Object(e))
              EA.call(e, r) && r != "constructor" && t.push(r);
          return t
      }
      el.exports = yA
  }
  );
  var ht = f( (I1, tl) => {
      var vA = yi()
        , mA = jr();
      function _A(e) {
          return e != null && mA(e.length) && !vA(e)
      }
      tl.exports = _A
  }
  );
  var cr = f( (T1, rl) => {
      var IA = wi()
        , TA = Qr()
        , bA = ht();
      function AA(e) {
          return bA(e) ? IA(e) : TA(e)
      }
      rl.exports = AA
  }
  );
  var il = f( (b1, nl) => {
      var SA = bi()
        , OA = Si()
        , wA = cr();
      function xA(e) {
          return SA(e, wA, OA)
      }
      nl.exports = xA
  }
  );
  var sl = f( (A1, al) => {
      var ol = il()
        , RA = 1
        , CA = Object.prototype
        , LA = CA.hasOwnProperty;
      function PA(e, t, r, n, i, o) {
          var a = r & RA
            , s = ol(e)
            , u = s.length
            , l = ol(t)
            , v = l.length;
          if (u != v && !a)
              return !1;
          for (var g = u; g--; ) {
              var p = s[g];
              if (!(a ? p in t : LA.call(t, p)))
                  return !1
          }
          var I = o.get(e)
            , b = o.get(t);
          if (I && b)
              return I == t && b == e;
          var A = !0;
          o.set(e, t),
          o.set(t, e);
          for (var R = a; ++g < u; ) {
              p = s[g];
              var S = e[p]
                , L = t[p];
              if (n)
                  var C = a ? n(L, S, p, t, e, o) : n(S, L, p, e, t, o);
              if (!(C === void 0 ? S === L || i(S, L, r, n, o) : C)) {
                  A = !1;
                  break
              }
              R || (R = p == "constructor")
          }
          if (A && !R) {
              var q = e.constructor
                , D = t.constructor;
              q != D && "constructor"in e && "constructor"in t && !(typeof q == "function" && q instanceof q && typeof D == "function" && D instanceof D) && (A = !1)
          }
          return o.delete(e),
          o.delete(t),
          A
      }
      al.exports = PA
  }
  );
  var cl = f( (S1, ul) => {
      var NA = ct()
        , MA = Xe()
        , DA = NA(MA, "DataView");
      ul.exports = DA
  }
  );
  var fl = f( (O1, ll) => {
      var FA = ct()
        , qA = Xe()
        , GA = FA(qA, "Promise");
      ll.exports = GA
  }
  );
  var pl = f( (w1, dl) => {
      var XA = ct()
        , VA = Xe()
        , kA = XA(VA, "Set");
      dl.exports = kA
  }
  );
  var xi = f( (x1, gl) => {
      var UA = ct()
        , BA = Xe()
        , WA = UA(BA, "WeakMap");
      gl.exports = WA
  }
  );
  var Zr = f( (R1, Il) => {
      var Ri = cl()
        , Ci = Ur()
        , Li = fl()
        , Pi = pl()
        , Ni = xi()
        , _l = ut()
        , Dt = mi()
        , hl = "[object Map]"
        , HA = "[object Object]"
        , El = "[object Promise]"
        , yl = "[object Set]"
        , vl = "[object WeakMap]"
        , ml = "[object DataView]"
        , zA = Dt(Ri)
        , KA = Dt(Ci)
        , jA = Dt(Li)
        , YA = Dt(Pi)
        , $A = Dt(Ni)
        , Et = _l;
      (Ri && Et(new Ri(new ArrayBuffer(1))) != ml || Ci && Et(new Ci) != hl || Li && Et(Li.resolve()) != El || Pi && Et(new Pi) != yl || Ni && Et(new Ni) != vl) && (Et = function(e) {
          var t = _l(e)
            , r = t == HA ? e.constructor : void 0
            , n = r ? Dt(r) : "";
          if (n)
              switch (n) {
              case zA:
                  return ml;
              case KA:
                  return hl;
              case jA:
                  return El;
              case YA:
                  return yl;
              case $A:
                  return vl
              }
          return t
      }
      );
      Il.exports = Et
  }
  );
  var Rl = f( (C1, xl) => {
      var Mi = _i()
        , QA = Ii()
        , ZA = vc()
        , JA = sl()
        , Tl = Zr()
        , bl = me()
        , Al = zr()
        , e0 = Yr()
        , t0 = 1
        , Sl = "[object Arguments]"
        , Ol = "[object Array]"
        , Jr = "[object Object]"
        , r0 = Object.prototype
        , wl = r0.hasOwnProperty;
      function n0(e, t, r, n, i, o) {
          var a = bl(e)
            , s = bl(t)
            , u = a ? Ol : Tl(e)
            , l = s ? Ol : Tl(t);
          u = u == Sl ? Jr : u,
          l = l == Sl ? Jr : l;
          var v = u == Jr
            , g = l == Jr
            , p = u == l;
          if (p && Al(e)) {
              if (!Al(t))
                  return !1;
              a = !0,
              v = !1
          }
          if (p && !v)
              return o || (o = new Mi),
              a || e0(e) ? QA(e, t, r, n, i, o) : ZA(e, t, u, r, n, i, o);
          if (!(r & t0)) {
              var I = v && wl.call(e, "__wrapped__")
                , b = g && wl.call(t, "__wrapped__");
              if (I || b) {
                  var A = I ? e.value() : e
                    , R = b ? t.value() : t;
                  return o || (o = new Mi),
                  i(A, R, r, n, o)
              }
          }
          return p ? (o || (o = new Mi),
          JA(e, t, r, n, i, o)) : !1
      }
      xl.exports = n0
  }
  );
  var Di = f( (L1, Pl) => {
      var i0 = Rl()
        , Cl = rt();
      function Ll(e, t, r, n, i) {
          return e === t ? !0 : e == null || t == null || !Cl(e) && !Cl(t) ? e !== e && t !== t : i0(e, t, r, n, Ll, i)
      }
      Pl.exports = Ll
  }
  );
  var Ml = f( (P1, Nl) => {
      var o0 = _i()
        , a0 = Di()
        , s0 = 1
        , u0 = 2;
      function c0(e, t, r, n) {
          var i = r.length
            , o = i
            , a = !n;
          if (e == null)
              return !o;
          for (e = Object(e); i--; ) {
              var s = r[i];
              if (a && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                  return !1
          }
          for (; ++i < o; ) {
              s = r[i];
              var u = s[0]
                , l = e[u]
                , v = s[1];
              if (a && s[2]) {
                  if (l === void 0 && !(u in e))
                      return !1
              } else {
                  var g = new o0;
                  if (n)
                      var p = n(l, v, u, e, t, g);
                  if (!(p === void 0 ? a0(v, l, s0 | u0, n, g) : p))
                      return !1
              }
          }
          return !0
      }
      Nl.exports = c0
  }
  );
  var Fi = f( (N1, Dl) => {
      var l0 = $e();
      function f0(e) {
          return e === e && !l0(e)
      }
      Dl.exports = f0
  }
  );
  var ql = f( (M1, Fl) => {
      var d0 = Fi()
        , p0 = cr();
      function g0(e) {
          for (var t = p0(e), r = t.length; r--; ) {
              var n = t[r]
                , i = e[n];
              t[r] = [n, i, d0(i)]
          }
          return t
      }
      Fl.exports = g0
  }
  );
  var qi = f( (D1, Gl) => {
      function h0(e, t) {
          return function(r) {
              return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
          }
      }
      Gl.exports = h0
  }
  );
  var Vl = f( (F1, Xl) => {
      var E0 = Ml()
        , y0 = ql()
        , v0 = qi();
      function m0(e) {
          var t = y0(e);
          return t.length == 1 && t[0][2] ? v0(t[0][0], t[0][1]) : function(r) {
              return r === e || E0(r, e, t)
          }
      }
      Xl.exports = m0
  }
  );
  var lr = f( (q1, kl) => {
      var _0 = ut()
        , I0 = rt()
        , T0 = "[object Symbol]";
      function b0(e) {
          return typeof e == "symbol" || I0(e) && _0(e) == T0
      }
      kl.exports = b0
  }
  );
  var en = f( (G1, Ul) => {
      var A0 = me()
        , S0 = lr()
        , O0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
        , w0 = /^\w*$/;
      function x0(e, t) {
          if (A0(e))
              return !1;
          var r = typeof e;
          return r == "number" || r == "symbol" || r == "boolean" || e == null || S0(e) ? !0 : w0.test(e) || !O0.test(e) || t != null && e in Object(t)
      }
      Ul.exports = x0
  }
  );
  var Hl = f( (X1, Wl) => {
      var Bl = Br()
        , R0 = "Expected a function";
      function Gi(e, t) {
          if (typeof e != "function" || t != null && typeof t != "function")
              throw new TypeError(R0);
          var r = function() {
              var n = arguments
                , i = t ? t.apply(this, n) : n[0]
                , o = r.cache;
              if (o.has(i))
                  return o.get(i);
              var a = e.apply(this, n);
              return r.cache = o.set(i, a) || o,
              a
          };
          return r.cache = new (Gi.Cache || Bl),
          r
      }
      Gi.Cache = Bl;
      Wl.exports = Gi
  }
  );
  var Kl = f( (V1, zl) => {
      var C0 = Hl()
        , L0 = 500;
      function P0(e) {
          var t = C0(e, function(n) {
              return r.size === L0 && r.clear(),
              n
          })
            , r = t.cache;
          return t
      }
      zl.exports = P0
  }
  );
  var Yl = f( (k1, jl) => {
      var N0 = Kl()
        , M0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
        , D0 = /\\(\\)?/g
        , F0 = N0(function(e) {
          var t = [];
          return e.charCodeAt(0) === 46 && t.push(""),
          e.replace(M0, function(r, n, i, o) {
              t.push(i ? o.replace(D0, "$1") : n || r)
          }),
          t
      });
      jl.exports = F0
  }
  );
  var Xi = f( (U1, $l) => {
      function q0(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
              i[r] = t(e[r], r, e);
          return i
      }
      $l.exports = q0
  }
  );
  var rf = f( (B1, tf) => {
      var Ql = St()
        , G0 = Xi()
        , X0 = me()
        , V0 = lr()
        , k0 = 1 / 0
        , Zl = Ql ? Ql.prototype : void 0
        , Jl = Zl ? Zl.toString : void 0;
      function ef(e) {
          if (typeof e == "string")
              return e;
          if (X0(e))
              return G0(e, ef) + "";
          if (V0(e))
              return Jl ? Jl.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -k0 ? "-0" : t
      }
      tf.exports = ef
  }
  );
  var of = f( (W1, nf) => {
      var U0 = rf();
      function B0(e) {
          return e == null ? "" : U0(e)
      }
      nf.exports = B0
  }
  );
  var fr = f( (H1, af) => {
      var W0 = me()
        , H0 = en()
        , z0 = Yl()
        , K0 = of();
      function j0(e, t) {
          return W0(e) ? e : H0(e, t) ? [e] : z0(K0(e))
      }
      af.exports = j0
  }
  );
  var Ft = f( (z1, sf) => {
      var Y0 = lr()
        , $0 = 1 / 0;
      function Q0(e) {
          if (typeof e == "string" || Y0(e))
              return e;
          var t = e + "";
          return t == "0" && 1 / e == -$0 ? "-0" : t
      }
      sf.exports = Q0
  }
  );
  var tn = f( (K1, uf) => {
      var Z0 = fr()
        , J0 = Ft();
      function eS(e, t) {
          t = Z0(t, e);
          for (var r = 0, n = t.length; e != null && r < n; )
              e = e[J0(t[r++])];
          return r && r == n ? e : void 0
      }
      uf.exports = eS
  }
  );
  var rn = f( (j1, cf) => {
      var tS = tn();
      function rS(e, t, r) {
          var n = e == null ? void 0 : tS(e, t);
          return n === void 0 ? r : n
      }
      cf.exports = rS
  }
  );
  var ff = f( (Y1, lf) => {
      function nS(e, t) {
          return e != null && t in Object(e)
      }
      lf.exports = nS
  }
  );
  var pf = f( ($1, df) => {
      var iS = fr()
        , oS = or()
        , aS = me()
        , sS = Kr()
        , uS = jr()
        , cS = Ft();
      function lS(e, t, r) {
          t = iS(t, e);
          for (var n = -1, i = t.length, o = !1; ++n < i; ) {
              var a = cS(t[n]);
              if (!(o = e != null && r(e, a)))
                  break;
              e = e[a]
          }
          return o || ++n != i ? o : (i = e == null ? 0 : e.length,
          !!i && uS(i) && sS(a, i) && (aS(e) || oS(e)))
      }
      df.exports = lS
  }
  );
  var hf = f( (Q1, gf) => {
      var fS = ff()
        , dS = pf();
      function pS(e, t) {
          return e != null && dS(e, t, fS)
      }
      gf.exports = pS
  }
  );
  var yf = f( (Z1, Ef) => {
      var gS = Di()
        , hS = rn()
        , ES = hf()
        , yS = en()
        , vS = Fi()
        , mS = qi()
        , _S = Ft()
        , IS = 1
        , TS = 2;
      function bS(e, t) {
          return yS(e) && vS(t) ? mS(_S(e), t) : function(r) {
              var n = hS(r, e);
              return n === void 0 && n === t ? ES(r, e) : gS(t, n, IS | TS)
          }
      }
      Ef.exports = bS
  }
  );
  var nn = f( (J1, vf) => {
      function AS(e) {
          return e
      }
      vf.exports = AS
  }
  );
  var Vi = f( (eq, mf) => {
      function SS(e) {
          return function(t) {
              return t?.[e]
          }
      }
      mf.exports = SS
  }
  );
  var If = f( (tq, _f) => {
      var OS = tn();
      function wS(e) {
          return function(t) {
              return OS(t, e)
          }
      }
      _f.exports = wS
  }
  );
  var bf = f( (rq, Tf) => {
      var xS = Vi()
        , RS = If()
        , CS = en()
        , LS = Ft();
      function PS(e) {
          return CS(e) ? xS(LS(e)) : RS(e)
      }
      Tf.exports = PS
  }
  );
  var lt = f( (nq, Af) => {
      var NS = Vl()
        , MS = yf()
        , DS = nn()
        , FS = me()
        , qS = bf();
      function GS(e) {
          return typeof e == "function" ? e : e == null ? DS : typeof e == "object" ? FS(e) ? MS(e[0], e[1]) : NS(e) : qS(e)
      }
      Af.exports = GS
  }
  );
  var ki = f( (iq, Sf) => {
      var XS = lt()
        , VS = ht()
        , kS = cr();
      function US(e) {
          return function(t, r, n) {
              var i = Object(t);
              if (!VS(t)) {
                  var o = XS(r, 3);
                  t = kS(t),
                  r = function(s) {
                      return o(i[s], s, i)
                  }
              }
              var a = e(t, r, n);
              return a > -1 ? i[o ? t[a] : a] : void 0
          }
      }
      Sf.exports = US
  }
  );
  var Ui = f( (oq, Of) => {
      function BS(e, t, r, n) {
          for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
              if (t(e[o], o, e))
                  return o;
          return -1
      }
      Of.exports = BS
  }
  );
  var xf = f( (aq, wf) => {
      var WS = /\s/;
      function HS(e) {
          for (var t = e.length; t-- && WS.test(e.charAt(t)); )
              ;
          return t
      }
      wf.exports = HS
  }
  );
  var Cf = f( (sq, Rf) => {
      var zS = xf()
        , KS = /^\s+/;
      function jS(e) {
          return e && e.slice(0, zS(e) + 1).replace(KS, "")
      }
      Rf.exports = jS
  }
  );
  var on = f( (uq, Nf) => {
      var YS = Cf()
        , Lf = $e()
        , $S = lr()
        , Pf = 0 / 0
        , QS = /^[-+]0x[0-9a-f]+$/i
        , ZS = /^0b[01]+$/i
        , JS = /^0o[0-7]+$/i
        , eO = parseInt;
      function tO(e) {
          if (typeof e == "number")
              return e;
          if ($S(e))
              return Pf;
          if (Lf(e)) {
              var t = typeof e.valueOf == "function" ? e.valueOf() : e;
              e = Lf(t) ? t + "" : t
          }
          if (typeof e != "string")
              return e === 0 ? e : +e;
          e = YS(e);
          var r = ZS.test(e);
          return r || JS.test(e) ? eO(e.slice(2), r ? 2 : 8) : QS.test(e) ? Pf : +e
      }
      Nf.exports = tO
  }
  );
  var Ff = f( (cq, Df) => {
      var rO = on()
        , Mf = 1 / 0
        , nO = 17976931348623157e292;
      function iO(e) {
          if (!e)
              return e === 0 ? e : 0;
          if (e = rO(e),
          e === Mf || e === -Mf) {
              var t = e < 0 ? -1 : 1;
              return t * nO
          }
          return e === e ? e : 0
      }
      Df.exports = iO
  }
  );
  var Bi = f( (lq, qf) => {
      var oO = Ff();
      function aO(e) {
          var t = oO(e)
            , r = t % 1;
          return t === t ? r ? t - r : t : 0
      }
      qf.exports = aO
  }
  );
  var Xf = f( (fq, Gf) => {
      var sO = Ui()
        , uO = lt()
        , cO = Bi()
        , lO = Math.max;
      function fO(e, t, r) {
          var n = e == null ? 0 : e.length;
          if (!n)
              return -1;
          var i = r == null ? 0 : cO(r);
          return i < 0 && (i = lO(n + i, 0)),
          sO(e, uO(t, 3), i)
      }
      Gf.exports = fO
  }
  );
  var Wi = f( (dq, Vf) => {
      var dO = ki()
        , pO = Xf()
        , gO = dO(pO);
      Vf.exports = gO
  }
  );
  var Bf = {};
  xe(Bf, {
      ELEMENT_MATCHES: () => hO,
      FLEX_PREFIXED: () => Hi,
      IS_BROWSER_ENV: () => ke,
      TRANSFORM_PREFIXED: () => ft,
      TRANSFORM_STYLE_PREFIXED: () => sn,
      withBrowser: () => an
  });
  var Uf, ke, an, hO, Hi, ft, kf, sn, un = de( () => {
      "use strict";
      Uf = ae(Wi()),
      ke = typeof window < "u",
      an = (e, t) => ke ? e() : t,
      hO = an( () => (0,
      Uf.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
      Hi = an( () => {
          let e = document.createElement("i")
            , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
            , r = "";
          try {
              let {length: n} = t;
              for (let i = 0; i < n; i++) {
                  let o = t[i];
                  if (e.style.display = o,
                  e.style.display === o)
                      return o
              }
              return r
          } catch {
              return r
          }
      }
      , "flex"),
      ft = an( () => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
              let t = ["Webkit", "Moz", "ms"]
                , r = "Transform"
                , {length: n} = t;
              for (let i = 0; i < n; i++) {
                  let o = t[i] + r;
                  if (e.style[o] !== void 0)
                      return o
              }
          }
          return "transform"
      }
      , "transform"),
      kf = ft.split("transform")[0],
      sn = kf ? kf + "TransformStyle" : "transformStyle"
  }
  );
  var zi = f( (pq, jf) => {
      var EO = 4
        , yO = .001
        , vO = 1e-7
        , mO = 10
        , dr = 11
        , cn = 1 / (dr - 1)
        , _O = typeof Float32Array == "function";
      function Wf(e, t) {
          return 1 - 3 * t + 3 * e
      }
      function Hf(e, t) {
          return 3 * t - 6 * e
      }
      function zf(e) {
          return 3 * e
      }
      function ln(e, t, r) {
          return ((Wf(t, r) * e + Hf(t, r)) * e + zf(t)) * e
      }
      function Kf(e, t, r) {
          return 3 * Wf(t, r) * e * e + 2 * Hf(t, r) * e + zf(t)
      }
      function IO(e, t, r, n, i) {
          var o, a, s = 0;
          do
              a = t + (r - t) / 2,
              o = ln(a, n, i) - e,
              o > 0 ? r = a : t = a;
          while (Math.abs(o) > vO && ++s < mO);
          return a
      }
      function TO(e, t, r, n) {
          for (var i = 0; i < EO; ++i) {
              var o = Kf(t, r, n);
              if (o === 0)
                  return t;
              var a = ln(t, r, n) - e;
              t -= a / o
          }
          return t
      }
      jf.exports = function(t, r, n, i) {
          if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
              throw new Error("bezier x values must be in [0, 1] range");
          var o = _O ? new Float32Array(dr) : new Array(dr);
          if (t !== r || n !== i)
              for (var a = 0; a < dr; ++a)
                  o[a] = ln(a * cn, t, n);
          function s(u) {
              for (var l = 0, v = 1, g = dr - 1; v !== g && o[v] <= u; ++v)
                  l += cn;
              --v;
              var p = (u - o[v]) / (o[v + 1] - o[v])
                , I = l + p * cn
                , b = Kf(I, t, n);
              return b >= yO ? TO(u, I, t, n) : b === 0 ? I : IO(u, l, l + cn, t, n)
          }
          return function(l) {
              return t === r && n === i ? l : l === 0 ? 0 : l === 1 ? 1 : ln(s(l), r, i)
          }
      }
  }
  );
  var gr = {};
  xe(gr, {
      bounce: () => iw,
      bouncePast: () => ow,
      ease: () => bO,
      easeIn: () => AO,
      easeInOut: () => OO,
      easeOut: () => SO,
      inBack: () => YO,
      inCirc: () => HO,
      inCubic: () => CO,
      inElastic: () => ZO,
      inExpo: () => UO,
      inOutBack: () => QO,
      inOutCirc: () => KO,
      inOutCubic: () => PO,
      inOutElastic: () => ew,
      inOutExpo: () => WO,
      inOutQuad: () => RO,
      inOutQuart: () => DO,
      inOutQuint: () => GO,
      inOutSine: () => kO,
      inQuad: () => wO,
      inQuart: () => NO,
      inQuint: () => FO,
      inSine: () => XO,
      outBack: () => $O,
      outBounce: () => jO,
      outCirc: () => zO,
      outCubic: () => LO,
      outElastic: () => JO,
      outExpo: () => BO,
      outQuad: () => xO,
      outQuart: () => MO,
      outQuint: () => qO,
      outSine: () => VO,
      swingFrom: () => rw,
      swingFromTo: () => tw,
      swingTo: () => nw
  });
  function wO(e) {
      return Math.pow(e, 2)
  }
  function xO(e) {
      return -(Math.pow(e - 1, 2) - 1)
  }
  function RO(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
  }
  function CO(e) {
      return Math.pow(e, 3)
  }
  function LO(e) {
      return Math.pow(e - 1, 3) + 1
  }
  function PO(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
  }
  function NO(e) {
      return Math.pow(e, 4)
  }
  function MO(e) {
      return -(Math.pow(e - 1, 4) - 1)
  }
  function DO(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
  }
  function FO(e) {
      return Math.pow(e, 5)
  }
  function qO(e) {
      return Math.pow(e - 1, 5) + 1
  }
  function GO(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
  }
  function XO(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1
  }
  function VO(e) {
      return Math.sin(e * (Math.PI / 2))
  }
  function kO(e) {
      return -.5 * (Math.cos(Math.PI * e) - 1)
  }
  function UO(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
  }
  function BO(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
  }
  function WO(e) {
      return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
  }
  function HO(e) {
      return -(Math.sqrt(1 - e * e) - 1)
  }
  function zO(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2))
  }
  function KO(e) {
      return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
  }
  function jO(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
  }
  function YO(e) {
      let t = nt;
      return e * e * ((t + 1) * e - t)
  }
  function $O(e) {
      let t = nt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1
  }
  function QO(e) {
      let t = nt;
      return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
  }
  function ZO(e) {
      let t = nt
        , r = 0
        , n = 1;
      return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
      n < 1 ? (n = 1,
      t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
      -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
  }
  function JO(e) {
      let t = nt
        , r = 0
        , n = 1;
      return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
      n < 1 ? (n = 1,
      t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
      n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
  }
  function ew(e) {
      let t = nt
        , r = 0
        , n = 1;
      return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5),
      n < 1 ? (n = 1,
      t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
      e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
  }
  function tw(e) {
      let t = nt;
      return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
  }
  function rw(e) {
      let t = nt;
      return e * e * ((t + 1) * e - t)
  }
  function nw(e) {
      let t = nt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1
  }
  function iw(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
  }
  function ow(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
  }
  var pr, nt, bO, AO, SO, OO, Ki = de( () => {
      "use strict";
      pr = ae(zi()),
      nt = 1.70158,
      bO = (0,
      pr.default)(.25, .1, .25, 1),
      AO = (0,
      pr.default)(.42, 0, 1, 1),
      SO = (0,
      pr.default)(0, 0, .58, 1),
      OO = (0,
      pr.default)(.42, 0, .58, 1)
  }
  );
  var $f = {};
  xe($f, {
      applyEasing: () => sw,
      createBezierEasing: () => aw,
      optimizeFloat: () => hr
  });
  function hr(e, t=5, r=10) {
      let n = Math.pow(r, t)
        , i = Number(Math.round(e * n) / n);
      return Math.abs(i) > 1e-4 ? i : 0
  }
  function aw(e) {
      return (0,
      Yf.default)(...e)
  }
  function sw(e, t, r) {
      return t === 0 ? 0 : t === 1 ? 1 : hr(r ? t > 0 ? r(t) : t : t > 0 && e && gr[e] ? gr[e](t) : t)
  }
  var Yf, ji = de( () => {
      "use strict";
      Ki();
      Yf = ae(zi())
  }
  );
  var Jf = {};
  xe(Jf, {
      createElementState: () => Zf,
      ixElements: () => Iw,
      mergeActionState: () => Yi
  });
  function Zf(e, t, r, n, i) {
      let o = r === uw ? (0,
      qt.getIn)(i, ["config", "target", "objectId"]) : null;
      return (0,
      qt.mergeIn)(e, [n], {
          id: n,
          ref: t,
          refId: o,
          refType: r
      })
  }
  function Yi(e, t, r, n, i) {
      let o = bw(i);
      return (0,
      qt.mergeIn)(e, [t, _w, r], n, o)
  }
  function bw(e) {
      let {config: t} = e;
      return Tw.reduce( (r, n) => {
          let i = n[0]
            , o = n[1]
            , a = t[i]
            , s = t[o];
          return a != null && s != null && (r[o] = s),
          r
      }
      , {})
  }
  var qt, hq, uw, Eq, cw, lw, fw, dw, pw, gw, hw, Ew, yw, vw, mw, Qf, _w, Iw, Tw, ed = de( () => {
      "use strict";
      qt = ae(xt());
      Re();
      ({HTML_ELEMENT: hq, PLAIN_OBJECT: uw, ABSTRACT_NODE: Eq, CONFIG_X_VALUE: cw, CONFIG_Y_VALUE: lw, CONFIG_Z_VALUE: fw, CONFIG_VALUE: dw, CONFIG_X_UNIT: pw, CONFIG_Y_UNIT: gw, CONFIG_Z_UNIT: hw, CONFIG_UNIT: Ew} = _e),
      {IX2_SESSION_STOPPED: yw, IX2_INSTANCE_ADDED: vw, IX2_ELEMENT_STATE_CHANGED: mw} = ve,
      Qf = {},
      _w = "refState",
      Iw = (e=Qf, t={}) => {
          switch (t.type) {
          case yw:
              return Qf;
          case vw:
              {
                  let {elementId: r, element: n, origin: i, actionItem: o, refType: a} = t.payload
                    , {actionTypeId: s} = o
                    , u = e;
                  return (0,
                  qt.getIn)(u, [r, n]) !== n && (u = Zf(u, n, a, r, o)),
                  Yi(u, r, s, i, o)
              }
          case mw:
              {
                  let {elementId: r, actionTypeId: n, current: i, actionItem: o} = t.payload;
                  return Yi(e, r, n, i, o)
              }
          default:
              return e
          }
      }
      ;
      Tw = [[cw, pw], [lw, gw], [fw, hw], [dw, Ew]]
  }
  );
  var td = f($i => {
      "use strict";
      Object.defineProperty($i, "__esModule", {
          value: !0
      });
      function Aw(e, t) {
          for (var r in t)
              Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: t[r]
              })
      }
      Aw($i, {
          clearPlugin: function() {
              return Lw
          },
          createPluginInstance: function() {
              return Rw
          },
          getPluginConfig: function() {
              return Sw
          },
          getPluginDestination: function() {
              return xw
          },
          getPluginDuration: function() {
              return Ow
          },
          getPluginOrigin: function() {
              return ww
          },
          renderPlugin: function() {
              return Cw
          }
      });
      var Sw = e => e.value
        , Ow = (e, t) => {
          if (t.config.duration !== "auto")
              return null;
          let r = parseFloat(e.getAttribute("data-duration"));
          return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
      }
        , ww = e => e || {
          value: 0
      }
        , xw = e => ({
          value: e.value
      })
        , Rw = e => {
          let t = window.Penou.require("lottie").createInstance(e);
          return t.stop(),
          t.setSubframe(!0),
          t
      }
        , Cw = (e, t, r) => {
          if (!e)
              return;
          let n = t[r.actionTypeId].value / 100;
          e.goToFrame(e.frames * n)
      }
        , Lw = e => {
          window.Penou.require("lottie").createInstance(e).stop()
      }
  }
  );
  var nd = f(Qi => {
      "use strict";
      Object.defineProperty(Qi, "__esModule", {
          value: !0
      });
      function Pw(e, t) {
          for (var r in t)
              Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: t[r]
              })
      }
      Pw(Qi, {
          clearPlugin: function() {
              return Uw
          },
          createPluginInstance: function() {
              return Vw
          },
          getPluginConfig: function() {
              return Fw
          },
          getPluginDestination: function() {
              return Xw
          },
          getPluginDuration: function() {
              return qw
          },
          getPluginOrigin: function() {
              return Gw
          },
          renderPlugin: function() {
              return kw
          }
      });
      var Nw = e => document.querySelector(`[data-w-id="${e}"]`)
        , Mw = () => window.Penou.require("spline")
        , Dw = (e, t) => e.filter(r => !t.includes(r))
        , Fw = (e, t) => e.value[t]
        , qw = () => null
        , rd = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1
      })
        , Gw = (e, t) => {
          let r = t.config.value
            , n = Object.keys(r);
          if (e) {
              let o = Object.keys(e)
                , a = Dw(n, o);
              return a.length ? a.reduce( (u, l) => (u[l] = rd[l],
              u), e) : e
          }
          return n.reduce( (o, a) => (o[a] = rd[a],
          o), {})
      }
        , Xw = e => e.value
        , Vw = (e, t) => {
          let r = t?.config?.target?.pluginElement;
          return r ? Nw(r) : null
      }
        , kw = (e, t, r) => {
          let n = Mw()
            , i = n.getInstance(e)
            , o = r.config.target.objectId
            , a = s => {
              if (!s)
                  throw new Error("Invalid spline app passed to renderSpline");
              let u = o && s.findObjectById(o);
              if (!u)
                  return;
              let {PLUGIN_SPLINE: l} = t;
              l.positionX != null && (u.position.x = l.positionX),
              l.positionY != null && (u.position.y = l.positionY),
              l.positionZ != null && (u.position.z = l.positionZ),
              l.rotationX != null && (u.rotation.x = l.rotationX),
              l.rotationY != null && (u.rotation.y = l.rotationY),
              l.rotationZ != null && (u.rotation.z = l.rotationZ),
              l.scaleX != null && (u.scale.x = l.scaleX),
              l.scaleY != null && (u.scale.y = l.scaleY),
              l.scaleZ != null && (u.scale.z = l.scaleZ)
          }
          ;
          i ? a(i.spline) : n.setLoadHandler(e, a)
      }
        , Uw = () => null
  }
  );
  var id = f(eo => {
      "use strict";
      Object.defineProperty(eo, "__esModule", {
          value: !0
      });
      function Bw(e, t) {
          for (var r in t)
              Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: t[r]
              })
      }
      Bw(eo, {
          clearPlugin: function() {
              return Zw
          },
          createPluginInstance: function() {
              return $w
          },
          getPluginConfig: function() {
              return zw
          },
          getPluginDestination: function() {
              return Yw
          },
          getPluginDuration: function() {
              return Kw
          },
          getPluginOrigin: function() {
              return jw
          },
          renderPlugin: function() {
              return Qw
          }
      });
      var Zi = "--wf-rive-fit"
        , Ji = "--wf-rive-alignment"
        , Ww = e => document.querySelector(`[data-w-id="${e}"]`)
        , Hw = () => window.Penou.require("rive")
        , zw = (e, t) => e.value.inputs[t]
        , Kw = () => null
        , jw = (e, t) => {
          if (e)
              return e;
          let r = {}
            , {inputs: n={}} = t.config.value;
          for (let i in n)
              n[i] == null && (r[i] = 0);
          return r
      }
        , Yw = e => e.value.inputs ?? {}
        , $w = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0)
              return e;
          let n = t?.config?.target?.pluginElement;
          return n ? Ww(n) : null
      }
        , Qw = (e, {PLUGIN_RIVE: t}, r) => {
          let n = Hw()
            , i = n.getInstance(e)
            , o = n.rive.StateMachineInputType
            , {name: a, inputs: s={}} = r.config.value || {};
          function u(l) {
              if (l.loaded)
                  v();
              else {
                  let g = () => {
                      v(),
                      l?.off("load", g)
                  }
                  ;
                  l?.on("load", g)
              }
              function v() {
                  let g = l.stateMachineInputs(a);
                  if (g != null) {
                      if (l.isPlaying || l.play(a, !1),
                      Zi in s || Ji in s) {
                          let p = l.layout
                            , I = s[Zi] ?? p.fit
                            , b = s[Ji] ?? p.alignment;
                          (I !== p.fit || b !== p.alignment) && (l.layout = p.copyWith({
                              fit: I,
                              alignment: b
                          }))
                      }
                      for (let p in s) {
                          if (p === Zi || p === Ji)
                              continue;
                          let I = g.find(b => b.name === p);
                          if (I != null)
                              switch (I.type) {
                              case o.Boolean:
                                  {
                                      if (s[p] != null) {
                                          let b = !!s[p];
                                          I.value = b
                                      }
                                      break
                                  }
                              case o.Number:
                                  {
                                      let b = t[p];
                                      b != null && (I.value = b);
                                      break
                                  }
                              case o.Trigger:
                                  {
                                      s[p] && I.fire();
                                      break
                                  }
                              }
                      }
                  }
              }
          }
          i?.rive ? u(i.rive) : n.setLoadHandler(e, u)
      }
        , Zw = (e, t) => null
  }
  );
  var ro = f(to => {
      "use strict";
      Object.defineProperty(to, "__esModule", {
          value: !0
      });
      Object.defineProperty(to, "normalizeColor", {
          enumerable: !0,
          get: function() {
              return Jw
          }
      });
      var od = {
          aliceblue: "#F0F8FF",
          antiquewhite: "#FAEBD7",
          aqua: "#00FFFF",
          aquamarine: "#7FFFD4",
          azure: "#F0FFFF",
          beige: "#F5F5DC",
          bisque: "#FFE4C4",
          black: "#000000",
          blanchedalmond: "#FFEBCD",
          blue: "#0000FF",
          blueviolet: "#8A2BE2",
          brown: "#A52A2A",
          burlywood: "#DEB887",
          cadetblue: "#5F9EA0",
          chartreuse: "#7FFF00",
          chocolate: "#D2691E",
          coral: "#FF7F50",
          cornflowerblue: "#6495ED",
          cornsilk: "#FFF8DC",
          crimson: "#DC143C",
          cyan: "#00FFFF",
          darkblue: "#00008B",
          darkcyan: "#008B8B",
          darkgoldenrod: "#B8860B",
          darkgray: "#A9A9A9",
          darkgreen: "#006400",
          darkgrey: "#A9A9A9",
          darkkhaki: "#BDB76B",
          darkmagenta: "#8B008B",
          darkolivegreen: "#556B2F",
          darkorange: "#FF8C00",
          darkorchid: "#9932CC",
          darkred: "#8B0000",
          darksalmon: "#E9967A",
          darkseagreen: "#8FBC8F",
          darkslateblue: "#483D8B",
          darkslategray: "#2F4F4F",
          darkslategrey: "#2F4F4F",
          darkturquoise: "#00CED1",
          darkviolet: "#9400D3",
          deeppink: "#FF1493",
          deepskyblue: "#00BFFF",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1E90FF",
          firebrick: "#B22222",
          floralwhite: "#FFFAF0",
          forestgreen: "#228B22",
          fuchsia: "#FF00FF",
          gainsboro: "#DCDCDC",
          ghostwhite: "#F8F8FF",
          gold: "#FFD700",
          goldenrod: "#DAA520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#ADFF2F",
          grey: "#808080",
          honeydew: "#F0FFF0",
          hotpink: "#FF69B4",
          indianred: "#CD5C5C",
          indigo: "#4B0082",
          ivory: "#FFFFF0",
          khaki: "#F0E68C",
          lavender: "#E6E6FA",
          lavenderblush: "#FFF0F5",
          lawngreen: "#7CFC00",
          lemonchiffon: "#FFFACD",
          lightblue: "#ADD8E6",
          lightcoral: "#F08080",
          lightcyan: "#E0FFFF",
          lightgoldenrodyellow: "#FAFAD2",
          lightgray: "#D3D3D3",
          lightgreen: "#90EE90",
          lightgrey: "#D3D3D3",
          lightpink: "#FFB6C1",
          lightsalmon: "#FFA07A",
          lightseagreen: "#20B2AA",
          lightskyblue: "#87CEFA",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#B0C4DE",
          lightyellow: "#FFFFE0",
          lime: "#00FF00",
          limegreen: "#32CD32",
          linen: "#FAF0E6",
          magenta: "#FF00FF",
          maroon: "#800000",
          mediumaquamarine: "#66CDAA",
          mediumblue: "#0000CD",
          mediumorchid: "#BA55D3",
          mediumpurple: "#9370DB",
          mediumseagreen: "#3CB371",
          mediumslateblue: "#7B68EE",
          mediumspringgreen: "#00FA9A",
          mediumturquoise: "#48D1CC",
          mediumvioletred: "#C71585",
          midnightblue: "#191970",
          mintcream: "#F5FFFA",
          mistyrose: "#FFE4E1",
          moccasin: "#FFE4B5",
          navajowhite: "#FFDEAD",
          navy: "#000080",
          oldlace: "#FDF5E6",
          olive: "#808000",
          olivedrab: "#6B8E23",
          orange: "#FFA500",
          orangered: "#FF4500",
          orchid: "#DA70D6",
          palegoldenrod: "#EEE8AA",
          palegreen: "#98FB98",
          paleturquoise: "#AFEEEE",
          palevioletred: "#DB7093",
          papayawhip: "#FFEFD5",
          peachpuff: "#FFDAB9",
          peru: "#CD853F",
          pink: "#FFC0CB",
          plum: "#DDA0DD",
          powderblue: "#B0E0E6",
          purple: "#800080",
          rebeccapurple: "#663399",
          red: "#FF0000",
          rosybrown: "#BC8F8F",
          royalblue: "#4169E1",
          saddlebrown: "#8B4513",
          salmon: "#FA8072",
          sandybrown: "#F4A460",
          seagreen: "#2E8B57",
          seashell: "#FFF5EE",
          sienna: "#A0522D",
          silver: "#C0C0C0",
          skyblue: "#87CEEB",
          slateblue: "#6A5ACD",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#FFFAFA",
          springgreen: "#00FF7F",
          steelblue: "#4682B4",
          tan: "#D2B48C",
          teal: "#008080",
          thistle: "#D8BFD8",
          tomato: "#FF6347",
          turquoise: "#40E0D0",
          violet: "#EE82EE",
          wheat: "#F5DEB3",
          white: "#FFFFFF",
          whitesmoke: "#F5F5F5",
          yellow: "#FFFF00",
          yellowgreen: "#9ACD32"
      };
      function Jw(e) {
          let t, r, n, i = 1, o = e.replace(/\s/g, "").toLowerCase(), s = (typeof od[o] == "string" ? od[o].toLowerCase() : null) || o;
          if (s.startsWith("#")) {
              let u = s.substring(1);
              u.length === 3 || u.length === 4 ? (t = parseInt(u[0] + u[0], 16),
              r = parseInt(u[1] + u[1], 16),
              n = parseInt(u[2] + u[2], 16),
              u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255)) : (u.length === 6 || u.length === 8) && (t = parseInt(u.substring(0, 2), 16),
              r = parseInt(u.substring(2, 4), 16),
              n = parseInt(u.substring(4, 6), 16),
              u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255))
          } else if (s.startsWith("rgba")) {
              let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
              t = parseInt(u[0], 10),
              r = parseInt(u[1], 10),
              n = parseInt(u[2], 10),
              i = parseFloat(u[3])
          } else if (s.startsWith("rgb")) {
              let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
              t = parseInt(u[0], 10),
              r = parseInt(u[1], 10),
              n = parseInt(u[2], 10)
          } else if (s.startsWith("hsla")) {
              let u = s.match(/hsla\(([^)]+)\)/)[1].split(",")
                , l = parseFloat(u[0])
                , v = parseFloat(u[1].replace("%", "")) / 100
                , g = parseFloat(u[2].replace("%", "")) / 100;
              i = parseFloat(u[3]);
              let p = (1 - Math.abs(2 * g - 1)) * v, I = p * (1 - Math.abs(l / 60 % 2 - 1)), b = g - p / 2, A, R, S;
              l >= 0 && l < 60 ? (A = p,
              R = I,
              S = 0) : l >= 60 && l < 120 ? (A = I,
              R = p,
              S = 0) : l >= 120 && l < 180 ? (A = 0,
              R = p,
              S = I) : l >= 180 && l < 240 ? (A = 0,
              R = I,
              S = p) : l >= 240 && l < 300 ? (A = I,
              R = 0,
              S = p) : (A = p,
              R = 0,
              S = I),
              t = Math.round((A + b) * 255),
              r = Math.round((R + b) * 255),
              n = Math.round((S + b) * 255)
          } else if (s.startsWith("hsl")) {
              let u = s.match(/hsl\(([^)]+)\)/)[1].split(","), l = parseFloat(u[0]), v = parseFloat(u[1].replace("%", "")) / 100, g = parseFloat(u[2].replace("%", "")) / 100, p = (1 - Math.abs(2 * g - 1)) * v, I = p * (1 - Math.abs(l / 60 % 2 - 1)), b = g - p / 2, A, R, S;
              l >= 0 && l < 60 ? (A = p,
              R = I,
              S = 0) : l >= 60 && l < 120 ? (A = I,
              R = p,
              S = 0) : l >= 120 && l < 180 ? (A = 0,
              R = p,
              S = I) : l >= 180 && l < 240 ? (A = 0,
              R = I,
              S = p) : l >= 240 && l < 300 ? (A = I,
              R = 0,
              S = p) : (A = p,
              R = 0,
              S = I),
              t = Math.round((A + b) * 255),
              r = Math.round((R + b) * 255),
              n = Math.round((S + b) * 255)
          }
          if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
              throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
          return {
              red: t,
              green: r,
              blue: n,
              alpha: i
          }
      }
  }
  );
  var ad = f(no => {
      "use strict";
      Object.defineProperty(no, "__esModule", {
          value: !0
      });
      function ex(e, t) {
          for (var r in t)
              Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: t[r]
              })
      }
      ex(no, {
          clearPlugin: function() {
              return ux
          },
          createPluginInstance: function() {
              return ax
          },
          getPluginConfig: function() {
              return rx
          },
          getPluginDestination: function() {
              return ox
          },
          getPluginDuration: function() {
              return nx
          },
          getPluginOrigin: function() {
              return ix
          },
          renderPlugin: function() {
              return sx
          }
      });
      var tx = ro()
        , rx = (e, t) => e.value[t]
        , nx = () => null
        , ix = (e, t) => {
          if (e)
              return e;
          let r = t.config.value
            , n = t.config.target.objectId
            , i = getComputedStyle(document.documentElement).getPropertyValue(n);
          if (r.size != null)
              return {
                  size: parseInt(i, 10)
              };
          if (r.red != null && r.green != null && r.blue != null)
              return (0,
              tx.normalizeColor)(i)
      }
        , ox = e => e.value
        , ax = () => null
        , sx = (e, t, r) => {
          let n = r.config.target.objectId, i = r.config.value.unit, {PLUGIN_VARIABLE: o} = t, {size: a, red: s, green: u, blue: l, alpha: v} = o, g;
          a != null && (g = a + i),
          s != null && l != null && u != null && v != null && (g = `rgba(${s}, ${u}, ${l}, ${v})`),
          g != null && document.documentElement.style.setProperty(n, g)
      }
        , ux = (e, t) => {
          let r = t.config.target.objectId;
          document.documentElement.style.removeProperty(r)
      }
  }
  );
  var ud = f(io => {
      "use strict";
      Object.defineProperty(io, "__esModule", {
          value: !0
      });
      Object.defineProperty(io, "pluginMethodMap", {
          enumerable: !0,
          get: function() {
              return px
          }
      });
      var fn = (Re(),
      He(fs))
        , cx = dn(td())
        , lx = dn(nd())
        , fx = dn(id())
        , dx = dn(ad());
      function sd(e) {
          if (typeof WeakMap != "function")
              return null;
          var t = new WeakMap
            , r = new WeakMap;
          return (sd = function(n) {
              return n ? r : t
          }
          )(e)
      }
      function dn(e, t) {
          if (!t && e && e.__esModule)
              return e;
          if (e === null || typeof e != "object" && typeof e != "function")
              return {
                  default: e
              };
          var r = sd(t);
          if (r && r.has(e))
              return r.get(e);
          var n = {
              __proto__: null
          }
            , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
              if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                  var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                  a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
              }
          return n.default = e,
          r && r.set(e, n),
          n
      }
      var px = new Map([[fn.ActionTypeConsts.PLUGIN_LOTTIE, {
          ...cx
      }], [fn.ActionTypeConsts.PLUGIN_SPLINE, {
          ...lx
      }], [fn.ActionTypeConsts.PLUGIN_RIVE, {
          ...fx
      }], [fn.ActionTypeConsts.PLUGIN_VARIABLE, {
          ...dx
      }]])
  }
  );
  var cd = {};
  xe(cd, {
      clearPlugin: () => lo,
      createPluginInstance: () => hx,
      getPluginConfig: () => ao,
      getPluginDestination: () => uo,
      getPluginDuration: () => gx,
      getPluginOrigin: () => so,
      isPluginType: () => yt,
      renderPlugin: () => co
  });
  function yt(e) {
      return oo.pluginMethodMap.has(e)
  }
  var oo, vt, ao, so, gx, uo, hx, co, lo, fo = de( () => {
      "use strict";
      un();
      oo = ae(ud());
      vt = e => t => {
          if (!ke)
              return () => null;
          let r = oo.pluginMethodMap.get(t);
          if (!r)
              throw new Error(`IX2 no plugin configured for: ${t}`);
          let n = r[e];
          if (!n)
              throw new Error(`IX2 invalid plugin method: ${e}`);
          return n
      }
      ,
      ao = vt("getPluginConfig"),
      so = vt("getPluginOrigin"),
      gx = vt("getPluginDuration"),
      uo = vt("getPluginDestination"),
      hx = vt("createPluginInstance"),
      co = vt("renderPlugin"),
      lo = vt("clearPlugin")
  }
  );
  var fd = f( (Aq, ld) => {
      function Ex(e, t) {
          return e == null || e !== e ? t : e
      }
      ld.exports = Ex
  }
  );
  var pd = f( (Sq, dd) => {
      function yx(e, t, r, n) {
          var i = -1
            , o = e == null ? 0 : e.length;
          for (n && o && (r = e[++i]); ++i < o; )
              r = t(r, e[i], i, e);
          return r
      }
      dd.exports = yx
  }
  );
  var hd = f( (Oq, gd) => {
      function vx(e) {
          return function(t, r, n) {
              for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
                  var u = a[e ? s : ++i];
                  if (r(o[u], u, o) === !1)
                      break
              }
              return t
          }
      }
      gd.exports = vx
  }
  );
  var yd = f( (wq, Ed) => {
      var mx = hd()
        , _x = mx();
      Ed.exports = _x
  }
  );
  var po = f( (xq, vd) => {
      var Ix = yd()
        , Tx = cr();
      function bx(e, t) {
          return e && Ix(e, t, Tx)
      }
      vd.exports = bx
  }
  );
  var _d = f( (Rq, md) => {
      var Ax = ht();
      function Sx(e, t) {
          return function(r, n) {
              if (r == null)
                  return r;
              if (!Ax(r))
                  return e(r, n);
              for (var i = r.length, o = t ? i : -1, a = Object(r); (t ? o-- : ++o < i) && n(a[o], o, a) !== !1; )
                  ;
              return r
          }
      }
      md.exports = Sx
  }
  );
  var go = f( (Cq, Id) => {
      var Ox = po()
        , wx = _d()
        , xx = wx(Ox);
      Id.exports = xx
  }
  );
  var bd = f( (Lq, Td) => {
      function Rx(e, t, r, n, i) {
          return i(e, function(o, a, s) {
              r = n ? (n = !1,
              o) : t(r, o, a, s)
          }),
          r
      }
      Td.exports = Rx
  }
  );
  var Sd = f( (Pq, Ad) => {
      var Cx = pd()
        , Lx = go()
        , Px = lt()
        , Nx = bd()
        , Mx = me();
      function Dx(e, t, r) {
          var n = Mx(e) ? Cx : Nx
            , i = arguments.length < 3;
          return n(e, Px(t, 4), r, i, Lx)
      }
      Ad.exports = Dx
  }
  );
  var wd = f( (Nq, Od) => {
      var Fx = Ui()
        , qx = lt()
        , Gx = Bi()
        , Xx = Math.max
        , Vx = Math.min;
      function kx(e, t, r) {
          var n = e == null ? 0 : e.length;
          if (!n)
              return -1;
          var i = n - 1;
          return r !== void 0 && (i = Gx(r),
          i = r < 0 ? Xx(n + i, 0) : Vx(i, n - 1)),
          Fx(e, qx(t, 3), i, !0)
      }
      Od.exports = kx
  }
  );
  var Rd = f( (Mq, xd) => {
      var Ux = ki()
        , Bx = wd()
        , Wx = Ux(Bx);
      xd.exports = Wx
  }
  );
  function Cd(e, t) {
      return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
  }
  function Hx(e, t) {
      if (Cd(e, t))
          return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
          return !1;
      let r = Object.keys(e)
        , n = Object.keys(t);
      if (r.length !== n.length)
          return !1;
      for (let i = 0; i < r.length; i++)
          if (!Object.hasOwn(t, r[i]) || !Cd(e[r[i]], t[r[i]]))
              return !1;
      return !0
  }
  var ho, Ld = de( () => {
      "use strict";
      ho = Hx
  }
  );
  var Yd = {};
  xe(Yd, {
      cleanupHTMLElement: () => UR,
      clearAllStyles: () => kR,
      clearObjectCache: () => uR,
      getActionListProgress: () => WR,
      getAffectedElements: () => _o,
      getComputedStyle: () => ER,
      getDestinationValues: () => bR,
      getElementId: () => dR,
      getInstanceId: () => lR,
      getInstanceOrigin: () => mR,
      getItemConfigByKey: () => TR,
      getMaxDurationItemIndex: () => jd,
      getNamespacedParameterId: () => KR,
      getRenderType: () => Hd,
      getStyleProp: () => AR,
      mediaQueriesEqual: () => YR,
      observeStore: () => hR,
      reduceListToGroup: () => HR,
      reifyState: () => pR,
      renderHTMLElement: () => SR,
      shallowEqual: () => ho,
      shouldAllowMediaQuery: () => jR,
      shouldNamespaceEventParameter: () => zR,
      stringifyTarget: () => $R
  });
  function uR() {
      pn.clear()
  }
  function lR() {
      return "i" + cR++
  }
  function dR(e, t) {
      for (let r in e) {
          let n = e[r];
          if (n && n.ref === t)
              return n.id
      }
      return "e" + fR++
  }
  function pR({events: e, actionLists: t, site: r}={}) {
      let n = (0,
      yn.default)(e, (a, s) => {
          let {eventTypeId: u} = s;
          return a[u] || (a[u] = {}),
          a[u][s.id] = s,
          a
      }
      , {})
        , i = r && r.mediaQueries
        , o = [];
      return i ? o = i.map(a => a.key) : (i = [],
      console.warn("IX2 missing mediaQueries in site data")),
      {
          ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: n,
              mediaQueries: i,
              mediaQueryKeys: o
          }
      }
  }
  function hR({store: e, select: t, onChange: r, comparator: n=gR}) {
      let {getState: i, subscribe: o} = e
        , a = o(u)
        , s = t(i());
      function u() {
          let l = t(i());
          if (l == null) {
              a();
              return
          }
          n(l, s) || (s = l,
          r(s, e))
      }
      return a
  }
  function Md(e) {
      let t = typeof e;
      if (t === "string")
          return {
              id: e
          };
      if (e != null && t === "object") {
          let {id: r, objectId: n, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s} = e;
          return {
              id: r,
              objectId: n,
              selector: i,
              selectorGuids: o,
              appliesTo: a,
              useEventTarget: s
          }
      }
      return {}
  }
  function _o({config: e, event: t, eventTarget: r, elementRoot: n, elementApi: i}) {
      if (!i)
          throw new Error("IX2 missing elementApi");
      let {targets: o} = e;
      if (Array.isArray(o) && o.length > 0)
          return o.reduce( (M, O) => M.concat(_o({
              config: {
                  target: O
              },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i
          })), []);
      let {getValidDocument: a, getQuerySelector: s, queryDocument: u, getChildElements: l, getSiblingElements: v, matchSelector: g, elementContains: p, isSiblingNode: I} = i
        , {target: b} = e;
      if (!b)
          return [];
      let {id: A, objectId: R, selector: S, selectorGuids: L, appliesTo: C, useEventTarget: q} = Md(b);
      if (R)
          return [pn.has(R) ? pn.get(R) : pn.set(R, {}).get(R)];
      if (C === pi.PAGE) {
          let M = a(A);
          return M ? [M] : []
      }
      let P = (t?.action?.config?.affectedElements ?? {})[A || S] || {}, U = !!(P.id || P.selector), B, H, j, Q = t && s(Md(t.target));
      if (U ? (B = P.limitAffectedElements,
      H = Q,
      j = s(P)) : H = j = s({
          id: A,
          selector: S,
          selectorGuids: L
      }),
      t && q) {
          let M = r && (j || q === !0) ? [r] : u(Q);
          if (j) {
              if (q === oR)
                  return u(j).filter(O => M.some(N => p(O, N)));
              if (q === Pd)
                  return u(j).filter(O => M.some(N => p(N, O)));
              if (q === Nd)
                  return u(j).filter(O => M.some(N => I(N, O)))
          }
          return M
      }
      return H == null || j == null ? [] : ke && n ? u(j).filter(M => n.contains(M)) : B === Pd ? u(H, j) : B === iR ? l(u(H)).filter(g(j)) : B === Nd ? v(u(H)).filter(g(j)) : u(j)
  }
  function ER({element: e, actionItem: t}) {
      if (!ke)
          return {};
      let {actionTypeId: r} = t;
      switch (r) {
      case Ut:
      case Bt:
      case Wt:
      case Ht:
      case mn:
          return window.getComputedStyle(e);
      default:
          return {}
      }
  }
  function mR(e, t={}, r={}, n, i) {
      let {getStyle: o} = i
        , {actionTypeId: a} = n;
      if (yt(a))
          return so(a)(t[a], n);
      switch (n.actionTypeId) {
      case Xt:
      case Vt:
      case kt:
      case mr:
          return t[n.actionTypeId] || Io[n.actionTypeId];
      case _r:
          return yR(t[n.actionTypeId], n.config.filters);
      case Ir:
          return vR(t[n.actionTypeId], n.config.fontVariations);
      case Ud:
          return {
              value: (0,
              it.default)(parseFloat(o(e, hn)), 1)
          };
      case Ut:
          {
              let s = o(e, Qe), u = o(e, Ze), l, v;
              return n.config.widthUnit === dt ? l = Dd.test(s) ? parseFloat(s) : parseFloat(r.width) : l = (0,
              it.default)(parseFloat(s), parseFloat(r.width)),
              n.config.heightUnit === dt ? v = Dd.test(u) ? parseFloat(u) : parseFloat(r.height) : v = (0,
              it.default)(parseFloat(u), parseFloat(r.height)),
              {
                  widthValue: l,
                  heightValue: v
              }
          }
      case Bt:
      case Wt:
      case Ht:
          return GR({
              element: e,
              actionTypeId: n.actionTypeId,
              computedStyle: r,
              getStyle: o
          });
      case mn:
          return {
              value: (0,
              it.default)(o(e, En), r.display)
          };
      case sR:
          return t[n.actionTypeId] || {
              value: 0
          };
      default:
          return
      }
  }
  function bR({element: e, actionItem: t, elementApi: r}) {
      if (yt(t.actionTypeId))
          return uo(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
      case Xt:
      case Vt:
      case kt:
      case mr:
          {
              let {xValue: n, yValue: i, zValue: o} = t.config;
              return {
                  xValue: n,
                  yValue: i,
                  zValue: o
              }
          }
      case Ut:
          {
              let {getStyle: n, setStyle: i, getProperty: o} = r
                , {widthUnit: a, heightUnit: s} = t.config
                , {widthValue: u, heightValue: l} = t.config;
              if (!ke)
                  return {
                      widthValue: u,
                      heightValue: l
                  };
              if (a === dt) {
                  let v = n(e, Qe);
                  i(e, Qe, ""),
                  u = o(e, "offsetWidth"),
                  i(e, Qe, v)
              }
              if (s === dt) {
                  let v = n(e, Ze);
                  i(e, Ze, ""),
                  l = o(e, "offsetHeight"),
                  i(e, Ze, v)
              }
              return {
                  widthValue: u,
                  heightValue: l
              }
          }
      case Bt:
      case Wt:
      case Ht:
          {
              let {rValue: n, gValue: i, bValue: o, aValue: a, globalSwatchId: s} = t.config;
              if (s && s.startsWith("--")) {
                  let {getStyle: u} = r
                    , l = u(e, s)
                    , v = (0,
                  Gd.normalizeColor)(l);
                  return {
                      rValue: v.red,
                      gValue: v.green,
                      bValue: v.blue,
                      aValue: v.alpha
                  }
              }
              return {
                  rValue: n,
                  gValue: i,
                  bValue: o,
                  aValue: a
              }
          }
      case _r:
          return t.config.filters.reduce(_R, {});
      case Ir:
          return t.config.fontVariations.reduce(IR, {});
      default:
          {
              let {value: n} = t.config;
              return {
                  value: n
              }
          }
      }
  }
  function Hd(e) {
      if (/^TRANSFORM_/.test(e))
          return Vd;
      if (/^STYLE_/.test(e))
          return vo;
      if (/^GENERAL_/.test(e))
          return yo;
      if (/^PLUGIN_/.test(e))
          return kd
  }
  function AR(e, t) {
      return e === vo ? t.replace("STYLE_", "").toLowerCase() : null
  }
  function SR(e, t, r, n, i, o, a, s, u) {
      switch (s) {
      case Vd:
          return CR(e, t, r, i, a);
      case vo:
          return XR(e, t, r, i, o, a);
      case yo:
          return VR(e, i, a);
      case kd:
          {
              let {actionTypeId: l} = i;
              if (yt(l))
                  return co(l)(u, t, i)
          }
      }
  }
  function CR(e, t, r, n, i) {
      let o = RR.map(s => {
          let u = Io[s]
            , {xValue: l=u.xValue, yValue: v=u.yValue, zValue: g=u.zValue, xUnit: p="", yUnit: I="", zUnit: b=""} = t[s] || {};
          switch (s) {
          case Xt:
              return `${jx}(${l}${p}, ${v}${I}, ${g}${b})`;
          case Vt:
              return `${Yx}(${l}${p}, ${v}${I}, ${g}${b})`;
          case kt:
              return `${$x}(${l}${p}) ${Qx}(${v}${I}) ${Zx}(${g}${b})`;
          case mr:
              return `${Jx}(${l}${p}, ${v}${I})`;
          default:
              return ""
          }
      }
      ).join(" ")
        , {setStyle: a} = i;
      mt(e, ft, i),
      a(e, ft, o),
      NR(n, r) && a(e, sn, eR)
  }
  function LR(e, t, r, n) {
      let i = (0,
      yn.default)(t, (a, s, u) => `${a} ${u}(${s}${xR(u, r)})`, "")
        , {setStyle: o} = n;
      mt(e, Er, n),
      o(e, Er, i)
  }
  function PR(e, t, r, n) {
      let i = (0,
      yn.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`),
      a), []).join(", ")
        , {setStyle: o} = n;
      mt(e, yr, n),
      o(e, yr, i)
  }
  function NR({actionTypeId: e}, {xValue: t, yValue: r, zValue: n}) {
      return e === Xt && n !== void 0 || e === Vt && n !== void 0 || e === kt && (t !== void 0 || r !== void 0)
  }
  function qR(e, t) {
      let r = e.exec(t);
      return r ? r[1] : ""
  }
  function GR({element: e, actionTypeId: t, computedStyle: r, getStyle: n}) {
      let i = mo[t]
        , o = n(e, i)
        , a = DR.test(o) ? o : r[i]
        , s = qR(FR, a).split(vr);
      return {
          rValue: (0,
          it.default)(parseInt(s[0], 10), 255),
          gValue: (0,
          it.default)(parseInt(s[1], 10), 255),
          bValue: (0,
          it.default)(parseInt(s[2], 10), 255),
          aValue: (0,
          it.default)(parseFloat(s[3]), 1)
      }
  }
  function XR(e, t, r, n, i, o) {
      let {setStyle: a} = o;
      switch (n.actionTypeId) {
      case Ut:
          {
              let {widthUnit: s="", heightUnit: u=""} = n.config
                , {widthValue: l, heightValue: v} = r;
              l !== void 0 && (s === dt && (s = "px"),
              mt(e, Qe, o),
              a(e, Qe, l + s)),
              v !== void 0 && (u === dt && (u = "px"),
              mt(e, Ze, o),
              a(e, Ze, v + u));
              break
          }
      case _r:
          {
              LR(e, r, n.config, o);
              break
          }
      case Ir:
          {
              PR(e, r, n.config, o);
              break
          }
      case Bt:
      case Wt:
      case Ht:
          {
              let s = mo[n.actionTypeId]
                , u = Math.round(r.rValue)
                , l = Math.round(r.gValue)
                , v = Math.round(r.bValue)
                , g = r.aValue;
              mt(e, s, o),
              a(e, s, g >= 1 ? `rgb(${u},${l},${v})` : `rgba(${u},${l},${v},${g})`);
              break
          }
      default:
          {
              let {unit: s=""} = n.config;
              mt(e, i, o),
              a(e, i, r.value + s);
              break
          }
      }
  }
  function VR(e, t, r) {
      let {setStyle: n} = r;
      switch (t.actionTypeId) {
      case mn:
          {
              let {value: i} = t.config;
              i === tR && ke ? n(e, En, Hi) : n(e, En, i);
              return
          }
      }
  }
  function mt(e, t, r) {
      if (!ke)
          return;
      let n = Wd[t];
      if (!n)
          return;
      let {getStyle: i, setStyle: o} = r
        , a = i(e, Gt);
      if (!a) {
          o(e, Gt, n);
          return
      }
      let s = a.split(vr).map(Bd);
      s.indexOf(n) === -1 && o(e, Gt, s.concat(n).join(vr))
  }
  function zd(e, t, r) {
      if (!ke)
          return;
      let n = Wd[t];
      if (!n)
          return;
      let {getStyle: i, setStyle: o} = r
        , a = i(e, Gt);
      !a || a.indexOf(n) === -1 || o(e, Gt, a.split(vr).map(Bd).filter(s => s !== n).join(vr))
  }
  function kR({store: e, elementApi: t}) {
      let {ixData: r} = e.getState()
        , {events: n={}, actionLists: i={}} = r;
      Object.keys(n).forEach(o => {
          let a = n[o]
            , {config: s} = a.action
            , {actionListId: u} = s
            , l = i[u];
          l && Fd({
              actionList: l,
              event: a,
              elementApi: t
          })
      }
      ),
      Object.keys(i).forEach(o => {
          Fd({
              actionList: i[o],
              elementApi: t
          })
      }
      )
  }
  function Fd({actionList: e={}, event: t, elementApi: r}) {
      let {actionItemGroups: n, continuousParameterGroups: i} = e;
      n && n.forEach(o => {
          qd({
              actionGroup: o,
              event: t,
              elementApi: r
          })
      }
      ),
      i && i.forEach(o => {
          let {continuousActionGroups: a} = o;
          a.forEach(s => {
              qd({
                  actionGroup: s,
                  event: t,
                  elementApi: r
              })
          }
          )
      }
      )
  }
  function qd({actionGroup: e, event: t, elementApi: r}) {
      let {actionItems: n} = e;
      n.forEach(i => {
          let {actionTypeId: o, config: a} = i, s;
          yt(o) ? s = u => lo(o)(u, i) : s = Kd({
              effect: BR,
              actionTypeId: o,
              elementApi: r
          }),
          _o({
              config: a,
              event: t,
              elementApi: r
          }).forEach(s)
      }
      )
  }
  function UR(e, t, r) {
      let {setStyle: n, getStyle: i} = r
        , {actionTypeId: o} = t;
      if (o === Ut) {
          let {config: a} = t;
          a.widthUnit === dt && n(e, Qe, ""),
          a.heightUnit === dt && n(e, Ze, "")
      }
      i(e, Gt) && Kd({
          effect: zd,
          actionTypeId: o,
          elementApi: r
      })(e)
  }
  function BR(e, t, r) {
      let {setStyle: n} = r;
      zd(e, t, r),
      n(e, t, ""),
      t === ft && n(e, sn, "")
  }
  function jd(e) {
      let t = 0
        , r = 0;
      return e.forEach( (n, i) => {
          let {config: o} = n
            , a = o.delay + o.duration;
          a >= t && (t = a,
          r = i)
      }
      ),
      r
  }
  function WR(e, t) {
      let {actionItemGroups: r, useFirstGroupAsInitialState: n} = e
        , {actionItem: i, verboseTimeElapsed: o=0} = t
        , a = 0
        , s = 0;
      return r.forEach( (u, l) => {
          if (n && l === 0)
              return;
          let {actionItems: v} = u
            , g = v[jd(v)]
            , {config: p, actionTypeId: I} = g;
          i.id === g.id && (s = a + o);
          let b = Hd(I) === yo ? 0 : p.duration;
          a += p.delay + b
      }
      ),
      a > 0 ? hr(s / a) : 0
  }
  function HR({actionList: e, actionItemId: t, rawData: r}) {
      let {actionItemGroups: n, continuousParameterGroups: i} = e
        , o = []
        , a = s => (o.push((0,
      vn.mergeIn)(s, ["config"], {
          delay: 0,
          duration: 0
      })),
      s.id === t);
      return n && n.some( ({actionItems: s}) => s.some(a)),
      i && i.some(s => {
          let {continuousActionGroups: u} = s;
          return u.some( ({actionItems: l}) => l.some(a))
      }
      ),
      (0,
      vn.setIn)(r, ["actionLists"], {
          [e.id]: {
              id: e.id,
              actionItemGroups: [{
                  actionItems: o
              }]
          }
      })
  }
  function zR(e, {basedOn: t}) {
      return e === Ve.SCROLLING_IN_VIEW && (t === Ye.ELEMENT || t == null) || e === Ve.MOUSE_MOVE && t === Ye.ELEMENT
  }
  function KR(e, t) {
      return e + aR + t
  }
  function jR(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1
  }
  function YR(e, t) {
      return ho(e && e.sort(), t && t.sort())
  }
  function $R(e) {
      if (typeof e == "string")
          return e;
      if (e.pluginElement && e.objectId)
          return e.pluginElement + Eo + e.objectId;
      if (e.objectId)
          return e.objectId;
      let {id: t="", selector: r="", useEventTarget: n=""} = e;
      return t + Eo + r + Eo + n
  }
  var it, yn, gn, vn, Gd, zx, Kx, jx, Yx, $x, Qx, Zx, Jx, eR, tR, hn, Er, yr, Qe, Ze, Xd, rR, nR, Pd, iR, Nd, oR, En, Gt, dt, vr, aR, Eo, Vd, yo, vo, kd, Xt, Vt, kt, mr, Ud, _r, Ir, Ut, Bt, Wt, Ht, mn, sR, Bd, mo, Wd, pn, cR, fR, gR, Dd, yR, vR, _R, IR, TR, Io, OR, wR, xR, RR, MR, DR, FR, Kd, $d = de( () => {
      "use strict";
      it = ae(fd()),
      yn = ae(Sd()),
      gn = ae(Rd()),
      vn = ae(xt());
      Re();
      Ld();
      ji();
      Gd = ae(ro());
      fo();
      un();
      ({BACKGROUND: zx, TRANSFORM: Kx, TRANSLATE_3D: jx, SCALE_3D: Yx, ROTATE_X: $x, ROTATE_Y: Qx, ROTATE_Z: Zx, SKEW: Jx, PRESERVE_3D: eR, FLEX: tR, OPACITY: hn, FILTER: Er, FONT_VARIATION_SETTINGS: yr, WIDTH: Qe, HEIGHT: Ze, BACKGROUND_COLOR: Xd, BORDER_COLOR: rR, COLOR: nR, CHILDREN: Pd, IMMEDIATE_CHILDREN: iR, SIBLINGS: Nd, PARENT: oR, DISPLAY: En, WILL_CHANGE: Gt, AUTO: dt, COMMA_DELIMITER: vr, COLON_DELIMITER: aR, BAR_DELIMITER: Eo, RENDER_TRANSFORM: Vd, RENDER_GENERAL: yo, RENDER_STYLE: vo, RENDER_PLUGIN: kd} = _e),
      {TRANSFORM_MOVE: Xt, TRANSFORM_SCALE: Vt, TRANSFORM_ROTATE: kt, TRANSFORM_SKEW: mr, STYLE_OPACITY: Ud, STYLE_FILTER: _r, STYLE_FONT_VARIATION: Ir, STYLE_SIZE: Ut, STYLE_BACKGROUND_COLOR: Bt, STYLE_BORDER: Wt, STYLE_TEXT_COLOR: Ht, GENERAL_DISPLAY: mn, OBJECT_VALUE: sR} = Ae,
      Bd = e => e.trim(),
      mo = Object.freeze({
          [Bt]: Xd,
          [Wt]: rR,
          [Ht]: nR
      }),
      Wd = Object.freeze({
          [ft]: Kx,
          [Xd]: zx,
          [hn]: hn,
          [Er]: Er,
          [Qe]: Qe,
          [Ze]: Ze,
          [yr]: yr
      }),
      pn = new Map;
      cR = 1;
      fR = 1;
      gR = (e, t) => e === t;
      Dd = /px/,
      yR = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = OR[n.type]),
      r), e || {}),
      vR = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = wR[n.type] || n.defaultValue || 0),
      r), e || {});
      _R = (e, t) => (t && (e[t.type] = t.value || 0),
      e),
      IR = (e, t) => (t && (e[t.type] = t.value || 0),
      e),
      TR = (e, t, r) => {
          if (yt(e))
              return ao(e)(r, t);
          switch (e) {
          case _r:
              {
                  let n = (0,
                  gn.default)(r.filters, ({type: i}) => i === t);
                  return n ? n.value : 0
              }
          case Ir:
              {
                  let n = (0,
                  gn.default)(r.fontVariations, ({type: i}) => i === t);
                  return n ? n.value : 0
              }
          default:
              return r[t]
          }
      }
      ;
      Io = {
          [Xt]: Object.freeze({
              xValue: 0,
              yValue: 0,
              zValue: 0
          }),
          [Vt]: Object.freeze({
              xValue: 1,
              yValue: 1,
              zValue: 1
          }),
          [kt]: Object.freeze({
              xValue: 0,
              yValue: 0,
              zValue: 0
          }),
          [mr]: Object.freeze({
              xValue: 0,
              yValue: 0
          })
      },
      OR = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100
      }),
      wR = Object.freeze({
          wght: 0,
          opsz: 0,
          wdth: 0,
          slnt: 0
      }),
      xR = (e, t) => {
          let r = (0,
          gn.default)(t.filters, ({type: n}) => n === e);
          if (r && r.unit)
              return r.unit;
          switch (e) {
          case "blur":
              return "px";
          case "hue-rotate":
              return "deg";
          default:
              return "%"
          }
      }
      ,
      RR = Object.keys(Io);
      MR = "\\(([^)]+)\\)",
      DR = /^rgb/,
      FR = RegExp(`rgba?${MR}`);
      Kd = ({effect: e, actionTypeId: t, elementApi: r}) => n => {
          switch (t) {
          case Xt:
          case Vt:
          case kt:
          case mr:
              e(n, ft, r);
              break;
          case _r:
              e(n, Er, r);
              break;
          case Ir:
              e(n, yr, r);
              break;
          case Ud:
              e(n, hn, r);
              break;
          case Ut:
              e(n, Qe, r),
              e(n, Ze, r);
              break;
          case Bt:
          case Wt:
          case Ht:
              e(n, mo[t], r);
              break;
          case mn:
              e(n, En, r);
              break
          }
      }
  }
  );
  var _t = f(To => {
      "use strict";
      Object.defineProperty(To, "__esModule", {
          value: !0
      });
      function QR(e, t) {
          for (var r in t)
              Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: t[r]
              })
      }
      QR(To, {
          IX2BrowserSupport: function() {
              return ZR
          },
          IX2EasingUtils: function() {
              return eC
          },
          IX2Easings: function() {
              return JR
          },
          IX2ElementsReducer: function() {
              return tC
          },
          IX2VanillaPlugins: function() {
              return rC
          },
          IX2VanillaUtils: function() {
              return nC
          }
      });
      var ZR = zt((un(),
      He(Bf)))
        , JR = zt((Ki(),
      He(gr)))
        , eC = zt((ji(),
      He($f)))
        , tC = zt((ed(),
      He(Jf)))
        , rC = zt((fo(),
      He(cd)))
        , nC = zt(($d(),
      He(Yd)));
      function Qd(e) {
          if (typeof WeakMap != "function")
              return null;
          var t = new WeakMap
            , r = new WeakMap;
          return (Qd = function(n) {
              return n ? r : t
          }
          )(e)
      }
      function zt(e, t) {
          if (!t && e && e.__esModule)
              return e;
          if (e === null || typeof e != "object" && typeof e != "function")
              return {
                  default: e
              };
          var r = Qd(t);
          if (r && r.has(e))
              return r.get(e);
          var n = {
              __proto__: null
          }
            , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
              if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                  var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                  a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
              }
          return n.default = e,
          r && r.set(e, n),
          n
      }
  }
  );
  var In, ot, iC, oC, aC, sC, uC, cC, _n, Zd, lC, fC, bo, dC, pC, gC, hC, Jd, ep = de( () => {
      "use strict";
      Re();
      In = ae(_t()),
      ot = ae(xt()),
      {IX2_RAW_DATA_IMPORTED: iC, IX2_SESSION_STOPPED: oC, IX2_INSTANCE_ADDED: aC, IX2_INSTANCE_STARTED: sC, IX2_INSTANCE_REMOVED: uC, IX2_ANIMATION_FRAME_CHANGED: cC} = ve,
      {optimizeFloat: _n, applyEasing: Zd, createBezierEasing: lC} = In.IX2EasingUtils,
      {RENDER_GENERAL: fC} = _e,
      {getItemConfigByKey: bo, getRenderType: dC, getStyleProp: pC} = In.IX2VanillaUtils,
      gC = (e, t) => {
          let {position: r, parameterId: n, actionGroups: i, destinationKeys: o, smoothing: a, restingValue: s, actionTypeId: u, customEasingFn: l, skipMotion: v, skipToValue: g} = e
            , {parameters: p} = t.payload
            , I = Math.max(1 - a, .01)
            , b = p[n];
          b == null && (I = 1,
          b = s);
          let A = Math.max(b, 0) || 0
            , R = _n(A - r)
            , S = v ? g : _n(r + R * I)
            , L = S * 100;
          if (S === r && e.current)
              return e;
          let C, q, D, P;
          for (let B = 0, {length: H} = i; B < H; B++) {
              let {keyframe: j, actionItems: Q} = i[B];
              if (B === 0 && (C = Q[0]),
              L >= j) {
                  C = Q[0];
                  let M = i[B + 1]
                    , O = M && L !== j;
                  q = O ? M.actionItems[0] : null,
                  O && (D = j / 100,
                  P = (M.keyframe - j) / 100)
              }
          }
          let U = {};
          if (C && !q)
              for (let B = 0, {length: H} = o; B < H; B++) {
                  let j = o[B];
                  U[j] = bo(u, j, C.config)
              }
          else if (C && q && D !== void 0 && P !== void 0) {
              let B = (S - D) / P
                , H = C.config.easing
                , j = Zd(H, B, l);
              for (let Q = 0, {length: M} = o; Q < M; Q++) {
                  let O = o[Q]
                    , N = bo(u, O, C.config)
                    , Z = (bo(u, O, q.config) - N) * j + N;
                  U[O] = Z
              }
          }
          return (0,
          ot.merge)(e, {
              position: S,
              current: U
          })
      }
      ,
      hC = (e, t) => {
          let {active: r, origin: n, start: i, immediate: o, renderType: a, verbose: s, actionItem: u, destination: l, destinationKeys: v, pluginDuration: g, instanceDelay: p, customEasingFn: I, skipMotion: b} = e
            , A = u.config.easing
            , {duration: R, delay: S} = u.config;
          g != null && (R = g),
          S = p ?? S,
          a === fC ? R = 0 : (o || b) && (R = S = 0);
          let {now: L} = t.payload;
          if (r && n) {
              let C = L - (i + S);
              if (s) {
                  let B = L - i
                    , H = R + S
                    , j = _n(Math.min(Math.max(0, B / H), 1));
                  e = (0,
                  ot.set)(e, "verboseTimeElapsed", H * j)
              }
              if (C < 0)
                  return e;
              let q = _n(Math.min(Math.max(0, C / R), 1))
                , D = Zd(A, q, I)
                , P = {}
                , U = null;
              return v.length && (U = v.reduce( (B, H) => {
                  let j = l[H]
                    , Q = parseFloat(n[H]) || 0
                    , O = (parseFloat(j) - Q) * D + Q;
                  return B[H] = O,
                  B
              }
              , {})),
              P.current = U,
              P.position = q,
              q === 1 && (P.active = !1,
              P.complete = !0),
              (0,
              ot.merge)(e, P)
          }
          return e
      }
      ,
      Jd = (e=Object.freeze({}), t) => {
          switch (t.type) {
          case iC:
              return t.payload.ixInstances || Object.freeze({});
          case oC:
              return Object.freeze({});
          case aC:
              {
                  let {instanceId: r, elementId: n, actionItem: i, eventId: o, eventTarget: a, eventStateKey: s, actionListId: u, groupIndex: l, isCarrier: v, origin: g, destination: p, immediate: I, verbose: b, continuous: A, parameterId: R, actionGroups: S, smoothing: L, restingValue: C, pluginInstance: q, pluginDuration: D, instanceDelay: P, skipMotion: U, skipToValue: B} = t.payload
                    , {actionTypeId: H} = i
                    , j = dC(H)
                    , Q = pC(j, H)
                    , M = Object.keys(p).filter(N => p[N] != null && typeof p[N] != "string")
                    , {easing: O} = i.config;
                  return (0,
                  ot.set)(e, r, {
                      id: r,
                      elementId: n,
                      active: !1,
                      position: 0,
                      start: 0,
                      origin: g,
                      destination: p,
                      destinationKeys: M,
                      immediate: I,
                      verbose: b,
                      current: null,
                      actionItem: i,
                      actionTypeId: H,
                      eventId: o,
                      eventTarget: a,
                      eventStateKey: s,
                      actionListId: u,
                      groupIndex: l,
                      renderType: j,
                      isCarrier: v,
                      styleProp: Q,
                      continuous: A,
                      parameterId: R,
                      actionGroups: S,
                      smoothing: L,
                      restingValue: C,
                      pluginInstance: q,
                      pluginDuration: D,
                      instanceDelay: P,
                      skipMotion: U,
                      skipToValue: B,
                      customEasingFn: Array.isArray(O) && O.length === 4 ? lC(O) : void 0
                  })
              }
          case sC:
              {
                  let {instanceId: r, time: n} = t.payload;
                  return (0,
                  ot.mergeIn)(e, [r], {
                      active: !0,
                      complete: !1,
                      start: n
                  })
              }
          case uC:
              {
                  let {instanceId: r} = t.payload;
                  if (!e[r])
                      return e;
                  let n = {}
                    , i = Object.keys(e)
                    , {length: o} = i;
                  for (let a = 0; a < o; a++) {
                      let s = i[a];
                      s !== r && (n[s] = e[s])
                  }
                  return n
              }
          case cC:
              {
                  let r = e
                    , n = Object.keys(e)
                    , {length: i} = n;
                  for (let o = 0; o < i; o++) {
                      let a = n[o]
                        , s = e[a]
                        , u = s.continuous ? gC : hC;
                      r = (0,
                      ot.set)(r, a, u(s, t))
                  }
                  return r
              }
          default:
              return e
          }
      }
  }
  );
  var EC, yC, vC, tp, rp = de( () => {
      "use strict";
      Re();
      ({IX2_RAW_DATA_IMPORTED: EC, IX2_SESSION_STOPPED: yC, IX2_PARAMETER_CHANGED: vC} = ve),
      tp = (e={}, t) => {
          switch (t.type) {
          case EC:
              return t.payload.ixParameters || {};
          case yC:
              return {};
          case vC:
              {
                  let {key: r, value: n} = t.payload;
                  return e[r] = n,
                  e
              }
          default:
              return e
          }
      }
  }
  );
  var op = {};
  xe(op, {
      default: () => _C
  });
  var np, ip, mC, _C, ap = de( () => {
      "use strict";
      np = ae(di());
      ps();
      Ms();
      qs();
      ip = ae(_t());
      ep();
      rp();
      ({ixElements: mC} = ip.IX2ElementsReducer),
      _C = (0,
      np.combineReducers)({
          ixData: ds,
          ixRequest: Ns,
          ixSession: Fs,
          ixElements: mC,
          ixInstances: Jd,
          ixParameters: tp
      })
  }
  );
  var up = f( (Zq, sp) => {
      var IC = ut()
        , TC = me()
        , bC = rt()
        , AC = "[object String]";
      function SC(e) {
          return typeof e == "string" || !TC(e) && bC(e) && IC(e) == AC
      }
      sp.exports = SC
  }
  );
  var lp = f( (Jq, cp) => {
      var OC = Vi()
        , wC = OC("length");
      cp.exports = wC
  }
  );
  var dp = f( (eG, fp) => {
      var xC = "\\ud800-\\udfff"
        , RC = "\\u0300-\\u036f"
        , CC = "\\ufe20-\\ufe2f"
        , LC = "\\u20d0-\\u20ff"
        , PC = RC + CC + LC
        , NC = "\\ufe0e\\ufe0f"
        , MC = "\\u200d"
        , DC = RegExp("[" + MC + xC + PC + NC + "]");
      function FC(e) {
          return DC.test(e)
      }
      fp.exports = FC
  }
  );
  var Ip = f( (tG, _p) => {
      var gp = "\\ud800-\\udfff"
        , qC = "\\u0300-\\u036f"
        , GC = "\\ufe20-\\ufe2f"
        , XC = "\\u20d0-\\u20ff"
        , VC = qC + GC + XC
        , kC = "\\ufe0e\\ufe0f"
        , UC = "[" + gp + "]"
        , Ao = "[" + VC + "]"
        , So = "\\ud83c[\\udffb-\\udfff]"
        , BC = "(?:" + Ao + "|" + So + ")"
        , hp = "[^" + gp + "]"
        , Ep = "(?:\\ud83c[\\udde6-\\uddff]){2}"
        , yp = "[\\ud800-\\udbff][\\udc00-\\udfff]"
        , WC = "\\u200d"
        , vp = BC + "?"
        , mp = "[" + kC + "]?"
        , HC = "(?:" + WC + "(?:" + [hp, Ep, yp].join("|") + ")" + mp + vp + ")*"
        , zC = mp + vp + HC
        , KC = "(?:" + [hp + Ao + "?", Ao, Ep, yp, UC].join("|") + ")"
        , pp = RegExp(So + "(?=" + So + ")|" + KC + zC, "g");
      function jC(e) {
          for (var t = pp.lastIndex = 0; pp.test(e); )
              ++t;
          return t
      }
      _p.exports = jC
  }
  );
  var bp = f( (rG, Tp) => {
      var YC = lp()
        , $C = dp()
        , QC = Ip();
      function ZC(e) {
          return $C(e) ? QC(e) : YC(e)
      }
      Tp.exports = ZC
  }
  );
  var Sp = f( (nG, Ap) => {
      var JC = Qr()
        , eL = Zr()
        , tL = ht()
        , rL = up()
        , nL = bp()
        , iL = "[object Map]"
        , oL = "[object Set]";
      function aL(e) {
          if (e == null)
              return 0;
          if (tL(e))
              return rL(e) ? nL(e) : e.length;
          var t = eL(e);
          return t == iL || t == oL ? e.size : JC(e).length
      }
      Ap.exports = aL
  }
  );
  var wp = f( (iG, Op) => {
      var sL = "Expected a function";
      function uL(e) {
          if (typeof e != "function")
              throw new TypeError(sL);
          return function() {
              var t = arguments;
              switch (t.length) {
              case 0:
                  return !e.call(this);
              case 1:
                  return !e.call(this, t[0]);
              case 2:
                  return !e.call(this, t[0], t[1]);
              case 3:
                  return !e.call(this, t[0], t[1], t[2])
              }
              return !e.apply(this, t)
          }
      }
      Op.exports = uL
  }
  );
  var Oo = f( (oG, xp) => {
      var cL = ct()
        , lL = function() {
          try {
              var e = cL(Object, "defineProperty");
              return e({}, "", {}),
              e
          } catch {}
      }();
      xp.exports = lL
  }
  );
  var wo = f( (aG, Cp) => {
      var Rp = Oo();
      function fL(e, t, r) {
          t == "__proto__" && Rp ? Rp(e, t, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0
          }) : e[t] = r
      }
      Cp.exports = fL
  }
  );
  var Pp = f( (sG, Lp) => {
      var dL = wo()
        , pL = kr()
        , gL = Object.prototype
        , hL = gL.hasOwnProperty;
      function EL(e, t, r) {
          var n = e[t];
          (!(hL.call(e, t) && pL(n, r)) || r === void 0 && !(t in e)) && dL(e, t, r)
      }
      Lp.exports = EL
  }
  );
  var Dp = f( (uG, Mp) => {
      var yL = Pp()
        , vL = fr()
        , mL = Kr()
        , Np = $e()
        , _L = Ft();
      function IL(e, t, r, n) {
          if (!Np(e))
              return e;
          t = vL(t, e);
          for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
              var u = _L(t[i])
                , l = r;
              if (u === "__proto__" || u === "constructor" || u === "prototype")
                  return e;
              if (i != a) {
                  var v = s[u];
                  l = n ? n(v, u, s) : void 0,
                  l === void 0 && (l = Np(v) ? v : mL(t[i + 1]) ? [] : {})
              }
              yL(s, u, l),
              s = s[u]
          }
          return e
      }
      Mp.exports = IL
  }
  );
  var qp = f( (cG, Fp) => {
      var TL = tn()
        , bL = Dp()
        , AL = fr();
      function SL(e, t, r) {
          for (var n = -1, i = t.length, o = {}; ++n < i; ) {
              var a = t[n]
                , s = TL(e, a);
              r(s, a) && bL(o, AL(a, e), s)
          }
          return o
      }
      Fp.exports = SL
  }
  );
  var Xp = f( (lG, Gp) => {
      var OL = Hr()
        , wL = Jn()
        , xL = Si()
        , RL = Ai()
        , CL = Object.getOwnPropertySymbols
        , LL = CL ? function(e) {
          for (var t = []; e; )
              OL(t, xL(e)),
              e = wL(e);
          return t
      }
      : RL;
      Gp.exports = LL
  }
  );
  var kp = f( (fG, Vp) => {
      function PL(e) {
          var t = [];
          if (e != null)
              for (var r in Object(e))
                  t.push(r);
          return t
      }
      Vp.exports = PL
  }
  );
  var Bp = f( (dG, Up) => {
      var NL = $e()
        , ML = $r()
        , DL = kp()
        , FL = Object.prototype
        , qL = FL.hasOwnProperty;
      function GL(e) {
          if (!NL(e))
              return DL(e);
          var t = ML(e)
            , r = [];
          for (var n in e)
              n == "constructor" && (t || !qL.call(e, n)) || r.push(n);
          return r
      }
      Up.exports = GL
  }
  );
  var Hp = f( (pG, Wp) => {
      var XL = wi()
        , VL = Bp()
        , kL = ht();
      function UL(e) {
          return kL(e) ? XL(e, !0) : VL(e)
      }
      Wp.exports = UL
  }
  );
  var Kp = f( (gG, zp) => {
      var BL = bi()
        , WL = Xp()
        , HL = Hp();
      function zL(e) {
          return BL(e, HL, WL)
      }
      zp.exports = zL
  }
  );
  var Yp = f( (hG, jp) => {
      var KL = Xi()
        , jL = lt()
        , YL = qp()
        , $L = Kp();
      function QL(e, t) {
          if (e == null)
              return {};
          var r = KL($L(e), function(n) {
              return [n]
          });
          return t = jL(t),
          YL(e, r, function(n, i) {
              return t(n, i[0])
          })
      }
      jp.exports = QL
  }
  );
  var Qp = f( (EG, $p) => {
      var ZL = lt()
        , JL = wp()
        , eP = Yp();
      function tP(e, t) {
          return eP(e, JL(ZL(t)))
      }
      $p.exports = tP
  }
  );
  var Jp = f( (yG, Zp) => {
      var rP = Qr()
        , nP = Zr()
        , iP = or()
        , oP = me()
        , aP = ht()
        , sP = zr()
        , uP = $r()
        , cP = Yr()
        , lP = "[object Map]"
        , fP = "[object Set]"
        , dP = Object.prototype
        , pP = dP.hasOwnProperty;
      function gP(e) {
          if (e == null)
              return !0;
          if (aP(e) && (oP(e) || typeof e == "string" || typeof e.splice == "function" || sP(e) || cP(e) || iP(e)))
              return !e.length;
          var t = nP(e);
          if (t == lP || t == fP)
              return !e.size;
          if (uP(e))
              return !rP(e).length;
          for (var r in e)
              if (pP.call(e, r))
                  return !1;
          return !0
      }
      Zp.exports = gP
  }
  );
  var tg = f( (vG, eg) => {
      var hP = wo()
        , EP = po()
        , yP = lt();
      function vP(e, t) {
          var r = {};
          return t = yP(t, 3),
          EP(e, function(n, i, o) {
              hP(r, i, t(n, i, o))
          }),
          r
      }
      eg.exports = vP
  }
  );
  var ng = f( (mG, rg) => {
      function mP(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
              ;
          return e
      }
      rg.exports = mP
  }
  );
  var og = f( (_G, ig) => {
      var _P = nn();
      function IP(e) {
          return typeof e == "function" ? e : _P
      }
      ig.exports = IP
  }
  );
  var sg = f( (IG, ag) => {
      var TP = ng()
        , bP = go()
        , AP = og()
        , SP = me();
      function OP(e, t) {
          var r = SP(e) ? TP : bP;
          return r(e, AP(t))
      }
      ag.exports = OP
  }
  );
  var cg = f( (TG, ug) => {
      var wP = Xe()
        , xP = function() {
          return wP.Date.now()
      };
      ug.exports = xP
  }
  );
  var dg = f( (bG, fg) => {
      var RP = $e()
        , xo = cg()
        , lg = on()
        , CP = "Expected a function"
        , LP = Math.max
        , PP = Math.min;
      function NP(e, t, r) {
          var n, i, o, a, s, u, l = 0, v = !1, g = !1, p = !0;
          if (typeof e != "function")
              throw new TypeError(CP);
          t = lg(t) || 0,
          RP(r) && (v = !!r.leading,
          g = "maxWait"in r,
          o = g ? LP(lg(r.maxWait) || 0, t) : o,
          p = "trailing"in r ? !!r.trailing : p);
          function I(P) {
              var U = n
                , B = i;
              return n = i = void 0,
              l = P,
              a = e.apply(B, U),
              a
          }
          function b(P) {
              return l = P,
              s = setTimeout(S, t),
              v ? I(P) : a
          }
          function A(P) {
              var U = P - u
                , B = P - l
                , H = t - U;
              return g ? PP(H, o - B) : H
          }
          function R(P) {
              var U = P - u
                , B = P - l;
              return u === void 0 || U >= t || U < 0 || g && B >= o
          }
          function S() {
              var P = xo();
              if (R(P))
                  return L(P);
              s = setTimeout(S, A(P))
          }
          function L(P) {
              return s = void 0,
              p && n ? I(P) : (n = i = void 0,
              a)
          }
          function C() {
              s !== void 0 && clearTimeout(s),
              l = 0,
              n = u = i = s = void 0
          }
          function q() {
              return s === void 0 ? a : L(xo())
          }
          function D() {
              var P = xo()
                , U = R(P);
              if (n = arguments,
              i = this,
              u = P,
              U) {
                  if (s === void 0)
                      return b(u);
                  if (g)
                      return clearTimeout(s),
                      s = setTimeout(S, t),
                      I(u)
              }
              return s === void 0 && (s = setTimeout(S, t)),
              a
          }
          return D.cancel = C,
          D.flush = q,
          D
      }
      fg.exports = NP
  }
  );
  var gg = f( (AG, pg) => {
      var MP = dg()
        , DP = $e()
        , FP = "Expected a function";
      function qP(e, t, r) {
          var n = !0
            , i = !0;
          if (typeof e != "function")
              throw new TypeError(FP);
          return DP(r) && (n = "leading"in r ? !!r.leading : n,
          i = "trailing"in r ? !!r.trailing : i),
          MP(e, t, {
              leading: n,
              maxWait: t,
              trailing: i
          })
      }
      pg.exports = qP
  }
  );
  var Eg = {};
  xe(Eg, {
      actionListPlaybackChanged: () => jt,
      animationFrameChanged: () => bn,
      clearRequested: () => uN,
      elementStateChanged: () => Fo,
      eventListenerAdded: () => Tn,
      eventStateChanged: () => No,
      instanceAdded: () => Mo,
      instanceRemoved: () => Do,
      instanceStarted: () => An,
      mediaQueriesDefined: () => Go,
      parameterChanged: () => Kt,
      playbackRequested: () => aN,
      previewRequested: () => oN,
      rawDataImported: () => Ro,
      sessionInitialized: () => Co,
      sessionStarted: () => Lo,
      sessionStopped: () => Po,
      stopRequested: () => sN,
      testFrameRendered: () => cN,
      viewportWidthChanged: () => qo
  });
  var hg, GP, XP, VP, kP, UP, BP, WP, HP, zP, KP, jP, YP, $P, QP, ZP, JP, eN, tN, rN, nN, iN, Ro, Co, Lo, Po, oN, aN, sN, uN, Tn, cN, No, bn, Kt, Mo, An, Do, Fo, jt, qo, Go, Sn = de( () => {
      "use strict";
      Re();
      hg = ae(_t()),
      {IX2_RAW_DATA_IMPORTED: GP, IX2_SESSION_INITIALIZED: XP, IX2_SESSION_STARTED: VP, IX2_SESSION_STOPPED: kP, IX2_PREVIEW_REQUESTED: UP, IX2_PLAYBACK_REQUESTED: BP, IX2_STOP_REQUESTED: WP, IX2_CLEAR_REQUESTED: HP, IX2_EVENT_LISTENER_ADDED: zP, IX2_TEST_FRAME_RENDERED: KP, IX2_EVENT_STATE_CHANGED: jP, IX2_ANIMATION_FRAME_CHANGED: YP, IX2_PARAMETER_CHANGED: $P, IX2_INSTANCE_ADDED: QP, IX2_INSTANCE_STARTED: ZP, IX2_INSTANCE_REMOVED: JP, IX2_ELEMENT_STATE_CHANGED: eN, IX2_ACTION_LIST_PLAYBACK_CHANGED: tN, IX2_VIEWPORT_WIDTH_CHANGED: rN, IX2_MEDIA_QUERIES_DEFINED: nN} = ve,
      {reifyState: iN} = hg.IX2VanillaUtils,
      Ro = e => ({
          type: GP,
          payload: {
              ...iN(e)
          }
      }),
      Co = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
          type: XP,
          payload: {
              hasBoundaryNodes: e,
              reducedMotion: t
          }
      }),
      Lo = () => ({
          type: VP
      }),
      Po = () => ({
          type: kP
      }),
      oN = ({rawData: e, defer: t}) => ({
          type: UP,
          payload: {
              defer: t,
              rawData: e
          }
      }),
      aN = ({actionTypeId: e=Ae.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: i, immediate: o, testManual: a, verbose: s, rawData: u}) => ({
          type: BP,
          payload: {
              actionTypeId: e,
              actionListId: t,
              actionItemId: r,
              testManual: a,
              eventId: n,
              allowEvents: i,
              immediate: o,
              verbose: s,
              rawData: u
          }
      }),
      sN = e => ({
          type: WP,
          payload: {
              actionListId: e
          }
      }),
      uN = () => ({
          type: HP
      }),
      Tn = (e, t) => ({
          type: zP,
          payload: {
              target: e,
              listenerParams: t
          }
      }),
      cN = (e=1) => ({
          type: KP,
          payload: {
              step: e
          }
      }),
      No = (e, t) => ({
          type: jP,
          payload: {
              stateKey: e,
              newState: t
          }
      }),
      bn = (e, t) => ({
          type: YP,
          payload: {
              now: e,
              parameters: t
          }
      }),
      Kt = (e, t) => ({
          type: $P,
          payload: {
              key: e,
              value: t
          }
      }),
      Mo = e => ({
          type: QP,
          payload: {
              ...e
          }
      }),
      An = (e, t) => ({
          type: ZP,
          payload: {
              instanceId: e,
              time: t
          }
      }),
      Do = e => ({
          type: JP,
          payload: {
              instanceId: e
          }
      }),
      Fo = (e, t, r, n) => ({
          type: eN,
          payload: {
              elementId: e,
              actionTypeId: t,
              current: r,
              actionItem: n
          }
      }),
      jt = ({actionListId: e, isPlaying: t}) => ({
          type: tN,
          payload: {
              actionListId: e,
              isPlaying: t
          }
      }),
      qo = ({width: e, mediaQueries: t}) => ({
          type: rN,
          payload: {
              width: e,
              mediaQueries: t
          }
      }),
      Go = () => ({
          type: nN
      })
  }
  );
  var Oe = {};
  xe(Oe, {
      elementContains: () => ko,
      getChildElements: () => mN,
      getClosestElement: () => Tr,
      getProperty: () => gN,
      getQuerySelector: () => Vo,
      getRefType: () => Uo,
      getSiblingElements: () => _N,
      getStyle: () => pN,
      getValidDocument: () => EN,
      isSiblingNode: () => vN,
      matchSelector: () => hN,
      queryDocument: () => yN,
      setStyle: () => dN
  });
  function dN(e, t, r) {
      e.style[t] = r
  }
  function pN(e, t) {
      return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
  }
  function gN(e, t) {
      return e[t]
  }
  function hN(e) {
      return t => t[Xo](e)
  }
  function Vo({id: e, selector: t}) {
      if (e) {
          let r = e;
          if (e.indexOf(yg) !== -1) {
              let n = e.split(yg)
                , i = n[0];
              if (r = n[1],
              i !== document.documentElement.getAttribute(mg))
                  return null
          }
          return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
      }
      return t
  }
  function EN(e) {
      return e == null || e === document.documentElement.getAttribute(mg) ? document : null
  }
  function yN(e, t) {
      return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
  }
  function ko(e, t) {
      return e.contains(t)
  }
  function vN(e, t) {
      return e !== t && e.parentNode === t.parentNode
  }
  function mN(e) {
      let t = [];
      for (let r = 0, {length: n} = e || []; r < n; r++) {
          let {children: i} = e[r]
            , {length: o} = i;
          if (o)
              for (let a = 0; a < o; a++)
                  t.push(i[a])
      }
      return t
  }
  function _N(e=[]) {
      let t = []
        , r = [];
      for (let n = 0, {length: i} = e; n < i; n++) {
          let {parentNode: o} = e[n];
          if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
              continue;
          r.push(o);
          let a = o.firstElementChild;
          for (; a != null; )
              e.indexOf(a) === -1 && t.push(a),
              a = a.nextElementSibling
      }
      return t
  }
  function Uo(e) {
      return e != null && typeof e == "object" ? e instanceof Element ? lN : fN : null
  }
  var vg, Xo, yg, lN, fN, mg, Tr, _g = de( () => {
      "use strict";
      vg = ae(_t());
      Re();
      ({ELEMENT_MATCHES: Xo} = vg.IX2BrowserSupport),
      {IX2_ID_DELIMITER: yg, HTML_ELEMENT: lN, PLAIN_OBJECT: fN, WF_PAGE: mg} = _e;
      Tr = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
          if (!document.documentElement.contains(e))
              return null;
          let r = e;
          do {
              if (r[Xo] && r[Xo](t))
                  return r;
              r = r.parentNode
          } while (r != null);
          return null
      }
  }
  );
  var Bo = f( (wG, Tg) => {
      var IN = $e()
        , Ig = Object.create
        , TN = function() {
          function e() {}
          return function(t) {
              if (!IN(t))
                  return {};
              if (Ig)
                  return Ig(t);
              e.prototype = t;
              var r = new e;
              return e.prototype = void 0,
              r
          }
      }();
      Tg.exports = TN
  }
  );
  var On = f( (xG, bg) => {
      function bN() {}
      bg.exports = bN
  }
  );
  var xn = f( (RG, Ag) => {
      var AN = Bo()
        , SN = On();
      function wn(e, t) {
          this.__wrapped__ = e,
          this.__actions__ = [],
          this.__chain__ = !!t,
          this.__index__ = 0,
          this.__values__ = void 0
      }
      wn.prototype = AN(SN.prototype);
      wn.prototype.constructor = wn;
      Ag.exports = wn
  }
  );
  var xg = f( (CG, wg) => {
      var Sg = St()
        , ON = or()
        , wN = me()
        , Og = Sg ? Sg.isConcatSpreadable : void 0;
      function xN(e) {
          return wN(e) || ON(e) || !!(Og && e && e[Og])
      }
      wg.exports = xN
  }
  );
  var Lg = f( (LG, Cg) => {
      var RN = Hr()
        , CN = xg();
      function Rg(e, t, r, n, i) {
          var o = -1
            , a = e.length;
          for (r || (r = CN),
          i || (i = []); ++o < a; ) {
              var s = e[o];
              t > 0 && r(s) ? t > 1 ? Rg(s, t - 1, r, n, i) : RN(i, s) : n || (i[i.length] = s)
          }
          return i
      }
      Cg.exports = Rg
  }
  );
  var Ng = f( (PG, Pg) => {
      var LN = Lg();
      function PN(e) {
          var t = e == null ? 0 : e.length;
          return t ? LN(e, 1) : []
      }
      Pg.exports = PN
  }
  );
  var Dg = f( (NG, Mg) => {
      function NN(e, t, r) {
          switch (r.length) {
          case 0:
              return e.call(t);
          case 1:
              return e.call(t, r[0]);
          case 2:
              return e.call(t, r[0], r[1]);
          case 3:
              return e.call(t, r[0], r[1], r[2])
          }
          return e.apply(t, r)
      }
      Mg.exports = NN
  }
  );
  var Gg = f( (MG, qg) => {
      var MN = Dg()
        , Fg = Math.max;
      function DN(e, t, r) {
          return t = Fg(t === void 0 ? e.length - 1 : t, 0),
          function() {
              for (var n = arguments, i = -1, o = Fg(n.length - t, 0), a = Array(o); ++i < o; )
                  a[i] = n[t + i];
              i = -1;
              for (var s = Array(t + 1); ++i < t; )
                  s[i] = n[i];
              return s[t] = r(a),
              MN(e, this, s)
          }
      }
      qg.exports = DN
  }
  );
  var Vg = f( (DG, Xg) => {
      function FN(e) {
          return function() {
              return e
          }
      }
      Xg.exports = FN
  }
  );
  var Bg = f( (FG, Ug) => {
      var qN = Vg()
        , kg = Oo()
        , GN = nn()
        , XN = kg ? function(e, t) {
          return kg(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: qN(t),
              writable: !0
          })
      }
      : GN;
      Ug.exports = XN
  }
  );
  var Hg = f( (qG, Wg) => {
      var VN = 800
        , kN = 16
        , UN = Date.now;
      function BN(e) {
          var t = 0
            , r = 0;
          return function() {
              var n = UN()
                , i = kN - (n - r);
              if (r = n,
              i > 0) {
                  if (++t >= VN)
                      return arguments[0]
              } else
                  t = 0;
              return e.apply(void 0, arguments)
          }
      }
      Wg.exports = BN
  }
  );
  var Kg = f( (GG, zg) => {
      var WN = Bg()
        , HN = Hg()
        , zN = HN(WN);
      zg.exports = zN
  }
  );
  var Yg = f( (XG, jg) => {
      var KN = Ng()
        , jN = Gg()
        , YN = Kg();
      function $N(e) {
          return YN(jN(e, void 0, KN), e + "")
      }
      jg.exports = $N
  }
  );
  var Zg = f( (VG, Qg) => {
      var $g = xi()
        , QN = $g && new $g;
      Qg.exports = QN
  }
  );
  var eh = f( (kG, Jg) => {
      function ZN() {}
      Jg.exports = ZN
  }
  );
  var Wo = f( (UG, rh) => {
      var th = Zg()
        , JN = eh()
        , eM = th ? function(e) {
          return th.get(e)
      }
      : JN;
      rh.exports = eM
  }
  );
  var ih = f( (BG, nh) => {
      var tM = {};
      nh.exports = tM
  }
  );
  var Ho = f( (WG, ah) => {
      var oh = ih()
        , rM = Object.prototype
        , nM = rM.hasOwnProperty;
      function iM(e) {
          for (var t = e.name + "", r = oh[t], n = nM.call(oh, t) ? r.length : 0; n--; ) {
              var i = r[n]
                , o = i.func;
              if (o == null || o == e)
                  return i.name
          }
          return t
      }
      ah.exports = iM
  }
  );
  var Cn = f( (HG, sh) => {
      var oM = Bo()
        , aM = On()
        , sM = 4294967295;
      function Rn(e) {
          this.__wrapped__ = e,
          this.__actions__ = [],
          this.__dir__ = 1,
          this.__filtered__ = !1,
          this.__iteratees__ = [],
          this.__takeCount__ = sM,
          this.__views__ = []
      }
      Rn.prototype = oM(aM.prototype);
      Rn.prototype.constructor = Rn;
      sh.exports = Rn
  }
  );
  var ch = f( (zG, uh) => {
      function uM(e, t) {
          var r = -1
            , n = e.length;
          for (t || (t = Array(n)); ++r < n; )
              t[r] = e[r];
          return t
      }
      uh.exports = uM
  }
  );
  var fh = f( (KG, lh) => {
      var cM = Cn()
        , lM = xn()
        , fM = ch();
      function dM(e) {
          if (e instanceof cM)
              return e.clone();
          var t = new lM(e.__wrapped__,e.__chain__);
          return t.__actions__ = fM(e.__actions__),
          t.__index__ = e.__index__,
          t.__values__ = e.__values__,
          t
      }
      lh.exports = dM
  }
  );
  var gh = f( (jG, ph) => {
      var pM = Cn()
        , dh = xn()
        , gM = On()
        , hM = me()
        , EM = rt()
        , yM = fh()
        , vM = Object.prototype
        , mM = vM.hasOwnProperty;
      function Ln(e) {
          if (EM(e) && !hM(e) && !(e instanceof pM)) {
              if (e instanceof dh)
                  return e;
              if (mM.call(e, "__wrapped__"))
                  return yM(e)
          }
          return new dh(e)
      }
      Ln.prototype = gM.prototype;
      Ln.prototype.constructor = Ln;
      ph.exports = Ln
  }
  );
  var Eh = f( (YG, hh) => {
      var _M = Cn()
        , IM = Wo()
        , TM = Ho()
        , bM = gh();
      function AM(e) {
          var t = TM(e)
            , r = bM[t];
          if (typeof r != "function" || !(t in _M.prototype))
              return !1;
          if (e === r)
              return !0;
          var n = IM(r);
          return !!n && e === n[0]
      }
      hh.exports = AM
  }
  );
  var _h = f( ($G, mh) => {
      var yh = xn()
        , SM = Yg()
        , OM = Wo()
        , zo = Ho()
        , wM = me()
        , vh = Eh()
        , xM = "Expected a function"
        , RM = 8
        , CM = 32
        , LM = 128
        , PM = 256;
      function NM(e) {
          return SM(function(t) {
              var r = t.length
                , n = r
                , i = yh.prototype.thru;
              for (e && t.reverse(); n--; ) {
                  var o = t[n];
                  if (typeof o != "function")
                      throw new TypeError(xM);
                  if (i && !a && zo(o) == "wrapper")
                      var a = new yh([],!0)
              }
              for (n = a ? n : r; ++n < r; ) {
                  o = t[n];
                  var s = zo(o)
                    , u = s == "wrapper" ? OM(o) : void 0;
                  u && vh(u[0]) && u[1] == (LM | RM | CM | PM) && !u[4].length && u[9] == 1 ? a = a[zo(u[0])].apply(a, u[3]) : a = o.length == 1 && vh(o) ? a[s]() : a.thru(o)
              }
              return function() {
                  var l = arguments
                    , v = l[0];
                  if (a && l.length == 1 && wM(v))
                      return a.plant(v).value();
                  for (var g = 0, p = r ? t[g].apply(this, l) : v; ++g < r; )
                      p = t[g].call(this, p);
                  return p
              }
          })
      }
      mh.exports = NM
  }
  );
  var Th = f( (QG, Ih) => {
      var MM = _h()
        , DM = MM();
      Ih.exports = DM
  }
  );
  var Ah = f( (ZG, bh) => {
      function FM(e, t, r) {
          return e === e && (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
          e
      }
      bh.exports = FM
  }
  );
  var Oh = f( (JG, Sh) => {
      var qM = Ah()
        , Ko = on();
      function GM(e, t, r) {
          return r === void 0 && (r = t,
          t = void 0),
          r !== void 0 && (r = Ko(r),
          r = r === r ? r : 0),
          t !== void 0 && (t = Ko(t),
          t = t === t ? t : 0),
          qM(Ko(e), t, r)
      }
      Sh.exports = GM
  }
  );
  var Dh, Fh, qh, Gh, XM, VM, kM, UM, BM, WM, HM, zM, KM, jM, YM, $M, QM, ZM, JM, Xh, Vh, eD, tD, rD, kh, nD, iD, Uh, oD, jo, Bh, wh, xh, Wh, Ar, aD, Je, Hh, sD, Le, Ue, Sr, zh, Yo, Rh, $o, uD, br, cD, lD, fD, Kh, Ch, dD, Lh, pD, gD, hD, Ph, Pn, Nn, Nh, Mh, jh, Yh = de( () => {
      "use strict";
      Dh = ae(Th()),
      Fh = ae(rn()),
      qh = ae(Oh());
      Re();
      Qo();
      Sn();
      Gh = ae(_t()),
      {MOUSE_CLICK: XM, MOUSE_SECOND_CLICK: VM, MOUSE_DOWN: kM, MOUSE_UP: UM, MOUSE_OVER: BM, MOUSE_OUT: WM, DROPDOWN_CLOSE: HM, DROPDOWN_OPEN: zM, SLIDER_ACTIVE: KM, SLIDER_INACTIVE: jM, TAB_ACTIVE: YM, TAB_INACTIVE: $M, NAVBAR_CLOSE: QM, NAVBAR_OPEN: ZM, MOUSE_MOVE: JM, PAGE_SCROLL_DOWN: Xh, SCROLL_INTO_VIEW: Vh, SCROLL_OUT_OF_VIEW: eD, PAGE_SCROLL_UP: tD, SCROLLING_IN_VIEW: rD, PAGE_FINISH: kh, ECOMMERCE_CART_CLOSE: nD, ECOMMERCE_CART_OPEN: iD, PAGE_START: Uh, PAGE_SCROLL: oD} = Ve,
      jo = "COMPONENT_ACTIVE",
      Bh = "COMPONENT_INACTIVE",
      {COLON_DELIMITER: wh} = _e,
      {getNamespacedParameterId: xh} = Gh.IX2VanillaUtils,
      Wh = e => t => typeof t == "object" && e(t) ? !0 : t,
      Ar = Wh( ({element: e, nativeEvent: t}) => e === t.target),
      aD = Wh( ({element: e, nativeEvent: t}) => e.contains(t.target)),
      Je = (0,
      Dh.default)([Ar, aD]),
      Hh = (e, t) => {
          if (t) {
              let {ixData: r} = e.getState()
                , {events: n} = r
                , i = n[t];
              if (i && !uD[i.eventTypeId])
                  return i
          }
          return null
      }
      ,
      sD = ({store: e, event: t}) => {
          let {action: r} = t
            , {autoStopEventId: n} = r.config;
          return !!Hh(e, n)
      }
      ,
      Le = ({store: e, event: t, element: r, eventStateKey: n}, i) => {
          let {action: o, id: a} = t
            , {actionListId: s, autoStopEventId: u} = o.config
            , l = Hh(e, u);
          return l && Yt({
              store: e,
              eventId: u,
              eventTarget: r,
              eventStateKey: u + wh + n.split(wh)[1],
              actionListId: (0,
              Fh.default)(l, "action.config.actionListId")
          }),
          Yt({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s
          }),
          Or({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s
          }),
          i
      }
      ,
      Ue = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
      Sr = {
          handler: Ue(Je, Le)
      },
      zh = {
          ...Sr,
          types: [jo, Bh].join(" ")
      },
      Yo = [{
          target: window,
          types: "resize orientationchange",
          throttle: !0
      }, {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0
      }],
      Rh = "mouseover mouseout",
      $o = {
          types: Yo
      },
      uD = {
          PAGE_START: Uh,
          PAGE_FINISH: kh
      },
      br = ( () => {
          let e = window.pageXOffset !== void 0
            , r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
          return () => ({
              scrollLeft: e ? window.pageXOffset : r.scrollLeft,
              scrollTop: e ? window.pageYOffset : r.scrollTop,
              stiffScrollTop: (0,
              qh.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
              scrollWidth: r.scrollWidth,
              scrollHeight: r.scrollHeight,
              clientWidth: r.clientWidth,
              clientHeight: r.clientHeight,
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight
          })
      }
      )(),
      cD = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
      lD = ({element: e, nativeEvent: t}) => {
          let {type: r, target: n, relatedTarget: i} = t
            , o = e.contains(n);
          if (r === "mouseover" && o)
              return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a)
      }
      ,
      fD = e => {
          let {element: t, event: {config: r}} = e
            , {clientWidth: n, clientHeight: i} = br()
            , o = r.scrollOffsetValue
            , u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
          return cD(t.getBoundingClientRect(), {
              left: 0,
              top: u,
              right: n,
              bottom: i - u
          })
      }
      ,
      Kh = e => (t, r) => {
          let {type: n} = t.nativeEvent
            , i = [jo, Bh].indexOf(n) !== -1 ? n === jo : r.isActive
            , o = {
              ...r,
              isActive: i
          };
          return (!r || o.isActive !== r.isActive) && e(t, o) || o
      }
      ,
      Ch = e => (t, r) => {
          let n = {
              elementHovered: lD(t)
          };
          return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
      }
      ,
      dD = e => (t, r) => {
          let n = {
              ...r,
              elementVisible: fD(t)
          };
          return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
      }
      ,
      Lh = e => (t, r={}) => {
          let {stiffScrollTop: n, scrollHeight: i, innerHeight: o} = br()
            , {event: {config: a, eventTypeId: s}} = t
            , {scrollOffsetValue: u, scrollOffsetUnit: l} = a
            , v = l === "PX"
            , g = i - o
            , p = Number((n / g).toFixed(2));
          if (r && r.percentTop === p)
              return r;
          let I = (v ? u : o * (u || 0) / 100) / g, b, A, R = 0;
          r && (b = p > r.percentTop,
          A = r.scrollingDown !== b,
          R = A ? p : r.anchorTop);
          let S = s === Xh ? p >= R + I : p <= R - I
            , L = {
              ...r,
              percentTop: p,
              inBounds: S,
              anchorTop: R,
              scrollingDown: b
          };
          return r && S && (A || L.inBounds !== r.inBounds) && e(t, L) || L
      }
      ,
      pD = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
      gD = e => (t, r) => {
          let n = {
              finished: document.readyState === "complete"
          };
          return n.finished && !(r && r.finshed) && e(t),
          n
      }
      ,
      hD = e => (t, r) => {
          let n = {
              started: !0
          };
          return r || e(t),
          n
      }
      ,
      Ph = e => (t, r={
          clickCount: 0
      }) => {
          let n = {
              clickCount: r.clickCount % 2 + 1
          };
          return n.clickCount !== r.clickCount && e(t, n) || n
      }
      ,
      Pn = (e=!0) => ({
          ...zh,
          handler: Ue(e ? Je : Ar, Kh( (t, r) => r.isActive ? Sr.handler(t, r) : r))
      }),
      Nn = (e=!0) => ({
          ...zh,
          handler: Ue(e ? Je : Ar, Kh( (t, r) => r.isActive ? r : Sr.handler(t, r)))
      }),
      Nh = {
          ...$o,
          handler: dD( (e, t) => {
              let {elementVisible: r} = t
                , {event: n, store: i} = e
                , {ixData: o} = i.getState()
                , {events: a} = o;
              return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Vh === r ? (Le(e),
              {
                  ...t,
                  triggered: !0
              }) : t
          }
          )
      },
      Mh = .05,
      jh = {
          [KM]: Pn(),
          [jM]: Nn(),
          [zM]: Pn(),
          [HM]: Nn(),
          [ZM]: Pn(!1),
          [QM]: Nn(!1),
          [YM]: Pn(),
          [$M]: Nn(),
          [iD]: {
              types: "ecommerce-cart-open",
              handler: Ue(Je, Le)
          },
          [nD]: {
              types: "ecommerce-cart-close",
              handler: Ue(Je, Le)
          },
          [XM]: {
              types: "click",
              handler: Ue(Je, Ph( (e, {clickCount: t}) => {
                  sD(e) ? t === 1 && Le(e) : Le(e)
              }
              ))
          },
          [VM]: {
              types: "click",
              handler: Ue(Je, Ph( (e, {clickCount: t}) => {
                  t === 2 && Le(e)
              }
              ))
          },
          [kM]: {
              ...Sr,
              types: "mousedown"
          },
          [UM]: {
              ...Sr,
              types: "mouseup"
          },
          [BM]: {
              types: Rh,
              handler: Ue(Je, Ch( (e, t) => {
                  t.elementHovered && Le(e)
              }
              ))
          },
          [WM]: {
              types: Rh,
              handler: Ue(Je, Ch( (e, t) => {
                  t.elementHovered || Le(e)
              }
              ))
          },
          [JM]: {
              types: "mousemove mouseout scroll",
              handler: ({store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: i}, o={
                  clientX: 0,
                  clientY: 0,
                  pageX: 0,
                  pageY: 0
              }) => {
                  let {basedOn: a, selectedAxis: s, continuousParameterGroupId: u, reverse: l, restingState: v=0} = r
                    , {clientX: g=o.clientX, clientY: p=o.clientY, pageX: I=o.pageX, pageY: b=o.pageY} = n
                    , A = s === "X_AXIS"
                    , R = n.type === "mouseout"
                    , S = v / 100
                    , L = u
                    , C = !1;
                  switch (a) {
                  case Ye.VIEWPORT:
                      {
                          S = A ? Math.min(g, window.innerWidth) / window.innerWidth : Math.min(p, window.innerHeight) / window.innerHeight;
                          break
                      }
                  case Ye.PAGE:
                      {
                          let {scrollLeft: q, scrollTop: D, scrollWidth: P, scrollHeight: U} = br();
                          S = A ? Math.min(q + I, P) / P : Math.min(D + b, U) / U;
                          break
                      }
                  case Ye.ELEMENT:
                  default:
                      {
                          L = xh(i, u);
                          let q = n.type.indexOf("mouse") === 0;
                          if (q && Je({
                              element: t,
                              nativeEvent: n
                          }) !== !0)
                              break;
                          let D = t.getBoundingClientRect()
                            , {left: P, top: U, width: B, height: H} = D;
                          if (!q && !pD({
                              left: g,
                              top: p
                          }, D))
                              break;
                          C = !0,
                          S = A ? (g - P) / B : (p - U) / H;
                          break
                      }
                  }
                  return R && (S > 1 - Mh || S < Mh) && (S = Math.round(S)),
                  (a !== Ye.ELEMENT || C || C !== o.elementHovered) && (S = l ? 1 - S : S,
                  e.dispatch(Kt(L, S))),
                  {
                      elementHovered: C,
                      clientX: g,
                      clientY: p,
                      pageX: I,
                      pageY: b
                  }
              }
          },
          [oD]: {
              types: Yo,
              handler: ({store: e, eventConfig: t}) => {
                  let {continuousParameterGroupId: r, reverse: n} = t
                    , {scrollTop: i, scrollHeight: o, clientHeight: a} = br()
                    , s = i / (o - a);
                  s = n ? 1 - s : s,
                  e.dispatch(Kt(r, s))
              }
          },
          [rD]: {
              types: Yo,
              handler: ({element: e, store: t, eventConfig: r, eventStateKey: n}, i={
                  scrollPercent: 0
              }) => {
                  let {scrollLeft: o, scrollTop: a, scrollWidth: s, scrollHeight: u, clientHeight: l} = br()
                    , {basedOn: v, selectedAxis: g, continuousParameterGroupId: p, startsEntering: I, startsExiting: b, addEndOffset: A, addStartOffset: R, addOffsetValue: S=0, endOffsetValue: L=0} = r
                    , C = g === "X_AXIS";
                  if (v === Ye.VIEWPORT) {
                      let q = C ? o / s : a / u;
                      return q !== i.scrollPercent && t.dispatch(Kt(p, q)),
                      {
                          scrollPercent: q
                      }
                  } else {
                      let q = xh(n, p)
                        , D = e.getBoundingClientRect()
                        , P = (R ? S : 0) / 100
                        , U = (A ? L : 0) / 100;
                      P = I ? P : 1 - P,
                      U = b ? U : 1 - U;
                      let B = D.top + Math.min(D.height * P, l)
                        , j = D.top + D.height * U - B
                        , Q = Math.min(l + j, u)
                        , O = Math.min(Math.max(0, l - B), Q) / Q;
                      return O !== i.scrollPercent && t.dispatch(Kt(q, O)),
                      {
                          scrollPercent: O
                      }
                  }
              }
          },
          [Vh]: Nh,
          [eD]: Nh,
          [Xh]: {
              ...$o,
              handler: Lh( (e, t) => {
                  t.scrollingDown && Le(e)
              }
              )
          },
          [tD]: {
              ...$o,
              handler: Lh( (e, t) => {
                  t.scrollingDown || Le(e)
              }
              )
          },
          [kh]: {
              types: "readystatechange IX2_PAGE_UPDATE",
              handler: Ue(Ar, gD(Le))
          },
          [Uh]: {
              types: "readystatechange IX2_PAGE_UPDATE",
              handler: Ue(Ar, hD(Le))
          }
      }
  }
  );
  var dE = {};
  xe(dE, {
      observeRequests: () => DD,
      startActionGroup: () => Or,
      startEngine: () => Xn,
      stopActionGroup: () => Yt,
      stopAllActionGroups: () => cE,
      stopEngine: () => Vn
  });
  function DD(e) {
      It({
          store: e,
          select: ({ixRequest: t}) => t.preview,
          onChange: GD
      }),
      It({
          store: e,
          select: ({ixRequest: t}) => t.playback,
          onChange: XD
      }),
      It({
          store: e,
          select: ({ixRequest: t}) => t.stop,
          onChange: VD
      }),
      It({
          store: e,
          select: ({ixRequest: t}) => t.clear,
          onChange: kD
      })
  }
  function FD(e) {
      It({
          store: e,
          select: ({ixSession: t}) => t.mediaQueryKey,
          onChange: () => {
              Vn(e),
              oE({
                  store: e,
                  elementApi: Oe
              }),
              Xn({
                  store: e,
                  allowEvents: !0
              }),
              aE()
          }
      })
  }
  function qD(e, t) {
      let r = It({
          store: e,
          select: ({ixSession: n}) => n.tick,
          onChange: n => {
              t(n),
              r()
          }
      })
  }
  function GD({rawData: e, defer: t}, r) {
      let n = () => {
          Xn({
              store: r,
              rawData: e,
              allowEvents: !0
          }),
          aE()
      }
      ;
      t ? setTimeout(n, 0) : n()
  }
  function aE() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
  }
  function XD(e, t) {
      let {actionTypeId: r, actionListId: n, actionItemId: i, eventId: o, allowEvents: a, immediate: s, testManual: u, verbose: l=!0} = e
        , {rawData: v} = e;
      if (n && i && v && s) {
          let g = v.actionLists[n];
          g && (v = AD({
              actionList: g,
              actionItemId: i,
              rawData: v
          }))
      }
      if (Xn({
          store: t,
          rawData: v,
          allowEvents: a,
          testManual: u
      }),
      n && r === Ae.GENERAL_START_ACTION || Zo(r)) {
          Yt({
              store: t,
              actionListId: n
          }),
          uE({
              store: t,
              actionListId: n,
              eventId: o
          });
          let g = Or({
              store: t,
              eventId: o,
              actionListId: n,
              immediate: s,
              verbose: l
          });
          l && g && t.dispatch(jt({
              actionListId: n,
              isPlaying: !s
          }))
      }
  }
  function VD({actionListId: e}, t) {
      e ? Yt({
          store: t,
          actionListId: e
      }) : cE({
          store: t
      }),
      Vn(t)
  }
  function kD(e, t) {
      Vn(t),
      oE({
          store: t,
          elementApi: Oe
      })
  }
  function Xn({store: e, rawData: t, allowEvents: r, testManual: n}) {
      let {ixSession: i} = e.getState();
      t && e.dispatch(Ro(t)),
      i.active || (e.dispatch(Co({
          hasBoundaryNodes: !!document.querySelector(Dn),
          reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
      })),
      r && (KD(e),
      UD(),
      e.getState().ixSession.hasDefinedMediaQueries && FD(e)),
      e.dispatch(Lo()),
      BD(e, n))
  }
  function UD() {
      let {documentElement: e} = document;
      e.className.indexOf($h) === -1 && (e.className += ` ${$h}`)
  }
  function BD(e, t) {
      let r = n => {
          let {ixSession: i, ixParameters: o} = e.getState();
          i.active && (e.dispatch(bn(n, o)),
          t ? qD(e, r) : requestAnimationFrame(r))
      }
      ;
      r(window.performance.now())
  }
  function Vn(e) {
      let {ixSession: t} = e.getState();
      if (t.active) {
          let {eventListeners: r} = t;
          r.forEach(WD),
          xD(),
          e.dispatch(Po())
      }
  }
  function WD({target: e, listenerParams: t}) {
      e.removeEventListener.apply(e, t)
  }
  function HD({store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: i, actionListId: o, parameterGroup: a, smoothing: s, restingValue: u}) {
      let {ixData: l, ixSession: v} = e.getState()
        , {events: g} = l
        , p = g[n]
        , {eventTypeId: I} = p
        , b = {}
        , A = {}
        , R = []
        , {continuousActionGroups: S} = a
        , {id: L} = a;
      SD(I, i) && (L = OD(t, L));
      let C = v.hasBoundaryNodes && r ? Tr(r, Dn) : null;
      S.forEach(q => {
          let {keyframe: D, actionItems: P} = q;
          P.forEach(U => {
              let {actionTypeId: B} = U
                , {target: H} = U.config;
              if (!H)
                  return;
              let j = H.boundaryMode ? C : null
                , Q = RD(H) + Jo + B;
              if (A[Q] = zD(A[Q], D, U),
              !b[Q]) {
                  b[Q] = !0;
                  let {config: M} = U;
                  Fn({
                      config: M,
                      event: p,
                      eventTarget: r,
                      elementRoot: j,
                      elementApi: Oe
                  }).forEach(O => {
                      R.push({
                          element: O,
                          key: Q
                      })
                  }
                  )
              }
          }
          )
      }
      ),
      R.forEach( ({element: q, key: D}) => {
          let P = A[D]
            , U = (0,
          at.default)(P, "[0].actionItems[0]", {})
            , {actionTypeId: B} = U
            , j = (B === Ae.PLUGIN_RIVE ? (U.config?.target?.selectorGuids || []).length === 0 : Gn(B)) ? ta(B)(q, U) : null
            , Q = ea({
              element: q,
              actionItem: U,
              elementApi: Oe
          }, j);
          ra({
              store: e,
              element: q,
              eventId: n,
              actionListId: o,
              actionItem: U,
              destination: Q,
              continuous: !0,
              parameterId: L,
              actionGroups: P,
              smoothing: s,
              restingValue: u,
              pluginInstance: j
          })
      }
      )
  }
  function zD(e=[], t, r) {
      let n = [...e], i;
      return n.some( (o, a) => o.keyframe === t ? (i = a,
      !0) : !1),
      i == null && (i = n.length,
      n.push({
          keyframe: t,
          actionItems: []
      })),
      n[i].actionItems.push(r),
      n
  }
  function KD(e) {
      let {ixData: t} = e.getState()
        , {eventTypeMap: r} = t;
      sE(e),
      (0,
      $t.default)(r, (i, o) => {
          let a = jh[o];
          if (!a) {
              console.warn(`IX2 event type not configured: ${o}`);
              return
          }
          JD({
              logic: a,
              store: e,
              events: i
          })
      }
      );
      let {ixSession: n} = e.getState();
      n.eventListeners.length && YD(e)
  }
  function YD(e) {
      let t = () => {
          sE(e)
      }
      ;
      jD.forEach(r => {
          window.addEventListener(r, t),
          e.dispatch(Tn(window, [r, t]))
      }
      ),
      t()
  }
  function sE(e) {
      let {ixSession: t, ixData: r} = e.getState()
        , n = window.innerWidth;
      if (n !== t.viewportWidth) {
          let {mediaQueries: i} = r;
          e.dispatch(qo({
              width: n,
              mediaQueries: i
          }))
      }
  }
  function JD({logic: e, store: t, events: r}) {
      eF(r);
      let {types: n, handler: i} = e
        , {ixData: o} = t.getState()
        , {actionLists: a} = o
        , s = $D(r, ZD);
      if (!(0,
      Jh.default)(s))
          return;
      (0,
      $t.default)(s, (g, p) => {
          let I = r[p]
            , {action: b, id: A, mediaQueries: R=o.mediaQueryKeys} = I
            , {actionListId: S} = b.config;
          CD(R, o.mediaQueryKeys) || t.dispatch(Go()),
          b.actionTypeId === Ae.GENERAL_CONTINUOUS_ACTION && (Array.isArray(I.config) ? I.config : [I.config]).forEach(C => {
              let {continuousParameterGroupId: q} = C
                , D = (0,
              at.default)(a, `${S}.continuousParameterGroups`, [])
                , P = (0,
              Zh.default)(D, ({id: H}) => H === q)
                , U = (C.smoothing || 0) / 100
                , B = (C.restingState || 0) / 100;
              P && g.forEach( (H, j) => {
                  let Q = A + Jo + j;
                  HD({
                      store: t,
                      eventStateKey: Q,
                      eventTarget: H,
                      eventId: A,
                      eventConfig: C,
                      actionListId: S,
                      parameterGroup: P,
                      smoothing: U,
                      restingValue: B
                  })
              }
              )
          }
          ),
          (b.actionTypeId === Ae.GENERAL_START_ACTION || Zo(b.actionTypeId)) && uE({
              store: t,
              actionListId: S,
              eventId: A
          })
      }
      );
      let u = g => {
          let {ixSession: p} = t.getState();
          QD(s, (I, b, A) => {
              let R = r[b]
                , S = p.eventState[A]
                , {action: L, mediaQueries: C=o.mediaQueryKeys} = R;
              if (!qn(C, p.mediaQueryKey))
                  return;
              let q = (D={}) => {
                  let P = i({
                      store: t,
                      element: I,
                      event: R,
                      eventConfig: D,
                      nativeEvent: g,
                      eventStateKey: A
                  }, S);
                  LD(P, S) || t.dispatch(No(A, P))
              }
              ;
              L.actionTypeId === Ae.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(R.config) ? R.config : [R.config]).forEach(q) : q()
          }
          )
      }
        , l = (0,
      nE.default)(u, MD)
        , v = ({target: g=document, types: p, throttle: I}) => {
          p.split(" ").filter(Boolean).forEach(b => {
              let A = I ? l : u;
              g.addEventListener(b, A),
              t.dispatch(Tn(g, [b, A]))
          }
          )
      }
      ;
      Array.isArray(n) ? n.forEach(v) : typeof n == "string" && v(e)
  }
  function eF(e) {
      if (!ND)
          return;
      let t = {}
        , r = "";
      for (let n in e) {
          let {eventTypeId: i, target: o} = e[n]
            , a = Vo(o);
          t[a] || (i === Ve.MOUSE_CLICK || i === Ve.MOUSE_SECOND_CLICK) && (t[a] = !0,
          r += a + "{cursor: pointer;touch-action: manipulation;}")
      }
      if (r) {
          let n = document.createElement("style");
          n.textContent = r,
          document.body.appendChild(n)
      }
  }
  function uE({store: e, actionListId: t, eventId: r}) {
      let {ixData: n, ixSession: i} = e.getState()
        , {actionLists: o, events: a} = n
        , s = a[r]
        , u = o[t];
      if (u && u.useFirstGroupAsInitialState) {
          let l = (0,
          at.default)(u, "actionItemGroups[0].actionItems", [])
            , v = (0,
          at.default)(s, "mediaQueries", n.mediaQueryKeys);
          if (!qn(v, i.mediaQueryKey))
              return;
          l.forEach(g => {
              let {config: p, actionTypeId: I} = g
                , b = p?.target?.useEventTarget === !0 && p?.target?.objectId == null ? {
                  target: s.target,
                  targets: s.targets
              } : p
                , A = Fn({
                  config: b,
                  event: s,
                  elementApi: Oe
              })
                , R = Gn(I);
              A.forEach(S => {
                  let L = R ? ta(I)(S, g) : null;
                  ra({
                      destination: ea({
                          element: S,
                          actionItem: g,
                          elementApi: Oe
                      }, L),
                      immediate: !0,
                      store: e,
                      element: S,
                      eventId: r,
                      actionItem: g,
                      actionListId: t,
                      pluginInstance: L
                  })
              }
              )
          }
          )
      }
  }
  function cE({store: e}) {
      let {ixInstances: t} = e.getState();
      (0,
      $t.default)(t, r => {
          if (!r.continuous) {
              let {actionListId: n, verbose: i} = r;
              na(r, e),
              i && e.dispatch(jt({
                  actionListId: n,
                  isPlaying: !1
              }))
          }
      }
      )
  }
  function Yt({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i}) {
      let {ixInstances: o, ixSession: a} = e.getState()
        , s = a.hasBoundaryNodes && r ? Tr(r, Dn) : null;
      (0,
      $t.default)(o, u => {
          let l = (0,
          at.default)(u, "actionItem.config.target.boundaryMode")
            , v = n ? u.eventStateKey === n : !0;
          if (u.actionListId === i && u.eventId === t && v) {
              if (s && l && !ko(s, u.element))
                  return;
              na(u, e),
              u.verbose && e.dispatch(jt({
                  actionListId: i,
                  isPlaying: !1
              }))
          }
      }
      )
  }
  function Or({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i, groupIndex: o=0, immediate: a, verbose: s}) {
      let {ixData: u, ixSession: l} = e.getState()
        , {events: v} = u
        , g = v[t] || {}
        , {mediaQueries: p=u.mediaQueryKeys} = g
        , I = (0,
      at.default)(u, `actionLists.${i}`, {})
        , {actionItemGroups: b, useFirstGroupAsInitialState: A} = I;
      if (!b || !b.length)
          return !1;
      o >= b.length && (0,
      at.default)(g, "config.loop") && (o = 0),
      o === 0 && A && o++;
      let S = (o === 0 || o === 1 && A) && Zo(g.action?.actionTypeId) ? g.config.delay : void 0
        , L = (0,
      at.default)(b, [o, "actionItems"], []);
      if (!L.length || !qn(p, l.mediaQueryKey))
          return !1;
      let C = l.hasBoundaryNodes && r ? Tr(r, Dn) : null
        , q = ID(L)
        , D = !1;
      return L.forEach( (P, U) => {
          let {config: B, actionTypeId: H} = P
            , j = Gn(H)
            , {target: Q} = B;
          if (!Q)
              return;
          let M = Q.boundaryMode ? C : null;
          Fn({
              config: B,
              event: g,
              eventTarget: r,
              elementRoot: M,
              elementApi: Oe
          }).forEach( (N, V) => {
              let X = j ? ta(H)(N, P) : null
                , Z = j ? PD(H)(N, P) : null;
              D = !0;
              let J = q === U && V === 0
                , F = TD({
                  element: N,
                  actionItem: P
              })
                , W = ea({
                  element: N,
                  actionItem: P,
                  elementApi: Oe
              }, X);
              ra({
                  store: e,
                  element: N,
                  actionItem: P,
                  eventId: t,
                  eventTarget: r,
                  eventStateKey: n,
                  actionListId: i,
                  groupIndex: o,
                  isCarrier: J,
                  computedStyle: F,
                  destination: W,
                  immediate: a,
                  verbose: s,
                  pluginInstance: X,
                  pluginDuration: Z,
                  instanceDelay: S
              })
          }
          )
      }
      ),
      D
  }
  function ra(e) {
      let {store: t, computedStyle: r, ...n} = e, {element: i, actionItem: o, immediate: a, pluginInstance: s, continuous: u, restingValue: l, eventId: v} = n, g = !u, p = mD(), {ixElements: I, ixSession: b, ixData: A} = t.getState(), R = vD(I, i), {refState: S} = I[R] || {}, L = Uo(i), C = b.reducedMotion && hi[o.actionTypeId], q;
      if (C && u)
          switch (A.events[v]?.eventTypeId) {
          case Ve.MOUSE_MOVE:
          case Ve.MOUSE_MOVE_IN_VIEWPORT:
              q = l;
              break;
          default:
              q = .5;
              break
          }
      let D = bD(i, S, r, o, Oe, s);
      if (t.dispatch(Mo({
          instanceId: p,
          elementId: R,
          origin: D,
          refType: L,
          skipMotion: C,
          skipToValue: q,
          ...n
      })),
      lE(document.body, "ix2-animation-started", p),
      a) {
          tF(t, p);
          return
      }
      It({
          store: t,
          select: ({ixInstances: P}) => P[p],
          onChange: fE
      }),
      g && t.dispatch(An(p, b.tick))
  }
  function na(e, t) {
      lE(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState()
      });
      let {elementId: r, actionItem: n} = e
        , {ixElements: i} = t.getState()
        , {ref: o, refType: a} = i[r] || {};
      a === iE && wD(o, n, Oe),
      t.dispatch(Do(e.id))
  }
  function lE(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r),
      e.dispatchEvent(n)
  }
  function tF(e, t) {
      let {ixParameters: r} = e.getState();
      e.dispatch(An(t, 0)),
      e.dispatch(bn(performance.now(), r));
      let {ixInstances: n} = e.getState();
      fE(n[t], e)
  }
  function fE(e, t) {
      let {active: r, continuous: n, complete: i, elementId: o, actionItem: a, actionTypeId: s, renderType: u, current: l, groupIndex: v, eventId: g, eventTarget: p, eventStateKey: I, actionListId: b, isCarrier: A, styleProp: R, verbose: S, pluginInstance: L} = e
        , {ixData: C, ixSession: q} = t.getState()
        , {events: D} = C
        , P = D && D[g] ? D[g] : {}
        , {mediaQueries: U=C.mediaQueryKeys} = P;
      if (qn(U, q.mediaQueryKey) && (n || r || i)) {
          if (l || u === yD && i) {
              t.dispatch(Fo(o, s, l, a));
              let {ixElements: B} = t.getState()
                , {ref: H, refType: j, refState: Q} = B[o] || {}
                , M = Q && Q[s];
              (j === iE || Gn(s)) && _D(H, Q, M, g, a, R, Oe, u, L)
          }
          if (i) {
              if (A) {
                  let B = Or({
                      store: t,
                      eventId: g,
                      eventTarget: p,
                      eventStateKey: I,
                      actionListId: b,
                      groupIndex: v + 1,
                      verbose: S
                  });
                  S && !B && t.dispatch(jt({
                      actionListId: b,
                      isPlaying: !1
                  }))
              }
              na(e, t)
          }
      }
  }
  var Zh, at, Jh, eE, tE, rE, $t, nE, Mn, ED, Zo, Jo, Dn, iE, yD, $h, Fn, vD, ea, It, mD, _D, oE, ID, TD, bD, AD, SD, OD, qn, wD, xD, RD, CD, LD, Gn, ta, PD, Qh, ND, MD, jD, $D, QD, ZD, Qo = de( () => {
      "use strict";
      Zh = ae(Wi()),
      at = ae(rn()),
      Jh = ae(Sp()),
      eE = ae(Qp()),
      tE = ae(Jp()),
      rE = ae(tg()),
      $t = ae(sg()),
      nE = ae(gg());
      Re();
      Mn = ae(_t());
      Sn();
      _g();
      Yh();
      ED = Object.keys(Mr),
      Zo = e => ED.includes(e),
      {COLON_DELIMITER: Jo, BOUNDARY_SELECTOR: Dn, HTML_ELEMENT: iE, RENDER_GENERAL: yD, W_MOD_IX: $h} = _e,
      {getAffectedElements: Fn, getElementId: vD, getDestinationValues: ea, observeStore: It, getInstanceId: mD, renderHTMLElement: _D, clearAllStyles: oE, getMaxDurationItemIndex: ID, getComputedStyle: TD, getInstanceOrigin: bD, reduceListToGroup: AD, shouldNamespaceEventParameter: SD, getNamespacedParameterId: OD, shouldAllowMediaQuery: qn, cleanupHTMLElement: wD, clearObjectCache: xD, stringifyTarget: RD, mediaQueriesEqual: CD, shallowEqual: LD} = Mn.IX2VanillaUtils,
      {isPluginType: Gn, createPluginInstance: ta, getPluginDuration: PD} = Mn.IX2VanillaPlugins,
      Qh = navigator.userAgent,
      ND = Qh.match(/iPad/i) || Qh.match(/iPhone/),
      MD = 12;
      jD = ["resize", "orientationchange"];
      $D = (e, t) => (0,
      eE.default)((0,
      rE.default)(e, t), tE.default),
      QD = (e, t) => {
          (0,
          $t.default)(e, (r, n) => {
              r.forEach( (i, o) => {
                  let a = n + Jo + o;
                  t(i, n, a)
              }
              )
          }
          )
      }
      ,
      ZD = e => {
          let t = {
              target: e.target,
              targets: e.targets
          };
          return Fn({
              config: t,
              elementApi: Oe
          })
      }
  }
  );
  var hE = f(oa => {
      "use strict";
      Object.defineProperty(oa, "__esModule", {
          value: !0
      });
      function rF(e, t) {
          for (var r in t)
              Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: t[r]
              })
      }
      rF(oa, {
          actions: function() {
              return oF
          },
          destroy: function() {
              return gE
          },
          init: function() {
              return cF
          },
          setEnv: function() {
              return uF
          },
          store: function() {
              return kn
          }
      });
      var nF = di()
        , iF = aF((ap(),
      He(op)))
        , ia = (Qo(),
      He(dE))
        , oF = sF((Sn(),
      He(Eg)));
      function aF(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      function pE(e) {
          if (typeof WeakMap != "function")
              return null;
          var t = new WeakMap
            , r = new WeakMap;
          return (pE = function(n) {
              return n ? r : t
          }
          )(e)
      }
      function sF(e, t) {
          if (!t && e && e.__esModule)
              return e;
          if (e === null || typeof e != "object" && typeof e != "function")
              return {
                  default: e
              };
          var r = pE(t);
          if (r && r.has(e))
              return r.get(e);
          var n = {
              __proto__: null
          }
            , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
              if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                  var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                  a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
              }
          return n.default = e,
          r && r.set(e, n),
          n
      }
      var kn = (0,
      nF.createStore)(iF.default);
      function uF(e) {
          e() && (0,
          ia.observeRequests)(kn)
      }
      function cF(e) {
          gE(),
          (0,
          ia.startEngine)({
              store: kn,
              rawData: e,
              allowEvents: !0
          })
      }
      function gE() {
          (0,
          ia.stopEngine)(kn)
      }
  }
  );
  var mE = f( (cX, vE) => {
      "use strict";
      var EE = Ke()
        , yE = hE();
      yE.setEnv(EE.env);
      EE.define("ix2", vE.exports = function() {
          return yE
      }
      )
  }
  );
  var IE = f( (lX, _E) => {
      "use strict";
      var Qt = Ke();
      Qt.define("links", _E.exports = function(e, t) {
          var r = {}, n = e(window), i, o = Qt.env(), a = window.location, s = document.createElement("a"), u = "w--current", l = /index\.(html|php)$/, v = /\/$/, g, p;
          r.ready = r.design = r.preview = I;
          function I() {
              i = o && Qt.env("design"),
              p = Qt.env("slug") || a.pathname || "",
              Qt.scroll.off(A),
              g = [];
              for (var S = document.links, L = 0; L < S.length; ++L)
                  b(S[L]);
              g.length && (Qt.scroll.on(A),
              A())
          }
          function b(S) {
              if (!S.getAttribute("hreflang")) {
                  var L = i && S.getAttribute("href-disabled") || S.getAttribute("href");
                  if (s.href = L,
                  !(L.indexOf(":") >= 0)) {
                      var C = e(S);
                      if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                          if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                              return;
                          var q = e(s.hash);
                          q.length && g.push({
                              link: C,
                              sec: q,
                              active: !1
                          });
                          return
                      }
                      if (!(L === "#" || L === "")) {
                          var D = s.href === a.href || L === p || l.test(L) && v.test(p);
                          R(C, u, D)
                      }
                  }
              }
          }
          function A() {
              var S = n.scrollTop()
                , L = n.height();
              t.each(g, function(C) {
                  if (!C.link.attr("hreflang")) {
                      var q = C.link
                        , D = C.sec
                        , P = D.offset().top
                        , U = D.outerHeight()
                        , B = L * .5
                        , H = D.is(":visible") && P + U - B >= S && P + B <= S + L;
                      C.active !== H && (C.active = H,
                      R(q, u, H))
                  }
              })
          }
          function R(S, L, C) {
              var q = S.hasClass(L);
              C && q || !C && !q || (C ? S.addClass(L) : S.removeClass(L))
          }
          return r
      }
      )
  }
  );
  var bE = f( (fX, TE) => {
      "use strict";
      var Un = Ke();
      Un.define("scroll", TE.exports = function(e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll"
          }
            , r = window.location
            , n = b() ? null : window.history
            , i = e(window)
            , o = e(document)
            , a = e(document.body)
            , s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(M) {
              window.setTimeout(M, 15)
          }
            , u = Un.env("editor") ? ".w-editor-body" : "body"
            , l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])"
            , v = 'a[href="#"]'
            , g = 'a[href*="#"]:not(.w-tab-link):not(' + v + ")"
            , p = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            , I = document.createElement("style");
          I.appendChild(document.createTextNode(p));
          function b() {
              try {
                  return !!window.frameElement
              } catch {
                  return !0
              }
          }
          var A = /^#[a-zA-Z0-9][\w:.-]*$/;
          function R(M) {
              return A.test(M.hash) && M.host + M.pathname === r.host + r.pathname
          }
          let S = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
          function L() {
              return document.body.getAttribute("data-wf-scroll-motion") === "none" || S.matches
          }
          function C(M, O) {
              var N;
              switch (O) {
              case "add":
                  N = M.attr("tabindex"),
                  N ? M.attr("data-wf-tabindex-swap", N) : M.attr("tabindex", "-1");
                  break;
              case "remove":
                  N = M.attr("data-wf-tabindex-swap"),
                  N ? (M.attr("tabindex", N),
                  M.removeAttr("data-wf-tabindex-swap")) : M.removeAttr("tabindex");
                  break
              }
              M.toggleClass("wf-force-outline-none", O === "add")
          }
          function q(M) {
              var O = M.currentTarget;
              if (!(Un.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(O.className))) {
                  var N = R(O) ? O.hash : "";
                  if (N !== "") {
                      var V = e(N);
                      V.length && (M && (M.preventDefault(),
                      M.stopPropagation()),
                      D(N, M),
                      window.setTimeout(function() {
                          P(V, function() {
                              C(V, "add"),
                              V.get(0).focus({
                                  preventScroll: !0
                              }),
                              C(V, "remove")
                          })
                      }, M ? 0 : 300))
                  }
              }
          }
          function D(M) {
              if (r.hash !== M && n && n.pushState && !(Un.env.chrome && r.protocol === "file:")) {
                  var O = n.state && n.state.hash;
                  O !== M && n.pushState({
                      hash: M
                  }, "", M)
              }
          }
          function P(M, O) {
              var N = i.scrollTop()
                , V = U(M);
              if (N !== V) {
                  var X = B(M, N, V)
                    , Z = Date.now()
                    , J = function() {
                      var F = Date.now() - Z;
                      window.scroll(0, H(N, V, F, X)),
                      F <= X ? s(J) : typeof O == "function" && O()
                  };
                  s(J)
              }
          }
          function U(M) {
              var O = e(l)
                , N = O.css("position") === "fixed" ? O.outerHeight() : 0
                , V = M.offset().top - N;
              if (M.data("scroll") === "mid") {
                  var X = i.height() - N
                    , Z = M.outerHeight();
                  Z < X && (V -= Math.round((X - Z) / 2))
              }
              return V
          }
          function B(M, O, N) {
              if (L())
                  return 0;
              var V = 1;
              return a.add(M).each(function(X, Z) {
                  var J = parseFloat(Z.getAttribute("data-scroll-time"));
                  !isNaN(J) && J >= 0 && (V = J)
              }),
              (472.143 * Math.log(Math.abs(O - N) + 125) - 2e3) * V
          }
          function H(M, O, N, V) {
              return N > V ? O : M + (O - M) * j(N / V)
          }
          function j(M) {
              return M < .5 ? 4 * M * M * M : (M - 1) * (2 * M - 2) * (2 * M - 2) + 1
          }
          function Q() {
              var {WF_CLICK_EMPTY: M, WF_CLICK_SCROLL: O} = t;
              o.on(O, g, q),
              o.on(M, v, function(N) {
                  N.preventDefault()
              }),
              document.head.insertBefore(I, document.head.firstChild)
          }
          return {
              ready: Q
          }
      }
      )
  }
  );
  var SE = f( (dX, AE) => {
      "use strict";
      var lF = Ke();
      lF.define("touch", AE.exports = function(e) {
          var t = {}
            , r = window.getSelection;
          e.event.special.tap = {
              bindType: "click",
              delegateType: "click"
          },
          t.init = function(o) {
              return o = typeof o == "string" ? e(o).get(0) : o,
              o ? new n(o) : null
          }
          ;
          function n(o) {
              var a = !1, s = !1, u = Math.min(Math.round(window.innerWidth * .04), 40), l, v;
              o.addEventListener("touchstart", g, !1),
              o.addEventListener("touchmove", p, !1),
              o.addEventListener("touchend", I, !1),
              o.addEventListener("touchcancel", b, !1),
              o.addEventListener("mousedown", g, !1),
              o.addEventListener("mousemove", p, !1),
              o.addEventListener("mouseup", I, !1),
              o.addEventListener("mouseout", b, !1);
              function g(R) {
                  var S = R.touches;
                  S && S.length > 1 || (a = !0,
                  S ? (s = !0,
                  l = S[0].clientX) : l = R.clientX,
                  v = l)
              }
              function p(R) {
                  if (a) {
                      if (s && R.type === "mousemove") {
                          R.preventDefault(),
                          R.stopPropagation();
                          return
                      }
                      var S = R.touches
                        , L = S ? S[0].clientX : R.clientX
                        , C = L - v;
                      v = L,
                      Math.abs(C) > u && r && String(r()) === "" && (i("swipe", R, {
                          direction: C > 0 ? "right" : "left"
                      }),
                      b())
                  }
              }
              function I(R) {
                  if (a && (a = !1,
                  s && R.type === "mouseup")) {
                      R.preventDefault(),
                      R.stopPropagation(),
                      s = !1;
                      return
                  }
              }
              function b() {
                  a = !1
              }
              function A() {
                  o.removeEventListener("touchstart", g, !1),
                  o.removeEventListener("touchmove", p, !1),
                  o.removeEventListener("touchend", I, !1),
                  o.removeEventListener("touchcancel", b, !1),
                  o.removeEventListener("mousedown", g, !1),
                  o.removeEventListener("mousemove", p, !1),
                  o.removeEventListener("mouseup", I, !1),
                  o.removeEventListener("mouseout", b, !1),
                  o = null
              }
              this.destroy = A
          }
          function i(o, a, s) {
              var u = e.Event(o, {
                  originalEvent: a
              });
              e(a.target).trigger(u, s)
          }
          return t.instance = t.init(document),
          t
      }
      )
  }
  );
  var wE = f( (pX, OE) => {
      "use strict";
      var aa = Ke()
        , fF = (e, t, r, n) => {
          let i = document.createElement("div");
          t.appendChild(i),
          turnstile.render(i, {
              sitekey: e,
              callback: function(o) {
                  return r(o)
              },
              "error-callback": function() {
                  n()
              }
          })
      }
      ;
      aa.define("forms", OE.exports = function(e, t) {
          var r = {}, n = e(document), i, o = window.location, a = window.XDomainRequest && !window.atob, s = ".w-form", u, l = /e(-)?mail/i, v = /^\S+@\S+$/, g = window.alert, p = aa.env(), I, b, A, R = /list-manage[1-9]?.com/i, S = t.debounce(function() {
              g("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
          }, 100);
          r.ready = r.design = r.preview = function() {
              L(),
              !p && !I && q()
          }
          ;
          function L() {
              u = e("html").attr("data-wf-site"),
              b = "https://penou.com/api/v1/form/" + u,
              a && b.indexOf("https://penou.com") >= 0 && (b = b.replace("https://penou.com", "https://formdata.penou.com")),
              A = `${b}/signFile`,
              i = e(s + " form"),
              i.length && i.each(C)
          }
          function C(F, W) {
              var d = e(W)
                , E = e.data(W, s);
              E || (E = e.data(W, s, {
                  form: d
              })),
              D(E);
              var y = d.closest("div.w-form");
              E.done = y.find("> .w-form-done"),
              E.fail = y.find("> .w-form-fail"),
              E.fileUploads = y.find(".w-file-upload"),
              E.fileUploads.each(function(Y) {
                  X(Y, E)
              });
              var h = E.form.attr("aria-label") || E.form.attr("data-name") || "Form";
              E.done.attr("aria-label") || E.form.attr("aria-label", h),
              E.done.attr("tabindex", "-1"),
              E.done.attr("role", "region"),
              E.done.attr("aria-label") || E.done.attr("aria-label", h + " success"),
              E.fail.attr("tabindex", "-1"),
              E.fail.attr("role", "region"),
              E.fail.attr("aria-label") || E.fail.attr("aria-label", h + " failure");
              var k = E.action = d.attr("action");
              if (E.handler = null,
              E.redirect = d.attr("data-redirect"),
              R.test(k)) {
                  E.handler = O;
                  return
              }
              if (!k) {
                  if (u) {
                      E.handler = M;
                      return
                  }
                  S()
              }
          }
          function q() {
              I = !0;
              let F = n.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
              if (F) {
                  let K = document.createElement("script");
                  K.src = "https://challenges.cloudflare.com/turnstile/v0/api.js",
                  document.head.appendChild(K),
                  K.onload = () => {
                      n.on("submit", s + " form", function(te) {
                          var se = e.data(this, s);
                          P(se),
                          se.handler && (se.evt = te,
                          te.preventDefault(),
                          fF(F, this, ie => se.handler({
                              ...se,
                              turnstileToken: ie
                          }), () => {
                              se.fail.toggle(!0),
                              se.fail.focus(),
                              D(se)
                          }
                          ))
                      })
                  }
              } else
                  n.on("submit", s + " form", function(K) {
                      var te = e.data(this, s);
                      te.handler && (te.evt = K,
                      te.handler(te))
                  });
              let W = ".w-checkbox-input"
                , d = ".w-radio-input"
                , E = "w--redirected-checked"
                , y = "w--redirected-focus"
                , h = "w--redirected-focus-visible"
                , k = ":focus-visible, [data-wf-focus-visible]"
                , Y = [["checkbox", W], ["radio", d]];
              n.on("change", s + ' form input[type="checkbox"]:not(' + W + ")", K => {
                  e(K.target).siblings(W).toggleClass(E)
              }
              ),
              n.on("change", s + ' form input[type="radio"]', K => {
                  e(`input[name="${K.target.name}"]:not(${W})`).map( (se, ie) => e(ie).siblings(d).removeClass(E));
                  let te = e(K.target);
                  te.hasClass("w-radio-input") || te.siblings(d).addClass(E)
              }
              ),
              Y.forEach( ([K,te]) => {
                  n.on("focus", s + ` form input[type="${K}"]:not(` + te + ")", se => {
                      e(se.target).siblings(te).addClass(y),
                      e(se.target).filter(k).siblings(te).addClass(h)
                  }
                  ),
                  n.on("blur", s + ` form input[type="${K}"]:not(` + te + ")", se => {
                      e(se.target).siblings(te).removeClass(`${y} ${h}`)
                  }
                  )
              }
              )
          }
          function D(F) {
              var W = F.btn = F.form.find(':input[type="submit"]');
              F.wait = F.btn.attr("data-wait") || null,
              F.success = !1,
              W.prop("disabled", !1),
              F.label && W.val(F.label)
          }
          function P(F) {
              var W = F.btn
                , d = F.wait;
              W.prop("disabled", !0),
              d && (F.label = W.val(),
              W.val(d))
          }
          function U(F, W) {
              var d = null;
              return W = W || {},
              F.find(':input:not([type="submit"]):not([type="file"])').each(function(E, y) {
                  var h = e(y)
                    , k = h.attr("type")
                    , Y = h.attr("data-name") || h.attr("name") || "Field " + (E + 1);
                  Y = encodeURIComponent(Y);
                  var K = h.val();
                  if (k === "checkbox")
                      K = h.is(":checked");
                  else if (k === "radio") {
                      if (W[Y] === null || typeof W[Y] == "string")
                          return;
                      K = F.find('input[name="' + h.attr("name") + '"]:checked').val() || null
                  }
                  typeof K == "string" && (K = e.trim(K)),
                  W[Y] = K,
                  d = d || Q(h, k, Y, K)
              }),
              d
          }
          function B(F) {
              var W = {};
              return F.find(':input[type="file"]').each(function(d, E) {
                  var y = e(E)
                    , h = y.attr("data-name") || y.attr("name") || "File " + (d + 1)
                    , k = y.attr("data-value");
                  typeof k == "string" && (k = e.trim(k)),
                  W[h] = k
              }),
              W
          }
          let H = {
              _mkto_trk: "marketo"
          };
          function j() {
              return document.cookie.split("; ").reduce(function(W, d) {
                  let E = d.split("=")
                    , y = E[0];
                  if (y in H) {
                      let h = H[y]
                        , k = E.slice(1).join("=");
                      W[h] = k
                  }
                  return W
              }, {})
          }
          function Q(F, W, d, E) {
              var y = null;
              return W === "password" ? y = "Passwords cannot be submitted." : F.attr("required") ? E ? l.test(F.attr("type")) && (v.test(E) || (y = "Please enter a valid email address for: " + d)) : y = "Please fill out the required field: " + d : d === "g-recaptcha-response" && !E && (y = "Please confirm you\u2019re not a robot."),
              y
          }
          function M(F) {
              V(F),
              N(F)
          }
          function O(F) {
              D(F);
              var W = F.form
                , d = {};
              if (/^https/.test(o.href) && !/^https/.test(F.action)) {
                  W.attr("method", "post");
                  return
              }
              V(F);
              var E = U(W, d);
              if (E)
                  return g(E);
              P(F);
              var y;
              t.each(d, function(K, te) {
                  l.test(te) && (d.EMAIL = K),
                  /^((full[ _-]?)?name)$/i.test(te) && (y = K),
                  /^(first[ _-]?name)$/i.test(te) && (d.FNAME = K),
                  /^(last[ _-]?name)$/i.test(te) && (d.LNAME = K)
              }),
              y && !d.FNAME && (y = y.split(" "),
              d.FNAME = y[0],
              d.LNAME = d.LNAME || y[1]);
              var h = F.action.replace("/post?", "/post-json?") + "&c=?"
                , k = h.indexOf("u=") + 2;
              k = h.substring(k, h.indexOf("&", k));
              var Y = h.indexOf("id=") + 3;
              Y = h.substring(Y, h.indexOf("&", Y)),
              d["b_" + k + "_" + Y] = "",
              e.ajax({
                  url: h,
                  data: d,
                  dataType: "jsonp"
              }).done(function(K) {
                  F.success = K.result === "success" || /already/.test(K.msg),
                  F.success || console.info("MailChimp error: " + K.msg),
                  N(F)
              }).fail(function() {
                  N(F)
              })
          }
          function N(F) {
              var W = F.form
                , d = F.redirect
                , E = F.success;
              if (E && d) {
                  aa.location(d);
                  return
              }
              F.done.toggle(E),
              F.fail.toggle(!E),
              E ? F.done.focus() : F.fail.focus(),
              W.toggle(!E),
              D(F)
          }
          function V(F) {
              F.evt && F.evt.preventDefault(),
              F.evt = null
          }
          function X(F, W) {
              if (!W.fileUploads || !W.fileUploads[F])
                  return;
              var d, E = e(W.fileUploads[F]), y = E.find("> .w-file-upload-default"), h = E.find("> .w-file-upload-uploading"), k = E.find("> .w-file-upload-success"), Y = E.find("> .w-file-upload-error"), K = y.find(".w-file-upload-input"), te = y.find(".w-file-upload-label"), se = te.children(), ie = Y.find(".w-file-upload-error-msg"), pe = k.find(".w-file-upload-file"), Pe = k.find(".w-file-remove-link"), Ne = pe.find(".w-file-upload-file-name"), Be = ie.attr("data-w-size-error"), Ie = ie.attr("data-w-type-error"), tt = ie.attr("data-w-generic-error");
              if (p || te.on("click keydown", function(_) {
                  _.type === "keydown" && _.which !== 13 && _.which !== 32 || (_.preventDefault(),
                  K.click())
              }),
              te.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
              Pe.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
              p)
                  K.on("click", function(_) {
                      _.preventDefault()
                  }),
                  te.on("click", function(_) {
                      _.preventDefault()
                  }),
                  se.on("click", function(_) {
                      _.preventDefault()
                  });
              else {
                  Pe.on("click keydown", function(_) {
                      if (_.type === "keydown") {
                          if (_.which !== 13 && _.which !== 32)
                              return;
                          _.preventDefault()
                      }
                      K.removeAttr("data-value"),
                      K.val(""),
                      Ne.html(""),
                      y.toggle(!0),
                      k.toggle(!1),
                      te.focus()
                  }),
                  K.on("change", function(_) {
                      d = _.target && _.target.files && _.target.files[0],
                      d && (y.toggle(!1),
                      Y.toggle(!1),
                      h.toggle(!0),
                      h.focus(),
                      Ne.text(d.name),
                      w() || P(W),
                      W.fileUploads[F].uploading = !0,
                      Z(d, m))
                  });
                  var Tt = te.outerHeight();
                  K.height(Tt),
                  K.width(1)
              }
              function c(_) {
                  var x = _.responseJSON && _.responseJSON.msg
                    , z = tt;
                  typeof x == "string" && x.indexOf("InvalidFileTypeError") === 0 ? z = Ie : typeof x == "string" && x.indexOf("MaxFileSizeError") === 0 && (z = Be),
                  ie.text(z),
                  K.removeAttr("data-value"),
                  K.val(""),
                  h.toggle(!1),
                  y.toggle(!0),
                  Y.toggle(!0),
                  Y.focus(),
                  W.fileUploads[F].uploading = !1,
                  w() || D(W)
              }
              function m(_, x) {
                  if (_)
                      return c(_);
                  var z = x.fileName
                    , ee = x.postData
                    , le = x.fileId
                    , G = x.s3Url;
                  K.attr("data-value", le),
                  J(G, ee, d, z, T)
              }
              function T(_) {
                  if (_)
                      return c(_);
                  h.toggle(!1),
                  k.css("display", "inline-block"),
                  k.focus(),
                  W.fileUploads[F].uploading = !1,
                  w() || D(W)
              }
              function w() {
                  var _ = W.fileUploads && W.fileUploads.toArray() || [];
                  return _.some(function(x) {
                      return x.uploading
                  })
              }
          }
          function Z(F, W) {
              var d = new URLSearchParams({
                  name: F.name,
                  size: F.size
              });
              e.ajax({
                  type: "GET",
                  url: `${A}?${d}`,
                  crossDomain: !0
              }).done(function(E) {
                  W(null, E)
              }).fail(function(E) {
                  W(E)
              })
          }
          function J(F, W, d, E, y) {
              var h = new FormData;
              for (var k in W)
                  h.append(k, W[k]);
              h.append("file", d, E),
              e.ajax({
                  type: "POST",
                  url: F,
                  data: h,
                  processData: !1,
                  contentType: !1
              }).done(function() {
                  y(null)
              }).fail(function(Y) {
                  y(Y)
              })
          }
          return r
      }
      )
  }
  );
  var CE = f( (gX, RE) => {
      "use strict";
      var pt = Ke()
        , dF = $n()
        , et = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35
      }
        , xE = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
      pt.define("slider", RE.exports = function(e, t) {
          var r = {}, n = e.tram, i = e(document), o, a, s = pt.env(), u = ".w-slider", l = '<div class="w-slider-dot" data-wf-ignore />', v = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />', g = "w-slider-force-show", p = dF.triggers, I, b = !1;
          r.ready = function() {
              a = pt.env("design"),
              A()
          }
          ,
          r.design = function() {
              a = !0,
              setTimeout(A, 1e3)
          }
          ,
          r.preview = function() {
              a = !1,
              A()
          }
          ,
          r.redraw = function() {
              b = !0,
              A(),
              b = !1
          }
          ,
          r.destroy = R;
          function A() {
              o = i.find(u),
              o.length && (o.each(C),
              !I && (R(),
              S()))
          }
          function R() {
              pt.resize.off(L),
              pt.redraw.off(r.redraw)
          }
          function S() {
              pt.resize.on(L),
              pt.redraw.on(r.redraw)
          }
          function L() {
              o.filter(":visible").each(X)
          }
          function C(d, E) {
              var y = e(E)
                , h = e.data(E, u);
              h || (h = e.data(E, u, {
                  index: 0,
                  depth: 1,
                  hasFocus: {
                      keyboard: !1,
                      mouse: !1
                  },
                  el: y,
                  config: {}
              })),
              h.mask = y.children(".w-slider-mask"),
              h.left = y.children(".w-slider-arrow-left"),
              h.right = y.children(".w-slider-arrow-right"),
              h.nav = y.children(".w-slider-nav"),
              h.slides = h.mask.children(".w-slide"),
              h.slides.each(p.reset),
              b && (h.maskWidth = 0),
              y.attr("role") === void 0 && y.attr("role", "region"),
              y.attr("aria-label") === void 0 && y.attr("aria-label", "carousel");
              var k = h.mask.attr("id");
              if (k || (k = "w-slider-mask-" + d,
              h.mask.attr("id", k)),
              !a && !h.ariaLiveLabel && (h.ariaLiveLabel = e(v).appendTo(h.mask)),
              h.left.attr("role", "button"),
              h.left.attr("tabindex", "0"),
              h.left.attr("aria-controls", k),
              h.left.attr("aria-label") === void 0 && h.left.attr("aria-label", "previous slide"),
              h.right.attr("role", "button"),
              h.right.attr("tabindex", "0"),
              h.right.attr("aria-controls", k),
              h.right.attr("aria-label") === void 0 && h.right.attr("aria-label", "next slide"),
              !n.support.transform) {
                  h.left.hide(),
                  h.right.hide(),
                  h.nav.hide(),
                  I = !0;
                  return
              }
              h.el.off(u),
              h.left.off(u),
              h.right.off(u),
              h.nav.off(u),
              q(h),
              a ? (h.el.on("setting" + u, O(h)),
              M(h),
              h.hasTimer = !1) : (h.el.on("swipe" + u, O(h)),
              h.left.on("click" + u, B(h)),
              h.right.on("click" + u, H(h)),
              h.left.on("keydown" + u, U(h, B)),
              h.right.on("keydown" + u, U(h, H)),
              h.nav.on("keydown" + u, "> div", O(h)),
              h.config.autoplay && !h.hasTimer && (h.hasTimer = !0,
              h.timerCount = 1,
              Q(h)),
              h.el.on("mouseenter" + u, P(h, !0, "mouse")),
              h.el.on("focusin" + u, P(h, !0, "keyboard")),
              h.el.on("mouseleave" + u, P(h, !1, "mouse")),
              h.el.on("focusout" + u, P(h, !1, "keyboard"))),
              h.nav.on("click" + u, "> div", O(h)),
              s || h.mask.contents().filter(function() {
                  return this.nodeType === 3
              }).remove();
              var Y = y.filter(":hidden");
              Y.addClass(g);
              var K = y.parents(":hidden");
              K.addClass(g),
              b || X(d, E),
              Y.removeClass(g),
              K.removeClass(g)
          }
          function q(d) {
              var E = {};
              E.crossOver = 0,
              E.animation = d.el.attr("data-animation") || "slide",
              E.animation === "outin" && (E.animation = "cross",
              E.crossOver = .5),
              E.easing = d.el.attr("data-easing") || "ease";
              var y = d.el.attr("data-duration");
              if (E.duration = y != null ? parseInt(y, 10) : 500,
              D(d.el.attr("data-infinite")) && (E.infinite = !0),
              D(d.el.attr("data-disable-swipe")) && (E.disableSwipe = !0),
              D(d.el.attr("data-hide-arrows")) ? E.hideArrows = !0 : d.config.hideArrows && (d.left.show(),
              d.right.show()),
              D(d.el.attr("data-autoplay"))) {
                  E.autoplay = !0,
                  E.delay = parseInt(d.el.attr("data-delay"), 10) || 2e3,
                  E.timerMax = parseInt(d.el.attr("data-autoplay-limit"), 10);
                  var h = "mousedown" + u + " touchstart" + u;
                  a || d.el.off(h).one(h, function() {
                      M(d)
                  })
              }
              var k = d.right.width();
              E.edge = k ? k + 40 : 100,
              d.config = E
          }
          function D(d) {
              return d === "1" || d === "true"
          }
          function P(d, E, y) {
              return function(h) {
                  if (E)
                      d.hasFocus[y] = E;
                  else if (e.contains(d.el.get(0), h.relatedTarget) || (d.hasFocus[y] = E,
                  d.hasFocus.mouse && y === "keyboard" || d.hasFocus.keyboard && y === "mouse"))
                      return;
                  E ? (d.ariaLiveLabel.attr("aria-live", "polite"),
                  d.hasTimer && M(d)) : (d.ariaLiveLabel.attr("aria-live", "off"),
                  d.hasTimer && Q(d))
              }
          }
          function U(d, E) {
              return function(y) {
                  switch (y.keyCode) {
                  case et.SPACE:
                  case et.ENTER:
                      return E(d)(),
                      y.preventDefault(),
                      y.stopPropagation()
                  }
              }
          }
          function B(d) {
              return function() {
                  V(d, {
                      index: d.index - 1,
                      vector: -1
                  })
              }
          }
          function H(d) {
              return function() {
                  V(d, {
                      index: d.index + 1,
                      vector: 1
                  })
              }
          }
          function j(d, E) {
              var y = null;
              E === d.slides.length && (A(),
              Z(d)),
              t.each(d.anchors, function(h, k) {
                  e(h.els).each(function(Y, K) {
                      e(K).index() === E && (y = k)
                  })
              }),
              y != null && V(d, {
                  index: y,
                  immediate: !0
              })
          }
          function Q(d) {
              M(d);
              var E = d.config
                , y = E.timerMax;
              y && d.timerCount++ > y || (d.timerId = window.setTimeout(function() {
                  d.timerId == null || a || (H(d)(),
                  Q(d))
              }, E.delay))
          }
          function M(d) {
              window.clearTimeout(d.timerId),
              d.timerId = null
          }
          function O(d) {
              return function(E, y) {
                  y = y || {};
                  var h = d.config;
                  if (a && E.type === "setting") {
                      if (y.select === "prev")
                          return B(d)();
                      if (y.select === "next")
                          return H(d)();
                      if (q(d),
                      Z(d),
                      y.select == null)
                          return;
                      j(d, y.select);
                      return
                  }
                  if (E.type === "swipe")
                      return h.disableSwipe || pt.env("editor") ? void 0 : y.direction === "left" ? H(d)() : y.direction === "right" ? B(d)() : void 0;
                  if (d.nav.has(E.target).length) {
                      var k = e(E.target).index();
                      if (E.type === "click" && V(d, {
                          index: k
                      }),
                      E.type === "keydown")
                          switch (E.keyCode) {
                          case et.ENTER:
                          case et.SPACE:
                              {
                                  V(d, {
                                      index: k
                                  }),
                                  E.preventDefault();
                                  break
                              }
                          case et.ARROW_LEFT:
                          case et.ARROW_UP:
                              {
                                  N(d.nav, Math.max(k - 1, 0)),
                                  E.preventDefault();
                                  break
                              }
                          case et.ARROW_RIGHT:
                          case et.ARROW_DOWN:
                              {
                                  N(d.nav, Math.min(k + 1, d.pages)),
                                  E.preventDefault();
                                  break
                              }
                          case et.HOME:
                              {
                                  N(d.nav, 0),
                                  E.preventDefault();
                                  break
                              }
                          case et.END:
                              {
                                  N(d.nav, d.pages),
                                  E.preventDefault();
                                  break
                              }
                          default:
                              return
                          }
                  }
              }
          }
          function N(d, E) {
              var y = d.children().eq(E).focus();
              d.children().not(y)
          }
          function V(d, E) {
              E = E || {};
              var y = d.config
                , h = d.anchors;
              d.previous = d.index;
              var k = E.index
                , Y = {};
              k < 0 ? (k = h.length - 1,
              y.infinite && (Y.x = -d.endX,
              Y.from = 0,
              Y.to = h[0].width)) : k >= h.length && (k = 0,
              y.infinite && (Y.x = h[h.length - 1].width,
              Y.from = -h[h.length - 1].x,
              Y.to = Y.from - Y.x)),
              d.index = k;
              var K = d.nav.children().eq(k).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
              d.nav.children().not(K).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"),
              y.hideArrows && (d.index === h.length - 1 ? d.right.hide() : d.right.show(),
              d.index === 0 ? d.left.hide() : d.left.show());
              var te = d.offsetX || 0
                , se = d.offsetX = -h[d.index].x
                , ie = {
                  x: se,
                  opacity: 1,
                  visibility: ""
              }
                , pe = e(h[d.index].els)
                , Pe = e(h[d.previous] && h[d.previous].els)
                , Ne = d.slides.not(pe)
                , Be = y.animation
                , Ie = y.easing
                , tt = Math.round(y.duration)
                , Tt = E.vector || (d.index > d.previous ? 1 : -1)
                , c = "opacity " + tt + "ms " + Ie
                , m = "transform " + tt + "ms " + Ie;
              if (pe.find(xE).removeAttr("tabindex"),
              pe.removeAttr("aria-hidden"),
              pe.find("*").removeAttr("aria-hidden"),
              Ne.find(xE).attr("tabindex", "-1"),
              Ne.attr("aria-hidden", "true"),
              Ne.find("*").attr("aria-hidden", "true"),
              a || (pe.each(p.intro),
              Ne.each(p.outro)),
              E.immediate && !b) {
                  n(pe).set(ie),
                  _();
                  return
              }
              if (d.index === d.previous)
                  return;
              if (a || d.ariaLiveLabel.text(`Slide ${k + 1} of ${h.length}.`),
              Be === "cross") {
                  var T = Math.round(tt - tt * y.crossOver)
                    , w = Math.round(tt - T);
                  c = "opacity " + T + "ms " + Ie,
                  n(Pe).set({
                      visibility: ""
                  }).add(c).start({
                      opacity: 0
                  }),
                  n(pe).set({
                      visibility: "",
                      x: se,
                      opacity: 0,
                      zIndex: d.depth++
                  }).add(c).wait(w).then({
                      opacity: 1
                  }).then(_);
                  return
              }
              if (Be === "fade") {
                  n(Pe).set({
                      visibility: ""
                  }).stop(),
                  n(pe).set({
                      visibility: "",
                      x: se,
                      opacity: 0,
                      zIndex: d.depth++
                  }).add(c).start({
                      opacity: 1
                  }).then(_);
                  return
              }
              if (Be === "over") {
                  ie = {
                      x: d.endX
                  },
                  n(Pe).set({
                      visibility: ""
                  }).stop(),
                  n(pe).set({
                      visibility: "",
                      zIndex: d.depth++,
                      x: se + h[d.index].width * Tt
                  }).add(m).start({
                      x: se
                  }).then(_);
                  return
              }
              y.infinite && Y.x ? (n(d.slides.not(Pe)).set({
                  visibility: "",
                  x: Y.x
              }).add(m).start({
                  x: se
              }),
              n(Pe).set({
                  visibility: "",
                  x: Y.from
              }).add(m).start({
                  x: Y.to
              }),
              d.shifted = Pe) : (y.infinite && d.shifted && (n(d.shifted).set({
                  visibility: "",
                  x: te
              }),
              d.shifted = null),
              n(d.slides).set({
                  visibility: ""
              }).add(m).start({
                  x: se
              }));
              function _() {
                  pe = e(h[d.index].els),
                  Ne = d.slides.not(pe),
                  Be !== "slide" && (ie.visibility = "hidden"),
                  n(Ne).set(ie)
              }
          }
          function X(d, E) {
              var y = e.data(E, u);
              if (y) {
                  if (F(y))
                      return Z(y);
                  a && W(y) && Z(y)
              }
          }
          function Z(d) {
              var E = 1
                , y = 0
                , h = 0
                , k = 0
                , Y = d.maskWidth
                , K = Y - d.config.edge;
              K < 0 && (K = 0),
              d.anchors = [{
                  els: [],
                  x: 0,
                  width: 0
              }],
              d.slides.each(function(se, ie) {
                  h - y > K && (E++,
                  y += Y,
                  d.anchors[E - 1] = {
                      els: [],
                      x: h,
                      width: 0
                  }),
                  k = e(ie).outerWidth(!0),
                  h += k,
                  d.anchors[E - 1].width += k,
                  d.anchors[E - 1].els.push(ie);
                  var pe = se + 1 + " of " + d.slides.length;
                  e(ie).attr("aria-label", pe),
                  e(ie).attr("role", "group")
              }),
              d.endX = h,
              a && (d.pages = null),
              d.nav.length && d.pages !== E && (d.pages = E,
              J(d));
              var te = d.index;
              te >= E && (te = E - 1),
              V(d, {
                  immediate: !0,
                  index: te
              })
          }
          function J(d) {
              var E = [], y, h = d.el.attr("data-nav-spacing");
              h && (h = parseFloat(h) + "px");
              for (var k = 0, Y = d.pages; k < Y; k++)
                  y = e(l),
                  y.attr("aria-label", "Show slide " + (k + 1) + " of " + Y).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"),
                  d.nav.hasClass("w-num") && y.text(k + 1),
                  h != null && y.css({
                      "margin-left": h,
                      "margin-right": h
                  }),
                  E.push(y);
              d.nav.empty().append(E)
          }
          function F(d) {
              var E = d.mask.width();
              return d.maskWidth !== E ? (d.maskWidth = E,
              !0) : !1
          }
          function W(d) {
              var E = 0;
              return d.slides.each(function(y, h) {
                  E += e(h).outerWidth(!0)
              }),
              d.slidesWidth !== E ? (d.slidesWidth = E,
              !0) : !1
          }
          return r
      }
      )
  }
  );
  _a();
  Ta();
  Sa();
  $n();
  mE();
  IE();
  bE();
  SE();
  wE();
  CE();
}
)();
/*!
* tram.js v0.8.2-global
* Cross-browser CSS3 transitions in JavaScript
* https://github.com/bkwld/tram
* MIT License
*/
/*!
* Penou._ (aka) Underscore.js 1.6.0 (custom build)
*
* http://underscorejs.org
* (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
* Underscore may be freely distributed under the MIT license.
* @license MIT
*/
/*! Bundled license information:

timm/lib/timm.js:
(*!
 * Timm
 *
 * Immutability helpers with fast reads and acceptable writes.
 *
 * @copyright Guillermo Grau Panea 2016
 * @license MIT
 *)
*/
/**
* ----------------------------------------------------------------------
* Penou: Interactions 2.0: Init
*/
Penou.require('ix2').init({
  "events": {
      "e": {
          "id": "e",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-173",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|2e6f2f06-d0f1-ba95-4dd0-ba2ba3ba25c5",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|2e6f2f06-d0f1-ba95-4dd0-ba2ba3ba25c5",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-173-p",
              "smoothing": 85,
              "startsEntering": true,
              "addStartOffset": true,
              "addOffsetValue": 50,
              "startsExiting": false,
              "addEndOffset": true,
              "endOffsetValue": 50
          }],
          "createdOn": 1696404524606
      },
      "e-3": {
          "id": "e-3",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-681"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|a84d24f6-d090-c779-e2d0-cdadd02de6b3",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|a84d24f6-d090-c779-e2d0-cdadd02de6b3",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696543433521
      },
      "e-4": {
          "id": "e-4",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-3"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|a84d24f6-d090-c779-e2d0-cdadd02de6b3",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|a84d24f6-d090-c779-e2d0-cdadd02de6b3",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696543433521
      },
      "e-18": {
          "id": "e-18",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-696"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eb1",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eb1",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696557162201
      },
      "e-20": {
          "id": "e-20",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-714"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eb3",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eb3",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696557162201
      },
      "e-22": {
          "id": "e-22",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-6",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-674"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eb8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eb8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696557162201
      },
      "e-24": {
          "id": "e-24",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-7",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-779"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "08f29e7d-9d75-a2e6-7653-8b45d7725ec9",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "08f29e7d-9d75-a2e6-7653-8b45d7725ec9",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696560861440
      },
      "e-26": {
          "id": "e-26",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-8",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-738"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eba",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eba",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696564133638
      },
      "e-28": {
          "id": "e-28",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-704"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "08f29e7d-9d75-a2e6-7653-8b45d7725ee0",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "08f29e7d-9d75-a2e6-7653-8b45d7725ee0",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696564227089
      },
      "e-30": {
          "id": "e-30",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-11",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-31"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "08f29e7d-9d75-a2e6-7653-8b45d7725ef5",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "08f29e7d-9d75-a2e6-7653-8b45d7725ef5",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696564370622
      },
      "e-32": {
          "id": "e-32",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-10",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-33"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "08f29e7d-9d75-a2e6-7653-8b45d7725ebc",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "08f29e7d-9d75-a2e6-7653-8b45d7725ebc",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696564748533
      },
      "e-54": {
          "id": "e-54",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-14",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-687"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".hero_slide_2_image_wrapper",
              "originalId": "651f53bd134194b356d99e70|a395889f-da1b-9cfa-c989-6c25ab91eb6c",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".hero_slide_2_image_wrapper",
              "originalId": "651f53bd134194b356d99e70|a395889f-da1b-9cfa-c989-6c25ab91eb6c",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696660720058
      },
      "e-55": {
          "id": "e-55",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-15",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-693"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".hero_slide_2_image_wrapper",
              "originalId": "651f53bd134194b356d99e70|a395889f-da1b-9cfa-c989-6c25ab91eb6c",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".hero_slide_2_image_wrapper",
              "originalId": "651f53bd134194b356d99e70|a395889f-da1b-9cfa-c989-6c25ab91eb6c",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696660720059
      },
      "e-56": {
          "id": "e-56",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-14",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-702"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".hero_slide_2_link",
              "originalId": "651f53bd134194b356d99e70|4076824e-8667-137c-b6a4-17b1cdf3aa28",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".hero_slide_2_link",
              "originalId": "651f53bd134194b356d99e70|4076824e-8667-137c-b6a4-17b1cdf3aa28",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696661075493
      },
      "e-57": {
          "id": "e-57",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-15",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-742"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".hero_slide_2_link",
              "originalId": "651f53bd134194b356d99e70|4076824e-8667-137c-b6a4-17b1cdf3aa28",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".hero_slide_2_link",
              "originalId": "651f53bd134194b356d99e70|4076824e-8667-137c-b6a4-17b1cdf3aa28",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696661075493
      },
      "e-76": {
          "id": "e-76",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-752"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "65244eca857ba04d4ea26059|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "65244eca857ba04d4ea26059|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696878283123
      },
      "e-77": {
          "id": "e-77",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-76"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "65244eca857ba04d4ea26059|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "65244eca857ba04d4ea26059|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696878283123
      },
      "e-78": {
          "id": "e-78",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-787"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "65244eca857ba04d4ea26059|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "65244eca857ba04d4ea26059|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696878283123
      },
      "e-80": {
          "id": "e-80",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-751"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "65244eca857ba04d4ea26059|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "65244eca857ba04d4ea26059|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696878283123
      },
      "e-90": {
          "id": "e-90",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-788"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "65244eca857ba04d4ea26059|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "65244eca857ba04d4ea26059|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696878283123
      },
      "e-112": {
          "id": "e-112",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-776"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6525ed30978adfabfd0caca1|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6525ed30978adfabfd0caca1|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696984368948
      },
      "e-113": {
          "id": "e-113",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-112"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6525ed30978adfabfd0caca1|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6525ed30978adfabfd0caca1|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696984368948
      },
      "e-114": {
          "id": "e-114",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-724"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6525ed30978adfabfd0caca1|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6525ed30978adfabfd0caca1|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696984368948
      },
      "e-116": {
          "id": "e-116",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-729"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6525ed30978adfabfd0caca1|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6525ed30978adfabfd0caca1|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696984368948
      },
      "e-126": {
          "id": "e-126",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-733"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6525ed30978adfabfd0caca1|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6525ed30978adfabfd0caca1|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1696984368948
      },
      "e-130": {
          "id": "e-130",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-131"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e1136cc51dbe5e0d7f9af|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e1136cc51dbe5e0d7f9af|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697517879214
      },
      "e-131": {
          "id": "e-131",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-130"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e1136cc51dbe5e0d7f9af|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e1136cc51dbe5e0d7f9af|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697517879214
      },
      "e-132": {
          "id": "e-132",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-692"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e1136cc51dbe5e0d7f9af|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e1136cc51dbe5e0d7f9af|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697517879214
      },
      "e-134": {
          "id": "e-134",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-736"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e1136cc51dbe5e0d7f9af|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e1136cc51dbe5e0d7f9af|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697517879214
      },
      "e-144": {
          "id": "e-144",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-739"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e1136cc51dbe5e0d7f9af|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e1136cc51dbe5e0d7f9af|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697517879214
      },
      "e-148": {
          "id": "e-148",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-753"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e18ff105d4f94b392fbc2|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e18ff105d4f94b392fbc2|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697519872419
      },
      "e-149": {
          "id": "e-149",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-148"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e18ff105d4f94b392fbc2|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e18ff105d4f94b392fbc2|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697519872419
      },
      "e-150": {
          "id": "e-150",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-673"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e18ff105d4f94b392fbc2|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e18ff105d4f94b392fbc2|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697519872419
      },
      "e-152": {
          "id": "e-152",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-767"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e18ff105d4f94b392fbc2|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e18ff105d4f94b392fbc2|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697519872419
      },
      "e-162": {
          "id": "e-162",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-163"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e18ff105d4f94b392fbc2|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e18ff105d4f94b392fbc2|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697519872419
      },
      "e-166": {
          "id": "e-166",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-167"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e1bed634605830cd0e5c4|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e1bed634605830cd0e5c4|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697520622168
      },
      "e-167": {
          "id": "e-167",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-166"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e1bed634605830cd0e5c4|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e1bed634605830cd0e5c4|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697520622168
      },
      "e-168": {
          "id": "e-168",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-169"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e1bed634605830cd0e5c4|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e1bed634605830cd0e5c4|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697520622168
      },
      "e-170": {
          "id": "e-170",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-171"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e1bed634605830cd0e5c4|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e1bed634605830cd0e5c4|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697520622168
      },
      "e-180": {
          "id": "e-180",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-181"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e1bed634605830cd0e5c4|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e1bed634605830cd0e5c4|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697520622168
      },
      "e-184": {
          "id": "e-184",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-185"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e1f989a6a15235f285d04|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e1f989a6a15235f285d04|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697521561491
      },
      "e-185": {
          "id": "e-185",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-184"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e1f989a6a15235f285d04|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e1f989a6a15235f285d04|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697521561491
      },
      "e-186": {
          "id": "e-186",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-187"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e1f989a6a15235f285d04|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e1f989a6a15235f285d04|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697521561491
      },
      "e-188": {
          "id": "e-188",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-189"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e1f989a6a15235f285d04|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e1f989a6a15235f285d04|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697521561491
      },
      "e-198": {
          "id": "e-198",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-199"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e1f989a6a15235f285d04|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e1f989a6a15235f285d04|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697521561491
      },
      "e-202": {
          "id": "e-202",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-203"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e211dcc51dbe5e0ebd845|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e211dcc51dbe5e0ebd845|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697521949697
      },
      "e-203": {
          "id": "e-203",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-202"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e211dcc51dbe5e0ebd845|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e211dcc51dbe5e0ebd845|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697521949697
      },
      "e-204": {
          "id": "e-204",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-205"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e211dcc51dbe5e0ebd845|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e211dcc51dbe5e0ebd845|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697521949697
      },
      "e-206": {
          "id": "e-206",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-207"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e211dcc51dbe5e0ebd845|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e211dcc51dbe5e0ebd845|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697521949697
      },
      "e-216": {
          "id": "e-216",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-217"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e211dcc51dbe5e0ebd845|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e211dcc51dbe5e0ebd845|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697521949697
      },
      "e-220": {
          "id": "e-220",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-221"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e3927836cdd4e5b336c4a|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e3927836cdd4e5b336c4a|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697528104388
      },
      "e-221": {
          "id": "e-221",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-220"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e3927836cdd4e5b336c4a|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e3927836cdd4e5b336c4a|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697528104388
      },
      "e-222": {
          "id": "e-222",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-223"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e3927836cdd4e5b336c4a|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e3927836cdd4e5b336c4a|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697528104388
      },
      "e-224": {
          "id": "e-224",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-225"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e3927836cdd4e5b336c4a|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e3927836cdd4e5b336c4a|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697528104388
      },
      "e-234": {
          "id": "e-234",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-235"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e3927836cdd4e5b336c4a|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e3927836cdd4e5b336c4a|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697528104388
      },
      "e-238": {
          "id": "e-238",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-239"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ed3a8aa7e369ad329dd37|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ed3a8aa7e369ad329dd37|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697567657287
      },
      "e-239": {
          "id": "e-239",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-238"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ed3a8aa7e369ad329dd37|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ed3a8aa7e369ad329dd37|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697567657287
      },
      "e-240": {
          "id": "e-240",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-241"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ed3a8aa7e369ad329dd37|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ed3a8aa7e369ad329dd37|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697567657287
      },
      "e-242": {
          "id": "e-242",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-243"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ed3a8aa7e369ad329dd37|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ed3a8aa7e369ad329dd37|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697567657287
      },
      "e-252": {
          "id": "e-252",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-253"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ed3a8aa7e369ad329dd37|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ed3a8aa7e369ad329dd37|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697567657287
      },
      "e-256": {
          "id": "e-256",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-257"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ede690c02c8bd9e6e43ad|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ede690c02c8bd9e6e43ad|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697570409909
      },
      "e-257": {
          "id": "e-257",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-256"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ede690c02c8bd9e6e43ad|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ede690c02c8bd9e6e43ad|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697570409909
      },
      "e-258": {
          "id": "e-258",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-259"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ede690c02c8bd9e6e43ad|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ede690c02c8bd9e6e43ad|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697570409909
      },
      "e-260": {
          "id": "e-260",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-261"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ede690c02c8bd9e6e43ad|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ede690c02c8bd9e6e43ad|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697570409909
      },
      "e-270": {
          "id": "e-270",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-271"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ede690c02c8bd9e6e43ad|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ede690c02c8bd9e6e43ad|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697570409909
      },
      "e-274": {
          "id": "e-274",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-275"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652eea133c6165256c823faa|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652eea133c6165256c823faa|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697573395714
      },
      "e-275": {
          "id": "e-275",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-274"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652eea133c6165256c823faa|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652eea133c6165256c823faa|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697573395714
      },
      "e-276": {
          "id": "e-276",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-277"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652eea133c6165256c823faa|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652eea133c6165256c823faa|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697573395714
      },
      "e-278": {
          "id": "e-278",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-279"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652eea133c6165256c823faa|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652eea133c6165256c823faa|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697573395714
      },
      "e-288": {
          "id": "e-288",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-289"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652eea133c6165256c823faa|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652eea133c6165256c823faa|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697573395714
      },
      "e-292": {
          "id": "e-292",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-293"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652eeb4cfae5d88ebcad5f75|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652eeb4cfae5d88ebcad5f75|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697573709282
      },
      "e-293": {
          "id": "e-293",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-292"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652eeb4cfae5d88ebcad5f75|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652eeb4cfae5d88ebcad5f75|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697573709282
      },
      "e-294": {
          "id": "e-294",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-295"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652eeb4cfae5d88ebcad5f75|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652eeb4cfae5d88ebcad5f75|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697573709282
      },
      "e-296": {
          "id": "e-296",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-297"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652eeb4cfae5d88ebcad5f75|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652eeb4cfae5d88ebcad5f75|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697573709282
      },
      "e-306": {
          "id": "e-306",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-307"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652eeb4cfae5d88ebcad5f75|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652eeb4cfae5d88ebcad5f75|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697573709282
      },
      "e-310": {
          "id": "e-310",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-311"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652eee4c8958d9fadbfe40c5|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652eee4c8958d9fadbfe40c5|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697574476530
      },
      "e-311": {
          "id": "e-311",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-310"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652eee4c8958d9fadbfe40c5|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652eee4c8958d9fadbfe40c5|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697574476530
      },
      "e-312": {
          "id": "e-312",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-313"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652eee4c8958d9fadbfe40c5|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652eee4c8958d9fadbfe40c5|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697574476530
      },
      "e-314": {
          "id": "e-314",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-315"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652eee4c8958d9fadbfe40c5|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652eee4c8958d9fadbfe40c5|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697574476530
      },
      "e-324": {
          "id": "e-324",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-325"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652eee4c8958d9fadbfe40c5|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652eee4c8958d9fadbfe40c5|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697574476530
      },
      "e-328": {
          "id": "e-328",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-329"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ef3de492720dc6c813979|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ef3de492720dc6c813979|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697575903615
      },
      "e-329": {
          "id": "e-329",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-328"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ef3de492720dc6c813979|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ef3de492720dc6c813979|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697575903615
      },
      "e-330": {
          "id": "e-330",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-331"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ef3de492720dc6c813979|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ef3de492720dc6c813979|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697575903615
      },
      "e-332": {
          "id": "e-332",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-333"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ef3de492720dc6c813979|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ef3de492720dc6c813979|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697575903615
      },
      "e-342": {
          "id": "e-342",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-343"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ef3de492720dc6c813979|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ef3de492720dc6c813979|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697575903615
      },
      "e-346": {
          "id": "e-346",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-347"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f01c2f75da7e950aa14ed|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f01c2f75da7e950aa14ed|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697579459228
      },
      "e-347": {
          "id": "e-347",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-346"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f01c2f75da7e950aa14ed|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f01c2f75da7e950aa14ed|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697579459228
      },
      "e-348": {
          "id": "e-348",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-349"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f01c2f75da7e950aa14ed|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f01c2f75da7e950aa14ed|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697579459228
      },
      "e-350": {
          "id": "e-350",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-351"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f01c2f75da7e950aa14ed|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f01c2f75da7e950aa14ed|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697579459228
      },
      "e-360": {
          "id": "e-360",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-361"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f01c2f75da7e950aa14ed|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f01c2f75da7e950aa14ed|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697579459228
      },
      "e-364": {
          "id": "e-364",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-365"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f0b50571d00336fcf88ff|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f0b50571d00336fcf88ff|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697581905214
      },
      "e-365": {
          "id": "e-365",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-364"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f0b50571d00336fcf88ff|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f0b50571d00336fcf88ff|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697581905214
      },
      "e-366": {
          "id": "e-366",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-367"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f0b50571d00336fcf88ff|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f0b50571d00336fcf88ff|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697581905214
      },
      "e-368": {
          "id": "e-368",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-369"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f0b50571d00336fcf88ff|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f0b50571d00336fcf88ff|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697581905214
      },
      "e-378": {
          "id": "e-378",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-379"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f0b50571d00336fcf88ff|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f0b50571d00336fcf88ff|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697581905214
      },
      "e-382": {
          "id": "e-382",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-383"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f0e6685906dcdcf406337|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f0e6685906dcdcf406337|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697582695276
      },
      "e-383": {
          "id": "e-383",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-382"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f0e6685906dcdcf406337|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f0e6685906dcdcf406337|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697582695276
      },
      "e-384": {
          "id": "e-384",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-385"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f0e6685906dcdcf406337|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f0e6685906dcdcf406337|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697582695276
      },
      "e-386": {
          "id": "e-386",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-387"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f0e6685906dcdcf406337|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f0e6685906dcdcf406337|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697582695276
      },
      "e-396": {
          "id": "e-396",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-397"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f0e6685906dcdcf406337|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f0e6685906dcdcf406337|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697582695276
      },
      "e-400": {
          "id": "e-400",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-401"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f17dc3610f38db001f09e|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f17dc3610f38db001f09e|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697585117300
      },
      "e-401": {
          "id": "e-401",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-400"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f17dc3610f38db001f09e|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f17dc3610f38db001f09e|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697585117300
      },
      "e-402": {
          "id": "e-402",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-403"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f17dc3610f38db001f09e|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f17dc3610f38db001f09e|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697585117300
      },
      "e-404": {
          "id": "e-404",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-405"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f17dc3610f38db001f09e|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f17dc3610f38db001f09e|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697585117300
      },
      "e-414": {
          "id": "e-414",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-415"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f17dc3610f38db001f09e|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f17dc3610f38db001f09e|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697585117300
      },
      "e-418": {
          "id": "e-418",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-419"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f1c300f0d3043599d584e|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f1c300f0d3043599d584e|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697586224989
      },
      "e-419": {
          "id": "e-419",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-418"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f1c300f0d3043599d584e|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f1c300f0d3043599d584e|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697586224989
      },
      "e-420": {
          "id": "e-420",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-421"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f1c300f0d3043599d584e|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f1c300f0d3043599d584e|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697586224989
      },
      "e-422": {
          "id": "e-422",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-423"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f1c300f0d3043599d584e|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f1c300f0d3043599d584e|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697586224989
      },
      "e-432": {
          "id": "e-432",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-433"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f1c300f0d3043599d584e|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f1c300f0d3043599d584e|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697586224989
      },
      "e-436": {
          "id": "e-436",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-437"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f1d65495820152c713c77|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f1d65495820152c713c77|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697586534571
      },
      "e-437": {
          "id": "e-437",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-436"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f1d65495820152c713c77|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f1d65495820152c713c77|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697586534571
      },
      "e-438": {
          "id": "e-438",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-439"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f1d65495820152c713c77|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f1d65495820152c713c77|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697586534571
      },
      "e-440": {
          "id": "e-440",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-441"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f1d65495820152c713c77|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f1d65495820152c713c77|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697586534571
      },
      "e-450": {
          "id": "e-450",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-451"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652f1d65495820152c713c77|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652f1d65495820152c713c77|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1697586534571
      },
      "e-580": {
          "id": "e-580",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-581"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|ccd8460f-571c-2b24-2e84-bbe55a223e94",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|ccd8460f-571c-2b24-2e84-bbe55a223e94",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 20,
              "scrollOffsetUnit": "%",
              "delay": 10,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1698788659337
      },
      "e-582": {
          "id": "e-582",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-583"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|eef1c5e7-1958-7a0d-d808-97d5aa0b8671",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|eef1c5e7-1958-7a0d-d808-97d5aa0b8671",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 20,
              "scrollOffsetUnit": "%",
              "delay": 110,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1698788707495
      },
      "e-588": {
          "id": "e-588",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SLIDER_ACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-589"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|39a49ffc-ac42-78dc-81c8-ba5ff1a11e7f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|39a49ffc-ac42-78dc-81c8-ba5ff1a11e7f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1698863786273
      },
      "e-589": {
          "id": "e-589",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SLIDER_INACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-13",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-588"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|39a49ffc-ac42-78dc-81c8-ba5ff1a11e7f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|39a49ffc-ac42-78dc-81c8-ba5ff1a11e7f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1698863786281
      },
      "e-590": {
          "id": "e-590",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SLIDER_ACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-591"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|39a49ffc-ac42-78dc-81c8-ba5ff1a11e80",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|39a49ffc-ac42-78dc-81c8-ba5ff1a11e80",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1698863808420
      },
      "e-591": {
          "id": "e-591",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SLIDER_INACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-13",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-590"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|39a49ffc-ac42-78dc-81c8-ba5ff1a11e80",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|39a49ffc-ac42-78dc-81c8-ba5ff1a11e80",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1698863808464
      },
      "e-592": {
          "id": "e-592",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_ACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-593"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|f72ac085-53e5-05d9-eb65-e8503af3a915",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|f72ac085-53e5-05d9-eb65-e8503af3a915",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1698863821696
      },
      "e-593": {
          "id": "e-593",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_INACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-13",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-592"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|f72ac085-53e5-05d9-eb65-e8503af3a915",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|f72ac085-53e5-05d9-eb65-e8503af3a915",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1698863821696
      },
      "e-594": {
          "id": "e-594",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_ACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-595"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|1dafe906-70f0-7a97-1ff4-294959520d98",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|1dafe906-70f0-7a97-1ff4-294959520d98",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1698863858618
      },
      "e-595": {
          "id": "e-595",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_INACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-13",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-594"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|1dafe906-70f0-7a97-1ff4-294959520d98",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|1dafe906-70f0-7a97-1ff4-294959520d98",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1698863858618
      },
      "e-596": {
          "id": "e-596",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_ACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-597"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|35f9d499-c529-2c5a-fecf-d8b90149a685",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|35f9d499-c529-2c5a-fecf-d8b90149a685",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1698863861586
      },
      "e-597": {
          "id": "e-597",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_INACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-13",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-596"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|35f9d499-c529-2c5a-fecf-d8b90149a685",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|35f9d499-c529-2c5a-fecf-d8b90149a685",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1698863861586
      },
      "e-598": {
          "id": "e-598",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_ACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-599"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|cab00d90-afce-531f-d96e-8c622063e2c5",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|cab00d90-afce-531f-d96e-8c622063e2c5",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1698863862059
      },
      "e-599": {
          "id": "e-599",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_INACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-13",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-598"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|cab00d90-afce-531f-d96e-8c622063e2c5",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|cab00d90-afce-531f-d96e-8c622063e2c5",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1698863862059
      },
      "e-600": {
          "id": "e-600",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-174",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-601"
              }
          },
          "mediaQueries": ["main", "medium"],
          "target": {
              "id": "ba99a127-68af-1ac5-b83c-2500a258922b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "ba99a127-68af-1ac5-b83c-2500a258922b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1698918927377
      },
      "e-601": {
          "id": "e-601",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-175",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-600"
              }
          },
          "mediaQueries": ["main", "medium"],
          "target": {
              "id": "ba99a127-68af-1ac5-b83c-2500a258922b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "ba99a127-68af-1ac5-b83c-2500a258922b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1698918927382
      },
      "e-602": {
          "id": "e-602",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-603"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "65244eca857ba04d4ea26059|8f157a30-0e5d-6345-1963-d1df7f6ccdad",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "65244eca857ba04d4ea26059|8f157a30-0e5d-6345-1963-d1df7f6ccdad",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1698931545454
      },
      "e-604": {
          "id": "e-604",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInLeft",
                  "autoStopEventId": "e-605"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "65244eca857ba04d4ea26059|761223b5-b920-9d1b-ea74-94ef997ff7cd",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "65244eca857ba04d4ea26059|761223b5-b920-9d1b-ea74-94ef997ff7cd",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "LEFT",
              "effectIn": true
          },
          "createdOn": 1698931643189
      },
      "e-606": {
          "id": "e-606",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-607"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "65244eca857ba04d4ea26059|9a80273c-b3ae-1e0a-0768-3bbec8f1ed8f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "65244eca857ba04d4ea26059|9a80273c-b3ae-1e0a-0768-3bbec8f1ed8f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1698931779143
      },
      "e-608": {
          "id": "e-608",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInLeft",
                  "autoStopEventId": "e-609"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "65244eca857ba04d4ea26059|6f173fa6-55f8-6d8d-3ca9-2d507530e1c7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "65244eca857ba04d4ea26059|6f173fa6-55f8-6d8d-3ca9-2d507530e1c7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "LEFT",
              "effectIn": true
          },
          "createdOn": 1698931795774
      },
      "e-610": {
          "id": "e-610",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-611"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "65244eca857ba04d4ea26059|2fb98326-32a2-d032-4c6d-963cd94e3fa4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "65244eca857ba04d4ea26059|2fb98326-32a2-d032-4c6d-963cd94e3fa4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1698931805009
      },
      "e-612": {
          "id": "e-612",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInLeft",
                  "autoStopEventId": "e-613"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "65244eca857ba04d4ea26059|d6e66a05-3da3-98be-5bf1-54e1953b6b85",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "65244eca857ba04d4ea26059|d6e66a05-3da3-98be-5bf1-54e1953b6b85",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "LEFT",
              "effectIn": true
          },
          "createdOn": 1698931819460
      },
      "e-616": {
          "id": "e-616",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-617"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "ba99a127-68af-1ac5-b83c-2500a2589232",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "ba99a127-68af-1ac5-b83c-2500a2589232",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 100,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1698949225693
      },
      "e-618": {
          "id": "e-618",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-619"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "ba99a127-68af-1ac5-b83c-2500a2589241",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "ba99a127-68af-1ac5-b83c-2500a2589241",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1698949252213
      },
      "e-620": {
          "id": "e-620",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-621"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "ba99a127-68af-1ac5-b83c-2500a258924e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "ba99a127-68af-1ac5-b83c-2500a258924e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 300,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1698949270671
      },
      "e-626": {
          "id": "e-626",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-627"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e3927836cdd4e5b336c4a|8f157a30-0e5d-6345-1963-d1df7f6ccdad",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e3927836cdd4e5b336c4a|8f157a30-0e5d-6345-1963-d1df7f6ccdad",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1698949554914
      },
      "e-628": {
          "id": "e-628",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInLeft",
                  "autoStopEventId": "e-629"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e3927836cdd4e5b336c4a|761223b5-b920-9d1b-ea74-94ef997ff7cd",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e3927836cdd4e5b336c4a|761223b5-b920-9d1b-ea74-94ef997ff7cd",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "LEFT",
              "effectIn": true
          },
          "createdOn": 1698949572458
      },
      "e-630": {
          "id": "e-630",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-631"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e3927836cdd4e5b336c4a|9a80273c-b3ae-1e0a-0768-3bbec8f1ed8f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e3927836cdd4e5b336c4a|9a80273c-b3ae-1e0a-0768-3bbec8f1ed8f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1698949587630
      },
      "e-632": {
          "id": "e-632",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInLeft",
                  "autoStopEventId": "e-633"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e3927836cdd4e5b336c4a|6f173fa6-55f8-6d8d-3ca9-2d507530e1c7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e3927836cdd4e5b336c4a|6f173fa6-55f8-6d8d-3ca9-2d507530e1c7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "LEFT",
              "effectIn": true
          },
          "createdOn": 1698949597945
      },
      "e-634": {
          "id": "e-634",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-635"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652e3927836cdd4e5b336c4a|2fb98326-32a2-d032-4c6d-963cd94e3fa4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652e3927836cdd4e5b336c4a|2fb98326-32a2-d032-4c6d-963cd94e3fa4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1698949610299
      },
      "e-636": {
          "id": "e-636",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-637"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ef3de492720dc6c813979|8f157a30-0e5d-6345-1963-d1df7f6ccdad",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ef3de492720dc6c813979|8f157a30-0e5d-6345-1963-d1df7f6ccdad",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1698950951292
      },
      "e-638": {
          "id": "e-638",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInLeft",
                  "autoStopEventId": "e-639"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ef3de492720dc6c813979|761223b5-b920-9d1b-ea74-94ef997ff7cd",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ef3de492720dc6c813979|761223b5-b920-9d1b-ea74-94ef997ff7cd",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "LEFT",
              "effectIn": true
          },
          "createdOn": 1698950964326
      },
      "e-640": {
          "id": "e-640",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-641"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ef3de492720dc6c813979|9a80273c-b3ae-1e0a-0768-3bbec8f1ed8f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ef3de492720dc6c813979|9a80273c-b3ae-1e0a-0768-3bbec8f1ed8f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1698950973674
      },
      "e-642": {
          "id": "e-642",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInLeft",
                  "autoStopEventId": "e-643"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ef3de492720dc6c813979|6f173fa6-55f8-6d8d-3ca9-2d507530e1c7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ef3de492720dc6c813979|6f173fa6-55f8-6d8d-3ca9-2d507530e1c7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "LEFT",
              "effectIn": true
          },
          "createdOn": 1698950983011
      },
      "e-644": {
          "id": "e-644",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-645"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ef3de492720dc6c813979|2fb98326-32a2-d032-4c6d-963cd94e3fa4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ef3de492720dc6c813979|2fb98326-32a2-d032-4c6d-963cd94e3fa4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1698950996093
      },
      "e-646": {
          "id": "e-646",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInLeft",
                  "autoStopEventId": "e-647"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "652ef3de492720dc6c813979|d6e66a05-3da3-98be-5bf1-54e1953b6b85",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "652ef3de492720dc6c813979|d6e66a05-3da3-98be-5bf1-54e1953b6b85",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "LEFT",
              "effectIn": true
          },
          "createdOn": 1698951008056
      },
      "e-648": {
          "id": "e-648",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-649"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "ba99a127-68af-1ac5-b83c-2500a2589225",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "ba99a127-68af-1ac5-b83c-2500a2589225",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1698952137588
      },
      "e-650": {
          "id": "e-650",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-651"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef3d1",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef3d1",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1699156781159
      },
      "e-652": {
          "id": "e-652",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-653"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef3d3",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef3d3",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1699156781159
      },
      "e-654": {
          "id": "e-654",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-6",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-655"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef3d8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef3d8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1699156781159
      },
      "e-656": {
          "id": "e-656",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-8",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-657"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef3da",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef3da",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1699156781159
      },
      "e-658": {
          "id": "e-658",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-10",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-659"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef3dc",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef3dc",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1699156781159
      },
      "e-660": {
          "id": "e-660",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-7",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-661"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef3e9",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef3e9",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1699156781159
      },
      "e-662": {
          "id": "e-662",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-663"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef400",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef400",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1699156781159
      },
      "e-664": {
          "id": "e-664",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-11",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-665"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef415",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef415",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1699156781159
      },
      "e-666": {
          "id": "e-666",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-667"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef431",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef431",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1699156781159
      },
      "e-667": {
          "id": "e-667",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-666"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef431",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6545c17e4f6aaae6af0064fe|6fce6e73-d11b-d984-c651-839ffccef431",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1699156781159
      },
      "e-681": {
          "id": "e-681",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-176",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6545c17e4f6aaae6af0064fe|5c95abf0-93a5-839b-8d6e-2433d5f6a846",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6545c17e4f6aaae6af0064fe|5c95abf0-93a5-839b-8d6e-2433d5f6a846",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-176-p",
              "smoothing": 50,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": false,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1697648185055
      },
      "e-747": {
          "id": "e-747",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-190",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6545c17e4f6aaae6af0064fe|5c95abf0-93a5-839b-8d6e-2433d5f6a7ed",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6545c17e4f6aaae6af0064fe|5c95abf0-93a5-839b-8d6e-2433d5f6a7ed",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-190-p",
              "smoothing": 80,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": false,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1691481701012
      },
      "e-801": {
          "id": "e-801",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-182",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6545c17e4f6aaae6af0064fe|5c95abf0-93a5-839b-8d6e-2433d5f6a7eb",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6545c17e4f6aaae6af0064fe|5c95abf0-93a5-839b-8d6e-2433d5f6a7eb",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-182-p",
              "smoothing": 90,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": false,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1691481417897
      },
      "e-807": {
          "id": "e-807",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-182",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6545c17e4f6aaae6af0064fe|79f9019c-61f3-734b-905c-fab8cf83b949",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6545c17e4f6aaae6af0064fe|79f9019c-61f3-734b-905c-fab8cf83b949",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-182-p",
              "smoothing": 90,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": false,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1699159165331
      },
      "e-808": {
          "id": "e-808",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-190",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6545c17e4f6aaae6af0064fe|8f3de9e3-cd40-39b0-e90b-c89adcfe895e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6545c17e4f6aaae6af0064fe|8f3de9e3-cd40-39b0-e90b-c89adcfe895e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-190-p",
              "smoothing": 80,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": false,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1699165157748
      },
      "e-809": {
          "id": "e-809",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-174",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-810"
              }
          },
          "mediaQueries": ["medium", "small", "tiny"],
          "target": {
              "id": "ba99a127-68af-1ac5-b83c-2500a258922b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "ba99a127-68af-1ac5-b83c-2500a258922b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1699177651747
      },
      "e-810": {
          "id": "e-810",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-175",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-809"
              }
          },
          "mediaQueries": ["medium", "small", "tiny"],
          "target": {
              "id": "ba99a127-68af-1ac5-b83c-2500a258922b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "ba99a127-68af-1ac5-b83c-2500a258922b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1699177651753
      },
      "e-811": {
          "id": "e-811",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "PAGE_START",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-191",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-812"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70",
              "appliesTo": "PAGE",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70",
              "appliesTo": "PAGE",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1699452713165
      },
      "e-813": {
          "id": "e-813",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-814"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|fbcff583-3a57-d8d7-d3a6-dbd3102de544",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|fbcff583-3a57-d8d7-d3a6-dbd3102de544",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 100,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1715280599832
      },
      "e-815": {
          "id": "e-815",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-816"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "67084f476eec80d4d6403158|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "67084f476eec80d4d6403158|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1728597832411
      },
      "e-816": {
          "id": "e-816",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-815"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "67084f476eec80d4d6403158|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "67084f476eec80d4d6403158|396dfae1-d18d-aefb-d7e2-e4c7e2ca0eee",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1728597832411
      },
      "e-817": {
          "id": "e-817",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-818"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "67084f476eec80d4d6403158|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "67084f476eec80d4d6403158|fb25143c-fed7-18e8-45d9-d52bb67096f2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1728597832411
      },
      "e-819": {
          "id": "e-819",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-820"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "67084f476eec80d4d6403158|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "67084f476eec80d4d6403158|fb25143c-fed7-18e8-45d9-d52bb67096f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1728597832411
      },
      "e-821": {
          "id": "e-821",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-822"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "67084f476eec80d4d6403158|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "67084f476eec80d4d6403158|fb25143c-fed7-18e8-45d9-d52bb6709721",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1728597832411
      },
      "e-823": {
          "id": "e-823",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_ACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-824"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|b6f5b3e6-a248-7768-454a-8c3d4d4181f9",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|b6f5b3e6-a248-7768-454a-8c3d4d4181f9",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1728598716766
      },
      "e-824": {
          "id": "e-824",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SLIDER_INACTIVE",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-13",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-823"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "651f53bd134194b356d99e70|b6f5b3e6-a248-7768-454a-8c3d4d4181f9",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "651f53bd134194b356d99e70|b6f5b3e6-a248-7768-454a-8c3d4d4181f9",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1728598716766
      },
      "e-825": {
          "id": "e-825",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-826"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "65244eca857ba04d4ea26059|32c45574-b256-25c0-1ef5-72b39e425bed",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "65244eca857ba04d4ea26059|32c45574-b256-25c0-1ef5-72b39e425bed",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 10,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1728638534371
      }
  },
  "actionLists": {
      "a-173": {
          "id": "a-173",
          "title": "hero_animation_new",
          "continuousParameterGroups": [{
              "id": "a-173-p",
              "type": "SCROLL_PROGRESS",
              "parameterLabel": "Scroll",
              "continuousActionGroups": [{
                  "keyframe": 2,
                  "actionItems": [{
                      "id": "a-173-n-2",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "id": "651f53bd134194b356d99e70|2b6f5687-ea63-3e59-3a24-a984c4296761"
                          },
                          "yValue": 0,
                          "xUnit": "PX",
                          "yUnit": "px",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-173-n",
                      "actionTypeId": "STYLE_SIZE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "id": "651f53bd134194b356d99e70|7fa95951-78b5-43ee-426f-a3377c0c03aa"
                          },
                          "widthValue": 400,
                          "widthUnit": "px",
                          "heightUnit": "PX",
                          "locked": false
                      }
                  }]
              }, {
                  "keyframe": 5,
                  "actionItems": [{
                      "id": "a-173-n-3",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "id": "651f53bd134194b356d99e70|9dae0702-5554-7187-a863-1ef5875702c1"
                          },
                          "xValue": 0,
                          "yValue": 0,
                          "xUnit": "rem",
                          "yUnit": "px",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-173-n-6",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "id": "651f53bd134194b356d99e70|6eedc8b1-0da3-0021-005a-0d96e78e00de"
                          },
                          "value": 1,
                          "unit": ""
                      }
                  }, {
                      "id": "a-173-n-5",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "id": "651f53bd134194b356d99e70|ba4c338e-8cf5-d40f-e382-86bab38334b3"
                          },
                          "xValue": null,
                          "yValue": 0,
                          "xUnit": "rem",
                          "yUnit": "px",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-173-n-15",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "id": "651f53bd134194b356d99e70|0b281a55-612e-8af7-f354-29ce3473f451"
                          },
                          "yValue": 0,
                          "xUnit": "PX",
                          "yUnit": "%",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-173-n-17",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "id": "651f53bd134194b356d99e70|b7b7aed0-31e6-b3cd-a1fa-194b2dc0ffd4"
                          },
                          "xValue": 0,
                          "xUnit": "%",
                          "yUnit": "PX",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-173-n-19",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "id": "651f53bd134194b356d99e70|00f3c465-e455-8aba-8b5c-39cdd4403be8"
                          },
                          "xValue": 0,
                          "xUnit": "%",
                          "yUnit": "PX",
                          "zUnit": "PX"
                      }
                  }]
              }, {
                  "keyframe": 45,
                  "actionItems": [{
                      "id": "a-173-n-8",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "id": "651f53bd134194b356d99e70|2b6f5687-ea63-3e59-3a24-a984c4296761"
                          },
                          "yValue": -45,
                          "xUnit": "PX",
                          "yUnit": "px",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-173-n-7",
                      "actionTypeId": "STYLE_SIZE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "id": "651f53bd134194b356d99e70|7fa95951-78b5-43ee-426f-a3377c0c03aa"
                          },
                          "widthValue": 112,
                          "widthUnit": "px",
                          "heightUnit": "PX",
                          "locked": false
                      }
                  }]
              }, {
                  "keyframe": 60,
                  "actionItems": [{
                      "id": "a-173-n-9",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "id": "651f53bd134194b356d99e70|9dae0702-5554-7187-a863-1ef5875702c1"
                          },
                          "xValue": 0,
                          "yValue": -200,
                          "xUnit": "rem",
                          "yUnit": "px",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-173-n-12",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "id": "651f53bd134194b356d99e70|6eedc8b1-0da3-0021-005a-0d96e78e00de"
                          },
                          "value": 0,
                          "unit": ""
                      }
                  }, {
                      "id": "a-173-n-11",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "id": "651f53bd134194b356d99e70|ba4c338e-8cf5-d40f-e382-86bab38334b3"
                          },
                          "xValue": null,
                          "yValue": -200,
                          "xUnit": "rem",
                          "yUnit": "px",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-173-n-16",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "id": "651f53bd134194b356d99e70|0b281a55-612e-8af7-f354-29ce3473f451"
                          },
                          "yValue": 101,
                          "xUnit": "PX",
                          "yUnit": "%",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-173-n-18",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "id": "651f53bd134194b356d99e70|b7b7aed0-31e6-b3cd-a1fa-194b2dc0ffd4"
                          },
                          "xValue": -101,
                          "xUnit": "%",
                          "yUnit": "PX",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-173-n-20",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "id": "651f53bd134194b356d99e70|00f3c465-e455-8aba-8b5c-39cdd4403be8"
                          },
                          "xValue": 101,
                          "xUnit": "%",
                          "yUnit": "PX",
                          "zUnit": "PX"
                      }
                  }]
              }]
          }],
          "createdOn": 1696283671379
      },
      "a-3": {
          "id": "a-3",
          "title": "menu show",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-3-n-7",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "selector": ".menu_wrapper",
                          "selectorGuids": ["24fe6c43-c753-7cf0-af88-04e21bde2c82"]
                      },
                      "value": "none"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-3-n-4",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "selector": ".menu",
                          "selectorGuids": ["4a9b8cd5-90ed-e0fa-38e3-9182c7ee83e7"]
                      },
                      "xValue": 100,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }, {
                  "id": "a-3-n-2",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "selector": ".menu_close",
                          "selectorGuids": ["9cc533a5-da8f-d1f1-68db-60df22be6137"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-3-n-6",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 10,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "selector": ".menu_wrapper",
                          "selectorGuids": ["24fe6c43-c753-7cf0-af88-04e21bde2c82"]
                      },
                      "value": "flex"
                  }
              }, {
                  "id": "a-3-n-8",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 10,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "selector": ".menu_switch_wrapper",
                          "selectorGuids": ["03e19344-3be1-06ed-9003-3c69d469bb61"]
                      },
                      "xValue": 0,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-3-n-3",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 300,
                      "target": {
                          "selector": ".menu_close",
                          "selectorGuids": ["9cc533a5-da8f-d1f1-68db-60df22be6137"]
                      },
                      "value": 1,
                      "unit": ""
                  }
              }, {
                  "id": "a-3-n-5",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 100,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".menu",
                          "selectorGuids": ["4a9b8cd5-90ed-e0fa-38e3-9182c7ee83e7"]
                      },
                      "xValue": 0,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1696543591007
      },
      "a-4": {
          "id": "a-4",
          "title": "menu out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-4-n",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "selector": ".menu_close",
                          "selectorGuids": ["9cc533a5-da8f-d1f1-68db-60df22be6137"]
                      },
                      "value": 1,
                      "unit": ""
                  }
              }, {
                  "id": "a-4-n-2",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "selector": ".menu",
                          "selectorGuids": ["4a9b8cd5-90ed-e0fa-38e3-9182c7ee83e7"]
                      },
                      "xValue": 0,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-4-n-4",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 300,
                      "target": {
                          "selector": ".menu_close",
                          "selectorGuids": ["9cc533a5-da8f-d1f1-68db-60df22be6137"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }, {
                  "id": "a-4-n-5",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".menu",
                          "selectorGuids": ["4a9b8cd5-90ed-e0fa-38e3-9182c7ee83e7"]
                      },
                      "xValue": 100,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-4-n-3",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "selector": ".menu_wrapper",
                          "selectorGuids": ["24fe6c43-c753-7cf0-af88-04e21bde2c82"]
                      },
                      "value": "none"
                  }
              }, {
                  "id": "a-4-n-6",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 100,
                      "target": {
                          "useEventTarget": "SIBLINGS",
                          "selector": ".menu_switch_wrapper",
                          "selectorGuids": ["03e19344-3be1-06ed-9003-3c69d469bb61"]
                      },
                      "xValue": 0,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }, {
                  "id": "a-4-n-7",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "selector": ".sub_menu_wrapper_1",
                          "selectorGuids": ["27d6e882-78a1-1537-8c80-d33a90edd608"]
                      },
                      "value": "none"
                  }
              }, {
                  "id": "a-4-n-8",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "selector": ".sub_menu_wrapper_2",
                          "selectorGuids": ["3290df87-9146-fca0-5469-557184e5fac6"]
                      },
                      "value": "none"
                  }
              }, {
                  "id": "a-4-n-9",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "selector": ".sub_menu_wrapper_3",
                          "selectorGuids": ["af6de194-77fd-de5c-4730-f620631a864e"]
                      },
                      "value": "none"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1696543591007
      },
      "a-6": {
          "id": "a-6",
          "title": "sub menu show 1",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-6-n",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "08f29e7d-9d75-a2e6-7653-8b45d7725ec8"
                      },
                      "value": "flex"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-6-n-2",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "PARENT",
                          "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eb5"
                      },
                      "xValue": 0,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-6-n-3",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "PARENT",
                          "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eb5"
                      },
                      "xValue": -50,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1696554818530
      },
      "a-7": {
          "id": "a-7",
          "title": "sub menu hide 1",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-7-n-2",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "PARENT",
                          "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eb5"
                      },
                      "xValue": -50,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-7-n-3",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "PARENT",
                          "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eb5"
                      },
                      "xValue": 0,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-7-n",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "08f29e7d-9d75-a2e6-7653-8b45d7725ec8"
                      },
                      "value": "none"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1696554818530
      },
      "a-8": {
          "id": "a-8",
          "title": "sub menu show 2",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-8-n",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "08f29e7d-9d75-a2e6-7653-8b45d7725edf"
                      },
                      "value": "flex"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-8-n-2",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "PARENT",
                          "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eb5"
                      },
                      "xValue": 0,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-8-n-3",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "PARENT",
                          "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eb5"
                      },
                      "xValue": -50,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1696554818530
      },
      "a-9": {
          "id": "a-9",
          "title": "sub menu hide 2",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-9-n",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "PARENT",
                          "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eb5"
                      },
                      "xValue": -50,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-9-n-2",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "PARENT",
                          "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eb5"
                      },
                      "xValue": 0,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-9-n-3",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "PARENT",
                          "selector": ".sub_menu_wrapper_2",
                          "selectorGuids": ["3290df87-9146-fca0-5469-557184e5fac6"]
                      },
                      "value": "none"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1696554818530
      },
      "a-11": {
          "id": "a-11",
          "title": "sub menu hide 3",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-11-n",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "PARENT",
                          "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eb5"
                      },
                      "xValue": -50,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-11-n-2",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "PARENT",
                          "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eb5"
                      },
                      "xValue": 0,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-11-n-3",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "PARENT",
                          "id": "08f29e7d-9d75-a2e6-7653-8b45d7725ef4"
                      },
                      "value": "none"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1696554818530
      },
      "a-10": {
          "id": "a-10",
          "title": "sub menu show 3",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-10-n",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "08f29e7d-9d75-a2e6-7653-8b45d7725ef4"
                      },
                      "value": "flex"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-10-n-2",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "PARENT",
                          "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eb5"
                      },
                      "xValue": 0,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-10-n-3",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "PARENT",
                          "id": "08f29e7d-9d75-a2e6-7653-8b45d7725eb5"
                      },
                      "xValue": -50,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1696554818530
      },
      "a-14": {
          "id": "a-14",
          "title": "hero_image_zoom_in",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-14-n",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".hero_slide_2_imge",
                          "selectorGuids": ["97a6615d-58f6-74a7-2f72-4b64271150d5"]
                      },
                      "xValue": 1,
                      "yValue": 1,
                      "locked": true
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-14-n-2",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".hero_slide_2_imge",
                          "selectorGuids": ["97a6615d-58f6-74a7-2f72-4b64271150d5"]
                      },
                      "xValue": 1.1,
                      "yValue": 1.1,
                      "locked": true
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1696660328244
      },
      "a-15": {
          "id": "a-15",
          "title": "hero_image_zoom_out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-15-n",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".hero_slide_2_imge",
                          "selectorGuids": ["97a6615d-58f6-74a7-2f72-4b64271150d5"]
                      },
                      "xValue": 1.1,
                      "yValue": 1.1,
                      "locked": true
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-15-n-2",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".hero_slide_2_imge",
                          "selectorGuids": ["97a6615d-58f6-74a7-2f72-4b64271150d5"]
                      },
                      "xValue": 1,
                      "yValue": 1,
                      "locked": true
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1696660328244
      },
      "a-12": {
          "id": "a-12",
          "title": "hero_slide_2_heading_show",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-12-n-5",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".slide_2_heading_wrapper",
                          "selectorGuids": ["d57038cc-8e8c-8851-aae5-f325fd0a5464"]
                      },
                      "value": "none"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-12-n-2",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".slide_2_heading_wrapper",
                          "selectorGuids": ["d57038cc-8e8c-8851-aae5-f325fd0a5464"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }, {
                  "id": "a-12-n",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".slide_2_heading_wrapper",
                          "selectorGuids": ["d57038cc-8e8c-8851-aae5-f325fd0a5464"]
                      },
                      "xValue": null,
                      "yValue": 0,
                      "xUnit": "px",
                      "yUnit": "rem",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-12-n-6",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".slide_2_heading_wrapper",
                          "selectorGuids": ["d57038cc-8e8c-8851-aae5-f325fd0a5464"]
                      },
                      "value": "flex"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-12-n-3",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".slide_2_heading_wrapper",
                          "selectorGuids": ["d57038cc-8e8c-8851-aae5-f325fd0a5464"]
                      },
                      "yValue": 3,
                      "xUnit": "PX",
                      "yUnit": "rem",
                      "zUnit": "PX"
                  }
              }, {
                  "id": "a-12-n-4",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 800,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".slide_2_heading_wrapper",
                          "selectorGuids": ["d57038cc-8e8c-8851-aae5-f325fd0a5464"]
                      },
                      "value": 1,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1696646332276
      },
      "a-13": {
          "id": "a-13",
          "title": "hero_slide_2_heading_hide",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-13-n-3",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".slide_2_heading_wrapper",
                          "selectorGuids": ["d57038cc-8e8c-8851-aae5-f325fd0a5464"]
                      },
                      "yValue": 3,
                      "xUnit": "PX",
                      "yUnit": "rem",
                      "zUnit": "PX"
                  }
              }, {
                  "id": "a-13-n-4",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 800,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".slide_2_heading_wrapper",
                          "selectorGuids": ["d57038cc-8e8c-8851-aae5-f325fd0a5464"]
                      },
                      "value": 1,
                      "unit": ""
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-13-n",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".slide_2_heading_wrapper",
                          "selectorGuids": ["d57038cc-8e8c-8851-aae5-f325fd0a5464"]
                      },
                      "xValue": null,
                      "yValue": 0,
                      "xUnit": "px",
                      "yUnit": "rem",
                      "zUnit": "PX"
                  }
              }, {
                  "id": "a-13-n-2",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".slide_2_heading_wrapper",
                          "selectorGuids": ["d57038cc-8e8c-8851-aae5-f325fd0a5464"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-13-n-5",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".slide_2_heading_wrapper",
                          "selectorGuids": ["d57038cc-8e8c-8851-aae5-f325fd0a5464"]
                      },
                      "value": "none"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1696646332276
      },
      "a-174": {
          "id": "a-174",
          "title": "wechat_qrcode show",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-174-n",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "5b6783b9-7901-893a-e9ae-92b4d3d25e58"
                      },
                      "value": "none"
                  }
              }, {
                  "id": "a-174-n-3",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "id": "5b6783b9-7901-893a-e9ae-92b4d3d25e58"
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-174-n-2",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "5b6783b9-7901-893a-e9ae-92b4d3d25e58"
                      },
                      "value": "block"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-174-n-4",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "id": "5b6783b9-7901-893a-e9ae-92b4d3d25e58"
                      },
                      "value": 1,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1698918937085
      },
      "a-175": {
          "id": "a-175",
          "title": "wechat_qrcode hide",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-175-n-2",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "id": "5b6783b9-7901-893a-e9ae-92b4d3d25e58"
                      },
                      "value": 1,
                      "unit": ""
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-175-n-4",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "id": "5b6783b9-7901-893a-e9ae-92b4d3d25e58"
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-175-n-3",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "5b6783b9-7901-893a-e9ae-92b4d3d25e58"
                      },
                      "value": "none"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1698918937085
      },
      "a-176": {
          "id": "a-176",
          "title": "Explore Image Parallax",
          "continuousParameterGroups": [{
              "id": "a-176-p",
              "type": "SCROLL_PROGRESS",
              "parameterLabel": "Scroll",
              "continuousActionGroups": [{
                  "keyframe": 0,
                  "actionItems": [{
                      "id": "a-176-n",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-explore",
                              "selectorGuids": ["d35f7943-11df-e979-2804-16292fb02ff7"]
                          },
                          "yValue": -8,
                          "xUnit": "PX",
                          "yUnit": "%",
                          "zUnit": "PX"
                      }
                  }]
              }, {
                  "keyframe": 100,
                  "actionItems": [{
                      "id": "a-176-n-3",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-explore",
                              "selectorGuids": ["d35f7943-11df-e979-2804-16292fb02ff7"]
                          },
                          "yValue": 8,
                          "xUnit": "PX",
                          "yUnit": "%",
                          "zUnit": "PX"
                      }
                  }]
              }]
          }],
          "createdOn": 1697648196857
      },
      "a-190": {
          "id": "a-190",
          "title": "Intro Section Fade In",
          "continuousParameterGroups": [{
              "id": "a-190-p",
              "type": "SCROLL_PROGRESS",
              "parameterLabel": "Scroll",
              "continuousActionGroups": [{
                  "keyframe": 15,
                  "actionItems": [{
                      "id": "a-190-n",
                      "actionTypeId": "STYLE_FILTER",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "SIBLINGS",
                              "selector": ".wrapper.is-hero-image",
                              "selectorGuids": ["d35f7943-11df-e979-2804-16292fb02ff9", "d35f7943-11df-e979-2804-16292fb0303f"]
                          },
                          "filters": [{
                              "type": "brightness",
                              "filterId": "0797",
                              "value": 100,
                              "unit": "%"
                          }]
                      }
                  }]
              }, {
                  "keyframe": 45,
                  "actionItems": [{
                      "id": "a-190-n-2",
                      "actionTypeId": "STYLE_FILTER",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "SIBLINGS",
                              "selector": ".wrapper.is-hero-image",
                              "selectorGuids": ["d35f7943-11df-e979-2804-16292fb02ff9", "d35f7943-11df-e979-2804-16292fb0303f"]
                          },
                          "filters": [{
                              "type": "brightness",
                              "filterId": "0797",
                              "value": 10,
                              "unit": "%"
                          }]
                      }
                  }]
              }]
          }],
          "createdOn": 1691481705775
      },
      "a-182": {
          "id": "a-182",
          "title": "Hero Image Fade In",
          "continuousParameterGroups": [{
              "id": "a-182-p",
              "type": "SCROLL_PROGRESS",
              "parameterLabel": "Scroll",
              "continuousActionGroups": [{
                  "keyframe": 5,
                  "actionItems": [{
                      "id": "a-182-n",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-hero",
                              "selectorGuids": ["d35f7943-11df-e979-2804-16292fb03002"]
                          },
                          "yValue": 10,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-182-n-3",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".text_wrapper.mayin",
                              "selectorGuids": ["d3f3ff53-34d4-208d-891b-33fc6bda1c6c", "c73a4758-112b-3031-de38-6df7487e6f63"]
                          },
                          "yValue": 10,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }]
              }, {
                  "keyframe": 60,
                  "actionItems": [{
                      "id": "a-182-n-2",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-hero",
                              "selectorGuids": ["d35f7943-11df-e979-2804-16292fb03002"]
                          },
                          "yValue": -5,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-182-n-4",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".text_wrapper.mayin",
                              "selectorGuids": ["d3f3ff53-34d4-208d-891b-33fc6bda1c6c", "c73a4758-112b-3031-de38-6df7487e6f63"]
                          },
                          "yValue": 0,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }]
              }]
          }],
          "createdOn": 1691481537550
      },
      "a-191": {
          "id": "a-191",
          "title": "preload_animation",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-191-n",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "651f53bd134194b356d99e70|20b5ae91-8342-338f-2650-0f321b2e6e97"
                      },
                      "value": "flex"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-191-n-2",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 800,
                      "easing": "ease",
                      "duration": 800,
                      "target": {
                          "id": "651f53bd134194b356d99e70|5be2def6-958b-1d2d-5aae-b0c9484f6afe"
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-191-n-3",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "inQuint",
                      "duration": 500,
                      "target": {
                          "id": "651f53bd134194b356d99e70|d7508721-8e73-5f09-8e33-fe218f28ab82"
                      },
                      "xValue": -101,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }, {
                  "id": "a-191-n-4",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "inQuint",
                      "duration": 500,
                      "target": {
                          "id": "651f53bd134194b356d99e70|77c63292-9d3a-2f36-4aa5-c9f0117391a6"
                      },
                      "xValue": 101,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-191-n-5",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "651f53bd134194b356d99e70|20b5ae91-8342-338f-2650-0f321b2e6e97"
                      },
                      "value": "none"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1699450751688
      },
      "slideInBottom": {
          "id": "slideInBottom",
          "useFirstGroupAsInitialState": true,
          "actionItemGroups": [{
              "actionItems": [{
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "duration": 0,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 0
                  }
              }]
          }, {
              "actionItems": [{
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "duration": 0,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "xValue": 0,
                      "yValue": 100,
                      "xUnit": "PX",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuart",
                      "duration": 1000,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "xValue": 0,
                      "yValue": 0,
                      "xUnit": "PX",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }, {
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "outQuart",
                      "duration": 1000,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 1
                  }
              }]
          }]
      },
      "slideInRight": {
          "id": "slideInRight",
          "useFirstGroupAsInitialState": true,
          "actionItemGroups": [{
              "actionItems": [{
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "duration": 0,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 0
                  }
              }]
          }, {
              "actionItems": [{
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "duration": 0,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "xValue": 100,
                      "yValue": 0,
                      "xUnit": "PX",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "outQuart",
                      "duration": 1000,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 1
                  }
              }, {
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuart",
                      "duration": 1000,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "xValue": 0,
                      "yValue": 0,
                      "xUnit": "PX",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }]
      },
      "slideInLeft": {
          "id": "slideInLeft",
          "useFirstGroupAsInitialState": true,
          "actionItemGroups": [{
              "actionItems": [{
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "duration": 0,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 0
                  }
              }]
          }, {
              "actionItems": [{
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "duration": 0,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "xValue": -100,
                      "yValue": 0,
                      "xUnit": "PX",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "outQuart",
                      "duration": 1000,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 1
                  }
              }, {
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuart",
                      "duration": 1000,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "xValue": 0,
                      "yValue": 0,
                      "xUnit": "PX",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }]
      }
  },
  "site": {
      "mediaQueries": [{
          "key": "main",
          "min": 992,
          "max": 10000
      }, {
          "key": "medium",
          "min": 768,
          "max": 991
      }, {
          "key": "small",
          "min": 480,
          "max": 767
      }, {
          "key": "tiny",
          "min": 0,
          "max": 479
      }]
  }
});
