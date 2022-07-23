import React, { Component } from 'react';

import UploadIndicator from '../components/upload-indicator';

import { compose } from '../utils';
import { withCatService } from '../components/hoc';
import { connect } from 'react-redux';

class SucUploadIndicatorContainer extends Component {

    render() {
        const { error, loading } = this.props;

        if(loading) return null

        if (error) return <UploadIndicator value = 'No Cat found - try a different one' icon = { false } />

        return null
    }
};

const mapStateToProps = ({ uploadData: { file, loading, error }}) => {
    return { file, loading, error };
};

export default compose(
    withCatService(),
    connect(mapStateToProps)
)(SucUploadIndicatorContainer);