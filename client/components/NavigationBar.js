import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav className="navbar navbar-expand-md">
      <a className="navbar-brand" href="#">Red Dice</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>
        </ul>
        <ul className="navbar-nav navbar-right">
          <li className="nav-item">
            <Link to="/signup" className="nav-link">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
