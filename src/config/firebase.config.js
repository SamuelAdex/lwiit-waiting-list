// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUeWG2iHhxM0tENB-jvnH2UhzjyMH-UMA",
  authDomain: "lwiit-wait-list.firebaseapp.com",
  projectId: "lwiit-wait-list",
  storageBucket: "lwiit-wait-list.appspot.com",
  messagingSenderId: "70353906954",
  appId: "1:70353906954:web:8cdf7c2106febcddb15ef3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db }