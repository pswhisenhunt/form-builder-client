import React from 'react';

const CheckboxTemplate = (props) => {
  return (
    <div>
      <label>Save to Custom?</label>
      { props.value ?
        <input type="checkbox"
          checked
          onChange={ () => props.handleUpdate(props.update, props.name, false)}
        />
        :
        <input type="checkbox"
          onChange={ () => props.handleUpdate(props.update, props.name, true)}
        />
      }
    </div>
  );
};

CheckboxTemplate.propTypes ={
  name: React.PropTypes.string,
  value: React.PropTypes.bool,
  handleUpdate: React.PropTypes.func,
  updateControlValues: React.PropTypes.func
};

export default CheckboxTemplate;
