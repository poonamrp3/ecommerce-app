import React from "react"; 
import logo from '../assets/bag.jpg'
const Header = () => {
   return (
    <header>
        <img src={logo} style={styles.logo} />
        <h1>Hello, there!</h1>
    </header>
   );
}

const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#282c34',
      padding: '10px',
      color: 'white'
    },
    logo: {
      height: '50px',
      marginRight: '20px'
    }
  };
  
export default Header;