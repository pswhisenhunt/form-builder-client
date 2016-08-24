export function handleFormNameChange(props, formName) {
  props.dispatch(props.setFormName(formName));
};

export function handleFormSave(props) {
  props.dispatch(props.saveFormBase(props.name, props.controls));
};
