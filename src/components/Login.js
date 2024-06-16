import React, {useState} from "react"; 
import { useNavigate } from "react-router-dom";

const Login = ({onLogin}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // Over here on handleSubmit the request will be done to API which will fetch the data from database 
    // If API is returning data, means user exists Otherwise asks user to create account 
    // This is the future requirement 
    const userData = [
        {id: 1, username:"username", password:"password", email:"email"}
    ];
    const userRequest= (username, password)=>{
        return userData;
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const users = userRequest(username, password)
        if(users.length === 1){
            onLogin(username);
            navigate("/");
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit">Login</button>
            </form>
            </div>
      
    );
};
export default Login;