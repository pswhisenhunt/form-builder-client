import * as actionTypes from '../actionTypes/app';
import request from 'superagent';
import {url} from '../constants/api';
import debug from 'debug';

let log = debug('app:log');

export function setForms(forms) {
  return {
    type: actionTypes.SET_FORMS,
    payload: forms
  };
};

export function setHasLoaded(bool) {
  return {
    type: actionTypes.HAS_LOADED,
    payload: bool
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
          dispatch(setHasLoaded(true));
        }
    });
  };
};
