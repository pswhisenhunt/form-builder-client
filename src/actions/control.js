import {SET_ACTIVE_CONTROL, UPDATE_CONTROL} from '../actionTypes/control';
import {controlSuccessful, setSaved} from './app';
import request from 'superagent';
import {url} from '../constants/api';
import debug from 'debug';

let log = debug('control:log');

export function updateControlValues(key, value) {
  return {
    type: UPDATE_CONTROL,
    payload: {
      key: key,
      value: value
    }
  };
};

export function setActiveControl(control) {
  return {
    type: SET_ACTIVE_CONTROL,
    payload: control
  };
};

export function saveControl(_id) {
  return (dispatch) => {
    if (!_id) {
      log('Creating Control');
      dispatch(createControl());
    } else {
      log('Updating Control');
      dispatch(updateControl(_id));
    }
  };
};

export function createControl() {
  return (dispatch, getState) => {
    let state = getState();
    let control = state.control;
    delete control['saved'];
    request
      .post(url + '/controls')
      .send(control)
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) {
          log('Error: ', err);
          dispatch(setSaved(false));
        } else {
          log('Success created control!');
          dispatch(setSaved(true));
          dispatch(setActiveControl(res.body));
          dispatch(controlSuccessful(res.body));
        }
    });
  };
};

export function updateControl(_id) {
  return (dispatch, getState) => {
    let state = getState();
    let control = state.control;
    delete control['saved'];
    request
      .put(url + '/controls/' + _id)
      .send(control)
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) {
          log('Error: ', err);
          dispatch(setSaved(false));
        } else {
          log('Successfully updated control!');
          dispatch(setSaved(true));
          dispatch(setActiveControl(res.body));
        }
    });
  };
};

export function deleteControl(_id) {
  return (dispatch) => {
    request
      .del(url + '/controls/' + _id)
      .end(function(err, res) {
        if (err) {
          log('Error: ', err);
          return;
        } else {
          log('Successfully deleted control');
          dispatch(setSaved(false));
        }
      });
  };
};
