// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUiWffuJqJ3B6_0jqRfvJ_ClzfB7HyTBc",
  authDomain: "login-register-firebase-bb63f.firebaseapp.com",
  projectId: "login-register-firebase-bb63f",
  storageBucket: "login-register-firebase-bb63f.appspot.com",
  messagingSenderId: "1005716780545",
  appId: "1:1005716780545:web:aa6e263ed8ea14b8cbb200",
  measurementId: "G-NLWXZYSPW6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//generamos objeto auth, para crear usuarios, logearlos con google y demos
export const auth = getAuth(app);

const analytics = getAnalytics(app);