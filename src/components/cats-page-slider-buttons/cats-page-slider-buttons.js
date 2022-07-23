import React from 'react';

import './cats-page-slider-buttons.css';

const CatsPageSliderButtons = ({ arr, onCatImageSelected, selectedImage }) => {

    const content = arr.map((data) => {

        const isActive = selectedImage.id === data.id ? 'cats-page-slider-buttons-item-active' : '';

        return (
            <div 
                key = { data.id } 
                className = {`cats-page-slider-buttons-item ${ isActive }`}
                onClick = { () => onCatImageSelected(data) }
            />
        );
    });

    return(
        <div className = "cats-page-slider-buttons">
            { content }
        </div>
    )
}

export default CatsPageSliderButtons;