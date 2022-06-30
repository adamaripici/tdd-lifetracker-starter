import * as React from "react"
import { useNavigate } from "react-router-dom"
import "./NutritionPage.css"
import AccessForbidden from "../AccessForbidden/AccessForbidden"

export default function NutritionPage({ user, setAppState }) {
    const navigate = useNavigate()
    const isAuthenticated = Boolean(user?.email)

    const handleOnLogout = () => {
        setAppState({})
        navigate("/")
    }
    if (isAuthenticated) {
        return (
            <div className="nutrition-page">
                Nutrition Page
            </div>
        )
    } else {
        return (
            <div>
                <AccessForbidden setAppState={setAppState}/>
            </div>
        )
    }
}