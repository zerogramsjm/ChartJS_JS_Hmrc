! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Tabby = e() : t.Tabby = e()
}(window, function() {
    return function(t) {
        var e = {};

        function o(n) {
            if (e[n]) return e[n].exports;
            var i = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(i.exports, i, i.exports, o), i.l = !0, i.exports
        }
        return o.m = t, o.c = e, o.d = function(t, e, n) {
            o.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }, o.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, o.t = function(t, e) {
            if (1 & e && (t = o(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var i in t) o.d(n, i, function(e) {
                    return t[e]
                }.bind(null, i));
            return n
        }, o.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return o.d(e, "a", e), e
        }, o.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, o.p = "", o(o.s = 0)
    }([function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var n = e[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, o, n) {
                return o && t(e.prototype, o), n && t(e, n), e
            }
        }();
        var i = function(t) {
                var e = [t],
                    o = t.nextElementSibling;
                if (!o) return e;
                for (; o;) e.push(o), o = o.nextElementSibling;
                return e
            },
            r = "data-tabby-active",
            s = "data-tabby-bar",
            a = "data-tabby-content";
        e.version = "2.0.2", e.Component = function() {
            function t(e, o) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.container = e, this.hooks = o, this.container ? (this.firstBar = this.container.querySelector("[" + s + "]"), this.firstContent = this.container.querySelector("[" + a + "]"), this.activeBar = this.container.querySelector("[" + s + "][" + r + "]"), this.activeContent = this.container.querySelector("[" + a + "][" + r + "]"), this.barItems = this.collectBarItems(), this.contentItems = this.collectContentItems(), this.hooks && this.hooks.onConstruct && this.hooks.onConstruct(this), this.initTabs(this.container)) : console.error("Container is not given!")
            }
            return n(t, [{
                key: "collectBarItems",
                value: function() {
                    return i(this.firstBar)
                }
            }, {
                key: "collectContentItems",
                value: function() {
                    return i(this.firstContent)
                }
            }, {
                key: "killActiveTab",
                value: function() {
                    this.hooks && this.hooks.onBeforeKilltabs && this.hooks.onBeforeKilltabs(this, this.activeBar, this.activeContent), this.activeBar && (this.activeBar.removeAttribute(r), this.activeBar = null), this.activeContent && (this.activeContent.removeAttribute(r), this.activeContent = null), this.hooks && this.hooks.onAfterKilltabs && this.hooks.onAfterKilltabs(this, this.activeBar, this.activeContent)
                }
            }, {
                key: "showTab",
                value: function(t) {
                    this.activeBar = t, this.activeContent = this.container.querySelector("[" + a + '="' + this.activeBar.getAttribute(s) + '"]'), this.hooks && this.hooks.onBeforeShowtabs && this.hooks.onBeforeShowtabs(this, this.activeBar, this.activeContent), this.activeBar.setAttribute(r, ""), this.activeContent.setAttribute(r, ""), this.hooks && this.hooks.onAfterShowtabs && this.hooks.onAfterShowtabs(this, this.activeBar, this.activeContent)
                }
            }, {
                key: "initTabs",
                value: function() {
                    var t = this;
                    this.hooks && this.hooks.onBeforeInit && this.hooks.onBeforeInit(this), this.barItems.forEach(function(e) {
                        e.addEventListener("click", function() {
                            e !== t.activeBar && (t.killActiveTab(), t.showTab(e))
                        })
                    }), this.hooks && this.hooks.onAfterInit && this.hooks.onAfterInit(this)
                }
            }]), t
        }()
    }])
});