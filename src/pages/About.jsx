function About() {
    return (
        <div style={{ padding: "20px" }}>
            <h2>About This App</h2>
            <p>
                The Expense Tracker App is built using React and Vite.
                It fetches product data using Axios and treats each product
                as an expense.
            </p>
            <p>
                The summary page calculates total expenses using JavaScript's
                reduce() method.
            </p>
        </div>
    );
}

export default About;
