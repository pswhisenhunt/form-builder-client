import React from 'react';
import InputTemplate from './elements/InputTemplate';
import SelectTemplate from './elements/SelectTemplate';
import CheckboxTemplate from './elements/CheckboxTemplate';

const ControlTemplate = (props) => {
  return (
    <form className="form" onKeyDown={ (event) => { if (event.which === 13 || event.keyCode === 13) {
            event.preventDefault();
            props.handleSaveControl(props.saveControl, props._id)
          }
        }}
      >
      { props._id ?
        <div className="icon-container">
          <i className="fa fa-trash fa-lg remove" aria-hidden="true" onClick={(event) => {event.preventDefault(); props.handleDeleteControl(props.deleteControl, props._id)}}></i>
          <i className="fa fa-plus-circle fa-lg add" aria-hidden="true" onClick={(event) => {event.preventDefault()}}></i>
          Add To Form
        </div>
        : null
      }
      <InputTemplate
        classname="input-basic title"
        value={props.name}
        name="name"
        handleUpdate={props.handleUpdateControl}
        update={props.updateControlValues}
        placeholder="Control Name"
      />
      <CheckboxTemplate
        name='isCustom'
        value={props.isCustom}
        handleUpdate={props.handleUpdateControl}
        update={props.updateControlValues}
      />
      <InputTemplate
        classname="input-basic"
        value={props.type}
        name="type"
        handleUpdate={props.handleUpdateControl}
        update={props.updateControlValues}
        placeholder="Control Type"
      />
      <InputTemplate
        classname="input-basic"
        value={props.htmlClass}
        name="htmlClass"
        handleUpdate={props.handleUpdateControl}
        update={props.updateControlValues}
        placeholder="HTML Class"
      />
      <InputTemplate
        classname="input-basic"
        value={props.htmlId}
        name="htmlId"
        handleUpdate={props.handleUpdateControl}
        update={props.updateControlValues}
        placeholder="HTML id"
      />
      <SelectTemplate
        options={props.options}
        name='options'
        handleUpdate={props.handleUpdateControl}
        update={props.updateControlValues}
        handleAdd={props.handleAddOptions}
        submitOptions={props.addOptions}
      />
    </form>
  );
};

ControlTemplate.propTypes = {
  editableValues: React.PropTypes.object,
  _id: React.PropTypes.string,
  name: React.PropTypes.string,
  type: React.PropTypes.string,
  options: React.PropTypes.array,
  position: React.PropTypes.number,
  isCustom: React.PropTypes.bool,
  htmlClass: React.PropTypes.string,
  htmlId: React.PropTypes.string,
  saved: React.PropTypes.bool,
  handleSaveControl: React.PropTypes.func,
  handleDeleteControl: React.PropTypes.func,
  handleUpdateControl: React.PropTypes.func,
  handleAddOptions: React.PropTypes.func,
  addOptions: React.PropTypes.func,
  saveControl: React.PropTypes.func,
  updateControlValues: React.PropTypes.func,
  deleteControl: React.PropTypes.func
};

export default ControlTemplate;
