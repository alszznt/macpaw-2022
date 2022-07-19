const updateActionsLog = (state, action) => {

    if (state === undefined) {
      return {
        logs: []
      };
    }
  
    switch (action.type) {
  
        case 'ADD_LIKE_LOG':
            return {
                logs: [ { data: action.payload, category: 'Likes', action: 'added to' }, ...state.actionsLog.logs ]
            };
  
        case 'ADD_DISLIKE_LOG':
            return {
                logs: [ { data: action.payload, category: 'Dislikes', action: 'added to' }, ...state.actionsLog.logs ]
            };
  
        case 'ADD_FAVOURITE_LOG':
            return {
                logs: [ { data: action.payload, category: 'Favourites', action: 'added to' }, ...state.actionsLog.logs ]
            };

        case 'DELETE_FAVOURITE_LOG':
            return {
                logs: [ { data: action.payload, category: 'Favourites', action: 'removed from' }, ...state.actionsLog.logs ]
            };
        
      default:
        return state.actionsLog;
    }
  };
  
  export default updateActionsLog;
  