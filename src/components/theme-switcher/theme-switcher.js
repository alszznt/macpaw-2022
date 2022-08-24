import React from 'react'

import './theme-switcher.scss';

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

export default ThemeSwitcher;