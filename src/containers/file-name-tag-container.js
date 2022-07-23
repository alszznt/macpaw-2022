import React, { Component } from 'react';

import FileNameTag from '../components/file-name-tag';

import { compose } from '../utils';
import { withCatService } from '../components/hoc';
import { connect } from 'react-redux';

class FileNameTagContainer extends Component {

    render() {
        const { file, loading } = this.props;

        if(loading) return null

        return <FileNameTag file = { file }/>
    }
};

const mapStateToProps = ({ uploadData: { file, loading }}) => {
    return { file, loading };
};

export default compose(
    withCatService(),
    connect(mapStateToProps)
)(FileNameTagContainer);