import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/Css/HeaderCss/Header.css'; // Assuming the styles are still needed
import '../../assets/Css/slickslider.css';
import '../../assets/Css/aos.css';
import '../../assets/Css/nice-select.css';
import '../../assets/Css/utily.css';

const Navbar = ({ auth, logout }) => {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);
  const [isSearchBoxVisible, setSearchBoxVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };

  const toggleSearchBox = () => {
    setSearchBoxVisible(!isSearchBoxVisible);
  };

  return (
    <header>
      <div id="vl-header-sticky" className="vl-header-area3 header-tranperent">
        <div className="container header3-bg">
          <div className="row align-items-center">
            {/* Logo Section */}
            <div className="col-lg-2 col-md-6 col-6">
              <div className="vl-logo">
                <Link to="/" className="header1-logo-block">
                  <img
                    src="https://html.vikinglab.agency/advicx/assets/img/logo/tes3-logo.png"
                    alt="logo"
                  />
                </Link>
                <Link to="/" className="header1-logo-white">
                  <img src="assets/img/logo/white-logo.png" alt="white logo" />
                </Link>
              </div>
            </div>

            {/* Main Navigation */}
            <div className="col-lg-7 d-none d-lg-block">
              <div className="vl-main-menu text-center">
                <nav className="vl-mobile-menu-active">
                  <ul
                    className={`nav-links ${
                      isMobileNavVisible ? 'mobile-nav-active' : ''
                    }`}
                  >
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Right Section (Search and Auth) */}
            <div className="col-lg-3 col-md-6 col-6">
              <div className="vl-header1-right d-none d-lg-flex">
                <div className="vl-search-top">
                  <button onClick={toggleSearchBox} className="search-open-btn">
                    <i className="fa-regular fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
              <div className="vl-header-action-item d-block d-lg-none">
                <button
                  onClick={toggleMobileNav}
                  type="button"
                  className="vl-offcanvas-toggle"
                >
                  <i className="fa-duotone fa-solid fa-bars-staggered"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Authentication Buttons */}
          <div className="row mt-3">
            <div className="col-12">
              <ul className="nav justify-content-end">
                {!auth?.user ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/user-login">
                        User Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/user-signup">
                        User Signup
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin-login">
                        Admin Login
                      </Link>
                    </li>
                  </>
                ) : auth.role === 'admin' ? (
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin-dashboard">
                      Admin Dashboard
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                      User Dashboard
                    </Link>
                  </li>
                )}
                {auth?.user && (
                  <li className="nav-item">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Search Box */}
      {isSearchBoxVisible && (
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button onClick={toggleSearchBox} className="close-search">
            &times;
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
