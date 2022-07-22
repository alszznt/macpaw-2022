import React, { Component } from 'react';

import SearchBreedsInput from '../components/search-breeds-input';

import { compose } from '../utils';
import { withCatService } from '../components/hoc';
import { connect } from 'react-redux';

import { onSearchChange, getSearch } from '../actions';

class SearchBreedsInputContainer extends Component {

    render() {
        const { onSearchChange, value, getSearch } = this.props;

        return (
                <SearchBreedsInput 
                    value = { value } 
                    onSearchChange = { onSearchChange } 
                    onSearch = { () => getSearch(value) } 
                />
            )
    }
};

const mapStateToProps = ({ searchData: { value }}) => {
    return { value };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        onSearchChange: (val) => dispatch(onSearchChange( val )),
        getSearch: (val) => getSearch(catService, dispatch)(val)
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(SearchBreedsInputContainer);