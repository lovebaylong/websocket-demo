!function(t, e) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd)
        define([], e);
    else {
        var n = e();
        for (var r in n)
            ("object" == typeof exports ? exports : t)[r] = n[r]
    }
}(window, function() {
    return function(t) {
        var e = {};
        function n(r) {
            if (e[r])
                return e[r].exports;
            var i = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, n),
            i.l = !0,
            i.exports
        }
        return n.m = t,
        n.c = e,
        n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }
        ,
        n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(t, e) {
            if (1 & e && (t = n(t)),
            8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var r = Object.create(null);
            if (n.r(r),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }),
            2 & e && "string" != typeof t)
                for (var i in t)
                    n.d(r, i, function(e) {
                        return t[e]
                    }
                    .bind(null, i));
            return r
        }
        ,
        n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t["default"]
            }
            : function() {
                return t
            }
            ;
            return n.d(e, "a", e),
            e
        }
        ,
        n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        n.p = "",
        n(n.s = 134)
    }([function(t, e, n) {
        var r = n(1)
          , i = n(8)
          , o = n(17)
          , s = n(14)
          , a = n(20)
          , c = function(t, e, n) {
            var u, l, p, h, f = t & c.F, d = t & c.G, g = t & c.S, m = t & c.P, y = t & c.B, v = d ? r : g ? r[e] || (r[e] = {}) : (r[e] || {}).prototype, b = d ? i : i[e] || (i[e] = {}), _ = b.prototype || (b.prototype = {});
            for (u in d && (n = e),
            n)
                p = ((l = !f && v && void 0 !== v[u]) ? v : n)[u],
                h = y && l ? a(p, r) : m && "function" == typeof p ? a(Function.call, p) : p,
                v && s(v, u, p, t & c.U),
                b[u] != p && o(b, u, h),
                m && _[u] != p && (_[u] = p)
        };
        r.core = i,
        c.F = 1,
        c.G = 2,
        c.S = 4,
        c.P = 8,
        c.B = 16,
        c.W = 32,
        c.U = 64,
        c.R = 128,
        t.exports = c
    }
    , function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }
    , function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }
    , function(t, e, n) {
        var r = n(4);
        t.exports = function(t) {
            if (!r(t))
                throw TypeError(t + " is not an object!");
            return t
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }
    , function(t, e, n) {
        var r = n(54)("wks")
          , i = n(33)
          , o = n(1).Symbol
          , s = "function" == typeof o;
        (t.exports = function(t) {
            return r[t] || (r[t] = s && o[t] || (s ? o : i)("Symbol." + t))
        }
        ).store = r
    }
    , function(t, e, n) {
        var r = n(22)
          , i = Math.min;
        t.exports = function(t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0
        }
    }
    , function(t, e, n) {
        "use strict";
        var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        function o(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        for (var s = n(95), a = n(53), c = n(323), u = {}, l = "Boolean Number String Function Array Date RegExp Object".split(" "), p = 0; p < l.length; p++) {
            var h = l[p];
            u["[object " + h + "]"] = h.toLowerCase()
        }
        var f = String.prototype.trim
          , d = Object.prototype.toString
          , g = (o(r = {
            nativeIsArray: Array.isArray,
            DEFUALT_APPID: "99999999",
            appId: "99999999",
            _appId: "",
            _appVersion: "",
            _language: "",
            _syscode: "",
            _xmppVersion: a.xmppVersion,
            _version: a.sdkVersion,
            _ubtMetric: a.enableUBTMetric,
            _myuid: "",
            _conversationType: "",
            _partnerJid: "",
            _memoryStore: {
                listenerList: []
            },
            _openIM: !1,
            _disableUBT: !1,
            _timeout: 8e3,
            _socketUrl: "",
            _metricKey: "103546",
            _imVersion: "IMV2",
            network: {
                value: "external",
                forceSetting: !1
            },
            isInIBUSite: function() {
                return location.href.indexOf(".trip.com") > 0 || location.href.indexOf(".tripcorp.com") > 0
            },
            checkParam: function(t, e, n) {},
            checkObjectParam: function(t, e, n, r) {
                if (t)
                    for (var i = 0, o = e.length; i < o; i++)
                        if (new RegExp(this.getType(t[e[i]])).test(n[i].type)) {
                            if (n[i].range && this.inArray(t[e[i]], n[i].range) < 0)
                                throw new Error("The  parameter " + e[i] + " was wrong type " + this.getType(t[e[i]]) + " [" + n[i] + "] -> position:" + r);
                            if ("number" == this.getType(t[e[i]]) && (n[i].min || n[i].max)) {
                                if (n[i].min && !(t[e[i]] >= n[i].min))
                                    throw new Error("The  parameter " + e[i] + " must be greater than or equal to " + n[i].min + ", -> position:" + r);
                                if (n[i].max && !(t[e[i]] <= n[i].max))
                                    throw new Error("The  parameter " + e[i] + " must be less than or equal to " + n[i].max + ", -> position:" + r)
                            }
                        } else {
                            if ("undefined" != this.getType(t[e[i]]) || !n[i].default1)
                                throw new Error("The  parameter " + e[i] + " was wrong type " + this.getType(t[e[i]]) + " [" + n[i] + "] -> position:" + r);
                            t[e[i]] = n[i].default1
                        }
            },
            getType: function(t) {
                var e = Object.prototype.toString.call(t).toLowerCase();
                return e.slice(8, e.length - 1)
            },
            checkMessageObject: function(t) {
                if (!t)
                    throw new Error("message can't be empty,postion -> checkMessageObject");
                if (t instanceof s.TextMessage)
                    this.checkNullOrEmpty(t.content, "content");
                else if (t instanceof s.ImageMessage) {
                    if (this.checkNullOrEmpty(t.imageUrl, "imageUrl"),
                    this.checkNullOrEmpty(t.thumbUrl, "thumbUrl"),
                    this.checkNullOrEmpty(t.width, "width"),
                    this.checkNullOrEmpty(t.height, "height"),
                    t.width <= 0)
                        throw new Error("width can't be empty,postion -> checkMessageObject");
                    if (t.height <= 0)
                        throw new Error("height can't be empty,postion -> checkMessageObject")
                } else
                    t instanceof s.CardMessage ? (this.checkNullOrEmpty(t.avatar, "avatar"),
                    this.checkNullOrEmpty(t.title, "title"),
                    this.checkNullOrEmpty(t.desc, "desc"),
                    this.checkNullOrEmpty(t.linkUrl, "linkUrl")) : t instanceof s.VideoMessage ? (this.checkNullOrEmpty(t.filename, "filename"),
                    this.checkNullOrEmpty(t.cover, "cover"),
                    this.checkNullOrEmpty(t.url, "url"),
                    this.checkNullOrEmpty(t.duration, "duration"),
                    this.checkNullOrEmpty(t.size, "size")) : t instanceof s.AudioMessage ? (this.checkNullOrEmpty(t.url, "url"),
                    this.checkNullOrEmpty(t.duration, "duration")) : t instanceof s.FileMessage ? (this.checkNullOrEmpty(t.filename, "filename"),
                    this.checkNullOrEmpty(t.url, "url"),
                    this.checkNullOrEmpty(t.size, "size")) : t instanceof s.LocationMessage ? (this.checkNullOrEmpty(t.lng, "lng"),
                    this.checkNullOrEmpty(t.lat, "cover"),
                    this.checkNullOrEmpty(t.thumburl, "thumburl")) : t instanceof s.CustomContentMessage ? (this.checkNullOrEmpty(t.actionCode, "actionCode"),
                    this.checkNullOrEmpty(t.title, "title")) : t instanceof s.EmoticonMessage ? this.checkNullOrEmpty(t.code, "code") : t instanceof s.AtMessage ? (this.checkNullOrEmpty(t.body, "body"),
                    this.checkNullOrEmpty(t.atUid, "atUid"),
                    this.checkNullOrEmpty(t.atFromNickname, "atFromNickName")) : t instanceof s.TemplateMessage ? (this.checkNullOrEmpty(t.code, "code"),
                    this.checkNullOrEmpty(t.values, "values")) : t instanceof s.SystemMessage && (this.checkNullOrEmpty(t.messageType, "messageType"),
                    "1007" == t.messageType && (this.checkNullOrEmpty(t.isPresent, "isPresent"),
                    this.checkNullOrEmpty(t.actionCode, "actionCode"),
                    this.checkNullOrEmpty(t.title, "title")))
            },
            checkNullOrEmpty: function(t, e) {
                if (this.isNullOrEmpty(t))
                    throw new Error(e + " can't be empty,postion -> checkMessageObject")
            },
            isNullOrEmpty: function(t) {
                var e = !1;
                return null == t || void 0 == t || void 0 === t || "" === t ? e = !0 : "string" == typeof t ? "" == (t = this.trim(t)) && (e = !0) : e = !1,
                e
            },
            isHybrid: !!window.LizardLocalroute,
            isInCtripApp: !(!navigator.userAgent.match(/ctripwireless/i) || "file:" == window.location.protocol),
            isPreProduction: function() {
                return window.localStorage.getItem("isPreProduction")
            },
            createGuid: function() {
                function t() {
                    return (65536 * (1 + Math.random()) | 0).toString(16).substring(4)
                }
                return function() {
                    for (var e = "", n = 1; n <= 20; n++)
                        e += t(),
                        8 !== n && 12 !== n && 16 !== n && 20 !== n || (e += "-");
                    var r = parseInt(8 * Math.random())
                      , i = (new Date).getTime() + "";
                    e += i.slice(0, r);
                    for (var o = 0; o < 4; o++)
                        e += t();
                    return e + i.slice(r + 5, 13)
                }()
            },
            getEnvCode: function() {
                if (this.isHybrid) {
                    var t = parseInt(this.isPreProduction());
                    return isNaN(t) || [0, 1, 2, 3].indexOf(t) < 0 ? 4 : t
                }
                var e = location.host;
                return e.match(/^m\.ctrip\.com/i) ? 4 : e.match(/\.uat\.qa/i) ? 2 : e.match(/(\.fws|\.fat|\.lpt|localhost|^10.|172\.16|127\.0)/i) ? 0 : 4
            },
            getWebSocketHost: function() {
                var t;
                switch (this.getEnvCode()) {
                case 0:
                    t = a.websocketHost.fat;
                    break;
                case 2:
                    t = a.websocketHost.uat;
                    break;
                case 4:
                    t = this.network.forceSetting && "internal" == this.network.value && a.websocketHost.corp_prd ? a.websocketHost.corp_prd : a.websocketHost.prd;
                    break;
                default:
                    t = a.websocketHost.prd
                }
                return t
            },
            getWebSocketServiceName: function() {
                var t;
                switch (this.getEnvCode()) {
                case 0:
                    t = a.websocketServiceName.fat;
                    break;
                case 2:
                    t = a.websocketServiceName.uat;
                    break;
                case 4:
                    t = this.network.forceSetting && "internal" == this.network.value && a.websocketServiceName.corp_prd ? a.websocketServiceName.corp_prd : a.websocketServiceName.prd;
                    break;
                default:
                    t = a.websocketServiceName.prd
                }
                return t
            },
            getWebSocketPort: function(t) {
                var e;
                switch (this.getEnvCode()) {
                case 0:
                    e = "https" === t ? a.websocketPort.https.fat : a.websocketPort.http.fat;
                    break;
                case 2:
                    e = "https" === t ? a.websocketPort.https.uat : a.websocketPort.http.uat;
                    break;
                case 4:
                    e = this.network.forceSetting && "internal" == this.network.value && a.websocketPort.https.corp_prd ? a.websocketPort.http.corp_prd : "https" === t ? a.websocketPort.https.prd : a.websocketPort.http.prd;
                    break;
                default:
                    e = "https" === t ? a.websocketPort.https.prd : a.websocketPort.http.prd
                }
                return e
            },
            appVersion: function() {
                return "1.1.0"
            },
            setIMVersion: function(t) {
                this._imVersion = t
            },
            getIMVersion: function() {
                return this._imVersion
            },
            setAppId: function(t) {
                this.appId = t,
                this._appId = t && "-" + t || ""
            },
            getAppId: function() {
                return this.appId
            },
            setAppVersion: function(t) {
                this._appVersion = t && "-" + t || ""
            },
            getAppVersion: function() {
                return this._appVersion ? this._appVersion.substr(1) : ""
            },
            setUBTDisable: function(t) {
                this._disableUBT = t
            },
            isUBTDisable: function() {
                return this._disableUBT
            },
            resource: function() {
                return "WEBSOCKET" + this._appId + this._appVersion + "_" + this._xmppVersion
            },
            uidToJid: function(t) {
                return t ? t + "@" + this.getWebSocketServiceName() + "/" + this.resource() : null
            },
            jidToUid: function(t) {
                return t.indexOf("@") < 0 ? null : t.split("@")[0]
            },
            jsonToString: function(t) {
                return JSON.stringify(t, function(t, e) {
                    return null === e ? void 0 : e
                })
            },
            isUrl: function(t) {
                return /^http(s)?:\/\/[A-Za-z0-9\-]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\:+!]*([^<>])*$/.test(t)
            },
            parseUrl: function(t) {
                var e = /^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/.exec(t || "") || [];
                return {
                    href: e[0] || "",
                    hrefNoHash: e[1] || "",
                    hrefNoSearch: e[2] || "",
                    domain: e[3] || "",
                    protocol: e[4] || "",
                    doubleSlash: e[5] || "",
                    authority: e[6] || "",
                    username: e[8] || "",
                    password: e[9] || "",
                    host: e[10] || "",
                    hostname: e[11] || "",
                    port: e[12] || "",
                    pathname: e[13] || "",
                    directory: e[14] || "",
                    filename: e[15] || "",
                    search: e[16] || "",
                    hash: e[17] || ""
                }
            },
            getGuid: function() {
                var t = this.getCookie("GUID")
                  , e = window.localStorage;
                if (t)
                    try {
                        e.setItem("GUID", t)
                    } catch (t) {
                        console.log(t)
                    }
                else
                    t = e.getItem("GUID") || "";
                return t
            },
            getCookie: function(t) {
                var e = document.cookie
                  , n = "";
                if (e)
                    for (var r, i, o = e.split("; "), s = 0; s < o.length; s++)
                        i = (r = o[s]).indexOf("="),
                        r.substr(0, i) == t && (n = r.substr(i + 1));
                return n
            },
            setCookie: function(t, e, n, r, i, o) {
                e = this.isObject(e) ? JSON.stringify(e) : e,
                document.cookie = t + "=" + escape(e) + (n ? "; expires=" + n : "") + (r ? "; path=" + r : "") + (i ? "; domain=" + i : "") + (o ? "; secure" : "")
            },
            isObject: function(t) {
                var e = void 0 === t ? "undefined" : i(t);
                return "function" === e || "object" === e && !!t
            },
            getObjLength: function(t) {
                var e = ""
                  , n = 0;
                try {
                    "string" == typeof t && (e = t),
                    "object" == (void 0 === t ? "undefined" : i(t)) && (e = JSON.stringify(t));
                    for (var r = 0, o = e.length, s = -1; r < o; r++)
                        n += (s = e.charCodeAt(r)) >= 0 && s <= 128 ? 1 : 2
                } catch (t) {
                    console.log("获取对象length失败")
                }
                return n
            },
            protocolFilter: function(t, e) {
                if (t) {
                    if ("object" == (void 0 === t ? "undefined" : i(t)))
                        try {
                            t = JSON.stringify(t)
                        } catch (e) {
                            return console.log(e),
                            t
                        }
                    var n;
                    window.location && window.location.protocol && (n = "https:" == window.location.protocol ? "https" : "http"),
                    "string" == typeof e && (e = [e]);
                    var r = [];
                    if ((e = e || []) && e.length)
                        for (var o = 0; o < e.length; o++)
                            r.push(new RegExp("(['\"])\\s*(http:)*//" + e[o],"gi"));
                    else
                        r.push(new RegExp("(['\"])\\s*(http:)*//","gi"));
                    for (var s = 0; s < r.length; s++)
                        t = t.replace(r[s], a);
                    return t
                }
                function a(t, e, r) {
                    return r ? t.replace(r, n + ":") : t.replace("//", n + "://")
                }
            },
            utilObject: {
                set: function(t, e, n) {
                    if (!e)
                        return null;
                    var r = e.split(".");
                    t = t || {};
                    for (var i = 0, o = r.length, s = Math.max(o - 1, 0); i < o; i++)
                        i < s ? t = t[r[i]] = t[r[i]] || {} : t[r[i]] = n;
                    return t
                },
                get: function(t, e) {
                    if (!t || !e)
                        return null;
                    var n = e.split(".");
                    t = t || {};
                    var r = 0
                      , i = n.length;
                    for (Math.max(i - 1, 0); r < i; r++)
                        if (null === (t = t[n[r]]) || void 0 === t)
                            return null;
                    return t
                }
            },
            isArray: Array.isArray || function(t) {
                return "[object Array]" === toString.call(t)
            }
            ,
            ubtTrace: function(t, e) {
                try {
                    var n = function(t) {
                        return t.length > 2048 && (t = t.substring(0, 2048)),
                        t
                    };
                    void 0 === window.__bfi && (window.__bfi = []),
                    "object" === i(t.Params) && (t.Params = n(JSON.stringify(t.Params))),
                    "object" === i(t.Result) && (t.Result = n(JSON.stringify(t.Result)));
                    var r = "SDKType=" + this.resource() + (void 0 !== t.Action ? "&Action=" + t.Action : "") + (void 0 !== t.Params ? "&Params=" + t.Params : "") + (void 0 !== t.Result ? "&Result=" + t.Result : "") + (void 0 !== t.Status ? "&Status=" + t.Status : "") + (void 0 !== t.Condition ? "&Condition=" + t.Condition : "") + (void 0 !== t.NormalClosed ? "&NormalClosed=" + t.NormalClosed : "") + (void 0 !== t.Connected ? "&Connected=" + t.Connected : "") + (void 0 !== t.Network ? "&Network=" + t.Network : "") + (void 0 !== t.timeout ? "&timeout=" + t.timeout : "") + (void 0 !== t.BeginTime ? "&BeginTime=" + t.BeginTime : "") + (void 0 !== t.TotalTime ? "&TotalTime=" + t.TotalTime : "") + (void 0 !== t.pollType ? "&pollType=" + t.pollType : "") + "&URL=" + window.location.href + "&SDKVersion=" + this._version + "&SocketUrl=" + this._socketUrl
                      , o = t && t.key || "o_im_online_sdk";
                    e || this._disableUBT || window.__bfi.push(["_devTrace", o, n(r), t.callback ? t.callback : ""]);
                    var s = {
                        content: r,
                        fileName: "imSdk"
                    };
                    void 0 !== window[Symbol["for"]("writeLog")] && window[Symbol["for"]("writeLog")](s)
                } catch (t) {}
            },
            ubtMetric: function(t) {
                if (this._ubtMetric) {
                    void 0 === window.__bfi && (window.__bfi = []);
                    try {
                        __bfi.push(["_trackMetric", {
                            name: this._metricKey,
                            value: t.value,
                            tag: {
                                action: t.action || "",
                                result: t.result || "",
                                url: window.location.href,
                                sdkversion: this._version
                            }
                        }])
                    } catch (t) {}
                }
            },
            isDebug: function() {
                return -1 != window.location.search.indexOf("debug=true")
            },
            param: function(t) {
                var e = "";
                for (var n in t) {
                    "" !== e && (e += "&");
                    var r = t[n];
                    e += encodeURIComponent(n) + "=" + encodeURIComponent(r)
                }
                return e
            },
            type: function(t) {
                return null == t ? String(t) : u[d.call(t)] || "object"
            },
            guid: 1,
            proxy: function(t, e) {
                var n, r, i, o = Array.prototype.slice;
                if ("string" == typeof e && (n = t[e],
                e = t,
                t = n),
                this.isFunction(t))
                    return r = o.call(arguments, 2),
                    (i = function() {
                        return t.apply(e, r.concat(o.call(arguments)))
                    }
                    ).guid = t.guid = t.guid || this.guid++,
                    i
            },
            isFunction: function(t) {
                return "function" === this.type(t)
            }
        }, "isArray", Array.isArray || function(t) {
            return "array" === this.type(t)
        }
        ),
        o(r, "type", function(t) {
            return null == t ? String(t) : u[d.call(t)] || "object"
        }),
        o(r, "each", function(t, e, n) {
            var r, i = 0, o = t.length, s = void 0 === o || this.isFunction(t);
            if (n)
                if (s) {
                    for (r in t)
                        if (!1 === e.apply(t[r], n))
                            break
                } else
                    for (; i < o && !1 !== e.apply(t[i++], n); )
                        ;
            else if (s) {
                for (r in t)
                    if (!1 === e.call(t[r], r, t[r]))
                        break
            } else
                for (; i < o && !1 !== e.call(t[i], i, t[i++]); )
                    ;
            return t
        }),
        o(r, "trim", f && !f.call("\ufeff ") ? function(t) {
            return null == t ? "" : f.call(t)
        }
        : function(t) {
            return null == t ? "" : (t + "").replace(rtrim, "")
        }
        ),
        o(r, "inArray", function(t, e, n) {
            var r, i = Array.prototype.indexOf;
            if (e) {
                if (i)
                    return i.call(e, t, n);
                for (r = e.length,
                n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                    if (n in e && e[n] === t)
                        return n
            }
            return -1
        }),
        o(r, "map", function(t, e, n) {
            var r, i, o = [], s = 0, a = t.length;
            if (void 0 !== a && "number" == typeof a && (a > 0 && t[0] && t[a - 1] || 0 === a || this.isArray(t)))
                for (; s < a; s++)
                    null != (r = e(t[s], s, n)) && (o[o.length] = r);
            else
                for (i in t)
                    null != (r = e(t[i], i, n)) && (o[o.length] = r);
            return o.concat.apply([], o)
        }),
        o(r, "extend", function() {
            var t, e, n, r, o, s, a = arguments[0] || {}, c = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof a && (l = a,
            a = arguments[1] || {},
            c = 2),
            "object" === (void 0 === a ? "undefined" : i(a)) || this.isFunction(a) || (a = {}),
            u === c && (a = this,
            --c); c < u; c++)
                if (null != (t = arguments[c]))
                    for (e in t)
                        n = a[e],
                        a !== (r = t[e]) && (l && r && (this.isPlainObject(r) || (o = this.isArray(r))) ? (o ? (o = !1,
                        s = n && this.isArray(n) ? n : []) : s = n && this.isPlainObject(n) ? n : {},
                        a[e] = this.extend(l, s, r)) : void 0 !== r && (a[e] = r));
            return a
        }),
        o(r, "isPlainObject", function(t) {
            if (!t || "object" !== this.type(t) || t.nodeType || this.isWindow(t))
                return !1;
            try {
                if (t.constructor && !core_hasOwn.call(t, "constructor") && !core_hasOwn.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (t) {
                return !1
            }
            var e;
            for (e in t)
                ;
            return void 0 === e || core_hasOwn.call(t, e)
        }),
        o(r, "isWindow", function(t) {
            return null != t && t == t.window
        }),
        o(r, "uuid", function() {
            for (var t = [], e = 0; e < 36; e++)
                t[e] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
            return t[14] = "4",
            t[19] = "0123456789abcdef".substr(3 & t[19] | 8, 1),
            t[8] = t[13] = t[18] = t[23] = "-",
            t.join("")
        }),
        o(r, "setSocketUrl", function(t) {
            this._socketUrl = t
        }),
        o(r, "setOpenIM", function(t) {
            this._openIM = t || !1
        }),
        o(r, "getOpenIM", function() {
            return this._openIM
        }),
        o(r, "setSysCode", function(t) {
            this._syscode = t
        }),
        o(r, "getSysCode", function() {
            return this._syscode
        }),
        o(r, "setLanguage", function(t) {
            this._language = t
        }),
        o(r, "getLanguage", function() {
            return this._language
        }),
        o(r, "setAuth", function(t) {
            this._token = t || null
        }),
        o(r, "getAuth", function() {
            return this._token
        }),
        o(r, "setTimeout", function(t) {
            this._timeout = t || 8e3
        }),
        o(r, "getTimeout", function() {
            return this._timeout
        }),
        o(r, "formatRoles", function(t, e, n) {
            return n
        }),
        o(r, "checkNetwork", function() {
            if (!g.network.forceSetting) {
                var t = new Image;
                t.onload = function() {
                    g.network.value = "internal",
                    g.ubtTrace({
                        Action: "checkNetwork",
                        Result: g.network.value
                    })
                }
                ,
                t.onerror = function() {
                    g.network.value = "external",
                    g.ubtTrace({
                        Action: "checkNetwork",
                        Result: g.network.value
                    })
                }
                ,
                t.src = "https://s.uat.qa.nt.ctripcorp.com/bf.gif?mt=" + +new Date
            }
        }),
        o(r, "confuseMessage", function(t) {
            if (!t)
                return "";
            if (t.length <= 4)
                return t;
            var e = "";
            e = t.substring(0, 4);
            for (var n = 0; n < t.length - 4; n++)
                e += "*";
            return e
        }),
        o(r, "md5Format", function(t) {
            var e = "";
            if (!t)
                return "";
            try {
                e = c(t).toLocaleLowerCase()
            } catch (t) {}
            return e
        }),
        r);
        t.exports = g
    }
    , function(t, e) {
        var n = t.exports = {
            version: "2.6.11"
        };
        "number" == typeof __e && (__e = n)
    }
    , function(t, e, n) {
        t.exports = !n(2)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }
    , function(t, e, n) {
        var r = n(3)
          , i = n(97)
          , o = n(30)
          , s = Object.defineProperty;
        e.f = n(9) ? Object.defineProperty : function(t, e, n) {
            if (r(t),
            e = o(e, !0),
            r(n),
            i)
                try {
                    return s(t, e, n)
                } catch (t) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported!");
            return "value"in n && (t[e] = n.value),
            t
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = function i(t) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, i),
            this.name = "baseclass"
        };
        r.getInstance = function(t) {
            return this._instance instanceof this ? this._instance : this._instance = new this(t)
        }
        ,
        t.exports = r
    }
    , function(t, e, n) {
        var r = n(28);
        t.exports = function(t) {
            return Object(r(t))
        }
    }
    , function(t, e, n) {
        "use strict";
        t.exports = {
            ConnectionStatus: {
                NOTCONNECTED: -1,
                CONNECTING: 0,
                CONNECTED: 1,
                DISCONNECTED: 2,
                NETWORK_UNAVAILABLE: 3,
                CURRENT_TOKEN_UNAVAILABLE: 4,
                TARGET_TOKEN_UNAVAILABLE: 5,
                KICKED_OFFLINE_BY_OTHER_CLIENT: 6,
                CLOSE: 7,
                CURRENT_WS_AUTH_FAIL: 8
            },
            MessageType: {
                TextMessage: 0,
                ImageMessage: 1,
                CardMessage: 2,
                VideoMessage: 3,
                AudioMessage: 4,
                FileMessage: 5,
                LocationMessage: 6,
                CustomContentMessage: 7,
                EmoticonMessage: 8,
                AtMessage: 9,
                TemplateMessage: 10,
                NormalMessage: -1,
                SystemMessage: -2,
                StatusMessage: -3,
                InputStateMessage: -4
            },
            ConversationType: {
                SingleChat: "chat",
                GroupChat: "groupchat",
                ConversationList: "conversationList",
                Notice: "headline",
                Error: "error"
            },
            BusinessType: {
                CTIMBusinessTypeNormal: 0,
                CTIMBusinessTypeGS: 1,
                CTIMBusinessTypeFlightAndHotelNormal: 2,
                CTIMBusinessTypeTour: 3,
                CTIMBusinessTypeHoliday: 4,
                CTIMBusinessTypeMaikol: 5,
                CTIMBusinessTypeGroup: 1e3,
                CTIMBusinessTypeGroupFlightAndHotel: 1001,
                CTIMBusinessTypeUnTravelGroup: 1002
            },
            SignalType: {
                SocketConnect: 0,
                GroupMessageCompensate: 1,
                ChatMessageCompensate: 2
            },
            EventType: {
                SignalEvent: "SignalEvent",
                OnReceivedMessage: "OnReceivedMessage",
                OnSocketStatusChange: "OnSocketStatusChange"
            }
        }
    }
    , function(t, e, n) {
        var r = n(1)
          , i = n(17)
          , o = n(16)
          , s = n(33)("src")
          , a = n(140)
          , c = ("" + a).split("toString");
        n(8).inspectSource = function(t) {
            return a.call(t)
        }
        ,
        (t.exports = function(t, e, n, a) {
            var u = "function" == typeof n;
            u && (o(n, "name") || i(n, "name", e)),
            t[e] !== n && (u && (o(n, s) || i(n, s, t[e] ? "" + t[e] : c.join(String(e)))),
            t === r ? t[e] = n : a ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e],
            i(t, e, n)))
        }
        )(Function.prototype, "toString", function() {
            return "function" == typeof this && this[s] || a.call(this)
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(2)
          , o = n(28)
          , s = /"/g
          , a = function(t, e, n, r) {
            var i = String(o(t))
              , a = "<" + e;
            return "" !== n && (a += " " + n + '="' + String(r).replace(s, "&quot;") + '"'),
            a + ">" + i + "</" + e + ">"
        };
        t.exports = function(t, e) {
            var n = {};
            n[t] = e(a),
            r(r.P + r.F * i(function() {
                var e = ""[t]('"');
                return e !== e.toLowerCase() || e.split('"').length > 3
            }), "String", n)
        }
    }
    , function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    }
    , function(t, e, n) {
        var r = n(10)
          , i = n(32);
        t.exports = n(9) ? function(t, e, n) {
            return r.f(t, e, i(1, n))
        }
        : function(t, e, n) {
            return t[e] = n,
            t
        }
    }
    , function(t, e, n) {
        var r = n(49)
          , i = n(28);
        t.exports = function(t) {
            return r(i(t))
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(2);
        t.exports = function(t, e) {
            return !!t && r(function() {
                e ? t.call(null, function() {}, 1) : t.call(null)
            })
        }
    }
    , function(t, e, n) {
        var r = n(21);
        t.exports = function(t, e, n) {
            if (r(t),
            void 0 === e)
                return t;
            switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                }
                ;
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                }
                ;
            case 3:
                return function(n, r, i) {
                    return t.call(e, n, r, i)
                }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t)
                throw TypeError(t + " is not a function!");
            return t
        }
    }
    , function(t, e) {
        var n = Math.ceil
          , r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    }
    , function(t, e, n) {
        var r = n(50)
          , i = n(32)
          , o = n(18)
          , s = n(30)
          , a = n(16)
          , c = n(97)
          , u = Object.getOwnPropertyDescriptor;
        e.f = n(9) ? u : function(t, e) {
            if (t = o(t),
            e = s(e, !0),
            c)
                try {
                    return u(t, e)
                } catch (t) {}
            if (a(t, e))
                return i(!r.f.call(t, e), t[e])
        }
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(8)
          , o = n(2);
        t.exports = function(t, e) {
            var n = (i.Object || {})[t] || Object[t]
              , s = {};
            s[t] = e(n),
            r(r.S + r.F * o(function() {
                n(1)
            }), "Object", s)
        }
    }
    , function(t, e, n) {
        var r = n(20)
          , i = n(49)
          , o = n(12)
          , s = n(6)
          , a = n(113);
        t.exports = function(t, e) {
            var n = 1 == t
              , c = 2 == t
              , u = 3 == t
              , l = 4 == t
              , p = 6 == t
              , h = 5 == t || p
              , f = e || a;
            return function(e, a, d) {
                for (var g, m, y = o(e), v = i(y), b = r(a, d, 3), _ = s(v.length), T = 0, S = n ? f(e, _) : c ? f(e, 0) : void 0; _ > T; T++)
                    if ((h || T in v) && (m = b(g = v[T], T, y),
                    t))
                        if (n)
                            S[T] = m;
                        else if (m)
                            switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return g;
                            case 6:
                                return T;
                            case 2:
                                S.push(g)
                            }
                        else if (l)
                            return !1;
                return p ? -1 : u || l ? l : S
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        var i = n(13)
          , o = n(326)
          , s = function(t) {
            function e(n) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var r = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, t.call(this, n));
                return r.initialize(n),
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf,
                function(t, e) {
                    for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                        var i = n[r]
                          , o = Object.getOwnPropertyDescriptor(e, i);
                        o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                    }
                }(t, e))
            }(e, t),
            e.prototype.initialize = function() {
                this._client = new o
            }
            ,
            e.prototype.setListener = function(t) {
                "object" == (void 0 === t ? "undefined" : r(t)) && ("function" == typeof t.onChanged ? (this._client._ConnectionStatusListener = t,
                this._client.setStatusListener(t)) : "function" == typeof t.onReceived && (this._client._ReceiveMessageListener = t))
            }
            ,
            e.prototype.reconnect = function(t, e) {
                this._client && this._client._channel && this._client._channel.reconnect(t, e)
            }
            ,
            e.prototype.disconnect = function() {
                this._client && this._client._channel && this._client._channel.disconnect()
            }
            ,
            e.prototype.getCurrentConnectionStatus = function() {
                return this._client._channel.connectionStatus || i.ConnectionStatus.NOTCONNECTED
            }
            ,
            e.prototype.getChatLastTimestamp = function() {
                var t = 0;
                return this._client && (t = this._client._lastTimestamp),
                this._client._channel._socket && (t = this._client._channel._socket.getCurrentTimestamp()),
                t
            }
            ,
            e
        }(n(11));
        t.exports = s
    }
    , function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            if (void 0 == t)
                throw TypeError("Can't call method on  " + t);
            return t
        }
    }
    , function(t, e, n) {
        "use strict";
        if (n(9)) {
            var r = n(34)
              , i = n(1)
              , o = n(2)
              , s = n(0)
              , a = n(65)
              , c = n(91)
              , u = n(20)
              , l = n(46)
              , p = n(32)
              , h = n(17)
              , f = n(47)
              , d = n(22)
              , g = n(6)
              , m = n(124)
              , y = n(36)
              , v = n(30)
              , b = n(16)
              , _ = n(51)
              , T = n(4)
              , S = n(12)
              , C = n(83)
              , w = n(37)
              , I = n(39)
              , M = n(38).f
              , x = n(85)
              , k = n(33)
              , P = n(5)
              , A = n(25)
              , O = n(55)
              , E = n(52)
              , N = n(87)
              , L = n(44)
              , j = n(58)
              , B = n(45)
              , R = n(86)
              , F = n(115)
              , G = n(10)
              , J = n(23)
              , U = G.f
              , D = J.f
              , H = i.RangeError
              , z = i.TypeError
              , W = i.Uint8Array
              , q = Array.prototype
              , V = c.ArrayBuffer
              , X = c.DataView
              , Q = A(0)
              , K = A(2)
              , $ = A(3)
              , Y = A(4)
              , Z = A(5)
              , tt = A(6)
              , et = O(!0)
              , nt = O(!1)
              , rt = N.values
              , it = N.keys
              , ot = N.entries
              , st = q.lastIndexOf
              , at = q.reduce
              , ct = q.reduceRight
              , ut = q.join
              , lt = q.sort
              , pt = q.slice
              , ht = q.toString
              , ft = q.toLocaleString
              , dt = P("iterator")
              , gt = P("toStringTag")
              , mt = k("typed_constructor")
              , yt = k("def_constructor")
              , vt = a.CONSTR
              , bt = a.TYPED
              , _t = a.VIEW
              , Tt = A(1, function(t, e) {
                return Mt(E(t, t[yt]), e)
            })
              , St = o(function() {
                return 1 === new W(new Uint16Array([1]).buffer)[0]
            })
              , Ct = !!W && !!W.prototype.set && o(function() {
                new W(1).set({})
            })
              , wt = function(t, e) {
                var n = d(t);
                if (n < 0 || n % e)
                    throw H("Wrong offset!");
                return n
            }
              , It = function(t) {
                if (T(t) && bt in t)
                    return t;
                throw z(t + " is not a typed array!")
            }
              , Mt = function(t, e) {
                if (!(T(t) && mt in t))
                    throw z("It is not a typed array constructor!");
                return new t(e)
            }
              , xt = function(t, e) {
                return kt(E(t, t[yt]), e)
            }
              , kt = function(t, e) {
                for (var n = 0, r = e.length, i = Mt(t, r); r > n; )
                    i[n] = e[n++];
                return i
            }
              , Pt = function(t, e, n) {
                U(t, e, {
                    get: function() {
                        return this._d[n]
                    }
                })
            }
              , At = function(t) {
                var e, n, r, i, o, s, a = S(t), c = arguments.length, l = c > 1 ? arguments[1] : void 0, p = void 0 !== l, h = x(a);
                if (void 0 != h && !C(h)) {
                    for (s = h.call(a),
                    r = [],
                    e = 0; !(o = s.next()).done; e++)
                        r.push(o.value);
                    a = r
                }
                for (p && c > 2 && (l = u(l, arguments[2], 2)),
                e = 0,
                n = g(a.length),
                i = Mt(this, n); n > e; e++)
                    i[e] = p ? l(a[e], e) : a[e];
                return i
            }
              , Ot = function() {
                for (var t = 0, e = arguments.length, n = Mt(this, e); e > t; )
                    n[t] = arguments[t++];
                return n
            }
              , Et = !!W && o(function() {
                ft.call(new W(1))
            })
              , Nt = function() {
                return ft.apply(Et ? pt.call(It(this)) : It(this), arguments)
            }
              , Lt = {
                copyWithin: function(t, e) {
                    return F.call(It(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
                },
                every: function(t) {
                    return Y(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                fill: function(t) {
                    return R.apply(It(this), arguments)
                },
                filter: function(t) {
                    return xt(this, K(It(this), t, arguments.length > 1 ? arguments[1] : void 0))
                },
                find: function(t) {
                    return Z(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                findIndex: function(t) {
                    return tt(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                forEach: function(t) {
                    Q(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                indexOf: function(t) {
                    return nt(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                includes: function(t) {
                    return et(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                join: function(t) {
                    return ut.apply(It(this), arguments)
                },
                lastIndexOf: function(t) {
                    return st.apply(It(this), arguments)
                },
                map: function(t) {
                    return Tt(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                reduce: function(t) {
                    return at.apply(It(this), arguments)
                },
                reduceRight: function(t) {
                    return ct.apply(It(this), arguments)
                },
                reverse: function() {
                    for (var t, e = It(this).length, n = Math.floor(e / 2), r = 0; r < n; )
                        t = this[r],
                        this[r++] = this[--e],
                        this[e] = t;
                    return this
                },
                some: function(t) {
                    return $(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                sort: function(t) {
                    return lt.call(It(this), t)
                },
                subarray: function(t, e) {
                    var n = It(this)
                      , r = n.length
                      , i = y(t, r);
                    return new (E(n, n[yt]))(n.buffer,n.byteOffset + i * n.BYTES_PER_ELEMENT,g((void 0 === e ? r : y(e, r)) - i))
                }
            }
              , jt = function(t, e) {
                return xt(this, pt.call(It(this), t, e))
            }
              , Bt = function(t) {
                It(this);
                var e = wt(arguments[1], 1)
                  , n = this.length
                  , r = S(t)
                  , i = g(r.length)
                  , o = 0;
                if (i + e > n)
                    throw H("Wrong length!");
                for (; o < i; )
                    this[e + o] = r[o++]
            }
              , Rt = {
                entries: function() {
                    return ot.call(It(this))
                },
                keys: function() {
                    return it.call(It(this))
                },
                values: function() {
                    return rt.call(It(this))
                }
            }
              , Ft = function(t, e) {
                return T(t) && t[bt] && "symbol" != typeof e && e in t && String(+e) == String(e)
            }
              , Gt = function(t, e) {
                return Ft(t, e = v(e, !0)) ? p(2, t[e]) : D(t, e)
            }
              , Jt = function(t, e, n) {
                return !(Ft(t, e = v(e, !0)) && T(n) && b(n, "value")) || b(n, "get") || b(n, "set") || n.configurable || b(n, "writable") && !n.writable || b(n, "enumerable") && !n.enumerable ? U(t, e, n) : (t[e] = n.value,
                t)
            };
            vt || (J.f = Gt,
            G.f = Jt),
            s(s.S + s.F * !vt, "Object", {
                getOwnPropertyDescriptor: Gt,
                defineProperty: Jt
            }),
            o(function() {
                ht.call({})
            }) && (ht = ft = function() {
                return ut.call(this)
            }
            );
            var Ut = f({}, Lt);
            f(Ut, Rt),
            h(Ut, dt, Rt.values),
            f(Ut, {
                slice: jt,
                set: Bt,
                constructor: function() {},
                toString: ht,
                toLocaleString: Nt
            }),
            Pt(Ut, "buffer", "b"),
            Pt(Ut, "byteOffset", "o"),
            Pt(Ut, "byteLength", "l"),
            Pt(Ut, "length", "e"),
            U(Ut, gt, {
                get: function() {
                    return this[bt]
                }
            }),
            t.exports = function(t, e, n, c) {
                var u = t + ((c = !!c) ? "Clamped" : "") + "Array"
                  , p = "get" + t
                  , f = "set" + t
                  , d = i[u]
                  , y = d || {}
                  , v = d && I(d)
                  , b = !d || !a.ABV
                  , S = {}
                  , C = d && d.prototype
                  , x = function(t, n) {
                    U(t, n, {
                        get: function() {
                            return function(t, n) {
                                var r = t._d;
                                return r.v[p](n * e + r.o, St)
                            }(this, n)
                        },
                        set: function(t) {
                            return function(t, n, r) {
                                var i = t._d;
                                c && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r),
                                i.v[f](n * e + i.o, r, St)
                            }(this, n, t)
                        },
                        enumerable: !0
                    })
                };
                b ? (d = n(function(t, n, r, i) {
                    l(t, d, u, "_d");
                    var o, s, a, c, p = 0, f = 0;
                    if (T(n)) {
                        if (!(n instanceof V || "ArrayBuffer" == (c = _(n)) || "SharedArrayBuffer" == c))
                            return bt in n ? kt(d, n) : At.call(d, n);
                        o = n,
                        f = wt(r, e);
                        var y = n.byteLength;
                        if (void 0 === i) {
                            if (y % e)
                                throw H("Wrong length!");
                            if ((s = y - f) < 0)
                                throw H("Wrong length!")
                        } else if ((s = g(i) * e) + f > y)
                            throw H("Wrong length!");
                        a = s / e
                    } else
                        a = m(n),
                        o = new V(s = a * e);
                    for (h(t, "_d", {
                        b: o,
                        o: f,
                        l: s,
                        e: a,
                        v: new X(o)
                    }); p < a; )
                        x(t, p++)
                }),
                C = d.prototype = w(Ut),
                h(C, "constructor", d)) : o(function() {
                    d(1)
                }) && o(function() {
                    new d(-1)
                }) && j(function(t) {
                    new d,
                    new d(null),
                    new d(1.5),
                    new d(t)
                }, !0) || (d = n(function(t, n, r, i) {
                    var o;
                    return l(t, d, u),
                    T(n) ? n instanceof V || "ArrayBuffer" == (o = _(n)) || "SharedArrayBuffer" == o ? void 0 !== i ? new y(n,wt(r, e),i) : void 0 !== r ? new y(n,wt(r, e)) : new y(n) : bt in n ? kt(d, n) : At.call(d, n) : new y(m(n))
                }),
                Q(v !== Function.prototype ? M(y).concat(M(v)) : M(y), function(t) {
                    t in d || h(d, t, y[t])
                }),
                d.prototype = C,
                r || (C.constructor = d));
                var k = C[dt]
                  , P = !!k && ("values" == k.name || void 0 == k.name)
                  , A = Rt.values;
                h(d, mt, !0),
                h(C, bt, u),
                h(C, _t, !0),
                h(C, yt, d),
                (c ? new d(1)[gt] == u : gt in C) || U(C, gt, {
                    get: function() {
                        return u
                    }
                }),
                S[u] = d,
                s(s.G + s.W + s.F * (d != y), S),
                s(s.S, u, {
                    BYTES_PER_ELEMENT: e
                }),
                s(s.S + s.F * o(function() {
                    y.of.call(d, 1)
                }), u, {
                    from: At,
                    of: Ot
                }),
                "BYTES_PER_ELEMENT"in C || h(C, "BYTES_PER_ELEMENT", e),
                s(s.P, u, Lt),
                B(u),
                s(s.P + s.F * Ct, u, {
                    set: Bt
                }),
                s(s.P + s.F * !P, u, Rt),
                r || C.toString == ht || (C.toString = ht),
                s(s.P + s.F * o(function() {
                    new d(1).slice()
                }), u, {
                    slice: jt
                }),
                s(s.P + s.F * (o(function() {
                    return [1, 2].toLocaleString() != new d([1, 2]).toLocaleString()
                }) || !o(function() {
                    C.toLocaleString.call([1, 2])
                })), u, {
                    toLocaleString: Nt
                }),
                L[u] = P ? k : A,
                r || P || h(C, dt, A)
            }
        } else
            t.exports = function() {}
    }
    , function(t, e, n) {
        var r = n(4);
        t.exports = function(t, e) {
            if (!r(t))
                return t;
            var n, i;
            if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t)))
                return i;
            if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t)))
                return i;
            if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t)))
                return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }
    , function(t, e, n) {
        var r = n(33)("meta")
          , i = n(4)
          , o = n(16)
          , s = n(10).f
          , a = 0
          , c = Object.isExtensible || function() {
            return !0
        }
          , u = !n(2)(function() {
            return c(Object.preventExtensions({}))
        })
          , l = function(t) {
            s(t, r, {
                value: {
                    i: "O" + ++a,
                    w: {}
                }
            })
        }
          , p = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(t, e) {
                if (!i(t))
                    return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!o(t, r)) {
                    if (!c(t))
                        return "F";
                    if (!e)
                        return "E";
                    l(t)
                }
                return t[r].i
            },
            getWeak: function(t, e) {
                if (!o(t, r)) {
                    if (!c(t))
                        return !0;
                    if (!e)
                        return !1;
                    l(t)
                }
                return t[r].w
            },
            onFreeze: function(t) {
                return u && p.NEED && c(t) && !o(t, r) && l(t),
                t
            }
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }
    , function(t, e) {
        var n = 0
          , r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    }
    , function(t, e) {
        t.exports = !1
    }
    , function(t, e, n) {
        var r = n(99)
          , i = n(70);
        t.exports = Object.keys || function(t) {
            return r(t, i)
        }
    }
    , function(t, e, n) {
        var r = n(22)
          , i = Math.max
          , o = Math.min;
        t.exports = function(t, e) {
            return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e)
        }
    }
    , function(t, e, n) {
        var r = n(3)
          , i = n(100)
          , o = n(70)
          , s = n(69)("IE_PROTO")
          , a = function() {}
          , c = function() {
            var t, e = n(67)("iframe"), r = o.length;
            for (e.style.display = "none",
            n(71).appendChild(e),
            e.src = "javascript:",
            (t = e.contentWindow.document).open(),
            t.write("<script>document.F=Object<\/script>"),
            t.close(),
            c = t.F; r--; )
                delete c.prototype[o[r]];
            return c()
        };
        t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (a.prototype = r(t),
            n = new a,
            a.prototype = null,
            n[s] = t) : n = c(),
            void 0 === e ? n : i(n, e)
        }
    }
    , function(t, e, n) {
        var r = n(99)
          , i = n(70).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return r(t, i)
        }
    }
    , function(t, e, n) {
        var r = n(16)
          , i = n(12)
          , o = n(69)("IE_PROTO")
          , s = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = i(t),
            r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
        }
    }
    , function(t, e, n) {
        var r = n(5)("unscopables")
          , i = Array.prototype;
        void 0 == i[r] && n(17)(i, r, {}),
        t.exports = function(t) {
            i[r][t] = !0
        }
    }
    , function(t, e, n) {
        var r = n(4);
        t.exports = function(t, e) {
            if (!r(t) || t._t !== e)
                throw TypeError("Incompatible receiver, " + e + " required!");
            return t
        }
    }
    , function(t, e, n) {
        var r = n(10).f
          , i = n(16)
          , o = n(5)("toStringTag");
        t.exports = function(t, e, n) {
            t && !i(t = n ? t : t.prototype, o) && r(t, o, {
                configurable: !0,
                value: e
            })
        }
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(28)
          , o = n(2)
          , s = n(73)
          , a = "[" + s + "]"
          , c = RegExp("^" + a + a + "*")
          , u = RegExp(a + a + "*$")
          , l = function(t, e, n) {
            var i = {}
              , a = o(function() {
                return !!s[t]() || "​" != "​"[t]()
            })
              , c = i[t] = a ? e(p) : s[t];
            n && (i[n] = c),
            r(r.P + r.F * a, "String", i)
        }
          , p = l.trim = function(t, e) {
            return t = String(i(t)),
            1 & e && (t = t.replace(c, "")),
            2 & e && (t = t.replace(u, "")),
            t
        }
        ;
        t.exports = l
    }
    , function(t, e) {
        t.exports = {}
    }
    , function(t, e, n) {
        "use strict";
        var r = n(1)
          , i = n(10)
          , o = n(9)
          , s = n(5)("species");
        t.exports = function(t) {
            var e = r[t];
            o && e && !e[s] && i.f(e, s, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }
    , function(t, e) {
        t.exports = function(t, e, n, r) {
            if (!(t instanceof e) || void 0 !== r && r in t)
                throw TypeError(n + ": incorrect invocation!");
            return t
        }
    }
    , function(t, e, n) {
        var r = n(14);
        t.exports = function(t, e, n) {
            for (var i in e)
                r(t, i, e[i], n);
            return t
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(7)
          , i = {
            messageQueue: {},
            subscribe: function(t, e, n) {
                var o = r.createGuid();
                return t && e && (i.messageQueue[t] || (i.messageQueue[t] = []),
                i.messageQueue[t].push({
                    uuid: o,
                    scope: n,
                    handler: e
                })),
                o
            },
            unsubscribe: function(t) {
                i.messageQueue[t] && delete i.messageQueue[t]
            },
            removeListener: function(t, e) {
                var n = i.messageQueue[t];
                if (n)
                    for (var r = 0; r < n.length; )
                        n[r].uuid === e && n.splice(r, 1),
                        r++;
                i.messageQueue[t] = n
            },
            getEventEmitter: function(t) {
                return {
                    eventName: t,
                    eventHandler: i.messageQueue[t]
                }
            },
            publish: function(t, e) {
                if (i.messageQueue[t]) {
                    for (var n = 0; n < i.messageQueue[t].length; n++) {
                        var r = i.messageQueue[t][n];
                        r.handler && r.handler.apply(r.scope ? r.scope : window, e)
                    }
                    return i.messageQueue[t].length
                }
                return 0
            }
        };
        t.exports = i
    }
    , function(t, e, n) {
        var r = n(27);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }
    , function(t, e) {
        e.f = {}.propertyIsEnumerable
    }
    , function(t, e, n) {
        var r = n(27)
          , i = n(5)("toStringTag")
          , o = "Arguments" == r(function() {
            return arguments
        }());
        t.exports = function(t) {
            var e, n, s;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), i)) ? n : o ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments" : s
        }
    }
    , function(t, e, n) {
        var r = n(3)
          , i = n(21)
          , o = n(5)("species");
        t.exports = function(t, e) {
            var n, s = r(t).constructor;
            return void 0 === s || void 0 == (n = r(s)[o]) ? e : i(n)
        }
    }
    , function(t, e, n) {
        "use strict";
        t.exports = {
            type: "online",
            xmppVersion: "1.3.0",
            sdkVersion: "1.0.26",
            websocketHost: {
                fat: "im.fws.qa.nt.ctripcorp.com",
                uat: "im.uat.qa.nt.ctripcorp.com",
                prd: "im.ctrip.com",
                corp_prd: "im.ctripcorp.com"
            },
            websocketServiceName: {
                fat: "im.fws.qa.nt.ctripcorp.com",
                uat: "im.uat.qa.nt.ctripcorp.com",
                prd: "im.ctrip.com",
                corp_prd: "im.ctrip.com"
            },
            websocketPort: {
                http: {
                    fat: "",
                    uat: "",
                    prd: "",
                    corp_prd: ""
                },
                https: {
                    fat: "",
                    uat: "",
                    prd: "",
                    corp_prd: ""
                }
            },
            gatewayDomain: {
                fat: "gateway.m.fws.qa.nt.ctripcorp.com",
                uat: "gateway.m.uat.qa.nt.ctripcorp.com",
                prd: "m.ctrip.com",
                ibu_prd: "m.trip.com",
                corp_prd: "apigateway.ctripcorp.com"
            },
            dynamicSocketUrl: !0,
            SOAService: {
                GetIMServer: "/restapi/soa2/18088/getImServer.json",
                UploadImage: "/restapi/soa2/13229/imageUpload.json",
                GetUserCommunityInfo: "/restapi/soa2/10258/GetUserCommunityInfo.json",
                CheckHit: "/restapi/soa2/11679/checkHit.json",
                GetMyInfo: "/restapi/soa2/11679/GetMyInfo.json",
                GetLatestConversation: "/restapi/soa2/11679/getLatestConversation4js.json",
                GetRecentMessages: "/restapi/soa2/11679/getRecentMessages.json",
                GetLatestMessageInBulk: "/restapi/soa2/11679/getLatestMessageInBulk4js.json",
                SendMessage: "/restapi/soa2/11679/SendMessage.json",
                GetChatConversationMessages: "/restapi/soa2/11679/GetMamConversationMessages.json",
                GetChatMessages: "/restapi/soa2/11679/GetChatMessages.json",
                GetGroupConversationMessages: "/restapi/soa2/11679/GetGroupConversationMessages.json",
                GetGroupMessages: "/restapi/soa2/11679/GetGroupMessages.json",
                GetConversationAtMessages: "/restapi/soa2/11679/GetConversationAtMessages.json",
                GetConversations: "/restapi/soa2/11679/GetConversations.json",
                GetConversationByJid: "/restapi/soa2/11679/GetConversation.json",
                GetPartnerInfo: "/restapi/soa2/11679/GetPartnerInfo.json",
                GetPartnerDetail: "/restapi/soa2/11679/GetPartnerDetail.json",
                PutAdviceOfRead: "/restapi/soa2/11679/PutAdviceOfRead.json",
                PutAdviceOfReadByMsgId: "/restapi/soa2/11679/PutAdviceOfReadByMsgId.json",
                RemoveConversation: "/restapi/soa2/11679/RemoveConversation.json",
                GetTotalUnreadcount: "/restapi/soa2/11679/GetTotalUnreadcount.json",
                GetConversationUnreadInfo: "/restapi/soa2/11679/GetConversationUnreadInfo.json",
                RemoveMessage: "/restapi/soa2/11679/RemoveMessage.json",
                CreateGroup: "/restapi/soa2/11679/CreateGroup.json",
                InviteMembers: "/restapi/soa2/11679/InviteMembers.json",
                QuitGroup: "/restapi/soa2/11679/QuitGroup.json",
                RemoveMember: "/restapi/soa2/11679/RemoveMember.json",
                DismissGroup: "/restapi/soa2/11679/DismissGroup.json",
                UpdateGroup: "/restapi/soa2/11679/UpdateGroup.json",
                ChangeGroupRole: "/restapi/soa2/11679/ChangeGroupRole.json",
                GetGroupMembers: "/restapi/soa2/11679/GetGroupMembers.json",
                GetGroupMembersEn: "/restapi/soa2/11679/GetGroupMembersEn.json",
                GetGroupInfo: "/restapi/soa2/11679/GetGroupInfo.json",
                GetGroupMemberInfo: "/restapi/soa2/11679/GetGroupMemberInfo.json",
                GetContacts: "/restapi/soa2/11679/GetContacts.json",
                UpdateContact: "/restapi/soa2/11679/UpdateContact.json",
                UpdateContacts: "/restapi/soa2/11679/UpdateContacts.json",
                ViewContacts: "/restapi/soa2/11679/ViewContacts.json",
                RemoveContact: "/restapi/soa2/11679/RemoveContact.json",
                CreateThread: "/restapi/soa2/11679/CreateThread.json",
                GetThread: "/restapi/soa2/11679/GetThread.json",
                RecallMessage: "/restapi/soa2/11679/RecallMessage.json",
                UpdateGroupConfig: "/restapi/soa2/11679/UpdateGroupConfig.json",
                UpdateMsgBlockConfig: "/restapi/soa2/11679/UpdateMsgBlockConfig.json",
                GetMsgBlockConfig: "/restapi/soa2/11679/GetMsgBlockConfig.json",
                GetRecommendNickName: "/restapi/soa2/11679/GetRecommendNickName.json",
                SubmitNickName: "/restapi/soa2/11679/SubmitNickName.json",
                IsInWhiteList: "/restapi/soa2/11679/IsInWhiteList.json",
                StartCounsel: "/restapi/soa2/11679/startCounsel.json",
                GetHistoricalRangeMessage: "/restapi/soa2/11679/getHistoricalRangeMessage.json",
                GetRangeMessageOnline: "/restapi/soa2/11679/getRangeMessageOnline.json",
                SendAIChatMessage: "/restapi/soa2/13500/sendAIChatMessage.json",
                StartAIChat: "/restapi/soa2/13500/startaichat4js.json",
                SendAIChatMessageForOpenIM: "/restapi/soa2/13500/sendAIChatMessageforopenim.json",
                StartAIChatForOpenIM: "/restapi/soa2/13500/startaichat4jsforopenim.json",
                StartChat: "/restapi/soa2/13500/StartChat.json",
                GetCandidateAgents: "/restapi/soa2/13500/GetCandidateAgents.json",
                GetRelativeQuestions: "/restapi/soa2/13500/GetRelativeQuestions.json",
                FinishChat: "/restapi/soa2/13500/FinishChat.json",
                PostScore: "/restapi/soa2/13500/PostScore.json",
                CheckMemberStatus: "/restapi/soa2/13500/CheckMemberStatus.json",
                CheckChatStatus: "/restapi/soa2/13500/CheckChatStatus.json",
                CheckScoreStatus: "/restapi/soa2/13500/CheckScoreStatus.json",
                RebindSession: "/restapi/soa2/13500/RebindSession.json",
                GetCommonProblems: "/restapi/soa2/13500/GetCommonProblems.json",
                AddScore: "/restapi/soa2/12721/addScore.json",
                CloseWorkSheetByCustomer: "/restapi/soa2/12721/closeWorkSheetByCustomer.json"
            },
            ubt: "//webresource.c-ctrip.com/code/ubt/_bfa.min.js",
            ubtIBU: "//webresource.tripcdn.com/ares2/sysdev/ubt/*/default/_bfa.min.js"
        }
    }
    , function(t, e, n) {
        var r = n(8)
          , i = n(1)
          , o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (t.exports = function(t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {})
        }
        )("versions", []).push({
            version: r.version,
            mode: n(34) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }
    , function(t, e, n) {
        var r = n(18)
          , i = n(6)
          , o = n(36);
        t.exports = function(t) {
            return function(e, n, s) {
                var a, c = r(e), u = i(c.length), l = o(s, u);
                if (t && n != n) {
                    for (; u > l; )
                        if ((a = c[l++]) != a)
                            return !0
                } else
                    for (; u > l; l++)
                        if ((t || l in c) && c[l] === n)
                            return t || l || 0;
                return !t && -1
            }
        }
    }
    , function(t, e) {
        e.f = Object.getOwnPropertySymbols
    }
    , function(t, e, n) {
        var r = n(27);
        t.exports = Array.isArray || function(t) {
            return "Array" == r(t)
        }
    }
    , function(t, e, n) {
        var r = n(5)("iterator")
          , i = !1;
        try {
            var o = [7][r]();
            o["return"] = function() {
                i = !0
            }
            ,
            Array.from(o, function() {
                throw 2
            })
        } catch (t) {}
        t.exports = function(t, e) {
            if (!e && !i)
                return !1;
            var n = !1;
            try {
                var o = [7]
                  , s = o[r]();
                s.next = function() {
                    return {
                        done: n = !0
                    }
                }
                ,
                o[r] = function() {
                    return s
                }
                ,
                t(o)
            } catch (t) {}
            return n
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(3);
        t.exports = function() {
            var t = r(this)
              , e = "";
            return t.global && (e += "g"),
            t.ignoreCase && (e += "i"),
            t.multiline && (e += "m"),
            t.unicode && (e += "u"),
            t.sticky && (e += "y"),
            e
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(51)
          , i = RegExp.prototype.exec;
        t.exports = function(t, e) {
            var n = t.exec;
            if ("function" == typeof n) {
                var o = n.call(t, e);
                if ("object" != typeof o)
                    throw new TypeError("RegExp exec method returned something other than an Object or null");
                return o
            }
            if ("RegExp" !== r(t))
                throw new TypeError("RegExp#exec called on incompatible receiver");
            return i.call(t, e)
        }
    }
    , function(t, e, n) {
        "use strict";
        n(117);
        var r = n(14)
          , i = n(17)
          , o = n(2)
          , s = n(28)
          , a = n(5)
          , c = n(88)
          , u = a("species")
          , l = !o(function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                },
                t
            }
            ,
            "7" !== "".replace(t, "$<a>")
        })
          , p = function() {
            var t = /(?:)/
              , e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            }
            ;
            var n = "ab".split(t);
            return 2 === n.length && "a" === n[0] && "b" === n[1]
        }();
        t.exports = function(t, e, n) {
            var h = a(t)
              , f = !o(function() {
                var e = {};
                return e[h] = function() {
                    return 7
                }
                ,
                7 != ""[t](e)
            })
              , d = f ? !o(function() {
                var e = !1
                  , n = /a/;
                return n.exec = function() {
                    return e = !0,
                    null
                }
                ,
                "split" === t && (n.constructor = {},
                n.constructor[u] = function() {
                    return n
                }
                ),
                n[h](""),
                !e
            }) : void 0;
            if (!f || !d || "replace" === t && !l || "split" === t && !p) {
                var g = /./[h]
                  , m = n(s, h, ""[t], function(t, e, n, r, i) {
                    return e.exec === c ? f && !i ? {
                        done: !0,
                        value: g.call(e, n, r)
                    } : {
                        done: !0,
                        value: t.call(n, e, r)
                    } : {
                        done: !1
                    }
                })
                  , y = m[0]
                  , v = m[1];
                r(String.prototype, t, y),
                i(RegExp.prototype, h, 2 == e ? function(t, e) {
                    return v.call(t, this, e)
                }
                : function(t) {
                    return v.call(t, this)
                }
                )
            }
        }
    }
    , function(t, e, n) {
        var r = n(20)
          , i = n(112)
          , o = n(83)
          , s = n(3)
          , a = n(6)
          , c = n(85)
          , u = {}
          , l = {};
        (e = t.exports = function(t, e, n, p, h) {
            var f, d, g, m, y = h ? function() {
                return t
            }
            : c(t), v = r(n, p, e ? 2 : 1), b = 0;
            if ("function" != typeof y)
                throw TypeError(t + " is not iterable!");
            if (o(y)) {
                for (f = a(t.length); f > b; b++)
                    if ((m = e ? v(s(d = t[b])[0], d[1]) : v(t[b])) === u || m === l)
                        return m
            } else
                for (g = y.call(t); !(d = g.next()).done; )
                    if ((m = i(g, v, d.value, e)) === u || m === l)
                        return m
        }
        ).BREAK = u,
        e.RETURN = l
    }
    , function(t, e, n) {
        var r = n(1).navigator;
        t.exports = r && r.userAgent || ""
    }
    , function(t, e, n) {
        "use strict";
        var r = n(1)
          , i = n(0)
          , o = n(14)
          , s = n(47)
          , a = n(31)
          , c = n(62)
          , u = n(46)
          , l = n(4)
          , p = n(2)
          , h = n(58)
          , f = n(42)
          , d = n(74);
        t.exports = function(t, e, n, g, m, y) {
            var v = r[t]
              , b = v
              , _ = m ? "set" : "add"
              , T = b && b.prototype
              , S = {}
              , C = function(t) {
                var e = T[t];
                o(T, t, "delete" == t ? function(t) {
                    return !(y && !l(t)) && e.call(this, 0 === t ? 0 : t)
                }
                : "has" == t ? function(t) {
                    return !(y && !l(t)) && e.call(this, 0 === t ? 0 : t)
                }
                : "get" == t ? function(t) {
                    return y && !l(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                }
                : "add" == t ? function(t) {
                    return e.call(this, 0 === t ? 0 : t),
                    this
                }
                : function(t, n) {
                    return e.call(this, 0 === t ? 0 : t, n),
                    this
                }
                )
            };
            if ("function" == typeof b && (y || T.forEach && !p(function() {
                (new b).entries().next()
            }))) {
                var w = new b
                  , I = w[_](y ? {} : -0, 1) != w
                  , M = p(function() {
                    w.has(1)
                })
                  , x = h(function(t) {
                    new b(t)
                })
                  , k = !y && p(function() {
                    for (var t = new b, e = 5; e--; )
                        t[_](e, e);
                    return !t.has(-0)
                });
                x || ((b = e(function(e, n) {
                    u(e, b, t);
                    var r = d(new v, e, b);
                    return void 0 != n && c(n, m, r[_], r),
                    r
                })).prototype = T,
                T.constructor = b),
                (M || k) && (C("delete"),
                C("has"),
                m && C("get")),
                (k || I) && C(_),
                y && T.clear && delete T.clear
            } else
                b = g.getConstructor(e, t, m, _),
                s(b.prototype, n),
                a.NEED = !0;
            return f(b, t),
            S[t] = b,
            i(i.G + i.W + i.F * (b != v), S),
            y || g.setStrong(b, t, m),
            b
        }
    }
    , function(t, e, n) {
        for (var r, i = n(1), o = n(17), s = n(33), a = s("typed_array"), c = s("view"), u = !(!i.ArrayBuffer || !i.DataView), l = u, p = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); p < 9; )
            (r = i[h[p++]]) ? (o(r.prototype, a, !0),
            o(r.prototype, c, !0)) : l = !1;
        t.exports = {
            ABV: u,
            CONSTR: l,
            TYPED: a,
            VIEW: c
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function o(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf,
            function(t, e) {
                for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = Object.getOwnPropertyDescriptor(e, i);
                    o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                }
            }(t, e))
        }
        var s = n(333)
          , a = n(7)
          , c = n(53)
          , u = {}
          , l = null
          , p = null;
        a.isDebug() && console.log("---------im config", c);
        var h = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = "",
                o.serverName = "",
                o.url = "",
                o.param = {},
                o.auth = l,
                o.statusListener = p,
                o
            }
            return o(e, t),
            e.prototype.buildurl = function() {
                var t = this._gatewaydomain()
                  , e = {
                    __: +new Date
                }
                  , n = this.protocol;
                return "internal" == a.network.value && 1 == a.network.forceSetting && "http:" == window.location.protocol && (n = "http"),
                n + "://" + t + this.serverPath + this.serverName + ("function" == typeof this.url ? this.url() : this.url) + "?" + a.param(e)
            }
            ,
            e.prototype.getAuth = function() {
                return l
            }
            ,
            e.prototype.getStatusListener = function() {
                return p
            }
            ,
            e.prototype._gatewaydomain = function() {
                var t;
                switch (a.getEnvCode()) {
                case 0:
                    t = c.gatewayDomain.fat;
                    break;
                case 2:
                    t = c.gatewayDomain.uat;
                    break;
                case 4:
                    t = a.isInIBUSite() ? c.gatewayDomain.ibu_prd || c.gatewayDomain.prd : "internal" === a.network.value && c.gatewayDomain.corp_prd || c.gatewayDomain.prd;
                    break;
                default:
                    t = "internal" === a.network.value && c.gatewayDomain.corp_prd || c.gatewayDomain.prd
                }
                return t
            }
            ,
            e
        }(s)
          , f = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.UploadImage,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.uploadImage = f;
        var d = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetUserCommunityInfo,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getUserCommunityInfo = d;
        var g = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetMyInfo,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getMyInfo = g;
        var m = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetConversationSummaries,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getConversationSummaries = m;
        var y = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetLatestConversation,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getLatestConversation = y;
        var v = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetLatestMessageInBulk,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getLatestMessageInBulk = v;
        var b = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.SendMessage,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.sendMessage = b;
        var _ = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetChatConversationMessages,
                o.param = {},
                o.extension = [{
                    name: "cpc",
                    value: "pc"
                }],
                o
            }
            return o(e, t),
            e
        }(h);
        u.getChatConversationMessages = _;
        var T = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetChatMessages,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getChatMessages = T;
        var S = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetGroupConversationMessages,
                o.param = {},
                o.extension = [{
                    name: "cpc",
                    value: "pc"
                }],
                o
            }
            return o(e, t),
            e
        }(h);
        u.getGroupConversationMessages = S;
        var C = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetGroupMessages,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getGroupMessages = C;
        var w = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetConversationAtMessages,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getConversationAtMessages = w;
        var I = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetRangeMessageOnline,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getRangeMessageOnline = I;
        var M = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetConversations,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getConversations = M;
        var x = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetConversationByJid,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getConversationByJid = x;
        var k = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetPartnerInfo,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getPartnerInfo = k;
        var P = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetPartnerDetail,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getPartnerDetail = P;
        var A = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.PutAdviceOfRead,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.putAdviceOfRead = A;
        var O = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.PutAdviceOfReadByMsgId,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.putAdviceOfReadByMsgId = O;
        var E = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.RemoveConversation,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.removeConversation = E;
        var N = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetTotalUnreadcount,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getTotalUnreadcount = N;
        var L = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetConversationUnreadInfo,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getConversationUnreadInfo = L;
        var j = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.RemoveMessage,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.removeMessage = j;
        var B = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.CreateGroup,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.createGroup = B;
        var R = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.InviteMembers,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.inviteMembers = R;
        var F = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.QuitGroup,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.quitGroup = F;
        var G = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.RemoveMember,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.removeMember = G;
        var J = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.DismissGroup,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.dismissGroup = J;
        var U = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.UpdateGroup,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.updateGroup = U;
        var D = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.ChangeGroupRole,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.changeGroupRole = D;
        var H = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetGroupMembers,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getGroupMembers = H;
        var z = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetGroupMembersEn,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getGroupMembersEn = z;
        var W = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetGroupInfo,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getGroupInfo = W;
        var q = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetGroupMemberInfo,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getGroupMemberInfo = q;
        var V = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetContacts,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getContacts = V;
        var X = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.UpdateContact,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.updateContact = X;
        var Q = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.UpdateContacts,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.updateContacts = Q;
        var K = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.ViewContacts,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.viewContacts = K;
        var $ = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.RemoveContact,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.removeContact = $;
        var Y = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.CreateThread,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.createThread = Y;
        var Z = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetThread,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getThread = Z;
        var tt = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.RecallMessage,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.recallMessage = tt,
        u.setAuth = function(t) {
            l = t
        }
        ,
        u.setStatusListener = function(t) {
            p = t
        }
        ;
        var et = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetHistoricalRangeMessage,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getHistoricalRangeMessage = et;
        var nt = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.UpdateGroupConfig,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.updateGroupConfig = nt;
        var rt = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.UpdateMsgBlockConfig,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.updateMsgBlockConfig = rt;
        var it = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetMsgBlockConfig,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getMsgBlockConfig = it;
        var ot = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetRecommendNickName,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getRecommendNickName = ot;
        var st = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.SubmitNickName,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.submitNickName = st;
        var at = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.IsInWhiteList,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.isInWhiteList = at;
        var ct = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.StartCounsel,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.startCounsel = ct;
        var ut = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.SendAIChatMessage,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.sendAIChatMessage = ut;
        var lt = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.StartAIChat,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.startAIChat = lt;
        var pt = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.SendAIChatMessageForOpenIM,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.sendAIChatMessageForOpenIM = pt;
        var ht = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.StartAIChatForOpenIM,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.startAIChatForOpenIM = ht;
        var ft = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.StartChat,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.startChat = ft;
        var dt = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetCandidateAgents,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getCandidateAgents = dt;
        var gt = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetRelativeQuestions,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getRelativeQuestions = gt;
        var mt = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.FinishChat,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.finishChat = mt;
        var yt = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.PostScore,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.postScore = yt;
        var vt = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.CheckMemberStatus,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.checkMemberStatus = vt;
        var bt = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.CheckChatStatus,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.checkChatStatus = bt;
        var _t = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.CheckScoreStatus,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.checkScoreStatus = _t;
        var Tt = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.RebindSession,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.rebindSession = Tt;
        var St = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetCommonProblems,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getCommonProblems = St;
        var Ct = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.AddScore,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.addScore = Ct;
        var wt = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.CloseWorkSheetByCustomer,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.closeWorkSheetByCustomer = wt;
        var It = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetGroupAdmins,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getGroupAdmins = It;
        var Mt = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetIMServer,
                o.param = {},
                o
            }
            return o(e, t),
            e
        }(h);
        u.getImServer = Mt;
        var xt = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.GetRecentMessages,
                o
            }
            return o(e, t),
            e
        }(h);
        u.getRecentMessages = xt;
        var kt = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.serverPath = c.SOAService.CheckHit,
                o
            }
            return o(e, t),
            e
        }(h);
        u.checkHit = kt,
        t.exports = u
    }
    , function(t, e, n) {
        var r = n(4)
          , i = n(1).document
          , o = r(i) && r(i.createElement);
        t.exports = function(t) {
            return o ? i.createElement(t) : {}
        }
    }
    , function(t, e, n) {
        e.f = n(5)
    }
    , function(t, e, n) {
        var r = n(54)("keys")
          , i = n(33);
        t.exports = function(t) {
            return r[t] || (r[t] = i(t))
        }
    }
    , function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }
    , function(t, e, n) {
        var r = n(1).document;
        t.exports = r && r.documentElement
    }
    , function(t, e, n) {
        var r = n(4)
          , i = n(3)
          , o = function(t, e) {
            if (i(t),
            !r(e) && null !== e)
                throw TypeError(e + ": can't set as prototype!")
        };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__"in {} ? function(t, e, r) {
                try {
                    (r = n(20)(Function.call, n(23).f(Object.prototype, "__proto__").set, 2))(t, []),
                    e = !(t instanceof Array)
                } catch (t) {
                    e = !0
                }
                return function(t, n) {
                    return o(t, n),
                    e ? t.__proto__ = n : r(t, n),
                    t
                }
            }({}, !1) : void 0),
            check: o
        }
    }
    , function(t, e) {
        t.exports = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff"
    }
    , function(t, e, n) {
        var r = n(4)
          , i = n(72).set;
        t.exports = function(t, e, n) {
            var o, s = e.constructor;
            return s !== n && "function" == typeof s && (o = s.prototype) !== n.prototype && r(o) && i && i(t, o),
            t
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(22)
          , i = n(28);
        t.exports = function(t) {
            var e = String(i(this))
              , n = ""
              , o = r(t);
            if (o < 0 || o == 1 / 0)
                throw RangeError("Count can't be negative");
            for (; o > 0; (o >>>= 1) && (e += e))
                1 & o && (n += e);
            return n
        }
    }
    , function(t, e) {
        t.exports = Math.sign || function(t) {
            return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
        }
    }
    , function(t, e) {
        var n = Math.expm1;
        t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function(t) {
            return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
        }
        : n
    }
    , function(t, e, n) {
        var r = n(22)
          , i = n(28);
        t.exports = function(t) {
            return function(e, n) {
                var o, s, a = String(i(e)), c = r(n), u = a.length;
                return c < 0 || c >= u ? t ? "" : void 0 : (o = a.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343 ? t ? a.charAt(c) : o : t ? a.slice(c, c + 2) : s - 56320 + (o - 55296 << 10) + 65536
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(34)
          , i = n(0)
          , o = n(14)
          , s = n(17)
          , a = n(44)
          , c = n(111)
          , u = n(42)
          , l = n(39)
          , p = n(5)("iterator")
          , h = !([].keys && "next"in [].keys())
          , f = function() {
            return this
        };
        t.exports = function(t, e, n, d, g, m, y) {
            c(n, e, d);
            var v, b, _, T = function(t) {
                if (!h && t in I)
                    return I[t];
                switch (t) {
                case "keys":
                case "values":
                    return function() {
                        return new n(this,t)
                    }
                }
                return function() {
                    return new n(this,t)
                }
            }, S = e + " Iterator", C = "values" == g, w = !1, I = t.prototype, M = I[p] || I["@@iterator"] || g && I[g], x = M || T(g), k = g ? C ? T("entries") : x : void 0, P = "Array" == e && I.entries || M;
            if (P && (_ = l(P.call(new t))) !== Object.prototype && _.next && (u(_, S, !0),
            r || "function" == typeof _[p] || s(_, p, f)),
            C && M && "values" !== M.name && (w = !0,
            x = function() {
                return M.call(this)
            }
            ),
            r && !y || !h && !w && I[p] || s(I, p, x),
            a[e] = x,
            a[S] = f,
            g)
                if (v = {
                    values: C ? x : T("values"),
                    keys: m ? x : T("keys"),
                    entries: k
                },
                y)
                    for (b in v)
                        b in I || o(I, b, v[b]);
                else
                    i(i.P + i.F * (h || w), e, v);
            return v
        }
    }
    , function(t, e, n) {
        var r = n(81)
          , i = n(28);
        t.exports = function(t, e, n) {
            if (r(e))
                throw TypeError("String#" + n + " doesn't accept regex!");
            return String(i(t))
        }
    }
    , function(t, e, n) {
        var r = n(4)
          , i = n(27)
          , o = n(5)("match");
        t.exports = function(t) {
            var e;
            return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t))
        }
    }
    , function(t, e, n) {
        var r = n(5)("match");
        t.exports = function(t) {
            var e = /./;
            try {
                "/./"[t](e)
            } catch (n) {
                try {
                    return e[r] = !1,
                    !"/./"[t](e)
                } catch (t) {}
            }
            return !0
        }
    }
    , function(t, e, n) {
        var r = n(44)
          , i = n(5)("iterator")
          , o = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (r.Array === t || o[i] === t)
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(10)
          , i = n(32);
        t.exports = function(t, e, n) {
            e in t ? r.f(t, e, i(0, n)) : t[e] = n
        }
    }
    , function(t, e, n) {
        var r = n(51)
          , i = n(5)("iterator")
          , o = n(44);
        t.exports = n(8).getIteratorMethod = function(t) {
            if (void 0 != t)
                return t[i] || t["@@iterator"] || o[r(t)]
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(12)
          , i = n(36)
          , o = n(6);
        t.exports = function(t) {
            for (var e = r(this), n = o(e.length), s = arguments.length, a = i(s > 1 ? arguments[1] : void 0, n), c = s > 2 ? arguments[2] : void 0, u = void 0 === c ? n : i(c, n); u > a; )
                e[a++] = t;
            return e
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(40)
          , i = n(116)
          , o = n(44)
          , s = n(18);
        t.exports = n(79)(Array, "Array", function(t, e) {
            this._t = s(t),
            this._i = 0,
            this._k = e
        }, function() {
            var t = this._t
              , e = this._k
              , n = this._i++;
            return !t || n >= t.length ? (this._t = void 0,
            i(1)) : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
        }, "values"),
        o.Arguments = o.Array,
        r("keys"),
        r("values"),
        r("entries")
    }
    , function(t, e, n) {
        "use strict";
        var r = n(59)
          , i = RegExp.prototype.exec
          , o = String.prototype.replace
          , s = i
          , a = function() {
            var t = /a/
              , e = /b*/g;
            return i.call(t, "a"),
            i.call(e, "a"),
            0 !== t.lastIndex || 0 !== e.lastIndex
        }()
          , c = void 0 !== /()??/.exec("")[1];
        (a || c) && (s = function(t) {
            var e, n, s, u, l = this;
            return c && (n = new RegExp("^" + l.source + "$(?!\\s)",r.call(l))),
            a && (e = l.lastIndex),
            s = i.call(l, t),
            a && s && (l.lastIndex = l.global ? s.index + s[0].length : e),
            c && s && s.length > 1 && o.call(s[0], n, function() {
                for (u = 1; u < arguments.length - 2; u++)
                    void 0 === arguments[u] && (s[u] = void 0)
            }),
            s
        }
        ),
        t.exports = s
    }
    , function(t, e, n) {
        "use strict";
        var r = n(78)(!0);
        t.exports = function(t, e, n) {
            return e + (n ? r(t, e).length : 1)
        }
    }
    , function(t, e, n) {
        var r, i, o, s = n(20), a = n(105), c = n(71), u = n(67), l = n(1), p = l.process, h = l.setImmediate, f = l.clearImmediate, d = l.MessageChannel, g = l.Dispatch, m = 0, y = {}, v = function() {
            var t = +this;
            if (y.hasOwnProperty(t)) {
                var e = y[t];
                delete y[t],
                e()
            }
        }, b = function(t) {
            v.call(t.data)
        };
        h && f || (h = function(t) {
            for (var e = [], n = 1; arguments.length > n; )
                e.push(arguments[n++]);
            return y[++m] = function() {
                a("function" == typeof t ? t : Function(t), e)
            }
            ,
            r(m),
            m
        }
        ,
        f = function(t) {
            delete y[t]
        }
        ,
        "process" == n(27)(p) ? r = function(t) {
            p.nextTick(s(v, t, 1))
        }
        : g && g.now ? r = function(t) {
            g.now(s(v, t, 1))
        }
        : d ? (o = (i = new d).port2,
        i.port1.onmessage = b,
        r = s(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(t) {
            l.postMessage(t + "", "*")
        }
        ,
        l.addEventListener("message", b, !1)) : r = "onreadystatechange"in u("script") ? function(t) {
            c.appendChild(u("script")).onreadystatechange = function() {
                c.removeChild(this),
                v.call(t)
            }
        }
        : function(t) {
            setTimeout(s(v, t, 1), 0)
        }
        ),
        t.exports = {
            set: h,
            clear: f
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(1)
          , i = n(9)
          , o = n(34)
          , s = n(65)
          , a = n(17)
          , c = n(47)
          , u = n(2)
          , l = n(46)
          , p = n(22)
          , h = n(6)
          , f = n(124)
          , d = n(38).f
          , g = n(10).f
          , m = n(86)
          , y = n(42)
          , v = "prototype"
          , b = "Wrong index!"
          , _ = r.ArrayBuffer
          , T = r.DataView
          , S = r.Math
          , C = r.RangeError
          , w = r.Infinity
          , I = _
          , M = S.abs
          , x = S.pow
          , k = S.floor
          , P = S.log
          , A = S.LN2
          , O = i ? "_b" : "buffer"
          , E = i ? "_l" : "byteLength"
          , N = i ? "_o" : "byteOffset";
        function L(t, e, n) {
            var r, i, o, s = new Array(n), a = 8 * n - e - 1, c = (1 << a) - 1, u = c >> 1, l = 23 === e ? x(2, -24) - x(2, -77) : 0, p = 0, h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for ((t = M(t)) != t || t === w ? (i = t != t ? 1 : 0,
            r = c) : (r = k(P(t) / A),
            t * (o = x(2, -r)) < 1 && (r--,
            o *= 2),
            (t += r + u >= 1 ? l / o : l * x(2, 1 - u)) * o >= 2 && (r++,
            o /= 2),
            r + u >= c ? (i = 0,
            r = c) : r + u >= 1 ? (i = (t * o - 1) * x(2, e),
            r += u) : (i = t * x(2, u - 1) * x(2, e),
            r = 0)); e >= 8; s[p++] = 255 & i,
            i /= 256,
            e -= 8)
                ;
            for (r = r << e | i,
            a += e; a > 0; s[p++] = 255 & r,
            r /= 256,
            a -= 8)
                ;
            return s[--p] |= 128 * h,
            s
        }
        function j(t, e, n) {
            var r, i = 8 * n - e - 1, o = (1 << i) - 1, s = o >> 1, a = i - 7, c = n - 1, u = t[c--], l = 127 & u;
            for (u >>= 7; a > 0; l = 256 * l + t[c],
            c--,
            a -= 8)
                ;
            for (r = l & (1 << -a) - 1,
            l >>= -a,
            a += e; a > 0; r = 256 * r + t[c],
            c--,
            a -= 8)
                ;
            if (0 === l)
                l = 1 - s;
            else {
                if (l === o)
                    return r ? NaN : u ? -w : w;
                r += x(2, e),
                l -= s
            }
            return (u ? -1 : 1) * r * x(2, l - e)
        }
        function B(t) {
            return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
        }
        function R(t) {
            return [255 & t]
        }
        function F(t) {
            return [255 & t, t >> 8 & 255]
        }
        function G(t) {
            return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
        }
        function J(t) {
            return L(t, 52, 8)
        }
        function U(t) {
            return L(t, 23, 4)
        }
        function D(t, e, n) {
            g(t[v], e, {
                get: function() {
                    return this[n]
                }
            })
        }
        function H(t, e, n, r) {
            var i = f(+n);
            if (i + e > t[E])
                throw C(b);
            var o = t[O]._b
              , s = i + t[N]
              , a = o.slice(s, s + e);
            return r ? a : a.reverse()
        }
        function z(t, e, n, r, i, o) {
            var s = f(+n);
            if (s + e > t[E])
                throw C(b);
            for (var a = t[O]._b, c = s + t[N], u = r(+i), l = 0; l < e; l++)
                a[c + l] = u[o ? l : e - l - 1]
        }
        if (s.ABV) {
            if (!u(function() {
                _(1)
            }) || !u(function() {
                new _(-1)
            }) || u(function() {
                return new _,
                new _(1.5),
                new _(NaN),
                "ArrayBuffer" != _.name
            })) {
                for (var W, q = (_ = function(t) {
                    return l(this, _),
                    new I(f(t))
                }
                )[v] = I[v], V = d(I), X = 0; V.length > X; )
                    (W = V[X++])in _ || a(_, W, I[W]);
                o || (q.constructor = _)
            }
            var Q = new T(new _(2))
              , K = T[v].setInt8;
            Q.setInt8(0, 2147483648),
            Q.setInt8(1, 2147483649),
            !Q.getInt8(0) && Q.getInt8(1) || c(T[v], {
                setInt8: function(t, e) {
                    K.call(this, t, e << 24 >> 24)
                },
                setUint8: function(t, e) {
                    K.call(this, t, e << 24 >> 24)
                }
            }, !0)
        } else
            _ = function(t) {
                l(this, _, "ArrayBuffer");
                var e = f(t);
                this._b = m.call(new Array(e), 0),
                this[E] = e
            }
            ,
            T = function(t, e, n) {
                l(this, T, "DataView"),
                l(t, _, "DataView");
                var r = t[E]
                  , i = p(e);
                if (i < 0 || i > r)
                    throw C("Wrong offset!");
                if (i + (n = void 0 === n ? r - i : h(n)) > r)
                    throw C("Wrong length!");
                this[O] = t,
                this[N] = i,
                this[E] = n
            }
            ,
            i && (D(_, "byteLength", "_l"),
            D(T, "buffer", "_b"),
            D(T, "byteLength", "_l"),
            D(T, "byteOffset", "_o")),
            c(T[v], {
                getInt8: function(t) {
                    return H(this, 1, t)[0] << 24 >> 24
                },
                getUint8: function(t) {
                    return H(this, 1, t)[0]
                },
                getInt16: function(t) {
                    var e = H(this, 2, t, arguments[1]);
                    return (e[1] << 8 | e[0]) << 16 >> 16
                },
                getUint16: function(t) {
                    var e = H(this, 2, t, arguments[1]);
                    return e[1] << 8 | e[0]
                },
                getInt32: function(t) {
                    return B(H(this, 4, t, arguments[1]))
                },
                getUint32: function(t) {
                    return B(H(this, 4, t, arguments[1])) >>> 0
                },
                getFloat32: function(t) {
                    return j(H(this, 4, t, arguments[1]), 23, 4)
                },
                getFloat64: function(t) {
                    return j(H(this, 8, t, arguments[1]), 52, 8)
                },
                setInt8: function(t, e) {
                    z(this, 1, t, R, e)
                },
                setUint8: function(t, e) {
                    z(this, 1, t, R, e)
                },
                setInt16: function(t, e) {
                    z(this, 2, t, F, e, arguments[2])
                },
                setUint16: function(t, e) {
                    z(this, 2, t, F, e, arguments[2])
                },
                setInt32: function(t, e) {
                    z(this, 4, t, G, e, arguments[2])
                },
                setUint32: function(t, e) {
                    z(this, 4, t, G, e, arguments[2])
                },
                setFloat32: function(t, e) {
                    z(this, 4, t, U, e, arguments[2])
                },
                setFloat64: function(t, e) {
                    z(this, 8, t, J, e, arguments[2])
                }
            });
        y(_, "ArrayBuffer"),
        y(T, "DataView"),
        a(T[v], s.VIEW, !0),
        e.ArrayBuffer = _,
        e.DataView = T
    }
    , function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }
    , function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }
    , function(t, e, n) {
        t.exports = !n(129)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function o(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf,
            function(t, e) {
                for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = Object.getOwnPropertyDescriptor(e, i);
                    o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                }
            }(t, e))
        }
        var s = n(13)
          , a = {}
          , c = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.messageId = null,
                o.messageCategory = null,
                o.messageType = null,
                o.fromJid = null,
                o.fromNickname = null,
                o.toJid = null,
                o.threadId = null,
                o.createThread = null,
                o.subject = null,
                o.status = null,
                o.isRead = null,
                o.bizType = null,
                o.conversationType = null,
                o.createTime = null,
                o.localId = null,
                o.title = null,
                o.extPropertys = null,
                o
            }
            return o(e, t),
            e
        }(n(11))
          , u = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.messageCategory = s.MessageType.TextMessage,
                o.messageType = s.MessageType.TextMessage,
                o.content = null,
                o
            }
            return o(e, t),
            e
        }(c);
        a.TextMessage = u;
        var l = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.messageCategory = s.MessageType.ImageMessage,
                o.messageType = s.MessageType.ImageMessage,
                o.imageUrl = null,
                o.thumbUrl = null,
                o.width = 0,
                o.height = 0,
                o
            }
            return o(e, t),
            e
        }(c);
        a.ImageMessage = l;
        var p = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.messageCategory = s.MessageType.CardMessage,
                o.messageType = s.MessageType.CardMessage,
                o.avatar = null,
                o.title = null,
                o.desc = null,
                o.linkUrl = null,
                o.type = null,
                o
            }
            return o(e, t),
            e
        }(c);
        a.CardMessage = p;
        var h = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.messageCategory = s.MessageType.VideoMessage,
                o.messageType = s.MessageType.VideoMessage,
                o.filename = null,
                o.cover = null,
                o.url = null,
                o.duration = null,
                o.size = null,
                o.secret = null,
                o
            }
            return o(e, t),
            e
        }(c);
        a.VideoMessage = h;
        var f = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.messageCategory = s.MessageType.AudioMessage,
                o.messageType = s.MessageType.AudioMessage,
                o.filename = null,
                o.url = null,
                o.duration = null,
                o.size = null,
                o.secret = null,
                o
            }
            return o(e, t),
            e
        }(c);
        a.AudioMessage = f;
        var d = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.messageCategory = s.MessageType.FileMessage,
                o.messageType = s.MessageType.FileMessage,
                o.filename = null,
                o.url = null,
                o.size = null,
                o.secret = null,
                o
            }
            return o(e, t),
            e
        }(c);
        a.FileMessage = d;
        var g = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.messageCategory = s.MessageType.LocationMessage,
                o.messageType = s.MessageType.LocationMessage,
                o.lng = null,
                o.lat = null,
                o.thumburl = null,
                o.address = null,
                o.poiName = null,
                o.city = null,
                o.country = null,
                o.cooType = null,
                o
            }
            return o(e, t),
            e
        }(c);
        a.LocationMessage = g;
        var m = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.messageCategory = s.MessageType.CustomContentMessage,
                o.messageType = s.MessageType.CustomContentMessage,
                o.actionCode = null,
                o
            }
            return o(e, t),
            e
        }(c);
        a.CustomContentMessage = m;
        var y = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.messageCategory = s.MessageType.EmoticonMessage,
                o.messageType = s.MessageType.EmoticonMessage,
                o.code = null,
                o.label = null,
                o
            }
            return o(e, t),
            e
        }(c);
        a.EmoticonMessage = y;
        var v = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.messageCategory = s.MessageType.AtMessage,
                o.messageType = s.MessageType.AtMessage,
                o.body = null,
                o.atUid = null,
                o.atFromNickname = null,
                o
            }
            return o(e, t),
            e
        }(c);
        a.AtMessage = v;
        var b = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.messageCategory = s.MessageType.TemplateMessage,
                o.messageType = s.MessageType.TemplateMessage,
                o.code = null,
                o.values = null,
                o
            }
            return o(e, t),
            e
        }(c);
        a.TemplateMessage = b;
        var _ = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.messageCategory = s.MessageType.SystemMessage,
                o.operator = null,
                o.tip = null,
                o.gtype = null,
                o.gname = null,
                o.butype = null,
                o.content = null,
                o.isPresent = null,
                o.actionCode = null,
                o
            }
            return o(e, t),
            e
        }(c);
        a.SystemMessage = _,
        t.exports = a
    }
    , function(t, e, n) {
        "use strict";
        var r = n(95)
          , i = n(13)
          , o = n(7)
          , s = o.isDebug()
          , a = n(11)
          , c = n(48)
          , u = n(337)
          , l = function(t) {
            function e(n) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var r = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, t.call(this, n));
                return r.initialize(n),
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf,
                function(t, e) {
                    for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                        var i = n[r]
                          , o = Object.getOwnPropertyDescriptor(e, i);
                        o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                    }
                }(t, e))
            }(e, t),
            e.prototype.initialize = function(t) {
                this.map = {},
                this.connectCallback = null,
                this._client = t,
                this.repeatChecker = new u("messageId")
            }
            ,
            e.prototype.onReceived = function(t) {
                if (t && 0 === t.errorcode)
                    if (t.pollType)
                        t.messages = this.jsonSerialize(t.messages, null, t.conversationType, t.localIds);
                    else if (t.messages = this.serialize(t.messages),
                    t.messages && t.messages.length > 0 && this._client && this._client._channel && "websocket" == this._client._channel.getConnectionChannel()) {
                        var e = this._client._conversationType;
                        if ((e == i.ConversationType.SingleChat || e == i.ConversationType.GroupChat) && this._client._partnerJid && o.jidToUid(t.messages[0].fromJid).toLowerCase() != this._client._partnerJid.toLowerCase() && o.jidToUid(t.messages[0].toJid).toLowerCase() != this._client._partnerJid.toLowerCase())
                            return;
                        t.messages[0].createTime && (this._client._lastTimestamp = t.messages[0].createTime,
                        this._client._lastMessageId = t.messages[0].messageId,
                        t.conversationType = t.messages[0].conversationType,
                        t.lastMessageTimestamp = t.messages[0].createTime)
                    }
                var n = [];
                if (t.messages && t.messages.length > 0)
                    for (var r = 0; r < t.messages.length; r++)
                        this.repeatChecker.check(t.messages[r]) || n.push(t.messages[r]);
                var s = t.messages;
                t.messages = n,
                c.publish(i.EventType.OnReceivedMessage, [t]);
                try {
                    if (s.length > 0) {
                        var a = s[0].createTime || (new Date).getTime()
                          , u = [];
                        for (r = 0; r < s.length; r++) {
                            var l = JSON.parse(JSON.stringify(s[r]));
                            -4 != l.messageType && (l.messageBody && "string" == typeof l.messageBody && (v.messageBody = o.confuseMessage(l.messageBody)),
                            l.content && "string" == typeof l.content && (l.content = o.confuseMessage(l.content)),
                            l.extPropertys && (l.extPropertys = "{***}"),
                            u.push(l))
                        }
                        u.length > 0 && o.ubtTrace({
                            key: "o_im_online_sdk_onmessage",
                            Action: "onMessage",
                            Params: JSON.stringify(u),
                            BeginTime: a,
                            TotalTime: +new Date - a,
                            pollType: t.pollType
                        })
                    }
                } catch (t) {}
            }
            ,
            e.prototype.handleMessage = function(t) {
                t && t && this.onReceived(t)
            }
            ,
            e.prototype.serialize = function(t, e) {
                return this._client && this._client._channel && "websocket" == this._client._channel.getConnectionChannel() ? this.xmppSerialize(t, e) : this.jsonSerialize(t, e)
            }
            ,
            e.prototype.jsonSerialize = function(t, e, n, a) {
                var c = []
                  , u = null
                  , l = null
                  , p = [];
                return t && (o.isArray(t) || (t = [t]),
                e && e.length > 0 && (p = this.convertSenders(e)),
                t.forEach(function(t) {
                    if (u = null,
                    l = {},
                    t && void 0 !== t.msgtype) {
                        try {
                            l = JSON.parse(t.messageBody)
                        } catch (e) {
                            s && console.log(e);
                            try {
                                l = JSON.parse(t.messageBody.replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/\t/g, "\\t"))
                            } catch (t) {
                                s && console.log(t),
                                l = {}
                            }
                        }
                        if (null == l && (l = {}),
                        t.msgtype == i.MessageType.TextMessage)
                            (u = new r.TextMessage).content = t.messageBody;
                        else if (t.msgtype == i.MessageType.ImageMessage)
                            (u = new r.ImageMessage).imageUrl = l.url,
                            u.thumbUrl = l.thumbUrl,
                            u.width = l.width,
                            u.height = l.height;
                        else if (t.msgtype == i.MessageType.CardMessage)
                            (u = new r.CardMessage).avatar = l.avatar,
                            u.title = l.title,
                            u.desc = l.desc,
                            u.linkUrl = l.url,
                            u.type = l.type;
                        else if (t.msgtype == i.MessageType.VideoMessage)
                            (u = new r.VideoMessage).title = l.title,
                            u.extPropertys = l.ext,
                            l.video && (u.filename = l.video.filename,
                            u.cover = l.video.cover,
                            u.url = l.video.url,
                            u.duration = l.video.duration,
                            u.size = l.video.size,
                            u.secret = l.video.secret);
                        else if (t.msgtype == i.MessageType.AudioMessage)
                            (u = new r.AudioMessage).title = l.title,
                            u.extPropertys = l.ext,
                            l.audio && (u.filename = l.audio.filename,
                            u.url = l.audio.url,
                            u.duration = l.audio.duration,
                            u.size = l.audio.size,
                            u.secret = l.audio.secret);
                        else if (t.msgtype == i.MessageType.FileMessage)
                            (u = new r.FileMessage).title = l.title,
                            u.extPropertys = l.ext,
                            l.file && (u.filename = l.file.filename,
                            u.url = l.file.url,
                            u.size = l.file.size,
                            u.secret = l.file.secret);
                        else if (t.msgtype == i.MessageType.LocationMessage)
                            (u = new r.LocationMessage).title = l.title,
                            u.extPropertys = l.ext,
                            l.location && (u.lng = l.location.lng,
                            u.lat = l.location.lat,
                            u.thumburl = l.location.thumburl,
                            u.address = l.location.address,
                            u.poiName = l.location.poiname,
                            u.city = l.location.city,
                            u.country = l.location.country,
                            u.cooType = l.location.cooType);
                        else if (t.msgtype == i.MessageType.CustomContentMessage)
                            (u = new r.CustomContentMessage).title = l.title,
                            u.extPropertys = l.ext,
                            u.actionCode = l.action,
                            void 0 !== l.isPresent && (u.isPresent = l.isPresent),
                            void 0 !== l.see && (u.see = l.see),
                            l.sid && (u.sessionId = l.sid);
                        else if (t.msgtype == i.MessageType.EmoticonMessage)
                            (u = new r.EmoticonMessage).title = l.title,
                            u.extPropertys = l.ext,
                            l.emoticon && (u.code = l.emoticon.code,
                            u.label = l.emoticon.label);
                        else if (t.msgtype == i.MessageType.AtMessage)
                            (u = new r.AtMessage).body = l.body,
                            u.atUid = l.uid,
                            u.atFromNickname = l.from;
                        else if (t.msgtype == i.MessageType.TemplateMessage)
                            (u = new r.TemplateMessage).title = l.title,
                            u.extPropertys = l.ext,
                            l.templet && (u.code = l.templet.code,
                            u.values = l.templet.values);
                        else {
                            if (!(t.msgtype >= 1e3 && t.msgtype <= 1999))
                                return;
                            u = new r.SystemMessage,
                            1007 == t.msgtype ? (u.title = l.title,
                            u.extPropertys = l.ext,
                            u.isPresent = l.isPresent,
                            u.actionCode = l.action,
                            void 0 !== u.see && (u.see = u.see),
                            l.sid && (u.sessionId = u.sid)) : 1009 == t.msgtype ? (u.isPresent = l.isPresent,
                            u.title = l.title,
                            u.operator = l.operator,
                            u.extPropertys = l.ext,
                            u.recallMessageId = l.recallMessageId,
                            u.from = l.from,
                            u.code = l.code,
                            u.operatorName = l.operatorName,
                            u.recallMessageTime = l.createTime) : (u.operator = l.operator,
                            u.tip = l.tip,
                            u.gtype = l.gtype,
                            u.gname = l.gname,
                            u.butype = l.butype,
                            u.content = l.content,
                            u.title = l.title || "",
                            u.extPropertys = l.ext || {},
                            u.isPresent = l.isPresent || null,
                            u.actionCode = l.action || "")
                        }
                        u.messageType = t.msgtype,
                        u.messageId = t.msgId,
                        u.threadId = t.threadId,
                        u.subject = t.subject,
                        u.createTime = t.createTime,
                        u.fromJid = t.fromJid,
                        u.fromNickname = t.fromNick,
                        u.bizType = t.bizType,
                        u.toJid = t.toJid,
                        u.isRead = t.isread,
                        u.conversationType = n,
                        p && p[t.fromJid] && (u.nickname = p[t.fromJid].nickname,
                        u.avatar = p[t.fromJid].avatar),
                        u.localId = t.localId,
                        u.status = t.status;
                        try {
                            if (a && a.length > 0)
                                for (var e = 0; e < a.length; e++)
                                    if (a[e].partnerJid === t.partner) {
                                        for (var o = 0; o < a[e].idInfos.length; o++)
                                            if (a[e].idInfos[o].tid === t.msgId) {
                                                u.localId = a[e].idInfos[o].localid;
                                                break
                                            }
                                        break
                                    }
                        } catch (t) {}
                        c.push(u)
                    }
                })),
                c
            }
            ,
            e.prototype.xmppSerialize = function(t, e) {
                var n = []
                  , a = null
                  , c = null
                  , u = null
                  , l = null;
                return t && (o.isArray(t) || (t = [t]),
                t.forEach(function(t) {
                    a = {},
                    l = t;
                    try {
                        for (var e = l.getAttribute("type"), p = "", h = 0; h < l.childElementCount; h++)
                            if ("body" == (g = l.childNodes[h]).nodeName) {
                                p = g.textContent;
                                break
                            }
                        if (u = l.getAttribute("msgtype"),
                        l && void 0 !== u && null != u) {
                            if (o.inArray(e, ["chat", "groupchat", "muc_config", "muc_users_config", "muc_dismiss", "sys_mam", "sys_muc", "normal", "input_state"]) < 0)
                                return;
                            try {
                                u != i.MessageType.TextMessage && (c = JSON.parse(p))
                            } catch (e) {
                                s && console.log(e);
                                try {
                                    c = JSON.parse(t.messageBody.replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/\t/g, "\\t"))
                                } catch (t) {
                                    s && console.log(e),
                                    c = {}
                                }
                            }
                            if (u == i.MessageType.TextMessage)
                                (a = new r.TextMessage).content = p;
                            else if (u == i.MessageType.ImageMessage)
                                (a = new r.ImageMessage).imageUrl = c.url,
                                a.thumbUrl = c.thumbUrl,
                                a.width = c.width,
                                a.height = c.height;
                            else if (u == i.MessageType.CardMessage)
                                (a = new r.CardMessage).avatar = c.avatar,
                                a.title = c.title,
                                a.desc = c.desc,
                                a.linkUrl = c.url,
                                a.type = c.type;
                            else if (u == i.MessageType.VideoMessage)
                                (a = new r.VideoMessage).title = c.title,
                                a.extPropertys = c.ext,
                                c.video && (a.filename = c.video.filename,
                                a.cover = c.video.cover,
                                a.url = c.video.url,
                                a.duration = c.video.duration,
                                a.size = c.video.size,
                                a.secret = c.video.secret);
                            else if (u == i.MessageType.AudioMessage)
                                (a = new r.AudioMessage).title = c.title,
                                a.extPropertys = c.ext,
                                c.audio && (a.filename = c.audio.filename,
                                a.url = c.audio.url,
                                a.duration = c.audio.duration,
                                a.size = c.audio.size,
                                a.secret = c.audio.secret);
                            else if (u == i.MessageType.FileMessage)
                                (a = new r.FileMessage).title = c.title,
                                a.extPropertys = c.ext,
                                c.file && (a.filename = c.file.filename,
                                a.url = c.file.url,
                                a.size = c.file.size,
                                a.secret = c.file.secret);
                            else if (u == i.MessageType.LocationMessage)
                                (a = new r.LocationMessage).title = c.title,
                                a.extPropertys = c.ext,
                                c.location && (a.lng = c.location.lng,
                                a.lat = c.location.lat,
                                a.thumburl = c.location.thumburl,
                                a.address = c.location.address,
                                a.poiName = c.location.poiname,
                                a.city = c.location.city,
                                a.country = c.location.country,
                                a.cooType = c.location.cooType);
                            else if (u == i.MessageType.CustomContentMessage)
                                (a = new r.CustomContentMessage).title = c.title,
                                a.extPropertys = c.ext,
                                a.actionCode = c.action,
                                void 0 !== c.isPresent && (a.isPresent = c.isPresent),
                                void 0 !== c.see && (a.see = c.see),
                                c.sid && (a.sessionId = c.sid);
                            else if (u == i.MessageType.EmoticonMessage)
                                (a = new r.EmoticonMessage).title = c.title,
                                a.extPropertys = c.ext,
                                c.emoticon && (a.code = c.emoticon.code,
                                a.label = c.emoticon.label);
                            else if (u == i.MessageType.AtMessage)
                                (a = new r.AtMessage).body = c.body,
                                a.atUid = c.uid,
                                a.atFromNickname = c.from;
                            else if (u == i.MessageType.TemplateMessage)
                                (a = new r.TemplateMessage).title = c.title,
                                a.extPropertys = c.ext,
                                c.templet && (a.code = c.templet.code,
                                a.values = c.templet.values);
                            else {
                                if (!(u >= 1e3 && u <= 1999))
                                    return;
                                if (a = new r.SystemMessage,
                                1007 == u)
                                    a.title = c.title,
                                    a.extPropertys = c.ext,
                                    a.isPresent = c.isPresent,
                                    a.actionCode = c.action,
                                    void 0 !== c.see && (a.see = c.see),
                                    c.sid && (a.sessionId = c.sid);
                                else if (1001 == u) {
                                    var f = null;
                                    for (h = 0; h < l.childElementCount; h++)
                                        if ("invite" == (g = l.children[h]).nodeName) {
                                            f = g;
                                            break
                                        }
                                    f && (a.operator = f.getAttribute("from")),
                                    a.tip = l.getAttribute("tip"),
                                    a.content = [c[0].user]
                                } else if (1002 == u) {
                                    var d = null;
                                    for (h = 0; h < l.childElementCount; h++) {
                                        var g;
                                        if ("kick" == (g = l.children[h]).nodeName) {
                                            d = g;
                                            break
                                        }
                                    }
                                    d && (a.operator = d.getAttribute("from")),
                                    a.tip = l.getAttribute("tip"),
                                    p && (a.content = [p])
                                } else
                                    1009 == u ? (a.isPresent = c.isPresent,
                                    a.extPropertys = c.ext,
                                    a.title = c.title,
                                    a.operator = c.operator,
                                    a.recallMessageId = c.recallMessageId,
                                    a.from = c.from,
                                    a.code = c.code,
                                    a.operatorName = c.operatorName,
                                    a.recallMessageTime = c.createTime) : (a.operator = c.operator,
                                    a.tip = c.tip,
                                    a.gtype = c.gtype,
                                    a.gname = c.gname,
                                    a.butype = c.butype,
                                    a.content = c.content,
                                    a.title = c.title || "",
                                    a.extPropertys = c.ext || {},
                                    a.isPresent = c.isPresent || null,
                                    a.actionCode = c.action || "")
                            }
                            switch (a.messageType = Number(u),
                            a.messageId = l.getAttribute("id"),
                            a.threadId = l.getAttribute("threadid"),
                            a.createTime = Number(l.getAttribute("create_time")),
                            a.fromJid = l.getAttribute("from"),
                            a.toJid = l.getAttribute("to"),
                            a.bizType = Number(l.getAttribute("bizType")),
                            a.localId = l.getAttribute("localid"),
                            e) {
                            case "chat":
                            case "sys_mam":
                                a.conversationType = i.ConversationType.SingleChat;
                                break;
                            case "normal":
                                1021 == u ? a.conversationType = i.ConversationType.SingleChat : 1001 != u && 1002 != u && 1003 != u && 1004 != u && 1005 != u && 1006 != u && 1007 != u && 1008 != u && 1022 != u || (a.conversationType = i.ConversationType.GroupChat);
                                break;
                            case "groupchat":
                            case "muc_config":
                            case "muc_users_config":
                            case "muc_dismiss":
                            case "sys_muc":
                                a.conversationType = i.ConversationType.GroupChat
                            }
                            n.push(a)
                        }
                        if (l && "input_state" == e) {
                            a.messageType = i.MessageType.InputStateMessage,
                            a.fromJid = l.getAttribute("from"),
                            a.toJid = l.getAttribute("to"),
                            a.isGroup = l.getAttribute("isGroup") || 0;
                            try {
                                a.content = JSON.parse(p)
                            } catch (t) {
                                a.content = p
                            }
                            n.push(a)
                        }
                    } catch (t) {}
                })),
                n
            }
            ,
            e.prototype.deserialize = function(t) {
                var e = []
                  , n = {};
                return t && (o.isArray(t) || (t = [t]),
                t.forEach(function(t) {
                    if ((n = {}).localId = t.localId,
                    t instanceof r.TextMessage)
                        t.messageBody = t.content;
                    else if (t instanceof r.ImageMessage)
                        n.thumbUrl = t.thumbUrl,
                        n.url = t.imageUrl,
                        n.height = t.height,
                        n.width = t.width,
                        n.btype = t.messageType,
                        t.messageBody = o.jsonToString(n);
                    else if (t instanceof r.CardMessage)
                        n.avatar = t.avatar,
                        n.title = t.title,
                        n.desc = t.desc,
                        n.url = t.linkUrl,
                        n.type = t.type,
                        n.btype = t.messageType,
                        t.messageBody = o.jsonToString(n);
                    else if (t instanceof r.VideoMessage)
                        n.title = t.title,
                        n.ext = t.extPropertys,
                        n.btype = t.messageType,
                        n.video = {},
                        n.video.filename = t.filename,
                        n.video.cover = t.cover,
                        n.video.url = t.url,
                        n.video.duration = t.duration,
                        n.video.size = t.size,
                        n.video.secret = t.secret,
                        t.messageBody = o.jsonToString(n);
                    else if (t instanceof r.AudioMessage)
                        n.title = t.title,
                        n.ext = t.extPropertys,
                        n.btype = t.messageType,
                        n.audio = {},
                        n.audio.filename = t.filename,
                        n.audio.url = t.url,
                        n.audio.duration = t.duration,
                        n.audio.size = t.size,
                        n.audio.secret = t.secret,
                        t.messageBody = o.jsonToString(n);
                    else if (t instanceof r.FileMessage)
                        n.title = t.title,
                        n.ext = t.extPropertys,
                        n.btype = t.messageType,
                        n.file = {},
                        n.file.filename = t.filename,
                        n.file.url = t.url,
                        n.file.size = t.size,
                        n.file.secret = t.secret,
                        t.messageBody = o.jsonToString(n);
                    else if (t instanceof r.LocationMessage)
                        n.title = t.title,
                        n.ext = t.extPropertys,
                        n.btype = t.messageType,
                        n.location = {},
                        n.location.lng = t.lng,
                        n.location.lat = t.lat,
                        n.location.thumburl = t.thumburl,
                        n.location.address = t.address,
                        n.location.poiname = t.poiName,
                        n.location.city = t.city,
                        n.location.country = t.country,
                        n.location.cooType = t.cooType,
                        t.messageBody = o.jsonToString(n);
                    else if (t instanceof r.CustomContentMessage)
                        n.title = t.title,
                        n.ext = t.extPropertys,
                        n.action = t.actionCode,
                        n.btype = t.messageType,
                        void 0 !== t.isPresent && (n.isPresent = t.isPresent),
                        t.see && (n.see = t.see),
                        t.sid && (n.sessionId = t.sid),
                        t.messageBody = o.jsonToString(n);
                    else if (t instanceof r.EmoticonMessage)
                        n.title = t.title,
                        n.ext = t.extPropertys,
                        n.btype = t.messageType,
                        n.emoticon = {},
                        n.emoticon.code = t.code,
                        n.emoticon.label = t.label,
                        t.messageBody = o.jsonToString(n);
                    else if (t instanceof r.AtMessage)
                        n.body = t.body,
                        o.isArray(t.atUid) ? n.uid = t.atUid : n.uid = [t.atUid],
                        n.from = t.atFromNickname,
                        n.btype = t.messageType,
                        t.messageBody = o.jsonToString(n);
                    else if (t instanceof r.TemplateMessage)
                        n.title = t.title,
                        n.ext = t.extPropertys,
                        n.btype = t.messageType,
                        n.templet = {},
                        n.templet.code = t.code,
                        n.templet.values = t.values,
                        t.messageBody = o.jsonToString(n);
                    else {
                        if (!(t instanceof r.SystemMessage))
                            throw new Error("Unknown message type,postion -> deserialize");
                        n.btype = t.messageType,
                        "1007" == t.messageType ? (n.title = t.title,
                        n.ext = t.extPropertys,
                        n.isPresent = t.isPresent,
                        n.action = t.actionCode,
                        t.see && (n.see = t.see),
                        t.sid && (n.sessionId = t.sid)) : "1009" == t.messageType ? (n.isPresent = t.isPresent,
                        n.title = t.title,
                        n.operator = t.operator,
                        n.extPropertys = t.ext,
                        n.recallMessageId = t.recallMessageId,
                        n.from = t.from,
                        n.code = t.code,
                        n.operatorName = t.operatorName) : (n.operator = t.operator,
                        n.tip = t.tip,
                        n.gtype = t.gtype,
                        n.gname = t.gname,
                        n.butype = t.butype,
                        n.content = t.content),
                        t.messageBody = o.jsonToString(n)
                    }
                    e.push(t)
                })),
                e
            }
            ,
            e.prototype.setHistoryTimestamp = function(t) {
                t && t > 0 && (this._client._firstTimestamp = t)
            }
            ,
            e.prototype.setClientLastTimestamp = function(t) {
                t && t > 0 && (this._client._lastTimestamp = t)
            }
            ,
            e.prototype.convertSenders = function(t) {
                var e = [];
                return t && t.forEach(function(t) {
                    e[t.jid] = t
                }),
                e
            }
            ,
            e.prototype.sendReadReceipt = function(t) {
                if (t && t.length > 0 && this._client && this._client._partnerJid)
                    for (var e = t.length - 1; e >= 0; e--)
                        if (t[e].messageCategory != i.MessageType.SystemMessage)
                            return void this._client.sendMessageReceipt(this._client._partnerJid, t[e].createTime)
            }
            ,
            e
        }(a);
        t.exports = l
    }
    , function(t, e, n) {
        t.exports = !n(9) && !n(2)(function() {
            return 7 != Object.defineProperty(n(67)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }
    , function(t, e, n) {
        var r = n(1)
          , i = n(8)
          , o = n(34)
          , s = n(68)
          , a = n(10).f;
        t.exports = function(t) {
            var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
            "_" == t.charAt(0) || t in e || a(e, t, {
                value: s.f(t)
            })
        }
    }
    , function(t, e, n) {
        var r = n(16)
          , i = n(18)
          , o = n(55)(!1)
          , s = n(69)("IE_PROTO");
        t.exports = function(t, e) {
            var n, a = i(t), c = 0, u = [];
            for (n in a)
                n != s && r(a, n) && u.push(n);
            for (; e.length > c; )
                r(a, n = e[c++]) && (~o(u, n) || u.push(n));
            return u
        }
    }
    , function(t, e, n) {
        var r = n(10)
          , i = n(3)
          , o = n(35);
        t.exports = n(9) ? Object.defineProperties : function(t, e) {
            i(t);
            for (var n, s = o(e), a = s.length, c = 0; a > c; )
                r.f(t, n = s[c++], e[n]);
            return t
        }
    }
    , function(t, e, n) {
        var r = n(18)
          , i = n(38).f
          , o = {}.toString
          , s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function(t) {
            return s && "[object Window]" == o.call(t) ? function(t) {
                try {
                    return i(t)
                } catch (t) {
                    return s.slice()
                }
            }(t) : i(r(t))
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(9)
          , i = n(35)
          , o = n(56)
          , s = n(50)
          , a = n(12)
          , c = n(49)
          , u = Object.assign;
        t.exports = !u || n(2)(function() {
            var t = {}
              , e = {}
              , n = Symbol()
              , r = "abcdefghijklmnopqrst";
            return t[n] = 7,
            r.split("").forEach(function(t) {
                e[t] = t
            }),
            7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != r
        }) ? function(t, e) {
            for (var n = a(t), u = arguments.length, l = 1, p = o.f, h = s.f; u > l; )
                for (var f, d = c(arguments[l++]), g = p ? i(d).concat(p(d)) : i(d), m = g.length, y = 0; m > y; )
                    f = g[y++],
                    r && !h.call(d, f) || (n[f] = d[f]);
            return n
        }
        : u
    }
    , function(t, e) {
        t.exports = Object.is || function(t, e) {
            return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(21)
          , i = n(4)
          , o = n(105)
          , s = [].slice
          , a = {};
        t.exports = Function.bind || function(t) {
            var e = r(this)
              , n = s.call(arguments, 1)
              , c = function() {
                var r = n.concat(s.call(arguments));
                return this instanceof c ? function(t, e, n) {
                    if (!(e in a)) {
                        for (var r = [], i = 0; i < e; i++)
                            r[i] = "a[" + i + "]";
                        a[e] = Function("F,a", "return new F(" + r.join(",") + ")")
                    }
                    return a[e](t, n)
                }(e, r.length, r) : o(e, r, t)
            };
            return i(e.prototype) && (c.prototype = e.prototype),
            c
        }
    }
    , function(t, e) {
        t.exports = function(t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
            case 0:
                return r ? t() : t.call(n);
            case 1:
                return r ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
            }
            return t.apply(n, e)
        }
    }
    , function(t, e, n) {
        var r = n(1).parseInt
          , i = n(43).trim
          , o = n(73)
          , s = /^[-+]?0[xX]/;
        t.exports = 8 !== r(o + "08") || 22 !== r(o + "0x16") ? function(t, e) {
            var n = i(String(t), 3);
            return r(n, e >>> 0 || (s.test(n) ? 16 : 10))
        }
        : r
    }
    , function(t, e, n) {
        var r = n(1).parseFloat
          , i = n(43).trim;
        t.exports = 1 / r(n(73) + "-0") != -1 / 0 ? function(t) {
            var e = i(String(t), 3)
              , n = r(e);
            return 0 === n && "-" == e.charAt(0) ? -0 : n
        }
        : r
    }
    , function(t, e, n) {
        var r = n(27);
        t.exports = function(t, e) {
            if ("number" != typeof t && "Number" != r(t))
                throw TypeError(e);
            return +t
        }
    }
    , function(t, e, n) {
        var r = n(4)
          , i = Math.floor;
        t.exports = function(t) {
            return !r(t) && isFinite(t) && i(t) === t
        }
    }
    , function(t, e) {
        t.exports = Math.log1p || function(t) {
            return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(37)
          , i = n(32)
          , o = n(42)
          , s = {};
        n(17)(s, n(5)("iterator"), function() {
            return this
        }),
        t.exports = function(t, e, n) {
            t.prototype = r(s, {
                next: i(1, n)
            }),
            o(t, e + " Iterator")
        }
    }
    , function(t, e, n) {
        var r = n(3);
        t.exports = function(t, e, n, i) {
            try {
                return i ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
                var o = t["return"];
                throw void 0 !== o && r(o.call(t)),
                e
            }
        }
    }
    , function(t, e, n) {
        var r = n(230);
        t.exports = function(t, e) {
            return new (r(t))(e)
        }
    }
    , function(t, e, n) {
        var r = n(21)
          , i = n(12)
          , o = n(49)
          , s = n(6);
        t.exports = function(t, e, n, a, c) {
            r(e);
            var u = i(t)
              , l = o(u)
              , p = s(u.length)
              , h = c ? p - 1 : 0
              , f = c ? -1 : 1;
            if (n < 2)
                for (; ; ) {
                    if (h in l) {
                        a = l[h],
                        h += f;
                        break
                    }
                    if (h += f,
                    c ? h < 0 : p <= h)
                        throw TypeError("Reduce of empty array with no initial value")
                }
            for (; c ? h >= 0 : p > h; h += f)
                h in l && (a = e(a, l[h], h, u));
            return a
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(12)
          , i = n(36)
          , o = n(6);
        t.exports = [].copyWithin || function(t, e) {
            var n = r(this)
              , s = o(n.length)
              , a = i(t, s)
              , c = i(e, s)
              , u = arguments.length > 2 ? arguments[2] : void 0
              , l = Math.min((void 0 === u ? s : i(u, s)) - c, s - a)
              , p = 1;
            for (c < a && a < c + l && (p = -1,
            c += l - 1,
            a += l - 1); l-- > 0; )
                c in n ? n[a] = n[c] : delete n[a],
                a += p,
                c += p;
            return n
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(88);
        n(0)({
            target: "RegExp",
            proto: !0,
            forced: r !== /./.exec
        }, {
            exec: r
        })
    }
    , function(t, e, n) {
        n(9) && "g" != /./g.flags && n(10).f(RegExp.prototype, "flags", {
            configurable: !0,
            get: n(59)
        })
    }
    , function(t, e, n) {
        "use strict";
        var r, i, o, s, a = n(34), c = n(1), u = n(20), l = n(51), p = n(0), h = n(4), f = n(21), d = n(46), g = n(62), m = n(52), y = n(90).set, v = n(250)(), b = n(120), _ = n(251), T = n(63), S = n(121), C = c.TypeError, w = c.process, I = w && w.versions, M = I && I.v8 || "", x = c.Promise, k = "process" == l(w), P = function() {}, A = i = b.f, O = !!function() {
            try {
                var t = x.resolve(1)
                  , e = (t.constructor = {})[n(5)("species")] = function(t) {
                    t(P, P)
                }
                ;
                return (k || "function" == typeof PromiseRejectionEvent) && t.then(P)instanceof e && 0 !== M.indexOf("6.6") && -1 === T.indexOf("Chrome/66")
            } catch (t) {}
        }(), E = function(t) {
            var e;
            return !(!h(t) || "function" != typeof (e = t.then)) && e
        }, N = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                v(function() {
                    for (var r = t._v, i = 1 == t._s, o = 0, s = function(e) {
                        var n, o, s, a = i ? e.ok : e.fail, c = e.resolve, u = e.reject, l = e.domain;
                        try {
                            a ? (i || (2 == t._h && B(t),
                            t._h = 1),
                            !0 === a ? n = r : (l && l.enter(),
                            n = a(r),
                            l && (l.exit(),
                            s = !0)),
                            n === e.promise ? u(C("Promise-chain cycle")) : (o = E(n)) ? o.call(n, c, u) : c(n)) : u(r)
                        } catch (t) {
                            l && !s && l.exit(),
                            u(t)
                        }
                    }; n.length > o; )
                        s(n[o++]);
                    t._c = [],
                    t._n = !1,
                    e && !t._h && L(t)
                })
            }
        }, L = function(t) {
            y.call(c, function() {
                var e, n, r, i = t._v, o = j(t);
                if (o && (e = _(function() {
                    k ? w.emit("unhandledRejection", i, t) : (n = c.onunhandledrejection) ? n({
                        promise: t,
                        reason: i
                    }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", i)
                }),
                t._h = k || j(t) ? 2 : 1),
                t._a = void 0,
                o && e.e)
                    throw e.v
            })
        }, j = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        }, B = function(t) {
            y.call(c, function() {
                var e;
                k ? w.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                })
            })
        }, R = function(t) {
            var e = this;
            e._d || (e._d = !0,
            (e = e._w || e)._v = t,
            e._s = 2,
            e._a || (e._a = e._c.slice()),
            N(e, !0))
        }, F = function(t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0,
                n = n._w || n;
                try {
                    if (n === t)
                        throw C("Promise can't be resolved itself");
                    (e = E(t)) ? v(function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            e.call(t, u(F, r, 1), u(R, r, 1))
                        } catch (t) {
                            R.call(r, t)
                        }
                    }) : (n._v = t,
                    n._s = 1,
                    N(n, !1))
                } catch (t) {
                    R.call({
                        _w: n,
                        _d: !1
                    }, t)
                }
            }
        };
        O || (x = function(t) {
            d(this, x, "Promise", "_h"),
            f(t),
            r.call(this);
            try {
                t(u(F, this, 1), u(R, this, 1))
            } catch (t) {
                R.call(this, t)
            }
        }
        ,
        (r = function(t) {
            this._c = [],
            this._a = void 0,
            this._s = 0,
            this._d = !1,
            this._v = void 0,
            this._h = 0,
            this._n = !1
        }
        ).prototype = n(47)(x.prototype, {
            then: function(t, e) {
                var n = A(m(this, x));
                return n.ok = "function" != typeof t || t,
                n.fail = "function" == typeof e && e,
                n.domain = k ? w.domain : void 0,
                this._c.push(n),
                this._a && this._a.push(n),
                this._s && N(this, !1),
                n.promise
            },
            "catch": function(t) {
                return this.then(void 0, t)
            }
        }),
        o = function() {
            var t = new r;
            this.promise = t,
            this.resolve = u(F, t, 1),
            this.reject = u(R, t, 1)
        }
        ,
        b.f = A = function(t) {
            return t === x || t === s ? new o(t) : i(t)
        }
        ),
        p(p.G + p.W + p.F * !O, {
            Promise: x
        }),
        n(42)(x, "Promise"),
        n(45)("Promise"),
        s = n(8).Promise,
        p(p.S + p.F * !O, "Promise", {
            reject: function(t) {
                var e = A(this);
                return (0,
                e.reject)(t),
                e.promise
            }
        }),
        p(p.S + p.F * (a || !O), "Promise", {
            resolve: function(t) {
                return S(a && this === s ? x : this, t)
            }
        }),
        p(p.S + p.F * !(O && n(58)(function(t) {
            x.all(t)["catch"](P)
        })), "Promise", {
            all: function(t) {
                var e = this
                  , n = A(e)
                  , r = n.resolve
                  , i = n.reject
                  , o = _(function() {
                    var n = []
                      , o = 0
                      , s = 1;
                    g(t, !1, function(t) {
                        var a = o++
                          , c = !1;
                        n.push(void 0),
                        s++,
                        e.resolve(t).then(function(t) {
                            c || (c = !0,
                            n[a] = t,
                            --s || r(n))
                        }, i)
                    }),
                    --s || r(n)
                });
                return o.e && i(o.v),
                n.promise
            },
            race: function(t) {
                var e = this
                  , n = A(e)
                  , r = n.reject
                  , i = _(function() {
                    g(t, !1, function(t) {
                        e.resolve(t).then(n.resolve, r)
                    })
                });
                return i.e && r(i.v),
                n.promise
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(21);
        t.exports.f = function(t) {
            return new function(t) {
                var e, n;
                this.promise = new t(function(t, r) {
                    if (void 0 !== e || void 0 !== n)
                        throw TypeError("Bad Promise constructor");
                    e = t,
                    n = r
                }
                ),
                this.resolve = r(e),
                this.reject = r(n)
            }
            (t)
        }
    }
    , function(t, e, n) {
        var r = n(3)
          , i = n(4)
          , o = n(120);
        t.exports = function(t, e) {
            if (r(t),
            i(e) && e.constructor === t)
                return e;
            var n = o.f(t);
            return (0,
            n.resolve)(e),
            n.promise
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(10).f
          , i = n(37)
          , o = n(47)
          , s = n(20)
          , a = n(46)
          , c = n(62)
          , u = n(79)
          , l = n(116)
          , p = n(45)
          , h = n(9)
          , f = n(31).fastKey
          , d = n(41)
          , g = h ? "_s" : "size"
          , m = function(t, e) {
            var n, r = f(e);
            if ("F" !== r)
                return t._i[r];
            for (n = t._f; n; n = n.n)
                if (n.k == e)
                    return n
        };
        t.exports = {
            getConstructor: function(t, e, n, u) {
                var l = t(function(t, r) {
                    a(t, l, e, "_i"),
                    t._t = e,
                    t._i = i(null),
                    t._f = void 0,
                    t._l = void 0,
                    t[g] = 0,
                    void 0 != r && c(r, n, t[u], t)
                });
                return o(l.prototype, {
                    clear: function() {
                        for (var t = d(this, e), n = t._i, r = t._f; r; r = r.n)
                            r.r = !0,
                            r.p && (r.p = r.p.n = void 0),
                            delete n[r.i];
                        t._f = t._l = void 0,
                        t[g] = 0
                    },
                    "delete": function(t) {
                        var n = d(this, e)
                          , r = m(n, t);
                        if (r) {
                            var i = r.n
                              , o = r.p;
                            delete n._i[r.i],
                            r.r = !0,
                            o && (o.n = i),
                            i && (i.p = o),
                            n._f == r && (n._f = i),
                            n._l == r && (n._l = o),
                            n[g]--
                        }
                        return !!r
                    },
                    forEach: function(t) {
                        d(this, e);
                        for (var n, r = s(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f; )
                            for (r(n.v, n.k, this); n && n.r; )
                                n = n.p
                    },
                    has: function(t) {
                        return !!m(d(this, e), t)
                    }
                }),
                h && r(l.prototype, "size", {
                    get: function() {
                        return d(this, e)[g]
                    }
                }),
                l
            },
            def: function(t, e, n) {
                var r, i, o = m(t, e);
                return o ? o.v = n : (t._l = o = {
                    i: i = f(e, !0),
                    k: e,
                    v: n,
                    p: r = t._l,
                    n: void 0,
                    r: !1
                },
                t._f || (t._f = o),
                r && (r.n = o),
                t[g]++,
                "F" !== i && (t._i[i] = o)),
                t
            },
            getEntry: m,
            setStrong: function(t, e, n) {
                u(t, e, function(t, n) {
                    this._t = d(t, e),
                    this._k = n,
                    this._l = void 0
                }, function() {
                    for (var t = this._k, e = this._l; e && e.r; )
                        e = e.p;
                    return this._t && (this._l = e = e ? e.n : this._t._f) ? l(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0,
                    l(1))
                }, n ? "entries" : "values", !n, !0),
                p(e)
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(47)
          , i = n(31).getWeak
          , o = n(3)
          , s = n(4)
          , a = n(46)
          , c = n(62)
          , u = n(25)
          , l = n(16)
          , p = n(41)
          , h = u(5)
          , f = u(6)
          , d = 0
          , g = function(t) {
            return t._l || (t._l = new m)
        }
          , m = function() {
            this.a = []
        }
          , y = function(t, e) {
            return h(t.a, function(t) {
                return t[0] === e
            })
        };
        m.prototype = {
            get: function(t) {
                var e = y(this, t);
                if (e)
                    return e[1]
            },
            has: function(t) {
                return !!y(this, t)
            },
            set: function(t, e) {
                var n = y(this, t);
                n ? n[1] = e : this.a.push([t, e])
            },
            "delete": function(t) {
                var e = f(this.a, function(e) {
                    return e[0] === t
                });
                return ~e && this.a.splice(e, 1),
                !!~e
            }
        },
        t.exports = {
            getConstructor: function(t, e, n, o) {
                var u = t(function(t, r) {
                    a(t, u, e, "_i"),
                    t._t = e,
                    t._i = d++,
                    t._l = void 0,
                    void 0 != r && c(r, n, t[o], t)
                });
                return r(u.prototype, {
                    "delete": function(t) {
                        if (!s(t))
                            return !1;
                        var n = i(t);
                        return !0 === n ? g(p(this, e))["delete"](t) : n && l(n, this._i) && delete n[this._i]
                    },
                    has: function(t) {
                        if (!s(t))
                            return !1;
                        var n = i(t);
                        return !0 === n ? g(p(this, e)).has(t) : n && l(n, this._i)
                    }
                }),
                u
            },
            def: function(t, e, n) {
                var r = i(o(e), !0);
                return !0 === r ? g(t).set(e, n) : r[t._i] = n,
                t
            },
            ufstore: g
        }
    }
    , function(t, e, n) {
        var r = n(22)
          , i = n(6);
        t.exports = function(t) {
            if (void 0 === t)
                return 0;
            var e = r(t)
              , n = i(e);
            if (e !== n)
                throw RangeError("Wrong length!");
            return n
        }
    }
    , function(t, e, n) {
        var r = n(38)
          , i = n(56)
          , o = n(3)
          , s = n(1).Reflect;
        t.exports = s && s.ownKeys || function(t) {
            var e = r.f(o(t))
              , n = i.f;
            return n ? e.concat(n(t)) : e
        }
    }
    , function(t, e, n) {
        var r = n(6)
          , i = n(75)
          , o = n(28);
        t.exports = function(t, e, n, s) {
            var a = String(o(t))
              , c = a.length
              , u = void 0 === n ? " " : String(n)
              , l = r(e);
            if (l <= c || "" == u)
                return a;
            var p = l - c
              , h = i.call(u, Math.ceil(p / u.length));
            return h.length > p && (h = h.slice(0, p)),
            s ? h + a : a + h
        }
    }
    , function(t, e, n) {
        var r = n(9)
          , i = n(35)
          , o = n(18)
          , s = n(50).f;
        t.exports = function(t) {
            return function(e) {
                for (var n, a = o(e), c = i(a), u = c.length, l = 0, p = []; u > l; )
                    n = c[l++],
                    r && !s.call(a, n) || p.push(t ? [n, a[n]] : a[n]);
                return p
            }
        }
    }
    , function(t, e) {
        var n = t.exports = {
            version: "2.6.11"
        };
        "number" == typeof __e && (__e = n)
    }
    , function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        , o = n(331);
        function s(t, e) {
            return new r.Builder(t,e)
        }
        function a(t) {
            return new r.Builder("iq",t)
        }
        function c(t) {
            return new r.Builder("presence",t)
        }
        (r = {
            VERSION: "@VERSION@",
            NS: {
                HTTPBIND: "http://jabber.org/protocol/httpbind",
                BOSH: "urn:xmpp:xbosh",
                CLIENT: "jabber:client",
                AUTH: "jabber:iq:auth",
                ROSTER: "jabber:iq:roster",
                PROFILE: "jabber:iq:profile",
                DISCO_INFO: "http://jabber.org/protocol/disco#info",
                DISCO_ITEMS: "http://jabber.org/protocol/disco#items",
                MUC: "http://jabber.org/protocol/muc",
                SASL: "urn:ietf:params:xml:ns:xmpp-sasl",
                STREAM: "http://etherx.jabber.org/streams",
                FRAMING: "urn:ietf:params:xml:ns:xmpp-framing",
                BIND: "urn:ietf:params:xml:ns:xmpp-bind",
                SESSION: "urn:ietf:params:xml:ns:xmpp-session",
                VERSION: "jabber:iq:version",
                STANZAS: "urn:ietf:params:xml:ns:xmpp-stanzas",
                XHTML_IM: "http://jabber.org/protocol/xhtml-im",
                XHTML: "http://www.w3.org/1999/xhtml"
            },
            XHTML: {
                tags: ["a", "blockquote", "br", "cite", "em", "img", "li", "ol", "p", "span", "strong", "ul", "body"],
                attributes: {
                    a: ["href"],
                    blockquote: ["style"],
                    br: [],
                    cite: ["style"],
                    em: [],
                    img: ["src", "alt", "style", "height", "width"],
                    li: ["style"],
                    ol: ["style"],
                    p: ["style"],
                    span: ["style"],
                    strong: [],
                    ul: ["style"],
                    body: []
                },
                css: ["background-color", "color", "font-family", "font-size", "font-style", "font-weight", "margin-left", "margin-right", "text-align", "text-decoration"],
                validTag: function(t) {
                    for (var e = 0; e < r.XHTML.tags.length; e++)
                        if (t === r.XHTML.tags[e])
                            return !0;
                    return !1
                },
                validAttribute: function(t, e) {
                    if (void 0 !== r.XHTML.attributes[t] && r.XHTML.attributes[t].length > 0)
                        for (var n = 0; n < r.XHTML.attributes[t].length; n++)
                            if (e === r.XHTML.attributes[t][n])
                                return !0;
                    return !1
                },
                validCSS: function(t) {
                    for (var e = 0; e < r.XHTML.css.length; e++)
                        if (t === r.XHTML.css[e])
                            return !0;
                    return !1
                }
            },
            Status: {
                ERROR: 0,
                CONNECTING: 1,
                CONNFAIL: 2,
                AUTHENTICATING: 3,
                AUTHFAIL: 4,
                CONNECTED: 5,
                DISCONNECTED: 6,
                DISCONNECTING: 7,
                ATTACHED: 8,
                REDIRECT: 9,
                CONNTIMEOUT: 10
            },
            ErrorCondition: {
                BAD_FORMAT: "bad-format",
                CONFLICT: "conflict",
                MISSING_JID_NODE: "x-strophe-bad-non-anon-jid",
                NO_AUTH_MECH: "no-auth-mech",
                UNKNOWN_REASON: "unknown"
            },
            LogLevel: {
                DEBUG: 0,
                INFO: 1,
                WARN: 2,
                ERROR: 3,
                FATAL: 4
            },
            ElementType: {
                NORMAL: 1,
                TEXT: 3,
                CDATA: 4,
                FRAGMENT: 11
            },
            TIMEOUT: 1.1,
            SECONDARY_TIMEOUT: .1,
            addNamespace: function(t, e) {
                r.NS[t] = e
            },
            forEachChild: function(t, e, n) {
                var i, o;
                for (i = 0; i < t.childNodes.length; i++)
                    (o = t.childNodes[i]).nodeType !== r.ElementType.NORMAL || e && !this.isTagEqual(o, e) || n(o)
            },
            isTagEqual: function(t, e) {
                return t.tagName === e
            },
            _xmlGenerator: null,
            _makeGenerator: function() {
                var t;
                return void 0 === document.implementation.createDocument || document.implementation.createDocument && document.documentMode && document.documentMode < 10 ? (t = this._getIEXmlDom()).appendChild(t.createElement("strophe")) : t = document.implementation.createDocument("jabber:client", "strophe", null),
                t
            },
            xmlGenerator: function() {
                return r._xmlGenerator || (r._xmlGenerator = r._makeGenerator()),
                r._xmlGenerator
            },
            _getIEXmlDom: function() {
                for (var t = null, e = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.5.0", "Msxml2.DOMDocument.4.0", "MSXML2.DOMDocument.3.0", "MSXML2.DOMDocument", "MSXML.DOMDocument", "Microsoft.XMLDOM"], n = 0; n < e.length && null === t; n++)
                    try {
                        t = new ActiveXObject(e[n])
                    } catch (e) {
                        t = null
                    }
                return t
            },
            xmlElement: function(t) {
                if (!t)
                    return null;
                var e, n, o, s = r.xmlGenerator().createElement(t);
                for (e = 1; e < arguments.length; e++) {
                    var a = arguments[e];
                    if (a)
                        if ("string" == typeof a || "number" == typeof a)
                            s.appendChild(r.xmlTextNode(a));
                        else if ("object" === (void 0 === a ? "undefined" : i(a)) && "function" == typeof a.sort)
                            for (n = 0; n < a.length; n++) {
                                var c = a[n];
                                "object" === (void 0 === c ? "undefined" : i(c)) && "function" == typeof c.sort && void 0 !== c[1] && null !== c[1] && s.setAttribute(c[0], c[1])
                            }
                        else if ("object" === (void 0 === a ? "undefined" : i(a)))
                            for (o in a)
                                a.hasOwnProperty(o) && void 0 !== a[o] && null !== a[o] && s.setAttribute(o, a[o])
                }
                return s
            },
            xmlescape: function(t) {
                return (t = (t = (t = (t = t.replace(/\&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;")).replace(/'/g, "&apos;")).replace(/"/g, "&quot;")
            },
            xmlunescape: function(t) {
                return (t = (t = (t = (t = t.replace(/\&amp;/g, "&")).replace(/&lt;/g, "<")).replace(/&gt;/g, ">")).replace(/&apos;/g, "'")).replace(/&quot;/g, '"')
            },
            xmlTextNode: function(t) {
                return r.xmlGenerator().createTextNode(t)
            },
            xmlHtmlNode: function(t) {
                var e;
                return DOMParser ? e = (new DOMParser).parseFromString(t, "text/xml") : ((e = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
                e.loadXML(t)),
                e
            },
            getText: function(t) {
                if (!t)
                    return null;
                var e = "";
                0 === t.childNodes.length && t.nodeType === r.ElementType.TEXT && (e += t.nodeValue);
                for (var n = 0; n < t.childNodes.length; n++)
                    t.childNodes[n].nodeType === r.ElementType.TEXT && (e += t.childNodes[n].nodeValue);
                return r.xmlescape(e)
            },
            copyElement: function(t) {
                var e, n;
                if (t.nodeType === r.ElementType.NORMAL) {
                    for (n = r.xmlElement(t.tagName),
                    e = 0; e < t.attributes.length; e++)
                        n.setAttribute(t.attributes[e].nodeName, t.attributes[e].value);
                    for (e = 0; e < t.childNodes.length; e++)
                        n.appendChild(r.copyElement(t.childNodes[e]))
                } else
                    t.nodeType === r.ElementType.TEXT && (n = r.xmlGenerator().createTextNode(t.nodeValue));
                return n
            },
            createHtml: function(t) {
                var e, n, o, s, a, c, u, l, p, h, f;
                if (t.nodeType === r.ElementType.NORMAL)
                    if (s = t.nodeName.toLowerCase(),
                    r.XHTML.validTag(s))
                        try {
                            for (n = r.xmlElement(s),
                            e = 0; e < r.XHTML.attributes[s].length; e++)
                                if (a = r.XHTML.attributes[s][e],
                                void 0 !== (c = t.getAttribute(a)) && null !== c && "" !== c && !1 !== c && 0 !== c)
                                    if ("style" === a && "object" === (void 0 === c ? "undefined" : i(c)) && void 0 !== c.cssText && (c = c.cssText),
                                    "style" === a) {
                                        for (u = [],
                                        l = c.split(";"),
                                        o = 0; o < l.length; o++)
                                            h = (p = l[o].split(":"))[0].replace(/^\s*/, "").replace(/\s*$/, "").toLowerCase(),
                                            r.XHTML.validCSS(h) && (f = p[1].replace(/^\s*/, "").replace(/\s*$/, ""),
                                            u.push(h + ": " + f));
                                        u.length > 0 && (c = u.join("; "),
                                        n.setAttribute(a, c))
                                    } else
                                        n.setAttribute(a, c);
                            for (e = 0; e < t.childNodes.length; e++)
                                n.appendChild(r.createHtml(t.childNodes[e]))
                        } catch (t) {
                            n = r.xmlTextNode("")
                        }
                    else
                        for (n = r.xmlGenerator().createDocumentFragment(),
                        e = 0; e < t.childNodes.length; e++)
                            n.appendChild(r.createHtml(t.childNodes[e]));
                else if (t.nodeType === r.ElementType.FRAGMENT)
                    for (n = r.xmlGenerator().createDocumentFragment(),
                    e = 0; e < t.childNodes.length; e++)
                        n.appendChild(r.createHtml(t.childNodes[e]));
                else
                    t.nodeType === r.ElementType.TEXT && (n = r.xmlTextNode(t.nodeValue));
                return n
            },
            escapeNode: function(t) {
                return "string" != typeof t ? t : t.replace(/^\s+|\s+$/g, "").replace(/\\/g, "\\5c").replace(/ /g, "\\20").replace(/\"/g, "\\22").replace(/\&/g, "\\26").replace(/\'/g, "\\27").replace(/\//g, "\\2f").replace(/:/g, "\\3a").replace(/</g, "\\3c").replace(/>/g, "\\3e").replace(/@/g, "\\40")
            },
            unescapeNode: function(t) {
                return "string" != typeof t ? t : t.replace(/\\20/g, " ").replace(/\\22/g, '"').replace(/\\26/g, "&").replace(/\\27/g, "'").replace(/\\2f/g, "/").replace(/\\3a/g, ":").replace(/\\3c/g, "<").replace(/\\3e/g, ">").replace(/\\40/g, "@").replace(/\\5c/g, "\\")
            },
            getNodeFromJid: function(t) {
                return t.indexOf("@") < 0 ? null : t.split("@")[0]
            },
            getDomainFromJid: function(t) {
                var e = r.getBareJidFromJid(t);
                if (e.indexOf("@") < 0)
                    return e;
                var n = e.split("@");
                return n.splice(0, 1),
                n.join("@")
            },
            getResourceFromJid: function(t) {
                var e = t.split("/");
                return e.length < 2 ? null : (e.splice(0, 1),
                e.join("/"))
            },
            getBareJidFromJid: function(t) {
                return t ? t.split("/")[0] : null
            },
            _handleError: function(t) {
                void 0 !== t.stack && r.fatal(t.stack),
                t.sourceURL ? r.fatal("error: " + this.handler + " " + t.sourceURL + ":" + t.line + " - " + t.name + ": " + t.message) : t.fileName ? r.fatal("error: " + this.handler + " " + t.fileName + ":" + t.lineNumber + " - " + t.name + ": " + t.message) : r.fatal("error: " + t.message)
            },
            log: function(t, e) {
                t === this.LogLevel.FATAL && "object" === i(window.console) && "function" == typeof window.console.error && window.console.error(e)
            },
            debug: function(t) {
                this.log(this.LogLevel.DEBUG, t)
            },
            info: function(t) {
                this.log(this.LogLevel.INFO, t)
            },
            warn: function(t) {
                this.log(this.LogLevel.WARN, t)
            },
            error: function(t) {
                this.log(this.LogLevel.ERROR, t)
            },
            fatal: function(t) {
                this.log(this.LogLevel.FATAL, t)
            },
            serialize: function(t) {
                var e;
                if (!t)
                    return null;
                "function" == typeof t.tree && (t = t.tree());
                var n, i, o = t.nodeName;
                for (t.getAttribute("_realname") && (o = t.getAttribute("_realname")),
                e = "<" + o,
                n = 0; n < t.attributes.length; n++)
                    "_realname" !== t.attributes[n].nodeName && (e += " " + t.attributes[n].nodeName + "='" + r.xmlescape(t.attributes[n].value) + "'");
                if (t.childNodes.length > 0) {
                    for (e += ">",
                    n = 0; n < t.childNodes.length; n++)
                        switch ((i = t.childNodes[n]).nodeType) {
                        case r.ElementType.NORMAL:
                            e += r.serialize(i);
                            break;
                        case r.ElementType.TEXT:
                            e += r.xmlescape(i.nodeValue);
                            break;
                        case r.ElementType.CDATA:
                            e += "<![CDATA[" + i.nodeValue + "]]>"
                        }
                    e += "</" + o + ">"
                } else
                    e += "/>";
                return e
            },
            _requestId: 0,
            _connectionPlugins: {},
            addConnectionPlugin: function(t, e) {
                r._connectionPlugins[t] = e
            }
        }).Builder = function(t, e) {
            "presence" !== t && "message" !== t && "iq" !== t || (e && !e.xmlns ? e.xmlns = r.NS.CLIENT : e || (e = {
                xmlns: r.NS.CLIENT
            })),
            this.nodeTree = r.xmlElement(t, e),
            this.node = this.nodeTree
        }
        ,
        r.Builder.prototype = {
            tree: function() {
                return this.nodeTree
            },
            toString: function() {
                return r.serialize(this.nodeTree)
            },
            up: function() {
                return this.node = this.node.parentNode,
                this
            },
            root: function() {
                return this.node = this.nodeTree,
                this
            },
            attrs: function(t) {
                for (var e in t)
                    t.hasOwnProperty(e) && (void 0 === t[e] ? this.node.removeAttribute(e) : this.node.setAttribute(e, t[e]));
                return this
            },
            c: function(t, e, n) {
                var i = r.xmlElement(t, e, n);
                return this.node.appendChild(i),
                "string" != typeof n && "number" != typeof n && (this.node = i),
                this
            },
            cnode: function(t) {
                var e, n = r.xmlGenerator();
                try {
                    e = void 0 !== n.importNode
                } catch (t) {
                    e = !1
                }
                var i = e ? n.importNode(t, !0) : r.copyElement(t);
                return this.node.appendChild(i),
                this.node = i,
                this
            },
            t: function(t) {
                var e = r.xmlTextNode(t);
                return this.node.appendChild(e),
                this
            },
            h: function(t) {
                var e = document.createElement("body");
                e.innerHTML = t;
                for (var n = r.createHtml(e); n.childNodes.length > 0; )
                    this.node.appendChild(n.childNodes[0]);
                return this
            }
        },
        r.Handler = function(t, e, n, i, o, s, a) {
            this.handler = t,
            this.ns = e,
            this.name = n,
            this.type = i,
            this.id = o,
            this.options = a || {
                matchBareFromJid: !1,
                ignoreNamespaceFragment: !1
            },
            this.options.matchBare && (r.warn('The "matchBare" option is deprecated, use "matchBareFromJid" instead.'),
            this.options.matchBareFromJid = this.options.matchBare,
            delete this.options.matchBare),
            this.options.matchBareFromJid ? this.from = s ? r.getBareJidFromJid(s) : null : this.from = s,
            this.user = !0
        }
        ,
        r.Handler.prototype = {
            getNamespace: function(t) {
                var e = t.getAttribute("xmlns");
                return e && this.options.ignoreNamespaceFragment && (e = e.split("#")[0]),
                e
            },
            namespaceMatch: function(t) {
                var e = !1;
                if (!this.ns)
                    return !0;
                var n = this;
                return r.forEachChild(t, null, function(t) {
                    n.getNamespace(t) === n.ns && (e = !0)
                }),
                e = e || this.getNamespace(t) === this.ns
            },
            isMatch: function(t) {
                var e = t.getAttribute("from");
                this.options.matchBareFromJid && (e = r.getBareJidFromJid(e));
                var n = t.getAttribute("type");
                return !(!this.namespaceMatch(t) || this.name && !r.isTagEqual(t, this.name) || this.type && (Array.isArray(this.type) ? -1 === this.type.indexOf(n) : n !== this.type) || this.id && t.getAttribute("id") !== this.id || this.from && e !== this.from)
            },
            run: function(t) {
                var e = null;
                try {
                    e = this.handler(t)
                } catch (t) {
                    throw r._handleError(t),
                    t
                }
                return e
            },
            toString: function() {
                return "{Handler: " + this.handler + "(" + this.name + "," + this.id + "," + this.ns + ")}"
            }
        },
        r.TimedHandler = function(t, e) {
            this.period = t,
            this.handler = e,
            this.lastCalled = (new Date).getTime(),
            this.user = !0
        }
        ,
        r.TimedHandler.prototype = {
            run: function() {
                return this.lastCalled = (new Date).getTime(),
                this.handler()
            },
            reset: function() {
                this.lastCalled = (new Date).getTime()
            },
            toString: function() {
                return "{TimedHandler: " + this.handler + "(" + this.period + ")}"
            }
        },
        r.Connection = function(t, e) {
            this.service = t,
            this.options = e || {};
            var n = this.options.protocol || "";
            for (var i in 0 === t.indexOf("ws:") || 0 === t.indexOf("wss:") || 0 === n.indexOf("ws") ? this._proto = new r.Websocket(this) : this._proto = new r.Bosh(this),
            this.jid = "",
            this.domain = null,
            this.features = null,
            this._sasl_data = {},
            this.do_session = !1,
            this.do_bind = !1,
            this.timedHandlers = [],
            this.handlers = [],
            this.removeTimeds = [],
            this.removeHandlers = [],
            this.addTimeds = [],
            this.addHandlers = [],
            this.protocolErrorHandlers = {
                HTTP: {},
                websocket: {}
            },
            this._idleTimeout = null,
            this._disconnectTimeout = null,
            this.authenticated = !1,
            this.connected = !1,
            this.disconnecting = !1,
            this.do_authentication = !0,
            this.paused = !1,
            this.restored = !1,
            this._data = [],
            this._uniqueId = 0,
            this._sasl_success_handler = null,
            this._sasl_failure_handler = null,
            this._sasl_challenge_handler = null,
            this.maxRetries = 5,
            this._idleTimeout = setTimeout(function() {
                this._onIdle()
            }
            .bind(this), 100),
            o.addCookies(this.options.cookies),
            this.registerSASLMechanisms(this.options.mechanisms),
            r._connectionPlugins)
                if (r._connectionPlugins.hasOwnProperty(i)) {
                    var s = r._connectionPlugins[i]
                      , a = function() {};
                    a.prototype = s,
                    this[i] = new a,
                    this[i].init(this)
                }
        }
        ,
        r.Connection.prototype = {
            reset: function() {
                this._proto._reset(),
                this.do_session = !1,
                this.do_bind = !1,
                this.timedHandlers = [],
                this.handlers = [],
                this.removeTimeds = [],
                this.removeHandlers = [],
                this.addTimeds = [],
                this.addHandlers = [],
                this.authenticated = !1,
                this.connected = !1,
                this.disconnecting = !1,
                this.restored = !1,
                this._data = [],
                this._requests = [],
                this._uniqueId = 0
            },
            pause: function() {
                this.paused = !0
            },
            resume: function() {
                this.paused = !1
            },
            getUniqueId: function(t) {
                var e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                    var e = 16 * Math.random() | 0;
                    return ("x" === t ? e : 3 & e | 8).toString(16)
                });
                return "string" == typeof t || "number" == typeof t ? e + ":" + t : e + ""
            },
            addProtocolErrorHandler: function(t, e, n) {
                this.protocolErrorHandlers[t][e] = n
            },
            connect: function(t, e, n, i, o, s, a) {
                this.jid = t,
                this.authzid = r.getBareJidFromJid(this.jid),
                this.authcid = a || r.getNodeFromJid(this.jid),
                this.pass = e,
                this.servtype = "xmpp",
                this.connect_callback = n,
                this.disconnecting = !1,
                this.connected = !1,
                this.authenticated = !1,
                this.restored = !1,
                this.domain = r.getDomainFromJid(this.jid),
                this._changeConnectStatus(r.Status.CONNECTING, null),
                this._proto._connect(i, o, s)
            },
            attach: function(t, e, n, i, o, s, a) {
                if (!(this._proto instanceof r.Bosh))
                    throw {
                        name: "StropheSessionError",
                        message: 'The "attach" method can only be used with a BOSH connection.'
                    };
                this._proto._attach(t, e, n, i, o, s, a)
            },
            restore: function(t, e, n, r, i) {
                if (!this._sessionCachingSupported())
                    throw {
                        name: "StropheSessionError",
                        message: 'The "restore" method can only be used with a BOSH connection.'
                    };
                this._proto._restore(t, e, n, r, i)
            },
            _sessionCachingSupported: function() {
                if (this._proto instanceof r.Bosh) {
                    if (!JSON)
                        return !1;
                    try {
                        sessionStorage.setItem("_strophe_", "_strophe_"),
                        sessionStorage.removeItem("_strophe_")
                    } catch (t) {
                        return !1
                    }
                    return !0
                }
                return !1
            },
            xmlInput: function(t) {},
            xmlOutput: function(t) {},
            rawInput: function(t) {},
            rawOutput: function(t) {},
            nextValidRid: function(t) {},
            send: function(t) {
                if (null !== t) {
                    if ("function" == typeof t.sort)
                        for (var e = 0; e < t.length; e++)
                            this._queueData(t[e]);
                    else
                        "function" == typeof t.tree ? this._queueData(t.tree()) : this._queueData(t);
                    this._proto._send()
                }
            },
            flush: function() {
                clearTimeout(this._idleTimeout),
                this._onIdle()
            },
            sendPresence: function(t, e, n, r) {
                var i = null
                  , o = this;
                "function" == typeof t.tree && (t = t.tree());
                var s = t.getAttribute("id");
                if (s || (s = this.getUniqueId("sendPresence"),
                t.setAttribute("id", s)),
                "function" == typeof e || "function" == typeof n) {
                    var a = this.addHandler(function(t) {
                        i && o.deleteTimedHandler(i),
                        "error" === t.getAttribute("type") ? n && n(t) : e && e(t)
                    }, null, "presence", null, s);
                    r && (i = this.addTimedHandler(r, function() {
                        return o.deleteHandler(a),
                        n && n(null),
                        !1
                    }))
                }
                return this.send(t),
                s
            },
            sendIQ: function(t, e, n, r) {
                var i = null
                  , o = this;
                "function" == typeof t.tree && (t = t.tree());
                var s = t.getAttribute("id");
                if (s || (s = this.getUniqueId("sendIQ"),
                t.setAttribute("id", s)),
                "function" == typeof e || "function" == typeof n) {
                    var a = this.addHandler(function(t) {
                        i && o.deleteTimedHandler(i);
                        var r = t.getAttribute("type");
                        if ("result" === r)
                            e && e(t);
                        else {
                            if ("error" !== r)
                                throw {
                                    name: "StropheError",
                                    message: "Got bad IQ type of " + r
                                };
                            n && n(t)
                        }
                    }, null, "iq", ["error", "result"], s);
                    r && (i = this.addTimedHandler(r, function() {
                        return o.deleteHandler(a),
                        n && n(null),
                        !1
                    }))
                }
                return this.send(t),
                s
            },
            _queueData: function(t) {
                if (null === t || !t.tagName || !t.childNodes)
                    throw {
                        name: "StropheError",
                        message: "Cannot queue non-DOMElement."
                    };
                this._data.push(t)
            },
            _sendRestart: function() {
                this._data.push("restart"),
                this._proto._sendRestart(),
                this._idleTimeout = setTimeout(function() {
                    this._onIdle()
                }
                .bind(this), 100)
            },
            addTimedHandler: function(t, e) {
                var n = new r.TimedHandler(t,e);
                return this.addTimeds.push(n),
                n
            },
            deleteTimedHandler: function(t) {
                this.removeTimeds.push(t)
            },
            addHandler: function(t, e, n, i, o, s, a) {
                var c = new r.Handler(t,e,n,i,o,s,a);
                return this.addHandlers.push(c),
                c
            },
            deleteHandler: function(t) {
                this.removeHandlers.push(t);
                var e = this.addHandlers.indexOf(t);
                e >= 0 && this.addHandlers.splice(e, 1)
            },
            registerSASLMechanisms: function(t) {
                this.mechanisms = {},
                (t = t || [r.SASLAnonymous, r.SASLExternal, r.SASLOAuthBearer, r.SASLXOAuth2, r.SASLPlain]).forEach(this.registerSASLMechanism.bind(this))
            },
            registerSASLMechanism: function(t) {
                this.mechanisms[t.prototype.name] = t
            },
            disconnect: function(t) {
                if (this._changeConnectStatus(r.Status.DISCONNECTING, t),
                r.info("Disconnect was called because: " + t),
                this.connected) {
                    var e = !1;
                    this.disconnecting = !0,
                    this.authenticated && (e = c({
                        xmlns: r.NS.CLIENT,
                        type: "unavailable"
                    })),
                    this._disconnectTimeout = this._addSysTimedHandler(3e3, this._onDisconnectTimeout.bind(this)),
                    this._proto._disconnect(e)
                } else
                    r.info("Disconnect was called before Strophe connected to the server"),
                    this._proto._abortAllRequests(),
                    this._doDisconnect()
            },
            _changeConnectStatus: function(t, e, n) {
                for (var i in r._connectionPlugins)
                    if (r._connectionPlugins.hasOwnProperty(i)) {
                        var o = this[i];
                        if (o.statusChanged)
                            try {
                                o.statusChanged(t, e)
                            } catch (t) {
                                r.error(i + " plugin caused an exception changing status: " + t)
                            }
                    }
                if (this.connect_callback)
                    try {
                        this.connect_callback(t, e, n)
                    } catch (t) {
                        r._handleError(t),
                        r.error("User connection callback caused an exception: " + t)
                    }
            },
            _doDisconnect: function(t) {
                "number" == typeof this._idleTimeout && clearTimeout(this._idleTimeout),
                null !== this._disconnectTimeout && (this.deleteTimedHandler(this._disconnectTimeout),
                this._disconnectTimeout = null),
                r.info("_doDisconnect was called"),
                this._proto._doDisconnect(),
                this.authenticated = !1,
                this.disconnecting = !1,
                this.restored = !1,
                this.handlers = [],
                this.timedHandlers = [],
                this.removeTimeds = [],
                this.removeHandlers = [],
                this.addTimeds = [],
                this.addHandlers = [],
                this._changeConnectStatus(r.Status.DISCONNECTED, t),
                this.connected = !1
            },
            _dataRecv: function(t, e) {
                r.info("_dataRecv called");
                var n = this._proto._reqToData(t);
                if (null !== n) {
                    var i, o;
                    for (this.xmlInput !== r.Connection.prototype.xmlInput && (n.nodeName === this._proto.strip && n.childNodes.length ? this.xmlInput(n.childNodes[0]) : this.xmlInput(n)),
                    this.rawInput !== r.Connection.prototype.rawInput && (e ? this.rawInput(e) : this.rawInput(r.serialize(n))); this.removeHandlers.length > 0; )
                        o = this.removeHandlers.pop(),
                        (i = this.handlers.indexOf(o)) >= 0 && this.handlers.splice(i, 1);
                    for (; this.addHandlers.length > 0; )
                        this.handlers.push(this.addHandlers.pop());
                    if (this.disconnecting && this._proto._emptyQueue())
                        this._doDisconnect();
                    else {
                        var s, a, c = n.getAttribute("type");
                        if (null !== c && "terminate" === c) {
                            if (this.disconnecting)
                                return;
                            return s = n.getAttribute("condition"),
                            a = n.getElementsByTagName("conflict"),
                            null !== s ? ("remote-stream-error" === s && a.length > 0 && (s = "conflict"),
                            this._changeConnectStatus(r.Status.CONNFAIL, s)) : this._changeConnectStatus(r.Status.CONNFAIL, r.ErrorCondition.UNKOWN_REASON),
                            void this._doDisconnect(s)
                        }
                        var u = this;
                        r.forEachChild(n, null, function(t) {
                            var e, n;
                            for (n = u.handlers,
                            u.handlers = [],
                            e = 0; e < n.length; e++) {
                                var i = n[e];
                                try {
                                    !i.isMatch(t) || !u.authenticated && i.user ? u.handlers.push(i) : i.run(t) && u.handlers.push(i)
                                } catch (t) {
                                    r.warn("Removing Strophe handlers due to uncaught exception: " + t.message)
                                }
                            }
                        })
                    }
                }
            },
            mechanisms: {},
            _no_auth_received: function(t) {
                r.error("Server did not offer a supported authentication mechanism"),
                this._changeConnectStatus(r.Status.CONNFAIL, r.ErrorCondition.NO_AUTH_MECH),
                t && t.call(this),
                this._doDisconnect()
            },
            _connect_cb: function(t, e, n) {
                var i;
                r.info("_connect_cb was called"),
                this.connected = !0;
                try {
                    i = this._proto._reqToData(t)
                } catch (t) {
                    if ("badformat" !== t)
                        throw t;
                    this._changeConnectStatus(r.Status.CONNFAIL, r.ErrorCondition.BAD_FORMAT),
                    this._doDisconnect(r.ErrorCondition.BAD_FORMAT)
                }
                if (i && (this.xmlInput !== r.Connection.prototype.xmlInput && (i.nodeName === this._proto.strip && i.childNodes.length ? this.xmlInput(i.childNodes[0]) : this.xmlInput(i)),
                this.rawInput !== r.Connection.prototype.rawInput && (n ? this.rawInput(n) : this.rawInput(r.serialize(i))),
                this._proto._connect_cb(i) !== r.Status.CONNFAIL))
                    if (i.getElementsByTagNameNS ? i.getElementsByTagNameNS(r.NS.STREAM, "features").length > 0 : i.getElementsByTagName("stream:features").length > 0 || i.getElementsByTagName("features").length > 0) {
                        var o, s, a = [], c = i.getElementsByTagName("mechanism");
                        if (c.length > 0)
                            for (o = 0; o < c.length; o++)
                                s = r.getText(c[o]),
                                this.mechanisms[s] && a.push(this.mechanisms[s]);
                        0 !== a.length || 0 !== i.getElementsByTagName("auth").length ? !1 !== this.do_authentication && this.authenticate(a) : this._no_auth_received(e)
                    } else
                        this._no_auth_received(e)
            },
            sortMechanismsByPriority: function(t) {
                var e, n, r, i;
                for (e = 0; e < t.length - 1; ++e) {
                    for (r = e,
                    n = e + 1; n < t.length; ++n)
                        t[n].prototype.priority > t[r].prototype.priority && (r = n);
                    r !== e && (i = t[e],
                    t[e] = t[r],
                    t[r] = i)
                }
                return t
            },
            _attemptSASLAuth: function(t) {
                t = this.sortMechanismsByPriority(t || []);
                var e = 0
                  , n = !1;
                for (e = 0; e < t.length; ++e)
                    if (t[e].prototype.test(this)) {
                        this._sasl_success_handler = this._addSysHandler(this._sasl_success_cb.bind(this), null, "success", null, null),
                        this._sasl_failure_handler = this._addSysHandler(this._sasl_failure_cb.bind(this), null, "failure", null, null),
                        this._sasl_challenge_handler = this._addSysHandler(this._sasl_challenge_cb.bind(this), null, "challenge", null, null),
                        this._sasl_mechanism = new t[e],
                        this._sasl_mechanism.onStart(this);
                        var i = s("auth", {
                            xmlns: r.NS.SASL,
                            mechanism: this._sasl_mechanism.name
                        });
                        if (this._sasl_mechanism.isClientFirst) {
                            var o = this._sasl_mechanism.onChallenge(this, null);
                            i.t(btoa(o))
                        }
                        this.send(i.tree()),
                        n = !0;
                        break
                    }
                return n
            },
            _attemptLegacyAuth: function() {
                null === r.getNodeFromJid(this.jid) ? (this._changeConnectStatus(r.Status.CONNFAIL, r.ErrorCondition.MISSING_JID_NODE),
                this.disconnect(r.ErrorCondition.MISSING_JID_NODE)) : (this._changeConnectStatus(r.Status.AUTHENTICATING, null),
                this._addSysHandler(this._auth1_cb.bind(this), null, null, null, "_auth_1"),
                this.send(a({
                    type: "get",
                    to: this.domain,
                    id: "_auth_1"
                }).c("query", {
                    xmlns: r.NS.AUTH
                }).c("username", {}).t(r.getNodeFromJid(this.jid)).tree()))
            },
            authenticate: function(t) {
                this._attemptSASLAuth(t) || this._attemptLegacyAuth()
            },
            _sasl_challenge_cb: function(t) {
                var e = atob(r.getText(t))
                  , n = this._sasl_mechanism.onChallenge(this, e)
                  , i = s("response", {
                    xmlns: r.NS.SASL
                });
                return "" !== n && i.t(btoa(n)),
                this.send(i.tree()),
                !0
            },
            _auth1_cb: function(t) {
                var e = a({
                    type: "set",
                    id: "_auth_2"
                }).c("query", {
                    xmlns: r.NS.AUTH
                }).c("username", {}).t(r.getNodeFromJid(this.jid)).up().c("password").t(this.pass);
                return r.getResourceFromJid(this.jid) || (this.jid = r.getBareJidFromJid(this.jid) + "/strophe"),
                e.up().c("resource", {}).t(r.getResourceFromJid(this.jid)),
                this._addSysHandler(this._auth2_cb.bind(this), null, null, null, "_auth_2"),
                this.send(e.tree()),
                !1
            },
            _sasl_success_cb: function(t) {
                if (this._sasl_data["server-signature"]) {
                    var e, n = atob(r.getText(t)).match(/([a-z]+)=([^,]+)(,|$)/);
                    if ("v" === n[1] && (e = n[2]),
                    e !== this._sasl_data["server-signature"])
                        return this.deleteHandler(this._sasl_failure_handler),
                        this._sasl_failure_handler = null,
                        this._sasl_challenge_handler && (this.deleteHandler(this._sasl_challenge_handler),
                        this._sasl_challenge_handler = null),
                        this._sasl_data = {},
                        this._sasl_failure_cb(null)
                }
                r.info("SASL authentication succeeded."),
                this._sasl_mechanism && this._sasl_mechanism.onSuccess(),
                this.deleteHandler(this._sasl_failure_handler),
                this._sasl_failure_handler = null,
                this._sasl_challenge_handler && (this.deleteHandler(this._sasl_challenge_handler),
                this._sasl_challenge_handler = null);
                var i = []
                  , o = function(t, e) {
                    for (; t.length; )
                        this.deleteHandler(t.pop());
                    return this._sasl_auth1_cb.bind(this)(e),
                    !1
                };
                return i.push(this._addSysHandler(function(t) {
                    o.bind(this)(i, t)
                }
                .bind(this), null, "stream:features", null, null)),
                i.push(this._addSysHandler(function(t) {
                    o.bind(this)(i, t)
                }
                .bind(this), r.NS.STREAM, "features", null, null)),
                this._sendRestart(),
                !1
            },
            _sasl_auth1_cb: function(t) {
                var e, n;
                for (this.features = t,
                e = 0; e < t.childNodes.length; e++)
                    "bind" === (n = t.childNodes[e]).nodeName && (this.do_bind = !0),
                    "session" === n.nodeName && (this.do_session = !0);
                if (!this.do_bind)
                    return this._changeConnectStatus(r.Status.AUTHFAIL, null),
                    !1;
                this._addSysHandler(this._sasl_bind_cb.bind(this), null, null, null, "_bind_auth_2");
                var i = r.getResourceFromJid(this.jid);
                return i ? this.send(a({
                    type: "set",
                    id: "_bind_auth_2"
                }).c("bind", {
                    xmlns: r.NS.BIND
                }).c("resource", {}).t(i).tree()) : this.send(a({
                    type: "set",
                    id: "_bind_auth_2"
                }).c("bind", {
                    xmlns: r.NS.BIND
                }).tree()),
                !1
            },
            _sasl_bind_cb: function(t) {
                var e;
                if ("error" === t.getAttribute("type"))
                    return r.info("SASL binding failed."),
                    t.getElementsByTagName("conflict").length > 0 && (e = r.ErrorCondition.CONFLICT),
                    this._changeConnectStatus(r.Status.AUTHFAIL, e, t),
                    !1;
                var n, i = t.getElementsByTagName("bind");
                if (!(i.length > 0))
                    return r.info("SASL binding failed."),
                    this._changeConnectStatus(r.Status.AUTHFAIL, null, t),
                    !1;
                (n = i[0].getElementsByTagName("jid")).length > 0 && (this.jid = r.getText(n[0]),
                this.do_session ? (this._addSysHandler(this._sasl_session_cb.bind(this), null, null, null, "_session_auth_2"),
                this.send(a({
                    type: "set",
                    id: "_session_auth_2"
                }).c("session", {
                    xmlns: r.NS.SESSION
                }).tree())) : (this.authenticated = !0,
                this._changeConnectStatus(r.Status.CONNECTED, null)))
            },
            _sasl_session_cb: function(t) {
                if ("result" === t.getAttribute("type"))
                    this.authenticated = !0,
                    this._changeConnectStatus(r.Status.CONNECTED, null);
                else if ("error" === t.getAttribute("type"))
                    return r.info("Session creation failed."),
                    this._changeConnectStatus(r.Status.AUTHFAIL, null, t),
                    !1;
                return !1
            },
            _sasl_failure_cb: function(t) {
                return this._sasl_success_handler && (this.deleteHandler(this._sasl_success_handler),
                this._sasl_success_handler = null),
                this._sasl_challenge_handler && (this.deleteHandler(this._sasl_challenge_handler),
                this._sasl_challenge_handler = null),
                this._sasl_mechanism && this._sasl_mechanism.onFailure(),
                this._changeConnectStatus(r.Status.AUTHFAIL, null, t),
                !1
            },
            _auth2_cb: function(t) {
                return "result" === t.getAttribute("type") ? (this.authenticated = !0,
                this._changeConnectStatus(r.Status.CONNECTED, null)) : "error" === t.getAttribute("type") && (this._changeConnectStatus(r.Status.AUTHFAIL, null, t),
                this.disconnect("authentication failed")),
                !1
            },
            _addSysTimedHandler: function(t, e) {
                var n = new r.TimedHandler(t,e);
                return n.user = !1,
                this.addTimeds.push(n),
                n
            },
            _addSysHandler: function(t, e, n, i, o) {
                var s = new r.Handler(t,e,n,i,o);
                return s.user = !1,
                this.addHandlers.push(s),
                s
            },
            _onDisconnectTimeout: function() {
                return r.info("_onDisconnectTimeout was called"),
                this._changeConnectStatus(r.Status.CONNTIMEOUT, null),
                this._proto._onDisconnectTimeout(),
                this._doDisconnect(),
                !1
            },
            _onIdle: function() {
                for (var t, e, n; this.addTimeds.length > 0; )
                    this.timedHandlers.push(this.addTimeds.pop());
                for (; this.removeTimeds.length > 0; )
                    e = this.removeTimeds.pop(),
                    (t = this.timedHandlers.indexOf(e)) >= 0 && this.timedHandlers.splice(t, 1);
                var r = (new Date).getTime();
                for (n = [],
                t = 0; t < this.timedHandlers.length; t++)
                    e = this.timedHandlers[t],
                    !this.authenticated && e.user || (e.lastCalled + e.period - r <= 0 ? e.run() && n.push(e) : n.push(e));
                this.timedHandlers = n,
                clearTimeout(this._idleTimeout),
                this._proto._onIdle(),
                this.connected && (this._idleTimeout = setTimeout(function() {
                    this._onIdle()
                }
                .bind(this), 100))
            }
        },
        r.SASLMechanism = function(t, e, n) {
            this.name = t,
            this.isClientFirst = e,
            this.priority = n
        }
        ,
        r.SASLMechanism.prototype = {
            test: function(t) {
                return !0
            },
            onStart: function(t) {
                this._connection = t
            },
            onChallenge: function(t, e) {
                throw new Error("You should implement challenge handling!")
            },
            onFailure: function() {
                this._connection = null
            },
            onSuccess: function() {
                this._connection = null
            }
        },
        r.SASLAnonymous = function() {}
        ,
        r.SASLAnonymous.prototype = new r.SASLMechanism("ANONYMOUS",!1,20),
        r.SASLAnonymous.prototype.test = function(t) {
            return null === t.authcid
        }
        ,
        r.SASLPlain = function() {}
        ,
        r.SASLPlain.prototype = new r.SASLMechanism("PLAIN",!0,50),
        r.SASLPlain.prototype.test = function(t) {
            return null !== t.authcid
        }
        ,
        r.SASLPlain.prototype.onChallenge = function(t) {
            var e = t.authzid;
            return e += "\0",
            e += t.authcid,
            e += "\0",
            e += t.pass,
            o.utf16to8(e)
        }
        ,
        r.SASLOAuthBearer = function() {}
        ,
        r.SASLOAuthBearer.prototype = new r.SASLMechanism("OAUTHBEARER",!0,40),
        r.SASLOAuthBearer.prototype.test = function(t) {
            return null !== t.pass
        }
        ,
        r.SASLOAuthBearer.prototype.onChallenge = function(t) {
            var e = "n,";
            return null !== t.authcid && (e = e + "a=" + t.authzid),
            e += ",",
            e += "",
            e += "auth=Bearer ",
            e += t.pass,
            e += "",
            e += "",
            o.utf16to8(e)
        }
        ,
        r.SASLExternal = function() {}
        ,
        r.SASLExternal.prototype = new r.SASLMechanism("EXTERNAL",!0,10),
        r.SASLExternal.prototype.onChallenge = function(t) {
            return t.authcid === t.authzid ? "" : t.authzid
        }
        ,
        r.SASLXOAuth2 = function() {}
        ,
        r.SASLXOAuth2.prototype = new r.SASLMechanism("X-OAUTH2",!0,30),
        r.SASLXOAuth2.prototype.test = function(t) {
            return null !== t.pass
        }
        ,
        r.SASLXOAuth2.prototype.onChallenge = function(t) {
            var e = "\0";
            return null !== t.authcid && (e += t.authzid),
            e += "\0",
            e += t.pass,
            o.utf16to8(e)
        }
        ,
        t.exports = {
            Strophe: r,
            $build: s,
            $iq: a,
            $msg: function(t) {
                return new r.Builder("message",t)
            },
            $pres: c
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(7)
          , i = {
            json: "application/json",
            jsonp: "application/json"
        }
          , o = ["svc.trip.com", "m.ctrip.com", "sec-m.ctrip.com", "gateway.secure.ctrip.com", "gateway.m.uat.qa.nt.ctripcorp.com", "gateway.m.fws.qa.nt.ctripcorp.com", "gateway.secure.fws.qa.nt.ctripcorp.com", "gateway.secure.uat.qa.nt.ctripcorp.com"]
          , s = function(t) {
            return t && (t = i[t] ? i[t] : t),
            t
        };
        function a(t) {
            var e = {
                "Content-Type": t.contentType
            };
            try {
                var n = window.location.origin;
                n || (n = window.location.protocol + "//" + window.location.host);
                for (var i = t.url.match(/^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/) || [], s = !1, a = 0; a < o.length; a++)
                    i[10] == o[a] && (s = !0);
                /^https?/.test(n) && i[2] && -1 === i[2].indexOf(n) && s && "jsonp" != t.dataType && (e.cookieOrigin = n)
            } catch (t) {
                console.log(t)
            }
            var c = r.getOpenIM() || r.getAuth() ? "omit" : "include";
            return function(t) {
                return e = {
                    isAbort: !1,
                    abort: function() {
                        this.isAbort = !0,
                        t.error && t.error({
                            msg: "abort",
                            status: 999
                        })
                    },
                    success: function(e, n) {
                        this.isAbort || t.success && t.success(e, n)
                    }
                },
                function(t, e) {
                    var n = null
                      , r = new Promise(function(t, e) {
                        n = function() {
                            e("fetch timeout")
                        }
                    }
                    )
                      , i = Promise.race([t, r])
                      , o = setTimeout(function() {
                        o = null,
                        n()
                    }, e);
                    return i["finally"] && i["finally"](function() {
                        o && clearTimeout(o)
                    }),
                    i
                }(fetch(t.url, t.option), t.timeout).then(function(n) {
                    if (0 == n.ok || n.status < 200 || n.status >= 400)
                        return t.error && t.error({
                            message: n.statusText,
                            status: n.status
                        }),
                        {
                            message: n.statusText,
                            status: n.status
                        };
                    n.json().then(function(n) {
                        e.success(n, t.url)
                    })["catch"](function(e) {
                        t.error && t.error(e)
                    })
                })["catch"](function(e) {
                    t.error && t.error(e)
                }),
                e;
                var e
            }({
                url: t.url,
                option: {
                    method: t.type.toUpperCase() || "POST",
                    body: t.data,
                    headers: e,
                    credentials: c,
                    mode: "cors"
                },
                timeout: t.timeout,
                success: function(e, n) {
                    t.callback(e, n)
                },
                error: function(e, n) {
                    t.error && t.error(e)
                }
            })
        }
        function c(t, e, n, r) {
            return {
                url: t,
                data: e,
                callback: n,
                error: r
            }
        }
        t.exports = {
            get: function(t, e, n, r, i) {
                var o = c(t, e, n, r);
                return o.type = "GET",
                o.timeout = i,
                a(o)
            },
            post: function(t, e, n, r, i) {
                var o = e.contentType
                  , u = c(t, e = JSON.stringify(e), n, r);
                return u.type = "POST",
                u.dataType = "json",
                u.timeout = i,
                u.contentType = s(o) || "application/json",
                a(u)
            },
            jsonp: function(t, e, n, r, i) {
                var o = c(t, e, n, r);
                return o.type = "GET",
                o.dataType = "jsonp",
                o.crossDomain = !0,
                o.timeout = i,
                a(o)
            },
            cros: function(t, e, n, i, o, u) {
                var l = n.contentType;
                "get" !== e.toLowerCase() && (n = JSON.stringify(n));
                var p = c(t, n, i, o);
                return p.type = e,
                p.dataType = "json",
                p.crossDomain = !0,
                p.data = n,
                p.contentType = s(l) || "application/json",
                p.timeout = u,
                window.XDomainRequest ? function(t) {
                    if (window.XDomainRequest) {
                        var e = new XDomainRequest;
                        if (e) {
                            e.timeout = t.timeout,
                            t.error && "function" == typeof t.error && (e.onerror = function() {
                                t.error()
                            }
                            ),
                            t.timeout && (e.ontimeout = function() {
                                t.error("timeout")
                            }
                            ),
                            t.callback && "function" == typeof t.callback && (e.onload = function() {
                                t.dataType ? "json" == t.dataType.toLowerCase() && t.callback(JSON.parse(e.responseText)) : t.callback(e.responseText)
                            }
                            );
                            var n;
                            n = "POST" == t.type ? t.data : r.param(t.data),
                            e.open(t.type, t.url),
                            e.send(n)
                        }
                    }
                }(p) : a(p)
            },
            form: function(t, e, n, r) {
                var i = null
                  , o = "";
                return (i = "string" == typeof e ? $("#" + e) : $(e)) && i.length > 0 && (o = i.serialize()),
                a(c(t, o, n, r))
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(133)
          , i = n(96)
          , o = n(13)
          , s = n(7)
          , a = function(t) {
            function e(n) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var r = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, t.call(this, n));
                return r.initialize(n),
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf,
                function(t, e) {
                    for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                        var i = n[r]
                          , o = Object.getOwnPropertyDescriptor(e, i);
                        o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                    }
                }(t, e))
            }(e, t),
            e.prototype.initialize = function(t) {
                this._client = t,
                this._messageHandler = new i(t)
            }
            ,
            e.prototype.serialize = function(t) {
                var e = this
                  , n = []
                  , i = null;
                return t && (s.isArray(t) || (t = [t]),
                t.forEach(function(t) {
                    switch (i = null,
                    t.type) {
                    case o.ConversationType.SingleChat:
                        i = new r.SingleConversation;
                        break;
                    case o.ConversationType.GroupChat:
                        i = new r.GroupConversation;
                        break;
                    default:
                        return
                    }
                    i.partnerJid = t.partnerJid,
                    i.avatar = t.avatar,
                    i.nickname = t.name,
                    i.name = t.name,
                    i.isBlock = t.isBlock,
                    i.createAt = t.createAt,
                    i.unReadCount = t.unReadCount || t.unreadCount,
                    i.extPropertys = t.extPropertys,
                    i.lastMessageTime = t.lastMessageTime || t.lastTimestamp,
                    i.messages = t.messageSummaries && e._messageHandler.serialize(t.messageSummaries),
                    n.push(i)
                })),
                n
            }
            ,
            e.prototype.setHistoryTimestamp = function(t) {
                t && t > 0 && (this._client.lastTimestamp = t)
            }
            ,
            e
        }(n(11));
        t.exports = a
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function o(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf,
            function(t, e) {
                for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = Object.getOwnPropertyDescriptor(e, i);
                    o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                }
            }(t, e))
        }
        var s = n(13)
          , a = {}
          , c = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.partnerJid = null,
                o.type = null,
                o.avatar = null,
                o.name = null,
                o.isBlock = null,
                o.createAt = null,
                o.unReadCount = 0,
                o.extPropertys = null,
                o.lastMessageTime = null,
                o.messages = null,
                o
            }
            return o(e, t),
            e
        }(n(11))
          , u = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.type = s.ConversationType.SingleChat,
                o
            }
            return o(e, t),
            e
        }(c);
        a.SingleConversation = u;
        var l = function(t) {
            function e(n) {
                r(this, e);
                var o = i(this, t.call(this, n));
                return o.type = s.ConversationType.GroupChat,
                o
            }
            return o(e, t),
            e
        }(c);
        a.GroupConversation = l,
        t.exports = a
    }
    , function(t, e, n) {
        t.exports = n(135)
    }
    , function(t, e, n) {
        "use strict";
        n(136),
        n(322);
        var r = n(7)
          , i = n(53)
          , o = r.isInIBUSite() ? i.ubtIBU : i.ubt;
        if (!("undefined" == typeof window || window.$_bf && window.$_bf.loaded)) {
            var s, a = "?v=" + (s = new Date).getFullYear() + s.getMonth() + "_" + s.getDate();
            (s = document.createElement("script")).type = "text/javascript",
            s.charset = "utf-8",
            s.async = !0,
            s.src = o + a,
            a = document.getElementsByTagName("script")[0],
            window.__bfi = window.__bfi || [],
            window.__bfi.push(["_config", "markting", !1]),
            window.__bfi.push(["_config", "rms", !1]),
            a.parentNode.insertBefore(s, a)
        }
        t.exports = {
            IMClient: n(324),
            MessageFactory: n(95),
            CommonEnum: n(13),
            Model: n(66),
            cUtilCommon: n(7),
            MessageHandler: n(96),
            ConversationHandler: n(132)
        }
    }
    , function(t, e, n) {
        "use strict";
        n(137);
        var r = function(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }(n(309));
        r["default"]._babelPolyfill && "undefined" != typeof console && console.warn && console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."),
        r["default"]._babelPolyfill = !0
    }
    , function(t, e, n) {
        "use strict";
        n(138),
        n(281),
        n(283),
        n(286),
        n(288),
        n(290),
        n(292),
        n(294),
        n(296),
        n(298),
        n(300),
        n(302),
        n(304),
        n(308)
    }
    , function(t, e, n) {
        n(139),
        n(142),
        n(143),
        n(144),
        n(145),
        n(146),
        n(147),
        n(148),
        n(149),
        n(150),
        n(151),
        n(152),
        n(153),
        n(154),
        n(155),
        n(156),
        n(157),
        n(158),
        n(159),
        n(160),
        n(161),
        n(162),
        n(163),
        n(164),
        n(165),
        n(166),
        n(167),
        n(168),
        n(169),
        n(170),
        n(171),
        n(172),
        n(173),
        n(174),
        n(175),
        n(176),
        n(177),
        n(178),
        n(179),
        n(180),
        n(181),
        n(182),
        n(183),
        n(185),
        n(186),
        n(187),
        n(188),
        n(189),
        n(190),
        n(191),
        n(192),
        n(193),
        n(194),
        n(195),
        n(196),
        n(197),
        n(198),
        n(199),
        n(200),
        n(201),
        n(202),
        n(203),
        n(204),
        n(205),
        n(206),
        n(207),
        n(208),
        n(209),
        n(210),
        n(211),
        n(212),
        n(213),
        n(214),
        n(215),
        n(216),
        n(217),
        n(218),
        n(220),
        n(221),
        n(223),
        n(224),
        n(225),
        n(226),
        n(227),
        n(228),
        n(229),
        n(231),
        n(232),
        n(233),
        n(234),
        n(235),
        n(236),
        n(237),
        n(238),
        n(239),
        n(240),
        n(241),
        n(242),
        n(243),
        n(87),
        n(244),
        n(117),
        n(245),
        n(118),
        n(246),
        n(247),
        n(248),
        n(249),
        n(119),
        n(252),
        n(253),
        n(254),
        n(255),
        n(256),
        n(257),
        n(258),
        n(259),
        n(260),
        n(261),
        n(262),
        n(263),
        n(264),
        n(265),
        n(266),
        n(267),
        n(268),
        n(269),
        n(270),
        n(271),
        n(272),
        n(273),
        n(274),
        n(275),
        n(276),
        n(277),
        n(278),
        n(279),
        n(280),
        t.exports = n(8)
    }
    , function(t, e, n) {
        "use strict";
        var r = n(1)
          , i = n(16)
          , o = n(9)
          , s = n(0)
          , a = n(14)
          , c = n(31).KEY
          , u = n(2)
          , l = n(54)
          , p = n(42)
          , h = n(33)
          , f = n(5)
          , d = n(68)
          , g = n(98)
          , m = n(141)
          , y = n(57)
          , v = n(3)
          , b = n(4)
          , _ = n(12)
          , T = n(18)
          , S = n(30)
          , C = n(32)
          , w = n(37)
          , I = n(101)
          , M = n(23)
          , x = n(56)
          , k = n(10)
          , P = n(35)
          , A = M.f
          , O = k.f
          , E = I.f
          , N = r.Symbol
          , L = r.JSON
          , j = L && L.stringify
          , B = f("_hidden")
          , R = f("toPrimitive")
          , F = {}.propertyIsEnumerable
          , G = l("symbol-registry")
          , J = l("symbols")
          , U = l("op-symbols")
          , D = Object.prototype
          , H = "function" == typeof N && !!x.f
          , z = r.QObject
          , W = !z || !z.prototype || !z.prototype.findChild
          , q = o && u(function() {
            return 7 != w(O({}, "a", {
                get: function() {
                    return O(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(t, e, n) {
            var r = A(D, e);
            r && delete D[e],
            O(t, e, n),
            r && t !== D && O(D, e, r)
        }
        : O
          , V = function(t) {
            var e = J[t] = w(N.prototype);
            return e._k = t,
            e
        }
          , X = H && "symbol" == typeof N.iterator ? function(t) {
            return "symbol" == typeof t
        }
        : function(t) {
            return t instanceof N
        }
          , Q = function(t, e, n) {
            return t === D && Q(U, e, n),
            v(t),
            e = S(e, !0),
            v(n),
            i(J, e) ? (n.enumerable ? (i(t, B) && t[B][e] && (t[B][e] = !1),
            n = w(n, {
                enumerable: C(0, !1)
            })) : (i(t, B) || O(t, B, C(1, {})),
            t[B][e] = !0),
            q(t, e, n)) : O(t, e, n)
        }
          , K = function(t, e) {
            v(t);
            for (var n, r = m(e = T(e)), i = 0, o = r.length; o > i; )
                Q(t, n = r[i++], e[n]);
            return t
        }
          , $ = function(t) {
            var e = F.call(this, t = S(t, !0));
            return !(this === D && i(J, t) && !i(U, t)) && (!(e || !i(this, t) || !i(J, t) || i(this, B) && this[B][t]) || e)
        }
          , Y = function(t, e) {
            if (t = T(t),
            e = S(e, !0),
            t !== D || !i(J, e) || i(U, e)) {
                var n = A(t, e);
                return !n || !i(J, e) || i(t, B) && t[B][e] || (n.enumerable = !0),
                n
            }
        }
          , Z = function(t) {
            for (var e, n = E(T(t)), r = [], o = 0; n.length > o; )
                i(J, e = n[o++]) || e == B || e == c || r.push(e);
            return r
        }
          , tt = function(t) {
            for (var e, n = t === D, r = E(n ? U : T(t)), o = [], s = 0; r.length > s; )
                !i(J, e = r[s++]) || n && !i(D, e) || o.push(J[e]);
            return o
        };
        H || (a((N = function() {
            if (this instanceof N)
                throw TypeError("Symbol is not a constructor!");
            var t = h(arguments.length > 0 ? arguments[0] : void 0)
              , e = function(n) {
                this === D && e.call(U, n),
                i(this, B) && i(this[B], t) && (this[B][t] = !1),
                q(this, t, C(1, n))
            };
            return o && W && q(D, t, {
                configurable: !0,
                set: e
            }),
            V(t)
        }
        ).prototype, "toString", function() {
            return this._k
        }),
        M.f = Y,
        k.f = Q,
        n(38).f = I.f = Z,
        n(50).f = $,
        x.f = tt,
        o && !n(34) && a(D, "propertyIsEnumerable", $, !0),
        d.f = function(t) {
            return V(f(t))
        }
        ),
        s(s.G + s.W + s.F * !H, {
            Symbol: N
        });
        for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt; )
            f(et[nt++]);
        for (var rt = P(f.store), it = 0; rt.length > it; )
            g(rt[it++]);
        s(s.S + s.F * !H, "Symbol", {
            "for": function(t) {
                return i(G, t += "") ? G[t] : G[t] = N(t)
            },
            keyFor: function(t) {
                if (!X(t))
                    throw TypeError(t + " is not a symbol!");
                for (var e in G)
                    if (G[e] === t)
                        return e
            },
            useSetter: function() {
                W = !0
            },
            useSimple: function() {
                W = !1
            }
        }),
        s(s.S + s.F * !H, "Object", {
            create: function(t, e) {
                return void 0 === e ? w(t) : K(w(t), e)
            },
            defineProperty: Q,
            defineProperties: K,
            getOwnPropertyDescriptor: Y,
            getOwnPropertyNames: Z,
            getOwnPropertySymbols: tt
        });
        var ot = u(function() {
            x.f(1)
        });
        s(s.S + s.F * ot, "Object", {
            getOwnPropertySymbols: function(t) {
                return x.f(_(t))
            }
        }),
        L && s(s.S + s.F * (!H || u(function() {
            var t = N();
            return "[null]" != j([t]) || "{}" != j({
                a: t
            }) || "{}" != j(Object(t))
        })), "JSON", {
            stringify: function(t) {
                for (var e, n, r = [t], i = 1; arguments.length > i; )
                    r.push(arguments[i++]);
                if (n = e = r[1],
                (b(e) || void 0 !== t) && !X(t))
                    return y(e) || (e = function(t, e) {
                        if ("function" == typeof n && (e = n.call(this, t, e)),
                        !X(e))
                            return e
                    }
                    ),
                    r[1] = e,
                    j.apply(L, r)
            }
        }),
        N.prototype[R] || n(17)(N.prototype, R, N.prototype.valueOf),
        p(N, "Symbol"),
        p(Math, "Math", !0),
        p(r.JSON, "JSON", !0)
    }
    , function(t, e, n) {
        t.exports = n(54)("native-function-to-string", Function.toString)
    }
    , function(t, e, n) {
        var r = n(35)
          , i = n(56)
          , o = n(50);
        t.exports = function(t) {
            var e = r(t)
              , n = i.f;
            if (n)
                for (var s, a = n(t), c = o.f, u = 0; a.length > u; )
                    c.call(t, s = a[u++]) && e.push(s);
            return e
        }
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S, "Object", {
            create: n(37)
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S + r.F * !n(9), "Object", {
            defineProperty: n(10).f
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S + r.F * !n(9), "Object", {
            defineProperties: n(100)
        })
    }
    , function(t, e, n) {
        var r = n(18)
          , i = n(23).f;
        n(24)("getOwnPropertyDescriptor", function() {
            return function(t, e) {
                return i(r(t), e)
            }
        })
    }
    , function(t, e, n) {
        var r = n(12)
          , i = n(39);
        n(24)("getPrototypeOf", function() {
            return function(t) {
                return i(r(t))
            }
        })
    }
    , function(t, e, n) {
        var r = n(12)
          , i = n(35);
        n(24)("keys", function() {
            return function(t) {
                return i(r(t))
            }
        })
    }
    , function(t, e, n) {
        n(24)("getOwnPropertyNames", function() {
            return n(101).f
        })
    }
    , function(t, e, n) {
        var r = n(4)
          , i = n(31).onFreeze;
        n(24)("freeze", function(t) {
            return function(e) {
                return t && r(e) ? t(i(e)) : e
            }
        })
    }
    , function(t, e, n) {
        var r = n(4)
          , i = n(31).onFreeze;
        n(24)("seal", function(t) {
            return function(e) {
                return t && r(e) ? t(i(e)) : e
            }
        })
    }
    , function(t, e, n) {
        var r = n(4)
          , i = n(31).onFreeze;
        n(24)("preventExtensions", function(t) {
            return function(e) {
                return t && r(e) ? t(i(e)) : e
            }
        })
    }
    , function(t, e, n) {
        var r = n(4);
        n(24)("isFrozen", function(t) {
            return function(e) {
                return !r(e) || !!t && t(e)
            }
        })
    }
    , function(t, e, n) {
        var r = n(4);
        n(24)("isSealed", function(t) {
            return function(e) {
                return !r(e) || !!t && t(e)
            }
        })
    }
    , function(t, e, n) {
        var r = n(4);
        n(24)("isExtensible", function(t) {
            return function(e) {
                return !!r(e) && (!t || t(e))
            }
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S + r.F, "Object", {
            assign: n(102)
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S, "Object", {
            is: n(103)
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S, "Object", {
            setPrototypeOf: n(72).set
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(51)
          , i = {};
        i[n(5)("toStringTag")] = "z",
        i + "" != "[object z]" && n(14)(Object.prototype, "toString", function() {
            return "[object " + r(this) + "]"
        }, !0)
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.P, "Function", {
            bind: n(104)
        })
    }
    , function(t, e, n) {
        var r = n(10).f
          , i = Function.prototype
          , o = /^\s*function ([^ (]*)/;
        "name"in i || n(9) && r(i, "name", {
            configurable: !0,
            get: function() {
                try {
                    return ("" + this).match(o)[1]
                } catch (t) {
                    return ""
                }
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(4)
          , i = n(39)
          , o = n(5)("hasInstance")
          , s = Function.prototype;
        o in s || n(10).f(s, o, {
            value: function(t) {
                if ("function" != typeof this || !r(t))
                    return !1;
                if (!r(this.prototype))
                    return t instanceof this;
                for (; t = i(t); )
                    if (this.prototype === t)
                        return !0;
                return !1
            }
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(106);
        r(r.G + r.F * (parseInt != i), {
            parseInt: i
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(107);
        r(r.G + r.F * (parseFloat != i), {
            parseFloat: i
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(1)
          , i = n(16)
          , o = n(27)
          , s = n(74)
          , a = n(30)
          , c = n(2)
          , u = n(38).f
          , l = n(23).f
          , p = n(10).f
          , h = n(43).trim
          , f = r.Number
          , d = f
          , g = f.prototype
          , m = "Number" == o(n(37)(g))
          , y = "trim"in String.prototype
          , v = function(t) {
            var e = a(t, !1);
            if ("string" == typeof e && e.length > 2) {
                var n, r, i, o = (e = y ? e.trim() : h(e, 3)).charCodeAt(0);
                if (43 === o || 45 === o) {
                    if (88 === (n = e.charCodeAt(2)) || 120 === n)
                        return NaN
                } else if (48 === o) {
                    switch (e.charCodeAt(1)) {
                    case 66:
                    case 98:
                        r = 2,
                        i = 49;
                        break;
                    case 79:
                    case 111:
                        r = 8,
                        i = 55;
                        break;
                    default:
                        return +e
                    }
                    for (var s, c = e.slice(2), u = 0, l = c.length; u < l; u++)
                        if ((s = c.charCodeAt(u)) < 48 || s > i)
                            return NaN;
                    return parseInt(c, r)
                }
            }
            return +e
        };
        if (!f(" 0o1") || !f("0b1") || f("+0x1")) {
            f = function(t) {
                var e = arguments.length < 1 ? 0 : t
                  , n = this;
                return n instanceof f && (m ? c(function() {
                    g.valueOf.call(n)
                }) : "Number" != o(n)) ? s(new d(v(e)), n, f) : v(e)
            }
            ;
            for (var b, _ = n(9) ? u(d) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), T = 0; _.length > T; T++)
                i(d, b = _[T]) && !i(f, b) && p(f, b, l(d, b));
            f.prototype = g,
            g.constructor = f,
            n(14)(r, "Number", f)
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(22)
          , o = n(108)
          , s = n(75)
          , a = 1..toFixed
          , c = Math.floor
          , u = [0, 0, 0, 0, 0, 0]
          , l = "Number.toFixed: incorrect invocation!"
          , p = function(t, e) {
            for (var n = -1, r = e; ++n < 6; )
                r += t * u[n],
                u[n] = r % 1e7,
                r = c(r / 1e7)
        }
          , h = function(t) {
            for (var e = 6, n = 0; --e >= 0; )
                n += u[e],
                u[e] = c(n / t),
                n = n % t * 1e7
        }
          , f = function() {
            for (var t = 6, e = ""; --t >= 0; )
                if ("" !== e || 0 === t || 0 !== u[t]) {
                    var n = String(u[t]);
                    e = "" === e ? n : e + s.call("0", 7 - n.length) + n
                }
            return e
        }
          , d = function(t, e, n) {
            return 0 === e ? n : e % 2 == 1 ? d(t, e - 1, n * t) : d(t * t, e / 2, n)
        };
        r(r.P + r.F * (!!a && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(2)(function() {
            a.call({})
        })), "Number", {
            toFixed: function(t) {
                var e, n, r, a, c = o(this, l), u = i(t), g = "", m = "0";
                if (u < 0 || u > 20)
                    throw RangeError(l);
                if (c != c)
                    return "NaN";
                if (c <= -1e21 || c >= 1e21)
                    return String(c);
                if (c < 0 && (g = "-",
                c = -c),
                c > 1e-21)
                    if (n = (e = function(t) {
                        for (var e = 0, n = c * d(2, 69, 1); n >= 4096; )
                            e += 12,
                            n /= 4096;
                        for (; n >= 2; )
                            e += 1,
                            n /= 2;
                        return e
                    }() - 69) < 0 ? c * d(2, -e, 1) : c / d(2, e, 1),
                    n *= 4503599627370496,
                    (e = 52 - e) > 0) {
                        for (p(0, n),
                        r = u; r >= 7; )
                            p(1e7, 0),
                            r -= 7;
                        for (p(d(10, r, 1), 0),
                        r = e - 1; r >= 23; )
                            h(1 << 23),
                            r -= 23;
                        h(1 << r),
                        p(1, 1),
                        h(2),
                        m = f()
                    } else
                        p(0, n),
                        p(1 << -e, 0),
                        m = f() + s.call("0", u);
                return u > 0 ? g + ((a = m.length) <= u ? "0." + s.call("0", u - a) + m : m.slice(0, a - u) + "." + m.slice(a - u)) : g + m
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(2)
          , o = n(108)
          , s = 1..toPrecision;
        r(r.P + r.F * (i(function() {
            return "1" !== s.call(1, void 0)
        }) || !i(function() {
            s.call({})
        })), "Number", {
            toPrecision: function(t) {
                var e = o(this, "Number#toPrecision: incorrect invocation!");
                return void 0 === t ? s.call(e) : s.call(e, t)
            }
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S, "Number", {
            EPSILON: Math.pow(2, -52)
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(1).isFinite;
        r(r.S, "Number", {
            isFinite: function(t) {
                return "number" == typeof t && i(t)
            }
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S, "Number", {
            isInteger: n(109)
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S, "Number", {
            isNaN: function(t) {
                return t != t
            }
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(109)
          , o = Math.abs;
        r(r.S, "Number", {
            isSafeInteger: function(t) {
                return i(t) && o(t) <= 9007199254740991
            }
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S, "Number", {
            MAX_SAFE_INTEGER: 9007199254740991
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S, "Number", {
            MIN_SAFE_INTEGER: -9007199254740991
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(107);
        r(r.S + r.F * (Number.parseFloat != i), "Number", {
            parseFloat: i
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(106);
        r(r.S + r.F * (Number.parseInt != i), "Number", {
            parseInt: i
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(110)
          , o = Math.sqrt
          , s = Math.acosh;
        r(r.S + r.F * !(s && 710 == Math.floor(s(Number.MAX_VALUE)) && s(1 / 0) == 1 / 0), "Math", {
            acosh: function(t) {
                return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : i(t - 1 + o(t - 1) * o(t + 1))
            }
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = Math.asinh;
        r(r.S + r.F * !(i && 1 / i(0) > 0), "Math", {
            asinh: function o(t) {
                return isFinite(t = +t) && 0 != t ? t < 0 ? -o(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t
            }
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = Math.atanh;
        r(r.S + r.F * !(i && 1 / i(-0) < 0), "Math", {
            atanh: function(t) {
                return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
            }
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(76);
        r(r.S, "Math", {
            cbrt: function(t) {
                return i(t = +t) * Math.pow(Math.abs(t), 1 / 3)
            }
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S, "Math", {
            clz32: function(t) {
                return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
            }
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = Math.exp;
        r(r.S, "Math", {
            cosh: function(t) {
                return (i(t = +t) + i(-t)) / 2
            }
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(77);
        r(r.S + r.F * (i != Math.expm1), "Math", {
            expm1: i
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S, "Math", {
            fround: n(184)
        })
    }
    , function(t, e, n) {
        var r = n(76)
          , i = Math.pow
          , o = i(2, -52)
          , s = i(2, -23)
          , a = i(2, 127) * (2 - s)
          , c = i(2, -126);
        t.exports = Math.fround || function(t) {
            var e, n, i = Math.abs(t), u = r(t);
            return i < c ? u * (i / c / s + 1 / o - 1 / o) * c * s : (n = (e = (1 + s / o) * i) - (e - i)) > a || n != n ? u * (1 / 0) : u * n
        }
    }
    , function(t, e, n) {
        var r = n(0)
          , i = Math.abs;
        r(r.S, "Math", {
            hypot: function(t, e) {
                for (var n, r, o = 0, s = 0, a = arguments.length, c = 0; s < a; )
                    c < (n = i(arguments[s++])) ? (o = o * (r = c / n) * r + 1,
                    c = n) : o += n > 0 ? (r = n / c) * r : n;
                return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(o)
            }
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = Math.imul;
        r(r.S + r.F * n(2)(function() {
            return -5 != i(4294967295, 5) || 2 != i.length
        }), "Math", {
            imul: function(t, e) {
                var n = +t
                  , r = +e
                  , i = 65535 & n
                  , o = 65535 & r;
                return 0 | i * o + ((65535 & n >>> 16) * o + i * (65535 & r >>> 16) << 16 >>> 0)
            }
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S, "Math", {
            log10: function(t) {
                return Math.log(t) * Math.LOG10E
            }
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S, "Math", {
            log1p: n(110)
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S, "Math", {
            log2: function(t) {
                return Math.log(t) / Math.LN2
            }
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S, "Math", {
            sign: n(76)
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(77)
          , o = Math.exp;
        r(r.S + r.F * n(2)(function() {
            return -2e-17 != !Math.sinh(-2e-17)
        }), "Math", {
            sinh: function(t) {
                return Math.abs(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2)
            }
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(77)
          , o = Math.exp;
        r(r.S, "Math", {
            tanh: function(t) {
                var e = i(t = +t)
                  , n = i(-t);
                return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (o(t) + o(-t))
            }
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S, "Math", {
            trunc: function(t) {
                return (t > 0 ? Math.floor : Math.ceil)(t)
            }
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(36)
          , o = String.fromCharCode
          , s = String.fromCodePoint;
        r(r.S + r.F * (!!s && 1 != s.length), "String", {
            fromCodePoint: function(t) {
                for (var e, n = [], r = arguments.length, s = 0; r > s; ) {
                    if (e = +arguments[s++],
                    i(e, 1114111) !== e)
                        throw RangeError(e + " is not a valid code point");
                    n.push(e < 65536 ? o(e) : o(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
                }
                return n.join("")
            }
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(18)
          , o = n(6);
        r(r.S, "String", {
            raw: function(t) {
                for (var e = i(t.raw), n = o(e.length), r = arguments.length, s = [], a = 0; n > a; )
                    s.push(String(e[a++])),
                    a < r && s.push(String(arguments[a]));
                return s.join("")
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        n(43)("trim", function(t) {
            return function() {
                return t(this, 3)
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(78)(!0);
        n(79)(String, "String", function(t) {
            this._t = String(t),
            this._i = 0
        }, function() {
            var t, e = this._t, n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = r(e, n),
            this._i += t.length,
            {
                value: t,
                done: !1
            })
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(78)(!1);
        r(r.P, "String", {
            codePointAt: function(t) {
                return i(this, t)
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(6)
          , o = n(80)
          , s = "".endsWith;
        r(r.P + r.F * n(82)("endsWith"), "String", {
            endsWith: function(t) {
                var e = o(this, t, "endsWith")
                  , n = arguments.length > 1 ? arguments[1] : void 0
                  , r = i(e.length)
                  , a = void 0 === n ? r : Math.min(i(n), r)
                  , c = String(t);
                return s ? s.call(e, c, a) : e.slice(a - c.length, a) === c
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(80);
        r(r.P + r.F * n(82)("includes"), "String", {
            includes: function(t) {
                return !!~i(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.P, "String", {
            repeat: n(75)
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(6)
          , o = n(80)
          , s = "".startsWith;
        r(r.P + r.F * n(82)("startsWith"), "String", {
            startsWith: function(t) {
                var e = o(this, t, "startsWith")
                  , n = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length))
                  , r = String(t);
                return s ? s.call(e, r, n) : e.slice(n, n + r.length) === r
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        n(15)("anchor", function(t) {
            return function(e) {
                return t(this, "a", "name", e)
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        n(15)("big", function(t) {
            return function() {
                return t(this, "big", "", "")
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        n(15)("blink", function(t) {
            return function() {
                return t(this, "blink", "", "")
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        n(15)("bold", function(t) {
            return function() {
                return t(this, "b", "", "")
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        n(15)("fixed", function(t) {
            return function() {
                return t(this, "tt", "", "")
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        n(15)("fontcolor", function(t) {
            return function(e) {
                return t(this, "font", "color", e)
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        n(15)("fontsize", function(t) {
            return function(e) {
                return t(this, "font", "size", e)
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        n(15)("italics", function(t) {
            return function() {
                return t(this, "i", "", "")
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        n(15)("link", function(t) {
            return function(e) {
                return t(this, "a", "href", e)
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        n(15)("small", function(t) {
            return function() {
                return t(this, "small", "", "")
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        n(15)("strike", function(t) {
            return function() {
                return t(this, "strike", "", "")
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        n(15)("sub", function(t) {
            return function() {
                return t(this, "sub", "", "")
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        n(15)("sup", function(t) {
            return function() {
                return t(this, "sup", "", "")
            }
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S, "Date", {
            now: function() {
                return (new Date).getTime()
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(12)
          , o = n(30);
        r(r.P + r.F * n(2)(function() {
            return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                toISOString: function() {
                    return 1
                }
            })
        }), "Date", {
            toJSON: function(t) {
                var e = i(this)
                  , n = o(e);
                return "number" != typeof n || isFinite(n) ? e.toISOString() : null
            }
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(219);
        r(r.P + r.F * (Date.prototype.toISOString !== i), "Date", {
            toISOString: i
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(2)
          , i = Date.prototype.getTime
          , o = Date.prototype.toISOString
          , s = function(t) {
            return t > 9 ? t : "0" + t
        };
        t.exports = r(function() {
            return "0385-07-25T07:06:39.999Z" != o.call(new Date(-5e13 - 1))
        }) || !r(function() {
            o.call(new Date(NaN))
        }) ? function() {
            if (!isFinite(i.call(this)))
                throw RangeError("Invalid time value");
            var t = this
              , e = t.getUTCFullYear()
              , n = t.getUTCMilliseconds()
              , r = e < 0 ? "-" : e > 9999 ? "+" : "";
            return r + ("00000" + Math.abs(e)).slice(r ? -6 : -4) + "-" + s(t.getUTCMonth() + 1) + "-" + s(t.getUTCDate()) + "T" + s(t.getUTCHours()) + ":" + s(t.getUTCMinutes()) + ":" + s(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + s(n)) + "Z"
        }
        : o
    }
    , function(t, e, n) {
        var r = Date.prototype
          , i = r.toString
          , o = r.getTime;
        new Date(NaN) + "" != "Invalid Date" && n(14)(r, "toString", function() {
            var t = o.call(this);
            return t == t ? i.call(this) : "Invalid Date"
        })
    }
    , function(t, e, n) {
        var r = n(5)("toPrimitive")
          , i = Date.prototype;
        r in i || n(17)(i, r, n(222))
    }
    , function(t, e, n) {
        "use strict";
        var r = n(3)
          , i = n(30);
        t.exports = function(t) {
            if ("string" !== t && "number" !== t && "default" !== t)
                throw TypeError("Incorrect hint");
            return i(r(this), "number" != t)
        }
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S, "Array", {
            isArray: n(57)
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(20)
          , i = n(0)
          , o = n(12)
          , s = n(112)
          , a = n(83)
          , c = n(6)
          , u = n(84)
          , l = n(85);
        i(i.S + i.F * !n(58)(function(t) {
            Array.from(t)
        }), "Array", {
            from: function(t) {
                var e, n, i, p, h = o(t), f = "function" == typeof this ? this : Array, d = arguments.length, g = d > 1 ? arguments[1] : void 0, m = void 0 !== g, y = 0, v = l(h);
                if (m && (g = r(g, d > 2 ? arguments[2] : void 0, 2)),
                void 0 == v || f == Array && a(v))
                    for (n = new f(e = c(h.length)); e > y; y++)
                        u(n, y, m ? g(h[y], y) : h[y]);
                else
                    for (p = v.call(h),
                    n = new f; !(i = p.next()).done; y++)
                        u(n, y, m ? s(p, g, [i.value, y], !0) : i.value);
                return n.length = y,
                n
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(84);
        r(r.S + r.F * n(2)(function() {
            function t() {}
            return !(Array.of.call(t)instanceof t)
        }), "Array", {
            of: function() {
                for (var t = 0, e = arguments.length, n = new ("function" == typeof this ? this : Array)(e); e > t; )
                    i(n, t, arguments[t++]);
                return n.length = e,
                n
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(18)
          , o = [].join;
        r(r.P + r.F * (n(49) != Object || !n(19)(o)), "Array", {
            join: function(t) {
                return o.call(i(this), void 0 === t ? "," : t)
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(71)
          , o = n(27)
          , s = n(36)
          , a = n(6)
          , c = [].slice;
        r(r.P + r.F * n(2)(function() {
            i && c.call(i)
        }), "Array", {
            slice: function(t, e) {
                var n = a(this.length)
                  , r = o(this);
                if (e = void 0 === e ? n : e,
                "Array" == r)
                    return c.call(this, t, e);
                for (var i = s(t, n), u = s(e, n), l = a(u - i), p = new Array(l), h = 0; h < l; h++)
                    p[h] = "String" == r ? this.charAt(i + h) : this[i + h];
                return p
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(21)
          , o = n(12)
          , s = n(2)
          , a = [].sort
          , c = [1, 2, 3];
        r(r.P + r.F * (s(function() {
            c.sort(void 0)
        }) || !s(function() {
            c.sort(null)
        }) || !n(19)(a)), "Array", {
            sort: function(t) {
                return void 0 === t ? a.call(o(this)) : a.call(o(this), i(t))
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(25)(0)
          , o = n(19)([].forEach, !0);
        r(r.P + r.F * !o, "Array", {
            forEach: function(t) {
                return i(this, t, arguments[1])
            }
        })
    }
    , function(t, e, n) {
        var r = n(4)
          , i = n(57)
          , o = n(5)("species");
        t.exports = function(t) {
            var e;
            return i(t) && ("function" != typeof (e = t.constructor) || e !== Array && !i(e.prototype) || (e = void 0),
            r(e) && null === (e = e[o]) && (e = void 0)),
            void 0 === e ? Array : e
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(25)(1);
        r(r.P + r.F * !n(19)([].map, !0), "Array", {
            map: function(t) {
                return i(this, t, arguments[1])
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(25)(2);
        r(r.P + r.F * !n(19)([].filter, !0), "Array", {
            filter: function(t) {
                return i(this, t, arguments[1])
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(25)(3);
        r(r.P + r.F * !n(19)([].some, !0), "Array", {
            some: function(t) {
                return i(this, t, arguments[1])
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(25)(4);
        r(r.P + r.F * !n(19)([].every, !0), "Array", {
            every: function(t) {
                return i(this, t, arguments[1])
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(114);
        r(r.P + r.F * !n(19)([].reduce, !0), "Array", {
            reduce: function(t) {
                return i(this, t, arguments.length, arguments[1], !1)
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(114);
        r(r.P + r.F * !n(19)([].reduceRight, !0), "Array", {
            reduceRight: function(t) {
                return i(this, t, arguments.length, arguments[1], !0)
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(55)(!1)
          , o = [].indexOf
          , s = !!o && 1 / [1].indexOf(1, -0) < 0;
        r(r.P + r.F * (s || !n(19)(o)), "Array", {
            indexOf: function(t) {
                return s ? o.apply(this, arguments) || 0 : i(this, t, arguments[1])
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(18)
          , o = n(22)
          , s = n(6)
          , a = [].lastIndexOf
          , c = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
        r(r.P + r.F * (c || !n(19)(a)), "Array", {
            lastIndexOf: function(t) {
                if (c)
                    return a.apply(this, arguments) || 0;
                var e = i(this)
                  , n = s(e.length)
                  , r = n - 1;
                for (arguments.length > 1 && (r = Math.min(r, o(arguments[1]))),
                r < 0 && (r = n + r); r >= 0; r--)
                    if (r in e && e[r] === t)
                        return r || 0;
                return -1
            }
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.P, "Array", {
            copyWithin: n(115)
        }),
        n(40)("copyWithin")
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.P, "Array", {
            fill: n(86)
        }),
        n(40)("fill")
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(25)(5)
          , o = !0;
        "find"in [] && Array(1).find(function() {
            o = !1
        }),
        r(r.P + r.F * o, "Array", {
            find: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        n(40)("find")
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(25)(6)
          , o = "findIndex"
          , s = !0;
        o in [] && Array(1)[o](function() {
            s = !1
        }),
        r(r.P + r.F * s, "Array", {
            findIndex: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        n(40)(o)
    }
    , function(t, e, n) {
        n(45)("Array")
    }
    , function(t, e, n) {
        var r = n(1)
          , i = n(74)
          , o = n(10).f
          , s = n(38).f
          , a = n(81)
          , c = n(59)
          , u = r.RegExp
          , l = u
          , p = u.prototype
          , h = /a/g
          , f = /a/g
          , d = new u(h) !== h;
        if (n(9) && (!d || n(2)(function() {
            return f[n(5)("match")] = !1,
            u(h) != h || u(f) == f || "/a/i" != u(h, "i")
        }))) {
            u = function(t, e) {
                var n = this instanceof u
                  , r = a(t)
                  , o = void 0 === e;
                return !n && r && t.constructor === u && o ? t : i(d ? new l(r && !o ? t.source : t,e) : l((r = t instanceof u) ? t.source : t, r && o ? c.call(t) : e), n ? this : p, u)
            }
            ;
            for (var g = function(t) {
                t in u || o(u, t, {
                    configurable: !0,
                    get: function() {
                        return l[t]
                    },
                    set: function(e) {
                        l[t] = e
                    }
                })
            }, m = s(l), y = 0; m.length > y; )
                g(m[y++]);
            p.constructor = u,
            u.prototype = p,
            n(14)(r, "RegExp", u)
        }
        n(45)("RegExp")
    }
    , function(t, e, n) {
        "use strict";
        n(118);
        var r = n(3)
          , i = n(59)
          , o = n(9)
          , s = /./.toString
          , a = function(t) {
            n(14)(RegExp.prototype, "toString", t, !0)
        };
        n(2)(function() {
            return "/a/b" != s.call({
                source: "a",
                flags: "b"
            })
        }) ? a(function() {
            var t = r(this);
            return "/".concat(t.source, "/", "flags"in t ? t.flags : !o && t instanceof RegExp ? i.call(t) : void 0)
        }) : "toString" != s.name && a(function() {
            return s.call(this)
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(3)
          , i = n(6)
          , o = n(89)
          , s = n(60);
        n(61)("match", 1, function(t, e, n, a) {
            return [function(n) {
                var r = t(this)
                  , i = void 0 == n ? void 0 : n[e];
                return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r))
            }
            , function(t) {
                var e = a(n, t, this);
                if (e.done)
                    return e.value;
                var c = r(t)
                  , u = String(this);
                if (!c.global)
                    return s(c, u);
                var l = c.unicode;
                c.lastIndex = 0;
                for (var p, h = [], f = 0; null !== (p = s(c, u)); ) {
                    var d = String(p[0]);
                    h[f] = d,
                    "" === d && (c.lastIndex = o(u, i(c.lastIndex), l)),
                    f++
                }
                return 0 === f ? null : h
            }
            ]
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(3)
          , i = n(12)
          , o = n(6)
          , s = n(22)
          , a = n(89)
          , c = n(60)
          , u = Math.max
          , l = Math.min
          , p = Math.floor
          , h = /\$([$&`']|\d\d?|<[^>]*>)/g
          , f = /\$([$&`']|\d\d?)/g
          , d = function(t) {
            return void 0 === t ? t : String(t)
        };
        n(61)("replace", 2, function(t, e, n, g) {
            return [function(r, i) {
                var o = t(this)
                  , s = void 0 == r ? void 0 : r[e];
                return void 0 !== s ? s.call(r, o, i) : n.call(String(o), r, i)
            }
            , function(t, e) {
                var i = g(n, t, this, e);
                if (i.done)
                    return i.value;
                var p = r(t)
                  , h = String(this)
                  , f = "function" == typeof e;
                f || (e = String(e));
                var y = p.global;
                if (y) {
                    var v = p.unicode;
                    p.lastIndex = 0
                }
                for (var b = []; ; ) {
                    var _ = c(p, h);
                    if (null === _)
                        break;
                    if (b.push(_),
                    !y)
                        break;
                    "" === String(_[0]) && (p.lastIndex = a(h, o(p.lastIndex), v))
                }
                for (var T = "", S = 0, C = 0; C < b.length; C++) {
                    _ = b[C];
                    for (var w = String(_[0]), I = u(l(s(_.index), h.length), 0), M = [], x = 1; x < _.length; x++)
                        M.push(d(_[x]));
                    var k = _.groups;
                    if (f) {
                        var P = [w].concat(M, I, h);
                        void 0 !== k && P.push(k);
                        var A = String(e.apply(void 0, P))
                    } else
                        A = m(w, h, I, M, k, e);
                    I >= S && (T += h.slice(S, I) + A,
                    S = I + w.length)
                }
                return T + h.slice(S)
            }
            ];
            function m(t, e, r, o, s, a) {
                var c = r + t.length
                  , u = o.length
                  , l = f;
                return void 0 !== s && (s = i(s),
                l = h),
                n.call(a, l, function(n, i) {
                    var a;
                    switch (i.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return e.slice(0, r);
                    case "'":
                        return e.slice(c);
                    case "<":
                        a = s[i.slice(1, -1)];
                        break;
                    default:
                        var l = +i;
                        if (0 === l)
                            return n;
                        if (l > u) {
                            var h = p(l / 10);
                            return 0 === h ? n : h <= u ? void 0 === o[h - 1] ? i.charAt(1) : o[h - 1] + i.charAt(1) : n
                        }
                        a = o[l - 1]
                    }
                    return void 0 === a ? "" : a
                })
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(3)
          , i = n(103)
          , o = n(60);
        n(61)("search", 1, function(t, e, n, s) {
            return [function(n) {
                var r = t(this)
                  , i = void 0 == n ? void 0 : n[e];
                return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r))
            }
            , function(t) {
                var e = s(n, t, this);
                if (e.done)
                    return e.value;
                var a = r(t)
                  , c = String(this)
                  , u = a.lastIndex;
                i(u, 0) || (a.lastIndex = 0);
                var l = o(a, c);
                return i(a.lastIndex, u) || (a.lastIndex = u),
                null === l ? -1 : l.index
            }
            ]
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(81)
          , i = n(3)
          , o = n(52)
          , s = n(89)
          , a = n(6)
          , c = n(60)
          , u = n(88)
          , l = n(2)
          , p = Math.min
          , h = [].push
          , f = !l(function() {
            RegExp(4294967295, "y")
        });
        n(61)("split", 2, function(t, e, n, l) {
            var d;
            return d = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, e) {
                var i = String(this);
                if (void 0 === t && 0 === e)
                    return [];
                if (!r(t))
                    return n.call(i, t, e);
                for (var o, s, a, c = [], l = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), p = 0, f = void 0 === e ? 4294967295 : e >>> 0, d = new RegExp(t.source,l + "g"); (o = u.call(d, i)) && !((s = d.lastIndex) > p && (c.push(i.slice(p, o.index)),
                o.length > 1 && o.index < i.length && h.apply(c, o.slice(1)),
                a = o[0].length,
                p = s,
                c.length >= f)); )
                    d.lastIndex === o.index && d.lastIndex++;
                return p === i.length ? !a && d.test("") || c.push("") : c.push(i.slice(p)),
                c.length > f ? c.slice(0, f) : c
            }
            : "0".split(void 0, 0).length ? function(t, e) {
                return void 0 === t && 0 === e ? [] : n.call(this, t, e)
            }
            : n,
            [function(n, r) {
                var i = t(this)
                  , o = void 0 == n ? void 0 : n[e];
                return void 0 !== o ? o.call(n, i, r) : d.call(String(i), n, r)
            }
            , function(t, e) {
                var r = l(d, t, this, e, d !== n);
                if (r.done)
                    return r.value;
                var u = i(t)
                  , h = String(this)
                  , g = o(u, RegExp)
                  , m = u.unicode
                  , y = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (f ? "y" : "g")
                  , v = new g(f ? u : "^(?:" + u.source + ")",y)
                  , b = void 0 === e ? 4294967295 : e >>> 0;
                if (0 === b)
                    return [];
                if (0 === h.length)
                    return null === c(v, h) ? [h] : [];
                for (var _ = 0, T = 0, S = []; T < h.length; ) {
                    v.lastIndex = f ? T : 0;
                    var C, w = c(v, f ? h : h.slice(T));
                    if (null === w || (C = p(a(v.lastIndex + (f ? 0 : T)), h.length)) === _)
                        T = s(h, T, m);
                    else {
                        if (S.push(h.slice(_, T)),
                        S.length === b)
                            return S;
                        for (var I = 1; I <= w.length - 1; I++)
                            if (S.push(w[I]),
                            S.length === b)
                                return S;
                        T = _ = C
                    }
                }
                return S.push(h.slice(_)),
                S
            }
            ]
        })
    }
    , function(t, e, n) {
        var r = n(1)
          , i = n(90).set
          , o = r.MutationObserver || r.WebKitMutationObserver
          , s = r.process
          , a = r.Promise
          , c = "process" == n(27)(s);
        t.exports = function() {
            var t, e, n, u = function() {
                var r, i;
                for (c && (r = s.domain) && r.exit(); t; ) {
                    i = t.fn,
                    t = t.next;
                    try {
                        i()
                    } catch (r) {
                        throw t ? n() : e = void 0,
                        r
                    }
                }
                e = void 0,
                r && r.enter()
            };
            if (c)
                n = function() {
                    s.nextTick(u)
                }
                ;
            else if (!o || r.navigator && r.navigator.standalone)
                if (a && a.resolve) {
                    var l = a.resolve(void 0);
                    n = function() {
                        l.then(u)
                    }
                } else
                    n = function() {
                        i.call(r, u)
                    }
                    ;
            else {
                var p = !0
                  , h = document.createTextNode("");
                new o(u).observe(h, {
                    characterData: !0
                }),
                n = function() {
                    h.data = p = !p
                }
            }
            return function(r) {
                var i = {
                    fn: r,
                    next: void 0
                };
                e && (e.next = i),
                t || (t = i,
                n()),
                e = i
            }
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            try {
                return {
                    e: !1,
                    v: t()
                }
            } catch (t) {
                return {
                    e: !0,
                    v: t
                }
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        var r = n(122)
          , i = n(41);
        t.exports = n(64)("Map", function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            get: function(t) {
                var e = r.getEntry(i(this, "Map"), t);
                return e && e.v
            },
            set: function(t, e) {
                return r.def(i(this, "Map"), 0 === t ? 0 : t, e)
            }
        }, r, !0)
    }
    , function(t, e, n) {
        "use strict";
        var r = n(122)
          , i = n(41);
        t.exports = n(64)("Set", function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            add: function(t) {
                return r.def(i(this, "Set"), t = 0 === t ? 0 : t, t)
            }
        }, r)
    }
    , function(t, e, n) {
        "use strict";
        var r, i = n(1), o = n(25)(0), s = n(14), a = n(31), c = n(102), u = n(123), l = n(4), p = n(41), h = n(41), f = !i.ActiveXObject && "ActiveXObject"in i, d = a.getWeak, g = Object.isExtensible, m = u.ufstore, y = function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, v = {
            get: function(t) {
                if (l(t)) {
                    var e = d(t);
                    return !0 === e ? m(p(this, "WeakMap")).get(t) : e ? e[this._i] : void 0
                }
            },
            set: function(t, e) {
                return u.def(p(this, "WeakMap"), t, e)
            }
        }, b = t.exports = n(64)("WeakMap", y, v, u, !0, !0);
        h && f && (c((r = u.getConstructor(y, "WeakMap")).prototype, v),
        a.NEED = !0,
        o(["delete", "has", "get", "set"], function(t) {
            var e = b.prototype
              , n = e[t];
            s(e, t, function(e, i) {
                if (l(e) && !g(e)) {
                    this._f || (this._f = new r);
                    var o = this._f[t](e, i);
                    return "set" == t ? this : o
                }
                return n.call(this, e, i)
            })
        }))
    }
    , function(t, e, n) {
        "use strict";
        var r = n(123)
          , i = n(41);
        n(64)("WeakSet", function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            add: function(t) {
                return r.def(i(this, "WeakSet"), t, !0)
            }
        }, r, !1, !0)
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(65)
          , o = n(91)
          , s = n(3)
          , a = n(36)
          , c = n(6)
          , u = n(4)
          , l = n(1).ArrayBuffer
          , p = n(52)
          , h = o.ArrayBuffer
          , f = o.DataView
          , d = i.ABV && l.isView
          , g = h.prototype.slice
          , m = i.VIEW;
        r(r.G + r.W + r.F * (l !== h), {
            ArrayBuffer: h
        }),
        r(r.S + r.F * !i.CONSTR, "ArrayBuffer", {
            isView: function(t) {
                return d && d(t) || u(t) && m in t
            }
        }),
        r(r.P + r.U + r.F * n(2)(function() {
            return !new h(2).slice(1, void 0).byteLength
        }), "ArrayBuffer", {
            slice: function(t, e) {
                if (void 0 !== g && void 0 === e)
                    return g.call(s(this), t);
                for (var n = s(this).byteLength, r = a(t, n), i = a(void 0 === e ? n : e, n), o = new (p(this, h))(c(i - r)), u = new f(this), l = new f(o), d = 0; r < i; )
                    l.setUint8(d++, u.getUint8(r++));
                return o
            }
        }),
        n(45)("ArrayBuffer")
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.G + r.W + r.F * !n(65).ABV, {
            DataView: n(91).DataView
        })
    }
    , function(t, e, n) {
        n(29)("Int8", 1, function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        })
    }
    , function(t, e, n) {
        n(29)("Uint8", 1, function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        })
    }
    , function(t, e, n) {
        n(29)("Uint8", 1, function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        }, !0)
    }
    , function(t, e, n) {
        n(29)("Int16", 2, function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        })
    }
    , function(t, e, n) {
        n(29)("Uint16", 2, function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        })
    }
    , function(t, e, n) {
        n(29)("Int32", 4, function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        })
    }
    , function(t, e, n) {
        n(29)("Uint32", 4, function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        })
    }
    , function(t, e, n) {
        n(29)("Float32", 4, function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        })
    }
    , function(t, e, n) {
        n(29)("Float64", 8, function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(21)
          , o = n(3)
          , s = (n(1).Reflect || {}).apply
          , a = Function.apply;
        r(r.S + r.F * !n(2)(function() {
            s(function() {})
        }), "Reflect", {
            apply: function(t, e, n) {
                var r = i(t)
                  , c = o(n);
                return s ? s(r, e, c) : a.call(r, e, c)
            }
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(37)
          , o = n(21)
          , s = n(3)
          , a = n(4)
          , c = n(2)
          , u = n(104)
          , l = (n(1).Reflect || {}).construct
          , p = c(function() {
            function t() {}
            return !(l(function() {}, [], t)instanceof t)
        })
          , h = !c(function() {
            l(function() {})
        });
        r(r.S + r.F * (p || h), "Reflect", {
            construct: function(t, e) {
                o(t),
                s(e);
                var n = arguments.length < 3 ? t : o(arguments[2]);
                if (h && !p)
                    return l(t, e, n);
                if (t == n) {
                    switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0],e[1]);
                    case 3:
                        return new t(e[0],e[1],e[2]);
                    case 4:
                        return new t(e[0],e[1],e[2],e[3])
                    }
                    var r = [null];
                    return r.push.apply(r, e),
                    new (u.apply(t, r))
                }
                var c = n.prototype
                  , f = i(a(c) ? c : Object.prototype)
                  , d = Function.apply.call(t, f, e);
                return a(d) ? d : f
            }
        })
    }
    , function(t, e, n) {
        var r = n(10)
          , i = n(0)
          , o = n(3)
          , s = n(30);
        i(i.S + i.F * n(2)(function() {
            Reflect.defineProperty(r.f({}, 1, {
                value: 1
            }), 1, {
                value: 2
            })
        }), "Reflect", {
            defineProperty: function(t, e, n) {
                o(t),
                e = s(e, !0),
                o(n);
                try {
                    return r.f(t, e, n),
                    !0
                } catch (t) {
                    return !1
                }
            }
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(23).f
          , o = n(3);
        r(r.S, "Reflect", {
            deleteProperty: function(t, e) {
                var n = i(o(t), e);
                return !(n && !n.configurable) && delete t[e]
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(3)
          , o = function(t) {
            this._t = i(t),
            this._i = 0;
            var e, n = this._k = [];
            for (e in t)
                n.push(e)
        };
        n(111)(o, "Object", function() {
            var t, e = this._k;
            do {
                if (this._i >= e.length)
                    return {
                        value: void 0,
                        done: !0
                    }
            } while (!((t = e[this._i++])in this._t));return {
                value: t,
                done: !1
            }
        }),
        r(r.S, "Reflect", {
            enumerate: function(t) {
                return new o(t)
            }
        })
    }
    , function(t, e, n) {
        var r = n(23)
          , i = n(39)
          , o = n(16)
          , s = n(0)
          , a = n(4)
          , c = n(3);
        s(s.S, "Reflect", {
            get: function u(t, e) {
                var n, s, l = arguments.length < 3 ? t : arguments[2];
                return c(t) === l ? t[e] : (n = r.f(t, e)) ? o(n, "value") ? n.value : void 0 !== n.get ? n.get.call(l) : void 0 : a(s = i(t)) ? u(s, e, l) : void 0
            }
        })
    }
    , function(t, e, n) {
        var r = n(23)
          , i = n(0)
          , o = n(3);
        i(i.S, "Reflect", {
            getOwnPropertyDescriptor: function(t, e) {
                return r.f(o(t), e)
            }
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(39)
          , o = n(3);
        r(r.S, "Reflect", {
            getPrototypeOf: function(t) {
                return i(o(t))
            }
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S, "Reflect", {
            has: function(t, e) {
                return e in t
            }
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(3)
          , o = Object.isExtensible;
        r(r.S, "Reflect", {
            isExtensible: function(t) {
                return i(t),
                !o || o(t)
            }
        })
    }
    , function(t, e, n) {
        var r = n(0);
        r(r.S, "Reflect", {
            ownKeys: n(125)
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(3)
          , o = Object.preventExtensions;
        r(r.S, "Reflect", {
            preventExtensions: function(t) {
                i(t);
                try {
                    return o && o(t),
                    !0
                } catch (t) {
                    return !1
                }
            }
        })
    }
    , function(t, e, n) {
        var r = n(10)
          , i = n(23)
          , o = n(39)
          , s = n(16)
          , a = n(0)
          , c = n(32)
          , u = n(3)
          , l = n(4);
        a(a.S, "Reflect", {
            set: function p(t, e, n) {
                var a, h, f = arguments.length < 4 ? t : arguments[3], d = i.f(u(t), e);
                if (!d) {
                    if (l(h = o(t)))
                        return p(h, e, n, f);
                    d = c(0)
                }
                if (s(d, "value")) {
                    if (!1 === d.writable || !l(f))
                        return !1;
                    if (a = i.f(f, e)) {
                        if (a.get || a.set || !1 === a.writable)
                            return !1;
                        a.value = n,
                        r.f(f, e, a)
                    } else
                        r.f(f, e, c(0, n));
                    return !0
                }
                return void 0 !== d.set && (d.set.call(f, n),
                !0)
            }
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(72);
        i && r(r.S, "Reflect", {
            setPrototypeOf: function(t, e) {
                i.check(t, e);
                try {
                    return i.set(t, e),
                    !0
                } catch (t) {
                    return !1
                }
            }
        })
    }
    , function(t, e, n) {
        n(282),
        t.exports = n(8).Array.includes
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(55)(!0);
        r(r.P, "Array", {
            includes: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        n(40)("includes")
    }
    , function(t, e, n) {
        n(284),
        t.exports = n(8).Array.flatMap
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(285)
          , o = n(12)
          , s = n(6)
          , a = n(21)
          , c = n(113);
        r(r.P, "Array", {
            flatMap: function(t) {
                var e, n, r = o(this);
                return a(t),
                e = s(r.length),
                n = c(r, 0),
                i(n, r, r, e, 0, 1, t, arguments[1]),
                n
            }
        }),
        n(40)("flatMap")
    }
    , function(t, e, n) {
        "use strict";
        var r = n(57)
          , i = n(4)
          , o = n(6)
          , s = n(20)
          , a = n(5)("isConcatSpreadable");
        t.exports = function c(t, e, n, u, l, p, h, f) {
            for (var d, g, m = l, y = 0, v = !!h && s(h, f, 3); y < u; ) {
                if (y in n) {
                    if (d = v ? v(n[y], y, e) : n[y],
                    g = !1,
                    i(d) && (g = void 0 !== (g = d[a]) ? !!g : r(d)),
                    g && p > 0)
                        m = c(t, e, d, o(d.length), m, p - 1) - 1;
                    else {
                        if (m >= 9007199254740991)
                            throw TypeError();
                        t[m] = d
                    }
                    m++
                }
                y++
            }
            return m
        }
    }
    , function(t, e, n) {
        n(287),
        t.exports = n(8).String.padStart
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(126)
          , o = n(63)
          , s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
        r(r.P + r.F * s, "String", {
            padStart: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
            }
        })
    }
    , function(t, e, n) {
        n(289),
        t.exports = n(8).String.padEnd
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(126)
          , o = n(63)
          , s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
        r(r.P + r.F * s, "String", {
            padEnd: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
            }
        })
    }
    , function(t, e, n) {
        n(291),
        t.exports = n(8).String.trimLeft
    }
    , function(t, e, n) {
        "use strict";
        n(43)("trimLeft", function(t) {
            return function() {
                return t(this, 1)
            }
        }, "trimStart")
    }
    , function(t, e, n) {
        n(293),
        t.exports = n(8).String.trimRight
    }
    , function(t, e, n) {
        "use strict";
        n(43)("trimRight", function(t) {
            return function() {
                return t(this, 2)
            }
        }, "trimEnd")
    }
    , function(t, e, n) {
        n(295),
        t.exports = n(68).f("asyncIterator")
    }
    , function(t, e, n) {
        n(98)("asyncIterator")
    }
    , function(t, e, n) {
        n(297),
        t.exports = n(8).Object.getOwnPropertyDescriptors
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(125)
          , o = n(18)
          , s = n(23)
          , a = n(84);
        r(r.S, "Object", {
            getOwnPropertyDescriptors: function(t) {
                for (var e, n, r = o(t), c = s.f, u = i(r), l = {}, p = 0; u.length > p; )
                    void 0 !== (n = c(r, e = u[p++])) && a(l, e, n);
                return l
            }
        })
    }
    , function(t, e, n) {
        n(299),
        t.exports = n(8).Object.values
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(127)(!1);
        r(r.S, "Object", {
            values: function(t) {
                return i(t)
            }
        })
    }
    , function(t, e, n) {
        n(301),
        t.exports = n(8).Object.entries
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(127)(!0);
        r(r.S, "Object", {
            entries: function(t) {
                return i(t)
            }
        })
    }
    , function(t, e, n) {
        "use strict";
        n(119),
        n(303),
        t.exports = n(8).Promise["finally"]
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(8)
          , o = n(1)
          , s = n(52)
          , a = n(121);
        r(r.P + r.R, "Promise", {
            "finally": function(t) {
                var e = s(this, i.Promise || o.Promise)
                  , n = "function" == typeof t;
                return this.then(n ? function(n) {
                    return a(e, t()).then(function() {
                        return n
                    })
                }
                : t, n ? function(n) {
                    return a(e, t()).then(function() {
                        throw n
                    })
                }
                : t)
            }
        })
    }
    , function(t, e, n) {
        n(305),
        n(306),
        n(307),
        t.exports = n(8)
    }
    , function(t, e, n) {
        var r = n(1)
          , i = n(0)
          , o = n(63)
          , s = [].slice
          , a = /MSIE .\./.test(o)
          , c = function(t) {
            return function(e, n) {
                var r = arguments.length > 2
                  , i = !!r && s.call(arguments, 2);
                return t(r ? function() {
                    ("function" == typeof e ? e : Function(e)).apply(this, i)
                }
                : e, n)
            }
        };
        i(i.G + i.B + i.F * a, {
            setTimeout: c(r.setTimeout),
            setInterval: c(r.setInterval)
        })
    }
    , function(t, e, n) {
        var r = n(0)
          , i = n(90);
        r(r.G + r.B, {
            setImmediate: i.set,
            clearImmediate: i.clear
        })
    }
    , function(t, e, n) {
        for (var r = n(87), i = n(35), o = n(14), s = n(1), a = n(17), c = n(44), u = n(5), l = u("iterator"), p = u("toStringTag"), h = c.Array, f = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, d = i(f), g = 0; g < d.length; g++) {
            var m, y = d[g], v = f[y], b = s[y], _ = b && b.prototype;
            if (_ && (_[l] || a(_, l, h),
            _[p] || a(_, p, y),
            c[y] = h,
            v))
                for (m in r)
                    _[m] || o(_, m, r[m], !0)
        }
    }
    , function(t, e, n) {
        var r = function(t) {
            "use strict";
            var e, n = Object.prototype, r = n.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {}, o = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator", a = i.toStringTag || "@@toStringTag";
            function c(t, e, n, r) {
                var i = e && e.prototype instanceof g ? e : g
                  , o = Object.create(i.prototype)
                  , s = new x(r || []);
                return o._invoke = function(t, e, n) {
                    var r = l;
                    return function(i, o) {
                        if (r === h)
                            throw new Error("Generator is already running");
                        if (r === f) {
                            if ("throw" === i)
                                throw o;
                            return P()
                        }
                        for (n.method = i,
                        n.arg = o; ; ) {
                            var s = n.delegate;
                            if (s) {
                                var a = w(s, n);
                                if (a) {
                                    if (a === d)
                                        continue;
                                    return a
                                }
                            }
                            if ("next" === n.method)
                                n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (r === l)
                                    throw r = f,
                                    n.arg;
                                n.dispatchException(n.arg)
                            } else
                                "return" === n.method && n.abrupt("return", n.arg);
                            r = h;
                            var c = u(t, e, n);
                            if ("normal" === c.type) {
                                if (r = n.done ? f : p,
                                c.arg === d)
                                    continue;
                                return {
                                    value: c.arg,
                                    done: n.done
                                }
                            }
                            "throw" === c.type && (r = f,
                            n.method = "throw",
                            n.arg = c.arg)
                        }
                    }
                }(t, n, s),
                o
            }
            function u(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = c;
            var l = "suspendedStart"
              , p = "suspendedYield"
              , h = "executing"
              , f = "completed"
              , d = {};
            function g() {}
            function m() {}
            function y() {}
            var v = {};
            v[o] = function() {
                return this
            }
            ;
            var b = Object.getPrototypeOf
              , _ = b && b(b(k([])));
            _ && _ !== n && r.call(_, o) && (v = _);
            var T = y.prototype = g.prototype = Object.create(v);
            function S(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    t[e] = function(t) {
                        return this._invoke(e, t)
                    }
                })
            }
            function C(t, e) {
                var n;
                this._invoke = function(i, o) {
                    function s() {
                        return new e(function(n, s) {
                            !function a(n, i, o, s) {
                                var c = u(t[n], t, i);
                                if ("throw" !== c.type) {
                                    var l = c.arg
                                      , p = l.value;
                                    return p && "object" == typeof p && r.call(p, "__await") ? e.resolve(p.__await).then(function(t) {
                                        a("next", t, o, s)
                                    }, function(t) {
                                        a("throw", t, o, s)
                                    }) : e.resolve(p).then(function(t) {
                                        l.value = t,
                                        o(l)
                                    }, function(t) {
                                        return a("throw", t, o, s)
                                    })
                                }
                                s(c.arg)
                            }(i, o, n, s)
                        }
                        )
                    }
                    return n = n ? n.then(s, s) : s()
                }
            }
            function w(t, n) {
                var r = t.iterator[n.method];
                if (r === e) {
                    if (n.delegate = null,
                    "throw" === n.method) {
                        if (t.iterator["return"] && (n.method = "return",
                        n.arg = e,
                        w(t, n),
                        "throw" === n.method))
                            return d;
                        n.method = "throw",
                        n.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return d
                }
                var i = u(r, t.iterator, n.arg);
                if ("throw" === i.type)
                    return n.method = "throw",
                    n.arg = i.arg,
                    n.delegate = null,
                    d;
                var o = i.arg;
                return o ? o.done ? (n[t.resultName] = o.value,
                n.next = t.nextLoc,
                "return" !== n.method && (n.method = "next",
                n.arg = e),
                n.delegate = null,
                d) : o : (n.method = "throw",
                n.arg = new TypeError("iterator result is not an object"),
                n.delegate = null,
                d)
            }
            function I(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function M(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function x(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(I, this),
                this.reset(!0)
            }
            function k(t) {
                if (t) {
                    var n = t[o];
                    if (n)
                        return n.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var i = -1
                          , s = function n() {
                            for (; ++i < t.length; )
                                if (r.call(t, i))
                                    return n.value = t[i],
                                    n.done = !1,
                                    n;
                            return n.value = e,
                            n.done = !0,
                            n
                        };
                        return s.next = s
                    }
                }
                return {
                    next: P
                }
            }
            function P() {
                return {
                    value: e,
                    done: !0
                }
            }
            return m.prototype = T.constructor = y,
            y.constructor = m,
            y[a] = m.displayName = "GeneratorFunction",
            t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y,
                a in t || (t[a] = "GeneratorFunction")),
                t.prototype = Object.create(T),
                t
            }
            ,
            t.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            S(C.prototype),
            C.prototype[s] = function() {
                return this
            }
            ,
            t.AsyncIterator = C,
            t.async = function(e, n, r, i, o) {
                void 0 === o && (o = Promise);
                var s = new C(c(e, n, r, i),o);
                return t.isGeneratorFunction(n) ? s : s.next().then(function(t) {
                    return t.done ? t.value : s.next()
                })
            }
            ,
            S(T),
            T[a] = "Generator",
            T[o] = function() {
                return this
            }
            ,
            T.toString = function() {
                return "[object Generator]"
            }
            ,
            t.keys = function(t) {
                var e = [];
                for (var n in t)
                    e.push(n);
                return e.reverse(),
                function r() {
                    for (; e.length; ) {
                        var n = e.pop();
                        if (n in t)
                            return r.value = n,
                            r.done = !1,
                            r
                    }
                    return r.done = !0,
                    r
                }
            }
            ,
            t.values = k,
            x.prototype = {
                constructor: x,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = e,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = e,
                    this.tryEntries.forEach(M),
                    !t)
                        for (var n in this)
                            "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var n = this;
                    function i(r, i) {
                        return a.type = "throw",
                        a.arg = t,
                        n.next = r,
                        i && (n.method = "next",
                        n.arg = e),
                        !!i
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var s = this.tryEntries[o]
                          , a = s.completion;
                        if ("root" === s.tryLoc)
                            return i("end");
                        if (s.tryLoc <= this.prev) {
                            var c = r.call(s, "catchLoc")
                              , u = r.call(s, "finallyLoc");
                            if (c && u) {
                                if (this.prev < s.catchLoc)
                                    return i(s.catchLoc, !0);
                                if (this.prev < s.finallyLoc)
                                    return i(s.finallyLoc)
                            } else if (c) {
                                if (this.prev < s.catchLoc)
                                    return i(s.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < s.finallyLoc)
                                    return i(s.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n];
                        if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var o = i;
                            break
                        }
                    }
                    o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                    var s = o ? o.completion : {};
                    return s.type = t,
                    s.arg = e,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    d) : this.complete(s)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    d
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t)
                            return this.complete(n.completion, n.afterLoc),
                            M(n),
                            d
                    }
                },
                "catch": function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                M(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, n, r) {
                    return this.delegate = {
                        iterator: k(t),
                        resultName: n,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = e),
                    d
                }
            },
            t
        }(t.exports);
        try {
            regeneratorRuntime = r
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(r)
        }
    }
    , function(t, e, n) {
        n(310),
        t.exports = n(128).global
    }
    , function(t, e, n) {
        var r = n(311);
        r(r.G, {
            global: n(92)
        })
    }
    , function(t, e, n) {
        var r = n(92)
          , i = n(128)
          , o = n(312)
          , s = n(314)
          , a = n(321)
          , c = function(t, e, n) {
            var u, l, p, h = t & c.F, f = t & c.G, d = t & c.S, g = t & c.P, m = t & c.B, y = t & c.W, v = f ? i : i[e] || (i[e] = {}), b = v.prototype, _ = f ? r : d ? r[e] : (r[e] || {}).prototype;
            for (u in f && (n = e),
            n)
                (l = !h && _ && void 0 !== _[u]) && a(v, u) || (p = l ? _[u] : n[u],
                v[u] = f && "function" != typeof _[u] ? n[u] : m && l ? o(p, r) : y && _[u] == p ? function(t) {
                    var e = function(e, n, r) {
                        if (this instanceof t) {
                            switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e);
                            case 2:
                                return new t(e,n)
                            }
                            return new t(e,n,r)
                        }
                        return t.apply(this, arguments)
                    };
                    return e.prototype = t.prototype,
                    e
                }(p) : g && "function" == typeof p ? o(Function.call, p) : p,
                g && ((v.virtual || (v.virtual = {}))[u] = p,
                t & c.R && b && !b[u] && s(b, u, p)))
        };
        c.F = 1,
        c.G = 2,
        c.S = 4,
        c.P = 8,
        c.B = 16,
        c.W = 32,
        c.U = 64,
        c.R = 128,
        t.exports = c
    }
    , function(t, e, n) {
        var r = n(313);
        t.exports = function(t, e, n) {
            if (r(t),
            void 0 === e)
                return t;
            switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                }
                ;
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                }
                ;
            case 3:
                return function(n, r, i) {
                    return t.call(e, n, r, i)
                }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t)
                throw TypeError(t + " is not a function!");
            return t
        }
    }
    , function(t, e, n) {
        var r = n(315)
          , i = n(320);
        t.exports = n(94) ? function(t, e, n) {
            return r.f(t, e, i(1, n))
        }
        : function(t, e, n) {
            return t[e] = n,
            t
        }
    }
    , function(t, e, n) {
        var r = n(316)
          , i = n(317)
          , o = n(319)
          , s = Object.defineProperty;
        e.f = n(94) ? Object.defineProperty : function(t, e, n) {
            if (r(t),
            e = o(e, !0),
            r(n),
            i)
                try {
                    return s(t, e, n)
                } catch (t) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported!");
            return "value"in n && (t[e] = n.value),
            t
        }
    }
    , function(t, e, n) {
        var r = n(93);
        t.exports = function(t) {
            if (!r(t))
                throw TypeError(t + " is not an object!");
            return t
        }
    }
    , function(t, e, n) {
        t.exports = !n(94) && !n(129)(function() {
            return 7 != Object.defineProperty(n(318)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }
    , function(t, e, n) {
        var r = n(93)
          , i = n(92).document
          , o = r(i) && r(i.createElement);
        t.exports = function(t) {
            return o ? i.createElement(t) : {}
        }
    }
    , function(t, e, n) {
        var r = n(93);
        t.exports = function(t, e) {
            if (!r(t))
                return t;
            var n, i;
            if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t)))
                return i;
            if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t)))
                return i;
            if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t)))
                return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }
    , function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    }
    , function(t, e) {
        !function(t) {
            "use strict";
            if (!t.fetch) {
                var e = {
                    searchParams: "URLSearchParams"in t,
                    iterable: "Symbol"in t && "iterator"in Symbol,
                    blob: "FileReader"in t && "Blob"in t && function() {
                        try {
                            return new Blob,
                            !0
                        } catch (t) {
                            return !1
                        }
                    }(),
                    formData: "FormData"in t,
                    arrayBuffer: "ArrayBuffer"in t
                };
                if (e.arrayBuffer)
                    var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                      , r = function(t) {
                        return t && DataView.prototype.isPrototypeOf(t)
                    }
                      , i = ArrayBuffer.isView || function(t) {
                        return t && n.indexOf(Object.prototype.toString.call(t)) > -1
                    }
                    ;
                l.prototype.append = function(t, e) {
                    t = a(t),
                    e = c(e);
                    var n = this.map[t];
                    this.map[t] = n ? n + "," + e : e
                }
                ,
                l.prototype["delete"] = function(t) {
                    delete this.map[a(t)]
                }
                ,
                l.prototype.get = function(t) {
                    return t = a(t),
                    this.has(t) ? this.map[t] : null
                }
                ,
                l.prototype.has = function(t) {
                    return this.map.hasOwnProperty(a(t))
                }
                ,
                l.prototype.set = function(t, e) {
                    this.map[a(t)] = c(e)
                }
                ,
                l.prototype.forEach = function(t, e) {
                    for (var n in this.map)
                        this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
                }
                ,
                l.prototype.keys = function() {
                    var t = [];
                    return this.forEach(function(e, n) {
                        t.push(n)
                    }),
                    u(t)
                }
                ,
                l.prototype.values = function() {
                    var t = [];
                    return this.forEach(function(e) {
                        t.push(e)
                    }),
                    u(t)
                }
                ,
                l.prototype.entries = function() {
                    var t = [];
                    return this.forEach(function(e, n) {
                        t.push([n, e])
                    }),
                    u(t)
                }
                ,
                e.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries);
                var o = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                m.prototype.clone = function() {
                    return new m(this,{
                        body: this._bodyInit
                    })
                }
                ,
                g.call(m.prototype),
                g.call(v.prototype),
                v.prototype.clone = function() {
                    return new v(this._bodyInit,{
                        status: this.status,
                        statusText: this.statusText,
                        headers: new l(this.headers),
                        url: this.url
                    })
                }
                ,
                v.error = function() {
                    var t = new v(null,{
                        status: 0,
                        statusText: ""
                    });
                    return t.type = "error",
                    t
                }
                ;
                var s = [301, 302, 303, 307, 308];
                v.redirect = function(t, e) {
                    if (-1 === s.indexOf(e))
                        throw new RangeError("Invalid status code");
                    return new v(null,{
                        status: e,
                        headers: {
                            location: t
                        }
                    })
                }
                ,
                t.Headers = l,
                t.Request = m,
                t.Response = v,
                t.fetch = function(t, n) {
                    return new Promise(function(r, i) {
                        var o = new m(t,n)
                          , s = new XMLHttpRequest;
                        s.onload = function() {
                            var t = {
                                status: s.status,
                                statusText: s.statusText,
                                headers: function(t) {
                                    var e = new l;
                                    return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                                        var n = t.split(":")
                                          , r = n.shift().trim();
                                        if (r) {
                                            var i = n.join(":").trim();
                                            e.append(r, i)
                                        }
                                    }),
                                    e
                                }(s.getAllResponseHeaders() || "")
                            };
                            t.url = "responseURL"in s ? s.responseURL : t.headers.get("X-Request-URL");
                            var e = "response"in s ? s.response : s.responseText;
                            r(new v(e,t))
                        }
                        ,
                        s.onerror = function() {
                            i(new TypeError("Network request failed"))
                        }
                        ,
                        s.ontimeout = function() {
                            i(new TypeError("Network request failed"))
                        }
                        ,
                        s.open(o.method, o.url, !0),
                        "include" === o.credentials ? s.withCredentials = !0 : "omit" === o.credentials && (s.withCredentials = !1),
                        "responseType"in s && e.blob && (s.responseType = "blob"),
                        o.headers.forEach(function(t, e) {
                            s.setRequestHeader(e, t)
                        }),
                        s.send(void 0 === o._bodyInit ? null : o._bodyInit)
                    }
                    )
                }
                ,
                t.fetch.polyfill = !0
            }
            function a(t) {
                if ("string" != typeof t && (t = String(t)),
                /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
                    throw new TypeError("Invalid character in header field name");
                return t.toLowerCase()
            }
            function c(t) {
                return "string" != typeof t && (t = String(t)),
                t
            }
            function u(t) {
                var n = {
                    next: function() {
                        var e = t.shift();
                        return {
                            done: void 0 === e,
                            value: e
                        }
                    }
                };
                return e.iterable && (n[Symbol.iterator] = function() {
                    return n
                }
                ),
                n
            }
            function l(t) {
                this.map = {},
                t instanceof l ? t.forEach(function(t, e) {
                    this.append(e, t)
                }, this) : Array.isArray(t) ? t.forEach(function(t) {
                    this.append(t[0], t[1])
                }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                    this.append(e, t[e])
                }, this)
            }
            function p(t) {
                if (t.bodyUsed)
                    return Promise.reject(new TypeError("Already read"));
                t.bodyUsed = !0
            }
            function h(t) {
                return new Promise(function(e, n) {
                    t.onload = function() {
                        e(t.result)
                    }
                    ,
                    t.onerror = function() {
                        n(t.error)
                    }
                }
                )
            }
            function f(t) {
                var e = new FileReader
                  , n = h(e);
                return e.readAsArrayBuffer(t),
                n
            }
            function d(t) {
                if (t.slice)
                    return t.slice(0);
                var e = new Uint8Array(t.byteLength);
                return e.set(new Uint8Array(t)),
                e.buffer
            }
            function g() {
                return this.bodyUsed = !1,
                this._initBody = function(t) {
                    if (this._bodyInit = t,
                    t)
                        if ("string" == typeof t)
                            this._bodyText = t;
                        else if (e.blob && Blob.prototype.isPrototypeOf(t))
                            this._bodyBlob = t;
                        else if (e.formData && FormData.prototype.isPrototypeOf(t))
                            this._bodyFormData = t;
                        else if (e.searchParams && URLSearchParams.prototype.isPrototypeOf(t))
                            this._bodyText = t.toString();
                        else if (e.arrayBuffer && e.blob && r(t))
                            this._bodyArrayBuffer = d(t.buffer),
                            this._bodyInit = new Blob([this._bodyArrayBuffer]);
                        else {
                            if (!e.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !i(t))
                                throw new Error("unsupported BodyInit type");
                            this._bodyArrayBuffer = d(t)
                        }
                    else
                        this._bodyText = "";
                    this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }
                ,
                e.blob && (this.blob = function() {
                    var t = p(this);
                    if (t)
                        return t;
                    if (this._bodyBlob)
                        return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }
                ,
                this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(f)
                }
                ),
                this.text = function() {
                    var t = p(this);
                    if (t)
                        return t;
                    if (this._bodyBlob)
                        return function(t) {
                            var e = new FileReader
                              , n = h(e);
                            return e.readAsText(t),
                            n
                        }(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(function(t) {
                            for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++)
                                n[r] = String.fromCharCode(e[r]);
                            return n.join("")
                        }(this._bodyArrayBuffer));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }
                ,
                e.formData && (this.formData = function() {
                    return this.text().then(y)
                }
                ),
                this.json = function() {
                    return this.text().then(JSON.parse)
                }
                ,
                this
            }
            function m(t, e) {
                var n = (e = e || {}).body;
                if (t instanceof m) {
                    if (t.bodyUsed)
                        throw new TypeError("Already read");
                    this.url = t.url,
                    this.credentials = t.credentials,
                    e.headers || (this.headers = new l(t.headers)),
                    this.method = t.method,
                    this.mode = t.mode,
                    n || null == t._bodyInit || (n = t._bodyInit,
                    t.bodyUsed = !0)
                } else
                    this.url = String(t);
                if (this.credentials = e.credentials || this.credentials || "omit",
                !e.headers && this.headers || (this.headers = new l(e.headers)),
                this.method = function(t) {
                    var e = t.toUpperCase();
                    return o.indexOf(e) > -1 ? e : t
                }(e.method || this.method || "GET"),
                this.mode = e.mode || this.mode || null,
                this.referrer = null,
                ("GET" === this.method || "HEAD" === this.method) && n)
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(n)
            }
            function y(t) {
                var e = new FormData;
                return t.trim().split("&").forEach(function(t) {
                    if (t) {
                        var n = t.split("=")
                          , r = n.shift().replace(/\+/g, " ")
                          , i = n.join("=").replace(/\+/g, " ");
                        e.append(decodeURIComponent(r), decodeURIComponent(i))
                    }
                }),
                e
            }
            function v(t, e) {
                e || (e = {}),
                this.type = "default",
                this.status = void 0 === e.status ? 200 : e.status,
                this.ok = this.status >= 200 && this.status < 300,
                this.statusText = "statusText"in e ? e.statusText : "OK",
                this.headers = new l(e.headers),
                this.url = e.url || "",
                this._initBody(t)
            }
        }("undefined" != typeof self ? self : this)
    }
    , function(t, e, n) {
        var r;
        !function(i) {
            "use strict";
            function o(t, e) {
                var n = (65535 & t) + (65535 & e);
                return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
            }
            function s(t, e, n, r, i, s) {
                return o(function(t, e) {
                    return t << i | t >>> 32 - i
                }(o(o(e, t), o(r, s))), n)
            }
            function a(t, e, n, r, i, o, a) {
                return s(e & n | ~e & r, t, e, i, o, a)
            }
            function c(t, e, n, r, i, o, a) {
                return s(e & r | n & ~r, t, e, i, o, a)
            }
            function u(t, e, n, r, i, o, a) {
                return s(e ^ n ^ r, t, e, i, o, a)
            }
            function l(t, e, n, r, i, o, a) {
                return s(n ^ (e | ~r), t, e, i, o, a)
            }
            function p(t, e) {
                var n, r, i, s, p;
                t[e >> 5] |= 128 << e % 32,
                t[14 + (e + 64 >>> 9 << 4)] = e;
                var h = 1732584193
                  , f = -271733879
                  , d = -1732584194
                  , g = 271733878;
                for (n = 0; n < t.length; n += 16)
                    r = h,
                    i = f,
                    s = d,
                    p = g,
                    f = l(f = l(f = l(f = l(f = u(f = u(f = u(f = u(f = c(f = c(f = c(f = c(f = a(f = a(f = a(f = a(f, d = a(d, g = a(g, h = a(h, f, d, g, t[n], 7, -680876936), f, d, t[n + 1], 12, -389564586), h, f, t[n + 2], 17, 606105819), g, h, t[n + 3], 22, -1044525330), d = a(d, g = a(g, h = a(h, f, d, g, t[n + 4], 7, -176418897), f, d, t[n + 5], 12, 1200080426), h, f, t[n + 6], 17, -1473231341), g, h, t[n + 7], 22, -45705983), d = a(d, g = a(g, h = a(h, f, d, g, t[n + 8], 7, 1770035416), f, d, t[n + 9], 12, -1958414417), h, f, t[n + 10], 17, -42063), g, h, t[n + 11], 22, -1990404162), d = a(d, g = a(g, h = a(h, f, d, g, t[n + 12], 7, 1804603682), f, d, t[n + 13], 12, -40341101), h, f, t[n + 14], 17, -1502002290), g, h, t[n + 15], 22, 1236535329), d = c(d, g = c(g, h = c(h, f, d, g, t[n + 1], 5, -165796510), f, d, t[n + 6], 9, -1069501632), h, f, t[n + 11], 14, 643717713), g, h, t[n], 20, -373897302), d = c(d, g = c(g, h = c(h, f, d, g, t[n + 5], 5, -701558691), f, d, t[n + 10], 9, 38016083), h, f, t[n + 15], 14, -660478335), g, h, t[n + 4], 20, -405537848), d = c(d, g = c(g, h = c(h, f, d, g, t[n + 9], 5, 568446438), f, d, t[n + 14], 9, -1019803690), h, f, t[n + 3], 14, -187363961), g, h, t[n + 8], 20, 1163531501), d = c(d, g = c(g, h = c(h, f, d, g, t[n + 13], 5, -1444681467), f, d, t[n + 2], 9, -51403784), h, f, t[n + 7], 14, 1735328473), g, h, t[n + 12], 20, -1926607734), d = u(d, g = u(g, h = u(h, f, d, g, t[n + 5], 4, -378558), f, d, t[n + 8], 11, -2022574463), h, f, t[n + 11], 16, 1839030562), g, h, t[n + 14], 23, -35309556), d = u(d, g = u(g, h = u(h, f, d, g, t[n + 1], 4, -1530992060), f, d, t[n + 4], 11, 1272893353), h, f, t[n + 7], 16, -155497632), g, h, t[n + 10], 23, -1094730640), d = u(d, g = u(g, h = u(h, f, d, g, t[n + 13], 4, 681279174), f, d, t[n], 11, -358537222), h, f, t[n + 3], 16, -722521979), g, h, t[n + 6], 23, 76029189), d = u(d, g = u(g, h = u(h, f, d, g, t[n + 9], 4, -640364487), f, d, t[n + 12], 11, -421815835), h, f, t[n + 15], 16, 530742520), g, h, t[n + 2], 23, -995338651), d = l(d, g = l(g, h = l(h, f, d, g, t[n], 6, -198630844), f, d, t[n + 7], 10, 1126891415), h, f, t[n + 14], 15, -1416354905), g, h, t[n + 5], 21, -57434055), d = l(d, g = l(g, h = l(h, f, d, g, t[n + 12], 6, 1700485571), f, d, t[n + 3], 10, -1894986606), h, f, t[n + 10], 15, -1051523), g, h, t[n + 1], 21, -2054922799), d = l(d, g = l(g, h = l(h, f, d, g, t[n + 8], 6, 1873313359), f, d, t[n + 15], 10, -30611744), h, f, t[n + 6], 15, -1560198380), g, h, t[n + 13], 21, 1309151649), d = l(d, g = l(g, h = l(h, f, d, g, t[n + 4], 6, -145523070), f, d, t[n + 11], 10, -1120210379), h, f, t[n + 2], 15, 718787259), g, h, t[n + 9], 21, -343485551),
                    h = o(h, r),
                    f = o(f, i),
                    d = o(d, s),
                    g = o(g, p);
                return [h, f, d, g]
            }
            function h(t) {
                var e, n = "", r = 32 * t.length;
                for (e = 0; e < r; e += 8)
                    n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
                return n
            }
            function f(t) {
                var e, n = [];
                for (n[(t.length >> 2) - 1] = void 0,
                e = 0; e < n.length; e += 1)
                    n[e] = 0;
                var r = 8 * t.length;
                for (e = 0; e < r; e += 8)
                    n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
                return n
            }
            function d(t) {
                var e, n, r = "";
                for (n = 0; n < t.length; n += 1)
                    e = t.charCodeAt(n),
                    r += "0123456789abcdef".charAt(e >>> 4 & 15) + "0123456789abcdef".charAt(15 & e);
                return r
            }
            function g(t) {
                return unescape(encodeURIComponent(t))
            }
            function m(t) {
                return function(t) {
                    return h(p(f(t), 8 * t.length))
                }(g(t))
            }
            function y(t, e) {
                return function(t, e) {
                    var n, r, i = f(t), o = [], s = [];
                    for (o[15] = s[15] = void 0,
                    i.length > 16 && (i = p(i, 8 * t.length)),
                    n = 0; n < 16; n += 1)
                        o[n] = 909522486 ^ i[n],
                        s[n] = 1549556828 ^ i[n];
                    return r = p(o.concat(f(e)), 512 + 8 * e.length),
                    h(p(s.concat(r), 640))
                }(g(t), g(e))
            }
            function v(t, e, n) {
                return e ? n ? y(e, t) : function(t, e) {
                    return d(y(t, e))
                }(e, t) : n ? m(t) : function(t) {
                    return d(m(t))
                }(t)
            }
            void 0 === (r = function() {
                return v
            }
            .call(e, n, e, t)) || (t.exports = r)
        }()
    }
    , function(t, e, n) {
        "use strict";
        var r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }
          , i = n(325)
          , o = n(341)
          , s = n(342)
          , a = n(343)
          , c = n(344)
          , u = n(345)
          , l = n(346)
          , p = n(347)
          , h = n(348)
          , f = r({
            _client: n(26).getInstance()._client
        }, p, l, c, a, s, o, u, i, h);
        t.exports = f
    }
    , function(t, e, n) {
        "use strict";
        var r = n(26).getInstance()
          , i = {
            startCounsel: function(t, e, n) {
                r && r._client && r._client.startCounsel(t, e, n)
            },
            sendAIChatMessage: function(t, e, n) {
                r && r._client && r._client.sendAIChatMessage(t, e, n)
            },
            startAIChat: function(t, e, n) {
                r && r._client && r._client.startAIChat(t, e, n)
            },
            closeWorkSheetByCustomer: function(t, e, n) {
                r && r._client && r._client.closeWorkSheetByCustomer(t, e, n)
            },
            addScore: function(t, e, n) {
                r && r._client && r._client.addScore(t, e, n)
            },
            ifExistBotOrAngent: function(t) {
                return r && r._client && r._client.ifExistBotOrAngent(t)
            },
            startChat: function(t, e, n) {
                r && r._client && r._client.startChat(t, e, n)
            },
            getCandidateAgents: function(t, e, n) {
                r && r._client && r._client.getCandidateAgents(t, e, n)
            },
            getRelativeQuestions: function(t, e, n) {
                r && r._client && r._client.getRelativeQuestions(t, e, n)
            },
            finishChat: function(t, e, n) {
                r && r._client && r._client.finishChat(t, e, n)
            },
            postScore: function(t, e, n) {
                r && r._client && r._client.postScore(t, e, n)
            },
            checkMemberStatus: function(t, e, n) {
                r && r._client && r._client.checkMemberStatus(t, e, n)
            },
            checkChatStatus: function(t, e, n) {
                r && r._client && r._client.checkChatStatus(t, e, n)
            },
            checkScoreStatus: function(t, e, n) {
                r && r._client && r._client.checkScoreStatus(t, e, n)
            },
            rebindSession: function(t, e, n) {
                r && r._client && r._client.rebindSession(t, e, n)
            },
            getCommonProblems: function(t, e, n) {
                r && r._client && r._client.getCommonProblems(t, e, n)
            }
        };
        t.exports = i
    }
    , function(t, e, n) {
        "use strict";
        var r = n(327)
          , i = n(96)
          , o = n(132)
          , s = n(13)
          , a = n(66)
          , c = n(133)
          , u = n(338)
          , l = n(339)
          , p = n(7)
          , h = n(340)
          , f = n(11)
          , d = n(131)
          , g = a.getUserCommunityInfo.getInstance()
          , m = a.getConversationSummaries.getInstance()
          , y = a.getConversations.getInstance()
          , v = a.getChatConversationMessages.getInstance()
          , b = a.sendMessage.getInstance()
          , _ = a.getGroupConversationMessages.getInstance()
          , T = (y = a.getConversations.getInstance(),
        a.getConversationByJid.getInstance())
          , S = a.removeConversation.getInstance()
          , C = a.getPartnerInfo.getInstance()
          , w = a.putAdviceOfRead.getInstance()
          , I = a.putAdviceOfReadByMsgId.getInstance()
          , M = a.getTotalUnreadcount.getInstance()
          , x = a.getConversationUnreadInfo.getInstance()
          , k = a.getConversationAtMessages.getInstance()
          , P = a.removeMessage.getInstance()
          , A = a.getGroupMembers.getInstance()
          , O = a.getGroupMembersEn.getInstance()
          , E = a.getGroupInfo.getInstance()
          , N = a.getGroupMemberInfo.getInstance()
          , L = a.getGroupAdmins.getInstance()
          , j = a.getContacts.getInstance()
          , B = a.updateContact.getInstance()
          , R = a.updateContacts.getInstance()
          , F = a.viewContacts.getInstance()
          , G = a.removeContact.getInstance()
          , J = a.createThread.getInstance()
          , U = a.getThread.getInstance()
          , D = a.createGroup.getInstance()
          , H = a.inviteMembers.getInstance()
          , z = a.quitGroup.getInstance()
          , W = a.removeMember.getInstance()
          , q = a.dismissGroup.getInstance()
          , V = a.updateGroup.getInstance()
          , X = a.changeGroupRole.getInstance()
          , Q = a.uploadImage.getInstance()
          , K = p.map(s.ConversationType, function(t) {
            return t
        })
          , $ = a.getLatestConversation.getInstance()
          , Y = a.getLatestMessageInBulk.getInstance()
          , Z = a.recallMessage.getInstance()
          , tt = a.updateGroupConfig.getInstance()
          , et = a.updateMsgBlockConfig.getInstance()
          , nt = a.getMsgBlockConfig.getInstance()
          , rt = a.getRecommendNickName.getInstance()
          , it = a.submitNickName.getInstance()
          , ot = a.isInWhiteList.getInstance()
          , st = a.startCounsel.getInstance()
          , at = a.startAIChat.getInstance()
          , ct = a.sendAIChatMessage.getInstance()
          , ut = a.startAIChatForOpenIM.getInstance()
          , lt = a.sendAIChatMessageForOpenIM.getInstance()
          , pt = a.addScore.getInstance()
          , ht = a.closeWorkSheetByCustomer.getInstance()
          , ft = a.startChat.getInstance()
          , dt = a.getCandidateAgents.getInstance()
          , gt = a.getRelativeQuestions.getInstance()
          , mt = a.finishChat.getInstance()
          , yt = a.postScore.getInstance()
          , vt = a.checkMemberStatus.getInstance()
          , bt = a.checkChatStatus.getInstance()
          , _t = a.checkScoreStatus.getInstance()
          , Tt = a.getPartnerDetail.getInstance()
          , St = a.getMyInfo.getInstance()
          , Ct = a.getHistoricalRangeMessage.getInstance()
          , wt = a.getRangeMessageOnline.getInstance()
          , It = a.rebindSession.getInstance()
          , Mt = a.getCommonProblems.getInstance()
          , xt = new Array
          , kt = 0
          , Pt = []
          , At = -1
          , Ot = function(t) {
            function e(n) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var r = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, t.call(this, n));
                return r.initialize(n),
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf,
                function(t, e) {
                    for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                        var i = n[r]
                          , o = Object.getOwnPropertyDescriptor(e, i);
                        o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                    }
                }(t, e))
            }(e, t),
            e.prototype.initialize = function() {
                this._messageHandler = new i(this),
                this._conversationHandler = new o(this),
                this._channel = null,
                this._firstTimestamp = 0,
                this._lastTimestamp = 0,
                this._lastMessageId = 0,
                this._conversationType = null,
                this._subConversationType = null,
                this._partnerJid = null,
                this._conversationUnreadCount = 0,
                this._conversationUnreadTimeline = 0,
                this._queue = [],
                this._startMsgId = "0",
                this._endMsgId = "0"
            }
            ,
            e.prototype.getHistoricalRangeMessage = function(t, e, n) {
                Ct.param = {
                    groupId: t.groupId,
                    beginMsgId: t.beginMsgId,
                    endMsgId: t.endMsgId,
                    direction: t.direction,
                    pageSize: t.pageSize
                },
                Ct.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, n, !0, this)
            }
            ,
            e.prototype.createGroup = function(t, e, n) {
                D.param = {
                    group: {
                        creator: p._myuid,
                        gtype: t.gtype || s.BusinessType.CTIMBusinessTypeGroup,
                        groupName: t.groupName || null,
                        groupDesc: t.groupDesc || null,
                        groupTitle: t.title,
                        groupIcon: t.groupIcon || null,
                        bulletin: t.bulletin,
                        extPropertys: t.extPropertys || null
                    }
                },
                D.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, n, !0, this)
            }
            ,
            e.prototype.inviteMembers = function(t, e, n) {
                H.param = {
                    gtype: t.gtype || s.BusinessType.CTIMBusinessTypeGroup,
                    groupId: t.groupId || null,
                    inviteUids: t.inviteUids || [],
                    role: t.role || "0"
                },
                H.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, n, !0, this)
            }
            ,
            e.prototype.quitGroup = function(t, e, n) {
                z.param = {
                    groupId: t.groupId
                },
                z.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, n, !0, this)
            }
            ,
            e.prototype.removeMember = function(t, e, n) {
                W.param = {
                    groupId: t.groupId,
                    memberUids: t.memberUids
                },
                W.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, n, !0, this)
            }
            ,
            e.prototype.dismissGroup = function(t, e, n) {
                q.param = {
                    groupId: t.groupId
                },
                q.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, n, !0, this)
            }
            ,
            e.prototype.updateGroup = function(t, e, n) {
                V.param = {
                    groupId: t.groupId,
                    group: {
                        creator: t.groupName || null,
                        gtype: t.gtype || s.BusinessType.CTIMBusinessTypeGroup,
                        groupName: t.groupName || null,
                        groupDesc: t.groupDesc || null,
                        groupTitle: t.title,
                        groupIcon: t.groupIcon || null,
                        bulletin: t.bulletin,
                        extPropertys: t.extPropertys || null
                    }
                },
                V.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, n, !0, this)
            }
            ,
            e.prototype.changeGroupRole = function(t, e, n) {
                X.param = {
                    groupId: t.groupId,
                    memberUids: t.memberUids,
                    role: t.role
                },
                X.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, n, !0, this)
            }
            ,
            e.prototype.uploadImage = function(t, e, n) {
                Q.param = {
                    ticket: this._ticket,
                    FileBytes: t.FileBytes,
                    ThumbHeight: t.ThumbHeight,
                    ThumbWidth: t.ThumbWidth
                },
                Q.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, n, !0, this)
            }
            ,
            e.prototype.connect = function(t, e, n) {
                var o = this;
                o._messageHandler || (o._messageHandler = i.getInstance(o)),
                o._channel || (o._channel = new r(o)),
                o._channel._socket._partnerJid = o._partnerJid,
                o._channel._socket._conversationType = o._conversationType,
                o._channel._socket._lastTimestamp = o._lastTimestamp,
                o._channel._socket._pollInterval = t.pollInterval,
                o._channel._socket._currentUid = t.currentUid,
                o._channel.connect(e, n)
            }
            ,
            e.prototype.isLogin = function(t) {
                return UserStore.isLogin(t)
            }
            ,
            e.prototype.getMyInfo = function(t, e) {
                var n = this;
                St.excute(function(e) {
                    if (e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase()) {
                        var r = {};
                        r.ResponseStatus = e.ResponseStatus,
                        r.userinfo = {
                            name: e.name,
                            avatar: e.avatar,
                            uid: e.jid,
                            jid: e.jid,
                            extPropertys: e.extPropertys
                        },
                        n._myuid = e.jid,
                        p._myuid = e.jid,
                        t && p.isFunction(t) && t(r)
                    } else
                        t && p.isFunction(t) && t(e)
                }, function(t) {
                    e && p.isFunction(e) && e(t)
                }, !0, this)
            }
            ,
            e.prototype.getCurrentUser = function(t, e) {
                var n = this;
                g.excute(function(e) {
                    if (e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase()) {
                        var r = {};
                        if (r.ResponseStatus = e.ResponseStatus,
                        r.userinfo = n.convertUserinfoByCommunity(e),
                        r.userinfo && r.userinfo.length > 0 && (r.userinfo = r.userinfo[0]),
                        t && p.isFunction(t)) {
                            try {
                                p.ubtTrace({
                                    Action: "getCurrentUser",
                                    Result: JSON.stringify(r)
                                })
                            } catch (t) {
                                console.log(t)
                            }
                            t(r)
                        }
                    } else if (t && p.isFunction(t)) {
                        try {
                            p.ubtTrace({
                                Action: "getCurrentUser",
                                Result: JSON.stringify(e)
                            })
                        } catch (t) {
                            console.log(t)
                        }
                        t(e)
                    }
                }, function(t) {
                    if (e && p.isFunction(e)) {
                        try {
                            p.ubtTrace({
                                Action: "getCurrentUser",
                                Result: JSON.stringify(t)
                            })
                        } catch (t) {
                            console.log(t)
                        }
                        e(t)
                    }
                }, !0, this)
            }
            ,
            e.prototype.getUserByUid = function(t, e, n) {
                p.checkParam(["string", "function", "function"], "getUserByUid");
                var r = this;
                g.param = {
                    uids: [t]
                },
                g.excute(function(t) {
                    if (t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase()) {
                        var n = {};
                        n.ResponseStatus = t.ResponseStatus,
                        n.userinfo = r.convertUserinfoByCommunity(t),
                        n.userinfo && n.userinfo.length > 0 && (n.userinfo = n.userinfo[0]),
                        e && p.isFunction(e) && e(n)
                    } else
                        e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.getGroupsByUser = function(t, e, n) {}
            ,
            e.prototype.getHistoryMessagesPaging = function(t, e, n) {
                var r = this;
                t.conversationType = r._conversationType === s.ConversationType.ConversationList ? r._subConversationType : r._conversationType,
                t.partnerJid = r._partnerJid,
                t.isAll ? (t.paging.beginTimestamp = 0,
                t.paging.endTimestamp = r._firstTimestamp) : t.paging.beginTimestamp = r._firstTimestamp,
                t.paging.direction = "prev",
                r.getConversationMessagesByJidPaging(t, function(t) {
                    t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase() && (t.hasUnread = !1,
                    t.messages && t.messages.length > 0 && (r._conversationUnreadTimeline && t.messages[0].createTime > r._conversationUnreadTimeline && (t.hasUnread = !0),
                    r._firstTimestamp = t.messages[0].createTime)),
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                })
            }
            ,
            e.prototype.getNewConversationMessagesByJid = function(t, e, n) {
                var r = this;
                r._partnerJid = t.partnerJid,
                r._subConversationType = t.conversationType,
                r._firstTimestamp = 0,
                r.getHistoryMessagesPaging(t, function(t) {
                    if (t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase() && t.messages && t.messages.length > 0) {
                        if (r._lastTimestamp = t.lastMessageTimestamp ? t.lastMessageTimestamp : r._lastTimestamp,
                        r._lastTimestamp > 0) {
                            var n = function() {
                                r._conversationType != s.ConversationType.ConversationList && r._channel && r._channel._socket && r._channel._socket.setCurrentTimestamp(r._lastTimestamp),
                                e && p.isFunction(e) && e(t)
                            };
                            r._conversationType === s.ConversationType.ConversationList ? r._subConversationType : r._conversationType,
                            r.getConversationUnreadInfo({
                                partnerJid: r._partnerJid,
                                messageBaseLine: r._lastTimestamp,
                                conversationType: r._conversationType === s.ConversationType.ConversationList ? r._subConversationType : r._conversationType
                            }, n, n)
                        }
                        r._conversationType != s.ConversationType.ConversationList && r._channel && r._channel._socket && r._channel._socket.setCurrentTimestamp(r._lastTimestamp)
                    } else
                        e && p.isFunction(e) && e(t)
                }, n)
            }
            ,
            e.prototype.getConversationMessagesByJidPaging = function(t, e, n) {
                var r = this;
                p.checkObjectParam(t, ["conversationType", "partnerJid", "paging"], [{
                    type: "string",
                    range: K
                }, {
                    type: "string"
                }, {
                    type: "object"
                }], "getConversationMessagesByJidPaging"),
                p.checkObjectParam(t.paging, ["beginTimestamp", "direction", "pageSize"], [{
                    type: "number",
                    min: 0,
                    default1: 0
                }, {
                    type: "string",
                    range: ["prev", "next"]
                }, {
                    type: "number",
                    min: 1,
                    max: 100,
                    default1: 20
                }], "getConversationMessagesByJidPaging");
                var i = function(t) {
                    t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase() && t.messages && t.messages.length > 0 && (t.messages = r._messageHandler.jsonSerialize(t.messages, t.senderSummaries || [])),
                    e && p.isFunction(e) && e(t)
                }
                  , o = function(t) {
                    n && p.isFunction(n) && n(t)
                }
                  , a = {
                    partnerJid: t.partnerJid,
                    groupId: t.partnerJid,
                    direction: t.paging.direction,
                    beginMsgTime: t.paging.beginTimestamp,
                    endMsgTime: t.paging.endTimestamp,
                    pageSize: t.paging.pageSize
                };
                t.conversationType === s.ConversationType.GroupChat ? t.isAll ? (wt.param = a,
                wt.excute(i, o, !0, this)) : (a.attachSenderSummary = !0,
                _.param = a,
                _.excute(i, o, !0, this)) : t.conversationType === s.ConversationType.SingleChat && (v.param = a,
                v.excute(i, o, !0, this))
            }
            ,
            e.prototype.getRangeMessageOnline = function(t, e, n) {
                var r = this
                  , i = {
                    groupId: t.groupId,
                    direction: t.direction,
                    beginMsgTime: t.beginTimestamp,
                    endMsgTime: t.endTimestamp,
                    pageSize: t.pageSize
                };
                wt.param = i,
                wt.excute(function(t) {
                    t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase() && t.messages && t.messages.length > 0 && (t.messages = r._messageHandler.jsonSerialize(t.messages, t.senderSummaries || [])),
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.sendMessage = function(t, e, n) {
                if (t) {
                    var r = this._messageHandler.deserialize(t);
                    if (r && r.length > 0) {
                        var i = r[0];
                        if (i.bizType = t.bizType || (t.conversationType === s.ConversationType.GroupChat ? s.BusinessType.CTIMBusinessTypeGroup : s.BusinessType.CTIMBusinessTypeNormal),
                        t.conversationType ? i.conversationType = t.conversationType : i.conversationType = this._conversationType === s.ConversationType.ConversationList ? this._subConversationType : this._conversationType,
                        i.toJid = t.toJid || this._partnerJid,
                        this._conversationType == s.ConversationType.ConversationList && r.toJid)
                            throw new Error("toJid can't be empty,postion -> sendMessage");
                        b.param = {
                            localId: i.localId || p.createGuid(),
                            bizType: i.bizType,
                            localTimeStamp: (new Date).getTime(),
                            partnerJid: i.toJid,
                            msgType: i.messageType,
                            messageBody: i.messageBody,
                            type: i.conversationType,
                            subject: i.subject,
                            threadId: i.threadId,
                            newthread: i.createThread,
                            resource: p.resource()
                        };
                        var o = function(t) {
                            t.status && "repeat_msg" != t.status.msg && (t.ResponseStatus.Ack = "Failure",
                            t.ResponseStatus.Errors = t.ResponseStatus.Errors || [],
                            t.ResponseStatus.Errors.push(t.status)),
                            e.call(this, t)
                        };
                        try {
                            p.ubtTrace({
                                key: "o_im_online_sdk_sendmessage",
                                Action: "sendMessage",
                                Params: JSON.stringify(b.param)
                            }),
                            p.ubtMetric({
                                value: 1,
                                action: "sendmessagebegin",
                                result: "ok"
                            })
                        } catch (t) {}
                        var a = !0;
                        b.excute(o, function(t) {
                            a && (b.param.retry = !0,
                            b.excute(o, n, !0, this),
                            a = !1)
                        }, !0, this),
                        this._channel && this._channel.reconnect()
                    }
                }
            }
            ,
            e.prototype.sendMessageInSocket = function(t, e, n) {
                var r = this
                  , i = r._messageHandler.deserialize(t);
                if (i && i.length > 0) {
                    var o = i[0]
                      , a = {};
                    o.bizType = t.bizType || (t.conversationType === s.ConversationType.GroupChat ? s.BusinessType.CTIMBusinessTypeGroup : s.BusinessType.CTIMBusinessTypeNormal),
                    t.conversationType ? o.conversationType = t.conversationType : o.conversationType = r._conversationType === s.ConversationType.ConversationList ? r._subConversationType : r._conversationType,
                    a.toJid = (o.toJid || r._partnerJid) + "@" + p.getWebSocketServiceName(),
                    a.fromJid = p.uidToJid(p._myuid),
                    o.conversationType == s.ConversationType.GroupChat && (a.toJid = (o.toJid || r._partnerJid) + "@muc." + p.getWebSocketServiceName() + "/" + p._myuid,
                    o.isGroup = 1),
                    a.messageBody = {
                        localId: o.localId || p.createGuid(),
                        bizType: o.bizType,
                        localTimeStamp: (new Date).getTime(),
                        partnerJid: o.toJid,
                        msgType: o.messageType,
                        messageBody: o.messageBody,
                        type: o.conversationType,
                        subject: o.subject,
                        threadId: o.threadId,
                        newthread: o.createThread,
                        resource: p.resource()
                    },
                    r._channel.sendMessageInSocket(a, e, function(i) {
                        i && -1 == i.error ? r.sendMessage(t, e, n) : n && n(i)
                    })
                }
            }
            ,
            e.prototype.sendInputState = function(t, e, n) {
                this._channel.sendInputState(t, e, n)
            }
            ,
            e.prototype.getInitConversationSummaries = function(t, e, n) {
                var r = this;
                r.getConversationSummaries(t, function(t) {
                    t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase() && (r._lastTimestamp = t.messageDeadline,
                    r._channel && r._channel.socket && t.messageDeadline > 0 && r._channel._socket.setCurrentTimestamp(t.messageDeadline)),
                    p.isFunction(e) && e(t)
                }, n)
            }
            ,
            e.prototype.getConversationSummaries = function(t, e, n) {
                p.checkParam(["object", "function", "function"], "getConversationSummaries"),
                p.checkObjectParam(t, ["messageCount"], [{
                    type: "number",
                    min: 0,
                    max: 10,
                    default1: 0
                }], "getConversationSummaries");
                var r = this;
                m.param = {
                    messagePageSize: t.messageCount
                },
                m.excute(function(t) {
                    t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase() && t.conversationSummaries && (t.conversationSummaries = r._conversationHandler.serialize(t.conversationSummaries)),
                    e(t)
                }, function(t) {
                    n(t)
                }, !0, this)
            }
            ,
            e.prototype.getLatestConversation = function(t, e, n) {
                var r = this;
                $.param = {
                    lastMessageTime: t.lastMessageTime ? t.lastMessageTime : kt
                },
                $.excute(function(t) {
                    if (t.conversations) {
                        if (xt = xt.concat(t.conversations),
                        kt = t.lastMessageTime ? t.lastMessageTime : kt,
                        !t.haveRest)
                            return r._lastTimestamp = kt,
                            r._channel && r._channel.socket && kt > 0 && r._channel._socket.setCurrentTimestamp(kt),
                            xt = p.map(xt, function(t, e) {
                                return t.messageSummaries = [{
                                    msgId: t.lastMsgId,
                                    msgtype: t.msgType,
                                    messageBody: t.lastMessage,
                                    createTime: t.lastTimestamp
                                }],
                                t
                            }),
                            t.conversations = xt.sort(function(t, e) {
                                return e.lastTimestamp - t.lastTimestamp
                            }),
                            t.conversationSummaries = r._conversationHandler.serialize(t.conversations),
                            void e(t);
                        r.getLatestConversation({
                            lastMessageTime: kt
                        }, e, n)
                    }
                }, function(t) {
                    n(t)
                }, !0, this)
            }
            ,
            e.prototype.getLatestConversationMock = function(t) {
                var e = this;
                return new Promise(function(t, n) {
                    xt = [{
                        partnerJid: "186423144754446344",
                        type: "groupchat",
                        avatar: "http://i1.hdslb.com/headers/bdddec22494b50d792487028c17ece76.png",
                        name: "解散掉这个群003",
                        isBlock: !1,
                        createAt: 1509355839838,
                        bizType: 1003,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514268732257,
                        lastMsgId: 0xb872b787f800000,
                        lastMsgSender: "m00027533",
                        lastMessage: "测试数据",
                        msgType: 0
                    }, {
                        partnerJid: "m00959298",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/30010j00000002p2uEEAF_C_180_180.jpg",
                        name: "***微领队999",
                        isBlock: !1,
                        createAt: 1513251041844,
                        bizType: 4,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514279430269,
                        lastMsgId: 0xb877f0c85000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: '{"ext":{"dataInfoList":[{"id":"scenicSpotId","text":"65628","title":"景点ID"}{"id":"scenicSpotName","text":"三鹰之森吉卜力美术馆","title":"景点名称"}{"id":"price","text":"1.00","title":"景点起价"}{"id":"platform","text":"APP","title":"咨询渠道"}],"nickName":"","isPlay":"","avatar":"","templateId":"ddwl066","type":"","title":"景点咨询通知","extendInfo":{"toJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","advisorId":"m00959298","productId":65628,"jid":"m00959298","Platform":"APP","orderId":0,"spotId":65628,"fromJumpUrlHybrid":"ctrip://wireless/h5?path=ticket&page=index.html#/dest/t65628.html","imcode":"98969300","toJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","DestinationIdList":[56806],"departureCityId":0,"fromJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","toJumpUrlHybrid":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","saleCityId":0,"fromJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","shopping":""}"desc":"我来自景点门票截屏反馈页"}"action":"CTL01","title":"[通知消息]"}',
                        msgType: 7
                    }, {
                        partnerJid: "imuat1002",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/t1/headphoto/998/928/742/64f495cbcf79455d96c310a3ca94c268_C_180_180.jpg",
                        name: "imu****02",
                        isBlock: !1,
                        createAt: 1513058683745,
                        bizType: 1e3,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514874677101,
                        lastMsgId: 0xb99a96a33000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: "发了第55条消息",
                        msgType: 0
                    }, {
                        partnerJid: "186423144754446344",
                        type: "groupchat",
                        avatar: "http://i1.hdslb.com/headers/bdddec22494b50d792487028c17ece76.png",
                        name: "解散掉这个群003",
                        isBlock: !1,
                        createAt: 1509355839838,
                        bizType: 1003,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514268732257,
                        lastMsgId: 0xb872b787f800000,
                        lastMsgSender: "m00027533",
                        lastMessage: "测试数据",
                        msgType: 0
                    }, {
                        partnerJid: "m00959298",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/30010j00000002p2uEEAF_C_180_180.jpg",
                        name: "***微领队999",
                        isBlock: !1,
                        createAt: 1513251041844,
                        bizType: 4,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514279430269,
                        lastMsgId: 0xb877f0c85000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: '{"ext":{"dataInfoList":[{"id":"scenicSpotId","text":"65628","title":"景点ID"}{"id":"scenicSpotName","text":"三鹰之森吉卜力美术馆","title":"景点名称"}{"id":"price","text":"1.00","title":"景点起价"}{"id":"platform","text":"APP","title":"咨询渠道"}],"nickName":"","isPlay":"","avatar":"","templateId":"ddwl066","type":"","title":"景点咨询通知","extendInfo":{"toJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","advisorId":"m00959298","productId":65628,"jid":"m00959298","Platform":"APP","orderId":0,"spotId":65628,"fromJumpUrlHybrid":"ctrip://wireless/h5?path=ticket&page=index.html#/dest/t65628.html","imcode":"98969300","toJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","DestinationIdList":[56806],"departureCityId":0,"fromJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","toJumpUrlHybrid":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","saleCityId":0,"fromJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","shopping":""}"desc":"我来自景点门票截屏反馈页"}"action":"CTL01","title":"[通知消息]"}',
                        msgType: 7
                    }, {
                        partnerJid: "imuat1002",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/t1/headphoto/998/928/742/64f495cbcf79455d96c310a3ca94c268_C_180_180.jpg",
                        name: "imu****02",
                        isBlock: !1,
                        createAt: 1513058683745,
                        bizType: 1e3,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514874677101,
                        lastMsgId: 0xb99a96a33000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: "发了第55条消息",
                        msgType: 0
                    }, {
                        partnerJid: "182718139090337800",
                        type: "groupchat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/Z00d07000000004ie88D2.jpg",
                        name: "uatround1新建群聊13",
                        isBlock: !1,
                        createAt: 1497349810427,
                        bizType: 1001,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514886591747,
                        lastMsgId: 0xb9a067f77000000,
                        lastMsgSender: "m00270644",
                        lastMessage: "【费用包含】1️⃣一部车，燃油费，过路费，停车费。2️⃣司机兼职向导服务费，沿途介绍当地文化历史景区攻略（师傅不进景区内），3️⃣免费矿泉水。线路之内的景区游玩全天不限时间。 ➡️备注：由于景区讲解员有些客人需要有些不需要，我们采取自由选择，您要需要就帮你联系景区内部讲解员，客人自费。。。。。",
                        msgType: 0
                    }, {
                        partnerJid: "186423144754446344",
                        type: "groupchat",
                        avatar: "http://i1.hdslb.com/headers/bdddec22494b50d792487028c17ece76.png",
                        name: "解散掉这个群003",
                        isBlock: !1,
                        createAt: 1509355839838,
                        bizType: 1003,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514268732257,
                        lastMsgId: 0xb872b787f800000,
                        lastMsgSender: "m00027533",
                        lastMessage: "测试数据",
                        msgType: 0
                    }, {
                        partnerJid: "m00959298",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/30010j00000002p2uEEAF_C_180_180.jpg",
                        name: "***微领队999",
                        isBlock: !1,
                        createAt: 1513251041844,
                        bizType: 4,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514279430269,
                        lastMsgId: 0xb877f0c85000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: '{"ext":{"dataInfoList":[{"id":"scenicSpotId","text":"65628","title":"景点ID"}{"id":"scenicSpotName","text":"三鹰之森吉卜力美术馆","title":"景点名称"}{"id":"price","text":"1.00","title":"景点起价"}{"id":"platform","text":"APP","title":"咨询渠道"}],"nickName":"","isPlay":"","avatar":"","templateId":"ddwl066","type":"","title":"景点咨询通知","extendInfo":{"toJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","advisorId":"m00959298","productId":65628,"jid":"m00959298","Platform":"APP","orderId":0,"spotId":65628,"fromJumpUrlHybrid":"ctrip://wireless/h5?path=ticket&page=index.html#/dest/t65628.html","imcode":"98969300","toJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","DestinationIdList":[56806],"departureCityId":0,"fromJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","toJumpUrlHybrid":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","saleCityId":0,"fromJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","shopping":""}"desc":"我来自景点门票截屏反馈页"}"action":"CTL01","title":"[通知消息]"}',
                        msgType: 7
                    }, {
                        partnerJid: "imuat1002",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/t1/headphoto/998/928/742/64f495cbcf79455d96c310a3ca94c268_C_180_180.jpg",
                        name: "imu****02",
                        isBlock: !1,
                        createAt: 1513058683745,
                        bizType: 1e3,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514874677101,
                        lastMsgId: 0xb99a96a33000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: "发了第55条消息",
                        msgType: 0
                    }, {
                        partnerJid: "182718139090337800",
                        type: "groupchat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/Z00d07000000004ie88D2.jpg",
                        name: "uatround1新建群聊13",
                        isBlock: !1,
                        createAt: 1497349810427,
                        bizType: 1001,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514886591747,
                        lastMsgId: 0xb9a067f77000000,
                        lastMsgSender: "m00270644",
                        lastMessage: "【费用包含】1️⃣一部车，燃油费，过路费，停车费。2️⃣司机兼职向导服务费，沿途介绍当地文化历史景区攻略（师傅不进景区内），3️⃣免费矿泉水。线路之内的景区游玩全天不限时间。 ➡️备注：由于景区讲解员有些客人需要有些不需要，我们采取自由选择，您要需要就帮你联系景区内部讲解员，客人自费。。。。。",
                        msgType: 0
                    }, {
                        partnerJid: "186423144754446344",
                        type: "groupchat",
                        avatar: "http://i1.hdslb.com/headers/bdddec22494b50d792487028c17ece76.png",
                        name: "解散掉这个群003",
                        isBlock: !1,
                        createAt: 1509355839838,
                        bizType: 1003,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514268732257,
                        lastMsgId: 0xb872b787f800000,
                        lastMsgSender: "m00027533",
                        lastMessage: "测试数据",
                        msgType: 0
                    }, {
                        partnerJid: "m00959298",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/30010j00000002p2uEEAF_C_180_180.jpg",
                        name: "***微领队999",
                        isBlock: !1,
                        createAt: 1513251041844,
                        bizType: 4,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514279430269,
                        lastMsgId: 0xb877f0c85000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: '{"ext":{"dataInfoList":[{"id":"scenicSpotId","text":"65628","title":"景点ID"}{"id":"scenicSpotName","text":"三鹰之森吉卜力美术馆","title":"景点名称"}{"id":"price","text":"1.00","title":"景点起价"}{"id":"platform","text":"APP","title":"咨询渠道"}],"nickName":"","isPlay":"","avatar":"","templateId":"ddwl066","type":"","title":"景点咨询通知","extendInfo":{"toJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","advisorId":"m00959298","productId":65628,"jid":"m00959298","Platform":"APP","orderId":0,"spotId":65628,"fromJumpUrlHybrid":"ctrip://wireless/h5?path=ticket&page=index.html#/dest/t65628.html","imcode":"98969300","toJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","DestinationIdList":[56806],"departureCityId":0,"fromJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","toJumpUrlHybrid":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","saleCityId":0,"fromJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","shopping":""}"desc":"我来自景点门票截屏反馈页"}"action":"CTL01","title":"[通知消息]"}',
                        msgType: 7
                    }, {
                        partnerJid: "imuat1002",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/t1/headphoto/998/928/742/64f495cbcf79455d96c310a3ca94c268_C_180_180.jpg",
                        name: "imu****02",
                        isBlock: !1,
                        createAt: 1513058683745,
                        bizType: 1e3,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514874677101,
                        lastMsgId: 0xb99a96a33000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: "发了第55条消息",
                        msgType: 0
                    }, {
                        partnerJid: "182718139090337800",
                        type: "groupchat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/Z00d07000000004ie88D2.jpg",
                        name: "uatround1新建群聊13",
                        isBlock: !1,
                        createAt: 1497349810427,
                        bizType: 1001,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514886591747,
                        lastMsgId: 0xb9a067f77000000,
                        lastMsgSender: "m00270644",
                        lastMessage: "【费用包含】1️⃣一部车，燃油费，过路费，停车费。2️⃣司机兼职向导服务费，沿途介绍当地文化历史景区攻略（师傅不进景区内），3️⃣免费矿泉水。线路之内的景区游玩全天不限时间。 ➡️备注：由于景区讲解员有些客人需要有些不需要，我们采取自由选择，您要需要就帮你联系景区内部讲解员，客人自费。。。。。",
                        msgType: 0
                    }, {
                        partnerJid: "186423144754446344",
                        type: "groupchat",
                        avatar: "http://i1.hdslb.com/headers/bdddec22494b50d792487028c17ece76.png",
                        name: "解散掉这个群003",
                        isBlock: !1,
                        createAt: 1509355839838,
                        bizType: 1003,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514268732257,
                        lastMsgId: 0xb872b787f800000,
                        lastMsgSender: "m00027533",
                        lastMessage: "测试数据",
                        msgType: 0
                    }, {
                        partnerJid: "m00959298",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/30010j00000002p2uEEAF_C_180_180.jpg",
                        name: "***微领队999",
                        isBlock: !1,
                        createAt: 1513251041844,
                        bizType: 4,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514279430269,
                        lastMsgId: 0xb877f0c85000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: '{"ext":{"dataInfoList":[{"id":"scenicSpotId","text":"65628","title":"景点ID"}{"id":"scenicSpotName","text":"三鹰之森吉卜力美术馆","title":"景点名称"}{"id":"price","text":"1.00","title":"景点起价"}{"id":"platform","text":"APP","title":"咨询渠道"}],"nickName":"","isPlay":"","avatar":"","templateId":"ddwl066","type":"","title":"景点咨询通知","extendInfo":{"toJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","advisorId":"m00959298","productId":65628,"jid":"m00959298","Platform":"APP","orderId":0,"spotId":65628,"fromJumpUrlHybrid":"ctrip://wireless/h5?path=ticket&page=index.html#/dest/t65628.html","imcode":"98969300","toJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","DestinationIdList":[56806],"departureCityId":0,"fromJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","toJumpUrlHybrid":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","saleCityId":0,"fromJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","shopping":""}"desc":"我来自景点门票截屏反馈页"}"action":"CTL01","title":"[通知消息]"}',
                        msgType: 7
                    }, {
                        partnerJid: "imuat1002",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/t1/headphoto/998/928/742/64f495cbcf79455d96c310a3ca94c268_C_180_180.jpg",
                        name: "imu****02",
                        isBlock: !1,
                        createAt: 1513058683745,
                        bizType: 1e3,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514874677101,
                        lastMsgId: 0xb99a96a33000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: "发了第55条消息",
                        msgType: 0
                    }, {
                        partnerJid: "182718139090337800",
                        type: "groupchat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/Z00d07000000004ie88D2.jpg",
                        name: "uatround1新建群聊13",
                        isBlock: !1,
                        createAt: 1497349810427,
                        bizType: 1001,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514886591747,
                        lastMsgId: 0xb9a067f77000000,
                        lastMsgSender: "m00270644",
                        lastMessage: "【费用包含】1️⃣一部车，燃油费，过路费，停车费。2️⃣司机兼职向导服务费，沿途介绍当地文化历史景区攻略（师傅不进景区内），3️⃣免费矿泉水。线路之内的景区游玩全天不限时间。 ➡️备注：由于景区讲解员有些客人需要有些不需要，我们采取自由选择，您要需要就帮你联系景区内部讲解员，客人自费。。。。。",
                        msgType: 0
                    }, {
                        partnerJid: "186423144754446344",
                        type: "groupchat",
                        avatar: "http://i1.hdslb.com/headers/bdddec22494b50d792487028c17ece76.png",
                        name: "解散掉这个群003",
                        isBlock: !1,
                        createAt: 1509355839838,
                        bizType: 1003,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514268732257,
                        lastMsgId: 0xb872b787f800000,
                        lastMsgSender: "m00027533",
                        lastMessage: "测试数据",
                        msgType: 0
                    }, {
                        partnerJid: "m00959298",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/30010j00000002p2uEEAF_C_180_180.jpg",
                        name: "***微领队999",
                        isBlock: !1,
                        createAt: 1513251041844,
                        bizType: 4,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514279430269,
                        lastMsgId: 0xb877f0c85000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: '{"ext":{"dataInfoList":[{"id":"scenicSpotId","text":"65628","title":"景点ID"}{"id":"scenicSpotName","text":"三鹰之森吉卜力美术馆","title":"景点名称"}{"id":"price","text":"1.00","title":"景点起价"}{"id":"platform","text":"APP","title":"咨询渠道"}],"nickName":"","isPlay":"","avatar":"","templateId":"ddwl066","type":"","title":"景点咨询通知","extendInfo":{"toJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","advisorId":"m00959298","productId":65628,"jid":"m00959298","Platform":"APP","orderId":0,"spotId":65628,"fromJumpUrlHybrid":"ctrip://wireless/h5?path=ticket&page=index.html#/dest/t65628.html","imcode":"98969300","toJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","DestinationIdList":[56806],"departureCityId":0,"fromJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","toJumpUrlHybrid":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","saleCityId":0,"fromJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","shopping":""}"desc":"我来自景点门票截屏反馈页"}"action":"CTL01","title":"[通知消息]"}',
                        msgType: 7
                    }, {
                        partnerJid: "imuat1002",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/t1/headphoto/998/928/742/64f495cbcf79455d96c310a3ca94c268_C_180_180.jpg",
                        name: "imu****02",
                        isBlock: !1,
                        createAt: 1513058683745,
                        bizType: 1e3,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514874677101,
                        lastMsgId: 0xb99a96a33000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: "发了第55条消息",
                        msgType: 0
                    }, {
                        partnerJid: "182718139090337800",
                        type: "groupchat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/Z00d07000000004ie88D2.jpg",
                        name: "uatround1新建群聊13",
                        isBlock: !1,
                        createAt: 1497349810427,
                        bizType: 1001,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514886591747,
                        lastMsgId: 0xb9a067f77000000,
                        lastMsgSender: "m00270644",
                        lastMessage: "【费用包含】1️⃣一部车，燃油费，过路费，停车费。2️⃣司机兼职向导服务费，沿途介绍当地文化历史景区攻略（师傅不进景区内），3️⃣免费矿泉水。线路之内的景区游玩全天不限时间。 ➡️备注：由于景区讲解员有些客人需要有些不需要，我们采取自由选择，您要需要就帮你联系景区内部讲解员，客人自费。。。。。",
                        msgType: 0
                    }, {
                        partnerJid: "186423144754446344",
                        type: "groupchat",
                        avatar: "http://i1.hdslb.com/headers/bdddec22494b50d792487028c17ece76.png",
                        name: "解散掉这个群003",
                        isBlock: !1,
                        createAt: 1509355839838,
                        bizType: 1003,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514268732257,
                        lastMsgId: 0xb872b787f800000,
                        lastMsgSender: "m00027533",
                        lastMessage: "测试数据",
                        msgType: 0
                    }, {
                        partnerJid: "m00959298",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/30010j00000002p2uEEAF_C_180_180.jpg",
                        name: "***微领队999",
                        isBlock: !1,
                        createAt: 1513251041844,
                        bizType: 4,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514279430269,
                        lastMsgId: 0xb877f0c85000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: '{"ext":{"dataInfoList":[{"id":"scenicSpotId","text":"65628","title":"景点ID"}{"id":"scenicSpotName","text":"三鹰之森吉卜力美术馆","title":"景点名称"}{"id":"price","text":"1.00","title":"景点起价"}{"id":"platform","text":"APP","title":"咨询渠道"}],"nickName":"","isPlay":"","avatar":"","templateId":"ddwl066","type":"","title":"景点咨询通知","extendInfo":{"toJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","advisorId":"m00959298","productId":65628,"jid":"m00959298","Platform":"APP","orderId":0,"spotId":65628,"fromJumpUrlHybrid":"ctrip://wireless/h5?path=ticket&page=index.html#/dest/t65628.html","imcode":"98969300","toJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","DestinationIdList":[56806],"departureCityId":0,"fromJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","toJumpUrlHybrid":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","saleCityId":0,"fromJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","shopping":""}"desc":"我来自景点门票截屏反馈页"}"action":"CTL01","title":"[通知消息]"}',
                        msgType: 7
                    }, {
                        partnerJid: "imuat1002",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/t1/headphoto/998/928/742/64f495cbcf79455d96c310a3ca94c268_C_180_180.jpg",
                        name: "imu****02",
                        isBlock: !1,
                        createAt: 1513058683745,
                        bizType: 1e3,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514874677101,
                        lastMsgId: 0xb99a96a33000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: "发了第55条消息",
                        msgType: 0
                    }, {
                        partnerJid: "182718139090337800",
                        type: "groupchat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/Z00d07000000004ie88D2.jpg",
                        name: "uatround1新建群聊13",
                        isBlock: !1,
                        createAt: 1497349810427,
                        bizType: 1001,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514886591747,
                        lastMsgId: 0xb9a067f77000000,
                        lastMsgSender: "m00270644",
                        lastMessage: "【费用包含】1️⃣一部车，燃油费，过路费，停车费。2️⃣司机兼职向导服务费，沿途介绍当地文化历史景区攻略（师傅不进景区内），3️⃣免费矿泉水。线路之内的景区游玩全天不限时间。 ➡️备注：由于景区讲解员有些客人需要有些不需要，我们采取自由选择，您要需要就帮你联系景区内部讲解员，客人自费。。。。。",
                        msgType: 0
                    }, {
                        partnerJid: "186423144754446344",
                        type: "groupchat",
                        avatar: "http://i1.hdslb.com/headers/bdddec22494b50d792487028c17ece76.png",
                        name: "解散掉这个群003",
                        isBlock: !1,
                        createAt: 1509355839838,
                        bizType: 1003,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514268732257,
                        lastMsgId: 0xb872b787f800000,
                        lastMsgSender: "m00027533",
                        lastMessage: "测试数据",
                        msgType: 0
                    }, {
                        partnerJid: "m00959298",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/30010j00000002p2uEEAF_C_180_180.jpg",
                        name: "***微领队999",
                        isBlock: !1,
                        createAt: 1513251041844,
                        bizType: 4,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514279430269,
                        lastMsgId: 0xb877f0c85000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: '{"ext":{"dataInfoList":[{"id":"scenicSpotId","text":"65628","title":"景点ID"}{"id":"scenicSpotName","text":"三鹰之森吉卜力美术馆","title":"景点名称"}{"id":"price","text":"1.00","title":"景点起价"}{"id":"platform","text":"APP","title":"咨询渠道"}],"nickName":"","isPlay":"","avatar":"","templateId":"ddwl066","type":"","title":"景点咨询通知","extendInfo":{"toJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","advisorId":"m00959298","productId":65628,"jid":"m00959298","Platform":"APP","orderId":0,"spotId":65628,"fromJumpUrlHybrid":"ctrip://wireless/h5?path=ticket&page=index.html#/dest/t65628.html","imcode":"98969300","toJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","DestinationIdList":[56806],"departureCityId":0,"fromJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","toJumpUrlHybrid":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","saleCityId":0,"fromJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","shopping":""}"desc":"我来自景点门票截屏反馈页"}"action":"CTL01","title":"[通知消息]"}',
                        msgType: 7
                    }, {
                        partnerJid: "imuat1002",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/t1/headphoto/998/928/742/64f495cbcf79455d96c310a3ca94c268_C_180_180.jpg",
                        name: "imu****02",
                        isBlock: !1,
                        createAt: 1513058683745,
                        bizType: 1e3,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514874677101,
                        lastMsgId: 0xb99a96a33000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: "发了第55条消息",
                        msgType: 0
                    }, {
                        partnerJid: "182718139090337800",
                        type: "groupchat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/Z00d07000000004ie88D2.jpg",
                        name: "uatround1新建群聊13",
                        isBlock: !1,
                        createAt: 1497349810427,
                        bizType: 1001,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514886591747,
                        lastMsgId: 0xb9a067f77000000,
                        lastMsgSender: "m00270644",
                        lastMessage: "【费用包含】1️⃣一部车，燃油费，过路费，停车费。2️⃣司机兼职向导服务费，沿途介绍当地文化历史景区攻略（师傅不进景区内），3️⃣免费矿泉水。线路之内的景区游玩全天不限时间。 ➡️备注：由于景区讲解员有些客人需要有些不需要，我们采取自由选择，您要需要就帮你联系景区内部讲解员，客人自费。。。。。",
                        msgType: 0
                    }, {
                        partnerJid: "186423144754446344",
                        type: "groupchat",
                        avatar: "http://i1.hdslb.com/headers/bdddec22494b50d792487028c17ece76.png",
                        name: "解散掉这个群003",
                        isBlock: !1,
                        createAt: 1509355839838,
                        bizType: 1003,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514268732257,
                        lastMsgId: 0xb872b787f800000,
                        lastMsgSender: "m00027533",
                        lastMessage: "测试数据",
                        msgType: 0
                    }, {
                        partnerJid: "m00959298",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/30010j00000002p2uEEAF_C_180_180.jpg",
                        name: "***微领队999",
                        isBlock: !1,
                        createAt: 1513251041844,
                        bizType: 4,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514279430269,
                        lastMsgId: 0xb877f0c85000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: '{"ext":{"dataInfoList":[{"id":"scenicSpotId","text":"65628","title":"景点ID"}{"id":"scenicSpotName","text":"三鹰之森吉卜力美术馆","title":"景点名称"}{"id":"price","text":"1.00","title":"景点起价"}{"id":"platform","text":"APP","title":"咨询渠道"}],"nickName":"","isPlay":"","avatar":"","templateId":"ddwl066","type":"","title":"景点咨询通知","extendInfo":{"toJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","advisorId":"m00959298","productId":65628,"jid":"m00959298","Platform":"APP","orderId":0,"spotId":65628,"fromJumpUrlHybrid":"ctrip://wireless/h5?path=ticket&page=index.html#/dest/t65628.html","imcode":"98969300","toJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","DestinationIdList":[56806],"departureCityId":0,"fromJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","toJumpUrlHybrid":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","saleCityId":0,"fromJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","shopping":""}"desc":"我来自景点门票截屏反馈页"}"action":"CTL01","title":"[通知消息]"}',
                        msgType: 7
                    }, {
                        partnerJid: "imuat1002",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/t1/headphoto/998/928/742/64f495cbcf79455d96c310a3ca94c268_C_180_180.jpg",
                        name: "imu****02",
                        isBlock: !1,
                        createAt: 1513058683745,
                        bizType: 1e3,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514874677101,
                        lastMsgId: 0xb99a96a33000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: "发了第55条消息",
                        msgType: 0
                    }, {
                        partnerJid: "182718139090337800",
                        type: "groupchat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/Z00d07000000004ie88D2.jpg",
                        name: "uatround1新建群聊13",
                        isBlock: !1,
                        createAt: 1497349810427,
                        bizType: 1001,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514886591747,
                        lastMsgId: 0xb9a067f77000000,
                        lastMsgSender: "m00270644",
                        lastMessage: "【费用包含】1️⃣一部车，燃油费，过路费，停车费。2️⃣司机兼职向导服务费，沿途介绍当地文化历史景区攻略（师傅不进景区内），3️⃣免费矿泉水。线路之内的景区游玩全天不限时间。 ➡️备注：由于景区讲解员有些客人需要有些不需要，我们采取自由选择，您要需要就帮你联系景区内部讲解员，客人自费。。。。。",
                        msgType: 0
                    }, {
                        partnerJid: "186423144754446344",
                        type: "groupchat",
                        avatar: "http://i1.hdslb.com/headers/bdddec22494b50d792487028c17ece76.png",
                        name: "解散掉这个群003",
                        isBlock: !1,
                        createAt: 1509355839838,
                        bizType: 1003,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514268732257,
                        lastMsgId: 0xb872b787f800000,
                        lastMsgSender: "m00027533",
                        lastMessage: "测试数据",
                        msgType: 0
                    }, {
                        partnerJid: "m00959298",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/30010j00000002p2uEEAF_C_180_180.jpg",
                        name: "***微领队999",
                        isBlock: !1,
                        createAt: 1513251041844,
                        bizType: 4,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514279430269,
                        lastMsgId: 0xb877f0c85000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: '{"ext":{"dataInfoList":[{"id":"scenicSpotId","text":"65628","title":"景点ID"}{"id":"scenicSpotName","text":"三鹰之森吉卜力美术馆","title":"景点名称"}{"id":"price","text":"1.00","title":"景点起价"}{"id":"platform","text":"APP","title":"咨询渠道"}],"nickName":"","isPlay":"","avatar":"","templateId":"ddwl066","type":"","title":"景点咨询通知","extendInfo":{"toJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","advisorId":"m00959298","productId":65628,"jid":"m00959298","Platform":"APP","orderId":0,"spotId":65628,"fromJumpUrlHybrid":"ctrip://wireless/h5?path=ticket&page=index.html#/dest/t65628.html","imcode":"98969300","toJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","DestinationIdList":[56806],"departureCityId":0,"fromJumpUrlOnline":"http://piao.ctrip.com/dest/t65628.html","toJumpUrlHybrid":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","saleCityId":0,"fromJumpUrl":"http://m.ctrip.com/webapp/ticket/dest/t65628.html","shopping":""}"desc":"我来自景点门票截屏反馈页"}"action":"CTL01","title":"[通知消息]"}',
                        msgType: 7
                    }, {
                        partnerJid: "imuat1002",
                        type: "chat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/t1/headphoto/998/928/742/64f495cbcf79455d96c310a3ca94c268_C_180_180.jpg",
                        name: "imu****02",
                        isBlock: !1,
                        createAt: 1513058683745,
                        bizType: 1e3,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514874677101,
                        lastMsgId: 0xb99a96a33000000,
                        lastMsgSender: "wwwwww",
                        lastMessage: "发了第55条消息",
                        msgType: 0
                    }, {
                        partnerJid: "182718139090337800",
                        type: "groupchat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/Z00d07000000004ie88D2.jpg",
                        name: "uatround1新建群聊13",
                        isBlock: !1,
                        createAt: 1497349810427,
                        bizType: 1001,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514886591747,
                        lastMsgId: 0xb9a067f77000000,
                        lastMsgSender: "m00270644",
                        lastMessage: "【费用包含】1️⃣一部车，燃油费，过路费，停车费。2️⃣司机兼职向导服务费，沿途介绍当地文化历史景区攻略（师傅不进景区内），3️⃣免费矿泉水。线路之内的景区游玩全天不限时间。 ➡️备注：由于景区讲解员有些客人需要有些不需要，我们采取自由选择，您要需要就帮你联系景区内部讲解员，客人自费。。。。。",
                        msgType: 0
                    }, {
                        partnerJid: "182718139090337800",
                        type: "groupchat",
                        avatar: "http://uploadimg.uat.qa.nt.ctripcorp.com/upload/target/Z00d07000000004ie88D2.jpg",
                        name: "uatround1新建群聊13",
                        isBlock: !1,
                        createAt: 1497349810427,
                        bizType: 1001,
                        unreadTimeline: 0,
                        unreadCount: 0,
                        lastTimestamp: 1514886591747,
                        lastMsgId: 0xb9a067f77000000,
                        lastMsgSender: "m00270644",
                        lastMessage: "【费用包含】1️⃣一部车，燃油费，过路费，停车费。2️⃣司机兼职向导服务费，沿途介绍当地文化历史景区攻略（师傅不进景区内），3️⃣免费矿泉水。线路之内的景区游玩全天不限时间。 ➡️备注：由于景区讲解员有些客人需要有些不需要，我们采取自由选择，您要需要就帮你联系景区内部讲解员，客人自费。。。。。",
                        msgType: 0
                    }];
                    var r = [];
                    p.each(xt, function(t, e) {
                        r.push({
                            partnerJid: e.partnerJid,
                            chatType: e.type,
                            startMsgId: "0",
                            endMsgId: "0"
                        })
                    });
                    for (var i = [], o = 0, s = r.length; o < s; o += 10) {
                        var a = r.slice(o, o + 10);
                        i.push(e.getLatestmessageInBulkV2(a).then(function(t) {
                            xt = p.map(xt, function(e, n) {
                                return p.each(t.convMsgs, function(t, n) {
                                    if (n.partnerJid === e.partnerJid) {
                                        var r = [];
                                        p.each(n.messages, function(t, e) {
                                            "1021" != e.msgtype.toString() && "1022" != e.msgtype.toString() && "1023" != e.msgtype.toString() && r.push(e)
                                        }),
                                        e.lastMsgId = r[0] && r[0].msgId,
                                        e.msgType = r[0] && r[0].msgtype,
                                        e.lastMessage = r[0] && r[0].messageBody,
                                        e.lastMsgSender = r[0] && r[0].fromJid,
                                        e.lastTimestamp = r[0] && r[0].createTime,
                                        e.messages = []
                                    }
                                }),
                                e
                            })
                        }))
                    }
                    Promise.all(i).then(function() {
                        t(xt.sort(function(t, e) {
                            return e.lastTimestamp - t.lastTimestamp
                        }))
                    })
                }
                )
            }
            ,
            e.prototype.getLatestmessageInBulkV2 = function(t) {
                return new Promise(function(e, n) {
                    Y.param = {
                        latestMsgCriteria: t
                    },
                    Y.excute(function(t) {
                        t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase() ? e(t) : n(t)
                    }, function(t) {
                        n(t)
                    }, !0, this)
                }
                )
            }
            ,
            e.prototype.getLatemessageHistoryInBulk = function(t, e, n) {
                currentPartner = t.partnerJid,
                At != currentPartner && (Pt = [],
                At = currentPartner);
                var r = []
                  , i = length > 0 ? messageList[0].msgId : "0"
                  , o = new Object;
                o.partnerJid = t.partnerJid,
                o.chatType = t.chatType,
                o.pageSize = null != t.pageSize ? t.pageSize : 50,
                o.startMsgId = "0",
                o.endMsgId = i,
                r[0] = o,
                Y.param = {
                    latestMsgCriteria: r
                },
                Y.excute(function(t) {
                    t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase() && t.convMsgs && (Pt = t.convmsgs.concat(Pt),
                    t.convMsgs = t.convMsgs),
                    e(t)
                }, function(t) {
                    n(t)
                }, !0, this)
            }
            ,
            e.prototype.getMsgByid = function(t, e) {
                for (var n in e)
                    if (e[n].partnerJid == t)
                        return e[n].messages
            }
            ,
            e.prototype.getConversationsPaging = function(t, e, n) {
                p.checkObjectParam(t, ["beginTimestamp", "pageSize"], [{
                    type: "number",
                    min: 0,
                    default1: 0
                }, {
                    type: "number",
                    min: 1,
                    max: 100,
                    default1: 50
                }], "getConversationsPaging");
                var r = this;
                y.param = {
                    beginTimestamp: t.beginTimestamp,
                    pageSize: t.pageSize
                },
                y.excute(function(t) {
                    t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase() && t.conversations && (t.conversations = r._conversationHandler.serialize(t.conversations)),
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.getConversationByJid = function(t, e, n) {
                p.checkParam(["object", "function", "function"], "getConversationByJid"),
                p.checkObjectParam(t, ["partnerJid"], [{
                    type: "string"
                }], "getConversationsPaging");
                var r = this;
                T.param = {
                    partnerJid: t.partnerJid
                },
                T.excute(function(t) {
                    if (t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase() && t.conversation) {
                        var n = r._conversationHandler.serialize(t.conversation);
                        n && n.length > 0 && (t.conversation = n[0])
                    }
                    e(t)
                }, function(t) {
                    n(t)
                }, !0, this)
            }
            ,
            e.prototype.removeConversationByJid = function(t, e, n) {
                p.checkParam(["string", "function", "function"], "removeConversationByJid"),
                S.param = {
                    partnerJid: t
                },
                S.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.removeConversation = function(t, e, n) {
                S.param = {
                    partnerJid: t.partnerJid,
                    type: t.type
                },
                S.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.getPartnerDetail = function(t, e, n) {
                Tt.param = {
                    partnerId: t.partnerId,
                    chatType: t.chatType,
                    size: t.size
                },
                Tt.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.getPartnerConversationInfo = function(t, e, n) {
                p.checkParam(["object", "function", "function"], "getPartnerConversationInfo"),
                p.checkObjectParam(t, ["partnerJid", "conversationType"], [{
                    type: "string"
                }, {
                    type: "string",
                    range: K
                }], "getPartnerConversationInfo"),
                C.param = {
                    partnerJid: t.partnerJid,
                    type: t.conversationType
                },
                C.excute(function(n) {
                    if (n && "success" == n.ResponseStatus.Ack.toLocaleLowerCase()) {
                        var r = {};
                        r.ResponseStatus = n.ResponseStatus;
                        var i = t.conversationType === s.ConversationType.SingleChat ? new c.SingleConversation : new c.GroupConversation;
                        i.partnerJid = n.partnerJid && n.partnerJid,
                        i.name = n.name && n.name,
                        i.avatar = n.avatar && n.avatar,
                        i.isBlock = n.isBlock && n.isBlock,
                        i.extPropertys = n.extPropertys && n.extPropertys,
                        r.conversation = i,
                        e(r)
                    } else
                        e(n)
                }, function(t) {
                    n(t)
                }, !0, this)
            }
            ,
            e.prototype.sendCurrentMessageReceipt = function(t, e, n) {
                p.checkParam(["object"], "sendCurrentMessageReceipt"),
                p.checkObjectParam(t, ["messageCreateTime"], [{
                    type: "number",
                    min: 1
                }], "sendCurrentMessageReceipt"),
                t.conversationType = this._conversationType === s.ConversationType.ConversationList ? this._subConversationType : this._conversationType,
                t.partnerJid = this._partnerJid,
                this.sendMessageReceipt(t, e, n)
            }
            ,
            e.prototype.sendMessageReceipt = function(t, e, n) {
                p.checkParam(["object"], "sendCurrentMessageReceipt"),
                p.checkObjectParam(t, ["partnerJid", "messageCreateTime", "conversationType"], [{
                    type: "string"
                }, {
                    type: "number",
                    min: 1
                }, {
                    type: "string",
                    range: [s.ConversationType.SingleChat, s.ConversationType.GroupChat]
                }], "sendMessageReceipt"),
                w.param = {
                    partnerJid: t.partnerJid,
                    MessageCreateTime: t.messageCreateTime,
                    type: t.conversationType
                },
                w.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.putAdviceOfReadByMsgId = function(t, e, n) {
                I.param = {
                    partnerJid: t.partnerJid,
                    msgId: t.msgId,
                    type: t.conversationType
                },
                I.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.getTotalUnreadcount = function(t, e) {
                M.excute(function(e) {
                    t && p.isFunction(t) && t(e)
                }, function(t) {
                    e && p.isFunction(e) && e(t)
                }, !0, this)
            }
            ,
            e.prototype.getCurrentConversationUnreadCount = function(t, e) {
                this._partnerJid && this._lastTimestamp ? this.getConversationUnreadInfo({
                    partnerJid: this._partnerJid,
                    messageBaseLine: this._lastTimestamp,
                    conversationType: this._conversationType === s.ConversationType.ConversationList ? this._subConversationType : this._conversationType
                }, t, e) : e && p.isFunction(e) && e({
                    ResponseStatus: {
                        Ack: "Failure"
                    },
                    unreadCount: 0,
                    unreadTimeline: 0
                })
            }
            ,
            e.prototype.getConversationUnreadInfo = function(t, e, n) {
                p.checkParam(["object", "function", "function"], "getConversationUnreadInfo"),
                p.checkObjectParam(t, ["partnerJid", "messageBaseLine", "conversationType"], [{
                    type: "string"
                }, {
                    type: "number",
                    min: 0,
                    default1: 0
                }, {
                    type: "string",
                    range: [s.ConversationType.SingleChat, s.ConversationType.GroupChat]
                }], "getConversationUnreadInfo");
                var r = this;
                x.param = {
                    partnerJid: t.partnerJid,
                    messageBaseLine: t.messageBaseLine,
                    type: t.conversationType
                },
                x.excute(function(t) {
                    t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase() && (r._conversationUnreadCount = t.unreadCount,
                    r._conversationUnreadTimeline = t.unreadTimeline),
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.getGroupAtMessagesByJidPaging = function(t, e, n) {
                p.checkObjectParam(t, ["partnerJid", "paging"], [{
                    type: "string"
                }, {
                    type: "object"
                }], "getGroupAtMessagesByJidPaging"),
                p.checkObjectParam(t.paging, ["beginTimestamp", "direction", "pageSize"], [{
                    type: "number",
                    min: 0,
                    default1: 0
                }, {
                    type: "string",
                    range: ["prev", "next"]
                }, {
                    type: "number",
                    min: 1,
                    max: 10,
                    default1: 1
                }], "getGroupAtMessagesByJidPaging");
                var r = this;
                k.param = {
                    groupJid: t.partnerJid,
                    direction: t.paging.direction,
                    beginMsgTime: t.paging.beginTimestamp,
                    pageSize: t.paging.pageSize
                },
                k.excute(function(t) {
                    t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase() && t.messages && t.messages.length > 0 && (t.messages = r._messageHandler.serialize(t.messages)),
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.removeMessage = function(t, e, n) {
                p.checkParam(["object"], "removeMessage"),
                "conversationType"in t || (t.conversationType = this._conversationType === s.ConversationType.ConversationList ? this._subConversationType : this._conversationType),
                p.checkObjectParam(t, ["messageId", "conversationType"], [{
                    type: "string"
                }, {
                    type: "string",
                    range: K
                }], "removeMessage"),
                P.param = {
                    msgId: t.messageId,
                    type: t.conversationType
                },
                P.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.recallMessage = function(t, e, n) {
                p.checkParam(["object"], "recallMessage"),
                p.checkObjectParam(t, ["messageId", "partnerId", "chatType"], [{
                    type: "string"
                }, {
                    type: "string"
                }, {
                    type: "string"
                }], "recallMessage"),
                Z.param = {
                    messageId: t.messageId,
                    partnerId: t.partnerId,
                    chatType: t.chatType
                },
                Z.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.getCurrentGroupAllMembers = function(t, e, n) {
                if (p.checkParam(["object", "function", "function"], "getCurrentGroupAllMembers"),
                p.checkObjectParam(t, ["paging"], [{
                    type: "object"
                }], "getCurrentGroupAllMembers"),
                p.checkObjectParam(t.paging, ["sortField"], [{
                    type: "string",
                    range: ["nick", "create_at"],
                    default1: "create_at"
                }], "getCurrentGroupAllMembers"),
                this._conversationType != s.ConversationType.GroupChat && this._subConversationType != s.ConversationType.GroupChat)
                    throw new Error("The current conversation type is not a group chat.");
                t.groupJid = this._partnerJid,
                this.getGroupAllMembersByJid(t, e, n)
            }
            ,
            e.prototype.getCurrentGroupMembersPaging = function(t, e, n) {
                if (p.checkParam(["object", "function", "function"], "getCurrentGroupMembersPaging"),
                p.checkObjectParam(t, ["paging"], [{
                    type: "object"
                }], "getCurrentGroupMembersPaging"),
                p.checkObjectParam(t.paging, ["pageIndex", "pageSize", "sortField"], [{
                    type: "number",
                    min: 1,
                    default1: 1
                }, {
                    type: "number",
                    min: 1,
                    max: 100,
                    default1: 50
                }, {
                    type: "string",
                    range: ["nick", "create_at"],
                    default1: "create_at"
                }], "getCurrentGroupMembersPaging"),
                this._conversationType != s.ConversationType.GroupChat && this._subConversationType != s.ConversationType.GroupChat)
                    throw new Error("The current conversation type is not a group chat.");
                t.groupJid = this._partnerJid,
                this.getGroupMembersByJidPaging(t, e, n)
            }
            ,
            e.prototype.getGroupAllMembersByJid = function(t, e, n) {
                p.checkParam(["object", "function", "function"], "getCurrentGroupAllMembers"),
                p.checkObjectParam(t, ["paging"], [{
                    type: "object"
                }], "getCurrentGroupAllMembers"),
                p.checkObjectParam(t.paging, ["sortField"], [{
                    type: "string",
                    range: ["nick", "create_at"],
                    default1: "create_at"
                }], "getCurrentGroupAllMembers");
                var r = this
                  , i = [];
                t.paging.pageIndex = 1,
                t.paging.pageSize = 100;
                var o = function(t) {
                    n && p.isFunction(n) && n(t)
                };
                r.getGroupMembersByJidPaging(t, function s(n) {
                    n && "success" == n.ResponseStatus.Ack.toLocaleLowerCase() ? (i = i.concat(n.members),
                    n.pageResult && n.pageResult.pageCount > t.paging.pageIndex ? (t.paging.pageIndex += 1,
                    r.getGroupMembersByJidPaging(t, s, o)) : e && p.isFunction(e) && (n.members = i,
                    e(n))) : e && p.isFunction(e) && e(n)
                }, o)
            }
            ,
            e.prototype.getGroupMembersByJidPaging = function(t, e, n) {
                p.checkParam(["object", "function", "function"], "getGroupMembersByJidPaging"),
                p.checkObjectParam(t, ["groupJid", "paging"], [{
                    type: "string"
                }, {
                    type: "object"
                }], "getGroupMembersByJidPaging"),
                p.checkObjectParam(t.paging, ["pageIndex", "pageSize", "sortField"], [{
                    type: "number",
                    min: 1,
                    default1: 1
                }, {
                    type: "number",
                    min: 1,
                    max: 100,
                    default1: 50
                }, {
                    type: "string",
                    range: ["nick", "create_at"],
                    default1: "create_at"
                }], "getGroupMembersByJidPaging");
                var r = this;
                A.param = {
                    groupJid: t.groupJid,
                    paging: {
                        pageIndex: t.paging.pageIndex,
                        pageSize: t.paging.pageSize,
                        sort: t.paging.sortField
                    }
                },
                A.excute(function(t) {
                    t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase() && (t.members = r.convertMemberList(t.members)),
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.getGroupMembersEn = function(t, e, n) {
                p.checkParam(["object", "function", "function"], "getGroupMembersEn"),
                p.checkObjectParam(t, ["groupJid", "paging"], [{
                    type: "string"
                }, {
                    type: "object"
                }], "getGroupMembersEn"),
                p.checkObjectParam(t.paging, ["pageIndex", "pageSize", "sortField"], [{
                    type: "number",
                    min: 1,
                    default1: 1
                }, {
                    type: "number",
                    min: 1,
                    max: 100,
                    default1: 50
                }, {
                    type: "string",
                    range: ["nick", "create_at"],
                    default1: "create_at"
                }], "getGroupMembersEn");
                var r = this;
                O.param = {
                    groupJid: t.groupJid,
                    paging: {
                        pageIndex: t.paging.pageIndex,
                        pageSize: t.paging.pageSize,
                        sort: t.paging.sortField
                    }
                },
                O.excute(function(t) {
                    t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase() && (t.members = r.convertMemberList(t.members)),
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.getGroupMemberInfoByJid = function(t, e, n) {
                p.checkParam(["object", "function"], "getGroupMemberInfoByJid"),
                p.checkObjectParam(t, ["groupJid", "partnerJid"], [{
                    type: "string"
                }, {
                    type: "string"
                }], "getGroupMemberInfoByJid");
                var r = this;
                N.param = {
                    groupJid: t.groupJid,
                    memberUid: t.partnerJid
                },
                N.excute(function(t) {
                    t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase() && (t.member = r.convertMember(t.member)),
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.getCurrentGroupInfo = function(t, e) {
                if (this._conversationType != s.ConversationType.GroupChat && this._subConversationType != s.ConversationType.GroupChat)
                    throw new Error("The current conversation type is not a group chat.");
                this.getGroupInfoByJid(this._partnerJid, t, e)
            }
            ,
            e.prototype.getGroupInfoByJid = function(t, e, n) {
                p.checkParam(["string", "function", "function"], "getGroupInfoByJid");
                var r = this;
                E.param = {
                    groupJid: t
                },
                E.excute(function(t) {
                    if (t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase()) {
                        var n = {};
                        n.ResponseStatus = t.ResponseStatus,
                        n.groupInfo = r.ConvertGroupinfo(t),
                        e && p.isFunction(e) && e(n)
                    } else
                        e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.getContactsPaging = function(t, e, n) {
                if (e && p.isFunction(e)) {
                    var r = this;
                    j.param = {
                        localVersion: t.version.localVersion,
                        remoteVersion: t.version.remoteVersion,
                        paging: {
                            pageIndex: t.paging.pageIndex,
                            pageSize: t.paging.pageSize,
                            sort: t.paging.sortField
                        }
                    },
                    j.excute(function(t) {
                        t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase() && (t.contacts = r.ConvertUserinfoByContacts(t.contacts)),
                        e && p.isFunction(e) && e(t)
                    }, function(t) {
                        n && p.isFunction(n) && n(t)
                    }, !0, this)
                }
            }
            ,
            e.prototype.updateContact = function(t, e, n) {
                B.param = {
                    userJid: t.jid,
                    nick: t.nickname,
                    tags: t.tags,
                    extPropertys: t.extPropertys
                },
                B.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.updateContacts = function(t, e, n) {
                R.param = {
                    uid: t.uid,
                    memoName: t.memoName,
                    memoNote: t.memoNote
                },
                R.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.viewContacts = function(t, e, n) {
                F.param = {
                    uid: t
                },
                F.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.removeContact = function(t, e, n) {
                G.param = {
                    contactJid: t
                },
                G.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.createThread = function(t, e, n) {
                J.param.thread = {
                    subject: t.subject,
                    nativeLink: t.nativeLink,
                    h5Link: t.h5Link,
                    hybirdLink: t.hybirdLink,
                    extPropertys: t.extPropertys
                },
                J.excute(function(t) {
                    if (t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase()) {
                        var n = {};
                        n.ResponseStatus = t.ResponseStatus,
                        n.threadId = t.threadId,
                        t = n
                    }
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.getThread = function(t, e, n) {
                p.checkParam(["object", "function", "function"], "getThread"),
                p.checkObjectParam(t, ["threadId"], [{
                    type: "string"
                }], "getThread");
                var r = this;
                U.param = {
                    threadId: t.threadId
                },
                U.excute(function(t) {
                    if (t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase() && t.thread) {
                        var n = {};
                        n.ResponseStatus = t.ResponseStatus,
                        n.thread = r.ConvertThread(t.thread),
                        t = n
                    }
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.convertMemberList = function(t) {
                var e = this
                  , n = [];
                return t && t.length > 0 && t.forEach(function(t) {
                    n.push(e.convertMember(t))
                }),
                n
            }
            ,
            e.prototype.convertMember = function(t) {
                var e = {};
                return (e = new u).uid = t.username,
                e.jid = t.userJid,
                e.nickname = t.nickName,
                e.avatar = t.avatar,
                e.role = t.role,
                e.isBlock = t.isBlock,
                e.joinGroupTime = t.createAt,
                e.extPropertys = t.extPropertys,
                e.roles = t.roles,
                e
            }
            ,
            e.prototype.convertUserinfoByCommunity = function(t) {
                var e = [];
                if (t && t.UserCommunityInfoList && t.UserCommunityInfoList.length > 0) {
                    var n = {};
                    t.UserCommunityInfoList.forEach(function(t) {
                        (n = new u).uid = t.UID,
                        n.nickname = t.NickName,
                        n.isDefaultSystemPhoto = t.IsDefaultSystemPhoto,
                        n.isHoliday = t.IsHoliday,
                        n.isSenate = t.isSenate,
                        t.UserHeadPhotoList && t.UserHeadPhotoList.length > 0 && (n.userHeadPhotoList = [],
                        t.UserHeadPhotoList.forEach(function(t) {
                            180 != t.Width && 180 != t.Height || (n.avatar = t.ImageUrl),
                            n.userHeadPhotoList.push({
                                Name: t.Name,
                                ImageUrl: t.ImageUrl,
                                Width: t.Width,
                                Height: t.Height
                            })
                        })),
                        e.push(n)
                    })
                }
                return e
            }
            ,
            e.prototype.ConvertGroupinfo = function(t) {
                var e = null;
                return t && ((e = new l).jid = t.groupJid,
                e.name = t.groupName,
                e.title = t.groupTitle,
                e.desc = t.groupdesc,
                e.icon = t.groupIcon,
                e.allowInvites = t.allowinvites,
                e.isProtected = t.isProtected,
                e.isPublic = t.isPublic,
                e.allowPrivateChat = t.allowPrivateChat,
                e.extPropertys = t.extPropertys),
                e
            }
            ,
            e.prototype.ConvertUserinfoByContacts = function(t) {
                var e = [];
                if (t && t.length > 0) {
                    var n = {};
                    t.forEach(function(t) {
                        (n = new u).jid = t.jid,
                        n.nickname = t.nick,
                        n.comment = t.comment,
                        n.approved = t.approved,
                        n.ask = t.ask,
                        n.askmessage = t.askmessage,
                        n.subscription = t.subscription,
                        n.subscribe = t.subscribe,
                        n.subscriptionsetting = t.subscriptionsetting,
                        n.type = t.type,
                        n.ori = t.ori,
                        n.tags = t.tags,
                        n.version = t.version,
                        n.extPropertys = t.extPropertys,
                        n.userHeadPhotoList = [{
                            ImageUrl: t.avatar
                        }],
                        e.push(n)
                    })
                }
                return e
            }
            ,
            e.prototype.ConvertThread = function(t) {
                var e = {};
                return t && ((e = new h).threadId = t.threadId,
                e.subject = t.subject,
                e.nativeLink = t.nativeLink,
                e.h5Link = t.h5Link,
                e.hybirdLink = t.hybirdLink,
                e.extPropertys = t.extPropertys),
                e
            }
            ,
            e.prototype.setStatusListener = function(t) {
                a.setStatusListener(t)
            }
            ,
            e.prototype.setNetwork = function(t) {
                if (p.ubtTrace({
                    Action: "setNetwork",
                    Params: t
                }),
                !["internal", "external"].includes(t))
                    throw new Error("network must be internal or external");
                p.network.value = t,
                p.network.forceSetting = !0
            }
            ,
            e.prototype.getNetwork = function() {
                return p.network.value
            }
            ,
            e.prototype.updateGroupConfig = function(t, e, n) {
                tt.param = {
                    gid: t.gid,
                    nick: t.nick
                },
                tt.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.updateMsgBlockConfig = function(t, e, n) {
                et.param = {
                    partnerId: t.partnerId,
                    chatType: t.chatType,
                    isBlock: t.isBlock
                },
                et.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.getMsgBlockConfig = function(t, e, n) {
                nt.param = {
                    partnerId: t.partnerId,
                    chatType: t.chatType
                },
                nt.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.getRecommendNickName = function(t, e, n) {
                rt.param = {
                    size: t.size
                },
                rt.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.submitNickName = function(t, e, n) {
                it.param = {
                    nickName: t.nickName
                },
                it.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.isInWhiteList = function(t, e, n) {
                ot.param = {
                    nickName: t.nickName
                },
                ot.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.startCounsel = function(t, e, n) {
                st.param = {
                    orderInfo: t.orderInfo,
                    orderInfoV2: t.orderInfoV2,
                    gType: t.gType,
                    buType: t.buType,
                    chatType: t.chatType || "groupchat",
                    sessionId: t.sessionId,
                    partnerId: t.partnerId,
                    contentType: t.contentType,
                    priority: t.priority,
                    referer: t.referer,
                    profile: t.profile || ""
                },
                st.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.sendAIChatMessage = function(t, e, n) {
                var r = function(t) {
                    e && p.isFunction(e) && e(t)
                }
                  , i = function(t) {
                    n && p.isFunction(n) && n(t)
                };
                p.getOpenIM() ? (lt.param = {
                    localId: t.localId || p.createGuid(),
                    groupId: t.groupId,
                    gType: t.gType,
                    buType: t.buType,
                    msgType: t.msgType || 0,
                    body: t.body || "",
                    source: t.source || "online",
                    resource: t.resource || "Web",
                    threadId: t.threadId,
                    profile: t.profile || ""
                },
                lt.excute(r, i, !0, this)) : (ct.param = {
                    localId: t.localId || p.createGuid(),
                    groupId: t.groupId,
                    gType: t.gType,
                    buType: t.buType,
                    msgType: t.msgType || 0,
                    body: t.body || "",
                    source: t.source || "online",
                    resource: t.resource || "Web",
                    threadId: t.threadId,
                    profile: t.profile || ""
                },
                ct.excute(r, i, !0, this))
            }
            ,
            e.prototype.startAIChat = function(t, e, n) {
                var r = function(t) {
                    e && p.isFunction(e) && e(t)
                }
                  , i = function(t) {
                    n && p.isFunction(n) && n(t)
                };
                p.getOpenIM() ? (ut.param = {
                    gType: t.gType,
                    aiParams: t.aiParams || {},
                    buType: t.buType,
                    groupId: t.groupId || 0,
                    profile: t.profile,
                    orderInfo: t.orderInfo,
                    acdInfo: t.acdInfo
                },
                ut.excute(r, i, !0, this)) : (at.param = {
                    gType: t.gType,
                    aiParams: t.aiParams || {},
                    buType: t.buType,
                    groupId: t.groupId || 0,
                    profile: t.profile,
                    orderInfo: t.orderInfo,
                    acdInfo: t.acdInfo
                },
                at.excute(r, i, !0, this))
            }
            ,
            e.prototype.closeWorkSheetByCustomer = function(t, e, n) {
                ht.param = {
                    agentUid: t.agentUid,
                    customerUid: t.customerUid,
                    gid: t.gid,
                    isAutoInvite: t.isAutoInvite
                },
                ht.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.addScore = function(t, e, n) {
                pt.param = {
                    workSheetId: t.workSheetId,
                    score: t.score,
                    suggestion: t.suggestion,
                    tags: t.tags,
                    isAutoReturnScore: t.isAutoReturnScore
                },
                pt.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.ifExistBotOrAngent = function(t) {
                var e = {
                    isBot: !1,
                    isAgent: !1,
                    agentUid: "",
                    agent: {
                        uid: "",
                        avatar: "",
                        nickname: "",
                        status: "",
                        roles: []
                    },
                    robot: {
                        uid: "",
                        avatar: "",
                        nickname: "",
                        status: "",
                        roles: []
                    }
                };
                return t && t.length > 0 && t.forEach(function(t) {
                    var n = t.roles
                      , r = void 0 === n ? [] : n;
                    r && r.length && r[1] > 2 && (e.isAgent = !0,
                    e.agentUid = t.uid,
                    e.agent.uid = t.uid,
                    e.agent.avatar = t.avatar,
                    e.agent.nickname = t.nickname || t.nick,
                    e.agent.status = t.status,
                    e.agent.roles = t.roles),
                    r && r.length && 2 == r[1] && (e.isBot = !0,
                    e.robot.uid = t.uid,
                    e.robot.avatar = t.avatar,
                    e.robot.nickname = t.nickname || t.nick,
                    e.robot.status = t.status,
                    e.robot.roles = t.roles)
                }),
                e
            }
            ,
            e.prototype.startChat = function(t, e, n) {
                ft.param = {
                    bu: t.bu || {},
                    item: t.item,
                    groupId: t.groupId,
                    agentId: t.agentId,
                    source: t.source,
                    threadId: t.threadId,
                    mode: t.mode
                },
                ft.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.getCandidateAgents = function(t, e, n) {
                dt.param = {
                    bu: t.bu,
                    item: t.item,
                    profile: t.profile
                },
                dt.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.getRelativeQuestions = function(t, e, n) {
                gt.param = {
                    bu: t.bu,
                    item: t.item,
                    groupId: t.groupId,
                    platform: t.platform || 2,
                    sessionId: t.sessionId,
                    size: t.size || 5,
                    text: t.text,
                    locale: t.locale,
                    extParam: t.extParam,
                    thirdPartytoken: t.thirdPartytoken,
                    aiToken: t.aiToken
                },
                gt.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.finishChat = function(t, e, n) {
                mt.param = {
                    groupId: t.groupId,
                    agentId: t.agentId,
                    sessionId: t.sessionId,
                    needScoreMessage: t.needScoreMessage
                },
                mt.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.postScore = function(t, e, n) {
                yt.param = {
                    groupId: t.groupId,
                    score: t.score
                },
                yt.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.checkMemberStatus = function(t, e, n) {
                vt.param = {
                    groupId: t.groupId,
                    uids: t.uids
                },
                vt.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.checkChatStatus = function(t, e, n) {
                bt.param = {
                    sessionId: t.sessionId,
                    groupId: t.groupId
                },
                bt.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.checkScoreStatus = function(t, e, n) {
                _t.param = {
                    groupId: t.groupId,
                    sessionId: t.sessionId,
                    agentId: t.agentId,
                    scoreType: t.scoreType
                },
                _t.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.getGroupAdmins = function(t, e, n) {
                L.param = {
                    groupJid: t
                },
                L.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.rebindSession = function(t, e, n) {
                It.param = {
                    uid: t.uid,
                    gid: t.gid,
                    sessionId: t.sessionId,
                    bizType: t.bizType,
                    threadid: t.threadid,
                    orderId: t.orderId,
                    productId: t.productId || "",
                    butlerId: t.butlerId || "",
                    channelId: t.channelId,
                    chatMode: t.chatMode
                },
                It.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.getCommonProblems = function(t, e, n) {
                Mt.param = {
                    gType: t.gType,
                    sessionId: t.sessionId,
                    orderId: t.orderId,
                    coordinate: t.coordinate,
                    platform: t.platform,
                    productInfo: t.productInfo || "",
                    questionId: t.questionId,
                    aiToken: t.aiToken,
                    thirdPartyToken: t.thirdPartyToken,
                    groupId: t.groupId,
                    pageid: t.pageid,
                    locale: t.locale,
                    channel: t.channel,
                    extParams: t.extParams
                },
                Mt.excute(function(t) {
                    e && p.isFunction(e) && e(t)
                }, function(t) {
                    n && p.isFunction(n) && n(t)
                }, !0, this)
            }
            ,
            e.prototype.checkNetWork = function() {
                p.network.forceSetting || (p.isInIBUSite() ? p.network.value = "external" : d.cros("https://apigateway.ctripcorp.com/restapi/soa2/11679/CheckHealth", "post", {}, function(t) {
                    p.network.value = "internal",
                    p.ubtTrace({
                        Action: "checkNetwork",
                        Result: p.network.value
                    })
                }, function(t) {
                    p.network.value = "external",
                    p.ubtTrace({
                        Action: "checkNetwork",
                        Result: p.network.value
                    })
                }, 5e3))
            }
            ,
            e.prototype.getInstance = function() {
                return this._instance instanceof this ? this._instance : this._instance = new this
            }
            ,
            e
        }(f);
        t.exports = Ot
    }
    , function(t, e, n) {
        "use strict";
        var r = n(328)
          , i = n(13)
          , o = function(t) {
            function e(n) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var r = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, t.call(this, n));
                return r.initialize(n),
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf,
                function(t, e) {
                    for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                        var i = n[r]
                          , o = Object.getOwnPropertyDescriptor(e, i);
                        o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                    }
                }(t, e))
            }(e, t),
            e.prototype.initialize = function(t) {
                this._connectionStatus = i.ConnectionStatus.NOTCONNECTED,
                this._socket = new r(t._messageHandler),
                this._socket.createServer(),
                this._client = t
            }
            ,
            e.prototype.connect = function(t, e) {
                this._socket.on("message", this._client._messageHandler.handleMessage),
                this._socket.connect(t, e)
            }
            ,
            e.prototype.sendMessageInSocket = function(t, e, n) {
                this._socket.send(t, e, n)
            }
            ,
            e.prototype.sendInputState = function(t, e, n) {
                this._socket.sendInputState(t, e, n)
            }
            ,
            e.prototype.reconnect = function(t, e) {
                this._socket.reconnect(t, e)
            }
            ,
            e.prototype.disconnect = function() {
                this._socket.disconnect()
            }
            ,
            e.prototype.getConnectionChannel = function() {
                return this._socket ? this._socket._TransportType : ""
            }
            ,
            e
        }(n(11));
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        var r = n(13)
          , i = n(329)
          , o = n(336)
          , s = n(7)
          , a = n(48)
          , c = function(t) {
            function e(n) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var r = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, t.call(this, n));
                return r.initialize(n),
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf,
                function(t, e) {
                    for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                        var i = n[r]
                          , o = Object.getOwnPropertyDescriptor(e, i);
                        o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                    }
                }(t, e))
            }(e, t),
            e.prototype.initialize = function(t) {
                this._transport = null,
                this._events = {},
                this._messageHandler = t,
                this._TransportType = "",
                this._pollInterval = 1500,
                this._partnerJid = null,
                this._conversationType = null,
                this._lastTimestamp = 0,
                this._currentUid = null
            }
            ,
            e.prototype.connect = function(t, e) {
                return this._transport && (a.publish(r.EventType.OnSocketStatusChange, [r.ConnectionStatus.CONNECTING]),
                this._transport._partnerJid = this._partnerJid,
                this._transport._conversationType = this._conversationType,
                this._transport.connectUser = this._currentUid,
                this.setCurrentTimestamp(this._lastTimestamp),
                this._transport.createTransport(t, e)),
                this
            }
            ,
            e.prototype.createServer = function() {
                if (null === this.getTransport(this.checkTransport()))
                    throw new Error("the channel was not supported")
            }
            ,
            e.prototype.getTransport = function(t) {
                return t == e.XHR_POLLING ? this._transport = o.getInstance(this) : t == e.WEBSOCKET && (this._transport = i.getInstance(this)),
                this._transport.setAuth(this._messageHandler._client._token),
                this._transport.setStatusListener(this._messageHandler._client._ConnectionStatusListener),
                this._transport
            }
            ,
            e.prototype.setHistoryTimestamp = function(t) {
                this._messageHandler.setHistoryTimestamp(t)
            }
            ,
            e.prototype.setClientLastTimestamp = function(t) {
                this._messageHandler.setClientLastTimestamp(t)
            }
            ,
            e.prototype.setCurrentTimestamp = function(t) {}
            ,
            e.prototype.getCurrentTimestamp = function() {
                if (this._transport)
                    switch (this._conversationType) {
                    case r.ConversationType.SingleChat:
                        return this._transport.chatLastTS;
                    case r.ConversationType.GroupChat:
                        return this._transport.groupLastTS;
                    default:
                        return 0
                    }
            }
            ,
            e.prototype.sendInputState = function(t, n, r) {
                this._transport && this.checkTransport() == e.WEBSOCKET && this._transport.sendInputState(t, n, r)
            }
            ,
            e.prototype.send = function(t, n, r) {
                this._transport && (this.checkTransport() == e.WEBSOCKET ? this._transport.sendInSocket(t, n, r) : this._transport.send(this._encode(t), n, r))
            }
            ,
            e.prototype.onMessage = function(t) {
                try {
                    this.fire("message", t, this._messageHandler)
                } catch (t) {
                    s.ubtTrace({
                        Action: "messageHandlerError",
                        Params: t
                    })
                }
            }
            ,
            e.prototype.disconnect = function() {
                return this._transport.disconnect(),
                a.publish(r.EventType.OnSocketStatusChange, [r.ConnectionStatus.DISCONNECTED]),
                this
            }
            ,
            e.prototype.reconnect = function(t, e) {
                this._transport.reconnect(t, e)
            }
            ,
            e.prototype.checkTransport = function() {
                return "WebSocket"in window || "MozWebSocket"in window ? this._TransportType = e.WEBSOCKET : this._TransportType = e.XHR_POLLING,
                (window.ActiveXObject || "ActiveXObject"in window) && (this._TransportType = e.XHR_POLLING),
                this._TransportType
            }
            ,
            e.prototype.fire = function(t, e, n) {
                var r = n || window;
                if (t in this._events)
                    for (var i = 0, o = this._events[t].length; i < o; i++)
                        this._events[t][i].call(r, e);
                return this
            }
            ,
            e.prototype.on = function(t, e) {
                if ("function" != typeof e || !t)
                    return this;
                if (t in this._events)
                    for (var n = 0, r = this._events[t].length; n < r; n++)
                        this._events[t][n] != e && this._events[t].push(e);
                else
                    this._events[t] = [e];
                return this
            }
            ,
            e.prototype.removeEvent = function(t, e) {
                if (t in this._events)
                    for (var n = 0, r = this._events[t].length; n < r; n++)
                        this._events[t][n] == e && this._events[t].splice(n, 1);
                return this
            }
            ,
            e
        }(n(11));
        c.XHR_POLLING = "xhr-polling",
        c.WEBSOCKET = "websocket",
        t.exports = c
    }
    , function(t, e, n) {
        "use strict";
        var r = n(11)
          , i = n(13)
          , o = n(7)
          , s = n(330)
          , a = n(66)
          , c = n(53)
          , u = a.getChatConversationMessages.getInstance()
          , l = a.getChatMessages.getInstance()
          , p = a.getGroupConversationMessages.getInstance()
          , h = a.getRecentMessages.getInstance()
          , f = a.getGroupMessages.getInstance()
          , d = a.getMyInfo.getInstance()
          , g = a.getImServer.getInstance()
          , m = a.checkHit.getInstance()
          , y = (s.$build,
        s.$msg)
          , v = s.$iq
          , b = (s.$pres,
        n(48))
          , _ = n(335)
          , T = 0;
        s = s.Strophe;
        var S = o.isDebug()
          , C = 0
          , w = ""
          , I = ""
          , M = !!c.dynamicSocketUrl
          , x = function(t) {
            function e(n) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var r = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, t.call(this, n));
                return r.initialize(n),
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf,
                function(t, e) {
                    for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                        var i = n[r]
                          , o = Object.getOwnPropertyDescriptor(e, i);
                        o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                    }
                }(t, e))
            }(e, t),
            e.prototype.initialize = function(t) {
                this.connected = !1,
                this.queue = [],
                this._socket = t,
                this.callbackChecker = _.getInstance(),
                this.normalClosed = !1,
                this.reconnectAttempts = 0,
                this._partnerJid = null,
                this._conversationType = i.ConversationType.ConversationList,
                this.lastTimestamp = 0,
                this.connectUser = null,
                this.sendPingTimeOut = 2e3,
                this.sendPingIntervalTime = 5e3,
                this._pollInterval = 1e4,
                this.chatLastTS = +new Date,
                this.groupLastTS = +new Date,
                this.allChatLastTS = +new Date,
                this.allGroupLastTS = +new Date,
                this.recentLastTS = +new Date,
                this.chatPollBack = !0,
                this.recentPollBack = !0,
                this.allChatPollBack = !0,
                this.groupPollBack = !0,
                this.allGroupPollBack = !0,
                this.allChatPollInterval = null,
                this.chatPollInterval = null,
                this.groupPollInterval = null,
                this.connectionStatusInterval = null,
                this.allGroupChatPollResult = null,
                this.allSinglChatPollResult = null,
                this.authInvalid = !1,
                this.loopOptimize = !1,
                this.isLoopChecked = !1
            }
            ,
            e.prototype.checkLoopState = function() {
                var t = this;
                m.param = {},
                m.excute(function(e) {
                    t.isLoopChecked = !0,
                    e && e.hit ? t.loopOptimize = !0 : t.loopOptimize = !1
                }, function(t) {}, !0, this)
            }
            ,
            e.prototype.createTransport = function(t, e) {
                o.ubtTrace({
                    key: "o_im_online_sdk_socket_init",
                    Action: "createTransport"
                }),
                o.ubtMetric({
                    value: 1,
                    action: "createTransport",
                    result: "ok"
                });
                try {
                    if (!("WebSocket"in window || "MozWebSocket"in window))
                        throw new Error("initConnection: this browser does not support websockets.");
                    this.doConnect(t, e)
                } catch (t) {
                    S && console.log(t),
                    e && o.isFunction(e) && e(t)
                }
                return this.receivedMessageListener(),
                !this.isLoopChecked && this.checkLoopState(),
                this
            }
            ,
            e.prototype.doConnect = function(t, e) {
                var n = this;
                n.authInvalid = !1;
                var r = function(r) {
                    n.connectUser = r,
                    o._myuid = r,
                    n.buildWebSocketUrl(r, function(r) {
                        n.connection = new s.Connection(r),
                        n.addHandler();
                        var i = o.uidToJid(n.connectUser);
                        o.ubtTrace({
                            Action: "doConnect",
                            Params: r + " " + i
                        }),
                        n.connection.connect(i, o.getAuth() || "", function(r, i) {
                            o.ubtTrace({
                                key: "o_im_online_sdk_socket_connected",
                                Action: "onConnect",
                                Status: n.getStatusMessage(r),
                                Condition: i
                            }),
                            n.onConnect(r, t, e)
                        })
                    })
                };
                try {
                    n.connectUser ? r(n.connectUser) : n.getMyInfo(function(t) {
                        t.ResponseStatus && "Success" == t.ResponseStatus.Ack ? r(t.userinfo.uid) : e && o.isFunction(e) && e(t)
                    }, function(t) {
                        n.isdebug && console.log(t),
                        e && o.isFunction(e) && e(t)
                    })
                } catch (t) {
                    S && console.log(t),
                    e && o.isFunction(e) && e(t),
                    o.ubtTrace({
                        Action: "doConnect",
                        Result: t.toString()
                    })
                }
            }
            ,
            e.prototype.getStatusMessage = function(t) {
                var e = "";
                switch (t) {
                case 0:
                    e = "ERROR";
                    break;
                case 1:
                    e = "CONNECTING";
                    break;
                case 2:
                    e = "CONNFAIL";
                    break;
                case 3:
                    e = "AUTHENTICATING";
                    break;
                case 4:
                    e = "AUTHFAIL";
                    break;
                case 5:
                    e = "CONNECTED";
                    break;
                case 6:
                    e = "DISCONNECTED";
                    break;
                case 7:
                    e = "DISCONNECTING";
                    break;
                case 8:
                    e = "ATTACHED";
                    break;
                case 9:
                    e = "REDIRECT";
                    break;
                case 10:
                    e = "CONNTIMEOUT"
                }
                return e
            }
            ,
            e.prototype.addHandler = function() {
                this.connection && (this.connection.addHandler(this.onMessage.bind(this), null, "message", null),
                this.connection.addHandler(this.onErrorMessage.bind(this), null, "message", "error"),
                this.connection.addHandler(this.onErrorHandler.bind(this), null, "error", null),
                this.connection.addHandler(this.presenceHandler.bind(this), null, "presence", null),
                this.connection.addHandler(this.closeHandler.bind(this), null, "close", null),
                this.connection.addHandler(this.onPing.bind(this), "urn:xmpp:ping", "iq", "get"))
            }
            ,
            e.prototype.onPing = function(t) {
                try {
                    var e = t.id
                      , n = v({
                        from: o.uidToJid(this.connectUser),
                        to: o.getWebSocketServiceName(),
                        id: e,
                        type: "result"
                    });
                    this.connection.sendIQ(n, function(t) {
                        S && console.log("received sendPong result:"),
                        S && console.log(t)
                    }, function(t) {
                        S && console.error(t),
                        t && o.ubtTrace({
                            Action: "sendPong",
                            Result: t.toString()
                        })
                    }, this.sendPingTimeOut)
                } catch (t) {
                    t && o.ubtTrace({
                        Action: "sendPong",
                        Result: t.toString()
                    })
                }
                return !0
            }
            ,
            e.prototype.onConnect = function(t, e, n) {
                t === s.Status.CONNECTING ? (S && console.log("websocket is connecting."),
                b.publish(i.EventType.OnSocketStatusChange, [i.ConnectionStatus.CONNECTING])) : t === s.Status.CONNFAIL ? (this.connected = !1,
                S && console.log("websocket failed to connect."),
                o.ubtMetric({
                    value: 1,
                    action: "connfail",
                    result: "ok"
                })) : t === s.Status.DISCONNECTING ? S && console.log("websocket is disconnecting.") : t === s.Status.DISCONNECTED ? (o.ubtMetric({
                    value: 1,
                    action: "disconnected",
                    result: "ok"
                }),
                b.publish(i.EventType.OnSocketStatusChange, [i.ConnectionStatus.DISCONNECTED]),
                this.connected = !1,
                S && console.log("websocket is disconnected."),
                this.authInvalid || (this.compensation(),
                !this.keepAliveConnectInterval && this.keepAliveConnect("disconnected")),
                n && o.isFunction(n) && n(),
                0 == T && b.publish("signalEvent", [i.SignalType.SocketConnect, {
                    result: 0
                }]),
                T++) : t === s.Status.CONNECTED ? (T = 0,
                o.ubtMetric({
                    value: 1,
                    action: "connected",
                    result: "ok"
                }),
                this.connected = !0,
                this.connectedTime = (new Date).getTime(),
                this.normalClosed = !1,
                b.publish(i.EventType.OnSocketStatusChange, [i.ConnectionStatus.CONNECTED]),
                e && o.isFunction(e) && e(),
                this.compensation(!0),
                this.sendPing(),
                this.reconnectAttempts = 0,
                this.clearChatInterval(),
                this.connectionListener(),
                b.publish("signalEvent", [i.SignalType.SocketConnect, {
                    result: 1
                }]),
                clearInterval(this.keepAliveConnectInterval),
                this.keepAliveConnectInterval = null) : t === s.Status.AUTHFAIL && (this.clearChatInterval(),
                b.publish(i.EventType.OnSocketStatusChange, [i.ConnectionStatus.CURRENT_WS_AUTH_FAIL]),
                this.connectionStatusInterval && clearInterval(this.connectionStatusInterval),
                this.keepAliveConnectInterval && clearInterval(this.keepAliveConnectInterval),
                this.connectionStatusInterval = null,
                this.authInvalid = !0,
                this.sendPingInterval && clearInterval(this.sendPingInterval),
                o.ubtTrace({
                    key: "o_im_online_sdk_errauth",
                    Action: "errauth",
                    Result: "socket errauth",
                    Status: "error",
                    Network: o.network.value
                }))
            }
            ,
            e.prototype.clearChatInterval = function() {
                this.allChatPollInterval && clearInterval(this.allChatPollInterval),
                this.chatPollInterval && clearInterval(this.chatPollInterval),
                this.groupPollInterval && clearInterval(this.groupPollInterval),
                this.allChatPollInterval = null,
                this.chatPollInterval = null,
                this.groupPollInterval = null
            }
            ,
            e.prototype.send = function(t) {
                var e = this.createMessage(t);
                try {
                    this.connection.send(e)
                } catch (t) {
                    this.debug && console.log(t)
                }
            }
            ,
            e.prototype.uuid = function() {
                for (var t = [], e = 0; e < 36; e++)
                    t[e] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
                return t[14] = "4",
                t[19] = "0123456789abcdef".substr(3 & t[19] | 8, 1),
                t[8] = t[13] = t[18] = t[23] = "-",
                t.join("")
            }
            ,
            e.prototype.createMessage = function(t) {
                var e = JSON.stringify(t.messageBody)
                  , n = JSON.parse(e)
                  , r = JSON.stringify(n);
                return y({
                    from: t.fromJid,
                    to: t.toJid,
                    type: "send",
                    id: this.uuid()
                }).c("body").t(r).up()
            }
            ,
            e.prototype.sendInputState = function(t, e, n) {
                try {
                    var r = JSON.stringify(t.messageBody)
                      , i = y({
                        from: t.fromJid,
                        to: t.toJid,
                        type: "input_state",
                        id: this.uuid(),
                        isGroup: t.isGroup || 0
                    }).c("body").t(r).up();
                    this.connection.send(i),
                    e && e()
                } catch (t) {
                    this.debug && console.log(t),
                    n && n(t)
                }
            }
            ,
            e.prototype.sendInSocket = function(t, e, n) {
                try {
                    var r = t.messageBody
                      , o = r.localId || this.uuid()
                      , s = {
                        chattype: r.type || i.ConversationType.SingleChat,
                        biztype: r.bizType + "",
                        localid: r.localId,
                        msg: r.messageBody,
                        msgtype: r.msgType + "",
                        autoextend: 0,
                        threadid: r.threadId || ""
                    }
                      , a = y({
                        from: t.fromJid,
                        to: t.toJid,
                        type: "send",
                        id: o
                    }).c("body").t(JSON.stringify(s)).up();
                    this.callbackChecker.addCallback(o, e, n),
                    this.connection && this.connection.connected ? this.connection.send(a) : this.callbackChecker.triggerError(o, {
                        error: -1,
                        errormsg: "socket did not connected"
                    })
                } catch (t) {
                    this.callbackChecker.triggerError(o, {
                        error: -1,
                        errormsg: "unexpect error"
                    }),
                    this.debug && console.log(t)
                }
            }
            ,
            e.prototype.sendMessageCallback = function(t) {
                for (var e = "", n = t.getAttribute("id"), r = 0; r < t.childElementCount; r++) {
                    var i = t.childNodes[r];
                    if ("body" == i.nodeName) {
                        e = i.textContent;
                        break
                    }
                }
                try {
                    e = JSON.parse(e)
                } catch (t) {}
                0 == e.error || "repeat_msg" == e.reason ? (e.ResponseStatus = {},
                e.ResponseStatus.Ack = "success",
                e.localId = e.localid,
                e.createTime = e.create_time,
                e.msgCreateTime = e.create_time,
                e.messageId = e.tid,
                e.msgId = e.tid,
                this.callbackChecker.triggerCallback(n, e)) : this.callbackChecker.triggerError(n, e)
            }
            ,
            e.prototype.onMessage = function(t) {
                return "send_result" == ("function" == typeof t.getAttribute && t.getAttribute("type")) ? (this.sendMessageCallback(t),
                !0) : (this._socket.onMessage({
                    errorcode: 0,
                    messages: t
                }),
                !0)
            }
            ,
            e.prototype.receivedMessageListener = function() {
                var t = this;
                this.receivedMessageInterval && clearInterval(this.receivedMessageInterval),
                this.receivedMessageInterval = setInterval(function() {
                    t.compensation(!0)
                }, 6e4)
            }
            ,
            e.prototype.onErrorMessage = function(t) {
                try {
                    o.ubtTrace({
                        Action: "onErrorMessage",
                        Params: t.outerHTML
                    })
                } catch (t) {}
            }
            ,
            e.prototype.onErrorHandler = function(t) {
                for (var e = t, n = null, r = 0; r < e.childElementCount; r++) {
                    var s = e.children[r];
                    if ("text" == s.nodeName) {
                        n = s.innerHTML;
                        break
                    }
                }
                n && "Replaced by new connection" == n && (S && console.error(),
                this.normalClosed = !0,
                this.connected = !1,
                this._socket.fire("StatusChanged", i.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT));
                try {
                    o.ubtTrace({
                        Action: "onErrorHandler",
                        Params: t.outerHTML
                    })
                } catch (t) {}
            }
            ,
            e.prototype.presenceHandler = function(t) {
                try {
                    o.ubtTrace({
                        Action: "presenceHandler",
                        Params: t.outerHTML
                    })
                } catch (t) {}
                return !0
            }
            ,
            e.prototype.closeHandler = function(t) {
                this.connected = !1,
                o.ubtTrace({
                    Action: "closeHandler",
                    NormalClosed: this.normalClosed
                }),
                this.connection && this.connection.disconnect(),
                this.connection = null,
                this.clearChatInterval(),
                this.connectionStatusInterval && clearInterval(this.connectionStatusInterval),
                this.connectionStatusInterval = null,
                this.sendPingInterval && clearInterval(this.sendPingInterval),
                this.sendPingInterval = null,
                this.normalClosed || this.keepAliveConnect("closeHandler"),
                this.debug && console.log("连接被关闭"),
                this._socket.fire("StatusChanged", i.ConnectionStatus.CLOSE)
            }
            ,
            e.prototype.doClose = function() {
                this.connected = !1,
                this.normalClosed = !0,
                this.connection && this.connection.disconnect(),
                this.connection = null,
                this.clearChatInterval(),
                this.connectionStatusInterval && clearInterval(this.connectionStatusInterval),
                this.connectionStatusInterval = null,
                this.sendPingInterval && clearInterval(this.sendPingInterval),
                this.sendPingInterval = null
            }
            ,
            e.prototype.disconnect = function() {
                o.ubtTrace({
                    Action: "disconnect",
                    Connected: this.connection && this.connection.connected
                }),
                this.doClose()
            }
            ,
            e.prototype.reconnect = function(t, e, n) {
                !n && this.connection && this.connection.connected && this.connected || (o.ubtTrace({
                    key: "o_im_online_sdk_reconnect",
                    Action: "reconnect",
                    Connected: this.connection && this.connection.connected
                }),
                this.connection && this.connection.disconnect(),
                this.compensation(),
                this.createTransport(t, e))
            }
            ,
            e.prototype.keepAliveConnect = function(t) {
                var e = this;
                o.ubtTrace({
                    key: "o_im_online_sdk_keepaliveconnect",
                    Action: "keepAliveConnect " + t,
                    NormalClosed: e.normalClosed,
                    Connected: e.connection && e.connection.connected
                }),
                e.normalClosed || e.keepAliveConnectInterval || (e.keepAliveConnectInterval = setInterval(function n() {
                    clearInterval(e.keepAliveConnectInterval),
                    e.reconnect(),
                    e.keepAliveConnectInterval = setInterval(n, e.timeDelay())
                }, e.timeDelay()))
            }
            ,
            e.prototype.sendPing = function() {
                var t = this;
                t.sendPingInterval || (t.sendPingInterval = setInterval(function() {
                    var e = +new Date
                      , n = v({
                        from: o.uidToJid(t.connectUser),
                        to: o.getWebSocketServiceName(),
                        id: e,
                        type: "get"
                    }).c("ping", {
                        xmlns: "urn:xmpp:ping"
                    });
                    try {
                        if (C >= 3)
                            return C = 0,
                            t.connected = !1,
                            void t.keepAliveConnect("pingCount>3");
                        C++,
                        t.connection.sendIQ(n, function(t) {
                            S && console.log("received ping result:"),
                            S && console.log(t),
                            t && C > 0 && C--
                        }, function(e) {
                            S && console.info("sendPingError", e),
                            o.ubtTrace({
                                key: "o_im_online_sdk_ping",
                                Action: "sendPing",
                                Result: "fail"
                            }),
                            t.connected = !1,
                            t.keepAliveConnect("sendPingError"),
                            C = 0
                        }, t.sendPingTimeOut)
                    } catch (e) {
                        S && console.info("sendPingError", e),
                        o.ubtTrace({
                            key: "o_im_online_sdk_ping",
                            Action: "sendPing",
                            Result: "fail"
                        }),
                        t.connected = !1,
                        t.keepAliveConnect("sendPingError"),
                        C = 0
                    }
                }, t.sendPingIntervalTime))
            }
            ,
            e.prototype.buildWebSocketUrl = function(t, e) {
                var n = "http:" == window.location.protocol && (4 != o.getEnvCode() || o.network.forceSetting && "internal" == o.network.value && 4 == o.getEnvCode())
                  , r = n ? "ws://" : "wss://";
                if (o.isInIBUSite() && 4 == o.getEnvCode())
                    e(i = r + "im.trip.com/ws-xmpp/");
                else {
                    var i = r + o.getWebSocketHost() + o.getWebSocketPort(n ? "http" : "https") + "/ws-xmpp/";
                    if (M) {
                        var s = o.md5Format(t.toLocaleLowerCase())
                          , a = "internal" == o.network.value ? w : I;
                        a ? e(a) : (g.param = {
                            shardingId: s || ""
                        },
                        g.excute(function(t) {
                            if (t.responseStatus && "success" == t.responseStatus.Ack.toLocaleLowerCase() && t.serverList) {
                                for (var s = t.serverList || [], c = n ? "httpPort" : "httpsPort", u = 0; u < s.length; u++) {
                                    var l = s[u][c] ? ":" + s[u][c] : "";
                                    s[u].serverVersion && o.setIMVersion(s[u].serverVersion),
                                    s[u].inner ? w = r + s[u].host + l + "/ws-xmpp/" : I = r + s[u].host + l + "/ws-xmpp/"
                                }
                                a = "internal" == o.network.value ? w : I,
                                e(a || i),
                                o.setSocketUrl(a)
                            }
                        }, function(t) {
                            e(i)
                        }, !0, this))
                    } else
                        e(i)
                }
            }
            ,
            e.prototype.timeDelay = function() {
                this.reconnectAttempts++;
                var t = 2e4;
                return this.reconnectAttempts > 30 ? t *= 3 : this.reconnectAttempts > 60 && (t = 2 * t * 5),
                this.randomNumber(.8, 1.2) * t
            }
            ,
            e.prototype.randomNumber = function(t, e) {
                return Math.random() * (e - t) + t
            }
            ,
            e.prototype.compensation = function(t) {
                var e = this;
                switch (t || o.ubtTrace({
                    Action: "compensation " + t,
                    NormalClosed: e.normalClosed,
                    Connected: e.connection && e.connection.connected
                }),
                e._conversationType) {
                case i.ConversationType.ConversationList:
                    t ? e.allChatPollInterval || e.getRecentMessage() : e.allChatPollInterval || (e.allChatPollInterval = setInterval(function() {
                        e.getRecentMessage()
                    }, this._pollInterval),
                    e.getRecentMessage());
                    break;
                case i.ConversationType.SingleChat:
                    t ? e.chatPollInterval || e.getChatMessage() : e.chatPollInterval || (e.chatPollInterval = setInterval(function() {
                        e.getChatMessage()
                    }, this._pollInterval),
                    e.getChatMessage());
                    break;
                case i.ConversationType.GroupChat:
                    t ? e.groupPollInterval || e.getGroupChatMessage() : e.groupPollInterval || (e.groupPollInterval = setInterval(function() {
                        e.getGroupChatMessage()
                    }, this._pollInterval),
                    e.getGroupChatMessage())
                }
            }
            ,
            e.prototype.getCompensationFlag = function(t) {
                if (!this.loopOptimize)
                    return {
                        doCompensation: !0,
                        startTime: t
                    };
                if (!this.connected || !this.connectedTime || (new Date).getTime() - this.connectedTime < 3e5) {
                    var e = t;
                    return this.allSinglChatPollResult && (e = Math.max((new Date).getTime() - 12e4, t)),
                    {
                        doCompensation: !0,
                        startTime: e
                    }
                }
                return {
                    doCompensation: !1
                }
            }
            ,
            e.prototype.getChatMessage = function() {
                var t = this;
                u.param = {
                    partnerJid: t._partnerJid,
                    direction: "next",
                    beginMsgTime: t.chatLastTS,
                    pageSize: 100
                },
                t.chatPollBack && t.chatLastTS > 0 && (t.chatPollBack = !1,
                u.excute(function(e) {
                    e.conversationType = i.ConversationType.SingleChat,
                    t.onData(e, "chat"),
                    e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase() && e.messages && o.isArray(e.messages) && e.messages.length >= 100 ? (t.chatPollBack = !0,
                    t.getChatMessage()) : t.chatPollBack = !0
                }, function(e) {
                    t.chatPollBack = !0
                }, !0, this))
            }
            ,
            e.prototype.getAllChatMessage = function() {
                var t = this;
                l.param = {
                    direction: "next",
                    beginMsgTime: t.allChatLastTS,
                    pageSize: 100
                },
                t.allChatPollBack && t.allChatLastTS > 0 && (t.allChatPollBack = !1,
                l.excute(function(e) {
                    e.conversationType = i.ConversationType.SingleChat,
                    t.onData(e, "allChat"),
                    !0 !== t.allSinglChatPollResult && (b.publish("signalEvent", [i.SignalType.ChatMessageCompensate, {
                        result: 1
                    }]),
                    t.allSinglChatPollResult = !0),
                    e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase() && e.messages && o.isArray(e.messages) && e.messages.length >= 100 ? (t.allChatPollBack = !0,
                    t.getAllChatMessage()) : t.allChatPollBack = !0
                }, function(e) {
                    t.allChatPollBack = !0,
                    !1 !== t.allSinglChatPollResult && (b.publish("signalEvent", [i.SignalType.ChatMessageCompensate, {
                        result: 0
                    }]),
                    t.allSinglChatPollResult = !1)
                }, !0, this))
            }
            ,
            e.prototype.getRecentMessage = function() {
                var t = this
                  , e = this.getCompensationFlag(this.recentLastTS);
                e && !e.doCompensation || (h.param = {
                    beginMsgTime: e.startTime || this.recentLastTS,
                    pageSize: 100
                },
                t.recentPollBack && t.recentLastTS > 0 && (t.recentPollBack = !1,
                h.excute(function(e) {
                    if (t.recentPollBack = !0,
                    e.messages = e.messages || [],
                    e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase() && e.messages && o.isArray(e.messages)) {
                        t.allSinglChatPollResult || (b.publish("signalEvent", [i.SignalType.ChatMessageCompensate, {
                            result: 1
                        }]),
                        t.allSinglChatPollResult = !0);
                        for (var n = [], r = [], s = 0; s < e.messages.length; s++)
                            "chat" == e.messages[s].type ? n.push(e.messages[s]) : "groupchat" == e.messages[s].type && r.push(e.messages[s]);
                        t.recentLastTS = e.lastMessageTimestamp,
                        n.length > 0 && t._socket.onMessage({
                            errorcode: 0,
                            messages: n,
                            conversationType: i.ConversationType.SingleChat,
                            pollType: "allChat",
                            lastMessageTimestamp: e.lastMessageTimestamp,
                            localIds: e.localIds
                        }),
                        r.length > 0 && t._socket.onMessage({
                            errorcode: 0,
                            messages: r,
                            conversationType: i.ConversationType.GroupChat,
                            pollType: "allChat",
                            lastMessageTimestamp: e.lastMessageTimestamp,
                            localIds: e.localIds
                        })
                    }
                }, function(e) {
                    t.recentPollBack = !0,
                    t.allSinglChatPollResult && (b.publish("signalEvent", [i.SignalType.ChatMessageCompensate, {
                        result: 0
                    }]),
                    t.allSinglChatPollResult = !1)
                }, !0, this)))
            }
            ,
            e.prototype.getGroupChatMessage = function() {
                var t = this;
                p.param = {
                    partnerJid: t._partnerJid,
                    direction: "next",
                    beginMsgTime: t.groupLastTS,
                    pageSize: 100,
                    attachSenderSummary: !0
                },
                t.groupPollBack && t.groupLastTS > 0 && (t.groupPollBack = !1,
                p.excute(function(e) {
                    e.conversationType = i.ConversationType.GroupChat,
                    t.onData(e, "group"),
                    e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase() && e.messages && o.isArray(e.messages) && e.messages.length >= 100 ? (t.groupPollBack = !0,
                    t.getGroupChatMessage()) : t.groupPollBack = !0
                }, function(e) {
                    t.groupPollBack = !0
                }, !0, this))
            }
            ,
            e.prototype.getAllGroupChatMessage = function(t, e) {
                var n = this;
                f.param = {
                    direction: "next",
                    beginMsgTime: n.allGroupLastTS,
                    pageSize: 100
                },
                n.allGroupPollBack && n.allGroupLastTS > 0 && (n.allGroupPollBack = !1,
                f.excute(function(t) {
                    t.conversationType = i.ConversationType.GroupChat,
                    n.onData(t, "allGroup"),
                    !0 !== this.allGroupChatPollResult && (b.publish("signalEvent", [i.SignalType.GroupMessageCompensate, {
                        result: 1
                    }]),
                    this.allGroupChatPollResult = !0),
                    t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase() && t.messages && o.isArray(t.messages) && t.messages.length >= 100 ? (n.allGroupPollBack = !0,
                    n.getAllGroupChatMessage()) : n.allGroupPollBack = !0
                }, function(t) {
                    n.allGroupPollBack = !0,
                    !1 !== this.allGroupChatPollResult && (b.publish("signalEvent", [i.SignalType.GroupMessageCompensate, {
                        result: 0
                    }]),
                    this.allGroupChatPollResult = !1)
                }, !0, this))
            }
            ,
            e.prototype.onData = function(t, e) {
                if (t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase()) {
                    if (0 != t.lastMessageTimestamp) {
                        switch (e) {
                        case "chat":
                            this.chatLastTS = t.lastMessageTimestamp;
                            break;
                        case "allChat":
                            this.allChatLastTS = t.lastMessageTimestamp;
                            break;
                        case "group":
                            this.groupLastTS = t.lastMessageTimestamp;
                            break;
                        case "allGroup":
                            this.allGroupLastTS = t.lastMessageTimestamp
                        }
                        t.messages && o.isArray(t.messages) && t.messages.length > 0 && this._socket.onMessage({
                            errorcode: 0,
                            messages: t.messages,
                            conversationType: t.conversationType,
                            pollType: e,
                            lastMessageTimestamp: t.lastMessageTimestamp,
                            localIds: t.localIds
                        })
                    }
                } else
                    this._socket.onMessage({
                        errorcode: t && t.ResponseStatus && t.ResponseStatus.Errors && t.ResponseStatus.Errors[0].ErrorCode ? t.ResponseStatus.Errors[0].ErrorCode : 500,
                        messages: []
                    })
            }
            ,
            e.prototype.setAuth = function(t) {
                a.setAuth(t)
            }
            ,
            e.prototype.setStatusListener = function(t) {
                a.setStatusListener(t)
            }
            ,
            e.prototype.getMyInfo = function(t, e) {
                d.excute(function(e) {
                    if (e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase()) {
                        var n = {};
                        n.ResponseStatus = e.ResponseStatus,
                        n.userinfo = {
                            name: e.name,
                            avatar: e.avatar,
                            uid: e.jid,
                            jid: e.jid,
                            extPropertys: e.extPropertys
                        },
                        t && o.isFunction(t) && t(n)
                    } else
                        t && o.isFunction(t) && t(e)
                }, function(t) {
                    e && o.isFunction(e) && e(t)
                }, !0, this)
            }
            ,
            e.prototype.connectionListener = function() {
                var t = this;
                t.connectionStatusInterval || (t.connectionStatusInterval = setInterval(function() {
                    t.normalClosed || t.connection && t.connection.connected && t.connected || (o.ubtTrace({
                        Action: "connectionListener",
                        NormalClosed: t.normalClosed,
                        Connected: t.connection && t.connection.connected
                    }),
                    t.keepAliveConnect("connectionListener"))
                }, t.sendPingIntervalTime))
            }
            ,
            e.prototype.forceReconnectListener = function() {
                var t = this;
                t.connectionStatusInterval || (t.connectionStatusInterval = setInterval(function() {
                    o.ubtTrace({
                        Action: "forceReconnectListener",
                        NormalClosed: t.normalClosed,
                        Connected: t.connection && t.connection.connected
                    }),
                    t.authInvalid || t.reconnect({}, {}, !0)
                }, 6e5 * t.getRndInteger(2, 3)))
            }
            ,
            e.prototype.getRndInteger = function(t, e) {
                return Math.floor(Math.random() * (e - t + 1)) + t
            }
            ,
            e
        }(r);
        t.exports = x
    }
    , function(t, e, n) {
        "use strict";
        var r = n(130);
        n(332),
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , i = {
            utf16to8: function(t) {
                var e, n, r = "", i = t.length;
                for (e = 0; e < i; e++)
                    (n = t.charCodeAt(e)) >= 0 && n <= 127 ? r += t.charAt(e) : n > 2047 ? (r += String.fromCharCode(224 | n >> 12 & 15),
                    r += String.fromCharCode(128 | n >> 6 & 63),
                    r += String.fromCharCode(128 | n >> 0 & 63)) : (r += String.fromCharCode(192 | n >> 6 & 31),
                    r += String.fromCharCode(128 | n >> 0 & 63));
                return r
            },
            addCookies: function(t) {
                var e, n, i, o, s, a, c;
                for (e in t || {})
                    s = "",
                    a = "",
                    c = "",
                    i = "object" === (void 0 === (n = t[e]) ? "undefined" : r(n)),
                    o = escape(unescape(i ? n.value : n)),
                    i && (s = n.expires ? ";expires=" + n.expires : "",
                    a = n.domain ? ";domain=" + n.domain : "",
                    c = n.path ? ";path=" + n.path : ""),
                    document.cookie = e + "=" + o + s + a + c
            }
        };
        t.exports = i
    }
    , function(t, e, n) {
        "use strict";
        var r = n(130)
          , i = n(7)
          , o = r.Strophe
          , s = r.$build;
        o.Websocket = function(t) {
            this._conn = t,
            this.strip = "wrapper";
            var e = t.service;
            if (0 !== e.indexOf("ws:") && 0 !== e.indexOf("wss:")) {
                var n = "";
                "ws" === t.options.protocol && "https:" !== window.location.protocol ? n += "ws" : n += "wss",
                n += "://" + window.location.host,
                0 !== e.indexOf("/") ? n += window.location.pathname + e : n += e,
                t.service = n
            }
        }
        ,
        o.Websocket.prototype = {
            _buildStream: function() {
                return s("open", {
                    xmlns: o.NS.FRAMING,
                    to: this._conn.domain,
                    version: "1.0"
                })
            },
            _check_streamerror: function(t, e) {
                var n;
                if (0 === (n = t.getElementsByTagNameNS ? t.getElementsByTagNameNS(o.NS.STREAM, "error") : t.getElementsByTagName("stream:error")).length)
                    return !1;
                for (var r = n[0], i = "", s = "", a = 0; a < r.childNodes.length; a++) {
                    var c = r.childNodes[a];
                    if ("urn:ietf:params:xml:ns:xmpp-streams" !== c.getAttribute("xmlns"))
                        break;
                    "text" === c.nodeName ? s = c.textContent : i = c.nodeName
                }
                var u = "WebSocket stream error: ";
                return u += i || "unknown",
                s && (u += " - " + s),
                o.error(u),
                this._conn._changeConnectStatus(e, i),
                this._conn._doDisconnect(),
                !0
            },
            _reset: function() {},
            _connect: function() {
                this._closeSocket(),
                this.socket = new WebSocket(this._conn.service,"xmpp"),
                this.socket.onopen = this._onOpen.bind(this),
                this.socket.onerror = this._onError.bind(this),
                this.socket.onclose = this._onClose.bind(this),
                this.socket.onmessage = this._connect_cb_wrapper.bind(this)
            },
            _connect_cb: function(t) {
                if (this._check_streamerror(t, o.Status.CONNFAIL))
                    return o.Status.CONNFAIL
            },
            _handleStreamStart: function(t) {
                var e = !1
                  , n = t.getAttribute("xmlns");
                "string" != typeof n ? e = "Missing xmlns in <open />" : n !== o.NS.FRAMING && (e = "Wrong xmlns in <open />: " + n);
                var r = t.getAttribute("version");
                return "string" != typeof r ? e = "Missing version in <open />" : "1.0" !== r && (e = "Wrong version in <open />: " + r),
                !e || (this._conn._changeConnectStatus(o.Status.CONNFAIL, e),
                this._conn._doDisconnect(),
                !1)
            },
            _connect_cb_wrapper: function(t) {
                if (0 === t.data.indexOf("<open ") || 0 === t.data.indexOf("<?xml")) {
                    var e = t.data.replace(/^(<\?.*?\?>\s*)*/, "");
                    if ("" === e)
                        return;
                    var n = (new DOMParser).parseFromString(e, "text/xml").documentElement;
                    this._conn.xmlInput(n),
                    this._conn.rawInput(t.data),
                    this._handleStreamStart(n) && this._connect_cb(n)
                } else if (0 === t.data.indexOf("<close ")) {
                    this._conn.rawInput(t.data),
                    this._conn.xmlInput(t);
                    var r = t.getAttribute("see-other-uri");
                    r ? (this._conn._changeConnectStatus(o.Status.REDIRECT, "Received see-other-uri, resetting connection"),
                    this._conn.reset(),
                    this._conn.service = r,
                    this._connect()) : (this._conn._changeConnectStatus(o.Status.CONNFAIL, "Received closing stream"),
                    this._conn._doDisconnect())
                } else {
                    if (t.data && 0 === t.data.search("<message") && !/(type=['"]input_state['"])|(type=['"]result['"])/.test(t.data)) {
                        var s = {
                            key: "o_im_online_sdk_xmpp",
                            Action: "xmpp_log_0",
                            Result: t.data
                        };
                        i.ubtTrace(s, !0)
                    }
                    var a = this._streamWrap(t.data)
                      , c = (new DOMParser).parseFromString(a, "text/xml").documentElement;
                    this.socket.onmessage = this._onMessage.bind(this),
                    this._conn._connect_cb(c, null, t.data)
                }
            },
            _disconnect: function(t) {
                if (this.socket && this.socket.readyState !== WebSocket.CLOSED) {
                    t && this._conn.send(t);
                    var e = s("close", {
                        xmlns: o.NS.FRAMING
                    });
                    this._conn.xmlOutput(e.tree());
                    var n = o.serialize(e);
                    this._conn.rawOutput(n);
                    try {
                        this.socket.send(n)
                    } catch (t) {
                        o.info("Couldn't send <close /> tag.")
                    }
                }
                this._conn._doDisconnect()
            },
            _doDisconnect: function() {
                o.info("WebSockets _doDisconnect was called"),
                this._closeSocket()
            },
            _streamWrap: function(t) {
                return "<wrapper>" + t + "</wrapper>"
            },
            _closeSocket: function() {
                if (this.socket)
                    try {
                        this.socket.onerror = null,
                        this.socket.close()
                    } catch (t) {}
                this.socket = null
            },
            _emptyQueue: function() {
                return !0
            },
            _onClose: function(t) {
                this._conn.connected && !this._conn.disconnecting ? (o.error("Websocket closed unexpectedly"),
                this._conn._doDisconnect()) : t && 1006 === t.code && !this._conn.connected && this.socket ? (o.error("Websocket closed unexcectedly"),
                this._conn._changeConnectStatus(o.Status.CONNFAIL, "The WebSocket connection could not be established or was disconnected."),
                this._conn._doDisconnect()) : o.info("Websocket closed")
            },
            _onDisconnectTimeout: function() {},
            _abortAllRequests: function() {},
            _onError: function(t) {
                o.error("Websocket error " + t),
                this._conn._changeConnectStatus(o.Status.CONNFAIL, "The WebSocket connection could not be established or was disconnected."),
                this._disconnect()
            },
            _onIdle: function() {
                var t = this._conn._data;
                if (t.length > 0 && !this._conn.paused) {
                    for (var e = 0; e < t.length; e++) {
                        var n, r;
                        null !== t[e] && (n = "restart" === t[e] ? this._buildStream().tree() : t[e],
                        r = o.serialize(n),
                        this._conn.xmlOutput(n),
                        this._conn.rawOutput(r),
                        this.socket.send(r))
                    }
                    this._conn._data = []
                }
            },
            _onMessage: function(t) {
                var e, n, r = '<close xmlns="urn:ietf:params:xml:ns:xmpp-framing" />';
                if (t.data === r)
                    return this._conn.rawInput(r),
                    this._conn.xmlInput(t),
                    void (this._conn.disconnecting || this._conn._doDisconnect());
                if (0 === t.data.search("<open ")) {
                    if (e = (new DOMParser).parseFromString(t.data, "text/xml").documentElement,
                    !this._handleStreamStart(e))
                        return
                } else {
                    if (t.data && 0 === t.data.search("<message") && !/(type=['"]input_state['"])|(type=['"]result['"])/.test(t.data)) {
                        var s = {
                            key: "o_im_online_sdk_xmpp",
                            Action: "xmpp_log_1",
                            Result: t.data
                        };
                        i.ubtTrace(s, !0)
                    }
                    n = (n = (n = this._streamWrap(t.data)).replace(/[\u0001-\u0009]/g, "")).replace(/[\u000E-\u001F]/g, ""),
                    e = (new DOMParser).parseFromString(n, "text/xml").documentElement
                }
                if (this._conn.disconnecting && "presence" === e.firstChild.nodeName && "unavailable" === e.firstChild.getAttribute("type"))
                    return this._conn.xmlInput(e),
                    void this._conn.rawInput(o.serialize(e));
                this._conn._dataRecv(e, t.data)
            },
            _onOpen: function() {
                o.info("Websocket open");
                var t = this._buildStream();
                this._conn.xmlOutput(t.tree());
                var e = o.serialize(t);
                this._conn.rawOutput(e),
                this.socket.send(e)
            },
            _reqToData: function(t) {
                return t
            },
            _send: function() {
                this._conn.flush()
            },
            _sendRestart: function() {
                clearTimeout(this._conn._idleTimeout),
                this._conn._onIdle.bind(this._conn)()
            }
        },
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        var r = n(334)
          , i = n(7)
          , o = n(13)
          , s = n(48)
          , a = function(t) {
            function e(n) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var r = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, t.call(this, n));
                return r.usehead = !0,
                r.headinfo = null,
                r.result = null,
                r.checkAuth = !0,
                r.extension = null,
                r.isUseH5Sys = !1,
                r.auth = null,
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf,
                function(t, e) {
                    for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                        var i = n[r]
                          , o = Object.getOwnPropertyDescriptor(e, i);
                        o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                    }
                }(t, e))
            }(e, t),
            e.prototype.getTag = function() {
                var t = this.getParamData();
                return JSON.stringify(t)
            }
            ,
            e.prototype.getParamData = function() {
                var t = this.param;
                return i.isObject(t) || (t = {}),
                i.extend(!0, {}, t)
            }
            ,
            e.prototype.getProtocol = function() {
                return "https"
            }
            ,
            e.prototype.protocolFilter = function(t, e) {
                return i.protocolFilter(t, e)
            }
            ,
            e.prototype.execute = function(t, e, n, o, s) {
                var a = this.getParamData();
                this.pushValidates(function(t, e) {
                    var n = this._getResponseHead(t, e);
                    return n.overdue ? {
                        overdue: n.overdue
                    } : n.verification ? {
                        verification: n.verification
                    } : n.success
                });
                var c = this.getTag()
                  , u = this.result && this.result.get(c);
                if (!u || this.ajaxOnly || n) {
                    if ("get" !== this.method.toLowerCase() && this.usehead && this.contentType !== r.CONTENT_TYPE_JSONP) {
                        a.head = {};
                        var l = {
                            name: "protocal",
                            value: this.getProtocol()
                        }
                          , p = {
                            name: "openimtoken",
                            value: i.getAuth()
                        };
                        a.head.extension = [],
                        a.head.extension.push({
                            name: "cpc",
                            value: "pc"
                        }),
                        a.head.extension.push(l),
                        a.head.extension.push({
                            name: "language",
                            value: i.getLanguage() || "undefined" != typeof navigator && navigator.language || ""
                        }),
                        i.getAppVersion() && a.head.extension.push({
                            name: "cver",
                            value: i.getAppVersion()
                        }),
                        a.head.extension.push({
                            name: "syscode",
                            value: i.getSysCode() || "89"
                        }),
                        i.getAppId() && a.head.extension.push({
                            name: "appid",
                            value: i.getAppId()
                        }),
                        i.getOpenIM() ? a.head.extension.push(p) : a.head.auth = i.getAuth()
                    } else
                        "get" === this.method.toLowerCase() || this.usehead || this.contentType === r.CONTENT_TYPE_JSONP || this.headinfo && (a.head = this.headinfo);
                    this._execute(t, e, o, s, a)
                } else
                    "function" == typeof t && t.call(o || this, u)
            }
            ,
            e.prototype.excute = function(t, e, n, r, i) {
                this.execute(t, e, n, r, i)
            }
            ,
            e.prototype._getResponseHead = function(t, e) {
                var n = !!t.ResponseStatus
                  , r = n ? t.ResponseStatus : t.head
                  , a = !1
                  , c = !1
                  , u = !1;
                if (n && r) {
                    r.Extension;
                    var l = r.Ack;
                    if ("Failure" === l || 1 == l) {
                        var p = r.Errors;
                        if (p instanceof Array && p.length > 0)
                            for (var h, f = 0; f < p.length; f++) {
                                if ((h = p[f]) && h.ErrorCode && "MobileRequestFilterException" == h.ErrorCode || h && h.ErrorCode && "AccountsMobileRequestFilterException" == h.ErrorCode || h.Message && h.Message.indexOf("mobile auth service: null") > -1 || h.Message && h.Message.indexOf("Invalid token for authentication") > -1) {
                                    if (this.checkAuth) {
                                        c = !0;
                                        try {
                                            -1 != e.indexOf("apigateway.ctripcorp.com") ? i.network = {
                                                value: "external",
                                                forceSetting: !0
                                            } : (s.publish(o.EventType.OnSocketStatusChange, [o.ConnectionStatus.CURRENT_TOKEN_UNAVAILABLE]),
                                            i.ubtTrace({
                                                key: "o_im_online_sdk_errauth",
                                                Action: "errauth",
                                                Params: this.serverPath,
                                                Result: JSON.stringify(h),
                                                Status: "error",
                                                Network: i.network.value
                                            }))
                                        } catch (t) {}
                                    }
                                    break
                                }
                                if (h && h.ErrorCode && "需要soa新增返回值" == h.ErrorCode) {
                                    u = !0;
                                    break
                                }
                            }
                    }
                    a = "Success" === r.Ack || "0" == r.Ack
                } else
                    a = r && 0 === r.errcode;
                return {
                    success: a,
                    overdue: c,
                    verification: u
                }
            }
            ,
            e.prototype.clearResult = function() {
                this.result && "function" == typeof this.result.remove ? this.result.remove() : this.result = null
            }
            ,
            e
        }(r);
        t.exports = a
    }
    , function(t, e, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        var i = n(131)
          , o = n(7)
          , s = o.isDebug()
          , a = function(t) {
            function e(n) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var r = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, t.call(this, n));
                return r.url = null,
                r.param = null,
                r.dataformat = null,
                r.validates = [],
                r.protocol = "https",
                r.contentType = e.CONTENT_TYPE_JSON,
                r.method = "POST",
                r.ajaxOnly = !1,
                r.timeout = o.getTimeout(),
                r.ajax = null,
                r.isAbort = !1,
                r.onBeforeCompleteCallback = null,
                r.noCookie = !0,
                r.useSotp = !0,
                r.initialize(n),
                r.logError = !1,
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf,
                function(t, e) {
                    for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                        var i = n[r]
                          , o = Object.getOwnPropertyDescriptor(e, i);
                        o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                    }
                }(t, e))
            }(e, t),
            e.prototype.initialize = function(t) {
                for (var e in this.assert(),
                t)
                    this[e] = t[e]
            }
            ,
            e.prototype.assert = function() {}
            ,
            e.prototype.setAttr = function(t, e) {
                this[t] = e
            }
            ,
            e.prototype.pushValidates = function(t) {
                "function" == typeof t && this.validates.length <= 0 && this.validates.push(o.proxy(t, this))
            }
            ,
            e.prototype.setParam = function(t, e) {
                "object" !== (void 0 === t ? "undefined" : r(t)) || e ? this.param[t] = e : this.param = t
            }
            ,
            e.prototype.getParam = function() {
                var t;
                return _.isObject(this.param) && (t = o.extend(!0, {}, this.param)),
                t || {}
            }
            ,
            e.prototype.getResult = function() {
                return this.result
            }
            ,
            e.prototype.getResultStore = function() {
                return this.getResult()
            }
            ,
            e.prototype.buildurl = function() {
                var t = this.url;
                if (o.isUrl(this.url))
                    0 === o.trim(t).indexOf("http://") && "https:" === location.protocol && (t = "https://" + o.trim(t).substr(7));
                else {
                    var e = "m.ctrip.com"
                      , n = "";
                    "http" == this.protocol && Lizard.restfullApi ? n = Lizard.restfullApi : "https" == this.protocol && Lizard.restfullApiHttps && (n = Lizard.restfullApiHttps),
                    n && o.isUrl(n) && (e = o.parseUrl(n).hostname),
                    t = this.protocol + "://" + e + "/restapi" + this.url
                }
                return t
            }
            ,
            e.prototype.appendSuffix = function(t) {
                var e = o.getGuid();
                return e && e.indexOf("-") < 0 && (t = t + (t.indexOf("?") > -1 ? "&" : "?") + "_fxpcqlniredt=" + e),
                t
            }
            ,
            e.prototype._execute = function(t, n, r, a, c) {
                this.isAbort = !1;
                var u = this.appendSuffix(this.buildurl())
                  , l = this
                  , p = +new Date
                  , h = o.proxy(function(e, i) {
                    try {
                        this.serverPath.toLowerCase().indexOf("sendmessage") > -1 ? (d.messageBody = o.confuseMessage(d.messageBody),
                        d.retry && o.ubtTrace({
                            key: "o_im_online_sdk_sendmessage",
                            Action: "sendMessage again",
                            Params: JSON.stringify(d),
                            Result: JSON.stringify(e),
                            Status: "Complete",
                            Network: o.network.value,
                            timeout: this.timeout,
                            BeginTime: p,
                            TotalTime: +new Date - p
                        }),
                        o.ubtTrace({
                            key: "o_im_online_sdk_sendmessage",
                            Action: this.serverPath,
                            Params: JSON.stringify(d),
                            Result: JSON.stringify(e),
                            Status: "Complete",
                            Network: o.network.value,
                            timeout: this.timeout,
                            BeginTime: p,
                            TotalTime: +new Date - p
                        })) : (-1 == this.serverPath.toLowerCase().indexOf("getchatmessages") && -1 == this.serverPath.toLowerCase().indexOf("getgroupmessages") && -1 == this.serverPath.toLowerCase().indexOf("getchatconversationmessages") && -1 == this.serverPath.toLowerCase().indexOf("getgroupconversationmessages") || this.logError) && o.ubtTrace({
                            key: "o_im_online_sdk_soa_api",
                            Action: this.serverPath,
                            Params: JSON.stringify(d),
                            Result: JSON.stringify(e),
                            Status: "Complete",
                            Network: o.network.value,
                            timeout: this.timeout,
                            BeginTime: p,
                            TotalTime: +new Date - p
                        }),
                        o.ubtMetric({
                            value: +new Date - p,
                            action: this.serverPath,
                            result: "ok"
                        })
                    } catch (t) {
                        s && console.log(t)
                    }
                    if (this.logError = !1,
                    this.validates && this.validates.length > 0)
                        for (var a = 0, c = this.validates.length; a < c; a++) {
                            var u = this.validates[a](e, i);
                            if ("boolean" == typeof u) {
                                if (!u)
                                    return "function" == typeof n && n.call(r || this, e)
                            } else if (u && u.overdue)
                                return "function" == typeof n && n.call(r || this, e)
                        }
                    var l = "function" == typeof this.dataformat ? this.dataformat(e) : e;
                    "function" == typeof this.onBeforeCompleteCallback && this.onBeforeCompleteCallback(l),
                    "function" == typeof t && t.call(r || this, l, e)
                }, this)
                  , f = o.proxy(function(t) {
                    try {
                        this.serverPath.toLowerCase().indexOf("sendmessage") > -1 ? (d.messageBody = o.confuseMessage(d.messageBody),
                        d.retry && o.ubtTrace({
                            key: "o_im_online_sdk_sendmessage",
                            Action: "sendMessage again",
                            Params: JSON.stringify(d),
                            Result: t.message,
                            Status: t.status || "Error",
                            Network: o.network.value,
                            timeout: this.timeout,
                            BeginTime: p,
                            TotalTime: +new Date - p
                        }),
                        o.ubtTrace({
                            key: "o_im_online_sdk_sendmessage",
                            Action: this.serverPath,
                            Params: JSON.stringify(d),
                            Result: t.message,
                            Status: t.status || "Error",
                            Network: o.network.value,
                            timeout: this.timeout,
                            BeginTime: p,
                            TotalTime: +new Date - p
                        })) : (-1 == this.serverPath.toLowerCase().indexOf("getchatmessages") && -1 == this.serverPath.toLowerCase().indexOf("getgroupmessages") && -1 == this.serverPath.toLowerCase().indexOf("getchatconversationmessages") && -1 == this.serverPath.toLowerCase().indexOf("getgroupconversationmessages") && this.logError,
                        o.ubtTrace({
                            key: "o_im_online_sdk_soa_api",
                            Action: this.serverPath,
                            Params: JSON.stringify(d),
                            Result: t.message,
                            Status: t.status || "Error",
                            Network: o.network.value,
                            timeout: this.timeout,
                            BeginTime: p,
                            TotalTime: +new Date - p
                        }),
                        this.logError = !0),
                        o.ubtMetric({
                            value: +new Date - p,
                            action: this.serverPath,
                            result: "fail"
                        })
                    } catch (t) {
                        s && console.log(t)
                    }
                    if (l.isAbort)
                        return l.isAbort = !1,
                        "function" == typeof a && a.call(r || this, t);
                    "function" == typeof n && n.call(r || this, t)
                }, this)
                  , d = c || this.getParam();
                return this.timeout = o.getTimeout(),
                this.contentType === e.CONTENT_TYPE_JSON ? this.ajax = i.cros(u, this.method, d, h, f, this.timeout) : this.contentType === e.CONTENT_TYPE_JSONP ? this.ajax = i.jsonp(u, d, h, f, this.timeout) : this.ajax = i.post(u, d, h, f, this.timeout)
            }
            ,
            e.prototype.execute = function(t, e, n, r, i) {
                this._execute(t, e, n, r, i)
            }
            ,
            e.prototype.abort = function() {
                this.isAbort = !0,
                this.ajax && this.ajax.abort && this.ajax.abort()
            }
            ,
            e
        }(n(11));
        a.CONTENT_TYPE_JSON = "json",
        a.CONTENT_TYPE_FORM = "form",
        a.CONTENT_TYPE_JSONP = "jsonp",
        t.exports = a
    }
    , function(t, e, n) {
        "use strict";
        var r = function(t) {
            function e(n, r) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var i = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, t.call(this));
                return i.timeout = 5e3,
                i.cbList = {},
                i
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf,
                function(t, e) {
                    for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                        var i = n[r]
                          , o = Object.getOwnPropertyDescriptor(e, i);
                        o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                    }
                }(t, e))
            }(e, t),
            e.prototype.triggerCallback = function(t, e) {
                if (this.cbList[t]) {
                    var n = this.cbList[t];
                    delete this.cbList[t],
                    clearTimeout(n.timerId),
                    n.success && n.success(e)
                }
            }
            ,
            e.prototype.triggerError = function(t, e) {
                if (this.cbList[t]) {
                    var n = this.cbList[t];
                    delete this.cbList[t],
                    clearTimeout(n.timerId),
                    n.fail && n.fail(e)
                }
            }
            ,
            e.prototype.addCallback = function(t, e, n) {
                var r = this;
                this.cbList[t] = {
                    key: t,
                    success: e,
                    fail: n
                },
                this.cbList[t].timerId = setTimeout(function() {
                    r.cbList[t] && (delete r.cbList[t],
                    n && n({
                        error: -1,
                        errmsg: "timeout"
                    }))
                }, this.timeout)
            }
            ,
            e
        }(n(11));
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = n(66)
          , i = n(13)
          , o = n(7)
          , s = n(48)
          , a = r.getChatConversationMessages.getInstance()
          , c = r.getChatMessages.getInstance()
          , u = r.getGroupConversationMessages.getInstance()
          , l = r.getGroupMessages.getInstance()
          , p = (r.sendMessage.getInstance(),
        function(t) {
            function e(n) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var r = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, t.call(this, n));
                return r.initialize(n),
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf,
                function(t, e) {
                    for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                        var i = n[r]
                          , o = Object.getOwnPropertyDescriptor(e, i);
                        o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                    }
                }(t, e))
            }(e, t),
            e.prototype.initialize = function(t) {
                this.connected = !1,
                this.queue = [],
                this._socket = t,
                this._pollInterval = 1500,
                this.chatPollBack = !0,
                this.allChatPollBack = !0,
                this.groupPollBack = !0,
                this.allGroupPollBack = !0,
                this._partnerJid = null,
                this._conversationType = i.ConversationType.ConversationList,
                this.chatLastTS = 0,
                this.groupLastTS = 0,
                this.allChatLastTS = 0,
                this.allGroupLastTS = 0
            }
            ,
            e.prototype.createTransport = function(t, e) {
                this.connected = !0,
                s.publish(i.EventType.OnSocketStatusChange, [i.ConnectionStatus.CONNECTED]);
                try {
                    this.doPollingRequest(),
                    t && o.isFunction(t) && t()
                } catch (t) {
                    console.log(t),
                    e && o.isFunction(e) && e()
                }
                return this
            }
            ,
            e.prototype.doPollingRequest = function() {
                var t = this;
                switch (this._conversationType) {
                case i.ConversationType.ConversationList:
                    t.allChatPollInterval = setInterval(function() {
                        t.getAllChatMessage(),
                        t.getAllGroupChatMessage()
                    }, this._pollInterval);
                    break;
                case i.ConversationType.SingleChat:
                    t.chatPollInterval = setInterval(function() {
                        t.getChatMessage()
                    }, this._pollInterval);
                    break;
                case i.ConversationType.GroupChat:
                    t.groupPollInterval = setInterval(function() {
                        t.getGroupChatMessage()
                    }, this._pollInterval)
                }
            }
            ,
            e.prototype.getChatMessage = function() {
                var t = this;
                a.param = {
                    partnerJid: t._partnerJid,
                    direction: t.chatLastTS > 0 ? "next" : "prev",
                    beginMsgTime: t.chatLastTS,
                    pageSize: 10
                },
                t.chatPollBack && (t.chatPollBack = !1,
                a.excute(function(e) {
                    e.conversationType = i.ConversationType.SingleChat,
                    t.onData(e, "chat"),
                    e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase() && e.messages && o.isArray(e.messages) && e.messages.length >= 10 ? (t.chatPollBack = !0,
                    t.getChatMessage()) : t.chatPollBack = !0
                }, function(e) {
                    t.chatPollBack = !0
                }, !0, this))
            }
            ,
            e.prototype.getAllChatMessage = function() {
                var t = this;
                c.param = {
                    direction: t.allChatLastTS > 0 ? "next" : "prev",
                    beginMsgTime: t.allChatLastTS,
                    pageSize: 10
                },
                t.allChatPollBack && (t.allChatPollBack = !1,
                c.excute(function(e) {
                    e.conversationType = i.ConversationType.SingleChat,
                    t.onData(e, "allChat"),
                    e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase() && e.messages && o.isArray(e.messages) && e.messages.length >= 10 ? (t.allChatPollBack = !0,
                    t.getAllChatMessage()) : t.allChatPollBack = !0
                }, function(e) {
                    t.allChatPollBack = !0
                }, !0, this))
            }
            ,
            e.prototype.getGroupChatMessage = function() {
                var t = this;
                u.param = {
                    partnerJid: t._partnerJid,
                    direction: t.groupLastTS > 0 ? "next" : "prev",
                    beginMsgTime: t.groupLastTS,
                    pageSize: 10,
                    attachSenderSummary: !0
                },
                t.groupPollBack && (t.groupPollBack = !1,
                u.excute(function(e) {
                    e.conversationType = i.ConversationType.GroupChat,
                    t.onData(e, "group"),
                    e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase() && e.messages && o.isArray(e.messages) && e.messages.length >= 10 ? (t.groupPollBack = !0,
                    t.getGroupChatMessage()) : t.groupPollBack = !0
                }, function(e) {
                    t.groupPollBack = !0
                }, !0, this))
            }
            ,
            e.prototype.getAllGroupChatMessage = function() {
                var t = this;
                l.param = {
                    direction: t.allGroupLastTS > 0 ? "next" : "prev",
                    beginMsgTime: t.allGroupLastTS,
                    pageSize: 10
                },
                t.allGroupPollBack && (t.allGroupPollBack = !1,
                l.excute(function(e) {
                    e.conversationType = i.ConversationType.GroupChat,
                    t.onData(e, "allGroup"),
                    e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase() && e.messages && o.isArray(e.messages) && e.messages.length >= 10 ? (t.allGroupPollBack = !0,
                    t.getAllGroupChatMessage()) : t.allGroupPollBack = !0
                }, function(e) {
                    t.allGroupPollBack = !0
                }, !0, this))
            }
            ,
            e.prototype.send = function(t) {
                /^(202|200)$/.test(this.sendxhr.status) && this.onData(this.sendxhr.responseText)
            }
            ,
            e.prototype.onData = function(t, e) {
                if (t && "success" == t.ResponseStatus.Ack.toLocaleLowerCase()) {
                    if (t.messages && o.isArray(t.messages) && t.messages.length > 0) {
                        switch (e) {
                        case "chat":
                            0 === this.chatLastTS && this._socket.setHistoryTimestamp(t.messages[0].createTime),
                            this.chatLastTS = t.lastMessageTimestamp;
                            break;
                        case "allChat":
                            this.allChatLastTS = t.lastMessageTimestamp;
                            break;
                        case "group":
                            0 === this.groupLastTS && this._socket.setHistoryTimestamp(t.messages[0].createTime),
                            this.groupLastTS = t.lastMessageTimestamp;
                            break;
                        case "allGroup":
                            this.allGroupLastTS = t.lastMessageTimestamp
                        }
                        this._socket.onMessage({
                            errorcode: 0,
                            messages: t.messages,
                            conversationType: t.conversationType,
                            pollType: e,
                            lastMessageTimestamp: t.lastMessageTimestamp,
                            localIds: t.localIds
                        })
                    }
                } else
                    this._socket.onMessage({
                        errorcode: t && t.ResponseStatus && t.ResponseStatus.Errors && t.ResponseStatus.Errors[0].ErrorCode ? t.ResponseStatus.Errors[0].ErrorCode : 500,
                        messages: []
                    })
            }
            ,
            e.prototype.onClose = function() {
                this.allChatPollInterval && clearInterval(this.allChatPollInterval),
                this.chatPollInterval && clearInterval(this.chatPollInterval),
                this.groupPollInterval && clearInterval(this.groupPollInterval),
                this.connected = !1,
                this._getChatConversationMessages && a.abort(),
                this._getChatMessages && c.abort(),
                this._getGroupConversationMessages && u.abort(),
                this._getGroupMessages && l.abort()
            }
            ,
            e.prototype.disconnect = function() {
                this.onClose()
            }
            ,
            e.prototype.reconnect = function(t, e) {
                this.disconnect(),
                this.createTransport(t, e)
            }
            ,
            e.prototype.setAuth = function(t) {
                r.setAuth(t)
            }
            ,
            e.prototype.setStatusListener = function(t) {
                r.setStatusListener(t)
            }
            ,
            e
        }(n(11)));
        t.exports = p
    }
    , function(t, e, n) {
        "use strict";
        var r = function(t) {
            function e(n, r) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var i = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, t.call(this, n, r));
                return i.checkProp = n || null,
                i.max = r || 500,
                i.checkList = [],
                i
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf,
                function(t, e) {
                    for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                        var i = n[r]
                          , o = Object.getOwnPropertyDescriptor(e, i);
                        o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                    }
                }(t, e))
            }(e, t),
            e.prototype.check = function(t) {
                if (!t)
                    return !1;
                var e = !1;
                if (this.checkProp) {
                    if (!t[this.checkProp])
                        return !1;
                    for (var n = 0; n < this.checkList.length; n++)
                        if (this.checkList[n] == t[this.checkProp]) {
                            e = !0;
                            break
                        }
                    e || this.checkList.push(t[this.checkProp])
                } else
                    this.checkList.indexOf(t) >= 0 ? e = !0 : this.checkList.push(t);
                for (; this.checkList.length > this.max; )
                    this.checkList.shift();
                return e
            }
            ,
            e
        }(n(11));
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = function(t) {
            function e(n) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var r = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, t.call(this, n));
                return r.uid = null,
                r.jid = null,
                r.nickname = null,
                r.avatar = null,
                r.role = null,
                r.comment = null,
                r.joinGroupTime = null,
                r.approved = null,
                r.ask = null,
                r.askmessage = null,
                r.subscription = null,
                r.subscribe = null,
                r.subscriptionsetting = null,
                r.type = null,
                r.ori = null,
                r.tags = null,
                r.version = null,
                r.isSenate = null,
                r.isHoliday = null,
                r.isDefaultSystemPhoto = null,
                r.userHeadPhotoList = null,
                r.extPropertys = null,
                r.roles = null,
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf,
                function(t, e) {
                    for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                        var i = n[r]
                          , o = Object.getOwnPropertyDescriptor(e, i);
                        o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                    }
                }(t, e))
            }(e, t),
            e
        }(n(11));
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = function(t) {
            function e(n) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var r = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, t.call(this, n));
                return r.jid = null,
                r.name = null,
                r.title = null,
                r.desc = null,
                r.icon = null,
                r.allowInvites = null,
                r.isProtected = null,
                r.isPublic = null,
                r.allowPrivateChat = null,
                r.extPropertys = null,
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf,
                function(t, e) {
                    for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                        var i = n[r]
                          , o = Object.getOwnPropertyDescriptor(e, i);
                        o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                    }
                }(t, e))
            }(e, t),
            e
        }(n(11));
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        var r = function(t) {
            function e(n) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var r = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, t.call(this, n));
                return r.threadId = null,
                r.subject = null,
                r.nativeLink = null,
                r.h5Link = null,
                r.hybirdLink = null,
                r.extPropertys = null,
                r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf,
                function(t, e) {
                    for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                        var i = n[r]
                          , o = Object.getOwnPropertyDescriptor(e, i);
                        o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                    }
                }(t, e))
            }(e, t),
            e
        }(n(11));
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        n(7);
        var r = n(26).getInstance()
          , i = {
            getMyInfo: function(t, e) {
                r && r._client && r._client.getMyInfo(t, e)
            },
            getPartnerDetail: function(t, e, n) {
                r && r._client && r._client.getPartnerDetail(t, e, n)
            },
            getCurrentUser: function(t, e) {
                r && r._client && r._client.getCurrentUser(t, e)
            },
            getUserByUid: function(t, e, n) {
                r && r._client && r._client.getUserByUid(t, e, n)
            },
            getRecommendNickName: function(t, e, n) {
                r && r._client && r._client.getRecommendNickName(t, e, n)
            },
            submitNickName: function(t, e, n) {
                r && r._client && r._client.submitNickName(t, e, n)
            },
            isInWhiteList: function(t, e, n) {
                r && r._client && r._client.isInWhiteList(t, e, n)
            }
        };
        t.exports = i
    }
    , function(t, e, n) {
        "use strict";
        n(7);
        var r = n(26).getInstance()
          , i = {
            createGroup: function(t, e, n) {
                r._client.createGroup(t, e, n)
            },
            inviteMembers: function(t, e, n) {
                r._client.inviteMembers(t, e, n)
            },
            quitGroup: function(t, e, n) {
                r._client.quitGroup(t, e, n)
            },
            removeMember: function(t, e, n) {
                r._client.removeMember(t, e, n)
            },
            dismissGroup: function(t, e, n) {
                r._client.dismissGroup(t, e, n)
            },
            updateGroup: function(t, e, n) {
                r._client.updateGroup(t, e, n)
            },
            changeGroupRole: function(t, e, n) {
                r._client.changeGroupRole(t, e, n)
            },
            getCurrentGroupAllMembers: function(t, e, n) {
                r && r._client && r._client.getCurrentGroupAllMembers(t, e, n)
            },
            getCurrentGroupMembersPaging: function(t, e, n) {
                r && r._client && r._client.getCurrentGroupMembersPaging(t, e, n)
            },
            getGroupAllMembersByJid: function(t, e, n) {
                r && r._client && r._client.getGroupAllMembersByJid(t, e, n)
            },
            getGroupMembersByJidPaging: function(t, e, n) {
                r && r._client && r._client.getGroupMembersByJidPaging(t, e, n)
            },
            getGroupMemberInfoByJid: function(t, e, n) {
                r && r._client && r._client.getGroupMemberInfoByJid(t, e, n)
            },
            getCurrentGroupInfo: function(t, e) {
                r && r._client && r._client.getCurrentGroupInfo(t, e)
            },
            getGroupInfoByJid: function(t, e, n) {
                r && r._client && r._client.getGroupInfoByJid(t, e, n)
            },
            getGroupMembersEn: function(t, e, n) {
                r && r._client && r._client.getGroupMembersEn(t, e, n)
            }
        };
        t.exports = i
    }
    , function(t, e, n) {
        "use strict";
        n(7);
        var r = n(26).getInstance()
          , i = {
            updateGroupConfig: function(t, e, n) {
                r && r._client && r._client.updateGroupConfig(t, e, n)
            },
            updateMsgBlockConfig: function(t, e, n) {
                r && r._client && r._client.updateMsgBlockConfig(t, e, n)
            },
            getMsgBlockConfig: function(t, e, n) {
                r && r._client && r._client.getMsgBlockConfig(t, e, n)
            },
            setNetwork: function(t) {
                r && r._client && r._client.setNetwork(t)
            },
            getNetwork: function() {
                return r && r._client && r._client.getNetwork()
            }
        };
        t.exports = i
    }
    , function(t, e, n) {
        "use strict";
        var r = n(7)
          , i = n(26).getInstance()
          , o = {
            getConversations: function(t, e) {
                var n = {
                    beginTimestamp: 0,
                    pageSize: 100
                }
                  , i = function(t) {
                    r.isFunction(e) && e(t)
                };
                getConversationsPaging(n, function o(e) {
                    if (e && "success" == e.ResponseStatus.Ack.toLocaleLowerCase()) {
                        var r = {};
                        0 === n.beginTimestamp && (r = e),
                        e.conversations && e.conversations.length > 0 ? (0 !== n.beginTimestamp && (r.conversations = e.conversations.concat(r.conversations)),
                        n.beginTimestamp = e.lastTimestamp,
                        e.conversations.length === n.pageSize ? getConversationsPaging(n, o, i) : t(r)) : t(r)
                    } else
                        t(e)
                }, i)
            },
            getConversationsPaging: function(t, e, n) {
                i && i._client && i._client.getConversationsPaging(t, e, n)
            },
            getCurrentConversation: function(t, e) {
                if (!r._partnerJid)
                    throw new Error("partnerJid can't be empty,postion -> getCurrentConversation");
                i && i._client && i._client.getConversationByJid({
                    partnerJid: r._partnerJid
                }, t, e)
            },
            getConversationByJid: function(t, e, n) {
                i && i._client && i._client.getConversationByJid(t, e, n)
            },
            getPartnerConversationInfo: function(t, e, n) {
                i && i._client && i._client.getPartnerConversationInfo(t, e, n)
            },
            removeConversationByJid: function(t, e, n) {
                i && i._client && i._client.removeConversationByJid(t, e, n)
            },
            removeConversation: function(t, e, n) {
                i && i._client && i._client.removeConversation(t, e, n)
            },
            getConversationSummaries: function(t, e, n) {
                i && i._client && i._client.getConversationSummaries(t, e, n)
            },
            getCurrentConversationUnreadCount: function(t, e) {
                i && i._client && i._client.getCurrentConversationUnreadCount(t, e)
            },
            getConversationUnreadInfo: function(t, e, n) {
                i && i._client && i._client.getConversationUnreadInfo(t, e, n)
            }
        };
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        var r = n(7)
          , i = n(13)
          , o = n(26).getInstance()
          , s = {
            recallMessage: function(t, e, n) {
                o && o._client && o._client.recallMessage(t, e, n)
            },
            getHistoricalRangeMessage: function(t, e, n) {
                o && o._client && o._client.getHistoricalRangeMessage(t, e, n)
            },
            createThread: function(t, e, n) {
                o && o._client && o._client.createThread(t, e, n)
            },
            getThread: function(t, e, n) {
                o && o._client && o._client.getThread(t, e, n)
            },
            sendInputState: function(t, e, n) {
                var s = {};
                if (!t.partnerJid && !o._client._partnerJid)
                    throw new Error("please input partnerJid");
                s.toJid = (t.partnerJid || o._client._partnerJid) + "@" + r.getWebSocketServiceName(),
                s.fromJid = r.uidToJid(r._myuid),
                t.conversationType == i.ConversationType.GroupChat && (s.toJid = (t.partnerJid || o._client._partnerJid) + "@muc." + r.getWebSocketServiceName() + "/" + r._myuid,
                s.isGroup = 1),
                s.messageBody = {
                    status: t.status || 0
                },
                o && o._client && o._client.sendInputState(s, e, n)
            },
            sendMessageInSocket: function(t, e, n) {
                r.checkParam(["object", "function", "function"], "sendMessage"),
                r.checkMessageObject(t),
                o && o._client && o._client.sendMessageInSocket(t, e, n)
            },
            sendTextMessage: function(t, e, n, i, o, s) {
                r.checkParam(["number", "string", "string", "string", "function", "function"], "sendTextMessage");
                var a = new MessageFactory.TextMessage;
                a.content = i,
                a.toJid = n,
                a.conversationType = e,
                a.bizType = t,
                sendMessage(a, o, s)
            },
            getNewConversationMessagesByJid: function(t, e, n) {
                r.checkParam(["object", "function", "function"], "getNewConversationMessagesByJid"),
                o._client.checkNetWork(),
                o && o._client && o._client.getNewConversationMessagesByJid(t, e, n)
            },
            getRangeMessageOnline: function(t, e, n) {
                r.checkParam(["object", "function", "function"], "getRangeMessageOnline"),
                o && o._client && o._client.getRangeMessageOnline(t, e, n)
            },
            getLatemessageInBulk: function(t, e, n) {
                o && o._client && o._client.getLatemessageInBulk(t, e, n, !1)
            },
            getLatemessageHistoryInBulk: function(t, e, n) {
                o && o._client && o._client.getLatemessageHistoryInBulk(t, e, n, !1)
            },
            getHistoryMessages: function(t, e, n, i, s) {
                r.checkParam(["string", "string", "number", "function", "function"], "getHistoryMessages");
                var a = {
                    conversationType: t,
                    partnerJid: e,
                    paging: {
                        pageSize: n
                    }
                };
                o && o._client && o._client.getHistoryMessagesPaging(a, i, s)
            },
            getHistoryMessagesPaging: function(t, e, n) {
                r.checkParam(["object", "function", "function"], "getHistoryMessagesPaging"),
                o && o._client && o._client.getHistoryMessagesPaging(t, e, n)
            },
            getConversationMessagesByJidPaging: function(t, e, n) {
                r.checkParam(["object", "function", "function"], "getConversationMessagesByJidPaging"),
                o && o._client && o._client.getConversationMessagesByJidPaging(t, e, n)
            },
            getGroupMessagesByJidPaging: function(t, e, n) {
                r.checkParam(["object", "function", "function"], "getGroupMessagesByJidPaging"),
                t.conversationType = i.ConversationType.GroupChat,
                o && o._client && o._client.getConversationMessagesByJidPaging(t, e, n)
            },
            getTotalUnreadcount: function(t, e) {
                o && o._client && o._client.getTotalUnreadcount(t, e)
            },
            getGroupAtMessagesByJidPaging: function(t, e, n) {
                o && o._client && o._client.getGroupAtMessagesByJidPaging(t, e, n)
            },
            removeMessage: function(t, e, n) {
                o && o._client && o._client.removeMessage(t, e, n)
            },
            sendMessage: function(t, e, n) {
                r.checkParam(["object", "function", "function"], "sendMessage"),
                r.checkMessageObject(t),
                o._client.checkNetWork(),
                o && o._client && o._client.sendMessage(t, e, n)
            },
            sendCurrentMessageReceipt: function(t, e, n) {
                o && o._client && o._client.sendCurrentMessageReceipt(t, e, n)
            },
            sendMessageReceipt: function(t, e, n) {
                o && o._client && o._client.sendMessageReceipt(t, e, n)
            },
            putAdviceOfReadByMsgId: function(t, e, n) {
                o && o._client && o._client.putAdviceOfReadByMsgId(t, e, n)
            },
            getGroupMembersEn: function(t, e, n) {
                o && o._client && o._client.getGroupMembersEn(t, e, n)
            },
            getGroupAdmins: function(t, e, n) {
                o && o._client && o._client.getGroupAdmins(t, e, n)
            }
        };
        t.exports = s
    }
    , function(t, e, n) {
        "use strict";
        var r = n(7)
          , i = n(26).getInstance()
          , o = {
            uidToJid: function(t) {
                r.uidToJid(t)
            },
            jidToUid: function(t) {
                r.uidToJid(t)
            },
            uploadImage: function(t, e, n) {
                i._client.uploadImage(t, e, n)
            }
        };
        t.exports = o
    }
    , function(t, e, n) {
        "use strict";
        var r = n(7)
          , i = n(26).getInstance()
          , o = n(13)
          , s = n(48)
          , a = (n(53),
        !1)
          , c = {
            initConfig: function(t) {
                t.token && r.setAuth(t.token),
                t.appId && r.setAppId(t.appId),
                t.appVersion && r.setAppVersion(t.appVersion),
                t.isOpenIM && r.setOpenIM(t.isOpenIM),
                t.timeout && r.setTimeout(t.timeout),
                t.disableUBT && r.setUBTDisable(t.disableUBT),
                i._client.firstTimestamp = 0,
                i._client.lastTimestamp = 0
            },
            init: function(t, e, n) {
                try {
                    r.ubtTrace({
                        key: "o_im_online_sdk_init1",
                        Action: "init",
                        Params: JSON.stringify(t || {})
                    })
                } catch (t) {}
                r.checkParam(["object", "function", "function"], "init");
                var s = r.map(o.ConversationType, function(t) {
                    return t
                });
                r.checkObjectParam(t, ["conversationType"], [{
                    type: "string",
                    range: s
                }], "init"),
                r._conversationType = t.conversationType,
                i._client._conversationType = r._conversationType,
                t.token && r.setAuth(t.token),
                t.appId && r.setAppId(t.appId),
                t.appVersion && r.setAppVersion(t.appVersion),
                t.isOpenIM && r.setOpenIM(t.isOpenIM),
                t.timeout && r.setTimeout(t.timeout),
                t.disableUBT && r.setUBTDisable(t.disableUBT),
                t.language && r.setLanguage(t.language),
                i._client.firstTimestamp = 0,
                i._client.lastTimestamp = 0,
                t.uid && (r._myuid = t.uid),
                r._conversationType === o.ConversationType.SingleChat || r._conversationType === o.ConversationType.GroupChat ? (r.checkObjectParam(t, ["partnerJid", "initPageSize"], [{
                    type: "string"
                }, {
                    type: "number",
                    min: 1,
                    max: 100,
                    default1: 20
                }], "init"),
                r._partnerJid = t.partnerJid,
                i._client._partnerJid = r._partnerJid,
                i._client.getNewConversationMessagesByJid({
                    conversationType: r._conversationType,
                    partnerJid: r._partnerJid,
                    paging: {
                        pageSize: t.initPageSize
                    }
                }, e, n)) : r._conversationType === o.ConversationType.ConversationList && i._client.getLatestConversation({
                    lastMessageTime: t.lastMessageTime || 0
                }, e, n),
                this.connect(null, function() {}, function() {})
            },
            init2: function(t, e, n) {
                r.checkParam(["object", "function", "function"], "init");
                var s = r.map(o.ConversationType, function(t) {
                    return t
                });
                r.checkObjectParam(t, ["conversationType"], [{
                    type: "string",
                    range: s
                }], "init"),
                r._conversationType = t.conversationType,
                i._client._conversationType = r._conversationType,
                i._client._auth = t.token,
                i._client.setAuth(t.token),
                i._client.firstTimestamp = 0,
                i._client.lastTimestamp = 0,
                r.setAppId(t.appId),
                r.setAppVersion(t.appVersion),
                r._conversationType === o.ConversationType.SingleChat || r._conversationType === o.ConversationType.GroupChat ? (r.checkObjectParam(t, ["partnerJid", "initPageSize"], [{
                    type: "string"
                }, {
                    type: "number",
                    min: 1,
                    max: 100,
                    default1: 20
                }], "init"),
                r._partnerJid = t.partnerJid,
                i._client._partnerJid = r._partnerJid,
                i._client.getNewConversationMessagesByJid({
                    conversationType: r._conversationType,
                    partnerJid: r._partnerJid,
                    paging: {
                        pageSize: t.initPageSize
                    }
                }, e, n)) : r._conversationType === o.ConversationType.ConversationList && (r.checkObjectParam(t, ["initPageSize"], [{
                    type: "number",
                    min: 0,
                    max: 10,
                    default1: 0
                }], "init"),
                i._client.getInitConversationSummaries({
                    messageCount: t.initPageSize
                }, e, n)),
                t.uid && (r._myuid = t.uid);
                try {
                    var a = JSON.stringify(t);
                    r.ubtTrace({
                        Action: "init",
                        Params: a
                    })
                } catch (t) {}
            },
            connect: function(t, e, n) {
                try {
                    r.ubtTrace({
                        key: "o_im_online_sdk_connect",
                        Action: "connect",
                        Params: JSON.stringify(t)
                    })
                } catch (t) {}
                if (a)
                    e && e();
                else {
                    if (!i)
                        throw new Error("IMClient uninitialized");
                    if (!r._conversationType)
                        throw new Error("Did not execute the Init function");
                    "{}" === JSON.stringify(t) && (t = {
                        pollInterval: 1500
                    }),
                    t || (t = {
                        pollInterval: 1500
                    }),
                    r.checkObjectParam(t, ["pollInterval"], [{
                        type: "number",
                        min: 1e3,
                        max: 1e4,
                        default1: 1500
                    }], "connect");
                    for (var o = 0, s = r._memoryStore.listenerList.length; o < s; o++)
                        i.setListener(r._memoryStore.listenerList[o]);
                    r._memoryStore.listenerList.length = 0,
                    t.currentUid = r._myuid,
                    i._client.connect(t, e, n),
                    i._client.checkNetWork(),
                    a = !0
                }
            },
            reconnect: function(t, e) {
                r.checkParam(["function", "function"], "reconnect"),
                i._client.checkNetWork(),
                i && i.reconnect(t, e)
            },
            setConnectionStatusListener: function(t) {
                t && "function" == typeof t.onChanged && s.subscribe(o.EventType.OnSocketStatusChange, t.onChanged)
            },
            setInnersSignalListener: function(t) {
                t && "function" == typeof t.onData && s.subscribe("signalEvent", t.onData)
            },
            setOnReceiveMessageListener: function(t) {
                t && "function" == typeof t.onReceived && s.subscribe(o.EventType.OnReceivedMessage, t.onReceived)
            },
            logout: function() {
                i && i.disconnect(),
                i = null
            },
            disconnect: function() {
                i && i.disconnect()
            },
            getCurrentConnectionStatus: function() {
                return i.getCurrentConnectionStatus()
            },
            getConnectionChannel: function() {
                return i && i._client && i._client._channel && i._client._channel.getConnectionChannel()
            },
            getChatFirstTimestamp: function() {
                return i && i._client && i._client._firstTimestamp
            },
            getChatLastTimestamp: function() {
                return i && i.getChatLastTimestamp()
            },
            getConversationUnreadCount: function() {
                return i && i._client && i._client._conversationUnreadCount
            },
            getConversationUnreadTimeline: function() {
                return i && i._client && i._client._conversationUnreadTimeline
            },
            isIM3: function() {
                return "IMV3" == r.getIMVersion()
            },
            getIMVersion: function() {
                return r.getIMVersion()
            }
        };
        t.exports = c
    }
    , function(t, e, n) {
        "use strict";
        n(7);
        var r = n(26).getInstance()
          , i = {
            getContactsPaging: function(t, e, n) {
                r && r._client && r._client.getContactsPaging(t, e, n)
            },
            updateContact: function(t, e, n) {
                r && r._client && r._client.updateContact(t, e, n)
            },
            removeContact: function(t, e, n) {
                r && r._client && r._client.removeContact(t, e, n)
            },
            updateContacts: function(t, e, n) {
                r && r._client && r._client.updateContacts(t, e, n)
            },
            viewContacts: function(t, e, n) {
                r && r._client && r._client.viewContacts(t, e, n)
            }
        };
        t.exports = i
    }
    ])
});
//# sourceMappingURL=imsdk.js.8eedce1f.map
