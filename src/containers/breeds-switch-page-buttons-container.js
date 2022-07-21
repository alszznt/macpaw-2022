import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import BreedsSwitchPageButtons from '../components/breeds-switch-page-buttons';

import { 
    incBreedsPage,
    decBreedsPage,
    sortArr
} from '../actions';

class BreedsSwitchPageButtonsContainer extends Component {

    render() {

        const { page, limit, breeds, incBreedsPage, decBreedsPage, selectedBreed, sort, sortArr } = this.props;

        return (
            <BreedsSwitchPageButtons 
                page = { page } 
                limit = { limit } 
                arr = { breeds } 
                sortArr = { sortArr(breeds)(selectedBreed, limit, page, sort) }
                incBreedsPage = { () => incBreedsPage() } 
                decBreedsPage = { () => decBreedsPage() } 
            />
        )
    }

}

const mapStateToProps = ({ breedsData: { limit, page, breeds, selectedBreed, sort } }) => {
    return { limit, page, breeds, selectedBreed, sort };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incBreedsPage: () => dispatch(incBreedsPage()),
        decBreedsPage: () => dispatch(decBreedsPage()),
        sortArr
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BreedsSwitchPageButtonsContainer);