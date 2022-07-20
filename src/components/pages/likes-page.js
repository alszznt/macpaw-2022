import React from 'react';

import AppNavigation from '../app-navigation';
import { LikesPageInstruments } from '../page-instruments';

const LikesPage = () => {
    return(
        <div className = "pages-layout">
            <AppNavigation />
            <LikesPageInstruments />
        </div>
    )
}

export default LikesPage;