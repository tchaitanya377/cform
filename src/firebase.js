import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import getFirestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6hi5WniSmIBsPCwcqk_QVizh8yHcYM88",
  authDomain: "ravuru-ccbcd.firebaseapp.com",
  projectId: "ravuru-ccbcd",
  storageBucket: "ravuru-ccbcd.appspot.com",
  messagingSenderId: "438776822141",
  appId: "1:438776822141:web:31b8db8d2b789959003414",
  measurementId: "G-9TDRW616T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app); // Export db
