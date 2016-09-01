import React from 'react';

const ControlTemplate = (props) => {
  return (
    <form className="form">
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
        onChange={ (event) => props.handleUpdateControl(props.updateControl, 'name', event.target.value)}
        onKeyDown={ (event) => {
          if (event.which === 13 || event.keyCode === 13) {
            event.preventDefault();
            props.handleSaveControl(props.saveControl, props._id)
          }
        }}
        placeholder='Control Name'
      />
    </form>
  );
};

ControlTemplate.propTypes = {
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
  updateControl: React.PropTypes.func,
  deleteControl: React.PropTypes.func
};

export default ControlTemplate;
