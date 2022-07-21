const updateBreedsData = (state, action) => {

  if (state === undefined) {
    return {
      selectedBreed: 'all breeds',
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
        data: {},
        loading: false,
        error: action.payload
      };

    default:
      return state.breedsData;
  }
};

export default updateBreedsData;
