// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  doc,
  onSnapshot,
  collection,
  query,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp8PTUFMun4W--9PmU9IImc0mVdQivsUE",
  authDomain: "capstone-93029.firebaseapp.com",
  projectId: "capstone-93029",
  storageBucket: "capstone-93029.appspot.com",
  messagingSenderId: "790713839748",
  appId: "1:790713839748:web:dc8aba150bffc4671912d1",
  measurementId: "G-9F0H50KY9F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getFirestore(app);

export { database, doc, onSnapshot, collection, query };
