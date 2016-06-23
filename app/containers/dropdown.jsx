import React, { Component } from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import GenreFilter from '../components/genre-filter';
import TimeFilter from '../components/filters/time-filter';

class DropDown extends Component {
  render () {
    return (
      <div id='drop-down'>
        <Accordion>
          <Panel header='Genres' eventKey='1'><GenreFilter /></Panel>
          <Panel header='Times' eventKey='2'><TimeFilter /></Panel>
        </Accordion>
      </div>
    );
  }
}

export default DropDown;
