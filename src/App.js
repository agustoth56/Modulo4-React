import './App.css';
import Navbar from './components/js/Navbar';
import SearchBar from './components/js/SearchBar';
import PostList from './components/js/PostList';
import Loading from './components/js/Loading';
import Profile from './components/js/Profile';
import React from 'react';
import posts from './components/data/posts.json';

class App extends React.Component {
  state = {
    posts: [],
    section: 'posts'
  };

  changePage(section){
    this.setState({section})
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({posts})
    },3000);
  }

  render(){
    return (
      <div className="App">
        <Navbar onChange={(section) => this.changePage(section)}/>
        <div className="container">
          {this.state.section === 'user' ? 
          (<Profile user={posts}/>) :
          (this.state.posts.length > 0 ? (<PostList posts={this.state.posts}/>) : (<Loading/>))}
          
        </div>
      </div>
    );
  }
}

export default App;
