import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY_HIDDEN,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN_HIDDEN,
  projectId: process.env.REACT_APP_PROJECT_ID_HIDDEN,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET_HIDDEN,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID_HIDDEN,
  appId: process.env.REACT_APP_APP_ID_HIDDEN,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);