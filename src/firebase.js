import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcpwYJDNGnymlpVJMDOwz2OGmaQlaw_NQ",
  authDomain: "linkedin-clone-yt-85c34.firebaseapp.com",
  projectId: "linkedin-clone-yt-85c34",
  storageBucket: "linkedin-clone-yt-85c34.appspot.com",
  messagingSenderId: "743616791248",
  appId: "1:743616791248:web:d3ad3ec2c3545a5fde94d5",
  measurementId: "G-N1TMN34NL3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
