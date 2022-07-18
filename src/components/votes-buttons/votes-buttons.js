import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withCatService } from '../hoc';
import { compose } from '../../utils';

import { fetchImage, fetchVote, getVotes } from '../../actions';

import './votes-buttons.css';

class VotesButtons extends Component {

    componentDidMount() {
        const { fetchImage, getVotes } = this.props;
        fetchImage();
        getVotes();
    }

    render() {

        const { id, url, votingList, fetchVote, getVotes } = this.props;

        console.log(votingList);

        return(
            <div>
                <img src = { url } alt = { id } className = "image"/>
                <div onClick = { () => fetchVote(id, 1) }> vote up </div>
                <div onClick = { () => getVotes() }> vote fav </div>
                <div onClick = { () => fetchVote(id, 0) }> vote down </div>
            </div>
        )
    }

}

const mapStateToProps = ({ votingData: { id, url, votingList } }) => {
    return { id, url, votingList };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        fetchImage: () => fetchImage(catService, dispatch),
        fetchVote: (id, val) => fetchVote(catService, dispatch)(id, val),
        getVotes: (limit, order, page) => getVotes(catService, dispatch)(limit, order, page)
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(VotesButtons);