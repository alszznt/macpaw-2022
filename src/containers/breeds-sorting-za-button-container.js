import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from '../utils';
import { switchSortToZA } from '../actions';

import BreedsSortingButton from '../components/breeds-sorting-button';

class BreedsSortingZAButtonContainer extends Component {

    render() {

        return (
            <BreedsSortingButton switchSort = { this.props.switchSortToZA } name = 'za' />
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        switchSortToZA: () => dispatch(switchSortToZA()),
    };
};

export default compose(
    connect( mapDispatchToProps )
)(BreedsSortingZAButtonContainer);