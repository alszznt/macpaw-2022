import React from 'react';

import { Link } from 'react-router-dom';

import './link-to-upload.scss';

const LinkToUpload = () => {
    return(
        <Link to = '/gallery/upload' className = "link-to-upload">
            <div className = "link-to-upload-icon"/>
            <div className = "link-to-upload-label">UPLOAD</div>
        </Link>
    )
}

export default LinkToUpload;