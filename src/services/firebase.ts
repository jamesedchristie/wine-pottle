/* eslint-disable @typescript-eslint/no-explicit-any */
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import config from '../firebase_config';

const ssrAuthed = (window as any).ssrUser;

const firebase = (window as any).firebase || initializeApp(config);
(window as any).firebase = firebase;
const auth = getAuth(firebase);
const firestore = getFirestore(firebase);

onAuthStateChanged(auth, (u) => {
  console.log({ ssrAuthed, u });
});

export {
  firebase,
  auth,
  firestore
};



