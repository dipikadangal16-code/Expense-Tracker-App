import Navbar from "../components/navbar"

function Home() {
    return (
        <div style={{ backgroundColor: "#eaf4ff", minHeight: "100vh" }}>
            <Navbar />
            <div style={{ padding: "20px", color: "#0b3c6d" }}>
                <h1>Welcome to Expense Tracker</h1>
                <p>Track and summarize your expenses easily.</p>
            </div>
        </div>
    )
}

export default Home
