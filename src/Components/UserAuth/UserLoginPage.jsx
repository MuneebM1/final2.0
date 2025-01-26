import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/Css/Authcss/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserLoginPage = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy credentials for demonstration
    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";
    const userEmail = "user@example.com";
    const userPassword = "user123";

    if (email === adminEmail && password === adminPassword) {
      // Admin login
      login("Admin", "admin");
      navigate("/AdminDashboard");
    } else if (email === userEmail && password === userPassword) {
      // User login
      login("User", "user");
      navigate("/UserInterface");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="auth-bg 100-vh">
      <div className="bg-overlay bg-light"></div>
      <div className="account-pages">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-11">
              <div className="auth-full-page-content d-flex min-vh-100 py-sm-5 py-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100 py-0 py-xl-4">
                    <div className="text-center mb-5">
                      <a href="/">
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
                              <h5 className="mb-0">Welcome Back!</h5>
                              <p className="text-muted mt-2">
                                Sign in to continue to Invoika.
                              </p>
                            </div>

                            <div className="mt-4">
                              <form
                                className="auth-input"
                                onSubmit={handleLogin}
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
                                      id="password-input"
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

                                <div className="form-check form-check-primary fs-16 py-2">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="remember-check"
                                  />
                                  <div className="float-end">
                                    <a
                                      href="/auth-resetpassword"
                                      className="text-muted text-decoration-underline fs-14"
                                    >
                                      Forgot your password?
                                    </a>
                                  </div>
                                  <label
                                    className="form-check-label fs-14"
                                    htmlFor="remember-check"
                                  >
                                    Remember me
                                  </label>
                                </div>

                                <div className="mt-2">
                                  <button
                                    className="btn btn-primary w-100"
                                    type="submit"
                                  >
                                    Log In
                                  </button>
                                </div>

                                <div className="mt-4 text-center">
                                  <div className="signin-other-title">
                                    <h5 className="fs-15 mb-3 title">
                                      Sign in with
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
                                    Don't have an account?{" "}
                                    <a
                                      href="/user-signup"
                                      className="fw-medium text-primary text-decoration-underline"
                                    >
                                      Signup now
                                    </a>
                                  </p>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="d-flex h-100 bg-auth align-items-end">
                            <div className="p-lg-5 p-4"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginPage;
