const updateVotingData = (state, action) => {

  if (state === undefined) {
    return {
      id: {},
      url: {},
      loading: true,
      error: null
    };
  }

  switch (action.type) {

    case 'FETCH_IMAGE_REQUEST':
      return {
        ...state.businessesList,
        id: {},
        url: {},
        loading: true,
        error: null
      };

    case 'FETCH_IMAGE_SUCCESS':
      return {
        ...state.businessesList,
        id: action.payload[0].id,
        url: action.payload[0].url,
        loading: false,
        error: null
      };

    case 'FETCH_IMAGE_FAILURE':
      return {
        ...state.businessesList,
        data: {},
        url: {},
        loading: false,
        error: action.payload
      };

    case 'FETCH_VOTE_REQUEST':
    return {
      ...state.businessesList,
      loading: true,
      error: null
    };

    case 'FETCH_VOTE_SUCCESS':
    return {
      ...state.businessesList,
      loading: false,
      error: null
    };

    case 'FETCH_VOTE_FAILURE':
      return {
        ...state.businessesList,
        loading: false,
        error: action.payload
      };

    default:
      return state.votingData;
  }
};

export default updateVotingData;
