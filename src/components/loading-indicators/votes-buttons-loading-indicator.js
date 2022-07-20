import React from 'react';

import './loading-indicators.css';

const VotesButtonsLoadingIndicator = () => {
    return(
        <div className = "votes-buttons">

                <div className = "votes-buttons-80 votes-buttons-like-loading"> 
                    <div className = "icon-30 loading-icon-30-white" />
                </div>

                <div className = "votes-buttons-80 votes-buttons-fav-loading"> 
                    <div className = "icon-30 loading-icon-30-white" />
                </div>

                <div className = "votes-buttons-80 votes-buttons-dislike-loading"> 
                    <div className = "icon-30 loading-icon-30-white" />
                </div>
        </div>
    );
}

export default VotesButtonsLoadingIndicator