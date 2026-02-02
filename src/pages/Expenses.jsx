import axios from "axios"
import { useEffect, useState } from "react"

import Navbar from "../components/navbar"

function Expenses() {
    var state = useState([])
    var expenses = state[0]
    var setExpenses = state[1]

    useEffect(function () {
        axios.get("https://dummyjson.com/products")
            .then(function (res) {
                setExpenses(res.data.products)
            })
    }, [])

    return (
        <div style={{ backgroundColor: "#eaf4ff", minHeight: "100vh" }}>
            <Navbar />
            <div style={{ padding: "20px", color: "#0b3c6d" }}>
                <h2>Expenses</h2>
                {expenses.map(function (item) {
                    return (
                        <div key={item.id}>{item.title} — ${item.price}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Expenses
