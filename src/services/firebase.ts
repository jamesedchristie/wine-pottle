import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import 'firebase/compat/firestore';

import config from '../firebase_config';

firebase.initializeApp(config);

export const auth = firebase.auth();
export const googleAuth = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();

export const usersCollection = firestore.collection('users');
export const venuesCollection = firestore.collection('venues');
export const venueMembersCollection = firestore.collection('venueMembers');
export const postsCollection = firestore.collection('posts');
export const articlesCollection = firestore.collection('articles');
export const winelistCollection = firestore.collection('wineLists');
