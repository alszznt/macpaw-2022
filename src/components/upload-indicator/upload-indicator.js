import React from 'react';

import './upload-indicator.css';

const UploadIndicator = ({ value, icon }) => {
    const ic = icon ? 'upload-indicator-suc-icon' : 'upload-indicator-fail-icon';
    return(
        <div className = "upload-indicator">
            <div className = { ic }/>
            <div className = "upload-indicator-label">{ value }</div>
        </div>
    )
}

export default UploadIndicator;