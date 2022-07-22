import React, { Component } from 'react';

import ImageList from '../components/image-list';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import { ElementLoadingIndicator } from '../components/loading-indicators';
import { ListNoResultIndicator, ImageErrorIndicator } from '../components/error-indicators';

import { 
    getGalletyList,
    getBreeds,
    getFavourite
} from '../actions';

class GalleryImageListContainer extends Component { 

    componentDidMount() {
        const { getBreeds, getGalletyList,getFavourite } = this.props;
        getGalletyList(5, 'All', 0, 'Random', 'None', true)
        getBreeds()
        getFavourite('', 'DESC', 0);
        console.log('MOUNT');
    }

    render() {
        
        const { galleryList, loading, error, Item, favouriteData } = this.props;

        if ( loading || favouriteData.loading ){
            return <ElementLoadingIndicator />
        }

        if (error){
            return(
                <ImageErrorIndicator/>
            )
        }

        if (galleryList.length === 0){
            return <ListNoResultIndicator />
        }        

        return (
            <ImageList 
                list = { galleryList }
                Item = { Item }
            />
        )
    }

}

const mapStateToProps = ({ galleryData: { galleryList, loading, error }, favouriteData }) => {
    return { galleryList, loading, error, favouriteData };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        getBreeds: () => getBreeds(catService, dispatch),
        getGalletyList: (limit, type, page, order, breed, isReset) => getGalletyList(catService, dispatch)(limit, type, page, order, breed, isReset),
        getFavourite: (limit, order, page) => getFavourite(catService, dispatch)(limit, order, page),
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(GalleryImageListContainer);