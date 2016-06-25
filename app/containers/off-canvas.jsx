import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import foundation from 'foundation-sites';
import { connector } from '../store/store';
import TopBar from '../components/topbar';
import SideBar from './sidebar';
import SideBarTwo from './sidebar2';
import Events from './events';
import 'foundation-sites/js/foundation.offCanvas';

class OffCanvas extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $(document).foundation();
  }
  render() {
    return (
      <div className='off-canvas-wrapper black'>
        <div className='off-canvas-wrapper-inner black' data-off-canvas-wrapper>
          <div className='off-canvas position-left black' id='offCanvas' data-off-canvas>

            {/* -- Close button --> */}
            <button className='close-button' aria-label='Close menu' type='button' data-close>
              <span aria-hidden='true'>&times;</span>
            </button>

            {/*  -- Menu -->  */}
            <ul className='vertical menu'>
              <li><a href='#'>Foundation</a></li>
              <li><a href='#'>Dot</a></li>
              <li><a href='#'>ZURB</a></li>
              <li><a href='#'>Com</a></li>
              <li><a href='#'>Slash</a></li>
              <li><a href='#'>Sites</a></li>
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
