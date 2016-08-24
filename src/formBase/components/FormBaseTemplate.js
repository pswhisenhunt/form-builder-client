import React from 'react';

const FormBaseTemplate = (props) => {
  let parentProps = props.parent;
  return (
    <form>
      <input
        defaultValue={props.name}
        onChange={ (event) => props.setFormName(event.target.value) }
        onBlur={ () => props.saveFormBase(props)}
        placeholder='Form Name'
      />
      { props.saved ? <span>Saved!</span> : null }
    </form>
  );
};

FormBaseTemplate.propTypes = {
  setFormName: React.PropTypes.func.isRequired,
  saveFormBase: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired
};

export default FormBaseTemplate;
