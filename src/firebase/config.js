// Your web app's Firebase configuration
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

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
firebase.initializeApp(firebaseConfig);

const projStorage = firebase.storage();
const projFirestore = firebase.firestore();

export { projFirestore, projStorage };