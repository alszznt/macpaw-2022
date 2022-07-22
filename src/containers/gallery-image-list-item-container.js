import React, { Component } from 'react';

import GalleryImageListItem from '../components/gallery-image-list-item';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import { deleteFavourite, addFavourite } from '../actions';

class GalleryImageListItemContainer extends Component {

    render() {

        const { addFavourite, deleteFavourite, props, favouriteList } = this.props

        let fav = favouriteList.find( (el) => (el.image_id === props.id))

        return (
            <GalleryImageListItem 
                props = { props }
                addFavourite = { addFavourite }
                deleteFavourite = { deleteFavourite }
                fav = { fav }
            />
        )
    }

}

const mapStateToProps = ({ favouriteData: { favouriteList, loading } }) => {
    return { favouriteList, loading };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        deleteFavourite: (id, imgId) => deleteFavourite(catService, dispatch)(id, imgId),
        addFavourite: (id) => addFavourite(catService, dispatch)(id),
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(GalleryImageListItemContainer);