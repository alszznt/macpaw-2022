import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withCatService } from '../hoc';
import { compose } from '../../utils';

import { fetchImage, voteUp, voteDown, getVotes, addFavourite, getFavourite, deleteFavourite } from '../../actions';

import './votes-buttons.css';

class VotesButtons extends Component {

    componentDidMount() {
        const { fetchImage, getVotes, getFavourite } = this.props;
        fetchImage();
        getVotes();
        getFavourite(25, 'DESC', 0);
    }

    render() {

        const { id, url, voteUp, voteDown, addFavourite, deleteFavourite, favouriteList } = this.props;

        let isFav = favouriteList.find(el => el.image_id === id);
        console.log(isFav);

        return(
            <div>
                <img src = { url } alt = { id } className = "image"/>
                <div onClick = { () => voteUp(id, 1) }> vote up </div>
                { !isFav ? 
                <div onClick = { () => addFavourite( id ) }> vote fav </div> :
                <div onClick = { () => deleteFavourite( isFav.id ) } style = {{color: 'red'}}> vote fav </div>
                }
                
                <div onClick = { () => voteDown(id, 0) }> vote down </div>
            </div>
        )
    }

}

const mapStateToProps = ({ imagesData: { id, url }, favouriteData: { favouriteList } }) => {
    return { id, url, favouriteList };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        fetchImage: () => fetchImage(catService, dispatch),
        voteUp: (id) => voteUp(catService, dispatch)(id),
        voteDown: (id) => voteDown(catService, dispatch)(id),
        getVotes: (limit, order, page) => getVotes(catService, dispatch)(limit, order, page),
        getFavourite: (limit, order, page) => getFavourite(catService, dispatch)(limit, order, page),
        addFavourite: (id) => addFavourite(catService, dispatch)(id),
        deleteFavourite: (id) => deleteFavourite(catService, dispatch)(id),
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(VotesButtons);