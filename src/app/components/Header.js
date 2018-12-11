import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/posts" className="nav-link">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
