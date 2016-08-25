import React from 'react';

export const TableTemplate = (props) => {
  return (
    <ul>
      {props.forms.map((form) => {
        return (
          <li key={form._id} onClick={(event) => {
            event.preventDefault();
            console.log(form)
            props.handleSetActiveForm(props.setActiveForm, form);
          }}>
          {form.name}
          </li>
        );
      })}
    </ul>
  );
};

TableTemplate.propTypes = {
  forms: React.PropTypes.array,
  setActiveForm: React.PropTypes.func.isRequired,
  handleSetActiveForm: React.PropTypes.func.isRequired
};
