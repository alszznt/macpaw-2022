import React, { Component } from 'react';

import ImageList from '../components/image-list';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import { ElementLoadingIndicator } from '../components/loading-indicators';
import { ListNoResultIndicator, ImageErrorIndicator } from '../components/error-indicators';

import { 
    getBreeds, 
    resetBreedsData,
    sortArr 
} from '../actions';

class BreedsImageListContainer extends Component {

    componentDidMount() {
        const { getBreeds } = this.props;
        getBreeds();
    }

    componentWillUnmount(){
        const { resetBreedsData } = this.props;
        resetBreedsData();
    }

    render() {
        
        const { breeds, loading, error, Item, selectedBreed, limit, sort, page, sortArr } = this.props;

        if (loading){
            return <ElementLoadingIndicator />
        }

        if (error){
            return(
                <ImageErrorIndicator/>
            )
        }

        if (breeds.length === 0){
            return <ListNoResultIndicator />
        }

        

        return (
            <ImageList 
                list = { sortArr(breeds)(selectedBreed, limit, page, sort) }
                Item = { Item }
            />
        )
    }

}

const mapStateToProps = ({ breedsData: { breeds, loading, error, selectedBreed, limit, sort, page } }) => {
    return { breeds, loading, error, selectedBreed, limit, sort, page };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        getBreeds: () => getBreeds(catService, dispatch),
        resetBreedsData: () => dispatch(resetBreedsData()),
        sortArr
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BreedsImageListContainer);