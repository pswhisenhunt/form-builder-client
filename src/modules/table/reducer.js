const initialState = {
  forms: []
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FORMS':
      return {
        forms: action.payload
      };
      break;
    default:
      return state;
  };
};

export default tableReducer;
