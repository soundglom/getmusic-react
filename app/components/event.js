import React, { Component } from 'react';
import _ from 'lodash';

export default (p) => {
  return (
    <div className="media-object stack-for-small" id={p.id}>
      <div className="media-object-section">
        <div className="thumbnail">
          <img src={!p.logo ? 'https://goo.gl/xMhwMm' : p.logo.url} />
        </div>
      </div>
      <div className="media-object-section">
        <h4>{p.name.text}</h4>
        <p>{p.description.text}</p>
      </div>
    </div>    
  )
}
