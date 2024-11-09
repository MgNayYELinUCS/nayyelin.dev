'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b8d7cb677a19223458bc574d97f60bf0",
"version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "919cfeba4ff067e2686bdea378dd1646",
"/": "919cfeba4ff067e2686bdea378dd1646",
"main.dart.js": "610b2a08ceb46823bfdc2eb2bc36135d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"assets/asset/medium.svg": "a3fddd3f76b8e65bf3f1eecaa7eed64e",
"assets/asset/github.svg": "422b45f9b735da46e17e8cfdb7328071",
"assets/asset/instagram.svg": "be758ca61a2773fe84ad567b72435111",
"assets/asset/ns4.png": "8baff9e592e96a85e241134c08fe4e0b",
"assets/asset/appstore.jpeg": "8307ff32e5ab7fb08db911433faddb8d",
"assets/asset/ns1.png": "737ff574044fb7fb6f456f76c63bc26d",
"assets/asset/s1.png": "2cbe80f98529afee9397075e10a35edf",
"assets/asset/ns2.png": "76ccb88c4d7bda0e4c9dcaa25e7e36d9",
"assets/asset/ns3.png": "6f5fe53b644d5742a46fa1a7c3ec7b23",
"assets/asset/s2.png": "a3b510be9325e59a93763f5f9622fd3c",
"assets/asset/nayla/n6.png": "6c9df32423c7231e3df3bbb2ac6fc0ab",
"assets/asset/nayla/n7.png": "fb92e99553e9c7fe9e7462d804ac5d27",
"assets/asset/nayla/n5.png": "052f6a63d90f4fd51af1cd462545744c",
"assets/asset/nayla/n4.png": "5b1f8449fe2d6b05c6c2cabdbd421dd7",
"assets/asset/nayla/n1.png": "0de00fceb1e858de4e13885000611c9b",
"assets/asset/nayla/n3.png": "18bc011ace26ba0f704e497305e076d6",
"assets/asset/nayla/n2.png": "e4e439a15936a2b7d20c31a1e25ca28b",
"assets/asset/playstore_light.png": "718bb04fac70894aa2f59799726268cb",
"assets/asset/facebook.svg": "eff54484c6ca4707e353acfe1c1e2f3b",
"assets/asset/stackoverflow.svg": "15ebcd4b4cc84e529c618e630f7aa2dc",
"assets/asset/ballonestar/b5.png": "e88fe50808e20edbd65414725b923083",
"assets/asset/ballonestar/b4.png": "2f6182791de1469e501ff6502fec5415",
"assets/asset/ballonestar/b6.png": "33ccc249db65e5440278c5793193267e",
"assets/asset/ballonestar/b7.png": "9e778b098801ca49b043ffa8458105f3",
"assets/asset/ballonestar/b3.png": "53c5e6ec67599d30c83a1b4771b3c817",
"assets/asset/ballonestar/b2.png": "336f19461e40a2891c86ee715b2dd345",
"assets/asset/ballonestar/b1.png": "bc0113c8098e68857c8d374bd5e11a39",
"assets/asset/profile.jpeg": "7f49187996da79b0e1c7043745250d39",
"assets/asset/playstore_dark.png": "1625eac6754f43f236ce79c4b78170ca",
"assets/asset/dhamma/d5.png": "accb99ad65f1003b43c9960c501779d6",
"assets/asset/dhamma/d4.png": "5726976462a33c03dd0205d1d5262e85",
"assets/asset/dhamma/d1.png": "a591752cd21e849f96b5b1ce4dc16521",
"assets/asset/dhamma/d3.png": "78e3c50c3cce962382609d54ab9d2567",
"assets/asset/dhamma/d2.png": "9a0c6b90d4e03d68474af655f19a94aa",
"assets/asset/v1.png": "079d63a9d654786353ff9f17c04eff06",
"assets/asset/v3.png": "d545a2a277d5369070fe3cdc5b0c1829",
"assets/asset/linkedin.svg": "ae2fd1ef72361423ce8734464be77983",
"assets/asset/twitter.svg": "923fdee99bd2e309ddeeb98919a73a56",
"assets/asset/fonts/FiraSans-ExtraBold.ttf": "ab5e89ae3427a97125ae380280b1df7f",
"assets/asset/fonts/FiraSans-SemiBold.ttf": "eb5e811f2fe0408c9d0a552fcf1fb390",
"assets/asset/fonts/FiraSans-Regular.ttf": "50e780b45678ae34cef52d3e5112bd0d",
"assets/asset/google_play.png": "f14fa0f391db4ccc85bae0d6966686f8",
"assets/asset/v2.png": "c52e7a59b017cebee87204c36e173632",
"assets/AssetManifest.json": "319a87264626f3e607baaad2cda6f71c",
"assets/NOTICES": "6ff9fa70e3bfa3067dc6b500132221f7",
"assets/FontManifest.json": "25d9d19925765bdc900d8551a3ad99b7",
"assets/AssetManifest.bin.json": "9bf48520078d7700b884cd7972ad87f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "33067bc467d1c80f5c30f3bcb308f477",
"assets/fonts/MaterialIcons-Regular.otf": "8838ae566bf0d2a03cd194aba47d30ef",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
