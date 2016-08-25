import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions/app';
import {handleSetForms, handleSetActiveForm} from '../handlers/shared';
import {TableTemplate} from '../components/TableTemplate';

class TableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetActiveForm = handleSetActiveForm.bind(this);
  }

  render() {
    let boundSetActiveForm = bindActionCreators(actions.setActiveForm, this.props.dispatch);
    return(
      <TableTemplate
        {...this.props}
        handleSetActiveForm={this.handleSetActiveForm}
        setActiveForm={boundSetActiveForm}
      />
    );
  };
};

TableContainer.propTypes = {
  forms: React.PropTypes.array || []
};

function mapStateToProps(state) {
  return {
    forms: state.app.forms
  };
};

export default connect(mapStateToProps)(TableContainer);
