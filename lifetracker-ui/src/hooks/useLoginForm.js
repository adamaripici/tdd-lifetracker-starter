import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom"
import apiClient from "../services/apiClient"

export const useLoginForm = ({ user, setUser }) => {
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
    //   e.preventDefault()
      setIsLoading(true)
      setErrors((e) => ({ ...e, input: null }))

      const { data, error } = await apiClient.loginUser( { email : input.email, password: input.password })
      if (data?.user) {
        setUser(data.user)
        apiClient.setToken(data.token)
      }
      if (error) {
        setErrors((e) => ({ ...e, input: error }))
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