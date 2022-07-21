const updateBreedsData = (state, action) => {

  if (state === undefined) {
    return {
      selectedBreed: 'All breeds',
      limit: 5,
      sort: 'AZ',
      breeds: [],
      loading: true, 
      error: null
    };
  }

  switch (action.type) {

    case 'FETCH_BREEDS_DATA_REQUEST':
      return {
        ...state.breedsData,
        breeds: [],
        loading: true,
        error: null
      };

    case 'FETCH_BREEDS_DATA_SUCCESS':
      return {
        ...state.breedsData,
        breeds: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_BREEDS_DATA_FAILURE':
      return {
        ...state.breedsData,
        breeds: [],
        loading: false,
        error: action.payload
      };

    case 'SELECT_BREED':
      return {
        ...state.breedsData,
        selectedBreed: action.payload
      };

    default:
      return state.breedsData;
  }
};

export default updateBreedsData;
