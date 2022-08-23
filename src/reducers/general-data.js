const updateGeneralData = (state, action) => {

    if (state === undefined) {
      return {
        isMenu: false,
        isTheme: true
      };
    }
  
    switch (action.type) {
  
      case 'TOGGLE_MENU':
        return {
            ...state.updateGeneralData,
            isMenu: !this.state.updateGeneralData.isMenu
        };

        case 'TOGGLE_THEME':
        return {
            ...state.updateGeneralData,
            isTheme: !this.state.updateGeneralData.isTheme
        };
          
      default:
        return state.updateGeneralData;
    }
  };
  
  export default updateGeneralData;
  