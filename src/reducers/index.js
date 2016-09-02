import {combineReducers} from 'redux'
import form from './form';
import app from './app';
import control from './control';

export default combineReducers({
  form,
  app,
  control
});
