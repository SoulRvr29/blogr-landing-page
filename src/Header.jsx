import logo from "./assets/logo.svg";
import menu from "./assets/icon-hamburger.svg";
import close from "./assets/icon-close.svg";
import bkgMobile from "./assets/bg-pattern-intro-mobile.svg";
import bkgDesktop from "./assets/bg-pattern-intro-desktop.svg";
import { useState } from "react";

const Header = () => {
  const [menuList, toggleMenuList] = useState(false);
  const [productList, toggleProductList] = useState(false);
  const [companyList, toggleCompanyList] = useState(false);
  const [connectList, toggleConnectList] = useState(false);

  const listBtnHandler = () => {
    toggleMenuList((menuList) => (menuList = !menuList));
  };

  return (
    <header>
      <img className="bkg-mobile" src={bkgMobile} title="background"></img>
      <img className="bkg-desktop" src={bkgDesktop} title="background"></img>
      <nav>
        <img src={logo} title="logo"></img>{" "}
        <img
          src={menuList == false ? menu : close}
          className="list-button"
          onClick={listBtnHandler}
          alt="menu"
        />
      </nav>
      <div className="bkg"></div>
      <section>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="header-btn">
          <button>Start for Free</button>
          <button>Learn More</button>
        </div>
      </section>
      <div className="list-container">
        <div className={menuList == true ? "nav-list" : "nav-list hide"}>
          <ul>
            <li>
              <h4
                onClick={() => {
                  toggleProductList(!productList);
                  toggleCompanyList(false);
                  toggleConnectList(false);
                }}
              >
                Product
                <svg
                  style={
                    productList == true
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                  className="arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="7"
                >
                  <path
                    fill="none"
                    stroke="#FF7B86"
                    stroke-width="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </h4>
              {productList && (
                <ol>
                  <li>Overview</li>
                  <li>Pricing</li>
                  <li>Marketplace</li>
                  <li>Features</li>
                  <li>Itegrations</li>
                </ol>
              )}
            </li>

            <li>
              <h4
                onClick={() => {
                  toggleProductList(false);
                  toggleCompanyList(!companyList);
                  toggleConnectList(false);
                }}
              >
                Company{" "}
                <svg
                  style={
                    companyList == true
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                  className="arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="7"
                >
                  <path
                    fill="none"
                    stroke="#FF7B86"
                    stroke-width="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </h4>
              {companyList && (
                <ol>
                  <li>About</li>
                  <li>Team</li>
                  <li>Blog</li>
                  <li>Careers</li>
                </ol>
              )}
            </li>
            <li>
              <h4
                onClick={() => {
                  toggleProductList(false);
                  toggleCompanyList(false);
                  toggleConnectList(!connectList);
                }}
              >
                Connect{" "}
                <svg
                  style={
                    connectList == true
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                  className="arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="7"
                >
                  <path
                    fill="none"
                    stroke="#FF7B86"
                    stroke-width="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </h4>
              {connectList && (
                <ol>
                  <li>Contact</li>
                  <li>Newsletter</li>
                  <li>LinkedIn</li>
                </ol>
              )}
            </li>
          </ul>
          <div className="login-section">
            <button className="login">Login</button>
            <button className="sign-up">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
