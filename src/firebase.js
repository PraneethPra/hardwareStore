import firebase from 'firebase/app';
import 'firebase/firestore'; 
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBmKhvqk_N_pCPTQxual-wsCKigxBTyIkQ",
    authDomain: "hardwarestore-23256.firebaseapp.com",
    projectId: "hardwarestore-23256",
    storageBucket: "hardwarestore-23256.appspot.com",
    messagingSenderId: "379451249652",
    appId: "1:379451249652:web:2f3bdbd138df7566611fa1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(); // You can export other Firebase services too

export default firebase;
