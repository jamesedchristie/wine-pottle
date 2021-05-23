import admin, { ServiceAccount } from "firebase-admin";
import dotenv from 'dotenv';
dotenv.config();

const serviceAccount = {
  type: "service_account",
  project_id: "winepottle",
  private_key_id: process.env['FIREBASE_API_KEY'],
  private_key: process.env['FIREBASE_ADMIN_PRIVATE_KEY'].replace(/\\n/g, '\n'),
  client_email: process.env['FIREBASE_ADMIN_CLIENT_EMAIL'],
  client_id: process.env['FIREBASE_ADMIN_CLIENT_ID'],
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: process.env['FIREBASE_ADMIN_CLIENT_CERT_URL']
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
  });
};

const firebase = admin;
const firestore = admin.firestore();
const auth = admin.auth();

export { firebase, firestore, auth };