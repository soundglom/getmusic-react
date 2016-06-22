import React, { Component } from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import Filter from '../components/filter';

class DropDown extends Component {
  render () {
    return (
      <div id='drop-down'>
        <Accordion>
          <Panel header='Genres' eventKey='1'><Filter /></Panel>
        </Accordion>
      </div>
    );
  }
}

export default DropDown;
