import React from 'react';

import InstrumentsHeader from '../instruments-header';
import InstrumentsLebel from '../instruments-lebel';
import BackButton from '../back-button';

import { LikesImageListItem } from '../../containers';

import { VotesImageList } from '../../containers';

import './page-instruments.css';

const FavouritesPageInstruments = () => {
    return(
        <div className = "page-instruments-layout">
            <InstrumentsHeader />
            <div className = "page-instruments-content">
                <div className = "page-instruments-header">
                    <BackButton />
                    <InstrumentsLebel value = 'FAVOURITES' />
                </div>
                
            </div>
        </div>
    )
};

export default FavouritesPageInstruments;