import '../css/SearchBar.css';

function SearchBar(){
    return(
        <div className="mb-3">
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Search"/>
        </div>
    )
}

export default SearchBar;