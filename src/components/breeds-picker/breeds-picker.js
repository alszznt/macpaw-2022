import React from 'react'

import './breeds-picker.css';

const BreedsPicker = ({ click, value, text = null, color = '#F8F8F7' }) => {
    return(
        <div className = "breeds-picker" onClick = { click } style = {{ backgroundColor: color }}>
            <div className = "breeds-picker-label">{ !text ? null: text }{ value }</div>
            <div className = "arrow-down-icon-12" />
        </div>
    )
}

export default BreedsPicker;