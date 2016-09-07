const initialState = {
  name: '',
  type: '',
  options: [],
  position: 0,
  isCustom: false,
  htmlClass: '',
  htmlId: '',
  saved: false,
  option: ''
};

export default function control(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_CONTROL':
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
      break;
    case 'ADD_OPTION':
      var options = [].concat(state.options);
      options.push(state.option);
      return {
        ...state,
        options: options,
        option: ''
      };
      break;
    case 'SET_ACTIVE_CONTROL':
      if (!action.payload) {
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
    case 'DELETE_CONTROL_SUCCESSFUL':
      return Object.assign({}, state, initialState);
      break;
    default:
      return state;
  };
};
