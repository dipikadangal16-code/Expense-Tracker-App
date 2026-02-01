import { useState } from "react";

function Login() {
    const [isSignup, setIsSignup] = useState(false);

    return (
        <div style={styles.container}>
            <div style={styles.card}>

                {/* Social Login */}
                <h2 style={{ color: "#0a1f44" }}>
                    {isSignup ? "Create Account" : "Login"}
                </h2>

                <button style={{ ...styles.socialBtn, background: "#1877F2" }}>
                    Continue with Facebook
                </button>

                <button style={{ ...styles.socialBtn, background: "#4285F4" }}>
                    Continue with Google
                </button>

                <p style={{ margin: "10px 0" }}>or</p>

                {/* Form */}
                <input
                    type="email"
                    placeholder="Email"
                    style={styles.input}
                />

                <input
                    type="password"
                    placeholder="Password"
                    style={styles.input}
                />

                {isSignup && (
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        style={styles.input}
                    />
                )}

                <button style={styles.loginBtn}>
                    {isSignup ? "Sign Up" : "Login"}
                </button>

                <p style={{ marginTop: "10px" }}>
                    {isSignup ? "Already have an account?" : "Don't have an account?"}
                    <span
                        style={styles.toggle}
                        onClick={() => setIsSignup(!isSignup)}
                    >
                        {isSignup ? " Login" : " Sign Up"}
                    </span>
                </p>

            </div>
        </div>
    );
}

export default Login;

/* Styles */
const styles = {
    container: {
        height: "100vh",
        background: "#0a1f44",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        background: "#fff",
        padding: "30px",
        width: "320px",
        borderRadius: "8px",
        textAlign: "center",
    },
    socialBtn: {
        width: "100%",
        padding: "10px",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        marginBottom: "10px",
        cursor: "pointer",
    },
    input: {
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    loginBtn: {
        width: "100%",
        padding: "10px",
        background: "#0a1f44",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    toggle: {
        color: "#0a1f44",
        fontWeight: "bold",
        cursor: "pointer",
        marginLeft: "5px",
    },
};
