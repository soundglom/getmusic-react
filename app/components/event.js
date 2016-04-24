import React, { Component } from 'react';
import _ from 'lodash';
import { connector } from '../store/store'

// console.log(Data)

// export default class Event extends Component {
//   constructor(props) {
//     super(props);
//   }
//   searchEvents() {

//     // let searchEvents = this.props.events.filter((event) => { 
//     //   `${event.name.text} ${event.description.text}`.toUpperCase()
//     //   .indexOf(this.props.searchEventsReducer.searchEventsQuery.toUpperCase()) >= 0)
//     // })
//   }
//   render() {
//     return <div id="events">
//       {Data.events.map((event) => {
//         return (
          
//         )
//       })}
//     </div>
//   }
// }

// export default connector(Event);


export default (p) => {
  return (
    <div className="media-object stack-for-small" id={p.id}>
      <div className="media-object-section">
        <div className="thumbnail">
          <img src={p.logo.url} />
        </div>
      </div>
      <div className="media-object-section">
        <h4>{p.name.text}</h4>
        <p>{p.description.text}</p>
      </div>
    </div>    
  )
}
