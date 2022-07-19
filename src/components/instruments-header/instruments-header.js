import React from 'react';

import SearchBreedsInput from '../search-breeds-input';
import InstrumentsHeaderNavigation from '../instruments-header-navigation';

import './instruments-header.css';

const InstrumentsHeader = () => {
    return(
        <div className = "instruments-header">
            <SearchBreedsInput />
            <InstrumentsHeaderNavigation />
        </div>
    );
}

export default InstrumentsHeader;