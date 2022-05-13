import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyBk3rt6hul1YSGTlMDPdASAHjIyYx6-0yY",
  authDomain: "impact-b9995.firebaseapp.com",
  projectId: "impact-b9995",
  storageBucket: "impact-b9995.appspot.com",
  messagingSenderId: "917988747537",
  appId: "1:917988747537:web:64895bd8028f6212a744b0",
});

export const auth = getAuth(app);
export const db = getFirestore(app);
