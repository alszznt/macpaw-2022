const updateActionsLog = (state, action) => {

    if (state === undefined) {
      return {
        logs: []
      };
    }
  
    switch (action.type) {
  
        case 'ADD_LIKE_LOG':
            return {
                logs: [ { data: action.payload, categoty: 'Likes', action: 'add' }, ...state.actionsLog.logs ]
            };
  
        case 'ADD_DISLIKE_LOG':
            return {
                logs: [ { data: action.payload, categoty: 'Dislikes', action: 'add' }, ...state.actionsLog.logs ]
            };
  
        case 'ADD_FAVOURITE_LOG':
            return {
                logs: [ { data: action.payload, categoty: 'Favourites', action: 'add' }, ...state.actionsLog.logs ]
            };

        case 'DELETE_FAVOURITE_LOG':
            return {
                logs: [ { data: action.payload, categoty: 'Favourites', action: 'delete' }, ...state.actionsLog.logs ]
            };
        
      default:
        return state.actionsLog;
    }
  };
  
  export default updateActionsLog;
  