import React, { Component } from 'react';

import CatImage from '../components/cat-image';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import { ImageLoadingIndicator } from '../components/loading-indicators';
import { ImageErrorIndicator } from '../components/error-indicators';

class CatImageContainer extends Component {

    render() {

        const { loading, error, selectedImage } = this.props;

        if (loading) {
            return (
                <div className = "voting-image">
                    <ImageLoadingIndicator />
                </div>
            )
        }

        if (error) {
            return (
                <div className = "voting-image">
                    <ImageErrorIndicator />
                </div>
            )
        }
        

        if (error) return null

        return(
            <CatImage url = { selectedImage.url } />
        );
    }

}

const mapStateToProps = ({ catsData: { selectedImage, error, loading } }) => {
    return { error, selectedImage, loading };
};

export default compose(
    withCatService(),
    connect(mapStateToProps)
)(CatImageContainer);