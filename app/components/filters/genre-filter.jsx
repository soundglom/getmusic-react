import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Accordion, Panel } from 'react-bootstrap';
import { connector, store } from '../../store/store';
import genres from '../../../eb-genres.json';

const { string, func, object, shape } = PropTypes;

class GenreFilter extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  renderGenres() {
    return genres.subcategories.map((genre, index) => {
      return (
        <Panel
          key={index}
          className='filter'
          header={genre.name}
          onClick={this.handleClick}
          eventKey={index.toString()}
        />
      );
    });
  }
  handleClick(event) {
    let genre = event.target.textContent;

    this.props.filterEventsAction(genre, 'genre', this.props);
  }
  render() {
    return (
      <Accordion children={this.renderGenres()} />
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
