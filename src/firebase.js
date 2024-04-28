import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
 //apiKey: "AIzaSyBmKhvqk_N_pCPTQxual-wsCKigxBTyIkQ",
  apiKey : "AIzaSyBmKhvqk_N_pCPTQxual-wsCKigxBTyIkQ",
  authDomain: "hardwarestore-23256.firebaseapp.com",
  projectId: "hardwarestore-23256",
  storageBucket: "hardwarestore-23256.appspot.com",
  messagingSenderId: "379451249652",
  appId: "1:379451249652:web:2f3bdbd138df7566611fa1"
};

// Check if Firebase app is already initialized to avoid re-initialization
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore(); // Initialize Firestore

const auth = firebase.auth(); // Initialize Authentication

export { firebase, firestore, auth }; // Export Firebase, Firestore, and Auth instances
