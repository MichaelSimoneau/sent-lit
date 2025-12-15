import { Platform } from "react-native";
import { functions } from "../firebase";

// Platform-specific callable function helper
export const getCallable = (functionName: string) => {
  if (Platform.OS === "web") {
    // Web: Use Firebase JS SDK
    const { httpsCallable } = require("firebase/functions");
    return httpsCallable(functions, functionName);
  } else {
    // Native: Use React Native Firebase
    return functions.httpsCallable(functionName);
  }
};

