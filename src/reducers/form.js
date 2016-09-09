const initialState = {
  name: '',
  _id: '',
  controls: [],
  saved: '',
  option: ''
};

export default function form(state = initialState, action) {
  switch(action.type) {
    case 'SET_ACTIVE_FORM':
      if(!action.payload) {
        return initialState;
      } else {
        return {
          ...state,
          ...action.payload
        };
      }
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
    case 'ADD_CONTROL':
      var ctrls = [].concat(state.controls);
      ctrls.push(action.payload);
      return {
        ...state,
        controls: ctrls
      };
      break;
    case 'UPDATE_FORM_CONTROL':
      if (action.payload.key === 'option') {
        return {
          ...state,
          option: action.payload.value
        };
      } else {
        var ctrls = [].concat(state.controls);
        ctrls.forEach((ctrl) => {
          if (ctrl._id === action.payload.id) {
            ctrl[action.payload.key] = action.payload.value;
            return;
          };
        });
        return {
          ...state,
          controls: ctrls
        };
      }
      break;
    case 'DELETE_FORM_CONTROL':
      var ctrls = [].concat(state.controls);
      ctrls.forEach((ctrl, i) => {
        if (ctrl._id == action.payload) {
          ctrls.splice(i, 1);
        }
      });
      return {
        ...state,
        controls: ctrls
      };
      break;
    case 'ADD_OPTIONS_TO_FORM_CONTROL':
      let controls = [].concat(state.controls);
      let ctrl = controls.filter((control) => {
        return control._id === action.payload
      });
      ctrl[0].options.push(state.option);
      return {
        ...state,
        controls: controls,
        option: ''
      }
      break;
    case 'DELETE_FORM_SUCCESSFUL':
      return Object.assign({}, state, initialState);
      break;
    default:
      return state;
  };
};
