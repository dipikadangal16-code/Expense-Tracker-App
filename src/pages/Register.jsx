function Register() {
    return (
        <div className="page auth">
            <h2>Register</h2>

            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="btn">Register</button>
        </div>
    )
}

export default Register
