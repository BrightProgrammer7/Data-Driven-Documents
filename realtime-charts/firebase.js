// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";

console.log(import.meta.env.FIREBASE_KEY);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_KEY,
  authDomain: "realtime-charts-d3.firebaseapp.com",
  projectId: "realtime-charts-d3",
  storageBucket: "realtime-charts-d3.appspot.com",
  messagingSenderId: import.meta.env.MSG_ID,
  appId: import.meta.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
