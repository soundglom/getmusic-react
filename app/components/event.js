import React, { Component } from 'react';
import _ from 'lodash';
import Data from '!json!../../data';

console.log(Data)

export default class Event extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <div id="events">
      {Data.events.map((event) => {
        return (
          <div key={event.id} className="media-object stack-for-small">
            <div className="media-object-section">
              <div className="thumbnail">
                <img src={event.logo.url} />
              </div>
            </div>
            <div className="media-object-section">
              <h4>{event.name.text}</h4>
              <p>{event.description.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  }
}




// _____________________________________

// return (
//       <div className="media-object stack-for-small">
//         <div className="media-object-section">
//           <div className="thumbnail">
//             <img src="https://img.evbuc.com/https%3A%2F%2Fimg.evbuc.com%2Fhttp%253A%252F%252Fcdn.evbuc.com%252Fimages%252F19537587%252F161195483713%252F1%252Foriginal.jpg%3Frect%3D0%252C0%252C1200%252C600%26s%3Dee48530b1442193e42bd0b0e5b9b7d94?h=200&w=450&s=d75db8bfbcc2a605d9dd4100bfb0e0a7" />
//           </div>
//         </div>
//         <div className="media-object-section">
//           <h4>Pink Moon Party</h4>
//           <p>Alta Cali \n\"Rising out of the Bay like a phoenix, Alta Cali is that one-in-a-million occurrence, a chance meeting that would go on to become a musical institution and foundation of a new genre of music, \"Rumba Esquina\", a highly combustible mélange of Spanish Rumba, Afro-Cuban, Pop, Soul, Hip-hop, and Flamenco, dance and song, that could have only happened in Alta California...</p>
//         </div>
//       </div>
//     )