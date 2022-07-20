import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withCatService } from '../hoc';
import { compose } from '../../utils';

import { deleteFavourite } from '../../actions';

import './fav-image-list-item.css';

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

const FavImageListItem = ({ props, deleteFavourite }) => {

    return(
        <div className = "fav-image-list-item">
            <div 
                style = {{ backgroundImage:`url(${ props.image.url })`}}
                className = "fav-image-list-item-image"
            />
            <div 
                className = "fav-image-list-item-overlay"
                onClick = { () => deleteFavourite(props.id, props.image_id) }>
                <div className = "fav-image-list-item-icon-container">
                    <div className = "fav-color-20" />
                </div>
            </div>
        </div>
    )
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