import React from 'react';
import {render} from 'react-dom';
import FormBase from './formBase';

require("../assets/styles/app.scss");

class App extends React.Component {
  render () {
    return <FormBase name="World"/>;
  }
}

render(<App/>, document.getElementById('app'));
