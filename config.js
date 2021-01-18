import * as firebase from "firebase";
require("@firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOsY8Bi25jdwJBl10IHal6AbLE7TGzeEE",
  authDomain: "barter-system-app-e5832.firebaseapp.com",
  projectId: "barter-system-app-e5832",
  storageBucket: "barter-system-app-e5832.appspot.com",
  messagingSenderId: "301277736043",
  appId: "1:301277736043:web:19add8e4c9e51da63b952e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
 export default firebase.firestore();

 