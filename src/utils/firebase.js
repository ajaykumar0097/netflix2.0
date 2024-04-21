// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz-1wXv2NRybhNuPnqqomZLz1SvMKS1Bw",
  authDomain: "netflixgpt-983c7.firebaseapp.com",
  projectId: "netflixgpt-983c7",
  storageBucket: "netflixgpt-983c7.appspot.com",
  messagingSenderId: "481642011466",
  appId: "1:481642011466:web:ed033f454fa8730002bfb3",
  measurementId: "G-XYEFLKPVKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();