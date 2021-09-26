import './App.css';
import Navbar from './components/js/Navbar';
import SearchBar from './components/js/SearchBar';
import PostList from './components/js/PostList';
import Posts from './components/data/posts.json';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <SearchBar/>
        <PostList posts={Posts}/>
      </div>
    </div>
  );
}

export default App;
