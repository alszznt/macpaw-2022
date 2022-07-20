import React from 'react';

import { useNavigate } from 'react-router-dom';

import './back-button.css';

const BackButton = () => {

    const navigate = useNavigate();

    return(
        <div 
            className = "back-button" 
            onClick={() => navigate(-1)}>
            <div className = "back-icon-20" />
        </div>
    )
}

export default BackButton;