import React, { Component } from 'react';

import VotingImage from '../components/voting-image';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import { fetchImage } from '../actions';

class VotingImageContainer extends Component {

    componentDidMount() {
        const { fetchImage } = this.props;
        fetchImage();
    }

    render() {

        const { id, url } = this.props;

        return(
            <VotingImage id = { id } url = { url } />
        );
    }

}

const mapStateToProps = ({ imagesData: { id, url } }) => {
    return { id, url };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        fetchImage: () => fetchImage(catService, dispatch)
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(VotingImageContainer);