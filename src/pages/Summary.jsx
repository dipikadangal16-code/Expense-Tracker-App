import axios from "axios";
import { useEffect, useState } from "react";

function Summary() {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((res) => {
                const products = res.data.products;

                // ✅ calculate total expense using reduce
                const totalExpense = products.reduce(
                    (sum, item) => sum + item.price,
                    0
                );

                setTotal(totalExpense);
            });
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Expense Summary</h2>
            <h3>Total Expense: ${total}</h3>
        </div>
    );
}

export default Summary;

