import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import foundation from 'foundation-sites';
import { connector } from '../store/store';
import TopBar from '../components/topbar';
import SideBar from './sidebar';
import SideBarTwo from './sidebar2';
import Events from './events';
import GenreFilter from '../components/filters/genre-filter';
import 'foundation-sites/js/foundation.offCanvas';

class OffCanvas extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $(document).foundation();
  }
  render() {
    console.log(this.props);
    return (
      <div className='off-canvas-wrapper black'>
        <div className='off-canvas-wrapper-inner black' data-off-canvas-wrapper>
          <div className='off-canvas position-left black' id='offCanvas' data-off-canvas>

            {/* -- Close button --> */}
            <button className='close-button' aria-label='Close menu' type='button' data-close>
              <span aria-hidden='true'>&times;</span>
            </button>

            {/*  -- Menu -->  */}
            <ul className='vertical menu' data-drilldown>
              <GenreFilter />
              <li>
                <a>Item 2</a>
                <ul className='vertical menu'>
                  <li><a href='#'>Item 2A</a></li>
                  <li><a href='#'>Item 2B</a></li>
                  <li><a href='#'>Item 2C</a></li>
                  <li><a href='#'>Item 2D</a></li>
                  <li><a href='#'>Item 2E</a></li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
                <ul className='vertical menu'>
                  <li><a href='#'>Item 3A</a></li>
                  <li><a href='#'>Item 3B</a></li>
                  <li><a href='#'>Item 3C</a></li>
                  <li><a href='#'>Item 3D</a></li>
                  <li><a href='#'>Item 3E</a></li>
                </ul>
              </li>
            </ul>

          </div>

          <div className='off-canvas-content black' data-off-canvas-content>
            {/* -- Page content-- */}
            <TopBar />
            <Events />
          </div>
        </div>
      </div>
    );
  }
}

export default connector(OffCanvas);
