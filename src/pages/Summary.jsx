import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../components/navbar"

function Summary() {
    var state = useState([])
    var expenses = state[0]
    var setExpenses = state[1]

    useEffect(function () {
        axios.get("https://dummyjson.com/products")
            .then(function (res) {
                setExpenses(res.data.products)
            })
    }, [])

    var total = expenses.reduce(function (sum, item) {
        return sum + item.price
    }, 0)

    return (
        <div style={{ backgroundColor: "#eaf4ff", minHeight: "100vh" }}>
            <Navbar />
            <div style={{ padding: "20px", color: "#0b3c6d" }}>
                <h2>Summary</h2>
                <h3>Total Expense: ${total}</h3>
            </div>
        </div>
    )
}

export default Summary
