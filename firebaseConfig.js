// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkJiArwDQWg7ohNm-yQ66QCt4lCnbZvKo",
  authDomain: "fir-char-12186.firebaseapp.com",
  projectId: "fir-char-12186",
  storageBucket: "fir-char-12186.appspot.com",
  messagingSenderId: "284891235002",
  appId: "1:284891235002:web:36ff73ad611f691e36b883",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const usersRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
