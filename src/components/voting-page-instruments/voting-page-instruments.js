import React from 'react';

import InstrumentsHeader from '../instruments-header';
import InstrumentsLebel from '../instruments-lebel';
import BackButton from '../back-button';

import { VotingImage, VotesButtons, ActionsLogList } from '../../containers';

import './voting-page-instruments.css';

const VotingPageInstruments = () => {
    return(
        <div className = "voting-page-instruments">
            <InstrumentsHeader />
            <div className = "voting-page-content">
                <div className = "voting-page-instruments-header">
                    <BackButton />
                    <InstrumentsLebel value = 'VOTING' />
                </div>
                <VotingImage />
                <VotesButtons />
                <ActionsLogList />
            </div>
        </div>
    );
}

export default VotingPageInstruments;