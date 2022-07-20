import React from 'react';

import InstrumentsHeader from '../instruments-header';
import InstrumentsLebel from '../instruments-lebel';
import BackButton from '../back-button';

import FavImageListItem from '../fav-image-list-item';

import { 
    FavImageList, 
    ActionsLogList
} from '../../containers';

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
                <FavImageList Item = { FavImageListItem } />
                <ActionsLogList />
            </div>
        </div>
    )
};

export default FavouritesPageInstruments;