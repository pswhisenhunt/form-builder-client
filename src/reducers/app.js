const initialState = {
  forms: [],
  hasLoaded: false,
  controls: []
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case 'SET_FORMS':
      return {
        ...state,
        forms: action.payload
      };
      break;
    case 'SET_CONTROLS':
      return {
        ...state,
        controls: action.payload
      };
      break;
    case 'HAS_LOADED':
      return {
        ...state,
        hasLoaded: action.payload
      };
      break;
    case 'CREATED_ITEM_SUCCESSFULLY':
      let forms = [].concat(state.forms);
      forms.push(action.payload)
      let newState = {forms: forms};
      return Object.assign({}, state, newState);
      break;
    default:
      return state;
  };
};
