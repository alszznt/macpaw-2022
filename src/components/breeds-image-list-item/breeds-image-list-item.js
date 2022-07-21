import React from 'react';

import { ImageErrorIndicator } from '../error-indicators';

import './breeds-image-list-item.css';

const BreedsImageListItem = ({ props }) => {

    console.log(props.name);

    return(
        <div className = "breeds-image-list-item">
            { props.image === undefined ? <ImageErrorIndicator /> : <Image url = { props.image.url }/> }
            <div className = "breeds-image-list-item-overlay">
                <div className = "breeds-image-list-item-name">
                    { props.name }
                </div>
            </div>
        </div>
    )
}

const Image = ({ url }) => {
    return(
        <div 
            style = {{ backgroundImage:`url(${ url })`}}
            className = "breeds-image-list-item-image"
        />
    )
}

export default BreedsImageListItem;