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
    let el = event.target;
    let genre = el.textContent;

    if (el.classList.contains('filter-selected')) {
      el.classList.remove('filter-selected');
    } else {
      el.classList.add('filter-selected');
    }

    this.props.filterGenresAction(genre, 'genre', this.props);
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
  filterGenresAction: func
};

export default connector(GenreFilter);
