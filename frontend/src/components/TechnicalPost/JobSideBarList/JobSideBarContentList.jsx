import React, { useState, useEffect } from 'react'
import './JobSidebar.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom'
import JobSidebarContent from './JobSidebarContent';
const JobSidebarContentList = () => {
    const [list, setList] = useState([]);
    const fetchPostList = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/job/postList`, {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            });
            if (response.data.success) {
                setList(response.data.data);
            } else {
                toast.error("Error");
            }
        } catch (error) {
            console.error("Error fetching post list:", error);
            toast.error("Error fetching post list");
        }
    }

    useEffect(() => {
        fetchPostList();
    }, []);

    return (
        <>
            <div className="sidebartp">
                <div className="sidebartp-options">
                    {list.length > 0 && list.map((item, index) => (
                        <JobSidebarContent key={index} name={item.name} professionName={item.professionName} experience={item.experience}  />
                    ))}
                </div>
            </div>
        </>
    );
};
export default JobSidebarContentList;
