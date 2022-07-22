const updateGalleryData = (state, action) => {

    if (state === undefined) {
      return {
        order: 'Random',
        breed: {name:'None', id:'None'},
        type: 'All',
        limit: 5,
        page: 0,
        galleryList: [],
        loading: true,
        error: null,
        reservData: {}
      };
    }
  
    switch (action.type) {
  
      case 'FETCH_GALLERY_DATA_REQUEST':
      return {
        ...state.galleryData,
        galleryList: [],
        loading: true,
        error: null,
        page: 0
      };

    case 'FETCH_GALLERY_DATA_SUCCESS':
      return {
        ...state.galleryData,
        galleryList: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_GALLERY_DATA_FAILURE':
      return {
        ...state.galleryData,
        galleryList: [],
        loading: false,
        error: action.payload
      };

    case 'ON_GALLERY_BREED_SELECTED':
      return {
        ...state.galleryData,
        breed: action.payload
      };

    case 'ON_GALLERY_ORDER_SELECTED':
      return {
        ...state.galleryData,
        order: action.payload
      };

    case 'ON_GALLERY_TYPE_SELECTED':
        return {
            ...state.galleryData,
            type: action.payload
        };

    case 'ON_GALLERY_LIMIT_SELECTED':
        return {
            ...state.galleryData,
            limit: action.payload
        };

    case 'ON_GALLERY_PAGES_INC':
        return {
            ...state.galleryData,
            page: state.galleryData.page + 1
        };

    case 'ON_GALLERY_PAGES_DEC':
        return {
            ...state.galleryData,
            page: state.galleryData.page - 1
        };

      case 'ON_GALLERY_DATA_RESERV':
        return {
            ...state.galleryData,
            reservData: action.payload
        };


        
      default:
        return state.galleryData;
    }
  };
  
  export default updateGalleryData;
  