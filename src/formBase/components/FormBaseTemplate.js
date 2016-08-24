import React from 'react';

const FormBaseTemplate = (props) => {
  return (
    <form className="form">
      { props.saved ?
        <span>
          <i className="fa fa-trash fa-lg remove" aria-hidden="true" onClick={(event) => {event.preventDefault(); props.handleDeleteForm(props.deleteForm, props._id)}}></i>
          <i className="fa fa-check-circle fa-lg success" aria-hidden="true"></i>
        </span>
        : null
      }
      <input
        className="base-name"
        value={props.name}
        onChange={ (event) => props.handleFormNameChange(props.setFormName, event.target.value) }
        onBlur={ () => props.handleFormSave(props.saveFormBase, props._id, props.name, props.controls)}
        onKeyDown={ (event) => {
          if (event.which === 13 || event.keyCode === 13) {
            event.preventDefault();
            props.handleFormSave(props.saveFormBase, props._id, props.name, props.controls)
          }
        }}
        placeholder='Form Name'
      />
    </form>
  );
};

FormBaseTemplate.propTypes = {
  handleFormNameChange: React.PropTypes.func.isRequired,
  handleFormSave: React.PropTypes.func.isRequired,
  handleDeleteForm: React.PropTypes.func.isRequired,
  setFormName: React.PropTypes.func.isRequired,
  saveFormBase: React.PropTypes.func.isRequired,
  deleteForm: React.PropTypes.func.isRequired,
  name: React.PropTypes.string,
  _id: React.PropTypes.string
};

export default FormBaseTemplate;
