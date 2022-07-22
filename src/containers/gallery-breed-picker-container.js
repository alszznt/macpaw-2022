import React, { Component } from 'react'

import { connect } from 'react-redux';
import { compose } from '../utils';

import {ImageLoadingIndicator} from '../components/loading-indicators';

import GalleryBreedsPickerOpen from '../components/gallery-breeds-picker-open';
import BreedsPicker from '../components/breeds-picker';

import { 
    onGalleryBreedSelected
} from '../actions';

class GalleryBreedPickerContainer extends Component {

    state = {
        isOpen: false
    }

    onOpen = () => {
        this.setState({
            isOpen: true
        })
    }

    onClose = (name, id) => {
        this.props.onGalleryBreedSelected(name, id)
        this.setState({
            isOpen: false
        })
    }

    render() {

        if (this.props.loading) return <ImageLoadingIndicator/>
        if (this.props.error) return null;

        let list = null;

        if (this.state.isOpen){
            list = (
                <GalleryBreedsPickerOpen 
                    onSelect = { this.onClose } 
                    breeds = { this.props.breeds }
                    firstVal = 'None'
                    color = '#FFFFFF'
                />
            )
        }

        return (
            <>
                { list }
                <BreedsPicker 
                    click = { () => this.onOpen() } 
                    value = { this.props.breed.name }
                    color = '#FFFFFF'
                />
            </>
        )
    }

}

const mapStateToProps = ({ breedsData: { breeds, loading, error }, galleryData: { breed } }) => {
    return { breeds, breed, loading, error };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGalleryBreedSelected: (name, id) => dispatch(onGalleryBreedSelected(name, id))
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(GalleryBreedPickerContainer);