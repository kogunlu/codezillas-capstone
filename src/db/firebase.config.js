// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCSOPX4O4elyMeVT3rZe9Gia8tGKEzkLeQ',
  authDomain: "online-therapist.firebaseapp.com",
  projectId: "online-therapist",
  storageBucket: "online-therapist.appspot.com",
  messagingSenderId: "2406349020",
  appId: "1:2406349020:web:ebcea30b799a4c24a41c19",
  measurementId: "G-CGDS5EWHDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db

