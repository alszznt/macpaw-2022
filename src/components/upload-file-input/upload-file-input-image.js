import React from 'react'

import './upload-file-input.css';

const UploadFileInputImage = ({ file, isActive }) => {
    const active = isActive ? 'upload-file-input-active' : 'upload-file-input'
    const url = URL.createObjectURL(file)
    return(
        <div className = { active }>
            <div className = "upload-file-image" style = {{ backgroundImage: `url(${ url })` }} /> 
        </div>
    )
}

export default UploadFileInputImage;