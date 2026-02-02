import Navbar from "../components/navbar"

function About() {
    return (
        <div style={{ backgroundColor: "#eaf4ff", minHeight: "100vh" }}>
            <Navbar />
            <div style={{ padding: "20px", color: "#0b3c6d" }}>
                <h2>About</h2>
                <p>
                    This Expense Tracker App is built using React, Firebase Authentication, Axios API, and JavaScript reduce().
                </p>
            </div>
        </div>
    )
}

export default About
