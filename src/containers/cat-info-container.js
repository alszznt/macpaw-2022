import React, { Component } from 'react';

import CatInfo from '../components/cat-info';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import { ImageErrorIndicator } from '../components/error-indicators';

class CatInfoContainer extends Component {

    render() {

        const { loading, error, info } = this.props;

        if (loading) {
            return null
        }

        if (error) return <ImageErrorIndicator />

        return(
            <CatInfo data = { info } />
        );
    }

}

const mapStateToProps = ({ catsData: { info, error, loading } }) => {
    return { error, info, loading };
};

export default compose(
    withCatService(),
    connect(mapStateToProps)
)(CatInfoContainer);