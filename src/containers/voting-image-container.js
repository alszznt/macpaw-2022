import React, { Component } from 'react';

import CatImage from '../components/cat-image';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import { ImageLoadingIndicator } from '../components/loading-indicators';
import { ImageErrorIndicator } from '../components/error-indicators';

import { fetchImage } from '../actions';

class VotingImageContainer extends Component {

    componentDidMount() {
        const { fetchImage } = this.props;
        fetchImage();
    }

    render() {

        const { id, url, loading, error } = this.props;

        if (loading) {
            return (
                <div className = "voting-image">
                    <ImageLoadingIndicator />
                </div>
            )
        }

        if (error) return <ImageErrorIndicator />

        return(
            <CatImage id = { id } url = { url } />
        );
    }

}

const mapStateToProps = ({ imagesData: { id, url, loading, error } }) => {
    return { id, url, loading, error };
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