// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBvcf4v9QaPFVL5X4U6IKO4I2S5SaBPiaw",
  authDomain: "calmly-4f80d.firebaseapp.com",
  projectId: "calmly-4f80d",
  storageBucket: "calmly-4f80d.appspot.com",
  messagingSenderId: "1033110917024",
  appId: "1:1033110917024:web:aebd244f782803be7adec5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
