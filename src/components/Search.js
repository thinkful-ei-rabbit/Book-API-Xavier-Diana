import React from 'react';

const Search = () => {

    

    return ( 
        <div>
            <label htmlFor="search-input"></label>
            <input className="search-input" type="text" name="search-input" id="search-input"></input>
            <button className="search-btn">Search</button>
        </div>
     );
}
 
export default Search;