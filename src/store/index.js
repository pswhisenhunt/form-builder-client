import thunkMiddleware from 'redux-thunk';
import {compose, createStore, applyMiddleware, combineReducers} from 'redux';
import {formBaseReducer} from '../formBase/index.js';

let rootReducer = combineReducers({
  formBaseReducer: formBaseReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

export default store;
