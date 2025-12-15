import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

// Native Firebase SDK initializes automatically from native config files
// (GoogleService-Info.plist and google-services.json)

export const auth = firebase.auth();
export const db = firebase.firestore();

