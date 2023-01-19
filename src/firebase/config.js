// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, Firestore, getDocs, getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkQyiX26DJUEMnyKeRO9_EB_oP4Kukorw",
  authDomain: "bellegrovedevelopments-6c779.firebaseapp.com",
  databaseURL: "https://bellegrovedevelopments-6c779-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bellegrovedevelopments-6c779",
  storageBucket: "bellegrovedevelopments-6c779.appspot.com",
  messagingSenderId: "799117628850",
  appId: "1:799117628850:web:e7670f00aaebf83ad080ab",
  measurementId: "G-8J7C3C7R9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var db = getFirestore(app);

  const testimonialData = await getDocs(collection(db, "testimonials"));
  
  // Add a new document in collection "cities" with ID 'LA'


export { testimonialData, db }
