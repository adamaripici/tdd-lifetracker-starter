import * as React from "react"
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import LandingPage from "../LandingPage/LandingPage"
import LoginPage from "../LoginPage/LoginPage"
import RegistrationPage from "../RegistrationPage/RegistrationPage"
import ActivityPage from "../ActivityPage/ActivityPage"
import NutritionPage from "../NutritionPage/NutritionPage"
import NotFound from "../NotFound/NotFound"
import { AuthContextProvider, useAuthContext } from "../../contexts/auth"
import Sleep from "../Sleep/Sleep"
import apiClient from "../../services/apiClient"
import "./App.css"

export default function AppContainter() {
  return (
    <AuthContextProvider>
      <App/>
    </AuthContextProvider>
  )
}

function App() {
  const {user, setUser} = useAuthContext()
  const [error, setError] = useState()
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchUser = async () => {
      const { data, err } = await apiClient.fetchUserFromToken()
      console.log(76,data)
      if (data) setUser(data.user)
      if(error) setError(err)

    }

    const token = localStorage.getItem("token")
    if (token) {
      apiClient.setToken(token)
      fetchUser()
    }
  }, [])
  const addPost = (newPost) => {
    setPosts((oldPosts) => [newPost, ...oldPosts])
  }
  const handleLogout = async () => {
    await apiClient.logoutUser()
    setUser({})
    setError(null)
  }


  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
        <Navbar user={user} setUser={setUser} handleLogout={handleLogout}/>
          <Routes>
            <Route path ="/" element={<LandingPage/>}/>
            <Route path="/login" element={<LoginPage user={user} setUser={setUser} />}/>
            <Route path="/register" element={<RegistrationPage user={user} setUser={setUser} />}/>
            <Route path="/activity" element={user?.email ? (<ActivityPage/>) : (<NotFound/>)}/>
            <Route path="/nutrition/*" element={user?.email ? (<NutritionPage user={user} addPost={addPost}/>) : (<NotFound/>)}/>
            
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}
