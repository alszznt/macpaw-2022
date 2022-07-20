import React from 'react';

import './votes-buttons.css';

const VotesButtons = ({ id, favouriteList, voteUp, voteDown, addFavourite, deleteFavourite }) => {

    let isFav = favouriteList.find(el => el.image_id === id);

    return(
        <div className = "votes-buttons">

                <div 
                    onClick = { () => voteUp(id) }
                    className = "votes-buttons-80 votes-buttons-like"> 
                    <div className = "icon-30 like-icon-30-white" />
                </div>

                { !isFav ? 
                    <div 
                        onClick = { () => addFavourite( id ) }
                        className = "votes-buttons-80 votes-buttons-fav"> 
                        <div className = "icon-30 fav-icon-30-white" />
                    </div> :
                    <div 
                        onClick = { () => deleteFavourite( isFav.id, id ) } 
                        className = "votes-buttons-80 votes-buttons-fav"
                        style = {{color: 'red'}}> 
                        <div className = "icon-30 fav-icon-30-full-white" />
                    </div>
                }

                <div 
                    onClick = { () => voteDown(id) }
                    className = "votes-buttons-80 votes-buttons-dislike"> 
                    <div className = "icon-30 dislike-icon-30-white" />
                </div>
        </div>
    )
}

export default VotesButtons;