import React from 'react';

import { Link } from 'react-router-dom';

import AppNavigationButton from '../app-navigation-button';

import Logo from '../../assets/logo.svg';
import Voting from '../../assets/voting.png';
import Breeds from '../../assets/breeds.png'
import Gallery from '../../assets/gallery.png'

import './app-navigation.css';

const AppNavigation = () => {
    return(
        <div className = "app-navigation">
            <div className = "app-navigation-content-container">
                <div className = "app-navigation-header">
                    <Link to = '/' className = "app-logo">
                        <img src = { Logo } alt = "app-logo" className = "app-logo"/>
                    </Link>
                </div>
                <div className = "app-navigation-content">
                    <div className = "app-navigation-title">Hi intern!</div>
                    <div className = "app-navigation-subtitle">Welcome to MI 2022 Front-end test</div>
                    <div className = "app-navigation-buttons-title">Lets start using The Cat API</div>
                    <div className = "app-navigation-buttons-container">
                        <AppNavigationButton 
                            image = { Voting } 
                            label = "VOTING" 
                            link = '/voting' 
                            bg = '#B4B7FF' 
                        />
                        <AppNavigationButton 
                            image = { Breeds } 
                            label = "BREEDS" 
                            link = '/breeds' 
                            bg = '#97EAB9' 
                        />
                        <AppNavigationButton 
                            image = { Gallery } 
                            label = "GALLERY" 
                            link = '/gallery' 
                            bg = '#FFD280' 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppNavigation;