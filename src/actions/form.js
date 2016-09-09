import * as formActionTypes from '../actionTypes/form';
import request from 'superagent';
import {url} from '../constants/api';
import debug from 'debug';
import {createFormSuccessful, deleteFormSuccessful, updateFormSuccessful, setSaved} from './app';

let log = debug('form:log');

export function updateFormValues(key, value) {
  return {
    type: formActionTypes.UPDATE_FORM,
    payload: {
      key: key,
      value: value
    }
  };
};

export function setActiveForm(form) {
  return {
    type: formActionTypes.SET_ACTIVE_FORM,
    payload: form
  };
};

export function addControl(control) {
  return {
    type: formActionTypes.ADD_CONTROL,
    payload: control
  };
};

export function updateFormControl(id, key, value) {
  return {
    type: formActionTypes.UPDATE_FORM_CONTROL,
    payload: {
      id: id,
      key: key,
      value: value
    }
  };
};

export function deleteFormControl(id) {
  return {
    type: formActionTypes.DELETE_FORM_CONTROL,
    payload: id
  };
};

export function addOptionsToFormControl(id) {
  return {
    type: formActionTypes.ADD_OPTIONS_TO_FORM_CONTROL,
    payload: id
  };
};


export function saveForm(_id) {
  return (dispatch) => {
    if (!_id) {
      log('Creating Form');
      dispatch(createForm());
    } else {
      log('Updating Form');
      dispatch(updateForm(_id));
    }
  };
};


function cleanForRequest(form) {
  delete form['saved'];
  delete form['option'];
  return form;
};

export function createForm() {
  return (dispatch, getState) => {
    let state = getState();
    let form = cleanForRequest(state.form);
    request
      .post(url + '/forms')
      .send(form)
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) {
          log('Error: ', err);
          dispatch(setSaved(false));
        } else {
          log('Success!');
          dispatch(setSaved(true));
          dispatch(setActiveForm(res.body));
          dispatch(createFormSuccessful(res.body));
        }
    });
  };
};

export function updateForm(_id) {
  return (dispatch, getState) => {
    let state = getState();
    let form = cleanForRequest(state.form);
    request
      .put(url + '/forms/' + _id)
      .send(form)
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) {
          log('Error: ', err);
          dispatch(setSaved(false));
        } else {
          log('Success!');
          dispatch(setSaved(true));
          dispatch(setActiveForm(res.body));
          dispatch(updateFormSuccessful(res.body));
        }
    });
  };
};

export function deleteForm(_id) {
  return (dispatch) => {
    request
      .del(url + '/forms/' + _id)
      .end(function(err, res) {
        if (err) {
          log('Error: ', err);
          return;
        } else {
          log('Successfully deleted form');
          dispatch(setSaved(false));
          dispatch(deleteFormSuccessful(_id));
        }
      });
  };
};
