import React from 'react';
import BookList from './BookList';

const Book = (props) => {
    
    return ( 
        <div>
            <h3>{props.book.volumeInfo.title}</h3>
            <p></p>
        </div>
     );
}
 
export default Book;