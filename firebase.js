// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhzyGSVtxvd3DeReR13iVybxAbx8W8vrg",
  authDomain: "point-3d4a0.firebaseapp.com",
  projectId: "point-3d4a0",
  storageBucket: "point-3d4a0.firebasestorage.app",
  messagingSenderId: "920865912707",
  appId: "1:920865912707:web:608ea8cc097247f3d728b6",
  measurementId: "G-Z8JR2W1TC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
