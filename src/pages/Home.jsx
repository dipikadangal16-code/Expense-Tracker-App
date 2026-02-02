import Navbar from "../components/navbar"

export default function Home({ logoutUpdate, uid }) {
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#eaf4ff" }}>
            <Navbar logoutUpdate={logoutUpdate} uid={uid} />
            <h1 style={{ color: "#0b3c6d", padding: 20 }}>Welcome to Expense Tracker</h1>
        </div>
    )
}
