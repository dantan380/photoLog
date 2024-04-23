// Your web app's Firebase configuration
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import {getFirestore } from 'firebase/firestore';

const FIREBASE_API_KEY = import.meta.env.FIREBASE_API_KEY

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "photolog-e2c5d.firebaseapp.com",
  projectId: "photolog-e2c5d",
  storageBucket: "photolog-e2c5d.appspot.com",
  messagingSenderId: "97273829790",
  appId: "1:97273829790:web:bdb1daf505596380205e8f"
};

// Initialize Firebase
let app;

try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase Storage initilized successfully.");
} catch (error) {
  console.error("Firebase Storage initilization failed:", error);
}

const projStorage = getStorage(app);
const projFirestore = getFirestore(app);

export { projFirestore, projStorage };