import updateVotingData from './voting-data';
import updateBreedsData from './breeds-data';

const reducer = (state, action) => {
  return {
    votingData: updateVotingData(state, action),
    breedsData: updateBreedsData(state, action)
  };
};

export default reducer;
