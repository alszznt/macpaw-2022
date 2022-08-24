import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import App from '../components/app';

class AppContainer extends Component {

    render() {

        const { isTheme } = this.props;

        return(
            <App theme = { isTheme } />
        );
    }

}

const mapStateToProps = ({ generalData: {isTheme} }) => {
    return { isTheme };
};

export default compose(
    withCatService(),
    connect(mapStateToProps)
)(AppContainer);