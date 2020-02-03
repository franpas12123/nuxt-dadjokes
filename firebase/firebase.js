import firebase from "firebase";
import firestore from "firebase/firebase-firestore";

// Add firebase config
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBaooFcHh74L0wS99-1ByE4fOu7nTQ2rFo",
  authDomain: "dadjokes-ce3f4.firebaseapp.com",
  databaseURL: "https://dadjokes-ce3f4.firebaseio.com",
  projectId: "dadjokes-ce3f4",
  storageBucket: "dadjokes-ce3f4.appspot.com",
  messagingSenderId: "183951248768",
  appId: "1:183951248768:web:62bb3ef0771273dd9d0565"
};

//  Initialize firebase
firebase.initializeApp(FIREBASE_CONFIG);

//  Export firestore database
export default firebase.firestore();
