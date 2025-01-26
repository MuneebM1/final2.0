import React from "react";

const HomeHeader = () => {
  return (
    <div className="header-area">
      <div className="top-header-area">
        <div className="container-fluid">
          <div className="top-header-inner">
            <div className="row align-items-center">
              {/* Left Section */}
              <div className="col-lg-4 col-md-4">
                <div className="top-header-left-side">
                  <div className="d-flex align-items-center">
                    <ul className="top-header-social-links list-unstyled d-flex align-items-center mb-0">
                      <li className="me-2">Follow us:</li>
                      <li className="me-2">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                          <i className="ri-facebook-fill"></i>
                        </a>
                      </li>
                      <li className="me-2">
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                          <i className="ri-twitter-fill"></i>
                        </a>
                      </li>
                      <li className="me-2">
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                          <i className="ri-linkedin-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                          <i className="ri-instagram-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="col-lg-8 col-md-8">
                <ul className="top-header-contact-info list-unstyled d-flex justify-content-end mb-0">
                  <li className="me-4">
                    <i className="ri-time-line me-2"></i>
                    <span>SUN - THU:</span> 8:00 AM - 9:00 PM
                  </li>
                  <li>
                    <i className="ri-map-pin-2-line me-2"></i>
                    <span>OFFICE:</span> 1847 Morris Street, Texas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
