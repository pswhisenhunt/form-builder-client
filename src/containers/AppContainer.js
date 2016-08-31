import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadForms, loadControls} from '../actions/app';
import {handleSetForms, handleSetControls} from '../handlers/shared';
import ListContainer from './ListContainer';
import FormContainer from './FormContainer';
import ControlContainer from './ControlContainer';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetForms = handleSetForms.bind(this);
    this.handleSetControls = handleSetControls.bind(this);
  }

  componentWillMount() {
    let boundLoadForms = bindActionCreators(loadForms, this.props.dispatch);
    let boundControlForms = bindActionCreators(loadControls, this.props.dispatch);
    this.handleSetForms(boundLoadForms);
    this.handleSetControls(boundControlForms);
  }

  render() {
    return (
      <main>
        { this.props.hasLoaded ?
          <span>
            <section>
                <ListContainer/>
            </section>
            <section>
                <FormContainer/>
            </section>
            <section>
              <ControlContainer/>
            </section>
          </span>
          :
          <section>Loading.....</section>
        }
      </main>
    );
  };
};

function mapStateToProps(state) {
  return {
    hasLoaded: state.app.hasLoaded
  };
};

export default connect(mapStateToProps)(AppContainer);
