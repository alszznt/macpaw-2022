import React from 'react';

import './cat-image.css';

const CatImage = ({ url }) => {
    return(
        <div style = {{ backgroundImage:` url(${url})`}} className = "voting-image"/>
    );
};

export default CatImage;