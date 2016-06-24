/*eslint no-useless-constructor: 0*/
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Search from './search';
import { connector } from '../store/store';

const { func } = PropTypes;

class TopBar extends Component {
  constructor (props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchEventsAction(this.props);
  }
  render () {
    return (
      <div className='top-bar' id='example-menu'>
        <div className='top-bar-left'>
          <ul className='dropdown menu' data-dropdown-menu>
            <li className='menu-text'>Site Title</li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/results' >All Events</Link></li>
          </ul>
        </div>
        <Search />
      </div>
    );
  }
}

TopBar.propTypes = {
  fetchEventsAction: func,
  initialStateAction: func
};

export default connector(TopBar);
