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
    case 'CREATE_FORM_SUCCESSFUL':
      var forms = [].concat(state.forms);
      forms.push(action.payload);
      return {
        ...state,
        forms: forms
      };
      break;
    case 'CREATE_CONTROL_SUCCESSFUL':
      var controls = [].concat(state.controls);
      controls.push(action.payload);
      return {
        ...state,
        controls: controls
      };
      break;
    case 'DELETE_FORM_SUCCESSFUL':
      var forms = [].concat(state.forms);
      forms.forEach((item, i) => {
        if (item._id == action.payload) {
          forms.splice(i, 1);
        };
      });
      return {
        ...state,
        forms: forms
      };
      break;
    case 'DELETE_CONTROL_SUCCESSFUL':
      var controls = [].concat(state.controls);
      controls.forEach((item, i) => {
        if (item._id == action.payload) {
          controls.splice(i, 1);
        };
      });
      return {
        ...state,
        controls: controls
      };
      break;
    case 'UPDATE_FORM_SUCCESSFUL':
      var forms = [].concat(state.forms);
      forms.forEach((item, i) => {
        if (item._id == action.payload._id) {
          forms[i] = action.payload;
        };
      });
      return {
        ...state,
        forms: forms
      };
      break;
    case 'UPDATE_CONTROL_SUCCESSFUL':
      var controls = [].concat(state.controls);
      controls.forEach((item, i) => {
        if (item._id == action.payload._id) {
          controls[i] = action.payload;
        };
      });
      return {
        ...state,
        controls: controls
      };
      break;
    default:
      return state;
  };
};
