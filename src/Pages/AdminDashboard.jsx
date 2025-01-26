import React from "react";
import { useNavigate } from "react-router-dom";
import '../assets/Css/AdminCss/Admin.css'

const AdminDashboard = ({ logout }) => {
  const history = useNavigate();

  const handleLogout = () => {
    logout();
    history.push("/admin-login");
  };

  return (
    <>
      <header className="adminuiux-header">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid">
            <button
              className="btn btn-link btn-square sidebar-toggler"
              type="button"
              onclick="initSidebar()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu sidebar-svg"
              >
                <line x1={3} y1={12} x2={21} y2={12} />
                <line x1={3} y1={6} x2={21} y2={6} />
                <line x1={3} y1={18} x2={21} y2={18} />
              </svg>
            </button>{" "}
            <a className="navbar-brand" href="investment-dashboard.html">
              {/* <img data-bs-img="light" src="https://html.vikinglab.agency/advicx/assets/img/logo/tes3-logo.png" alt="" />{" "}
              <img data-bs-img="dark" src="https://html.vikinglab.agency/advicx/assets/img/logo/tes3-logo.png" alt="" /> */}
              <div className="">
                <span className="h4">
                  DEV<b>ZOX</b>
                </span>
                <p className="company-tagline">DEVZOX</p>
              </div>
            </a>
            <div
              className="collapse navbar-collapse right-in-device justify-content-center"
              id="header-navbar"
            >
              <ul className="navbar-nav mx-lg-3 mb-2 mb-md-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="investment-dashboard.html"
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="investment-portfolio.html">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="investment-transaction.html">
                    Transaction
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="investment-blogs.html">
                    News
                  </a>
                </li>
              </ul>
            </div>
            <div className="ms-auto">
              <button
                className="btn btn-link btn-square btn-icon btn-link-header"
                type="button"
                onclick="openSearch()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-search"
                >
                  <circle cx={11} cy={11} r={8} />
                  <line x1={21} y1={21} x2="16.65" y2="16.65" />
                </svg>
              </button>{" "}
              <button
                className="btn btn-link btn-square btnsunmoon btn-link-header"
                id="btn-layout-modes-dark-page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-sun sun mx-auto"
                >
                  <circle cx={12} cy={12} r={5} />
                  <line x1={12} y1={1} x2={12} y2={3} />
                  <line x1={12} y1={21} x2={12} y2={23} />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1={1} y1={12} x2={3} y2={12} />
                  <line x1={21} y1={12} x2={23} y2={12} />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-moon moon mx-auto"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </button>
              <div className="dropdown d-none d-sm-inline-block">
                <button
                  className="btn btn-link btn-square btn-icon btn-link-header dropdown-toggle no-caret"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-grid"
                  >
                    <rect x={3} y={3} width={7} height={7} />
                    <rect x={14} y={3} width={7} height={7} />
                    <rect x={14} y={14} width={7} height={7} />
                    <rect x={3} y={14} width={7} height={7} />
                  </svg>
                </button>
                <div className="dropdown-menu dropdown-menu-end width-300 pt-0 px-0">
                  <div className="bg-theme-1-space rounded py-3 mb-2 dropdown-dontclose text-center">
                    <p className="mb-0">Applications</p>
                    <p className="opacity-50 small">Make your app innovative</p>
                  </div>
                  <div className="px-2">
                    <div className="row g-0 text-center mb-2">
                      <div className="col-4">
                        <a
                          className="dropdown-item square-item"
                          href="app-finance.html"
                        >
                          <div className="avatar avatar-40 rounded mb-2">
                            <i className="bi bi-bank fs-4 mx-0" />
                          </div>
                          <p className="mb-0">Finance</p>
                          <p className="fs-12 opacity-50 mb-2">Accounting</p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="dropdown-item square-item"
                          href="app-network.html"
                        >
                          <div className="avatar avatar-40 rounded mb-2">
                            <i className="bi bi-globe fs-4 mx-0" />
                          </div>
                          <p className="mb-0">Network</p>
                          <p className="fs-12 opacity-50 mb-2">Stabilize</p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="dropdown-item square-item"
                          href="app-ecommerce.html"
                        >
                          <div className="avatar avatar-40 rounded mb-2">
                            <i className="bi bi-box fs-4 mx-0" />
                          </div>
                          <p className="mb-0">Inventory</p>
                          <p className="fs-12 opacity-50 mb-2">Assuring</p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="dropdown-item square-item"
                          href="app-project.html"
                        >
                          <div className="avatar avatar-40 rounded mb-2">
                            <i className="bi bi-folder fs-4 mx-0" />
                          </div>
                          <p className="mb-0">Project</p>
                          <p className="fs-12 opacity-50 mb-2">Management</p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="dropdown-item square-item"
                          href="app-social.html"
                        >
                          <div className="avatar avatar-40 rounded mb-2">
                            <i className="bi bi-people fs-4 mx-0" />
                          </div>
                          <p className="mb-0">Social</p>
                          <p className="fs-12 opacity-50 mb-2">Tracking</p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          className="dropdown-item square-item"
                          href="app-learning.html"
                        >
                          <div className="avatar avatar-40 rounded mb-2">
                            <i className="bi bi-journal-bookmark fs-4 mx-0" />
                          </div>
                          <p className="mb-0">Learning</p>
                          <p className="fs-12 opacity-50 mb-2">Make-easy</p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <a className="btn btn-link text-center" href="app-demo.html">
                      View all <i className="bi bi-arrow-right fs-14" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="dropdown d-none d-sm-inline-block">
                <button
                  className="btn btn-link btn-square btn-icon btn-link-header dropdown-toggle no-caret"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-translate" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item active" data-value="EN">
                      EN - English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" data-value="FR">
                      FR - French
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" data-value="CH">
                      CH - Chinese
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" data-value="HI">
                      HI - Hindi
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown d-inline-block">
                <button
                  className="btn btn-link btn-square btn-icon btn-link-header dropdown-toggle no-caret"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bell"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>{" "}
                  <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger p-1">
                    <small>9+</small>{" "}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end notification-dd sm-mi-95px">
                  <li>
                    <a className="dropdown-item p-2" href="#">
                      <div className="row gx-3">
                        <div className="col-auto">
                          <figure className="avatar avatar-40 rounded-circle bg-pink">
                            <i className="bi bi-gift text-white" />
                          </figure>
                        </div>
                        <div className="col">
                          <p className="mb-2 small">
                            Congratulation! Your property{" "}
                            <span className="fw-bold">#H10215</span> has reached 1000
                            views.
                          </p>
                          <span className="row">
                            <span className="col">
                              <span className="badge badge-light rounded-pill text-bg-warning small">
                                Directory
                              </span>
                            </span>{" "}
                            <span className="col-auto small opacity-75">1:00 am</span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item p-2" href="#">
                      <div className="row gx-3">
                        <div className="col-auto">
                          <figure className="avatar avatar-40 rounded-circle bg-success">
                            <i className="bi bi-patch-check text-white" />
                          </figure>
                        </div>
                        <div className="col">
                          <p className="mb-2 small">
                            Your property <span className="fw-bold">#H10215</span> is
                            published and live now.
                          </p>
                          <span className="row">
                            <span className="col">
                              <span className="badge badge-light rounded-pill text-bg-primary small">
                                System
                              </span>
                            </span>{" "}
                            <span className="col-auto small opacity-75">1:00 am</span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item p-2" href="#">
                      <div className="row gx-3">
                        <div className="col-auto">
                          <figure className="avatar avatar-40 rounded-circle bg-info">
                            <i className="bi bi-clipboard-check text-white" />
                          </figure>
                        </div>
                        <div className="col">
                          <p className="mb-2 small">
                            User <span className="fw-bold">Rahana</span> has updated{" "}
                            <span className="fw-bold">#H10215</span> property.
                          </p>
                          <span className="row">
                            <span className="col">
                              <span className="badge badge-light rounded-pill text-bg-success small">
                                team
                              </span>
                            </span>{" "}
                            <span className="col-auto small opacity-75">1:00 am</span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-item p-2">
                      <div className="row gx-3">
                        <div className="col-auto">
                          <figure className="avatar avatar-40 rounded-circle bg-warning">
                            <i className="bi bi-bell text-white" />
                          </figure>
                        </div>
                        <div className="col">
                          <p className="mb-2 small">
                            Your subscription going to expire soon. Please{" "}
                            <a href="profile-subscription.html">upgrade</a> to get
                            service interrupt free.
                          </p>
                          <p className="opacity-75 small">4 days ago</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="text-center">
                    <button
                      className="btn btn-link text-center"
                      onclick="notifcationAll()"
                    >
                      View all <i className="bi bi-arrow-right fs-14" />
                    </button>
                  </li>
                </ul>
              </div>
              <div className="dropdown d-inline-block">
                <a
                  className="dropdown-toggle btn btn-link btn-square btn-link-header style-none no-caret px-0"
                  id="userprofiledd"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  role="button"
                >
                  <div className="row gx-0 d-inline-flex">
                    <div className="col-auto align-self-center">
                      <figure
                        className="avatar avatar-28 rounded-circle coverimg align-middle"
                        style={{
                          backgroundImage:
                            'url("assets/img/modern-ai-image/user-6.jpg")'
                        }}
                      >
                        <img
                          src="assets/img/modern-ai-image/user-6.jpg"
                          alt=""
                          id="userphotoonboarding2"
                          style={{ display: "none" }}
                        />
                      </figure>
                    </div>
                  </div>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end width-300 pt-0 px-0 sm-mi-45px"
                  aria-labelledby="userprofiledd"
                >
                  <div className="bg-theme-1-space rounded py-3 mb-3 dropdown-dontclose">
                    <div className="row gx-0">
                      <div className="col-auto px-3">
                        <figure
                          className="avatar avatar-50 rounded-circle coverimg align-middle"
                          style={{
                            backgroundImage:
                              'url("assets/img/modern-ai-image/user-6.jpg")'
                          }}
                        >
                          <img
                            src="assets/img/modern-ai-image/user-6.jpg"
                            alt=""
                            style={{ display: "none" }}
                          />
                        </figure>
                      </div>
                      <div className="col align-self-center">
                        <p className="mb-1">
                          <span>AdminUIUX</span>
                        </p>
                        <p>
                          <i className="bi bi-wallet2 me-2" /> $1100.00{" "}
                          <small className="opacity-50">Balance</small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <a className="dropdown-item" href="investment-myprofile.html">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-user avatar avatar-18 me-1"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>{" "}
                        My Profile
                      </a>
                    </div>
                    <div>
                      <a className="dropdown-item" href="investment-dashboard.html">
                        <div className="row g-0">
                          <div className="col align-self-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-layout avatar avatar-18 me-1"
                            >
                              <rect
                                x={3}
                                y={3}
                                width={18}
                                height={18}
                                rx={2}
                                ry={2}
                              />
                              <line x1={3} y1={9} x2={21} y2={9} />
                              <line x1={9} y1={21} x2={9} y2={9} />
                            </svg>{" "}
                            My Dashboard
                          </div>
                          <div className="col-auto">
                            <figure
                              className="avatar avatar-20 coverimg rounded-circle"
                              style={{
                                backgroundImage:
                                  'url("assets/img/modern-ai-image/user-1.jpg")'
                              }}
                            >
                              <img
                                src="assets/img/modern-ai-image/user-1.jpg"
                                alt=""
                                style={{ display: "none" }}
                              />
                            </figure>
                            <figure
                              className="avatar avatar-20 coverimg rounded-circle"
                              style={{
                                backgroundImage:
                                  'url("assets/img/modern-ai-image/user-2.jpg")'
                              }}
                            >
                              <img
                                src="assets/img/modern-ai-image/user-2.jpg"
                                alt=""
                                style={{ display: "none" }}
                              />
                            </figure>
                            <figure
                              className="avatar avatar-20 coverimg rounded-circle"
                              style={{
                                backgroundImage:
                                  'url("assets/img/modern-ai-image/user-4.jpg")'
                              }}
                            >
                              <img
                                src="assets/img/modern-ai-image/user-4.jpg"
                                alt=""
                                style={{ display: "none" }}
                              />
                            </figure>
                            <div className="avatar avatar-20 bg-theme-1 rounded-circle text-center align-middle">
                              <small className="fs-10 align-middle">9+</small>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a className="dropdown-item" href="investment-earning.html">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-dollar-sign avatar avatar-18 me-1"
                        >
                          <line x1={12} y1={1} x2={12} y2={23} />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>{" "}
                        Earning
                      </a>
                    </div>
                    <div>
                      <a
                        className="dropdown-item"
                        href="investment-mysubscription.html"
                      >
                        <div className="row">
                          <div className="col">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-gift avatar avatar-18 me-1"
                            >
                              <polyline points="20 12 20 22 4 22 4 12" />
                              <rect x={2} y={7} width={20} height={5} />
                              <line x1={12} y1={22} x2={12} y2={7} />
                              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                            </svg>{" "}
                            Subscription
                          </div>
                          <div className="col-auto">
                            <p className="small text-success">Upgrade</p>
                          </div>
                          <div className="col-auto">
                            <span className="arrow bi bi-chevron-right" />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown open-left dropdown-dontclose">
                      <a
                        className="dropdown-item"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        role="button"
                      >
                        <div className="row">
                          <div className="col">
                            <i className="bi bi-translate avatar avatar-18 me-1" />{" "}
                            Language
                          </div>
                          <div className="col-auto">
                            <small className="vm">EN - English</small>{" "}
                            <i className="bi bi-translate" />
                          </div>
                          <div className="col-auto">
                            <span className="arrow bi bi-chevron-right" />
                          </div>
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <div>
                          <a className="dropdown-item active" data-value="EN">
                            EN - English
                          </a>
                        </div>
                        <div>
                          <a className="dropdown-item" data-value="FR">
                            FR - French
                          </a>
                        </div>
                        <div>
                          <a className="dropdown-item" data-value="CH">
                            CH - Chinese
                          </a>
                        </div>
                        <div>
                          <a className="dropdown-item" data-value="HI">
                            HI - Hindi
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <a className="dropdown-item" href="investment-settings.html">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-settings avatar avatar-18 me-1"
                        >
                          <circle cx={12} cy={12} r={3} />
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>{" "}
                        Account Setting
                      </a>
                    </div>
                    <div>
                      <a
                        className="dropdown-item theme-red"
                        href="investment-login.html"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-power avatar avatar-18 me-1"
                        >
                          <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                          <line x1={12} y1={2} x2={12} y2={12} />
                        </svg>{" "}
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="navbar-toggler btn btn-link btn-link-header btn-square btn-icon collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#header-navbar"
                aria-controls="header-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-more-vertical openbtn"
                >
                  <circle cx={12} cy={12} r={1} />
                  <circle cx={12} cy={5} r={1} />
                  <circle cx={12} cy={19} r={1} />
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x closebtn"
                >
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div className="adminuiux-search-full">
          <div className="row gx-2 align-items-center">
            <div className="col-auto">
              <button
                className="btn btn-link btn-square"
                type="button"
                onclick="closeSearch()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-left"
                >
                  <line x1={19} y1={12} x2={5} y2={12} />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
            </div>
            <div className="col">
              <input
                className="form-control pe-0 border-0"
                type="search"
                placeholder="Type something here..."
              />
            </div>
            <div className="col-auto">
              <div className="dropdown input-group-text border-0 p-0">
                <button
                  className="dropdown-toggle btn btn-link btn-square no-caret"
                  type="button"
                  id="searchfilter2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-sliders"
                  >
                    <line x1={4} y1={21} x2={4} y2={14} />
                    <line x1={4} y1={10} x2={4} y2={3} />
                    <line x1={12} y1={21} x2={12} y2={12} />
                    <line x1={12} y1={8} x2={12} y2={3} />
                    <line x1={20} y1={21} x2={20} y2={16} />
                    <line x1={20} y1={12} x2={20} y2={3} />
                    <line x1={1} y1={14} x2={7} y2={14} />
                    <line x1={9} y1={8} x2={15} y2={8} />
                    <line x1={17} y1={16} x2={23} y2={16} />
                  </svg>
                </button>
                <div className="dropdown-menu dropdown-menu-end dropdown-dontclose width-300">
                  <ul className="nav adminuiux-nav" id="searchtab2" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="searchall-tab2"
                        data-bs-toggle="tab"
                        data-bs-target="#searchall2"
                        type="button"
                        role="tab"
                        aria-controls="searchall2"
                        aria-selected="true"
                      >
                        All
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="searchorders-tab2"
                        data-bs-toggle="tab"
                        data-bs-target="#searchorders2"
                        type="button"
                        role="tab"
                        aria-controls="searchorders2"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        Orders
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="searchcontacts-tab2"
                        data-bs-toggle="tab"
                        data-bs-target="#searchcontacts2"
                        type="button"
                        role="tab"
                        aria-controls="searchcontacts2"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        Contacts
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content py-3" id="searchtabContent">
                    <div
                      className="tab-pane fade active show"
                      id="searchall2"
                      role="tabpanel"
                      aria-labelledby="searchall-tab2"
                    >
                      <ul className="list-group adminuiux-list-group list-group-flush bg-none show">
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col">Search apps</div>
                            <div className="col-auto">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="searchswitch1"
                                />{" "}
                                <label
                                  className="form-check-label"
                                  htmlFor="searchswitch1"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col">Include Pages</div>
                            <div className="col-auto">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="searchswitch2"
                                  defaultChecked=""
                                />{" "}
                                <label
                                  className="form-check-label"
                                  htmlFor="searchswitch2"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col">Internet resource</div>
                            <div className="col-auto">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="searchswitch3"
                                  defaultChecked=""
                                />{" "}
                                <label
                                  className="form-check-label"
                                  htmlFor="searchswitch3"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col">News and Blogs</div>
                            <div className="col-auto">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="searchswitch4"
                                />{" "}
                                <label
                                  className="form-check-label"
                                  htmlFor="searchswitch4"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="searchorders2"
                      role="tabpanel"
                      aria-labelledby="searchorders-tab2"
                    >
                      <ul className="list-group adminuiux-list-group list-group-flush bg-none show">
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col">Show order ID</div>
                            <div className="col-auto">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="searchswitch5"
                                />{" "}
                                <label
                                  className="form-check-label"
                                  htmlFor="searchswitch5"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col">International Order</div>
                            <div className="col-auto">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="searchswitch6"
                                  defaultChecked=""
                                />{" "}
                                <label
                                  className="form-check-label"
                                  htmlFor="searchswitch6"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col">Taxable Product</div>
                            <div className="col-auto">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="searchswitch7"
                                  defaultChecked=""
                                />{" "}
                                <label
                                  className="form-check-label"
                                  htmlFor="searchswitch7"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col">Published Product</div>
                            <div className="col-auto">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="searchswitch8"
                                />{" "}
                                <label
                                  className="form-check-label"
                                  htmlFor="searchswitch8"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="searchcontacts2"
                      role="tabpanel"
                      aria-labelledby="searchcontacts-tab2"
                    >
                      <ul className="list-group adminuiux-list-group list-group-flush bg-none show">
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col">Have email ID</div>
                            <div className="col-auto">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="searchswitch9"
                                />{" "}
                                <label
                                  className="form-check-label"
                                  htmlFor="searchswitch9"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col">Have phone number</div>
                            <div className="col-auto">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="searchswitch10"
                                  defaultChecked=""
                                />{" "}
                                <label
                                  className="form-check-label"
                                  htmlFor="searchswitch10"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col">Photo available</div>
                            <div className="col-auto">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="searchswitch11"
                                  defaultChecked=""
                                />{" "}
                                <label
                                  className="form-check-label"
                                  htmlFor="searchswitch11"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col">Referral</div>
                            <div className="col-auto">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="searchswitch12"
                                />{" "}
                                <label
                                  className="form-check-label"
                                  htmlFor="searchswitch12"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="">
                    <div className="row">
                      <div className="col">
                        <button className="btn btn-link">Reset</button>
                      </div>
                      <div className="col-auto">
                        <button className="btn btn-theme">Apply</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="adminuiux-wrap">
        <div className="adminuiux-sidebar" style={{ paddingTop: "67.9948px" }}>
          <div className="adminuiux-sidebar-inner">
            <div className="px-3 not-iconic mt-3">
              <div className="row">
                <div className="col align-self-center">
                  <h6 className="fw-medium">Main Menu</h6>
                </div>
                <div className="col-auto">
                  <a
                    className="btn btn-link btn-square"
                    data-bs-toggle="collapse"
                    data-bs-target="#usersidebarprofile"
                    aria-expanded="false"
                    role="button"
                    aria-controls="usersidebarprofile"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="text-center collapse" id="usersidebarprofile">
                <figure
                  className="avatar avatar-100 rounded-circle coverimg my-3"
                  style={{
                    backgroundImage: 'url("assets/img/modern-ai-image/user-6.jpg")'
                  }}
                >
                  <img
                    src="assets/img/modern-ai-image/user-6.jpg"
                    alt=""
                    style={{ display: "none" }}
                  />
                </figure>
                <h5 className="mb-1 fw-medium">AdminUIUX</h5>
                <p className="small">The Investment UI Kit</p>
              </div>
            </div>
            <ul className="nav flex-column menu-active-line">
              <li className="nav-item">
                <a href="investment-dashboard.html" className="nav-link active">
                  <i className="menu-icon bi bi-columns-gap" />{" "}
                  <span className="menu-name">Dashboard</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="investment-wallet.html" className="nav-link">
                  <i className="menu-icon bi bi-wallet" />{" "}
                  <span className="menu-name">Wallet</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="investment-goals.html" className="nav-link">
                  <i className="menu-icon bi bi-bullseye" />{" "}
                  <span className="menu-name">My Goals</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="investment-loan-list.html" className="nav-link">
                  <i className="menu-icon bi bi-bank" />{" "}
                  <span className="menu-name">My Loans</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="javascrit:void(0)"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="menu-icon bi bi-piggy-bank" />{" "}
                  <span className="menu-name">Investment</span>
                </a>
                <div className="dropdown-menu">
                  <div className="nav-item">
                    <a href="investment-company-shares.html" className="nav-link">
                      <i className="menu-icon bi bi-bank" />{" "}
                      <span className="menu-name">Company Share</span>
                    </a>
                  </div>
                  <div className="nav-item">
                    <a href="investment-mutual-funds.html" className="nav-link">
                      <i className="menu-icon bi bi-cash-coin" />{" "}
                      <span className="menu-name">Mutual Fund</span>
                    </a>
                  </div>
                  <div className="nav-item">
                    <a href="investment-deposit.html" className="nav-link">
                      <i className="menu-icon bi bi-percent" />{" "}
                      <span className="menu-name">Deposit</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a href="investment-explore.html" className="nav-link">
                  <i className="menu-icon bi bi-search" />{" "}
                  <span className="menu-name">Explore</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="investment-statistics.html" className="nav-link">
                  <i className="menu-icon bi bi-bar-chart-line" />{" "}
                  <span className="menu-name">Statistics</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="investment-calculator.html" className="nav-link">
                  <i className="menu-icon bi bi-calculator" />{" "}
                  <span className="menu-name">Calculators</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="investment-pages.html" className="nav-link">
                  <i className="menu-icon bi bi-layers" />{" "}
                  <span className="menu-name">Pages</span>{" "}
                  <span className="badge text-bg-primary mx-2">55+</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="investment-personalization.html" className="nav-link">
                  <i className="menu-icon bi bi-palette h4" />{" "}
                  <span className="menu-name">Personalize ❤️</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="components.html">
                  <i className="menu-icon bi bi-cpu" />{" "}
                  <span className="menu-name">Components</span>
                </a>
              </li>
            </ul>
            <div className="mt-auto" />
            <div className="px-3 mb-3 not-iconic">
              <h6 className="mb-3 fw-medium">Quick Links</h6>
              <div className="card adminuiux-card">
                <div className="card-body p-2">
                  <div className="row gx-2">
                    <div className="col-12 d-flex justify-content-between">
                      <a
                        href="investment-search-mutual-funds.html"
                        className="btn btn-square btn-link theme-red"
                      >
                        <span className="position-relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-heart"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>{" "}
                          <span className="position-absolute top-0 start-100 translate-middle p-1 bg-success rounded-circle">
                            <span className="visually-hidden">New alerts</span>{" "}
                          </span>
                        </span>
                      </a>
                      <a
                        href="investment-schedule.html"
                        className="btn btn-square btn-link"
                      >
                        <span className="position-relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-calendar"
                          >
                            <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                            <line x1={16} y1={2} x2={16} y2={6} />
                            <line x1={8} y1={2} x2={8} y2={6} />
                            <line x1={3} y1={10} x2={21} y2={10} />
                          </svg>{" "}
                          <span className="position-absolute top-0 start-100 translate-middle p-1 bg-warning rounded-circle">
                            <span className="visually-hidden">New alerts</span>{" "}
                          </span>
                        </span>
                      </a>
                      <a
                        href="investment-inbox.html"
                        className="btn btn-square btn-link"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-inbox"
                        >
                          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                          <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                        </svg>{" "}
                      </a>
                      <a
                        href="investment-help-center.html"
                        className="btn btn-square btn-link"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-help-circle"
                        >
                          <circle cx={12} cy={12} r={10} />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <line x1={12} y1={17} x2="12.01" y2={17} />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="nav flex-column menu-active-line">
              <li className="nav-item">
                <a href="investment-referral.html" className="nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-users menu-icon"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>{" "}
                  <span className="menu-name">Referral</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="investment-settings.html" className="nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-settings menu-icon"
                  >
                    <circle cx={12} cy={12} r={3} />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>{" "}
                  <span className="menu-name">Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <main
          className="adminuiux-content has-sidebar"
          onclick="contentClick()"
          style={{ paddingTop: "67.9948px" }}
        >
          <div className="container mt-4" id="main-content">
            <div className="row align-items-center">
              <div className="col-12 col-lg mb-4">
                <h3 className="fw-normal mb-0 text-secondary">Good Morning,</h3>
                <h1>Investor</h1>
              </div>
              <div className="col-6 col-sm-4 col-lg-3 col-xl-2 mb-4">
                <div className="card adminuiux-card">
                  <div className="card-body">
                    <p className="text-secondary small mb-2">Total Profit</p>
                    <h4 className="mb-3">$13.20k</h4>
                    <span className="badge badge-light text-bg-success">
                      <i className="me-1 bi bi-arrow-up-short" />
                      28.50%
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-lg-3 col-xl-2 mb-4">
                <div className="card adminuiux-card">
                  <div className="card-body">
                    <p className="text-secondary small mb-2">Best Profit</p>
                    <h4 className="mb-3">$8.34k</h4>
                    <span className="badge badge-light text-bg-success">
                      <i className="me-1 bi bi-arrow-up-short" />
                      54.35%
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-4 col-lg-3 col-xl-2 mb-4">
                <div className="card adminuiux-card">
                  <div className="card-body">
                    <p className="text-secondary small mb-2">Top Loser</p>
                    <h4 className="mb-3">-$5.15k</h4>
                    <span className="badge badge-light text-bg-danger">
                      <i className="me-1 bi bi-arrow-down-short" />
                      18.25%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-4 mb-4">
                <div className="card adminuiux-card position-relative overflow-hidden bg-theme-1 h-100">
                  <div
                    className="position-absolute top-0 start-0 h-100 w-100 z-index-0 coverimg opacity-50"
                    style={{
                      backgroundImage:
                        'url("assets/img/modern-ai-image/flamingo-4.jpg")'
                    }}
                  >
                    <img
                      src="assets/img/modern-ai-image/flamingo-4.jpg"
                      alt=""
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="card-body z-index-1">
                    <div className="row align-items-center justify-content-center h-100 py-4">
                      <div className="col-11">
                        <h2 className="fw-normal">
                          Your portfolio value has been grown by
                        </h2>
                        <h1 className="mb-3">$7.52k</h1>
                        <p>In last 7 days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-8 mb-4">
                <div className="card adminuiux-card">
                  <div className="row gx-0">
                    <div className="col-12 col-xl-4">
                      <div className="card-header">
                        <h6>Summary</h6>
                      </div>
                      <div className="card-body pb-0">
                        <div className="card adminuiux-card bg-theme-1 mb-3">
                          <div className="card-body">
                            <p className="text-white mb-2">Current Value</p>
                            <h4 className="fw-medium">
                              $ 65.52k{" "}
                              <span className="text-white fs-14">
                                <i className="bi bi-arrow-up-short me-1" /> 18.5%
                              </span>
                            </h4>
                          </div>
                        </div>
                        <div className="card adminuiux-card bg-theme-1-subtle mb-3">
                          <div className="card-body">
                            <p className="text-secondary mb-2">Profit Revenue</p>
                            <h4 className="fw-medium">
                              $ 15.51k{" "}
                              <span className="text-success fs-14">
                                <i className="bi bi-arrow-up-short me-1" /> 11.5%
                              </span>
                            </h4>
                          </div>
                        </div>
                        <div className="card adminuiux-card bg-theme-1-subtle mb-3">
                          <div className="card-body">
                            <p className="text-secondary mb-2">Investment</p>
                            <h4 className="fw-medium">$ 45.00k</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-8">
                      <div className="card-header">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <nav aria-label="Page navigation example">
                              <ul className="pagination pagination-sm justify-content-end mb-0">
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    1D
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link active" href="#">
                                    1W
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    1M
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    1Y
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    All
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                          <div className="col position-relative text-end">
                            <input
                              className="form-control form-control-sm border-0 d-inline-block w-auto align-middle"
                              id="daterangepicker"
                            />{" "}
                            <button
                              className="btn btn-sm btn-square btn-link d-inline-block align-middle"
                              onclick="$(this).prev().click()"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-calendar text-theme-1"
                              >
                                <rect
                                  x={3}
                                  y={4}
                                  width={18}
                                  height={18}
                                  rx={2}
                                  ry={2}
                                />
                                <line x1={16} y1={2} x2={16} y2={6} />
                                <line x1={8} y1={2} x2={8} y2={6} />
                                <line x1={3} y1={10} x2={21} y2={10} />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="card-body px-1">
                        <div className="w-100 height-300">
                          <canvas
                            id="summarychart"
                            width={479}
                            height={360}
                            style={{
                              display: "block",
                              boxSizing: "border-box",
                              height: 300,
                              width: 399
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-4">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="mb-0">Updates:</h6>
                    <p className="small text-secondary">
                      Today <span className="text-danger">Live</span>
                    </p>
                  </div>
                  <div className="col-12 col-sm-10">
                    <div className="swiper swipernav swiper-initialized swiper-horizontal swiper-backface-hidden">
                      <div className="swiper-wrapper">
                        <div
                          className="swiper-slide width-200 swiper-slide-active"
                          style={{ marginRight: 16 }}
                        >
                          <h6 className="mb-0 text-success">24,806.00</h6>
                          <p className="small">
                            <span className="text-secondary">GIFTS NIFTYS:</span>{" "}
                            <span className="text-success">
                              <i className="bi bi-caret-up-fill" /> 1.40%
                            </span>
                          </p>
                        </div>
                        <div
                          className="swiper-slide width-200 swiper-slide-next"
                          style={{ marginRight: 16 }}
                        >
                          <h6 className="mb-0 text-success">41,118.13</h6>
                          <p className="small">
                            <span className="text-secondary">Nikkies 2250:</span>{" "}
                            <span className="text-success">
                              <i className="bi bi-caret-up-fill" /> 0.40%
                            </span>
                          </p>
                        </div>
                        <div
                          className="swiper-slide width-200"
                          style={{ marginRight: 16 }}
                        >
                          <h6 className="mb-0 text-danger">30,006.00</h6>
                          <p className="small">
                            <span className="text-secondary">JOHN DOUES:</span>{" "}
                            <span className="text-danger">
                              <i className="bi bi-caret-down-fill" /> 0.40%
                            </span>
                          </p>
                        </div>
                        <div
                          className="swiper-slide width-200"
                          style={{ marginRight: 16 }}
                        >
                          <h6 className="mb-0 text-success">90,105.00</h6>
                          <p className="small">
                            <span className="text-secondary">Adminuiux Love:</span>{" "}
                            <span className="text-success">
                              <i className="bi bi-caret-up-fill" /> 1.40%
                            </span>
                          </p>
                        </div>
                        <div
                          className="swiper-slide width-200"
                          style={{ marginRight: 16 }}
                        >
                          <h6 className="mb-0 text-success">24,806.00</h6>
                          <p className="small">
                            <span className="text-secondary">GIFTS NIFTYS:</span>{" "}
                            <span className="text-success">
                              <i className="bi bi-caret-up-fill" /> 1.40%
                            </span>
                          </p>
                        </div>
                        <div
                          className="swiper-slide width-200"
                          style={{ marginRight: 16 }}
                        >
                          <h6 className="mb-0 text-success">41,118.13</h6>
                          <p className="small">
                            <span className="text-secondary">Nikkies 2250:</span>{" "}
                            <span className="text-success">
                              <i className="bi bi-caret-up-fill" /> 0.40%
                            </span>
                          </p>
                        </div>
                        <div
                          className="swiper-slide width-200"
                          style={{ marginRight: 16 }}
                        >
                          <h6 className="mb-0 text-danger">30,006.00</h6>
                          <p className="small">
                            <span className="text-secondary">JOHN DOUES:</span>{" "}
                            <span className="text-danger">
                              <i className="bi bi-caret-down-fill" /> 0.40%
                            </span>
                          </p>
                        </div>
                        <div
                          className="swiper-slide width-200"
                          style={{ marginRight: 16 }}
                        >
                          <h6 className="mb-0 text-success">90,105.00</h6>
                          <p className="small">
                            <span className="text-secondary">Adminuiux Love:</span>{" "}
                            <span className="text-success">
                              <i className="bi bi-caret-up-fill" /> 1.40%
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-sm btn-square btn-link">
                      <i className="bi bi-arrow-clockwise" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-12 col-xl-8 mb-4">
                <div className="card adminuiux-card">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-5">
                      <div className="card-header">
                        <h6 className="my-1">Investment Categories</h6>
                      </div>
                      <div className="card-body">
                        <div className="position-relative d-flex align-items-center justify-content-center text-center mb-3">
                          <div className="position-absolute">
                            <h4 className="mb-0">$ 1165.30k</h4>
                            <p className="text-secondary small">Portfolio Value</p>
                          </div>
                          <canvas
                            id="doughnutchart"
                            className="mx-auto width-240 height-240"
                            width={286}
                            height={287}
                            style={{
                              display: "block",
                              boxSizing: "border-box",
                              height: 239,
                              width: 239
                            }}
                          />
                        </div>
                        <p className="text-secondary small">
                          You have invested in different types of categories shown as
                          above and summary of each category.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-sm">
                      <div className="card-body">
                        <div className="row mb-2">
                          <div className="col-6 col-md-6 mb-4">
                            <p className="text-secondary small mb-2">
                              <span className="me-1 avatar avatar-10 rounded bg-green" />{" "}
                              Share holdings
                            </p>
                            <h4 className="ps-3 fw-medium">
                              $ 165.52k
                              <br />
                              <span className="text-success fs-14 fw-normal">
                                <i className="bi bi-caret-up-fill me-1 fs-14" />{" "}
                                25.30%
                              </span>
                            </h4>
                          </div>
                          <div className="col-6 col-md-6 mb-4">
                            <p className="text-secondary small mb-2">
                              <span className="me-1 avatar avatar-10 rounded bg-yellow" />{" "}
                              Mutual Funds
                            </p>
                            <h4 className="ps-3 fw-medium">
                              $ 265.85k
                              <br />
                              <span className="text-success fs-14 fw-normal">
                                <i className="bi bi-caret-up-fill me-1" /> 21.42%
                              </span>
                            </h4>
                          </div>
                          <div className="col-6 col-md-6 mb-4">
                            <p className="text-secondary small mb-2">
                              <span className="me-1 avatar avatar-10 rounded bg-orange" />{" "}
                              Bank Bonds
                            </p>
                            <h4 className="ps-3 fw-medium">
                              $ 356.26k
                              <br />
                              <span className="text-success fs-14 fw-normal">
                                <i className="bi bi-caret-up-fill me-1" /> 20.18%
                              </span>
                            </h4>
                          </div>
                          <div className="col-6 col-md-6 mb-4">
                            <p className="text-secondary small mb-2">
                              <span className="me-1 avatar avatar-10 rounded bg-purple" />{" "}
                              Gov. Securities
                            </p>
                            <h4 className="ps-3 fw-medium">
                              $ 185.65
                              <br />
                              <span className="text-success fs-14 fw-normal">
                                <i className="bi bi-caret-up-fill me-1" /> 15.65%
                              </span>
                            </h4>
                          </div>
                          <div className="col-6 col-md-6">
                            <p className="text-secondary small mb-2">
                              <span className="me-1 avatar avatar-10 rounded bg-secondary" />{" "}
                              Fixed Deposit
                            </p>
                            <h4 className="ps-3 fw-medium">
                              $ 190.45k
                              <br />
                              <span className="text-success fs-14 fw-normal">
                                <i className="bi bi-caret-up-fill me-1" /> 18.50%
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-xl-4 mb-4">
                <div className="card adminuiux-card overflow-hidden">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <span className="avatar avatar-30 rounded-circle bg-theme-1-subtle text-theme-1">
                          <i className="bi bi-wallet" />
                        </span>
                      </div>
                      <div className="col px-0">
                        <h6>My Wallet</h6>
                      </div>
                      <div className="col-auto px-0">
                        <select className="form-select form-select-sm">
                          <option>USD</option>
                          <option>CAD</option>
                          <option>AUD</option>
                        </select>
                      </div>
                      <div className="col-auto">
                        <button className="btn btn-sm btn-square btn-link">
                          <i className="bi bi-arrow-clockwise" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4 className="fw-medium">$ 1152.25k</h4>
                    <p>
                      Total net revenue is $ 756.83{" "}
                      <span className="text-success fs-14">
                        <i className="bi bi-arrow-up-short" /> 11.5%
                      </span>{" "}
                      increased in last week
                    </p>
                    <div className="summarychart height-110 w-100 mb-3">
                      <canvas
                        id="areachartblue1"
                        width={450}
                        height={132}
                        style={{
                          display: "block",
                          boxSizing: "border-box",
                          height: 110,
                          width: 375
                        }}
                      />
                    </div>
                    <div className="card adminuiux-card bg-theme-1-subtle">
                      <div className="card-body">
                        <p className="text-secondary small mb-2">
                          Top performing investment is{" "}
                          <b className="text-theme-1">Share Holdings</b>
                        </p>
                        <h4 className="fw-medium">
                          $ 165.52k{" "}
                          <span className="text-success fs-14 fw-normal">
                            <i className="bi bi-caret-up-fill me-1 fs-14" /> 25.30%
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row mb-2">
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 col-xxl mb-3">
                    <a
                      href="investment-company-shares.html"
                      className="card adminuiux-card style-none text-center h-100"
                    >
                      <div className="card-body">
                        <i className="avatar avatar-40 text-theme-1 h3 bi bi-bank mb-3" />
                        <p className="text-secondary small">Company Shares</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 col-xxl mb-3">
                    <a
                      href="investment-search-mutual-funds.html"
                      className="card adminuiux-card style-none text-center h-100"
                    >
                      <div className="card-body">
                        <i className="avatar avatar-40 text-theme-1 bi bi-calendar-event h3 mb-3" />
                        <p className="text-secondary small">Mutual Funds Buy/SIP</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 col-xxl mb-3">
                    <a
                      href="investment-deposit.html"
                      className="card adminuiux-card style-none text-center h-100"
                    >
                      <div className="card-body">
                        <i className="avatar avatar-40 text-theme-1 bi bi-percent h3 mb-3" />
                        <p className="text-secondary small">Fixed Deposit Schemes</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 col-xxl mb-3">
                    <a
                      href="investment-explore.html"
                      className="card adminuiux-card style-none text-center h-100"
                    >
                      <div className="card-body">
                        <i className="avatar avatar-40 text-theme-1 bi bi-cash-stack h3 mb-3" />
                        <p className="text-secondary small">Investment Plans</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 col-xxl mb-3">
                    <a
                      href="investment-investment-plans.html"
                      className="card adminuiux-card style-none text-center h-100"
                    >
                      <div className="card-body">
                        <i className="avatar avatar-40 text-theme-1 bi bi-person-walking h3 mb-3" />
                        <p className="text-secondary small">Retirement Plans</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 col-xxl mb-3">
                    <a
                      href="investment-investment-plans.html"
                      className="card adminuiux-card style-none text-center"
                    >
                      <div className="card-body">
                        <i className="avatar avatar-40 text-theme-1 bi bi-tags h3 mb-3" />
                        <p className="text-secondary small">Tax Saving Investments</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 col-xxl mb-3">
                    <a
                      href="investment-investment-plans.html"
                      className="card adminuiux-card style-none text-center h-100"
                    >
                      <div className="card-body">
                        <i className="avatar avatar-40 text-theme-1 bi bi-shield-check h3 mb-3" />
                        <p className="text-secondary small">Guaranteed Return</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 col-xxl mb-3">
                    <a
                      href="investment-investment-plans.html"
                      className="card adminuiux-card style-none text-center"
                    >
                      <div className="card-body">
                        <i className="avatar avatar-40 text-theme-1 bi bi-building-lock h3 mb-3" />
                        <p className="text-secondary small">Government Securities</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xxl-8">
                <div className="row">
                  <div className="col-12 col-lg-6 mb-4">
                    <div className="card adminuiux-card">
                      <div className="card-body">
                        <div className="row gx-3 mb-3">
                          <div className="col-auto">
                            <i className="bi bi-house fs-4 avatar avatar-50 bg-success text-white rounded" />
                          </div>
                          <div className="col">
                            <h4 className="mb-0">$ 22500.00</h4>
                            <p className="small opacity-75">Goal: Sweet Home</p>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-auto">2 months</div>
                          <div className="col" />
                          <div className="col-auto">22 months</div>
                        </div>
                        <div
                          className="progress height-10 mb-2"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar progress-bar-striped bg-success"
                            style={{ width: "10%" }}
                          />
                        </div>
                        <div className="row small text-secondary">
                          <div className="col-auto">10%</div>
                          <div className="col" />
                          <div className="col-auto">90%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                    <div className="card adminuiux-card">
                      <div className="card-body">
                        <div className="row gx-3 mb-3">
                          <div className="col-auto">
                            <i className="bi bi-car-front fs-4 avatar avatar-50 bg-theme-1 text-white rounded" />
                          </div>
                          <div className="col">
                            <h4 className="mb-0">$ 10500.00</h4>
                            <p className="small opacity-75">Goal: Car</p>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-auto">3 months</div>
                          <div className="col" />
                          <div className="col-auto">9 months</div>
                        </div>
                        <div
                          className="progress height-10 mb-2"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar progress-bar-striped bg-theme-1"
                            style={{ width: "30%" }}
                          />
                        </div>
                        <div className="row small text-secondary">
                          <div className="col-auto">30%</div>
                          <div className="col" />
                          <div className="col-auto">70%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                    <div className="card adminuiux-card">
                      <div className="card-body">
                        <div className="row gx-3">
                          <div className="col">
                            <h4>Refer friends &amp; earn</h4>
                            <p className="text-secondary">
                              Ask your friend to join us &amp; earn 10% of profit they
                              made first time.
                            </p>
                            <button className="btn btn-sm btn-outline-theme my-1">
                              Invite to Join
                            </button>
                          </div>
                          <div className="col-auto">
                            <div className="avatar avatar-80 rounded bg-theme-1-subtle text-theme-1">
                              <i className="bi bi-send h1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                    <div className="card adminuiux-card border border-theme-1">
                      <div className="card-body">
                        <div className="row gx-3">
                          <div className="col-auto text-center">
                            <div
                              className="avatar avatar-140 rounded coverimg"
                              style={{
                                backgroundImage:
                                  'url("assets/img/modern-ai-image/taxoi-1.jpg")'
                              }}
                            >
                              <img
                                src="assets/img/modern-ai-image/taxoi-1.jpg"
                                alt=""
                                style={{ display: "none" }}
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="row align-items-center mb-3">
                              <div className="col">
                                <p>
                                  <span className="badge badge-light text-bg-theme-1">
                                    G-SEC
                                  </span>
                                </p>
                              </div>
                              <div className="col-auto">
                                <button className="btn btn-sm btn-outline-theme">
                                  Place Bid
                                </button>
                              </div>
                            </div>
                            <h4>New GS 2025</h4>
                            <p className="mb-1 small">
                              <span className="text-secondary">Ends on</span> Thu, 1
                              Aug 2024
                            </p>
                            <p className="small">
                              <span className="text-secondary">
                                Indicative Yield*
                              </span>{" "}
                              7.05%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xxl-4 mb-4">
                <div className="card adminuiux-card bg-theme-1">
                  <div className="card-body">
                    <h2 className="mb-3 fw-medium">
                      Adminuiux Innovation and tech Fund
                    </h2>
                    <h4 className="h4 mb-1">$ 15.52</h4>
                    <p className="opacity-75 mb-3">Current Nav (Today)</p>
                    <div className="row">
                      <div className="col-6 mb-3">
                        <h5 className="mb-1">21</h5>
                        <p className="small opacity-75">
                          <i className="bi bi-speedometer2 me-1" /> Risk
                        </p>
                      </div>
                      <div className="col-6 mb-3">
                        <h5 className="mb-1">15.25%</h5>
                        <p className="small opacity-75">
                          <i className="bi bi-bar-chart-line me-1" /> CAGR
                        </p>
                      </div>
                      <div className="col-6 mb-3">
                        <h5 className="mb-1">0.5%</h5>
                        <p className="small opacity-75">
                          <i className="bi bi-exclamation-triangle me-1" /> Exit Load
                        </p>
                      </div>
                      <div className="col-6 mb-3">
                        <h5 className="mb-1">0.25%</h5>
                        <p className="small opacity-75">
                          <i className="bi bi-cash-stack me-1" /> Expense Ratio
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <button className="btn btn-light me-2">Buy</button>{" "}
                        <button className="btn btn-light me-2">SIP</button>
                      </div>
                      <div className="col-auto">
                        <button className="btn btn-link text-white me-2">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card adminuiux-card mb-4">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h6>Market with Technical Trend</h6>
                      </div>
                      <div className="col-auto px-0">
                        <select className="form-select form-select-sm">
                          <option selected="selected">All Trend</option>
                          <option>Bullish</option>
                          <option>Bearish</option>
                        </select>
                      </div>
                      <div className="col-auto">
                        <button className="btn btn-sm btn-square btn-link">
                          <i className="bi bi-arrow-clockwise" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div
                      id="dataTable_wrapper"
                      className="dt-container dt-empty-footer"
                    >
                      <div className="dt-layout-row">
                        <div className="dt-layout-cell dt-start " />
                        <div className="dt-layout-cell dt-end " />
                      </div>
                      <div className="dt-layout-row dt-layout-table">
                        <div className="dt-layout-cell ">
                          <table
                            className="table mb-0 dataTable dtr-inline collapsed"
                            data-show-toggle="true"
                            id="dataTable"
                            aria-describedby="dataTable_info"
                          >
                            <colgroup>
                              <col />
                              <col />
                              <col />
                            </colgroup>
                            <thead>
                              <tr role="row">
                                <th
                                  className="dt-orderable-asc dt-orderable-desc dt-ordering-desc"
                                  data-dt-column={0}
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-sort="descending"
                                  aria-label="Company: Activate to remove sorting"
                                  tabIndex={0}
                                >
                                  <span className="dt-column-title" role="button">
                                    Company
                                  </span>
                                  <span className="dt-column-order" />
                                </th>
                                <th
                                  data-dt-column={1}
                                  rowSpan={1}
                                  colSpan={1}
                                  className="dt-orderable-asc dt-orderable-desc"
                                  aria-label="Price: Activate to sort"
                                  tabIndex={0}
                                >
                                  <span className="dt-column-title" role="button">
                                    Price
                                  </span>
                                  <span className="dt-column-order" />
                                </th>
                                <th
                                  data-breakpoints="xs"
                                  data-dt-column={2}
                                  rowSpan={1}
                                  colSpan={1}
                                  className="dt-orderable-asc dt-orderable-desc"
                                  aria-label="Holding: Activate to sort"
                                  tabIndex={0}
                                >
                                  <span className="dt-column-title" role="button">
                                    Holding
                                  </span>
                                  <span className="dt-column-order" />
                                </th>
                                <th
                                  data-breakpoints="xs sm"
                                  data-dt-column={3}
                                  rowSpan={1}
                                  colSpan={1}
                                  className="dt-orderable-asc dt-orderable-desc dtr-hidden"
                                  aria-label="Profit/Loss: Activate to sort"
                                  tabIndex={0}
                                  style={{ display: "none" }}
                                >
                                  <span className="dt-column-title" role="button">
                                    Profit/Loss
                                  </span>
                                  <span className="dt-column-order" />
                                </th>
                                <th
                                  data-breakpoints="xs"
                                  data-dt-column={4}
                                  rowSpan={1}
                                  colSpan={1}
                                  className="dt-orderable-none dtr-hidden"
                                  aria-label="Today's Trend"
                                  style={{ display: "none" }}
                                >
                                  <span className="dt-column-title">
                                    Today's Trend
                                  </span>
                                  <span className="dt-column-order" />
                                </th>
                                <th
                                  data-dt-column={5}
                                  rowSpan={1}
                                  colSpan={1}
                                  className="dt-type-numeric dt-orderable-asc dt-orderable-desc dtr-hidden"
                                  aria-label="% Change: Activate to sort"
                                  tabIndex={0}
                                  style={{ display: "none" }}
                                >
                                  <span className="dt-column-title" role="button">
                                    % Change
                                  </span>
                                  <span className="dt-column-order" />
                                </th>
                                <th
                                  data-dt-column={6}
                                  rowSpan={1}
                                  colSpan={1}
                                  className="dt-orderable-asc dt-orderable-desc dtr-hidden"
                                  aria-label="Action: Activate to sort"
                                  tabIndex={0}
                                  style={{ display: "none" }}
                                >
                                  <span className="dt-column-title" role="button">
                                    Action
                                  </span>
                                  <span className="dt-column-order" />
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dtr-control sorting_1" tabIndex={0}>
                                  <p className="mb-0">Trisha LLC</p>
                                </td>
                                <td>
                                  <p className="mb-0">$ 856.45</p>
                                  <p className="small">
                                    <span
                                      className="text-secondary"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Last top price"
                                    >
                                      LTP:
                                    </span>{" "}
                                    856.55
                                  </p>
                                </td>
                                <td className="lastvisible">
                                  <p className="mb-0">20 units</p>
                                  <p className="small">
                                    <span className="text-secondary">Invested:</span>{" "}
                                    $ 2050.00
                                  </p>
                                </td>
                                <td
                                  className="dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <p className="mb-0 text-success">
                                    <i className="bi bi-caret-up-fill" /> 35.15%
                                  </p>
                                  <p className="small">
                                    <span className="text-secondary">Profit:</span> $
                                    685.00
                                  </p>
                                </td>
                                <td
                                  className="dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <p className="mb-0 text-success">
                                    <i className="bi bi-graph-up-arrow" /> Bullish
                                  </p>
                                </td>
                                <td
                                  className="dt-type-numeric dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <p className="mb-0 text-success">
                                    <i className="bi bi-caret-up-fill" /> 1.03%
                                  </p>
                                </td>
                                <td
                                  className="dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <button className="btn btn-sm btn-outline-success">
                                    Invest
                                  </button>{" "}
                                  <button className="btn btn-sm btn-outline-danger">
                                    Sell
                                  </button>
                                  <div className="dropdown d-inline-block">
                                    <a
                                      className="btn btn-link btn-square no-caret"
                                      data-bs-toggle="dropdown"
                                    >
                                      <i className="bi bi-three-dots" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                      <li>
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          Favorite
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          View Chart
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          Company Events
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="dtr-control sorting_1" tabIndex={0}>
                                  <p className="mb-0">Spanishwebs</p>
                                  <p className="small text-theme-1">
                                    <i className="bi bi-award-fill" /> Event
                                  </p>
                                </td>
                                <td>
                                  <p className="mb-0">$ 130.45</p>
                                  <p className="small">
                                    <span
                                      className="text-secondary"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Last top price"
                                    >
                                      LTP:
                                    </span>{" "}
                                    135.52
                                  </p>
                                </td>
                                <td className="lastvisible">
                                  <p className="mb-0">100 units</p>
                                  <p className="small">
                                    <span className="text-secondary">Invested:</span>{" "}
                                    $ 150.45
                                  </p>
                                </td>
                                <td
                                  className="dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <p className="mb-0 text-success">
                                    <i className="bi bi-caret-up-fill" /> 5.52%
                                  </p>
                                  <p className="small">
                                    <span className="text-secondary">Profit:</span> $
                                    10.15
                                  </p>
                                </td>
                                <td
                                  className="dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <p className="mb-0 text-success">
                                    <i className="bi bi-graph-up-arrow" /> Bullish
                                  </p>
                                </td>
                                <td
                                  className="dt-type-numeric dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <p className="mb-0 text-success">
                                    <i className="bi bi-caret-up-fill" /> 1.24%
                                  </p>
                                </td>
                                <td
                                  className="dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <button className="btn btn-sm btn-outline-success">
                                    Invest
                                  </button>{" "}
                                  <button className="btn btn-sm btn-outline-danger">
                                    Sell
                                  </button>
                                  <div className="dropdown d-inline-block">
                                    <a
                                      className="btn btn-link btn-square no-caret"
                                      data-bs-toggle="dropdown"
                                    >
                                      <i className="bi bi-three-dots" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                      <li>
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          Favorite
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          View Chart
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          Company Events
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="dtr-control sorting_1" tabIndex={0}>
                                  <p className="mb-0">Jintudal</p>
                                  <p className="small text-theme-1">
                                    <i className="bi bi-award-fill" /> Event
                                  </p>
                                </td>
                                <td>
                                  <p className="mb-0">$ 100.45</p>
                                  <p className="small">
                                    <span
                                      className="text-secondary"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Last top price"
                                    >
                                      LTP:
                                    </span>{" "}
                                    152
                                  </p>
                                </td>
                                <td className="lastvisible">
                                  <p className="mb-0">102 units</p>
                                  <p className="small">
                                    <span className="text-secondary">Invested:</span>{" "}
                                    $ 1400.45
                                  </p>
                                </td>
                                <td
                                  className="dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <p className="mb-0 text-success">
                                    <i className="bi bi-caret-up-fill" /> 25.30%
                                  </p>
                                  <p className="small">
                                    <span className="text-secondary">Profit:</span> $
                                    305.5
                                  </p>
                                </td>
                                <td
                                  className="dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <p className="mb-0 text-success">
                                    <i className="bi bi-graph-up-arrow" /> Bullish
                                  </p>
                                </td>
                                <td
                                  className="dt-type-numeric dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <p className="mb-0 text-success">
                                    <i className="bi bi-caret-up-fill" /> 1.24%
                                  </p>
                                </td>
                                <td
                                  className="dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <button className="btn btn-sm btn-outline-success">
                                    Invest
                                  </button>{" "}
                                  <button className="btn btn-sm btn-outline-danger">
                                    Sell
                                  </button>
                                  <div className="dropdown d-inline-block">
                                    <a
                                      className="btn btn-link btn-square no-caret"
                                      data-bs-toggle="dropdown"
                                    >
                                      <i className="bi bi-three-dots" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                      <li>
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          Favorite
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          View Chart
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          Company Events
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="dtr-control sorting_1" tabIndex={0}>
                                  <p className="mb-0">Jintudal</p>
                                  <p className="small text-theme-1">
                                    <i className="bi bi-award-fill" /> Event
                                  </p>
                                </td>
                                <td>
                                  <p className="mb-0">$ 100.45</p>
                                  <p className="small">
                                    <span
                                      className="text-secondary"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Last top price"
                                    >
                                      LTP:
                                    </span>{" "}
                                    152
                                  </p>
                                </td>
                                <td className="lastvisible">
                                  <p className="mb-0">102 units</p>
                                  <p className="small">
                                    <span className="text-secondary">Invested:</span>{" "}
                                    $ 1400.45
                                  </p>
                                </td>
                                <td
                                  className="dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <p className="mb-0 text-success">
                                    <i className="bi bi-caret-up-fill" /> 25.30%
                                  </p>
                                  <p className="small">
                                    <span className="text-secondary">Profit:</span> $
                                    305.5
                                  </p>
                                </td>
                                <td
                                  className="dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <p className="mb-0 text-success">
                                    <i className="bi bi-graph-up-arrow" /> Bullish
                                  </p>
                                </td>
                                <td
                                  className="dt-type-numeric dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <p className="mb-0 text-success">
                                    <i className="bi bi-caret-up-fill" /> 1.24%
                                  </p>
                                </td>
                                <td
                                  className="dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <button className="btn btn-sm btn-outline-success">
                                    Invest
                                  </button>{" "}
                                  <button className="btn btn-sm btn-outline-danger">
                                    Sell
                                  </button>
                                  <div className="dropdown d-inline-block">
                                    <a
                                      className="btn btn-link btn-square no-caret"
                                      data-bs-toggle="dropdown"
                                    >
                                      <i className="bi bi-three-dots" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                      <li>
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          Favorite
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          View Chart
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          Company Events
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="dtr-control sorting_1" tabIndex={0}>
                                  <p className="mb-0">Jintudal</p>
                                  <p className="small text-theme-1">
                                    <i className="bi bi-award-fill" /> Event
                                  </p>
                                </td>
                                <td>
                                  <p className="mb-0">$ 100.45</p>
                                  <p className="small">
                                    <span
                                      className="text-secondary"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Last top price"
                                    >
                                      LTP:
                                    </span>{" "}
                                    152
                                  </p>
                                </td>
                                <td className="lastvisible">
                                  <p className="mb-0">102 units</p>
                                  <p className="small">
                                    <span className="text-secondary">Invested:</span>{" "}
                                    $ 1400.45
                                  </p>
                                </td>
                                <td
                                  className="dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <p className="mb-0 text-success">
                                    <i className="bi bi-caret-up-fill" /> 25.30%
                                  </p>
                                  <p className="small">
                                    <span className="text-secondary">Profit:</span> $
                                    305.5
                                  </p>
                                </td>
                                <td
                                  className="dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <p className="mb-0 text-success">
                                    <i className="bi bi-graph-up-arrow" /> Bullish
                                  </p>
                                </td>
                                <td
                                  className="dt-type-numeric dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <p className="mb-0 text-success">
                                    <i className="bi bi-caret-up-fill" /> 1.24%
                                  </p>
                                </td>
                                <td
                                  className="dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <button className="btn btn-sm btn-outline-success">
                                    Invest
                                  </button>{" "}
                                  <button className="btn btn-sm btn-outline-danger">
                                    Sell
                                  </button>
                                  <div className="dropdown d-inline-block">
                                    <a
                                      className="btn btn-link btn-square no-caret"
                                      data-bs-toggle="dropdown"
                                    >
                                      <i className="bi bi-three-dots" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                      <li>
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          Favorite
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          View Chart
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          Company Events
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="dtr-control sorting_1" tabIndex={0}>
                                  <p className="mb-0">Jintudal</p>
                                  <p className="small text-theme-1">
                                    <i className="bi bi-award-fill" /> Event
                                  </p>
                                </td>
                                <td>
                                  <p className="mb-0">$ 100.45</p>
                                  <p className="small">
                                    <span
                                      className="text-secondary"
                                      data-bs-toggle="tooltip"
                                      data-bs-original-title="Last top price"
                                    >
                                      LTP:
                                    </span>{" "}
                                    152
                                  </p>
                                </td>
                                <td className="lastvisible">
                                  <p className="mb-0">102 units</p>
                                  <p className="small">
                                    <span className="text-secondary">Invested:</span>{" "}
                                    $ 1400.45
                                  </p>
                                </td>
                                <td
                                  className="dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <p className="mb-0 text-success">
                                    <i className="bi bi-caret-up-fill" /> 25.30%
                                  </p>
                                  <p className="small">
                                    <span className="text-secondary">Profit:</span> $
                                    305.5
                                  </p>
                                </td>
                                <td
                                  className="dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <p className="mb-0 text-success">
                                    <i className="bi bi-graph-up-arrow" /> Bullish
                                  </p>
                                </td>
                                <td
                                  className="dt-type-numeric dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <p className="mb-0 text-success">
                                    <i className="bi bi-caret-up-fill" /> 1.24%
                                  </p>
                                </td>
                                <td
                                  className="dtr-hidden"
                                  style={{ display: "none" }}
                                >
                                  <button className="btn btn-sm btn-outline-success">
                                    Invest
                                  </button>{" "}
                                  <button className="btn btn-sm btn-outline-danger">
                                    Sell
                                  </button>
                                  <div className="dropdown d-inline-block">
                                    <a
                                      className="btn btn-link btn-square no-caret"
                                      data-bs-toggle="dropdown"
                                    >
                                      <i className="bi bi-three-dots" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                      <li>
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          Favorite
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          View Chart
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          Company Events
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot />
                          </table>
                        </div>
                      </div>
                      <div className="dt-layout-row">
                        <div className="dt-layout-cell dt-start ">
                          <div
                            className="dt-info"
                            aria-live="polite"
                            id="dataTable_info"
                            role="status"
                          >
                            Showing 1 to 6 of 9 entries
                          </div>
                        </div>
                        <div className="dt-layout-cell dt-end ">
                          <div className="dt-paging paging_full_numbers">
                            <button
                              className="dt-paging-button disabled first"
                              role="link"
                              type="button"
                              aria-controls="dataTable"
                              aria-disabled="true"
                              aria-label="First"
                              data-dt-idx="first"
                              tabIndex={-1}
                            >
                              «
                            </button>
                            <button
                              className="dt-paging-button disabled previous"
                              role="link"
                              type="button"
                              aria-controls="dataTable"
                              aria-disabled="true"
                              aria-label="Previous"
                              data-dt-idx="previous"
                              tabIndex={-1}
                            >
                              ‹
                            </button>
                            <button
                              className="dt-paging-button current"
                              role="link"
                              type="button"
                              aria-controls="dataTable"
                              aria-current="page"
                              data-dt-idx={0}
                              tabIndex={0}
                            >
                              1
                            </button>
                            <button
                              className="dt-paging-button"
                              role="link"
                              type="button"
                              aria-controls="dataTable"
                              data-dt-idx={1}
                              tabIndex={0}
                            >
                              2
                            </button>
                            <button
                              className="dt-paging-button next"
                              role="link"
                              type="button"
                              aria-controls="dataTable"
                              aria-label="Next"
                              data-dt-idx="next"
                              tabIndex={0}
                            >
                              ›
                            </button>
                            <button
                              className="dt-paging-button last"
                              role="link"
                              type="button"
                              aria-controls="dataTable"
                              aria-label="Last"
                              data-dt-idx="last"
                              tabIndex={0}
                            >
                              »
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* footer */}
      <footer className="adminuiux-footer has-adminuiux-sidebar mt-auto">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md col-lg py-2">
            <span className="small">
              Copyright @2024, Creatively designed by{' DEVZOX'}
              
                
            
            </span>
          </div>
          <div className="col-12 col-md-auto col-lg-auto align-self-center">
            <ul className="nav small">
              <li className="nav-item">
                <a className="nav-link" href="help-center.html">
                  Help
                </a>
              </li>
              <li className="nav-item">|</li>
              <li className="nav-item">
                <a className="nav-link" href="terms-of-use.html">
                  Terms of Use
                </a>
              </li>
              <li className="nav-item">|</li>
              <li className="nav-item">
                <a className="nav-link" href="privacy-policy.html">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>

  );
};

export default AdminDashboard;