import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7r_sScf4ZWiM0rB1JhvMaMwXUk8DEIms",
  authDomain: "rgitcollegeforum.firebaseapp.com",
  projectId: "rgitcollegeforum",
  storageBucket: "rgitcollegeforum.appspot.com",
  messagingSenderId: "375704606121",
  appId: "1:375704606121:web:fe2473820d174800b8a0b8",
  measurementId: "G-TMC2W0DJG1"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
