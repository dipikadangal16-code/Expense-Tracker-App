import axios from "axios";
import { useEffect, useState } from "react";

function Expenses() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then((res) => {
                setExpenses(res.data.products);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Expenses List</h2>

            {expenses.map((item) => (
                <div key={item.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
                    <h4>{item.title}</h4>
                    <p>Price: ${item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Expenses;
