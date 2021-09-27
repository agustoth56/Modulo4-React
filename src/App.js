import './App.css';
import Navbar from './components/js/Navbar';
import PostList from './components/js/PostList';
import Loading from './components/js/Loading';
import Profile from './components/js/Profile';
import SearchBar from './components/js/SearchBar';
import React from 'react';
import posts from './components/data/posts.json';

class App extends React.Component {
  state = {
    posts: [],
    section: 'posts',
    search: '',
  };

  changePage(section){
    this.setState({section})
  }

  findSearch(search){
    this.setState({search});
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({posts})
    },3000);
  }
  
  render(){
    return (
      <div className="App">
        {/* seria lo mismo si solo utilizo una funcion, pero como el ejercicio dice 2 props llamadas onLogoClick y onProfileClick lo hice de esta forma... */}
        <Navbar 
          onProfileClick={(section) => this.changePage(section)} 
          onLogoClick={(section) => this.changePage(section)}
        />
          {
            this.state.section === 'user' ? (
              <div className="container">
                <Profile user={posts}/>
              </div>
            ) : (
              this.state.posts.length > 0 ? (
                <div className="container">
                  <SearchBar 
                    search={this.state.search} 
                    onSearch={(search) => this.findSearch(search)}
                  />
                  <PostList 
                    posts={this.state.posts} 
                    search={this.state.search}
                  />
                </div>
              ) : (
                <Loading/>
              )
            )
          }
      </div>
    );
  }
}

export default App;
