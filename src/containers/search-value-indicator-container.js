import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from '../utils';

import SearchValueIndicator from '../components/search-value-indicator';

class SearchValueIndicatorContainer extends Component {

    render() {

        const { searchVal, loading } = this.props;

        if ( loading ){
            return null
        }

        return (
            <SearchValueIndicator label = { searchVal } />
        )
    }

}

const mapStateToProps = ({ searchData: { searchVal, loading } }) => {
    return { searchVal, loading };
};

export default compose(
    connect(mapStateToProps)
)(SearchValueIndicatorContainer);