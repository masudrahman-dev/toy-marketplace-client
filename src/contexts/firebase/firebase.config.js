// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBdwiIq3ZNdGFLpvRL68J9YijFjRHbHOI",
  authDomain: "toy-marketplace-client-ddd63.firebaseapp.com",
  projectId: "toy-marketplace-client-ddd63",
  storageBucket: "toy-marketplace-client-ddd63.appspot.com",
  messagingSenderId: "179439304068",
  appId: "1:179439304068:web:453ee4be19ec86b72fb1d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;