import * as actionTypes from '../actionTypes/form';
import request from 'superagent';
import {url} from '../constants/api';
import debug from 'debug';

let log = debug('form:log');

export function updateFormValues(key, value) {
  return {
    type: actionTypes.UPDATE_FORM,
    payload: {
      key: key,
      value: value
    }
  };
};

export function setSaved(bool) {
  return {
    type: actionTypes.SET_SAVED,
    payload: bool
  };
};

export function setActiveForm(form) {
  return {
    type: actionTypes.SET_ACTIVE_FORM,
    payload: form
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

export function createForm() {
  return (dispatch, getState) => {
    let state = getState();
    let form = state.form;
    delete form['saved'];
    request
      .post(url + '/form')
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
        }
    });
  };
};

export function updateForm(_id) {
  return (dispatch, getState) => {
    let state = getState();
    let form = state.form;
    delete form['saved'];
    request
      .put(url + '/form/' + _id)
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
        }
    });
  };
};

export function deleteForm(_id) {
  return (dispatch) => {
    request
      .del(url + '/form/' + _id)
      .end(function(err, res) {
        if (err) {
          log('Error: ', err);
          return;
        } else {
          log('Successfully deleted form');
          dispatch(setSaved(false));
        }
      });
  };
};
