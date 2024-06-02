import React from 'react'
import './SidebarTP.css'
import { NavLink } from 'react-router-dom'
import SidebarContent from './SidebarContent'
const SidebarTP = () => {
    return (
        <>
            <div className="sidebartp">
                <div className="sidebartp-options">
                    <NavLink to='/userList'><SidebarContent /></NavLink>
                    <NavLink to='/userList'><SidebarContent /></NavLink>
                    <NavLink to='/userList'><SidebarContent /></NavLink>
                    <NavLink to='/userList'><SidebarContent /></NavLink>
                    <NavLink to='/userList'><SidebarContent /></NavLink>
                    <NavLink to='/userList'><SidebarContent /></NavLink>
                </div>
            </div>
        </>
    )
}

export default SidebarTP
