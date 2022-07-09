import * as React from "react"
import {Link} from "react-router-dom"
import NutritionFeed from "components/NutritionFeed/NutritionFeed";

export default function NutritionOverview(props) {
    return (
        <div className="NutritionOverview">
            <NutritionFeed user={props.user} fruit={props.fruit}></NutritionFeed>
            {/* <NutritionFeed user = {props.user} fruit={props.fruit}/> */}
        </div>
    )
}