import React from 'react';

import AppNavigation from '../app-navigation';
import HomePageIllustration from '../home-page-illustration';

import './pages.scss';

const HomePage = () => {
    return(
        <div className = "pages-layout home-page-mobile">
            <AppNavigation showTitle = { true } />
            <HomePageIllustration />
        </div>
    )
}

export default HomePage;