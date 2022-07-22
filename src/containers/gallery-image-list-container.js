import React, { Component } from 'react';

import ImageList from '../components/image-list';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import { ElementLoadingIndicator } from '../components/loading-indicators';
import { ListNoResultIndicator, ImageErrorIndicator } from '../components/error-indicators';

import { 
    getGalletyList,
    getBreeds
} from '../actions';

class GalleryImageListContainer extends Component {

    componentDidMount() {
        const { getBreeds, getGalletyList } = this.props;
        getGalletyList()
        getBreeds()
    }

    render() {
        
        const { galleryList, loading, error, Item } = this.props;

        if (loading){
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

const mapStateToProps = ({ galleryData: { galleryList, loading, error } }) => {
    return { galleryList, loading, error };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        getBreeds: () => getBreeds(catService, dispatch),
        getGalletyList: () => getGalletyList(catService, dispatch)()
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(GalleryImageListContainer);