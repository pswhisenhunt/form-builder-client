const initialState = {
  name: '',
  saved: ''
};

export default function form(state = initialState, action) {
  switch(action.type) {
    case 'SET_FORM_NAME':
      return {
        ...state,
        name: action.payload
      };
      break;
    case 'SET_SAVED':
      return {
        ...state,
        saved: action.payload
      };
      break;
    default:
      return state;
  };
};
