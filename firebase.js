// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrm719HlQm40WERjuAyiZYC78cST0ofQg",
  authDomain: "twitter-clone-b0fa9.firebaseapp.com",
  projectId: "twitter-clone-b0fa9",
  storageBucket: "twitter-clone-b0fa9.appspot.com",
  messagingSenderId: "168632414581",
  appId: "1:168632414581:web:b3fd810f5e63908120a33c",
  measurementId: "G-Y76BM484GX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
