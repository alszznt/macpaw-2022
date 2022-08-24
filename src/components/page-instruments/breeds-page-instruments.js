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
                    <BackButton />
                    <InstrumentsLebel value = 'BREEDS' />
                    <BreedsPicker />
                    <BreedsLimitPicker />
                    <BreedsSortingZAButton />
                    <BreedsSortingAZButton />
                </div>
                <BreedsImageList Item = { BreedsImageListItem } />
                <BreedsSwitchPageButtons />
            </div>
        </div>
    )
};

export default BreedsPageInstruments;