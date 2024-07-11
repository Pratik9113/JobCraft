import React from 'react'

const SearchBar = ({ setQuery }) => {
    return (
        <div>
            <div className="search-container">
                <i className="fa-solid fa-magnifying glass"></i>
                <input
                    onChange={(e) => { setQuery(e.target.value.toLowerCase()) }}
                    type="text" placeholder='search by profession name' />
            </div>
        </div>
    )
}

export default SearchBar
