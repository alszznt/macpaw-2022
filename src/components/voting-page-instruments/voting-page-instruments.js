import React from 'react';

import { VotingImage, VotesButtons, ActionsLogList } from '../../containers';

import InstrumentsHeader from '../instruments-header';

import './voting-page-instruments.css';

const VotingPageInstruments = () => {
    return(
        <div className = "voting-page-instruments">
            <InstrumentsHeader />
            <div className = "voting-page-content">
                <VotingImage />
                <VotesButtons />
                <ActionsLogList />
            </div>
        </div>
    );
}

export default VotingPageInstruments;