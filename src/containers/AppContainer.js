import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadForms} from '../actions/app';
import {handleSetForms} from '../handlers/shared';
import ListContainer from './ListContainer';
import FormContainer from './FormContainer';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetForms = handleSetForms.bind(this);
  }

  componentWillMount() {
    let boundLoadForms = bindActionCreators(loadForms, this.props.dispatch);
    handleSetForms(boundLoadForms);
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
                <FormContainer />
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
