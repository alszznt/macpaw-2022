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
    console.log(data)
    return {
        type: 'VOTE_UP_SUCCESS',
        payload: data
    };
};

const voteDownLoaded = (data) => {
    console.log(data)
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
    service.fetchVoting(id, 1)
      .then(() => dispatch(voteUpLoaded(id)))
      .then(() => fetchImage(service, dispatch))
      .catch((err) => dispatch(votingError(err)));
}

export const voteDown = (service, dispatch) => (id) => {
    dispatch(votingRequested());
    service.fetchVoting(id, 0)
      .then(() => dispatch(voteDownLoaded(id)))
      .then(() => fetchImage(service, dispatch))
      .catch((err) => dispatch(votingError(err)));
}

export const getVotes = (service, dispatch) => () => {
    dispatch(votingRequested());
    service.getVotes()
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
    dispatch(favouriteRequested());
    service.addFavourite(id)
      .then(() => dispatch(addFavouriteLoaded(id)))
      .then(() => getFavourite(service, dispatch)())
      .catch((err) => dispatch(favouriteError(err)));
}

export const deleteFavourite = (service, dispatch) => (id, imgId) => {
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