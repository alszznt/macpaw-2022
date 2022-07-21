import React, { Component } from 'react';

import ImageList from '../components/image-list';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import { ElementLoadingIndicator } from '../components/loading-indicators';
import { ListNoResultIndicator } from '../components/error-indicators';

import { 
    getBreeds, 
    resetBreedsData 
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
        
        const { breeds, loading, error, Item } = this.props;

        if (loading){
            return <ElementLoadingIndicator />
        }

        if (error){
            return(
                <div>
                    something went wrong :(
                </div>
            )
        }

        if (breeds.length === 0){
            return <ListNoResultIndicator />
        }

        return (
            <ImageList 
                list = { breeds }
                Item = { Item }
            />
        )
    }

}

const mapStateToProps = ({ breedsData: { breeds, loading, error } }) => {
    return { breeds, loading, error };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        getBreeds: () => getBreeds(catService, dispatch),
        resetBreedsData: () => dispatch(resetBreedsData())
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BreedsImageListContainer);