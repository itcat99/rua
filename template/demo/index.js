import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import template from '../index';

class App extends Component {
  render() {
    return <template />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
