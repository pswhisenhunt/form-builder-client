const initialState = {
  forms: [],
  hasLoaded: false
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case 'SET_FORMS':
      return {
        ...state,
        forms: action.payload
      };
      break;
    case 'HAS_LOADED':
      return {
        ...state,
        hasLoaded: action.payload
      };
      break;
    default:
      return state;
  };
};
