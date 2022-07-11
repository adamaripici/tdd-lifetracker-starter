import * as React from "react"
import { useNavigate, Link} from "react-router-dom"
import "./ActivityPage.css"
import AccessForbidden from "../AccessForbidden/AccessForbidden"
import ActivityFeed from "components/ActivityFeed/ActivityFeed"

export default function ActivityPage({ user, setAppState }) {
        return (
            <div className="activity-page">
                <h2>Activity Feed</h2>
                <ActivityFeed user={user}/>
            </div>
        )
}
