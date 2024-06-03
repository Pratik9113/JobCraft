import React from 'react'
import './Sidebar.css'
import SidebarTP from '../TechnicalPost/SidebarTP/SidebarTP'
import { Route, Routes } from 'react-router-dom'
import MainContent from '../TechnicalPost/MainContentTp/MainContent'
const Sidebar = () => {
    return (
        <>
            <div className="app">
                <SidebarTP />
                <Routes>
                    <Route path='/userList' element={<MainContent />} />
                </Routes>
            </div>
        </>
    )
}

export default Sidebar
