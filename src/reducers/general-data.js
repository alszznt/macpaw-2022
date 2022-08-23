const generalData = (state, action) => {

    if (state === undefined) {
      return {
        isMenu: false,
        isTheme: false
      };
    }
  
    switch (action.type) {
  
      case 'TOGGLE_MENU':
        return {
            ...state.updateGeneralData,
            isMenu: !state.generalData.isMenu
        };

        case 'TOGGLE_THEME':
        return {
            ...state.updateGeneralData,
            isTheme: !state.generalData.isTheme
        };
          
      default:
        return state.generalData;
    }
  };
  
  export default generalData;
  