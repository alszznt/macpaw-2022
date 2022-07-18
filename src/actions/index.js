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

const imageLoaded = (data) => {
    return {
        type: 'FETCH_IMAGE_SUCCESS',
        payload: data
    };
};

const votingLoaded = (data) => {
    return {
        type: 'FETCH_VOTE_SUCCESS',
        payload: data
    };
};

const getVotesLoaded = (data) => {
    return {
        type: 'GET_VOTES_SUCCESS',
        payload: data
    };
};

export const fetchImage = (service, dispatch) => {
    dispatch(votingRequested());
    service.getImage()
      .then((data) => dispatch(imageLoaded(data)))
      .catch((err) => dispatch(votingError(err)));
};

export const fetchVote = (service, dispatch) => (id, val) => {
    dispatch(votingRequested());
    service.fetchVoting(id, val)
      .then((data) => dispatch(votingLoaded(data)))
      .then(() => fetchImage(service, dispatch))
      .catch((err) => dispatch(votingError(err)));
}

export const getVotes = (service, dispatch) => () => {
    console.log('get')
    service.getVotes()
      .then((data) => dispatch(getVotesLoaded(data)))
}