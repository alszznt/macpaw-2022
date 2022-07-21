import React from 'react';

import './image-list.css';

const ImageList = ({ list, Item }) => {

    const content = list.map((data) => {

        return (
            <Item 
                props = { data }
                key = { data.id }
            />
        );
    });

    return(
        <div className = "image-list">
            { content }
        </div>
    );
}

export default ImageList;