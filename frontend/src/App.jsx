import { useState } from "react"
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Technician from "./components/Technician/Technician";
import Footer from "./components/Footer/Footer";
import SidebarTP from "./components/TechnicalPost/SidebarTP/SidebarTP";
import MainContent from "./components/TechnicalPost/MainContentTp/MainContent";

function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      <div className="app-boundary">
        {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
        <Navbar setShowLogin={setShowLogin} />
        <div className="app">
          <SidebarTP />
          <Routes>
            <Route path='/userList' element={<MainContent />} />
          </Routes>
        </div >
      </div>
    </>
  )
}

export default App
