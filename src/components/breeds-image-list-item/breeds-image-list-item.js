import React from 'react';

import { ImageErrorIndicator } from '../error-indicators';

import { Link } from 'react-router-dom';

import './breeds-image-list-item.css';

const BreedsImageListItem = ({ props }) => {

    console.log(props);

    return(
        <div className = "breeds-image-list-item">
            { props.image === undefined ? <ImageErrorIndicator /> : <Image url = { props.image.url }/> }
            <Link
                to = {`/breeds/${ props.id }`}
                className = "breeds-image-list-item-overlay">
                <div className = "breeds-image-list-item-name">
                    { props.name }
                </div>
            </Link>
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