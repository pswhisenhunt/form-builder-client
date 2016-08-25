import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setFormName, saveFormBase, deleteForm} from '../actions/form';
import {handleFormNameChange, handleFormSave, handleDeleteForm} from '../handlers/form';
import FormTemplate from '../components/FormTemplate';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormNameChange = handleFormNameChange.bind(this);
    this.handleFormSave = handleFormSave.bind(this);
    this.handleDeleteForm = handleDeleteForm.bind(this);
  }
  render() {
    let boundActionSetFormName = bindActionCreators(setFormName, this.props.dispatch);
    let boundActionSaveForm = bindActionCreators(saveFormBase, this.props.dispatch);
    let boundActionDeleteForm = bindActionCreators(deleteForm, this.props.dispatch);
    return (
      <FormTemplate
        {...this.props}
        setFormName={boundActionSetFormName}
        saveFormBase={boundActionSaveForm}
        deleteForm={boundActionDeleteForm}
        handleFormNameChange={this.handleFormNameChange}
        handleFormSave={this.handleFormSave}
        handleDeleteForm={this.handleDeleteForm}
      />
    );
  }
};

FormContainer.propTypes = {
  name: React.PropTypes.string,
  saved: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string])
};

function mapStateToProps(state) {
  return {
    name: state.form.name,
    saved: state.form.saved
  };
};

export default connect(mapStateToProps)(FormContainer);
