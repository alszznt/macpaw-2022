import React from 'react';

import './breeds-picker-open.css';

const BreedsPickerOpen = ({ breeds, onSelect, text = null, firstVal = null }) => {

    const breedsList = breeds.map((data) => {

        return (
            <div 
                className = "breeds-picker-open-list-item"
                key = { data.id }
                onClick = { () => onSelect(data.name) }>
                { !text ? null : text}{ data.name }
            </div>
        );
    });

    return(
        <div className = "breeds-picker-open">
            <div className = "breeds-picker-open-list">
                { !firstVal ? null : <div className = "breeds-picker-open-list-item" onClick = { () => onSelect(firstVal) }>{ firstVal }</div> }
                { breedsList }
            </div>
        </div>
    )
}

export default BreedsPickerOpen;