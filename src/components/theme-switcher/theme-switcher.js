import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from '../../utils';

import { toggleTheme } from '../../actions';

import './theme-switcher.scss';

class ThemeSwitcherContainer extends Component {

    render() {

        const { toggleTheme, isTheme } = this.props;

        return (
            <ThemeSwitcher toggleTheme = { toggleTheme } isTheme = { isTheme } />
        )
    }

}

const ThemeSwitcher = ({ toggleTheme, isTheme }) => {
    const isDark = isTheme ? 'dark' : '';
    return(
        <label className = {`${ isDark } theme-switcher`} >
            <div className = "theme-switcher-icon-container">
                <div className = "theme-switcher-icon" />
            </div>
            <div className = "theme-switcher-toggler">
            <input 
                className = "theme-switcher-input" 
                type = "checkbox" 
                onChange = { () => toggleTheme() }
                checked = { isTheme } 
            />
            <span className = "theme-switcher-slider" />
            </div>
        </label>
    )
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