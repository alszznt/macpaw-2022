import React from 'react';

import './actions-log-list-item.scss';

const ActionsLogListItem = ({ data }) => {

    let icon;

    if (data.category === 'Likes' ) icon = 'like-icon-color-20';
    if (data.category === 'Dislikes' ) icon = 'dislike-icon-color-20'; 
    if (data.category === 'Favourites' ) icon = 'fav-icon-20'; 

    return(
        <div className = "actions-log-list-item">
            <div className = "actions-log-list-item-date">{ data.data.time }</div>
            <div className = "actions-log-list-item-label">
                Image ID: <span className = "actions-log-list-item-label-bolt">{ data.data.id }</span> was { data.action } { data.category }
            </div>
            { data.action === 'added to' ? <div className = { icon } /> : null }
        </div>
    )
}

export default ActionsLogListItem;