import React from 'react'

import './breeds-picker.scss';

const BreedsPicker = ({ click, value, text = null, color = 'lighter' }) => {
    return(
        <div className = {`${ color } breeds-picker`} onClick = { click }>
            <div className = "breeds-picker-label">{ !text ? null: text }{ value }</div>
            <div className = "arrow-down-icon-12" />
        </div>
    )
}

export default BreedsPicker;