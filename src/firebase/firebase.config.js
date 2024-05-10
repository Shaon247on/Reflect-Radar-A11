// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj24ljkYXA__m8C2ynAYMXZWu6xfNR7Ig",
  authDomain: "assignment-11-battlefield.firebaseapp.com",
  projectId: "assignment-11-battlefield",
  storageBucket: "assignment-11-battlefield.appspot.com",
  messagingSenderId: "991181768867",
  appId: "1:991181768867:web:fb324dcc68f5ea595b1716"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth