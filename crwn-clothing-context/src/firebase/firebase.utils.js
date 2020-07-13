import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDPXcwndiatxr7XdKWIwCvQYZwyttdRNtA",
  authDomain: "crwn-db-fa58b.firebaseapp.com",
  databaseURL: "https://crwn-db-fa58b.firebaseio.com",
  projectId: "crwn-db-fa58b",
  storageBucket: "crwn-db-fa58b.appspot.com",
  messagingSenderId: "197224584789",
  appId: "1:197224584789:web:de4ce76725d0f59889e6dc",
  measurementId: "G-50MEZZ1TP4"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
