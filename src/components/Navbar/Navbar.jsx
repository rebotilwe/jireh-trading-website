import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner">

        {/* Logo */}
        <Link to="/" className="brand" onClick={closeMenu}>
          <img
            src={logo}
            alt="Jireh Trading Group Logo"
            className="brand-logo"
          />

          <div className="brand-text">
            <span className="brand-name">Jireh Trading Group</span>
            <span className="brand-tagline">Since 2019</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <ul className="nav-links">

            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about">
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/transport">
                Services
              </NavLink>
            </li>


           

            <li>
              <NavLink to="/contact" className="nav-cta">
                Get Started
              </NavLink>
            </li>

          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>

      </div>

      {/* Mobile Navigation */}
      <nav className={`nav-mobile ${open ? "show" : ""}`}>
        <ul>

          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>
          </li>

       


          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Get Started
            </NavLink>
          </li>

        </ul>
      </nav>

    </header>
  );
};

export default Navbar;
