import React from 'react';

import PrevButton from '../prev-button';
import NextButton from '../next-button';

import './breeds-switch-page-buttons.css';

const BreedsSwitchPageButtons = ({ limit, page, arr, incBreedsPage, decBreedsPage }) => {

    return(
        <div className = "breeds-switch-page-buttons">
            { page === 1 ? <div /> : <PrevButton action = { () => decBreedsPage() } /> }
            { limit * page >= arr.length ? <div /> : <NextButton action = { () => incBreedsPage() } /> }
        </div>
    )
};

export default BreedsSwitchPageButtons;