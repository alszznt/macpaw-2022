import React from 'react';

import PrevButton from '../prev-button';
import NextButton from '../next-button';

import './breeds-switch-page-buttons.css';

const BreedsSwitchPageButtons = ({ limit, page, arr, sortArr, incBreedsPage, decBreedsPage }) => {

    if (sortArr.length < limit && page === 1){
        return null
    }

    return(
        <div className = "breeds-switch-page-buttons">
            { page === 1 ? <div /> : <PrevButton action = { () => decBreedsPage() } /> }
            { limit * page >= arr.length ? <div /> : <NextButton action = { () => incBreedsPage() } /> }
        </div>
    )
};

export default BreedsSwitchPageButtons;