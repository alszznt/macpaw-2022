import React from 'react';

import InstrumentsHeader from '../instruments-header';
import InstrumentsLebel from '../instruments-lebel';
import BackButton from '../back-button';

import { VotingImage, VotesButtons, ActionsLogList } from '../../containers';

import './page-instruments.css';

const VotingPageInstruments = () => {
    return(
        <div className = "page-instruments-layout">
            <InstrumentsHeader />
            <div className = "page-instruments-content">
                <div className = "page-instruments-header">
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