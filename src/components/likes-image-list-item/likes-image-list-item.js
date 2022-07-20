import React from 'react';

import './likes-image-list-item.css';

const LikesImageListItem = ({ url }) => {

    return(
        <div className = "likes-image-list-item">
            <div 
                style = {{ backgroundImage:`url(${ url })`}}
                className = "likes-image-list-item-image"
            />
        </div>
    )
}

export default LikesImageListItem;