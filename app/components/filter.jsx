import React, { Component } from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import genres from '../../eb-genres.json';
import { connector, store } from '../store/store';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleClick = this.handleClick.bind(this);
  }
  renderGenres() {
    return genres.subcategories.map((genre, index) => {
      return (
        <Panel key={index} onClick={this.handleClick}>
          <h3>{genre.name}</h3>
        </Panel>
      );
    });
  }
  handleClick(event) {
    console.log('Event:', event.target.textContent);
    console.log('Props: ', this.props);
    let genre = event.target.textContent;

    store.dispatch({ type: 'FILTER_EVENTS', payload: { genre, state: this.props } });
  }
  render() {
    return (
      <Accordion>
        {this.renderGenres()}
      </Accordion>
    );
  }
}

export default connector(Filter);
