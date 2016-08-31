import {loadForms} from '../actions/app';

export function handleSetForms(loadForms) {
  loadForms();
};

export function handleSetActiveForm(setActiveForm, form) {
  setActiveForm(form);
};
