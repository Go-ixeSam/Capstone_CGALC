import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
     // Project Settings => Add Firebase to your web app
     apiKey: "AIzaSyCon84zq9VJoneDyRXcyABcmHEcM14GCR4",
     authDomain: "cheap-gas-station.firebaseapp.com",
     databaseURL: "https://cheap-gas-station.firebaseio.com",
     projectId: "cheap-gas-station",
     storageBucket: "cheap-gas-station.appspot.com",
     messagingSenderId: "198553435698",
     appId: "1:198553435698:web:851b08e4282f74c304c62b",
     measurementId: "G-RZDM6YH3FQ"
});
const messaging = initializedFirebaseApp.messaging();
export { messaging };