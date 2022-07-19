import React from 'react';

import ActionsLogListItem from '../actions-log-list-item';

import './actions-log-list.css';

const ActionsLogList = ({ logs }) => {

    console.log(logs);

    const list = logs.map((data) => {

        return (
            <ActionsLogListItem 
                data = { data }
                key = { Math.floor(Math.random() * 1000) }
            />
        );
    });

    return(
        <div className = "actions-log-list">
            { list }
        </div>
    )
};

export default ActionsLogList;