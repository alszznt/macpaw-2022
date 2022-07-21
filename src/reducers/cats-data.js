const updateCatsData = (state, action) => {

    if (state === undefined) {
      return {
        cats: [],
        selectedImage: {},
        info: {},
        loading: true,
        error: null,
      };
    }
  
    switch (action.type) {
  
      case 'FETCH_CATS_DATA_REQUEST':
      return {
        ...state.catsData,
        selectedImage: {},
        info: {},
        cats: [],
        loading: true,
        error: null
      };

    case 'FETCH_CATS_DATA_SUCCESS':
      return {
        ...state.catsData,
        cats: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_CATS_DATA_FAILURE':
      return {
        ...state.catsData,
        cats: [],
        loading: false,
        error: action.payload
      };

    case 'ON_CAT_IMAGE_SELECTED':
      return {
        ...state.catsData,
        selectedImage: action.payload
      };

    case 'GET_CAT_INFO':
    return {
      ...state.catsData,
      info: action.payload
    };
        
      default:
        return state.catsData;
    }
  };
  
  export default updateCatsData;
  