import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAz9oNMa0tZD2e7x0qmCDuj4sigZrT7hoY",
  authDomain: "astrocalendar-2e8bb.firebaseapp.com",
  projectId: "astrocalendar-2e8bb",
  storageBucket: "astrocalendar-2e8bb.firebasestorage.app",
  messagingSenderId: "240494256002",
  appId: "1:240494256002:web:29d05bc63790198aed799b",
  measurementId: "G-76YN5KYM61"
};

const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

