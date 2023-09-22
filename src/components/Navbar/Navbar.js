import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Mohan</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
              className="link"
            >
              <li>Home</li>
            </Link>
            <Link className="link" spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link className="link" spy={true} to="Experience" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link className="link" spy={true} to="Portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>
            <Link className="link" spy={true} to="Testimonials" smooth={true}>
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link className="link" spy={true} to="Contact" smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
