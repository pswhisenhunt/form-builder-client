export function handleUpdateControl(updateControlValues, id, key, value) {
  updateControlValues(id, key, value);
};

export function handleSaveControl(saveControl, _id) {
  saveControl(_id);
};

export function handleDeleteControl(deleteControl, _id) {
  deleteControl(_id);
};

export function handleAddOptions(addOptions) {
  addOptions();
};
