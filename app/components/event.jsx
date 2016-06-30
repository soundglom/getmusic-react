import React, { PropTypes } from 'react';

const { string, func, object, shape } = PropTypes;

const Event = (props) => {
  return (
    <div className='media-object stack-for-small' id={props.id}>
      <div className='media-object-section'>
        <div className='event-image-container'>
          <img className='event-img' src={!props.logo ? 'https://goo.gl/xMhwMm' : props.logo.url} />
        </div>
      </div>
      <div className='media-object-section event-text-container'>
        <h4 className='event-title'>{props.name.text}</h4>
        <p className='event-description'>{props.description.short}</p>
      </div>
    </div>
  );
};

Event.propTypes = {
  id: string.isRequired,
  logo: shape({
    url: string
  }),
  name: shape({
    text: string.isRequired
  }),
  description: shape({
    text: string,
    short: string
  })
};

export default Event;
