import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

if (__DEV__) {
  // Connect to emulators in development
  // Note: verification of host is important for physical devices vs simulator/web
  const emulatorHost = 'localhost'; // Or your machine's IP if testing on device
  
  try {
    connectAuthEmulator(auth, `http://${emulatorHost}:9099`);
    connectFirestoreEmulator(db, emulatorHost, 8080);
    console.log('Connected to Firebase Emulators');
  } catch (e) {
    console.error('Failed to connect to Firebase Emulators:', e);
  }
}
