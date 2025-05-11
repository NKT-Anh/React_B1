// filepath: e:\Nam-4\HK-2\ReactNative\LT\Buoi_1\Buoi_1\src\Buoi5\firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1ScXzKcTwXmPevuQpLJRRlolaCI9-UUU",
    authDomain: "toodoapp-3d100.firebaseapp.com",
    projectId: "toodoapp-3d100",
    storageBucket: "toodoapp-3d100.firebasestorage.app",
    messagingSenderId: "1032824930504",
    appId: "1:1032824930504:web:68cf8ef0cdaa6587ad25fd",
    measurementId: "G-G2K89E61KX"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);