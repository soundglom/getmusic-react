import React, { Component } from 'react';
import TopBar from '../components/topbar';

export default class Landing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='landing'>
        <TopBar />
        <h1>This is the landing page</h1>
      </div>
    );
  }
}

/* <li>
            <a>Item 5</a>
            <ul class='submenu menu vertical accordion' data-submenu='accordion'>
              <li class='accordion-item is-active' data-accordion-item>
                <a href='#' class='accordion-title'>Accordion 1</a>
                <div class='accordion-content' data-tab-content>
                  I would start
                </div>
              </li>
              <li class='accordion-item ' data-accordion-item>
                <a href='#' class='accordion-title">Accordion 2</a>
                <div class="accordion-content" data-tab-content>
                  I would start #2
                </div>
              </li>
              <li class="accordion-item " data-accordion-item>
                <a href="#" class="accordion-title">Accordion 3</a>
                <div class="accordion-content" data-tab-content>
                  I would start #3
                </div>
              </li>
            </ul>
          </li> */
