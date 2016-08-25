import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {TableTemplate} from './TableTemplate';

class TableContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('inside table container...', this.props);
    return(
      <TableTemplate
        {...this.props}
      />
    );
  };
};

TableContainer.propTypes = {
  forms: React.PropTypes.array || []
};

function mapStateToProps(state) {
  return {
    forms: state.forms
  };
};

export default connect(mapStateToProps)(TableContainer);
