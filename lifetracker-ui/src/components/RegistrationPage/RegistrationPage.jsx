import * as React from "react"
import RegistrationForm from "../RegistrationForm/RegistrationForm"

import "./RegistrationPage.css"

export default function RegistrationPage({setAppState}) {
    return (
        <nav className="registration-page">
            <h2>Register</h2>
            <RegistrationForm setAppState={setAppState}/>
        </nav>
    )
}