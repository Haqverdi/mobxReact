import React, { Component } from 'react';
import './App.css';
import store from './stores/index';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  // handleLoadPost = () => {
  //   store.getPosts();
  // };
  // handleClearPost = () => {
  //   store.clearPosts();
  // };
  componentDidMount = () => {
    store.getPosts();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
