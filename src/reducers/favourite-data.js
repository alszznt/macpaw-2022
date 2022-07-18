const updateFavouriteData = (state, action) => {

    if (state === undefined) {
      return {
        favouriteList: [],
        loading: true,
        error: null
      };
    }
  
    switch (action.type) {
  
    case 'FAVOURITE_REQUEST':
        return {
          ...state.favouriteData,
          favouriteList: [],
          loading: true,
          error: null
        };

    case 'FAVOURITE_SUCCESS':
    return {
        ...state.favouriteData,
        favouriteList: action.payload,
        loading: false,
        error: null
    };
  
    case 'FAVOURITE_FAILURE':
    return {
        ...state.favouriteData,
        favouriteList: [],
        loading: false,
        error: action.payload
    };
        
      default:
        return state.favouriteData;
    }
  };
  
  export default updateFavouriteData;
  