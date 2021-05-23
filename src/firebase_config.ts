import dotenv from 'dotenv';
dotenv.config();

export default {
	apiKey: process.env['FIREBASE_API_KEY'],
	authDomain: 'winepottle.firebaseapp.com',
	projectId: 'winepottle',
	storageBucket: 'winepottle.appspot.com',
	messagingSenderId: '118092403337',
	appId: '1:118092403337:web:1cf5c3e510b9b19b91ac58',
	measurementId: 'G-6KTPW3P72Y'
};
