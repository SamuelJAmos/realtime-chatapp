import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: process.env.API_KEY_HIDDEN,
  authDomain: process.env.AUTH_DOMAIN_HIDDEN,
  projectId: process.env.PROJECT_ID_HIDDEN,
  storageBucket: process.env.STORAGE_BUCKET_HIDDEN,
  messagingSenderId: process.env.MESSAGING_SENDER_ID_HIDDEN,
  appId: process.env.APP_ID_HIDDEN
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)