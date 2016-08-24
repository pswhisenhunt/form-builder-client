const initialState = {
  name: '',
  saved: '',
  _id: '',
  controls: []
};

export default function formBaseReducer(state = initialState, action) {
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
    case 'SET_STATE':
      return {
        saved: state.saved,
        _id: action.payload._id,
        controls: action.payload.controls,
        name: action.payload.name
      };
      break;
    default:
      return state;
  };
};
