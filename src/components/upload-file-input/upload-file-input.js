import React, { Component } from 'react';

import { compose } from '../../utils';
import { withCatService } from '../hoc';
import { connect } from 'react-redux';

import { onFileChange, fetchFile } from '../../actions';

import './upload-file-input.css';

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

const UploadFileInput = ({ onFileSelected, fetchFile, file }) => {
    return(
        <div className = "upload-file-input">
            <input 
                className = "upload-file-input-hidden"
                type = "file" 
                id = "file" 
                onChange = { onFileSelected }/>
                
                <div className = "upload-file-input-lebel">
                    <span className = "upload-file-input-lebel-bold">Drag here </span> 
                    your file or 
                    <label 
                        className = "upload-file-input-lebel-bold-active" 
                        htmlFor = "file"> 
                        <> Click here </>
                    </label>
                    to upload
                </div>

                <div className = "upload-file-input-icon"/>
        </div>
    )
}

const UploadFileInputActive = () => {
    return(
        <div className = "upload-file-input-active">
            <div className = "upload-file-input-lebel">
                    
            </div> 
        </div>
    )
}

const UploadFileInputImage = ({ file, isActive }) => {
    const active = isActive ? 'upload-file-input-active' : 'upload-file-input'
    const url = URL.createObjectURL(file)
    console.log(url);
    return(
        <div className = { active }>
            <div className = "upload-file-image" style = {{ backgroundImage: `url(${ url })` }} /> 
        </div>
    )
}

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