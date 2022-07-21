import React from 'react';

import { CatsPageInstruments } from '../page-instruments';

import AppNavigation from '../app-navigation';

const CatsPage = () => {
    return(
        <div className = "pages-layout">
            <AppNavigation />
            <CatsPageInstruments />
        </div>
    )
}

export default CatsPage;