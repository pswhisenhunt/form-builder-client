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

export function setControls(controls) {
  return {
    type: actionTypes.SET_CONTROLS,
    payload: controls
  };
};

export function setHasLoaded(bool) {
  return {
    type: actionTypes.HAS_LOADED,
    payload: bool
  };
};

export function createFormSuccessful(item) {
  return {
    type: actionTypes.CREATE_FORM_SUCCESSFUL,
    payload: item
  };
};

export function createControlSuccessful(item) {
  return {
    type: actionTypes.CREATE_CONTROL_SUCCESSFUL,
    payload: item
  };
};

export function deleteFormSuccessful(itemId) {
  return {
    type: actionTypes.DELETE_FORM_SUCCESSFUL,
    payload: itemId
  };
};

export function deleteControlSuccessful(itemId) {
  return {
    type: actionTypes.DELETE_CONTROL_SUCCESSFUL,
    payload: itemId
  };
};

export function updateFormSuccessful(item) {
  return {
    type: actionTypes.UPDATE_FORM_SUCCESSFUL,
    payload: item
  };
};

export function updateControlSuccessful(item) {
  return {
    type: actionTypes.UPDATE_CONTROL_SUCCESSFUL,
    payload: item
  };
};

export function setSaved(bool) {
  return {
    type: actionTypes.SET_SAVED,
    payload: bool
  };
};


export function loadForms() {
  return (dispatch) => {
    request
      .get(url + '/forms')
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

export function loadControls() {
  return (dispatch) => {
    request
      .get(url + '/controls')
      .end(function(err, res) {
        if (err) {
          log("Error: ", err);
          return;
        } else {
          log("We got the controls!", res.body);
          dispatch(setControls(res.body));
          dispatch(setHasLoaded(true));
        }
    });
  };
};
