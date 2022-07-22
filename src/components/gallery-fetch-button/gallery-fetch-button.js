import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withCatService } from '../hoc';
import { compose } from '../../utils';

import { 
    getGalletyList
} from '../../actions';

import './gallery-fetch-button.css';

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


const GalleryFetchButton = ({ getList, data: { limit, type, page, order, breed } }) => {
    return(
        <div 
            className = "gallery-fetch-button" 
            onClick = { () => getList(limit, type, page, order, breed.id) }>
            <div className = "gallery-fetch-button-icon"/>
        </div>
    )
}

const GalleryFetchButtonLoading = () => {
    return(
        <div 
            className = "gallery-fetch-button-loading">
            <div className = "gallery-fetch-button-icon-loading"/>
        </div>
    )
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