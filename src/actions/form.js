import {UPDATE_FORM, SET_ACTIVE_FORM} from '../actionTypes/form';
import request from 'superagent';
import {url} from '../constants/api';
import debug from 'debug';
import {createFormSuccessful, deleteFormSuccessful, updateFormSuccessful, setSaved} from './app';

let log = debug('form:log');

export function updateFormValues(key, value) {
  return {
    type: UPDATE_FORM,
    payload: {
      key: key,
      value: value
    }
  };
};

export function setActiveForm(form) {
  return {
    type: SET_ACTIVE_FORM,
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
    let form = state.form;
    delete form['saved'];
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
