import React, { Component } from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import Genres from '../../eb-genres.json';
console.log(Genres);

const Filter = (p) => {
  return (
    <Accordion>
        {Genres.subcategories.map((genre, index) => {
          return (
            <Panel key={index}>
              {genre.name}
              <div className='switch'>
                <input className='switch-input' id='exampleSwitch' type='checkbox' name='exampleSwitch' />
              </div>
            </Panel>
          );
        })}
    </Accordion>
  );
};

export default Filter;
