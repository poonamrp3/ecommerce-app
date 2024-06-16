import React from "react"; 
import { Link } from "react-router-dom";
import logo from '../assets/bag.jpg';

const Header = ({ isLoggedIn, username }) => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>Hello, there!</h1>
      <nav>
        {isLoggedIn ? (
          <>
            <span>Hello, {username}!</span>
            <Link to="/account-details">Account</Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
