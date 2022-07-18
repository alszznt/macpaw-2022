const updateBusinessesForm = (state, action) => {

  if (state === undefined) {
    return {
      name: '',
      city: '',
      openingTime: '',
      price: '',
      delivery: '',
      specialty: '',
      contacts: {
        facebook: null,
        instagram: null,
        phone: null,
        telegram: null
      },
      email: '',
      validData: null
    };
  }

  switch (action.type) {

    case 'SET_NAME':
      return {
        ...state.businessesForm,
        name: action.payload
      };

    case 'SET_CITY_VALUE':
      return {
        ...state.businessesForm,
        city: action.payload
      };

    case 'SET_TIME':
      return {
        ...state.businessesForm,
        openingTime: action.payload
      };

    case 'SET_PRICE':
      return {
        ...state.businessesForm,
        price: action.payload
      };

    case 'SET_DELIVERY':
      return {
        ...state.businessesForm,
        delivery: action.payload
      };

    case 'SET_SPECIALITY':
      return {
        ...state.businessesForm,
        specialty: action.payload
      };

    case 'SET_FACEBOOK':
      if (action.payload === ''){
        return {
          ...state.businessesForm,
          contacts: {
            ...state.businessesForm.contacts,
            facebook: null
          }
        }
      }else{
        return {
          ...state.businessesForm,
          contacts: {
            ...state.businessesForm.contacts,
            facebook: action.payload
          }
        }
      }

    case 'SET_INSTAGRAM':
      if (action.payload === ''){
        return {
          ...state.businessesForm,
          contacts: {
            ...state.businessesForm.contacts,
            instagram: null
          }
        }
      }else{
        return {
          ...state.businessesForm,
          contacts: {
            ...state.businessesForm.contacts,
            instagram: action.payload
          }
        }
      }

    case 'SET_TELEGRAM':
      if (action.payload === ''){
        return {
          ...state.businessesForm,
          contacts: {
            ...state.businessesForm.contacts,
            telegram: null
          }
        }
      }else{
        return {
          ...state.businessesForm,
          contacts: {
            ...state.businessesForm.contacts,
            telegram: action.payload
          }
        }
      }


    case 'SET_PHONE':
      return {
        ...state.businessesForm,
        contacts: {
          ...state.businessesForm.contacts,
          phone: action.payload
        }
      }

    case 'SET_EMAIL':
      return {
        ...state.businessesForm,
        email: action.payload
      };

    case 'ON_INVALID_DATA':
      return {
        ...state.businessesForm,
        validData: false
      };

    case 'ON_VALID_DATA':
      return {
        ...state.businessesForm,
        validData: true
      };

    case 'RESET_DATA':
      return {
        name: '',
        city: '',
        openingTime: '',
        price: '',
        delivery: '',
        specialty: '',
        contacts: {
          facebook: null,
          instagram: null,
          phone: null,
          telegram: null
        },
        validData: null
      };

    default:
      return state.businessesForm;
  }
};

export default updateBusinessesForm;
