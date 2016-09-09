import React from 'react';

const InputTemplate = (props) => {
  return (
    <input
      className={props.classname}
      value={props.value}
      onChange={ (event) => props.handleUpdate(props.update, props.id, props.name, event.target.value)}
      placeholder={props.placeholder}
    />
  );
};

InputTemplate.propTypes = {
  classname: React.PropTypes.string,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  handleUpdate: React.PropTypes.func,
  update: React.PropTypes.func,
  name: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  id: React.PropTypes.string
};

export default InputTemplate;
