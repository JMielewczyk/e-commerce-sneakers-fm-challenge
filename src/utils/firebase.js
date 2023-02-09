import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_PUBLIC_API_KEY,
  authDomain: process.env.REACT_APP_PUBLIC_API_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PUBLIC_API_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PUBLIC_API_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PUBLIC_API_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PUBLIC_API_APP_ID,
  measurementId: process.env.REACT_APP_PUBLIC_API_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
