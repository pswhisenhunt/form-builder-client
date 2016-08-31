const initialState = {
  name: '',
  _id: '',
  controls: [],
  saved: ''
};

export default function form(state = initialState, action) {
  switch(action.type) {
    case 'SET_ACTIVE_FORM':
      return {
        ...state,
        ...action.payload
      };
      break;
    case 'SET_SAVED':
      return {
        ...state,
        saved: action.payload
      };
      break;
    case 'UPDATE_FORM':
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
      break;
    default:
      return state;
  };
};
