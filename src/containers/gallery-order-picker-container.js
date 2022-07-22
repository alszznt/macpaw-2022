import React, { Component } from 'react'

import { connect } from 'react-redux';
import { compose } from '../utils';

import BreedsPickerOpen from '../components/breeds-picker-open';
import BreedsPicker from '../components/breeds-picker';

import { 
    onGalleryOrderSelected
} from '../actions';

class GalleryBreedPickerContainer extends Component {

    state = {
        isOpen: false,
        orders:[
            {id: 1, name: 'Random'},
            {id: 2, name: 'Desc'},
            {id: 3, name: 'Asc'},
        ]
    }

    onOpen = () => {
        this.setState({
            isOpen: true
        })
    }

    onClose = (id) => {
        this.props.onGalleryOrderSelected(id)
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
                    breeds = { this.state.orders }
                    color = '#FFFFFF'
                />
            )
        }

        return (
            <>
                {list}
                <BreedsPicker 
                    click = { () => this.onOpen() } 
                    value = { this.props.order }
                    color = '#FFFFFF' 
                />
            </>
            
        )
    }

}

const mapStateToProps = ({ galleryData: { order } }) => {
    return { order };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGalleryOrderSelected: (order) => dispatch(onGalleryOrderSelected(order))
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(GalleryBreedPickerContainer);