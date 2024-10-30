import React, { useState } from 'react';
import '../styles/signup.css'; // Đảm bảo import đúng file CSS

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(), // Sử dụng thời gian làm ID duy nhất
      username,
      password,
      email,
    };

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        setMessage('User registered successfully!');
        setUsername('');
        setPassword('');
        setEmail('');
      } else {
        setMessage('Failed to register user.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error occurred while registering user.');
    }
  };

  return (
    <form onSubmit={handleRegister} className="register-form"> {/* Áp dụng lớp CSS cho form */}
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="form-control" // Lớp CSS cho input
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="form-control" 
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-control"                              
        />
      </div>
      <button type="submit" className="btn btn-primary">Register</button> 
      {message && <p className="message">{message}</p>} 
    </form>
  );
};

export default Register;
