import React from 'react';

import './pages.css';

const HomePage = () => {
    return(
        <div className = "home-page">
            <div className = "home-page-left"></div>
            <div className = "home-page-right">
                <div className = "home-page-right-illustration"></div>
                <div className = "home-page-right-background-contaiter">
                    <div className = "home-page-right-background" />
                </div>
            </div>
        </div>
    )
}

export default HomePage;