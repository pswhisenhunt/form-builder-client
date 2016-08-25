import * as actionTypes from './actionTypes';
import request from 'superagent';
import {url} from '../../constants/api';
import debug from 'debug';

let log = debug('table:log');

export function setForms(forms) {
  return {
    type: actionTypes.SET_FORMS,
    payload: forms
  };
};

export function setActiveForm(form) {
  return {
    type: actionTypes.SET_ACTIVE_FORM,
    payload: form
  };
};

export function loadForms() {
  return (dispatch) => {
    request
      .get(url + '/form')
      .end(function(err, res) {
        if (err) {
          log("Error: ", err);
          return;
        } else {
          log('We got the forms!', res.body);
          dispatch(setForms(res.body));
        }
    });
  };
};
