// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZg6WMrGDHY1eIal9QQE_-T2-DYRh_dKg",
  authDomain: "bipay-9f4f2.firebaseapp.com",
  projectId: "bipay-9f4f2",
  storageBucket: "bipay-9f4f2.appspot.com",
  messagingSenderId: "59285623453",
  appId: "1:59285623453:web:8a4fad990bf0624acffa74"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);