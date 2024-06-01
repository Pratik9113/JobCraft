import { useState } from "react"
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Technician from "./components/Technician/Technician";
import Footer from "./components/Footer/Footer";
import SidebarTP from "./components/TechnicalPost/SidebarTP/SidebarTP";

function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
      </div>
      {/* <Routes>
        <Route path='/postTechnician' element={<Technician />}></Route>
      </Routes> */}
      <div className="app"><SidebarTP /></div>

    </>
  )
}

export default App
