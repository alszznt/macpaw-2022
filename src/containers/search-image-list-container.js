import React, { Component } from 'react';

import ImageList from '../components/image-list';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import { ElementLoadingIndicator } from '../components/loading-indicators';
import { ListNoResultIndicator, ImageErrorIndicator } from '../components/error-indicators';

import { getSearch } from '../actions';

class SearchImageListContainer extends Component {

    componentDidMount() {
        const { getSearch, value } = this.props;
        getSearch(value);
    }

    render() {
        
        const { loading, error, serchList, Item } = this.props;

        if (loading){
            return <ElementLoadingIndicator />
        }

        if (error){
            return(
                <ImageErrorIndicator/>
            )
        }

        if (serchList.length === 0){
            return <ListNoResultIndicator />
        }

        return (
            <ImageList 
                list = { serchList }
                Item = { Item }
            />
        )
    }

}

const mapStateToProps = ({ searchData: { value, loading, error, serchList } }) => {
    return { value, loading, error, serchList };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        getSearch: (val) => getSearch(catService, dispatch)(val)
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(SearchImageListContainer);