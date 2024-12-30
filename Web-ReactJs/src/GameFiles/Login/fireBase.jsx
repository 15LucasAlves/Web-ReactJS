import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

//GetAuth Method is used to Configure our app to use Firebase Authentication
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB2_huYknvhB0aZatM3QxEeNM9WN31BKrw",
    authDomain: "web-reactjs-35bf5.firebaseapp.com",
    projectId: "web-reactjs-35bf5",
    storageBucket: "web-reactjs-35bf5.firebasestorage.app",
    messagingSenderId: "265729216071",
    appId: "1:265729216071:web:a6947b5ec2b7d5bdbf2b62",
    measurementId: "G-1XJ9VBWB4V"
  };


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);