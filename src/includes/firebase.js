import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBkqH-RtLLKco0fWftiYNVrM3w156--P1I',
  authDomain: 'music-ac000.firebaseapp.com',
  projectId: 'music-ac000',
  storageBucket: 'music-ac000.appspot.com',
  messagingSenderId: '82739707617',
  appId: '1:82739707617:web:e0d599bc285fbbb1a141a0',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth, db, usersCollection, storage, songsCollection, commentsCollection,
};
