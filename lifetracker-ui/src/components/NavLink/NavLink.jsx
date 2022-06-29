import * as React from "react"
import { BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom"
import "./NavLinks.css"

export default function NavLinks() {
    return (
        <nav className="nav-links">
            <Link to ="/activity">Activity</Link>
            <Link to ="/exercise">Exercise</Link>
            <Link to ="/nutrition">Nutrition</Link>
            <Link to ="/sleep">Sleep</Link>
            <Link to ="/login">
                <button className="btn ghost">Login</button>
            </Link><Link to ="/register">
                <button className="btn primary">Sign Up</button>
            </Link>

        </nav>
    )
}