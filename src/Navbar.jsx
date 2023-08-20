import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light ">
      <div className="container">
        <a className="navbar-brand text-light fw-bold " href="#">
          Blockchain Tech
        </a>
        <button
          className="navbar-toggler text-light"
          type="button"
          onClick={handleNav}
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
        <div className={`collapse navbar-collapse ${nav ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/company" className="nav-link text-light">
                Company
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resources" className="nav-link text-light">
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-light">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-light">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
