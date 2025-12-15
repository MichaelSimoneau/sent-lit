import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

// Native Firebase SDK initializes automatically from native config files

export const auth = firebase.auth();
export const db = firebase.firestore();

if (__DEV__) {
  try {
    const emulatorHost = '10.0.2.2'; // Android Emulator localhost
    // For iOS Simulator, 'localhost' usually works
    
    auth.useEmulator(`http://${emulatorHost}:9099`);
    db.useEmulator(emulatorHost, 8080);
    console.log('Connected to Native Firebase Emulators');
  } catch (e) {
     // Ignore if already connected
  }
}
