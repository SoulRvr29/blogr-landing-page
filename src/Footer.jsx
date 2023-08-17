import logo from "./assets/logo.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <img src={logo} title="logo"></img>
        <ul>
          <h4>Product</h4>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Itegrations</li>
        </ul>
        <ul>
          <h4>Company</h4>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
        <ul>
          <h4>Connect</h4>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>LinkedIn</li>
        </ul>
      </footer>
      <div className="my-footer">
        Challenge by
        <a
          href="https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://www.frontendmentor.io/profile/SoulRvr29">
          Paweł Chudecki
        </a>
        .
      </div>
    </>
  );
};

export default Footer;
