import React, { useState } from 'react'
import './JobContentNavbar.css'
import SearchBar from './SearchBar'
import LocationDropdown from './LocationDropdown'
const JobContentNavbar = ({ setQuery, location, setSelectedLocation }) => {
    return (
        <>
            <div className="job-navbar">
                <div className="job-search">
                    <SearchBar setQuery={setQuery} />
                </div>
                <div className="job-location">
                    <LocationDropdown location={location} setSelectedLocation={setSelectedLocation} />
                </div>

            </div>
        </>
    )
}

export default JobContentNavbar
