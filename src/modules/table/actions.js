import * as actionTypes from './actionTypes';
import request from 'superagent';

export function setForms(forms) {
  return {
    type: actionTypes.SET_FORMS,
    payload: forms
  };
};

export function getForms() {
  return (dispatch) => {
    setForms([]);
  };
};
