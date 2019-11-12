/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "ef34a01b2e129817fbd23e56a5836379"
  },
  {
    "url": "precache-manifest.a99d29c983bae9481fda964f0857b540.js",
    "revision": "a99d29c983bae9481fda964f0857b540"
  },
  {
    "url": "static/css/main.e1bbfdae.chunk.css",
    "revision": "d495cdb95a7dcdd65db4b8e1e4d15f18"
  },
  {
    "url": "static/js/2.c165fca1.chunk.js",
    "revision": "92e92927a091b6c8ce758446d5f769c6"
  },
  {
    "url": "static/js/main.8a80c58a.chunk.js",
    "revision": "e29ee34257f61ca04cddd0a6d7bd33fb"
  },
  {
    "url": "static/js/runtime-main.a0b42a97.js",
    "revision": "20555c21c89cbf435127644b85bcbac3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/chess-diagram-generator/index.html"), {
  
  blacklist: [/^\/_/,/\/[^\/?]+\.[^\/]+$/],
});

workbox.routing.registerRoute(/(?:json|ico|html|png|svg|js|txt|css)$/, new workbox.strategies.NetworkFirst(), 'GET');
