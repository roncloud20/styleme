import React from 'react';
import { FaSearch } from 'react-icons/fa';
import 'tachyons';

const SearchBox = ({ searhfield, searchChange }) => {
    return (
        <div className='SearchNav'>
            <input 
                // className='pa3 ba b--green bg-lighter-blue'
                type="text" 
                placeholder="Search for styles" 
                onChange={searchChange} 
            />
            |
            <FaSearch />
        </div>
    );
}

export default SearchBox;

// className='pa2'