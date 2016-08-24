export function handleFormNameChange(setFormName, formName) {
  setFormName(formName);
};

export function handleFormSave(saveFormBase, _id, name, controls) {
  saveFormBase(_id, name, controls);
};

export function handleDeleteForm(deleteForm, _id) {
  deleteForm(_id);
};
