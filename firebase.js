import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUd4qQd5Y6Bvjug5vmUm_C8jkPwtTWvnY",
  authDomain: "test-e5f58.firebaseapp.com",
  projectId: "test-e5f58",
  storageBucket: "test-e5f58.appspot.com",
  messagingSenderId: "863495618789",
  appId: "1:863495618789:web:bf758c594185ac9c75540c",
  measurementId: "G-JRXD9CFQZK",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
