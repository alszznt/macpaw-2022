const updateBreedsData = (state, action) => {

  if (state === undefined) {
    return {
      data:{},
      businesses: [],
      loading: true,
      reLoading: true,
      error: null,
      hasMore: true,
      count: null,
      page: 1
    };
  }

  switch (action.type) {

    case 'FETCH_BUSINESSES_DATA_REQUEST':
      return {
        ...state.businessesList,
        data: {},
        loading: true,
        error: null
      };

    case 'FETCH_BUSINESSES_DATA_SUCCESS':
      return {
        ...state.businessesList,
        data: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_BUSINESSES_DATA_FAILURE':
      return {
        ...state.businessesList,
        data: {},
        loading: false,
        error: action.payload
      };

    case 'SET_BUSINESSES':
      return {
        ...state.businessesList,
        businesses: [ ...state.businessesList.businesses, ...action.payload],
        page: state.businessesList.page + 1
      };

    case 'SET_COUNT':
      return {
        ...state.businessesList,
        count: action.payload,
        hasMore: action.payload >= 5
      };

    case 'SET_HAS_MORE_FALSE':
      return {
        ...state.businessesList,
        hasMore: false
      };

    case 'SET_RELOADING_TRUE':
      return {
        ...state.businessesList,
        reLoading: true
      };

    case 'RESET_BUSINESSES':
      return {
        data:{},
        businesses: [],
        loading: true,
        error: null,
        hasMore: true,
        count: null,
        page: 1
      };


    default:
      return state.businessesList;
  }
};

export default updateBreedsData;
