importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js");
const firebaseConfig = {
     apiKey: "AIzaSyCon84zq9VJoneDyRXcyABcmHEcM14GCR4",
     authDomain: "cheap-gas-station.firebaseapp.com",
     databaseURL: "https://cheap-gas-station.firebaseio.com",
     projectId: "cheap-gas-station",
     storageBucket: "cheap-gas-station.appspot.com",
     messagingSenderId: "198553435698",
     appId: "1:198553435698:web:851b08e4282f74c304c62b",
     measurementId: "G-RZDM6YH3FQ"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
     const promiseChain = clients
          .matchAll({
               type: "window",
               includeUncontrolled: true,
          })
          .then((windowClients) => {
               for (let i = 0; i < windowClients.length; i++) {
                    const windowClient = windowClients[i];
                    windowClient.postMessage(payload);
               }
          })
          .then(() => {
               return registration.showNotification("my notification title");
          });
     return promiseChain;
});
self.addEventListener("notificationclick", function(event) {
     console.log(event);
});