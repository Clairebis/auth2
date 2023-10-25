// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOLIWE2KotVtzW0l_zVixDnClMYc-NyCg",
  authDomain: "react-firebase-authentic-ba936.firebaseapp.com",
  projectId: "react-firebase-authentic-ba936",
  storageBucket: "react-firebase-authentic-ba936.appspot.com",
  messagingSenderId: "11087785342",
  appId: "1:11087785342:web:e75758e1bc1321eef3572f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
