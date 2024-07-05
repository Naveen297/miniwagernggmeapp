import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBcBRRXAwgFxDgW4zldXrDdswD0PPOb9oU",
    authDomain: "miniwageringgamepp.firebaseapp.com",
    projectId: "miniwageringgamepp",
    storageBucket: "miniwageringgamepp.appspot.com",
    messagingSenderId: "77023561668",
    appId: "1:77023561668:web:6196c9ebb0b5246d5dc691",
    measurementId: "G-Y2B7X77RFJ"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
