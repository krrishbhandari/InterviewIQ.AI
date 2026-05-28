

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain:"interviewai-689f1.firebaseapp.com",
  projectId: "interviewai-689f1",
  storageBucket: "interviewai-689f1.firebasestorage.app",
  messagingSenderId: "161808584023",
  appId: "1:161808584023:web:b18167598abaee6ac58212"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth , provider};