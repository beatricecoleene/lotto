import Landing from "./pages/Landing"
import Login from "./pages/Login"
import { Routes, Route } from "react-router-dom"
import Register from "./pages/Register"

const App = () => {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  )
}

export default App