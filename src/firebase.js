import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCTdASnQoNYu-6_nHUm0yyDncsmDvXFFmg",
    authDomain: "expense-tracker-9b5ed.firebaseapp.com",
    projectId: "expense-tracker-9b5ed",
    appId: "1:659129200753:web:4f979942eb9be417f7ebd0"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

export { auth, googleProvider, facebookProvider }
