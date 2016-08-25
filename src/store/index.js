import thunkMiddleware from 'redux-thunk';
import {compose, createStore, applyMiddleware} from 'redux';
import rootReducer from '../modules/app/rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

export default store;
