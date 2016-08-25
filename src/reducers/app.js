const initialState = {
  forms: [],
  activeForm: {},
  genericControls: [],
  customControls: []
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case 'SET_FORMS':
      return {
        ...state,
        forms: action.payload
      };
      break;
    case 'SET_ACTIVE_FORM':
      return {
        ...state,
        activeForm: action.payload
      };
      break;
    default:
      return state;
  };
};
