import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({ setShowLogin }) => {
    const { token, setToken } = useContext(StoreContext)
    return (
        <div className="navbar">
            <div className="navbar-logo-left">
                <img src="" alt="Navbar-logo" className="navbar-logo" />
            </div>
            <div className="navbar-middle">
                <li><Link to="/">Home  </Link></li>
                <li><Link to="/">Category  </Link></li>
                <li><Link to="/">Contact  </Link></li>
                <li><Link to="/">Q&A  </Link></li>
            </div>
            <div className="navbar-right">
                {!token ? (
                    <button onClick={() => { setShowLogin(true) }}> SignIn</button>
                ) : (
                    <div className="navbar-profile">
                        <img src={assets.profile_icon} alt="" />
                        <ul className='dropdown'>
                            <li onClick={logout}><img src={assets.logout} alt="Logout Icon" /><p>Logout</p></li>
                        </ul>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Navbar
