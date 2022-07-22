import React from 'react';

import InstrumentsHeader from '../instruments-header';
import InstrumentsLebel from '../instruments-lebel';
import BackButton from '../back-button';

import GalleryFilters from '../gallery-filters';

import BreedsImageListItem from '../breeds-image-list-item';

import { 
    BreedsImageList,
    BreedsPicker,
    BreedsLimitPicker,
    BreedsSortingZAButton,
    BreedsSortingAZButton,
    BreedsSwitchPageButtons
} from '../../containers';

import './page-instruments.css';

const GalleryPageInstruments = () => {
    return(
        <div className = "page-instruments-layout">
            <InstrumentsHeader />
            <div className = "page-instruments-breeds-content">
                <div className = "page-instruments-breeds-header">
                    <BackButton />
                    <InstrumentsLebel value = 'GALLERY' />
                    {/* <BreedsPicker />
                    <BreedsLimitPicker />
                    <BreedsSortingZAButton />
                    <BreedsSortingAZButton /> */}
                </div>
                <GalleryFilters />
                {/* <BreedsImageList Item = { BreedsImageListItem } /> */}
                {/* <BreedsSwitchPageButtons /> */}
            </div>
        </div>
    )
};

export default GalleryPageInstruments;