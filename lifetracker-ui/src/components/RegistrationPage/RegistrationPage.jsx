import * as React from "react"
import RegistrationForm from "../RegistrationForm/RegistrationForm"

import "./RegistrationPage.css"

export default function RegistrationPage({ user, setUser }) {
    return (
        <nav className="registration-page">
            <h2>Register</h2>
            <RegistrationForm user={user} setUser={setUser} />
        </nav>
    )
}