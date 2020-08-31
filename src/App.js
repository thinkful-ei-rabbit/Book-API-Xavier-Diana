import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Filter from './components/Filter';
import BookList from './components/BookList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="App">
        <Header />
        <Search />
        <Filter />
        <BookList />
      </div>
     );
  }
}
 
export default App;


