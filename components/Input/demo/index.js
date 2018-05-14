import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from '../index';
import '../Theme.scss';

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <h1> Basic </h1>
          <Input defaultValue={'Basic'} />
        </section>

        <section>
          <h1>prefix</h1>
          <Input prefix="name:" />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
