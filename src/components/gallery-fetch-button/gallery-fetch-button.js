import React from 'react';

import './gallery-fetch-button.scss';

const GalleryFetchButton = ({ getList, data: { limit, type, page, order, breed } }) => {
    return(
        <div 
            className = "gallery-fetch-button" 
            onClick = { () => getList(limit, type, page, order, breed.id, true) }>
            <div className = "gallery-fetch-button-icon"/>
        </div>
    )
}

export default GalleryFetchButton;