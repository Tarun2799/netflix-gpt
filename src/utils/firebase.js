// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhPW0lHR08xIw7x24q4OU7g6Ib_Aeb06Y",
  authDomain: "netflixgpt-9fa56.firebaseapp.com",
  projectId: "netflixgpt-9fa56",
  storageBucket: "netflixgpt-9fa56.firebasestorage.app",
  messagingSenderId: "1042343536179",
  appId: "1:1042343536179:web:e34954515c30a52f52a546",
  measurementId: "G-0B4GM3FLJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();