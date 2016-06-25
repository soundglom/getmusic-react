import React, { Component } from 'react';
import $ from 'jquery';
import foundation from 'foundation-sites';
import TopBar from '../components/topbar';
import 'semantic-ui/dist/components/form';
// import Foundation from 'foundation-sites';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { isRevealed: false };
    this.handleClick = this.handleClick.bind(this);
  }
  onComponentDidMount() {
    // const bar = $('#offCanvas').foundation();
    // bar.foundation();
  }
  handleClick(event, trigger) {
    $('#offCanvas').foundation();
    // console.log('I was clicked!');
    // console.log(bar.foundation());
    // this.setState({ isRevealed: !this.state.isRevealed });
    // console.dir($('#offCanvas').foundation('toggle', event, this.state.isRevealed));
  }
  render() {
    return (
      <div className='off-canvas-wrapper'>
        <div className='off-canvas-wrapper-inner' data-off-canvas-wrapper>
          <div className='off-canvas position-left' id='offCanvas' data-off-canvas>

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
            <h1 onClick={this.handleClick} data-toggle='offCanvas'>Landing Page</h1>
          </div>
        </div>
      </div>
    );
  }
}
