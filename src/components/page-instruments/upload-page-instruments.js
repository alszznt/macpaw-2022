import React from 'react';

import UploadPageCloseButton from '../upload-page-close-button';

import UploadIndicator from '../upload-indicator';

import { 
    UploadFileInput, 
    FileNameTag,
    UploadPhotoButton
} from '../../containers';

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
                <FileNameTag />
                <UploadPhotoButton />
                {/* <UploadIndicator /> */}
            </div>
        </div>
    )
};

export default UploadPageInstruments;