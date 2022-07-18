import updateVotingData from './voting-data';
import updateFavouriteData from './favourite-data'
import updateBreedsData from './breeds-data';

const reducer = (state, action) => {
  return {
    votingData: updateVotingData(state, action),
    favouriteData: updateFavouriteData(state, action),
    breedsData: updateBreedsData(state, action)
  };
};

export default reducer;
