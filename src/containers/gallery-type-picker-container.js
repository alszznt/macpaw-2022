import React, { Component } from 'react'

import { connect } from 'react-redux';
import { compose } from '../utils';

import BreedsPickerOpen from '../components/breeds-picker-open';
import BreedsPicker from '../components/breeds-picker';

import { 
    onGalleryTypeSelected
} from '../actions';

class GalleryTypePickerContainer extends Component {

    state = {
        isOpen: false,
        types:[
            {id: 1, name: 'All'},
            {id: 2, name: 'Static'},
            {id: 3, name: 'Animated'},
        ]
    }

    onOpen = () => {
        this.setState({
            isOpen: true
        })
    }

    onClose = (id) => {
        this.props.onGalleryTypeSelected(id)
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
                    breeds = { this.state.types }
                    color = '#FFFFFF'
                />
            )
        }

        return (
            <>
                { list }
                <BreedsPicker 
                    click = { () => this.onOpen() } 
                    value = { this.props.type }
                    color = '#FFFFFF' 
                />
            </>
        )
    }

}

const mapStateToProps = ({ galleryData: { type } }) => {
    return { type };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGalleryTypeSelected: (order) => dispatch(onGalleryTypeSelected(order))
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(GalleryTypePickerContainer);