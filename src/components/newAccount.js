import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewAccount = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", { firstname, lastname, email, username, password });

        // Example: Redirect to home page after form submission
        navigate("/");
    };

    return (
        <div>
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default NewAccount;
