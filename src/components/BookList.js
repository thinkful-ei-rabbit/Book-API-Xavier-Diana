import React, { Component } from 'react';
import Book from './Book';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            books: [],
            error: null,
            filter: '',
            isLoaded: false,
            printType: '',
            searchTerm: ''
         }
    }

    componentDidMount() {
        let API = 'AIzaSyDQwj4Z2owkpVy1DTy8n_nZFJAzmJbNW-0';
        let query= 'fiction';
        let BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API}`;
        fetch(BASE_URL)
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result)
              this.setState({
                isLoaded: true,
                books: result.books
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render() { 
        return ( 
            <Book />
         );
    }
}
 
export default BookList;
