import React from 'react';

import { FavouritesPageInstruments } from '../page-instruments';

import AppNavigation from '../app-navigation';

const FavouritesPage = () => {
    return(
        <div className = "pages-layout">
            <AppNavigation />
            <FavouritesPageInstruments />
        </div>
    )
}

export default FavouritesPage;