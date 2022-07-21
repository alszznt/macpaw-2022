import React from 'react';

import InstrumentsHeader from '../instruments-header';
import InstrumentsLebel from '../instruments-lebel';
import BackButton from '../back-button';

import { useParams } from 'react-router-dom';

import { CatsPageSliderButtons, CatImage, CatInfo } from '../../containers';

import './page-instruments.css';

const CatsPageInstruments = () => {

    const params = useParams();

    return(
        <div className = "page-instruments-layout">
            <InstrumentsHeader />
            <div className = "page-instruments-content">
                <div className = "page-instruments-header">
                    <BackButton />
                    <InstrumentsLebel value = 'BREEDS' isActive = { false } />
                    <InstrumentsLebel value = { params.id }/>
                </div>
                <div className = "page-instruments-cats-images">
                    <CatImage />
                    <CatsPageSliderButtons />
                </div>
                <CatInfo />
            </div>
        </div>
    )
};

export default CatsPageInstruments;