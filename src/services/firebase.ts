import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';

import config from '../firebase_config';

firebase.initializeApp(config);

export const auth = firebase.auth();
export const googleAuth = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();

export const usersCollection = firestore.collection('users');