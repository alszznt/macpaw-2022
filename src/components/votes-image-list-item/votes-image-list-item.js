import React from 'react';

import './votes-image-list-item.css';

const VotesImageListItem = ({ url }) => {

    console.log(url);

    return(
        <div className = "likes-image-list-item">
            <div 
                style = {{ backgroundImage:`url(${ url })`}}
                className = "likes-image-list-item-image"
            />
        </div>
    )
}

export default VotesImageListItem;