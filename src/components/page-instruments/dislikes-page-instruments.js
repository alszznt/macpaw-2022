import React from 'react';

import InstrumentsHeader from '../instruments-header';
import InstrumentsLebel from '../instruments-lebel';
import BackButton from '../back-button';

import { DislikesImageListItem } from '../../containers';

import { VotesImageList } from '../../containers';

import './page-instruments.css';

const DislikesPageInstruments = () => {
    return(
        <div className = "page-instruments-layout">
            <InstrumentsHeader />
            <div className = "page-instruments-content">
                <div className = "page-instruments-header">
                    <BackButton />
                    <InstrumentsLebel value = 'DISLIKES' />
                </div>
                <VotesImageList Item = { DislikesImageListItem } />
            </div>
        </div>
    )
};

export default DislikesPageInstruments;