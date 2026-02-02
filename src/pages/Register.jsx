import { useForm } from "react-hook-form"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"

function Register() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()

    function onSubmit(data) {
        const { name, email, password } = data

        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Add display name to Firebase user
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        alert("Registered successfully!")
                        navigate("/login")
                    })
            })
            .catch(error => {
                alert(error.message)
            })
    }

    return (
        <div style={{ padding: "40px", backgroundColor: "#eaf4ff", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2 style={{ color: "#0b3c6d" }}>Register</h2>

            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", width: "300px", marginTop: "20px" }}>
                {/* Name */}
                <input
                    placeholder="Full Name"
                    {...register("name", { required: "Name is required" })}
                    style={inputStyle}
                />
                {errors.name && <span style={errorStyle}>{errors.name.message}</span>}

                {/* Email */}
                <input
                    placeholder="Email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }
                    })}
                    style={inputStyle}
                />
                {errors.email && <span style={errorStyle}>{errors.email.message}</span>}

                {/* Password */}
                <input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be at least 6 characters" },
                        pattern: { value: /^(?=.*[0-9]).*$/, message: "Password must include a number" }
                    })}
                    style={inputStyle}
                />
                {errors.password && <span style={errorStyle}>{errors.password.message}</span>}

                <button type="submit" style={buttonStyle}>Register</button>
            </form>

            <p style={{ marginTop: "15px", cursor: "pointer", color: "#0b3c6d" }} onClick={() => navigate("/login")}>
                Already have an account? Login
            </p>
        </div>
    )
}

const inputStyle = {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #0b3c6d"
}

const buttonStyle = {
    padding: "10px",
    backgroundColor: "#0b3c6d",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginTop: "10px"
}

const errorStyle = {
    color: "red",
    marginBottom: "10px",
    fontSize: "0.85rem"
}

export default Register
