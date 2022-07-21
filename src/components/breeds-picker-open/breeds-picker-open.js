import React from 'react';

import './breeds-picker-open.css';

const BreedsPickerOpen = ({ breeds, onSelect }) => {

    const breedsList = breeds.map((data) => {

        return (
            <div 
                className = "breeds-picker-open-list-item"
                key = { data.id }
                onClick = { () => onSelect(data.name) }>
                { data.name }
            </div>
        );
    });

    return(
        <div className = "breeds-picker-open">
            <div className = "breeds-picker-open-list">
                <div className = "breeds-picker-open-list-item">All breeds </div>
                { breedsList }
            </div>
        </div>
    )
}

export default BreedsPickerOpen;