import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDEyeytEFPzjSrSvhLIPkSFOdVHBSIMcxw",
  authDomain: "trailix.firebaseapp.com",
  databaseURL: "https://trailix.firebaseio.com",
  projectId: "trailix",
  storageBucket: "trailix.appspot.com",
  messagingSenderId: "497706911829",
  appId: "1:497706911829:web:06f03053196df5d2bfecdc",
  measurementId: "G-W31SK51H66",
});

const db = firebaseApp.firestore();

export default db;
