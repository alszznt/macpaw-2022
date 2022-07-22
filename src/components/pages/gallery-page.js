import React from 'react';

import { GalleryPageInstruments } from '../page-instruments';

import AppNavigation from '../app-navigation';

const GalleryPage = () => {
    return(
        <div className = "pages-layout">
            <AppNavigation />
            <GalleryPageInstruments />
        </div>
    )
}

export default GalleryPage;