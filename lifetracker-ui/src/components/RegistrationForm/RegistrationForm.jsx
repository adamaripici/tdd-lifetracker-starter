import * as React from "react"
import "./RegistrationForm.css"

export default function RegistrationForm({setAppState}) {
    const [errors, setErrors] = React.useState({})
    const [input, setInput] = React.useState({
        email: "",
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirm: "",
    })

    const handleOnInputChange = (event) => {
        if (event.target.name === "password") {
            if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
              setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
            } else {
              setErrors((e) => ({ ...e, passwordConfirm: null }))
            }
          }
        if (event.target.name === "passwordConfirm") {
            if (form.password && form.password !== event.target.value) {
              setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
            } else {
              setErrors((e) => ({ ...e, passwordConfirm: null }))
            }
          }
        if (event.target.name === "email") {
          if (event.target.value.indexOf("@") === -1) {
            setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
          } else {
            setErrors((e) => ({ ...e, email: null }))
          }
        }
    
        setInput((f) => ({ ...f, [event.target.name]: event.target.value }))
    }
    console.log(1,input.email)
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
                    name="firstName"
                    placeholder="First Name"
                    value={input.firstName}
                    onChange={handleOnInputChange}
                />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
           </div>
           <div className="form-input">
                <label htmlFor="name">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={input.lastName}
                    onChange={handleOnInputChange}
                />
                {errors.lastName && <span className="error">{errors.lastName}</span>}
           </div>
           <div className="form-input">
                <label htmlFor="name">Password</label>
                <input
                    type="text"
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
                    type="text"
                    name="passwordConfirm"
                    placeholder="Confirm your password"
                    value={input.passwordConfirm}
                    onChange={handleOnInputChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}
           </div>
           <button className="submit-registration" >Create Account</button>
        </div>
    )
}