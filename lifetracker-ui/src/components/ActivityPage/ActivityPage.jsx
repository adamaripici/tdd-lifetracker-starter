import * as React from "react"
import { useNavigate } from "react-router-dom"
import "./ActivityPage.css"
import AccessForbidden from "../AccessForbidden/AccessForbidden"

export default function ActivityPage({ user, setAppState }) {
    const navigate = useNavigate()
    const isAuthenticated = Boolean(user?.email)

    const handleOnLogout = () => {
        setAppState({})
        navigate("/")
    }
    const button = isAuthenticated ? (
        <button className="btn primary" onClick={handleOnLogout}>
          Logout
        </button>
      ) : (
        <Link to="/login">
          <button className="btn primary">Login</button>
        </Link>
      )
    if (isAuthenticated) {
        return (
            <div className="activity-page">
                <div className="content">
                    <div className="nav-links">{button}</div>
                    <div className="actions">
                        <h2 className="heading">Activity Feed</h2>
                        <div className="buttons">
                            <button className="Button outline small outline gold">Add Exercise</button>
                            <button className="Button outline small outline blue">Log Sleep</button>
                            <button className="Button outline small outline aqua">Record Nutrion</button>
                        </div>
                    </div>
                    <div className="stats">
                        <div className="summaryStat gold">
                            <div className="background">
                                <p>Total Exercise Minutes</p>
                            </div>
                        </div>
                        <div className="summaryStat purple">
                            <div className="background">
                                <p>Avg Sleep Hours</p>
                            </div>
                        </div>
                        <div className="summaryStat aqua">
                            <div className="background">
                                <p>Avg Daily</p>
                            </div>
                        </div>
                    </div>
                </div>
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