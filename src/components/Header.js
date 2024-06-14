import React from "react"; 
import {Link} from "react-router-dom";
import logo from '../assets/bag.jpg';

const Header = ({isLoggedIn, username}) => {
   return (
    <header style={styles.header}>
      <img src={logo} style={styles.logo} alt="logo"/>
      <h1 style={styles.title}>Hello, there!</h1>
      <nav style={styles.nav}>
        {isLoggedIn ? (
          <>
          <span style={styles.greeting}>Hello, {username}</span>
          <Link to="/account-details" style={styles.accountButton}>Account</Link>
          </>
        ):(
          <Link to="/login" style={styles.loginButton}>Login</Link>
        )}
      </nav>
    </header>
   );
}

const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent:'space-between',
      backgroundColor: '#282c34',
      padding: '10px 20px',
      color: 'white'
    },
    logo: {
      height: '50px',
      marginRight: '20px'
    },
    title:{
      flex:1,
      textAlign:'left'
    },
    nav:{
      marginLeft:'auto'
    },
    loginButton:{
      backgroundColor:'#61dafb',
      color:'#23409c',
      padding:'10px 20px',
      textDecoration: 'none',
      borderRadius: '5px',
      fontWeight: 'bold',
      border:'none',
      cursor:'pointer'
    },
    greeting:{
      marginRight: '10px',
      fontWeight: 'bold'
    },
    accountButton:{
      backgroundColor:'#61dafb',
      color:'#23409c',
      padding:'10px 20px',
      textDecoration:'none',
      borderRadius:'5px',
      fontWeight:'bold',
      border:'none',
      cursor:'pointer'
    }
  };
  
export default Header;