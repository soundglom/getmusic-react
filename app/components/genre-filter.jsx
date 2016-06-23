import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Accordion, Panel } from 'react-bootstrap';
import genres from '../../eb-genres.json';
import { connector, store } from '../store/store';

const { string, func, object, shape } = PropTypes;

class GenreFilter extends Component {
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
    // console.log('Event:', event.target.textContent);
    // console.log('Props: ', this.props);
    let genre = event.target.textContent;

    this.props.filterEventsAction(genre, 'genre', this.props);
    this.forceUpdate();
  }
  render() {
    return (
      <Accordion>
        {this.renderGenres()}
      </Accordion>
    );
  }
}

GenreFilter.propTypes = {
  genre: shape({
    name: string
  }),
  filterEventsAction: func
};

export default connector(GenreFilter);
