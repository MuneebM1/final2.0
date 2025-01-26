import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/Css/Authcss/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const UserSignupPage = ({ login }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    // Dummy signup logic - replace with real backend logic
    if (email && username && password) {
      login(username, 'user');
      alert('Signup successful!');
      navigate('/user-interface'); // Navigate to the desired page
    } else {
      alert('Please fill all the fields.');
    }
  };

  return (
    <div className="account-pages">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-11">
            <div className="auth-full-page-content d-flex min-vh-100 py-sm-5 py-4">
              <div className="w-100">
                <div className="d-flex flex-column h-100 py-0 py-xl-4">
                  <div className="text-center mb-5">
                    <a href="#">
                      <span className="logo-lg">
                        <img
                          src="https://html.vikinglab.agency/advicx/assets/img/logo/tes3-logo.png"
                          alt="logo"
                          height="21"
                        />
                      </span>
                    </a>
                  </div>

                  <div className="card my-auto overflow-hidden">
                    <div className="row g-0">
                      <div className="col-lg-6">
                        <div className="p-lg-5 p-4">
                          <div className="text-center">
                            <h5 className="mb-0">Create New Account</h5>
                            <p className="text-muted mt-2">
                              Get your free Invoika account now
                            </p>
                          </div>

                          <div className="mt-4">
                            <form
                              onSubmit={(e) => e.preventDefault()}
                              className="auth-input"
                            >
                              <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  placeholder="Enter email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>

                              <div className="mb-3">
                                <label
                                  htmlFor="username"
                                  className="form-label"
                                >
                                  Username
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="username"
                                  placeholder="Enter username"
                                  value={username}
                                  onChange={(e) => setUsername(e.target.value)}
                                />
                              </div>

                              <div className="mb-2">
                                <label
                                  htmlFor="password"
                                  className="form-label"
                                >
                                  Password
                                </label>
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                  <input
                                    type="password"
                                    className="form-control pe-5 password-input"
                                    placeholder="Enter password"
                                    id="password"
                                    value={password}
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
                                  />
                                  <button
                                    className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                    type="button"
                                  >
                                    <i className="las la-eye align-middle fs-18"></i>
                                  </button>
                                </div>
                              </div>

                              <div className="fs-16 pb-2">
                                <p className="mb-0 fs-14 text-muted fst-italic">
                                  By registering you agree to the Invoika{' '}
                                  <a
                                    href="#"
                                    className="text-primary text-decoration-underline fst-normal fw-medium"
                                  >
                                    Terms of Use
                                  </a>
                                </p>
                              </div>

                              <div className="mt-2">
                                <button
                                  className="btn btn-primary w-100"
                                  onClick={handleSignup}
                                >
                                  Sign Up
                                </button>
                              </div>

                              <div className="mt-4 text-center">
                                <div className="signin-other-title">
                                  <h5 className="fs-15 mb-3 title">
                                    Create account with
                                  </h5>
                                </div>

                                <ul className="list-inline">
                                  <li className="list-inline-item">
                                    <a
                                      href="javascript:void(0)"
                                      className="social-list-item bg-primary text-white border-primary"
                                    >
                                      <i className="mdi mdi-facebook"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a
                                      href="javascript:void(0)"
                                      className="social-list-item bg-info text-white border-info"
                                    >
                                      <i className="mdi mdi-twitter"></i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a
                                      href="javascript:void(0)"
                                      className="social-list-item bg-danger text-white border-danger"
                                    >
                                      <i className="mdi mdi-google"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>

                              <div className="mt-4 text-center">
                                <p className="mb-0">
                                  Already have an account?{' '}
                                  <a
                                    href="/auth-signin"
                                    className="fw-medium text-primary text-decoration-underline"
                                  >
                                    Sign In
                                  </a>
                                </p>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="d-flex h-100 bg-auth align-items-end">
                          <div className="p-lg-5 p-4">
                            <div className="bg-overlay bg-primary"></div>
                            <div className="p-0 p-sm-4 px-xl-0 py-5">
                              <div
                                id="reviewcarouselIndicators"
                                className="carousel slide auth-carousel"
                                data-bs-ride="carousel"
                              >
                                {/* Carousel items omitted for brevity */}
                              </div>
                              {/* end review carousel */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  
                </div>
              </div>
            </div>
          </div>
          {/* end col */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </div>
  );
};

export default UserSignupPage;
