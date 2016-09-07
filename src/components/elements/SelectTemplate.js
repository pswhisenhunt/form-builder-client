import React from 'react';
import {findDOMNode} from 'react-dom';

const SelectTemplate = (props) => {
  let ops = [];
  if (props.options) {
    props.options.map((op, i) => {
      ops.push(
        <div key={op + '-' + i}>{op}</div>
      );
    });
  };
  return (
    <div>
      <label>Values to select from...</label>
      <input name={props.name} onChange={(event) => {
        props.handleUpdate(props.update, 'option', event.target.value);
      }}/>
      <button onClick={(event) => {event.preventDefault(); props.handleAdd(props.submitOptions)}}>Add</button>
      <div>{ops}</div>
    </div>
  );
};


export default SelectTemplate;
