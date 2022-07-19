import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import './app-navigation-button.css';

const AppNavigationButton = ({ image, label, link, bg }) => {

    const location = useLocation();

    let isActive = location.pathname === link ? 'active' : '';

    return(
        <Link to = { link } className = {`app-navigation-button ${ isActive }`}>
            <div className = "app-navigation-button-background" style={{ backgroundColor: bg }}>
                <img 
                    src = { image } 
                    alt = { label } 
                    className = "app-navigation-button-illustration"
                />
            </div>
            <div className = "app-navigation-button-label">
                { label }
            </div>
        </Link>
    );
}

export default AppNavigationButton;