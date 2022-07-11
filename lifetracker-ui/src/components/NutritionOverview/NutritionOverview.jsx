import * as React from "react"
import {Link} from "react-router-dom"
import NutritionFeed from "components/NutritionFeed/NutritionFeed";
import "./NutritionOverview.css"

export default function NutritionOverview(props) {
    return (
        <div className="nutrition-overview">
            <Link className="nutrition-btn" to="/nutrition/create">Record Nutrition</Link>
            <h3 className="header">Overview</h3>
            <NutritionFeed user={props.user} fruit={props.fruit}></NutritionFeed>
            {/* <NutritionFeed user = {props.user} fruit={props.fruit}/> */}
        </div>
    )
}