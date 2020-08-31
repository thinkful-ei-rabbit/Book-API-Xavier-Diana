import React from 'react';
import fetchBooks from '../api'

const Book = (props) => {
    return ( 
        <div>
            <h3>{props.title}</h3>
            <p></p>
        </div>
     );
}
 
export default Book;