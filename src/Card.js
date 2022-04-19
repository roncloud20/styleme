import React from 'react';
// import nifemi from './nifemi.jpeg'; 
import { IconContext } from 'react-icons';
import { FaHeart, FaBookmark, FaPlus, FaShare} from 'react-icons/fa'; 
import 'tachyons';

const Card = ({id, stylename, likes, shares, imageUrl}) => {
    return (
      <IconContext.Provider value={{size: '25px' }}>
        <div className="Card grow pa3 bw3 shadow-5" style={{ backgroundImage:`url(${imageUrl})` }}>
          <div className='CardDetails'>
            <span className="Stylename">{stylename}</span>
            <span className="StyleCat">{stylename}</span>
          </div>
          <div className='CardLinks'>
            <li className="Likes"><FaHeart/> <br/>{likes}</li>
            <li className="Add"><FaBookmark /> </li>
            <li className="Add"><FaShare /> <br/> {shares} </li>
            <li className="Add"><FaPlus /> </li>
          </div>
        </div>
      </IconContext.Provider>
    )
}

export default Card;