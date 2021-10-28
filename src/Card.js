import React from 'react';
// import nifemi from './nifemi.jpeg';  
import 'tachyons';

const Card = (props) => {
  const {id, styleName, likes, imageUrl} = props;
    return (
        <div className="Card grow pa3 bw3 shadow-5" key={id} style={{ backgroundImage:`url(${imageUrl})` }}>
          <li className="Likes"><span>&hearts;</span> {likes}</li>
          <li className="Add"><div>+ Use</div> </li>
          <li className="Style-name">{styleName}</li>
        </div>
    )
}

export default Card;