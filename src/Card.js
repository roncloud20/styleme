import React from 'react';
// import nifemi from './nifemi.jpeg';  
import 'tachyons';

const Card = ({id, stylename, likes, imageUrl}) => {
    return (
        <div className="Card grow pa3 bw3 shadow-5" style={{ backgroundImage:`url(${imageUrl})` }}>
          <li className="Likes">
            <span>&hearts;</span> <br/>
            {likes}
          </li>
          <li className="Add"><div>+</div> </li>
          <li className="Style-name">{stylename}</li>
        </div>
    )
}

export default Card;