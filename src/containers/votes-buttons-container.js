import React, { Component } from 'react';

import VotesButtons from '../components/votes-buttons';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import { 
    voteUp, 
    voteDown, 
    getVotes, 
    addFavourite, 
    getFavourite, 
    deleteFavourite 
} from '../actions';

import { VotesButtonsLoadingIndicator } from '../components/loading-indicators';

class VotesButtonsContainer extends Component {

    componentDidMount() {
        const { getVotes, getFavourite } = this.props;
        getVotes();
        getFavourite('', 'DESC', 0);
    }

    render() {

        const { id, voteUp, voteDown, addFavourite, deleteFavourite, favouriteData, votingData } = this.props;

        if ( votingData.loading ){
            return <VotesButtonsLoadingIndicator />
        }

        if ( favouriteData.loading ){
            return <VotesButtonsLoadingIndicator />
        }

        return (
            <VotesButtons 
                id = { id }
                favouriteList = { favouriteData.favouriteList }
                voteUp = { voteUp }
                voteDown = { voteDown }
                addFavourite = { addFavourite }
                deleteFavourite = { deleteFavourite }
            />
        )
    }

}

const mapStateToProps = ({ imagesData: { id }, favouriteData, votingData }) => {
    return { id, favouriteData, votingData };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        voteUp: (id) => voteUp(catService, dispatch)(id),
        voteDown: (id) => voteDown(catService, dispatch)(id),
        getVotes: (limit, order, page) => getVotes(catService, dispatch)(limit, order, page),
        getFavourite: (limit, order, page) => getFavourite(catService, dispatch)(limit, order, page),
        addFavourite: (id) => addFavourite(catService, dispatch)(id),
        deleteFavourite: (id, imgId) => deleteFavourite(catService, dispatch)(id, imgId),
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(VotesButtonsContainer);