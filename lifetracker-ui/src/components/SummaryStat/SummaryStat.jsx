import * as React from "react"
import { useNavigate } from "react-router-dom"
import AccessForbidden from "../AccessForbidden/AccessForbidden"
import "./SummaryStat.css"

export default function SummaryStat(props) {
        return (
            <div className="summary-stat">
                <div className="main">
                <div className="SummaryStat large gold">
                    <div className="background">
                        <p>Total Nutrition Per Day</p>
                        <h1 className="date">Date:{props.date}</h1>
                        <h1 className="sum">sum: {props.sum}</h1>
                    </div>
                    
                </div>
                <div className="SummaryStat large purple">
                    <div className="background">
                        <p>Average Nutrition Per Category</p>
                        <h1 className="category">Category: {props.category}</h1>
                        <h1 className="avg">Avg: {props.avg}</h1>
                    </div>
                </div>
                </div>
                {/* <div>
                <p className="category">Category: {props.category}</p>
                <p className="avg">Avg: {props.avg}</p>
                </div> */}
            </div>
            
        )
    
}