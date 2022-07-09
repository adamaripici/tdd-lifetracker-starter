import { useState } from "react";
import apiClient from "../services/apiClient"
import {useAuthenticationForm} from "../hooks/useLoginForm"

export const useLoginForm = ({ user, setUser }) => {
    const { input, errors, setErrors, handleOnInputChange} = useAuthenticationForm({user})
    const [isLoading, setIsLoading] = useState(false)

  

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