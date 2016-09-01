import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveControl, updateControlValues, deleteControl} from '../actions/control';
import {handleSaveControl, handleUpdateControl, handleDeleteControl} from '../handlers/control';
import ControlTemplate from '../components/ControlTemplate';

class ControlContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSaveControl = handleSaveControl.bind(this);
    this.handleUpdateControl = handleUpdateControl.bind(this);
    this.handleDeleteControl = handleDeleteControl.bind(this);
  }
  render() {
    let boundUpdateControl = bindActionCreators(updateControlValues, this.props.dispatch);
    let boundSaveControl = bindActionCreators(saveControl, this.props.dispatch);
    let boundDeleteControl = bindActionCreators(deleteControl, this.props.dispatch);
    return (
      <ControlTemplate
        {...this.props}
        handleSaveControl={this.handleSaveControl}
        handleDeleteControl={this.handleDeleteControl}
        handleUpdateControl={this.handleUpdateControl}
        saveControl={boundSaveControl}
        updateControl={boundUpdateControl}
        deleteControl={boundDeleteControl}
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
