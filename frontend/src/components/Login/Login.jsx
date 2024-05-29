import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Login.css'
const Login = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login")
    return (
        <div>
            <div className="login">
                <form action="" className='login-container'>
                    <div className="login-title">
                        <h2>{currState}</h2>
                        <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" className="login-click" />
                    </div>
                    <div className="login-input">
                        {currState === "Login" ? null : <input name="name" type="text" placeholder='enter your name' required />}
                        <input type="text" name="email" placeholder='enter your email' required />
                        <input type="text" name="password" placeholder='enter your password ' required />
                    </div>
                    <button type="submit"> {currState === "SignUp" ? "create an account " : "Login "}</button>
                    {currState === "Login" ?
                        <p>create an account <span className='login-click' onClick={() => setCurrState("SignUp")}>click here</span></p>
                        :
                        <p>already have an account <span className='login-click' onClick={() => setCurrState("Login")}>Login here </span></p>
                    }
                </form>
            </div>
        </div>
    )
}

export default Login
