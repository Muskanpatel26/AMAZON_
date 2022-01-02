import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAmN_-5Zz_OBLgpRVt-6KsoCs8ySnhvttM",
    authDomain: "project-7aad4.firebaseapp.com",
    projectId: "project-7aad4",
    storageBucket: "project-7aad4.appspot.com",
    messagingSenderId: "149895464047",
    appId: "1:149895464047:web:26a9b1debc2d1f0abff99a"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth };