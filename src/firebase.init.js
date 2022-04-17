// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-NJqaDInWvT10ANPQWAuOvnJTbtCf7Pc",
  authDomain: "learn-programming-7cd6b.firebaseapp.com",
  projectId: "learn-programming-7cd6b",
  storageBucket: "learn-programming-7cd6b.appspot.com",
  messagingSenderId: "710509329415",
  appId: "1:710509329415:web:17f2b844e161dff1c77ea2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;