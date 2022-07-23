import React from 'react';

import UploadPageCloseButton from '../upload-page-close-button';

import { 
    UploadFileInput, 
    FileNameTag,
    UploadPhotoButton,
    FaUploadIndicator,
    SucUploadIndicator
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
                <div className = "page-instruments-upload-title-container">
                    <div className = "page-instruments-upload-title">
                        Upload a .jpg or .png Cat Image
                    </div>
                    <div className = "page-instruments-upload-subtitle">
                        Any uploads must comply with the 
                        <a 
                            href = "https://thecatapi.com/privacy" 
                            className = "page-instruments-upload-link"
                            target="_blank">
                            <> upload guidelines </>
                        </a>
                        or face deletion.
                    </div>
                </div>
                <UploadFileInput />
                <FileNameTag />
                <UploadPhotoButton />
                <FaUploadIndicator />
                <SucUploadIndicator/>
            </div>
        </div>
    )
};

export default UploadPageInstruments;