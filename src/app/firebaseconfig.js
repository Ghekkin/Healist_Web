// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvIdtEigp8ZS_o9IkK469ZlqPxuuvI-1Q",
  authDomain: "healist-467d2.firebaseapp.com",
  projectId: "healist-467d2",
  storageBucket: "healist-467d2.appspot.com",
  messagingSenderId: "1080277926926",
  appId: "1:1080277926926:web:d939302e39eefe2c87e85f",
  measurementId: "G-0Z44T86TJ4",
};

// Initialize Firebase
export const auth = getAuth(initializeApp(firebaseConfig));

initializeApp(firebaseConfig);
// init services
const db = getFirestore();

//collection ref
export const colRef = collection(db, "users");
