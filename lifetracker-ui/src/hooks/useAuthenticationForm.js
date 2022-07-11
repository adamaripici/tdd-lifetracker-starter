import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom"

export const useAuthenticationForm = ({user}) => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
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
    
    return {
        input,
        errors,
        setErrors,
        handleOnInputChange
    }
}