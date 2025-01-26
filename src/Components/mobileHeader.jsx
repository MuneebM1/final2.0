import React, { useState } from 'react';

const mobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOffCanvas = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`vl-offcanvas vl-header-area1 ${isOpen ? 'open' : ''}`}>
                <div className="vl-offcanvas-wrapper">
                    <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-90">
                        <div className="vl-offcanvas-logo">
                            <a href="index.html" className="header1-logo-block">
                                <img src="assets/img/logo/header-logo1.png" alt="Logo" />
                            </a>
                            <a href="index.html" className="header1-logo-white">
                                <img src="assets/img/logo/white-logo.png" alt="White Logo" />
                            </a>
                        </div>
                        <div className="vl-offcanvas-close">
                            <button onClick={toggleOffCanvas} className="vl-offcanvas-close-toggle">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>

                    <div className="vl-offcanvas-menu d-lg-none mb-40">
                        <nav>
                            <ul>
                                <li className="has-dropdown">
                                    <a href="#">Home <span><i className="fa-solid fa-angle-down d-lg-inline d-none"></i></span></a>
                                    <div className="vl-mega-menu">
                                        <div className="vl-home-menu">
                                            <div className="row gx-3 row-cols-1 row-cols-md-1 row-cols-lg-5">
                                                {/* Map through demo items */}
                                                {[...Array(5)].map((_, index) => (
                                                    <div className="col" key={index}>
                                                        <div className="vl-home-thumb">
                                                            <div className="img1">
                                                                <img src={`assets/img/demo/demo${index + 1}.jpg`} alt={`Demo ${index + 1}`} />
                                                            </div>
                                                            <a href={`index${index + 1}.html`}>Business Consulting {index + 1}</a>
                                                            <div className="btn-area1">
                                                                <a className="theme-btn1" href={`index${index + 1}.html`}>
                                                                    <span className="text">Multi Page</span>
                                                                    <span className="arrow-all">
                                                                        <span className="arrow1"><i className="fa-regular fa-arrow-right"></i></span>
                                                                        <span className="arrow2"><i className="fa-regular fa-arrow-right"></i></span>
                                                                    </span>
                                                                </a>
                                                                <a className="theme-btn1" href={`single-index${index + 1}.html`}>
                                                                    <span className="text">One Page</span>
                                                                    <span className="arrow-all">
                                                                        <span className="arrow1"><i className="fa-regular fa-arrow-right"></i></span>
                                                                        <span className="arrow2"><i className="fa-regular fa-arrow-right"></i></span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <button className="vl-menu-close"><i className="fas fa-chevron-right"></i></button>
                                </li>

                                {/* Other menu items */}
                                <li className="has-dropdown"><a href="#">Pages <span><i className="fa-solid fa-angle-down d-lg-inline d-none"></i></span></a>
                                    <ul className="sub-menu">
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="team.html">Our Team</a></li>
                                        <li><a href="testimonial.html">Testimonials</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="error.html">404</a></li>
                                    </ul>
                                    <button className="vl-menu-close"><i className="fas fa-chevron-right"></i></button>
                                </li>

                                {/* More dropdown menu items */}
                                <li><a href="#">Services <span><i className="fa-solid fa-angle-down d-lg-inline d-none"></i></span></a>
                                    <ul className="sub-menu">
                                        <li><a href="service.html">Our Service</a></li>
                                        <li><a href="#" className="span-arrow">Service Details <span><i className="fa-solid fa-angle-right d-lg-block d-none"></i></span></a>
                                            <ul className="sub-menu menu1">
                                                <li><a href="service-details-left.html">Service Detals Left</a></li>
                                                <li><a href="service-details-right.html">Service Detals Right</a></li>
                                                <li><a href="service-details.html">Service Details</a></li>
                                            </ul>
                                        </button>
                                    </ul>
                                    <button className="vl-menu-close"><i className="fas fa-chevron-right"></i></button>
                                </li>
                                {/* ...Other menu items can be similarly converted */}

                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Contact Information */}
                    <div className="space20"></div>
                    <div className="vl-offcanvas-info">
                        <h4 className="black1 text-24 mb-30 leading-24 font-semibold">Contact Us</h4>
                        {[
                            { icon: 'footer1-icon1.svg', link: 'tel:+11234567890', text: '+1 123 456 7890' },
                            { icon: 'footer1-icon2.svg', link: '#', text: '421 Allen, Mexico 4233' },
                            { icon: 'footer1-icon3.svg', link: 'mailto:advicxconsult@com', text: 'advicxconsult@com' },
                            { icon: 'footer1-icon1.svg', link: 'tel:+11234567890', text: '+1 123 456 7890' },
                        ].map((contact, index) => (
                            <div key={index} className="single-contact flex align-items-center mt-6">
                                <div className="icon">
                                    <img src={`assets/img/icons/${contact.icon}`} alt={contact.text} />
                                </div>
                                <div className="text">
                                    <a href={contact.link} className="ml-10 gray2 inline-block p-10-0 text-18 leading-18 text _hover1 font-medium">
                                        {contact.text}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Social Media */}
                    <div className="space20"></div>
                    <div className="vl-offcanvas-social">
                        <h4 className="black1 text-24 mb-20 mt-20 leading-24 font-semibold">Follow Us</h4>
                        <div className="vl-copyright-social2 text-start mt-20">
                            {['facebook-f', 'instagram', 'linkedin-in', 'x-twitter'].map((icon, index) => (
                                <a key={index} href="#">
                                    <i className={`fa-brands fa-${icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            <div className={`vl-offcanvas-overlay ${isOpen ? 'open' : ''}`}></div>
        </>
    );
};

export default mobileHeader;
