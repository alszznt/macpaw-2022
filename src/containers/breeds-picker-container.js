import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import BreedsPickerOpen from '../components/breeds-picker-open';
import BreedsPicker from '../components/breeds-picker';

import { 
    selectBreed
} from '../actions';

class BreedsPickerContainer extends Component {

    state = {
        isOpen: false
    }

    onOpen = () => {
        this.setState({
            isOpen: true
        })
    }

    onClose = (id) => {
        this.props.selectBreed(id)
        this.setState({
            isOpen: false
        })
    }

    render() {

        if (this.state.isOpen){
            return <BreedsPickerOpen onSelect = { (id) => this.onClose(id) } breeds = { this.props.breeds }/>
        } 

        return (
            <BreedsPicker click = { () => this.onOpen() } value = { this.props.selectedBreed } />
        )
    }

}

const mapStateToProps = ({ breedsData: { selectedBreed, breeds, loading, error } }) => {
    return { selectedBreed, breeds, loading, error };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        selectBreed: (name) => dispatch(selectBreed(name))
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BreedsPickerContainer);