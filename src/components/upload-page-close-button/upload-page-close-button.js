import React from 'react';

import { useNavigate } from 'react-router-dom';

import './upload-page-close-button.css';

const UploadPageCloseButton = () => {

    const navigate = useNavigate();

    return(
        <div className = "upload-page-close-button" onClick={() => navigate(-1)}>
            <div className = "upload-page-close-button-icon" />
        </div>
    )
}

export default UploadPageCloseButton;