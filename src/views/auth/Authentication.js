import React, { useState, useContext, useEffect } from 'react'
import { createAuthUserWithEmailAndPassword, signInAuthUserWithEmailAndPassword } from 'src/firebase.utils';
import './authentication.css'
import { useNavigate } from 'react-router';
import { UserContext } from 'src/contexts/user.context';
const defaultFields = {
    email: "",
    password: ""
}

export default function Authentication() {
    const [formFields, setFormFields] = useState(defaultFields);
    const {email,password} = formFields;
    const navigate = useNavigate()
    const {currentUser} = useContext(UserContext)

    useEffect(()=> {
        // signInAuthUserWithEmailAndPassword("admin@gmail.com", "admin123")
        if (currentUser) {
            navigate("/dashboard")
        }
    }, [])

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({ ...defaultFields, [name]: value });
    }

    const handleSignIn = (event) => {
        console.log(email)
        event.preventDefault();
        const {user} = signInAuthUserWithEmailAndPassword(email,password);
        if (user) {
            navigate("/dashboard")
        }
    }

  return (
    <div>
    <form onSubmit={handleSignIn} >
      <div className="container">
        <h1>Admin Login</h1>
        <label htmlFor="email"><b>Username</b></label>
        <input type="email" placeholder="Enter Username" onChange={handleChange} name="email" required />
        <label htmlFor="password"><b>Password</b></label>
        <input
        onChange={handleChange}
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />
        <button type="submit">Login</button>
      </div>
    </form>
    </div>
  )
}
