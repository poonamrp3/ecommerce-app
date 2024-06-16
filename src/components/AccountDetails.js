import { useNavigate } from "react-router-dom";

const AccountDetails = ({username, handleLogout}) => {
    const navigate = useNavigate();
    const logout = () => {
        handleLogout();
        alert("Logged out!");
        navigate("/");
    }

    return(
        <div className='account-details'>
            <h2>Account Details</h2>
            <p>Name: {username}</p>
            <p>Email</p>
            <div>
            <button onClick={logout} style={styles.logoutButton}>Logout</button>
            </div>
        </div>
    );
};

const styles ={
    logoutButton:{
        backgroundColor:'#61dafb',
        color:'#23409c',
        padding:'10px 20px',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
        border:'none',
        cursor:'pointer'          
      },
}
export default AccountDetails;