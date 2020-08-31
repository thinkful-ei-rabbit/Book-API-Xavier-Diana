import React from 'react';
import Search from './Search';

const Filter = (props) => {
    return ( 
        <div>
            <label htmlFor="print-type">Print Type:</label>
            <select className="print-type" id="print-type" name="print-type">
                <option></option>
            </select>
            <label htmlFor="book-type">Book Type:</label>
            <select className="book-type" id="book-type" name="book-type">
                <option></option>
            </select>
        </div>
     );
}
 
export default Filter;
