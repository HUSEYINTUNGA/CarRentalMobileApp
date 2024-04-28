// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP4JoKgvZCNpZA76XbhQeWv3mRQDV-tlc",
  authDomain: "carrentalmobileapp-c213d.firebaseapp.com",
  projectId: "carrentalmobileapp-c213d",
  storageBucket: "carrentalmobileapp-c213d.appspot.com",
  messagingSenderId: "319347854841",
  appId: "1:319347854841:web:dc8d5c7f677515a1dac128"
};

// Initialize Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth=firebase.auth();
export {auth};