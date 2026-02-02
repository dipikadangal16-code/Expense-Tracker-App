import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../components/navbar"

export default function Expenses({ logoutUpdate, uid }) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => {
                setProducts(res.data.products)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Loading expenses...</p>

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#eaf4ff" }}>
            <Navbar logoutUpdate={logoutUpdate} uid={uid} />
            <div style={{ padding: 20 }}>
                <h1 style={{ color: "#0b3c6d" }}>Expenses</h1>
                <ul>
                    {products.map(p => (
                        <li key={p.id}>
                            <strong>{p.title}</strong> - ${p.price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
