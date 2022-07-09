import * as React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import apiClient from "../services/apiClient"

export const useRegistrationForm = ({user, setUser}) => {
    const navigate = useNavigate()
    const [errors, setErrors] = React.useState({})
    const [isLoading, setIsLoading] = React.useState(false)
    const [input, setInput] = React.useState({
        email: "",
        username: "",
        firstname: "",
        lastname: "",
        password: "",
        passwordConfirm: "",
    })

    useEffect(() => {
      // if user is already logged in,
      // redirect them to the home page
      if (user?.email) {
        navigate("/")
      }
    }, [user, navigate])

    const handleOnInputChange = (event) => {
        if (event.target.name === "password") {
            if (input.passwordConfirm && input.passwordConfirm !== event.target.value) {
              setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
            } else {
              setErrors((e) => ({ ...e, passwordConfirm: null }))
            }
          }
        if (event.target.name === "passwordConfirm") {
            if (input.password && input.password !== event.target.value) {
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
    const handleOnSubmit = async (event) => {
      event.preventDefault()
      setIsLoading(true)
      setErrors((e) => ({ ...e, input: null }))
  
      if (input.passwordConfirm !== input.password) {
        setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }))
        setIsLoading(false)
        return
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }))
      }
      
      const { data, error } = await apiClient.signupUser( { email : input.email, 
        password: input.password, username: input.username, firstname: input.firstname, lastname: input.lastname})
      if (error) setErrors((e) => ({ ...e, input: error }))
      if (data?.user) {
        setUser(data.user)
        apiClient.setToken(data.token)
      }
      setIsLoading(false)
    }
    return {
        isLoading,
        input,
        errors,
        isLoading,
        handleOnInputChange,
        handleOnSubmit,
    }
}