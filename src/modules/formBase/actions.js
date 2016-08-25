import * as actionTypes from './actionTypes';
import request from 'superagent';
import {url} from '../../constants/api';

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

export function saveFormBase(_id, name, controls) {
  if (!name || name === "") {
    return (dispatch) => {
      // TODO have error handler here
      dispatch(setSaved(false));
    };
  } else {
    return (dispatch) => {
      if (!_id) {
        dispatch(createForm(name, controls));
      } else {
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
          // TODO have error handler here
          dispatch(setSaved(false));
        } else {
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
          dispatch(setSaved(false));
        } else {
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
          return;
        } else {
          dispatch(setSaved(false));
          dispatch(setState({}));
          //TODO have an error message displayed
        }
      });
  };
};
