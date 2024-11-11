// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXW6ivQ0AWm7WjHdvGEiBlDlV4kR6-5Gw",
  authDomain: "email-password-auth-95077.firebaseapp.com",
  projectId: "email-password-auth-95077",
  storageBucket: "email-password-auth-95077.firebasestorage.app",
  messagingSenderId: "917237448395",
  appId: "1:917237448395:web:192fb65f16d7713b15e54e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);