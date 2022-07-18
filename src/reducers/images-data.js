const updateImagesData = (state, action) => {

    if (state === undefined) {
      return {
        id: {},
        url: {},
        loading: true,
        error: null,
      };
    }
  
    switch (action.type) {
  
      case 'FETCH_IMAGE_REQUEST':
        return {
          ...state.imagesData,
          id: {},
          url: {},
          loading: true,
          error: null
        };
  
      case 'FETCH_IMAGE_FAILURE':
        return {
          ...state.imagesData,
          data: {},
          url: {},
          loading: false,
          error: action.payload
        };
  
      case 'FETCH_IMAGE_SUCCESS':
        return {
          ...state.imagesData,
          id: action.payload[0].id,
          url: action.payload[0].url,
          loading: false,
          error: null
        };
          
      default:
        return state.imagesData;
    }
  };
  
  export default updateImagesData;
  