const updateSearchData = (state, action) => {

    if (state === undefined) {
      return {
        value: '',
        serchList: [],
        loading: true,
        error: null,
        searchVal: ''
      };
    }
  
    switch (action.type) {
  
      case 'FETCH_SEARCH_DATA_REQUEST':
      return {
        ...state.searchData,
        serchList: [],
        loading: true,
        error: null
      };

    case 'FETCH_SEARCH_DATA_SUCCESS':
      return {
        ...state.searchData,
        serchList: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_SEARCH_DATA_FAILURE':
      return {
        ...state.searchData,
        serchList: [],
        loading: false,
        error: action.payload
      };

    case 'ON_SEARCH_CHANGE':
      return {
        ...state.searchData,
        value: action.payload
      };

    case 'SET_SEARCH_VAL':
      return {
        ...state.searchData,
        searchVal: action.payload
      };


        
      default:
        return state.searchData;
    }
  };
  
  export default updateSearchData;
  