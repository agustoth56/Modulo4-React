import '../css/SearchBar.css';

function Loading(){
    return(
            <div className="row mb-3 mt-5 justify-content-center ">
                <div className="col-12 col-xs-8 col-sm-8 col-md-6 col-lg-5 col-xl-4 text-center">    
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="text-light mt-3">
                        <span>Loading...</span>
                    </div>
                </div>
            </div>

    )
}

export default Loading;