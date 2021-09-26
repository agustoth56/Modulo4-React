import '../css/Navbar.css'

function Navbar({onChange}){
    return(
        <nav className="navbar navbar-dark bg-dark bg-opacity-50 mb-3">
        <div className="container-fluid">
            {/* <a className="navbar-brand" href="#" onClick={()=> {onChange('posts')}}>Logo</a> */}
            <button className="navbar-brand btn btn-black" onClick={()=> {onChange('posts')}}><i className="fas fa-home"></i> Logo</button>
            <button className="navbar-toggler" onClick={()=> {onChange('user')}}>
                <span className="text-white text-right"><i className="fas fa-user text-white "></i></span>
            </button>
        </div>
        </nav>
    )
}

export default Navbar;