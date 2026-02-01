
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ padding: "10px", background: "#810c0c" }}>
            <Link to="/" style={{ color: "white", marginRight: "10px" }}>Home</Link>
            <Link to="/expenses" style={{ color: "white", marginRight: "10px" }}>Expenses</Link>
            <Link to="/summary" style={{ color: "white", marginRight: "10px" }}>Summary</Link>
            <Link to="/about" style={{ color: "white", marginRight: "10px" }}>About</Link>
            <Link to="/login" style={{ color: "white", marginRight: "10px" }}>Login</Link>

        </nav>
    );
}

export default Navbar;
