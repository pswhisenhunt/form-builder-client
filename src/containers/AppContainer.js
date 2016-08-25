import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadForms} from '../actions/app';
import {handleSetForms} from '../handlers/shared';
import TableContainer from './TableContainer';
import FormContainer from './FormContainer';

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    let boundLoadForms = bindActionCreators(loadForms, this.props.dispatch);
    handleSetForms(boundLoadForms);
  }

  render() {
    return (
      <main>
        <section>
            <TableContainer/>
        </section>
        <section>
            <FormContainer/>
        </section>
      </main>
    );
  };
};

function mapStateToProps(state) {
  return {
    forms: state.app.forms,
    activeForm: state.app.activeForm
  };
};

export default connect(mapStateToProps)(AppContainer);
