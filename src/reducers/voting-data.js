const updateVotingFavData = (state, action) => {

  if (state === undefined) {
    return {
      votingList: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {

    case 'VOTING_REQUEST':
      return {
        ...state.votingData,
        votingList: [],
        loading: true,
        error: null
      };

    case 'VOTING_FAILURE':
      return {
        ...state.votingData,
        votingList: [],
        loading: false,
        error: action.payload
      };

    case 'VOTE_DOWN_SUCCESS':
    return {
      ...state.votingData,
      loading: false,
      error: null
    };

    case 'VOTE_UP_SUCCESS':
    return {
      ...state.votingData,
      loading: false,
      error: null
    };

    case 'GET_VOTES_SUCCESS':
      return {
        ...state.votingData,
        votingList: action.payload,
        loading: false,
        error: null
      };
      
    default:
      return state.votingData;
  }
};

export default updateVotingFavData;
