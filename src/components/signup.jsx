import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { isAdminContext } from '../context/isAdmin';
import '../css/signup.css'; // Import the CSS file

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  
  const navigate = useNavigate();
  const { isAdmin, toggleAdmin } = useContext(isAdminContext); 

  async function pushData() {
    
    let obj = {
      user: userName,
      pass: pass,
      admin: isAdmin 
    };

    let res = await fetch('http://localhost:3000/user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    });

    if (res.ok) {
      let data = await res.json();
      alert("SignUp successful");
      navigate('/Login');
    } else {
      alert("SignUp failed");
    }
  
  }

  return (
    <div className="sign-up-container">
      <h1>Sign Up</h1>
      <input
        type='text'
        placeholder='UserName'
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        onChange={(e) => setPass(e.target.value)}
      />
      <label>
        <input
          type="radio"
          checked={isAdmin} 
          onChange={() => toggleAdmin()} 
        />
        Admin
      </label>
      <button onClick={pushData}>Submit</button>
      <p>Already have an account? <Link to="/Login">Login</Link></p>
    </div>
  );
}

export default SignUp;
