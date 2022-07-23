import React, { Component } from 'react';

import { compose } from '../utils';
import { withCatService } from '../components/hoc';
import { connect } from 'react-redux';

import {
    UploadFileInput,
    UploadFileInputActive,
    UploadFileInputImage
} from '../components/upload-file-input';

import { onFileChange, fetchFile } from '../actions';

class UploadFileInputContainer extends Component {

    state = {
        IsDrag: false
    }

    drugIn = (e) => {
        e.preventDefault()
        this.setState({
            IsDrag: true
        })
    }

    drugOut = (e) => {
        e.preventDefault()
        this.setState({
            IsDrag: false
        })
    }

    onDrop = (e) => {
        const { onFileChange } = this.props;

        e.preventDefault()
        this.setState({
            IsDrag: false
        })
        let files = e.dataTransfer.files[0]
        onFileChange(files)
    }

    onFileSelected = (event) => {
        const { onFileChange } = this.props;
        onFileChange(event.target.files[0])
    }

    render() {
        const { file, fetchFile, error } = this.props;

        if(file && error) return <UploadFileInputImage file = { file } isActive = { true } />

        if(file) return <UploadFileInputImage file = { file } isActive = { false } />

        return (
                <div 
                    onDragStart = { (e) => this.drugIn(e) }
                    onDragLeave = { (e) => this.drugOut(e) }
                    onDragOver = { (e) => this.drugIn(e) }
                    onDrop = { (e) => this.onDrop(e) } >

                    { !this.state.IsDrag ? 
                        <UploadFileInput onFileSelected = { this.onFileSelected } 
                        fetchFile = { fetchFile } 
                        file = { file }/> :
                        <UploadFileInputActive/>
                    }

                    
                </div>
            )
    }
};

const mapStateToProps = ({ uploadData: { file, loading, error }}) => {
    return { file, loading, error };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        onFileChange: (val) => dispatch(onFileChange( val )),
        fetchFile: (file) => fetchFile(catService, dispatch)(file),
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(UploadFileInputContainer);