
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCpK83E0yVYfpxxLGgG3y5BE85XaQzJE-k",
  authDomain: "padelclub-f479f.firebaseapp.com",
  projectId: "padelclub-f479f",
  storageBucket: "padelclub-f479f.appspot.com",
  messagingSenderId: "164258347782",
  appId: "1:164258347782:web:31d598829099a67eae3c87",
  measurementId: "G-Y9VDKK5LHQ"
};


!firebase.apps.length &&
  firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const {displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null

    onChange(normalizedUser)
  })
}

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return firebase
    .auth().signInWithPopup(googleProvider)
}


