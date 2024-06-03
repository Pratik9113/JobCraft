import React from 'react'
import './PostTech.css'
import { assets } from '../../assets/assets'
const PostTech = () => {
    return (
        <div className="post-content">
            <div className="post-content-upper">
                <div className="post-content-img">
                    <img src={assets.profile_icon} alt="" />
                </div>
                <div className="post-content-info">
                    <div><h1>Person Name : <input placeholder='enter your name' className='post-content-input' type="text" required /> </h1></div>
                    <div className="post-content-professional">
                        <img src={assets.cross_icon} alt='' />
                        <p>Profession Name : <input placeholder="enter your professional " className='post-content-inputP' type="text" required /> </p>
                    </div>
                </div>
            </div>
            <div><hr className='post-content-space' /></div>
            <div className="post-content-description">
                <h3>Enter Your Key Points </h3>
                <textarea row="4" cols="50" required>
                </textarea>
            </div>
            <div><hr className='post-content-space' /></div>
            <div className="post-content-additional-info">
                <h1>Additional Information</h1>
                <div className="post-content-information">
                    <div className="post-content-info-user">
                        <div className="post-content-user-info-first">
                            <h1>Experience</h1>
                            <p>Max Year: <input placeholder=" " className='post-content-inputPY' type="text" required /></p>
                        </div>
                        <img src={assets.experiencee} alt="" />
                    </div>
                    <div className="post-content-info-user">
                        <div className="post-content-user-info-first">
                            <h1>Location</h1>
                            <p><input placeholder=" " className='post-content-inputPY' type="text" required /></p>
                        </div>
                        <img src={assets.location} alt="" />
                    </div>
                    <div className="post-content-info-user">
                        <div className="post-content-user-info-first">
                            <h1>Fees Charged</h1>
                            <p>Min/Max INR : <input placeholder=" " className='post-content-inputPY' type="text" required /></p>
                        </div>
                        <img src={assets.salary} alt="" />
                    </div>
                    <div className="post-content-info-user">
                        <div className="post-content-user-info-first">
                            <h1>Timing</h1>
                            <p>Time : <input placeholder=" " className='post-content-inputPY' type="text" required /></p>
                        </div>
                        <img src={assets.timing} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostTech
