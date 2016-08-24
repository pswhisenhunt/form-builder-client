import * as actionTypes from './actionTypes';
import request from 'superagent';
import {url} from '../constants/api';

export function setFormName(value) {
  return {
    type: actionTypes.SET_FORM_NAME,
    payload: value
  };
};

export function setSaved(bool) {
  return {
    type: actionTypes.SET_SAVED,
    payload: bool
  };
};

export function setState(obj) {
  return {
    type: actionTypes.SET_STATE,
    payload: obj
  };
};

export function saveFormBase(name, formControls) {
  return (dispatch) => {
    request
      .post(url + '/form')
      .send(name, formControls)
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) {
          dispatch(setSaved(false));
        } else {
          dispatch(setSaved(true));
          dispatch(setState(res.body));
        }
      });
  };
};
