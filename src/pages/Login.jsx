function Login() {
    return (
        <div className="page auth">
            <h2>Login</h2>

            <button className="social fb">Login with Facebook</button>
            <button className="social google">Login with Google</button>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="btn">Login</button>
        </div>
    )
}

export default Login

