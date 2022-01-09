import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAkT-3w-IN8jh3Y43swl64hYqmDZTOseG8",
    authDomain: "crwn-site.firebaseapp.com",
    projectId: "crwn-site",
    storageBucket: "crwn-site.appspot.com",
    messagingSenderId: "840108482451",
    appId: "1:840108482451:web:292b7f47c32e6e19fd9266",
    measurementId: "G-X48HB6MN7N"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;