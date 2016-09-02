import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadForms, loadControls} from '../actions/app';
import {setActiveForm} from '../actions/form';
import {setActiveControl} from '../actions/control';
import {handleSetForms, handleSetControls, handleSetActiveForm, handleSetActiveControl} from '../handlers/shared';
import FormContainer from './FormContainer';
import ControlContainer from './ControlContainer';
import ListTemplate from '../components/ListTemplate';


class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetForms = handleSetForms.bind(this);
    this.handleSetControls = handleSetControls.bind(this);
    this.handleSetActiveForm = handleSetActiveForm.bind(this);
    this.handleSetActiveControl = handleSetActiveControl.bind(this);
  }

  componentWillMount() {
    let boundLoadForms = bindActionCreators(loadForms, this.props.dispatch);
    let boundControlForms = bindActionCreators(loadControls, this.props.dispatch);
    this.handleSetForms(boundLoadForms);
    this.handleSetControls(boundControlForms);
  }

  render() {
    let boundSetActiveForm = bindActionCreators(setActiveForm, this.props.dispatch);
    let boundSetActiveControl = bindActionCreators(setActiveControl, this.props.dispatch);
    return (
      <main>
        { this.props.hasLoaded ?
          <span>
            <section>
              <ListTemplate
                handleSetActive={this.handleSetActiveForm}
                list={this.props.forms}
                setActive={boundSetActiveForm}
              />
            </section>
            <section>
              <FormContainer/>
            </section>
            <section>
              <ListTemplate
                handleSetActive={this.handleSetActiveControl}
                list={this.props.controls}
                setActive={boundSetActiveControl}
              />
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
    hasLoaded: state.app.hasLoaded,
    forms: state.app.forms,
    controls: state.app.controls
  };
};

export default connect(mapStateToProps)(AppContainer);
