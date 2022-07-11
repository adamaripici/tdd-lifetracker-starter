import * as React from "react"
import "./RegistrationForm.css"
import { Link } from "react-router-dom"
import { useRegistrationForm } from "../../hooks/useRegistrationForm"

export default function RegistrationForm() {
  const {input, errors, isLoading, handleOnInputChange, handleOnSubmit} = useRegistrationForm()
    
    return (
        <div className="registration-form">
            <div className="form-input">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Enter a valid email"
                    value={input.email}
                    
                    onChange={handleOnInputChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
           </div>
            <div className="form-input">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    placeholder="your_username"
                    value={input.username}
                    onChange={handleOnInputChange}
                />
                {errors.username && <span className="error">{errors.username}</span>}
           </div>
            <div className="form-input">
                <label htmlFor="name">First Name</label>
                <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={input.firstname}
                    onChange={handleOnInputChange}
                />
                {errors.firstname && <span className="error">{errors.firstname}</span>}
           </div>
           <div className="form-input">
                <label htmlFor="name">Last Name</label>
                <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={input.lastname}
                    onChange={handleOnInputChange}
                />
                {errors.lastname && <span className="error">{errors.lastname}</span>}
           </div>
           <div className="form-input">
                <label htmlFor="name">Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter a secure password"
                    value={input.password}
                    onChange={handleOnInputChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}
           </div>
           <div className="form-input">
                <label htmlFor="name">Confirm Password</label>
                <input
                    type="password"
                    name="passwordConfirm"
                    placeholder="Confirm your password"
                    value={input.confirmPass}
                    onChange={handleOnInputChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}
           </div>
           <button className="submit-registration" onClick={handleOnSubmit} >Create Account</button>
        </div>
    )
}