import '../css/SearchBar.css';


function SearchBar({search, onSearch}){
    
    
    return(
        <div className="">
            <div className="row mb-3 justify-content-center">
                <div className="col-12 col-xs-8 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <input 
                        type="text" 
                        className="form-control bg-dark text-white" 
                        onKeyPress={(event) => {
                                if(event.key === 'Enter'){
                                    onSearch(event.target.value)
                                }
                              }
                        } 
                        id="formGroupExampleInput" 
                        placeholder="Search posts by user/decription"
                        defaultValue={search}/>
                </div>
            </div>
        </div>
    )
}


export default SearchBar;