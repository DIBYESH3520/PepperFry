import { isAdminContext } from "../context/isAdmin";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../css/login.css'; 

const Login = () => {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();
  const { toggleLogin } = useContext(isAdminContext); 

  async function fetchData() {
    try {
      let res = await fetch("http://localhost:3000/user");
      if (!res.ok) throw new Error('Network response was not ok');
      let data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Error fetching user data. Please try again later.');
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleLogin() {
    const userFound = users.find(
      (user) => user.user === userName && user.pass === pass
    );

    if (userFound) {
      alert("Login successful!");
      toggleLogin(); 
      navigate("/");
    } else {
      alert("You are not signed up");
      navigate("/signup");
    }
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="UserName"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleLogin}>Submit</button>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
