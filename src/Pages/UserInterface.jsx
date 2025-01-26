import React, { useState } from "react";
import '../assets/Css/Loan.css/loan.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate } from "react-router-dom";

const UserInterface = () => {
  const [loanType, setLoanType] = useState("");
  const [financingType, setFinancingType] = useState("Debt Financing");
  const [bankService, setBankService] = useState("Individual Banking");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanDuration, setLoanDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      loanType,
      financingType,
      bankService,
      loanAmount,
      loanDuration,
    };
    console.log("Form Data:", formData);
    Navigate('/personal-details');
  };

  return (
    <section className="loan-details-area bg_disable pt-130 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="stepper-widget mt-sm-5 px-3 px-sm-0">
              <ul>
                <li className="active mt-0">
                  <a href="/loan-details">
                    <div className="number">
                      <i className="icon_check"></i> <span>1</span>
                    </div>
                    Loan Details
                  </a>
                </li>
                <li>
                  <a href="/personal-details">
                    <div className="number">
                      <i className="icon_check"></i> <span>2</span>
                    </div>
                    Personal Details
                  </a>
                </li>
                <li>
                  <a href="/document-upload">
                    <div className="number">
                      <i className="icon_check"></i> <span>3</span>
                    </div>
                    Documents Upload
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="loan-details-widget">
              <form onSubmit={handleSubmit}>
                <div className="row mb-35 gy-4">
                  {[
                    { id: "Personal_loan", label: "Personal Loan", img1: "https://html-template.spider-themes.net/banca/img/apply-loan/icon-4.1.png", img2: "https://html-template.spider-themes.net/banca/img/apply-loan/icon-4.2.png" },
                    { id: "Home_loan", label: "Home Loan", img1: "https://html-template.spider-themes.net/banca/img/apply-loan/icon-5.1.png", img2: "https://html-template.spider-themes.net/banca/img/apply-loan/icon-5.2.png" },
                    { id: "Business_loan", label: "Business Loan", img1: "https://html-template.spider-themes.net/banca/img/apply-loan/icon-6.1.png", img2: "https://html-template.spider-themes.net/banca/img/apply-loan/icon-6.2.png" },
                    { id: "Car_loan", label: "Car Loan", img1: "https://html-template.spider-themes.net/banca/img/apply-loan/icon-7.1.png", img2: "https://html-template.spider-themes.net/banca/img/apply-loan/icon-7.2.png" },
                  ].map((loan) => (
                    <div className="col-lg-3 col-md-6" key={loan.id}>
                      <input
                        className="select-loan-type-radio"
                        name="select-loan-type"
                        type="radio"
                        id={loan.id}
                        value={loan.label}
                        checked={loanType === loan.label}
                        onChange={(e) => setLoanType(e.target.value)}
                      />
                      <label htmlFor={loan.id} className="loan-type">
                        <img src={loan.img1} alt="icon" />
                        <img src={loan.img2} alt="icon" />
                        <span>{loan.label}</span>
                      </label>
                    </div>
                  ))}
                </div>

                <div className="row gy-4">
                  <div className="col-md-6">
                    <label className="label" htmlFor="loandetails01">
                      Choose your financing type
                    </label>
                    <select
                      className="w-100"
                      id="loandetails01"
                      value={financingType}
                      onChange={(e) => setFinancingType(e.target.value)}
                    >
                      <option value="Debt Financing">Debt Financing</option>
                      <option value="Equity Finance">Equity Finance</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="label" htmlFor="loandetails02">
                      Choose your preferred bank service
                    </label>
                    <select
                      className="w-100"
                      id="loandetails02"
                      value={bankService}
                      onChange={(e) => setBankService(e.target.value)}
                    >
                      <option value="Individual Banking">Individual Banking</option>
                      <option value="Business Banking">Business Banking</option>
                      <option value="Digital Banking">Digital Banking</option>
                      <option value="Loans">Loans</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="label" htmlFor="loan-amount">
                      Your loan amount
                    </label>
                    <div className="input-field">
                      <span>$</span>
                      <input
                        type="number"
                        id="loan-amount"
                        className="form-control"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <label className="label mb-4">Loan duration</label>
                    {["12 months", "18 months", "24 months", "36 months", "48 months"].map((duration, index) => (
                      <div className="form-check form-check-inline mr-30" key={index}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="loanDuration"
                          id={`duration${index}`}
                          value={duration}
                          checked={loanDuration === duration}
                          onChange={(e) => setLoanDuration(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor={`duration${index}`}>
                          {duration}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="row mt-60">
                  <div className="col-md-12">
                    <div className="nav-btn d-flex justify-content-end">
                      <button
                        className="theme-btn-primary_alt theme-btn next-btn"
                        type="submit"
                      >
                        Next <i className="arrow_right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInterface;
