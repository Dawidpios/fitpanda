import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const {
  FIREBASE_API,
  FIREBASE_AUTHDOMAIN,
  FIREBASE_projectId,
  FIREBASE_messagingSenderId,
  FIREBASE_appId,
  FIREBASE_measurementId,
} = process.env;

const firebaseConfig = {
  apiKey: FIREBASE_API,
  authDomain: FIREBASE_AUTHDOMAIN,
  projectId: `${FIREBASE_projectId}`,
  storageBucket: `fitpanda-b974c.appspot.com`,
  messagingSenderId: `${FIREBASE_messagingSenderId}`,
  appId: `${FIREBASE_appId}`,
  measurementId: `${FIREBASE_measurementId}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
