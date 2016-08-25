import {combineReducers} from 'redux'
import {formBaseReducer} from '../formBase/index.js';
import {tableReducer} from '../table/index.js';

const rootReducer = combineReducers({
  formBaseReducer,
  tableReducer
});

export default rootReducer;
