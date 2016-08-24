import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setFormName, saveFormBase} from '../actions';
import {handleFormNameChange, handleFormSave} from '../handlers';
import FormBaseTemplate from './FormBaseTemplate';

class FormBaseContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormNameChange = handleFormNameChange.bind(this);
    this.handleFormSave = handleFormSave.bind(this);
  }
  render() {
    let boundActionSetFormName = bindActionCreators(setFormName, this.props.dispatch);
    let boundActionSaveForm = bindActionCreators(saveFormBase, this.props.dispatch);
    return (
      <FormBaseTemplate
        {...this.props}
        setFormName={boundActionSetFormName}
        saveFormBase={boundActionSaveForm}
        handleFormNameChange={this.handleFormNameChange}
        handleFormSave={this.handleFormSave}
      />
    );
  }
};

FormBaseContainer.propTypes = {
  name: React.PropTypes.string,
  dispatch: React.PropTypes.func.isRequired,
  controls: React.PropTypes.array,
  saved: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
  _id: React.PropTypes.string
};

function mapStateToProps(state) {
  return {
    name: state.formBaseReducer.name,
    controls: state.formBaseReducer.controls,
    saved: state.formBaseReducer.saved,
    _id: state.formBaseReducer._id
  };
};

export default connect(mapStateToProps)(FormBaseContainer);
