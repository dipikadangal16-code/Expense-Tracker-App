import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import Summary from "./pages/Summary";
import About from "./pages/About";
import Login from "./pages/Login";


function App() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f0f6ff"
    }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}


export default App;
