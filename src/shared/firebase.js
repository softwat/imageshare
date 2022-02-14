import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAQX3w2eCvX2uV9bFZvgSn0MScs6ULClOY",
  authDomain: "imageshare-325cc.firebaseapp.com",
  projectId: "imageshare-325cc",
  storageBucket: "imageshare-325cc.appspot.com",
  messagingSenderId: "497234783327",
  appId: "1:497234783327:web:082ad10e6c6179b54b7fea",
  measurementId: "G-VWX8XMP3S5",
};

firebase.initializeApp(firebaseConfig);
const apiKey = firebaseConfig.apiKey;

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();
export { auth, apiKey, firestore, storage, realtime };
