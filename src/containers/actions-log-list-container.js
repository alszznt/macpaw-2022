import React, { Component } from 'react';

import ActionsLogList from '../components/actions-log-list';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

class ActionsLogListContainer extends Component {

    render() {

        const { logs } = this.props;

        if (logs.length === 0){
            return null;
        }

        return(
            <ActionsLogList logs = { logs } />
        );
    }

}

const mapStateToProps = ({ actionsLog: { logs } }) => {
    return { logs };
};

export default compose(
    withCatService(),
    connect(mapStateToProps)
)(ActionsLogListContainer);