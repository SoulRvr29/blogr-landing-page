import logo from "./assets/logo.svg";
import menu from "./assets/icon-hamburger.svg";
import bkgMobile from "./assets/bg-pattern-intro-mobile.svg";
import bkgDesktop from "./assets/bg-pattern-intro-desktop.svg";
import { useState } from "react";

const Header = () => {
  const [listBtn, changeListBtn] = useState(false);
  // const navList = document.querySelector(".nav-list");

  const listBtnHandler = () => {
    changeListBtn((btn) => (btn = !btn));
    // navList.style = d
  };

  return (
    <header>
      <img className="bkg-mobile" src={bkgMobile} title="background"></img>
      <img className="bkg-desktop" src={bkgDesktop} title="background"></img>
      <nav>
        <img
          className="list-button"
          onClick={listBtnHandler}
          src={logo}
          title="logo"
        ></img>{" "}
        <img src={menu} alt="menu" />
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
        <div className="nav-list">
          <ul>
            <li>
              <h4>Product</h4>
              <ol>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Marketplace</li>
                <li>Features</li>
                <li>Itegrations</li>
              </ol>
            </li>
            <li>
              <h4>Company</h4>
              <ol>
                <li>About</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Careers</li>
              </ol>
            </li>
            <li>
              <h4>Connect</h4>
              <ol>
                <li>Contact</li>
                <li>Newsletter</li>
                <li>LinkedIn</li>
              </ol>
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
