import React, {useState, useEffect} from "react"; 
import { useNavigate } from "react-router-dom";
import "../styles.css";

const Login = ({onLogin}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isValidData, setValidData] = useState(false);
    const navigate = useNavigate();
    // Over here on handleSubmit the request will be done to API which will fetch the data from database 
    // If API is returning data, means user exists Otherwise asks user to create account 
    // This is the future requirement 
    /*const userData = [
        {id: 1, username:"username", password:"password", email:"email"}
    ];*/
    const userRequest= (username, password)=>{
        return [];
    }
    
    useEffect (() => {
        if(username && password){
            setValidData(true);
        } else{
            setValidData(false);
        }
    },[username, password]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsernameError("");
        setPasswordError("");
        if(username === ""){
            setUsernameError("Please enter your username.");
        }

        if(password === ""){
            setPasswordError("Please enter your password.");
        }

        if(isValidData){
            const users = userRequest(username, password)
            if(users.length === 1){
                onLogin(username);
                navigate("/");
            } else{
                alert("User doesn't exist. check your username and password.");
                //navigate("/new-account");
                newAccountNav();
            }
        }
         else {
            alert("Invalid username or password");
        }
    };

    const newAccountNav = () => {
        navigate("/new-account");
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                {usernameError && <p className="error">{usernameError}</p>}
                </div>
                <div className="form-group">
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                {passwordError && <p className="error">{passwordError}</p>}
                </div>
                <button onClick ={handleSubmit} disabled={!isValidData} type="submit">Login</button>  
                <div className="create-account-container">
                    <button className="create-account-button" onClick={newAccountNav}>
                    Create New Account
                    </button>
                </div>   
            </form>  
        </div>
    );
};
export default Login;