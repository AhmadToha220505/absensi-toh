// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYISnNhVbKUJnBqyd1tXLmeGyM5HOKQZE",
  authDomain: "absensi-737a6.firebaseapp.com",
  projectId: "absensi-737a6",
  storageBucket: "absensi-737a6.firebasestorage.app",
  messagingSenderId: "418456264948",
  appId: "1:418456264948:web:068cc4033e1cdde4df3ea1",
  measurementId: "G-JNQQLWYY76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);