import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Temporary mock configuration to prevent Firebase errors
// Replace with actual Firebase config when you have valid credentials
const firebaseConfig = {
    "apiKey": "mock-api-key",
    "authDomain": "mock-project.firebaseapp.com",
    "projectId": "mock-project",
    "storageBucket": "mock-project.appspot.com",
    "messagingSenderId": "123456789",
    "appId": "1:123456789:web:mock-app-id"
}

// Initialize Firebase with mock config
let auth = null;
let provider = null;

try {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    provider = new GoogleAuthProvider();
} catch (error) {
    console.warn("Firebase initialization failed, using mock auth:", error);
    // Create mock auth objects to prevent app crashes
    auth = {
        currentUser: null,
        signOut: () => Promise.resolve(),
        onAuthStateChanged: () => () => {}
    };
    provider = {};
}

export { auth, provider };
