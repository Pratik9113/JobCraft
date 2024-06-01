import React from 'react'
import './SidebarTP.css'
import { assets } from '../../../assets/assets'
const SidebarContent = () => {
    return (
        <>
            <div className="sidebartp-content">
                <div className="sidebartp-content-first">
                    <div className="sidebartp-img">
                        <img src={assets.profile_icon} alt="" />
                    </div>
                    <div className="sidebartp-content-text">
                        <p className='sidebartp-heading'>Technician gjdofklddnkob- computer</p>
                        <p>Name : Pratik Patil</p>
                    </div>
                </div>
                <div className="sidebartp-content-tag">
                    <button>Experienced Professional</button>
                    <button>4yrs</button>
                </div>
            </div>
        </>
    )
}

export default SidebarContent
