import * as React from "react"
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import "./Navbar.css"
import NavLink from "../NavLink/NavLink"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img
                        src="http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg"
                        alt="codepath-logo"
                    />
                </Link>
            </div>
                <NavLink/>
        </nav>
    )
}