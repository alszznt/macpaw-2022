import React from 'react'

import './breeds-picker.css';

const BreedsPicker = ({ click, value }) => {
    return(
        <div className = "breeds-picker" onClick = { click }>
            <div className = "breeds-picker-label">{ value }</div>
            <div className = "breeds-picker-icon" />
        </div>
    )
}

export default BreedsPicker;