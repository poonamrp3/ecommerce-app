import React from "react"; 
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/bag.jpg';
import '../styles.css';

const Header = ({ isLoggedIn, username }) => {
  const navigate = useNavigate();

  const handleLandingPageClick = () => {
     navigate("/");
  }

  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <h1 onClick={handleLandingPageClick} className="clickable-title">Hello, there!</h1>
      <nav className="nav">
        {isLoggedIn ? (
          <>
            <span className="welcome-message">Hello, {username}!</span>
            <Link to="/account-details" className="nav-link">Account</Link>
          </>
        ) : (
          <Link to="/login" className="nav-link">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
