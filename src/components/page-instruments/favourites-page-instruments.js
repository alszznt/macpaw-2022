import React from 'react';

import InstrumentsHeader from '../instruments-header';
import InstrumentsLebel from '../instruments-lebel';
import BackButton from '../back-button';

import { 
    FavImageList, 
    ActionsLogList,
    FavImageListItem
} from '../../containers';

import './page-instruments.scss';

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