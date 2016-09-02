import React from 'react';

const ControlTemplate = (props) => {
  return (
    <form className="form" onKeyDown={ (event) => { if (event.which === 13 || event.keyCode === 13) {
            event.preventDefault();
            props.handleSaveControl(props.saveControl, props._id)
          }
        }}
      >
      { props.saved ?
        <span>
          <i className="fa fa-trash fa-lg remove" aria-hidden="true" onClick={(event) => {event.preventDefault(); props.handleDeleteControl(props.deleteControl, props._id)}}></i>
          <i className="fa fa-check-circle fa-lg success" aria-hidden="true"></i>
        </span>
        : null
      }
      <input
        className="base-name"
        value={props.name}
        onChange={ (event) => props.handleUpdateControl(props.updateControlValues, 'name', event.target.value)}
        placeholder="Control Name"
      />
      <input
        className="base-name"
        value={props.type}
        onChange={ (event) => props.handleUpdateControl(props.updateControlValues, 'type', event.target.value)}
        placeholder="Control Type"
      />
      <input
        className="base-name"
        value={props.htmlClass}
        onChange={ (event) => props.handleUpdateControl(props.updateControlValues, 'htmlClass', event.target.value)}
        placeholder="Control Class"
      />
      <input
        className="base-name"
        value={props.htmlId}
        onChange={ (event) => props.handleUpdateControl(props.updateControlValues, 'htmlId', event.target.value)}
        placeholder="Control Class"
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
  saveControl: React.PropTypes.func,
  updateControlValues: React.PropTypes.func,
  deleteControl: React.PropTypes.func
};

export default ControlTemplate;
