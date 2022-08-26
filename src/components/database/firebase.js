import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDL4LNucD6wfBrpuNd1GRhX_RfGTEERdFM",
  authDomain: "skafee-ec3ff.firebaseapp.com",
  projectId: "skafee-ec3ff",
  storageBucket: "skafee-ec3ff.appspot.com",
  messagingSenderId: "538510040976",
  appId: "1:538510040976:web:ace8654a4300326e5e9d15",
  measurementId: "G-9S3B4QZ1PD"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default firebase



