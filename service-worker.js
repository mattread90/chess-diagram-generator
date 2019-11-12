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
    "revision": "be5a2d50c51c7708f77ffacc748715af"
  },
  {
    "url": "favicon.ico",
    "revision": "33d46e7cf3159d286d3129c9b5feab74"
  },
  {
    "url": "index.html",
    "revision": "386adc0db2c5fa07984dcff7b9cc6c38"
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
    "url": "precache-manifest.c37ddb2f76f41671d92490a2ab26864f.js",
    "revision": "c37ddb2f76f41671d92490a2ab26864f"
  },
  {
    "url": "robots.txt",
    "revision": "3ad0652bd17ff826a31fa29366021cfd"
  },
  {
    "url": "static/css/main.eae3c986.chunk.css",
    "revision": "e88a10a16a5e92df70dfe581a32016cc"
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
  },
  {
    "url": "static/media/chess-image.c52fd2d4.png",
    "revision": "c52fd2d4e30fc58814f982250a25b718"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/chess-diagram-generator/index.html"), {
  
  blacklist: [/^\/_/,/\/[^\/?]+\.[^\/]+$/],
});
