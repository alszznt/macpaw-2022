import React from 'react';

import { Link } from 'react-router-dom';

import { ThemeSwitcher } from '../../containers';
import AppNavigationButton from '../app-navigation-button';
import CloseButton from '../close-button';

import Voting from '../../assets/voting.png';
import Breeds from '../../assets/breeds.png';
import Gallery from '../../assets/gallery.png';

import './app-navigation.scss';

const AppNavigation = ({ showTitle = false }) => {
    let distance = 'distance-dec';
    if (showTitle){
        distance = ''
    }
    return(
        <div className = "app-navigation">
            <div className = "app-navigation-content-container">

                <AppNavigationHeader/>

                { showTitle? 
                        <AppNavigationHeader cName = "app-navigation-header-mobile" />
                        :
                        <div className = "app-navigation-header app-navigation-header-mobile">
                            <div/>
                            <CloseButton size = { true }/>
                        </div>
                    }

                <div className = "app-navigation-content-container-mobile">
                    
                    <div className = {`${ distance } app-navigation-content`}>
                        <AppNavigationText />
                        { showTitle? 
                            <AppNavigationText cName = "app-navigation-text-mobile" />
                            :
                            null
                        }
                        <div className = {`app-navigation-buttons-container`}>
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
        </div>
    );
}

const AppNavigationText = ({ cName = '' }) => {
    return(
        <div className = {`app-navigation-text ${ cName }`}>
            <div className = "app-navigation-title">Hi intern!</div>
            <div className = "app-navigation-subtitle">Welcome to MI 2022 Front-end test</div>
            <div className = "app-navigation-buttons-title">Lets start using The Cat API</div>
        </div>
    )
}

const AppNavigationHeader = ({cName = ''}) => {
    return(
        <div className = {`app-navigation-header app-navigation-header-home ${ cName }`}>
            <Link to = '/' className = "app-logo">
                <div className = "app-logo"/>
            </Link>
            <ThemeSwitcher/>
        </div>
    )
}

export default AppNavigation;