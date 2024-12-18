// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-web-mern-cc698.firebaseapp.com",
  projectId: "blog-web-mern-cc698",
  storageBucket: "blog-web-mern-cc698.firebasestorage.app",
  messagingSenderId: "923355106976",
  appId: "1:923355106976:web:e20fd5c40b0284e9c383c5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
