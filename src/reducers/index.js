import updateImagesData from './images-data';
import updateVotingFavData from './voting-favourite-data';
import updateBreedsData from './breeds-data';

const reducer = (state, action) => {
  return {
    imagesData: updateImagesData(state, action),
    votingFavData: updateVotingFavData(state, action),
    breedsData: updateBreedsData(state, action)
  };
};

export default reducer;
