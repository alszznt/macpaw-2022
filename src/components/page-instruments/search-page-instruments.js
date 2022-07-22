import React from 'react';

import InstrumentsHeader from '../instruments-header';
import InstrumentsLebel from '../instruments-lebel';
import BackButton from '../back-button';

import { 
    SearchImageListItem, 
    SearchImageList
} from '../../containers';

import './page-instruments.css';

const SearchPageInstruments = () => {
    return(
        <div className = "page-instruments-layout">
            <InstrumentsHeader />
            <div className = "page-instruments-content">
                <div className = "page-instruments-header">
                    <BackButton />
                    <InstrumentsLebel value = 'SEARCH' />
                </div>
                <SearchImageList Item = { SearchImageListItem } />
            </div>
        </div>
    )
};

export default SearchPageInstruments;