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
    case 'FORM_SUCCESSFUL':
      let forms = [].concat(state.forms);
      forms.push(action.payload);
      return {
        ...state,
        forms: forms
      };
      break;
    case 'CONTROL_SUCCESSFUL':
      let controls = [].concat(state.controls);
      controls.push(action.payload);
      return {
        ...state,
        controls: controls
      };
      break;
    default:
      return state;
  };
};
