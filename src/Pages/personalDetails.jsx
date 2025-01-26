import React from 'react'

const personalDetails = () => {
  return (
    <section className="loan-deatils-area bg_disable pt-130 pb-120">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="stepper-widget mt-sm-5 px-3 px-sm-0">
            <ul>
              <li className=" complete  mt-0">
                <a href="loan-details.html">
                  <div className="number">
                    <i className="icon_check" /> <span>1</span>
                  </div>{" "}
                  Loan Details
                </a>
              </li>
              <li className="active">
                <a href="personal-details.html">
                  <div className="number">
                    <i className="icon_check" /> <span>2</span>
                  </div>
                  Personal Details
                </a>
              </li>
              <li>
                <a href="document-upload.html">
                  <div className="number">
                    <i className="icon_check" /> <span>3</span>
                  </div>
                  Documants Upload
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="loan-details-widget">
            <form action="document-upload.html">
              <div className="row gy-4">
                <div className="col-md-6">
                  <label className="label" htmlFor="fName">
                    First Name*
                  </label>
                  <input
                    id="fName"
                    className="form-control"
                    type="text"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label className="label" htmlFor="lName">
                    Last Name*
                  </label>
                  <input
                    id="lName"
                    className="form-control"
                    type="text"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label className="label" htmlFor="dob-d">
                    Date of Birth*
                  </label>
                  <div className="dob d-flex">
                    <select id="dob-d" style={{ display: "none" }}>
                      <option value="">Day</option>
                      <option value={01}>01</option>
                      <option value={02}>02</option>
                      <option value={03}>03</option>
                      <option value={04}>04</option>
                      <option value={05}>05</option>
                      <option value={06}>06</option>
                      <option value={07}>07</option>
                      <option value={08}>08</option>
                      <option value={09}>09</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                    </select>
                    <div className="nice-select" tabIndex={0}>
                      <span className="current">Day</span>
                      <ul className="list">
                        <li data-value="" className="option selected">
                          Day
                        </li>
                        <li data-value={01} className="option">
                          01
                        </li>
                        <li data-value={02} className="option">
                          02
                        </li>
                        <li data-value={03} className="option">
                          03
                        </li>
                        <li data-value={04} className="option">
                          04
                        </li>
                        <li data-value={05} className="option">
                          05
                        </li>
                        <li data-value={06} className="option">
                          06
                        </li>
                        <li data-value={07} className="option">
                          07
                        </li>
                        <li data-value={08} className="option">
                          08
                        </li>
                        <li data-value={09} className="option">
                          09
                        </li>
                        <li data-value={10} className="option">
                          10
                        </li>
                        <li data-value={11} className="option">
                          11
                        </li>
                        <li data-value={12} className="option">
                          12
                        </li>
                        <li data-value={13} className="option">
                          13
                        </li>
                        <li data-value={14} className="option">
                          14
                        </li>
                        <li data-value={15} className="option">
                          15
                        </li>
                        <li data-value={16} className="option">
                          16
                        </li>
                        <li data-value={17} className="option">
                          17
                        </li>
                        <li data-value={18} className="option">
                          18
                        </li>
                        <li data-value={19} className="option">
                          19
                        </li>
                        <li data-value={20} className="option">
                          20
                        </li>
                        <li data-value={21} className="option">
                          21
                        </li>
                        <li data-value={22} className="option">
                          22
                        </li>
                        <li data-value={23} className="option">
                          23
                        </li>
                        <li data-value={24} className="option">
                          24
                        </li>
                        <li data-value={25} className="option">
                          25
                        </li>
                        <li data-value={26} className="option">
                          26
                        </li>
                        <li data-value={27} className="option">
                          27
                        </li>
                        <li data-value={28} className="option">
                          28
                        </li>
                        <li data-value={29} className="option">
                          29
                        </li>
                        <li data-value={30} className="option">
                          30
                        </li>
                        <li data-value={31} className="option">
                          31
                        </li>
                      </ul>
                    </div>
                    <select id="dob-m" style={{ display: "none" }}>
                      <option value="">Month</option>
                      <option value={01}>January</option>
                      <option value={02}>February</option>
                      <option value={03}>March</option>
                      <option value={04}>April</option>
                      <option value={05}>May</option>
                      <option value={06}>June</option>
                      <option value={07}>July</option>
                      <option value={08}>August</option>
                      <option value={09}>September</option>
                      <option value={10}>October</option>
                      <option value={11}>November</option>
                      <option value={12}>December</option>
                    </select>
                    <div className="nice-select" tabIndex={0}>
                      <span className="current">Month</span>
                      <ul className="list">
                        <li data-value="" className="option selected">
                          Month
                        </li>
                        <li data-value={01} className="option">
                          January
                        </li>
                        <li data-value={02} className="option">
                          February
                        </li>
                        <li data-value={03} className="option">
                          March
                        </li>
                        <li data-value={04} className="option">
                          April
                        </li>
                        <li data-value={05} className="option">
                          May
                        </li>
                        <li data-value={06} className="option">
                          June
                        </li>
                        <li data-value={07} className="option">
                          July
                        </li>
                        <li data-value={08} className="option">
                          August
                        </li>
                        <li data-value={09} className="option">
                          September
                        </li>
                        <li data-value={10} className="option">
                          October
                        </li>
                        <li data-value={11} className="option">
                          November
                        </li>
                        <li data-value={12} className="option">
                          December
                        </li>
                      </ul>
                    </div>
                    <select
                      className="me-0"
                      id="dob-y"
                      style={{ display: "none" }}
                    >
                      <option value="">Year</option>
                      <option value={1970}>1970</option>
                      <option value={1971}>1971</option>
                      <option value={1972}>1972</option>
                      <option value={1973}>1973</option>
                      <option value={1974}>1974</option>
                      <option value={1975}>1975</option>
                      <option value={1976}>1976</option>
                      <option value={1977}>1977</option>
                      <option value={1978}>1978</option>
                      <option value={1979}>1979</option>
                      <option value={1980}>1980</option>
                      <option value={1981}>1981</option>
                      <option value={1982}>1982</option>
                      <option value={1983}>1983</option>
                      <option value={1984}>1984</option>
                      <option value={1985}>1985</option>
                      <option value={1986}>1986</option>
                      <option value={1987}>1987</option>
                      <option value={1988}>1988</option>
                      <option value={1989}>1989</option>
                      <option value={1990}>1990</option>
                      <option value={1991}>1991</option>
                      <option value={1992}>1992</option>
                      <option value={1993}>1993</option>
                      <option value={1994}>1994</option>
                      <option value={1995}>1995</option>
                      <option value={1996}>1996</option>
                      <option value={1997}>1997</option>
                      <option value={1998}>1998</option>
                      <option value={1999}>1999</option>
                      <option value={2000}>2000</option>
                      <option value={2001}>2001</option>
                      <option value={2002}>2002</option>
                      <option value={2003}>2003</option>
                      <option value={2004}>2004</option>
                      <option value={2005}>2005</option>
                      <option value={2006}>2006</option>
                      <option value={2007}>2007</option>
                      <option value={2008}>2008</option>
                      <option value={2009}>2009</option>
                      <option value={2010}>2010</option>
                      <option value={2011}>2011</option>
                      <option value={2012}>2012</option>
                      <option value={2013}>2013</option>
                      <option value={2014}>2014</option>
                      <option value={2015}>2015</option>
                      <option value={2016}>2016</option>
                      <option value={2017}>2017</option>
                      <option value={2018}>2018</option>
                      <option value={2019}>2019</option>
                      <option value={2020}>2020</option>
                      <option value={2021}>2021</option>
                    </select>
                    <div className="nice-select me-0" tabIndex={0}>
                      <span className="current">Year</span>
                      <ul className="list">
                        <li data-value="" className="option selected">
                          Year
                        </li>
                        <li data-value={1970} className="option">
                          1970
                        </li>
                        <li data-value={1971} className="option">
                          1971
                        </li>
                        <li data-value={1972} className="option">
                          1972
                        </li>
                        <li data-value={1973} className="option">
                          1973
                        </li>
                        <li data-value={1974} className="option">
                          1974
                        </li>
                        <li data-value={1975} className="option">
                          1975
                        </li>
                        <li data-value={1976} className="option">
                          1976
                        </li>
                        <li data-value={1977} className="option">
                          1977
                        </li>
                        <li data-value={1978} className="option">
                          1978
                        </li>
                        <li data-value={1979} className="option">
                          1979
                        </li>
                        <li data-value={1980} className="option">
                          1980
                        </li>
                        <li data-value={1981} className="option">
                          1981
                        </li>
                        <li data-value={1982} className="option">
                          1982
                        </li>
                        <li data-value={1983} className="option">
                          1983
                        </li>
                        <li data-value={1984} className="option">
                          1984
                        </li>
                        <li data-value={1985} className="option">
                          1985
                        </li>
                        <li data-value={1986} className="option">
                          1986
                        </li>
                        <li data-value={1987} className="option">
                          1987
                        </li>
                        <li data-value={1988} className="option">
                          1988
                        </li>
                        <li data-value={1989} className="option">
                          1989
                        </li>
                        <li data-value={1990} className="option">
                          1990
                        </li>
                        <li data-value={1991} className="option">
                          1991
                        </li>
                        <li data-value={1992} className="option">
                          1992
                        </li>
                        <li data-value={1993} className="option">
                          1993
                        </li>
                        <li data-value={1994} className="option">
                          1994
                        </li>
                        <li data-value={1995} className="option">
                          1995
                        </li>
                        <li data-value={1996} className="option">
                          1996
                        </li>
                        <li data-value={1997} className="option">
                          1997
                        </li>
                        <li data-value={1998} className="option">
                          1998
                        </li>
                        <li data-value={1999} className="option">
                          1999
                        </li>
                        <li data-value={2000} className="option">
                          2000
                        </li>
                        <li data-value={2001} className="option">
                          2001
                        </li>
                        <li data-value={2002} className="option">
                          2002
                        </li>
                        <li data-value={2003} className="option">
                          2003
                        </li>
                        <li data-value={2004} className="option">
                          2004
                        </li>
                        <li data-value={2005} className="option">
                          2005
                        </li>
                        <li data-value={2006} className="option">
                          2006
                        </li>
                        <li data-value={2007} className="option">
                          2007
                        </li>
                        <li data-value={2008} className="option">
                          2008
                        </li>
                        <li data-value={2009} className="option">
                          2009
                        </li>
                        <li data-value={2010} className="option">
                          2010
                        </li>
                        <li data-value={2011} className="option">
                          2011
                        </li>
                        <li data-value={2012} className="option">
                          2012
                        </li>
                        <li data-value={2013} className="option">
                          2013
                        </li>
                        <li data-value={2014} className="option">
                          2014
                        </li>
                        <li data-value={2015} className="option">
                          2015
                        </li>
                        <li data-value={2016} className="option">
                          2016
                        </li>
                        <li data-value={2017} className="option">
                          2017
                        </li>
                        <li data-value={2018} className="option">
                          2018
                        </li>
                        <li data-value={2019} className="option">
                          2019
                        </li>
                        <li data-value={2020} className="option">
                          2020
                        </li>
                        <li data-value={2021} className="option">
                          2021
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="label mb-4">Marital Statas*</label>
                  <div className="form-check form-check-inline me-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="MaritalStatas"
                      id="single"
                      defaultValue="single"
                    />
                    <label className="form-check-label" htmlFor="single">
                      Single
                    </label>
                  </div>
                  <div className="form-check form-check-inline me-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="MaritalStatas"
                      id="married"
                      defaultValue="married"
                    />
                    <label className="form-check-label" htmlFor="married">
                      Married
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="label" htmlFor="emailName">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="emailName"
                    placeholder="examplename@example.com"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label className="label" htmlFor="inputPhoneNumber">
                    Mobile Number*
                  </label>
                  <div className="iti iti--allow-dropdown">
                    <div className="iti__flag-container">
                      <div
                        className="iti__selected-flag"
                        role="combobox"
                        aria-controls="iti-0__country-listbox"
                        aria-owns="iti-0__country-listbox"
                        aria-expanded="false"
                        tabIndex={0}
                        title="United States: +1"
                        aria-activedescendant="iti-0__item-us-preferred"
                      >
                        <div className="iti__flag iti__us" />
                        <div className="iti__arrow" />
                      </div>
                      <ul
                        className="iti__country-list iti__hide"
                        id="iti-0__country-listbox"
                        role="listbox"
                        aria-label="List of countries"
                      >
                        <li
                          className="iti__country iti__preferred iti__active"
                          tabIndex={-1}
                          id="iti-0__item-us-preferred"
                          role="option"
                          data-dial-code={1}
                          data-country-code="us"
                          aria-selected="true"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__us" />
                          </div>
                          <span className="iti__country-name">
                            United States
                          </span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__preferred"
                          tabIndex={-1}
                          id="iti-0__item-gb-preferred"
                          role="option"
                          data-dial-code={44}
                          data-country-code="gb"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__gb" />
                          </div>
                          <span className="iti__country-name">
                            United Kingdom
                          </span>
                          <span className="iti__dial-code">+44</span>
                        </li>
                        <li
                          className="iti__divider"
                          role="separator"
                          aria-disabled="true"
                        />
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-af"
                          role="option"
                          data-dial-code={93}
                          data-country-code="af"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__af" />
                          </div>
                          <span className="iti__country-name">
                            Afghanistan (‫افغانستان‬‎)
                          </span>
                          <span className="iti__dial-code">+93</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-al"
                          role="option"
                          data-dial-code={355}
                          data-country-code="al"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__al" />
                          </div>
                          <span className="iti__country-name">
                            Albania (Shqipëri)
                          </span>
                          <span className="iti__dial-code">+355</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-dz"
                          role="option"
                          data-dial-code={213}
                          data-country-code="dz"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__dz" />
                          </div>
                          <span className="iti__country-name">
                            Algeria (‫الجزائر‬‎)
                          </span>
                          <span className="iti__dial-code">+213</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-as"
                          role="option"
                          data-dial-code={1}
                          data-country-code="as"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__as" />
                          </div>
                          <span className="iti__country-name">
                            American Samoa
                          </span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ad"
                          role="option"
                          data-dial-code={376}
                          data-country-code="ad"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ad" />
                          </div>
                          <span className="iti__country-name">Andorra</span>
                          <span className="iti__dial-code">+376</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ao"
                          role="option"
                          data-dial-code={244}
                          data-country-code="ao"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ao" />
                          </div>
                          <span className="iti__country-name">Angola</span>
                          <span className="iti__dial-code">+244</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ai"
                          role="option"
                          data-dial-code={1}
                          data-country-code="ai"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ai" />
                          </div>
                          <span className="iti__country-name">Anguilla</span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ag"
                          role="option"
                          data-dial-code={1}
                          data-country-code="ag"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ag" />
                          </div>
                          <span className="iti__country-name">
                            Antigua and Barbuda
                          </span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ar"
                          role="option"
                          data-dial-code={54}
                          data-country-code="ar"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ar" />
                          </div>
                          <span className="iti__country-name">Argentina</span>
                          <span className="iti__dial-code">+54</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-am"
                          role="option"
                          data-dial-code={374}
                          data-country-code="am"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__am" />
                          </div>
                          <span className="iti__country-name">
                            Armenia (Հայաստան)
                          </span>
                          <span className="iti__dial-code">+374</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-aw"
                          role="option"
                          data-dial-code={297}
                          data-country-code="aw"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__aw" />
                          </div>
                          <span className="iti__country-name">Aruba</span>
                          <span className="iti__dial-code">+297</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ac"
                          role="option"
                          data-dial-code={247}
                          data-country-code="ac"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ac" />
                          </div>
                          <span className="iti__country-name">
                            Ascension Island
                          </span>
                          <span className="iti__dial-code">+247</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-au"
                          role="option"
                          data-dial-code={61}
                          data-country-code="au"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__au" />
                          </div>
                          <span className="iti__country-name">Australia</span>
                          <span className="iti__dial-code">+61</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-at"
                          role="option"
                          data-dial-code={43}
                          data-country-code="at"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__at" />
                          </div>
                          <span className="iti__country-name">
                            Austria (Österreich)
                          </span>
                          <span className="iti__dial-code">+43</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-az"
                          role="option"
                          data-dial-code={994}
                          data-country-code="az"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__az" />
                          </div>
                          <span className="iti__country-name">
                            Azerbaijan (Azərbaycan)
                          </span>
                          <span className="iti__dial-code">+994</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-bs"
                          role="option"
                          data-dial-code={1}
                          data-country-code="bs"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__bs" />
                          </div>
                          <span className="iti__country-name">Bahamas</span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-bh"
                          role="option"
                          data-dial-code={973}
                          data-country-code="bh"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__bh" />
                          </div>
                          <span className="iti__country-name">
                            Bahrain (‫البحرين‬‎)
                          </span>
                          <span className="iti__dial-code">+973</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-bd"
                          role="option"
                          data-dial-code={880}
                          data-country-code="bd"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__bd" />
                          </div>
                          <span className="iti__country-name">
                            Bangladesh (বাংলাদেশ)
                          </span>
                          <span className="iti__dial-code">+880</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-bb"
                          role="option"
                          data-dial-code={1}
                          data-country-code="bb"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__bb" />
                          </div>
                          <span className="iti__country-name">Barbados</span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-by"
                          role="option"
                          data-dial-code={375}
                          data-country-code="by"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__by" />
                          </div>
                          <span className="iti__country-name">
                            Belarus (Беларусь)
                          </span>
                          <span className="iti__dial-code">+375</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-be"
                          role="option"
                          data-dial-code={32}
                          data-country-code="be"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__be" />
                          </div>
                          <span className="iti__country-name">
                            Belgium (België)
                          </span>
                          <span className="iti__dial-code">+32</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-bz"
                          role="option"
                          data-dial-code={501}
                          data-country-code="bz"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__bz" />
                          </div>
                          <span className="iti__country-name">Belize</span>
                          <span className="iti__dial-code">+501</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-bj"
                          role="option"
                          data-dial-code={229}
                          data-country-code="bj"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__bj" />
                          </div>
                          <span className="iti__country-name">
                            Benin (Bénin)
                          </span>
                          <span className="iti__dial-code">+229</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-bm"
                          role="option"
                          data-dial-code={1}
                          data-country-code="bm"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__bm" />
                          </div>
                          <span className="iti__country-name">Bermuda</span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-bt"
                          role="option"
                          data-dial-code={975}
                          data-country-code="bt"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__bt" />
                          </div>
                          <span className="iti__country-name">
                            Bhutan (འབྲུག)
                          </span>
                          <span className="iti__dial-code">+975</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-bo"
                          role="option"
                          data-dial-code={591}
                          data-country-code="bo"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__bo" />
                          </div>
                          <span className="iti__country-name">Bolivia</span>
                          <span className="iti__dial-code">+591</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ba"
                          role="option"
                          data-dial-code={387}
                          data-country-code="ba"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ba" />
                          </div>
                          <span className="iti__country-name">
                            Bosnia and Herzegovina (Босна и Херцеговина)
                          </span>
                          <span className="iti__dial-code">+387</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-bw"
                          role="option"
                          data-dial-code={267}
                          data-country-code="bw"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__bw" />
                          </div>
                          <span className="iti__country-name">Botswana</span>
                          <span className="iti__dial-code">+267</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-br"
                          role="option"
                          data-dial-code={55}
                          data-country-code="br"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__br" />
                          </div>
                          <span className="iti__country-name">
                            Brazil (Brasil)
                          </span>
                          <span className="iti__dial-code">+55</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-io"
                          role="option"
                          data-dial-code={246}
                          data-country-code="io"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__io" />
                          </div>
                          <span className="iti__country-name">
                            British Indian Ocean Territory
                          </span>
                          <span className="iti__dial-code">+246</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-vg"
                          role="option"
                          data-dial-code={1}
                          data-country-code="vg"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__vg" />
                          </div>
                          <span className="iti__country-name">
                            British Virgin Islands
                          </span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-bn"
                          role="option"
                          data-dial-code={673}
                          data-country-code="bn"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__bn" />
                          </div>
                          <span className="iti__country-name">Brunei</span>
                          <span className="iti__dial-code">+673</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-bg"
                          role="option"
                          data-dial-code={359}
                          data-country-code="bg"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__bg" />
                          </div>
                          <span className="iti__country-name">
                            Bulgaria (България)
                          </span>
                          <span className="iti__dial-code">+359</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-bf"
                          role="option"
                          data-dial-code={226}
                          data-country-code="bf"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__bf" />
                          </div>
                          <span className="iti__country-name">
                            Burkina Faso
                          </span>
                          <span className="iti__dial-code">+226</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-bi"
                          role="option"
                          data-dial-code={257}
                          data-country-code="bi"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__bi" />
                          </div>
                          <span className="iti__country-name">
                            Burundi (Uburundi)
                          </span>
                          <span className="iti__dial-code">+257</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-kh"
                          role="option"
                          data-dial-code={855}
                          data-country-code="kh"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__kh" />
                          </div>
                          <span className="iti__country-name">
                            Cambodia (កម្ពុជា)
                          </span>
                          <span className="iti__dial-code">+855</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-cm"
                          role="option"
                          data-dial-code={237}
                          data-country-code="cm"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__cm" />
                          </div>
                          <span className="iti__country-name">
                            Cameroon (Cameroun)
                          </span>
                          <span className="iti__dial-code">+237</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ca"
                          role="option"
                          data-dial-code={1}
                          data-country-code="ca"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ca" />
                          </div>
                          <span className="iti__country-name">Canada</span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-cv"
                          role="option"
                          data-dial-code={238}
                          data-country-code="cv"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__cv" />
                          </div>
                          <span className="iti__country-name">
                            Cape Verde (Kabu Verdi)
                          </span>
                          <span className="iti__dial-code">+238</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-bq"
                          role="option"
                          data-dial-code={599}
                          data-country-code="bq"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__bq" />
                          </div>
                          <span className="iti__country-name">
                            Caribbean Netherlands
                          </span>
                          <span className="iti__dial-code">+599</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ky"
                          role="option"
                          data-dial-code={1}
                          data-country-code="ky"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ky" />
                          </div>
                          <span className="iti__country-name">
                            Cayman Islands
                          </span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-cf"
                          role="option"
                          data-dial-code={236}
                          data-country-code="cf"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__cf" />
                          </div>
                          <span className="iti__country-name">
                            Central African Republic (République centrafricaine)
                          </span>
                          <span className="iti__dial-code">+236</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-td"
                          role="option"
                          data-dial-code={235}
                          data-country-code="td"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__td" />
                          </div>
                          <span className="iti__country-name">
                            Chad (Tchad)
                          </span>
                          <span className="iti__dial-code">+235</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-cl"
                          role="option"
                          data-dial-code={56}
                          data-country-code="cl"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__cl" />
                          </div>
                          <span className="iti__country-name">Chile</span>
                          <span className="iti__dial-code">+56</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-cn"
                          role="option"
                          data-dial-code={86}
                          data-country-code="cn"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__cn" />
                          </div>
                          <span className="iti__country-name">
                            China (中国)
                          </span>
                          <span className="iti__dial-code">+86</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-cx"
                          role="option"
                          data-dial-code={61}
                          data-country-code="cx"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__cx" />
                          </div>
                          <span className="iti__country-name">
                            Christmas Island
                          </span>
                          <span className="iti__dial-code">+61</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-cc"
                          role="option"
                          data-dial-code={61}
                          data-country-code="cc"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__cc" />
                          </div>
                          <span className="iti__country-name">
                            Cocos (Keeling) Islands
                          </span>
                          <span className="iti__dial-code">+61</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-co"
                          role="option"
                          data-dial-code={57}
                          data-country-code="co"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__co" />
                          </div>
                          <span className="iti__country-name">Colombia</span>
                          <span className="iti__dial-code">+57</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-km"
                          role="option"
                          data-dial-code={269}
                          data-country-code="km"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__km" />
                          </div>
                          <span className="iti__country-name">
                            Comoros (‫جزر القمر‬‎)
                          </span>
                          <span className="iti__dial-code">+269</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-cd"
                          role="option"
                          data-dial-code={243}
                          data-country-code="cd"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__cd" />
                          </div>
                          <span className="iti__country-name">
                            Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)
                          </span>
                          <span className="iti__dial-code">+243</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-cg"
                          role="option"
                          data-dial-code={242}
                          data-country-code="cg"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__cg" />
                          </div>
                          <span className="iti__country-name">
                            Congo (Republic) (Congo-Brazzaville)
                          </span>
                          <span className="iti__dial-code">+242</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ck"
                          role="option"
                          data-dial-code={682}
                          data-country-code="ck"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ck" />
                          </div>
                          <span className="iti__country-name">
                            Cook Islands
                          </span>
                          <span className="iti__dial-code">+682</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-cr"
                          role="option"
                          data-dial-code={506}
                          data-country-code="cr"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__cr" />
                          </div>
                          <span className="iti__country-name">Costa Rica</span>
                          <span className="iti__dial-code">+506</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ci"
                          role="option"
                          data-dial-code={225}
                          data-country-code="ci"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ci" />
                          </div>
                          <span className="iti__country-name">
                            Côte d’Ivoire
                          </span>
                          <span className="iti__dial-code">+225</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-hr"
                          role="option"
                          data-dial-code={385}
                          data-country-code="hr"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__hr" />
                          </div>
                          <span className="iti__country-name">
                            Croatia (Hrvatska)
                          </span>
                          <span className="iti__dial-code">+385</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-cu"
                          role="option"
                          data-dial-code={53}
                          data-country-code="cu"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__cu" />
                          </div>
                          <span className="iti__country-name">Cuba</span>
                          <span className="iti__dial-code">+53</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-cw"
                          role="option"
                          data-dial-code={599}
                          data-country-code="cw"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__cw" />
                          </div>
                          <span className="iti__country-name">Curaçao</span>
                          <span className="iti__dial-code">+599</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-cy"
                          role="option"
                          data-dial-code={357}
                          data-country-code="cy"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__cy" />
                          </div>
                          <span className="iti__country-name">
                            Cyprus (Κύπρος)
                          </span>
                          <span className="iti__dial-code">+357</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-cz"
                          role="option"
                          data-dial-code={420}
                          data-country-code="cz"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__cz" />
                          </div>
                          <span className="iti__country-name">
                            Czech Republic (Česká republika)
                          </span>
                          <span className="iti__dial-code">+420</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-dk"
                          role="option"
                          data-dial-code={45}
                          data-country-code="dk"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__dk" />
                          </div>
                          <span className="iti__country-name">
                            Denmark (Danmark)
                          </span>
                          <span className="iti__dial-code">+45</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-dj"
                          role="option"
                          data-dial-code={253}
                          data-country-code="dj"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__dj" />
                          </div>
                          <span className="iti__country-name">Djibouti</span>
                          <span className="iti__dial-code">+253</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-dm"
                          role="option"
                          data-dial-code={1}
                          data-country-code="dm"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__dm" />
                          </div>
                          <span className="iti__country-name">Dominica</span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-do"
                          role="option"
                          data-dial-code={1}
                          data-country-code="do"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__do" />
                          </div>
                          <span className="iti__country-name">
                            Dominican Republic (República Dominicana)
                          </span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ec"
                          role="option"
                          data-dial-code={593}
                          data-country-code="ec"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ec" />
                          </div>
                          <span className="iti__country-name">Ecuador</span>
                          <span className="iti__dial-code">+593</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-eg"
                          role="option"
                          data-dial-code={20}
                          data-country-code="eg"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__eg" />
                          </div>
                          <span className="iti__country-name">
                            Egypt (‫مصر‬‎)
                          </span>
                          <span className="iti__dial-code">+20</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-sv"
                          role="option"
                          data-dial-code={503}
                          data-country-code="sv"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__sv" />
                          </div>
                          <span className="iti__country-name">El Salvador</span>
                          <span className="iti__dial-code">+503</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-gq"
                          role="option"
                          data-dial-code={240}
                          data-country-code="gq"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__gq" />
                          </div>
                          <span className="iti__country-name">
                            Equatorial Guinea (Guinea Ecuatorial)
                          </span>
                          <span className="iti__dial-code">+240</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-er"
                          role="option"
                          data-dial-code={291}
                          data-country-code="er"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__er" />
                          </div>
                          <span className="iti__country-name">Eritrea</span>
                          <span className="iti__dial-code">+291</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ee"
                          role="option"
                          data-dial-code={372}
                          data-country-code="ee"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ee" />
                          </div>
                          <span className="iti__country-name">
                            Estonia (Eesti)
                          </span>
                          <span className="iti__dial-code">+372</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-sz"
                          role="option"
                          data-dial-code={268}
                          data-country-code="sz"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__sz" />
                          </div>
                          <span className="iti__country-name">Eswatini</span>
                          <span className="iti__dial-code">+268</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-et"
                          role="option"
                          data-dial-code={251}
                          data-country-code="et"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__et" />
                          </div>
                          <span className="iti__country-name">Ethiopia</span>
                          <span className="iti__dial-code">+251</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-fk"
                          role="option"
                          data-dial-code={500}
                          data-country-code="fk"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__fk" />
                          </div>
                          <span className="iti__country-name">
                            Falkland Islands (Islas Malvinas)
                          </span>
                          <span className="iti__dial-code">+500</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-fo"
                          role="option"
                          data-dial-code={298}
                          data-country-code="fo"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__fo" />
                          </div>
                          <span className="iti__country-name">
                            Faroe Islands (Føroyar)
                          </span>
                          <span className="iti__dial-code">+298</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-fj"
                          role="option"
                          data-dial-code={679}
                          data-country-code="fj"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__fj" />
                          </div>
                          <span className="iti__country-name">Fiji</span>
                          <span className="iti__dial-code">+679</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-fi"
                          role="option"
                          data-dial-code={358}
                          data-country-code="fi"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__fi" />
                          </div>
                          <span className="iti__country-name">
                            Finland (Suomi)
                          </span>
                          <span className="iti__dial-code">+358</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-fr"
                          role="option"
                          data-dial-code={33}
                          data-country-code="fr"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__fr" />
                          </div>
                          <span className="iti__country-name">France</span>
                          <span className="iti__dial-code">+33</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-gf"
                          role="option"
                          data-dial-code={594}
                          data-country-code="gf"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__gf" />
                          </div>
                          <span className="iti__country-name">
                            French Guiana (Guyane française)
                          </span>
                          <span className="iti__dial-code">+594</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-pf"
                          role="option"
                          data-dial-code={689}
                          data-country-code="pf"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__pf" />
                          </div>
                          <span className="iti__country-name">
                            French Polynesia (Polynésie française)
                          </span>
                          <span className="iti__dial-code">+689</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ga"
                          role="option"
                          data-dial-code={241}
                          data-country-code="ga"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ga" />
                          </div>
                          <span className="iti__country-name">Gabon</span>
                          <span className="iti__dial-code">+241</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-gm"
                          role="option"
                          data-dial-code={220}
                          data-country-code="gm"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__gm" />
                          </div>
                          <span className="iti__country-name">Gambia</span>
                          <span className="iti__dial-code">+220</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ge"
                          role="option"
                          data-dial-code={995}
                          data-country-code="ge"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ge" />
                          </div>
                          <span className="iti__country-name">
                            Georgia (საქართველო)
                          </span>
                          <span className="iti__dial-code">+995</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-de"
                          role="option"
                          data-dial-code={49}
                          data-country-code="de"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__de" />
                          </div>
                          <span className="iti__country-name">
                            Germany (Deutschland)
                          </span>
                          <span className="iti__dial-code">+49</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-gh"
                          role="option"
                          data-dial-code={233}
                          data-country-code="gh"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__gh" />
                          </div>
                          <span className="iti__country-name">
                            Ghana (Gaana)
                          </span>
                          <span className="iti__dial-code">+233</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-gi"
                          role="option"
                          data-dial-code={350}
                          data-country-code="gi"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__gi" />
                          </div>
                          <span className="iti__country-name">Gibraltar</span>
                          <span className="iti__dial-code">+350</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-gr"
                          role="option"
                          data-dial-code={30}
                          data-country-code="gr"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__gr" />
                          </div>
                          <span className="iti__country-name">
                            Greece (Ελλάδα)
                          </span>
                          <span className="iti__dial-code">+30</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-gl"
                          role="option"
                          data-dial-code={299}
                          data-country-code="gl"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__gl" />
                          </div>
                          <span className="iti__country-name">
                            Greenland (Kalaallit Nunaat)
                          </span>
                          <span className="iti__dial-code">+299</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-gd"
                          role="option"
                          data-dial-code={1}
                          data-country-code="gd"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__gd" />
                          </div>
                          <span className="iti__country-name">Grenada</span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-gp"
                          role="option"
                          data-dial-code={590}
                          data-country-code="gp"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__gp" />
                          </div>
                          <span className="iti__country-name">Guadeloupe</span>
                          <span className="iti__dial-code">+590</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-gu"
                          role="option"
                          data-dial-code={1}
                          data-country-code="gu"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__gu" />
                          </div>
                          <span className="iti__country-name">Guam</span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-gt"
                          role="option"
                          data-dial-code={502}
                          data-country-code="gt"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__gt" />
                          </div>
                          <span className="iti__country-name">Guatemala</span>
                          <span className="iti__dial-code">+502</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-gg"
                          role="option"
                          data-dial-code={44}
                          data-country-code="gg"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__gg" />
                          </div>
                          <span className="iti__country-name">Guernsey</span>
                          <span className="iti__dial-code">+44</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-gn"
                          role="option"
                          data-dial-code={224}
                          data-country-code="gn"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__gn" />
                          </div>
                          <span className="iti__country-name">
                            Guinea (Guinée)
                          </span>
                          <span className="iti__dial-code">+224</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-gw"
                          role="option"
                          data-dial-code={245}
                          data-country-code="gw"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__gw" />
                          </div>
                          <span className="iti__country-name">
                            Guinea-Bissau (Guiné Bissau)
                          </span>
                          <span className="iti__dial-code">+245</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-gy"
                          role="option"
                          data-dial-code={592}
                          data-country-code="gy"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__gy" />
                          </div>
                          <span className="iti__country-name">Guyana</span>
                          <span className="iti__dial-code">+592</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ht"
                          role="option"
                          data-dial-code={509}
                          data-country-code="ht"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ht" />
                          </div>
                          <span className="iti__country-name">Haiti</span>
                          <span className="iti__dial-code">+509</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-hn"
                          role="option"
                          data-dial-code={504}
                          data-country-code="hn"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__hn" />
                          </div>
                          <span className="iti__country-name">Honduras</span>
                          <span className="iti__dial-code">+504</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-hk"
                          role="option"
                          data-dial-code={852}
                          data-country-code="hk"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__hk" />
                          </div>
                          <span className="iti__country-name">
                            Hong Kong (香港)
                          </span>
                          <span className="iti__dial-code">+852</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-hu"
                          role="option"
                          data-dial-code={36}
                          data-country-code="hu"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__hu" />
                          </div>
                          <span className="iti__country-name">
                            Hungary (Magyarország)
                          </span>
                          <span className="iti__dial-code">+36</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-is"
                          role="option"
                          data-dial-code={354}
                          data-country-code="is"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__is" />
                          </div>
                          <span className="iti__country-name">
                            Iceland (Ísland)
                          </span>
                          <span className="iti__dial-code">+354</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-in"
                          role="option"
                          data-dial-code={91}
                          data-country-code="in"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__in" />
                          </div>
                          <span className="iti__country-name">
                            India (भारत)
                          </span>
                          <span className="iti__dial-code">+91</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-id"
                          role="option"
                          data-dial-code={62}
                          data-country-code="id"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__id" />
                          </div>
                          <span className="iti__country-name">Indonesia</span>
                          <span className="iti__dial-code">+62</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ir"
                          role="option"
                          data-dial-code={98}
                          data-country-code="ir"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ir" />
                          </div>
                          <span className="iti__country-name">
                            Iran (‫ایران‬‎)
                          </span>
                          <span className="iti__dial-code">+98</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-iq"
                          role="option"
                          data-dial-code={964}
                          data-country-code="iq"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__iq" />
                          </div>
                          <span className="iti__country-name">
                            Iraq (‫العراق‬‎)
                          </span>
                          <span className="iti__dial-code">+964</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ie"
                          role="option"
                          data-dial-code={353}
                          data-country-code="ie"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ie" />
                          </div>
                          <span className="iti__country-name">Ireland</span>
                          <span className="iti__dial-code">+353</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-im"
                          role="option"
                          data-dial-code={44}
                          data-country-code="im"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__im" />
                          </div>
                          <span className="iti__country-name">Isle of Man</span>
                          <span className="iti__dial-code">+44</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-il"
                          role="option"
                          data-dial-code={972}
                          data-country-code="il"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__il" />
                          </div>
                          <span className="iti__country-name">
                            Israel (‫ישראל‬‎)
                          </span>
                          <span className="iti__dial-code">+972</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-it"
                          role="option"
                          data-dial-code={39}
                          data-country-code="it"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__it" />
                          </div>
                          <span className="iti__country-name">
                            Italy (Italia)
                          </span>
                          <span className="iti__dial-code">+39</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-jm"
                          role="option"
                          data-dial-code={1}
                          data-country-code="jm"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__jm" />
                          </div>
                          <span className="iti__country-name">Jamaica</span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-jp"
                          role="option"
                          data-dial-code={81}
                          data-country-code="jp"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__jp" />
                          </div>
                          <span className="iti__country-name">
                            Japan (日本)
                          </span>
                          <span className="iti__dial-code">+81</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-je"
                          role="option"
                          data-dial-code={44}
                          data-country-code="je"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__je" />
                          </div>
                          <span className="iti__country-name">Jersey</span>
                          <span className="iti__dial-code">+44</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-jo"
                          role="option"
                          data-dial-code={962}
                          data-country-code="jo"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__jo" />
                          </div>
                          <span className="iti__country-name">
                            Jordan (‫الأردن‬‎)
                          </span>
                          <span className="iti__dial-code">+962</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-kz"
                          role="option"
                          data-dial-code={7}
                          data-country-code="kz"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__kz" />
                          </div>
                          <span className="iti__country-name">
                            Kazakhstan (Казахстан)
                          </span>
                          <span className="iti__dial-code">+7</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ke"
                          role="option"
                          data-dial-code={254}
                          data-country-code="ke"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ke" />
                          </div>
                          <span className="iti__country-name">Kenya</span>
                          <span className="iti__dial-code">+254</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ki"
                          role="option"
                          data-dial-code={686}
                          data-country-code="ki"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ki" />
                          </div>
                          <span className="iti__country-name">Kiribati</span>
                          <span className="iti__dial-code">+686</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-xk"
                          role="option"
                          data-dial-code={383}
                          data-country-code="xk"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__xk" />
                          </div>
                          <span className="iti__country-name">Kosovo</span>
                          <span className="iti__dial-code">+383</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-kw"
                          role="option"
                          data-dial-code={965}
                          data-country-code="kw"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__kw" />
                          </div>
                          <span className="iti__country-name">
                            Kuwait (‫الكويت‬‎)
                          </span>
                          <span className="iti__dial-code">+965</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-kg"
                          role="option"
                          data-dial-code={996}
                          data-country-code="kg"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__kg" />
                          </div>
                          <span className="iti__country-name">
                            Kyrgyzstan (Кыргызстан)
                          </span>
                          <span className="iti__dial-code">+996</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-la"
                          role="option"
                          data-dial-code={856}
                          data-country-code="la"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__la" />
                          </div>
                          <span className="iti__country-name">Laos (ລາວ)</span>
                          <span className="iti__dial-code">+856</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-lv"
                          role="option"
                          data-dial-code={371}
                          data-country-code="lv"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__lv" />
                          </div>
                          <span className="iti__country-name">
                            Latvia (Latvija)
                          </span>
                          <span className="iti__dial-code">+371</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-lb"
                          role="option"
                          data-dial-code={961}
                          data-country-code="lb"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__lb" />
                          </div>
                          <span className="iti__country-name">
                            Lebanon (‫لبنان‬‎)
                          </span>
                          <span className="iti__dial-code">+961</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ls"
                          role="option"
                          data-dial-code={266}
                          data-country-code="ls"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ls" />
                          </div>
                          <span className="iti__country-name">Lesotho</span>
                          <span className="iti__dial-code">+266</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-lr"
                          role="option"
                          data-dial-code={231}
                          data-country-code="lr"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__lr" />
                          </div>
                          <span className="iti__country-name">Liberia</span>
                          <span className="iti__dial-code">+231</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ly"
                          role="option"
                          data-dial-code={218}
                          data-country-code="ly"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ly" />
                          </div>
                          <span className="iti__country-name">
                            Libya (‫ليبيا‬‎)
                          </span>
                          <span className="iti__dial-code">+218</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-li"
                          role="option"
                          data-dial-code={423}
                          data-country-code="li"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__li" />
                          </div>
                          <span className="iti__country-name">
                            Liechtenstein
                          </span>
                          <span className="iti__dial-code">+423</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-lt"
                          role="option"
                          data-dial-code={370}
                          data-country-code="lt"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__lt" />
                          </div>
                          <span className="iti__country-name">
                            Lithuania (Lietuva)
                          </span>
                          <span className="iti__dial-code">+370</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-lu"
                          role="option"
                          data-dial-code={352}
                          data-country-code="lu"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__lu" />
                          </div>
                          <span className="iti__country-name">Luxembourg</span>
                          <span className="iti__dial-code">+352</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-mo"
                          role="option"
                          data-dial-code={853}
                          data-country-code="mo"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__mo" />
                          </div>
                          <span className="iti__country-name">
                            Macau (澳門)
                          </span>
                          <span className="iti__dial-code">+853</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-mk"
                          role="option"
                          data-dial-code={389}
                          data-country-code="mk"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__mk" />
                          </div>
                          <span className="iti__country-name">
                            Macedonia (FYROM) (Македонија)
                          </span>
                          <span className="iti__dial-code">+389</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-mg"
                          role="option"
                          data-dial-code={261}
                          data-country-code="mg"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__mg" />
                          </div>
                          <span className="iti__country-name">
                            Madagascar (Madagasikara)
                          </span>
                          <span className="iti__dial-code">+261</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-mw"
                          role="option"
                          data-dial-code={265}
                          data-country-code="mw"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__mw" />
                          </div>
                          <span className="iti__country-name">Malawi</span>
                          <span className="iti__dial-code">+265</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-my"
                          role="option"
                          data-dial-code={60}
                          data-country-code="my"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__my" />
                          </div>
                          <span className="iti__country-name">Malaysia</span>
                          <span className="iti__dial-code">+60</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-mv"
                          role="option"
                          data-dial-code={960}
                          data-country-code="mv"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__mv" />
                          </div>
                          <span className="iti__country-name">Maldives</span>
                          <span className="iti__dial-code">+960</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ml"
                          role="option"
                          data-dial-code={223}
                          data-country-code="ml"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ml" />
                          </div>
                          <span className="iti__country-name">Mali</span>
                          <span className="iti__dial-code">+223</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-mt"
                          role="option"
                          data-dial-code={356}
                          data-country-code="mt"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__mt" />
                          </div>
                          <span className="iti__country-name">Malta</span>
                          <span className="iti__dial-code">+356</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-mh"
                          role="option"
                          data-dial-code={692}
                          data-country-code="mh"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__mh" />
                          </div>
                          <span className="iti__country-name">
                            Marshall Islands
                          </span>
                          <span className="iti__dial-code">+692</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-mq"
                          role="option"
                          data-dial-code={596}
                          data-country-code="mq"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__mq" />
                          </div>
                          <span className="iti__country-name">Martinique</span>
                          <span className="iti__dial-code">+596</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-mr"
                          role="option"
                          data-dial-code={222}
                          data-country-code="mr"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__mr" />
                          </div>
                          <span className="iti__country-name">
                            Mauritania (‫موريتانيا‬‎)
                          </span>
                          <span className="iti__dial-code">+222</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-mu"
                          role="option"
                          data-dial-code={230}
                          data-country-code="mu"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__mu" />
                          </div>
                          <span className="iti__country-name">
                            Mauritius (Moris)
                          </span>
                          <span className="iti__dial-code">+230</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-yt"
                          role="option"
                          data-dial-code={262}
                          data-country-code="yt"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__yt" />
                          </div>
                          <span className="iti__country-name">Mayotte</span>
                          <span className="iti__dial-code">+262</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-mx"
                          role="option"
                          data-dial-code={52}
                          data-country-code="mx"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__mx" />
                          </div>
                          <span className="iti__country-name">
                            Mexico (México)
                          </span>
                          <span className="iti__dial-code">+52</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-fm"
                          role="option"
                          data-dial-code={691}
                          data-country-code="fm"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__fm" />
                          </div>
                          <span className="iti__country-name">Micronesia</span>
                          <span className="iti__dial-code">+691</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-md"
                          role="option"
                          data-dial-code={373}
                          data-country-code="md"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__md" />
                          </div>
                          <span className="iti__country-name">
                            Moldova (Republica Moldova)
                          </span>
                          <span className="iti__dial-code">+373</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-mc"
                          role="option"
                          data-dial-code={377}
                          data-country-code="mc"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__mc" />
                          </div>
                          <span className="iti__country-name">Monaco</span>
                          <span className="iti__dial-code">+377</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-mn"
                          role="option"
                          data-dial-code={976}
                          data-country-code="mn"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__mn" />
                          </div>
                          <span className="iti__country-name">
                            Mongolia (Монгол)
                          </span>
                          <span className="iti__dial-code">+976</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-me"
                          role="option"
                          data-dial-code={382}
                          data-country-code="me"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__me" />
                          </div>
                          <span className="iti__country-name">
                            Montenegro (Crna Gora)
                          </span>
                          <span className="iti__dial-code">+382</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ms"
                          role="option"
                          data-dial-code={1}
                          data-country-code="ms"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ms" />
                          </div>
                          <span className="iti__country-name">Montserrat</span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ma"
                          role="option"
                          data-dial-code={212}
                          data-country-code="ma"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ma" />
                          </div>
                          <span className="iti__country-name">
                            Morocco (‫المغرب‬‎)
                          </span>
                          <span className="iti__dial-code">+212</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-mz"
                          role="option"
                          data-dial-code={258}
                          data-country-code="mz"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__mz" />
                          </div>
                          <span className="iti__country-name">
                            Mozambique (Moçambique)
                          </span>
                          <span className="iti__dial-code">+258</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-mm"
                          role="option"
                          data-dial-code={95}
                          data-country-code="mm"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__mm" />
                          </div>
                          <span className="iti__country-name">
                            Myanmar (Burma) (မြန်မာ)
                          </span>
                          <span className="iti__dial-code">+95</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-na"
                          role="option"
                          data-dial-code={264}
                          data-country-code="na"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__na" />
                          </div>
                          <span className="iti__country-name">
                            Namibia (Namibië)
                          </span>
                          <span className="iti__dial-code">+264</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-nr"
                          role="option"
                          data-dial-code={674}
                          data-country-code="nr"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__nr" />
                          </div>
                          <span className="iti__country-name">Nauru</span>
                          <span className="iti__dial-code">+674</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-np"
                          role="option"
                          data-dial-code={977}
                          data-country-code="np"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__np" />
                          </div>
                          <span className="iti__country-name">
                            Nepal (नेपाल)
                          </span>
                          <span className="iti__dial-code">+977</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-nl"
                          role="option"
                          data-dial-code={31}
                          data-country-code="nl"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__nl" />
                          </div>
                          <span className="iti__country-name">
                            Netherlands (Nederland)
                          </span>
                          <span className="iti__dial-code">+31</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-nc"
                          role="option"
                          data-dial-code={687}
                          data-country-code="nc"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__nc" />
                          </div>
                          <span className="iti__country-name">
                            New Caledonia (Nouvelle-Calédonie)
                          </span>
                          <span className="iti__dial-code">+687</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-nz"
                          role="option"
                          data-dial-code={64}
                          data-country-code="nz"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__nz" />
                          </div>
                          <span className="iti__country-name">New Zealand</span>
                          <span className="iti__dial-code">+64</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ni"
                          role="option"
                          data-dial-code={505}
                          data-country-code="ni"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ni" />
                          </div>
                          <span className="iti__country-name">Nicaragua</span>
                          <span className="iti__dial-code">+505</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ne"
                          role="option"
                          data-dial-code={227}
                          data-country-code="ne"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ne" />
                          </div>
                          <span className="iti__country-name">
                            Niger (Nijar)
                          </span>
                          <span className="iti__dial-code">+227</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ng"
                          role="option"
                          data-dial-code={234}
                          data-country-code="ng"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ng" />
                          </div>
                          <span className="iti__country-name">Nigeria</span>
                          <span className="iti__dial-code">+234</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-nu"
                          role="option"
                          data-dial-code={683}
                          data-country-code="nu"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__nu" />
                          </div>
                          <span className="iti__country-name">Niue</span>
                          <span className="iti__dial-code">+683</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-nf"
                          role="option"
                          data-dial-code={672}
                          data-country-code="nf"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__nf" />
                          </div>
                          <span className="iti__country-name">
                            Norfolk Island
                          </span>
                          <span className="iti__dial-code">+672</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-kp"
                          role="option"
                          data-dial-code={850}
                          data-country-code="kp"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__kp" />
                          </div>
                          <span className="iti__country-name">
                            North Korea (조선 민주주의 인민 공화국)
                          </span>
                          <span className="iti__dial-code">+850</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-mp"
                          role="option"
                          data-dial-code={1}
                          data-country-code="mp"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__mp" />
                          </div>
                          <span className="iti__country-name">
                            Northern Mariana Islands
                          </span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-no"
                          role="option"
                          data-dial-code={47}
                          data-country-code="no"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__no" />
                          </div>
                          <span className="iti__country-name">
                            Norway (Norge)
                          </span>
                          <span className="iti__dial-code">+47</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-om"
                          role="option"
                          data-dial-code={968}
                          data-country-code="om"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__om" />
                          </div>
                          <span className="iti__country-name">
                            Oman (‫عُمان‬‎)
                          </span>
                          <span className="iti__dial-code">+968</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-pk"
                          role="option"
                          data-dial-code={92}
                          data-country-code="pk"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__pk" />
                          </div>
                          <span className="iti__country-name">
                            Pakistan (‫پاکستان‬‎)
                          </span>
                          <span className="iti__dial-code">+92</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-pw"
                          role="option"
                          data-dial-code={680}
                          data-country-code="pw"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__pw" />
                          </div>
                          <span className="iti__country-name">Palau</span>
                          <span className="iti__dial-code">+680</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ps"
                          role="option"
                          data-dial-code={970}
                          data-country-code="ps"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ps" />
                          </div>
                          <span className="iti__country-name">
                            Palestine (‫فلسطين‬‎)
                          </span>
                          <span className="iti__dial-code">+970</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-pa"
                          role="option"
                          data-dial-code={507}
                          data-country-code="pa"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__pa" />
                          </div>
                          <span className="iti__country-name">
                            Panama (Panamá)
                          </span>
                          <span className="iti__dial-code">+507</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-pg"
                          role="option"
                          data-dial-code={675}
                          data-country-code="pg"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__pg" />
                          </div>
                          <span className="iti__country-name">
                            Papua New Guinea
                          </span>
                          <span className="iti__dial-code">+675</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-py"
                          role="option"
                          data-dial-code={595}
                          data-country-code="py"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__py" />
                          </div>
                          <span className="iti__country-name">Paraguay</span>
                          <span className="iti__dial-code">+595</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-pe"
                          role="option"
                          data-dial-code={51}
                          data-country-code="pe"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__pe" />
                          </div>
                          <span className="iti__country-name">Peru (Perú)</span>
                          <span className="iti__dial-code">+51</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ph"
                          role="option"
                          data-dial-code={63}
                          data-country-code="ph"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ph" />
                          </div>
                          <span className="iti__country-name">Philippines</span>
                          <span className="iti__dial-code">+63</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-pl"
                          role="option"
                          data-dial-code={48}
                          data-country-code="pl"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__pl" />
                          </div>
                          <span className="iti__country-name">
                            Poland (Polska)
                          </span>
                          <span className="iti__dial-code">+48</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-pt"
                          role="option"
                          data-dial-code={351}
                          data-country-code="pt"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__pt" />
                          </div>
                          <span className="iti__country-name">Portugal</span>
                          <span className="iti__dial-code">+351</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-pr"
                          role="option"
                          data-dial-code={1}
                          data-country-code="pr"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__pr" />
                          </div>
                          <span className="iti__country-name">Puerto Rico</span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-qa"
                          role="option"
                          data-dial-code={974}
                          data-country-code="qa"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__qa" />
                          </div>
                          <span className="iti__country-name">
                            Qatar (‫قطر‬‎)
                          </span>
                          <span className="iti__dial-code">+974</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-re"
                          role="option"
                          data-dial-code={262}
                          data-country-code="re"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__re" />
                          </div>
                          <span className="iti__country-name">
                            Réunion (La Réunion)
                          </span>
                          <span className="iti__dial-code">+262</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ro"
                          role="option"
                          data-dial-code={40}
                          data-country-code="ro"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ro" />
                          </div>
                          <span className="iti__country-name">
                            Romania (România)
                          </span>
                          <span className="iti__dial-code">+40</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ru"
                          role="option"
                          data-dial-code={7}
                          data-country-code="ru"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ru" />
                          </div>
                          <span className="iti__country-name">
                            Russia (Россия)
                          </span>
                          <span className="iti__dial-code">+7</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-rw"
                          role="option"
                          data-dial-code={250}
                          data-country-code="rw"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__rw" />
                          </div>
                          <span className="iti__country-name">Rwanda</span>
                          <span className="iti__dial-code">+250</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-bl"
                          role="option"
                          data-dial-code={590}
                          data-country-code="bl"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__bl" />
                          </div>
                          <span className="iti__country-name">
                            Saint Barthélemy
                          </span>
                          <span className="iti__dial-code">+590</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-sh"
                          role="option"
                          data-dial-code={290}
                          data-country-code="sh"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__sh" />
                          </div>
                          <span className="iti__country-name">
                            Saint Helena
                          </span>
                          <span className="iti__dial-code">+290</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-kn"
                          role="option"
                          data-dial-code={1}
                          data-country-code="kn"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__kn" />
                          </div>
                          <span className="iti__country-name">
                            Saint Kitts and Nevis
                          </span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-lc"
                          role="option"
                          data-dial-code={1}
                          data-country-code="lc"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__lc" />
                          </div>
                          <span className="iti__country-name">Saint Lucia</span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-mf"
                          role="option"
                          data-dial-code={590}
                          data-country-code="mf"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__mf" />
                          </div>
                          <span className="iti__country-name">
                            Saint Martin (Saint-Martin (partie française))
                          </span>
                          <span className="iti__dial-code">+590</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-pm"
                          role="option"
                          data-dial-code={508}
                          data-country-code="pm"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__pm" />
                          </div>
                          <span className="iti__country-name">
                            Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)
                          </span>
                          <span className="iti__dial-code">+508</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-vc"
                          role="option"
                          data-dial-code={1}
                          data-country-code="vc"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__vc" />
                          </div>
                          <span className="iti__country-name">
                            Saint Vincent and the Grenadines
                          </span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ws"
                          role="option"
                          data-dial-code={685}
                          data-country-code="ws"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ws" />
                          </div>
                          <span className="iti__country-name">Samoa</span>
                          <span className="iti__dial-code">+685</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-sm"
                          role="option"
                          data-dial-code={378}
                          data-country-code="sm"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__sm" />
                          </div>
                          <span className="iti__country-name">San Marino</span>
                          <span className="iti__dial-code">+378</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-st"
                          role="option"
                          data-dial-code={239}
                          data-country-code="st"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__st" />
                          </div>
                          <span className="iti__country-name">
                            São Tomé and Príncipe (São Tomé e Príncipe)
                          </span>
                          <span className="iti__dial-code">+239</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-sa"
                          role="option"
                          data-dial-code={966}
                          data-country-code="sa"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__sa" />
                          </div>
                          <span className="iti__country-name">
                            Saudi Arabia (‫المملكة العربية السعودية‬‎)
                          </span>
                          <span className="iti__dial-code">+966</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-sn"
                          role="option"
                          data-dial-code={221}
                          data-country-code="sn"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__sn" />
                          </div>
                          <span className="iti__country-name">
                            Senegal (Sénégal)
                          </span>
                          <span className="iti__dial-code">+221</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-rs"
                          role="option"
                          data-dial-code={381}
                          data-country-code="rs"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__rs" />
                          </div>
                          <span className="iti__country-name">
                            Serbia (Србија)
                          </span>
                          <span className="iti__dial-code">+381</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-sc"
                          role="option"
                          data-dial-code={248}
                          data-country-code="sc"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__sc" />
                          </div>
                          <span className="iti__country-name">Seychelles</span>
                          <span className="iti__dial-code">+248</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-sl"
                          role="option"
                          data-dial-code={232}
                          data-country-code="sl"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__sl" />
                          </div>
                          <span className="iti__country-name">
                            Sierra Leone
                          </span>
                          <span className="iti__dial-code">+232</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-sg"
                          role="option"
                          data-dial-code={65}
                          data-country-code="sg"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__sg" />
                          </div>
                          <span className="iti__country-name">Singapore</span>
                          <span className="iti__dial-code">+65</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-sx"
                          role="option"
                          data-dial-code={1}
                          data-country-code="sx"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__sx" />
                          </div>
                          <span className="iti__country-name">
                            Sint Maarten
                          </span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-sk"
                          role="option"
                          data-dial-code={421}
                          data-country-code="sk"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__sk" />
                          </div>
                          <span className="iti__country-name">
                            Slovakia (Slovensko)
                          </span>
                          <span className="iti__dial-code">+421</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-si"
                          role="option"
                          data-dial-code={386}
                          data-country-code="si"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__si" />
                          </div>
                          <span className="iti__country-name">
                            Slovenia (Slovenija)
                          </span>
                          <span className="iti__dial-code">+386</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-sb"
                          role="option"
                          data-dial-code={677}
                          data-country-code="sb"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__sb" />
                          </div>
                          <span className="iti__country-name">
                            Solomon Islands
                          </span>
                          <span className="iti__dial-code">+677</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-so"
                          role="option"
                          data-dial-code={252}
                          data-country-code="so"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__so" />
                          </div>
                          <span className="iti__country-name">
                            Somalia (Soomaaliya)
                          </span>
                          <span className="iti__dial-code">+252</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-za"
                          role="option"
                          data-dial-code={27}
                          data-country-code="za"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__za" />
                          </div>
                          <span className="iti__country-name">
                            South Africa
                          </span>
                          <span className="iti__dial-code">+27</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-kr"
                          role="option"
                          data-dial-code={82}
                          data-country-code="kr"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__kr" />
                          </div>
                          <span className="iti__country-name">
                            South Korea (대한민국)
                          </span>
                          <span className="iti__dial-code">+82</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ss"
                          role="option"
                          data-dial-code={211}
                          data-country-code="ss"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ss" />
                          </div>
                          <span className="iti__country-name">
                            South Sudan (‫جنوب السودان‬‎)
                          </span>
                          <span className="iti__dial-code">+211</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-es"
                          role="option"
                          data-dial-code={34}
                          data-country-code="es"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__es" />
                          </div>
                          <span className="iti__country-name">
                            Spain (España)
                          </span>
                          <span className="iti__dial-code">+34</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-lk"
                          role="option"
                          data-dial-code={94}
                          data-country-code="lk"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__lk" />
                          </div>
                          <span className="iti__country-name">
                            Sri Lanka (ශ්‍රී ලංකාව)
                          </span>
                          <span className="iti__dial-code">+94</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-sd"
                          role="option"
                          data-dial-code={249}
                          data-country-code="sd"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__sd" />
                          </div>
                          <span className="iti__country-name">
                            Sudan (‫السودان‬‎)
                          </span>
                          <span className="iti__dial-code">+249</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-sr"
                          role="option"
                          data-dial-code={597}
                          data-country-code="sr"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__sr" />
                          </div>
                          <span className="iti__country-name">Suriname</span>
                          <span className="iti__dial-code">+597</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-sj"
                          role="option"
                          data-dial-code={47}
                          data-country-code="sj"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__sj" />
                          </div>
                          <span className="iti__country-name">
                            Svalbard and Jan Mayen
                          </span>
                          <span className="iti__dial-code">+47</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-se"
                          role="option"
                          data-dial-code={46}
                          data-country-code="se"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__se" />
                          </div>
                          <span className="iti__country-name">
                            Sweden (Sverige)
                          </span>
                          <span className="iti__dial-code">+46</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ch"
                          role="option"
                          data-dial-code={41}
                          data-country-code="ch"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ch" />
                          </div>
                          <span className="iti__country-name">
                            Switzerland (Schweiz)
                          </span>
                          <span className="iti__dial-code">+41</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-sy"
                          role="option"
                          data-dial-code={963}
                          data-country-code="sy"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__sy" />
                          </div>
                          <span className="iti__country-name">
                            Syria (‫سوريا‬‎)
                          </span>
                          <span className="iti__dial-code">+963</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-tw"
                          role="option"
                          data-dial-code={886}
                          data-country-code="tw"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__tw" />
                          </div>
                          <span className="iti__country-name">
                            Taiwan (台灣)
                          </span>
                          <span className="iti__dial-code">+886</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-tj"
                          role="option"
                          data-dial-code={992}
                          data-country-code="tj"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__tj" />
                          </div>
                          <span className="iti__country-name">Tajikistan</span>
                          <span className="iti__dial-code">+992</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-tz"
                          role="option"
                          data-dial-code={255}
                          data-country-code="tz"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__tz" />
                          </div>
                          <span className="iti__country-name">Tanzania</span>
                          <span className="iti__dial-code">+255</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-th"
                          role="option"
                          data-dial-code={66}
                          data-country-code="th"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__th" />
                          </div>
                          <span className="iti__country-name">
                            Thailand (ไทย)
                          </span>
                          <span className="iti__dial-code">+66</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-tl"
                          role="option"
                          data-dial-code={670}
                          data-country-code="tl"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__tl" />
                          </div>
                          <span className="iti__country-name">Timor-Leste</span>
                          <span className="iti__dial-code">+670</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-tg"
                          role="option"
                          data-dial-code={228}
                          data-country-code="tg"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__tg" />
                          </div>
                          <span className="iti__country-name">Togo</span>
                          <span className="iti__dial-code">+228</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-tk"
                          role="option"
                          data-dial-code={690}
                          data-country-code="tk"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__tk" />
                          </div>
                          <span className="iti__country-name">Tokelau</span>
                          <span className="iti__dial-code">+690</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-to"
                          role="option"
                          data-dial-code={676}
                          data-country-code="to"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__to" />
                          </div>
                          <span className="iti__country-name">Tonga</span>
                          <span className="iti__dial-code">+676</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-tt"
                          role="option"
                          data-dial-code={1}
                          data-country-code="tt"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__tt" />
                          </div>
                          <span className="iti__country-name">
                            Trinidad and Tobago
                          </span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-tn"
                          role="option"
                          data-dial-code={216}
                          data-country-code="tn"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__tn" />
                          </div>
                          <span className="iti__country-name">
                            Tunisia (‫تونس‬‎)
                          </span>
                          <span className="iti__dial-code">+216</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-tr"
                          role="option"
                          data-dial-code={90}
                          data-country-code="tr"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__tr" />
                          </div>
                          <span className="iti__country-name">
                            Turkey (Türkiye)
                          </span>
                          <span className="iti__dial-code">+90</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-tm"
                          role="option"
                          data-dial-code={993}
                          data-country-code="tm"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__tm" />
                          </div>
                          <span className="iti__country-name">
                            Turkmenistan
                          </span>
                          <span className="iti__dial-code">+993</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-tc"
                          role="option"
                          data-dial-code={1}
                          data-country-code="tc"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__tc" />
                          </div>
                          <span className="iti__country-name">
                            Turks and Caicos Islands
                          </span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-tv"
                          role="option"
                          data-dial-code={688}
                          data-country-code="tv"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__tv" />
                          </div>
                          <span className="iti__country-name">Tuvalu</span>
                          <span className="iti__dial-code">+688</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-vi"
                          role="option"
                          data-dial-code={1}
                          data-country-code="vi"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__vi" />
                          </div>
                          <span className="iti__country-name">
                            U.S. Virgin Islands
                          </span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ug"
                          role="option"
                          data-dial-code={256}
                          data-country-code="ug"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ug" />
                          </div>
                          <span className="iti__country-name">Uganda</span>
                          <span className="iti__dial-code">+256</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ua"
                          role="option"
                          data-dial-code={380}
                          data-country-code="ua"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ua" />
                          </div>
                          <span className="iti__country-name">
                            Ukraine (Україна)
                          </span>
                          <span className="iti__dial-code">+380</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ae"
                          role="option"
                          data-dial-code={971}
                          data-country-code="ae"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ae" />
                          </div>
                          <span className="iti__country-name">
                            United Arab Emirates (‫الإمارات العربية المتحدة‬‎)
                          </span>
                          <span className="iti__dial-code">+971</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-gb"
                          role="option"
                          data-dial-code={44}
                          data-country-code="gb"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__gb" />
                          </div>
                          <span className="iti__country-name">
                            United Kingdom
                          </span>
                          <span className="iti__dial-code">+44</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-us"
                          role="option"
                          data-dial-code={1}
                          data-country-code="us"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__us" />
                          </div>
                          <span className="iti__country-name">
                            United States
                          </span>
                          <span className="iti__dial-code">+1</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-uy"
                          role="option"
                          data-dial-code={598}
                          data-country-code="uy"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__uy" />
                          </div>
                          <span className="iti__country-name">Uruguay</span>
                          <span className="iti__dial-code">+598</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-uz"
                          role="option"
                          data-dial-code={998}
                          data-country-code="uz"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__uz" />
                          </div>
                          <span className="iti__country-name">
                            Uzbekistan (Oʻzbekiston)
                          </span>
                          <span className="iti__dial-code">+998</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-vu"
                          role="option"
                          data-dial-code={678}
                          data-country-code="vu"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__vu" />
                          </div>
                          <span className="iti__country-name">Vanuatu</span>
                          <span className="iti__dial-code">+678</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-va"
                          role="option"
                          data-dial-code={39}
                          data-country-code="va"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__va" />
                          </div>
                          <span className="iti__country-name">
                            Vatican City (Città del Vaticano)
                          </span>
                          <span className="iti__dial-code">+39</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ve"
                          role="option"
                          data-dial-code={58}
                          data-country-code="ve"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ve" />
                          </div>
                          <span className="iti__country-name">Venezuela</span>
                          <span className="iti__dial-code">+58</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-vn"
                          role="option"
                          data-dial-code={84}
                          data-country-code="vn"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__vn" />
                          </div>
                          <span className="iti__country-name">
                            Vietnam (Việt Nam)
                          </span>
                          <span className="iti__dial-code">+84</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-wf"
                          role="option"
                          data-dial-code={681}
                          data-country-code="wf"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__wf" />
                          </div>
                          <span className="iti__country-name">
                            Wallis and Futuna (Wallis-et-Futuna)
                          </span>
                          <span className="iti__dial-code">+681</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-eh"
                          role="option"
                          data-dial-code={212}
                          data-country-code="eh"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__eh" />
                          </div>
                          <span className="iti__country-name">
                            Western Sahara (‫الصحراء الغربية‬‎)
                          </span>
                          <span className="iti__dial-code">+212</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ye"
                          role="option"
                          data-dial-code={967}
                          data-country-code="ye"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ye" />
                          </div>
                          <span className="iti__country-name">
                            Yemen (‫اليمن‬‎)
                          </span>
                          <span className="iti__dial-code">+967</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-zm"
                          role="option"
                          data-dial-code={260}
                          data-country-code="zm"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__zm" />
                          </div>
                          <span className="iti__country-name">Zambia</span>
                          <span className="iti__dial-code">+260</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-zw"
                          role="option"
                          data-dial-code={263}
                          data-country-code="zw"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__zw" />
                          </div>
                          <span className="iti__country-name">Zimbabwe</span>
                          <span className="iti__dial-code">+263</span>
                        </li>
                        <li
                          className="iti__country iti__standard"
                          tabIndex={-1}
                          id="iti-0__item-ax"
                          role="option"
                          data-dial-code={358}
                          data-country-code="ax"
                          aria-selected="false"
                        >
                          <div className="iti__flag-box">
                            <div className="iti__flag iti__ax" />
                          </div>
                          <span className="iti__country-name">
                            Åland Islands
                          </span>
                          <span className="iti__dial-code">+358</span>
                        </li>
                      </ul>
                    </div>
                    <input
                      id="inputPhoneNumber"
                      className="form-control w-100"
                      type="number"
                      autoComplete="off"
                      placeholder="(201) 555-0123"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <label className="label" htmlFor="pAddress">
                    Present Address*
                  </label>
                  <input id="pAddress" className="form-control" type="text" />
                </div>
                <div className="col-md-4">
                  <label className="label" htmlFor="stateName">
                    State*
                  </label>
                  <input id="stateName" className="form-control" type="text" />
                </div>
                <div className="col-md-4">
                  <label className="label" htmlFor="cityName">
                    City*
                  </label>
                  <input id="cityName" className="form-control" type="text" />
                </div>
                <div className="col-md-4">
                  <label className="label" htmlFor="zipCode">
                    Postal / Zip Code*
                  </label>
                  <input id="zipCode" className="form-control" type="number" />
                </div>
              </div>
              <div className="row mt-60">
                <div className="col-md-12">
                  <div className="nav-btn d-flex flex-wrap justify-content-between">
                    <a
                      href="loan-details.html"
                      className=" prev-btn theme-btn-primary_alt theme-btn"
                    >
                      <i className="arrow_left" />
                      previous
                    </a>
                    <button
                      type="submit"
                      className=" next-btn theme-btn-primary_alt theme-btn "
                    >
                      next
                      <i className="arrow_right" />
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
  )
}

export default personalDetails