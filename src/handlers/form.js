export function handleUpdateForm(updateFormValues, key, value) {
  updateFormValues(key, value);
};

export function handleFormSave(saveForm, _id) {
  saveForm(_id);
};

export function handleDeleteForm(deleteForm, _id) {
  deleteForm(_id);
};
