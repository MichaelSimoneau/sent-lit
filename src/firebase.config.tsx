// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe2mE9pWr0psIIRnuMabEFpMS-k-A3Pwg",
  authDomain: "sentinel-litigation.firebaseapp.com",
  projectId: "sentinel-litigation",
  storageBucket: "sentinel-litigation.firebasestorage.app",
  messagingSenderId: "488525806220",
  appId: "1:488525806220:web:65d7a0e5cb16f4e322d9a9",
  measurementId: "G-7QS5Z8NNV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);