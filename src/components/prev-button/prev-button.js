import React from 'react';

import './prev-button.css';

const PrevButton = ({ action }) => {
    return(
        <div className = "prev-button" onClick = { action }>
            <div className = "prev-button-icon"/>
            <div className = "prev-button-label">PREV</div>
        </div>
    )
}

export default PrevButton;