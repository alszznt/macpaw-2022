const getDate = () => {
    let dt = new Date();
    if (dt.getMinutes() < 10) {
        return `${ dt.getHours() }:0${ dt.getMinutes() }`
    }
    return `${ dt.getHours() }:${ dt.getMinutes() }`
}

const addLikeLog = (id) => {
    const data = { id: id, time: getDate() }
    return {
        type: 'ADD_LIKE_LOG',
        payload: data
    };
};

const addDislikeLog = (id) => {
    const data = { id: id, time: getDate() }
    return {
        type: 'ADD_DISLIKE_LOG',
        payload: data
    };
};

const addFavouriteLog = (id) => {
    const data = { id: id, time: getDate() }
    return {
        type: 'ADD_FAVOURITE_LOG',
        payload: data
    };
};

const deleteFavouriteLog = (id) => {
    const data = { id: id, time: getDate() }
    return {
        type: 'DELETE_FAVOURITE_LOG',
        payload: data
    };
};

const imageRequested = () => {
    return {
      type: 'FETCH_IMAGE_REQUEST'
    }
};

const imageLoaded = (data) => {
    return {
        type: 'FETCH_IMAGE_SUCCESS',
        payload: data
    };
};

const imageError = (error) => {
    return {
        type: 'FETCH_IMAGE_FAILURE',
        payload: error
    };
};

export const fetchImage = (service, dispatch) => {
    dispatch(imageRequested());
    service.getImage()
      .then((data) => dispatch(imageLoaded(data)))
      .catch((err) => dispatch(imageError(err)));
};

const votingRequested = () => {
    return {
      type: 'VOTING_REQUEST'
    }
};

const votingError = (error) => {
    return {
        type: 'VOTING_FAILURE',
        payload: error
    };
};

const voteUpLoaded = (data) => {
    return {
        type: 'VOTE_UP_SUCCESS',
        payload: data
    };
};

const voteDownLoaded = (data) => {
    return {
        type: 'VOTE_DOWN_SUCCESS',
        payload: data
    };
};

const getVotesLoaded = (data) => {
    return {
        type: 'GET_VOTES_SUCCESS',
        payload: data
    };
};

export const voteUp = (service, dispatch) => (id) => {
    dispatch(votingRequested());
    dispatch(addLikeLog(id));
    service.fetchVoting(id, 1)
      .then((data) => dispatch(voteUpLoaded(id)) )
      .then(() => fetchImage(service, dispatch))
      .catch((err) => dispatch(votingError(err)));
}

export const voteDown = (service, dispatch) => (id) => {
    dispatch(votingRequested());
    dispatch(addDislikeLog(id));
    service.fetchVoting(id, 0)
      .then(() => dispatch(voteDownLoaded(id)))
      .then(() => fetchImage(service, dispatch))
      .catch((err) => dispatch(votingError(err)));
}

export const getVotes = (service, dispatch) => (limit, order, page) => {
    dispatch(votingRequested());
    service.getVotes(limit, order, page)
      .then((data) => dispatch(getVotesLoaded(data)))
      .catch((err) => dispatch(votingError(err)));
}

const favouriteRequested = () => {
    return {
      type: 'FAVOURITE_REQUEST'
    }
};

const favouriteError = (error) => {
    return {
        type: 'FAVOURITE_FAILURE',
        payload: error
    };
};

const addFavouriteLoaded = (data) => {
    return {
        type: 'ADD_FAVOURITE_SUCCESS',
        payload: data
    };
};

const deleteFavouriteLoaded = (data) => {
    return {
        type: 'DELETE_FAVOURITE_SUCCESS',
        payload: data
    };
};

const getFavouriteLoaded = (data) => {
    return {
        type: 'GET_FAVOURITE_SUCCESS',
        payload: data
    };
};

export const addFavourite = (service, dispatch) => (id) => {
    dispatch(addFavouriteLog(id));
    dispatch(favouriteRequested());
    service.addFavourite(id)
      .then(() => dispatch(addFavouriteLoaded(id)))
      .then(() => getFavourite(service, dispatch)())
      .catch((err) => dispatch(favouriteError(err)));
}

export const deleteFavourite = (service, dispatch) => (id, imgId) => {
    dispatch(deleteFavouriteLog(imgId));
    dispatch(favouriteRequested());
    service.deleteFavourite(id)
      .then(() => dispatch(deleteFavouriteLoaded(imgId)))
      .then(() => getFavourite(service, dispatch)())
      .catch((err) => dispatch(favouriteError(err)));
}

export const getFavourite = (service, dispatch) => (limit, order, page) => {
    dispatch(favouriteRequested());
    service.getFavourite(limit, order, page)
      .then((data) => dispatch(getFavouriteLoaded(data)))
      .catch((err) => dispatch(favouriteError(err)));
}

const breedsRequested = () => {
    return {
      type: 'FETCH_BREEDS_DATA_REQUEST'
    }
};

const getBreedsLoaded = (data) => {
    return {
        type: 'FETCH_BREEDS_DATA_SUCCESS',
        payload: data
    };
};

const breedsError = (error) => {
    return {
        type: 'FETCH_BREEDS_DATA_FAILURE',
        payload: error
    };
};

export const getBreeds = (service, dispatch) => {
    dispatch(breedsRequested());
    service.getBreeds()
      .then((data) => dispatch(getBreedsLoaded(data)))
      .catch((err) => dispatch(breedsError(err)));
};

export const selectBreed = (data) => {
    return {
        type: 'SELECT_BREED',
        payload: data
    };
};

export const selectBreedsLimit = (data) => {
    return {
        type: 'SELECT_BREEDS_LIMIT',
        payload: data
    };
};

export const switchSortToZA = () => {
    return {
        type: 'SWITCH_SORT_TO_ZA',
    };
};

export const switchSortToAZ = () => {
    return {
        type: 'SWITCH_SORT_TO_AZ',
    };
};

export const resetBreedsData = () => {
    return {
        type: 'RESET_BREEDS_DATA',
    };
};

export const incBreedsPage = () => {
    return {
        type: 'INC_BREEDS_PAGE',
    };
};

export const decBreedsPage = () => {
    return {
        type: 'DEC_BREEDS_PAGE',
    };
};

export const sortArr = (arr) => (selectedElement, limit, page, sort) => {

    let locArr = [...arr]
    
    let newArr;
    sort === 'AZ' ? newArr = [...locArr] : newArr = [...locArr.reverse()];

    if (selectedElement === 'All breeds'){
        let lust;
        limit * page >= newArr.length ? lust = newArr.length : lust = limit * page;
        let first;
        first = limit * ( page - 1 )
        return [...newArr.slice(first, lust)];
    }else{
        return [...newArr.filter( (el) => el.name === selectedElement )]
    }
}

const catsRequested = () => {
    return {
      type: 'FETCH_CATS_DATA_REQUEST'
    }
};

const catsLoaded = (data, dispatch) => {
    dispatch(getCatInfo(data[0].breeds[0]));
    dispatch(onCatImageSelected(data[0]));
    return {
        type: 'FETCH_CATS_DATA_SUCCESS',
        payload: data
    };
};

const catsError = (error) => {
    return {
        type: 'FETCH_CATS_DATA_FAILURE',
        payload: error
    };
};

export const getCats = (service, dispatch) => (id) => {
    dispatch(catsRequested());
    service.getCatsImages(id)
      .then((data) => dispatch(catsLoaded(data, dispatch)))
      .catch((err) => dispatch(catsError(err)));
};

export const onCatImageSelected = (data) => {
    return {
        type: 'ON_CAT_IMAGE_SELECTED',
        payload: data
    };
};

export const getCatInfo = (data) => {
    return {
        type: 'GET_CAT_INFO',
        payload: data
    };
};


