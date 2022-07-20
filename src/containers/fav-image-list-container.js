import React, { Component } from 'react';

import ImageList from '../components/image-list';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import { ElementLoadingIndicator } from '../components/loading-indicators';
import { ListNoResultIndicator } from '../components/error-indicators';

import { getFavourite } from '../actions';

class FavImageListContainer extends Component {

    componentDidMount() {
        const { getFavourite } = this.props;
        getFavourite('', 'DESC', 0);
    }

    render() {
        
        const { favouriteList, loading, error, Item } = this.props;

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

        if (favouriteList.length === 0){
            return <ListNoResultIndicator />
        }

        return (
            <ImageList 
                list = { favouriteList }
                Item = { Item }
            />
        )
    }

}

const mapStateToProps = ({ favouriteData: { favouriteList, loading, error } }) => {
    return { favouriteList, loading, error };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        getFavourite: (limit, order, page) => getFavourite(catService, dispatch)(limit, order, page),
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FavImageListContainer);