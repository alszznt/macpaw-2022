import React, { Component } from 'react';

import UploadPhotoButton from '../components/upload-photo-button';

import { compose } from '../utils';
import { withCatService } from '../components/hoc';
import { connect } from 'react-redux';

import { fetchFile } from '../actions';

class UploadPhotoButtonContainer extends Component {

    render() {
        const { file, fetchFile, error, loading } = this.props;

        if(loading) return null

        if ( file && !error ) return <UploadPhotoButton fetchFile = { fetchFile } file = { file } />

        return null
    }
};

const mapStateToProps = ({ uploadData: { file, loading, error }}) => {
    return { file, loading, error };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        fetchFile: (file) => fetchFile(catService, dispatch)(file)
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(UploadPhotoButtonContainer);