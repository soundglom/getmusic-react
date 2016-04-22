import React, { Component } from 'react';
import 'script!jquery'
import foundation from 'foundation-sites';

import './stylesheets/main.scss';

import TopBar from './components/topbar';

export default class App extends Component {
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




