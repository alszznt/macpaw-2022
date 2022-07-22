import React from 'react';

import AppNavigation from '../app-navigation';
import { SearchPageInstruments } from '../page-instruments';

const SearchPage = () => {
    return(
        <div className = "pages-layout">
            <AppNavigation />
            <SearchPageInstruments />
        </div>
    )
}

export default SearchPage;