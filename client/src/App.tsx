import Landing from "./pages/Landing"
import Login from "./pages/Login"
import { Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Game from "./pages/Game"
import History from "./pages/History"

const App = () => {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </main>
  )
}

export default App