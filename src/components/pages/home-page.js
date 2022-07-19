import React from 'react';

import AppNavigation from '../app-navigation';
import HomePageIllustration from '../home-page-illustration';

import './pages.css';

const HomePage = () => {
    return(
        <div className = "pages-layout">
            <AppNavigation />
            <HomePageIllustration />
        </div>
    )
}

export default HomePage;