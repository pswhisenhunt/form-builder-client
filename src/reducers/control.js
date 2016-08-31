const initialState = {
  name: '',
  type: '',
  options: [],
  position: 0,
  isCustom: false,
  htmlClass: '',
  htmlId: ''
};

export default function control(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_CONTROL':
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
      break;
    case 'SET_ACTIVE_CONTROL':
      return {
        ...state,
        ...action.payload
      };
      break;
    default:
      return state;
  };
};