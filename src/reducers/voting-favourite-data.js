const updateVotingFavData = (state, action) => {

  if (state === undefined) {
    return {
      actionsLog: [],
      votingData:{
        votingList: {},
        votingLoading: true,
        votingError: null
      },
      favouriteData:{
        favouriteList: [],
        favouriteLoading: true,
        favouriteError: null
      }
    };
  }

  switch (action.type) {

    // voting

    case 'VOTING_REQUEST':
      return {
        ...state.votingFavData,
        votingData: {
          votingList: {},
          votingLoading: true,
          votingError: null
        }
      };

    case 'VOTING_FAILURE':
      return {
        ...state.votingFavData,
        votingData: {
          votingList: {},
          votingLoading: false,
          votingError: action.payload
        }
      };

    case 'VOTE_DOWN_SUCCESS':
    return {
      ...state.votingFavData,
      actionsLog: [ { id: action.payload, category: 'Dislikes', action: 'add' }, ...state.votingFavData.actionsLog ],
      votingData: {
        ...state.votingFavData.votingData,
        votingLoading: false,
        votingError: null
      }      
    };

    case 'VOTE_UP_SUCCESS':
    return {
      ...state.votingFavData,
      actionsLog: [ { id: action.payload, category: 'Likes', action: 'add' }, ...state.votingFavData.actionsLog ],
      votingData: {
        ...state.votingFavData.votingData,
        votingLoading: false,
        votingError: null
      } 
    };

    case 'GET_VOTES_SUCCESS':
      return {
        ...state.votingFavData,
        votingData: {
          votingList: action.payload,
          votingLoading: false,
          votingError: null
        } 
      };

    // favs

    case 'FAVOURITE_REQUEST':
      return {
        ...state.votingFavData,
        favouriteData: {
          favouriteList: [],
          favouriteLoading: true,
          favouriteError: null
        } 
      };

    case 'GET_FAVOURITE_SUCCESS':
    return {
      ...state.votingFavData,
      favouriteData: {
        favouriteList: action.payload,
        favouriteLoading: false,
        favouriteError: null
      } 
    };
  
    case 'FAVOURITE_FAILURE':
    return {
      ...state.votingFavData,
      favouriteData: {
        avouriteList: [],
        favouriteLoading: false,
        favouriteError: action.payload
      } 
    };

    case 'ADD_FAVOURITE_SUCCESS':
    return {
      ...state.votingFavData,
      actionsLog: [ { id: action.payload, category: 'Favourites', action: 'add' }, ...state.votingFavData.actionsLog ],
      favouriteData: {
        ...state.votingFavData.favouriteData,
        favouriteLoading: false,
        favouriteError: null  
      }
    };

    case 'DELETE_FAVOURITE_SUCCESS':
    return {
      ...state.votingFavData,
      actionsLog: [ { id: action.payload, category: 'Favourites', action: 'delete' }, ...state.votingFavData.actionsLog ],
      favouriteData: {
        ...state.votingFavData.favouriteData,
        favouriteLoading: false,
        favouriteError: null  
      }
    };
      
    default:
      return state.votingFavData;
  }
};

export default updateVotingFavData;
