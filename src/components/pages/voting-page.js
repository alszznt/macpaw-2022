import React from 'react';

import AppNavigation from '../app-navigation';
import VotingPageInstruments from '../voting-page-instruments';

const VotingPage = () => {
    return(
        <div className = "pages-layout">
            <AppNavigation />
            <VotingPageInstruments />
        </div>
    )
}

export default VotingPage;