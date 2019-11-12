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
    "url": "asset-manifest.json",
    "revision": "ef3f38a4da5d48b9bd27d389c007edaf"
  },
  {
    "url": "favicon.ico",
    "revision": "33d46e7cf3159d286d3129c9b5feab74"
  },
  {
    "url": "index.html",
    "revision": "18ba9e81056ba3fe2b2f2de6be623425"
  },
  {
    "url": "logo192.png",
    "revision": "581fa1d82b7152e685510b51d48edd3e"
  },
  {
    "url": "logo512.png",
    "revision": "260d57586012b0ed1ae78accc0bf7083"
  },
  {
    "url": "manifest.json",
    "revision": "d9d975cebe2ec20b6c652e1e4c12ccf0"
  },
  {
    "url": "precache-manifest.8c1ad0aaf04ae45afff31a5eb2ada691.js",
    "revision": "8c1ad0aaf04ae45afff31a5eb2ada691"
  },
  {
    "url": "robots.txt",
    "revision": "3ad0652bd17ff826a31fa29366021cfd"
  },
  {
    "url": "static/css/main.4dcc50fd.chunk.css",
    "revision": "eadcfbd67260ad8f1b7ae4727e616ac8"
  },
  {
    "url": "static/js/2.064fc736.chunk.js",
    "revision": "d8cc7dd889f9eb0c7d6b9bad191d6539"
  },
  {
    "url": "static/js/main.0afb77b6.chunk.js",
    "revision": "9af0ed79f601401e8f047c062b766f0b"
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
