import React, { Component } from 'react'

import { connect } from 'react-redux';
import { compose } from '../../utils';

import './search-value-indicator.css';

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

const SearchValueIndicator = ({ label }) => {
    return(
        <div className = "search-value-indicator">
            Search results for: <span className = "search-value-indicator-bolt">{ label }</span>
        </div>
    )
}

const mapStateToProps = ({ searchData: { searchVal, loading } }) => {
    return { searchVal, loading };
};

export default compose(
    connect(mapStateToProps)
)(SearchValueIndicatorContainer);