import React from 'react';

import './breeds-image-list-item.css';

const BreedsImageListItem = ({ props }) => {

    console.log(props);

    return(
        <div className = "breeds-image-list-item">
            <div 
                // style = {{ backgroundImage:`url(${ url })`}}
                className = "breeds-image-list-item-image"
            />
        </div>
    )
}

export default BreedsImageListItem;