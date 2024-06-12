importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");
firebase.initializeApp({
                apiKey: "AIzaSyDnJQMjyQWQzgztWCxoNLfRdGo0MMnPEoc",
                authDomain: "mx-91lms-dev.firebaseapp.com",
                projectId: "mx-91lms-dev",
                storageBucket: "mx-91lms-dev.appspot.com",
                messagingSenderId: "373247656580",
                appId: "1:373247656580:web:d7dbbfea587d9ec56778d1",
                measurementId: "G-04HE5YVPY5"
});
  const messaging = firebase.messaging();
  messaging.onBackgroundMessage(function(payload) {
    //console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
self.addEventListener('notificationclick', function (event) {
    //console.log('notification received: ', event)
});

