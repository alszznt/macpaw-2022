import React from 'react';

import InstrumentsHeader from '../instruments-header';
import InstrumentsLebel from '../instruments-lebel';
import BackButton from '../back-button';

import BreedsImageListItem from '../breeds-image-list-item';

import { 
    BreedsImageList
} from '../../containers';

import './page-instruments.css';

const BreedsPageInstruments = () => {
    return(
        <div className = "page-instruments-layout">
            <InstrumentsHeader />
            <div className = "page-instruments-content">
                <div className = "page-instruments-header">
                    <BackButton />
                    <InstrumentsLebel value = 'BREEDS' />
                </div>
                <BreedsImageList Item = { BreedsImageListItem } />
            </div>
        </div>
    )
};

export default BreedsPageInstruments;