import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAJrmelfm4dTV5eOhn3Z329iJ1Uz-SCkfo",
  authDomain: "finance-logger-a21d7.firebaseapp.com",
  projectId: "finance-logger-a21d7",
  storageBucket: "finance-logger-a21d7.appspot.com",
  messagingSenderId: "38215877352",
  appId: "1:38215877352:web:e076aa687199dd6f30ff5d"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }