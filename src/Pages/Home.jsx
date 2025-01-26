import React, { useState } from 'react';
import Navbar from '../Layout/Navbar/Navbar';
import Footer from '../Layout/Footer/Footer';
import '../assets/Css/HeaderCss/Header.css'
import About from '../Components/About';
import '../assets/Css/aos.css'
import '../assets/Css/nice-select.css'
import '../assets/Css/utily.css'
import Work from '../Components/work';
import CaseStudy from '../Components/CaseStudy';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from '../Components/Sidebar';

const Home = ({ auth, logout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar visibility

  // Function to toggle sidebar visibility
  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <>
    <div>

      {/* Navbar with auth and logout */}
      <Navbar auth={auth} logout={logout} />

      {/* Pass the state and toggle function to Sidebar */}
      {/* <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}

      {/* Main Content */}
      <div className="hero1 bg-cover _relative">
        <div className="hero1-sliders slick-initialized slick-slider">
          <div className="slick-list draggable">
            <div className="slick-track" style={{ opacity: 1, width: '1354px' }}>
              <div
                className="hero1-single-slider overflow-hidden _relative slick-slide"
                style={{
                  backgroundImage: 'url("assets/img/bg/hero1-bg.jpg")',
                  width: '677px',
                  position: 'relative',
                  left: '0px',
                  top: '0px',
                  zIndex: 998,
                  opacity: 0,
                  transition: 'opacity 500ms',
                }}
                data-slick-index="0"
                aria-hidden="true"
                tabIndex="0"
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="heading mt-50 md:mt-100 sm:mt-100 _relative z-9">
                        <span className="sub-title text-18 leading-18 flex white1 uppercase mb-20 font-medium">
                          <img src="assets/img/icons/span1.svg" alt="" /> Delivering Results That Matter
                        </span>
                        <h1
                          className="text-56 md:text-40 sm:text-40 leading64 inline-block white1 font-semibold text-anime-style-3"
                          style={{ perspective: '400px' }}
                        >
                          <div className="split-line" style={{ display: 'block', textAlign: 'start', position: 'relative' }}>
                            <div style={{ position: 'relative', display: 'inline-block' }}>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>U</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>n</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>l</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>o</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>c</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>k</div>
                            </div>
                            <div style={{ position: 'relative', display: 'inline-block' }}>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>T</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>h</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>e</div>
                            </div>
                            <div style={{ position: 'relative', display: 'inline-block' }}>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>F</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>u</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>t</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>u</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>r</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>e</div>
                            </div>
                            <div style={{ position: 'relative', display: 'inline-block' }}>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>O</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>f</div>
                            </div>
                          </div>
                          <div className="split-line" style={{ display: 'block', textAlign: 'start', position: 'relative' }}>
                            <div style={{ position: 'relative', display: 'inline-block' }}>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>B</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>u</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>s</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>i</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>n</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>e</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>s</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>s</div>
                            </div>
                            <div style={{ position: 'relative', display: 'inline-block' }}>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>C</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>o</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>n</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>s</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>u</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>l</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>t</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>i</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>n</div>
                              <div style={{ position: 'relative', display: 'inline-block', opacity: 1 }}>g</div>
                            </div>
                          </div>
                        </h1>
                        <p className="mt-16 text-18 leading-26 inline-block white1">
                          We specialize in providing tailored consulting services that <br /> drive success and transformation for businesses of all sizes.
                        </p>
                        <div className="button mt-30">
                          <a className="theme-btn1" href="service.html" tabIndex="0">
                            <span className="text">Schedule A Consultation</span>
                            <span className="arrow-all">
                              <span className="arrow1">
                                <i className="fa-regular fa-arrow-right" />
                              </span>
                              <span className="arrow2">
                                <i className="fa-regular fa-arrow-right" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="all-images _relative">
                        <div className="circle-area">
                          <div className="circle-arrow">
                            <a href="service.html" tabIndex="0">
                              <img src="assets/img/icons/hero1-circle-arrow.svg" alt="" />
                            </a>
                          </div>
                          <div className="circle-bg round-circle">
                            <img src="assets/img/shapes/hero1-circle-bg.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-image">
                  <img src="https://html.vikinglab.agency/advicx/assets/img/hero/hero1-slider-image1.png" alt="" />
                </div>
                <div className="main-image-shape">
                  <img src="assets/img/shapes/hero1-shape.png" alt="" />
                </div>
              </div>

              <div
                className="hero1-single-slider overflow-hidden _relative slick-slide slick-current slick-active"
                style={{
                  backgroundImage: 'url("https://html.vikinglab.agency/advicx/assets/img/bg/hero1-bg.jpg")',
                  width: '677px',
                  position: 'relative',
                  left: '-677px',
                  top: '0px',
                  zIndex: 1000,
                  opacity: 1,
                  transition: 'opacity 500ms',
                }}
                data-slick-index="1"
                aria-hidden="false"
                tabIndex="-1"
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="heading mt-50 md:mt-100 sm:mt-100 _relative z-9">
                        <span className="sub-title text-18 leading-18 flex white1 uppercase mb-20 font-medium">
                          <img src="assets/img/icons/span1.svg" alt="" /> Delivering Results That Matter
                        </span>
                        <h1 className="text-56 md:text-40 sm:text-40 leading64 inline-block white1 font-semibold">
                          Unlock The Future Of Business Consulting
                        </h1>
                        <p className="mt-16 text-18 leading-26 inline-block white1">
                          We specialize in providing tailored consulting services that <br /> drive success and transformation for businesses of all sizes.
                        </p>
                        <div className="button mt-30">
                          <a className="theme-btn1" href="service.html" tabIndex="-1">
                            <span className="text">Schedule A Consultation</span>
                            <span className="arrow-all">
                              <span className="arrow1">
                                <i className="fa-regular fa-arrow-right" />
                              </span>
                              <span className="arrow2">
                                <i className="fa-regular fa-arrow-right" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="all-images _relative">
                        <div className="circle-area">
                          <div className="circle-arrow">
                            <a href="service.html" tabIndex="-1">
                              <img src="assets/img/icons/hero1-circle-arrow.svg" alt="" />
                            </a>
                          </div>
                          <div className="circle-bg round-circle">
                            <img src="https://html.vikinglab.agency/advicx/assets/img/shapes/hero1-circle-bg.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-image">
                  <img src="https://html.vikinglab.agency/advicx/assets/img/hero/hero1-slider-image1.png" alt="" />
                </div>
                <div className="main-image-shape">
                  <img src="assets/img/shapes/hero1-shape.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero1-arrow-buttons">
          <button className="tes2-prev-arrow slick-arrow">
            <i className="fa-solid fa-angle-left" />
          </button>
          <button className="tes2-next-arrow slick-arrow">
            <i className="fa-solid fa-angle-right" />
          </button>
        </div>
      </div>
      {/* Example Card */}
      
    </div>
    <About />

    {/* work */}
    <Work />

    {/* CaseStudy */}

    <CaseStudy />
      {/* Footer */ }
  <Footer />
    </>
  );
};

export default Home;
