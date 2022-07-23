import React from 'react';

import UploadPageCloseButton from '../upload-page-close-button';

import UploadFileInput from '../upload-file-input';

import './page-instruments.css';

const UploadPageInstruments = () => {
    return(
        <div className = "page-instruments-upload-layout">
            <div className = "page-instruments-upload-content">
                <div className = "page-instruments-upload-header">
                    <div/>
                    <UploadPageCloseButton/>
                </div>
                <UploadFileInput />
            </div>
        </div>
    )
};

export default UploadPageInstruments;