import React from 'react';

import './upload-indicator.css';

const UploadIndicator = () => {
    return(
        <div className = "upload-indicator">
            <div className = "upload-indicator-suc-icon"/>
            <div className = "upload-indicator-label">Thanks for the Upload - Cat found!</div>
        </div>
    )
}

export default UploadIndicator;