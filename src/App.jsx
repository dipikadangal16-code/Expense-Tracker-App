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
  const [uid, setUid] = useState(Cookies.get("uid") || null)

  useEffect(() => {
    const cookieUid = Cookies.get("uid")
    if (cookieUid) setUid(cookieUid)
  }, [])

  const loginUpdate = () => setUid(Cookies.get("uid"))
  const logoutUpdate = () => setUid(null)

  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/login" element={!uid ? <Login loginUpdate={loginUpdate} /> : <Navigate to="/" />} />
        <Route path="/register" element={!uid ? <Register /> : <Navigate to="/" />} />

        {/* Protected */}
        <Route path="/" element={uid ? <Home logoutUpdate={logoutUpdate} uid={uid} /> : <Navigate to="/login" />} />
        <Route path="/expenses" element={uid ? <Expenses logoutUpdate={logoutUpdate} uid={uid} /> : <Navigate to="/login" />} />
        <Route path="/summary" element={uid ? <Summary logoutUpdate={logoutUpdate} uid={uid} /> : <Navigate to="/login" />} />
        <Route path="/about" element={uid ? <About logoutUpdate={logoutUpdate} uid={uid} /> : <Navigate to="/login" />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to={uid ? "/" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
