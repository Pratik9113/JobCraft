import { useState } from "react"
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
      </div>
    </>
  )
}

export default App
