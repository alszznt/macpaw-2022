import React from 'react';

import InstrumentsHeader from '../instruments-header';
import InstrumentsLebel from '../instruments-lebel';
import BackButton from '../back-button';

import GalleryFilters from '../gallery-filters';
import LinkToUpload from '../link-to-upload';

import GallerySwitchPageButtons from '../gallery-switch-page-buttons';

import { 
    GalleryImageList,
    GalleryImageListItem,
} from '../../containers';

import './page-instruments.scss';

const GalleryPageInstruments = () => {
    return(
        <div className = "page-instruments-layout">
            <InstrumentsHeader />
            <div className = "page-instruments-content">
                <div className = "page-instruments-content-container">
                    <div className = "page-instruments-gallery-header">
                        <BackButton />
                        <InstrumentsLebel value = 'GALLERY' />
                        <LinkToUpload />
                    </div>
                    <GalleryFilters />
                    <GalleryImageList Item = { GalleryImageListItem }/>
                </div>
                <GallerySwitchPageButtons />
            </div>
        </div>
    )
};

export default GalleryPageInstruments;