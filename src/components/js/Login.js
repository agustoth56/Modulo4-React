import '../css/SearchBar.css';

function Login(onLoginComplete){
    return(
            <div className="m-5">
                <div className="col-12 col-xs-8 col-sm-8 col-md-6 col-lg-5 col-xl-4 text-white">       
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control bg-dark text-white" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control bg-dark text-white" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" className="btn btn-danger w-100">Login</button>
                    </form>

                </div>
            </div>

    )
}

export default Login;