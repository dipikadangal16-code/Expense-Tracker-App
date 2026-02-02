import { useForm } from "react-hook-form"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, googleProvider, facebookProvider } from "../firebase"
import Cookies from "js-cookie"
import { useNavigate, Link } from "react-router-dom"

export default function Login({ loginUpdate }) {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(userCredential => {
                Cookies.set("uid", userCredential.user.uid)
                Cookies.set("name", userCredential.user.displayName || "")
                Cookies.set("token", userCredential.user.accessToken)
                loginUpdate()
                navigate("/")
            })
            .catch(() => alert("Invalid email or password"))
    }

    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(userCredential => {
                Cookies.set("uid", userCredential.user.uid)
                Cookies.set("name", userCredential.user.displayName || "")
                Cookies.set("token", userCredential.user.accessToken)
                loginUpdate()
                navigate("/")
            })
    }

    const loginWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then(userCredential => {
                Cookies.set("uid", userCredential.user.uid)
                Cookies.set("name", userCredential.user.displayName || "")
                Cookies.set("token", userCredential.user.accessToken)
                loginUpdate()
                navigate("/")
            })
    }

    return (
        <div style={{ padding: 20 }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Email" {...register("email", { required: "Email is required" })} />
                {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

                <input type="password" placeholder="Password" {...register("password", { required: "Password is required" })} />
                {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

                <button type="submit">Login</button>
            </form>

            {/* Link to Register */}
            <div style={{ marginTop: 15 }}>
                <p>
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </div>

            <hr />
            <button onClick={loginWithGoogle}>Login with Google</button>
            <button onClick={loginWithFacebook}>Login with Facebook</button>
        </div>
    )
}
