import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveControl, updateControlValues, deleteControl, addOptions} from '../actions/control';
import {handleSaveControl, handleUpdateControl, handleDeleteControl, handleAddOptions} from '../handlers/control';
import ControlTemplate from '../components/ControlTemplate';

class ControlContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSaveControl = handleSaveControl.bind(this);
    this.handleUpdateControl = handleUpdateControl.bind(this);
    this.handleDeleteControl = handleDeleteControl.bind(this);
    this.handleAddOptions = handleAddOptions.bind(this);
    this.boundUpdateControl = bindActionCreators(updateControlValues, this.props.dispatch);
    this.boundSaveControl = bindActionCreators(saveControl, this.props.dispatch);
    this.boundDeleteControl = bindActionCreators(deleteControl, this.props.dispatch);
    this.boundAddOptions = bindActionCreators(addOptions, this.props.dispatch);
  }

  componentDidUpdate(prevProps) {
    if (this.props._id === prevProps._id) {
      if (this.props.options.length !== prevProps.options.length) {
        this.handleSaveControl(this.boundSaveControl, prevProps._id);
      }
    }
  };
  render() {
    return (
      <ControlTemplate
        {...this.props}
        handleSaveControl={this.handleSaveControl}
        handleDeleteControl={this.handleDeleteControl}
        handleUpdateControl={this.handleUpdateControl}
        handleAddOptions={this.handleAddOptions}
        saveControl={this.boundSaveControl}
        updateControlValues={this.boundUpdateControl}
        deleteControl={this.boundDeleteControl}
        addOptions={this.boundAddOptions}
      />
    );
  };
};

function mapStateToProps(state) {
  return {
    _id: state.control._id,
    name: state.control.name,
    type: state.control.type,
    options: state.control.options,
    position: state.control.position,
    isCustom: state.control.isCustom,
    htmlClass: state.control.htmlClass,
    htmlId: state.control.htmlId,
    saved: state.control.saved
  };
};

export default connect(mapStateToProps)(ControlContainer);
