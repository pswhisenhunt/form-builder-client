import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions';
import {handleSetForms, handleSetActiveForm} from '../handlers';
import {TableTemplate} from './TableTemplate';

class TableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetActiveForm = handleSetActiveForm.bind(this);
  }

  componentWillMount() {
    let boundSetForms = bindActionCreators(actions.loadForms, this.props.dispatch);
    handleSetForms(boundSetForms);
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
    forms: state.tableReducer.forms
  };
};

export default connect(mapStateToProps)(TableContainer);
