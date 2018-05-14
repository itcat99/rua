import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, theme = 'default', prefix, ...restProps } = this.props;

    return (
      <span className={`rua-input rua-input--${theme}`}>
        {prefix ? <span className="rua-input-prefix">{prefix}</span> : null}
        <input type="text" defaultValue={value} {...restProps} />
      </span>
    );
  }
}

export default Input;
