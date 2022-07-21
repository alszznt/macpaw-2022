import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import BreedsPickerOpen from '../components/breeds-picker-open';
import BreedsPicker from '../components/breeds-picker';

import { 
    selectBreedsLimit
} from '../actions';

class BreedsLimitPickerContainer extends Component {

    state = {
        isOpen: false,
        values: [{ id: 5, name: 5 }, { id: 10, name: 10 }, { id: 15, name: 15 }, { id: 20, name: 20 }]
    }

    onOpen = () => {
        this.setState({
            isOpen: true
        })
    }

    onClose = (val) => {
        this.props.selectBreedsLimit(val)
        this.setState({
            isOpen: false
        })
    }

    render() {

        if (this.state.isOpen){
            return (
                <BreedsPickerOpen 
                    onSelect = { (id) => this.onClose(id) } 
                    breeds = { this.state.values}
                    text = 'Limit: '
                />
            )
        } 

        return (
            <BreedsPicker click = { () => this.onOpen() } value = { this.props.limit } text = 'Limit: ' />
        )
    }

}

const mapStateToProps = ({ breedsData: { limit } }) => {
    return { limit };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        selectBreedsLimit: (val) => dispatch(selectBreedsLimit(val))
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BreedsLimitPickerContainer);