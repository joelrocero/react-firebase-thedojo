import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCf_JfLaobQeljpOD8nS2ztmT2ZokResPg',
  authDomain: 'thedojo-7790f.firebaseapp.com',
  projectId: 'thedojo-7790f',
  storageBucket: 'thedojo-7790f.appspot.com',
  messagingSenderId: '195676934252',
  appId: '1:195676934252:web:103304f26712bd89068849',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }
