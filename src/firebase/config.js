import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCF_4Flsh-F8vn9XAkyZ5RuQlnKCCCSMyw",
  authDomain: "thedojoapp-8047b.firebaseapp.com",
  projectId: "thedojoapp-8047b",
  storageBucket: "thedojoapp-8047b.appspot.com",
  messagingSenderId: "282924098810",
  appId: "1:282924098810:web:ede33352ddbbb82d0b5543",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
