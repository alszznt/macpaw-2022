import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import BreedsSwitchPageButtons from '../components/breeds-switch-page-buttons';

import { 
    incBreedsPage,
    decBreedsPage
} from '../actions';

class BreedsSwitchPageButtonsContainer extends Component {

    render() {

        const { page, limit, breeds, incBreedsPage, decBreedsPage } = this.props;

        return (
            <BreedsSwitchPageButtons 
                page = { page } 
                limit = { limit } 
                arr = { breeds } 
                incBreedsPage = { () => incBreedsPage() } 
                decBreedsPage = { () => decBreedsPage() } 
            />
        )
    }

}

const mapStateToProps = ({ breedsData: { limit, page, breeds } }) => {
    return { limit, page, breeds };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incBreedsPage: () => dispatch(incBreedsPage()),
        decBreedsPage: () => dispatch(decBreedsPage())
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BreedsSwitchPageButtonsContainer);