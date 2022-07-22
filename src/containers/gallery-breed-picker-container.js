import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import BreedsPickerOpen from '../components/breeds-picker-open';
import BreedsPicker from '../components/breeds-picker';

import { 
    onGalleryBreedSelected,
    getBreeds
} from '../actions';

class GalleryBreedPickerContainer extends Component {

    state = {
        isOpen: false
    }

    componentDidMount() {
        const { getBreeds } = this.props;
        getBreeds()
    }

    onOpen = () => {
        this.setState({
            isOpen: true
        })
    }

    onClose = (id) => {
        this.props.onGalleryBreedSelected(id)
        this.setState({
            isOpen: false
        })
    }

    render() {

        let list = null;

        if (this.state.isOpen){
            list = (
                <BreedsPickerOpen 
                    onSelect = { (id) => this.onClose(id) } 
                    breeds = { this.props.breeds }
                    firstVal = 'All breeds'
                    color = '#FFFFFF'
                />
            )
        }

        return (
            <>
                { list }
                <BreedsPicker 
                    click = { () => this.onOpen() } 
                    value = { this.props.breed }
                    color = '#FFFFFF'
                />
            </>
        )
    }

}

const mapStateToProps = ({ breedsData: { breeds, loading, error }, galleryData: { breed } }) => {
    return { breeds, breed, loading, error };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        onGalleryBreedSelected: (breed) => dispatch(onGalleryBreedSelected(breed)),
        getBreeds: () => getBreeds(catService, dispatch)
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(GalleryBreedPickerContainer);