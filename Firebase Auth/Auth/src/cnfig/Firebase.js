// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwg8scujcrssuOfEZLzMwU6m-pBU_SuWs",
  authDomain: "auth-dec95.firebaseapp.com",
  projectId: "auth-dec95",
  storageBucket: "auth-dec95.firebasestorage.app",
  messagingSenderId: "141777726511",
  appId: "1:141777726511:web:ddc23be00b60b87c196ada",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
