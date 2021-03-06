import thunkMiddleware from 'redux-thunk';
import {compose, createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
);

export default store;
