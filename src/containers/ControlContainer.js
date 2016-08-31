import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'react-redux';
import {ControlTemplate} from '../components/ControlTemplate';

class ControlContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <ControlTemplate
        {...this.props}
      />
    );
  };
};

ControlContainer.propTypes = {
  name: React.PropTypes.string,
  type: React.PropTypes.string,
  options: React.PropTypes.array,
  position: React.PropTypes.number,
  isCustom: React.PropTypes.bool,
  htmlClass: React.PropTypes.string,
  htmlId: React.PropTypes.string
};

function mapStateToProps(state) {
  return {
    name: state.control.name,
    type: state.control.type,
    options: state.control.options,
    position: state.control.position,
    isCustom: state.control.isCustom,
    htmlClass: state.control.htmlClass,
    htmlId: state.control.htmlId
  };
};

export default connect(mapStateToProps)(ControlContainer);
