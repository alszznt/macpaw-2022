import React from 'react';

import './gallery-image-list-item.css';

const GalleryImageListItem = ({ props, deleteFavourite, addFavourite, fav }) => {

    let icon = fav ? 'gallery-image-list-item-fill-icon' : 'gallery-image-list-item-icon';

    return(
        <div className = "gallery-image-list-item">
            <div 
                className = "gallery-image-list-item-image" 
                style = {{ backgroundImage:`url(${ props.url })`}}
            />
            { fav?
                <div 
                    onClick = { () => deleteFavourite(fav.id)}
                    className = "gallery-image-list-item-overlay">
                    <div className = "gallery-image-list-item-icon-container">
                        <div className = { icon } />
                    </div>
                </div>
            :
                <div 
                    onClick = { () => addFavourite(props.id)}
                    className = "gallery-image-list-item-overlay">
                    <div className = "gallery-image-list-item-icon-container">
                        <div className = { icon } />
                    </div>
                </div>
            }
        </div>
    )
}

export default GalleryImageListItem;