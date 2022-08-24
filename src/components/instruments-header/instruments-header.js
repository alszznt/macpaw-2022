import React from 'react';

import InstrumentsHeaderNavigation from '../instruments-header-navigation';
import MenuOpenButton from '../menu-open-button';

import { SearchBreedsInput } from '../../containers';

import './instruments-header.scss';

const InstrumentsHeader = () => {
    return(
        <div className = "instruments-header">
            <MenuOpenButton />
            <SearchBreedsInput />
            <InstrumentsHeaderNavigation />
        </div>
    );
}

export default InstrumentsHeader;