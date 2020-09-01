import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Filter from './components/Filter';
import BookList from './components/BookList';
import './App.css';

class App extends Component {
 
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
    this.setState({isLoaded:true})
    fetch(BASE_URL)
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result)
          this.setState({
            isLoaded: false,
            books: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      )
  }

  render() { 
    return ( 
      <div className="App">
        <Header />
        <Search />
        <Filter />
        <BookList books={this.state.books} />
      </div>
     );
  }
}
 
export default App;


