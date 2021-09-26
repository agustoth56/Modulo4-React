import '../css/Navbar.css'

function Navbar(){
    return(
        <nav className="navbar navbar-dark bg-dark bg-opacity-50 mb-3">
        <div className="container-fluid">
            <a className="navbar-brand" href="./">Modulo 4</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="text-white text-right"><i className="fas fa-user text-white "></i></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header bg-dark text-white">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Modulo 4</h5>
                <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body bg-dark">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="./"><i className="fas fa-home"></i>  Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./"><i className="fas fa-user"></i> Perfil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./"><i className="fas fa-heart"></i>  Favoritos</a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;