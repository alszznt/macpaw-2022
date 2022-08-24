import React from 'react';

import './next-button.scss';

const NextButton  = ({ action }) => {
    return(
        <div className = "next-button" onClick = { action }>
            <div className = "next-button-label">NEXT</div>
            <div className = "next-button-icon"/>
        </div>
    )
}

export default NextButton;