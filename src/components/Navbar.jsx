import { Link, useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

function Navbar({ logoutUpdate }) {
    const navigate = useNavigate()

    function logout() {
        // Remove cookies
        Cookies.remove("uid")
        Cookies.remove("name")
        Cookies.remove("token")

        // Update App state to trigger re-render
        logoutUpdate()

        // Redirect to login page
        navigate("/login")
    }

    return (
        <div style={{
            backgroundColor: "#0b3c6d",
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <h2 style={{ color: "#fff", margin: 0 }}>Expense Tracker</h2>

            <div>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/expenses" style={linkStyle}>Expenses</Link>
                <Link to="/summary" style={linkStyle}>Summary</Link>
                <Link to="/about" style={linkStyle}>About</Link>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
                <img src="https://via.placeholder.com/35" alt="profile" style={{ borderRadius: "50%", marginRight: "10px" }} />
                <button onClick={logout} style={logoutButtonStyle}>Logout</button>
            </div>
        </div>
    )
}

const linkStyle = { color: "#fff", marginRight: "15px", textDecoration: "none", fontWeight: "bold" }
const logoutButtonStyle = { padding: "6px 12px", backgroundColor: "#e74c3c", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }

export default Navbar
