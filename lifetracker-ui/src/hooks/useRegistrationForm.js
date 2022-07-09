import * as React from "react"
import apiClient from "../services/apiClient"
import {useAuthenticationForm} from "../hooks/useLoginForm"

export const useRegistrationForm = ({user, setUser}) => {
    const { input, errors, setErrors, handleOnInputChange} = useAuthenticationForm({user})
    const [isLoading, setIsLoading] = React.useState(false)
    
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