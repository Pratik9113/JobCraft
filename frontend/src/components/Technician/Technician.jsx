import React from 'react'
import './Technician.css'
import { assets } from '../../assets/assets'
import TechnicianList from './TechnicianList'
const Technician = () => {
    return (
        <>
            <div className="tech">
                <div className="tech-left">
                    <h1>
                        Finding Technician
                    </h1>
                    <p className='left-text'>Post Your Skill</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deserunt obcaecati quia culpa velit. Cum vel illo ab deserunt. Aspernatur reiciendis eum doloribus!</p>
                    <div className='tech-button'>
                        <button>
                            Search Technician
                        </button>
                        <p>

                        </p>
                        <button>
                            Post Jobs
                        </button>
                    </div>
                </div>
                <div className="tech-right">
                    <img src={assets.tech} alt="" />
                </div>
            </div>
            <TechnicianList />
        </>
    )
}

export default Technician
