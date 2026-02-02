import axios from "axios"
import { useEffect, useState } from "react"

function Expenses() {
    var [items, setItems] = useState([])

    useEffect(function () {
        axios.get("https://dummyjson.com/products")
            .then(function (response) {
                setItems(response.data.products)
            })
    }, [])

    return (
        <div className="page">
            <h2>Expenses</h2>
            {items.map(function (item) {
                return (
                    <div key={item.id} className="card">
                        <p>{item.title}</p>
                        <p>Price: ${item.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Expenses
