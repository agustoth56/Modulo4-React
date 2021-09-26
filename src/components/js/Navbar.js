import '../css/Navbar.css'

function Navbar({onProfileClick, onLogoClick}){
    return(
        <nav className="navbar navbar-dark bg-dark bg-opacity-50 mb-3">
        <div className="container-fluid">
            <button className="navbar-brand btn btn-black" onClick={()=> {onLogoClick('posts')}}><i className="fas fa-home"></i> Logo</button>
            <button className="navbar-toggler" onClick={()=> {onProfileClick('user')}}>
                <span className="text-white text-right"><i className="fas fa-user text-white "></i></span>
            </button>
        </div>
        </nav>
    )
}

export default Navbar;