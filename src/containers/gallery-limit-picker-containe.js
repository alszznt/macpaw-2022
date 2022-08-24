import React, { Component } from 'react'

import { connect } from 'react-redux';
import { compose } from '../utils';

import BreedsPickerOpen from '../components/breeds-picker-open';
import BreedsPicker from '../components/breeds-picker';

import { 
    onGalleryLimitSelected
} from '../actions';

class GalleryLimitPickerContainer extends Component {

    state = {
        isOpen: false,
        limits:[
            {id: 1, name: 3},
            {id: 2, name: 5},
            {id: 3, name: 7},
            {id: 4, name: 10},
        ]
    }

    onOpen = () => {
        this.setState({
            isOpen: true
        })
    }

    onClose = (id) => {
        this.props.onGalleryLimitSelected(id)
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
                    breeds = { this.state.limits }
                    color = 'darker'
                />
            )
        }

        return (
            <>
                { list }
                <BreedsPicker 
                    click = { () => this.onOpen() } 
                    value = { this.props.limit }
                    color = 'darker' 
                /> 
            </>
        )
    }

}

const mapStateToProps = ({ galleryData: { limit } }) => {
    return { limit };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGalleryLimitSelected: (order) => dispatch(onGalleryLimitSelected(order))
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(GalleryLimitPickerContainer);