import React, { useState } from 'react'
import './PostTech.css'
import axios from "axios"
import { assets } from '../../assets/assets'
import { baseUrl } from '../../Urls';
import { toast } from "react-toastify"
const PostTech = () => {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


    const [data, setData] = useState({
        name: "",
        professionName: "",
        description: "",
        experience: "",
        location: "",
        fees: "",
        timing: "",
    })

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }))
    }


    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const formatData = {
            ...data
        }

        const newUrl = `${baseUrl}/api/job/postJob`

        try {
            const response = await axios.post(newUrl, formatData, {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            });


            if (response.data.success) {
                localStorage.setItem('token', response.data.token);
                setData({
                    name: "",
                    professionName: "",
                    description: "",
                    experience: "",
                    location: "",
                    fees: "",
                    timing: "",
                })
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred while adding the task.');
        }
    }

    return (
        <div className="post-content">
            <form onSubmit={onSubmitHandler}>
                <div className="post-content-upper">
                    <div className="post-content-img">
                        <img src={assets.profile_icon} alt="" />
                    </div>
                    <div className="post-content-info">
                        <div><h1>Person Name : <input onChange={onChangeHandler} value={data.name} name="name" placeholder='enter your name' className='post-content-input' type="text" required /> </h1></div>
                        <div className="post-content-professional">
                            <img src={assets.cross_icon} alt='' />
                            <p>Profession Name : <input onChange={onChangeHandler} value={data.professionName} name="professionName" placeholder="enter your professional " className='post-content-inputP' type="text" required /> </p>
                        </div>
                    </div>
                </div>
                <div><hr className='post-content-space' /></div>
                <div className="post-content-description">
                    <h3>Enter Your Key Points </h3>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" row="4" cols="50" required>
                    </textarea>
                </div>
                <div><hr className='post-content-space' /></div>
                <div className="post-content-additional-info">
                    <h1>Additional Information</h1>
                    <div className="post-content-information">
                        <div className="post-content-info-user">
                            <div className="post-content-user-info-first">
                                <h1>Experience</h1>
                                <p>Max Year: <input onChange={onChangeHandler} value={data.experience} name="experience" placeholder=" " className='post-content-inputPY' type="text" required /></p>
                            </div>
                            <img src={assets.experiencee} alt="" />
                        </div>
                        <div className="post-content-info-user">
                            <div className="post-content-user-info-first">
                                <h1>Location</h1>
                                <p><input onChange={onChangeHandler} value={data.location} name="location" placeholder=" " className='post-content-inputPY' type="text" required /></p>
                            </div>
                            <img src={assets.location} alt="" />
                        </div>
                        <div className="post-content-info-user">
                            <div className="post-content-user-info-first">
                                <h1>Fees Charged</h1>
                                <p>Min/Max INR : <input onChange={onChangeHandler} value={data.fees} name="fees" placeholder=" " className='post-content-inputPY' type="text" required /></p>
                            </div>
                            <img src={assets.salary} alt="" />
                        </div>
                        <div className="post-content-info-user">
                            <div className="post-content-user-info-first">
                                <h1>Timing</h1>
                                <p>Time : <input onChange={onChangeHandler} value={data.timing} name="timing" placeholder=" " className='post-content-inputPY' type="text" required /></p>
                            </div>
                            <img src={assets.timing} alt="" />
                        </div>
                        <button className='post-tech-button' type="submit">Add Job </button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default PostTech
