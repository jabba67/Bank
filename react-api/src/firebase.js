import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBQaHWVPad1LJTuYfT0uqUwY1Jcdxr-V7c",
    authDomain: "bankauthentication-22b35.firebaseapp.com",
    databaseURL: "https://bankauthentication-22b35.firebaseio.com",
    projectId: "bankauthentication-22b35",
    storageBucket: "bankauthentication-22b35.appspot.com",
    messagingSenderId: "213888284001",
    appId: "1:213888284001:web:1d1c36a2442d0e79ab4120"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();