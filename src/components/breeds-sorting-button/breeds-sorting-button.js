import React from 'react';

import './breeds-sorting-button.scss';

const BreedsSortingButton = ({ switchSort, name }) => {
    return(
        <div className = "breeds-sorting-button" onClick = { () => switchSort() }>
            <div className = {`breeds-sorting-${ name }-button-icon`} />
        </div>
    )
}

export default BreedsSortingButton;