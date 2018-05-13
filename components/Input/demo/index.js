import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from '../index';

class App extends Component {
  render() {
    return <Input value="hahah" />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
