import React from 'react';

import './gallery-image-list-item.css';

const GalleryImageListItem = ({ props }) => {

    console.log(props);

    return(
        <div className = "gallery-image-list-item">
            <div className = "gallery-image-list-item-image" />

        </div>
    )
}

export default GalleryImageListItem;