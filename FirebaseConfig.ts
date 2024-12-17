import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC8hf2TiXuIo8KYEx4UpaIVQzMOl0B6P4E",
    authDomain: "atlas-realtime-db.firebaseapp.com",
    projectId: "atlas-realtime-db",
    storageBucket: "atlas-realtime-db.firebasestorage.app",
    messagingSenderId: "18521731820",
    appId: "1:18521731820:web:9d770f9f5021b4d3a9abc9",
    measurementId: "G-XK6VQ334Y5"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORE = getFirestore(FIREBASE_APP);
