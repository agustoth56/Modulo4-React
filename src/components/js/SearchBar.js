import '../css/SearchBar.css';

function SearchBar(){
    return(
        <div className="">
            <div className="row mb-3 justify-content-center">
                <div className="col-12 col-xs-8 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <input type="text" className="form-control bg-dark text-white" id="formGroupExampleInput" placeholder="Search"/>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;