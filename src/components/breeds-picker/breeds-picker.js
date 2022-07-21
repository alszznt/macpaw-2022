import React from 'react'

import './breeds-picker.css';

const BreedsPicker = ({ click, value, text = null }) => {
    return(
        <div className = "breeds-picker" onClick = { click }>
            <div className = "breeds-picker-label">{ !text ? null: text }{ value }</div>
            <div className = "arrow-down-icon-12" />
        </div>
    )
}

export default BreedsPicker;