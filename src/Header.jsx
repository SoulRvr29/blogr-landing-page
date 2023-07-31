import logo from "./assets/logo.svg";
import menu from "./assets/icon-hamburger.svg";

const Header = () => {
  return (
    <header>
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
