import React from 'react';
import {findDOMNode} from 'react-dom';

const SelectTemplate = (props) => {
  let ops = [];
  if (props.options) {
    props.options.map((op, i) => {
      ops.push(
        <div key={op + '-' + i} className="select-option">
          <i className="fa fa-trash fa-lg remove" aria-hidden="true" onClick={(event) => {event.preventDefault()}}></i>
          <span>{op}</span>
        </div>
      );
    });
  };
  return (
    <div>
      <label className="label">Add Select Options</label>
      <input name={props.name} className="input-select" onChange={(event) => {
        props.handleUpdate(props.update, props.id, 'option', event.target.value);
      }}/>
      <i className="fa fa-plus-circle fa-lg add" aria-hidden="true" onClick={(event) => {event.preventDefault(); props.handleAdd(props.submitOptions, props.id)}}></i>
      <div>
        {ops}
      </div>
    </div>
  );
};


export default SelectTemplate;
