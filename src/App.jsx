import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Cookies from "js-cookie"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Expenses from "./pages/Expenses"
import Summary from "./pages/Summary"
import About from "./pages/About"

function App() {
  const [uid, setUid] = useState(null)

  // On mount, check cookies
  useEffect(() => {
    const cookieUid = Cookies.get("uid")
    if (cookieUid) setUid(cookieUid)
  }, [])

  // Called after login
  function loginUpdate() {
    const cookieUid = Cookies.get("uid")
    setUid(cookieUid)
  }

  // Called after logout
  function logoutUpdate() {
    setUid(null)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={!uid ? <Login loginUpdate={loginUpdate} /> : <Navigate to="/" />} />
        <Route path="/register" element={!uid ? <Register /> : <Navigate to="/" />} />
        <Route path="/" element={uid ? <Home logoutUpdate={logoutUpdate} /> : <Navigate to="/login" />} />
        <Route path="/expenses" element={uid ? <Expenses logoutUpdate={logoutUpdate} /> : <Navigate to="/login" />} />
        <Route path="/summary" element={uid ? <Summary logoutUpdate={logoutUpdate} /> : <Navigate to="/login" />} />
        <Route path="/about" element={uid ? <About logoutUpdate={logoutUpdate} /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
