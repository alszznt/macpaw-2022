const updateBreedsData = (state, action) => {

  if (state === undefined) {
    return {
      selectedBreed: 'All breeds',
      limit: 5,
      sort: 'AZ',
      page: 1,
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
        selectedBreed: action.payload,
        page: 1
      };

    case 'SELECT_BREEDS_LIMIT':
      return {
        ...state.breedsData,
        limit: action.payload,
        page: 1
      };

    case 'SWITCH_SORT_TO_ZA':
      return {
        ...state.breedsData,
        sort:'ZA',
        page: 1
      };

    case 'SWITCH_SORT_TO_AZ':
      return {
        ...state.breedsData,
        sort: 'AZ',
        page: 1
      };

    case 'RESET_BREEDS_DATA':
      return {
        selectedBreed: 'All breeds',
        limit: 5,
        sort: 'AZ',
        page: 1,
        breeds: [],
        loading: true, 
        error: null
      };

    case 'INC_BREEDS_PAGE':
      return {
        ...state.breedsData,
        page: state.breedsData.page + 1
      };

    case 'DEC_BREEDS_PAGE':
      return {
        ...state.breedsData,
        page: state.breedsData.page - 1
      };

    default:
      return state.breedsData;
  }
};

export default updateBreedsData;
