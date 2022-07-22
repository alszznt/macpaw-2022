import React, { Component } from 'react';

import GalleryFetchButton from '../components/gallery-fetch-button';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import { GalleryFetchButtonLoading } from '../components/loading-indicators';

import { 
    getGalletyList
} from '../actions';

class GalleryFetchButtonContainer extends Component {

    render() {
        
        const { getGalletyList, galleryData, favouriteData, breedsData } = this.props; 
        const { loading } = galleryData;

        if(loading || favouriteData.loading || breedsData.loading)return <GalleryFetchButtonLoading />

        return (
            <GalleryFetchButton 
                getList = {  getGalletyList } 
                data = { galleryData }
            />
        )
    }

}

const mapStateToProps = ({ galleryData, favouriteData, breedsData }) => {
    return { galleryData, favouriteData, breedsData };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        getGalletyList: ( limit, type, page, order, breed ) => getGalletyList(catService, dispatch)( limit, type, page, order, breed )
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(GalleryFetchButtonContainer);