import React, { Component } from 'react';

import PrevButton from '../prev-button';
import NextButton from '../next-button';

import { connect } from 'react-redux';
import { withCatService } from '../hoc';
import { compose } from '../../utils';

import { 
    onGalleryPagesInc,
    onGalleryPagesDec
} from '../../actions';

import './gallery-switch-page-buttons.css';


class GallerySwitchPageButtonsContainer extends Component {

    render() {
        
        const { galleryData, favouriteData, onGalleryPagesInc, onGalleryPagesDec } = this.props; 
        const { loading } = galleryData;

        if(loading || favouriteData.loading )return null

        return (
            <GallerySwitchPageButtons
                page = { galleryData.page }
                incBreedsPage = { onGalleryPagesInc }
                decBreedsPage = { onGalleryPagesDec }
                data = { galleryData.reservData }
             />
        )
    }

}


const GallerySwitchPageButtons = ({ page, incBreedsPage, decBreedsPage, data }) => {


    return(
        <div className = "breeds-switch-page-buttons">
            { page === 0 ? <div /> : <PrevButton action = { () => decBreedsPage(data, page) } /> }
            <NextButton action = { () => incBreedsPage(data, page) } />
        </div>
    )
};

const mapStateToProps = ({ galleryData, favouriteData, breedsData }) => {
    return { galleryData, favouriteData, breedsData };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        onGalleryPagesInc: ( data, page ) => dispatch(onGalleryPagesInc(catService, dispatch)( data, page )),
        onGalleryPagesDec: ( data, page ) => dispatch(onGalleryPagesDec(catService, dispatch)( data, page ))
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(GallerySwitchPageButtonsContainer);