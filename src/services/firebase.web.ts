import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';

// Fallback Firebase config (from firebase.config.tsx if env vars not available)
const FALLBACK_CONFIG = {
  apiKey: "AIzaSyCe2mE9pWr0psIIRnuMabEFpMS-k-A3Pwg",
  authDomain: "sentinel-litigation.firebaseapp.com",
  projectId: "sentinel-litigation",
  storageBucket: "sentinel-litigation.firebasestorage.app",
  messagingSenderId: "488525806220",
  appId: "1:488525806220:web:65d7a0e5cb16f4e322d9a9",
};

// Firebase configuration - use env vars if available, otherwise fallback
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY || FALLBACK_CONFIG.apiKey,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || FALLBACK_CONFIG.authDomain,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID || FALLBACK_CONFIG.projectId,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET || FALLBACK_CONFIG.storageBucket,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || FALLBACK_CONFIG.messagingSenderId,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID || FALLBACK_CONFIG.appId,
};

// Validate required Firebase config values
const requiredFields = ['apiKey', 'authDomain', 'projectId', 'appId'] as const;
const missingFields = requiredFields.filter(field => !firebaseConfig[field]);

if (missingFields.length > 0) {
  const errorMsg = `Missing required Firebase configuration: ${missingFields.join(', ')}. Please check your .env file and ensure EXPO_PUBLIC_FIREBASE_* variables are set.`;
  console.error(errorMsg);
  if (typeof window !== 'undefined') {
    console.error('Current env values:', {
      apiKey: firebaseConfig.apiKey ? `${firebaseConfig.apiKey.substring(0, 10)}...` : 'MISSING',
      authDomain: firebaseConfig.authDomain || 'MISSING',
      projectId: firebaseConfig.projectId || 'MISSING',
    });
  }
  throw new Error(errorMsg);
}

// Log if using fallback config (helpful for debugging)
if (!process.env.EXPO_PUBLIC_FIREBASE_API_KEY && typeof window !== 'undefined') {
  console.warn('Firebase: Using fallback configuration. Set EXPO_PUBLIC_FIREBASE_* env vars for production.');
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);

if (__DEV__) {
  // Connect to emulators in development
  // Note: verification of host is important for physical devices vs simulator/web
  const emulatorHost = 'localhost'; // Or your machine's IP if testing on device
  
  try {
    connectAuthEmulator(auth, `http://${emulatorHost}:9099`);
    connectFirestoreEmulator(db, emulatorHost, 8080);
    connectFunctionsEmulator(functions, emulatorHost, 5001);
    console.log('Connected to Firebase Emulators');
  } catch (e) {
    console.error('Failed to connect to Firebase Emulators:', e);
  }
}
