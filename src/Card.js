import React from 'react';
import nifemi from './nifemi.jpeg';  
import 'tachyons';

const Card = ({id, styleName, likes}) => {
    return (
        <div className="Card grow pa3 bw3 shadow-5" style={{ backgroundImage:`url(${nifemi})` }}>
          <li className="Likes"><span>&hearts;</span> {likes}</li>
          <li className="Add"><div>+ Use</div> </li>
          <li className="Style-name">{styleName}</li>
        </div>
    )
}

export default Card;