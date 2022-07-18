import React from 'react';

import './loading-indicator.css';

const LoadingIndicator = () => {
    return(
        <div className = "loading-indicator">
            <div className = "loading-indicator-content">
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingIndicator;