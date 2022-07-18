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

const votingRequested = () => {
    return {
      type: 'FETCH_VOTE_REQUEST'
    }
  };

const votingLoaded = (data) => {
    return {
        type: 'FETCH_VOTE_SUCCESS',
        payload: data
    };
};

const votingError = (error) => {
    return {
      type: 'FETCH_VOTE_FAILURE',
      payload: error
    };
};

export const fetchImage = (service, dispatch) => {
    dispatch(imageRequested());
    service.getImage()
      .then((data) => dispatch(imageLoaded(data)))
      .catch((err) => dispatch(imageError(err)));
};

export const fetchVote = (service, dispatch) => (id, val) => {
    dispatch(votingRequested());
    service.fetchVoting(id, val)
      .then((data) => dispatch(votingLoaded(data)))
      .catch((err) => dispatch(votingError(err)));
}