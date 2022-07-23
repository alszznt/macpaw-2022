import React from 'react';

import './upload-photo-button.css';

const UploadPhotoButton = ({ fetchFile, file }) => {
    return(
        <div className = "upload-photo-button" onClick = { () => fetchFile(file) }>
            Upload Photo
        </div>
    )
}

export default UploadPhotoButton;