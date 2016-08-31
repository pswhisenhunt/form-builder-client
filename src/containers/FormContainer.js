import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {saveForm, deleteForm, updateFormValues} from '../actions/form';
import {handleFormSave, handleDeleteForm, handleUpdateForm} from '../handlers/form';
import FormTemplate from '../components/FormTemplate';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSave = handleFormSave.bind(this);
    this.handleDeleteForm = handleDeleteForm.bind(this);
    this.handleUpdateForm = handleUpdateForm.bind(this);
  }

  render() {
    let boundActionUpdateForm = bindActionCreators(updateFormValues, this.props.dispatch);
    let boundActionSaveForm = bindActionCreators(saveForm, this.props.dispatch);
    let boundActionDeleteForm = bindActionCreators(deleteForm, this.props.dispatch);
    return (
      <FormTemplate
        {...this.props}
        saveForm={boundActionSaveForm}
        deleteForm={boundActionDeleteForm}
        updateFormValues={boundActionUpdateForm}
        handleFormSave={this.handleFormSave}
        handleDeleteForm={this.handleDeleteForm}
        handleUpdateForm={this.handleUpdateForm}
      />
    );
  }
};

FormContainer.propTypes = {
  name: React.PropTypes.string,
  _id: React.PropTypes.string,
  controls: React.PropTypes.array,
  saved: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string])
};

function mapStateToProps(state) {
  return {
    name: state.form.name,
    _id: state.form._id,
    controls: state.form.controls,
    saved: state.form.saved
  };
};

export default connect(mapStateToProps)(FormContainer);
