import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBjDLSjZnhxSfgJPTzrEFQGYQExtdlIUos",
  authDomain: "minonooo-f0375.firebaseapp.com",
  projectId: "minonooo-f0375",
  storageBucket: "minonooo-f0375.firebasestorage.app",
  messagingSenderId: "451538126624",
  appId: "1:451538126624:web:4bf39fdbb9547d5110f945",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
