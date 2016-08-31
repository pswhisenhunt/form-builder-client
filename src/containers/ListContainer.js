import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setActiveForm} from '../actions/form';
import {handleSetActiveForm} from '../handlers/shared';
import ListTemplate from '../components/ListTemplate';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetActiveForm = handleSetActiveForm.bind(this);
  }

  render() {
    let boundSetActiveForm = bindActionCreators(setActiveForm, this.props.dispatch);
    return(
      <ListTemplate
        handleSetActive={this.handleSetActiveForm}
        list={this.props.forms}
        setActive={boundSetActiveForm}
      />
    );
  }
};

function mapStateToProps(state) {
  return  {
    forms: state.app.forms
  };
};

export default connect(mapStateToProps)(ListContainer);
