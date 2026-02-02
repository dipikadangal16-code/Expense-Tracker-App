import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    appId: "YOUR_APP_ID"
};

var app = initializeApp(firebaseConfig);

var auth = getAuth(app);
var googleProvider = new GoogleAuthProvider();
var facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
