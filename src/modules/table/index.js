import * as tableActions from './actions';
import * as tableActionTypes from './actionTypes';
import tableReducer from './reducer';
import TableContainer from './components/TableContainer.js';

module.exports = {
  tableActions: tableActions,
  tableActionTypes: tableActionTypes,
  tableReducer: tableReducer,
  TableContainer: TableContainer
};
