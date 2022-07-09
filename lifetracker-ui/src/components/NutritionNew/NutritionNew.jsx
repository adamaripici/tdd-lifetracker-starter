import * as React from "react"
import "./NutritionNew.css"
import NewPostForm from "components/NewPostForm/NewPostForm";

export default function NutritionOverview(props) {
    return (
        <div className="NutritionOverview">
            <NewPostForm user = {props.user} fruit={props.fruit} setFruit={setFruit}/>
        </div>
    )
}