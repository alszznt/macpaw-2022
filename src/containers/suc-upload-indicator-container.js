import React, { Component } from 'react';

import UploadIndicator from '../components/upload-indicator';

import { compose } from '../utils';
import { withCatService } from '../components/hoc';
import { connect } from 'react-redux';

class SucUploadIndicatorContainer extends Component {

    render() {
        const { success, loading } = this.props;

        if(loading) return null

        if (success) return <UploadIndicator value = 'Thanks for the Upload - Cat found!' icon = { true } />

        return null
    }
};

const mapStateToProps = ({ uploadData: { loading, success }}) => {
    return { loading, success };
};

export default compose(
    withCatService(),
    connect(mapStateToProps)
)(SucUploadIndicatorContainer);