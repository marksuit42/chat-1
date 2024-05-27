// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUupozHWD9FtWK6gYxfk_bheu-ReO1W2o",
  authDomain: "react-chat-e2e06.firebaseapp.com",
  projectId: "react-chat-e2e06",
  storageBucket: "react-chat-e2e06.appspot.com",
  messagingSenderId: "102129589967",
  appId: "1:102129589967:web:003cddff0cca127e1ee1ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
