import React from 'react';

import { VotingImage, VotesButtons } from '../../containers';

import InstrumentsHeader from '../instruments-header';

import './voting-page-instruments.css';

const VotingPageInstruments = () => {
    return(
        <div className = "voting-page-instruments">
            <InstrumentsHeader />
            <div className = "voting-page-content">
                <VotingImage />
                <VotesButtons />
            </div>
        </div>
    );
}

export default VotingPageInstruments;