import React, { useState, useEffect } from 'react';
import './JobSidebar.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import JobSidebarContent from './JobSidebarContent';
import SidebarMainContent from '../SidebarMainContent/SidebarMainContent';
import JobContentNavbar from '../JobContentNavbar/JobContentNavbar';

const JobSidebarContentList = () => {
    const [list, setList] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [query, setQuery] = useState("");
    const [location, setLocation] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");
    const fetchPostList = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/job/postList`, {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            });
            if (response.data.success) {
                setList(response.data.data);
                const location = [... new Set(response.data.data.map(item => item.location))]
                setLocation(location);
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

    const handleJobClick = (job) => {
        setSelectedJob(job);
    };

    const searchProfessionName = list.filter(
        (profession) => profession.professionName &&
            profession.professionName.toLowerCase().includes(query) && (selectedLocation ? profession.location === selectedLocation : true)
    );
    // console.log(searchProfessionName)
    return (
        <>
            <div className="jobSidebar">
                <JobContentNavbar setQuery={setQuery} location={location} setSelectedLocation={setSelectedLocation} />
                <div className="sidebar-container">
                    <div className="sidebartp">
                        <div className="sidebartp-options">
                            {searchProfessionName.length > 0 && searchProfessionName.map((item, index) => (
                                <JobSidebarContent
                                    key={index}
                                    name={item.name}
                                    professionName={item.professionName}
                                    experience={item.experience}
                                    onClick={() => handleJobClick(item)}
                                />
                            ))}
                        </div>
                    </div>
                    {selectedJob && (
                        <div className="sidebar-main-content">
                            <SidebarMainContent job={selectedJob} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default JobSidebarContentList;
