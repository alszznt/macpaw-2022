import React from 'react';

import { BreedsPageInstruments } from '../page-instruments';

import AppNavigation from '../app-navigation';

const BreedsPage = () => {
    return(
        <div className = "pages-layout">
            <AppNavigation />
            <BreedsPageInstruments />
        </div>
    )
}

export default BreedsPage;