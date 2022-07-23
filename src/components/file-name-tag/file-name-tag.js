import React from 'react';

import './file-name-tag.css';

const FileNameTag = ({ file }) => {
    return(
        <div className = "file-name-tag">
            { file ? `Image File Name: ${file.name}`  :  'No file selected' }
        </div>
    )
}

export default FileNameTag;