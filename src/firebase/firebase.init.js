// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// DANGER--- DO NOT SHARE CONFIG IN PUBLIC
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDygBAQLBGk3qwLP4AKfWxD6fGnEYb6ohQ",
  authDomain: "pet-care-in-winter-a48b0.firebaseapp.com",
  projectId: "pet-care-in-winter-a48b0",
 storageBucket: "pet-care-in-winter-a48b0.appspot.com",

  messagingSenderId: "432794932237",
  appId: "1:432794932237:web:27d07f37d6ee3067457144"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
