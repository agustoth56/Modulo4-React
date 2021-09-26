import './App.css';
import Navbar from './components/js/Navbar';
import SearchBar from './components/js/SearchBar';
import PostList from './components/js/PostList';
import Loading from './components/js/Loading';
import React from 'react';
import posts from './components/data/posts.json';

class App extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({posts})
    },3000);
  }

  render(){
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          <SearchBar/>
          {this.state.posts.length > 0 ? (<PostList posts={this.state.posts}/>) : (<Loading/>)}
        </div>
      </div>
    );
  }
}

export default App;
