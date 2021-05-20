import admin, { ServiceAccount } from "firebase-admin";
import serviceAccount from '../../winepottle-firebase-adminsdk-3fw9u-e8fd1fe413.js';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
  });
};

const firebase = admin;
const firestore = admin.firestore();
const auth = admin.auth();

export { firebase, firestore, auth };