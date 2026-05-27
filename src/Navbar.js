import { Link } from "react-router-dom";

 

function Navbar() {
 
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top py-3">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold text-danger fs-4" to="/">
          CampusNest
        </Link>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center Search */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* <div className="mx-auto search-box d-none d-lg-block">
            <input
              type="text"
              className="form-control rounded-pill px-4"
              placeholder="Search PG, location..."
            />

          </div> */}
       
       


          {/* Right Menu */}
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/addListing">
               Add PG Listings
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link className="btn btn-outline-primary btn-sm" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-danger btn-sm" to="/signup">
                Sign Up
              </Link>
            </li> */}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;