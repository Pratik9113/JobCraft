import React from 'react'
import './SidebarTP.css'
import { NavLink } from 'react-router-dom'
import SidebarContent from './SidebarContent'
const SidebarTP = () => {
    return (
        <>
            <div className="sidebartp">
                <div className="sidebartp-options">
                    <NavLink to='/searchTech/userList'><SidebarContent /></NavLink>
                    <NavLink to='/searchTech/userList'><SidebarContent /></NavLink>
                    <NavLink to='/searchTech/userList'><SidebarContent /></NavLink>
                    <NavLink to='/searchTech/userList'><SidebarContent /></NavLink>
                    <NavLink to='/searchTech/userList'><SidebarContent /></NavLink>
                    <NavLink to='/searchTech/userList'><SidebarContent /></NavLink>
                </div>
            </div>
        </>
    )
}

export default SidebarTP
