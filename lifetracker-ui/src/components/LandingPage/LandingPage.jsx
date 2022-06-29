import * as React from "react"
import "./LandingPage.css"

export default function LandingPage() {
    return (
        <div className="landing-page">
            <div className="hero">
                <img classname="hero-img" src="http://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg"/>
                <h1>Life Tracker</h1>
                <p>Helping you take control of your world</p>
            </div>
        </div>
    )
}