import logo from "./assets/logo.svg";
import menu from "./assets/icon-hamburger.svg";
import bkgMobile from "./assets/bg-pattern-intro-mobile.svg";
import bkgDesktop from "./assets/bg-pattern-intro-desktop.svg";

const Header = () => {
  return (
    <header>
      <img className="bkg-mobile" src={bkgMobile} title="background"></img>
      <img className="bkg-desktop" src={bkgDesktop} title="background"></img>
      <nav>
        <img src={logo} title="logo"></img> <img src={menu} alt="menu" />
      </nav>
      <section>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="header-btn">
          <button>Start for Free</button>
          <button>Learn More</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
