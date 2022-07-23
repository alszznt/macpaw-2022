import React from 'react';

import './upload-file-input.css';

const UploadFileInput = ({ onFileSelected, fetchFile, file }) => {
    return(
        <div className = "upload-file-input">
            <input 
                className = "upload-file-input-hidden"
                type = "file" 
                id = "file" 
                onChange = { onFileSelected }/>
                
                <div className = "upload-file-input-lebel">
                    <span className = "upload-file-input-lebel-bold">Drag here </span> 
                    your file or 
                    <label 
                        className = "upload-file-input-lebel-bold-active" 
                        htmlFor = "file"> 
                        <> Click here </>
                    </label>
                    to upload
                </div>

                <div className = "upload-file-input-icon"/>
        </div>
    )
}

export default UploadFileInput;