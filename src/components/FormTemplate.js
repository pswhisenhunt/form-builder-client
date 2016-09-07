import React from 'react';

const FormTemplate = (props) => {
  return (
    <form className="form">
      { props._id ?
        <div className="icon-container">
          <i className="fa fa-trash fa-lg remove" aria-hidden="true" onClick={(event) => {event.preventDefault(); props.handleDeleteForm(props.deleteForm, props._id)}}></i>
        </div>
        : null
      }
      <input
        className="input-basic title"
        value={props.name}
        onChange={ (event) => props.handleUpdateForm(props.updateFormValues, 'name', event.target.value)}
        onKeyDown={ (event) => {
          if (event.which === 13 || event.keyCode === 13) {
            event.preventDefault();
            props.handleFormSave(props.saveForm, props._id)
          }
        }}
        placeholder='Form Name'
      />
    </form>
  );
};

FormTemplate.propTypes = {
  handleUpdateForm: React.PropTypes.func,
  handleFormSave: React.PropTypes.func,
  handleDeleteForm: React.PropTypes.func,
  saveForm: React.PropTypes.func,
  deleteForm: React.PropTypes.func,
  updateFormValues: React.PropTypes.func,
  name: React.PropTypes.string,
  _id: React.PropTypes.string,
  controls: React.PropTypes.array
};

export default FormTemplate;
