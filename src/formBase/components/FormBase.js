import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions';

class FormBase extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>Hello {this.props.name}!</div>
    );
  }
};

FormBase.propTypes = {
  name: React.PropTypes.string,
  dispatch: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    name: state.formBaseReducer.name
  };
};


export default connect(mapStateToProps)(FormBase);
