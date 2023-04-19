import React, { useState, useContext, useEffect } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
} from 'src/firebase.utils';
import './authentication.css';
import { useNavigate } from 'react-router';
import { UserContext } from 'src/contexts/user.context';

export default function Authentication() {
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    // signInAuthUserWithEmailAndPassword('admin@gmail.com', 'admin123');
    if (currentUser) {
      navigate('/dashboard');
    }
  }, []);

  const handleSignIn = (event) => {
    event.preventDefault();
    // console.log(email);
    const { user } = signInAuthUserWithEmailAndPassword(emailField, passwordField);
    if (user) {
      navigate('/dashboard');
    }
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <div className="container">
          <h1>Admin Login</h1>
          <label htmlFor="email">
            <b>Username</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            value={emailField}
            onChange={(e) => setEmailField(e.target.value)}
            name="email"
            required
          />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            onChange={(e) => setPasswordField(e.target.value)}
            type="password"
            value={passwordField}
            placeholder="Enter Password"
            name="password"
            required
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}