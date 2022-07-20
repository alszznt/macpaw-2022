import React from 'react';

import AppNavigation from '../app-navigation';
import { DislikesPageInstruments } from '../page-instruments';

const DislikesPage = () => {
    return(
        <div className = "pages-layout">
            <AppNavigation />
            <DislikesPageInstruments />
        </div>
    )
}

export default DislikesPage;