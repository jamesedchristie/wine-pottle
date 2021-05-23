export default {};

// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getFirestore } from 'firebase/firestore';
// import config from '../firebase_config';

// let ssrAuthed, firebase, auth, firestore;

// if (typeof window !== undefined) {
//   ssrAuthed = (window as any).ssrUser;
  
//   firebase = (window as any).firebase || initializeApp(config);
//   (window as any).firebase = firebase;
//   auth = getAuth(firebase);
//   firestore = getFirestore(firebase);
// }

// onAuthStateChanged(auth, (u) => {
//   console.log({ ssrAuthed, u });
// });

// export {
//   firebase,
//   auth,
//   firestore
// };



