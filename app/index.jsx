import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h2> Testing 123 </h2>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

console.log(React);