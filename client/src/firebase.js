// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-fd974.firebaseapp.com",
    projectId: "mern-estate-fd974",
    storageBucket: "mern-estate-fd974.appspot.com",
    messagingSenderId: "1082654053307",
    appId: "1:1082654053307:web:6d0e469e0326f6c3a3aa9e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
