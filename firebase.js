// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh1EyJRpnh5kPAQrIaDhUMWnFN0fwrMrQ",
  authDomain: "twitter-8421a.firebaseapp.com",
  projectId: "twitter-8421a",
  storageBucket: "twitter-8421a.appspot.com",
  messagingSenderId: "521016318131",
  appId: "1:521016318131:web:4a7605a81316c3ec60b8c6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };