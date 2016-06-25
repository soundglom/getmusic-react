import React, { Component } from 'react';
import TopBar from '../components/topbar';

export default class Landing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='landing'>
        <div className='off-canvas-wrapper'>
          <div className='off-canvas-wrapper-inner' data-off-canvas-wrapper>
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

            <div className='off-canvas-content' data-off-canvas-content>
              {/* -- Page content-- */}
              <TopBar />
              <h1 >Landing Page</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
