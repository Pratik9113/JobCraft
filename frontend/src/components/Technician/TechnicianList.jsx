import React from 'react'
import './Technician.css'
import { assets } from '../../assets/assets'
const TechnicianList = () => {
    return (
        <>
            <div className="list">
                <div className="list-heading">
                    <h1>Technician and their category</h1>
                </div>
                <div className="list-technician">
                    <button>
                        <img src={assets.profile_icon} alt="" /> <p>Electrician</p>
                    </button>
                    <button>
                        <img src={assets.profile_icon} alt="" /> <p>Plumber</p>
                    </button>
                    <button>
                        <img src={assets.profile_icon} alt="" /> <p>Television</p>
                    </button>
                    <button>
                        <img src={assets.profile_icon} alt="" /> <p>Repairing</p>
                    </button>
                    <button>
                        <img src={assets.profile_icon} alt="" /> <p>Home service</p>
                    </button>
                    <button>
                        <img src={assets.profile_icon} alt="" /> <p>Rented House</p>
                    </button>
                    <button>
                        Explore more
                    </button>
                </div>
            </div>
        </>
    )
}

export default TechnicianList
