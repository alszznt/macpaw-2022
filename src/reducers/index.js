import updateGeneralData from './general-data';
import updateActionsLog from './actions-log';
import updateImagesData from './images-data';
import updateVotingData from './voting-data';
import updateFavouriteData from './favourite-data'
import updateBreedsData from './breeds-data';
import updateCatsData from './cats-data';
import updateSearchData from './search-data';
import updateGalleryData from './gallery-data';
import updateUploadData from './upload-data';

const reducer = (state, action) => {
  return {
    updateGeneralData: updateGeneralData(state, action),
    actionsLog: updateActionsLog(state, action),
    imagesData: updateImagesData(state, action),
    votingData: updateVotingData(state, action),
    favouriteData: updateFavouriteData(state, action),
    breedsData: updateBreedsData(state, action),
    catsData: updateCatsData(state ,action),
    searchData: updateSearchData(state, action),
    galleryData: updateGalleryData(state, action),
    uploadData: updateUploadData(state, action),
  };
};

export default reducer;
