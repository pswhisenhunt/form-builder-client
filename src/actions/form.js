import * as actionTypes from '../actionTypes/form';
import request from 'superagent';
import {url} from '../constants/api';
import debug from 'debug';
let log = debug('form:log');

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

export function saveFormBase(_id, name, controls) {
  if (!name || name === "") {
    return (dispatch) => {
      dispatch(setSaved(false));
    };
  } else {
    return (dispatch) => {
      if (!_id) {
        log('Creating Form');
        dispatch(createForm(name, controls));
      } else {
        log('Updating Form');
        dispatch(updateForm(_id, name, controls));
      }
    }
  };
};

export function createForm(name, controls) {
  return (dispatch) => {
    request
      .post(url + '/form')
      .send({name: name, controls: controls})
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) {
          log('Error: ', err);
          dispatch(setSaved(false));
        } else {
          log('Success!');
          dispatch(setSaved(true));
          dispatch(setState(res.body));
        }
    });
  };
};

export function updateForm(_id, name, controls) {
  return (dispatch) => {
    request
      .put(url + '/form/' + _id)
      .send({name: name, controls: controls})
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) {
          log('Error: ', err);
          dispatch(setSaved(false));
        } else {
          log('Success!');
          dispatch(setSaved(true));
          dispatch(setState(res.body));
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
          dispatch(setState({}));
        }
      });
  };
};
