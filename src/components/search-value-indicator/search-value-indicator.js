import React from 'react'

import './search-value-indicator.scss';

const SearchValueIndicator = ({ label }) => {
    return(
        <div className = "search-value-indicator">
            Search results for: <span className = "search-value-indicator-bolt">{ label }</span>
        </div>
    )
}

export default SearchValueIndicator;