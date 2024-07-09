import React from 'react'
import './Sidebar.css'
import SidebarTP from '../TechnicalPost/JobSideBarList/SidebarTP'
import { Route, Routes } from 'react-router-dom'
import MainContent from '../TechnicalPost/MainContentTp/MainContent'
const SidebarJobPost = () => {
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

export default  SidebarJobPost