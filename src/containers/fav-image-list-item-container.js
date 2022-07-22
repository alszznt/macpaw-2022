import React, { Component } from 'react';

import FavImageListItem from '../components/fav-image-list-item';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import { deleteFavourite } from '../actions';

class FavImageListItemContainer extends Component {

    render() {

        const { deleteFavourite, props } = this.props

        return (
            <FavImageListItem 
                props = { props }
                deleteFavourite = { deleteFavourite }
            />
        )
    }

}

const mapStateToProps = ({ votingData: { votingList, loading, error } }) => {
    return { votingList, loading, error };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        deleteFavourite: (id, imgId) => deleteFavourite(catService, dispatch)(id, imgId),
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FavImageListItemContainer);