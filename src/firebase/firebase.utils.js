import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAifbVyU_uhnNoz7C_PuBlR7U7EAnkgxp0",
  authDomain: "ecommerce-react-f13a7.firebaseapp.com",
  projectId: "ecommerce-react-f13a7",
  storageBucket: "ecommerce-react-f13a7.appspot.com",
  messagingSenderId: "984707636601",
  appId: "1:984707636601:web:063b1950c91065035e63a8",
  measurementId: "G-VP95ZC2H7V"
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
