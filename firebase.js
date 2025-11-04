// Firebase設定
const firebaseConfig = {
  apiKey: "AIzaSyAhzyGSVtxvd3DeReR13iVybxAbx8W8vrg",
  authDomain: "point-3d4a0.firebaseapp.com",
  projectId: "point-3d4a0",
  storageBucket: "point-3d4a0.firebasestorage.app",
  messagingSenderId: "920865912707",
  appId: "1:920865912707:web:608ea8cc097247f3d728b6"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
