export function handleSetForms(loadForms) {
  loadForms();
};

export function handleSetActiveForm(setActiveForm, form) {
  setActiveForm(form);
};

export function handleSetControls(loadControls) {
  loadControls();
};

export function handleSetActiveControl(setActiveControl, control) {
  setActiveControl(control);
};

export function handleAddControl(addControl, control) {
  addControl(control);
};
