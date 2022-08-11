import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAl1K6CkEyzUvmV_idEn51QUd_wkEt5imQ",
  authDomain: "my-money-69aca.firebaseapp.com",
  projectId: "my-money-69aca",
  storageBucket: "my-money-69aca.appspot.com",
  messagingSenderId: "875312260389",
  appId: "1:875312260389:web:7bd5b4ea8bf096d4ed66cc"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }