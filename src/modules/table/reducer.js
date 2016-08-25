const initialState = {
  forms: [],
  active: {}
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FORMS':
      return {
        forms: action.payload
      };
      break;
    case 'SET_ACTIVE_FORM':
      return {
        ...state,
        active: action.payload
      };
      break;
    default:
      return state;
  };
};

export default tableReducer;
