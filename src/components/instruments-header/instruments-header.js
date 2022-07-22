import React from 'react';

import InstrumentsHeaderNavigation from '../instruments-header-navigation';

import { SearchBreedsInput } from '../../containers';

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