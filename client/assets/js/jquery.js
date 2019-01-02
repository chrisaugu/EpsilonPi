/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
      , d = a.document
      , e = c.slice
      , f = c.concat
      , g = c.push
      , h = c.indexOf
      , i = {}
      , j = i.toString
      , k = i.hasOwnProperty
      , l = {}
      , m = "1.12.4"
      , n = function(a, b) {
        return new n.fn.init(a,b)
    }
      , o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , p = /^-ms-/
      , q = /-([\da-z])/gi
      , r = function(a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    },
    n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || n.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e)
                    a = g[d],
                    c = e[d],
                    g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1,
                    f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {},
                    g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }
    ,
    n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        }
        ,
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
                return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a)
                    return k.call(a, b);
            for (b in a)
                ;
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            }
            )(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1)
                        break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h)
                    return h.call(b, a, c);
                for (d = b.length,
                c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length
              , d = 0
              , e = a.length;
            while (c > d)
                a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d])
                    a[e++] = b[d++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0, h = [];
            if (s(a))
                for (d = a.length; d > g; g++)
                    e = b(a[g], g, c),
                    null != e && h.push(e);
            else
                for (g in a)
                    e = b(a[g], g, c),
                    null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b],
            b = a,
            a = f),
            n.isFunction(a) ? (c = e.call(arguments, 2),
            d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }
            ,
            d.guid = a.guid = a.guid || n.guid++,
            d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = !!a && "length"in a && a.length
          , c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ga(), z = ga(), A = ga(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", P = new RegExp(L + "+","g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
            bool: new RegExp("^(?:" + K + ")$","i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
        }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), ca = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, da = function() {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes),
            E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                }
                : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
            if (d = d || [],
            "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x)
                return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f)))
                                return d;
                            if (j.id === f)
                                return d.push(j),
                                d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
                            return d.push(j),
                            d
                    } else {
                        if (o[2])
                            return H.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return H.apply(d, b.getElementsByClassName(f)),
                            d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x)
                        w = b,
                        s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u),
                        r = g(a),
                        h = r.length,
                        l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--)
                            r[h] = l + " " + qa(r[h]);
                        s = r.join(","),
                        w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s)
                        try {
                            return H.apply(d, w.querySelectorAll(s)),
                            d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }
        function ga() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function ha(a) {
            return a[u] = !0,
            a
        }
        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function ja(a, b) {
            var c = a.split("|")
              , e = c.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function ka(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function na(a) {
            return ha(function(b) {
                return b = +b,
                ha(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {},
        f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
            o = n.documentElement,
            p = !f(n),
            (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)),
            c.attributes = ia(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            c.getElementsByClassName = Z.test(n.getElementsByClassName),
            c.getById = ia(function(a) {
                return o.appendChild(a).id = u,
                !n.getElementsByName || !n.getElementsByName(u).length
            }),
            c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }
            ,
            d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete d.find.ID,
            d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }
            ,
            r = [],
            q = [],
            (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                a.querySelectorAll(":checked").length || q.push(":checked"),
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }),
            ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"),
                s.call(a, "[s!='']:x"),
                r.push("!=", O)
            }),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = Z.test(o.compareDocumentPosition),
            t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                if (!e || !f)
                    return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)
                    return ka(a, b);
                c = a;
                while (c = c.parentNode)
                    g.unshift(c);
                c = b;
                while (c = c.parentNode)
                    h.unshift(c);
                while (g[d] === h[d])
                    d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }
            ,
            n) : n
        }
        ,
        fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }
        ,
        fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(T, "='$1']"),
            c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }
        ,
        fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }
        ,
        fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        fa.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null,
            a
        }
        ,
        e = fa.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                m = q,
                                l = m[u] || (m[u] = {}),
                                k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                t = n && j[2],
                                m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b,
                            l = m[u] || (m[u] = {}),
                            k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                            j = k[a] || [],
                            n = j[0] === w && j[1],
                            t = n),
                            t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}),
                                    k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                    k[a] = [w, t]),
                                    m === b))
                                        break;
                            return t -= e,
                            t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = J(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                    function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a),
                    a = a.replace(ba, ca).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = la(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = ma(b);
        function pa() {}
        pa.prototype = d.filters = d.pseudos,
        d.setFilters = new pa,
        g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = S.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        }
        ;
        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function ra(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}),
                            i = j[b.uniqueID] || (j[b.uniqueID] = {}),
                            (h = i[d]) && h[0] === w && h[1] === f)
                                return k[2] = h[2];
                            if (i[d] = k,
                            k[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fa(a, b[d], c);
            return c
        }
        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f),
                j && b.push(h)));
            return g
        }
        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)),
            e && !e[u] && (e = va(e, f)),
            ha(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = ua(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = ua(r === g ? r.splice(o, r.length) : r),
                    e ? e(null, g, r, i) : H.apply(g, r)
            })
        }
        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                return a === b
            }, h, !0), l = ra(function(a) {
                return J(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null,
                e
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches),
                    c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }
        function xa(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0,
                        g || l.ownerDocument === n || (m(l),
                        h = !p);
                        while (q = a[o++])
                            if (q(l, g || n, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = y)
                    }
                    c && ((l = !q && l) && r--,
                    f && t.push(l))
                }
                if (r += s,
                c && s !== r) {
                    o = 0;
                    while (q = b[o++])
                        q(t, u, g, h);
                    if (f) {
                        if (r > 0)
                            while (s--)
                                t[s] || u[s] || (u[s] = F.call(i));
                        u = ua(u)
                    }
                    H.apply(i, u),
                    k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                }
                return k && (w = y,
                j = v),
                t
            };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = wa(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [],
            1 === o.length) {
                if (j = o[0] = o[0].slice(0),
                j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0],
                    !b)
                        return e;
                    n && (b = b.parentNode),
                    a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i],
                    d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1),
                        a = f.length && qa(j),
                        !a)
                            return H.apply(e, f),
                            e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b),
            e
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }),
        ia(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        fa
    }(a);
    n.find = t,
    n.expr = t.selectors,
    n.expr[":"] = n.expr.pseudos,
    n.uniqueSort = n.unique = t.uniqueSort,
    n.text = t.getText,
    n.isXMLDoc = t.isXML,
    n.contains = t.contains;
    var u = function(a, b, c) {
        var d = []
          , e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
            if (1 === a.nodeType) {
                if (e && n(a).is(c))
                    break;
                d.push(a)
            }
        return d
    }
      , v = function(a, b) {
        for (var c = []; a; a = a.nextSibling)
            1 === a.nodeType && a !== b && c.push(a);
        return c
    }
      , w = n.expr.match.needsContext
      , x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return n.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (y.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    n.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (n.contains(d[b], this))
                            return !0
                }));
            for (b = 0; e > b; b++)
                n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c),
            c.selector = this.selector ? this.selector + " " + a : a,
            c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function(a, b, c) {
        var e, f;
        if (!a)
            return this;
        if (c = c || A,
        "string" == typeof a) {
            if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a),
            !e || !e[1] && b)
                return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b,
                n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)),
                x.test(e[1]) && n.isPlainObject(b))
                    for (e in b)
                        n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            if (f = d.getElementById(e[2]),
            f && f.parentNode) {
                if (f.id !== e[2])
                    return A.find(a);
                this.length = 1,
                this[0] = f
            }
            return this.context = d,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        n.makeArray(a, this))
    }
    ;
    C.prototype = n.fn,
    A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/
      , E = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function F(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = n.filter(d, e)),
            this.length > 1 && (E[a] || (e = n.uniqueSort(e)),
            D.test(a) && (e = e.reverse())),
            this.pushStack(e)
        }
    });
    var G = /\S+/g;
    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function() {
            for (e = a.once,
            d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length)
                    f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length,
                    c = !1)
            }
            a.memory || (c = !1),
            b = !1,
            e && (f = c ? [] : "")
        }, j = {
            add: function() {
                return f && (c && !b && (h = f.length - 1,
                g.push(c)),
                function d(b) {
                    n.each(b, function(b, c) {
                        n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                    })
                }(arguments),
                c && !b && i()),
                this
            },
            remove: function() {
                return n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c)) > -1)
                        f.splice(c, 1),
                        h >= c && h--
                }),
                this
            },
            has: function(a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0
            },
            empty: function() {
                return f && (f = []),
                this
            },
            disable: function() {
                return e = g = [],
                f = c = "",
                this
            },
            disabled: function() {
                return !f
            },
            lock: function() {
                return e = !0,
                c || j.disable(),
                this
            },
            locked: function() {
                return !!e
            },
            fireWith: function(a, c) {
                return e || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                g.push(c),
                b || i()),
                this
            },
            fire: function() {
                return j.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return j
    }
    ,
    n.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            n.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(d) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? e.call(arguments) : d,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (d > 1)
                for (i = new Array(d),
                j = new Array(d),
                k = new Array(d); d > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a),
        this
    }
    ,
    n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0,
            a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]),
            n.fn.triggerHandler && (n(d).triggerHandler("ready"),
            n(d).off("ready"))))
        }
    });
    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K),
        a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K),
        a.detachEvent("onload", K))
    }
    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(),
        n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(),
            "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll)
                a.setTimeout(n.ready);
            else if (d.addEventListener)
                d.addEventListener("DOMContentLoaded", K),
                a.addEventListener("load", K);
            else {
                d.attachEvent("onreadystatechange", K),
                a.attachEvent("onload", K);
                var c = !1;
                try {
                    c = null == a.frameElement && d.documentElement
                } catch (e) {}
                c && c.doScroll && !function f() {
                    if (!n.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (b) {
                            return a.setTimeout(f, 50)
                        }
                        J(),
                        n.ready()
                    }
                }()
            }
        return I.promise(b)
    }
    ,
    n.ready.promise();
    var L;
    for (L in n(l))
        break;
    l.ownFirst = "0" === L,
    l.inlineBlockNeedsLayout = !1,
    n(function() {
        var a, b, c, e;
        c = d.getElementsByTagName("body")[0],
        c && c.style && (b = d.createElement("div"),
        e = d.createElement("div"),
        e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        c.appendChild(e).appendChild(b),
        "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth,
        a && (c.style.zoom = 1)),
        c.removeChild(e))
    }),
    function() {
        var a = d.createElement("div");
        l.deleteExpando = !0;
        try {
            delete a.test
        } catch (b) {
            l.deleteExpando = !1
        }
        a = null
    }();
    var M = function(a) {
        var b = n.noData[(a.nodeName + " ").toLowerCase()]
          , c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    }
      , N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , O = /([A-Z])/g;
    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else
                c = void 0;
        }
        return c
    }
    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando, i = a.nodeType, j = i ? n.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)
                return k || (k = i ? a[h] = c.pop() || n.guid++ : h),
                j[k] || (j[k] = i ? {} : {
                    toJSON: n.noop
                }),
                "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)),
                g = j[k],
                e || (g.data || (g.data = {}),
                g = g.data),
                void 0 !== d && (g[n.camelCase(b)] = d),
                "string" == typeof b ? (f = g[b],
                null == f && (f = g[n.camelCase(b)])) : f = g,
                f
        }
    }
    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType, g = f ? n.cache : a, h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b),
                    b = b in d ? [b] : b.split(" ")),
                    e = b.length;
                    while (e--)
                        delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d))
                        return
                }
                (c || (delete g[h].data,
                Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando],
            !!a && !Q(a)
        },
        data: function(a, b, c) {
            return R(a, b, c)
        },
        removeData: function(a, b) {
            return S(a, b)
        },
        _data: function(a, b, c) {
            return R(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return S(a, b, !0)
        }
    }),
    n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f),
                1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)),
                        P(f, d, e[d])));
                    n._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                n.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                n.data(this, a, b)
            }) : f ? P(f, a, n.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                n.removeData(this, a)
            })
        }
    }),
    n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = n._data(a, b),
            c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = n._queueHooks(a, b)
              , g = function() {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    n._removeData(a, b + "queue"),
                    n._removeData(a, c)
                })
            })
        }
    }),
    n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = n._data(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    }),
    function() {
        var a;
        l.shrinkWrapBlocks = function() {
            if (null != a)
                return a;
            a = !1;
            var b, c, e;
            return c = d.getElementsByTagName("body")[0],
            c && c.style ? (b = d.createElement("div"),
            e = d.createElement("div"),
            e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            c.appendChild(e).appendChild(b),
            "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            b.appendChild(d.createElement("div")).style.width = "5px",
            a = 3 !== b.offsetWidth),
            c.removeChild(e),
            a) : void 0
        }
    }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$","i")
      , V = ["Top", "Right", "Bottom", "Left"]
      , W = function(a, b) {
        return a = b || a,
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    };
    function X(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur()
        }
        : function() {
            return n.css(a, b, "")
        }
        , i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3],
            c = c || [],
            k = +i || 1;
            do
                f = f || ".5",
                k /= f,
                n.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0,
        e = c[1] ? k + (c[1] + 1) * c[2] : +c[2],
        d && (d.unit = j,
        d.start = k,
        d.end = e)),
        e
    }
    var Y = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)
                Y(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        n.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(n(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , Z = /^(?:checkbox|radio)$/i
      , $ = /<([\w:-]+)/
      , _ = /^$|\/(?:java|ecma)script/i
      , aa = /^\s+/
      , ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    function ca(a) {
        var b = ba.split("|")
          , c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    !function() {
        var a = d.createElement("div")
          , b = d.createDocumentFragment()
          , c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        l.leadingWhitespace = 3 === a.firstChild.nodeType,
        l.tbody = !a.getElementsByTagName("tbody").length,
        l.htmlSerialize = !!a.getElementsByTagName("link").length,
        l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML,
        c.type = "checkbox",
        c.checked = !0,
        b.appendChild(c),
        l.appendChecked = c.checked,
        a.innerHTML = "<textarea>x</textarea>",
        l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue,
        b.appendChild(a),
        c = d.createElement("input"),
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        a.appendChild(c),
        l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
        l.noCloneEvent = !!a.addEventListener,
        a[n.expando] = 1,
        l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option,
    da.tbody = da.tfoot = da.colgroup = da.caption = da.thead,
    da.th = da.td;
    function ea(a, b) {
        var c, d, e = 0, f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [],
            c = a.childNodes || a; null != (d = c[e]); e++)
                !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }
    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var ga = /<|&#?\w+;/
      , ha = /<tbody/i;
    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }
    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r],
            g || 0 === g)
                if ("object" === n.type(g))
                    n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
                    i = i || p.appendChild(b.createElement("div")),
                    j = ($.exec(g) || ["", ""])[1].toLowerCase(),
                    m = da[j] || da._default,
                    i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2],
                    f = m[0];
                    while (f--)
                        i = i.lastChild;
                    if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])),
                    !l.tbody) {
                        g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild,
                        f = g && g.childNodes.length;
                        while (f--)
                            n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
                    }
                    n.merge(q, i.childNodes),
                    i.textContent = "";
                    while (i.firstChild)
                        i.removeChild(i.firstChild);
                    i = p.lastChild
                } else
                    q.push(b.createTextNode(g));
        i && p.removeChild(i),
        l.appendChecked || n.grep(ea(q, "input"), ia),
        r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1)
                e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g),
            i = ea(p.appendChild(g), "script"),
            h && fa(i),
            c) {
                f = 0;
                while (g = i[f++])
                    _.test(g.type || "") && c.push(g)
            }
        return i = null,
        p
    }
    !function() {
        var b, c, e = d.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            c = "on" + b,
            (l[b] = c in a) || (e.setAttribute(c, "t"),
            l[b] = e.attributes[c].expando === !1);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i
      , la = /^key/
      , ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , na = /^(?:focusinfocus|focusoutblur)$/
      , oa = /^([^.]*)(?:\.(.+)|)/;
    function pa() {
        return !0
    }
    function qa() {
        return !1
    }
    function ra() {
        try {
            return d.activeElement
        } catch (a) {}
    }
    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c,
            c = void 0);
            for (h in b)
                sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c,
        d = c = void 0) : null == e && ("string" == typeof c ? (e = d,
        d = void 0) : (e = d,
        d = c,
        c = void 0)),
        e === !1)
            e = qa;
        else if (!e)
            return a;
        return 1 === f && (g = e,
        e = function(a) {
            return n().off(a),
            g.apply(this, arguments)
        }
        ,
        e.guid = g.guid || (g.guid = n.guid++)),
        a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c,
                c = i.handler,
                e = i.selector),
                c.guid || (c.guid = n.guid++),
                (g = r.events) || (g = r.events = {}),
                (k = r.handle) || (k = r.handle = function(a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }
                ,
                k.elem = a),
                b = (b || "").match(G) || [""],
                h = b.length;
                while (h--)
                    f = oa.exec(b[h]) || [],
                    o = q = f[1],
                    p = (f[2] || "").split(".").sort(),
                    o && (j = n.event.special[o] || {},
                    o = (e ? j.delegateType : j.bindType) || o,
                    j = n.event.special[o] || {},
                    l = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i),
                    (m = g[o]) || (m = g[o] = [],
                    m.delegateCount = 0,
                    j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))),
                    j.add && (j.add.call(a, l),
                    l.handler.guid || (l.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
                    n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""],
                j = b.length;
                while (j--)
                    if (h = oa.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o) {
                        l = n.event.special[o] || {},
                        o = (d ? l.delegateType : l.bindType) || o,
                        m = k[o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        i = f = m.length;
                        while (f--)
                            g = m[f],
                            !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1),
                            g.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle),
                        delete k[o])
                    } else
                        for (o in k)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle,
                n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d,
            3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."),
            q = r.shift(),
            r.sort()),
            h = q.indexOf(":") < 0 && "on" + q,
            b = b[n.expando] ? b : new n.Event(q,"object" == typeof b && b),
            b.isTrigger = f ? 2 : 3,
            b.namespace = r.join("."),
            b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = e),
            c = null == c ? [b] : n.makeArray(c, [b]),
            l = n.event.special[q] || {},
            f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q,
                    na.test(j + q) || (i = i.parentNode); i; i = i.parentNode)
                        p.push(i),
                        m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped())
                    b.type = o > 1 ? j : l.bindType || q,
                    g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"),
                    g && g.apply(i, c),
                    g = h && i[h],
                    g && g.apply && M(i) && (b.result = g.apply(i, c),
                    b.result === !1 && b.preventDefault());
                if (b.type = q,
                !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h],
                    m && (e[h] = null),
                    n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0,
                    m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (n._data(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a,
            a.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g,
                        a.data = g.data,
                        d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                        void 0 !== d && (a.result = d) === !1 && (a.preventDefault(),
                        a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [],
                        c = 0; h > c; c++)
                            f = b[c],
                            e = f.selector + " ",
                            void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length),
                            d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        fix: function(a) {
            if (a[n.expando])
                return a;
            var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}),
            e = h.props ? this.props.concat(h.props) : this.props,
            a = new n.Event(g),
            b = e.length;
            while (b--)
                c = e[b],
                a[c] = g[c];
            return a.target || (a.target = g.srcElement || d),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button, h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d,
                f = e.documentElement,
                c = e.body,
                a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0),
                a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)),
                !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h),
                a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ra() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ra() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b),
            d.isDefaultPrevented() && c.preventDefault()
        }
    },
    n.removeEvent = d.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }
    : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null),
        a.detachEvent(d, c))
    }
    ,
    n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a,
        b && n.extend(this, b),
        this.timeStamp = a && a.timeStamp || n.now(),
        void (this[n.expando] = !0)) : new n.Event(a,b)
    }
    ,
    n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa,
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa,
            a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    l.submit || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target
                  , c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                    a._submitBubble = !0
                }),
                n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble,
            this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }),
    l.change || (n.event.special.change = {
        setup: function() {
            return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }),
            n.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1),
                n.event.simulate("change", this, a)
            })),
            !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }),
                n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"),
            !ka.test(this.nodeName)
        }
    }),
    l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = n._data(d, b);
                e || d.addEventListener(a, c, !0),
                n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0),
                n._removeData(d, b))
            }
        }
    }),
    n.fn.extend({
        on: function(a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b,
            b = void 0),
            c === !1 && (c = qa),
            this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g
      , ua = new RegExp("<(?:" + ba + ")[\\s/>]","i")
      , va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , wa = /<script|<style|<link/i
      , xa = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ya = /^true\/(.*)/
      , za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Aa = ca(d)
      , Ba = Aa.appendChild(d.createElement("div"));
    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type,
        a
    }
    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a), g = n._data(b, f), h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h)
                    for (d = 0,
                    e = h[c].length; e > d; d++)
                        n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }
    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(),
            !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events)
                    n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text,
            Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
            l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }
    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q))
            return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())),
                Ha(f, b, c, d)
            });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d),
        e = k.firstChild,
        1 === k.childNodes.length && (k = e),
        e || d)) {
            for (i = n.map(ea(k, "script"), Da),
            h = i.length; o > m; m++)
                g = k,
                m !== p && (g = n.clone(g, !0, !0),
                h && n.merge(i, ea(g, "script"))),
                c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument,
                n.map(i, Ea),
                m = 0; h > m; m++)
                    g = i[m],
                    _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }
    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || n.cleanData(ea(d)),
            d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")),
            d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML,
            Ba.removeChild(f = Ba.firstChild)),
            !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f),
                h = ea(a),
                g = 0; null != (e = h[g]); ++g)
                    d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a),
                    d = d || ea(f),
                    g = 0; null != (e = h[g]); g++)
                        Fa(e, d[g]);
                else
                    Fa(a, f);
            return d = ea(f, "script"),
            d.length > 0 && fa(d, !i && ea(a, "script")),
            d = h = e = null,
            f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i],
                g = f && j[f])) {
                    if (g.events)
                        for (e in g.events)
                            m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f],
                    k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i),
                    c.push(f))
                }
        }
    }),
    n.fn.extend({
        domManip: Ha,
        detach: function(a) {
            return Ia(this, a, !0)
        },
        remove: function(a) {
            return Ia(this, a)
        },
        text: function(a) {
            return Y(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild)
                    a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return Y(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (n.cleanData(ea(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)),
                c && c.replaceChild(b, this))
            }, a)
        }
    }),
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++)
                c = d === h ? this : this.clone(!0),
                n(f[d])[b](c),
                g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };
    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body)
          , d = n.css(c[0], "display");
        return c.detach(),
        d
    }
    function Ma(a) {
        var b = d
          , c = Ka[a];
        return c || (c = La(a, b),
        "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = (Ja[0].contentWindow || Ja[0].contentDocument).document,
        b.write(),
        b.close(),
        c = La(a, b),
        Ja.detach()),
        Ka[a] = c),
        c
    }
    var Na = /^margin/
      , Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$","i")
      , Pa = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
      , Qa = d.documentElement;
    !function() {
        var b, c, e, f, g, h, i = d.createElement("div"), j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5",
            l.opacity = "0.5" === j.style.opacity,
            l.cssFloat = !!j.style.cssFloat,
            j.style.backgroundClip = "content-box",
            j.cloneNode(!0).style.backgroundClip = "",
            l.clearCloneStyle = "content-box" === j.style.backgroundClip,
            i = d.createElement("div"),
            i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            j.innerHTML = "",
            i.appendChild(j),
            l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing,
            n.extend(l, {
                reliableHiddenOffsets: function() {
                    return null == b && k(),
                    f
                },
                boxSizingReliable: function() {
                    return null == b && k(),
                    e
                },
                pixelMarginRight: function() {
                    return null == b && k(),
                    c
                },
                pixelPosition: function() {
                    return null == b && k(),
                    b
                },
                reliableMarginRight: function() {
                    return null == b && k(),
                    g
                },
                reliableMarginLeft: function() {
                    return null == b && k(),
                    h
                }
            });
            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i),
                j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                b = e = h = !1,
                c = g = !0,
                a.getComputedStyle && (l = a.getComputedStyle(j),
                b = "1%" !== (l || {}).top,
                h = "2px" === (l || {}).marginLeft,
                e = "4px" === (l || {
                    width: "4px"
                }).width,
                j.style.marginRight = "50%",
                c = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight,
                k = j.appendChild(d.createElement("div")),
                k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                k.style.marginRight = k.style.width = "0",
                j.style.width = "1px",
                g = !parseFloat((a.getComputedStyle(k) || {}).marginRight),
                j.removeChild(k)),
                j.style.display = "none",
                f = 0 === j.getClientRects().length,
                f && (j.style.display = "",
                j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                j.childNodes[0].style.borderCollapse = "separate",
                k = j.getElementsByTagName("td"),
                k[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                f = 0 === k[0].offsetHeight,
                f && (k[0].style.display = "",
                k[1].style.display = "none",
                f = 0 === k[0].offsetHeight)),
                m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a),
        c.getComputedStyle(b)
    }
    ,
    Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f),
        void 0 === g ? g : g + ""
    }
    ) : Qa.currentStyle && (Ra = function(a) {
        return a.currentStyle
    }
    ,
    Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a),
        g = c ? c[b] : void 0,
        null == g && h && h[b] && (g = h[b]),
        Oa.test(g) && !Ta.test(b) && (d = h.left,
        e = a.runtimeStyle,
        f = e && e.left,
        f && (e.left = a.currentStyle.left),
        h.left = "fontSize" === b ? "1em" : g,
        g = h.pixelLeft + "px",
        h.left = d,
        f && (e.left = f)),
        void 0 === g ? g : g + "" || "auto"
    }
    );
    function Ua(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i
      , Wa = /opacity\s*=\s*([^)]*)/i
      , Xa = /^(none|table(?!-c[ea]).+)/
      , Ya = new RegExp("^(" + T + ")(.*)$","i")
      , Za = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , $a = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , _a = ["Webkit", "O", "Moz", "ms"]
      , ab = d.createElement("div").style;
    function bb(a) {
        if (a in ab)
            return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1)
          , c = _a.length;
        while (c--)
            if (a = _a[c] + b,
            a in ab)
                return a
    }
    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = n._data(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d),
            (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += n.css(a, c + V[f], !0, e)),
            d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e),
            "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }
    function fb(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = Ra(a)
          , g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Sa(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            Oa.test(e))
                return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h),
                g = n.cssHooks[b] || n.cssHooks[h],
                void 0 === c)
                    return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c,
                "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e),
                f = "number"),
                null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")),
                l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                !(g && "set"in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = c
                    } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h),
            g = n.cssHooks[b] || n.cssHooks[h],
            g && "get"in g && (f = g.get(a, !0, c)),
            void 0 === f && (f = Sa(a, b, d)),
            "normal" === f && b in $a && (f = $a[b]),
            "" === c || c ? (e = parseFloat(f),
            c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }),
    n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style
              , d = a.currentStyle
              , e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
              , f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"),
            "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }),
    n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        }, Sa, [a, "marginRight"]) : void 0
    }),
    n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }),
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Na.test(a) || (n.cssHooks[a + b].set = db)
    }),
    n.fn.extend({
        css: function(a, b) {
            return Y(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return cb(this, !0)
        },
        hide: function() {
            return cb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a,b,c,d,e)
    }
    n.Tween = gb,
    gb.prototype = {
        constructor: gb,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || n.easing._default,
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : gb.propHooks._default.set(this),
            this
        }
    },
    gb.prototype.init.prototype = gb.prototype,
    gb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    },
    gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    },
    n.fx = gb.prototype.init,
    n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/, kb = /queueHooks$/;
    function lb() {
        return a.setTimeout(function() {
            hb = void 0
        }),
        hb = n.now()
    }
    function mb(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = V[e],
            d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this, o = {}, p = a.style, q = a.nodeType && W(a), r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        m.always(function() {
            m.always(function() {
                h.unqueued--,
                n.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY],
        j = n.css(a, "display"),
        k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j,
        "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        c.overflow && (p.overflow = "hidden",
        l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0],
            p.overflowX = c.overflow[1],
            p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            jb.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d])
                        continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else
                j = void 0;
        if (n.isEmptyObject(o))
            "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden"in r && (q = r.hidden) : r = n._data(a, "fxshow", {}),
            f && (r.hidden = !q),
            q ? n(a).show() : m.done(function() {
                n(a).hide()
            }),
            m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o)
                    n.style(a, b, o[b])
            });
            for (d in o)
                g = nb(q ? r[d] : 0, d, m),
                d in r || (r[d] = g.start,
                q && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c),
            e = b[d],
            f = a[c],
            n.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = n.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function qb(a, b, c) {
        var d, e, f = 0, g = qb.prefilters.length, h = n.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {},
                easing: n.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: hb || lb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]),
                h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts))
                return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
                d;
        return n.map(k, nb, j),
        n.isFunction(j.opts.start) && j.opts.start.call(a, j),
        n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return X(c.elem, a, U.exec(b), c),
                c
            }
            ]
        },
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.match(G);
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                qb.tweeners[c] = qb.tweeners[c] || [],
                qb.tweeners[c].unshift(b)
        },
        prefilters: [ob],
        prefilter: function(a, b) {
            b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
        }
    }),
    n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default,
        null != d.queue && d.queue !== !0 || (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(W).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a)
              , f = n.speed(b, c, d)
              , g = function() {
                var b = qb(this, n.extend({}, a), f);
                (e || n._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = n.timers
                  , g = n._data(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && kb.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                !b && c || n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = n._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
        }
    }),
    n.each({
        slideDown: mb("show"),
        slideUp: mb("hide"),
        slideToggle: mb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    n.timers = [],
    n.fx.tick = function() {
        var a, b = n.timers, c = 0;
        for (hb = n.now(); c < b.length; c++)
            a = b[c],
            a() || b[c] !== a || b.splice(c--, 1);
        b.length || n.fx.stop(),
        hb = void 0
    }
    ,
    n.fx.timer = function(a) {
        n.timers.push(a),
        a() ? n.fx.start() : n.timers.pop()
    }
    ,
    n.fx.interval = 13,
    n.fx.start = function() {
        ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
    }
    ,
    n.fx.stop = function() {
        a.clearInterval(ib),
        ib = null
    }
    ,
    n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    n.fn.delay = function(b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b,
        c = c || "fx",
        this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    }
    ,
    function() {
        var a, b = d.createElement("input"), c = d.createElement("div"), e = d.createElement("select"), f = e.appendChild(d.createElement("option"));
        c = d.createElement("div"),
        c.setAttribute("className", "t"),
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        a = c.getElementsByTagName("a")[0],
        b.setAttribute("type", "checkbox"),
        c.appendChild(b),
        a = c.getElementsByTagName("a")[0],
        a.style.cssText = "top:1px",
        l.getSetAttribute = "t" !== c.className,
        l.style = /top/.test(a.getAttribute("style")),
        l.hrefNormalized = "/a" === a.getAttribute("href"),
        l.checkOn = !!b.value,
        l.optSelected = f.selected,
        l.enctype = !!d.createElement("form").enctype,
        e.disabled = !0,
        l.optDisabled = !f.disabled,
        b = d.createElement("input"),
        b.setAttribute("value", ""),
        l.input = "" === b.getAttribute("value"),
        b.value = "t",
        b.setAttribute("type", "radio"),
        l.radioValue = "t" === b.value
    }();
    var rb = /\r/g
      , sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }),
    n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)
                        if (d = e[g],
                        n.inArray(n.valHooks.option.get(d), f) > -1)
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        else
                            d.selected = !1;
                    return c || (a.selectedIndex = -1),
                    e
                }
            }
        }
    }),
    n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        },
        l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var tb, ub, vb = n.expr.attrHandle, wb = /^(?:checked|selected)$/i, xb = l.getSetAttribute, yb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }),
    n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(),
                e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)),
                void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""),
                c) : e && "get"in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b),
                null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c,
                    n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""),
                    a.removeAttribute(xb ? c : d)
        }
    }),
    ub = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0,
            c
        }
    },
    n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
            var e, f;
            return d || (f = vb[b],
            vb[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            vb[b] = f),
            e
        }
        : vb[b] = function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }),
    yb && xb || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void (a.defaultValue = b) : tb && tb.set(a, b, c)
        }
    }),
    xb || (tb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
            d.value = b += "",
            "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    },
    vb.id = vb.name = vb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }
    ,
    n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: tb.set
    },
    n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            tb.set(a, "" === b ? !1 : b, c)
        }
    },
    n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"),
                c) : void 0
            }
        }
    })),
    l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var zb = /^(?:input|select|textarea|button|object)$/i
      , Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = void 0,
                    delete this[a]
                } catch (b) {}
            })
        }
    }),
    n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b,
                e = n.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }),
    l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
            null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex)
        }
    }),
    n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }),
    l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;
    function Cb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, Cb(this)))
                });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c),
                    d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d),
                        e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, Cb(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c),
                    d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1)
                                d = d.replace(" " + f + " ", " ");
                        h = n.trim(d),
                        e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Cb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0,
                    e = n(this),
                    f = a.match(G) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    void 0 !== a && "boolean" !== c || (b = Cb(this),
                    b && n._data(this, "__className__", b),
                    n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1)
                    return !0;
            return !1
        }
    }),
    n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Db = a.location
      , Eb = n.now()
      , Fb = /\?/
      , Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c, d = null, e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0),
            0 === d ? a : (c = e || b,
            d += !f - !e,
            "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }
    ,
    n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b)
            return null;
        try {
            a.DOMParser ? (d = new a.DOMParser,
            c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"),
            c.async = "false",
            c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b),
        c
    }
    ;
    var Hb = /#.*$/
      , Ib = /([?&])_=[^&]*/
      , Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
      , Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Lb = /^(?:GET|HEAD)$/
      , Mb = /^\/\//
      , Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , Ob = {}
      , Pb = {}
      , Qb = "*/".concat("*")
      , Rb = Db.href
      , Sb = Nb.exec(Rb.toLowerCase()) || [];
    function Tb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Ub(a, b, c, d) {
        var e = {}
          , f = a === Pb;
        function g(h) {
            var i;
            return e[h] = !0,
            n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c),
        a
    }
    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b,
            b = void 0),
            c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c), m = l.context || l, o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event, p = n.Deferred(), q = n.Callbacks("once memory"), r = l.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === u) {
                        if (!k) {
                            k = {};
                            while (b = Jb.exec(g))
                                k[b[1].toLowerCase()] = b[2]
                        }
                        b = k[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? g : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a,
                    s[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return u || (l.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > u)
                            for (b in a)
                                r[b] = [r[b], a[b]];
                        else
                            w.always(a[w.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || v;
                    return j && j.abort(b),
                    y(0, b),
                    this
                }
            };
            if (p.promise(w).complete = q.add,
            w.success = w.done,
            w.error = w.fail,
            l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"),
            l.type = c.method || c.type || l.method || l.type,
            l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""],
            null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()),
            l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))),
            l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)),
            Ub(Ob, l, c, w),
            2 === u)
                return w;
            i = n.event && l.global,
            i && 0 === n.active++ && n.event.trigger("ajaxStart"),
            l.type = l.type.toUpperCase(),
            l.hasContent = !Lb.test(l.type),
            f = l.url,
            l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data,
            delete l.data),
            l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)),
            l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]),
            n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])),
            (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType),
            w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers)
                w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u))
                return w.abort();
            v = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            })
                w[e](l[e]);
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1,
                i && o.trigger("ajaxSend", [w, l]),
                2 === u)
                    return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1,
                    j.send(s, y)
                } catch (x) {
                    if (!(2 > u))
                        throw x;
                    y(-1, x)
                }
            } else
                y(-1, "No Transport");
            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2,
                h && a.clearTimeout(h),
                j = void 0,
                g = e || "",
                w.readyState = b > 0 ? 4 : 0,
                k = b >= 200 && 300 > b || 304 === b,
                d && (v = Wb(l, w, d)),
                v = Xb(l, v, w, k),
                k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"),
                x && (n.lastModified[f] = x),
                x = w.getResponseHeader("etag"),
                x && (n.etag[f] = x)),
                204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state,
                s = v.data,
                t = v.error,
                k = !t)) : (t = y,
                !b && y || (y = "error",
                0 > b && (b = 0))),
                w.status = b,
                w.statusText = (c || y) + "",
                k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]),
                w.statusCode(r),
                r = void 0,
                i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]),
                q.fireWith(m, [w, y]),
                i && (o.trigger("ajaxComplete", [w, l]),
                --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }),
    n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }),
    n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType)
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }
    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a))
            return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type)
                return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
    }
    ,
    n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    }
    ;
    var $b = /%20/g
      , _b = /\[\]$/
      , ac = /\r?\n/g
      , bc = /^(?:submit|button|image|reset|file)$/i
      , cc = /^(?:input|select|textarea|keygen)/i;
    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function(b, e) {
                c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== n.type(b))
            d(a, b);
        else
            for (e in b)
                dc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
        n.isArray(a) || a.jquery && !n.isPlainObject(a))
            n.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                dc(c, a[c], b, e);
        return d.join("&").replace($b, "+")
    }
    ,
    n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ac, "\r\n")
                }
            }).get()
        }
    }),
    n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
    }
    : hc;
    var ec = 0
      , fc = {}
      , gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in fc)
            fc[a](void 0, !0)
    }),
    l.cors = !!gc && "withCredentials"in gc,
    gc = l.ajax = !!gc,
    gc && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(), h = ++ec;
                    if (g.open(b.type, b.url, b.async, b.username, b.password),
                    b.xhrFields)
                        for (f in b.xhrFields)
                            g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType),
                    b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d)
                        void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null),
                    c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete fc[h],
                            c = void 0,
                            g.onreadystatechange = n.noop,
                            d)
                                4 !== g.readyState && g.abort();
                            else {
                                j = {},
                                f = g.status,
                                "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }
                    ,
                    b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });
    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a),
                a
            }
        }
    }),
    n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    }),
    n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"),
                    b.async = !0,
                    a.scriptCharset && (b.charset = a.scriptCharset),
                    b.src = a.url,
                    b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null,
                        b.parentNode && b.parentNode.removeChild(b),
                        b = null,
                        c || f(200, "success"))
                    }
                    ,
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = []
      , kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return this[a] = !0,
            a
        }
    }),
    n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            jc.push(e)),
            g && n.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || d;
        var e = x.exec(a)
          , f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f),
        f && f.length && n(f).remove(),
        n.merge([], e.childNodes))
    }
    ;
    var lc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc)
            return lc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)),
        a = a.slice(0, h)),
        n.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }
        ),
        this
    }
    ,
    n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = n.css(a, "top"),
            i = n.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
    n.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            if (f)
                return b = f.documentElement,
                n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()),
                c = mc(f),
                {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                n.nodeName(a[0], "html") || (c = a.offset()),
                c.top += n.css(a[0], "borderTopWidth", !0),
                c.left += n.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))
                    a = a.offsetParent;
                return a || Qa
            })
        }
    }),
    n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this, function(a, d, e) {
                var f = mc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }),
    n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
            return c ? (c = Sa(a, b),
            Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }),
    n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }),
    n.fn.size = function() {
        return this.length
    }
    ,
    n.fn.andSelf = n.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var nc = a.jQuery
      , oc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = oc),
        b && a.jQuery === n && (a.jQuery = nc),
        n
    }
    ,
    b || (a.jQuery = a.$ = n),
    n
});
jQuery.noConflict();
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
function(a, b, c) {
    function d(c) {
        var d = b.console;
        f[c] || (f[c] = !0,
        a.migrateWarnings.push(c),
        d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c),
        a.migrateTrace && d.trace && d.trace()))
    }
    function e(b, c, e, f) {
        if (Object.defineProperty)
            try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(f),
                        e
                    },
                    set: function(a) {
                        d(f),
                        e = a
                    }
                })
            } catch (g) {}
        a._definePropertyBroken = !0,
        b[c] = e
    }
    a.migrateVersion = "1.4.1";
    var f = {};
    a.migrateWarnings = [],
    b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion),
    a.migrateTrace === c && (a.migrateTrace = !0),
    a.migrateReset = function() {
        f = {},
        a.migrateWarnings.length = 0
    }
    ,
    "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
    var g = a("<input/>", {
        size: 1
    }).attr("size") && a.attrFn
      , h = a.attr
      , i = a.attrHooks.value && a.attrHooks.value.get || function() {
        return null
    }
      , j = a.attrHooks.value && a.attrHooks.value.set || function() {
        return c
    }
      , k = /^(?:input|button)$/i
      , l = /^[238]$/
      , m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i
      , n = /^(?:checked|selected)$/i;
    e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"),
    a.attr = function(b, e, f, i) {
        var j = e.toLowerCase()
          , o = b && b.nodeType;
        return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"),
        b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"),
        !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
            get: function(b, d) {
                var e, f = a.prop(b, d);
                return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
            },
            set: function(b, c, d) {
                var e;
                return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d,
                e in b && (b[e] = !0),
                b.setAttribute(d, d.toLowerCase())),
                d
            }
        },
        n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")),
        h.call(a, b, e, f))
    }
    ,
    a.attrHooks.value = {
        get: function(a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"),
            b in a ? a.value : null)
        },
        set: function(a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"),
            void (a.value = b))
        }
    };
    var o, p, q = a.fn.init, r = a.find, s = a.parseJSON, t = /^\s*</, u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    a.fn.init = function(b, e, f) {
        var g, h;
        return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"),
        g[3] && d("$(html) HTML text after last tag is ignored"),
        "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"),
        a.error("JQMIGRATE: Invalid selector string (XSS)")),
        e && e.context && e.context.nodeType && (e = e.context),
        a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments),
        b && b.selector !== c ? (h.selector = b.selector,
        h.context = b.context) : (h.selector = "string" == typeof b ? b : "",
        b && (h.context = b.nodeType ? b : e || document)),
        h)
    }
    ,
    a.fn.init.prototype = a.fn,
    a.find = function(a) {
        var b = Array.prototype.slice.call(arguments);
        if ("string" == typeof a && u.test(a))
            try {
                document.querySelector(a)
            } catch (c) {
                a = a.replace(v, function(a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a),
                    d("Attribute selector with '#' must be quoted: " + b[0]),
                    b[0] = a
                } catch (e) {
                    d("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
        return r.apply(this, b)
    }
    ;
    var x;
    for (x in r)
        Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
    a.parseJSON = function(a) {
        return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"),
        null)
    }
    ,
    a.uaMatch = function(a) {
        a = a.toLowerCase();
        var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    }
    ,
    a.browser || (o = a.uaMatch(navigator.userAgent),
    p = {},
    o.browser && (p[o.browser] = !0,
    p.version = o.version),
    p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0),
    a.browser = p),
    e(a, "browser", a.browser, "jQuery.browser is deprecated"),
    a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode,
    e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"),
    e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"),
    a.sub = function() {
        function b(a, c) {
            return new b.fn.init(a,c)
        }
        a.extend(!0, b, this),
        b.superclass = this,
        b.fn = b.prototype = this(),
        b.fn.constructor = b,
        b.sub = this.sub,
        b.fn.init = function(d, e) {
            var f = a.fn.init.call(this, d, e, c);
            return f instanceof b ? f : b(f)
        }
        ,
        b.fn.init.prototype = b.fn;
        var c = b(document);
        return d("jQuery.sub() is deprecated"),
        b
    }
    ,
    a.fn.size = function() {
        return d("jQuery.fn.size() is deprecated; use the .length property"),
        this.length
    }
    ;
    var y = !1;
    a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
        var d = a.cssHooks[c] && a.cssHooks[c].get;
        d && (a.cssHooks[c].get = function() {
            var a;
            return y = !0,
            a = d.apply(this, arguments),
            y = !1,
            a
        }
        )
    }),
    a.swap = function(a, b, c, e) {
        var f, g, h = {};
        y || d("jQuery.swap() is undocumented and deprecated");
        for (g in b)
            h[g] = a.style[g],
            a.style[g] = b[g];
        f = c.apply(a, e || []);
        for (g in b)
            a.style[g] = h[g];
        return f
    }
    ,
    a.ajaxSetup({
        converters: {
            "text json": a.parseJSON
        }
    });
    var z = a.fn.data;
    a.fn.data = function(b) {
        var e, f, g = this[0];
        return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b),
        f = a._data(g, b),
        e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"),
        f)
    }
    ;
    var A = /\/(java|ecma)script/i;
    a.clean || (a.clean = function(b, c, e, f) {
        c = c || document,
        c = !c.nodeType && c[0] || c,
        c = c.ownerDocument || c,
        d("jQuery.clean() is deprecated");
        var g, h, i, j, k = [];
        if (a.merge(k, a.buildFragment(b, c).childNodes),
        e)
            for (i = function(a) {
                return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
            }
            ,
            g = 0; null != (h = k[g]); g++)
                a.nodeName(h, "script") && i(h) || (e.appendChild(h),
                "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i),
                k.splice.apply(k, [g + 1, 0].concat(j)),
                g += j.length));
        return k
    }
    );
    var B = a.event.add
      , C = a.event.remove
      , D = a.event.trigger
      , E = a.fn.toggle
      , F = a.fn.live
      , G = a.fn.die
      , H = a.fn.load
      , I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess"
      , J = new RegExp("\\b(?:" + I + ")\\b")
      , K = /(?:^|\s)hover(\.\S+|)\b/
      , L = function(b) {
        return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),
        b && b.replace(K, "mouseenter$1 mouseleave$1"))
    };
    a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"),
    a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"),
    a.event.add = function(a, b, c, e, f) {
        a !== document && J.test(b) && d("AJAX events should be attached to document: " + b),
        B.call(this, a, L(b || ""), c, e, f)
    }
    ,
    a.event.remove = function(a, b, c, d, e) {
        C.call(this, a, L(b) || "", c, d, e)
    }
    ,
    a.each(["load", "unload", "error"], function(b, c) {
        a.fn[c] = function() {
            var a = Array.prototype.slice.call(arguments, 0);
            return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"),
            a.splice(0, 0, c),
            arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a),
            this))
        }
    }),
    a.fn.toggle = function(b, c) {
        if (!a.isFunction(b) || !a.isFunction(c))
            return E.apply(this, arguments);
        d("jQuery.fn.toggle(handler, handler...) is deprecated");
        var e = arguments
          , f = b.guid || a.guid++
          , g = 0
          , h = function(c) {
            var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
            return a._data(this, "lastToggle" + b.guid, d + 1),
            c.preventDefault(),
            e[d].apply(this, arguments) || !1
        };
        for (h.guid = f; g < e.length; )
            e[g++].guid = f;
        return this.click(h)
    }
    ,
    a.fn.live = function(b, c, e) {
        return d("jQuery.fn.live() is deprecated"),
        F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e),
        this)
    }
    ,
    a.fn.die = function(b, c) {
        return d("jQuery.fn.die() is deprecated"),
        G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c),
        this)
    }
    ,
    a.event.trigger = function(a, b, c, e) {
        return c || J.test(a) || d("Global events are undocumented and deprecated"),
        D.call(this, a, b, c || document, e)
    }
    ,
    a.each(I.split("|"), function(b, c) {
        a.event.special[c] = {
            setup: function() {
                var b = this;
                return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                    a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                }),
                a._data(this, c, a.guid++)),
                !1
            },
            teardown: function() {
                return this !== document && a.event.remove(document, c + "." + a._data(this, c)),
                !1
            }
        }
    }),
    a.event.special.ready = {
        setup: function() {
            this === document && d("'ready' event is deprecated")
        }
    };
    var M = a.fn.andSelf || a.fn.addBack
      , N = a.fn.find;
    if (a.fn.andSelf = function() {
        return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
        M.apply(this, arguments)
    }
    ,
    a.fn.find = function(a) {
        var b = N.apply(this, arguments);
        return b.context = this.context,
        b.selector = this.selector ? this.selector + " " + a : a,
        b
    }
    ,
    a.Callbacks) {
        var O = a.Deferred
          , P = [["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"], ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]];
        a.Deferred = function(b) {
            var c = O()
              , e = c.promise();
            return c.pipe = e.pipe = function() {
                var b = arguments;
                return d("deferred.pipe() is deprecated"),
                a.Deferred(function(d) {
                    a.each(P, function(f, g) {
                        var h = a.isFunction(b[f]) && b[f];
                        c[g[1]](function() {
                            var b = h && h.apply(this, arguments);
                            b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                        })
                    }),
                    b = null
                }).promise()
            }
            ,
            c.isResolved = function() {
                return d("deferred.isResolved is deprecated"),
                "resolved" === c.state()
            }
            ,
            c.isRejected = function() {
                return d("deferred.isRejected is deprecated"),
                "rejected" === c.state()
            }
            ,
            b && b.call(c, c),
            c
        }
    }
}(jQuery, window);
(function(a) {
    a.fn.prettySocial = function() {
        var b = {
            pinterest: {
                url: "http://pinterest.com/pin/create/button/?url={{url}}&media={{media}}&description={{description}}",
                popup: {
                    width: 685,
                    height: 500
                }
            },
            facebook: {
                url: "https://www.facebook.com/sharer/sharer.php?s=100&p[title]={{title}}&p[summary]={{description}}&p[url]={{url}}&p[images][0]={{media}}",
                popup: {
                    width: 626,
                    height: 436
                }
            },
            twitter: {
                url: "https://twitter.com/share?url={{url}}&via={{via}}&text={{description}}",
                popup: {
                    width: 685,
                    height: 500
                }
            },
            googleplus: {
                url: "https://plus.google.com/share?url={{url}}",
                popup: {
                    width: 600,
                    height: 600
                }
            },
            linkedin: {
                url: "https://www.linkedin.com/shareArticle?mini=true&url={{url}}&title={{title}}&summary={{description}}+&source={{via}}",
                popup: {
                    width: 600,
                    height: 600
                }
            }
        }
          , d = function(f, e) {
            var h = (window.innerWidth / 2) - (f.popup.width / 2)
              , g = (window.innerHeight / 2) - (f.popup.height / 2);
            return window.open(e, "", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + f.popup.width + ", height=" + f.popup.height + ", top=" + g + ", left=" + h)
        }
          , c = function(f, g) {
            var e = f.url.replace(/{{url}}/g, encodeURIComponent(g.url)).replace(/{{title}}/g, encodeURIComponent(g.title)).replace(/{{description}}/g, encodeURIComponent(g.description)).replace(/{{media}}/g, encodeURIComponent(g.media)).replace(/{{via}}/g, encodeURIComponent(g.via));
            return e
        };
        return this.each(function() {
            var i = a(this);
            var g = i.data("type")
              , f = b[g] || null;
            if (!f) {
                a.error("Social site is not set.")
            }
            var h = {
                url: i.data("url") || "",
                title: i.data("title") || "",
                description: i.data("description") || "",
                media: i.data("media") || "",
                via: i.data("via") || ""
            };
            var e = c(f, h);
            if (navigator.userAgent.match(/Android|IEMobile|BlackBerry|iPhone|iPad|iPod|Opera Mini/i)) {
                i.bind("touchstart", function(j) {
                    if (j.originalEvent.touches.length > 1) {
                        return
                    }
                    i.data("touchWithoutScroll", true)
                }).bind("touchmove", function() {
                    i.data("touchWithoutScroll", false);
                    return
                }).bind("touchend", function(k) {
                    k.preventDefault();
                    var j = i.data("touchWithoutScroll");
                    if (k.originalEvent.touches.length > 1 || !j) {
                        return
                    }
                    d(f, e)
                })
            } else {
                i.bind("click", function(j) {
                    j.preventDefault();
                    d(f, e)
                })
            }
        })
    }
}
)(jQuery);
!function(a, b, c, d) {
    function e(b, c) {
        this.settings = null,
        this.options = a.extend({}, e.Defaults, c),
        this.$element = a(b),
        this.drag = a.extend({}, m),
        this.state = a.extend({}, n),
        this.e = a.extend({}, o),
        this._plugins = {},
        this._supress = {},
        this._current = null,
        this._speed = null,
        this._coordinates = [],
        this._breakpoint = null,
        this._width = null,
        this._items = [],
        this._clones = [],
        this._mergers = [],
        this._invalidated = {},
        this._pipe = [],
        a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
        }, this)),
        a.each(e.Pipe, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)),
        this.setup(),
        this.initialize()
    }
    function f(a) {
        if (a.touches !== d)
            return {
                x: a.touches[0].pageX,
                y: a.touches[0].pageY
            };
        if (a.touches === d) {
            if (a.pageX !== d)
                return {
                    x: a.pageX,
                    y: a.pageY
                };
            if (a.pageX === d)
                return {
                    x: a.clientX,
                    y: a.clientY
                }
        }
    }
    function g(a) {
        var b, d, e = c.createElement("div"), f = a;
        for (b in f)
            if (d = f[b],
            "undefined" != typeof e.style[d])
                return e = null,
                [d, b];
        return [!1]
    }
    function h() {
        return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }
    function i() {
        return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }
    function j() {
        return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }
    function k() {
        return "ontouchstart"in b || !!navigator.msMaxTouchPoints
    }
    function l() {
        return b.navigator.msPointerEnabled
    }
    var m, n, o;
    m = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    },
    n = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    },
    o = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    },
    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    },
    e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    },
    e.Plugins = {},
    e.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a = this._clones
              , b = this.$stage.children(".cloned");
            (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(),
            this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a, b, c = this._clones, d = this._items, e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
            for (a = 0,
            b = Math.abs(e / 2); b > a; a++)
                e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(),
                c.pop(),
                this.$stage.children().eq(0).remove(),
                c.pop()) : (c.push(c.length / 2),
                this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")),
                c.push(d.length - 1 - (c.length - 1) / 2),
                this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a, b, c, d = this.settings.rtl ? 1 : -1, e = (this.width() / this.settings.items).toFixed(3), f = 0;
            for (this._coordinates = [],
            b = 0,
            c = this._clones.length + this._items.length; c > b; b++)
                a = this._mergers[this.relative(b)],
                a = this.settings.mergeFit && Math.min(a, this.settings.items) || a,
                f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d,
                this._coordinates.push(f)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var b, c, d = (this.width() / this.settings.items).toFixed(3), e = {
                width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                "padding-left": this.settings.stagePadding || "",
                "padding-right": this.settings.stagePadding || ""
            };
            if (this.$stage.css(e),
            e = {
                width: this.settings.autoWidth ? "auto" : d - this.settings.margin
            },
            e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin,
            !this.settings.autoWidth && a.grep(this._mergers, function(a) {
                return a > 1
            }).length > 0)
                for (b = 0,
                c = this._coordinates.length; c > b; b++)
                    e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin,
                    this.$stage.children().eq(b).css(e);
            else
                this.$stage.children().css(e)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current && this.reset(this.$stage.children().index(a.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
            for (c = 0,
            d = this._coordinates.length; d > c; c++)
                a = this._coordinates[c - 1] || 0,
                b = Math.abs(this._coordinates[c]) + f * e,
                (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass),
            this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass),
            this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass),
            this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }],
    e.prototype.initialize = function() {
        if (this.trigger("initialize"),
        this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl),
        this.browserSupport(),
        this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var b, c, e;
            if (b = this.$element.find("img"),
            c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d,
            e = this.$element.children(c).width(),
            b.length && 0 >= e)
                return this.preloadAutoWidthImages(b),
                !1
        }
        this.$element.addClass("owl-loading"),
        this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'),
        this.$element.append(this.$stage.parent()),
        this.replace(this.$element.children().not(this.$stage.parent())),
        this._width = this.$element.width(),
        this.refresh(),
        this.$element.removeClass("owl-loading").addClass("owl-loaded"),
        this.eventsCall(),
        this.internalEvents(),
        this.addTriggerableEvents(),
        this.trigger("initialized")
    }
    ,
    e.prototype.setup = function() {
        var b = this.viewport()
          , c = this.options.responsive
          , d = -1
          , e = null;
        c ? (a.each(c, function(a) {
            b >= a && a > d && (d = Number(a))
        }),
        e = a.extend({}, this.options, c[d]),
        delete e.responsive,
        e.responsiveClass && this.$element.attr("class", function(a, b) {
            return b.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options),
        (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }),
        this._breakpoint = d,
        this.settings = e,
        this.invalidate("settings"),
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }
    ,
    e.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center),
        this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1),
        this.settings.autoWidth && (this.settings.stagePadding = !1,
        this.settings.merge = !1)
    }
    ,
    e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)),
        this.trigger("prepared", {
            content: c.data
        }),
        c.data
    }
    ,
    e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
            return this[a]
        }, this._invalidated), e = {}; c > b; )
            (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e),
            b++;
        this._invalidated = {}
    }
    ,
    e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
        case e.Width.Inner:
        case e.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }
    ,
    e.prototype.refresh = function() {
        if (0 === this._items.length)
            return !1;
        (new Date).getTime();
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$stage.addClass("owl-refresh"),
        this.update(),
        this.$stage.removeClass("owl-refresh"),
        this.state.orientation = b.orientation,
        this.watchVisibility(),
        this.trigger("refreshed")
    }
    ,
    e.prototype.eventsCall = function() {
        this.e._onDragStart = a.proxy(function(a) {
            this.onDragStart(a)
        }, this),
        this.e._onDragMove = a.proxy(function(a) {
            this.onDragMove(a)
        }, this),
        this.e._onDragEnd = a.proxy(function(a) {
            this.onDragEnd(a)
        }, this),
        this.e._onResize = a.proxy(function(a) {
            this.onResize(a)
        }, this),
        this.e._transitionEnd = a.proxy(function(a) {
            this.transitionEnd(a)
        }, this),
        this.e._preventClick = a.proxy(function(a) {
            this.preventClick(a)
        }, this)
    }
    ,
    e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer),
        this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }
    ,
    e.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(),
        this.invalidate("width"),
        this.refresh(),
        void this.trigger("resized")) : !1
    }
    ,
    e.prototype.eventsRouter = function(a) {
        var b = a.type;
        "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
    }
    ,
    e.prototype.internalEvents = function() {
        var c = (k(),
        l());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)),
        this.$stage.on("dragstart", function() {
            return !1
        }),
        this.$stage.get(0).onselectstart = function() {
            return !1
        }
        ) : this.$element.addClass("owl-text-select-on"),
        this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)),
        this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1),
        this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
    }
    ,
    e.prototype.onDragStart = function(d) {
        var e, g, h, i;
        if (e = d.originalEvent || d || b.event,
        3 === e.which || this.state.isTouch)
            return !1;
        if ("mousedown" === e.type && this.$stage.addClass("owl-grab"),
        this.trigger("drag"),
        this.drag.startTime = (new Date).getTime(),
        this.speed(0),
        this.state.isTouch = !0,
        this.state.isScrolling = !1,
        this.state.isSwiping = !1,
        this.drag.distance = 0,
        g = f(e).x,
        h = f(e).y,
        this.drag.offsetX = this.$stage.position().left,
        this.drag.offsetY = this.$stage.position().top,
        this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin),
        this.state.inMotion && this.support3d)
            i = this.getTransformProperty(),
            this.drag.offsetX = i,
            this.animate(i),
            this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d)
            return this.state.inMotion = !1,
            !1;
        this.drag.startX = g - this.drag.offsetX,
        this.drag.startY = h - this.drag.offsetY,
        this.drag.start = g - this.drag.startX,
        this.drag.targetEl = e.target || e.srcElement,
        this.drag.updatedX = this.drag.start,
        ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1),
        a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this))
    }
    ,
    e.prototype.onDragMove = function(a) {
        var c, e, g, h, i, j;
        this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event,
        e = f(c).x,
        g = f(c).y,
        this.drag.currentX = e - this.drag.startX,
        this.drag.currentY = g - this.drag.startY,
        this.drag.distance = this.drag.currentX - this.drag.offsetX,
        this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"),
        this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()),
        i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()),
        j = this.settings.pullDrag ? this.drag.distance / 5 : 0,
        this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)),
        (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1,
        this.state.isSwiping = !0),
        this.drag.updatedX = this.drag.currentX,
        (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0,
        this.drag.updatedX = this.drag.start),
        this.animate(this.drag.updatedX)))
    }
    ,
    e.prototype.onDragEnd = function(b) {
        var d, e, f;
        if (this.state.isTouch) {
            if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"),
            this.trigger("dragged"),
            this.drag.targetEl.removeAttribute("draggable"),
            this.state.isTouch = !1,
            this.state.isScrolling = !1,
            this.state.isSwiping = !1,
            0 === this.drag.distance && this.state.inMotion !== !0)
                return this.state.inMotion = !1,
                !1;
            this.drag.endTime = (new Date).getTime(),
            d = this.drag.endTime - this.drag.startTime,
            e = Math.abs(this.drag.distance),
            (e > 3 || d > 300) && this.removeClick(this.drag.targetEl),
            f = this.closest(this.drag.updatedX),
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(f),
            this.invalidate("position"),
            this.update(),
            this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(),
            this.drag.distance = 0,
            a(c).off(".owl.dragEvents")
        }
    }
    ,
    e.prototype.removeClick = function(c) {
        this.drag.targetEl = c,
        a(c).on("click.preventClick", this.e._preventClick),
        b.setTimeout(function() {
            a(c).off("click.preventClick")
        }, 300)
    }
    ,
    e.prototype.preventClick = function(b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = !1,
        b.stopPropagation && b.stopPropagation(),
        a(b.target).off("click.preventClick")
    }
    ,
    e.prototype.getTransformProperty = function() {
        var a, c;
        return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"),
        a = a.replace(/matrix(3d)?\(|\)/g, "").split(","),
        c = 16 === a.length,
        c !== !0 ? a[4] : a[12]
    }
    ,
    e.prototype.closest = function(b) {
        var c = -1
          , d = 30
          , e = this.width()
          , f = this.coordinates();
        return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) {
            return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a),
            -1 === c
        }, this)),
        this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())),
        c
    }
    ,
    e.prototype.animate = function(b) {
        this.trigger("translate"),
        this.state.inMotion = this.speed() > 0,
        this.support3d ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: b + "px"
        }) : this.$stage.animate({
            left: b
        }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }
    ,
    e.prototype.current = function(a) {
        if (a === d)
            return this._current;
        if (0 === this._items.length)
            return d;
        if (a = this.normalize(a),
        this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)),
            this._current = a,
            this.invalidate("position"),
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }
    ,
    e.prototype.invalidate = function(a) {
        this._invalidated[a] = !0
    }
    ,
    e.prototype.reset = function(a) {
        a = this.normalize(a),
        a !== d && (this._speed = 0,
        this._current = a,
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(a)),
        this.release(["translate", "translated"]))
    }
    ,
    e.prototype.normalize = function(b, c) {
        var e = c ? this._items.length : this._items.length + this._clones.length;
        return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
    }
    ,
    e.prototype.relative = function(a) {
        return a = this.normalize(a),
        a -= this._clones.length / 2,
        this.normalize(a, !0)
    }
    ,
    e.prototype.maximum = function(a) {
        var b, c, d, e = 0, f = this.settings;
        if (a)
            return this._items.length - 1;
        if (!f.loop && f.center)
            b = this._items.length - 1;
        else if (f.loop || f.center)
            if (f.loop || f.center)
                b = this._items.length + f.items;
            else {
                if (!f.autoWidth && !f.merge)
                    throw "Can not detect maximum absolute position.";
                for (revert = f.rtl ? 1 : -1,
                c = this.$stage.width() - this.$element.width(); (d = this.coordinates(e)) && !(d * revert >= c); )
                    b = ++e
            }
        else
            b = this._items.length - f.items;
        return b
    }
    ,
    e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }
    ,
    e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0),
        this._items[a])
    }
    ,
    e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0),
        this._mergers[a])
    }
    ,
    e.prototype.clones = function(b) {
        var c = this._clones.length / 2
          , e = c + this._items.length
          , f = function(a) {
            return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
        };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }
    ,
    e.prototype.speed = function(a) {
        return a !== d && (this._speed = a),
        this._speed
    }
    ,
    e.prototype.coordinates = function(b) {
        var c = null;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (c = this._coordinates[b],
        c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0,
        c)
    }
    ,
    e.prototype.duration = function(a, b, c) {
        return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }
    ,
    e.prototype.to = function(c, d) {
        if (this.settings.loop) {
            var e = c - this.relative(this.current())
              , f = this.current()
              , g = this.current()
              , h = this.current() + e
              , i = 0 > g - h ? !0 : !1
              , j = this._clones.length + this._items.length;
            h < this.settings.items && i === !1 ? (f = g + this._items.length,
            this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length,
            this.reset(f)),
            b.clearTimeout(this.e._goToLoop),
            this.e._goToLoop = b.setTimeout(a.proxy(function() {
                this.speed(this.duration(this.current(), f + e, d)),
                this.current(f + e),
                this.update()
            }, this), 30)
        } else
            this.speed(this.duration(this.current(), c, d)),
            this.current(c),
            this.update()
    }
    ,
    e.prototype.next = function(a) {
        a = a || !1,
        this.to(this.relative(this.current()) + 1, a)
    }
    ,
    e.prototype.prev = function(a) {
        a = a || !1,
        this.to(this.relative(this.current()) - 1, a)
    }
    ,
    e.prototype.transitionEnd = function(a) {
        return a !== d && (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1,
        void this.trigger("translated"))
    }
    ,
    e.prototype.viewport = function() {
        var d;
        if (this.options.responsiveBaseElement !== b)
            d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth)
            d = b.innerWidth;
        else {
            if (!c.documentElement || !c.documentElement.clientWidth)
                throw "Can not detect viewport width.";
            d = c.documentElement.clientWidth
        }
        return d
    }
    ,
    e.prototype.replace = function(b) {
        this.$stage.empty(),
        this._items = [],
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
        b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b),
            this.$stage.append(b),
            this._items.push(b),
            this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)),
        this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
        this.invalidate("items")
    }
    ,
    e.prototype.add = function(a, b) {
        b = b === d ? this._items.length : this.normalize(b, !0),
        this.trigger("add", {
            content: a,
            position: b
        }),
        0 === this._items.length || b === this._items.length ? (this.$stage.append(a),
        this._items.push(a),
        this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a),
        this._items.splice(b, 0, a),
        this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)),
        this.invalidate("items"),
        this.trigger("added", {
            content: a,
            position: b
        })
    }
    ,
    e.prototype.remove = function(a) {
        a = this.normalize(a, !0),
        a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate("items"),
        this.trigger("removed", {
            content: null,
            position: a
        }))
    }
    ,
    e.prototype.addTriggerableEvents = function() {
        var b = a.proxy(function(b, c) {
            return a.proxy(function(a) {
                a.relatedTarget !== this && (this.suppress([c]),
                b.apply(this, [].slice.call(arguments, 1)),
                this.release([c]))
            }, this)
        }, this);
        a.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, a.proxy(function(a, c) {
            this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
        }, this))
    }
    ,
    e.prototype.watchVisibility = function() {
        function c(a) {
            return a.offsetWidth > 0 && a.offsetHeight > 0
        }
        function d() {
            c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"),
            this.refresh(),
            b.clearInterval(this.e._checkVisibile))
        }
        c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"),
        b.clearInterval(this.e._checkVisibile),
        this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
    }
    ,
    e.prototype.preloadAutoWidthImages = function(b) {
        var c, d, e, f;
        c = 0,
        d = this,
        b.each(function(g, h) {
            e = a(h),
            f = new Image,
            f.onload = function() {
                c++,
                e.attr("src", f.src),
                e.css("opacity", 1),
                c >= b.length && (d.state.imagesLoaded = !0,
                d.initialize())
            }
            ,
            f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
        })
    }
    ,
    e.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass),
        this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"),
        this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var d in this._plugins)
            this._plugins[d].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"),
        a(c).off(".owl.dragEvents"),
        this.$stage.get(0).onselectstart = function() {}
        ,
        this.$stage.off("dragstart", function() {
            return !1
        })),
        this.$element.off(".owl"),
        this.$stage.children(".cloned").remove(),
        this.e = null,
        this.$element.removeData("owlCarousel"),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.unwrap()
    }
    ,
    e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
        case "<":
            return d ? a > c : c > a;
        case ">":
            return d ? c > a : a > c;
        case ">=":
            return d ? c >= a : a >= c;
        case "<=":
            return d ? a >= c : c >= a
        }
    }
    ,
    e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
    ,
    e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }
    ,
    e.prototype.trigger = function(b, c, d) {
        var e = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }
          , f = a.camelCase(a.grep(["on", b, d], function(a) {
            return a
        }).join("-").toLowerCase())
          , g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
            relatedTarget: this
        }, e, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(g)
        }),
        this.$element.trigger(g),
        this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)),
        g
    }
    ,
    e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }
    ,
    e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }
    ,
    e.prototype.browserSupport = function() {
        if (this.support3d = j(),
        this.support3d) {
            this.transformVendor = i();
            var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = a[h()],
            this.vendorName = this.transformVendor.replace(/Transform/i, ""),
            this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = b.orientation
    }
    ,
    a.fn.owlCarousel = function(b) {
        return this.each(function() {
            a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this,b))
        })
    }
    ,
    a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    var c = function(b) {
        this._core = b,
        this._loaded = [],
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) {
                        this.load(b)
                    }, this); e++ < d; )
                        this.load(g / 2 + this._core.relative(f)),
                        g && a.each(this._core.clones(this._core.relative(f++)), h)
            }, this)
        },
        this._core.options = a.extend({}, c.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    c.Defaults = {
        lazyLoad: !1
    },
    c.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c)
          , e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"),
            f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1),
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : (e = new Image,
            e.onload = a.proxy(function() {
                f.css({
                    "background-image": "url(" + g + ")",
                    opacity: "1"
                }),
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this),
            e.src = g)
        }, this)),
        this._loaded.push(d.get(0)))
    }
    ,
    c.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers)
            this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document),
function(a) {
    var b = function(c) {
        this._core = c,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        },
        this._core.options = a.extend({}, b.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    b.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    },
    b.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }
    ,
    b.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this._core = b,
        this._videos = {},
        this._playing = null,
        this._fullscreen = !1,
        this._handlers = {
            "resize.owl.carousel": a.proxy(function(a) {
                this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": a.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find(".owl-video");
                c.length && (c.css("display", "none"),
                this.fetch(c, a(b.content)))
            }, this)
        },
        this._core.options = a.extend({}, d.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    d.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    },
    d.prototype.fetch = function(a, b) {
        var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube"
          , d = a.attr("data-vimeo-id") || a.attr("data-youtube-id")
          , e = a.attr("data-width") || this._core.settings.videoWidth
          , f = a.attr("data-height") || this._core.settings.videoHeight
          , g = a.attr("href");
        if (!g)
            throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),
        d[3].indexOf("youtu") > -1)
            c = "youtube";
        else {
            if (!(d[3].indexOf("vimeo") > -1))
                throw new Error("Video URL not supported.");
            c = "vimeo"
        }
        d = d[6],
        this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        },
        b.attr("data-video", g),
        this.thumbnail(a, this._videos[g])
    }
    ,
    d.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function(a) {
            e = '<div class="owl-video-play-icon"></div>',
            d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>',
            b.after(d),
            b.after(e)
        };
        return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
        this._core.settings.lazyLoad && (i = "data-src",
        j = "owl-lazy"),
        h.length ? (l(h.attr(i)),
        h.remove(),
        !1) : void ("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg",
        l(f)) : "vimeo" === c.type && a.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large,
                l(f)
            }
        }))
    }
    ,
    d.prototype.stop = function() {
        this._core.trigger("stop", null, "video"),
        this._playing.find(".owl-video-frame").remove(),
        this._playing.removeClass("owl-video-playing"),
        this._playing = null
    }
    ,
    d.prototype.play = function(b) {
        this._core.trigger("play", null, "video"),
        this._playing && this.stop();
        var c, d, e = a(b.target || b.srcElement), f = e.closest("." + this._core.settings.itemClass), g = this._videos[f.attr("data-video")], h = g.width || "100%", i = g.height || this._core.$stage.height();
        "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),
        f.addClass("owl-video-playing"),
        this._playing = f,
        d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"),
        e.after(d)
    }
    ,
    d.prototype.isInFullScreen = function() {
        var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0),
        this._fullscreen = !0),
        d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1,
        !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation,
        !1) : !0
    }
    ,
    d.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b,
        this.core.options = a.extend({}, e.Defaults, this.core.options),
        this.swapping = !0,
        this.previous = d,
        this.next = d,
        this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && (this.previous = this.core.current(),
                this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                this.swapping = "translated" == a.type
            }, this),
            "translate.owl.carousel": a.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        },
        this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    },
    e.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
            d.css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)),
            f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
        }
    }
    ,
    e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
        this.core.transitionEnd()
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers)
            this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this.core = b,
        this.core.options = a.extend({}, d.Defaults, this.core.options),
        this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        },
        this.core.$element.on(this.handlers)
    };
    d.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    },
    d.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval),
        this.interval = b.setInterval(a.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
    }
    ,
    d.prototype.play = function() {
        return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }
    ,
    d.prototype.stop = function() {
        b.clearInterval(this.interval)
    }
    ,
    d.prototype.pause = function() {
        b.clearInterval(this.interval)
    }
    ,
    d.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this.interval);
        for (a in this.handlers)
            this.core.$element.off(a, this.handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document),
function(a) {
    "use strict";
    var b = function(c) {
        this._core = c,
        this._initialized = !1,
        this._pages = [],
        this._controls = {},
        this._templates = [],
        this.$element = this._core.$element,
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        },
        this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) {
                this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "change.owl.carousel": a.proxy(function(a) {
                if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var b = this._core.current()
                      , c = this._core.maximum()
                      , d = this._core.minimum();
                    a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": a.proxy(function() {
                this._initialized || (this.initialize(),
                this._initialized = !0),
                this._core.trigger("refresh", null, "navigation"),
                this.update(),
                this.draw(),
                this._core.trigger("refreshed", null, "navigation")
            }, this)
        },
        this._core.options = a.extend({}, b.Defaults, this._core.options),
        this.$element.on(this._handlers)
    };
    b.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    },
    b.prototype.initialize = function() {
        var b, c, d = this._core.settings;
        d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]),
        d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)),
        this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container),
        this._controls.$indicators.on("click", "div", a.proxy(function(b) {
            var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(),
            this.to(c, d.dotsSpeed)
        }, this)),
        b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container),
        this._controls.$next = a("<" + d.navElement + ">"),
        this._controls.$previous = this._controls.$next.clone(),
        this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() {
            this.prev(d.navSpeed)
        }, this)),
        this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() {
            this.next(d.navSpeed)
        }, this));
        for (c in this._overrides)
            this._core[c] = a.proxy(this[c], this)
    }
    ,
    b.prototype.destroy = function() {
        var a, b, c, d;
        for (a in this._handlers)
            this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
            this._controls[b].remove();
        for (d in this.overides)
            this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null)
    }
    ,
    b.prototype.update = function() {
        var a, b, c, d = this._core.settings, e = this._core.clones().length / 2, f = e + this._core.items().length, g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
        if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)),
        d.dots || "page" == d.slideBy)
            for (this._pages = [],
            a = e,
            b = 0,
            c = 0; f > a; a++)
                (b >= g || 0 === b) && (this._pages.push({
                    start: a - e,
                    end: a - e + g - 1
                }),
                b = 0,
                ++c),
                b += this._core.mergers(this._core.relative(a))
    }
    ,
    b.prototype.draw = function() {
        var b, c, d = "", e = this._core.settings, f = (this._core.$stage.children(),
        this._core.relative(this._core.current()));
        if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f),
        this._controls.$next.toggleClass("disabled", f >= this._core.maximum())),
        this._controls.$previous.toggle(e.nav),
        this._controls.$next.toggle(e.nav),
        e.dots) {
            if (b = this._pages.length - this._controls.$indicators.children().length,
            e.dotData && 0 !== b) {
                for (c = 0; c < this._controls.$indicators.children().length; c++)
                    d += this._templates[this._core.relative(c)];
                this._controls.$indicators.html(d)
            } else
                b > 0 ? (d = new Array(b + 1).join(this._templates[0]),
                this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
            this._controls.$indicators.find(".active").removeClass("active"),
            this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(e.dots)
    }
    ,
    b.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
        }
    }
    ,
    b.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, function(a) {
            return a.start <= b && a.end >= b
        }).pop()
    }
    ,
    b.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages),
        d = this._pages.length,
        b ? ++c : --c,
        c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()),
        d = this._core.items().length,
        b ? c += e.slideBy : c -= e.slideBy),
        c
    }
    ,
    b.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }
    ,
    b.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }
    ,
    b.prototype.to = function(b, c, d) {
        var e;
        d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length,
        a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    "use strict";
    var c = function(d) {
        this._core = d,
        this._hashes = {},
        this.$element = this._core.$element,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[c] = b.content
            }, this)
        },
        this._core.options = a.extend({}, c.Defaults, this._core.options),
        this.$element.on(this._handlers),
        a(b).on("hashchange.owl.navigation", a.proxy(function() {
            var a = b.location.hash.substring(1)
              , c = this._core.$stage.children()
              , d = this._hashes[a] && c.index(this._hashes[a]) || 0;
            return a ? void this._core.to(d, !1, !0) : !1
        }, this))
    };
    c.Defaults = {
        URLhashListener: !1
    },
    c.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers)
            this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
            "function" != typeof this[d] && (this[d] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);
jQuery(function($) {
    'use strict';
    function initColorPicker() {
        var $this = $(this);
        if (!$this.closest('.rwmb-group-clone').length) {
            return;
        }
        var $container = $this.closest('.rwmb-input');
        $this.appendTo($container).siblings('.wp-picker-container').remove();
        if (!$this.val()) {
            $this.val('#');
        }
        $this.wpColorPicker();
    }
    $(':input.rwmb-color').each(initColorPicker);
    $('.rwmb-input').on('clone', 'input.rwmb-color', initColorPicker);
});
jQuery(document).ready(function($) {
    'use strict';
    var delay = 1;
    setTimeout(function() {
        var $spmvmovie = $('.movie-featured');
        $spmvmovie.owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            autoHeight: false,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1
                },
                420: {
                    items: 2
                },
                767: {
                    items: 3
                },
                1050: {
                    items: 4
                },
                1250: {
                    items: 5
                }
            }
        });
        $('#moview-movie').css({
            opacity: 0,
            visibility: "visible"
        }).animate({
            opacity: 1.0
        }, 500);
    }, delay);
    $('.prettySocial').prettySocial();
    $('.themeum-counter-number').each(function() {
        var $this = $(this);
        $({
            Counter: 0
        }).animate({
            Counter: $this.data('digit')
        }, {
            duration: $this.data('duration'),
            step: function() {
                $this.text(Math.ceil(this.Counter));
            }
        });
    });
    var $spotlightCommon = $(".spotlight");
    $spotlightCommon.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        autoHeight: false,
        responsive: {
            0: {
                items: 1
            },
            420: {
                items: 2
            },
            767: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('.play-video').on('click', function(event) {
        event.preventDefault();
        var $that = $(this), type = $that.data('type'), videoUrl = $that.attr('href'), $video;
        if (type === 'youtube') {
            $video = '<iframe id="video-player" src="https://www.youtube.com/embed/' + videoUrl + '?rel=0&amp;showinfo=0&amp;controls=1&amp;autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        } else if (type === 'vimeo') {
            $video = '<iframe id="video-player" src="//player.vimeo.com/video/' + videoUrl + '?autoplay=1&color=ffffff&title=0&byline=0&portrait=0&badge=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        } else if (type === 'self') {
            $video = '<video id="video-player" controls autoplay> <source src="' + videoUrl + '">Your browser does not support the video tag.</video>';
        }
        $('.video-list').slideUp();
        $('#moview-player .video-container').find('#video-player').remove();
        $('#moview-player .video-container').prepend($video);
        $('#moview-player .video-container').fadeIn();
    });
    $('.video-close').on('click', function(event) {
        event.preventDefault();
        $('.video-container').fadeOut(600, function() {
            $('#video-player').remove();
        });
    });
    $('.video-list-button').on('click', function(event) {
        event.preventDefault();
        $('.video-list').slideToggle();
    });
    $('#sorting-by-years').on('change', function(e) {
        var valueSelected = this.value;
        window.location.href = valueSelected;
    });
    $('#searchword').on('blur change paste keyup ', function(e) {
        var $that = $(this);
        var raw_data = $that.val()
          , ajaxUrl = $that.data('url')
          , category = $("#searchtype").val();
        $.ajax({
            url: ajaxUrl,
            type: 'POST',
            data: {
                raw_data: raw_data,
                category: category
            },
            beforeSend: function() {
                if (!$('#moview-search .search-icon .moview-search-icons .fa-spinner').length) {
                    $('#moview-search .search-icon .moview-search-icons').addClass('spinner');
                    $('<i class="fa fa-spinner fa-spin"></i>').appendTo("#moview-search .search-icon .moview-search-icons").fadeIn(100);
                }
            },
            complete: function() {
                $('#moview-search .search-icon .moview-search-icons .fa-spinner ').remove();
                $('#moview-search .search-icon .moview-search-icons').removeClass('spinner');
            }
        }).done(function(data) {
            if (e.type == 'blur') {
                $(".moview-search-results").html('');
            } else {
                $(".moview-search-results").html(data);
            }
        }).fail(function() {
            console.log("error");
        });
    });
    $('select#searchtype').on('change', function(e) {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
        $('#post-type-name').val(valueSelected);
    });
    $('.menu-toggler').on('click', function(event) {
        var rotate = 0;
        if ($(this).css("border-spacing") == '0px 0px') {
            rotate = 90
        }
        $(this).animate({
            borderSpacing: rotate
        }, {
            step: function(now, fx) {
                $(this).css('transform', 'rotate(' + now + 'deg)');
            },
            duration: 'fast'
        }, 'linear');
    });
});
(function($) {
    'use strict';
    if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
        return;
    }
    wpcf7 = $.extend({
        cached: 0,
        inputs: []
    }, wpcf7);
    $(function() {
        wpcf7.supportHtml5 = (function() {
            var features = {};
            var input = document.createElement('input');
            features.placeholder = 'placeholder'in input;
            var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
            $.each(inputTypes, function(index, value) {
                input.setAttribute('type', value);
                features[value] = input.type !== 'text';
            });
            return features;
        }
        )();
        $('div.wpcf7 > form').each(function() {
            var $form = $(this);
            wpcf7.initForm($form);
            if (wpcf7.cached) {
                wpcf7.refill($form);
            }
        });
    });
    wpcf7.getId = function(form) {
        return parseInt($('input[name="_wpcf7"]', form).val(), 10);
    }
    ;
    wpcf7.initForm = function(form) {
        var $form = $(form);
        $form.submit(function(event) {
            if (typeof window.FormData !== 'function') {
                return;
            }
            wpcf7.submit($form);
            event.preventDefault();
        });
        $('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
        wpcf7.toggleSubmit($form);
        $form.on('click', '.wpcf7-acceptance', function() {
            wpcf7.toggleSubmit($form);
        });
        $('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function() {
            var name = $(this).attr('name');
            $form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });
        $('.wpcf7-list-item.has-free-text', $form).each(function() {
            var $freetext = $(':input.wpcf7-free-text', this);
            var $wrap = $(this).closest('.wpcf7-form-control');
            if ($(':checkbox, :radio', this).is(':checked')) {
                $freetext.prop('disabled', false);
            } else {
                $freetext.prop('disabled', true);
            }
            $wrap.on('change', ':checkbox, :radio', function() {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });
        if (!wpcf7.supportHtml5.placeholder) {
            $('[placeholder]', $form).each(function() {
                $(this).val($(this).attr('placeholder'));
                $(this).addClass('placeheld');
                $(this).focus(function() {
                    if ($(this).hasClass('placeheld')) {
                        $(this).val('').removeClass('placeheld');
                    }
                });
                $(this).blur(function() {
                    if ('' === $(this).val()) {
                        $(this).val($(this).attr('placeholder'));
                        $(this).addClass('placeheld');
                    }
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
            $form.find('input.wpcf7-date[type="date"]').each(function() {
                $(this).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date($(this).attr('min')),
                    maxDate: new Date($(this).attr('max'))
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
            $form.find('input.wpcf7-number[type="number"]').each(function() {
                $(this).spinner({
                    min: $(this).attr('min'),
                    max: $(this).attr('max'),
                    step: $(this).attr('step')
                });
            });
        }
        $('.wpcf7-character-count', $form).each(function() {
            var $count = $(this);
            var name = $count.attr('data-target-name');
            var down = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum = parseInt($count.attr('data-maximum-value'), 10);
            var minimum = parseInt($count.attr('data-minimum-value'), 10);
            var updateCount = function(target) {
                var $target = $(target);
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);
                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }
                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };
            $(':input[name="' + name + '"]', $form).each(function() {
                updateCount(this);
                $(this).keyup(function() {
                    updateCount(this);
                });
            });
        });
        $form.on('change', '.wpcf7-validates-as-url', function() {
            var val = $.trim($(this).val());
            if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== val.indexOf('.')) {
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }
            $(this).val(val);
        });
    }
    ;
    wpcf7.submit = function(form) {
        if (typeof window.FormData !== 'function') {
            return;
        }
        var $form = $(form);
        $('.ajax-loader', $form).addClass('is-active');
        $('[placeholder].placeheld', $form).each(function(i, n) {
            $(n).val('');
        });
        wpcf7.clearResponse($form);
        var formData = new FormData($form.get(0));
        var detail = {
            id: $form.closest('div.wpcf7').attr('id'),
            status: 'init',
            inputs: [],
            formData: formData
        };
        $.each($form.serializeArray(), function(i, field) {
            if ('_wpcf7' == field.name) {
                detail.contactFormId = field.value;
            } else if ('_wpcf7_version' == field.name) {
                detail.pluginVersion = field.value;
            } else if ('_wpcf7_locale' == field.name) {
                detail.contactFormLocale = field.value;
            } else if ('_wpcf7_unit_tag' == field.name) {
                detail.unitTag = field.value;
            } else if ('_wpcf7_container_post' == field.name) {
                detail.containerPostId = field.value;
            } else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
                var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, '');
                detail.inputs.push({
                    name: owner + '-free-text',
                    value: field.value
                });
            } else if (field.name.match(/^_/)) {} else {
                detail.inputs.push(field);
            }
        });
        wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);
        var ajaxSuccess = function(data, status, xhr, $form) {
            detail.id = $(data.into).attr('id');
            detail.status = data.status;
            detail.apiResponse = data;
            var $message = $('.wpcf7-response-output', $form);
            switch (data.status) {
            case 'validation_failed':
                $.each(data.invalidFields, function(i, n) {
                    $(n.into, $form).each(function() {
                        wpcf7.notValidTip(this, n.message);
                        $('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
                        $('[aria-invalid]', this).attr('aria-invalid', 'true');
                    });
                });
                $message.addClass('wpcf7-validation-errors');
                $form.addClass('invalid');
                wpcf7.triggerEvent(data.into, 'invalid', detail);
                break;
            case 'acceptance_missing':
                $message.addClass('wpcf7-acceptance-missing');
                $form.addClass('unaccepted');
                wpcf7.triggerEvent(data.into, 'unaccepted', detail);
                break;
            case 'spam':
                $message.addClass('wpcf7-spam-blocked');
                $form.addClass('spam');
                $('[name="g-recaptcha-response"]', $form).each(function() {
                    if ('' === $(this).val()) {
                        var $recaptcha = $(this).closest('.wpcf7-form-control-wrap');
                        wpcf7.notValidTip($recaptcha, wpcf7.recaptcha.messages.empty);
                    }
                });
                wpcf7.triggerEvent(data.into, 'spam', detail);
                break;
            case 'aborted':
                $message.addClass('wpcf7-aborted');
                $form.addClass('aborted');
                wpcf7.triggerEvent(data.into, 'aborted', detail);
                break;
            case 'mail_sent':
                $message.addClass('wpcf7-mail-sent-ok');
                $form.addClass('sent');
                wpcf7.triggerEvent(data.into, 'mailsent', detail);
                break;
            case 'mail_failed':
                $message.addClass('wpcf7-mail-sent-ng');
                $form.addClass('failed');
                wpcf7.triggerEvent(data.into, 'mailfailed', detail);
                break;
            default:
                var customStatusClass = 'custom-' + data.status.replace(/[^0-9a-z]+/i, '-');
                $message.addClass('wpcf7-' + customStatusClass);
                $form.addClass(customStatusClass);
            }
            wpcf7.refill($form, data);
            wpcf7.triggerEvent(data.into, 'submit', detail);
            if ('mail_sent' == data.status) {
                $form.each(function() {
                    this.reset();
                });
                wpcf7.toggleSubmit($form);
            }
            $form.find('[placeholder].placeheld').each(function(i, n) {
                $(n).val($(n).attr('placeholder'));
            });
            $message.html('').append(data.message).slideDown('fast');
            $message.attr('role', 'alert');
            $('.screen-reader-response', $form.closest('.wpcf7')).each(function() {
                var $response = $(this);
                $response.html('').attr('role', '').append(data.message);
                if (data.invalidFields) {
                    var $invalids = $('<ul></ul>');
                    $.each(data.invalidFields, function(i, n) {
                        if (n.idref) {
                            var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                        } else {
                            var $li = $('<li></li>').append(n.message);
                        }
                        $invalids.append($li);
                    });
                    $response.append($invalids);
                }
                $response.attr('role', 'alert').focus();
            });
        };
        $.ajax({
            type: 'POST',
            url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false
        }).done(function(data, status, xhr) {
            ajaxSuccess(data, status, xhr, $form);
            $('.ajax-loader', $form).removeClass('is-active');
        }).fail(function(xhr, status, error) {
            var $e = $('<div class="ajax-error"></div>').text(error.message);
            $form.after($e);
        });
    }
    ;
    wpcf7.triggerEvent = function(target, name, detail) {
        var $target = $(target);
        var event = new CustomEvent('wpcf7' + name,{
            bubbles: true,
            detail: detail
        });
        $target.get(0).dispatchEvent(event);
        $target.trigger('wpcf7:' + name, detail);
        $target.trigger(name + '.wpcf7', detail);
    }
    ;
    wpcf7.toggleSubmit = function(form, state) {
        var $form = $(form);
        var $submit = $('input:submit', $form);
        if (typeof state !== 'undefined') {
            $submit.prop('disabled', !state);
            return;
        }
        if ($form.hasClass('wpcf7-acceptance-as-validation')) {
            return;
        }
        $submit.prop('disabled', false);
        $('.wpcf7-acceptance', $form).each(function() {
            var $span = $(this);
            var $input = $('input:checkbox', $span);
            if (!$span.hasClass('optional')) {
                if ($span.hasClass('invert') && $input.is(':checked') || !$span.hasClass('invert') && !$input.is(':checked')) {
                    $submit.prop('disabled', true);
                    return false;
                }
            }
        });
    }
    ;
    wpcf7.notValidTip = function(target, message) {
        var $target = $(target);
        $('.wpcf7-not-valid-tip', $target).remove();
        $('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);
        if ($target.is('.use-floating-validation-tip *')) {
            var fadeOut = function(target) {
                $(target).not(':hidden').animate({
                    opacity: 0
                }, 'fast', function() {
                    $(this).css({
                        'z-index': -100
                    });
                });
            };
            $target.on('mouseover', '.wpcf7-not-valid-tip', function() {
                fadeOut(this);
            });
            $target.on('focus', ':input', function() {
                fadeOut($('.wpcf7-not-valid-tip', $target));
            });
        }
    }
    ;
    wpcf7.refill = function(form, data) {
        var $form = $(form);
        var refillCaptcha = function($form, items) {
            $.each(items, function(i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                $form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        };
        var refillQuiz = function($form, items) {
            $.each(items, function(i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                $form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        };
        if (typeof data === 'undefined') {
            $.ajax({
                type: 'GET',
                url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
                beforeSend: function(xhr) {
                    var nonce = $form.find(':input[name="_wpnonce"]').val();
                    if (nonce) {
                        xhr.setRequestHeader('X-WP-Nonce', nonce);
                    }
                },
                dataType: 'json'
            }).done(function(data, status, xhr) {
                if (data.captcha) {
                    refillCaptcha($form, data.captcha);
                }
                if (data.quiz) {
                    refillQuiz($form, data.quiz);
                }
            });
        } else {
            if (data.captcha) {
                refillCaptcha($form, data.captcha);
            }
            if (data.quiz) {
                refillQuiz($form, data.quiz);
            }
        }
    }
    ;
    wpcf7.clearResponse = function(form) {
        var $form = $(form);
        $form.removeClass('invalid spam sent failed');
        $form.siblings('.screen-reader-response').html('').attr('role', '');
        $('.wpcf7-not-valid-tip', $form).remove();
        $('[aria-invalid]', $form).attr('aria-invalid', 'false');
        $('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
        $('.wpcf7-response-output', $form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');
    }
    ;
    wpcf7.apiSettings.getRoute = function(path) {
        var url = wpcf7.apiSettings.root;
        url = url.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + path);
        return url;
    }
    ;
}
)(jQuery);
(function() {
    if (typeof window.CustomEvent === "function")
        return false;
    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
}
)();
(function($) {
    if ($('.ryv-popup-wrapper').length > 1) {
        $('.ryv-popup-wrapper').each(function() {
            var id = $(this).attr('data-ryv-popup-id');
            var url = $('.ryv-popup-video', this).attr('data-ryv-popup-url');
            var wrapper = '.ryv-popup-wrapper[data-ryv-popup-id="' + id + '"]';
            var video = '.ryv-popup-wrapper[data-ryv-popup-id="' + id + '"] .ryv-popup-video';
            $('.' + id).click(function(event) {
                event.preventDefault();
                $(wrapper).fadeIn(200);
                $(video).fadeIn(200);
                $(video).attr("src", url);
                $(window).trigger('resize');
            });
        });
    } else {
        var url = $('.ryv-popup-video').attr('data-ryv-popup-url');
        $('.ryv-popup').click(function(event) {
            event.preventDefault();
            $('.ryv-popup-wrapper, .ryv-popup-video').fadeIn(200);
            $(".ryv-popup-video").attr("src", url);
            $(window).trigger('resize');
        });
    }
    function close_ryv_popup() {
        $('.ryv-popup-wrapper, .ryv-popup-video').fadeOut(200);
        setTimeout(function() {
            $('.ryv-popup-video').attr('src', '');
        }, 200);
    }
    $('.ryv-popup-wrapper').click(function() {
        close_ryv_popup();
    });
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            if ($('.ryv-popup-wrapper').is(':visible')) {
                close_ryv_popup();
            }
        }
    });
    $(window).resize(function() {
        $('.ryv-popup-video').each(function() {
            var videoWidth = $(this).width();
            $(this).height(videoWidth * 0.5625);
        });
    });
}
)(jQuery);
var post_id = 0
  , post_rating = 0
  , is_being_rated = !1;
ratingsL10n.custom = parseInt(ratingsL10n.custom);
ratingsL10n.max = parseInt(ratingsL10n.max);
ratingsL10n.show_loading = parseInt(ratingsL10n.show_loading);
ratingsL10n.show_fading = parseInt(ratingsL10n.show_fading);
function current_rating(a, b, c) {
    if (!is_being_rated) {
        post_id = a;
        post_rating = b;
        if (ratingsL10n.custom && 2 == ratingsL10n.max)
            jQuery("#rating_" + post_id + "_" + b).attr("src", eval("ratings_" + b + "_mouseover_image.src"));
        else
            for (i = 1; i <= b; i++)
                ratingsL10n.custom ? jQuery("#rating_" + post_id + "_" + i).attr("src", eval("ratings_" + i + "_mouseover_image.src")) : jQuery("#rating_" + post_id + "_" + i).attr("src", ratings_mouseover_image.src);
        jQuery("#ratings_" + post_id + "_text").length && (jQuery("#ratings_" + post_id + "_text").show(),
        jQuery("#ratings_" + post_id + "_text").html(c))
    }
}
function ratings_off(a, b, c) {
    if (!is_being_rated) {
        for (i = 1; i <= ratingsL10n.max; i++)
            i <= a ? ratingsL10n.custom ? jQuery("#rating_" + post_id + "_" + i).attr("src", ratingsL10n.plugin_url + "/images/" + ratingsL10n.image + "/rating_" + i + "_on." + ratingsL10n.image_ext) : jQuery("#rating_" + post_id + "_" + i).attr("src", ratingsL10n.plugin_url + "/images/" + ratingsL10n.image + "/rating_on." + ratingsL10n.image_ext) : i == b ? ratingsL10n.custom ? jQuery("#rating_" + post_id + "_" + i).attr("src", ratingsL10n.plugin_url + "/images/" + ratingsL10n.image + "/rating_" + i + "_half" + (c ? "-rtl" : "") + "." + ratingsL10n.image_ext) : jQuery("#rating_" + post_id + "_" + i).attr("src", ratingsL10n.plugin_url + "/images/" + ratingsL10n.image + "/rating_half" + (c ? "-rtl" : "") + "." + ratingsL10n.image_ext) : ratingsL10n.custom ? jQuery("#rating_" + post_id + "_" + i).attr("src", ratingsL10n.plugin_url + "/images/" + ratingsL10n.image + "/rating_" + i + "_off." + ratingsL10n.image_ext) : jQuery("#rating_" + post_id + "_" + i).attr("src", ratingsL10n.plugin_url + "/images/" + ratingsL10n.image + "/rating_off." + ratingsL10n.image_ext);
        jQuery("#ratings_" + post_id + "_text").length && (jQuery("#ratings_" + post_id + "_text").hide(),
        jQuery("#ratings_" + post_id + "_text").empty())
    }
}
function set_is_being_rated(a) {
    is_being_rated = a
}
function rate_post_success(a) {
    jQuery("#post-ratings-" + post_id).html(a);
    ratingsL10n.show_loading && jQuery("#post-ratings-" + post_id + "-loading").hide();
    ratingsL10n.show_fading ? jQuery("#post-ratings-" + post_id).fadeTo("def", 1, function() {
        set_is_being_rated(!1)
    }) : set_is_being_rated(!1)
}
function rate_post() {
    post_ratings_el = jQuery("#post-ratings-" + post_id);
    if (is_being_rated)
        alert(ratingsL10n.text_wait);
    else {
        post_ratings_nonce = jQuery(post_ratings_el).data("nonce");
        if ("undefined" == typeof post_ratings_nonce || null == post_ratings_nonce)
            post_ratings_nonce = jQuery(post_ratings_el).attr("data-nonce");
        set_is_being_rated(!0);
        ratingsL10n.show_fading ? jQuery(post_ratings_el).fadeTo("def", 0, function() {
            ratingsL10n.show_loading && jQuery("#post-ratings-" + post_id + "-loading").show();
            jQuery.ajax({
                type: "POST",
                xhrFields: {
                    withCredentials: !0
                },
                dataType: "html",
                url: ratingsL10n.ajax_url,
                data: "action=postratings&pid=" + post_id + "&rate=" + post_rating + "&postratings_" + post_id + "_nonce=" + post_ratings_nonce,
                cache: !1,
                success: rate_post_success
            })
        }) : (ratingsL10n.show_loading && jQuery("#post-ratings-" + post_id + "-loading").show(),
        jQuery.ajax({
            type: "POST",
            xhrFields: {
                withCredentials: !0
            },
            dataType: "html",
            url: ratingsL10n.ajax_url,
            data: "action=postratings&pid=" + post_id + "&rate=" + post_rating + "&postratings_" + post_id + "_nonce=" + post_ratings_nonce,
            cache: !1,
            success: rate_post_success
        }))
    }
}
;jQuery(document).ready(function($) {
    $('.wp-review-comment-field.allowed-to-rate a').on('click', function() {
        var $this = $(this)
          , $elem = $this.closest('.wp-review-comment-field');
        if ($elem.hasClass('allowed-to-rate')) {
            $elem.removeClass('has-not-rated-yet');
            $elem.find('.review-result').css('width', parseInt($this.data('input-value')) * 20 + '%');
            $elem.find('.wp_review_comment_rating').val($this.data('input-value'));
        }
    });
    var $commentFeedback = $('.wp-review-feedback');
    $commentFeedback.on('click', 'a', function(e) {
        var $this = $(this);
        e.preventDefault();
        if ($this.hasClass('voted') || $this.siblings().hasClass('voted') || $commentFeedback.hasClass('processing'))
            return;
        $.ajax({
            type: 'POST',
            url: wpreview.ajaxurl,
            beforeSend: function() {
                $commentFeedback.addClass('processing');
            },
            data: {
                action: 'mts_review_feedback',
                isHelpful: $this.data('value'),
                commentId: $this.data('comment-id')
            },
            success: function(data) {
                $this.closest('.wp-review-feedback').find('a').removeClass('voted');
                $this.addClass('voted').find('.feedback-count').text('(' + data + ')');
            },
            error: function(jqXHR) {
                alert(jqXHR.responseText);
            },
            complete: function() {
                $commentFeedback.removeClass('processing');
            }
        });
    });
    if ($('#wp-review-comment-title-field').length) {
        $('#wp-review-comment-title-field').closest('form').addClass('wp-review-comment-form');
    }
});
function wp_review_rate($elem) {
    var is_comment_rating = ($elem.is('.wp-review-comment-rating-star') || !!$elem.closest('.wp-review-comment-rating-star').length);
    if (is_comment_rating) {
        return '';
    }
    var rating = $elem.find('.wp-review-user-rating-val').val();
    var postid = $elem.find('.wp-review-user-rating-postid').val();
    var token = $elem.find('.wp-review-user-rating-nonce').val();
    var $target = $elem;
    if (!$target.is('.wp-review-user-rating'))
        $target = $elem.closest('.wp-review-user-rating');
    if (rating == 0) {
        return '';
    }
    jQuery.ajax({
        beforeSend: function() {
            $target.addClass('wp-review-loading');
        },
        data: {
            action: 'wp_review_rate',
            post_id: postid,
            nonce: token,
            review: rating
        },
        type: 'post',
        dataType: 'json',
        url: wpreview.ajaxurl,
        success: function(response) {
            $target.removeClass('wp-review-loading');
            if (typeof response.html !== 'undefined' && response.html != '') {
                $target.empty().append(response.html).addClass('has-rated');
            }
            if (typeof response.rating_total !== 'undefined' && response.rating_total != '') {
                $target.parent().find('.wp-review-user-rating-total').text(response.rating_total);
            }
            if (typeof response.rating_count !== 'undefined' && response.rating_count != '') {
                $target.parent().find('.wp-review-user-rating-counter').text(response.rating_count);
            }
        }
    });
}
;var addComment = {
    moveForm: function(a, b, c, d) {
        var e, f, g, h, i = this, j = i.I(a), k = i.I(c), l = i.I("cancel-comment-reply-link"), m = i.I("comment_parent"), n = i.I("comment_post_ID"), o = k.getElementsByTagName("form")[0];
        if (j && k && l && m && o) {
            i.respondId = c,
            d = d || !1,
            i.I("wp-temp-form-div") || (e = document.createElement("div"),
            e.id = "wp-temp-form-div",
            e.style.display = "none",
            k.parentNode.insertBefore(e, k)),
            j.parentNode.insertBefore(k, j.nextSibling),
            n && d && (n.value = d),
            m.value = b,
            l.style.display = "",
            l.onclick = function() {
                var a = addComment
                  , b = a.I("wp-temp-form-div")
                  , c = a.I(a.respondId);
                if (b && c)
                    return a.I("comment_parent").value = "0",
                    b.parentNode.insertBefore(c, b),
                    b.parentNode.removeChild(b),
                    this.style.display = "none",
                    this.onclick = null,
                    !1
            }
            ;
            try {
                for (var p = 0; p < o.elements.length; p++)
                    if (f = o.elements[p],
                    h = !1,
                    "getComputedStyle"in window ? g = window.getComputedStyle(f) : document.documentElement.currentStyle && (g = f.currentStyle),
                    (f.offsetWidth <= 0 && f.offsetHeight <= 0 || "hidden" === g.visibility) && (h = !0),
                    "hidden" !== f.type && !f.disabled && !h) {
                        f.focus();
                        break
                    }
            } catch (q) {}
            return !1
        }
    },
    I: function(a) {
        return document.getElementById(a)
    }
};
jQuery(function($) {
    "use strict";
    var swipers = [], winW, winH, winScr, _isresponsive, smPoint = 768, mdPoint = 992, lgPoint = 1200, addPoint = 1600, $container, _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);
    function pageCalculations() {
        winW = $(window).width();
        winH = $(window).height();
        if ($('.menu-button').is(':visible'))
            _isresponsive = true;
        else
            _isresponsive = false;
    }
    pageCalculations();
    $(window).load(function() {
        $('#loader-wrapper').fadeOut();
        initSwiper();
        youtubePlaylist();
        matchHeight();
        if ($('.isotope').length) {
            $container.isotope({
                itemSelector: '.isotope-item',
                masonry: {
                    gutter: 0,
                    columnWidth: '.grid-sizer'
                }
            });
        }
    });
    $(document).ready(function() {
        matchHeight();
        stickyVideo();
        progressBar();
        headerHeight();
        qtyStepper();
        parallax();
    });
    $(window).on("scroll", function() {
        winScr = $(window).scrollTop();
        stickHeader();
    });
    function resizeCall() {
        pageCalculations();
        $('.swiper-container.initialized[data-slides-per-view="responsive"]').each(function() {
            var thisSwiper = swipers['swiper-' + $(this).attr('id')]
              , $t = $(this)
              , slidesPerViewVar = updateSlidesPerView($t);
            thisSwiper.params.slidesPerView = slidesPerViewVar;
            thisSwiper.reInit();
            var paginationSpan = $t.find('.pagination span');
            var paginationSlice = paginationSpan.hide().slice(0, (paginationSpan.length + 1 - slidesPerViewVar));
            if (paginationSlice.length <= 1 || slidesPerViewVar >= $t.find('.swiper-slide').length)
                $t.addClass('pagination-hidden');
            else
                $t.removeClass('pagination-hidden');
            paginationSlice.show();
        });
    }
    if (!_ismobile) {
        $(window).resize(function() {
            resizeCall();
        });
    } else {
        window.addEventListener("orientationchange", function() {
            resizeCall();
        }, false);
    }
    function stickyVideo() {
        var video = '.tt-fluid-inner .tt-iframe';
        var button = '#lp-pom-button-16';
        var frame = '.tt-video-post-wrapper';
        var offset = ($('.tt-content').length) ? $('.tt-content').offset().top : 0;
        var showHeight = offset - 220;
        var targetClass = 'smallVid';
        var adjustClass = 'vidAdjust';
        var classSelect = '.smallVid';
        var noClose = true;
        var initWidth = $(video).width();
        var initHeight = $(video).height();
        $(window).scroll(function() {
            if ($(this).scrollTop() > showHeight && noClose) {
                $(video).addClass(targetClass + ' ' + adjustClass);
                $(frame).addClass('tt-on-scroll');
                $(video).removeClass('tt-fluid-inner-iframe');
                $(button).addClass(targetClass);
            } else {
                $(video).removeClass(targetClass, adjustClass);
                $(video).addClass('tt-fluid-inner-iframe');
                $(frame).removeClass('tt-on-scroll');
                $(button).removeClass(targetClass);
            }
        });
        $(button).click(function() {
            $(video).removeClass('smallVid vidAdjust');
            $(button).removeClass('smallVid');
            targetClass - null;
            adjustClass - null;
            noClose = false;
        });
    }
    function matchHeight() {
        var blogPostGrid = $('.post-grid-view')
          , blogTwoCol = $('.tt-post-two-col');
        blogPostGrid.imagesLoaded(function() {
            blogPostGrid.find('.post-handy-picked').not('.slick-slide').matchHeight();
        });
        blogTwoCol.imagesLoaded(function() {
            blogTwoCol.find('.tt-post-two-col-item').not('.slick-slide').matchHeight();
        });
    }
    function initSwiper() {
        var initIterator = 0;
        $('.swiper-container').each(function() {
            var $t = $(this);
            var index = 'swiper-unique-id-' + initIterator;
            $t.addClass('swiper-' + index + ' initialized').attr('id', index);
            $t.find('.pagination').addClass('pagination-' + index);
            var autoPlayVar = parseInt($t.attr('data-autoplay'), 10);
            var centerVar = parseInt($t.attr('data-center'), 10);
            var simVar = ($t.closest('.circle-description-slide-box').length) ? false : true;
            var slidesPerViewVar = $t.attr('data-slides-per-view');
            if (slidesPerViewVar == 'responsive') {
                slidesPerViewVar = updateSlidesPerView($t);
            } else if (slidesPerViewVar != 'auto')
                slidesPerViewVar = parseInt(slidesPerViewVar, 10);
            var loopVar = parseInt($t.attr('data-loop'), 10);
            var speedVar = parseInt($t.attr('data-speed'), 10);
            var autoPlayVar = ($('.tt-gallery-post').length) ? 0 : autoPlayVar;
            swipers['swiper-' + index] = new Swiper('.swiper-' + index,{
                speed: speedVar,
                pagination: '.pagination-' + index,
                loop: loopVar,
                paginationClickable: true,
                autoplay: autoPlayVar,
                slidesPerView: slidesPerViewVar,
                keyboardControl: true,
                allowSwipeToPrev: false,
                allowSwipeToNext: false,
                calculateHeight: true,
                simulateTouch: simVar,
                centeredSlides: centerVar,
                roundLengths: true,
                onSlideChangeEnd: function(swiper) {
                    var activeIndex = (loopVar === true) ? swiper.activeIndex : swiper.activeLoopIndex;
                    $('.img-block .bg.active').removeClass('active');
                    $('.img-block .bg').eq(activeIndex).addClass('active');
                    var qVal = $t.find('.swiper-slide-active').attr('data-val');
                    $t.find('.swiper-slide[data-val="' + qVal + '"]').addClass('active');
                },
                onSlideChangeStart: function(swiper) {
                    $t.find('.swiper-slide.active').removeClass('active');
                },
                onSlideClick: function(swiper) {}
            });
            if ($t.attr('data-slides-per-view') == 'responsive') {
                var paginationSpan = $t.find('.pagination span');
                var paginationSlice = paginationSpan.hide().slice(0, (paginationSpan.length + 1 - slidesPerViewVar));
                if (paginationSlice.length <= 1 || slidesPerViewVar >= $t.find('.swiper-slide').length)
                    $t.addClass('pagination-hidden');
                else
                    $t.removeClass('pagination-hidden');
                paginationSlice.show();
            }
            initIterator++;
        });
    }
    function updateSlidesPerView(swiperContainer) {
        if (winW >= addPoint)
            return parseInt(swiperContainer.attr('data-add-slides'), 10);
        else if (winW >= lgPoint)
            return parseInt(swiperContainer.attr('data-lg-slides'), 10);
        else if (winW >= mdPoint)
            return parseInt(swiperContainer.attr('data-md-slides'), 10);
        else if (winW >= smPoint)
            return parseInt(swiperContainer.attr('data-sm-slides'), 10);
        else
            return parseInt(swiperContainer.attr('data-xs-slides'), 10);
    }
    $('.swiper-arrow-left, .swiper-arrow-left-content').on('click', function() {
        swipers['swiper-' + $(this).parent().attr('id')].swipePrev();
    });
    $('.swiper-arrow-right, .swiper-arrow-right-content').on('click', function() {
        swipers['swiper-' + $(this).parent().attr('id')].swipeNext();
    });
    $('.custom-arrow-left').on('click', function() {
        swipers['swiper-' + $(this).closest('.tt-custom-arrows').find('.swiper-container').attr('id')].swipePrev();
    });
    $('.custom-arrow-right').on('click', function() {
        swipers['swiper-' + $(this).closest('.tt-custom-arrows').find('.swiper-container').attr('id')].swipeNext();
    });
    function stickHeader() {
        var isSticky = $('body').hasClass('tt-header-sticky');
        if (winScr > 0 && isSticky) {
            $(".tt-header").addClass("stick");
        } else {
            $(".tt-header").removeClass("stick");
        }
        if ($(".tt-header-banner").length) {
            var bannerH = $(".tt-header-banner").height();
            if (winScr > bannerH && isSticky) {
                $(".tt-header").addClass("move");
            } else {
                $(".tt-header").removeClass("move");
            }
        }
    }
    function headerHeight() {
        var outerHeight = $('.tt-header').outerHeight();
        $('.tt-header-height').css('height', outerHeight);
    }
    function youtubePlaylist() {
        if ($('.yt-playlist').length) {
            var wrapper = $('#frame');
            var channelId = wrapper.data('channel-id');
            var ytp = new YTV('frame',{
                channelId: channelId,
                playerTheme: 'dark',
                responsive: true
            });
        }
    }
    function parallax() {
        $('.tt-parallax-on').codeStarParallax();
    }
    function qtyStepper() {
        if (typeof $.fn.number != 'function') {
            return;
        }
        if ($('input[type=number]').length) {
            console.log('sfsdf');
            $('input[type=number]').number();
        }
        ;
    }
    $('.cmn-mobile-switch,.tt-mobile-close,.tt-mobile-overlay').on('click', function(e) {
        $('.tt-mobile-overlay').toggleClass('active');
        $('#content-wrapper').toggleClass('active');
        $('.tt-mobile-block').toggleClass('active');
        e.preventDefault();
    });
    $('.tt-mobile-nav .menu-toggle').on('click', function(e) {
        $(this).closest('li').addClass('select').siblings('.select').removeClass('select');
        $(this).closest('li').siblings('.parent').find('ul').slideUp();
        $(this).parent().siblings('ul').slideToggle();
        e.preventDefault();
    });
    $(document).on('mouseover', '.tt-mobile-nav>ul>li>a, .tt-mobile-nav>ul>li>ul>li>a', function(e) {
        e.preventDefault();
        $(this).siblings('ul').slideToggle();
    });
    $('.tt-s-popup-btn').on('click', function(e) {
        $('.tt-s-popup').addClass('open');
        e.preventDefault();
    });
    $('.tt-s-popup-close, .tt-s-popup-layer').on('click', function(e) {
        $('.tt-s-popup').removeClass('open');
        e.preventDefault();
    });
    $('.tt-thumb').on('click', function(e) {
        var img = $(this).attr('href');
        $('.tt-thumb-popup-img').attr('src', img);
        $('.tt-thumb-popup').addClass('active');
        e.preventDefault();
    });
    $('.tt-thumb-popup-close, .tt-thumb-popup-layer').on('click', function(e) {
        $('.tt-thumb-popup').removeClass('active');
        e.preventDefault();
    });
    $(document).on('click', '.tt-video-open', function(e) {
        e.preventDefault();
        var video = $(this).attr('href');
        $('.tt-video-popup-container iframe').attr('src', video);
        $('.tt-video-popup').addClass('active');
    });
    $('.tt-video-popup-close, .tt-video-popup-layer').on('click', function(e) {
        $('.tt-video-popup').removeClass('active');
        $('.tt-video-popup-container iframe').attr('src', 'about:blank')
        e.preventDefault();
    });
    $('.open-video').on('click', function() {
        $('.tt-video-wrapper .tt-item-video[data-rel="' + $(this).data('rel') + '"]').find('.embed-responsive').html('<iframe class="embed-responsive-item" src="' + $(this).data('src') + '?autoplay=1&amp;controls=1&amp;loop=1&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;autohide=0&amp;color=white&amp;iv_load_policy=3&amp;wmode=transparent"></iframe>');
        return false;
    });
    $container = $('.isotope-content');
    var tabFinish = 0;
    $('.tt-nav-tab-item').on('click', function(e) {
        var $t = $(this);
        if (tabFinish || $t.hasClass('active'))
            e.preventDefault();
        tabFinish = 1;
        $t.closest('.tt-nav-tab').find('.tt-nav-tab-item').removeClass('active');
        $t.addClass('active');
        var index = $t.parent().parent().find('.tt-nav-tab-item').index(this);
        $t.closest('.tt-tab-wrapper').find('.tt-tab-info:visible').fadeOut(500, function() {
            $t.closest('.tt-tab-wrapper').find('.tt-tab-info').eq(index).fadeIn(500, function() {
                tabFinish = 0;
            });
        });
    });
    var megaFinish = 0;
    $(".tt-mega-list li").on({
        mouseenter: function() {
            fixMegaMenuHeight();
            var $t = $(this);
            if (megaFinish || $t.hasClass('active'))
                e.preventDefault();
            megaFinish = 1;
            $t.siblings('.active').removeClass('active');
            $t.addClass('active');
            var index = $t.parent().parent().find('.tt-mega-list li').index(this);
            $t.closest('.tt-mega-wrapper').find('.tt-mega-entry.active').fadeOut(200, function() {
                $(this).removeClass('active');
                $t.closest('.tt-mega-wrapper').find('.tt-mega-entry').eq(index).fadeIn(200, function() {
                    megaFinish = 0;
                    $(this).addClass('active');
                });
            });
        },
        mouseleave: function() {}
    });
    function fixMegaMenuHeight() {
        var _this = $('.tt-mega-list')
          , _height = _this.outerHeight();
        _this.siblings('.tt-mega-content').css({
            'height': _height + 53
        });
    }
    function progressBar() {
        var progressBar = $('.progress-bar');
        progressBar.each(function(indx) {
            $(this).appear(function() {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });
        });
    }
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    $(window).on("scroll", function() {
        winScr = $(window).scrollTop();
        if (winScr > 500) {
            $(".tt-shortcode-1").addClass("open");
        } else {
            $(".tt-shortcode-1").removeClass("open");
        }
    });
    $(document).on('click', '.tt-shortcode-1 .tt-title-block', function(e) {
        e.preventDefault();
        $('.tt-shortcode-1').toggleClass('active');
        return false;
    });
    $(window).on("scroll", function() {
        winScr = $(window).scrollTop();
        if (winScr > 500) {
            $(".tt-shortcode-2.visible").addClass("open");
        } else {
            $(".tt-shortcode-2.visible").removeClass("open");
        }
    });
    $(document).on('click', '.tt-shortcode-2-close', function(e) {
        e.preventDefault();
        $('.tt-shortcode-2').removeClass('open').removeClass('visible');
        return false;
    });
    $('.ajax-load-more.load-more').each(function() {
        var $this = $(this), $container = $this.parent().parent().find('.isotope-content'), token = $this.data('token'), settings = window['magplus_load_more_' + token], is_isotope = parseInt(settings.isotope), paging = 1, flood = false, ajax_data;
        $this.bind('click', function() {
            if (flood === false) {
                paging++;
                flood = true;
                ajax_data = $.extend({}, {
                    action: 'ajax-pagination',
                    paged: paging
                }, settings);
                $.ajax({
                    type: 'POST',
                    url: magplus_ajax.ajaxurl,
                    data: ajax_data,
                    dataType: 'html',
                    beforeSend: function() {
                        $this.addClass('more-loading');
                        $this.html('Loading...');
                    },
                    success: function(html) {
                        var content = $(html).css('opacity', 0);
                        if (is_isotope) {
                            content.imagesLoaded(function() {
                                $container.append(content).isotope('appended', content);
                                $container.isotope('layout');
                            });
                        } else {
                            $(content).insertBefore($this.parent());
                        }
                        content.animate({
                            'opacity': 1
                        }, 250);
                        $this.removeClass('more-loading');
                        $this.html('Load More');
                        if (parseInt(settings.max_pages) == paging) {
                            $this.hide();
                        }
                        flood = false;
                    }
                });
            }
            return false;
        });
    });
    $('.ajax-load-more.infinite-scroll').each(function() {
        var $this = $(this), $container = $this.parent().parent().find('.isotope-content'), token = $this.data('token'), settings = window['magplus_load_more_' + token], is_isotope = parseInt(settings.isotope), paging = 2, flood = false, ajax_data;
        $(window).scroll(function() {
            if (flood === false) {
                paging++;
                flood = true;
                ajax_data = $.extend({}, {
                    action: 'ajax-pagination',
                    paged: paging
                }, settings);
                $('.ajax-load-more.infinite-scroll').appear(function() {
                    $.ajax({
                        type: 'POST',
                        url: magplus_ajax.ajaxurl,
                        data: ajax_data,
                        dataType: 'html',
                        beforeSend: function() {
                            $this.addClass('more-loading');
                            $this.html('Loading...');
                        },
                        success: function(html) {
                            var content = $(html).css('opacity', 0);
                            if (is_isotope) {
                                content.imagesLoaded(function() {
                                    $container.append(content).isotope('appended', content);
                                    $container.isotope('layout');
                                });
                            } else {
                                $(content).insertBefore($this.parent());
                            }
                            content.animate({
                                'opacity': 1
                            }, 250);
                            $this.removeClass('more-loading');
                            $this.html('Load More');
                            if (parseInt(settings.max_pages) == paging) {
                                $this.hide();
                            }
                            flood = false;
                        }
                    });
                });
            }
            return false;
        });
    });
});

(function(c) {
    var n = -1
      , f = -1
      , g = function(a) {
        return parseFloat(a) || 0
    }
      , r = function(a) {
        var b = null
          , d = [];
        c(a).each(function() {
            var a = c(this)
              , k = a.offset().top - g(a.css("margin-top"))
              , l = 0 < d.length ? d[d.length - 1] : null;
            null === l ? d.push(a) : 1 >= Math.floor(Math.abs(b - k)) ? d[d.length - 1] = l.add(a) : d.push(a);
            b = k
        });
        return d
    }
      , p = function(a) {
        var b = {
            byRow: !0,
            property: "height",
            target: null,
            remove: !1
        };
        if ("object" === typeof a)
            return c.extend(b, a);
        "boolean" === typeof a ? b.byRow = a : "remove" === a && (b.remove = !0);
        return b
    }
      , b = c.fn.matchHeight = function(a) {
        a = p(a);
        if (a.remove) {
            var e = this;
            this.css(a.property, "");
            c.each(b._groups, function(a, b) {
                b.elements = b.elements.not(e)
            });
            return this
        }
        if (1 >= this.length && !a.target)
            return this;
        b._groups.push({
            elements: this,
            options: a
        });
        b._apply(this, a);
        return this
    }
    ;
    b._groups = [];
    b._throttle = 80;
    b._maintainScroll = !1;
    b._beforeUpdate = null;
    b._afterUpdate = null;
    b._apply = function(a, e) {
        var d = p(e)
          , h = c(a)
          , k = [h]
          , l = c(window).scrollTop()
          , f = c("html").outerHeight(!0)
          , m = h.parents().filter(":hidden");
        m.each(function() {
            var a = c(this);
            a.data("style-cache", a.attr("style"))
        });
        m.css("display", "block");
        d.byRow && !d.target && (h.each(function() {
            var a = c(this)
              , b = a.css("display");
            "inline-block" !== b && "inline-flex" !== b && (b = "block");
            a.data("style-cache", a.attr("style"));
            a.css({
                display: b,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px"
            })
        }),
        k = r(h),
        h.each(function() {
            var a = c(this);
            a.attr("style", a.data("style-cache") || "")
        }));
        c.each(k, function(a, b) {
            var e = c(b)
              , f = 0;
            if (d.target)
                f = d.target.outerHeight(!1);
            else {
                if (d.byRow && 1 >= e.length) {
                    e.css(d.property, "");
                    return
                }
                e.each(function() {
                    var a = c(this)
                      , b = a.css("display");
                    "inline-block" !== b && "inline-flex" !== b && (b = "block");
                    b = {
                        display: b
                    };
                    b[d.property] = "";
                    a.css(b);
                    a.outerHeight(!1) > f && (f = a.outerHeight(!1));
                    a.css("display", "")
                })
            }
            e.each(function() {
                var a = c(this)
                  , b = 0;
                d.target && a.is(d.target) || ("border-box" !== a.css("box-sizing") && (b += g(a.css("border-top-width")) + g(a.css("border-bottom-width")),
                b += g(a.css("padding-top")) + g(a.css("padding-bottom"))),
                a.css(d.property, f - b + "px"))
            })
        });
        m.each(function() {
            var a = c(this);
            a.attr("style", a.data("style-cache") || null)
        });
        b._maintainScroll && c(window).scrollTop(l / f * c("html").outerHeight(!0));
        return this
    }
    ;
    b._applyDataApi = function() {
        var a = {};
        c("[data-match-height], [data-mh]").each(function() {
            var b = c(this)
              , d = b.attr("data-mh") || b.attr("data-match-height");
            a[d] = d in a ? a[d].add(b) : b
        });
        c.each(a, function() {
            this.matchHeight(!0)
        })
    }
    ;
    var q = function(a) {
        b._beforeUpdate && b._beforeUpdate(a, b._groups);
        c.each(b._groups, function() {
            b._apply(this.elements, this.options)
        });
        b._afterUpdate && b._afterUpdate(a, b._groups)
    };
    b._update = function(a, e) {
        if (e && "resize" === e.type) {
            var d = c(window).width();
            if (d === n)
                return;
            n = d
        }
        a ? -1 === f && (f = setTimeout(function() {
            q(e);
            f = -1
        }, b._throttle)) : q(e)
    }
    ;
    c(b._applyDataApi);
    c(window).bind("load", function(a) {
        b._update(!1, a)
    });
    c(window).bind("resize orientationchange", function(a) {
        b._update(!0, a)
    })
}
)(jQuery);
!function(e) {
    e.fn.appear = function(a, r) {
        var n = e.extend({
            data: void 0,
            one: !0,
            accX: 0,
            accY: 0
        }, r);
        return this.each(function() {
            var r = e(this);
            if (r.appeared = !1,
            !a)
                return void r.trigger("appear", n.data);
            var p = e(window)
              , t = function() {
                if (!r.is(":visible"))
                    return void (r.appeared = !1);
                var e = p.scrollLeft()
                  , a = p.scrollTop()
                  , t = r.offset()
                  , c = t.left
                  , i = t.top
                  , o = n.accX
                  , f = n.accY
                  , s = r.height()
                  , u = p.height()
                  , d = r.width()
                  , l = p.width();
                i + s + f >= a && a + u + f >= i && c + d + o >= e && e + l + o >= c ? r.appeared || r.trigger("appear", n.data) : r.appeared = !1
            }
              , c = function() {
                if (r.appeared = !0,
                n.one) {
                    p.unbind("scroll", t);
                    var c = e.inArray(t, e.fn.appear.checks);
                    c >= 0 && e.fn.appear.checks.splice(c, 1)
                }
                a.apply(this, arguments)
            };
            n.one ? r.one("appear", n.data, c) : r.bind("appear", n.data, c),
            p.scroll(t),
            e.fn.appear.checks.push(t),
            t()
        })
    }
    ,
    e.extend(e.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var a = e.fn.appear.checks.length;
            if (a > 0)
                for (; a--; )
                    e.fn.appear.checks[a]()
        },
        run: function() {
            e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout),
            e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
        }
    }),
    e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(a, r) {
        var n = e.fn[r];
        n && (e.fn[r] = function() {
            var a = n.apply(this, arguments);
            return e.fn.appear.run(),
            a
        }
        )
    })
}(jQuery);
;(function($, window, document) {
    'use strict';
    $.fn.codeStarParallax = function() {
        return this.each(function() {
            var $this = $(this)
              , offset = 0
              , boxHeight = 0
              , winWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
              , winHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
              , imgHeight = $this.data('height') || 0
              , ratio = $this.data('ratio') || 0.5
              , positionX = $this.css('background-position-x') || '50%';
            function scrolling() {
                var scrollTop = $(window).scrollTop()
                  , boxOffset = $this.offset().top;
                if (boxOffset + boxHeight <= scrollTop || boxOffset >= scrollTop + winHeight) {
                    return;
                }
                $this.css({
                    'background-position': positionX + ' ' + Math.round((offset + ratio) * (boxOffset - scrollTop)) + 'px'
                });
            }
            function resizing() {
                winWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                winHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                boxHeight = $this.outerHeight();
                imgHeight = imgHeight || boxHeight;
                ratio = Math.min(ratio, imgHeight / (winHeight + boxHeight));
                offset = Math.min(offset, (Math.min(0, winHeight - imgHeight - ratio) * Math.min(0, winHeight - boxHeight)) / 2);
                scrolling();
            }
            $(window).on('scroll', scrolling).on('resize', resizing);
            resizing();
        });
    }
    ;
}
)(jQuery, window, document);
(function() {
    "use strict";
    function a() {}
    function b(a, b) {
        for (var c = a.length; c--; )
            if (a[c].listener === b)
                return c;
        return -1
    }
    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype
      , e = this
      , f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if ("object" == typeof a) {
            b = {};
            for (c in d)
                d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else
            b = d[a] || (d[a] = []);
        return b
    }
    ,
    d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1)
            c.push(a[b].listener);
        return c
    }
    ,
    d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {},
        b[a] = c),
        b || c
    }
    ,
    d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a), f = "object" == typeof c;
        for (d in e)
            e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
                listener: c,
                once: !1
            });
        return this
    }
    ,
    d.on = c("addListener"),
    d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }
    ,
    d.once = c("addOnceListener"),
    d.defineEvent = function(a) {
        return this.getListeners(a),
        this
    }
    ,
    d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1)
            this.defineEvent(a[b]);
        return this
    }
    ,
    d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f)
            f.hasOwnProperty(e) && (d = b(f[e], c),
            -1 !== d && f[e].splice(d, 1));
        return this
    }
    ,
    d.off = c("removeListener"),
    d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }
    ,
    d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }
    ,
    d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener, g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--; )
                f.call(this, b, c[d]);
        else
            for (d in b)
                b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }
    ,
    d.removeEvent = function(a) {
        var b, c = typeof a, d = this._getEvents();
        if ("string" === c)
            delete d[a];
        else if ("object" === c)
            for (b in d)
                d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else
            delete this._events;
        return this
    }
    ,
    d.removeAllListeners = c("removeEvent"),
    d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--; )
                    c = g[e][d],
                    c.once === !0 && this.removeListener(a, c.listener),
                    f = c.listener.apply(this, b || []),
                    f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }
    ,
    d.trigger = c("emitEvent"),
    d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }
    ,
    d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a,
        this
    }
    ,
    d._getOnceReturnValue = function() {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }
    ,
    d._getEvents = function() {
        return this._events || (this._events = {})
    }
    ,
    a.noConflict = function() {
        return e.EventEmitter = f,
        a
    }
    ,
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
}
).call(this),
function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b,
        c
    }
    var c = document.documentElement
      , d = function() {};
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    }
    : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        }
        : function() {
            var c = b(a);
            d.call(a, c)
        }
        ,
        a.attachEvent("on" + c, a[c + d])
    }
    );
    var e = function() {};
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    }
    : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    }
    );
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : a.eventie = f
}(this),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(c, d) {
        return b(a, c, d)
    }) : "object" == typeof module && module.exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
}(window, function(a, b, c) {
    function d(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    function e(a) {
        return "[object Array]" == l.call(a)
    }
    function f(a) {
        var b = [];
        if (e(a))
            b = a;
        else if ("number" == typeof a.length)
            for (var c = 0; c < a.length; c++)
                b.push(a[c]);
        else
            b.push(a);
        return b
    }
    function g(a, b, c) {
        if (!(this instanceof g))
            return new g(a,b,c);
        "string" == typeof a && (a = document.querySelectorAll(a)),
        this.elements = f(a),
        this.options = d({}, this.options),
        "function" == typeof b ? c = b : d(this.options, b),
        c && this.on("always", c),
        this.getImages(),
        j && (this.jqDeferred = new j.Deferred);
        var e = this;
        setTimeout(function() {
            e.check()
        })
    }
    function h(a) {
        this.img = a
    }
    function i(a, b) {
        this.url = a,
        this.element = b,
        this.img = new Image
    }
    var j = a.jQuery
      , k = a.console
      , l = Object.prototype.toString;
    g.prototype = new b,
    g.prototype.options = {},
    g.prototype.getImages = function() {
        this.images = [];
        for (var a = 0; a < this.elements.length; a++) {
            var b = this.elements[a];
            this.addElementImages(b)
        }
    }
    ,
    g.prototype.addElementImages = function(a) {
        "IMG" == a.nodeName && this.addImage(a),
        this.options.background === !0 && this.addElementBackgroundImages(a);
        var b = a.nodeType;
        if (b && m[b]) {
            for (var c = a.querySelectorAll("img"), d = 0; d < c.length; d++) {
                var e = c[d];
                this.addImage(e)
            }
            if ("string" == typeof this.options.background) {
                var f = a.querySelectorAll(this.options.background);
                for (d = 0; d < f.length; d++) {
                    var g = f[d];
                    this.addElementBackgroundImages(g)
                }
            }
        }
    }
    ;
    var m = {
        1: !0,
        9: !0,
        11: !0
    };
    g.prototype.addElementBackgroundImages = function(a) {
        for (var b = n(a), c = /url\(['"]*([^'"\)]+)['"]*\)/gi, d = c.exec(b.backgroundImage); null !== d; ) {
            var e = d && d[1];
            e && this.addBackground(e, a),
            d = c.exec(b.backgroundImage)
        }
    }
    ;
    var n = a.getComputedStyle || function(a) {
        return a.currentStyle
    }
    ;
    return g.prototype.addImage = function(a) {
        var b = new h(a);
        this.images.push(b)
    }
    ,
    g.prototype.addBackground = function(a, b) {
        var c = new i(a,b);
        this.images.push(c)
    }
    ,
    g.prototype.check = function() {
        function a(a, c, d) {
            setTimeout(function() {
                b.progress(a, c, d)
            })
        }
        var b = this;
        if (this.progressedCount = 0,
        this.hasAnyBroken = !1,
        !this.images.length)
            return void this.complete();
        for (var c = 0; c < this.images.length; c++) {
            var d = this.images[c];
            d.once("progress", a),
            d.check()
        }
    }
    ,
    g.prototype.progress = function(a, b, c) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded,
        this.emit("progress", this, a, b),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, a),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && k && k.log("progress: " + c, a, b)
    }
    ,
    g.prototype.complete = function() {
        var a = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emit(a, this),
        this.emit("always", this),
        this.jqDeferred) {
            var b = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[b](this)
        }
    }
    ,
    h.prototype = new b,
    h.prototype.check = function() {
        var a = this.getIsImageComplete();
        return a ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        c.bind(this.proxyImage, "load", this),
        c.bind(this.proxyImage, "error", this),
        c.bind(this.img, "load", this),
        c.bind(this.img, "error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    h.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }
    ,
    h.prototype.confirm = function(a, b) {
        this.isLoaded = a,
        this.emit("progress", this, this.img, b)
    }
    ,
    h.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }
    ,
    h.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    h.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    h.prototype.unbindEvents = function() {
        c.unbind(this.proxyImage, "load", this),
        c.unbind(this.proxyImage, "error", this),
        c.unbind(this.img, "load", this),
        c.unbind(this.img, "error", this)
    }
    ,
    i.prototype = new h,
    i.prototype.check = function() {
        c.bind(this.img, "load", this),
        c.bind(this.img, "error", this),
        this.img.src = this.url;
        var a = this.getIsImageComplete();
        a && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    i.prototype.unbindEvents = function() {
        c.unbind(this.img, "load", this),
        c.unbind(this.img, "error", this)
    }
    ,
    i.prototype.confirm = function(a, b) {
        this.isLoaded = a,
        this.emit("progress", this, this.element, b)
    }
    ,
    g.makeJQueryPlugin = function(b) {
        b = b || a.jQuery,
        b && (j = b,
        j.fn.imagesLoaded = function(a, b) {
            var c = new g(this,a,b);
            return c.jqDeferred.promise(j(this))
        }
        )
    }
    ,
    g.makeJQueryPlugin(),
    g
});
!function(a, b) {
    "use strict";
    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"), h = !!navigator.userAgent.match(/Trident.*rv:11\./), i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++) {
                if (d = i[c],
                !d.getAttribute("data-secret"))
                    f = Math.random().toString(36).substr(2, 10),
                    d.src += "#?secret=" + f,
                    d.setAttribute("data-secret", f);
                if (g || h)
                    a = d.cloneNode(!0),
                    a.removeAttribute("security"),
                    d.parentNode.replaceChild(a, d)
            }
        }
    }
    var d = !1
      , e = !1;
    if (b.querySelector)
        if (a.addEventListener)
            d = !0;
    if (a.wp = a.wp || {},
    !a.wp.receiveEmbedMessage)
        if (a.wp.receiveEmbedMessage = function(c) {
            var d = c.data;
            if (d.secret || d.message || d.value)
                if (!/[^a-zA-Z0-9]/.test(d.secret)) {
                    var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'), k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
                    for (e = 0; e < k.length; e++)
                        k[e].style.display = "none";
                    for (e = 0; e < j.length; e++)
                        if (f = j[e],
                        c.source === f.contentWindow) {
                            if (f.removeAttribute("style"),
                            "height" === d.message) {
                                if (g = parseInt(d.value, 10),
                                g > 1e3)
                                    g = 1e3;
                                else if (~~g < 200)
                                    g = 200;
                                f.height = g
                            }
                            if ("link" === d.message)
                                if (h = b.createElement("a"),
                                i = b.createElement("a"),
                                h.href = f.getAttribute("src"),
                                i.href = d.value,
                                i.host === h.host)
                                    if (b.activeElement === f)
                                        a.top.location.href = d.value
                        } else
                            ;
                }
        }
        ,
        d)
            a.addEventListener("message", a.wp.receiveEmbedMessage, !1),
            b.addEventListener("DOMContentLoaded", c, !1),
            a.addEventListener("load", c, !1)
}(window, document);
/*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
!function e(t, n, o) {
    function i(a, s) {
        if (!n[a]) {
            if (!t[a]) {
                var l = "function" == typeof require && require;
                if (!s && l)
                    return l(a, !0);
                if (r)
                    return r(a, !0);
                var d = new Error("Cannot find module '" + a + "'");
                throw d.code = "MODULE_NOT_FOUND",
                d
            }
            var u = n[a] = {
                exports: {}
            };
            t[a][0].call(u.exports, function(e) {
                var n = t[a][1][e];
                return i(n || e)
            }, u, u.exports, e, t, n, o)
        }
        return n[a].exports
    }
    for (var r = "function" == typeof require && require, a = 0; a < o.length; a++)
        i(o[a]);
    return i
}({
    1: [function(e, t, n) {}
    , {}],
    2: [function(e, t, n) {
        (function(n) {
            var o, i = void 0 !== n ? n : "undefined" != typeof window ? window : {}, r = e(1);
            "undefined" != typeof document ? o = document : (o = i["__GLOBAL_DOCUMENT_CACHE@4"]) || (o = i["__GLOBAL_DOCUMENT_CACHE@4"] = r),
            t.exports = o
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        1: 1
    }],
    3: [function(e, t, n) {
        (function(e) {
            var n;
            n = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
            t.exports = n
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    4: [function(e, t, n) {
        !function(e) {
            function n() {}
            function o(e, t) {
                return function() {
                    e.apply(t, arguments)
                }
            }
            function i(e) {
                if ("object" != typeof this)
                    throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e)
                    throw new TypeError("not a function");
                this._state = 0,
                this._handled = !1,
                this._value = void 0,
                this._deferreds = [],
                u(e, this)
            }
            function r(e, t) {
                for (; 3 === e._state; )
                    e = e._value;
                0 !== e._state ? (e._handled = !0,
                i._immediateFn(function() {
                    var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                    if (null !== n) {
                        var o;
                        try {
                            o = n(e._value)
                        } catch (e) {
                            return void s(t.promise, e)
                        }
                        a(t.promise, o)
                    } else
                        (1 === e._state ? a : s)(t.promise, e._value)
                })) : e._deferreds.push(t)
            }
            function a(e, t) {
                try {
                    if (t === e)
                        throw new TypeError("A promise cannot be resolved with itself.");
                    if (t && ("object" == typeof t || "function" == typeof t)) {
                        var n = t.then;
                        if (t instanceof i)
                            return e._state = 3,
                            e._value = t,
                            void l(e);
                        if ("function" == typeof n)
                            return void u(o(n, t), e)
                    }
                    e._state = 1,
                    e._value = t,
                    l(e)
                } catch (t) {
                    s(e, t)
                }
            }
            function s(e, t) {
                e._state = 2,
                e._value = t,
                l(e)
            }
            function l(e) {
                2 === e._state && 0 === e._deferreds.length && i._immediateFn(function() {
                    e._handled || i._unhandledRejectionFn(e._value)
                });
                for (var t = 0, n = e._deferreds.length; t < n; t++)
                    r(e, e._deferreds[t]);
                e._deferreds = null
            }
            function d(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null,
                this.onRejected = "function" == typeof t ? t : null,
                this.promise = n
            }
            function u(e, t) {
                var n = !1;
                try {
                    e(function(e) {
                        n || (n = !0,
                        a(t, e))
                    }, function(e) {
                        n || (n = !0,
                        s(t, e))
                    })
                } catch (e) {
                    if (n)
                        return;
                    n = !0,
                    s(t, e)
                }
            }
            var c = setTimeout;
            i.prototype.catch = function(e) {
                return this.then(null, e)
            }
            ,
            i.prototype.then = function(e, t) {
                var o = new this.constructor(n);
                return r(this, new d(e,t,o)),
                o
            }
            ,
            i.all = function(e) {
                var t = Array.prototype.slice.call(e);
                return new i(function(e, n) {
                    function o(r, a) {
                        try {
                            if (a && ("object" == typeof a || "function" == typeof a)) {
                                var s = a.then;
                                if ("function" == typeof s)
                                    return void s.call(a, function(e) {
                                        o(r, e)
                                    }, n)
                            }
                            t[r] = a,
                            0 == --i && e(t)
                        } catch (e) {
                            n(e)
                        }
                    }
                    if (0 === t.length)
                        return e([]);
                    for (var i = t.length, r = 0; r < t.length; r++)
                        o(r, t[r])
                }
                )
            }
            ,
            i.resolve = function(e) {
                return e && "object" == typeof e && e.constructor === i ? e : new i(function(t) {
                    t(e)
                }
                )
            }
            ,
            i.reject = function(e) {
                return new i(function(t, n) {
                    n(e)
                }
                )
            }
            ,
            i.race = function(e) {
                return new i(function(t, n) {
                    for (var o = 0, i = e.length; o < i; o++)
                        e[o].then(t, n)
                }
                )
            }
            ,
            i._immediateFn = "function" == typeof setImmediate && function(e) {
                setImmediate(e)
            }
            || function(e) {
                c(e, 0)
            }
            ,
            i._unhandledRejectionFn = function(e) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
            }
            ,
            i._setImmediateFn = function(e) {
                i._immediateFn = e
            }
            ,
            i._setUnhandledRejectionFn = function(e) {
                i._unhandledRejectionFn = e
            }
            ,
            void 0 !== t && t.exports ? t.exports = i : e.Promise || (e.Promise = i)
        }(this)
    }
    , {}],
    5: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e(7))
          , r = e(15)
          , a = e(27)
          , s = {
            lang: "en",
            en: r.EN
        };
        s.language = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            if (null !== t && void 0 !== t && t.length) {
                if ("string" != typeof t[0])
                    throw new TypeError("Language code must be a string value");
                if (!/^[a-z]{2,3}((\-|_)[a-z]{2})?$/i.test(t[0]))
                    throw new TypeError("Language code must have format 2-3 letters and. optionally, hyphen, underscore followed by 2 more letters");
                s.lang = t[0],
                void 0 === s[t[0]] ? (t[1] = null !== t[1] && void 0 !== t[1] && "object" === o(t[1]) ? t[1] : {},
                s[t[0]] = (0,
                a.isObjectEmpty)(t[1]) ? r.EN : t[1]) : null !== t[1] && void 0 !== t[1] && "object" === o(t[1]) && (s[t[0]] = t[1])
            }
            return s.lang
        }
        ,
        s.t = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if ("string" == typeof e && e.length) {
                var n = void 0
                  , i = void 0
                  , r = s.language()
                  , l = function(e, t, n) {
                    return "object" !== (void 0 === e ? "undefined" : o(e)) || "number" != typeof t || "number" != typeof n ? e : [function() {
                        return arguments.length <= 1 ? void 0 : arguments[1]
                    }
                    , function() {
                        return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                    }
                    , function() {
                        return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                    }
                    , function() {
                        return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : 0 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                    }
                    , function() {
                        return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) || 11 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) || 12 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) > 2 && (arguments.length <= 0 ? void 0 : arguments[0]) < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                    }
                    , function() {
                        return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 0 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                    }
                    , function() {
                        return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : [3]
                    }
                    , function() {
                        return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                    }
                    , function() {
                        return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) <= 4 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                    }
                    , function() {
                        return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                    }
                    , function() {
                        return (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 1 ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 2 ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 3 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 4 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 1 ? void 0 : arguments[1]
                    }
                    , function() {
                        return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) > 2 && (arguments.length <= 0 ? void 0 : arguments[0]) < 7 ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) > 6 && (arguments.length <= 0 ? void 0 : arguments[0]) < 11 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 5 ? void 0 : arguments[5]
                    }
                    , function() {
                        return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 3 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 <= 10 ? arguments.length <= 4 ? void 0 : arguments[4] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 11 ? arguments.length <= 5 ? void 0 : arguments[5] : arguments.length <= 6 ? void 0 : arguments[6]
                    }
                    , function() {
                        return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 11 ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 10 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                    }
                    , function() {
                        return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 2 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                    }
                    , function() {
                        return 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                    }
                    , function() {
                        return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                    }
                    , function() {
                        return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 8 !== (arguments.length <= 0 ? void 0 : arguments[0]) && 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                    }
                    , function() {
                        return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                    }
                    , function() {
                        return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 3 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                    }
                    , function() {
                        return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                    }
                    ][n].apply(null, [t].concat(e))
                };
                return void 0 !== s[r] && (n = s[r][e],
                null !== t && "number" == typeof t && (i = s[r]["mejs.plural-form"],
                n = l.apply(null, [n, t, i]))),
                !n && s.en && (n = s.en[e],
                null !== t && "number" == typeof t && (i = s.en["mejs.plural-form"],
                n = l.apply(null, [n, t, i]))),
                n = n || e,
                null !== t && "number" == typeof t && (n = n.replace("%1", t)),
                (0,
                a.escapeHTML)(n)
            }
            return e
        }
        ,
        i.default.i18n = s,
        "undefined" != typeof mejsL10n && i.default.i18n.language(mejsL10n.language, mejsL10n.strings),
        n.default = s
    }
    , {
        15: 15,
        27: 27,
        7: 7
    }],
    6: [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , a = o(e(3))
          , s = o(e(2))
          , l = o(e(7))
          , d = e(27)
          , u = e(28)
          , c = e(8)
          , f = e(25)
          , p = function e(t, n, o) {
            var p = this;
            i(this, e);
            var m = this;
            o = Array.isArray(o) ? o : null,
            m.defaults = {
                renderers: [],
                fakeNodeName: "mediaelementwrapper",
                pluginPath: "build/",
                shimScriptAccess: "sameDomain"
            },
            n = Object.assign(m.defaults, n),
            m.mediaElement = s.default.createElement(n.fakeNodeName);
            var h = t
              , v = !1;
            if ("string" == typeof t ? m.mediaElement.originalNode = s.default.getElementById(t) : (m.mediaElement.originalNode = t,
            h = t.id),
            void 0 === m.mediaElement.originalNode || null === m.mediaElement.originalNode)
                return null;
            m.mediaElement.options = n,
            h = h || "mejs_" + Math.random().toString().slice(2),
            m.mediaElement.originalNode.setAttribute("id", h + "_from_mejs");
            var g = m.mediaElement.originalNode.tagName.toLowerCase();
            ["video", "audio"].indexOf(g) > -1 && !m.mediaElement.originalNode.getAttribute("preload") && m.mediaElement.originalNode.setAttribute("preload", "none"),
            m.mediaElement.originalNode.parentNode.insertBefore(m.mediaElement, m.mediaElement.originalNode),
            m.mediaElement.appendChild(m.mediaElement.originalNode);
            var y = function(e, t) {
                if ("https:" === a.default.location.protocol && 0 === e.indexOf("http:") && f.IS_IOS && l.default.html5media.mediaTypes.indexOf(t) > -1) {
                    var n = new XMLHttpRequest;
                    n.onreadystatechange = function() {
                        if (4 === this.readyState && 200 === this.status) {
                            var t = (a.default.URL || a.default.webkitURL).createObjectURL(this.response);
                            return m.mediaElement.originalNode.setAttribute("src", t),
                            t
                        }
                        return e
                    }
                    ,
                    n.open("GET", e),
                    n.responseType = "blob",
                    n.send()
                }
                return e
            }
              , E = void 0;
            if (null !== o)
                E = o;
            else if (null !== m.mediaElement.originalNode)
                switch (E = [],
                m.mediaElement.originalNode.nodeName.toLowerCase()) {
                case "iframe":
                    E.push({
                        type: "",
                        src: m.mediaElement.originalNode.getAttribute("src")
                    });
                    break;
                case "audio":
                case "video":
                    var b = m.mediaElement.originalNode.children.length
                      , S = m.mediaElement.originalNode.getAttribute("src");
                    if (S) {
                        var x = m.mediaElement.originalNode
                          , w = (0,
                        u.formatType)(S, x.getAttribute("type"));
                        E.push({
                            type: w,
                            src: y(S, w)
                        })
                    }
                    for (var P = 0; P < b; P++) {
                        var T = m.mediaElement.originalNode.children[P];
                        if ("source" === T.tagName.toLowerCase()) {
                            var C = T.getAttribute("src")
                              , k = (0,
                            u.formatType)(C, T.getAttribute("type"));
                            E.push({
                                type: k,
                                src: y(C, k)
                            })
                        }
                    }
                }
            m.mediaElement.id = h,
            m.mediaElement.renderers = {},
            m.mediaElement.events = {},
            m.mediaElement.promises = [],
            m.mediaElement.renderer = null,
            m.mediaElement.rendererName = null,
            m.mediaElement.changeRenderer = function(e, t) {
                var n = p
                  , o = Object.keys(t[0]).length > 2 ? t[0] : t[0].src;
                if (void 0 !== n.mediaElement.renderer && null !== n.mediaElement.renderer && n.mediaElement.renderer.name === e)
                    return n.mediaElement.renderer.pause(),
                    n.mediaElement.renderer.stop && n.mediaElement.renderer.stop(),
                    n.mediaElement.renderer.show(),
                    n.mediaElement.renderer.setSrc(o),
                    !0;
                void 0 !== n.mediaElement.renderer && null !== n.mediaElement.renderer && (n.mediaElement.renderer.pause(),
                n.mediaElement.renderer.stop && n.mediaElement.renderer.stop(),
                n.mediaElement.renderer.hide());
                var i = n.mediaElement.renderers[e]
                  , r = null;
                if (void 0 !== i && null !== i)
                    return i.show(),
                    i.setSrc(o),
                    n.mediaElement.renderer = i,
                    n.mediaElement.rendererName = e,
                    !0;
                for (var a = n.mediaElement.options.renderers.length ? n.mediaElement.options.renderers : c.renderer.order, s = 0, l = a.length; s < l; s++) {
                    var d = a[s];
                    if (d === e) {
                        r = c.renderer.renderers[d];
                        var u = Object.assign(r.options, n.mediaElement.options);
                        return i = r.create(n.mediaElement, u, t),
                        i.name = e,
                        n.mediaElement.renderers[r.name] = i,
                        n.mediaElement.renderer = i,
                        n.mediaElement.rendererName = e,
                        i.show(),
                        !0
                    }
                }
                return !1
            }
            ,
            m.mediaElement.setSize = function(e, t) {
                void 0 !== m.mediaElement.renderer && null !== m.mediaElement.renderer && m.mediaElement.renderer.setSize(e, t)
            }
            ,
            m.mediaElement.generateError = function(e, t) {
                e = e || "",
                t = Array.isArray(t) ? t : [];
                var n = (0,
                d.createEvent)("error", m.mediaElement);
                n.message = e,
                n.urls = t,
                m.mediaElement.dispatchEvent(n),
                v = !0
            }
            ;
            var _ = l.default.html5media.properties
              , N = l.default.html5media.methods
              , A = function(e, t, n, o) {
                var i = e[t];
                Object.defineProperty(e, t, {
                    get: function() {
                        return n.apply(e, [i])
                    },
                    set: function(t) {
                        return i = o.apply(e, [t])
                    }
                })
            }
              , L = function() {
                return void 0 !== m.mediaElement.renderer && null !== m.mediaElement.renderer ? m.mediaElement.renderer.getSrc() : null
            }
              , F = function(e) {
                var t = [];
                if ("string" == typeof e)
                    t.push({
                        src: e,
                        type: e ? (0,
                        u.getTypeFromFile)(e) : ""
                    });
                else if ("object" === (void 0 === e ? "undefined" : r(e)) && void 0 !== e.src) {
                    var n = (0,
                    u.absolutizeUrl)(e.src)
                      , o = e.type
                      , i = Object.assign(e, {
                        src: n,
                        type: "" !== o && null !== o && void 0 !== o || !n ? o : (0,
                        u.getTypeFromFile)(n)
                    });
                    t.push(i)
                } else if (Array.isArray(e))
                    for (var a = 0, s = e.length; a < s; a++) {
                        var l = (0,
                        u.absolutizeUrl)(e[a].src)
                          , f = e[a].type
                          , p = Object.assign(e[a], {
                            src: l,
                            type: "" !== f && null !== f && void 0 !== f || !l ? f : (0,
                            u.getTypeFromFile)(l)
                        });
                        t.push(p)
                    }
                var h = c.renderer.select(t, m.mediaElement.options.renderers.length ? m.mediaElement.options.renderers : [])
                  , v = void 0;
                if (m.mediaElement.paused || (m.mediaElement.pause(),
                v = (0,
                d.createEvent)("pause", m.mediaElement),
                m.mediaElement.dispatchEvent(v)),
                m.mediaElement.originalNode.src = t[0].src || "",
                null !== h || !t[0].src)
                    return t[0].src ? m.mediaElement.changeRenderer(h.rendererName, t) : null;
                m.mediaElement.generateError("No renderer found", t)
            }
              , j = function(e, t) {
                try {
                    if ("play" === e && "native_dash" === m.mediaElement.rendererName) {
                        var n = m.mediaElement.renderer[e](t);
                        n && "function" == typeof n.then && n.catch(function() {
                            m.mediaElement.paused && setTimeout(function() {
                                var e = m.mediaElement.renderer.play();
                                void 0 !== e && e.catch(function() {
                                    m.mediaElement.renderer.paused || m.mediaElement.renderer.pause()
                                })
                            }, 150)
                        })
                    } else
                        m.mediaElement.renderer[e](t)
                } catch (e) {
                    m.mediaElement.generateError(e, E)
                }
            };
            A(m.mediaElement, "src", L, F),
            m.mediaElement.getSrc = L,
            m.mediaElement.setSrc = F;
            for (var I = 0, M = _.length; I < M; I++)
                !function(e) {
                    if ("src" !== e) {
                        var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1)
                          , n = function() {
                            return void 0 !== m.mediaElement.renderer && null !== m.mediaElement.renderer && "function" == typeof m.mediaElement.renderer["get" + t] ? m.mediaElement.renderer["get" + t]() : null
                        }
                          , o = function(e) {
                            void 0 !== m.mediaElement.renderer && null !== m.mediaElement.renderer && "function" == typeof m.mediaElement.renderer["set" + t] && m.mediaElement.renderer["set" + t](e)
                        };
                        A(m.mediaElement, e, n, o),
                        m.mediaElement["get" + t] = n,
                        m.mediaElement["set" + t] = o
                    }
                }(_[I]);
            for (var O = 0, D = N.length; O < D; O++)
                !function(e) {
                    m.mediaElement[e] = function() {
                        for (var t = arguments.length, n = Array(t), o = 0; o < t; o++)
                            n[o] = arguments[o];
                        return void 0 !== m.mediaElement.renderer && null !== m.mediaElement.renderer && "function" == typeof m.mediaElement.renderer[e] && (m.mediaElement.promises.length ? Promise.all(m.mediaElement.promises).then(function() {
                            j(e, n)
                        }).catch(function(e) {
                            m.mediaElement.generateError(e, E)
                        }) : j(e, n)),
                        null
                    }
                }(N[O]);
            return m.mediaElement.addEventListener = function(e, t) {
                m.mediaElement.events[e] = m.mediaElement.events[e] || [],
                m.mediaElement.events[e].push(t)
            }
            ,
            m.mediaElement.removeEventListener = function(e, t) {
                if (!e)
                    return m.mediaElement.events = {},
                    !0;
                var n = m.mediaElement.events[e];
                if (!n)
                    return !0;
                if (!t)
                    return m.mediaElement.events[e] = [],
                    !0;
                for (var o = 0; o < n.length; o++)
                    if (n[o] === t)
                        return m.mediaElement.events[e].splice(o, 1),
                        !0;
                return !1
            }
            ,
            m.mediaElement.dispatchEvent = function(e) {
                var t = m.mediaElement.events[e.type];
                if (t)
                    for (var n = 0; n < t.length; n++)
                        t[n].apply(null, [e])
            }
            ,
            E.length && (m.mediaElement.src = E),
            m.mediaElement.promises.length ? Promise.all(m.mediaElement.promises).then(function() {
                m.mediaElement.options.success && m.mediaElement.options.success(m.mediaElement, m.mediaElement.originalNode)
            }).catch(function() {
                v && m.mediaElement.options.error && m.mediaElement.options.error(m.mediaElement, m.mediaElement.originalNode)
            }) : (m.mediaElement.options.success && m.mediaElement.options.success(m.mediaElement, m.mediaElement.originalNode),
            v && m.mediaElement.options.error && m.mediaElement.options.error(m.mediaElement, m.mediaElement.originalNode)),
            m.mediaElement
        };
        a.default.MediaElement = p,
        l.default.MediaElement = p,
        n.default = p
    }
    , {
        2: 2,
        25: 25,
        27: 27,
        28: 28,
        3: 3,
        7: 7,
        8: 8
    }],
    7: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e(3))
          , i = {};
        i.version = "4.2.6",
        i.html5media = {
            properties: ["volume", "src", "currentTime", "muted", "duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable", "currentSrc", "preload", "bufferedBytes", "bufferedTime", "initialTime", "startOffsetTime", "defaultPlaybackRate", "playbackRate", "played", "autoplay", "loop", "controls"],
            readOnlyProperties: ["duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable"],
            methods: ["load", "play", "pause", "canPlayType"],
            events: ["loadstart", "durationchange", "loadedmetadata", "loadeddata", "progress", "canplay", "canplaythrough", "suspend", "abort", "error", "emptied", "stalled", "play", "playing", "pause", "waiting", "seeking", "seeked", "timeupdate", "ended", "ratechange", "volumechange"],
            mediaTypes: ["audio/mp3", "audio/ogg", "audio/oga", "audio/wav", "audio/x-wav", "audio/wave", "audio/x-pn-wav", "audio/mpeg", "audio/mp4", "video/mp4", "video/webm", "video/ogg", "video/ogv"]
        },
        o.default.mejs = i,
        n.default = i
    }
    , {
        3: 3
    }],
    8: [function(e, t, n) {
        "use strict";
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.renderer = void 0;
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }()
          , a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e(7))
          , s = function() {
            function e() {
                o(this, e),
                this.renderers = {},
                this.order = []
            }
            return r(e, [{
                key: "add",
                value: function(e) {
                    if (void 0 === e.name)
                        throw new TypeError("renderer must contain at least `name` property");
                    this.renderers[e.name] = e,
                    this.order.push(e.name)
                }
            }, {
                key: "select",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                      , n = t.length;
                    if (t = t.length ? t : this.order,
                    !n) {
                        var o = [/^(html5|native)/i, /^flash/i, /iframe$/i]
                          , i = function(e) {
                            for (var t = 0, n = o.length; t < n; t++)
                                if (o[t].test(e))
                                    return t;
                            return o.length
                        };
                        t.sort(function(e, t) {
                            return i(e) - i(t)
                        })
                    }
                    for (var r = 0, a = t.length; r < a; r++) {
                        var s = t[r]
                          , l = this.renderers[s];
                        if (null !== l && void 0 !== l)
                            for (var d = 0, u = e.length; d < u; d++)
                                if ("function" == typeof l.canPlayType && "string" == typeof e[d].type && l.canPlayType(e[d].type))
                                    return {
                                        rendererName: l.name,
                                        src: e[d].src
                                    }
                    }
                    return null
                }
            }, {
                key: "order",
                set: function(e) {
                    if (!Array.isArray(e))
                        throw new TypeError("order must be an array of strings.");
                    this._order = e
                },
                get: function() {
                    return this._order
                }
            }, {
                key: "renderers",
                set: function(e) {
                    if (null !== e && "object" !== (void 0 === e ? "undefined" : i(e)))
                        throw new TypeError("renderers must be an array of objects.");
                    this._renderers = e
                },
                get: function() {
                    return this._renderers
                }
            }]),
            e
        }()
          , l = n.renderer = new s;
        a.default.Renderers = l
    }
    , {
        7: 7
    }],
    9: [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(3))
          , r = o(e(2))
          , a = o(e(5))
          , s = e(16)
          , l = o(s)
          , d = function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e,
            t
        }(e(25))
          , u = e(27)
          , c = e(26)
          , f = e(28);
        Object.assign(s.config, {
            usePluginFullScreen: !0,
            fullscreenText: null,
            useFakeFullscreen: !1
        }),
        Object.assign(l.default.prototype, {
            isFullScreen: !1,
            isNativeFullScreen: !1,
            isInIframe: !1,
            isPluginClickThroughCreated: !1,
            fullscreenMode: "",
            containerSizeTimeout: null,
            buildfullscreen: function(e) {
                if (e.isVideo) {
                    e.isInIframe = i.default.location !== i.default.parent.location,
                    e.detectFullscreenMode();
                    var t = this
                      , n = (0,
                    u.isString)(t.options.fullscreenText) ? t.options.fullscreenText : a.default.t("mejs.fullscreen")
                      , o = r.default.createElement("div");
                    if (o.className = t.options.classPrefix + "button " + t.options.classPrefix + "fullscreen-button",
                    o.innerHTML = '<button type="button" aria-controls="' + t.id + '" title="' + n + '" aria-label="' + n + '" tabindex="0"></button>',
                    t.addControlElement(o, "fullscreen"),
                    o.addEventListener("click", function() {
                        d.HAS_TRUE_NATIVE_FULLSCREEN && d.IS_FULLSCREEN || e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen()
                    }),
                    e.fullscreenBtn = o,
                    t.options.keyActions.push({
                        keys: [70],
                        action: function(e, t, n, o) {
                            o.ctrlKey || void 0 !== e.enterFullScreen && (e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen())
                        }
                    }),
                    t.exitFullscreenCallback = function(n) {
                        27 === (n.which || n.keyCode || 0) && (d.HAS_TRUE_NATIVE_FULLSCREEN && d.IS_FULLSCREEN || t.isFullScreen) && e.exitFullScreen()
                    }
                    ,
                    t.globalBind("keydown", t.exitFullscreenCallback),
                    t.normalHeight = 0,
                    t.normalWidth = 0,
                    d.HAS_TRUE_NATIVE_FULLSCREEN) {
                        e.globalBind(d.FULLSCREEN_EVENT_NAME, function() {
                            e.isFullScreen && (d.isFullScreen() ? (e.isNativeFullScreen = !0,
                            e.setControlsSize()) : (e.isNativeFullScreen = !1,
                            e.exitFullScreen()))
                        })
                    }
                }
            },
            cleanfullscreen: function(e) {
                e.exitFullScreen(),
                e.globalUnbind("keydown", e.exitFullscreenCallback)
            },
            detectFullscreenMode: function() {
                var e = this
                  , t = null !== e.media.rendererName && /(native|html5)/i.test(e.media.rendererName)
                  , n = "";
                return d.HAS_TRUE_NATIVE_FULLSCREEN && t ? n = "native-native" : d.HAS_TRUE_NATIVE_FULLSCREEN && !t ? n = "plugin-native" : e.usePluginFullScreen && d.SUPPORT_POINTER_EVENTS && (n = "plugin-click"),
                e.fullscreenMode = n,
                n
            },
            enterFullScreen: function() {
                var e = this
                  , t = null !== e.media.rendererName && /(html5|native)/i.test(e.media.rendererName)
                  , n = getComputedStyle(e.getElement(e.container));
                if (!1 === e.options.useFakeFullscreen && d.IS_IOS && d.HAS_IOS_FULLSCREEN && "function" == typeof e.media.originalNode.webkitEnterFullscreen && e.media.originalNode.canPlayType((0,
                f.getTypeFromFile)(e.media.getSrc())))
                    e.media.originalNode.webkitEnterFullscreen();
                else {
                    if ((0,
                    c.addClass)(r.default.documentElement, e.options.classPrefix + "fullscreen"),
                    (0,
                    c.addClass)(e.getElement(e.container), e.options.classPrefix + "container-fullscreen"),
                    e.normalHeight = parseFloat(n.height),
                    e.normalWidth = parseFloat(n.width),
                    "native-native" !== e.fullscreenMode && "plugin-native" !== e.fullscreenMode || (d.requestFullScreen(e.getElement(e.container)),
                    e.isInIframe && setTimeout(function t() {
                        if (e.isNativeFullScreen) {
                            var n = i.default.innerWidth || r.default.documentElement.clientWidth || r.default.body.clientWidth
                              , o = screen.width;
                            Math.abs(o - n) > .002 * o ? e.exitFullScreen() : setTimeout(t, 500)
                        }
                    }, 1e3)),
                    e.getElement(e.container).style.width = "100%",
                    e.getElement(e.container).style.height = "100%",
                    e.containerSizeTimeout = setTimeout(function() {
                        e.getElement(e.container).style.width = "100%",
                        e.getElement(e.container).style.height = "100%",
                        e.setControlsSize()
                    }, 500),
                    t)
                        e.node.style.width = "100%",
                        e.node.style.height = "100%";
                    else
                        for (var o = e.getElement(e.container).querySelectorAll("embed, object, video"), a = o.length, s = 0; s < a; s++)
                            o[s].style.width = "100%",
                            o[s].style.height = "100%";
                    e.options.setDimensions && "function" == typeof e.media.setSize && e.media.setSize(screen.width, screen.height);
                    for (var l = e.getElement(e.layers).children, p = l.length, m = 0; m < p; m++)
                        l[m].style.width = "100%",
                        l[m].style.height = "100%";
                    e.fullscreenBtn && ((0,
                    c.removeClass)(e.fullscreenBtn, e.options.classPrefix + "fullscreen"),
                    (0,
                    c.addClass)(e.fullscreenBtn, e.options.classPrefix + "unfullscreen")),
                    e.setControlsSize(),
                    e.isFullScreen = !0;
                    var h = Math.min(screen.width / e.width, screen.height / e.height)
                      , v = e.getElement(e.container).querySelector("." + e.options.classPrefix + "captions-text");
                    v && (v.style.fontSize = 100 * h + "%",
                    v.style.lineHeight = "normal",
                    e.getElement(e.container).querySelector("." + e.options.classPrefix + "captions-position").style.bottom = "45px");
                    var g = (0,
                    u.createEvent)("enteredfullscreen", e.getElement(e.container));
                    e.getElement(e.container).dispatchEvent(g)
                }
            },
            exitFullScreen: function() {
                var e = this
                  , t = null !== e.media.rendererName && /(native|html5)/i.test(e.media.rendererName);
                if (clearTimeout(e.containerSizeTimeout),
                d.HAS_TRUE_NATIVE_FULLSCREEN && (d.IS_FULLSCREEN || e.isFullScreen) && d.cancelFullScreen(),
                (0,
                c.removeClass)(r.default.documentElement, e.options.classPrefix + "fullscreen"),
                (0,
                c.removeClass)(e.getElement(e.container), e.options.classPrefix + "container-fullscreen"),
                e.options.setDimensions) {
                    if (e.getElement(e.container).style.width = e.normalWidth + "px",
                    e.getElement(e.container).style.height = e.normalHeight + "px",
                    t)
                        e.node.style.width = e.normalWidth + "px",
                        e.node.style.height = e.normalHeight + "px";
                    else
                        for (var n = e.getElement(e.container).querySelectorAll("embed, object, video"), o = n.length, i = 0; i < o; i++)
                            n[i].style.width = e.normalWidth + "px",
                            n[i].style.height = e.normalHeight + "px";
                    "function" == typeof e.media.setSize && e.media.setSize(e.normalWidth, e.normalHeight);
                    for (var a = e.getElement(e.layers).children, s = a.length, l = 0; l < s; l++)
                        a[l].style.width = e.normalWidth + "px",
                        a[l].style.height = e.normalHeight + "px"
                }
                e.fullscreenBtn && ((0,
                c.removeClass)(e.fullscreenBtn, e.options.classPrefix + "unfullscreen"),
                (0,
                c.addClass)(e.fullscreenBtn, e.options.classPrefix + "fullscreen")),
                e.setControlsSize(),
                e.isFullScreen = !1;
                var f = e.getElement(e.container).querySelector("." + e.options.classPrefix + "captions-text");
                f && (f.style.fontSize = "",
                f.style.lineHeight = "",
                e.getElement(e.container).querySelector("." + e.options.classPrefix + "captions-position").style.bottom = "");
                var p = (0,
                u.createEvent)("exitedfullscreen", e.getElement(e.container));
                e.getElement(e.container).dispatchEvent(p)
            }
        })
    }
    , {
        16: 16,
        2: 2,
        25: 25,
        26: 26,
        27: 27,
        28: 28,
        3: 3,
        5: 5
    }],
    10: [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(2))
          , r = e(16)
          , a = o(r)
          , s = o(e(5))
          , l = e(27)
          , d = e(26);
        Object.assign(r.config, {
            playText: null,
            pauseText: null
        }),
        Object.assign(a.default.prototype, {
            buildplaypause: function(e, t, n, o) {
                function r(e) {
                    "play" === e ? ((0,
                    d.removeClass)(p, a.options.classPrefix + "play"),
                    (0,
                    d.removeClass)(p, a.options.classPrefix + "replay"),
                    (0,
                    d.addClass)(p, a.options.classPrefix + "pause"),
                    m.setAttribute("title", f),
                    m.setAttribute("aria-label", f)) : ((0,
                    d.removeClass)(p, a.options.classPrefix + "pause"),
                    (0,
                    d.removeClass)(p, a.options.classPrefix + "replay"),
                    (0,
                    d.addClass)(p, a.options.classPrefix + "play"),
                    m.setAttribute("title", c),
                    m.setAttribute("aria-label", c))
                }
                var a = this
                  , u = a.options
                  , c = (0,
                l.isString)(u.playText) ? u.playText : s.default.t("mejs.play")
                  , f = (0,
                l.isString)(u.pauseText) ? u.pauseText : s.default.t("mejs.pause")
                  , p = i.default.createElement("div");
                p.className = a.options.classPrefix + "button " + a.options.classPrefix + "playpause-button " + a.options.classPrefix + "play",
                p.innerHTML = '<button type="button" aria-controls="' + a.id + '" title="' + c + '" aria-label="' + f + '" tabindex="0"></button>',
                p.addEventListener("click", function() {
                    a.paused ? a.play() : a.pause()
                });
                var m = p.querySelector("button");
                a.addControlElement(p, "playpause"),
                r("pse"),
                o.addEventListener("loadedmetadata", function() {
                    -1 === o.rendererName.indexOf("flash") && r("pse")
                }),
                o.addEventListener("play", function() {
                    r("play")
                }),
                o.addEventListener("playing", function() {
                    r("play")
                }),
                o.addEventListener("pause", function() {
                    r("pse")
                }),
                o.addEventListener("ended", function() {
                    e.options.loop || ((0,
                    d.removeClass)(p, a.options.classPrefix + "pause"),
                    (0,
                    d.removeClass)(p, a.options.classPrefix + "play"),
                    (0,
                    d.addClass)(p, a.options.classPrefix + "replay"),
                    m.setAttribute("title", c),
                    m.setAttribute("aria-label", c))
                })
            }
        })
    }
    , {
        16: 16,
        2: 2,
        26: 26,
        27: 27,
        5: 5
    }],
    11: [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(2))
          , r = e(16)
          , a = o(r)
          , s = o(e(5))
          , l = e(25)
          , d = e(30)
          , u = e(26);
        Object.assign(r.config, {
            enableProgressTooltip: !0,
            useSmoothHover: !0,
            forceLive: !1
        }),
        Object.assign(a.default.prototype, {
            buildprogress: function(e, t, n, o) {
                var a = 0
                  , c = !1
                  , f = !1
                  , p = this
                  , m = e.options.autoRewind
                  , h = e.options.enableProgressTooltip ? '<span class="' + p.options.classPrefix + 'time-float"><span class="' + p.options.classPrefix + 'time-float-current">00:00</span><span class="' + p.options.classPrefix + 'time-float-corner"></span></span>' : ""
                  , v = i.default.createElement("div");
                v.className = p.options.classPrefix + "time-rail",
                v.innerHTML = '<span class="' + p.options.classPrefix + "time-total " + p.options.classPrefix + 'time-slider"><span class="' + p.options.classPrefix + 'time-buffering"></span><span class="' + p.options.classPrefix + 'time-loaded"></span><span class="' + p.options.classPrefix + 'time-current"></span><span class="' + p.options.classPrefix + 'time-hovered no-hover"></span><span class="' + p.options.classPrefix + 'time-handle"><span class="' + p.options.classPrefix + 'time-handle-content"></span></span>' + h + "</span>",
                p.addControlElement(v, "progress"),
                p.options.keyActions.push({
                    keys: [37, 227],
                    action: function(e) {
                        if (!isNaN(e.duration) && e.duration > 0) {
                            e.isVideo && (e.showControls(),
                            e.startControlsTimer()),
                            e.getElement(e.container).querySelector("." + r.config.classPrefix + "time-total").focus();
                            var t = Math.max(e.currentTime - e.options.defaultSeekBackwardInterval(e), 0);
                            e.setCurrentTime(t)
                        }
                    }
                }, {
                    keys: [39, 228],
                    action: function(e) {
                        if (!isNaN(e.duration) && e.duration > 0) {
                            e.isVideo && (e.showControls(),
                            e.startControlsTimer()),
                            e.getElement(e.container).querySelector("." + r.config.classPrefix + "time-total").focus();
                            var t = Math.min(e.currentTime + e.options.defaultSeekForwardInterval(e), e.duration);
                            e.setCurrentTime(t)
                        }
                    }
                }),
                p.rail = t.querySelector("." + p.options.classPrefix + "time-rail"),
                p.total = t.querySelector("." + p.options.classPrefix + "time-total"),
                p.loaded = t.querySelector("." + p.options.classPrefix + "time-loaded"),
                p.current = t.querySelector("." + p.options.classPrefix + "time-current"),
                p.handle = t.querySelector("." + p.options.classPrefix + "time-handle"),
                p.timefloat = t.querySelector("." + p.options.classPrefix + "time-float"),
                p.timefloatcurrent = t.querySelector("." + p.options.classPrefix + "time-float-current"),
                p.slider = t.querySelector("." + p.options.classPrefix + "time-slider"),
                p.hovered = t.querySelector("." + p.options.classPrefix + "time-hovered"),
                p.buffer = t.querySelector("." + p.options.classPrefix + "time-buffering"),
                p.newTime = 0,
                p.forcedHandlePause = !1,
                p.setTransformStyle = function(e, t) {
                    e.style.transform = t,
                    e.style.webkitTransform = t,
                    e.style.MozTransform = t,
                    e.style.msTransform = t,
                    e.style.OTransform = t
                }
                ,
                p.buffer.style.display = "none";
                var g = function(t) {
                    var n = getComputedStyle(p.total)
                      , o = (0,
                    u.offset)(p.total)
                      , i = p.total.offsetWidth
                      , r = void 0 !== n.webkitTransform ? "webkitTransform" : void 0 !== n.mozTransform ? "mozTransform " : void 0 !== n.oTransform ? "oTransform" : void 0 !== n.msTransform ? "msTransform" : "transform"
                      , a = "WebKitCSSMatrix"in window ? "WebKitCSSMatrix" : "MSCSSMatrix"in window ? "MSCSSMatrix" : "CSSMatrix"in window ? "CSSMatrix" : void 0
                      , s = 0
                      , f = 0
                      , m = 0
                      , h = void 0;
                    if (h = t.originalEvent && t.originalEvent.changedTouches ? t.originalEvent.changedTouches[0].pageX : t.changedTouches ? t.changedTouches[0].pageX : t.pageX,
                    p.getDuration()) {
                        if (h < o.left ? h = o.left : h > i + o.left && (h = i + o.left),
                        m = h - o.left,
                        s = m / i,
                        p.newTime = s <= .02 ? 0 : s * p.getDuration(),
                        c && null !== p.getCurrentTime() && p.newTime.toFixed(4) !== p.getCurrentTime().toFixed(4) && (p.setCurrentRailHandle(p.newTime),
                        p.updateCurrent(p.newTime)),
                        !l.IS_IOS && !l.IS_ANDROID) {
                            if (m < 0 && (m = 0),
                            p.options.useSmoothHover && null !== a && void 0 !== window[a]) {
                                var v = new window[a](getComputedStyle(p.handle)[r]).m41
                                  , g = m / parseFloat(getComputedStyle(p.total).width) - v / parseFloat(getComputedStyle(p.total).width);
                                p.hovered.style.left = v + "px",
                                p.setTransformStyle(p.hovered, "scaleX(" + g + ")"),
                                p.hovered.setAttribute("pos", m),
                                g >= 0 ? (0,
                                u.removeClass)(p.hovered, "negative") : (0,
                                u.addClass)(p.hovered, "negative")
                            }
                            if (p.timefloat) {
                                var y = p.timefloat.offsetWidth / 2
                                  , E = mejs.Utils.offset(p.getElement(p.container))
                                  , b = getComputedStyle(p.timefloat);
                                f = h - E.left < p.timefloat.offsetWidth ? y : h - E.left >= p.getElement(p.container).offsetWidth - y ? p.total.offsetWidth - y : m,
                                (0,
                                u.hasClass)(p.getElement(p.container), p.options.classPrefix + "long-video") && (f += parseFloat(b.marginLeft) / 2 + p.timefloat.offsetWidth / 2),
                                p.timefloat.style.left = f + "px",
                                p.timefloatcurrent.innerHTML = (0,
                                d.secondsToTimeCode)(p.newTime, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength, e.options.timeFormat),
                                p.timefloat.style.display = "block"
                            }
                        }
                    } else
                        l.IS_IOS || l.IS_ANDROID || !p.timefloat || (f = p.timefloat.offsetWidth + i >= p.getElement(p.container).offsetWidth ? p.timefloat.offsetWidth / 2 : 0,
                        p.timefloat.style.left = f + "px",
                        p.timefloat.style.left = f + "px",
                        p.timefloat.style.display = "block")
                }
                  , y = function() {
                    var t = p.getCurrentTime()
                      , n = s.default.t("mejs.time-slider")
                      , i = (0,
                    d.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength, e.options.timeFormat)
                      , r = p.getDuration();
                    p.slider.setAttribute("role", "slider"),
                    p.slider.tabIndex = 0,
                    o.paused ? (p.slider.setAttribute("aria-label", n),
                    p.slider.setAttribute("aria-valuemin", 0),
                    p.slider.setAttribute("aria-valuemax", r),
                    p.slider.setAttribute("aria-valuenow", t),
                    p.slider.setAttribute("aria-valuetext", i)) : (p.slider.removeAttribute("aria-label"),
                    p.slider.removeAttribute("aria-valuemin"),
                    p.slider.removeAttribute("aria-valuemax"),
                    p.slider.removeAttribute("aria-valuenow"),
                    p.slider.removeAttribute("aria-valuetext"))
                }
                  , E = function() {
                    new Date - a >= 1e3 && p.play()
                }
                  , b = function() {
                    c && null !== p.getCurrentTime() && p.newTime.toFixed(4) !== p.getCurrentTime().toFixed(4) && (p.setCurrentTime(p.newTime),
                    p.setCurrentRail(),
                    p.updateCurrent(p.newTime)),
                    p.forcedHandlePause && (p.slider.focus(),
                    p.play()),
                    p.forcedHandlePause = !1
                };
                p.slider.addEventListener("focus", function() {
                    e.options.autoRewind = !1
                }),
                p.slider.addEventListener("blur", function() {
                    e.options.autoRewind = m
                }),
                p.slider.addEventListener("keydown", function(t) {
                    if (new Date - a >= 1e3 && (f = p.paused),
                    p.options.keyActions.length) {
                        var n = t.which || t.keyCode || 0
                          , i = p.getDuration()
                          , r = e.options.defaultSeekForwardInterval(o)
                          , s = e.options.defaultSeekBackwardInterval(o)
                          , d = p.getCurrentTime()
                          , u = p.getElement(p.container).querySelector("." + p.options.classPrefix + "volume-slider");
                        if (38 === n || 40 === n) {
                            u && (u.style.display = "block"),
                            p.isVideo && (p.showControls(),
                            p.startControlsTimer());
                            var c = 38 === n ? Math.min(p.volume + .1, 1) : Math.max(p.volume - .1, 0)
                              , m = c <= 0;
                            return p.setVolume(c),
                            void p.setMuted(m)
                        }
                        switch (u && (u.style.display = "none"),
                        n) {
                        case 37:
                            p.getDuration() !== 1 / 0 && (d -= s);
                            break;
                        case 39:
                            p.getDuration() !== 1 / 0 && (d += r);
                            break;
                        case 36:
                            d = 0;
                            break;
                        case 35:
                            d = i;
                            break;
                        case 13:
                        case 32:
                            return void (l.IS_FIREFOX && (p.paused ? p.play() : p.pause()));
                        default:
                            return
                        }
                        d = d < 0 ? 0 : d >= i ? i : Math.floor(d),
                        a = new Date,
                        f || e.pause(),
                        d < p.getDuration() && !f && setTimeout(E, 1100),
                        p.setCurrentTime(d),
                        e.showControls(),
                        t.preventDefault(),
                        t.stopPropagation()
                    }
                });
                var S = ["mousedown", "touchstart"];
                p.slider.addEventListener("dragstart", function() {
                    return !1
                });
                for (var x = 0, w = S.length; x < w; x++)
                    p.slider.addEventListener(S[x], function(e) {
                        if (p.forcedHandlePause = !1,
                        p.getDuration() !== 1 / 0 && (1 === e.which || 0 === e.which)) {
                            p.paused || (p.pause(),
                            p.forcedHandlePause = !0),
                            c = !0,
                            g(e);
                            for (var t = ["mouseup", "touchend"], n = 0, o = t.length; n < o; n++)
                                p.getElement(p.container).addEventListener(t[n], function(e) {
                                    var t = e.target;
                                    (t === p.slider || t.closest("." + p.options.classPrefix + "time-slider")) && g(e)
                                });
                            p.globalBind("mouseup.dur touchend.dur", function() {
                                b(),
                                c = !1,
                                p.timefloat && (p.timefloat.style.display = "none")
                            })
                        }
                    }, !(!l.SUPPORT_PASSIVE_EVENT || "touchstart" !== S[x]) && {
                        passive: !0
                    });
                p.slider.addEventListener("mouseenter", function(e) {
                    e.target === p.slider && p.getDuration() !== 1 / 0 && (p.getElement(p.container).addEventListener("mousemove", function(e) {
                        var t = e.target;
                        (t === p.slider || t.closest("." + p.options.classPrefix + "time-slider")) && g(e)
                    }),
                    !p.timefloat || l.IS_IOS || l.IS_ANDROID || (p.timefloat.style.display = "block"),
                    p.hovered && !l.IS_IOS && !l.IS_ANDROID && p.options.useSmoothHover && (0,
                    u.removeClass)(p.hovered, "no-hover"))
                }),
                p.slider.addEventListener("mouseleave", function() {
                    p.getDuration() !== 1 / 0 && (c || (p.timefloat && (p.timefloat.style.display = "none"),
                    p.hovered && p.options.useSmoothHover && (0,
                    u.addClass)(p.hovered, "no-hover")))
                }),
                p.broadcastCallback = function(n) {
                    var o = t.querySelector("." + p.options.classPrefix + "broadcast");
                    if (p.options.forceLive || p.getDuration() === 1 / 0) {
                        if (!o || p.options.forceLive) {
                            var r = i.default.createElement("span");
                            r.className = p.options.classPrefix + "broadcast",
                            r.innerText = s.default.t("mejs.live-broadcast"),
                            p.slider.style.display = "none",
                            p.rail.appendChild(r)
                        }
                    } else
                        o && (p.slider.style.display = "",
                        o.remove()),
                        e.setProgressRail(n),
                        p.forcedHandlePause || e.setCurrentRail(n),
                        y()
                }
                ,
                o.addEventListener("progress", p.broadcastCallback),
                o.addEventListener("timeupdate", p.broadcastCallback),
                o.addEventListener("play", function() {
                    p.buffer.style.display = "none"
                }),
                o.addEventListener("playing", function() {
                    p.buffer.style.display = "none"
                }),
                o.addEventListener("seeking", function() {
                    p.buffer.style.display = ""
                }),
                o.addEventListener("seeked", function() {
                    p.buffer.style.display = "none"
                }),
                o.addEventListener("pause", function() {
                    p.buffer.style.display = "none"
                }),
                o.addEventListener("waiting", function() {
                    p.buffer.style.display = ""
                }),
                o.addEventListener("loadeddata", function() {
                    p.buffer.style.display = ""
                }),
                o.addEventListener("canplay", function() {
                    p.buffer.style.display = "none"
                }),
                o.addEventListener("error", function() {
                    p.buffer.style.display = "none"
                }),
                p.getElement(p.container).addEventListener("controlsresize", function(t) {
                    p.getDuration() !== 1 / 0 && (e.setProgressRail(t),
                    p.forcedHandlePause || e.setCurrentRail(t))
                })
            },
            cleanprogress: function(e, t, n, o) {
                o.removeEventListener("progress", e.broadcastCallback),
                o.removeEventListener("timeupdate", e.broadcastCallback),
                e.rail && e.rail.remove()
            },
            setProgressRail: function(e) {
                var t = this
                  , n = void 0 !== e ? e.detail.target || e.target : t.media
                  , o = null;
                n && n.buffered && n.buffered.length > 0 && n.buffered.end && t.getDuration() ? o = n.buffered.end(n.buffered.length - 1) / t.getDuration() : n && void 0 !== n.bytesTotal && n.bytesTotal > 0 && void 0 !== n.bufferedBytes ? o = n.bufferedBytes / n.bytesTotal : e && e.lengthComputable && 0 !== e.total && (o = e.loaded / e.total),
                null !== o && (o = Math.min(1, Math.max(0, o)),
                t.loaded && t.setTransformStyle(t.loaded, "scaleX(" + o + ")"))
            },
            setCurrentRailHandle: function(e) {
                var t = this;
                t.setCurrentRailMain(t, e)
            },
            setCurrentRail: function() {
                var e = this;
                e.setCurrentRailMain(e)
            },
            setCurrentRailMain: function(e, t) {
                if (void 0 !== e.getCurrentTime() && e.getDuration()) {
                    var n = void 0 === t ? e.getCurrentTime() : t;
                    if (e.total && e.handle) {
                        var o = parseFloat(getComputedStyle(e.total).width)
                          , i = Math.round(o * n / e.getDuration())
                          , r = i - Math.round(e.handle.offsetWidth / 2);
                        if (r = r < 0 ? 0 : r,
                        e.setTransformStyle(e.current, "scaleX(" + i / o + ")"),
                        e.setTransformStyle(e.handle, "translateX(" + r + "px)"),
                        e.options.useSmoothHover && !(0,
                        u.hasClass)(e.hovered, "no-hover")) {
                            var a = parseInt(e.hovered.getAttribute("pos"), 10)
                              , s = (a = isNaN(a) ? 0 : a) / o - r / o;
                            e.hovered.style.left = r + "px",
                            e.setTransformStyle(e.hovered, "scaleX(" + s + ")"),
                            s >= 0 ? (0,
                            u.removeClass)(e.hovered, "negative") : (0,
                            u.addClass)(e.hovered, "negative")
                        }
                    }
                }
            }
        })
    }
    , {
        16: 16,
        2: 2,
        25: 25,
        26: 26,
        30: 30,
        5: 5
    }],
    12: [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(2))
          , r = e(16)
          , a = o(r)
          , s = e(30)
          , l = e(26);
        Object.assign(r.config, {
            duration: 0,
            timeAndDurationSeparator: "<span> | </span>"
        }),
        Object.assign(a.default.prototype, {
            buildcurrent: function(e, t, n, o) {
                var r = this
                  , a = i.default.createElement("div");
                a.className = r.options.classPrefix + "time",
                a.setAttribute("role", "timer"),
                a.setAttribute("aria-live", "off"),
                a.innerHTML = '<span class="' + r.options.classPrefix + 'currenttime">' + (0,
                s.secondsToTimeCode)(0, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength, e.options.timeFormat) + "</span>",
                r.addControlElement(a, "current"),
                e.updateCurrent(),
                r.updateTimeCallback = function() {
                    r.controlsAreVisible && e.updateCurrent()
                }
                ,
                o.addEventListener("timeupdate", r.updateTimeCallback)
            },
            cleancurrent: function(e, t, n, o) {
                o.removeEventListener("timeupdate", e.updateTimeCallback)
            },
            buildduration: function(e, t, n, o) {
                var r = this;
                if (t.lastChild.querySelector("." + r.options.classPrefix + "currenttime"))
                    t.querySelector("." + r.options.classPrefix + "time").innerHTML += r.options.timeAndDurationSeparator + '<span class="' + r.options.classPrefix + 'duration">' + (0,
                    s.secondsToTimeCode)(r.options.duration, r.options.alwaysShowHours, r.options.showTimecodeFrameCount, r.options.framesPerSecond, r.options.secondsDecimalLength, r.options.timeFormat) + "</span>";
                else {
                    t.querySelector("." + r.options.classPrefix + "currenttime") && (0,
                    l.addClass)(t.querySelector("." + r.options.classPrefix + "currenttime").parentNode, r.options.classPrefix + "currenttime-container");
                    var a = i.default.createElement("div");
                    a.className = r.options.classPrefix + "time " + r.options.classPrefix + "duration-container",
                    a.innerHTML = '<span class="' + r.options.classPrefix + 'duration">' + (0,
                    s.secondsToTimeCode)(r.options.duration, r.options.alwaysShowHours, r.options.showTimecodeFrameCount, r.options.framesPerSecond, r.options.secondsDecimalLength, r.options.timeFormat) + "</span>",
                    r.addControlElement(a, "duration")
                }
                r.updateDurationCallback = function() {
                    r.controlsAreVisible && e.updateDuration()
                }
                ,
                o.addEventListener("timeupdate", r.updateDurationCallback)
            },
            cleanduration: function(e, t, n, o) {
                o.removeEventListener("timeupdate", e.updateDurationCallback)
            },
            updateCurrent: function() {
                var e = this
                  , t = e.getCurrentTime();
                isNaN(t) && (t = 0);
                var n = (0,
                s.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength, e.options.timeFormat);
                n.length > 5 ? (0,
                l.addClass)(e.getElement(e.container), e.options.classPrefix + "long-video") : (0,
                l.removeClass)(e.getElement(e.container), e.options.classPrefix + "long-video"),
                e.getElement(e.controls).querySelector("." + e.options.classPrefix + "currenttime") && (e.getElement(e.controls).querySelector("." + e.options.classPrefix + "currenttime").innerText = n)
            },
            updateDuration: function() {
                var e = this
                  , t = e.getDuration();
                (isNaN(t) || t === 1 / 0 || t < 0) && (e.media.duration = e.options.duration = t = 0),
                e.options.duration > 0 && (t = e.options.duration);
                var n = (0,
                s.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength, e.options.timeFormat);
                n.length > 5 ? (0,
                l.addClass)(e.getElement(e.container), e.options.classPrefix + "long-video") : (0,
                l.removeClass)(e.getElement(e.container), e.options.classPrefix + "long-video"),
                e.getElement(e.controls).querySelector("." + e.options.classPrefix + "duration") && t > 0 && (e.getElement(e.controls).querySelector("." + e.options.classPrefix + "duration").innerHTML = n)
            }
        })
    }
    , {
        16: 16,
        2: 2,
        26: 26,
        30: 30
    }],
    13: [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(2))
          , r = o(e(7))
          , a = o(e(5))
          , s = e(16)
          , l = o(s)
          , d = e(30)
          , u = e(27)
          , c = e(26);
        Object.assign(s.config, {
            startLanguage: "",
            tracksText: null,
            chaptersText: null,
            tracksAriaLive: !1,
            hideCaptionsButtonWhenEmpty: !0,
            toggleCaptionsButtonWhenOnlyOne: !1,
            slidesSelector: ""
        }),
        Object.assign(l.default.prototype, {
            hasChapters: !1,
            buildtracks: function(e, t, n, o) {
                if (this.findTracks(),
                e.tracks.length || e.trackFiles && 0 !== !e.trackFiles.length) {
                    var r = this
                      , s = r.options.tracksAriaLive ? ' role="log" aria-live="assertive" aria-atomic="false"' : ""
                      , l = (0,
                    u.isString)(r.options.tracksText) ? r.options.tracksText : a.default.t("mejs.captions-subtitles")
                      , d = (0,
                    u.isString)(r.options.chaptersText) ? r.options.chaptersText : a.default.t("mejs.captions-chapters")
                      , f = null === e.trackFiles ? e.tracks.length : e.trackFiles.length;
                    if (r.domNode.textTracks)
                        for (var p = r.domNode.textTracks.length - 1; p >= 0; p--)
                            r.domNode.textTracks[p].mode = "hidden";
                    r.cleartracks(e),
                    e.captions = i.default.createElement("div"),
                    e.captions.className = r.options.classPrefix + "captions-layer " + r.options.classPrefix + "layer",
                    e.captions.innerHTML = '<div class="' + r.options.classPrefix + "captions-position " + r.options.classPrefix + 'captions-position-hover"' + s + '><span class="' + r.options.classPrefix + 'captions-text"></span></div>',
                    e.captions.style.display = "none",
                    n.insertBefore(e.captions, n.firstChild),
                    e.captionsText = e.captions.querySelector("." + r.options.classPrefix + "captions-text"),
                    e.captionsButton = i.default.createElement("div"),
                    e.captionsButton.className = r.options.classPrefix + "button " + r.options.classPrefix + "captions-button",
                    e.captionsButton.innerHTML = '<button type="button" aria-controls="' + r.id + '" title="' + l + '" aria-label="' + l + '" tabindex="0"></button><div class="' + r.options.classPrefix + "captions-selector " + r.options.classPrefix + 'offscreen"><ul class="' + r.options.classPrefix + 'captions-selector-list"><li class="' + r.options.classPrefix + 'captions-selector-list-item"><input type="radio" class="' + r.options.classPrefix + 'captions-selector-input" name="' + e.id + '_captions" id="' + e.id + '_captions_none" value="none" checked disabled><label class="' + r.options.classPrefix + "captions-selector-label " + r.options.classPrefix + 'captions-selected" for="' + e.id + '_captions_none">' + a.default.t("mejs.none") + "</label></li></ul></div>",
                    r.addControlElement(e.captionsButton, "tracks"),
                    e.captionsButton.querySelector("." + r.options.classPrefix + "captions-selector-input").disabled = !1,
                    e.chaptersButton = i.default.createElement("div"),
                    e.chaptersButton.className = r.options.classPrefix + "button " + r.options.classPrefix + "chapters-button",
                    e.chaptersButton.innerHTML = '<button type="button" aria-controls="' + r.id + '" title="' + d + '" aria-label="' + d + '" tabindex="0"></button><div class="' + r.options.classPrefix + "chapters-selector " + r.options.classPrefix + 'offscreen"><ul class="' + r.options.classPrefix + 'chapters-selector-list"></ul></div>';
                    for (var m = 0, h = 0; h < f; h++) {
                        var v = e.tracks[h].kind;
                        e.tracks[h].src.trim() && ("subtitles" === v || "captions" === v ? m++ : "chapters" !== v || t.querySelector("." + r.options.classPrefix + "chapter-selector") || e.captionsButton.parentNode.insertBefore(e.chaptersButton, e.captionsButton))
                    }
                    e.trackToLoad = -1,
                    e.selectedTrack = null,
                    e.isLoadingTrack = !1;
                    for (var g = 0; g < f; g++) {
                        var y = e.tracks[g].kind;
                        !e.tracks[g].src.trim() || "subtitles" !== y && "captions" !== y || e.addTrackButton(e.tracks[g].trackId, e.tracks[g].srclang, e.tracks[g].label)
                    }
                    e.loadNextTrack();
                    var E = ["mouseenter", "focusin"]
                      , b = ["mouseleave", "focusout"];
                    if (r.options.toggleCaptionsButtonWhenOnlyOne && 1 === m)
                        e.captionsButton.addEventListener("click", function(t) {
                            var n = "none";
                            null === e.selectedTrack && (n = e.tracks[0].trackId);
                            var o = t.keyCode || t.which;
                            e.setTrack(n, void 0 !== o)
                        });
                    else {
                        for (var S = e.captionsButton.querySelectorAll("." + r.options.classPrefix + "captions-selector-label"), x = e.captionsButton.querySelectorAll("input[type=radio]"), w = 0, P = E.length; w < P; w++)
                            e.captionsButton.addEventListener(E[w], function() {
                                (0,
                                c.removeClass)(this.querySelector("." + r.options.classPrefix + "captions-selector"), r.options.classPrefix + "offscreen")
                            });
                        for (var T = 0, C = b.length; T < C; T++)
                            e.captionsButton.addEventListener(b[T], function() {
                                (0,
                                c.addClass)(this.querySelector("." + r.options.classPrefix + "captions-selector"), r.options.classPrefix + "offscreen")
                            });
                        for (var k = 0, _ = x.length; k < _; k++)
                            x[k].addEventListener("click", function(t) {
                                var n = t.keyCode || t.which;
                                e.setTrack(this.value, void 0 !== n)
                            });
                        for (var N = 0, A = S.length; N < A; N++)
                            S[N].addEventListener("click", function(e) {
                                var t = (0,
                                c.siblings)(this, function(e) {
                                    return "INPUT" === e.tagName
                                })[0]
                                  , n = (0,
                                u.createEvent)("click", t);
                                t.dispatchEvent(n),
                                e.preventDefault()
                            });
                        e.captionsButton.addEventListener("keydown", function(e) {
                            e.stopPropagation()
                        })
                    }
                    for (var L = 0, F = E.length; L < F; L++)
                        e.chaptersButton.addEventListener(E[L], function() {
                            this.querySelector("." + r.options.classPrefix + "chapters-selector-list").children.length && (0,
                            c.removeClass)(this.querySelector("." + r.options.classPrefix + "chapters-selector"), r.options.classPrefix + "offscreen")
                        });
                    for (var j = 0, I = b.length; j < I; j++)
                        e.chaptersButton.addEventListener(b[j], function() {
                            (0,
                            c.addClass)(this.querySelector("." + r.options.classPrefix + "chapters-selector"), r.options.classPrefix + "offscreen")
                        });
                    e.chaptersButton.addEventListener("keydown", function(e) {
                        e.stopPropagation()
                    }),
                    e.options.alwaysShowControls ? (0,
                    c.addClass)(e.getElement(e.container).querySelector("." + r.options.classPrefix + "captions-position"), r.options.classPrefix + "captions-position-hover") : (e.getElement(e.container).addEventListener("controlsshown", function() {
                        (0,
                        c.addClass)(e.getElement(e.container).querySelector("." + r.options.classPrefix + "captions-position"), r.options.classPrefix + "captions-position-hover")
                    }),
                    e.getElement(e.container).addEventListener("controlshidden", function() {
                        o.paused || (0,
                        c.removeClass)(e.getElement(e.container).querySelector("." + r.options.classPrefix + "captions-position"), r.options.classPrefix + "captions-position-hover")
                    })),
                    o.addEventListener("timeupdate", function() {
                        e.displayCaptions()
                    }),
                    "" !== e.options.slidesSelector && (e.slidesContainer = i.default.querySelectorAll(e.options.slidesSelector),
                    o.addEventListener("timeupdate", function() {
                        e.displaySlides()
                    }))
                }
            },
            cleartracks: function(e) {
                e && (e.captions && e.captions.remove(),
                e.chapters && e.chapters.remove(),
                e.captionsText && e.captionsText.remove(),
                e.captionsButton && e.captionsButton.remove(),
                e.chaptersButton && e.chaptersButton.remove())
            },
            rebuildtracks: function() {
                var e = this;
                e.findTracks(),
                e.buildtracks(e, e.getElement(e.controls), e.getElement(e.layers), e.media)
            },
            findTracks: function() {
                var e = this
                  , t = null === e.trackFiles ? e.node.querySelectorAll("track") : e.trackFiles
                  , n = t.length;
                e.tracks = [];
                for (var o = 0; o < n; o++) {
                    var i = t[o]
                      , r = i.getAttribute("srclang").toLowerCase() || ""
                      , a = e.id + "_track_" + o + "_" + i.getAttribute("kind") + "_" + r;
                    e.tracks.push({
                        trackId: a,
                        srclang: r,
                        src: i.getAttribute("src"),
                        kind: i.getAttribute("kind"),
                        label: i.getAttribute("label") || "",
                        entries: [],
                        isLoaded: !1
                    })
                }
            },
            setTrack: function(e, t) {
                for (var n = this, o = n.captionsButton.querySelectorAll('input[type="radio"]'), i = n.captionsButton.querySelectorAll("." + n.options.classPrefix + "captions-selected"), r = n.captionsButton.querySelector('input[value="' + e + '"]'), a = 0, s = o.length; a < s; a++)
                    o[a].checked = !1;
                for (var l = 0, d = i.length; l < d; l++)
                    (0,
                    c.removeClass)(i[l], n.options.classPrefix + "captions-selected");
                r.checked = !0;
                for (var f = (0,
                c.siblings)(r, function(e) {
                    return (0,
                    c.hasClass)(e, n.options.classPrefix + "captions-selector-label")
                }), p = 0, m = f.length; p < m; p++)
                    (0,
                    c.addClass)(f[p], n.options.classPrefix + "captions-selected");
                if ("none" === e)
                    n.selectedTrack = null,
                    (0,
                    c.removeClass)(n.captionsButton, n.options.classPrefix + "captions-enabled");
                else
                    for (var h = 0, v = n.tracks.length; h < v; h++) {
                        var g = n.tracks[h];
                        if (g.trackId === e) {
                            null === n.selectedTrack && (0,
                            c.addClass)(n.captionsButton, n.options.classPrefix + "captions-enabled"),
                            n.selectedTrack = g,
                            n.captions.setAttribute("lang", n.selectedTrack.srclang),
                            n.displayCaptions();
                            break
                        }
                    }
                var y = (0,
                u.createEvent)("captionschange", n.media);
                y.detail.caption = n.selectedTrack,
                n.media.dispatchEvent(y),
                t || setTimeout(function() {
                    n.getElement(n.container).focus()
                }, 500)
            },
            loadNextTrack: function() {
                var e = this;
                e.trackToLoad++,
                e.trackToLoad < e.tracks.length ? (e.isLoadingTrack = !0,
                e.loadTrack(e.trackToLoad)) : (e.isLoadingTrack = !1,
                e.checkForTracks())
            },
            loadTrack: function(e) {
                var t = this
                  , n = t.tracks[e];
                void 0 === n || void 0 === n.src && "" === n.src || (0,
                c.ajax)(n.src, "text", function(e) {
                    n.entries = "string" == typeof e && /<tt\s+xml/gi.exec(e) ? r.default.TrackFormatParser.dfxp.parse(e) : r.default.TrackFormatParser.webvtt.parse(e),
                    n.isLoaded = !0,
                    t.enableTrackButton(n),
                    t.loadNextTrack(),
                    "slides" === n.kind ? t.setupSlides(n) : "chapters" !== n.kind || t.hasChapters || (t.drawChapters(n),
                    t.hasChapters = !0)
                }, function() {
                    t.removeTrackButton(n.trackId),
                    t.loadNextTrack()
                })
            },
            enableTrackButton: function(e) {
                var t = this
                  , n = e.srclang
                  , o = i.default.getElementById("" + e.trackId);
                if (o) {
                    var s = e.label;
                    "" === s && (s = a.default.t(r.default.language.codes[n]) || n),
                    o.disabled = !1;
                    for (var l = (0,
                    c.siblings)(o, function(e) {
                        return (0,
                        c.hasClass)(e, t.options.classPrefix + "captions-selector-label")
                    }), d = 0, f = l.length; d < f; d++)
                        l[d].innerHTML = s;
                    if (t.options.startLanguage === n) {
                        o.checked = !0;
                        var p = (0,
                        u.createEvent)("click", o);
                        o.dispatchEvent(p)
                    }
                }
            },
            removeTrackButton: function(e) {
                var t = i.default.getElementById("" + e);
                if (t) {
                    var n = t.closest("li");
                    n && n.remove()
                }
            },
            addTrackButton: function(e, t, n) {
                var o = this;
                "" === n && (n = a.default.t(r.default.language.codes[t]) || t),
                o.captionsButton.querySelector("ul").innerHTML += '<li class="' + o.options.classPrefix + 'captions-selector-list-item"><input type="radio" class="' + o.options.classPrefix + 'captions-selector-input" name="' + o.id + '_captions" id="' + e + '" value="' + e + '" disabled><label class="' + o.options.classPrefix + 'captions-selector-label"for="' + e + '">' + n + " (loading)</label></li>"
            },
            checkForTracks: function() {
                var e = this
                  , t = !1;
                if (e.options.hideCaptionsButtonWhenEmpty) {
                    for (var n = 0, o = e.tracks.length; n < o; n++) {
                        var i = e.tracks[n].kind;
                        if (("subtitles" === i || "captions" === i) && e.tracks[n].isLoaded) {
                            t = !0;
                            break
                        }
                    }
                    e.captionsButton.style.display = t ? "" : "none",
                    e.setControlsSize()
                }
            },
            displayCaptions: function() {
                if (void 0 !== this.tracks) {
                    var e = this
                      , t = e.selectedTrack;
                    if (null !== t && t.isLoaded) {
                        var n = e.searchTrackPosition(t.entries, e.media.currentTime);
                        if (n > -1)
                            return e.captionsText.innerHTML = function(e) {
                                var t = i.default.createElement("div");
                                t.innerHTML = e;
                                for (var n = t.getElementsByTagName("script"), o = n.length; o--; )
                                    n[o].remove();
                                for (var r = t.getElementsByTagName("*"), a = 0, s = r.length; a < s; a++)
                                    for (var l = r[a].attributes, d = Array.prototype.slice.call(l), u = 0, c = d.length; u < c; u++)
                                        d[u].name.startsWith("on") || d[u].value.startsWith("javascript") ? r[a].remove() : "style" === d[u].name && r[a].removeAttribute(d[u].name);
                                return t.innerHTML
                            }(t.entries[n].text),
                            e.captionsText.className = e.options.classPrefix + "captions-text " + (t.entries[n].identifier || ""),
                            e.captions.style.display = "",
                            void (e.captions.style.height = "0px");
                        e.captions.style.display = "none"
                    } else
                        e.captions.style.display = "none"
                }
            },
            setupSlides: function(e) {
                var t = this;
                t.slides = e,
                t.slides.entries.imgs = [t.slides.entries.length],
                t.showSlide(0)
            },
            showSlide: function(e) {
                var t = this
                  , n = this;
                if (void 0 !== n.tracks && void 0 !== n.slidesContainer) {
                    var o = n.slides.entries[e].text
                      , r = n.slides.entries[e].imgs;
                    if (void 0 === r || void 0 === r.fadeIn) {
                        var a = i.default.createElement("img");
                        a.src = o,
                        a.addEventListener("load", function() {
                            var e = t
                              , o = (0,
                            c.siblings)(e, function(e) {
                                return o(e)
                            });
                            e.style.display = "none",
                            n.slidesContainer.innerHTML += e.innerHTML,
                            (0,
                            c.fadeIn)(n.slidesContainer.querySelector(a));
                            for (var i = 0, r = o.length; i < r; i++)
                                (0,
                                c.fadeOut)(o[i], 400)
                        }),
                        n.slides.entries[e].imgs = r = a
                    } else if (!(0,
                    c.visible)(r)) {
                        var s = (0,
                        c.siblings)(self, function(e) {
                            return s(e)
                        });
                        (0,
                        c.fadeIn)(n.slidesContainer.querySelector(r));
                        for (var l = 0, d = s.length; l < d; l++)
                            (0,
                            c.fadeOut)(s[l])
                    }
                }
            },
            displaySlides: function() {
                var e = this;
                if (void 0 !== this.slides) {
                    var t = e.slides
                      , n = e.searchTrackPosition(t.entries, e.media.currentTime);
                    n > -1 && e.showSlide(n)
                }
            },
            drawChapters: function(e) {
                var t = this
                  , n = e.entries.length;
                if (n) {
                    t.chaptersButton.querySelector("ul").innerHTML = "";
                    for (var o = 0; o < n; o++)
                        t.chaptersButton.querySelector("ul").innerHTML += '<li class="' + t.options.classPrefix + 'chapters-selector-list-item" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false"><input type="radio" class="' + t.options.classPrefix + 'captions-selector-input" name="' + t.id + '_chapters" id="' + t.id + "_chapters_" + o + '" value="' + e.entries[o].start + '" disabled><label class="' + t.options.classPrefix + 'chapters-selector-label"for="' + t.id + "_chapters_" + o + '">' + e.entries[o].text + "</label></li>";
                    for (var i = t.chaptersButton.querySelectorAll('input[type="radio"]'), r = t.chaptersButton.querySelectorAll("." + t.options.classPrefix + "chapters-selector-label"), a = 0, s = i.length; a < s; a++)
                        i[a].disabled = !1,
                        i[a].checked = !1,
                        i[a].addEventListener("click", function(e) {
                            var n = this
                              , o = t.chaptersButton.querySelectorAll("li")
                              , i = (0,
                            c.siblings)(n, function(e) {
                                return (0,
                                c.hasClass)(e, t.options.classPrefix + "chapters-selector-label")
                            })[0];
                            n.checked = !0,
                            n.parentNode.setAttribute("aria-checked", !0),
                            (0,
                            c.addClass)(i, t.options.classPrefix + "chapters-selected"),
                            (0,
                            c.removeClass)(t.chaptersButton.querySelector("." + t.options.classPrefix + "chapters-selected"), t.options.classPrefix + "chapters-selected");
                            for (var r = 0, a = o.length; r < a; r++)
                                o[r].setAttribute("aria-checked", !1);
                            void 0 === (e.keyCode || e.which) && setTimeout(function() {
                                t.getElement(t.container).focus()
                            }, 500),
                            t.media.setCurrentTime(parseFloat(n.value)),
                            t.media.paused && t.media.play()
                        });
                    for (var l = 0, d = r.length; l < d; l++)
                        r[l].addEventListener("click", function(e) {
                            var t = (0,
                            c.siblings)(this, function(e) {
                                return "INPUT" === e.tagName
                            })[0]
                              , n = (0,
                            u.createEvent)("click", t);
                            t.dispatchEvent(n),
                            e.preventDefault()
                        })
                }
            },
            searchTrackPosition: function(e, t) {
                for (var n = 0, o = e.length - 1, i = void 0, r = void 0, a = void 0; n <= o; ) {
                    if (i = n + o >> 1,
                    r = e[i].start,
                    a = e[i].stop,
                    t >= r && t < a)
                        return i;
                    r < t ? n = i + 1 : r > t && (o = i - 1)
                }
                return -1
            }
        }),
        r.default.language = {
            codes: {
                af: "mejs.afrikaans",
                sq: "mejs.albanian",
                ar: "mejs.arabic",
                be: "mejs.belarusian",
                bg: "mejs.bulgarian",
                ca: "mejs.catalan",
                zh: "mejs.chinese",
                "zh-cn": "mejs.chinese-simplified",
                "zh-tw": "mejs.chines-traditional",
                hr: "mejs.croatian",
                cs: "mejs.czech",
                da: "mejs.danish",
                nl: "mejs.dutch",
                en: "mejs.english",
                et: "mejs.estonian",
                fl: "mejs.filipino",
                fi: "mejs.finnish",
                fr: "mejs.french",
                gl: "mejs.galician",
                de: "mejs.german",
                el: "mejs.greek",
                ht: "mejs.haitian-creole",
                iw: "mejs.hebrew",
                hi: "mejs.hindi",
                hu: "mejs.hungarian",
                is: "mejs.icelandic",
                id: "mejs.indonesian",
                ga: "mejs.irish",
                it: "mejs.italian",
                ja: "mejs.japanese",
                ko: "mejs.korean",
                lv: "mejs.latvian",
                lt: "mejs.lithuanian",
                mk: "mejs.macedonian",
                ms: "mejs.malay",
                mt: "mejs.maltese",
                no: "mejs.norwegian",
                fa: "mejs.persian",
                pl: "mejs.polish",
                pt: "mejs.portuguese",
                ro: "mejs.romanian",
                ru: "mejs.russian",
                sr: "mejs.serbian",
                sk: "mejs.slovak",
                sl: "mejs.slovenian",
                es: "mejs.spanish",
                sw: "mejs.swahili",
                sv: "mejs.swedish",
                tl: "mejs.tagalog",
                th: "mejs.thai",
                tr: "mejs.turkish",
                uk: "mejs.ukrainian",
                vi: "mejs.vietnamese",
                cy: "mejs.welsh",
                yi: "mejs.yiddish"
            }
        },
        r.default.TrackFormatParser = {
            webvtt: {
                pattern: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
                parse: function(e) {
                    for (var t = e.split(/\r?\n/), n = [], o = void 0, i = void 0, r = void 0, a = 0, s = t.length; a < s; a++) {
                        if ((o = this.pattern.exec(t[a])) && a < t.length) {
                            for (a - 1 >= 0 && "" !== t[a - 1] && (r = t[a - 1]),
                            i = t[++a],
                            a++; "" !== t[a] && a < t.length; )
                                i = i + "\n" + t[a],
                                a++;
                            i = i.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"),
                            n.push({
                                identifier: r,
                                start: 0 === (0,
                                d.convertSMPTEtoSeconds)(o[1]) ? .2 : (0,
                                d.convertSMPTEtoSeconds)(o[1]),
                                stop: (0,
                                d.convertSMPTEtoSeconds)(o[3]),
                                text: i,
                                settings: o[5]
                            })
                        }
                        r = ""
                    }
                    return n
                }
            },
            dfxp: {
                parse: function(e) {
                    var t = (e = $(e).filter("tt")).firstChild
                      , n = t.querySelectorAll("p")
                      , o = e.getElementById("" + t.attr("style"))
                      , i = []
                      , r = void 0;
                    if (o.length) {
                        o.removeAttribute("id");
                        var a = o.attributes;
                        if (a.length) {
                            r = {};
                            for (var s = 0, l = a.length; s < l; s++)
                                r[a[s].name.split(":")[1]] = a[s].value
                        }
                    }
                    for (var u = 0, c = n.length; u < c; u++) {
                        var f = void 0
                          , p = {
                            start: null,
                            stop: null,
                            style: null,
                            text: null
                        };
                        if (n.eq(u).attr("begin") && (p.start = (0,
                        d.convertSMPTEtoSeconds)(n.eq(u).attr("begin"))),
                        !p.start && n.eq(u - 1).attr("end") && (p.start = (0,
                        d.convertSMPTEtoSeconds)(n.eq(u - 1).attr("end"))),
                        n.eq(u).attr("end") && (p.stop = (0,
                        d.convertSMPTEtoSeconds)(n.eq(u).attr("end"))),
                        !p.stop && n.eq(u + 1).attr("begin") && (p.stop = (0,
                        d.convertSMPTEtoSeconds)(n.eq(u + 1).attr("begin"))),
                        r) {
                            f = "";
                            for (var m in r)
                                f += m + ":" + r[m] + ";"
                        }
                        f && (p.style = f),
                        0 === p.start && (p.start = .2),
                        p.text = n.eq(u).innerHTML.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"),
                        i.push(p)
                    }
                    return i
                }
            }
        }
    }
    , {
        16: 16,
        2: 2,
        26: 26,
        27: 27,
        30: 30,
        5: 5,
        7: 7
    }],
    14: [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(2))
          , r = e(16)
          , a = o(r)
          , s = o(e(5))
          , l = e(25)
          , d = e(27)
          , u = e(26);
        Object.assign(r.config, {
            muteText: null,
            unmuteText: null,
            allyVolumeControlText: null,
            hideVolumeOnTouchDevices: !0,
            audioVolume: "horizontal",
            videoVolume: "vertical",
            startVolume: .8
        }),
        Object.assign(a.default.prototype, {
            buildvolume: function(e, t, n, o) {
                if (!l.IS_ANDROID && !l.IS_IOS || !this.options.hideVolumeOnTouchDevices) {
                    var a = this
                      , c = a.isVideo ? a.options.videoVolume : a.options.audioVolume
                      , f = (0,
                    d.isString)(a.options.muteText) ? a.options.muteText : s.default.t("mejs.mute")
                      , p = (0,
                    d.isString)(a.options.unmuteText) ? a.options.unmuteText : s.default.t("mejs.unmute")
                      , m = (0,
                    d.isString)(a.options.allyVolumeControlText) ? a.options.allyVolumeControlText : s.default.t("mejs.volume-help-text")
                      , h = i.default.createElement("div");
                    if (h.className = a.options.classPrefix + "button " + a.options.classPrefix + "volume-button " + a.options.classPrefix + "mute",
                    h.innerHTML = "horizontal" === c ? '<button type="button" aria-controls="' + a.id + '" title="' + f + '" aria-label="' + f + '" tabindex="0"></button>' : '<button type="button" aria-controls="' + a.id + '" title="' + f + '" aria-label="' + f + '" tabindex="0"></button><a href="javascript:void(0);" class="' + a.options.classPrefix + 'volume-slider" aria-label="' + s.default.t("mejs.volume-slider") + '" aria-valuemin="0" aria-valuemax="100" role="slider" aria-orientation="vertical"><span class="' + a.options.classPrefix + 'offscreen">' + m + '</span><div class="' + a.options.classPrefix + 'volume-total"><div class="' + a.options.classPrefix + 'volume-current"></div><div class="' + a.options.classPrefix + 'volume-handle"></div></div></a>',
                    a.addControlElement(h, "volume"),
                    a.options.keyActions.push({
                        keys: [38],
                        action: function(e) {
                            var t = e.getElement(e.container).querySelector("." + r.config.classPrefix + "volume-slider");
                            (t || e.getElement(e.container).querySelector("." + r.config.classPrefix + "volume-slider").matches(":focus")) && (t.style.display = "block"),
                            e.isVideo && (e.showControls(),
                            e.startControlsTimer());
                            var n = Math.min(e.volume + .1, 1);
                            e.setVolume(n),
                            n > 0 && e.setMuted(!1)
                        }
                    }, {
                        keys: [40],
                        action: function(e) {
                            var t = e.getElement(e.container).querySelector("." + r.config.classPrefix + "volume-slider");
                            t && (t.style.display = "block"),
                            e.isVideo && (e.showControls(),
                            e.startControlsTimer());
                            var n = Math.max(e.volume - .1, 0);
                            e.setVolume(n),
                            n <= .1 && e.setMuted(!0)
                        }
                    }, {
                        keys: [77],
                        action: function(e) {
                            e.getElement(e.container).querySelector("." + r.config.classPrefix + "volume-slider").style.display = "block",
                            e.isVideo && (e.showControls(),
                            e.startControlsTimer()),
                            e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
                        }
                    }),
                    "horizontal" === c) {
                        var v = i.default.createElement("a");
                        v.className = a.options.classPrefix + "horizontal-volume-slider",
                        v.href = "javascript:void(0);",
                        v.setAttribute("aria-label", s.default.t("mejs.volume-slider")),
                        v.setAttribute("aria-valuemin", 0),
                        v.setAttribute("aria-valuemax", 100),
                        v.setAttribute("role", "slider"),
                        v.innerHTML += '<span class="' + a.options.classPrefix + 'offscreen">' + m + '</span><div class="' + a.options.classPrefix + 'horizontal-volume-total"><div class="' + a.options.classPrefix + 'horizontal-volume-current"></div><div class="' + a.options.classPrefix + 'horizontal-volume-handle"></div></div>',
                        h.parentNode.insertBefore(v, h.nextSibling)
                    }
                    var g = !1
                      , y = !1
                      , E = !1
                      , b = function() {
                        var e = Math.floor(100 * o.volume);
                        S.setAttribute("aria-valuenow", e),
                        S.setAttribute("aria-valuetext", e + "%")
                    }
                      , S = "vertical" === c ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-slider") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-slider")
                      , x = "vertical" === c ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-total") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-total")
                      , w = "vertical" === c ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-current") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-current")
                      , P = "vertical" === c ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-handle") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-handle")
                      , T = function(e) {
                        if (null !== e && !isNaN(e) && void 0 !== e) {
                            if (e = Math.max(0, e),
                            0 === (e = Math.min(e, 1))) {
                                (0,
                                u.removeClass)(h, a.options.classPrefix + "mute"),
                                (0,
                                u.addClass)(h, a.options.classPrefix + "unmute");
                                var t = h.firstElementChild;
                                t.setAttribute("title", p),
                                t.setAttribute("aria-label", p)
                            } else {
                                (0,
                                u.removeClass)(h, a.options.classPrefix + "unmute"),
                                (0,
                                u.addClass)(h, a.options.classPrefix + "mute");
                                var n = h.firstElementChild;
                                n.setAttribute("title", f),
                                n.setAttribute("aria-label", f)
                            }
                            var o = 100 * e + "%"
                              , i = getComputedStyle(P);
                            "vertical" === c ? (w.style.bottom = 0,
                            w.style.height = o,
                            P.style.bottom = o,
                            P.style.marginBottom = -parseFloat(i.height) / 2 + "px") : (w.style.left = 0,
                            w.style.width = o,
                            P.style.left = o,
                            P.style.marginLeft = -parseFloat(i.width) / 2 + "px")
                        }
                    }
                      , C = function(e) {
                        var t = (0,
                        u.offset)(x)
                          , n = getComputedStyle(x);
                        E = !0;
                        var o = null;
                        if ("vertical" === c) {
                            var i = parseFloat(n.height);
                            if (o = (i - (e.pageY - t.top)) / i,
                            0 === t.top || 0 === t.left)
                                return
                        } else {
                            var r = parseFloat(n.width);
                            o = (e.pageX - t.left) / r
                        }
                        o = Math.max(0, o),
                        o = Math.min(o, 1),
                        T(o),
                        a.setMuted(0 === o),
                        a.setVolume(o),
                        e.preventDefault(),
                        e.stopPropagation()
                    }
                      , k = function() {
                        a.muted ? (T(0),
                        (0,
                        u.removeClass)(h, a.options.classPrefix + "mute"),
                        (0,
                        u.addClass)(h, a.options.classPrefix + "unmute")) : (T(o.volume),
                        (0,
                        u.removeClass)(h, a.options.classPrefix + "unmute"),
                        (0,
                        u.addClass)(h, a.options.classPrefix + "mute"))
                    };
                    e.getElement(e.container).addEventListener("keydown", function(e) {
                        !!e.target.closest("." + a.options.classPrefix + "container") || "vertical" !== c || (S.style.display = "none")
                    }),
                    h.addEventListener("mouseenter", function(e) {
                        e.target === h && (S.style.display = "block",
                        y = !0,
                        e.preventDefault(),
                        e.stopPropagation())
                    }),
                    h.addEventListener("focusin", function() {
                        S.style.display = "block",
                        y = !0
                    }),
                    h.addEventListener("focusout", function(e) {
                        e.relatedTarget && (!e.relatedTarget || e.relatedTarget.matches("." + a.options.classPrefix + "volume-slider")) || "vertical" !== c || (S.style.display = "none")
                    }),
                    h.addEventListener("mouseleave", function() {
                        y = !1,
                        g || "vertical" !== c || (S.style.display = "none")
                    }),
                    h.addEventListener("focusout", function() {
                        y = !1
                    }),
                    h.addEventListener("keydown", function(e) {
                        if (a.options.keyActions.length) {
                            var t = e.which || e.keyCode || 0
                              , n = o.volume;
                            switch (t) {
                            case 38:
                                n = Math.min(n + .1, 1);
                                break;
                            case 40:
                                n = Math.max(0, n - .1);
                                break;
                            default:
                                return !0
                            }
                            g = !1,
                            T(n),
                            o.setVolume(n),
                            e.preventDefault(),
                            e.stopPropagation()
                        }
                    }),
                    h.querySelector("button").addEventListener("click", function() {
                        o.setMuted(!o.muted);
                        var e = (0,
                        d.createEvent)("volumechange", o);
                        o.dispatchEvent(e)
                    }),
                    S.addEventListener("dragstart", function() {
                        return !1
                    }),
                    S.addEventListener("mouseover", function() {
                        y = !0
                    }),
                    S.addEventListener("focusin", function() {
                        S.style.display = "block",
                        y = !0
                    }),
                    S.addEventListener("focusout", function() {
                        y = !1,
                        g || "vertical" !== c || (S.style.display = "none")
                    }),
                    S.addEventListener("mousedown", function(e) {
                        C(e),
                        a.globalBind("mousemove.vol", function(e) {
                            var t = e.target;
                            g && (t === S || t.closest("vertical" === c ? "." + a.options.classPrefix + "volume-slider" : "." + a.options.classPrefix + "horizontal-volume-slider")) && C(e)
                        }),
                        a.globalBind("mouseup.vol", function() {
                            g = !1,
                            y || "vertical" !== c || (S.style.display = "none")
                        }),
                        g = !0,
                        e.preventDefault(),
                        e.stopPropagation()
                    }),
                    o.addEventListener("volumechange", function(e) {
                        g || k(),
                        b()
                    });
                    var _ = !1;
                    o.addEventListener("rendererready", function() {
                        E || setTimeout(function() {
                            _ = !0,
                            (0 === e.options.startVolume || o.originalNode.muted) && (o.setMuted(!0),
                            e.options.startVolume = 0),
                            o.setVolume(e.options.startVolume),
                            a.setControlsSize()
                        }, 250)
                    }),
                    o.addEventListener("loadedmetadata", function() {
                        setTimeout(function() {
                            E || _ || ((0 === e.options.startVolume || o.originalNode.muted) && (o.setMuted(!0),
                            e.options.startVolume = 0),
                            o.setVolume(e.options.startVolume),
                            a.setControlsSize()),
                            _ = !1
                        }, 250)
                    }),
                    (0 === e.options.startVolume || o.originalNode.muted) && (o.setMuted(!0),
                    e.options.startVolume = 0,
                    k()),
                    a.getElement(a.container).addEventListener("controlsresize", function() {
                        k()
                    })
                }
            }
        })
    }
    , {
        16: 16,
        2: 2,
        25: 25,
        26: 26,
        27: 27,
        5: 5
    }],
    15: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.EN = {
            "mejs.plural-form": 1,
            "mejs.download-file": "Download File",
            "mejs.install-flash": "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/",
            "mejs.fullscreen": "Fullscreen",
            "mejs.play": "Play",
            "mejs.pause": "Pause",
            "mejs.time-slider": "Time Slider",
            "mejs.time-help-text": "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
            "mejs.live-broadcast": "Live Broadcast",
            "mejs.volume-help-text": "Use Up/Down Arrow keys to increase or decrease volume.",
            "mejs.unmute": "Unmute",
            "mejs.mute": "Mute",
            "mejs.volume-slider": "Volume Slider",
            "mejs.video-player": "Video Player",
            "mejs.audio-player": "Audio Player",
            "mejs.captions-subtitles": "Captions/Subtitles",
            "mejs.captions-chapters": "Chapters",
            "mejs.none": "None",
            "mejs.afrikaans": "Afrikaans",
            "mejs.albanian": "Albanian",
            "mejs.arabic": "Arabic",
            "mejs.belarusian": "Belarusian",
            "mejs.bulgarian": "Bulgarian",
            "mejs.catalan": "Catalan",
            "mejs.chinese": "Chinese",
            "mejs.chinese-simplified": "Chinese (Simplified)",
            "mejs.chinese-traditional": "Chinese (Traditional)",
            "mejs.croatian": "Croatian",
            "mejs.czech": "Czech",
            "mejs.danish": "Danish",
            "mejs.dutch": "Dutch",
            "mejs.english": "English",
            "mejs.estonian": "Estonian",
            "mejs.filipino": "Filipino",
            "mejs.finnish": "Finnish",
            "mejs.french": "French",
            "mejs.galician": "Galician",
            "mejs.german": "German",
            "mejs.greek": "Greek",
            "mejs.haitian-creole": "Haitian Creole",
            "mejs.hebrew": "Hebrew",
            "mejs.hindi": "Hindi",
            "mejs.hungarian": "Hungarian",
            "mejs.icelandic": "Icelandic",
            "mejs.indonesian": "Indonesian",
            "mejs.irish": "Irish",
            "mejs.italian": "Italian",
            "mejs.japanese": "Japanese",
            "mejs.korean": "Korean",
            "mejs.latvian": "Latvian",
            "mejs.lithuanian": "Lithuanian",
            "mejs.macedonian": "Macedonian",
            "mejs.malay": "Malay",
            "mejs.maltese": "Maltese",
            "mejs.norwegian": "Norwegian",
            "mejs.persian": "Persian",
            "mejs.polish": "Polish",
            "mejs.portuguese": "Portuguese",
            "mejs.romanian": "Romanian",
            "mejs.russian": "Russian",
            "mejs.serbian": "Serbian",
            "mejs.slovak": "Slovak",
            "mejs.slovenian": "Slovenian",
            "mejs.spanish": "Spanish",
            "mejs.swahili": "Swahili",
            "mejs.swedish": "Swedish",
            "mejs.tagalog": "Tagalog",
            "mejs.thai": "Thai",
            "mejs.turkish": "Turkish",
            "mejs.ukrainian": "Ukrainian",
            "mejs.vietnamese": "Vietnamese",
            "mejs.welsh": "Welsh",
            "mejs.yiddish": "Yiddish"
        }
    }
    , {}],
    16: [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.config = void 0;
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }()
          , s = o(e(3))
          , l = o(e(2))
          , d = o(e(7))
          , u = o(e(6))
          , c = o(e(17))
          , f = o(e(5))
          , p = e(25)
          , m = e(27)
          , h = e(30)
          , v = e(28)
          , g = function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e,
            t
        }(e(26));
        d.default.mepIndex = 0,
        d.default.players = {};
        var y = n.config = {
            poster: "",
            showPosterWhenEnded: !1,
            showPosterWhenPaused: !1,
            defaultVideoWidth: 480,
            defaultVideoHeight: 270,
            videoWidth: -1,
            videoHeight: -1,
            defaultAudioWidth: 400,
            defaultAudioHeight: 40,
            defaultSeekBackwardInterval: function(e) {
                return .05 * e.getDuration()
            },
            defaultSeekForwardInterval: function(e) {
                return .05 * e.getDuration()
            },
            setDimensions: !0,
            audioWidth: -1,
            audioHeight: -1,
            loop: !1,
            autoRewind: !0,
            enableAutosize: !0,
            timeFormat: "",
            alwaysShowHours: !1,
            showTimecodeFrameCount: !1,
            framesPerSecond: 25,
            alwaysShowControls: !1,
            hideVideoControlsOnLoad: !1,
            hideVideoControlsOnPause: !1,
            clickToPlayPause: !0,
            controlsTimeoutDefault: 1500,
            controlsTimeoutMouseEnter: 2500,
            controlsTimeoutMouseLeave: 1e3,
            iPadUseNativeControls: !1,
            iPhoneUseNativeControls: !1,
            AndroidUseNativeControls: !1,
            features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
            useDefaultControls: !1,
            isVideo: !0,
            stretching: "auto",
            classPrefix: "mejs__",
            enableKeyboard: !0,
            pauseOtherPlayers: !0,
            secondsDecimalLength: 0,
            customError: null,
            keyActions: [{
                keys: [32, 179],
                action: function(e) {
                    p.IS_FIREFOX || (e.paused || e.ended ? e.play() : e.pause())
                }
            }]
        };
        d.default.MepDefaults = y;
        var E = function() {
            function e(t, n) {
                i(this, e);
                var o = this
                  , r = "string" == typeof t ? l.default.getElementById(t) : t;
                if (!(o instanceof e))
                    return new e(r,n);
                if (o.node = o.media = r,
                o.node) {
                    if (o.media.player)
                        return o.media.player;
                    if (o.hasFocus = !1,
                    o.controlsAreVisible = !0,
                    o.controlsEnabled = !0,
                    o.controlsTimer = null,
                    o.currentMediaTime = 0,
                    o.proxy = null,
                    void 0 === n) {
                        var a = o.node.getAttribute("data-mejsoptions");
                        n = a ? JSON.parse(a) : {}
                    }
                    return o.options = Object.assign({}, y, n),
                    o.options.loop && !o.media.getAttribute("loop") ? (o.media.loop = !0,
                    o.node.loop = !0) : o.media.loop && (o.options.loop = !0),
                    o.options.timeFormat || (o.options.timeFormat = "mm:ss",
                    o.options.alwaysShowHours && (o.options.timeFormat = "hh:mm:ss"),
                    o.options.showTimecodeFrameCount && (o.options.timeFormat += ":ff")),
                    (0,
                    h.calculateTimeFormat)(0, o.options, o.options.framesPerSecond || 25),
                    o.id = "mep_" + d.default.mepIndex++,
                    d.default.players[o.id] = o,
                    o.init(),
                    o
                }
            }
            return a(e, [{
                key: "getElement",
                value: function(e) {
                    return e
                }
            }, {
                key: "init",
                value: function() {
                    var e = this
                      , t = Object.assign({}, e.options, {
                        success: function(t, n) {
                            e._meReady(t, n)
                        },
                        error: function(t) {
                            e._handleError(t)
                        }
                    })
                      , n = e.node.tagName.toLowerCase();
                    if (e.isDynamic = "audio" !== n && "video" !== n && "iframe" !== n,
                    e.isVideo = e.isDynamic ? e.options.isVideo : "audio" !== n && e.options.isVideo,
                    e.mediaFiles = null,
                    e.trackFiles = null,
                    p.IS_IPAD && e.options.iPadUseNativeControls || p.IS_IPHONE && e.options.iPhoneUseNativeControls)
                        e.node.setAttribute("controls", !0),
                        p.IS_IPAD && e.node.getAttribute("autoplay") && e.play();
                    else if (!e.isVideo && (e.isVideo || !e.options.features.length && !e.options.useDefaultControls) || p.IS_ANDROID && e.options.AndroidUseNativeControls)
                        e.isVideo || e.options.features.length || e.options.useDefaultControls || (e.node.style.display = "none");
                    else {
                        e.node.removeAttribute("controls");
                        var o = e.isVideo ? f.default.t("mejs.video-player") : f.default.t("mejs.audio-player")
                          , i = l.default.createElement("span");
                        if (i.className = e.options.classPrefix + "offscreen",
                        i.innerText = o,
                        e.media.parentNode.insertBefore(i, e.media),
                        e.container = l.default.createElement("div"),
                        e.getElement(e.container).id = e.id,
                        e.getElement(e.container).className = e.options.classPrefix + "container " + e.options.classPrefix + "container-keyboard-inactive " + e.media.className,
                        e.getElement(e.container).tabIndex = 0,
                        e.getElement(e.container).setAttribute("role", "application"),
                        e.getElement(e.container).setAttribute("aria-label", o),
                        e.getElement(e.container).innerHTML = '<div class="' + e.options.classPrefix + 'inner"><div class="' + e.options.classPrefix + 'mediaelement"></div><div class="' + e.options.classPrefix + 'layers"></div><div class="' + e.options.classPrefix + 'controls"></div></div>',
                        e.getElement(e.container).addEventListener("focus", function(t) {
                            if (!e.controlsAreVisible && !e.hasFocus && e.controlsEnabled) {
                                e.showControls(!0);
                                var n = (0,
                                m.isNodeAfter)(t.relatedTarget, e.getElement(e.container)) ? "." + e.options.classPrefix + "controls ." + e.options.classPrefix + "button:last-child > button" : "." + e.options.classPrefix + "playpause-button > button";
                                e.getElement(e.container).querySelector(n).focus()
                            }
                        }),
                        e.node.parentNode.insertBefore(e.getElement(e.container), e.node),
                        e.options.features.length || e.options.useDefaultControls || (e.getElement(e.container).style.background = "transparent",
                        e.getElement(e.container).querySelector("." + e.options.classPrefix + "controls").style.display = "none"),
                        e.isVideo && "fill" === e.options.stretching && !g.hasClass(e.getElement(e.container).parentNode, e.options.classPrefix + "fill-container")) {
                            e.outerContainer = e.media.parentNode;
                            var r = l.default.createElement("div");
                            r.className = e.options.classPrefix + "fill-container",
                            e.getElement(e.container).parentNode.insertBefore(r, e.getElement(e.container)),
                            r.appendChild(e.getElement(e.container))
                        }
                        if (p.IS_ANDROID && g.addClass(e.getElement(e.container), e.options.classPrefix + "android"),
                        p.IS_IOS && g.addClass(e.getElement(e.container), e.options.classPrefix + "ios"),
                        p.IS_IPAD && g.addClass(e.getElement(e.container), e.options.classPrefix + "ipad"),
                        p.IS_IPHONE && g.addClass(e.getElement(e.container), e.options.classPrefix + "iphone"),
                        g.addClass(e.getElement(e.container), e.isVideo ? e.options.classPrefix + "video" : e.options.classPrefix + "audio"),
                        p.IS_SAFARI && !p.IS_IOS) {
                            g.addClass(e.getElement(e.container), e.options.classPrefix + "hide-cues");
                            for (var a = e.node.cloneNode(), s = e.node.children, c = [], h = [], y = 0, E = s.length; y < E; y++) {
                                var b = s[y];
                                !function() {
                                    switch (b.tagName.toLowerCase()) {
                                    case "source":
                                        var e = {};
                                        Array.prototype.slice.call(b.attributes).forEach(function(t) {
                                            e[t.name] = t.value
                                        }),
                                        e.type = (0,
                                        v.formatType)(e.src, e.type),
                                        c.push(e);
                                        break;
                                    case "track":
                                        b.mode = "hidden",
                                        h.push(b);
                                        break;
                                    default:
                                        a.appendChild(b)
                                    }
                                }()
                            }
                            e.node.remove(),
                            e.node = e.media = a,
                            c.length && (e.mediaFiles = c),
                            h.length && (e.trackFiles = h)
                        }
                        e.getElement(e.container).querySelector("." + e.options.classPrefix + "mediaelement").appendChild(e.node),
                        e.media.player = e,
                        e.controls = e.getElement(e.container).querySelector("." + e.options.classPrefix + "controls"),
                        e.layers = e.getElement(e.container).querySelector("." + e.options.classPrefix + "layers");
                        var S = e.isVideo ? "video" : "audio"
                          , x = S.substring(0, 1).toUpperCase() + S.substring(1);
                        e.options[S + "Width"] > 0 || e.options[S + "Width"].toString().indexOf("%") > -1 ? e.width = e.options[S + "Width"] : "" !== e.node.style.width && null !== e.node.style.width ? e.width = e.node.style.width : e.node.getAttribute("width") ? e.width = e.node.getAttribute("width") : e.width = e.options["default" + x + "Width"],
                        e.options[S + "Height"] > 0 || e.options[S + "Height"].toString().indexOf("%") > -1 ? e.height = e.options[S + "Height"] : "" !== e.node.style.height && null !== e.node.style.height ? e.height = e.node.style.height : e.node.getAttribute("height") ? e.height = e.node.getAttribute("height") : e.height = e.options["default" + x + "Height"],
                        e.initialAspectRatio = e.height >= e.width ? e.width / e.height : e.height / e.width,
                        e.setPlayerSize(e.width, e.height),
                        t.pluginWidth = e.width,
                        t.pluginHeight = e.height
                    }
                    if (d.default.MepDefaults = t,
                    new u.default(e.media,t,e.mediaFiles),
                    void 0 !== e.getElement(e.container) && e.options.features.length && e.controlsAreVisible && !e.options.hideVideoControlsOnLoad) {
                        var w = (0,
                        m.createEvent)("controlsshown", e.getElement(e.container));
                        e.getElement(e.container).dispatchEvent(w)
                    }
                }
            }, {
                key: "showControls",
                value: function(e) {
                    var t = this;
                    if (e = void 0 === e || e,
                    !t.controlsAreVisible && t.isVideo) {
                        if (e)
                            !function() {
                                g.fadeIn(t.getElement(t.controls), 200, function() {
                                    g.removeClass(t.getElement(t.controls), t.options.classPrefix + "offscreen");
                                    var e = (0,
                                    m.createEvent)("controlsshown", t.getElement(t.container));
                                    t.getElement(t.container).dispatchEvent(e)
                                });
                                for (var e = t.getElement(t.container).querySelectorAll("." + t.options.classPrefix + "control"), n = 0, o = e.length; n < o; n++)
                                    !function(n, o) {
                                        g.fadeIn(e[n], 200, function() {
                                            g.removeClass(e[n], t.options.classPrefix + "offscreen")
                                        })
                                    }(n)
                            }();
                        else {
                            g.removeClass(t.getElement(t.controls), t.options.classPrefix + "offscreen"),
                            t.getElement(t.controls).style.display = "",
                            t.getElement(t.controls).style.opacity = 1;
                            for (var n = t.getElement(t.container).querySelectorAll("." + t.options.classPrefix + "control"), o = 0, i = n.length; o < i; o++)
                                g.removeClass(n[o], t.options.classPrefix + "offscreen"),
                                n[o].style.display = "";
                            var r = (0,
                            m.createEvent)("controlsshown", t.getElement(t.container));
                            t.getElement(t.container).dispatchEvent(r)
                        }
                        t.controlsAreVisible = !0,
                        t.setControlsSize()
                    }
                }
            }, {
                key: "hideControls",
                value: function(e, t) {
                    var n = this;
                    if (e = void 0 === e || e,
                    !0 === t || !(!n.controlsAreVisible || n.options.alwaysShowControls || n.paused && 4 === n.readyState && (!n.options.hideVideoControlsOnLoad && n.currentTime <= 0 || !n.options.hideVideoControlsOnPause && n.currentTime > 0) || n.isVideo && !n.options.hideVideoControlsOnLoad && !n.readyState || n.ended)) {
                        if (e)
                            !function() {
                                g.fadeOut(n.getElement(n.controls), 200, function() {
                                    g.addClass(n.getElement(n.controls), n.options.classPrefix + "offscreen"),
                                    n.getElement(n.controls).style.display = "";
                                    var e = (0,
                                    m.createEvent)("controlshidden", n.getElement(n.container));
                                    n.getElement(n.container).dispatchEvent(e)
                                });
                                for (var e = n.getElement(n.container).querySelectorAll("." + n.options.classPrefix + "control"), t = 0, o = e.length; t < o; t++)
                                    !function(t, o) {
                                        g.fadeOut(e[t], 200, function() {
                                            g.addClass(e[t], n.options.classPrefix + "offscreen"),
                                            e[t].style.display = ""
                                        })
                                    }(t)
                            }();
                        else {
                            g.addClass(n.getElement(n.controls), n.options.classPrefix + "offscreen"),
                            n.getElement(n.controls).style.display = "",
                            n.getElement(n.controls).style.opacity = 0;
                            for (var o = n.getElement(n.container).querySelectorAll("." + n.options.classPrefix + "control"), i = 0, r = o.length; i < r; i++)
                                g.addClass(o[i], n.options.classPrefix + "offscreen"),
                                o[i].style.display = "";
                            var a = (0,
                            m.createEvent)("controlshidden", n.getElement(n.container));
                            n.getElement(n.container).dispatchEvent(a)
                        }
                        n.controlsAreVisible = !1
                    }
                }
            }, {
                key: "startControlsTimer",
                value: function(e) {
                    var t = this;
                    e = void 0 !== e ? e : t.options.controlsTimeoutDefault,
                    t.killControlsTimer("start"),
                    t.controlsTimer = setTimeout(function() {
                        t.hideControls(),
                        t.killControlsTimer("hide")
                    }, e)
                }
            }, {
                key: "killControlsTimer",
                value: function() {
                    var e = this;
                    null !== e.controlsTimer && (clearTimeout(e.controlsTimer),
                    delete e.controlsTimer,
                    e.controlsTimer = null)
                }
            }, {
                key: "disableControls",
                value: function() {
                    var e = this;
                    e.killControlsTimer(),
                    e.controlsEnabled = !1,
                    e.hideControls(!1, !0)
                }
            }, {
                key: "enableControls",
                value: function() {
                    var e = this;
                    e.controlsEnabled = !0,
                    e.showControls(!1)
                }
            }, {
                key: "_setDefaultPlayer",
                value: function() {
                    var e = this;
                    e.proxy && e.proxy.pause(),
                    e.proxy = new c.default(e),
                    e.media.addEventListener("loadedmetadata", function() {
                        e.getCurrentTime() > 0 && e.currentMediaTime > 0 && (e.setCurrentTime(e.currentMediaTime),
                        p.IS_IOS || p.IS_ANDROID || e.play())
                    })
                }
            }, {
                key: "_meReady",
                value: function(e, t) {
                    var n = this
                      , o = t.getAttribute("autoplay")
                      , i = !(void 0 === o || null === o || "false" === o)
                      , r = null !== e.rendererName && /(native|html5)/i.test(n.media.rendererName);
                    if (n.getElement(n.controls) && n.enableControls(),
                    n.getElement(n.container) && n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-play") && (n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-play").style.display = ""),
                    !n.created) {
                        if (n.created = !0,
                        n.media = e,
                        n.domNode = t,
                        !(p.IS_ANDROID && n.options.AndroidUseNativeControls || p.IS_IPAD && n.options.iPadUseNativeControls || p.IS_IPHONE && n.options.iPhoneUseNativeControls)) {
                            if (!n.isVideo && !n.options.features.length && !n.options.useDefaultControls)
                                return i && r && n.play(),
                                void (n.options.success && ("string" == typeof n.options.success ? s.default[n.options.success](n.media, n.domNode, n) : n.options.success(n.media, n.domNode, n)));
                            if (n.featurePosition = {},
                            n._setDefaultPlayer(),
                            n.buildposter(n, n.getElement(n.controls), n.getElement(n.layers), n.media),
                            n.buildkeyboard(n, n.getElement(n.controls), n.getElement(n.layers), n.media),
                            n.buildoverlays(n, n.getElement(n.controls), n.getElement(n.layers), n.media),
                            n.options.useDefaultControls) {
                                var a = ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"];
                                n.options.features = a.concat(n.options.features.filter(function(e) {
                                    return -1 === a.indexOf(e)
                                }))
                            }
                            n.buildfeatures(n, n.getElement(n.controls), n.getElement(n.layers), n.media);
                            var u = (0,
                            m.createEvent)("controlsready", n.getElement(n.container));
                            n.getElement(n.container).dispatchEvent(u),
                            n.setPlayerSize(n.width, n.height),
                            n.setControlsSize(),
                            n.isVideo && (n.clickToPlayPauseCallback = function() {
                                if (n.options.clickToPlayPause) {
                                    var e = n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-button")
                                      , t = e.getAttribute("aria-pressed");
                                    n.paused && t ? n.pause() : n.paused ? n.play() : n.pause(),
                                    e.setAttribute("aria-pressed", !t),
                                    n.getElement(n.container).focus()
                                }
                            }
                            ,
                            n.createIframeLayer(),
                            n.media.addEventListener("click", n.clickToPlayPauseCallback),
                            !p.IS_ANDROID && !p.IS_IOS || n.options.alwaysShowControls ? (n.getElement(n.container).addEventListener("mouseenter", function() {
                                n.controlsEnabled && (n.options.alwaysShowControls || (n.killControlsTimer("enter"),
                                n.showControls(),
                                n.startControlsTimer(n.options.controlsTimeoutMouseEnter)))
                            }),
                            n.getElement(n.container).addEventListener("mousemove", function() {
                                n.controlsEnabled && (n.controlsAreVisible || n.showControls(),
                                n.options.alwaysShowControls || n.startControlsTimer(n.options.controlsTimeoutMouseEnter))
                            }),
                            n.getElement(n.container).addEventListener("mouseleave", function() {
                                n.controlsEnabled && (n.paused || n.options.alwaysShowControls || n.startControlsTimer(n.options.controlsTimeoutMouseLeave))
                            })) : n.node.addEventListener("touchstart", function() {
                                n.controlsAreVisible ? n.hideControls(!1) : n.controlsEnabled && n.showControls(!1)
                            }, !!p.SUPPORT_PASSIVE_EVENT && {
                                passive: !0
                            }),
                            n.options.hideVideoControlsOnLoad && n.hideControls(!1),
                            n.options.enableAutosize && n.media.addEventListener("loadedmetadata", function(e) {
                                var t = void 0 !== e ? e.detail.target || e.target : n.media;
                                n.options.videoHeight <= 0 && !n.domNode.getAttribute("height") && !n.domNode.style.height && null !== t && !isNaN(t.videoHeight) && (n.setPlayerSize(t.videoWidth, t.videoHeight),
                                n.setControlsSize(),
                                n.media.setSize(t.videoWidth, t.videoHeight))
                            })),
                            n.media.addEventListener("play", function() {
                                n.hasFocus = !0;
                                for (var e in d.default.players)
                                    if (d.default.players.hasOwnProperty(e)) {
                                        var t = d.default.players[e];
                                        t.id === n.id || !n.options.pauseOtherPlayers || t.paused || t.ended || (t.pause(),
                                        t.hasFocus = !1)
                                    }
                                p.IS_ANDROID || p.IS_IOS || n.options.alwaysShowControls || !n.isVideo || n.hideControls()
                            }),
                            n.media.addEventListener("ended", function() {
                                if (n.options.autoRewind)
                                    try {
                                        n.setCurrentTime(0),
                                        setTimeout(function() {
                                            var e = n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-loading");
                                            e && e.parentNode && (e.parentNode.style.display = "none")
                                        }, 20)
                                    } catch (e) {}
                                "function" == typeof n.media.renderer.stop ? n.media.renderer.stop() : n.pause(),
                                n.setProgressRail && n.setProgressRail(),
                                n.setCurrentRail && n.setCurrentRail(),
                                n.options.loop ? n.play() : !n.options.alwaysShowControls && n.controlsEnabled && n.showControls()
                            }),
                            n.media.addEventListener("loadedmetadata", function() {
                                (0,
                                h.calculateTimeFormat)(n.getDuration(), n.options, n.options.framesPerSecond || 25),
                                n.updateDuration && n.updateDuration(),
                                n.updateCurrent && n.updateCurrent(),
                                n.isFullScreen || (n.setPlayerSize(n.width, n.height),
                                n.setControlsSize())
                            });
                            var c = null;
                            n.media.addEventListener("timeupdate", function() {
                                isNaN(n.getDuration()) || c === n.getDuration() || (c = n.getDuration(),
                                (0,
                                h.calculateTimeFormat)(c, n.options, n.options.framesPerSecond || 25),
                                n.updateDuration && n.updateDuration(),
                                n.updateCurrent && n.updateCurrent(),
                                n.setControlsSize())
                            }),
                            n.getElement(n.container).addEventListener("click", function(e) {
                                g.addClass(e.currentTarget, n.options.classPrefix + "container-keyboard-inactive")
                            }),
                            n.getElement(n.container).addEventListener("focusin", function(e) {
                                g.removeClass(e.currentTarget, n.options.classPrefix + "container-keyboard-inactive"),
                                !n.isVideo || p.IS_ANDROID || p.IS_IOS || !n.controlsEnabled || n.options.alwaysShowControls || (n.killControlsTimer("enter"),
                                n.showControls(),
                                n.startControlsTimer(n.options.controlsTimeoutMouseEnter))
                            }),
                            n.getElement(n.container).addEventListener("focusout", function(e) {
                                setTimeout(function() {
                                    e.relatedTarget && n.keyboardAction && !e.relatedTarget.closest("." + n.options.classPrefix + "container") && (n.keyboardAction = !1,
                                    !n.isVideo || n.options.alwaysShowControls || n.paused || n.startControlsTimer(n.options.controlsTimeoutMouseLeave))
                                }, 0)
                            }),
                            setTimeout(function() {
                                n.setPlayerSize(n.width, n.height),
                                n.setControlsSize()
                            }, 0),
                            n.globalResizeCallback = function() {
                                n.isFullScreen || p.HAS_TRUE_NATIVE_FULLSCREEN && l.default.webkitIsFullScreen || n.setPlayerSize(n.width, n.height),
                                n.setControlsSize()
                            }
                            ,
                            n.globalBind("resize", n.globalResizeCallback)
                        }
                        i && r && n.play(),
                        n.options.success && ("string" == typeof n.options.success ? s.default[n.options.success](n.media, n.domNode, n) : n.options.success(n.media, n.domNode, n))
                    }
                }
            }, {
                key: "_handleError",
                value: function(e, t, n) {
                    var o = this
                      , i = o.getElement(o.layers).querySelector("." + o.options.classPrefix + "overlay-play");
                    i && (i.style.display = "none"),
                    o.options.error && o.options.error(e, t, n),
                    o.getElement(o.container).querySelector("." + o.options.classPrefix + "cannotplay") && o.getElement(o.container).querySelector("." + o.options.classPrefix + "cannotplay").remove();
                    var r = l.default.createElement("div");
                    r.className = o.options.classPrefix + "cannotplay",
                    r.style.width = "100%",
                    r.style.height = "100%";
                    var a = "function" == typeof o.options.customError ? o.options.customError(o.media, o.media.originalNode) : o.options.customError
                      , s = "";
                    if (!a) {
                        var u = o.media.originalNode.getAttribute("poster");
                        if (u && (s = '<img src="' + u + '" alt="' + d.default.i18n.t("mejs.download-file") + '">'),
                        e.message && (a = "<p>" + e.message + "</p>"),
                        e.urls)
                            for (var c = 0, f = e.urls.length; c < f; c++) {
                                var p = e.urls[c];
                                a += '<a href="' + p.src + '" data-type="' + p.type + '"><span>' + d.default.i18n.t("mejs.download-file") + ": " + p.src + "</span></a>"
                            }
                    }
                    a && o.getElement(o.layers).querySelector("." + o.options.classPrefix + "overlay-error") && (r.innerHTML = a,
                    o.getElement(o.layers).querySelector("." + o.options.classPrefix + "overlay-error").innerHTML = "" + s + r.outerHTML,
                    o.getElement(o.layers).querySelector("." + o.options.classPrefix + "overlay-error").parentNode.style.display = "block"),
                    o.controlsEnabled && o.disableControls()
                }
            }, {
                key: "setPlayerSize",
                value: function(e, t) {
                    var n = this;
                    if (!n.options.setDimensions)
                        return !1;
                    switch (void 0 !== e && (n.width = e),
                    void 0 !== t && (n.height = t),
                    n.options.stretching) {
                    case "fill":
                        n.isVideo ? n.setFillMode() : n.setDimensions(n.width, n.height);
                        break;
                    case "responsive":
                        n.setResponsiveMode();
                        break;
                    case "none":
                        n.setDimensions(n.width, n.height);
                        break;
                    default:
                        !0 === n.hasFluidMode() ? n.setResponsiveMode() : n.setDimensions(n.width, n.height)
                    }
                }
            }, {
                key: "hasFluidMode",
                value: function() {
                    var e = this;
                    return -1 !== e.height.toString().indexOf("%") || e.node && e.node.style.maxWidth && "none" !== e.node.style.maxWidth && e.node.style.maxWidth !== e.width || e.node && e.node.currentStyle && "100%" === e.node.currentStyle.maxWidth
                }
            }, {
                key: "setResponsiveMode",
                value: function() {
                    var e = this
                      , t = function() {
                        for (var t = void 0, n = e.getElement(e.container); n; ) {
                            try {
                                if (p.IS_FIREFOX && "html" === n.tagName.toLowerCase() && s.default.self !== s.default.top && null !== s.default.frameElement)
                                    return s.default.frameElement;
                                t = n.parentElement
                            } catch (e) {
                                t = n.parentElement
                            }
                            if (t && g.visible(t))
                                return t;
                            n = t
                        }
                        return null
                    }()
                      , n = t ? getComputedStyle(t, null) : getComputedStyle(l.default.body, null)
                      , o = e.isVideo ? e.media.videoWidth && e.media.videoWidth > 0 ? e.media.videoWidth : e.node.getAttribute("width") ? e.node.getAttribute("width") : e.options.defaultVideoWidth : e.options.defaultAudioWidth
                      , i = e.isVideo ? e.media.videoHeight && e.media.videoHeight > 0 ? e.media.videoHeight : e.node.getAttribute("height") ? e.node.getAttribute("height") : e.options.defaultVideoHeight : e.options.defaultAudioHeight
                      , r = function() {
                        var t = 1;
                        return e.isVideo ? (t = e.media.videoWidth && e.media.videoWidth > 0 && e.media.videoHeight && e.media.videoHeight > 0 ? e.height >= e.width ? e.media.videoWidth / e.media.videoHeight : e.media.videoHeight / e.media.videoWidth : e.initialAspectRatio,
                        (isNaN(t) || t < .01 || t > 100) && (t = 1),
                        t) : t
                    }()
                      , a = parseFloat(n.height)
                      , d = void 0
                      , u = parseFloat(n.width);
                    if (d = e.isVideo ? "100%" === e.height ? parseFloat(u * i / o, 10) : e.height >= e.width ? parseFloat(u / r, 10) : parseFloat(u * r, 10) : i,
                    isNaN(d) && (d = a),
                    e.getElement(e.container).parentNode.length > 0 && "body" === e.getElement(e.container).parentNode.tagName.toLowerCase() && (u = s.default.innerWidth || l.default.documentElement.clientWidth || l.default.body.clientWidth,
                    d = s.default.innerHeight || l.default.documentElement.clientHeight || l.default.body.clientHeight),
                    d && u) {
                        e.getElement(e.container).style.width = u + "px",
                        e.getElement(e.container).style.height = d + "px",
                        e.node.style.width = "100%",
                        e.node.style.height = "100%",
                        e.isVideo && e.media.setSize && e.media.setSize(u, d);
                        for (var c = e.getElement(e.layers).children, f = 0, m = c.length; f < m; f++)
                            c[f].style.width = "100%",
                            c[f].style.height = "100%"
                    }
                }
            }, {
                key: "setFillMode",
                value: function() {
                    var e = this
                      , t = s.default.self !== s.default.top && null !== s.default.frameElement
                      , n = function() {
                        for (var t = void 0, n = e.getElement(e.container); n; ) {
                            try {
                                if (p.IS_FIREFOX && "html" === n.tagName.toLowerCase() && s.default.self !== s.default.top && null !== s.default.frameElement)
                                    return s.default.frameElement;
                                t = n.parentElement
                            } catch (e) {
                                t = n.parentElement
                            }
                            if (t && g.visible(t))
                                return t;
                            n = t
                        }
                        return null
                    }()
                      , o = n ? getComputedStyle(n, null) : getComputedStyle(l.default.body, null);
                    "none" !== e.node.style.height && e.node.style.height !== e.height && (e.node.style.height = "auto"),
                    "none" !== e.node.style.maxWidth && e.node.style.maxWidth !== e.width && (e.node.style.maxWidth = "none"),
                    "none" !== e.node.style.maxHeight && e.node.style.maxHeight !== e.height && (e.node.style.maxHeight = "none"),
                    e.node.currentStyle && ("100%" === e.node.currentStyle.height && (e.node.currentStyle.height = "auto"),
                    "100%" === e.node.currentStyle.maxWidth && (e.node.currentStyle.maxWidth = "none"),
                    "100%" === e.node.currentStyle.maxHeight && (e.node.currentStyle.maxHeight = "none")),
                    t || parseFloat(o.width) || (n.style.width = e.media.offsetWidth + "px"),
                    t || parseFloat(o.height) || (n.style.height = e.media.offsetHeight + "px"),
                    o = getComputedStyle(n);
                    var i = parseFloat(o.width)
                      , r = parseFloat(o.height);
                    e.setDimensions("100%", "100%");
                    var a = e.getElement(e.container).querySelector("." + e.options.classPrefix + "poster>img");
                    a && (a.style.display = "");
                    for (var d = e.getElement(e.container).querySelectorAll("object, embed, iframe, video"), u = e.height, c = e.width, f = i, m = u * i / c, h = c * r / u, v = r, y = h > i == !1, E = y ? Math.floor(f) : Math.floor(h), b = y ? Math.floor(m) : Math.floor(v), S = y ? i + "px" : E + "px", x = y ? b + "px" : r + "px", w = 0, P = d.length; w < P; w++)
                        d[w].style.height = x,
                        d[w].style.width = S,
                        e.media.setSize && e.media.setSize(S, x),
                        d[w].style.marginLeft = Math.floor((i - E) / 2) + "px",
                        d[w].style.marginTop = 0
                }
            }, {
                key: "setDimensions",
                value: function(e, t) {
                    var n = this;
                    e = (0,
                    m.isString)(e) && e.indexOf("%") > -1 ? e : parseFloat(e) + "px",
                    t = (0,
                    m.isString)(t) && t.indexOf("%") > -1 ? t : parseFloat(t) + "px",
                    n.getElement(n.container).style.width = e,
                    n.getElement(n.container).style.height = t;
                    for (var o = n.getElement(n.layers).children, i = 0, r = o.length; i < r; i++)
                        o[i].style.width = e,
                        o[i].style.height = t
                }
            }, {
                key: "setControlsSize",
                value: function() {
                    var e = this;
                    if (g.visible(e.getElement(e.container)))
                        if (e.rail && g.visible(e.rail)) {
                            for (var t = e.total ? getComputedStyle(e.total, null) : null, n = t ? parseFloat(t.marginLeft) + parseFloat(t.marginRight) : 0, o = getComputedStyle(e.rail), i = parseFloat(o.marginLeft) + parseFloat(o.marginRight), r = 0, a = g.siblings(e.rail, function(t) {
                                return t !== e.rail
                            }), s = a.length, l = 0; l < s; l++)
                                r += a[l].offsetWidth;
                            r += n + (0 === n ? 2 * i : i) + 1,
                            e.getElement(e.container).style.minWidth = r + "px";
                            var d = (0,
                            m.createEvent)("controlsresize", e.getElement(e.container));
                            e.getElement(e.container).dispatchEvent(d)
                        } else {
                            for (var u = e.getElement(e.controls).children, c = 0, f = 0, p = u.length; f < p; f++)
                                c += u[f].offsetWidth;
                            e.getElement(e.container).style.minWidth = c + "px"
                        }
                }
            }, {
                key: "addControlElement",
                value: function(e, t) {
                    var n = this;
                    if (void 0 !== n.featurePosition[t]) {
                        var o = n.getElement(n.controls).children[n.featurePosition[t] - 1];
                        o.parentNode.insertBefore(e, o.nextSibling)
                    } else {
                        n.getElement(n.controls).appendChild(e);
                        for (var i = n.getElement(n.controls).children, r = 0, a = i.length; r < a; r++)
                            if (e === i[r]) {
                                n.featurePosition[t] = r;
                                break
                            }
                    }
                }
            }, {
                key: "createIframeLayer",
                value: function() {
                    var e = this;
                    if (e.isVideo && null !== e.media.rendererName && e.media.rendererName.indexOf("iframe") > -1 && !l.default.getElementById(e.media.id + "-iframe-overlay")) {
                        var t = l.default.createElement("div")
                          , n = l.default.getElementById(e.media.id + "_" + e.media.rendererName);
                        t.id = e.media.id + "-iframe-overlay",
                        t.className = e.options.classPrefix + "iframe-overlay",
                        t.addEventListener("click", function(t) {
                            e.options.clickToPlayPause && (e.paused ? e.play() : e.pause(),
                            t.preventDefault(),
                            t.stopPropagation())
                        }),
                        n.parentNode.insertBefore(t, n)
                    }
                }
            }, {
                key: "resetSize",
                value: function() {
                    var e = this;
                    setTimeout(function() {
                        e.setPlayerSize(e.width, e.height),
                        e.setControlsSize()
                    }, 50)
                }
            }, {
                key: "setPoster",
                value: function(e) {
                    var t = this;
                    if (t.getElement(t.container)) {
                        var n = t.getElement(t.container).querySelector("." + t.options.classPrefix + "poster");
                        n || ((n = l.default.createElement("div")).className = t.options.classPrefix + "poster " + t.options.classPrefix + "layer",
                        t.getElement(t.layers).appendChild(n));
                        var o = n.querySelector("img");
                        !o && e && ((o = l.default.createElement("img")).className = t.options.classPrefix + "poster-img",
                        o.width = "100%",
                        o.height = "100%",
                        n.style.display = "",
                        n.appendChild(o)),
                        e ? (o.setAttribute("src", e),
                        n.style.backgroundImage = 'url("' + e + '")',
                        n.style.display = "") : o ? (n.style.backgroundImage = "none",
                        n.style.display = "none",
                        o.remove()) : n.style.display = "none"
                    } else
                        (p.IS_IPAD && t.options.iPadUseNativeControls || p.IS_IPHONE && t.options.iPhoneUseNativeControls || p.IS_ANDROID && t.options.AndroidUseNativeControls) && (t.media.originalNode.poster = e)
                }
            }, {
                key: "changeSkin",
                value: function(e) {
                    var t = this;
                    t.getElement(t.container).className = t.options.classPrefix + "container " + e,
                    t.setPlayerSize(t.width, t.height),
                    t.setControlsSize()
                }
            }, {
                key: "globalBind",
                value: function(e, t) {
                    var n = this
                      , o = n.node ? n.node.ownerDocument : l.default;
                    if ((e = (0,
                    m.splitEvents)(e, n.id)).d)
                        for (var i = e.d.split(" "), r = 0, a = i.length; r < a; r++)
                            i[r].split(".").reduce(function(e, n) {
                                return o.addEventListener(n, t, !1),
                                n
                            }, "");
                    if (e.w)
                        for (var d = e.w.split(" "), u = 0, c = d.length; u < c; u++)
                            d[u].split(".").reduce(function(e, n) {
                                return s.default.addEventListener(n, t, !1),
                                n
                            }, "")
                }
            }, {
                key: "globalUnbind",
                value: function(e, t) {
                    var n = this
                      , o = n.node ? n.node.ownerDocument : l.default;
                    if ((e = (0,
                    m.splitEvents)(e, n.id)).d)
                        for (var i = e.d.split(" "), r = 0, a = i.length; r < a; r++)
                            i[r].split(".").reduce(function(e, n) {
                                return o.removeEventListener(n, t, !1),
                                n
                            }, "");
                    if (e.w)
                        for (var d = e.w.split(" "), u = 0, c = d.length; u < c; u++)
                            d[u].split(".").reduce(function(e, n) {
                                return s.default.removeEventListener(n, t, !1),
                                n
                            }, "")
                }
            }, {
                key: "buildfeatures",
                value: function(e, t, n, o) {
                    for (var i = this, r = 0, a = i.options.features.length; r < a; r++) {
                        var s = i.options.features[r];
                        if (i["build" + s])
                            try {
                                i["build" + s](e, t, n, o)
                            } catch (e) {
                                console.error("error building " + s, e)
                            }
                    }
                }
            }, {
                key: "buildposter",
                value: function(e, t, n, o) {
                    var i = this
                      , r = l.default.createElement("div");
                    r.className = i.options.classPrefix + "poster " + i.options.classPrefix + "layer",
                    n.appendChild(r);
                    var a = o.originalNode.getAttribute("poster");
                    "" !== e.options.poster && (a && p.IS_IOS && o.originalNode.removeAttribute("poster"),
                    a = e.options.poster),
                    a ? i.setPoster(a) : null !== i.media.renderer && "function" == typeof i.media.renderer.getPosterUrl ? i.setPoster(i.media.renderer.getPosterUrl()) : r.style.display = "none",
                    o.addEventListener("play", function() {
                        r.style.display = "none"
                    }),
                    o.addEventListener("playing", function() {
                        r.style.display = "none"
                    }),
                    e.options.showPosterWhenEnded && e.options.autoRewind && o.addEventListener("ended", function() {
                        r.style.display = ""
                    }),
                    o.addEventListener("error", function() {
                        r.style.display = "none"
                    }),
                    e.options.showPosterWhenPaused && o.addEventListener("pause", function() {
                        e.ended || (r.style.display = "")
                    })
                }
            }, {
                key: "buildoverlays",
                value: function(e, t, n, o) {
                    if (e.isVideo) {
                        var i = this
                          , r = l.default.createElement("div")
                          , a = l.default.createElement("div")
                          , s = l.default.createElement("div");
                        r.style.display = "none",
                        r.className = i.options.classPrefix + "overlay " + i.options.classPrefix + "layer",
                        r.innerHTML = '<div class="' + i.options.classPrefix + 'overlay-loading"><span class="' + i.options.classPrefix + 'overlay-loading-bg-img"></span></div>',
                        n.appendChild(r),
                        a.style.display = "none",
                        a.className = i.options.classPrefix + "overlay " + i.options.classPrefix + "layer",
                        a.innerHTML = '<div class="' + i.options.classPrefix + 'overlay-error"></div>',
                        n.appendChild(a),
                        s.className = i.options.classPrefix + "overlay " + i.options.classPrefix + "layer " + i.options.classPrefix + "overlay-play",
                        s.innerHTML = '<div class="' + i.options.classPrefix + 'overlay-button" role="button" tabindex="0" aria-label="' + f.default.t("mejs.play") + '" aria-pressed="false"></div>',
                        s.addEventListener("click", function() {
                            if (i.options.clickToPlayPause) {
                                var e = i.getElement(i.container).querySelector("." + i.options.classPrefix + "overlay-button")
                                  , t = e.getAttribute("aria-pressed");
                                i.paused ? i.play() : i.pause(),
                                e.setAttribute("aria-pressed", !!t),
                                i.getElement(i.container).focus()
                            }
                        }),
                        s.addEventListener("keydown", function(e) {
                            var t = e.keyCode || e.which || 0;
                            if (13 === t || p.IS_FIREFOX && 32 === t) {
                                var n = (0,
                                m.createEvent)("click", s);
                                return s.dispatchEvent(n),
                                !1
                            }
                        }),
                        n.appendChild(s),
                        null !== i.media.rendererName && (/(youtube|facebook)/i.test(i.media.rendererName) && !(i.media.originalNode.getAttribute("poster") || e.options.poster || "function" == typeof i.media.renderer.getPosterUrl && i.media.renderer.getPosterUrl()) || p.IS_STOCK_ANDROID || i.media.originalNode.getAttribute("autoplay")) && (s.style.display = "none");
                        var d = !1;
                        o.addEventListener("play", function() {
                            s.style.display = "none",
                            r.style.display = "none",
                            a.style.display = "none",
                            d = !1
                        }),
                        o.addEventListener("playing", function() {
                            s.style.display = "none",
                            r.style.display = "none",
                            a.style.display = "none",
                            d = !1
                        }),
                        o.addEventListener("seeking", function() {
                            s.style.display = "none",
                            r.style.display = "",
                            d = !1
                        }),
                        o.addEventListener("seeked", function() {
                            s.style.display = i.paused && !p.IS_STOCK_ANDROID ? "" : "none",
                            r.style.display = "none",
                            d = !1
                        }),
                        o.addEventListener("pause", function() {
                            r.style.display = "none",
                            p.IS_STOCK_ANDROID || d || (s.style.display = ""),
                            d = !1
                        }),
                        o.addEventListener("waiting", function() {
                            r.style.display = "",
                            d = !1
                        }),
                        o.addEventListener("loadeddata", function() {
                            r.style.display = "",
                            p.IS_ANDROID && (o.canplayTimeout = setTimeout(function() {
                                if (l.default.createEvent) {
                                    var e = l.default.createEvent("HTMLEvents");
                                    return e.initEvent("canplay", !0, !0),
                                    o.dispatchEvent(e)
                                }
                            }, 300)),
                            d = !1
                        }),
                        o.addEventListener("canplay", function() {
                            r.style.display = "none",
                            clearTimeout(o.canplayTimeout),
                            d = !1
                        }),
                        o.addEventListener("error", function(e) {
                            i._handleError(e, i.media, i.node),
                            r.style.display = "none",
                            s.style.display = "none",
                            d = !0
                        }),
                        o.addEventListener("loadedmetadata", function() {
                            i.controlsEnabled || i.enableControls()
                        }),
                        o.addEventListener("keydown", function(t) {
                            i.onkeydown(e, o, t),
                            d = !1
                        })
                    }
                }
            }, {
                key: "buildkeyboard",
                value: function(e, t, n, o) {
                    var i = this;
                    i.getElement(i.container).addEventListener("keydown", function() {
                        i.keyboardAction = !0
                    }),
                    i.globalKeydownCallback = function(t) {
                        var n = l.default.activeElement.closest("." + i.options.classPrefix + "container")
                          , r = i.media.closest("." + i.options.classPrefix + "container");
                        return i.hasFocus = !(!n || !r || n.id !== r.id),
                        i.onkeydown(e, o, t)
                    }
                    ,
                    i.globalClickCallback = function(e) {
                        i.hasFocus = !!e.target.closest("." + i.options.classPrefix + "container")
                    }
                    ,
                    i.globalBind("keydown", i.globalKeydownCallback),
                    i.globalBind("click", i.globalClickCallback)
                }
            }, {
                key: "onkeydown",
                value: function(e, t, n) {
                    if (e.hasFocus && e.options.enableKeyboard)
                        for (var o = 0, i = e.options.keyActions.length; o < i; o++)
                            for (var r = e.options.keyActions[o], a = 0, s = r.keys.length; a < s; a++)
                                if (n.keyCode === r.keys[a])
                                    return r.action(e, t, n.keyCode, n),
                                    n.preventDefault(),
                                    void n.stopPropagation();
                    return !0
                }
            }, {
                key: "play",
                value: function() {
                    this.proxy.play()
                }
            }, {
                key: "pause",
                value: function() {
                    this.proxy.pause()
                }
            }, {
                key: "load",
                value: function() {
                    this.proxy.load()
                }
            }, {
                key: "setCurrentTime",
                value: function(e) {
                    this.proxy.setCurrentTime(e)
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.proxy.currentTime
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.proxy.duration
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.proxy.volume = e
                }
            }, {
                key: "getVolume",
                value: function() {
                    return this.proxy.getVolume()
                }
            }, {
                key: "setMuted",
                value: function(e) {
                    this.proxy.setMuted(e)
                }
            }, {
                key: "setSrc",
                value: function(e) {
                    this.controlsEnabled || this.enableControls(),
                    this.proxy.setSrc(e)
                }
            }, {
                key: "getSrc",
                value: function() {
                    return this.proxy.getSrc()
                }
            }, {
                key: "canPlayType",
                value: function(e) {
                    return this.proxy.canPlayType(e)
                }
            }, {
                key: "remove",
                value: function() {
                    var e = this
                      , t = e.media.rendererName
                      , n = e.media.originalNode.src;
                    for (var o in e.options.features) {
                        var i = e.options.features[o];
                        if (e["clean" + i])
                            try {
                                e["clean" + i](e, e.getElement(e.layers), e.getElement(e.controls), e.media)
                            } catch (e) {
                                console.error("error cleaning " + i, e)
                            }
                    }
                    var a = e.node.getAttribute("width")
                      , s = e.node.getAttribute("height");
                    a ? -1 === a.indexOf("%") && (a += "px") : a = "auto",
                    s ? -1 === s.indexOf("%") && (s += "px") : s = "auto",
                    e.node.style.width = a,
                    e.node.style.height = s,
                    e.setPlayerSize(0, 0),
                    e.isDynamic ? e.getElement(e.container).parentNode.insertBefore(e.node, e.getElement(e.container)) : function() {
                        e.node.setAttribute("controls", !0),
                        e.node.setAttribute("id", e.node.getAttribute("id").replace("_" + t, "").replace("_from_mejs", ""));
                        var o = e.getElement(e.container).querySelector("." + e.options.classPrefix + "poster>img");
                        o && e.node.setAttribute("poster", o.src),
                        delete e.node.autoplay,
                        "" !== e.media.canPlayType((0,
                        v.getTypeFromFile)(n)) && e.node.setAttribute("src", n),
                        ~t.indexOf("iframe") && l.default.getElementById(e.media.id + "-iframe-overlay").remove();
                        var i = e.node.cloneNode();
                        if (i.style.display = "",
                        e.getElement(e.container).parentNode.insertBefore(i, e.getElement(e.container)),
                        e.node.remove(),
                        e.mediaFiles)
                            for (var r = 0, a = e.mediaFiles.length; r < a; r++) {
                                var s = l.default.createElement("source");
                                s.setAttribute("src", e.mediaFiles[r].src),
                                s.setAttribute("type", e.mediaFiles[r].type),
                                i.appendChild(s)
                            }
                        if (e.trackFiles)
                            for (var d = 0, u = e.trackFiles.length; d < u; d++)
                                !function(t, n) {
                                    var o = e.trackFiles[t]
                                      , r = l.default.createElement("track");
                                    r.kind = o.kind,
                                    r.label = o.label,
                                    r.srclang = o.srclang,
                                    r.src = o.src,
                                    i.appendChild(r),
                                    r.addEventListener("load", function() {
                                        this.mode = "showing",
                                        i.textTracks[t].mode = "showing"
                                    })
                                }(d);
                        delete e.node,
                        delete e.mediaFiles,
                        delete e.trackFiles
                    }(),
                    "function" == typeof e.media.renderer.destroy && e.media.renderer.destroy(),
                    delete d.default.players[e.id],
                    "object" === r(e.getElement(e.container)) && (e.getElement(e.container).parentNode.querySelector("." + e.options.classPrefix + "offscreen").remove(),
                    e.getElement(e.container).remove()),
                    e.globalUnbind("resize", e.globalResizeCallback),
                    e.globalUnbind("keydown", e.globalKeydownCallback),
                    e.globalUnbind("click", e.globalClickCallback),
                    delete e.media.player
                }
            }, {
                key: "paused",
                get: function() {
                    return this.proxy.paused
                }
            }, {
                key: "muted",
                get: function() {
                    return this.proxy.muted
                },
                set: function(e) {
                    this.setMuted(e)
                }
            }, {
                key: "ended",
                get: function() {
                    return this.proxy.ended
                }
            }, {
                key: "readyState",
                get: function() {
                    return this.proxy.readyState
                }
            }, {
                key: "currentTime",
                set: function(e) {
                    this.setCurrentTime(e)
                },
                get: function() {
                    return this.getCurrentTime()
                }
            }, {
                key: "duration",
                get: function() {
                    return this.getDuration()
                }
            }, {
                key: "volume",
                set: function(e) {
                    this.setVolume(e)
                },
                get: function() {
                    return this.getVolume()
                }
            }, {
                key: "src",
                set: function(e) {
                    this.setSrc(e)
                },
                get: function() {
                    return this.getSrc()
                }
            }]),
            e
        }();
        s.default.MediaElementPlayer = E,
        d.default.MediaElementPlayer = E,
        n.default = E
    }
    , {
        17: 17,
        2: 2,
        25: 25,
        26: 26,
        27: 27,
        28: 28,
        3: 3,
        30: 30,
        5: 5,
        6: 6,
        7: 7
    }],
    17: [function(e, t, n) {
        "use strict";
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }()
          , r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e(3))
          , a = function() {
            function e(t) {
                return o(this, e),
                this.media = t.media,
                this.isVideo = t.isVideo,
                this.classPrefix = t.options.classPrefix,
                this.createIframeLayer = function() {
                    return t.createIframeLayer()
                }
                ,
                this.setPoster = function(e) {
                    return t.setPoster(e)
                }
                ,
                this
            }
            return i(e, [{
                key: "play",
                value: function() {
                    this.media.play()
                }
            }, {
                key: "pause",
                value: function() {
                    this.media.pause()
                }
            }, {
                key: "load",
                value: function() {
                    var e = this;
                    e.isLoaded || e.media.load(),
                    e.isLoaded = !0
                }
            }, {
                key: "setCurrentTime",
                value: function(e) {
                    this.media.setCurrentTime(e)
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.media.currentTime
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.media.getDuration()
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.media.setVolume(e)
                }
            }, {
                key: "getVolume",
                value: function() {
                    return this.media.getVolume()
                }
            }, {
                key: "setMuted",
                value: function(e) {
                    this.media.setMuted(e)
                }
            }, {
                key: "setSrc",
                value: function(e) {
                    var t = this
                      , n = document.getElementById(t.media.id + "-iframe-overlay");
                    n && n.remove(),
                    t.media.setSrc(e),
                    t.createIframeLayer(),
                    null !== t.media.renderer && "function" == typeof t.media.renderer.getPosterUrl && t.setPoster(t.media.renderer.getPosterUrl())
                }
            }, {
                key: "getSrc",
                value: function() {
                    return this.media.getSrc()
                }
            }, {
                key: "canPlayType",
                value: function(e) {
                    return this.media.canPlayType(e)
                }
            }, {
                key: "paused",
                get: function() {
                    return this.media.paused
                }
            }, {
                key: "muted",
                set: function(e) {
                    this.setMuted(e)
                },
                get: function() {
                    return this.media.muted
                }
            }, {
                key: "ended",
                get: function() {
                    return this.media.ended
                }
            }, {
                key: "readyState",
                get: function() {
                    return this.media.readyState
                }
            }, {
                key: "currentTime",
                set: function(e) {
                    this.setCurrentTime(e)
                },
                get: function() {
                    return this.getCurrentTime()
                }
            }, {
                key: "duration",
                get: function() {
                    return this.getDuration()
                }
            }, {
                key: "volume",
                set: function(e) {
                    this.setVolume(e)
                },
                get: function() {
                    return this.getVolume()
                }
            }, {
                key: "src",
                set: function(e) {
                    this.setSrc(e)
                },
                get: function() {
                    return this.getSrc()
                }
            }]),
            e
        }();
        n.default = a,
        r.default.DefaultPlayer = a
    }
    , {
        3: 3
    }],
    18: [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(3))
          , r = o(e(7))
          , a = o(e(16));
        "undefined" != typeof jQuery ? r.default.$ = i.default.jQuery = i.default.$ = jQuery : "undefined" != typeof Zepto ? r.default.$ = i.default.Zepto = i.default.$ = Zepto : "undefined" != typeof ender && (r.default.$ = i.default.ender = i.default.$ = ender),
        function(e) {
            void 0 !== e && (e.fn.mediaelementplayer = function(t) {
                return !1 === t ? this.each(function() {
                    var t = e(this).data("mediaelementplayer");
                    t && t.remove(),
                    e(this).removeData("mediaelementplayer")
                }) : this.each(function() {
                    e(this).data("mediaelementplayer", new a.default(this,t))
                }),
                this
            }
            ,
            e(document).ready(function() {
                e("." + r.default.MepDefaults.classPrefix + "player").mediaelementplayer()
            }))
        }(r.default.$)
    }
    , {
        16: 16,
        3: 3,
        7: 7
    }],
    19: [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = o(e(3))
          , a = o(e(7))
          , s = e(8)
          , l = e(27)
          , d = e(28)
          , u = e(25)
          , c = e(26)
          , f = {
            promise: null,
            load: function(e) {
                return "undefined" != typeof dashjs ? f.promise = new Promise(function(e) {
                    e()
                }
                ).then(function() {
                    f._createPlayer(e)
                }) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdn.dashjs.org/latest/dash.all.min.js",
                f.promise = f.promise || (0,
                c.loadScript)(e.options.path),
                f.promise.then(function() {
                    f._createPlayer(e)
                })),
                f.promise
            },
            _createPlayer: function(e) {
                var t = dashjs.MediaPlayer().create();
                return r.default["__ready__" + e.id](t),
                t
            }
        }
          , p = {
            name: "native_dash",
            options: {
                prefix: "native_dash",
                dash: {
                    path: "https://cdn.dashjs.org/latest/dash.all.min.js",
                    debug: !1,
                    drm: {},
                    robustnessLevel: ""
                }
            },
            canPlayType: function(e) {
                return u.HAS_MSE && ["application/dash+xml"].indexOf(e.toLowerCase()) > -1
            },
            create: function(e, t, n) {
                var o = e.originalNode
                  , d = e.id + "_" + t.prefix
                  , u = o.autoplay
                  , c = o.children
                  , p = null
                  , m = null;
                o.removeAttribute("type");
                for (var h = 0, v = c.length; h < v; h++)
                    c[h].removeAttribute("type");
                p = o.cloneNode(!0),
                t = Object.assign(t, e.options);
                for (var g = a.default.html5media.properties, y = a.default.html5media.events.concat(["click", "mouseover", "mouseout"]), E = function(t) {
                    if ("error" !== t.type) {
                        var n = (0,
                        l.createEvent)(t.type, e);
                        e.dispatchEvent(n)
                    }
                }, b = 0, S = g.length; b < S; b++)
                    !function(e) {
                        var n = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
                        p["get" + n] = function() {
                            return null !== m ? p[e] : null
                        }
                        ,
                        p["set" + n] = function(n) {
                            if (-1 === a.default.html5media.readOnlyProperties.indexOf(e))
                                if ("src" === e) {
                                    var o = "object" === (void 0 === n ? "undefined" : i(n)) && n.src ? n.src : n;
                                    if (p[e] = o,
                                    null !== m) {
                                        m.reset();
                                        for (var r = 0, s = y.length; r < s; r++)
                                            p.removeEventListener(y[r], E);
                                        m = f._createPlayer({
                                            options: t.dash,
                                            id: d
                                        }),
                                        n && "object" === (void 0 === n ? "undefined" : i(n)) && "object" === i(n.drm) && (m.setProtectionData(n.drm),
                                        (0,
                                        l.isString)(t.dash.robustnessLevel) && t.dash.robustnessLevel && m.getProtectionController().setRobustnessLevel(t.dash.robustnessLevel)),
                                        m.attachSource(o),
                                        u && m.play()
                                    }
                                } else
                                    p[e] = n
                        }
                    }(g[b]);
                if (r.default["__ready__" + d] = function(n) {
                    e.dashPlayer = m = n;
                    for (var o = dashjs.MediaPlayer.events, r = 0, s = y.length; r < s; r++)
                        !function(e) {
                            "loadedmetadata" === e && (m.getDebug().setLogToBrowserConsole(t.dash.debug),
                            m.initialize(),
                            m.setScheduleWhilePaused(!1),
                            m.setFastSwitchEnabled(!0),
                            m.attachView(p),
                            m.setAutoPlay(!1),
                            "object" !== i(t.dash.drm) || a.default.Utils.isObjectEmpty(t.dash.drm) || (m.setProtectionData(t.dash.drm),
                            (0,
                            l.isString)(t.dash.robustnessLevel) && t.dash.robustnessLevel && m.getProtectionController().setRobustnessLevel(t.dash.robustnessLevel)),
                            m.attachSource(p.getSrc())),
                            p.addEventListener(e, E)
                        }(y[r]);
                    var d = function(t, n) {
                        if ("error" === t.toLowerCase())
                            e.generateError(n.message, p.src),
                            console.error(n);
                        else {
                            var o = (0,
                            l.createEvent)(t, e);
                            o.data = n,
                            e.dispatchEvent(o)
                        }
                    };
                    for (var u in o)
                        o.hasOwnProperty(u) && m.on(o[u], function(e) {
                            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                                n[o - 1] = arguments[o];
                            return d(e.type, n)
                        })
                }
                ,
                n && n.length > 0)
                    for (var x = 0, w = n.length; x < w; x++)
                        if (s.renderer.renderers[t.prefix].canPlayType(n[x].type)) {
                            p.setAttribute("src", n[x].src),
                            void 0 !== n[x].drm && (t.dash.drm = n[x].drm);
                            break
                        }
                p.setAttribute("id", d),
                o.parentNode.insertBefore(p, o),
                o.autoplay = !1,
                o.style.display = "none",
                p.setSize = function(e, t) {
                    return p.style.width = e + "px",
                    p.style.height = t + "px",
                    p
                }
                ,
                p.hide = function() {
                    return p.pause(),
                    p.style.display = "none",
                    p
                }
                ,
                p.show = function() {
                    return p.style.display = "",
                    p
                }
                ,
                p.destroy = function() {
                    null !== m && m.reset()
                }
                ;
                var P = (0,
                l.createEvent)("rendererready", p);
                return e.dispatchEvent(P),
                e.promises.push(f.load({
                    options: t.dash,
                    id: d
                })),
                p
            }
        };
        d.typeChecks.push(function(e) {
            return ~e.toLowerCase().indexOf(".mpd") ? "application/dash+xml" : null
        }),
        s.renderer.add(p)
    }
    , {
        25: 25,
        26: 26,
        27: 27,
        28: 28,
        3: 3,
        7: 7,
        8: 8
    }],
    20: [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.PluginDetector = void 0;
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = o(e(3))
          , a = o(e(2))
          , s = o(e(7))
          , l = o(e(5))
          , d = e(8)
          , u = e(27)
          , c = e(25)
          , f = e(28)
          , p = n.PluginDetector = {
            plugins: [],
            hasPluginVersion: function(e, t) {
                var n = p.plugins[e];
                return t[1] = t[1] || 0,
                t[2] = t[2] || 0,
                n[0] > t[0] || n[0] === t[0] && n[1] > t[1] || n[0] === t[0] && n[1] === t[1] && n[2] >= t[2]
            },
            addPlugin: function(e, t, n, o, i) {
                p.plugins[e] = p.detectPlugin(t, n, o, i)
            },
            detectPlugin: function(e, t, n, o) {
                var a = [0, 0, 0]
                  , s = void 0
                  , l = void 0;
                if (null !== c.NAV.plugins && void 0 !== c.NAV.plugins && "object" === i(c.NAV.plugins[e])) {
                    if ((s = c.NAV.plugins[e].description) && (void 0 === c.NAV.mimeTypes || !c.NAV.mimeTypes[t] || c.NAV.mimeTypes[t].enabledPlugin))
                        for (var d = 0, u = (a = s.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".")).length; d < u; d++)
                            a[d] = parseInt(a[d].match(/\d+/), 10)
                } else if (void 0 !== r.default.ActiveXObject)
                    try {
                        (l = new ActiveXObject(n)) && (a = o(l))
                    } catch (e) {}
                return a
            }
        };
        p.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(e) {
            var t = []
              , n = e.GetVariable("$version");
            return n && (n = n.split(" ")[1].split(","),
            t = [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10)]),
            t
        });
        var m = {
            create: function(e, t, n) {
                var o = {}
                  , i = !1;
                o.options = t,
                o.id = e.id + "_" + o.options.prefix,
                o.mediaElement = e,
                o.flashState = {},
                o.flashApi = null,
                o.flashApiStack = [];
                for (var p = s.default.html5media.properties, m = 0, h = p.length; m < h; m++)
                    !function(e) {
                        o.flashState[e] = null;
                        var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
                        o["get" + t] = function() {
                            if (null !== o.flashApi) {
                                if ("function" == typeof o.flashApi["get_" + e]) {
                                    var t = o.flashApi["get_" + e]();
                                    return "buffered" === e ? {
                                        start: function() {
                                            return 0
                                        },
                                        end: function() {
                                            return t
                                        },
                                        length: 1
                                    } : t
                                }
                                return null
                            }
                            return null
                        }
                        ,
                        o["set" + t] = function(t) {
                            if ("src" === e && (t = (0,
                            f.absolutizeUrl)(t)),
                            null !== o.flashApi && void 0 !== o.flashApi["set_" + e])
                                try {
                                    o.flashApi["set_" + e](t)
                                } catch (e) {}
                            else
                                o.flashApiStack.push({
                                    type: "set",
                                    propName: e,
                                    value: t
                                })
                        }
                    }(p[m]);
                var v = s.default.html5media.methods;
                v.push("stop");
                for (var g = 0, y = v.length; g < y; g++)
                    !function(e) {
                        o[e] = function() {
                            if (i)
                                if (null !== o.flashApi) {
                                    if (o.flashApi["fire_" + e])
                                        try {
                                            o.flashApi["fire_" + e]()
                                        } catch (e) {}
                                } else
                                    o.flashApiStack.push({
                                        type: "call",
                                        methodName: e
                                    })
                        }
                    }(v[g]);
                for (var E = ["rendererready"], b = 0, S = E.length; b < S; b++) {
                    var x = (0,
                    u.createEvent)(E[b], o);
                    e.dispatchEvent(x)
                }
                r.default["__ready__" + o.id] = function() {
                    if (o.flashReady = !0,
                    o.flashApi = a.default.getElementById("__" + o.id),
                    o.flashApiStack.length)
                        for (var e = 0, t = o.flashApiStack.length; e < t; e++) {
                            var n = o.flashApiStack[e];
                            if ("set" === n.type) {
                                var i = n.propName
                                  , r = "" + i.substring(0, 1).toUpperCase() + i.substring(1);
                                o["set" + r](n.value)
                            } else
                                "call" === n.type && o[n.methodName]()
                        }
                }
                ,
                r.default["__event__" + o.id] = function(e, t) {
                    var n = (0,
                    u.createEvent)(e, o);
                    if (t)
                        try {
                            n.data = JSON.parse(t),
                            n.details.data = JSON.parse(t)
                        } catch (e) {
                            n.message = t
                        }
                    o.mediaElement.dispatchEvent(n)
                }
                ,
                o.flashWrapper = a.default.createElement("div"),
                -1 === ["always", "sameDomain"].indexOf(o.options.shimScriptAccess) && (o.options.shimScriptAccess = "sameDomain");
                var w = e.originalNode.autoplay
                  , P = ["uid=" + o.id, "autoplay=" + w, "allowScriptAccess=" + o.options.shimScriptAccess, "preload=" + (e.originalNode.getAttribute("preload") || "")]
                  , T = null !== e.originalNode && "video" === e.originalNode.tagName.toLowerCase()
                  , C = T ? e.originalNode.height : 1
                  , k = T ? e.originalNode.width : 1;
                e.originalNode.getAttribute("src") && P.push("src=" + e.originalNode.getAttribute("src")),
                !0 === o.options.enablePseudoStreaming && (P.push("pseudostreamstart=" + o.options.pseudoStreamingStartQueryParam),
                P.push("pseudostreamtype=" + o.options.pseudoStreamingType)),
                o.options.streamDelimiter && P.push("streamdelimiter=" + encodeURIComponent(o.options.streamDelimiter)),
                o.options.proxyType && P.push("proxytype=" + o.options.proxyType),
                e.appendChild(o.flashWrapper),
                e.originalNode.style.display = "none";
                var _ = [];
                if (c.IS_IE || c.IS_EDGE) {
                    var N = a.default.createElement("div");
                    o.flashWrapper.appendChild(N),
                    _ = c.IS_EDGE ? ['type="application/x-shockwave-flash"', 'data="' + o.options.pluginPath + o.options.filename + '"', 'id="__' + o.id + '"', 'width="' + k + '"', 'height="' + C + "'\""] : ['classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"', 'codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"', 'id="__' + o.id + '"', 'width="' + k + '"', 'height="' + C + '"'],
                    T || _.push('style="clip: rect(0 0 0 0); position: absolute;"'),
                    N.outerHTML = "<object " + _.join(" ") + '><param name="movie" value="' + o.options.pluginPath + o.options.filename + "?x=" + new Date + '" /><param name="flashvars" value="' + P.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + o.options.shimScriptAccess + '" /><param name="allowFullScreen" value="true" /><div>' + l.default.t("mejs.install-flash") + "</div></object>"
                } else
                    _ = ['id="__' + o.id + '"', 'name="__' + o.id + '"', 'play="true"', 'loop="false"', 'quality="high"', 'bgcolor="#000000"', 'wmode="transparent"', 'allowScriptAccess="' + o.options.shimScriptAccess + '"', 'allowFullScreen="true"', 'type="application/x-shockwave-flash"', 'pluginspage="//www.macromedia.com/go/getflashplayer"', 'src="' + o.options.pluginPath + o.options.filename + '"', 'flashvars="' + P.join("&") + '"'],
                    T ? (_.push('width="' + k + '"'),
                    _.push('height="' + C + '"')) : _.push('style="position: fixed; left: -9999em; top: -9999em;"'),
                    o.flashWrapper.innerHTML = "<embed " + _.join(" ") + ">";
                if (o.flashNode = o.flashWrapper.lastChild,
                o.hide = function() {
                    i = !1,
                    T && (o.flashNode.style.display = "none")
                }
                ,
                o.show = function() {
                    i = !0,
                    T && (o.flashNode.style.display = "")
                }
                ,
                o.setSize = function(e, t) {
                    o.flashNode.style.width = e + "px",
                    o.flashNode.style.height = t + "px",
                    null !== o.flashApi && "function" == typeof o.flashApi.fire_setSize && o.flashApi.fire_setSize(e, t)
                }
                ,
                o.destroy = function() {
                    o.flashNode.remove()
                }
                ,
                n && n.length > 0)
                    for (var A = 0, L = n.length; A < L; A++)
                        if (d.renderer.renderers[t.prefix].canPlayType(n[A].type)) {
                            o.setSrc(n[A].src);
                            break
                        }
                return o
            }
        };
        if (p.hasPluginVersion("flash", [10, 0, 0])) {
            f.typeChecks.push(function(e) {
                return (e = e.toLowerCase()).startsWith("rtmp") ? ~e.indexOf(".mp3") ? "audio/rtmp" : "video/rtmp" : /\.og(a|g)/i.test(e) ? "audio/ogg" : ~e.indexOf(".m3u8") ? "application/x-mpegURL" : ~e.indexOf(".mpd") ? "application/dash+xml" : ~e.indexOf(".flv") ? "video/flv" : null
            });
            var h = {
                name: "flash_video",
                options: {
                    prefix: "flash_video",
                    filename: "mediaelement-flash-video.swf",
                    enablePseudoStreaming: !1,
                    pseudoStreamingStartQueryParam: "start",
                    pseudoStreamingType: "byte",
                    proxyType: "",
                    streamDelimiter: ""
                },
                canPlayType: function(e) {
                    return ~["video/mp4", "video/rtmp", "audio/rtmp", "rtmp/mp4", "audio/mp4", "video/flv", "video/x-flv"].indexOf(e.toLowerCase())
                },
                create: m.create
            };
            d.renderer.add(h);
            var v = {
                name: "flash_hls",
                options: {
                    prefix: "flash_hls",
                    filename: "mediaelement-flash-video-hls.swf"
                },
                canPlayType: function(e) {
                    return ~["application/x-mpegurl", "application/vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase())
                },
                create: m.create
            };
            d.renderer.add(v);
            var g = {
                name: "flash_dash",
                options: {
                    prefix: "flash_dash",
                    filename: "mediaelement-flash-video-mdash.swf"
                },
                canPlayType: function(e) {
                    return ~["application/dash+xml"].indexOf(e.toLowerCase())
                },
                create: m.create
            };
            d.renderer.add(g);
            var y = {
                name: "flash_audio",
                options: {
                    prefix: "flash_audio",
                    filename: "mediaelement-flash-audio.swf"
                },
                canPlayType: function(e) {
                    return ~["audio/mp3"].indexOf(e.toLowerCase())
                },
                create: m.create
            };
            d.renderer.add(y);
            var E = {
                name: "flash_audio_ogg",
                options: {
                    prefix: "flash_audio_ogg",
                    filename: "mediaelement-flash-audio-ogg.swf"
                },
                canPlayType: function(e) {
                    return ~["audio/ogg", "audio/oga", "audio/ogv"].indexOf(e.toLowerCase())
                },
                create: m.create
            };
            d.renderer.add(E)
        }
    }
    , {
        2: 2,
        25: 25,
        27: 27,
        28: 28,
        3: 3,
        5: 5,
        7: 7,
        8: 8
    }],
    21: [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = o(e(3))
          , a = o(e(7))
          , s = e(8)
          , l = e(27)
          , d = e(25)
          , u = e(28)
          , c = e(26)
          , f = {
            promise: null,
            load: function(e) {
                return "undefined" != typeof flvjs ? f.promise = new Promise(function(e) {
                    e()
                }
                ).then(function() {
                    f._createPlayer(e)
                }) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.3.3/flv.min.js",
                f.promise = f.promise || (0,
                c.loadScript)(e.options.path),
                f.promise.then(function() {
                    f._createPlayer(e)
                })),
                f.promise
            },
            _createPlayer: function(e) {
                flvjs.LoggingControl.enableDebug = e.options.debug,
                flvjs.LoggingControl.enableVerbose = e.options.debug;
                var t = flvjs.createPlayer(e.options, e.configs);
                return r.default["__ready__" + e.id](t),
                t
            }
        }
          , p = {
            name: "native_flv",
            options: {
                prefix: "native_flv",
                flv: {
                    path: "https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.3.3/flv.min.js",
                    cors: !0,
                    debug: !1
                }
            },
            canPlayType: function(e) {
                return d.HAS_MSE && ["video/x-flv", "video/flv"].indexOf(e.toLowerCase()) > -1
            },
            create: function(e, t, n) {
                var o = e.originalNode
                  , d = e.id + "_" + t.prefix
                  , u = null
                  , c = null;
                u = o.cloneNode(!0),
                t = Object.assign(t, e.options);
                for (var p = a.default.html5media.properties, m = a.default.html5media.events.concat(["click", "mouseover", "mouseout"]), h = function(t) {
                    if ("error" !== t.type) {
                        var n = (0,
                        l.createEvent)(t.type, e);
                        e.dispatchEvent(n)
                    }
                }, v = 0, g = p.length; v < g; v++)
                    !function(e) {
                        var n = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
                        u["get" + n] = function() {
                            return null !== c ? u[e] : null
                        }
                        ,
                        u["set" + n] = function(n) {
                            if (-1 === a.default.html5media.readOnlyProperties.indexOf(e))
                                if ("src" === e) {
                                    if (u[e] = "object" === (void 0 === n ? "undefined" : i(n)) && n.src ? n.src : n,
                                    null !== c) {
                                        var o = {};
                                        o.type = "flv",
                                        o.url = n,
                                        o.cors = t.flv.cors,
                                        o.debug = t.flv.debug,
                                        o.path = t.flv.path;
                                        var r = t.flv.configs;
                                        c.destroy();
                                        for (var s = 0, l = m.length; s < l; s++)
                                            u.removeEventListener(m[s], h);
                                        (c = f._createPlayer({
                                            options: o,
                                            configs: r,
                                            id: d
                                        })).attachMediaElement(u),
                                        c.load()
                                    }
                                } else
                                    u[e] = n
                        }
                    }(p[v]);
                if (r.default["__ready__" + d] = function(t) {
                    e.flvPlayer = c = t;
                    for (var n = flvjs.Events, o = 0, i = m.length; o < i; o++)
                        !function(e) {
                            "loadedmetadata" === e && (c.unload(),
                            c.detachMediaElement(),
                            c.attachMediaElement(u),
                            c.load()),
                            u.addEventListener(e, h)
                        }(m[o]);
                    var r = function(t, n) {
                        if ("error" === t) {
                            var o = n[0] + ": " + n[1] + " " + n[2].msg;
                            e.generateError(o, u.src)
                        } else {
                            var i = (0,
                            l.createEvent)(t, e);
                            i.data = n,
                            e.dispatchEvent(i)
                        }
                    };
                    for (var a in n)
                        !function(e) {
                            n.hasOwnProperty(e) && c.on(n[e], function() {
                                for (var t = arguments.length, o = Array(t), i = 0; i < t; i++)
                                    o[i] = arguments[i];
                                return r(n[e], o)
                            })
                        }(a)
                }
                ,
                n && n.length > 0)
                    for (var y = 0, E = n.length; y < E; y++)
                        if (s.renderer.renderers[t.prefix].canPlayType(n[y].type)) {
                            u.setAttribute("src", n[y].src);
                            break
                        }
                u.setAttribute("id", d),
                o.parentNode.insertBefore(u, o),
                o.autoplay = !1,
                o.style.display = "none";
                var b = {};
                b.type = "flv",
                b.url = u.src,
                b.cors = t.flv.cors,
                b.debug = t.flv.debug,
                b.path = t.flv.path;
                var S = t.flv.configs;
                u.setSize = function(e, t) {
                    return u.style.width = e + "px",
                    u.style.height = t + "px",
                    u
                }
                ,
                u.hide = function() {
                    return null !== c && c.pause(),
                    u.style.display = "none",
                    u
                }
                ,
                u.show = function() {
                    return u.style.display = "",
                    u
                }
                ,
                u.destroy = function() {
                    null !== c && c.destroy()
                }
                ;
                var x = (0,
                l.createEvent)("rendererready", u);
                return e.dispatchEvent(x),
                e.promises.push(f.load({
                    options: b,
                    configs: S,
                    id: d
                })),
                u
            }
        };
        u.typeChecks.push(function(e) {
            return ~e.toLowerCase().indexOf(".flv") ? "video/flv" : null
        }),
        s.renderer.add(p)
    }
    , {
        25: 25,
        26: 26,
        27: 27,
        28: 28,
        3: 3,
        7: 7,
        8: 8
    }],
    22: [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , r = o(e(3))
          , a = o(e(7))
          , s = e(8)
          , l = e(27)
          , d = e(25)
          , u = e(28)
          , c = e(26)
          , f = {
            promise: null,
            load: function(e) {
                return "undefined" != typeof Hls ? f.promise = new Promise(function(e) {
                    e()
                }
                ).then(function() {
                    f._createPlayer(e)
                }) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.8.4/hls.min.js",
                f.promise = f.promise || (0,
                c.loadScript)(e.options.path),
                f.promise.then(function() {
                    f._createPlayer(e)
                })),
                f.promise
            },
            _createPlayer: function(e) {
                var t = new Hls(e.options);
                return r.default["__ready__" + e.id](t),
                t
            }
        }
          , p = {
            name: "native_hls",
            options: {
                prefix: "native_hls",
                hls: {
                    path: "https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.8.4/hls.min.js",
                    autoStartLoad: !1,
                    debug: !1
                }
            },
            canPlayType: function(e) {
                return d.HAS_MSE && ["application/x-mpegurl", "application/vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase()) > -1
            },
            create: function(e, t, n) {
                var o = e.originalNode
                  , d = e.id + "_" + t.prefix
                  , u = o.getAttribute("preload")
                  , c = o.autoplay
                  , p = null
                  , m = null
                  , h = 0
                  , v = n.length;
                m = o.cloneNode(!0),
                (t = Object.assign(t, e.options)).hls.autoStartLoad = u && "none" !== u || c;
                for (var g = a.default.html5media.properties, y = a.default.html5media.events.concat(["click", "mouseover", "mouseout"]), E = function(t) {
                    if ("error" !== t.type) {
                        var n = (0,
                        l.createEvent)(t.type, e);
                        e.dispatchEvent(n)
                    }
                }, b = 0, S = g.length; b < S; b++)
                    !function(e) {
                        var n = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
                        m["get" + n] = function() {
                            return null !== p ? m[e] : null
                        }
                        ,
                        m["set" + n] = function(n) {
                            if (-1 === a.default.html5media.readOnlyProperties.indexOf(e))
                                if ("src" === e) {
                                    if (m[e] = "object" === (void 0 === n ? "undefined" : i(n)) && n.src ? n.src : n,
                                    null !== p) {
                                        p.destroy();
                                        for (var o = 0, r = y.length; o < r; o++)
                                            m.removeEventListener(y[o], E);
                                        (p = f._createPlayer({
                                            options: t.hls,
                                            id: d
                                        })).loadSource(n),
                                        p.attachMedia(m)
                                    }
                                } else
                                    m[e] = n
                        }
                    }(g[b]);
                if (r.default["__ready__" + d] = function(t) {
                    e.hlsPlayer = p = t;
                    for (var o = Hls.Events, i = 0, r = y.length; i < r; i++)
                        !function(t) {
                            if ("loadedmetadata" === t) {
                                var n = e.originalNode.src;
                                p.detachMedia(),
                                p.loadSource(n),
                                p.attachMedia(m)
                            }
                            m.addEventListener(t, E)
                        }(y[i]);
                    var a = void 0
                      , s = void 0
                      , d = function(t, o) {
                        if ("hlsError" === t) {
                            if (console.warn(o),
                            (o = o[1]).fatal)
                                switch (o.type) {
                                case "mediaError":
                                    var i = (new Date).getTime();
                                    if (!a || i - a > 3e3)
                                        a = (new Date).getTime(),
                                        p.recoverMediaError();
                                    else if (!s || i - s > 3e3)
                                        s = (new Date).getTime(),
                                        console.warn("Attempting to swap Audio Codec and recover from media error"),
                                        p.swapAudioCodec(),
                                        p.recoverMediaError();
                                    else {
                                        var r = "Cannot recover, last media error recovery failed";
                                        e.generateError(r, m.src),
                                        console.error(r)
                                    }
                                    break;
                                case "networkError":
                                    if ("manifestLoadError" === o.details)
                                        if (h < v && void 0 !== n[h + 1])
                                            m.setSrc(n[h++].src),
                                            m.load(),
                                            m.play();
                                        else {
                                            e.generateError("Network error", n),
                                            console.error("Network error")
                                        }
                                    else {
                                        e.generateError("Network error", n),
                                        console.error("Network error")
                                    }
                                    break;
                                default:
                                    p.destroy()
                                }
                        } else {
                            var d = (0,
                            l.createEvent)(t, e);
                            d.data = o,
                            e.dispatchEvent(d)
                        }
                    };
                    for (var u in o)
                        !function(e) {
                            o.hasOwnProperty(e) && p.on(o[e], function() {
                                for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                                    n[i] = arguments[i];
                                return d(o[e], n)
                            })
                        }(u)
                }
                ,
                v > 0)
                    for (; h < v; h++)
                        if (s.renderer.renderers[t.prefix].canPlayType(n[h].type)) {
                            m.setAttribute("src", n[h].src);
                            break
                        }
                "auto" === u || c || (m.addEventListener("play", function() {
                    null !== p && p.startLoad()
                }),
                m.addEventListener("pause", function() {
                    null !== p && p.stopLoad()
                })),
                m.setAttribute("id", d),
                o.parentNode.insertBefore(m, o),
                o.autoplay = !1,
                o.style.display = "none",
                m.setSize = function(e, t) {
                    return m.style.width = e + "px",
                    m.style.height = t + "px",
                    m
                }
                ,
                m.hide = function() {
                    return m.pause(),
                    m.style.display = "none",
                    m
                }
                ,
                m.show = function() {
                    return m.style.display = "",
                    m
                }
                ,
                m.destroy = function() {
                    null !== p && (p.stopLoad(),
                    p.destroy())
                }
                ;
                var x = (0,
                l.createEvent)("rendererready", m);
                return e.dispatchEvent(x),
                e.promises.push(f.load({
                    options: t.hls,
                    id: d
                })),
                m
            }
        };
        u.typeChecks.push(function(e) {
            return ~e.toLowerCase().indexOf(".m3u8") ? "application/x-mpegURL" : null
        }),
        s.renderer.add(p)
    }
    , {
        25: 25,
        26: 26,
        27: 27,
        28: 28,
        3: 3,
        7: 7,
        8: 8
    }],
    23: [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(3))
          , r = o(e(2))
          , a = o(e(7))
          , s = e(8)
          , l = e(27)
          , d = e(25)
          , u = {
            name: "html5",
            options: {
                prefix: "html5"
            },
            canPlayType: function(e) {
                var t = r.default.createElement("video");
                return d.IS_ANDROID && /\/mp(3|4)$/i.test(e) || ~["application/x-mpegurl", "vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase()) && d.SUPPORTS_NATIVE_HLS ? "yes" : t.canPlayType ? t.canPlayType(e.toLowerCase()).replace(/no/, "") : ""
            },
            create: function(e, t, n) {
                var o = e.id + "_" + t.prefix
                  , i = !1
                  , d = null;
                void 0 === e.originalNode || null === e.originalNode ? (d = r.default.createElement("audio"),
                e.appendChild(d)) : d = e.originalNode,
                d.setAttribute("id", o);
                for (var u = a.default.html5media.properties, c = 0, f = u.length; c < f; c++)
                    !function(e) {
                        var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
                        d["get" + t] = function() {
                            return d[e]
                        }
                        ,
                        d["set" + t] = function(t) {
                            -1 === a.default.html5media.readOnlyProperties.indexOf(e) && (d[e] = t)
                        }
                    }(u[c]);
                for (var p = a.default.html5media.events.concat(["click", "mouseover", "mouseout"]), m = 0, h = p.length; m < h; m++)
                    !function(t) {
                        d.addEventListener(t, function(t) {
                            if (i) {
                                var n = (0,
                                l.createEvent)(t.type, t.target);
                                e.dispatchEvent(n)
                            }
                        })
                    }(p[m]);
                d.setSize = function(e, t) {
                    return d.style.width = e + "px",
                    d.style.height = t + "px",
                    d
                }
                ,
                d.hide = function() {
                    return i = !1,
                    d.style.display = "none",
                    d
                }
                ,
                d.show = function() {
                    return i = !0,
                    d.style.display = "",
                    d
                }
                ;
                var v = 0
                  , g = n.length;
                if (g > 0)
                    for (; v < g; v++)
                        if (s.renderer.renderers[t.prefix].canPlayType(n[v].type)) {
                            d.setAttribute("src", n[v].src);
                            break
                        }
                d.addEventListener("error", function(t) {
                    4 === t.target.error.code && i && (v < g && void 0 !== n[v + 1] ? (d.src = n[v++].src,
                    d.load(),
                    d.play()) : e.generateError("Media error: Format(s) not supported or source(s) not found", n))
                });
                var y = (0,
                l.createEvent)("rendererready", d);
                return e.dispatchEvent(y),
                d
            }
        };
        i.default.HtmlMediaElement = a.default.HtmlMediaElement = u,
        s.renderer.add(u)
    }
    , {
        2: 2,
        25: 25,
        27: 27,
        3: 3,
        7: 7,
        8: 8
    }],
    24: [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(3))
          , r = o(e(2))
          , a = o(e(7))
          , s = e(8)
          , l = e(27)
          , d = e(28)
          , u = e(26)
          , c = {
            isIframeStarted: !1,
            isIframeLoaded: !1,
            iframeQueue: [],
            enqueueIframe: function(e) {
                c.isLoaded = "undefined" != typeof YT && YT.loaded,
                c.isLoaded ? c.createIframe(e) : (c.loadIframeApi(),
                c.iframeQueue.push(e))
            },
            loadIframeApi: function() {
                c.isIframeStarted || ((0,
                u.loadScript)("https://www.youtube.com/player_api"),
                c.isIframeStarted = !0)
            },
            iFrameReady: function() {
                for (c.isLoaded = !0,
                c.isIframeLoaded = !0; c.iframeQueue.length > 0; ) {
                    var e = c.iframeQueue.pop();
                    c.createIframe(e)
                }
            },
            createIframe: function(e) {
                return new YT.Player(e.containerId,e)
            },
            getYouTubeId: function(e) {
                var t = "";
                return e.indexOf("?") > 0 ? "" === (t = c.getYouTubeIdFromParam(e)) && (t = c.getYouTubeIdFromUrl(e)) : t = c.getYouTubeIdFromUrl(e),
                (t = t.substring(t.lastIndexOf("/") + 1).split("?"))[0]
            },
            getYouTubeIdFromParam: function(e) {
                if (void 0 === e || null === e || !e.trim().length)
                    return null;
                for (var t = e.split("?")[1].split("&"), n = "", o = 0, i = t.length; o < i; o++) {
                    var r = t[o].split("=");
                    if ("v" === r[0]) {
                        n = r[1];
                        break
                    }
                }
                return n
            },
            getYouTubeIdFromUrl: function(e) {
                return void 0 !== e && null !== e && e.trim().length ? (e = e.split("?")[0]).substring(e.lastIndexOf("/") + 1) : null
            },
            getYouTubeNoCookieUrl: function(e) {
                if (void 0 === e || null === e || !e.trim().length || -1 === e.indexOf("//www.youtube"))
                    return e;
                var t = e.split("/");
                return t[2] = t[2].replace(".com", "-nocookie.com"),
                t.join("/")
            }
        }
          , f = {
            name: "youtube_iframe",
            options: {
                prefix: "youtube_iframe",
                youtube: {
                    autoplay: 0,
                    controls: 0,
                    disablekb: 1,
                    end: 0,
                    loop: 0,
                    modestbranding: 0,
                    playsinline: 0,
                    rel: 0,
                    showinfo: 0,
                    start: 0,
                    iv_load_policy: 3,
                    nocookie: !1,
                    imageQuality: null
                }
            },
            canPlayType: function(e) {
                return ~["video/youtube", "video/x-youtube"].indexOf(e.toLowerCase())
            },
            create: function(e, t, n) {
                var o = {}
                  , s = []
                  , d = null
                  , u = !0
                  , f = !1
                  , p = null
                  , m = 1;
                o.options = t,
                o.id = e.id + "_" + t.prefix,
                o.mediaElement = e;
                for (var h = a.default.html5media.properties, v = 0, g = h.length; v < g; v++)
                    !function(t) {
                        var n = "" + t.substring(0, 1).toUpperCase() + t.substring(1);
                        o["get" + n] = function() {
                            if (null !== d) {
                                switch (t) {
                                case "currentTime":
                                    return d.getCurrentTime();
                                case "duration":
                                    return d.getDuration();
                                case "volume":
                                    return m = d.getVolume() / 100;
                                case "paused":
                                    return u;
                                case "ended":
                                    return f;
                                case "muted":
                                    return d.isMuted();
                                case "buffered":
                                    var e = d.getVideoLoadedFraction()
                                      , n = d.getDuration();
                                    return {
                                        start: function() {
                                            return 0
                                        },
                                        end: function() {
                                            return e * n
                                        },
                                        length: 1
                                    };
                                case "src":
                                    return d.getVideoUrl();
                                case "readyState":
                                    return 4
                                }
                                return null
                            }
                            return null
                        }
                        ,
                        o["set" + n] = function(n) {
                            if (null !== d)
                                switch (t) {
                                case "src":
                                    var i = "string" == typeof n ? n : n[0].src
                                      , r = c.getYouTubeId(i);
                                    e.originalNode.autoplay ? d.loadVideoById(r) : d.cueVideoById(r);
                                    break;
                                case "currentTime":
                                    d.seekTo(n);
                                    break;
                                case "muted":
                                    n ? d.mute() : d.unMute(),
                                    setTimeout(function() {
                                        var t = (0,
                                        l.createEvent)("volumechange", o);
                                        e.dispatchEvent(t)
                                    }, 50);
                                    break;
                                case "volume":
                                    m = n,
                                    d.setVolume(100 * n),
                                    setTimeout(function() {
                                        var t = (0,
                                        l.createEvent)("volumechange", o);
                                        e.dispatchEvent(t)
                                    }, 50);
                                    break;
                                case "readyState":
                                    var a = (0,
                                    l.createEvent)("canplay", o);
                                    e.dispatchEvent(a)
                                }
                            else
                                s.push({
                                    type: "set",
                                    propName: t,
                                    value: n
                                })
                        }
                    }(h[v]);
                for (var y = a.default.html5media.methods, E = 0, b = y.length; E < b; E++)
                    !function(e) {
                        o[e] = function() {
                            if (null !== d)
                                switch (e) {
                                case "play":
                                    return u = !1,
                                    d.playVideo();
                                case "pause":
                                    return u = !0,
                                    d.pauseVideo();
                                case "load":
                                    return null
                                }
                            else
                                s.push({
                                    type: "call",
                                    methodName: e
                                })
                        }
                    }(y[E]);
                var S = r.default.createElement("div");
                S.id = o.id,
                o.options.youtube.nocookie && (e.originalNode.src = c.getYouTubeNoCookieUrl(n[0].src)),
                e.originalNode.parentNode.insertBefore(S, e.originalNode),
                e.originalNode.style.display = "none";
                var x = "audio" === e.originalNode.tagName.toLowerCase()
                  , w = x ? "1" : e.originalNode.height
                  , P = x ? "1" : e.originalNode.width
                  , T = c.getYouTubeId(n[0].src)
                  , C = {
                    id: o.id,
                    containerId: S.id,
                    videoId: T,
                    height: w,
                    width: P,
                    playerVars: Object.assign({
                        controls: 0,
                        rel: 0,
                        disablekb: 1,
                        showinfo: 0,
                        modestbranding: 0,
                        html5: 1,
                        iv_load_policy: 3
                    }, o.options.youtube),
                    origin: i.default.location.host,
                    events: {
                        onReady: function(t) {
                            if (e.youTubeApi = d = t.target,
                            e.youTubeState = {
                                paused: !0,
                                ended: !1
                            },
                            s.length)
                                for (var n = 0, i = s.length; n < i; n++) {
                                    var r = s[n];
                                    if ("set" === r.type) {
                                        var a = r.propName
                                          , u = "" + a.substring(0, 1).toUpperCase() + a.substring(1);
                                        o["set" + u](r.value)
                                    } else
                                        "call" === r.type && o[r.methodName]()
                                }
                            p = d.getIframe(),
                            e.originalNode.muted && d.mute();
                            for (var c = ["mouseover", "mouseout"], f = 0, m = c.length; f < m; f++)
                                p.addEventListener(c[f], function(t) {
                                    var n = (0,
                                    l.createEvent)(t.type, o);
                                    e.dispatchEvent(n)
                                }, !1);
                            for (var h = ["rendererready", "loadedmetadata", "loadeddata", "canplay"], v = 0, g = h.length; v < g; v++) {
                                var y = (0,
                                l.createEvent)(h[v], o);
                                e.dispatchEvent(y)
                            }
                        },
                        onStateChange: function(t) {
                            var n = [];
                            switch (t.data) {
                            case -1:
                                n = ["loadedmetadata"],
                                u = !0,
                                f = !1;
                                break;
                            case 0:
                                n = ["ended"],
                                u = !1,
                                f = !o.options.youtube.loop,
                                o.options.youtube.loop || o.stopInterval();
                                break;
                            case 1:
                                n = ["play", "playing"],
                                u = !1,
                                f = !1,
                                o.startInterval();
                                break;
                            case 2:
                                n = ["pause"],
                                u = !0,
                                f = !1,
                                o.stopInterval();
                                break;
                            case 3:
                                n = ["progress"],
                                f = !1;
                                break;
                            case 5:
                                n = ["loadeddata", "loadedmetadata", "canplay"],
                                u = !0,
                                f = !1
                            }
                            for (var i = 0, r = n.length; i < r; i++) {
                                var a = (0,
                                l.createEvent)(n[i], o);
                                e.dispatchEvent(a)
                            }
                        },
                        onError: function(t) {
                            var n = (0,
                            l.createEvent)("error", o);
                            n.data = t.data,
                            e.dispatchEvent(n)
                        }
                    }
                };
                return (x || e.originalNode.hasAttribute("playsinline")) && (C.playerVars.playsinline = 1),
                e.originalNode.controls && (C.playerVars.controls = 1),
                e.originalNode.autoplay && (C.playerVars.autoplay = 1),
                e.originalNode.loop && (C.playerVars.loop = 1),
                c.enqueueIframe(C),
                o.onEvent = function(t, n, o) {
                    null !== o && void 0 !== o && (e.youTubeState = o)
                }
                ,
                o.setSize = function(e, t) {
                    null !== d && d.setSize(e, t)
                }
                ,
                o.hide = function() {
                    o.stopInterval(),
                    o.pause(),
                    p && (p.style.display = "none")
                }
                ,
                o.show = function() {
                    p && (p.style.display = "")
                }
                ,
                o.destroy = function() {
                    d.destroy()
                }
                ,
                o.interval = null,
                o.startInterval = function() {
                    o.interval = setInterval(function() {
                        var t = (0,
                        l.createEvent)("timeupdate", o);
                        e.dispatchEvent(t)
                    }, 250)
                }
                ,
                o.stopInterval = function() {
                    o.interval && clearInterval(o.interval)
                }
                ,
                o.getPosterUrl = function() {
                    var n = t.youtube.imageQuality
                      , o = ["default", "hqdefault", "mqdefault", "sddefault", "maxresdefault"]
                      , i = c.getYouTubeId(e.originalNode.src);
                    return n && o.indexOf(n) > -1 && i ? "https://img.youtube.com/vi/" + i + "/" + n + ".jpg" : ""
                }
                ,
                o
            }
        };
        i.default.onYouTubePlayerAPIReady = function() {
            c.iFrameReady()
        }
        ,
        d.typeChecks.push(function(e) {
            return /\/\/(www\.youtube|youtu\.?be)/i.test(e) ? "video/x-youtube" : null
        }),
        s.renderer.add(f)
    }
    , {
        2: 2,
        26: 26,
        27: 27,
        28: 28,
        3: 3,
        7: 7,
        8: 8
    }],
    25: [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.cancelFullScreen = n.requestFullScreen = n.isFullScreen = n.FULLSCREEN_EVENT_NAME = n.HAS_NATIVE_FULLSCREEN_ENABLED = n.HAS_TRUE_NATIVE_FULLSCREEN = n.HAS_IOS_FULLSCREEN = n.HAS_MS_NATIVE_FULLSCREEN = n.HAS_MOZ_NATIVE_FULLSCREEN = n.HAS_WEBKIT_NATIVE_FULLSCREEN = n.HAS_NATIVE_FULLSCREEN = n.SUPPORTS_NATIVE_HLS = n.SUPPORT_PASSIVE_EVENT = n.SUPPORT_POINTER_EVENTS = n.HAS_MSE = n.IS_STOCK_ANDROID = n.IS_SAFARI = n.IS_FIREFOX = n.IS_CHROME = n.IS_EDGE = n.IS_IE = n.IS_ANDROID = n.IS_IOS = n.IS_IPOD = n.IS_IPHONE = n.IS_IPAD = n.UA = n.NAV = void 0;
        for (var i = o(e(3)), r = o(e(2)), a = o(e(7)), s = n.NAV = i.default.navigator, l = n.UA = s.userAgent.toLowerCase(), d = n.IS_IPAD = /ipad/i.test(l) && !i.default.MSStream, u = n.IS_IPHONE = /iphone/i.test(l) && !i.default.MSStream, c = n.IS_IPOD = /ipod/i.test(l) && !i.default.MSStream, f = (n.IS_IOS = /ipad|iphone|ipod/i.test(l) && !i.default.MSStream,
        n.IS_ANDROID = /android/i.test(l)), p = n.IS_IE = /(trident|microsoft)/i.test(s.appName), m = (n.IS_EDGE = "msLaunchUri"in s && !("documentMode"in r.default)), h = n.IS_CHROME = /chrome/i.test(l), v = n.IS_FIREFOX = /firefox/i.test(l), g = n.IS_SAFARI = /safari/i.test(l) && !h, y = n.IS_STOCK_ANDROID = /^mozilla\/\d+\.\d+\s\(linux;\su;/i.test(l), E = (n.HAS_MSE = "MediaSource"in i.default), b = n.SUPPORT_POINTER_EVENTS = function() {
            var e = r.default.createElement("x")
              , t = r.default.documentElement
              , n = i.default.getComputedStyle;
            if (!("pointerEvents"in e.style))
                return !1;
            e.style.pointerEvents = "auto",
            e.style.pointerEvents = "x",
            t.appendChild(e);
            var o = n && "auto" === n(e, "").pointerEvents;
            return e.remove(),
            !!o
        }(), S = n.SUPPORT_PASSIVE_EVENT = function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                i.default.addEventListener("test", null, t)
            } catch (e) {}
            return e
        }(), x = ["source", "track", "audio", "video"], w = void 0, P = 0, T = x.length; P < T; P++)
            w = r.default.createElement(x[P]);
        var C = n.SUPPORTS_NATIVE_HLS = g || f && (h || y) || p && /edge/i.test(l)
          , k = void 0 !== w.webkitEnterFullscreen
          , _ = void 0 !== w.requestFullscreen;
        k && /mac os x 10_5/i.test(l) && (_ = !1,
        k = !1);
        var N = void 0 !== w.webkitRequestFullScreen
          , A = void 0 !== w.mozRequestFullScreen
          , L = void 0 !== w.msRequestFullscreen
          , F = N || A || L
          , j = F
          , I = ""
          , M = void 0
          , O = void 0
          , D = void 0;
        A ? j = r.default.mozFullScreenEnabled : L && (j = r.default.msFullscreenEnabled),
        h && (k = !1),
        F && (N ? I = "webkitfullscreenchange" : A ? I = "mozfullscreenchange" : L && (I = "MSFullscreenChange"),
        n.isFullScreen = M = function() {
            return A ? r.default.mozFullScreen : N ? r.default.webkitIsFullScreen : L ? null !== r.default.msFullscreenElement : void 0
        }
        ,
        n.requestFullScreen = O = function(e) {
            N ? e.webkitRequestFullScreen() : A ? e.mozRequestFullScreen() : L && e.msRequestFullscreen()
        }
        ,
        n.cancelFullScreen = D = function() {
            N ? r.default.webkitCancelFullScreen() : A ? r.default.mozCancelFullScreen() : L && r.default.msExitFullscreen()
        }
        );
        var R = n.HAS_NATIVE_FULLSCREEN = _
          , V = n.HAS_WEBKIT_NATIVE_FULLSCREEN = N
          , H = n.HAS_MOZ_NATIVE_FULLSCREEN = A
          , U = n.HAS_MS_NATIVE_FULLSCREEN = L
          , q = n.HAS_IOS_FULLSCREEN = k
          , B = n.HAS_TRUE_NATIVE_FULLSCREEN = F
          , z = n.HAS_NATIVE_FULLSCREEN_ENABLED = j
          , W = n.FULLSCREEN_EVENT_NAME = I;
        n.isFullScreen = M,
        n.requestFullScreen = O,
        n.cancelFullScreen = D,
        a.default.Features = a.default.Features || {},
        a.default.Features.isiPad = d,
        a.default.Features.isiPod = c,
        a.default.Features.isiPhone = u,
        a.default.Features.isiOS = a.default.Features.isiPhone || a.default.Features.isiPad,
        a.default.Features.isAndroid = f,
        a.default.Features.isIE = p,
        a.default.Features.isEdge = m,
        a.default.Features.isChrome = h,
        a.default.Features.isFirefox = v,
        a.default.Features.isSafari = g,
        a.default.Features.isStockAndroid = y,
        a.default.Features.hasMSE = E,
        a.default.Features.supportsNativeHLS = C,
        a.default.Features.supportsPointerEvents = b,
        a.default.Features.supportsPassiveEvent = S,
        a.default.Features.hasiOSFullScreen = q,
        a.default.Features.hasNativeFullscreen = R,
        a.default.Features.hasWebkitNativeFullScreen = V,
        a.default.Features.hasMozNativeFullScreen = H,
        a.default.Features.hasMsNativeFullScreen = U,
        a.default.Features.hasTrueNativeFullScreen = B,
        a.default.Features.nativeFullScreenEnabled = z,
        a.default.Features.fullScreenEventName = W,
        a.default.Features.isFullScreen = M,
        a.default.Features.requestFullScreen = O,
        a.default.Features.cancelFullScreen = D
    }
    , {
        2: 2,
        3: 3,
        7: 7
    }],
    26: [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function i(e) {
            return new Promise(function(t, n) {
                var o = p.default.createElement("script");
                o.src = e,
                o.async = !0,
                o.onload = function() {
                    o.remove(),
                    t()
                }
                ,
                o.onerror = function() {
                    o.remove(),
                    n()
                }
                ,
                p.default.head.appendChild(o)
            }
            )
        }
        function r(e) {
            var t = e.getBoundingClientRect()
              , n = f.default.pageXOffset || p.default.documentElement.scrollLeft
              , o = f.default.pageYOffset || p.default.documentElement.scrollTop;
            return {
                top: t.top + o,
                left: t.left + n
            }
        }
        function a(e, t) {
            y(e, t) ? b(e, t) : E(e, t)
        }
        function s(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 400
              , n = arguments[2];
            e.style.opacity || (e.style.opacity = 1);
            var o = null;
            f.default.requestAnimationFrame(function i(r) {
                var a = r - (o = o || r)
                  , s = parseFloat(1 - a / t, 2);
                e.style.opacity = s < 0 ? 0 : s,
                a > t ? n && "function" == typeof n && n() : f.default.requestAnimationFrame(i)
            })
        }
        function l(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 400
              , n = arguments[2];
            e.style.opacity || (e.style.opacity = 0);
            var o = null;
            f.default.requestAnimationFrame(function i(r) {
                var a = r - (o = o || r)
                  , s = parseFloat(a / t, 2);
                e.style.opacity = s > 1 ? 1 : s,
                a > t ? n && "function" == typeof n && n() : f.default.requestAnimationFrame(i)
            })
        }
        function d(e, t) {
            var n = [];
            e = e.parentNode.firstChild;
            do {
                t && !t(e) || n.push(e)
            } while (e = e.nextSibling);return n
        }
        function u(e) {
            return void 0 !== e.getClientRects && "function" === e.getClientRects ? !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) : !(!e.offsetWidth && !e.offsetHeight)
        }
        function c(e, t, n, o) {
            var i = f.default.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
              , r = "application/x-www-form-urlencoded; charset=UTF-8"
              , a = !1
              , s = "*/".concat("*");
            switch (t) {
            case "text":
                r = "text/plain";
                break;
            case "json":
                r = "application/json, text/javascript";
                break;
            case "html":
                r = "text/html";
                break;
            case "xml":
                r = "application/xml, text/xml"
            }
            "application/x-www-form-urlencoded" !== r && (s = r + ", */*; q=0.01"),
            i && (i.open("GET", e, !0),
            i.setRequestHeader("Accept", s),
            i.onreadystatechange = function() {
                if (!a && 4 === i.readyState)
                    if (200 === i.status) {
                        a = !0;
                        var e = void 0;
                        switch (t) {
                        case "json":
                            e = JSON.parse(i.responseText);
                            break;
                        case "xml":
                            e = i.responseXML;
                            break;
                        default:
                            e = i.responseText
                        }
                        n(e)
                    } else
                        "function" == typeof o && o(i.status)
            }
            ,
            i.send())
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.removeClass = n.addClass = n.hasClass = void 0,
        n.loadScript = i,
        n.offset = r,
        n.toggleClass = a,
        n.fadeOut = s,
        n.fadeIn = l,
        n.siblings = d,
        n.visible = u,
        n.ajax = c;
        var f = o(e(3))
          , p = o(e(2))
          , m = o(e(7))
          , h = void 0
          , v = void 0
          , g = void 0;
        "classList"in p.default.documentElement ? (h = function(e, t) {
            return void 0 !== e.classList && e.classList.contains(t)
        }
        ,
        v = function(e, t) {
            return e.classList.add(t)
        }
        ,
        g = function(e, t) {
            return e.classList.remove(t)
        }
        ) : (h = function(e, t) {
            return new RegExp("\\b" + t + "\\b").test(e.className)
        }
        ,
        v = function(e, t) {
            y(e, t) || (e.className += " " + t)
        }
        ,
        g = function(e, t) {
            e.className = e.className.replace(new RegExp("\\b" + t + "\\b","g"), "")
        }
        );
        var y = n.hasClass = h
          , E = n.addClass = v
          , b = n.removeClass = g;
        m.default.Utils = m.default.Utils || {},
        m.default.Utils.offset = r,
        m.default.Utils.hasClass = y,
        m.default.Utils.addClass = E,
        m.default.Utils.removeClass = b,
        m.default.Utils.toggleClass = a,
        m.default.Utils.fadeIn = l,
        m.default.Utils.fadeOut = s,
        m.default.Utils.siblings = d,
        m.default.Utils.visible = u,
        m.default.Utils.ajax = c,
        m.default.Utils.loadScript = i
    }
    , {
        2: 2,
        3: 3,
        7: 7
    }],
    27: [function(e, t, n) {
        "use strict";
        function o(e) {
            if ("string" != typeof e)
                throw new Error("Argument passed must be a string");
            var t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;"
            };
            return e.replace(/[&<>"]/g, function(e) {
                return t[e]
            })
        }
        function i(e, t) {
            var n = this
              , o = arguments
              , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if ("function" != typeof e)
                throw new Error("First argument must be a function");
            if ("number" != typeof t)
                throw new Error("Second argument must be a numeric value");
            var r = void 0;
            return function() {
                var a = n
                  , s = o
                  , l = i && !r;
                clearTimeout(r),
                r = setTimeout(function() {
                    r = null,
                    i || e.apply(a, s)
                }, t),
                l && e.apply(a, s)
            }
        }
        function r(e) {
            return Object.getOwnPropertyNames(e).length <= 0
        }
        function a(e, t) {
            var n = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/
              , o = {
                d: [],
                w: []
            };
            return (e || "").split(" ").forEach(function(e) {
                var i = e + (t ? "." + t : "");
                i.startsWith(".") ? (o.d.push(i),
                o.w.push(i)) : o[n.test(e) ? "w" : "d"].push(i)
            }),
            o.d = o.d.join(" "),
            o.w = o.w.join(" "),
            o
        }
        function s(e, t) {
            if ("string" != typeof e)
                throw new Error("Event name must be a string");
            var n = e.match(/([a-z]+\.([a-z]+))/i)
              , o = {
                target: t
            };
            return null !== n && (e = n[1],
            o.namespace = n[2]),
            new window.CustomEvent(e,{
                detail: o
            })
        }
        function l(e, t) {
            return !!(e && t && 2 & e.compareDocumentPosition(t))
        }
        function d(e) {
            return "string" == typeof e
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.escapeHTML = o,
        n.debounce = i,
        n.isObjectEmpty = r,
        n.splitEvents = a,
        n.createEvent = s,
        n.isNodeAfter = l,
        n.isString = d;
        var u = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e(7));
        u.default.Utils = u.default.Utils || {},
        u.default.Utils.escapeHTML = o,
        u.default.Utils.debounce = i,
        u.default.Utils.isObjectEmpty = r,
        u.default.Utils.splitEvents = a,
        u.default.Utils.createEvent = s,
        u.default.Utils.isNodeAfter = l,
        u.default.Utils.isString = d
    }
    , {
        7: 7
    }],
    28: [function(e, t, n) {
        "use strict";
        function o(e) {
            if ("string" != typeof e)
                throw new Error("`url` argument must be a string");
            var t = document.createElement("div");
            return t.innerHTML = '<a href="' + (0,
            u.escapeHTML)(e) + '">x</a>',
            t.firstChild.href
        }
        function i(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return e && !t ? a(e) : t
        }
        function r(e) {
            if ("string" != typeof e)
                throw new Error("`type` argument must be a string");
            return e && e.indexOf(";") > -1 ? e.substr(0, e.indexOf(";")) : e
        }
        function a(e) {
            if ("string" != typeof e)
                throw new Error("`url` argument must be a string");
            for (var t = 0, n = c.length; t < n; t++) {
                var o = c[t](e);
                if (o)
                    return o
            }
            var i = l(s(e))
              , r = "video/mp4";
            return i && (~["mp4", "m4v", "ogg", "ogv", "webm", "flv", "mpeg", "mov"].indexOf(i) ? r = "video/" + i : ~["mp3", "oga", "wav", "mid", "midi"].indexOf(i) && (r = "audio/" + i)),
            r
        }
        function s(e) {
            if ("string" != typeof e)
                throw new Error("`url` argument must be a string");
            var t = e.split("?")[0].split("\\").pop().split("/").pop();
            return ~t.indexOf(".") ? t.substring(t.lastIndexOf(".") + 1) : ""
        }
        function l(e) {
            if ("string" != typeof e)
                throw new Error("`extension` argument must be a string");
            switch (e) {
            case "mp4":
            case "m4v":
                return "mp4";
            case "webm":
            case "webma":
            case "webmv":
                return "webm";
            case "ogg":
            case "oga":
            case "ogv":
                return "ogg";
            default:
                return e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.typeChecks = void 0,
        n.absolutizeUrl = o,
        n.formatType = i,
        n.getMimeFromType = r,
        n.getTypeFromFile = a,
        n.getExtension = s,
        n.normalizeExtension = l;
        var d = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e(7))
          , u = e(27)
          , c = n.typeChecks = [];
        d.default.Utils = d.default.Utils || {},
        d.default.Utils.typeChecks = c,
        d.default.Utils.absolutizeUrl = o,
        d.default.Utils.formatType = i,
        d.default.Utils.getMimeFromType = r,
        d.default.Utils.getTypeFromFile = a,
        d.default.Utils.getExtension = s,
        d.default.Utils.normalizeExtension = l
    }
    , {
        27: 27,
        7: 7
    }],
    29: [function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(2))
          , r = o(e(4));
        if ([Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function(e) {
            e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function() {
                    this.parentNode.removeChild(this)
                }
            })
        }),
        function() {
            function e(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var n = i.default.createEvent("CustomEvent");
                return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
                n
            }
            if ("function" == typeof window.CustomEvent)
                return !1;
            e.prototype = window.Event.prototype,
            window.CustomEvent = e
        }(),
        "function" != typeof Object.assign && (Object.assign = function(e) {
            if (null === e || void 0 === e)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), n = 1, o = arguments.length; n < o; n++) {
                var i = arguments[n];
                if (null !== i)
                    for (var r in i)
                        Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
            }
            return t
        }
        ),
        String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
            return t = t || 0,
            this.substr(t, e.length) === e
        }
        ),
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
            for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length - 1; --n >= 0 && t.item(n) !== this; )
                ;
            return n > -1
        }
        ),
        window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
            var t = (this.document || this.ownerDocument).querySelectorAll(e)
              , n = void 0
              , o = this;
            do {
                for (n = t.length; --n >= 0 && t.item(n) !== o; )
                    ;
            } while (n < 0 && (o = o.parentElement));return o
        }
        ),
        function() {
            for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n)
                window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"],
                window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
                var n = (new Date).getTime()
                  , o = Math.max(0, 16 - (n - e))
                  , i = window.setTimeout(function() {
                    t(n + o)
                }, o);
                return e = n + o,
                i
            }
            ),
            window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                clearTimeout(e)
            }
            )
        }(),
        /firefox/i.test(navigator.userAgent)) {
            var a = window.getComputedStyle;
            window.getComputedStyle = function(e, t) {
                var n = a(e, t);
                return null === n ? {
                    getPropertyValue: function() {}
                } : n
            }
        }
        window.Promise || (window.Promise = r.default),
        function(e) {
            e && e.prototype && null === e.prototype.children && Object.defineProperty(e.prototype, "children", {
                get: function() {
                    for (var e = 0, t = void 0, n = this.childNodes, o = []; t = n[e++]; )
                        1 === t.nodeType && o.push(t);
                    return o
                }
            })
        }(window.Node || window.Element)
    }
    , {
        2: 2,
        4: 4
    }],
    30: [function(e, t, n) {
        "use strict";
        function o() {
            return !((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25) % 1 == 0)
        }
        function i(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 25
              , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
              , a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "mm:ss";
            e = !e || "number" != typeof e || e < 0 ? 0 : e;
            var s = Math.round(.066666 * i)
              , l = Math.round(i)
              , d = 24 * Math.round(3600 * i)
              , u = Math.round(600 * i)
              , c = o(i) ? ";" : ":"
              , f = void 0
              , p = void 0
              , m = void 0
              , h = void 0
              , v = Math.round(e * i);
            if (o(i)) {
                v < 0 && (v = d + v);
                var g = (v %= d) % u;
                v += 9 * s * Math.floor(v / u),
                g > s && (v += s * Math.floor((g - s) / Math.round(60 * l - s)));
                var y = Math.floor(v / l);
                f = Math.floor(Math.floor(y / 60) / 60),
                p = Math.floor(y / 60) % 60,
                m = n ? y % 60 : (v / l % 60).toFixed(r)
            } else
                f = Math.floor(e / 3600) % 24,
                p = Math.floor(e / 60) % 60,
                m = n ? Math.floor(e % 60) : (e % 60).toFixed(r);
            f = f <= 0 ? 0 : f,
            p = p <= 0 ? 0 : p,
            m = m <= 0 ? 0 : m;
            for (var E = a.split(":"), b = {}, S = 0, x = E.length; S < x; ++S) {
                for (var w = "", P = 0, T = E[S].length; P < T; P++)
                    w.indexOf(E[S][P]) < 0 && (w += E[S][P]);
                ~["f", "s", "m", "h"].indexOf(w) && (b[w] = E[S].length)
            }
            var C = t || f > 0 ? (f < 10 && b.h > 1 ? "0" + f : f) + ":" : "";
            return C += (p < 10 && b.m > 1 ? "0" + p : p) + ":",
            C += "" + (m < 10 && b.s > 1 ? "0" + m : m),
            n && (C += (h = (h = (v % l).toFixed(0)) <= 0 ? 0 : h) < 10 && b.f ? c + "0" + h : "" + c + h),
            C
        }
        function r(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 25;
            if ("string" != typeof e)
                throw new TypeError("Time must be a string");
            if (e.indexOf(";") > 0 && (e = e.replace(";", ":")),
            !/\d{2}(\:\d{2}){0,3}/i.test(e))
                throw new TypeError("Time code must have the format `00:00:00`");
            var n = e.split(":")
              , i = void 0
              , r = 0
              , a = 0
              , s = 0
              , l = 0
              , d = 0
              , u = Math.round(.066666 * t)
              , c = Math.round(t)
              , f = 3600 * c
              , p = 60 * c;
            switch (n.length) {
            default:
            case 1:
                s = parseInt(n[0], 10);
                break;
            case 2:
                a = parseInt(n[0], 10),
                s = parseInt(n[1], 10);
                break;
            case 3:
                r = parseInt(n[0], 10),
                a = parseInt(n[1], 10),
                s = parseInt(n[2], 10);
                break;
            case 4:
                r = parseInt(n[0], 10),
                a = parseInt(n[1], 10),
                s = parseInt(n[2], 10),
                l = parseInt(n[3], 10)
            }
            return i = o(t) ? f * r + p * a + c * s + l - u * ((d = 60 * r + a) - Math.floor(d / 10)) : (f * r + p * a + t * s + l) / t,
            parseFloat(i.toFixed(3))
        }
        function a(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 25;
            e = !e || "number" != typeof e || e < 0 ? 0 : e;
            for (var o = Math.floor(e / 3600) % 24, i = Math.floor(e / 60) % 60, r = Math.floor(e % 60), a = [[Math.floor((e % 1 * n).toFixed(3)), "f"], [r, "s"], [i, "m"], [o, "h"]], s = t.timeFormat, l = s[1] === s[0], d = l ? 2 : 1, u = s.length < d ? s[d] : ":", c = s[0], f = !1, p = 0, m = a.length; p < m; p++)
                if (~s.indexOf(a[p][1]))
                    f = !0;
                else if (f) {
                    for (var h = !1, v = p; v < m; v++)
                        if (a[v][0] > 0) {
                            h = !0;
                            break
                        }
                    if (!h)
                        break;
                    l || (s = c + s),
                    s = a[p][1] + u + s,
                    l && (s = a[p][1] + s),
                    c = a[p][1]
                }
            t.timeFormat = s
        }
        function s(e) {
            if ("string" != typeof e)
                throw new TypeError("Argument must be a string value");
            for (var t = ~(e = e.replace(",", ".")).indexOf(".") ? e.split(".")[1].length : 0, n = 0, o = 1, i = 0, r = (e = e.split(":").reverse()).length; i < r; i++)
                o = 1,
                i > 0 && (o = Math.pow(60, i)),
                n += Number(e[i]) * o;
            return Number(n.toFixed(t))
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.isDropFrame = o,
        n.secondsToTimeCode = i,
        n.timeCodeToSeconds = r,
        n.calculateTimeFormat = a,
        n.convertSMPTEtoSeconds = s;
        var l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e(7));
        l.default.Utils = l.default.Utils || {},
        l.default.Utils.secondsToTimeCode = i,
        l.default.Utils.timeCodeToSeconds = r,
        l.default.Utils.calculateTimeFormat = a,
        l.default.Utils.convertSMPTEtoSeconds = s
    }
    , {
        7: 7
    }]
}, {}, [29, 6, 5, 15, 23, 20, 19, 21, 22, 24, 16, 18, 17, 9, 10, 11, 12, 13, 14]);
!function(a, b) {
    void 0 === mejs.plugins && (mejs.plugins = {},
    mejs.plugins.silverlight = [],
    mejs.plugins.silverlight.push({
        types: []
    })),
    mejs.HtmlMediaElementShim = mejs.HtmlMediaElementShim || {
        getTypeFromFile: mejs.Utils.getTypeFromFile
    },
    void 0 === mejs.MediaFeatures && (mejs.MediaFeatures = mejs.Features),
    void 0 === mejs.Utility && (mejs.Utility = mejs.Utils);
    var c = MediaElementPlayer.prototype.init;
    MediaElementPlayer.prototype.init = function() {
        this.options.classPrefix = "mejs-",
        this.$media = this.$node = b(this.node),
        c.call(this)
    }
    ;
    var d = MediaElementPlayer.prototype._meReady;
    MediaElementPlayer.prototype._meReady = function() {
        this.container = b(this.container),
        this.controls = b(this.controls),
        this.layers = b(this.layers),
        d.apply(this, arguments)
    }
    ,
    MediaElementPlayer.prototype.getElement = function(a) {
        return void 0 !== b && a instanceof b ? a[0] : a
    }
    ,
    MediaElementPlayer.prototype.buildfeatures = function(a, c, d, e) {
        for (var f = ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"], g = 0, h = this.options.features.length; g < h; g++) {
            var i = this.options.features[g];
            if (this["build" + i])
                try {
                    f.indexOf(i) === -1 ? this["build" + i](a, b(c), b(d), e) : this["build" + i](a, c, d, e)
                } catch (j) {
                    console.error("error building " + i, j)
                }
        }
    }
}(window, jQuery);
!function(a, b) {
    function c() {
        function a() {
            "undefined" != typeof _wpmejsSettings && (c = b.extend(!0, {}, _wpmejsSettings)),
            c.classPrefix = "mejs-",
            c.success = c.success || function(a) {
                var b, c;
                a.rendererName && -1 !== a.rendererName.indexOf("flash") && (b = a.attributes.autoplay && "false" !== a.attributes.autoplay,
                c = a.attributes.loop && "false" !== a.attributes.loop,
                b && a.addEventListener("canplay", function() {
                    a.play()
                }, !1),
                c && a.addEventListener("ended", function() {
                    a.play()
                }, !1))
            }
            ,
            c.customError = function(a, b) {
                if (-1 !== a.rendererName.indexOf("flash") || -1 !== a.rendererName.indexOf("flv"))
                    return '<a href="' + b.src + '">' + mejsL10n.strings["mejs.download-video"] + "</a>"
            }
            ,
            b(".wp-audio-shortcode, .wp-video-shortcode").not(".mejs-container").filter(function() {
                return !b(this).parent().hasClass("mejs-mediaelement")
            }).mediaelementplayer(c)
        }
        var c = {};
        return {
            initialize: a
        }
    }
    a.wp = a.wp || {},
    a.wp.mediaelement = new c,
    b(a.wp.mediaelement.initialize)
}(window, jQuery);
var ak_js = document.getElementById("ak_js");
if (!ak_js) {
    ak_js = document.createElement('input');
    ak_js.setAttribute('id', 'ak_js');
    ak_js.setAttribute('name', 'ak_js');
    ak_js.setAttribute('type', 'hidden');
} else {
    ak_js.parentNode.removeChild(ak_js);
}
ak_js.setAttribute('value', (new Date()).getTime());
var commentForm = document.getElementById('commentform');
if (commentForm) {
    commentForm.appendChild(ak_js);
} else {
    var replyRowContainer = document.getElementById('replyrow');
    if (replyRowContainer) {
        var children = replyRowContainer.getElementsByTagName('td');
        if (children.length > 0) {
            children[0].appendChild(ak_js);
        }
    }
}
;
var Swiper = function(a, b) {
    "use strict";
    function c(a, b) {
        return document.querySelectorAll ? (b || document).querySelectorAll(a) : jQuery(a, b)
    }
    function d(a) {
        return "[object Array]" === Object.prototype.toString.apply(a) ? !0 : !1
    }
    function e() {
        var a = G - J;
        return b.freeMode && (a = G - J),
        b.slidesPerView > D.slides.length && !b.centeredSlides && (a = 0),
        0 > a && (a = 0),
        a
    }
    function f() {
        function a(a) {
            var c, d, e = function() {
                "undefined" != typeof D && null !== D && (void 0 !== D.imagesLoaded && D.imagesLoaded++,
                D.imagesLoaded === D.imagesToLoad.length && (D.reInit(),
                b.onImagesReady && D.fireCallback(b.onImagesReady, D)))
            };
            a.complete ? e() : (d = a.currentSrc || a.getAttribute("src"),
            d ? (c = new Image,
            c.onload = e,
            c.onerror = e,
            c.src = d) : e())
        }
        var d = D.h.addEventListener
          , e = "wrapper" === b.eventTarget ? D.wrapper : D.container;
        if (D.browser.ie10 || D.browser.ie11 ? (d(e, D.touchEvents.touchStart, p),
        d(document, D.touchEvents.touchMove, q),
        d(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (d(e, "touchstart", p),
        d(e, "touchmove", q),
        d(e, "touchend", r)),
        b.simulateTouch && (d(e, "mousedown", p),
        d(document, "mousemove", q),
        d(document, "mouseup", r))),
        b.autoResize && d(window, "resize", D.resizeFix),
        g(),
        D._wheelEvent = !1,
        b.mousewheelControl) {
            if (void 0 !== document.onmousewheel && (D._wheelEvent = "mousewheel"),
            !D._wheelEvent)
                try {
                    new WheelEvent("wheel"),
                    D._wheelEvent = "wheel"
                } catch (f) {}
            D._wheelEvent || (D._wheelEvent = "DOMMouseScroll"),
            D._wheelEvent && d(D.container, D._wheelEvent, j)
        }
        if (b.keyboardControl && d(document, "keydown", i),
        b.updateOnImagesReady) {
            D.imagesToLoad = c("img", D.container);
            for (var h = 0; h < D.imagesToLoad.length; h++)
                a(D.imagesToLoad[h])
        }
    }
    function g() {
        var a, d = D.h.addEventListener;
        if (b.preventLinks) {
            var e = c("a", D.container);
            for (a = 0; a < e.length; a++)
                d(e[a], "click", n)
        }
        if (b.releaseFormElements) {
            var f = c("input, textarea, select", D.container);
            for (a = 0; a < f.length; a++)
                d(f[a], D.touchEvents.touchStart, o, !0),
                D.support.touch && b.simulateTouch && d(f[a], "mousedown", o, !0)
        }
        if (b.onSlideClick)
            for (a = 0; a < D.slides.length; a++)
                d(D.slides[a], "click", k);
        if (b.onSlideTouch)
            for (a = 0; a < D.slides.length; a++)
                d(D.slides[a], D.touchEvents.touchStart, l)
    }
    function h() {
        var a, d = D.h.removeEventListener;
        if (b.onSlideClick)
            for (a = 0; a < D.slides.length; a++)
                d(D.slides[a], "click", k);
        if (b.onSlideTouch)
            for (a = 0; a < D.slides.length; a++)
                d(D.slides[a], D.touchEvents.touchStart, l);
        if (b.releaseFormElements) {
            var e = c("input, textarea, select", D.container);
            for (a = 0; a < e.length; a++)
                d(e[a], D.touchEvents.touchStart, o, !0),
                D.support.touch && b.simulateTouch && d(e[a], "mousedown", o, !0)
        }
        if (b.preventLinks) {
            var f = c("a", D.container);
            for (a = 0; a < f.length; a++)
                d(f[a], "click", n)
        }
    }
    function i(a) {
        var b = a.keyCode || a.charCode;
        if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey)) {
            if (37 === b || 39 === b || 38 === b || 40 === b) {
                for (var c = !1, d = D.h.getOffset(D.container), e = D.h.windowScroll().left, f = D.h.windowScroll().top, g = D.h.windowWidth(), h = D.h.windowHeight(), i = [[d.left, d.top], [d.left + D.width, d.top], [d.left, d.top + D.height], [d.left + D.width, d.top + D.height]], j = 0; j < i.length; j++) {
                    var k = i[j];
                    k[0] >= e && k[0] <= e + g && k[1] >= f && k[1] <= f + h && (c = !0)
                }
                if (!c)
                    return
            }
            N ? ((37 === b || 39 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
            39 === b && D.swipeNext(),
            37 === b && D.swipePrev()) : ((38 === b || 40 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
            40 === b && D.swipeNext(),
            38 === b && D.swipePrev())
        }
    }
    function j(a) {
        var c = D._wheelEvent
          , d = 0;
        if (a.detail)
            d = -a.detail;
        else if ("mousewheel" === c)
            if (b.mousewheelControlForceToAxis)
                if (N) {
                    if (!(Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY)))
                        return;
                    d = a.wheelDeltaX
                } else {
                    if (!(Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX)))
                        return;
                    d = a.wheelDeltaY
                }
            else
                d = a.wheelDelta;
        else if ("DOMMouseScroll" === c)
            d = -a.detail;
        else if ("wheel" === c)
            if (b.mousewheelControlForceToAxis)
                if (N) {
                    if (!(Math.abs(a.deltaX) > Math.abs(a.deltaY)))
                        return;
                    d = -a.deltaX
                } else {
                    if (!(Math.abs(a.deltaY) > Math.abs(a.deltaX)))
                        return;
                    d = -a.deltaY
                }
            else
                d = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX : -a.deltaY;
        if (b.freeMode) {
            var f = D.getWrapperTranslate() + d;
            if (f > 0 && (f = 0),
            f < -e() && (f = -e()),
            D.setWrapperTransition(0),
            D.setWrapperTranslate(f),
            D.updateActiveSlide(f),
            0 === f || f === -e())
                return
        } else
            (new Date).getTime() - V > 60 && (0 > d ? D.swipeNext() : D.swipePrev()),
            V = (new Date).getTime();
        return b.autoplay && D.stopAutoplay(!0),
        a.preventDefault ? a.preventDefault() : a.returnValue = !1,
        !1
    }
    function k(a) {
        D.allowSlideClick && (m(a),
        D.fireCallback(b.onSlideClick, D, a))
    }
    function l(a) {
        m(a),
        D.fireCallback(b.onSlideTouch, D, a)
    }
    function m(a) {
        if (a.currentTarget)
            D.clickedSlide = a.currentTarget;
        else {
            var c = a.srcElement;
            do {
                if (c.className.indexOf(b.slideClass) > -1)
                    break;
                c = c.parentNode
            } while (c);D.clickedSlide = c
        }
        D.clickedSlideIndex = D.slides.indexOf(D.clickedSlide),
        D.clickedSlideLoopIndex = D.clickedSlideIndex - (D.loopedSlides || 0)
    }
    function n(a) {
        return D.allowLinks ? void 0 : (a.preventDefault ? a.preventDefault() : a.returnValue = !1,
        b.preventLinksPropagation && "stopPropagation"in a && a.stopPropagation(),
        !1)
    }
    function o(a) {
        return a.stopPropagation ? a.stopPropagation() : a.returnValue = !1,
        !1
    }
    function p(a) {
        if (b.preventLinks && (D.allowLinks = !0),
        D.isTouched || b.onlyExternal)
            return !1;
        var c = a.target || a.srcElement;
        document.activeElement && document.activeElement !== document.body && document.activeElement !== c && document.activeElement.blur();
        var d = "input select textarea".split(" ");
        if (b.noSwiping && c && t(c))
            return !1;
        if (_ = !1,
        D.isTouched = !0,
        $ = "touchstart" === a.type,
        !$ && "which"in a && 3 === a.which)
            return D.isTouched = !1,
            !1;
        if (!$ || 1 === a.targetTouches.length) {
            D.callPlugins("onTouchStartBegin"),
            !$ && !D.isAndroid && d.indexOf(c.tagName.toLowerCase()) < 0 && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
            var e = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX
              , f = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;
            D.touches.startX = D.touches.currentX = e,
            D.touches.startY = D.touches.currentY = f,
            D.touches.start = D.touches.current = N ? e : f,
            D.setWrapperTransition(0),
            D.positions.start = D.positions.current = D.getWrapperTranslate(),
            D.setWrapperTranslate(D.positions.start),
            D.times.start = (new Date).getTime(),
            I = void 0,
            b.moveStartThreshold > 0 && (X = !1),
            b.onTouchStart && D.fireCallback(b.onTouchStart, D, a),
            D.callPlugins("onTouchStartEnd")
        }
    }
    function q(a) {
        if (D.isTouched && !b.onlyExternal && (!$ || "mousemove" !== a.type)) {
            var c = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX
              , d = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;
            if ("undefined" == typeof I && N && (I = !!(I || Math.abs(d - D.touches.startY) > Math.abs(c - D.touches.startX))),
            "undefined" != typeof I || N || (I = !!(I || Math.abs(d - D.touches.startY) < Math.abs(c - D.touches.startX))),
            I)
                return void (D.isTouched = !1);
            if (N) {
                if (!b.swipeToNext && c < D.touches.startX || !b.swipeToPrev && c > D.touches.startX)
                    return
            } else if (!b.swipeToNext && d < D.touches.startY || !b.swipeToPrev && d > D.touches.startY)
                return;
            if (a.assignedToSwiper)
                return void (D.isTouched = !1);
            if (a.assignedToSwiper = !0,
            b.preventLinks && (D.allowLinks = !1),
            b.onSlideClick && (D.allowSlideClick = !1),
            b.autoplay && D.stopAutoplay(!0),
            !$ || 1 === a.touches.length) {
                if (D.isMoved || (D.callPlugins("onTouchMoveStart"),
                b.loop && (D.fixLoop(),
                D.positions.start = D.getWrapperTranslate()),
                b.onTouchMoveStart && D.fireCallback(b.onTouchMoveStart, D)),
                D.isMoved = !0,
                a.preventDefault ? a.preventDefault() : a.returnValue = !1,
                D.touches.current = N ? c : d,
                D.positions.current = (D.touches.current - D.touches.start) * b.touchRatio + D.positions.start,
                D.positions.current > 0 && b.onResistanceBefore && D.fireCallback(b.onResistanceBefore, D, D.positions.current),
                D.positions.current < -e() && b.onResistanceAfter && D.fireCallback(b.onResistanceAfter, D, Math.abs(D.positions.current + e())),
                b.resistance && "100%" !== b.resistance) {
                    var f;
                    if (D.positions.current > 0 && (f = 1 - D.positions.current / J / 2,
                    D.positions.current = .5 > f ? J / 2 : D.positions.current * f),
                    D.positions.current < -e()) {
                        var g = (D.touches.current - D.touches.start) * b.touchRatio + (e() + D.positions.start);
                        f = (J + g) / J;
                        var h = D.positions.current - g * (1 - f) / 2
                          , i = -e() - J / 2;
                        D.positions.current = i > h || 0 >= f ? i : h
                    }
                }
                if (b.resistance && "100%" === b.resistance && (D.positions.current > 0 && (!b.freeMode || b.freeModeFluid) && (D.positions.current = 0),
                D.positions.current < -e() && (!b.freeMode || b.freeModeFluid) && (D.positions.current = -e())),
                !b.followFinger)
                    return;
                if (b.moveStartThreshold)
                    if (Math.abs(D.touches.current - D.touches.start) > b.moveStartThreshold || X) {
                        if (!X)
                            return X = !0,
                            void (D.touches.start = D.touches.current);
                        D.setWrapperTranslate(D.positions.current)
                    } else
                        D.positions.current = D.positions.start;
                else
                    D.setWrapperTranslate(D.positions.current);
                return (b.freeMode || b.watchActiveIndex) && D.updateActiveSlide(D.positions.current),
                b.grabCursor && (D.container.style.cursor = "move",
                D.container.style.cursor = "grabbing",
                D.container.style.cursor = "-moz-grabbin",
                D.container.style.cursor = "-webkit-grabbing"),
                Y || (Y = D.touches.current),
                Z || (Z = (new Date).getTime()),
                D.velocity = (D.touches.current - Y) / ((new Date).getTime() - Z) / 2,
                Math.abs(D.touches.current - Y) < 2 && (D.velocity = 0),
                Y = D.touches.current,
                Z = (new Date).getTime(),
                D.callPlugins("onTouchMoveEnd"),
                b.onTouchMove && D.fireCallback(b.onTouchMove, D, a),
                !1
            }
        }
    }
    function r(a) {
        if (I && D.swipeReset(),
        !b.onlyExternal && D.isTouched) {
            D.isTouched = !1,
            b.grabCursor && (D.container.style.cursor = "move",
            D.container.style.cursor = "grab",
            D.container.style.cursor = "-moz-grab",
            D.container.style.cursor = "-webkit-grab"),
            D.positions.current || 0 === D.positions.current || (D.positions.current = D.positions.start),
            b.followFinger && D.setWrapperTranslate(D.positions.current),
            D.times.end = (new Date).getTime(),
            D.touches.diff = D.touches.current - D.touches.start,
            D.touches.abs = Math.abs(D.touches.diff),
            D.positions.diff = D.positions.current - D.positions.start,
            D.positions.abs = Math.abs(D.positions.diff);
            var c = D.positions.diff
              , d = D.positions.abs
              , f = D.times.end - D.times.start;
            5 > d && 300 > f && D.allowLinks === !1 && (b.freeMode || 0 === d || D.swipeReset(),
            b.preventLinks && (D.allowLinks = !0),
            b.onSlideClick && (D.allowSlideClick = !0)),
            setTimeout(function() {
                "undefined" != typeof D && null !== D && (b.preventLinks && (D.allowLinks = !0),
                b.onSlideClick && (D.allowSlideClick = !0))
            }, 100);
            var g = e();
            if (!D.isMoved && b.freeMode)
                return D.isMoved = !1,
                b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a),
                void D.callPlugins("onTouchEnd");
            if (!D.isMoved || D.positions.current > 0 || D.positions.current < -g)
                return D.swipeReset(),
                b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a),
                void D.callPlugins("onTouchEnd");
            if (D.isMoved = !1,
            b.freeMode) {
                if (b.freeModeFluid) {
                    var h, i = 1e3 * b.momentumRatio, j = D.velocity * i, k = D.positions.current + j, l = !1, m = 20 * Math.abs(D.velocity) * b.momentumBounceRatio;
                    -g > k && (b.momentumBounce && D.support.transitions ? (-m > k + g && (k = -g - m),
                    h = -g,
                    l = !0,
                    _ = !0) : k = -g),
                    k > 0 && (b.momentumBounce && D.support.transitions ? (k > m && (k = m),
                    h = 0,
                    l = !0,
                    _ = !0) : k = 0),
                    0 !== D.velocity && (i = Math.abs((k - D.positions.current) / D.velocity)),
                    D.setWrapperTranslate(k),
                    D.setWrapperTransition(i),
                    b.momentumBounce && l && D.wrapperTransitionEnd(function() {
                        _ && (b.onMomentumBounce && D.fireCallback(b.onMomentumBounce, D),
                        D.callPlugins("onMomentumBounce"),
                        D.setWrapperTranslate(h),
                        D.setWrapperTransition(300))
                    }),
                    D.updateActiveSlide(k)
                }
                return (!b.freeModeFluid || f >= 300) && D.updateActiveSlide(D.positions.current),
                b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a),
                void D.callPlugins("onTouchEnd")
            }
            H = 0 > c ? "toNext" : "toPrev",
            "toNext" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipeNext(!0, !0)),
            "toPrev" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipePrev(!0, !0));
            var n = 0;
            if ("auto" === b.slidesPerView) {
                for (var o, p = Math.abs(D.getWrapperTranslate()), q = 0, r = 0; r < D.slides.length; r++)
                    if (o = N ? D.slides[r].getWidth(!0, b.roundLengths) : D.slides[r].getHeight(!0, b.roundLengths),
                    q += o,
                    q > p) {
                        n = o;
                        break
                    }
                n > J && (n = J)
            } else
                n = F * b.slidesPerView;
            "toNext" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipeNext(!0, !0) : D.swipeReset()),
            "toPrev" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipePrev(!0, !0) : D.swipeReset()),
            b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a),
            D.callPlugins("onTouchEnd")
        }
    }
    function s(a, b) {
        return a && a.getAttribute("class") && a.getAttribute("class").indexOf(b) > -1
    }
    function t(a) {
        var c = !1;
        do
            s(a, b.noSwipingClass) && (c = !0),
            a = a.parentElement;
        while (!c && a.parentElement && !s(a, b.wrapperClass));return !c && s(a, b.wrapperClass) && s(a, b.noSwipingClass) && (c = !0),
        c
    }
    function u(a, b) {
        var c, d = document.createElement("div");
        return d.innerHTML = b,
        c = d.firstChild,
        c.className += " " + a,
        c.outerHTML
    }
    function v(a, c, d) {
        function e() {
            var f = +new Date
              , l = f - g;
            h += i * l / (1e3 / 60),
            k = "toNext" === j ? h > a : a > h,
            k ? (D.setWrapperTranslate(Math.ceil(h)),
            D._DOMAnimating = !0,
            window.setTimeout(function() {
                e()
            }, 1e3 / 60)) : (b.onSlideChangeEnd && ("to" === c ? d.runCallbacks === !0 && D.fireCallback(b.onSlideChangeEnd, D, j) : D.fireCallback(b.onSlideChangeEnd, D, j)),
            D.setWrapperTranslate(a),
            D._DOMAnimating = !1)
        }
        var f = "to" === c && d.speed >= 0 ? d.speed : b.speed
          , g = +new Date;
        if (D.support.transitions || !b.DOMAnimation)
            D.setWrapperTranslate(a),
            D.setWrapperTransition(f);
        else {
            var h = D.getWrapperTranslate()
              , i = Math.ceil((a - h) / f * (1e3 / 60))
              , j = h > a ? "toNext" : "toPrev"
              , k = "toNext" === j ? h > a : a > h;
            if (D._DOMAnimating)
                return;
            e()
        }
        D.updateActiveSlide(a),
        b.onSlideNext && "next" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideNext, D, a),
        b.onSlidePrev && "prev" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlidePrev, D, a),
        b.onSlideReset && "reset" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideReset, D, a),
        "next" !== c && "prev" !== c && "to" !== c || d.runCallbacks !== !0 || w(c)
    }
    function w(a) {
        if (D.callPlugins("onSlideChangeStart"),
        b.onSlideChangeStart)
            if (b.queueStartCallbacks && D.support.transitions) {
                if (D._queueStartCallbacks)
                    return;
                D._queueStartCallbacks = !0,
                D.fireCallback(b.onSlideChangeStart, D, a),
                D.wrapperTransitionEnd(function() {
                    D._queueStartCallbacks = !1
                })
            } else
                D.fireCallback(b.onSlideChangeStart, D, a);
        if (b.onSlideChangeEnd)
            if (D.support.transitions)
                if (b.queueEndCallbacks) {
                    if (D._queueEndCallbacks)
                        return;
                    D._queueEndCallbacks = !0,
                    D.wrapperTransitionEnd(function(c) {
                        D.fireCallback(b.onSlideChangeEnd, c, a)
                    })
                } else
                    D.wrapperTransitionEnd(function(c) {
                        D.fireCallback(b.onSlideChangeEnd, c, a)
                    });
            else
                b.DOMAnimation || setTimeout(function() {
                    D.fireCallback(b.onSlideChangeEnd, D, a)
                }, 10)
    }
    function x() {
        var a = D.paginationButtons;
        if (a)
            for (var b = 0; b < a.length; b++)
                D.h.removeEventListener(a[b], "click", z)
    }
    function y() {
        var a = D.paginationButtons;
        if (a)
            for (var b = 0; b < a.length; b++)
                D.h.addEventListener(a[b], "click", z)
    }
    function z(a) {
        for (var c, d = a.target || a.srcElement, e = D.paginationButtons, f = 0; f < e.length; f++)
            d === e[f] && (c = f);
        b.autoplay && D.stopAutoplay(!0),
        D.swipeTo(c)
    }
    function A() {
        ab = setTimeout(function() {
            b.loop ? (D.fixLoop(),
            D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearTimeout(ab),
            ab = void 0) : D.swipeTo(0)),
            D.wrapperTransitionEnd(function() {
                "undefined" != typeof ab && A()
            })
        }, b.autoplay)
    }
    function B() {
        D.calcSlides(),
        b.loader.slides.length > 0 && 0 === D.slides.length && D.loadSlides(),
        b.loop && D.createLoop(),
        D.init(),
        f(),
        b.pagination && D.createPagination(!0),
        b.loop || b.initialSlide > 0 ? D.swipeTo(b.initialSlide, 0, !1) : D.updateActiveSlide(0),
        b.autoplay && D.startAutoplay(),
        D.centerIndex = D.activeIndex,
        b.onSwiperCreated && D.fireCallback(b.onSwiperCreated, D),
        D.callPlugins("onSwiperCreated")
    }
    if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
        var C = HTMLElement.prototype;
        C.__defineGetter__ && C.__defineGetter__("outerHTML", function() {
            return (new XMLSerializer).serializeToString(this)
        })
    }
    if (window.getComputedStyle || (window.getComputedStyle = function(a) {
        return this.el = a,
        this.getPropertyValue = function(b) {
            var c = /(\-([a-z]){1})/g;
            return "float" === b && (b = "styleFloat"),
            c.test(b) && (b = b.replace(c, function() {
                return arguments[2].toUpperCase()
            })),
            a.currentStyle[b] ? a.currentStyle[b] : null
        }
        ,
        this
    }
    ),
    Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
        for (var c = b || 0, d = this.length; d > c; c++)
            if (this[c] === a)
                return c;
        return -1
    }
    ),
    (document.querySelectorAll || window.jQuery) && "undefined" != typeof a && (a.nodeType || 0 !== c(a).length)) {
        var D = this;
        D.touches = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            diff: 0,
            abs: 0
        },
        D.positions = {
            start: 0,
            abs: 0,
            diff: 0,
            current: 0
        },
        D.times = {
            start: 0,
            end: 0
        },
        D.id = (new Date).getTime(),
        D.container = a.nodeType ? a : c(a)[0],
        D.isTouched = !1,
        D.isMoved = !1,
        D.activeIndex = 0,
        D.centerIndex = 0,
        D.activeLoaderIndex = 0,
        D.activeLoopIndex = 0,
        D.previousIndex = null,
        D.velocity = 0,
        D.snapGrid = [],
        D.slidesGrid = [],
        D.imagesToLoad = [],
        D.imagesLoaded = 0,
        D.wrapperLeft = 0,
        D.wrapperRight = 0,
        D.wrapperTop = 0,
        D.wrapperBottom = 0,
        D.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
        var E, F, G, H, I, J, K = {
            eventTarget: "wrapper",
            mode: "horizontal",
            touchRatio: 1,
            speed: 300,
            freeMode: !1,
            freeModeFluid: !1,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerViewFit: !0,
            simulateTouch: !0,
            followFinger: !0,
            shortSwipes: !0,
            longSwipesRatio: .5,
            moveStartThreshold: !1,
            onlyExternal: !1,
            createPagination: !0,
            pagination: !1,
            paginationElement: "span",
            paginationClickable: !1,
            paginationAsRange: !0,
            resistance: !0,
            scrollContainer: !1,
            preventLinks: !0,
            preventLinksPropagation: !1,
            noSwiping: !1,
            noSwipingClass: "swiper-no-swiping",
            initialSlide: 0,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelControlForceToAxis: !1,
            useCSS3Transforms: !0,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            loop: !1,
            loopAdditionalSlides: 0,
            roundLengths: !1,
            calculateHeight: !1,
            cssWidthAndHeight: !1,
            updateOnImagesReady: !0,
            releaseFormElements: !0,
            watchActiveIndex: !1,
            visibilityFullFit: !1,
            offsetPxBefore: 0,
            offsetPxAfter: 0,
            offsetSlidesBefore: 0,
            offsetSlidesAfter: 0,
            centeredSlides: !1,
            queueStartCallbacks: !1,
            queueEndCallbacks: !1,
            autoResize: !0,
            resizeReInit: !1,
            DOMAnimation: !0,
            loader: {
                slides: [],
                slidesHTMLType: "inner",
                surroundGroups: 1,
                logic: "reload",
                loadAllSlides: !1
            },
            swipeToPrev: !0,
            swipeToNext: !0,
            slideElement: "div",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            wrapperClass: "swiper-wrapper",
            paginationElementClass: "swiper-pagination-switch",
            paginationActiveClass: "swiper-active-switch",
            paginationVisibleClass: "swiper-visible-switch"
        };
        b = b || {};
        for (var L in K)
            if (L in b && "object" == typeof b[L])
                for (var M in K[L])
                    M in b[L] || (b[L][M] = K[L][M]);
            else
                L in b || (b[L] = K[L]);
        D.params = b,
        b.scrollContainer && (b.freeMode = !0,
        b.freeModeFluid = !0),
        b.loop && (b.resistance = "100%");
        var N = "horizontal" === b.mode
          , O = ["mousedown", "mousemove", "mouseup"];
        D.browser.ie10 && (O = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
        D.browser.ie11 && (O = ["pointerdown", "pointermove", "pointerup"]),
        D.touchEvents = {
            touchStart: D.support.touch || !b.simulateTouch ? "touchstart" : O[0],
            touchMove: D.support.touch || !b.simulateTouch ? "touchmove" : O[1],
            touchEnd: D.support.touch || !b.simulateTouch ? "touchend" : O[2]
        };
        for (var P = D.container.childNodes.length - 1; P >= 0; P--)
            if (D.container.childNodes[P].className)
                for (var Q = D.container.childNodes[P].className.split(/\s+/), R = 0; R < Q.length; R++)
                    Q[R] === b.wrapperClass && (E = D.container.childNodes[P]);
        D.wrapper = E,
        D._extendSwiperSlide = function(a) {
            return a.append = function() {
                return b.loop ? a.insertAfter(D.slides.length - D.loopedSlides) : (D.wrapper.appendChild(a),
                D.reInit()),
                a
            }
            ,
            a.prepend = function() {
                return b.loop ? (D.wrapper.insertBefore(a, D.slides[D.loopedSlides]),
                D.removeLoopedSlides(),
                D.calcSlides(),
                D.createLoop()) : D.wrapper.insertBefore(a, D.wrapper.firstChild),
                D.reInit(),
                a
            }
            ,
            a.insertAfter = function(c) {
                if ("undefined" == typeof c)
                    return !1;
                var d;
                return b.loop ? (d = D.slides[c + 1 + D.loopedSlides],
                d ? D.wrapper.insertBefore(a, d) : D.wrapper.appendChild(a),
                D.removeLoopedSlides(),
                D.calcSlides(),
                D.createLoop()) : (d = D.slides[c + 1],
                D.wrapper.insertBefore(a, d)),
                D.reInit(),
                a
            }
            ,
            a.clone = function() {
                return D._extendSwiperSlide(a.cloneNode(!0))
            }
            ,
            a.remove = function() {
                D.wrapper.removeChild(a),
                D.reInit()
            }
            ,
            a.html = function(b) {
                return "undefined" == typeof b ? a.innerHTML : (a.innerHTML = b,
                a)
            }
            ,
            a.index = function() {
                for (var b, c = D.slides.length - 1; c >= 0; c--)
                    a === D.slides[c] && (b = c);
                return b
            }
            ,
            a.isActive = function() {
                return a.index() === D.activeIndex ? !0 : !1
            }
            ,
            a.swiperSlideDataStorage || (a.swiperSlideDataStorage = {}),
            a.getData = function(b) {
                return a.swiperSlideDataStorage[b]
            }
            ,
            a.setData = function(b, c) {
                return a.swiperSlideDataStorage[b] = c,
                a
            }
            ,
            a.data = function(b, c) {
                return "undefined" == typeof c ? a.getAttribute("data-" + b) : (a.setAttribute("data-" + b, c),
                a)
            }
            ,
            a.getWidth = function(b, c) {
                return D.h.getWidth(a, b, c)
            }
            ,
            a.getHeight = function(b, c) {
                return D.h.getHeight(a, b, c)
            }
            ,
            a.getOffset = function() {
                return D.h.getOffset(a)
            }
            ,
            a
        }
        ,
        D.calcSlides = function(a) {
            var c = D.slides ? D.slides.length : !1;
            D.slides = [],
            D.displaySlides = [];
            for (var d = 0; d < D.wrapper.childNodes.length; d++)
                if (D.wrapper.childNodes[d].className)
                    for (var e = D.wrapper.childNodes[d].className, f = e.split(/\s+/), i = 0; i < f.length; i++)
                        f[i] === b.slideClass && D.slides.push(D.wrapper.childNodes[d]);
            for (d = D.slides.length - 1; d >= 0; d--)
                D._extendSwiperSlide(D.slides[d]);
            c !== !1 && (c !== D.slides.length || a) && (h(),
            g(),
            D.updateActiveSlide(),
            D.params.pagination && D.createPagination(),
            D.callPlugins("numberOfSlidesChanged"))
        }
        ,
        D.createSlide = function(a, c, d) {
            c = c || D.params.slideClass,
            d = d || b.slideElement;
            var e = document.createElement(d);
            return e.innerHTML = a || "",
            e.className = c,
            D._extendSwiperSlide(e)
        }
        ,
        D.appendSlide = function(a, b, c) {
            return a ? a.nodeType ? D._extendSwiperSlide(a).append() : D.createSlide(a, b, c).append() : void 0
        }
        ,
        D.prependSlide = function(a, b, c) {
            return a ? a.nodeType ? D._extendSwiperSlide(a).prepend() : D.createSlide(a, b, c).prepend() : void 0
        }
        ,
        D.insertSlideAfter = function(a, b, c, d) {
            return "undefined" == typeof a ? !1 : b.nodeType ? D._extendSwiperSlide(b).insertAfter(a) : D.createSlide(b, c, d).insertAfter(a)
        }
        ,
        D.removeSlide = function(a) {
            if (D.slides[a]) {
                if (b.loop) {
                    if (!D.slides[a + D.loopedSlides])
                        return !1;
                    D.slides[a + D.loopedSlides].remove(),
                    D.removeLoopedSlides(),
                    D.calcSlides(),
                    D.createLoop()
                } else
                    D.slides[a].remove();
                return !0
            }
            return !1
        }
        ,
        D.removeLastSlide = function() {
            return D.slides.length > 0 ? (b.loop ? (D.slides[D.slides.length - 1 - D.loopedSlides].remove(),
            D.removeLoopedSlides(),
            D.calcSlides(),
            D.createLoop()) : D.slides[D.slides.length - 1].remove(),
            !0) : !1
        }
        ,
        D.removeAllSlides = function() {
            for (var a = D.slides.length, b = D.slides.length - 1; b >= 0; b--)
                D.slides[b].remove(),
                b === a - 1 && D.setWrapperTranslate(0)
        }
        ,
        D.getSlide = function(a) {
            return D.slides[a]
        }
        ,
        D.getLastSlide = function() {
            return D.slides[D.slides.length - 1]
        }
        ,
        D.getFirstSlide = function() {
            return D.slides[0]
        }
        ,
        D.activeSlide = function() {
            return D.slides[D.activeIndex]
        }
        ,
        D.fireCallback = function() {
            var a = arguments[0];
            if ("[object Array]" === Object.prototype.toString.call(a))
                for (var c = 0; c < a.length; c++)
                    "function" == typeof a[c] && a[c](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            else
                "[object String]" === Object.prototype.toString.call(a) ? b["on" + a] && D.fireCallback(b["on" + a], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : a(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
        }
        ,
        D.addCallback = function(a, b) {
            var c, e = this;
            return e.params["on" + a] ? d(this.params["on" + a]) ? this.params["on" + a].push(b) : "function" == typeof this.params["on" + a] ? (c = this.params["on" + a],
            this.params["on" + a] = [],
            this.params["on" + a].push(c),
            this.params["on" + a].push(b)) : void 0 : (this.params["on" + a] = [],
            this.params["on" + a].push(b))
        }
        ,
        D.removeCallbacks = function(a) {
            D.params["on" + a] && (D.params["on" + a] = null)
        }
        ;
        var S = [];
        for (var T in D.plugins)
            if (b[T]) {
                var U = D.plugins[T](D, b[T]);
                U && S.push(U)
            }
        D.callPlugins = function(a, b) {
            b || (b = {});
            for (var c = 0; c < S.length; c++)
                a in S[c] && S[c][a](b)
        }
        ,
        !D.browser.ie10 && !D.browser.ie11 || b.onlyExternal || D.wrapper.classList.add("swiper-wp8-" + (N ? "horizontal" : "vertical")),
        b.freeMode && (D.container.className += " swiper-free-mode"),
        D.initialized = !1,
        D.init = function(a, c) {
            var d = D.h.getWidth(D.container, !1, b.roundLengths)
              , e = D.h.getHeight(D.container, !1, b.roundLengths);
            if (d !== D.width || e !== D.height || a) {
                D.width = d,
                D.height = e;
                var f, g, h, i, j, k, l;
                J = N ? d : e;
                var m = D.wrapper;
                if (a && D.calcSlides(c),
                "auto" === b.slidesPerView) {
                    var n = 0
                      , o = 0;
                    b.slidesOffset > 0 && (m.style.paddingLeft = "",
                    m.style.paddingRight = "",
                    m.style.paddingTop = "",
                    m.style.paddingBottom = ""),
                    m.style.width = "",
                    m.style.height = "",
                    b.offsetPxBefore > 0 && (N ? D.wrapperLeft = b.offsetPxBefore : D.wrapperTop = b.offsetPxBefore),
                    b.offsetPxAfter > 0 && (N ? D.wrapperRight = b.offsetPxAfter : D.wrapperBottom = b.offsetPxAfter),
                    b.centeredSlides && (N ? (D.wrapperLeft = (J - this.slides[0].getWidth(!0, b.roundLengths)) / 2,
                    D.wrapperRight = (J - D.slides[D.slides.length - 1].getWidth(!0, b.roundLengths)) / 2) : (D.wrapperTop = (J - D.slides[0].getHeight(!0, b.roundLengths)) / 2,
                    D.wrapperBottom = (J - D.slides[D.slides.length - 1].getHeight(!0, b.roundLengths)) / 2)),
                    N ? (D.wrapperLeft >= 0 && (m.style.paddingLeft = D.wrapperLeft + "px"),
                    D.wrapperRight >= 0 && (m.style.paddingRight = D.wrapperRight + "px")) : (D.wrapperTop >= 0 && (m.style.paddingTop = D.wrapperTop + "px"),
                    D.wrapperBottom >= 0 && (m.style.paddingBottom = D.wrapperBottom + "px")),
                    k = 0;
                    var p = 0;
                    for (D.snapGrid = [],
                    D.slidesGrid = [],
                    h = 0,
                    l = 0; l < D.slides.length; l++) {
                        f = D.slides[l].getWidth(!0, b.roundLengths),
                        g = D.slides[l].getHeight(!0, b.roundLengths),
                        b.calculateHeight && (h = Math.max(h, g));
                        var q = N ? f : g;
                        if (b.centeredSlides) {
                            var r = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getWidth(!0, b.roundLengths)
                              , s = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getHeight(!0, b.roundLengths)
                              , t = N ? r : s;
                            if (q > J) {
                                if (b.slidesPerViewFit)
                                    D.snapGrid.push(k + D.wrapperLeft),
                                    D.snapGrid.push(k + q - J + D.wrapperLeft);
                                else
                                    for (var u = 0; u <= Math.floor(q / (J + D.wrapperLeft)); u++)
                                        D.snapGrid.push(0 === u ? k + D.wrapperLeft : k + D.wrapperLeft + J * u);
                                D.slidesGrid.push(k + D.wrapperLeft)
                            } else
                                D.snapGrid.push(p),
                                D.slidesGrid.push(p);
                            p += q / 2 + t / 2
                        } else {
                            if (q > J)
                                if (b.slidesPerViewFit)
                                    D.snapGrid.push(k),
                                    D.snapGrid.push(k + q - J);
                                else if (0 !== J)
                                    for (var v = 0; v <= Math.floor(q / J); v++)
                                        D.snapGrid.push(k + J * v);
                                else
                                    D.snapGrid.push(k);
                            else
                                D.snapGrid.push(k);
                            D.slidesGrid.push(k)
                        }
                        k += q,
                        n += f,
                        o += g
                    }
                    b.calculateHeight && (D.height = h),
                    N ? (G = n + D.wrapperRight + D.wrapperLeft,
                    b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = n + "px"),
                    b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = D.height + "px")) : (b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = D.width + "px"),
                    b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = o + "px"),
                    G = o + D.wrapperTop + D.wrapperBottom)
                } else if (b.scrollContainer)
                    m.style.width = "",
                    m.style.height = "",
                    i = D.slides[0].getWidth(!0, b.roundLengths),
                    j = D.slides[0].getHeight(!0, b.roundLengths),
                    G = N ? i : j,
                    m.style.width = i + "px",
                    m.style.height = j + "px",
                    F = N ? i : j;
                else {
                    if (b.calculateHeight) {
                        for (h = 0,
                        j = 0,
                        N || (D.container.style.height = ""),
                        m.style.height = "",
                        l = 0; l < D.slides.length; l++)
                            D.slides[l].style.height = "",
                            h = Math.max(D.slides[l].getHeight(!0), h),
                            N || (j += D.slides[l].getHeight(!0));
                        g = h,
                        D.height = g,
                        N ? j = g : (J = g,
                        D.container.style.height = J + "px")
                    } else
                        g = N ? D.height : D.height / b.slidesPerView,
                        b.roundLengths && (g = Math.ceil(g)),
                        j = N ? D.height : D.slides.length * g;
                    for (f = N ? D.width / b.slidesPerView : D.width,
                    b.roundLengths && (f = Math.ceil(f)),
                    i = N ? D.slides.length * f : D.width,
                    F = N ? f : g,
                    b.offsetSlidesBefore > 0 && (N ? D.wrapperLeft = F * b.offsetSlidesBefore : D.wrapperTop = F * b.offsetSlidesBefore),
                    b.offsetSlidesAfter > 0 && (N ? D.wrapperRight = F * b.offsetSlidesAfter : D.wrapperBottom = F * b.offsetSlidesAfter),
                    b.offsetPxBefore > 0 && (N ? D.wrapperLeft = b.offsetPxBefore : D.wrapperTop = b.offsetPxBefore),
                    b.offsetPxAfter > 0 && (N ? D.wrapperRight = b.offsetPxAfter : D.wrapperBottom = b.offsetPxAfter),
                    b.centeredSlides && (N ? (D.wrapperLeft = (J - F) / 2,
                    D.wrapperRight = (J - F) / 2) : (D.wrapperTop = (J - F) / 2,
                    D.wrapperBottom = (J - F) / 2)),
                    N ? (D.wrapperLeft > 0 && (m.style.paddingLeft = D.wrapperLeft + "px"),
                    D.wrapperRight > 0 && (m.style.paddingRight = D.wrapperRight + "px")) : (D.wrapperTop > 0 && (m.style.paddingTop = D.wrapperTop + "px"),
                    D.wrapperBottom > 0 && (m.style.paddingBottom = D.wrapperBottom + "px")),
                    G = N ? i + D.wrapperRight + D.wrapperLeft : j + D.wrapperTop + D.wrapperBottom,
                    parseFloat(i) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (m.style.width = i + "px"),
                    parseFloat(j) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (m.style.height = j + "px"),
                    k = 0,
                    D.snapGrid = [],
                    D.slidesGrid = [],
                    l = 0; l < D.slides.length; l++)
                        D.snapGrid.push(k),
                        D.slidesGrid.push(k),
                        k += F,
                        parseFloat(f) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (D.slides[l].style.width = f + "px"),
                        parseFloat(g) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (D.slides[l].style.height = g + "px")
                }
                D.initialized ? (D.callPlugins("onInit"),
                b.onInit && D.fireCallback(b.onInit, D)) : (D.callPlugins("onFirstInit"),
                b.onFirstInit && D.fireCallback(b.onFirstInit, D)),
                D.initialized = !0
            }
        }
        ,
        D.reInit = function(a) {
            D.init(!0, a)
        }
        ,
        D.resizeFix = function(a) {
            D.callPlugins("beforeResizeFix"),
            D.init(b.resizeReInit || a),
            b.freeMode ? D.getWrapperTranslate() < -e() && (D.setWrapperTransition(0),
            D.setWrapperTranslate(-e())) : (D.swipeTo(b.loop ? D.activeLoopIndex : D.activeIndex, 0, !1),
            b.autoplay && (D.support.transitions && "undefined" != typeof ab ? "undefined" != typeof ab && (clearTimeout(ab),
            ab = void 0,
            D.startAutoplay()) : "undefined" != typeof bb && (clearInterval(bb),
            bb = void 0,
            D.startAutoplay()))),
            D.callPlugins("afterResizeFix")
        }
        ,
        D.destroy = function(a) {
            var c = D.h.removeEventListener
              , d = "wrapper" === b.eventTarget ? D.wrapper : D.container;
            if (D.browser.ie10 || D.browser.ie11 ? (c(d, D.touchEvents.touchStart, p),
            c(document, D.touchEvents.touchMove, q),
            c(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (c(d, "touchstart", p),
            c(d, "touchmove", q),
            c(d, "touchend", r)),
            b.simulateTouch && (c(d, "mousedown", p),
            c(document, "mousemove", q),
            c(document, "mouseup", r))),
            b.autoResize && c(window, "resize", D.resizeFix),
            h(),
            b.paginationClickable && x(),
            b.mousewheelControl && D._wheelEvent && c(D.container, D._wheelEvent, j),
            b.keyboardControl && c(document, "keydown", i),
            b.autoplay && D.stopAutoplay(),
            a) {
                D.wrapper.removeAttribute("style");
                for (var e = 0; e < D.slides.length; e++)
                    D.slides[e].removeAttribute("style")
            }
            D.callPlugins("onDestroy"),
            window.jQuery && window.jQuery(D.container).data("swiper") && window.jQuery(D.container).removeData("swiper"),
            window.Zepto && window.Zepto(D.container).data("swiper") && window.Zepto(D.container).removeData("swiper"),
            D = null
        }
        ,
        D.disableKeyboardControl = function() {
            b.keyboardControl = !1,
            D.h.removeEventListener(document, "keydown", i)
        }
        ,
        D.enableKeyboardControl = function() {
            b.keyboardControl = !0,
            D.h.addEventListener(document, "keydown", i)
        }
        ;
        var V = (new Date).getTime();
        if (D.disableMousewheelControl = function() {
            return D._wheelEvent ? (b.mousewheelControl = !1,
            D.h.removeEventListener(D.container, D._wheelEvent, j),
            !0) : !1
        }
        ,
        D.enableMousewheelControl = function() {
            return D._wheelEvent ? (b.mousewheelControl = !0,
            D.h.addEventListener(D.container, D._wheelEvent, j),
            !0) : !1
        }
        ,
        b.grabCursor) {
            var W = D.container.style;
            W.cursor = "move",
            W.cursor = "grab",
            W.cursor = "-moz-grab",
            W.cursor = "-webkit-grab"
        }
        D.allowSlideClick = !0,
        D.allowLinks = !0;
        var X, Y, Z, $ = !1, _ = !0;
        D.swipeNext = function(a, c) {
            "undefined" == typeof a && (a = !0),
            !c && b.loop && D.fixLoop(),
            !c && b.autoplay && D.stopAutoplay(!0),
            D.callPlugins("onSwipeNext");
            var d = D.getWrapperTranslate().toFixed(2)
              , f = d;
            if ("auto" === b.slidesPerView) {
                for (var g = 0; g < D.snapGrid.length; g++)
                    if (-d >= D.snapGrid[g].toFixed(2) && -d < D.snapGrid[g + 1].toFixed(2)) {
                        f = -D.snapGrid[g + 1];
                        break
                    }
            } else {
                var h = F * b.slidesPerGroup;
                f = -(Math.floor(Math.abs(d) / Math.floor(h)) * h + h)
            }
            return f < -e() && (f = -e()),
            f === d ? !1 : (v(f, "next", {
                runCallbacks: a
            }),
            !0)
        }
        ,
        D.swipePrev = function(a, c) {
            "undefined" == typeof a && (a = !0),
            !c && b.loop && D.fixLoop(),
            !c && b.autoplay && D.stopAutoplay(!0),
            D.callPlugins("onSwipePrev");
            var d, e = Math.ceil(D.getWrapperTranslate());
            if ("auto" === b.slidesPerView) {
                d = 0;
                for (var f = 1; f < D.snapGrid.length; f++) {
                    if (-e === D.snapGrid[f]) {
                        d = -D.snapGrid[f - 1];
                        break
                    }
                    if (-e > D.snapGrid[f] && -e < D.snapGrid[f + 1]) {
                        d = -D.snapGrid[f];
                        break
                    }
                }
            } else {
                var g = F * b.slidesPerGroup;
                d = -(Math.ceil(-e / g) - 1) * g
            }
            return d > 0 && (d = 0),
            d === e ? !1 : (v(d, "prev", {
                runCallbacks: a
            }),
            !0)
        }
        ,
        D.swipeReset = function(a) {
            "undefined" == typeof a && (a = !0),
            D.callPlugins("onSwipeReset");
            {
                var c, d = D.getWrapperTranslate(), f = F * b.slidesPerGroup;
                -e()
            }
            if ("auto" === b.slidesPerView) {
                c = 0;
                for (var g = 0; g < D.snapGrid.length; g++) {
                    if (-d === D.snapGrid[g])
                        return;
                    if (-d >= D.snapGrid[g] && -d < D.snapGrid[g + 1]) {
                        c = D.positions.diff > 0 ? -D.snapGrid[g + 1] : -D.snapGrid[g];
                        break
                    }
                }
                -d >= D.snapGrid[D.snapGrid.length - 1] && (c = -D.snapGrid[D.snapGrid.length - 1]),
                d <= -e() && (c = -e())
            } else
                c = 0 > d ? Math.round(d / f) * f : 0,
                d <= -e() && (c = -e());
            return b.scrollContainer && (c = 0 > d ? d : 0),
            c < -e() && (c = -e()),
            b.scrollContainer && J > F && (c = 0),
            c === d ? !1 : (v(c, "reset", {
                runCallbacks: a
            }),
            !0)
        }
        ,
        D.swipeTo = function(a, c, d) {
            a = parseInt(a, 10),
            D.callPlugins("onSwipeTo", {
                index: a,
                speed: c
            }),
            b.loop && (a += D.loopedSlides);
            var f = D.getWrapperTranslate();
            if (!(!isFinite(a) || a > D.slides.length - 1 || 0 > a)) {
                var g;
                return g = "auto" === b.slidesPerView ? -D.slidesGrid[a] : -a * F,
                g < -e() && (g = -e()),
                g === f ? !1 : ("undefined" == typeof d && (d = !0),
                v(g, "to", {
                    index: a,
                    speed: c,
                    runCallbacks: d
                }),
                !0)
            }
        }
        ,
        D._queueStartCallbacks = !1,
        D._queueEndCallbacks = !1,
        D.updateActiveSlide = function(a) {
            if (D.initialized && 0 !== D.slides.length) {
                D.previousIndex = D.activeIndex,
                "undefined" == typeof a && (a = D.getWrapperTranslate()),
                a > 0 && (a = 0);
                var c;
                if ("auto" === b.slidesPerView) {
                    if (D.activeIndex = D.slidesGrid.indexOf(-a),
                    D.activeIndex < 0) {
                        for (c = 0; c < D.slidesGrid.length - 1 && !(-a > D.slidesGrid[c] && -a < D.slidesGrid[c + 1]); c++)
                            ;
                        var d = Math.abs(D.slidesGrid[c] + a)
                          , e = Math.abs(D.slidesGrid[c + 1] + a);
                        D.activeIndex = e >= d ? c : c + 1
                    }
                } else
                    D.activeIndex = Math[b.visibilityFullFit ? "ceil" : "round"](-a / F);
                if (D.activeIndex === D.slides.length && (D.activeIndex = D.slides.length - 1),
                D.activeIndex < 0 && (D.activeIndex = 0),
                D.slides[D.activeIndex]) {
                    if (D.calcVisibleSlides(a),
                    D.support.classList) {
                        var f;
                        for (c = 0; c < D.slides.length; c++)
                            f = D.slides[c],
                            f.classList.remove(b.slideActiveClass),
                            D.visibleSlides.indexOf(f) >= 0 ? f.classList.add(b.slideVisibleClass) : f.classList.remove(b.slideVisibleClass);
                        D.slides[D.activeIndex].classList.add(b.slideActiveClass)
                    } else {
                        var g = new RegExp("\\s*" + b.slideActiveClass)
                          , h = new RegExp("\\s*" + b.slideVisibleClass);
                        for (c = 0; c < D.slides.length; c++)
                            D.slides[c].className = D.slides[c].className.replace(g, "").replace(h, ""),
                            D.visibleSlides.indexOf(D.slides[c]) >= 0 && (D.slides[c].className += " " + b.slideVisibleClass);
                        D.slides[D.activeIndex].className += " " + b.slideActiveClass
                    }
                    if (b.loop) {
                        var i = D.loopedSlides;
                        D.activeLoopIndex = D.activeIndex - i,
                        D.activeLoopIndex >= D.slides.length - 2 * i && (D.activeLoopIndex = D.slides.length - 2 * i - D.activeLoopIndex),
                        D.activeLoopIndex < 0 && (D.activeLoopIndex = D.slides.length - 2 * i + D.activeLoopIndex),
                        D.activeLoopIndex < 0 && (D.activeLoopIndex = 0)
                    } else
                        D.activeLoopIndex = D.activeIndex;
                    b.pagination && D.updatePagination(a)
                }
            }
        }
        ,
        D.createPagination = function(a) {
            if (b.paginationClickable && D.paginationButtons && x(),
            D.paginationContainer = b.pagination.nodeType ? b.pagination : c(b.pagination)[0],
            b.createPagination) {
                var d = ""
                  , e = D.slides.length
                  , f = e;
                b.loop && (f -= 2 * D.loopedSlides);
                for (var g = 0; f > g; g++)
                    d += "<" + b.paginationElement + ' class="' + b.paginationElementClass + '"></' + b.paginationElement + ">";
                D.paginationContainer.innerHTML = d
            }
            D.paginationButtons = c("." + b.paginationElementClass, D.paginationContainer),
            a || D.updatePagination(),
            D.callPlugins("onCreatePagination"),
            b.paginationClickable && y()
        }
        ,
        D.updatePagination = function(a) {
            if (b.pagination && !(D.slides.length < 1)) {
                var d = c("." + b.paginationActiveClass, D.paginationContainer);
                if (d) {
                    var e = D.paginationButtons;
                    if (0 !== e.length) {
                        for (var f = 0; f < e.length; f++)
                            e[f].className = b.paginationElementClass;
                        var g = b.loop ? D.loopedSlides : 0;
                        if (b.paginationAsRange) {
                            D.visibleSlides || D.calcVisibleSlides(a);
                            var h, i = [];
                            for (h = 0; h < D.visibleSlides.length; h++) {
                                var j = D.slides.indexOf(D.visibleSlides[h]) - g;
                                b.loop && 0 > j && (j = D.slides.length - 2 * D.loopedSlides + j),
                                b.loop && j >= D.slides.length - 2 * D.loopedSlides && (j = D.slides.length - 2 * D.loopedSlides - j,
                                j = Math.abs(j)),
                                i.push(j)
                            }
                            for (h = 0; h < i.length; h++)
                                e[i[h]] && (e[i[h]].className += " " + b.paginationVisibleClass);
                            b.loop ? void 0 !== e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass)
                        } else
                            b.loop ? e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass)
                    }
                }
            }
        }
        ,
        D.calcVisibleSlides = function(a) {
            var c = []
              , d = 0
              , e = 0
              , f = 0;
            N && D.wrapperLeft > 0 && (a += D.wrapperLeft),
            !N && D.wrapperTop > 0 && (a += D.wrapperTop);
            for (var g = 0; g < D.slides.length; g++) {
                d += e,
                e = "auto" === b.slidesPerView ? N ? D.h.getWidth(D.slides[g], !0, b.roundLengths) : D.h.getHeight(D.slides[g], !0, b.roundLengths) : F,
                f = d + e;
                var h = !1;
                b.visibilityFullFit ? (d >= -a && -a + J >= f && (h = !0),
                -a >= d && f >= -a + J && (h = !0)) : (f > -a && -a + J >= f && (h = !0),
                d >= -a && -a + J > d && (h = !0),
                -a > d && f > -a + J && (h = !0)),
                h && c.push(D.slides[g])
            }
            0 === c.length && (c = [D.slides[D.activeIndex]]),
            D.visibleSlides = c
        }
        ;
        var ab, bb;
        D.startAutoplay = function() {
            if (D.support.transitions) {
                if ("undefined" != typeof ab)
                    return !1;
                if (!b.autoplay)
                    return;
                D.callPlugins("onAutoplayStart"),
                b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D),
                A()
            } else {
                if ("undefined" != typeof bb)
                    return !1;
                if (!b.autoplay)
                    return;
                D.callPlugins("onAutoplayStart"),
                b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D),
                bb = setInterval(function() {
                    b.loop ? (D.fixLoop(),
                    D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearInterval(bb),
                    bb = void 0) : D.swipeTo(0))
                }, b.autoplay)
            }
        }
        ,
        D.stopAutoplay = function(a) {
            if (D.support.transitions) {
                if (!ab)
                    return;
                ab && clearTimeout(ab),
                ab = void 0,
                a && !b.autoplayDisableOnInteraction && D.wrapperTransitionEnd(function() {
                    A()
                }),
                D.callPlugins("onAutoplayStop"),
                b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D)
            } else
                bb && clearInterval(bb),
                bb = void 0,
                D.callPlugins("onAutoplayStop"),
                b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D)
        }
        ,
        D.loopCreated = !1,
        D.removeLoopedSlides = function() {
            if (D.loopCreated)
                for (var a = 0; a < D.slides.length; a++)
                    D.slides[a].getData("looped") === !0 && D.wrapper.removeChild(D.slides[a])
        }
        ,
        D.createLoop = function() {
            if (0 !== D.slides.length) {
                D.loopedSlides = "auto" === b.slidesPerView ? b.loopedSlides || 1 : Math.floor(b.slidesPerView) + b.loopAdditionalSlides,
                D.loopedSlides > D.slides.length && (D.loopedSlides = D.slides.length);
                var a, c = "", d = "", e = "", f = D.slides.length, g = Math.floor(D.loopedSlides / f), h = D.loopedSlides % f;
                for (a = 0; g * f > a; a++) {
                    var i = a;
                    if (a >= f) {
                        var j = Math.floor(a / f);
                        i = a - f * j
                    }
                    e += D.slides[i].outerHTML
                }
                for (a = 0; h > a; a++)
                    d += u(b.slideDuplicateClass, D.slides[a].outerHTML);
                for (a = f - h; f > a; a++)
                    c += u(b.slideDuplicateClass, D.slides[a].outerHTML);
                var k = c + e + E.innerHTML + e + d;
                for (E.innerHTML = k,
                D.loopCreated = !0,
                D.calcSlides(),
                a = 0; a < D.slides.length; a++)
                    (a < D.loopedSlides || a >= D.slides.length - D.loopedSlides) && D.slides[a].setData("looped", !0);
                D.callPlugins("onCreateLoop")
            }
        }
        ,
        D.fixLoop = function() {
            var a;
            D.activeIndex < D.loopedSlides ? (a = D.slides.length - 3 * D.loopedSlides + D.activeIndex,
            D.swipeTo(a, 0, !1)) : ("auto" === b.slidesPerView && D.activeIndex >= 2 * D.loopedSlides || D.activeIndex > D.slides.length - 2 * b.slidesPerView) && (a = -D.slides.length + D.activeIndex + D.loopedSlides,
            D.swipeTo(a, 0, !1))
        }
        ,
        D.loadSlides = function() {
            var a = "";
            D.activeLoaderIndex = 0;
            for (var c = b.loader.slides, d = b.loader.loadAllSlides ? c.length : b.slidesPerView * (1 + b.loader.surroundGroups), e = 0; d > e; e++)
                a += "outer" === b.loader.slidesHTMLType ? c[e] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + e + '">' + c[e] + "</" + b.slideElement + ">";
            D.wrapper.innerHTML = a,
            D.calcSlides(!0),
            b.loader.loadAllSlides || D.wrapperTransitionEnd(D.reloadSlides, !0)
        }
        ,
        D.reloadSlides = function() {
            var a = b.loader.slides
              , c = parseInt(D.activeSlide().data("swiperindex"), 10);
            if (!(0 > c || c > a.length - 1)) {
                D.activeLoaderIndex = c;
                var d = Math.max(0, c - b.slidesPerView * b.loader.surroundGroups)
                  , e = Math.min(c + b.slidesPerView * (1 + b.loader.surroundGroups) - 1, a.length - 1);
                if (c > 0) {
                    var f = -F * (c - d);
                    D.setWrapperTranslate(f),
                    D.setWrapperTransition(0)
                }
                var g;
                if ("reload" === b.loader.logic) {
                    D.wrapper.innerHTML = "";
                    var h = "";
                    for (g = d; e >= g; g++)
                        h += "outer" === b.loader.slidesHTMLType ? a[g] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + g + '">' + a[g] + "</" + b.slideElement + ">";
                    D.wrapper.innerHTML = h
                } else {
                    var i = 1e3
                      , j = 0;
                    for (g = 0; g < D.slides.length; g++) {
                        var k = D.slides[g].data("swiperindex");
                        d > k || k > e ? D.wrapper.removeChild(D.slides[g]) : (i = Math.min(k, i),
                        j = Math.max(k, j))
                    }
                    for (g = d; e >= g; g++) {
                        var l;
                        i > g && (l = document.createElement(b.slideElement),
                        l.className = b.slideClass,
                        l.setAttribute("data-swiperindex", g),
                        l.innerHTML = a[g],
                        D.wrapper.insertBefore(l, D.wrapper.firstChild)),
                        g > j && (l = document.createElement(b.slideElement),
                        l.className = b.slideClass,
                        l.setAttribute("data-swiperindex", g),
                        l.innerHTML = a[g],
                        D.wrapper.appendChild(l))
                    }
                }
                D.reInit(!0)
            }
        }
        ,
        B()
    }
};
Swiper.prototype = {
    plugins: {},
    wrapperTransitionEnd: function(a, b) {
        "use strict";
        function c(h) {
            if (h.target === f && (a(e),
            e.params.queueEndCallbacks && (e._queueEndCallbacks = !1),
            !b))
                for (d = 0; d < g.length; d++)
                    e.h.removeEventListener(f, g[d], c)
        }
        var d, e = this, f = e.wrapper, g = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
        if (a)
            for (d = 0; d < g.length; d++)
                e.h.addEventListener(f, g[d], c)
    },
    getWrapperTranslate: function(a) {
        "use strict";
        var b, c, d, e, f = this.wrapper;
        return "undefined" == typeof a && (a = "horizontal" === this.params.mode ? "x" : "y"),
        this.support.transforms && this.params.useCSS3Transforms ? (d = window.getComputedStyle(f, null),
        window.WebKitCSSMatrix ? e = new WebKitCSSMatrix("none" === d.webkitTransform ? "" : d.webkitTransform) : (e = d.MozTransform || d.OTransform || d.MsTransform || d.msTransform || d.transform || d.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
        b = e.toString().split(",")),
        "x" === a && (c = window.WebKitCSSMatrix ? e.m41 : parseFloat(16 === b.length ? b[12] : b[4])),
        "y" === a && (c = window.WebKitCSSMatrix ? e.m42 : parseFloat(16 === b.length ? b[13] : b[5]))) : ("x" === a && (c = parseFloat(f.style.left, 10) || 0),
        "y" === a && (c = parseFloat(f.style.top, 10) || 0)),
        c || 0
    },
    setWrapperTranslate: function(a, b, c) {
        "use strict";
        var d, e = this.wrapper.style, f = {
            x: 0,
            y: 0,
            z: 0
        };
        3 === arguments.length ? (f.x = a,
        f.y = b,
        f.z = c) : ("undefined" == typeof b && (b = "horizontal" === this.params.mode ? "x" : "y"),
        f[b] = a),
        this.support.transforms && this.params.useCSS3Transforms ? (d = this.support.transforms3d ? "translate3d(" + f.x + "px, " + f.y + "px, " + f.z + "px)" : "translate(" + f.x + "px, " + f.y + "px)",
        e.webkitTransform = e.MsTransform = e.msTransform = e.MozTransform = e.OTransform = e.transform = d) : (e.left = f.x + "px",
        e.top = f.y + "px"),
        this.callPlugins("onSetWrapperTransform", f),
        this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, f)
    },
    setWrapperTransition: function(a) {
        "use strict";
        var b = this.wrapper.style;
        b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = a / 1e3 + "s",
        this.callPlugins("onSetWrapperTransition", {
            duration: a
        }),
        this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, a)
    },
    h: {
        getWidth: function(a, b, c) {
            "use strict";
            var d = window.getComputedStyle(a, null).getPropertyValue("width")
              , e = parseFloat(d);
            return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetWidth - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))),
            b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))),
            c ? Math.ceil(e) : e
        },
        getHeight: function(a, b, c) {
            "use strict";
            if (b)
                return a.offsetHeight;
            var d = window.getComputedStyle(a, null).getPropertyValue("height")
              , e = parseFloat(d);
            return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetHeight - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))),
            b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))),
            c ? Math.ceil(e) : e
        },
        getOffset: function(a) {
            "use strict";
            var b = a.getBoundingClientRect()
              , c = document.body
              , d = a.clientTop || c.clientTop || 0
              , e = a.clientLeft || c.clientLeft || 0
              , f = window.pageYOffset || a.scrollTop
              , g = window.pageXOffset || a.scrollLeft;
            return document.documentElement && !window.pageYOffset && (f = document.documentElement.scrollTop,
            g = document.documentElement.scrollLeft),
            {
                top: b.top + f - d,
                left: b.left + g - e
            }
        },
        windowWidth: function() {
            "use strict";
            return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
        },
        windowHeight: function() {
            "use strict";
            return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
        },
        windowScroll: function() {
            "use strict";
            return "undefined" != typeof pageYOffset ? {
                left: window.pageXOffset,
                top: window.pageYOffset
            } : document.documentElement ? {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            } : void 0
        },
        addEventListener: function(a, b, c, d) {
            "use strict";
            "undefined" == typeof d && (d = !1),
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        removeEventListener: function(a, b, c, d) {
            "use strict";
            "undefined" == typeof d && (d = !1),
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
        }
    },
    setTransform: function(a, b) {
        "use strict";
        var c = a.style;
        c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = b
    },
    setTranslate: function(a, b) {
        "use strict";
        var c = a.style
          , d = {
            x: b.x || 0,
            y: b.y || 0,
            z: b.z || 0
        }
          , e = this.support.transforms3d ? "translate3d(" + d.x + "px," + d.y + "px," + d.z + "px)" : "translate(" + d.x + "px," + d.y + "px)";
        c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = e,
        this.support.transforms || (c.left = d.x + "px",
        c.top = d.y + "px")
    },
    setTransition: function(a, b) {
        "use strict";
        var c = a.style;
        c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms"
    },
    support: {
        touch: window.Modernizr && Modernizr.touch === !0 || function() {
            "use strict";
            return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
        }(),
        transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
            "use strict";
            var a = document.createElement("div").style;
            return "webkitPerspective"in a || "MozPerspective"in a || "OPerspective"in a || "MsPerspective"in a || "perspective"in a
        }(),
        transforms: window.Modernizr && Modernizr.csstransforms === !0 || function() {
            "use strict";
            var a = document.createElement("div").style;
            return "transform"in a || "WebkitTransform"in a || "MozTransform"in a || "msTransform"in a || "MsTransform"in a || "OTransform"in a
        }(),
        transitions: window.Modernizr && Modernizr.csstransitions === !0 || function() {
            "use strict";
            var a = document.createElement("div").style;
            return "transition"in a || "WebkitTransition"in a || "MozTransition"in a || "msTransition"in a || "MsTransition"in a || "OTransition"in a
        }(),
        classList: function() {
            "use strict";
            var a = document.createElement("div");
            return "classList"in a
        }()
    },
    browser: {
        ie8: function() {
            "use strict";
            var a = -1;
            if ("Microsoft Internet Explorer" === navigator.appName) {
                var b = navigator.userAgent
                  , c = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
                null !== c.exec(b) && (a = parseFloat(RegExp.$1))
            }
            return -1 !== a && 9 > a
        }(),
        ie10: window.navigator.msPointerEnabled,
        ie11: window.navigator.pointerEnabled
    }
},
(window.jQuery || window.Zepto) && !function(a) {
    "use strict";
    a.fn.swiper = function(b) {
        var c;
        return this.each(function(d) {
            var e = a(this)
              , f = new Swiper(e[0],b);
            d || (c = f),
            e.data("swiper", f)
        }),
        c
    }
}(window.jQuery || window.Zepto),
"undefined" != typeof module ? module.exports = Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return Swiper
});
