! function (n) {
    function e(o) {
        if (t[o]) return t[o].exports;
        var c = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return n[o].call(c.exports, c, c.exports, e), c.l = !0, c.exports
    }
    var t = {};
    e.m = n, e.c = t, e.i = function (n) {
        return n
    }, e.d = function (n, t, o) {
        e.o(n, t) || Object.defineProperty(n, t, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, e.n = function (n) {
        var t = n && n.__esModule ? function () {
            return n.default
        } : function () {
            return n
        };
        return e.d(t, "a", t), t
    }, e.o = function (n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }, e.p = "/", e(e.s = 1156)
}({
    1156: function (n, e, t) {
        n.exports = t(365)
    },
    365: function (n, e, t) {
        var o = "regex101-cache-3.15.11";
        console.info("Using cache '" + o + "'");
        var c = ["/", "/android-icon-192x192.png", "/apple-icon-57x57.png", "/favicon-96x96.png", "/fontello.woff2", "/open-sans-v13-latin-300.woff", "/open-sans-v13-latin-regular.woff", "/apple-icon-114x114.png", "/apple-icon-60x60.png", "/favicon.ico", "/golang.js", "/open-sans-v13-latin-300.woff2", "/open-sans-v13-latin-regular.woff2", "/apple-icon-120x120.png", "/apple-icon-72x72.png", "/fontello.eot", "/golangWorker.js", "/open-sans-v13-latin-700.woff", "/pcreWorker.js", "/apple-icon-144x144.png", "/apple-icon-76x76.png", "/fontello.svg", "/javascriptWorker.js", "/open-sans-v13-latin-700.woff2", "/pcrelib.js", "/apple-icon-152x152.png", "/favicon-16x16.png", "/fontello.ttf", "/main.css", "/open-sans-v13-latin-italic.woff", "/apple-icon-180x180.png", "/favicon-32x32.png", "/fontello.woff", "/main.js", "/open-sans-v13-latin-italic.woff2"];
        self.addEventListener("install", function (n) {
            console.info("Installing service worker..."), n.waitUntil(caches.open(o).then(function (n) {
                return n.addAll(c)
            }).then(function () {
                return self.skipWaiting()
            }).then(function () {
                return console.info("Cache construction completed")
            }))
        }), self.addEventListener("activate", function (n) {
            console.info("Activating service worker..."), n.waitUntil(caches.keys().then(function (n) {
                return console.info("Pruning old caches..."), Promise.all(n.filter(function (n) {
                    return n !== o
                }).map(function (n) {
                    return caches.delete(n)
                })).then(function () {
                    return console.info("Old caches pruned")
                }).then(function () {
                    return self.clients.claim()
                }).catch(function (n) {
                    return console.warn("Unable to clear old cache", n)
                })
            }))
        }), self.addEventListener("fetch", function (n) {
            "GET" === n.request.method && !/\/(?:api|connect|login)\//.test(n.request.url) && /^https?:\/\//.test(n.request.url) && (console.info("Handling fetch event for", n.request.url), n.respondWith(caches.open(o).then(function (e) {
                return e.match(n.request)
            }).then(function (e) {
                return fetch(n.request).then(function (t) {
                    var c = t.clone();
                    return caches.open(o).then(function (e) {
                        return e.put(n.request, c)
                    }).then(function () {
                        console.info((e ? "Updated" : "Fetch response stored in") + " cache for '" + n.request.url + "'")
                    }), t
                }).catch(function (t) {
                    if (e) return console.info("Returning cached resource for '" + n.request.url + "'"), e;
                    throw t
                })
            }).catch(function (e) {
                return console.warn("Unable to fetch", n.request.url, e), caches.match("/")
            })))
        })
    }
});