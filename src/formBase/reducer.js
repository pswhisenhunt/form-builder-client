import * as types from './actionTypes';

const initialState = {
  name: "World!"
};

export default function formBaseReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_DATA':
      return state.name;
      break;
    default:
      return state;
  };
};
