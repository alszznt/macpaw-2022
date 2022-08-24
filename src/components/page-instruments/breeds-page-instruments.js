import React from 'react';

import InstrumentsHeader from '../instruments-header';
import InstrumentsLebel from '../instruments-lebel';
import BackButton from '../back-button';

import BreedsImageListItem from '../breeds-image-list-item';

import { 
    BreedsImageList,
    BreedsPicker,
    BreedsLimitPicker,
    BreedsSortingZAButton,
    BreedsSortingAZButton,
    BreedsSwitchPageButtons
} from '../../containers';

import './page-instruments.scss';

const BreedsPageInstruments = () => {
    return(
        <div className = "page-instruments-layout">
            <InstrumentsHeader />
            <div className = "page-instruments-breeds-content">
                <div className = "page-instruments-breeds-header">
                    <div className = "page-instruments-breeds-header-location">
                        <BackButton />
                        <InstrumentsLebel value = 'BREEDS' />
                    </div>
                    <div className = "page-instruments-breeds-header-filters">
                        <BreedsPicker />
                        <BreedsLimitPicker />
                        <BreedsSortingZAButton />
                        <BreedsSortingAZButton />
                    </div>
                </div>
                <BreedsImageList Item = { BreedsImageListItem } />
                <BreedsSwitchPageButtons />
            </div>
        </div>
    )
};

export default BreedsPageInstruments;