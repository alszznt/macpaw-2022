import React from 'react';

import './image-list-with-name.css';

const ImageListWithName = ({ list, Item }) => {

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

export default ImageListWithName;