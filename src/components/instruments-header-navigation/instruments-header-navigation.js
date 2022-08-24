import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import './instruments-header-navigation.scss';

const InstrumentsHeaderNavigation = () => {

    const location = useLocation();
    const active = 'instruments-header-navigation-button-active';

    let isLikes = location.pathname === '/likes' ? active : '';
    let isDisikes = location.pathname === '/dislikes' ? active : '';
    let isFav = location.pathname === '/favourites' ? active : '';

    return(
        <div className = "instruments-header-navigation">
            <Link to = '/likes' className = {`instruments-header-navigation-button ${ isLikes }`}>
                <div className = "like-icon-30"/>
            </Link>
            <Link to = '/favourites' className = {`instruments-header-navigation-button ${ isFav }`}>
                <div className = "fav-icon-30"/>
            </Link>
            <Link to = '/dislikes' className = {`instruments-header-navigation-button ${ isDisikes }`}>
                <div className = "dislike-icon-30"/>
            </Link>
        </div>
    );
};

export default InstrumentsHeaderNavigation;