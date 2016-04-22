import React, { Component } from 'react';
import 'script!jquery'
import foundation from 'foundation-sites';

import './stylesheets/main.scss';

import TopBar from './components/topbar';
import Event from './components/event';

export default class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Event />
      </div>
    )
  }
  componentDidMount() {
    $(document).foundation();
  }
}




