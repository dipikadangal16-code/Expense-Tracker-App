
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"

// Firebase config from your console
var firebaseConfig = {
    apiKey: "AIzaSyCTdASnQoNYu-6_nHUm0yyDncsmDvXFFmg",
    authDomain: "expense-tracker-9b5ed.firebaseapp.com",
    projectId: "expense-tracker-9b5ed",
    appId: "1:659129200753:web:4f979942eb9be417f7ebd0"
}

// Initialize Firebase
var app = initializeApp(firebaseConfig)
var auth = getAuth(app)
var googleProvider = new GoogleAuthProvider()
var facebookProvider = new FacebookAuthProvider()

export { auth, googleProvider, facebookProvider }
