import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <input className="rua-input" type="text" value={this.props.value} />;
  }
}

export default Input;
