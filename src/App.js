import './App.css';
import Navbar from './components/js/Navbar';
import SearchBar from './components/js/SearchBar';
import PostList from './components/js/PostList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <SearchBar/>
        <PostList/>
      </div>
    </div>
  );
}

export default App;
