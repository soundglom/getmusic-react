import React, { Component } from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import GenreFilter from '../components/filters/genre-filter';
import TimeFilter from '../components/filters/time-filter';

class DropDown extends Component {
  render () {
    return (
      <div id='drop-down'>
        <Accordion>
          <Panel header='GENRES' eventKey='1'><GenreFilter /></Panel>
          <Panel header='TIMES' eventKey='2'><TimeFilter /></Panel>
        </Accordion>
      </div>
    );
  }
}

export default DropDown;
