// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBLMFu1Xk-ulUOzVkkWIyxUF9ZlAucc2E0',
  authDomain: 'react-app-courses-266ec.firebaseapp.com',
  projectId: 'react-app-courses-266ec',
  storageBucket: 'react-app-courses-266ec.firebasestorage.app',
  messagingSenderId: '615530372459',
  appId: '1:615530372459:web:01e4cf0c0506f235f3402e',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
