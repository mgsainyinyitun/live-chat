import "firebase/auth";

import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqgMd4MD3Ijs50G1A0Xg2sohirspVpSB4",
  authDomain: "vue-firebase-cca7e.firebaseapp.com",
  projectId: "vue-firebase-cca7e",
  storageBucket: "vue-firebase-cca7e.appspot.com",
  messagingSenderId: "280328785079",
  appId: "1:280328785079:web:e77f6175c4bacc17af5132",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const timestamp = serverTimestamp;

// Auth
const auth = getAuth();
export { auth, db, timestamp };

