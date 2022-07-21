import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withCatService } from '../hoc';
import { compose } from '../../utils';

import { 
    selectBreed
} from '../../actions';

import './breeds-picker.css';

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

const BreedsPicker = ({ click, value }) => {
    return(
        <div className = "breeds-picker" onClick = { click }>
            <div className = "breeds-picker-label">{ value }</div>
            <div className = "breeds-picker-icon" />
        </div>
    )
}

const BreedsPickerOpen = ({ breeds, onSelect }) => {

    const breedsList = breeds.map((data) => {

        return (
            <div 
                className = "breeds-picker-open-list-item"
                key = { data.id }
                onClick = { () => onSelect(data.name) }>
                { data.name }
            </div>
        );
    });

    return(
        <div className = "breeds-picker-open">
            <div className = "breeds-picker-open-list">
                <div className = "breeds-picker-open-list-item">All breeds </div>
                { breedsList }
            </div>
        </div>
    )
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