// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4Ju-9pnbX2JKV1fX_oLdYw1owaVYHDB8",
  authDomain: "b10-a11-auth.firebaseapp.com",
  projectId: "b10-a11-auth",
  storageBucket: "b10-a11-auth.firebasestorage.app",
  messagingSenderId: "281735842129",
  appId: "1:281735842129:web:75ffe942545b3585396b70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);