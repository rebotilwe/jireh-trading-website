import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/logo.png"; // adjust the path & filename

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* Logo / Brand */}
        <Link to="/" className="brand">
          <img src={logo} alt="Jireh Trading Group Logo" className="brand-logo" />
          <div className="brand-text">
            <span className="brand-name">Jireh Trading Group</span>
            <span className="brand-tagline">Since 2019</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="nav-desktop">
          <ul className="nav-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/transport">Transport</NavLink></li>
            <li><NavLink to="/app">App</NavLink></li>
            <li><NavLink to="/collaborate">Collaborate</NavLink></li>
            <li><NavLink to="/contact" className="nav-cta">Contact</NavLink></li>
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <nav className={`nav-mobile ${open ? "show" : ""}`}>
        <ul>
          <li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
          <li><NavLink to="/products" onClick={() => setOpen(false)}>Products</NavLink></li>
          <li><NavLink to="/transport" onClick={() => setOpen(false)}>Transport</NavLink></li>
          <li><NavLink to="/app" onClick={() => setOpen(false)}>App</NavLink></li>
          <li><NavLink to="/collaborate" onClick={() => setOpen(false)}>Collaborate</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
