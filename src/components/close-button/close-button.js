import React from 'react';

import { useNavigate } from 'react-router-dom';

import './close-button.scss';

const CloseButton = ({ size = false }) => {

    const navigate = useNavigate();

    let incSize = ''
    if (size){
        incSize = 'close-button-big'
    }

    return(
        <div className = {`${ incSize } close-button`} onClick={() => navigate(-1)}>
            <div className = "close-button-icon" />
        </div>
    )
}

export default CloseButton;