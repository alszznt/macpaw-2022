import React from 'react';

import './search-breeds-input.css';

const SearchBreedsInput = () => {
    return(
        <form className = "search-breeds-input">
            <input 
                className = "search-breeds-input-value"
                type = "text"
                placeholder = "Search for breeds by name"
            />
            <div className = "search-breeds-input-icon-button">
                <div className = "search-breeds-input-icon" />
            </div>
        </form>
    );
}

export default SearchBreedsInput;