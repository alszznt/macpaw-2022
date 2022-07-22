import React from 'react';

import { ImageErrorIndicator } from '../error-indicators';

import './search-image-list-item.css';

const SearchImageListItem = ({ props, url }) => {

    console.log(props.id);
    return(
        <div className = "breeds-image-list-item">
            { !url ? <ImageErrorIndicator /> : <Image url = { url }/> }
            <div
                className = "breeds-image-list-item-overlay">
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

export default SearchImageListItem;