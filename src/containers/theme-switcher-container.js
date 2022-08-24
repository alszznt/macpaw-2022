import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from '../utils';

import ThemeSwitcher from '../components/theme-switcher';

import { toggleTheme } from '../actions';

class ThemeSwitcherContainer extends Component {

    render() {

        const { toggleTheme, isTheme } = this.props;

        return (
            <ThemeSwitcher toggleTheme = { toggleTheme } isTheme = { isTheme } />
        )
    }

}

const mapStateToProps = ({ generalData: {isTheme} }) => {
    return { isTheme };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTheme: () => dispatch(toggleTheme())
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ThemeSwitcherContainer);