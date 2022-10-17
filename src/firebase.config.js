// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGrPwd2SIPcZ31A3FUmCUD6EeGh9QFTk8",
    authDomain: "my-own-ecom-website.firebaseapp.com",
    projectId: "my-own-ecom-website",
    storageBucket: "my-own-ecom-website.appspot.com",
    messagingSenderId: "92099980026",
    appId: "1:92099980026:web:30fd99ae1b0be72edaf743"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app