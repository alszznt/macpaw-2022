import React from 'react';

import InstrumentsHeader from '../instruments-header';
import InstrumentsLebel from '../instruments-lebel';
import BackButton from '../back-button';

import GalleryFilters from '../gallery-filters';

import GalleryImageListItem from '../gallery-image-list-item';

import { 
    GalleryImageList,
    BreedsSwitchPageButtons
} from '../../containers';

import './page-instruments.css';

const GalleryPageInstruments = () => {
    return(
        <div className = "page-instruments-layout">
            <InstrumentsHeader />
            <div className = "page-instruments-content">
                <div className = "page-instruments-header">
                    <BackButton />
                    <InstrumentsLebel value = 'GALLERY' />
                </div>
                <GalleryFilters />
                <GalleryImageList Item = { GalleryImageListItem } />
                {/* <BreedsSwitchPageButtons /> */}
            </div>
        </div>
    )
};

export default GalleryPageInstruments;