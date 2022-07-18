import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withCatService } from '../hoc';
import { compose } from '../../utils';

import { fetchImage, fetchVote } from '../../actions';

import './votes-buttons.css';

class VotesButtons extends Component {

    componentDidMount() {
        const { fetchImage } = this.props;
        fetchImage();
    }

    render() {

        const { id, url, fetchVote } = this.props;

        return(
            <div>
                <img src = { url } alt = { id } className = "image"/>
                <div onClick = { () => fetchVote(id, 1) }> vote up </div>
                <div onClick = { () => console.log('fav') }> vote fav </div>
                <div onClick = { () => console.log('down') }> vote down </div>
            </div>
        )
    }

}

const mapStateToProps = ({ votingData: { id, url } }) => {
    return { id, url };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        fetchImage: () => fetchImage(catService, dispatch),
        fetchVote: (id, val) => fetchVote(catService, dispatch)(id, val)
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(VotesButtons);