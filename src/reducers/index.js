import updateActionsLog from './actions-log';
import updateImagesData from './images-data';
import updateVotingData from './voting-data';
import updateFavouriteData from './favourite-data'
import updateBreedsData from './breeds-data';
import updateCatsData from './cats-data';
import updateSearchData from './search-data';
import updateGalleryData from './gallery-data';

const reducer = (state, action) => {
  return {
    actionsLog: updateActionsLog(state, action),
    imagesData: updateImagesData(state, action),
    votingData: updateVotingData(state, action),
    favouriteData: updateFavouriteData(state, action),
    breedsData: updateBreedsData(state, action),
    catsData: updateCatsData(state ,action),
    searchData: updateSearchData(state, action),
    galleryData: updateGalleryData(state, action)
  };
};

export default reducer;
