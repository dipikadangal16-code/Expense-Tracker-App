import { useState } from "react"
import { auth, googleProvider, facebookProvider } from "../firebase"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { Link } from "react-router-dom"

function Login() {
    var emailState = useState("")
    var passwordState = useState("")

    var email = emailState[0]
    var setEmail = emailState[1]
    var password = passwordState[0]
    var setPassword = passwordState[1]

    function loginEmail(e) {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(function () { alert("Login successful") })
            .catch(function (error) { alert(error.message) })
    }

    function loginGoogle() {
        signInWithPopup(auth, googleProvider)
            .then(function () { alert("Google login successful") })
            .catch(function (error) { alert(error.message) })
    }

    function loginFacebook() {
        signInWithPopup(auth, facebookProvider)
            .then(function () { alert("Facebook login successful") })
            .catch(function (error) { alert(error.message) })
    }

    return (
        <div className="page auth">
            <h2>Login</h2>

            <button className="social google" onClick={loginGoogle}>
                Login with Google
            </button>
            <button className="social fb" onClick={loginFacebook}>
                Login with Facebook
            </button>

            <form onSubmit={loginEmail}>
                <input type="email" placeholder="Email" onChange={function (e) { setEmail(e.target.value) }} required />
                <input type="password" placeholder="Password" onChange={function (e) { setPassword(e.target.value) }} required />
                <button className="btn" type="submit">Login</button>
            </form>

            <p>New user? <Link to="/register">Register</Link></p>
        </div>
    )
}

export default Login

