import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY as string,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN as string,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID as string,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET as string,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID as string,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID as string
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const firestore = getFirestore(app);
export const storage = getStorage();