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

    sortArr = (arr) => (selectedElement, limit, page, sort) => {

        let locArr = [...arr]
        
        let newArr;
        sort === 'AZ' ? newArr = [...locArr] : newArr = [...locArr.reverse()];

        if (selectedElement === 'All breeds'){
            let lust;
            limit * page >= newArr.length ? lust = newArr.length : lust = limit * page;
            let first;
            first = limit * ( page - 1 )
            return [...newArr.slice(first, lust)];
        }else{
            return [...newArr.filter( (el) => el.name === selectedElement )]
        }
    }

    render() {
        
        const { breeds, loading, error, Item, selectedBreed, limit, sort, page } = this.props;

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
                list = { this.sortArr(breeds)(selectedBreed, limit, page, sort) }
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
        resetBreedsData: () => dispatch(resetBreedsData())
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BreedsImageListContainer);