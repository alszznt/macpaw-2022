const updateVotingData = (state, action) => {

  if (state === undefined) {
    return {
      id: {},
      url: {},
      votingList: {},
      loading: true,
      error: null,
    };
  }

  switch (action.type) {

    case 'VOTING_REQUEST':
      return {
        ...state.votingData,
        id: {},
        url: {},
        votingList: {},
        loading: true,
        error: null
      };

    case 'VOTING_FAILURE':
      return {
        ...state.votingData,
        data: {},
        url: {},
        votingList: {},
        loading: false,
        error: action.payload
      };

    case 'FETCH_IMAGE_SUCCESS':
      return {
        ...state.votingData,
        id: action.payload[0].id,
        url: action.payload[0].url,
        loading: false,
        error: null
      };

    case 'FETCH_VOTE_SUCCESS':
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

export default updateVotingData;
