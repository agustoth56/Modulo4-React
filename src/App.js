import './App.css';
import React from 'react';

import posts from './components/data/posts.json';
import users from './components/data/three-points.postman_collection.json';

import Navbar from './components/js/Navbar';
import PostList from './components/js/PostList';
import Loading from './components/js/Loading';
import Profile from './components/js/Profile';
import SearchBar from './components/js/SearchBar';
import Login from './components/js/Login';

class App extends React.Component {
  state = {
    posts: [],
    section: 'posts',
    search: '',
    loginOk: true,
  };

  changePage(section){
    this.setState({section})
  }

  findSearch(search){
    this.setState({search});
  }

  onLogin(loginOk){
    this.setState({loginOk});
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({posts})
    },3000);
  }
  
  render(){
    return (
      <div className="App">
        {
          this.state.loginOk === false ? (
            <div className="container">
              <Login onLoginComplete={(loginOk) => this.onLogin(loginOk)} />
            </div>
          ) : (
            <div>
              <Navbar 
                onProfileClick={(section) => this.changePage(section)} 
                onLogoClick={(section) => this.changePage(section)}
              />
              {
            this.state.section === 'user' ? (
              <div className="container">
                <Profile user={users}/>
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
          )
        }
        
        {/* seria lo mismo si solo utilizo una funcion, pero como el ejercicio dice 2 props llamadas onLogoClick y onProfileClick lo hice de esta forma... */}
        
          
      </div>
    );
  }
}

export default App;
