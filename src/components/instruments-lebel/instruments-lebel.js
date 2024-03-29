import React from 'react';

import './instruments-lebel.css';

const InstrumentsLebel = ({ value, isActive = true }) => {

    let isActv;

    isActive ? isActv = 'instruments-lebel-active' : isActv =''

    return(
        <div className = {`instruments-lebel ${ isActv }`}>
            { value }
        </div>
    )
}

export default InstrumentsLebel;