import * as React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import LandingPage from "../LandingPage/LandingPage"
import LoginPage from "../LoginPage/LoginPage"
import RegistrationPage from "../RegistrationPage/RegistrationPage"
import ActivityPage from "../ActivityPage/ActivityPage"
import NutritionPage from "../NutritionPage/NutritionPage"
import NotFound from "../NotFound/NotFound"
import "./App.css"

export default function App() {
  const [appState, setAppState] = React.useState({})

  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path ="/" element={<LandingPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegistrationPage/>}/>
            <Route path="/activity" element={<ActivityPage/>}/>
            <Route path="/nutrition/*" element={<NutritionPage/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}
