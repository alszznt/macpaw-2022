import React from 'react';

import PrevButton from '../prev-button';
import NextButton from '../next-button';

import './gallery-switch-page-buttons.css';

const GallerySwitchPageButtons = ({ page, incBreedsPage, decBreedsPage }) => {

    return(
        <div className = "breeds-switch-page-buttons">
            { page === 1 ? <div /> : <PrevButton action = { () => decBreedsPage() } /> }
            <div /> : <NextButton action = { () => incBreedsPage() } />
        </div>
    )
};

export default GallerySwitchPageButtons;