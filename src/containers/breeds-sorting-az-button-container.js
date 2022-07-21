import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from '../utils';
import { switchSortToAZ } from '../actions';

import BreedsSortingButton from '../components/breeds-sorting-button';

class BreedsSortingAZButtonContainer extends Component {

    render() {

        console.log(this.props.sort);

        return (
            <BreedsSortingButton switchSort = { this.props.switchSortToAZ } name = 'az' />
        )
    }

}

const mapStateToProps = ({ breedsData: { sort } }) => {
    return { sort };
};

const mapDispatchToProps = (dispatch) => {
    return {
        switchSortToAZ: () => dispatch(switchSortToAZ()),
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(BreedsSortingAZButtonContainer);