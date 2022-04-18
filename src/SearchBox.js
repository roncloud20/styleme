import React from 'react';

const SearchBox = ({ searhfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lighter-blue'
                type="search" 
                placeholder="Search for styles" 
                onChange={searchChange} 
            />
        </div>
    );
}

export default SearchBox;