import React from 'react';
import './LocationDropdown.css';

const LocationDropdown = ({ location, setSelectedLocation }) => {
    return (
        <select onChange={(e) => setSelectedLocation(e.target.value)} className="location-dropdown">
            <option value="">All Locations</option>
            {location.map((location, index) => (
                <option key={index} value={location}>
                    {location}
                </option>
            ))}
        </select>
    );
};

export default LocationDropdown;
