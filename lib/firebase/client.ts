import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD0V_w0uguZOvsHZ0E3aqtWY6IdRt6DKL4",
    authDomain: "sunpeach-os-lite.firebaseapp.com",
    projectId: "sunpeach-os-lite",
    storageBucket: "sunpeach-os-lite.firebasestorage.app",
    messagingSenderId: "791075042221",
    appId: "1:791075042221:web:7af1b1b883b8b1592fa724"
};

// Singleton pattern to prevent multiple initializations
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
