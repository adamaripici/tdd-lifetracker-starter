import * as React from "react"
import { useState } from "react";
import "./LoginForm.css"

export default function LoginForm() {
    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [input, setInput] = useState({
        email: "",
        password: "",
    })

    const handleOnInputChange = (event) => {
        if (event.target.name === "email") {
          if (event.target.value.indexOf("@") === -1) {
            setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
          } else {
            setErrors((e) => ({ ...e, email: null }))
          }
        }
    
        setInput((f) => ({ ...f, [event.target.name]: event.target.value }))
    }

    // const loginUser = async (event) => {
    //     event.preventDefault()
    //     setIsLoading(true)

    // }

    return (
        <div className="login-form">
           <div className="input-field">
                <label htmlFor="email">Email</label>
                <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="user@gmail.com"
                    value={input.email}
                    onChange={handleOnInputChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
           </div>

           <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                    className="form-input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={input.password}
                    onChange={handleOnInputChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}
           </div>

           <button className="submit-login" >Login</button>
        </div>
    )
}