import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { TbBrandReact } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="navbar">
      <TbBrandReact className="navbar-logo" size={33} />
      <p className='RA'>React App</p>
      <ul className="nav-links">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="link">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

