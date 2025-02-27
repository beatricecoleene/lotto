import Landing from "./pages/Landing"
import Login from "./pages/Login"
import { Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Main from "./pages/Main"

const App = () => {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </main>
  )
}

export default App