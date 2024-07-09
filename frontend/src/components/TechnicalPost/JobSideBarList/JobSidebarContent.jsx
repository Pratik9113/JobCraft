import React from 'react'
import './JobSidebar.css'
import { Link } from 'react-router-dom'
import { assets } from '../../../assets/assets'
const JobSidebarContent = ({ name, professionName, experience ,onClick}) => {
    return (
        <>
            <div className="sidebartp-content" onClick = {onClick}>
                <div className="sidebartp-content-first">
                    <div className="sidebartp-img">
                        <img src={assets.profile_icon} alt="" />
                    </div>
                    <div className="sidebartp-content-text">
                        <p className='sidebartp-heading'> {professionName} </p>
                        <p>Name : {name}</p>
                    </div>
                </div>
                <div className="sidebartp-content-tag">
                    <button>Experienced Professional</button>
                    <button>{experience}</button>
                </div>
            </div>
        </>
    )
}

export default JobSidebarContent
