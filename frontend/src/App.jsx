import { useState } from "react"
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Technician from "./components/Technician/Technician";
import Footer from "./components/Footer/Footer";
import SidebarTP from "./components/TechnicalPost/SidebarTP/SidebarTP";
import MainContent from "./components/TechnicalPost/MainContentTp/MainContent";
import PostTech from "./components/PostTech/PostTech";
function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className="app-boundary">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/postTechnician' element={<Technician />} />
          <Route path='/searchTech/*' element={<Sidebar />} />
          <Route path='/PostTech/*' element={<PostTech />} />
        </Routes>
      </div>
    </>
  )
}

export default App
