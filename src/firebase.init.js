// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBC_1BeDkzbWeH5Zbv53HN3lY6dKuc4NR0",
    authDomain: "hall-management-system-cd7ad.firebaseapp.com",
    projectId: "hall-management-system-cd7ad",
    storageBucket: "hall-management-system-cd7ad.appspot.com",
    messagingSenderId: "861993382956",
    appId: "1:861993382956:web:f2ad9bee6a9f70cdd68d89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;