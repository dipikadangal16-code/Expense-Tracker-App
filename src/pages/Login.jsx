import { useForm } from "react-hook-form"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../firebase"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

function Login({ loginUpdate }) {
    var navigate = useNavigate()
    var form = useForm()
    var register = form.register
    var handleSubmit = form.handleSubmit

    // Email/Password login
    function onSubmit(data) {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(function (result) {
                Cookies.set("uid", result.user.uid)
                loginUpdate() // notify App to re-render
                navigate("/") // go to home
            })
            .catch(function (error) {
                alert(error.message)
            })
    }

    // Google login
    function loginGoogle() {
        signInWithPopup(auth, googleProvider)
            .then(function (result) {
                Cookies.set("uid", result.user.uid)
                Cookies.set("name", result.user.displayName)
                Cookies.set("token", result.user.accessToken)
                loginUpdate() // notify App to re-render
                navigate("/") // go to home
            })
            .catch(function (error) {
                alert(error.message)
            })
    }

    return (
        <div style={{
            padding: "40px",
            backgroundColor: "#eaf4ff",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <h2 style={{ color: "#0b3c6d" }}>Login</h2>

            <button
                onClick={loginGoogle}
                style={{
                    marginTop: "20px",
                    padding: "10px 15px",
                    backgroundColor: "#0b3c6d",
                    color: "white",
                    border: "none",
                    cursor: "pointer"
                }}
            >
                Login with Google
            </button>

            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ marginTop: "30px", display: "flex", flexDirection: "column", width: "250px" }}
            >
                <input
                    placeholder="Email"
                    {...register("email")}
                    style={{ padding: "10px", marginBottom: "15px", borderRadius: "5px", border: "1px solid #0b3c6d" }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                    style={{ padding: "10px", marginBottom: "15px", borderRadius: "5px", border: "1px solid #0b3c6d" }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "10px",
                        backgroundColor: "#0b3c6d",
                        color: "white",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    Login
                </button>
            </form>

            <p
                style={{ marginTop: "15px", cursor: "pointer", color: "#0b3c6d" }}
                onClick={function () { navigate("/register") }}
            >
                Don’t have an account? Register
            </p>
        </div>
    )
}

export default Login
