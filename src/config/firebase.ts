import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBXUqTA-ygv0gO5Vwjovq80c9Jn8dzFJrw',
  authDomain: 'prueba-ultragroup.firebaseapp.com',
  projectId: 'prueba-ultragroup',
  storageBucket: 'prueba-ultragroup.firebasestorage.app',
  messagingSenderId: '1073689153131',
  appId: '1:1073689153131:web:f9f480abfe6db17dfb6b2e',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
