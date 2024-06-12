'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "5680e3e250d98164c9c93c07c2be9092",
"splash/img/light-2x.png": "dc27f2cbb638e0beb9713a354c95ed2e",
"splash/img/dark-4x.png": "0603cadf06f2fab214c7580964fc9513",
"splash/img/light-3x.png": "ce90a9edaca8bd52e206918a76dbc9f7",
"splash/img/dark-3x.png": "ce90a9edaca8bd52e206918a76dbc9f7",
"splash/img/light-4x.png": "0603cadf06f2fab214c7580964fc9513",
"splash/img/dark-2x.png": "dc27f2cbb638e0beb9713a354c95ed2e",
"splash/img/dark-1x.png": "f50ae0ed4ce787d7bc58a195c56f2006",
"splash/img/light-1x.png": "f50ae0ed4ce787d7bc58a195c56f2006",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "8632f66b778ab6afb1cdff5a5d50857a",
"index.html": "c96c768a94f3f75cc1df169101fa6f13",
"/": "c96c768a94f3f75cc1df169101fa6f13",
"firebase-messaging-sw.js": "6028ea886054ae969a9a2d1beedf02c0",
"main.dart.js": "47ba49de43c2a1835f38f42bb98ff55d",
"sqlite3.wasm": "2068781fd3a05f89e76131a98da09b5b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"sqflite_sw.js": "5267f89a5a1aa5a985f5cc30f85e3def",
"assets/AssetManifest.json": "26162c6311ce6156304491895eb0bc31",
"assets/NOTICES": "9d3c14d2d8e1ff3b3897374a566256a7",
"assets/FontManifest.json": "45e0f1d925aeb7cd5f03bc99ec1f0d4f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/web/web_support.js": "1c365cc5ce2a69c366034266252d2cfa",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "8a5959cda88c590ad4bbf26587e1aa15",
"assets/fonts/inter/Inter_medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/fonts/inter/Inter_semibold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/fonts/inter/Inter_regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/fonts/inter/Inter_bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/fonts/MaterialIcons-Regular.otf": "a88a0a7767c40c9d6131ce0b2591d4a3",
"assets/assets/flipbook.zip": "2082874e7b39ff9e3b0aa26d41635735",
"assets/assets/images/collapse.png": "5e860330348a87e51e2a240a1b3895b2",
"assets/assets/images/external_link.png": "202fdabae01aa19db4bb4f7f92daae64",
"assets/assets/images/expand.png": "f13041620cfd491c81a5950a25b3d9a4",
"assets/assets/images/download.png": "c833282a1996c0bf01fd5aa4f5346108",
"assets/assets/images/t_icon_done.PNG": "76c233253908133a6195f6932d1fc886",
"assets/assets/images/t_icon_refresh.PNG": "a8ed647ecccb5914ed5dda974d3f2c89",
"assets/assets/images/drawable-nodpi/teacher.png": "4fbf0839a0c73140073e8a9f042960a7",
"assets/assets/images/drawable-nodpi/change_language_icon.png": "7de63bc68536fdb998d72cc36e4a054f",
"assets/assets/images/drawable-nodpi/profile_icon.png": "b6700022fb40c54ae00f899f04518686",
"assets/assets/images/drawable-nodpi/sign_out_icon.png": "4dc408f92004d1f6e6d8597bf6d89410",
"assets/assets/images/drawable-nodpi/parents.png": "c00974b60c1433a55c7f8ce68076f487",
"assets/assets/images/drawable-nodpi/collaboration_icon.png": "5109fd24806e047755739ce1078f4899",
"assets/assets/images/drawable-nodpi/news_icon.png": "c38e0d5e39df36104b9e40600cbca6e0",
"assets/assets/images/drawable-nodpi/search_icon.png": "c9da061774029d9ab38db36c86d01c32",
"assets/assets/images/drawable-nodpi/change_role_icon.png": "75840061fc4f591188f1efa12c0b7abf",
"assets/assets/images/drawable-nodpi/classestaught_icon.png": "cf0aec4a9201d1f460ebeda7c4cf4703",
"assets/assets/images/drawable-nodpi/privacy_policy_icon.png": "c7dffcd08eab0c10840a3a93ef4ea357",
"assets/assets/images/drawable-nodpi/intro1.png": "0e45aa34a3446f5238d9dec3b66aafcc",
"assets/assets/images/drawable-nodpi/intro2.png": "05ad8df11481bb1a0afc8cfa91630623",
"assets/assets/images/drawable-nodpi/intro3.png": "01d7d2194648de330213d0b14f7b6574",
"assets/assets/images/drawable-nodpi/educator.png": "01ef7cc23625abd3c816be14b74c3286",
"assets/assets/images/drawable-nodpi/guided_tour_icon.png": "3000b4005f3bf2d071a170a37ef2b10d",
"assets/assets/images/drawable-nodpi/agenda_icon.png": "64510f38a3cac5ccf8c917edd577c5a9",
"assets/assets/images/drawable-nodpi/location_icon.png": "8361f83b68aa7946c17da3b826eb1c9a",
"assets/assets/images/drawable-nodpi/profile_photo_placeholder.png": "e64b66e71ab8d22c26ea736f19331f67",
"assets/assets/images/drawable-nodpi/intro4.png": "2db8188a987a1c03cefff55be8ff8206",
"assets/assets/images/drawable-nodpi/agenda_bottom_bar.png": "6dcee7c4f43d11a39ff30c2228f457f1",
"assets/assets/images/drawable-nodpi/contact_us_icon.png": "02849d229efb02a38c20bee8947233c1",
"assets/assets/images/drawable-nodpi/placeholder_course_card_image.png": "f0ffc29ac1c92bfc8d1aa3625d10963f",
"assets/assets/images/drawable-nodpi/intro5.png": "03ff262074b01f9ff300d2d2755ff918",
"assets/assets/images/drawable-nodpi/app_logo.png": "d896d6f482985ffd088746c3323b8e5f",
"assets/assets/images/drawable-nodpi/google.png": "2c05a096f42412b223752e241f991495",
"assets/assets/images/drawable-nodpi/faq_icon.png": "ef8077efc824d3fcb75f9373eabd0039",
"assets/assets/images/drawable-nodpi/splash_logo.png": "d896d6f482985ffd088746c3323b8e5f",
"assets/assets/images/drawable-nodpi/medium_icon.png": "dbb8501ff01b9a532b45e08c1905ac48",
"assets/assets/images/drawable-nodpi/splash_bg.png": "9773f3d2a2121f939d76c5590431b02f",
"assets/assets/images/xblocks/survey.png": "ce403d87feb9dbe0b487ed613e293602",
"assets/assets/images/xblocks/scorm.png": "954a88213226403c0d13b07fb9714580",
"assets/assets/images/xblocks/video.png": "f22c8e7dade32a3301334a10d0d4402e",
"assets/assets/images/xblocks/assesment.png": "1b307c8046b33084deb9a0d6fb6d2002",
"assets/assets/images/xblocks/pdf.png": "f358eb50d26ebe683dbb26ca0f3ad69e",
"assets/assets/images/xblocks/youtube.png": "f602015178902c10fbbeeaee1e880fa5",
"assets/assets/images/xblocks/default.png": "38fb4225475d4bf2fc2ab5e4e14df3ac",
"assets/assets/images/mereCertificate.png": "9cf840904d79df88921b99934ddef89d",
"assets/assets/images/celebrate_claps_anim.gif": "aa0d95299cb5fa186b02512d2951c49f",
"assets/assets/images/whatsapp.png": "cf902c588785dedfc44bf905016681e5",
"assets/assets/images/facebook.png": "673af6587915fc55f24c6fb4d52938e5",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
