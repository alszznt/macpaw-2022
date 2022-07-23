const updateUploadData = (state, action) => {

    if (state === undefined) {
      return {
        file: null,
        error: null,
        searchVal: ''
      };
    }
  
    switch (action.type) {
  
      case 'FETCH_FILE_DATA_REQUEST': 
      return {
        ...state.uploadData,
        loading: true,
        error: null
      };

    case 'FETCH_FILE_DATA_SUCCESS':
      return {
        ...state.uploadData,
        file: null,
        loading: false,
        error: null
      };

    case 'FETCH_FILE_DATA_FAILURE':
      return {
        ...state.uploadData,
        loading: false,
        error: action.payload
      };

    case 'ON_FILE_CHANGE':
      return {
        ...state.uploadData,
        file: action.payload
      };

        
      default:
        return state.uploadData;
    }
  };
  
  export default updateUploadData;
  