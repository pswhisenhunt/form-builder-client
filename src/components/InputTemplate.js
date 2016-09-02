import React from 'react';

const InputTemplate = (props) => {
  let inputs = [];
  for (let key in props.obj) {
    inputs.push(
      <div>
        <label>{key}</label>
        <input
          key={key + '-' + props.obj[key]}
          className="base-name"
          onChange={ (event) => props.handleUpdate(props.update, key, event.target.value)}
          onKeyDown={ (event) => {
            if (event.which === 13 || event.keyCode === 13) {
              event.preventDefault();
              props.handleSave(props.save, props._id)
            }
          }}
          placeholder={props.obj[key]}
        />
      </div>
    );
  };
  return (
    <div>{inputs}</div>
  );
};

export default InputTemplate;
