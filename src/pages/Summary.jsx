import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../components/navbar"

export default function Summary({ logoutUpdate, uid }) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => {
                setProducts(res.data.products)
                const totalExpenses = res.data.products.reduce((sum, item) => sum + item.price, 0)
                setTotal(totalExpenses)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Loading summary...</p>

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#eaf4ff" }}>
            <Navbar logoutUpdate={logoutUpdate} uid={uid} />
            <div style={{ padding: 20 }}>
                <h1 style={{ color: "#0b3c6d" }}>Summary</h1>
                <p>Total Expenses: <strong>${total}</strong></p>
                <ul>
                    {products.map(p => (
                        <li key={p.id}>{p.title} - ${p.price}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
