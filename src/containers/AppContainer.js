import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadForms, loadControls} from '../actions/app';
import {setActiveForm, addControl} from '../actions/form';
import {setActiveControl} from '../actions/control';
import {handleSetForms, handleSetControls, handleSetActiveForm, handleSetActiveControl, handleAddControl} from '../handlers/shared';
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
    this.handleAddControl = handleAddControl.bind(this);
    this.boundSetActiveForm = bindActionCreators(setActiveForm, this.props.dispatch);
    this.boundSetActiveControl = bindActionCreators(setActiveControl, this.props.dispatch);
    this.boundAddControl = bindActionCreators(addControl, this.props.dispatch);
  }

  componentWillMount() {
    let boundLoadForms = bindActionCreators(loadForms, this.props.dispatch);
    let boundControlForms = bindActionCreators(loadControls, this.props.dispatch);
    this.handleSetForms(boundLoadForms);
    this.handleSetControls(boundControlForms);
  }

  render() {
    return (
      <main className="main">
        { this.props.hasLoaded ?
          <span>
            <section className="section list">
              <h1>Forms</h1>
              <ListTemplate
                handleSetActive={this.handleSetActiveForm}
                list={this.props.forms}
                setActive={this.boundSetActiveForm}
              />
            </section>
            <section className="section form">
              <FormContainer/>
            </section>
            <section className="section list">
              <h1>Controls</h1>
              <ListTemplate
                handleSetActive={this.handleSetActiveControl}
                handleAddControl={this.handleAddControl}
                list={this.props.controls}
                setActive={this.boundSetActiveControl}
                addControl={this.boundAddControl}
                activeId={this.props.activeControlId}
              />
            </section>
            <section className="section form">
              <ControlContainer/>
            </section>
          </span>
          :
          <section className="section loading">
            <div className="spinner">
              Loading
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          </section>
        }
      </main>
    );
  };
};

function mapStateToProps(state) {
  return {
    hasLoaded: state.app.hasLoaded,
    forms: state.app.forms,
    controls: state.app.controls,
    activeControlId: state.control._id
  };
};

export default connect(mapStateToProps)(AppContainer);
