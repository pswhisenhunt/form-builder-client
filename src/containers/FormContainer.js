import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  saveForm, deleteForm, updateFormValues, updateFormControl, deleteFormControl,
  addOptionsToFormControl
} from '../actions/form';
import {handleFormSave, handleDeleteForm, handleUpdateForm, handleUpdateFormControl,
  handleDeleteFormControl, handleAddFormControlOption
} from '../handlers/form';
import FormTemplate from '../components/FormTemplate';
import ControlTemplate from '../components/ControlTemplate';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSave = handleFormSave.bind(this);
    this.handleDeleteForm = handleDeleteForm.bind(this);
    this.handleUpdateForm = handleUpdateForm.bind(this);
    this.handleUpdateFormControl = handleUpdateFormControl.bind(this);
    this.handleDeleteFormControl = handleDeleteFormControl.bind(this);
    this.handleAddFormControlOption = handleAddFormControlOption.bind(this);
    this.boundActionUpdateForm = bindActionCreators(updateFormValues, this.props.dispatch);
    this.boundActionSaveForm = bindActionCreators(saveForm, this.props.dispatch);
    this.boundActionDeleteForm = bindActionCreators(deleteForm, this.props.dispatch);
    this.boundActionUpdateFormControl = bindActionCreators(updateFormControl, this.props.dispatch);
    this.boundActionDeleteFormControl = bindActionCreators(deleteFormControl, this.props.dispatch);
    this.boundActionAddFormControlOptions = bindActionCreators(addOptionsToFormControl, this.props.dispatch);
  }

  render() {
    let controls = this.props.controls.map((ctrl) => {
      return (
        <ControlTemplate
          key={ctrl._id}
          isNested={true}
          {...ctrl}
          handleUpdateControl={this.handleUpdateFormControl}
          updateControlValues={this.boundActionUpdateFormControl}
          handleDeleteControl={this.handleDeleteFormControl}
          deleteControl={this.boundActionDeleteFormControl}
          handleAddOptions={this.handleAddFormControlOption}
          addOptions={this.boundActionAddFormControlOptions}
        />
      );
    });
    return (
      <div>
        <FormTemplate
          {...this.props}
          saveForm={this.boundActionSaveForm}
          deleteForm={this.boundActionDeleteForm}
          updateFormValues={this.boundActionUpdateForm}
          handleFormSave={this.handleFormSave}
          handleDeleteForm={this.handleDeleteForm}
          handleUpdateForm={this.handleUpdateForm}
        />
        {controls}
        <button
          className="btn save"
          onClick={ (event) => {
            event.preventDefault();
            this.handleFormSave(this.boundActionSaveForm, this.props._id)
          }}
        >
        Save
        </button>
      </div>
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
