import React from 'react';

import { Link } from 'react-router-dom';

import './menu-open-button.scss';

const MenuOpenButton = () => {

    return(
        <Link to = "/menu" className = "menu-open-button">
            <div className = "menu-open-icon" />
        </Link>
    )
}

export default MenuOpenButton;