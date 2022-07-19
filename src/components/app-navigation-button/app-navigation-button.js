import React from 'react';

import { Link } from 'react-router-dom';

import './app-navigation-button.css';

const AppNavigationButton = ({ image, label, link, bg }) => {
    return(
        <Link to = { link } className = "app-navigation-button">
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