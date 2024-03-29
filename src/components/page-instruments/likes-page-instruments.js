import React from 'react';

import InstrumentsHeader from '../instruments-header';
import InstrumentsLebel from '../instruments-lebel';
import BackButton from '../back-button';

import { 
    LikesImageListItem, 
    VotesImageList
} from '../../containers';

import './page-instruments.css';

const LikesPageInstruments = () => {
    return(
        <div className = "page-instruments-layout">
            <InstrumentsHeader />
            <div className = "page-instruments-content">
                <div className = "page-instruments-header">
                    <BackButton />
                    <InstrumentsLebel value = 'LIKES' />
                </div>
                <VotesImageList Item = { LikesImageListItem } />
            </div>
        </div>
    )
};

export default LikesPageInstruments;