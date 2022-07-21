import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from '../utils';
import { switchSortToAZ } from '../actions';

import BreedsSortingButton from '../components/breeds-sorting-button';

class BreedsSortingAZButtonContainer extends Component {

    render() {

        return (
            <BreedsSortingButton switchSort = { this.props.switchSortToAZ } name = 'az' />
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        switchSortToAZ: () => dispatch(switchSortToAZ()),
    };
};

export default compose(
    connect( mapDispatchToProps )
)(BreedsSortingAZButtonContainer);