import React from 'react';

import GalleryFetchButton from '../gallery-fetch-button';

import {
    GalleryBreedPicker, 
    GalleryOrderPicker,
    GalleryTypePicker,
    GalleryLimitPicker
} from '../../containers';

import './gallery-filters.css';

const GalleryFilters = () => {
    return (
        <div className = "gallery-filters">
            <PickerWithLabel 
                Picker = { GalleryOrderPicker }
                label = "ORDER"
            />
            <PickerWithLabel 
                Picker = { GalleryTypePicker }
                label = "TYPE"
            />
            <PickerWithLabel 
                Picker = { GalleryBreedPicker }
                label = "BREED"
            />
            <div className = "gallery-filters-filt-with-button">
                <PickerWithLabel 
                    Picker = { GalleryLimitPicker }
                    label = "LIMIT"
                />
                <div className = "gallery-filters-button-container">
                    <div />
                    <GalleryFetchButton/>
                </div>
            </div>
        </div>
    )
}

const PickerWithLabel = ({ Picker, label }) => {
    return(
        <div className = "picker-with-label">
            <div className = "picker-with-label-text">{ label }</div>
            <Picker />
        </div>
    )
}

export default GalleryFilters;