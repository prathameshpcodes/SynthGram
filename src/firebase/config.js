import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAaIc8FWsNVGShO03Qj6LXFGOAPivWVAjs",
    authDomain: "firegramog.firebaseapp.com",
    projectId: "firegramog",
    storageBucket: "firegramog.appspot.com",
    messagingSenderId: "649019164906",
    appId: "1:649019164906:web:04f0772ef56d71b5946f93"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };