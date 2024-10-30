import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Static Pages</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pages/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pages/contacts">Contacts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pages/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pages/team">Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pages/divisions">Divisions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pages/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;