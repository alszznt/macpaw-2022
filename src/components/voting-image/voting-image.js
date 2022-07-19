import React from 'react';

import './voting-image.css';

const VotingImage = ({ id, url }) => {
    return(
        <div style = {{ backgroundImage:` url(${url})`}} className = "voting-image"/>
    );
};

export default VotingImage;