// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe-TU9SAcOWiyWaqkCZhiLVxwC2tI6w6c",
  authDomain: "inventory-management-354ce.firebaseapp.com",
  projectId: "inventory-management-354ce",
  storageBucket: "inventory-management-354ce.appspot.com",
  messagingSenderId: "893241861603",
  appId: "1:893241861603:web:7295468c4639def7c16cd6",
  measurementId: "G-HG24139S8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;