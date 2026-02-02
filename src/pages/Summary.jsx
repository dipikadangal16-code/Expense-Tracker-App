import axios from "axios"
import { useEffect, useState } from "react"

function Summary() {
    var [total, setTotal] = useState(0)

    useEffect(function () {
        axios.get("https://dummyjson.com/products")
            .then(function (response) {
                var sum = response.data.products.reduce(function (acc, item) {
                    return acc + item.price
                }, 0)
                setTotal(sum)
            })
    }, [])

    return (
        <div className="page">
            <h2>Total Expense</h2>
            <h3>${total}</h3>
        </div>
    )
}

export default Summary
