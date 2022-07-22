import React from 'react';

import { Link } from 'react-router-dom';

import './search-breeds-input.css';

const SearchBreedsInput = ({ value, onSearchChange, onSearch }) => {

    const onSubmit = (e) => {
        e.preventDefault();
        onSearch()
    };

    return(
        <form className = "search-breeds-input" onSubmit = { onSubmit }>
            <input 
                className = "search-breeds-input-value"
                type = "text"
                placeholder = "Search for breeds by name"
                value={ value }
                onChange={ (e) => onSearchChange(e.target.value) }
            />
            <Link 
                to = '/search' 
                className = "search-breeds-input-icon-button"
                onClick = { onSearch }>
                <div className = "search-breeds-input-icon" />
            </Link>
        </form>
    );
}

export default SearchBreedsInput;