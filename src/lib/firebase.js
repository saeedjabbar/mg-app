import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { seedDatabase } from '../seed';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

console.log(process.env.REACT_APP_FIREBASE_API_KEY);

firebase.initializeApp(firebaseConfig);
firebase.firestore();

console.log('firebase', firebase);
console.log(firebaseConfig);


const FieldValue = firebase.firestore.FieldValue;
seedDatabase(firebase);

export { firebase, FieldValue };