import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Accordion, Panel } from 'react-bootstrap';
import { connector, store } from '../../store/store';
import genres from '../../../eb-genres.json';

const { string, func, object, shape, array } = PropTypes;

class GenreFilter extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  renderGenres() {
    let genres = this.props.genreFilters;
    return genres.map((genre, index) => {
      return (
        <Panel
          key={index}
          className='filter'
          header={genre}
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
  genreFilters: array,
  filterEventsAction: func
};

export default connector(GenreFilter);
