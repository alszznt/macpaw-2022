const getDate = () => {
    let dt = new Date();
    if (dt.getMinutes() < 10) {
        return `${ dt.getHours() }:0${ dt.getMinutes() }`
    }
    return `${ dt.getHours() }:${ dt.getMinutes() }`
}

const addLikeLog = (id) => {
    const data = { id: id, time: getDate() }
    return {
        type: 'ADD_LIKE_LOG',
        payload: data
    };
};

const addDislikeLog = (id) => {
    const data = { id: id, time: getDate() }
    return {
        type: 'ADD_DISLIKE_LOG',
        payload: data
    };
};

const addFavouriteLog = (id) => {
    const data = { id: id, time: getDate() }
    return {
        type: 'ADD_FAVOURITE_LOG',
        payload: data
    };
};

const deleteFavouriteLog = (id) => {
    const data = { id: id, time: getDate() }
    return {
        type: 'DELETE_FAVOURITE_LOG',
        payload: data
    };
};

const imageRequested = () => {
    return {
      type: 'FETCH_IMAGE_REQUEST'
    }
};

const imageLoaded = (data) => {
    return {
        type: 'FETCH_IMAGE_SUCCESS',
        payload: data
    };
};

const imageError = (error) => {
    return {
        type: 'FETCH_IMAGE_FAILURE',
        payload: error
    };
};

export const fetchImage = (service, dispatch) => {
    dispatch(imageRequested());
    service.getImage()
      .then((data) => dispatch(imageLoaded(data)))
      .catch((err) => dispatch(imageError(err)));
};

const votingRequested = () => {
    return {
      type: 'VOTING_REQUEST'
    }
};

const votingError = (error) => {
    return {
        type: 'VOTING_FAILURE',
        payload: error
    };
};

const voteUpLoaded = (data) => {
    return {
        type: 'VOTE_UP_SUCCESS',
        payload: data
    };
};

const voteDownLoaded = (data) => {
    return {
        type: 'VOTE_DOWN_SUCCESS',
        payload: data
    };
};

const getVotesLoaded = (data) => {
    return {
        type: 'GET_VOTES_SUCCESS',
        payload: data
    };
};

export const voteUp = (service, dispatch) => (id) => {
    dispatch(votingRequested());
    dispatch(addLikeLog(id));
    service.fetchVoting(id, 1)
      .then((data) => dispatch(voteUpLoaded(id)) )
      .then(() => fetchImage(service, dispatch))
      .catch((err) => dispatch(votingError(err)));
}

export const voteDown = (service, dispatch) => (id) => {
    dispatch(votingRequested());
    dispatch(addDislikeLog(id));
    service.fetchVoting(id, 0)
      .then(() => dispatch(voteDownLoaded(id)))
      .then(() => fetchImage(service, dispatch))
      .catch((err) => dispatch(votingError(err)));
}

export const getVotes = (service, dispatch) => (limit, order, page) => {
    dispatch(votingRequested());
    service.getVotes(limit, order, page)
      .then((data) => dispatch(getVotesLoaded(data)))
      .catch((err) => dispatch(votingError(err)));
}

const favouriteRequested = () => {
    return {
      type: 'FAVOURITE_REQUEST'
    }
};

const favouriteError = (error) => {
    return {
        type: 'FAVOURITE_FAILURE',
        payload: error
    };
};

const addFavouriteLoaded = (data) => {
    return {
        type: 'ADD_FAVOURITE_SUCCESS',
        payload: data
    };
};

const deleteFavouriteLoaded = (data) => {
    return {
        type: 'DELETE_FAVOURITE_SUCCESS',
        payload: data
    };
};

const getFavouriteLoaded = (data) => {
    return {
        type: 'GET_FAVOURITE_SUCCESS',
        payload: data
    };
};

export const addFavourite = (service, dispatch) => (id) => {
    dispatch(addFavouriteLog(id));
    dispatch(favouriteRequested());
    service.addFavourite(id)
      .then(() => dispatch(addFavouriteLoaded(id)))
      .then(() => getFavourite(service, dispatch)())
      .catch((err) => dispatch(favouriteError(err)));
}

export const deleteFavourite = (service, dispatch) => (id, imgId) => {
    dispatch(deleteFavouriteLog(imgId));
    dispatch(favouriteRequested());
    service.deleteFavourite(id)
      .then(() => dispatch(deleteFavouriteLoaded(imgId)))
      .then(() => getFavourite(service, dispatch)())
      .catch((err) => dispatch(favouriteError(err)));
}

export const getFavourite = (service, dispatch) => (limit, order, page) => {
    dispatch(favouriteRequested());
    service.getFavourite(limit, order, page)
      .then((data) => dispatch(getFavouriteLoaded(data)))
      .catch((err) => dispatch(favouriteError(err)));
}

const breedsRequested = () => {
    return {
      type: 'FETCH_BREEDS_DATA_REQUEST'
    }
};

const getBreedsLoaded = (data) => {
    return {
        type: 'FETCH_BREEDS_DATA_SUCCESS',
        payload: data
    };
};

const breedsError = (error) => {
    return {
        type: 'FETCH_BREEDS_DATA_FAILURE',
        payload: error
    };
};

export const getBreeds = (service, dispatch) => {
    console.log(service);
    dispatch(breedsRequested());
    service.getBreeds()
      .then((data) => dispatch(getBreedsLoaded(data)))
      .catch((err) => dispatch(breedsError(err)));
};

export const selectBreed = (data) => {
    return {
        type: 'SELECT_BREED',
        payload: data
    };
};
