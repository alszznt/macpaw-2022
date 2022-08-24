import React from 'react';

const GalleryBreedsPickerOpen = ({ breeds, onSelect, text = null, firstVal = null, color = 'lighter', textEnd = null }) => {

    const breedsList = breeds.map((data) => {

        let start = null;
        let end = null;
        if (!textEnd){
            start = !text ? null : text;
        }else{
            end = !text ? null : text;
        }

        return (
            <div 
                className = "breeds-picker-open-list-item"
                key = { data.id }
                onClick = { () => onSelect(data.name, data.id) }>
                { start }{ data.name }{ end }
            </div>
        );
    });

    return(
        <div className = "breeds-picker-open">
            <div className = {`${ color } breeds-picker-open-list`}>
                { !firstVal ? null : <div className = "breeds-picker-open-list-item" onClick = { () => onSelect(firstVal, firstVal) }>{ firstVal }</div> }
                { breedsList }
            </div>
        </div>
    )
}

export default GalleryBreedsPickerOpen;