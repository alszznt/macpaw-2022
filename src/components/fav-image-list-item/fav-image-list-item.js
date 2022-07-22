import React from 'react';

import './fav-image-list-item.css';

const FavImageListItem = ({ props, deleteFavourite }) => {

    return(
        <div className = "fav-image-list-item">
            <div 
                style = {{ backgroundImage:`url(${ props.image.url })`}}
                className = "fav-image-list-item-image"
            />
            <div 
                className = "fav-image-list-item-overlay"
                onClick = { () => deleteFavourite(props.id, props.image_id) }>
                <div className = "fav-image-list-item-icon-container">
                    <div className = "fav-color-20" />
                </div>
            </div>
        </div>
    )
}

export default FavImageListItem;