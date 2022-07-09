import * as React from "react"
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate} from "react-router-dom"
import "./LoginForm.css"
import apiClient from "../../services/apiClient"

export default function LoginForm({ user, setUser }) {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [input, setInput] = useState({
        email: "",
        password: "",
    })
    useEffect(() => {
    // if user is already logged in,
    // redirect them to the home page
    if (user?.email) {
      navigate("/")
    }
  }, [user, navigate])
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

    const handleOnSubmit = async (e) => {
      e.preventDefault()
      setIsLoading(true)
      setErrors((e) => ({ ...e, input: null }))

      const { data, error } = await apiClient.loginUser( { email : input.email, password: input.password })
      if (error) setErrors((e) => ({ ...e, input: error }))
      if (data?.user) {
        setUser(data.user)
        apiClient.setToken(data.token)
      }
      setIsLoading(false)
      // try {
      //   const res = await axios.post(`http://localhost:3001/auth/login`, input)
      //   if (res?.data?.user) {
      //     setUser(res.data.user)
      //     setIsLoading(false)
      //     navigate("/")
      //   } else {
      //     setErrors((e) => ({ ...e, input: "Invalid username/password combination" }))
      //     setIsLoading(false)
      //   }
      // } catch (err) {
      //   console.log(err)
      //   const message = err?.response?.data?.error?.message
      //   setErrors((e) => ({ ...e, input: message ? String(message) : String(err) }))
      //   setIsLoading(false)
      // }
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

           <button className="submit-login" onClick={handleOnSubmit} >Login</button>
           <div className="footer">
            <p>
              Don't have an account? Sign up <Link to="/register">here</Link>
            </p>
          </div>
        </div>
    )
}