import React from "react";
// import cmrl from "./image/cmrl.png"

const Navbar = () => {
  return <div>
  <div style={{width: '100%', height: '30px',backgroundColor:"#4C62B8"}} className=""></div>

  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <div className="row">
    <div className="col-4">
    <img height="50px" src={"https://chennaimetrorail.org/wp-content/themes/CMRL/images/govt-of-india.png"} alt="logo"/>
    </div>
    <div className="col-4">
      {/* <img height="60px" src={cmrl} alt="logo"/> */}
    </div>
    <div className="col-4">
    <img height="50px" src={"https://chennaimetrorail.org/wp-content/themes/CMRL/images/govt-of-tn.png"} alt="logo"/>
    </div>
    </div>
    <h5>CHENNAI METRO RAIL LIMITED</h5>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://chennaimetrorail.org/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  </div>;
};

export default Navbar;
