import React from 'react';
import { FaSearch } from 'react-icons/fa';
import 'tachyons';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='SearchNav'>
            <input 
                // className='pa3 ba b--green bg-lighter-blue'
                type="text" 
                placeholder="Search for styles" 
                onChange={searchChange} 
            />
            |
            <button onClick={searchChange}>
                <FaSearch />
            </button>
        </div>
    );
}

export default SearchBox;

// className='pa2'