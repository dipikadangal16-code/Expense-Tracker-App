import { useState } from "react"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { Link } from "react-router-dom"

function Register() {
    var emailState = useState("")
    var passwordState = useState("")

    var email = emailState[0]
    var setEmail = emailState[1]
    var password = passwordState[0]
    var setPassword = passwordState[1]

    function registerUser(e) {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then(function () { alert("Registration successful") })
            .catch(function (error) { alert(error.message) })
    }

    return (
        <div className="page auth">
            <h2>Register</h2>

            <form onSubmit={registerUser}>
                <input type="email" placeholder="Email" onChange={function (e) { setEmail(e.target.value) }} required />
                <input type="password" placeholder="Password" onChange={function (e) { setPassword(e.target.value) }} required />
                <button className="btn" type="submit">Register</button>
            </form>

            <p>Already registered? <Link to="/login">Login</Link></p>
        </div>
    )
}

export default Register
