import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Technician from "./components/Technician/Technician";
import PostTech from "./components/PostTech/PostTech";
import 'react-toastify/dist/ReactToastify.css';
import JobSidebarContentList from "./components/TechnicalPost/JobSideBarList/JobSideBarContentList";
function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className="app-boundary">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/postTechnician' element={<Technician />} />
          <Route path='/searchTech/*' element={<JobSidebarContentList />} />
          <Route path='/PostTech/*' element={<PostTech />} />
        </Routes>
      </div>
      {/* <PostTech /> */}
      <ToastContainer />
    </>
  )
}

export default App
