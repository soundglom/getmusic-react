import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'script!jquery'
import foundation from 'foundation-sites';

import './stylesheets/main.scss';

import TopBar from './components/topbar';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
      </div>
    )
  }
  componentDidMount() {
    $(document).foundation();
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));


